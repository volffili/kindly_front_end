import React from 'react';
import GoogleMapReact from 'google-map-react';
import {googleMapsAPIKey} from "../GoogleMapsAPIKey";

const SimpleMap = (props) => {

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: googleMapsAPIKey }}
                    defaultCenter={{
                        lat: props.lat,
                        lng: props.lng
                    }}
                    defaultZoom={props.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    };

export default SimpleMap;
