import React, { useEffect, useState } from "react"
import axios from "axios"
import { baseUrl } from "../Url"
import Map from "./Map"
import { Button, Row, Col, Card, CardTitle, CardText, CardBody, CardFooter } from "reactstrap"
import PageWrap from "../components/PageWrap"

export default (props) => {
  const [helpRequest, setHelpRequest] = useState(null)
  const [navigationLink, setNavigationLink] = useState("")

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_name: "get_help_request_for_id",
          request_id: props.match.params.request_id,
        },
      })
      .then((res) => {
        let result = res.data.result
        setHelpRequest(result)
        setNavigationLink(
          `https://www.google.com/maps/dir/?api=1&destination=${result.requester_address_lat},${result.requester_address_lng}&travelmode=driving`
        )
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <PageWrap>
      {helpRequest && (
        <>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle>
                    <h3>{helpRequest.request_topic}</h3>
                  </CardTitle>
                  <CardText>{helpRequest.request_details}</CardText>
                  <CardText className="text-right mt-auto d-flex flex-row justify-content-between">
                    {helpRequest.request_create_timestamp &&
                      new Date(helpRequest.request_create_timestamp).toLocaleDateString()}
                    <Button href={navigationLink} target="_blank">
                      Otevřít v navigaci
                    </Button>
                  </CardText>
                </CardBody>
                <CardFooter>
                  {helpRequest.requester_name + ", " + helpRequest.requester_email}
                  {helpRequest.requester_phone_number && ", " + helpRequest.requester_phone_number}
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Map
                zoom={12}
                center={{
                  lat: parseFloat(helpRequest.requester_address_lat),
                  lng: parseFloat(helpRequest.requester_address_lng),
                }}
                containerElement={<div style={{ padding: "20px 0", width: "100%", height: `400px` }} />}
                mapElement={<div style={{ width: "100%", height: `400px` }} />}
                helpRequests={[helpRequest]}
                link={false}
              />
            </Col>
          </Row>
        </>
      )}
    </PageWrap>
  )
}
