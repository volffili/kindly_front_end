import React, { useState, useEffect } from "react"
import { Table } from "reactstrap"
import axios from "axios"
import HelpSummary from "../components/HelpSummary"
import { baseUrl } from "../Url"
import Map from "../components/Map"
import "./i-want-to-help-style.css"
import ReactLoading from "react-loading"

export default () => {
  const [helpRequests, setHelpRequests] = useState([])

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: { api_name: "get_help_requests",
                  offset: 0,
                  row_count: 1000
                },
      })
      .then((res) => {
        setHelpRequests(res.data.result)
      })
      .catch((err) => console.error(err))
  }, []);

  return (
    <div className="wrapper">
      {helpRequests.length === 0 ? (
        <div className="loading-spinner">
          <ReactLoading
            type="spin"
            color="black"
            height={"30%"}
            width={"30%"}
          />
        </div>
      ) : (
        <div>
          <h1>
            Celkem žádá o pomoc {helpRequests.length} lidí po celé České Republice
          </h1>
          <Map
            zoom={13}
            center={{ lat: 50.0864771, lng: 14.4114366 }}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            helpRequests={helpRequests}
          />
          <h1>Seznam inzerátů</h1>
          <Table>
            <thead>
              <tr>
                <th>Den zadání</th>
                <th>Předmět žádosti</th>
                <th>Adresa</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {helpRequests.map((helpRequest) => (
                <HelpSummary
                  helpRequest={helpRequest}
                />
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  )
}
