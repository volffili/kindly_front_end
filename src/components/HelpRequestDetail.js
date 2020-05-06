import React, {useEffect, useState} from "react"
import axios from "axios";
import {baseUrl} from "../Url";
import ReactLoading from "react-loading";
import Map from "./Map";
import "./style.css"
import {Button} from "reactstrap";

export default (props) => {
  const [helpRequest, setHelpRequest] = useState(null);
  const [navigationLink, setNavigationLink] = useState('');
  
  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_name: "get_help_request_for_id",
          request_id: props.match.params.request_id,
        },
      })
      .then((res) => {
        let result = res.data.result;
        setHelpRequest(result);
        setNavigationLink(`https://www.google.com/maps/dir/?api=1&destination=${result.requester_address_lat},${result.requester_address_lng}&travelmode=driving`)
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
      <div className="wrapper">
        <div className="description">
          <h1>
            {helpRequest.request_topic}
          </h1>
          <h4>
            {helpRequest.request_details}
          </h4>
          <p>{helpRequest.request_description}</p>
          <p>{helpRequest.requester_name ? `Jméno = ${helpRequest.requester_name}` : null}</p>
          <p>{helpRequest.requester_email ? `Email = ${helpRequest.requester_email}` : null}</p>
          <p>{helpRequest.requester_phone_number ? `Telefonní číslo = ${helpRequest.requester_phone_number}` : null}</p>
          <p>{helpRequest.requester_age ? `Věk = ${helpRequest.requester_age}` : null}</p>
          <p>{helpRequest.request_create_timestamp ? `Den zadani = ${new Date(helpRequest.request_create_timestamp).toLocaleDateString()}` : null}</p>
          
        
        </div>
        <div className="map" style={{
          width: '80%',
          float: 'left'
        }}>
          <Map
            zoom={12}
            center={{ lat: parseFloat(helpRequest.requester_address_lat), lng: parseFloat(helpRequest.requester_address_lng) }}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            helpRequests={[helpRequest]}
            link={false}
          />
          
          <a href={navigationLink} target="_blank">
            <Button color="primary" style={{
              width: '40%',
              marginLeft: '30%',
              marginTop: '30px'
            }}>
              Otevřít v navigaci
            </Button>
          </a>
          
          
        </div>
      </div>
    }
  </div>
}

