import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs,
  InfoWindow,
} from "react-google-maps"
import React, { useEffect, useState } from "react"

const Map = withScriptjs(
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
  })
)

const CustomMarker = (props) => {
  const [isMarkerOpen, setMarkerIsOpen] = useState(false)
  useEffect(() => {
    console.log("Hello Custom marker with data = ", props.helpRequest)
  }, [])

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
            <span>{props.helpRequest.request_details}</span>
          </div>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default Map
