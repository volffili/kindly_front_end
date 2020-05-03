import React, { useState, useEffect } from "react"
import { Table } from "reactstrap"
import axios from "axios"
import HelpSummary from "../components/HelpSummary"
import { baseUrl } from "../Url"
import Map from "../components/Map"
import { googleMapsAPIKey } from "../GoogleMapsAPIKey"
import "./i-want-to-help-style.css";
import ReactLoading from "react-loading";

export default () => {
  const [helpAsks, setHelpAsks] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: { api_name: "get_help_requests",
                  offset: 0,
                  row_count: 20
                },
      })
      .then((res) => {
        setHelpAsks(res.data.result);
      })
      .catch((err) => console.error(err))
  }, []);

  return (
    <div className="wrapper">
        {helpAsks.length === 0 ?
         <div className="loading-spinner">
           <ReactLoading type="spin" color="black" height={'30%'} width={'30%'} />
         </div>
            :
        <div>
            <h1>Celkem žádá o pomoc {helpAsks.length} lidí po celé České Republice</h1>
            <Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMapsAPIKey}&libraries=places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                helpRequests = {helpAsks}
            />
          <h1>Seznam inzerátů</h1>
          <Table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {helpAsks.map((ask) => (
                <HelpSummary
                    key={ask.request_id}
                    topic={ask.request_topic}
                    address={ask.requester_address}
                />
            ))}
            </tbody>
          </Table>
        </div>}
    </div>
  )
}
