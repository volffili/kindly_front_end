import React, {useEffect, useState} from "react"
import axios from "axios";
import {baseUrl} from "../Url";
import ReactLoading from "react-loading";

export default (props) => {
  const [helpRequest, setHelpRequest] = useState(null);
  
  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_name: "get_help_request_for_id",
          request_id: props.match.params.request_id,
        },
      })
      .then((res) => {
        console.log(res);
        setHelpRequest(res.data.result)
      })
      .catch((err) => console.error(err))
  }, []);
  
  return <div>
    {helpRequest === null ?
      <div className="loading-spinner">
        <ReactLoading
          type="spin"
          color="black"
          height={"30%"}
          width={"30%"}
        />
      </div> :
      helpRequest.request_topic
    }
  </div>
}

