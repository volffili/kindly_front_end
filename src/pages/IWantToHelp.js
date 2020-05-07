import React, { useState, useEffect } from "react"
import { Table } from "reactstrap"
import axios from "axios"
import HelpSummary from "../components/HelpSummary"
import { baseUrl } from "../Url"
import Map from "../components/Map"
import "./i-want-to-help-style.css"
import Loading from "../components/Loading";

export default () => {
  const [helpRequests, setHelpRequests] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  
  const pageSize = 10;

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: { api_name: "get_help_requests",
                  offset: 0,
                  row_count: pageSize
                },
      })
      .then((res) => {
        setHelpRequests(res.data.result.help_requests)
        setTotalCount(res.data.result.count)
      })
      .catch((err) => console.error(err))
  }, []);

  return (
    <div>
      {helpRequests.length === 0 ? (
        <Loading/>
      ) : (
        <div className="wrapper">
          <h1>
            Celkem žádá o pomoc {totalCount} lidí po celé České Republice
          </h1>
          <Map
            zoom={13}
            center={{ lat: 50.0864771, lng: 14.4114366 }}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            helpRequests={helpRequests}
            link={true}
          />
          <h1>Seznam inzerátů ({pageSize} / {totalCount})</h1>
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
