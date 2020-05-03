import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps"
import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom";

const Map =
  withGoogleMap((props) => {
    useEffect(() => {}, [])

    return (
      <GoogleMap
        // Center of Czech Republic
        defaultZoom={7}
        defaultCenter={{ lat: 49.8600624, lng: 15.5860745 }}
      >
        {props.helpRequests.map((request) => (
          <CustomMarker helpRequest={request} />
        ))}
      </GoogleMap>
    )
  });

const CustomMarker = (props) => {
  const [isMarkerOpen, setMarkerIsOpen] = useState(false);
  useEffect(() => {

  }, []);

  return (
    <Marker
      position={{
        lat: parseFloat(props.helpRequest.requester_address_lat),
        lng: parseFloat(props.helpRequest.requester_address_lng),
      }}
      onClick={() => setMarkerIsOpen(!isMarkerOpen)}
    >
      {isMarkerOpen && (
        <InfoWindow options={{ closeBoxURL: ``, enableEventPropagation: true }}>
          <div>
            <h3>{props.helpRequest.request_topic}</h3>
            <h5>{props.helpRequest.request_details}</h5>
            <h6>Více informaci <Link to={`/details/${props.helpRequest.request_id}`} target="_blank">zde</Link></h6>
          </div>
        </InfoWindow>
      )}
    </Marker>
  )
};

export default Map
