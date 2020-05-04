import React, {useEffect, useState} from "react"
import axios from "axios";
import {baseUrl} from "../Url";
import ReactLoading from "react-loading";
import Map from "./Map";

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
      <div>
        <Map
          zoom={12}
          center={{ lat: parseFloat(helpRequest.requester_address_lat), lng: parseFloat(helpRequest.requester_address_lng) }}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          helpRequests={[helpRequest]}
        />
      </div>
      
    }
  </div>
}

