import React, {useState, useEffect} from 'react'
import {Table} from 'reactstrap'
import axios from 'axios'
import HelpSummary from './components/HelpSummary'

function App() {

  const baseUrl = "https://nnajnotk8l.execute-api.eu-west-1.amazonaws.com/TEST/neighbourhoodHelpBackendPython"

  const [helpAsks,setHelpAsks] = useState([])

  useEffect(() => {
    axios.get(baseUrl+"?api_name=get_all_help_requests")
    .then(res=> { setHelpAsks(res.data.result) })  
    .catch(err => console.error(err))
  }, []);

  return (
    <div className="App container">
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
