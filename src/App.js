import React from 'react';
import {Table,Button} from 'reactstrap';

function App() {
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
          <tr>
            <td>Tommy</td>
            <td>Luxembourg 15</td>
            <td>+420686686686</td>
            <td><Button color="success" size="sm">View</Button></td>
          </tr>
          
          <tr>
            <td>Filip</td>
            <td>Lisbon 1234</td>
            <td>+420607746666</td>
            <td><Button color="success" size="sm">View</Button></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
