import React, { useState, useEffect } from "react"
import { Table } from "reactstrap"
import axios from "axios"
import HelpSummary from "../components/HelpSummary"
import { baseUrl } from "../Url"
import Map from "../components/Map"
import { googleMapsAPIKey } from "../GoogleMapsAPIKey"
import "./i-want-to-help-style.css";

export default () => {
  const [helpAsks, setHelpAsks] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: { api_name: "get_all_help_requests" },
      })
      .then((res) => {
        setHelpAsks(res.data.result);
      })
      .catch((err) => console.error(err))
  }, []);

  return (
    <div className="wrapper">
        <h1>Celkem žádá o pomoc {helpAsks.length} lidí po celé České Republice</h1>
        <Map
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
          {helpAsks.map((ask) => (
            <HelpSummary
              key={ask.request_id}
              topic={ask.request_topic}
              address={ask.requester_address}
            />
          ))}
        </tbody>
      </Table>


    </div>
  )
}
