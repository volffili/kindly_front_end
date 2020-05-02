import { withGoogleMap, GoogleMap, Marker, withScriptjs, InfoWindow,  } from "react-google-maps"
import React, {useState} from "react";


const Map = withScriptjs(withGoogleMap((props) => {

        const [isMarkerOpen, setMarkerIsOpen] = useState(false);


        return <GoogleMap
            // Center of Czech Republic
            defaultZoom={7}
            defaultCenter={{lat: 49.8600624, lng: 15.5860745}}
        >
            <Marker
                position={{lat: 50.086799, lng: 14.3780078}}
                onClick={() => setMarkerIsOpen(!isMarkerOpen) }
            >
                {isMarkerOpen && <InfoWindow
                    options={{closeBoxURL: ``, enableEventPropagation: true}}
                >
                    <div style={{backgroundColor: `yellow`, opacity: 0.75, padding: `12px`}}>
                        <div style={{fontSize: `16px`, fontColor: `#08233B`}}>
                            Ahoj Filipe!
                        </div>
                    </div>
                </InfoWindow>}
            </Marker>
        </GoogleMap>
    }
));

const CustomMarker = (helpRequest) => {

    const [isMarkerOpen, setMarkerIsOpen] = useState(false);

    return (
        <Marker
            position={{lat: 50.086799, lng: 14.3780078}}
            onClick={() => setMarkerIsOpen(!isMarkerOpen) }
        >
            {isMarkerOpen && <InfoWindow
                options={{closeBoxURL: ``, enableEventPropagation: true}}
            >
                <div style={{backgroundColor: `yellow`, opacity: 0.75, padding: `12px`}}>
                    <div style={{fontSize: `16px`, fontColor: `#08233B`}}>
                        Ahoj Filipe!
                    </div>
                </div>
            </InfoWindow>}
        </Marker>
    )
};


export default Map;

