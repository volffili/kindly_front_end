import { withGoogleMap, GoogleMap, Marker, withScriptjs, InfoWindow,  } from "react-google-maps"
import React, {useState} from "react";


const Map = withScriptjs(withGoogleMap((props) => {

        const [isMarkerOpen, setMarkerIsOpen] = useState(false);

        return <GoogleMap
            defaultZoom={13}
            defaultCenter={{lat: 50.0835221, lng: 14.4151229}}
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


export default Map;

