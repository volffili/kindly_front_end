import React, { useEffect } from "react"
import { Button, Card, CardText, CardBody, CardTitle } from "reactstrap"
import styled from "styled-components/macro"

const Description = styled(CardText)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

export default (props) => {
  useEffect(() => {}, [])

  const redirectToDetails = () => {
    const url = `/details/${props.helpRequest.request_id}`
    window.open(url)
  }

  return (
    <Card className="my-3" color="secondary" outline style={{ height: 260 }}>
      <CardBody className="d-flex flex-column">
        <CardTitle>
          <b>{props.helpRequest.request_topic}</b>
        </CardTitle>
        <Description>{props.helpRequest.request_details}</Description>
        <CardText className="text-right mt-auto d-flex flex-row justify-content-between">
          {new Date(props.helpRequest.request_create_timestamp).toLocaleDateString()}
          <Button outline onClick={redirectToDetails}>
            Detail pomoci
          </Button>
        </CardText>
      </CardBody>
    </Card>
  )
}
