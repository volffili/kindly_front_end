import { withGoogleMap, GoogleMap, Marker, withScriptjs } from "react-google-maps"
import React from "react";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: 50.0835221, lng: 14.4151229 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: 50.0835221, lng: 14.4151229 }} />}
        </GoogleMap>
    ));


export default MyMapComponent;

