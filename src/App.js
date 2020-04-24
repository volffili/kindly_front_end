import React, {useState, useEffect} from 'react'
import {Table} from 'reactstrap'
import axios from 'axios'
import HelpSummary from './components/HelpSummary'
import AskHelp from './components/AskHelp'
import {baseUrl} from './Url'
import MyMapComponent from "./components/AnotherMap"
import {googleMapsAPIKey} from "./GoogleMapsAPIKey";

function App() {

  const [helpAsks,setHelpAsks] = useState([])

  useEffect(() => {
    axios.get(baseUrl,{ 
      params: { api_name:"get_all_help_requests"}
    })
    .then(res=> { setHelpAsks(res.data.result) })  
    .catch(err => console.error(err))
  }, []);

  return (
    <div className="App container">
      <AskHelp/>
        <MyMapComponent
            isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMapsAPIKey}&libraries=places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {helpAsks.map(ask=><HelpSummary
            key={ask.request_id}
            topic={ask.request_topic}
            address={ask.requester_address}
          />)}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
