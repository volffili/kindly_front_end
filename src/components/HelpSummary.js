import React, {useEffect} from "react"
import { Button } from "reactstrap"
import { useHistory } from 'react-router-dom';

export default (props) => {
  const history = useHistory();

  useEffect(() => {
  }, []);

  const redirectToDetails = () => {
      const url = `/details/${props.helpRequest.request_id}`;
      window.open(url);
  };

  return (
    <tr>
      <td>{new Date(props.helpRequest.request_create_timestamp).toLocaleDateString()}</td>
      <td>{props.helpRequest.request_topic}</td>
      <td>{props.helpRequest.requester_address}</td>
      <td>
        <Button color="success" onClick={redirectToDetails}>
          Více
        </Button>
      </td>
    </tr>
  )


}
