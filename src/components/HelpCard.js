import React, { useEffect } from "react"
import { Button, Card, CardText, CardBody, CardHeader, CardFooter } from "reactstrap"

export default (props) => {
  useEffect(() => {}, [])

  const redirectToDetails = () => {
    const url = `/details/${props.helpRequest.request_id}`
    window.open(url)
  }

  return (
    <Card className="my-3">
      <CardHeader>{props.helpRequest.request_topic}</CardHeader>
      <CardBody>
        <CardText>{new Date(props.helpRequest.request_create_timestamp).toLocaleDateString()}</CardText>
        <CardText>{props.helpRequest.requester_address}</CardText>
      </CardBody>
      <CardFooter>
        <Button color="dark" onClick={redirectToDetails}>
          Pomoct
        </Button>
      </CardFooter>
    </Card>
  )
}
