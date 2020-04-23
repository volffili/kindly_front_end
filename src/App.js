import React, {useState, useEffect} from 'react'
import {Table} from 'reactstrap'
import axios from 'axios'
import HelpSummary from './components/HelpSummary'
import AskHelp from './components/AskHelp'
import {baseUrl} from './Url'
import SimpleMap from "./components/SimpleMap";

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
      <SimpleMap zoom={13} lat={50.0835221} lng={14.4151229}/>
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
