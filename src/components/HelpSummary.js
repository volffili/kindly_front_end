import React, {useEffect} from "react"
import { Button } from "reactstrap"

export default (props) => {

  useEffect(() => {
  }, []);


  return (
    <tr>
      <td>{new Date(props.helpRequest.request_create_timestamp).toLocaleDateString()}</td>
      <td>{props.helpRequest.request_topic}</td>
      <td>{props.helpRequest.requester_address}</td>
      <td>
        <Button color="success" size="sm">
          Více
        </Button>
      </td>
    </tr>
  )


}
