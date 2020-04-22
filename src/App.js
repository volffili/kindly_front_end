import React, {useState, useEffect} from 'react'
import {Table} from 'reactstrap'
import axios from 'axios'
import SummaryLine from './components/SummaryLine'

function App() {

  const GET_ALL = "https://nnajnotk8l.execute-api.eu-west-1.amazonaws.com/TEST/neighbourhoodHelpBackendPython?api_name=get_all_help_requests"

  const [state,setState] = useState({})

  useEffect(() => {
    axios.get(GET_ALL).then(res=>{
      console.log(res)
    })
  }, []);

  return (
    <div className="App container">
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <SummaryLine name="Tommy" phone="+420 606 606 445" address="Luxembourg 56"/>
          <SummaryLine name="Filip" phone="+420 342 124 234" address="Portugal 666"/>
          <SummaryLine name="Morgan Freeman" phone="(415) 555-2671" address="3th Street. 47 W 13th St, New York, NY 10011, USA"/>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
