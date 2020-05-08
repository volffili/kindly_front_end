import React, { useState, useEffect } from "react"
import { Table } from "reactstrap"
import axios from "axios"
import HelpSummary from "../components/HelpSummary"
import { baseUrl } from "../Url"
import Map from "../components/Map"
import "./i-want-to-help-style.css"
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

export default () => {
  const [helpRequests, setHelpRequests] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(7);
  
  const pageSize = 10;

  useEffect(() => {
    setLoading(true);
    axios
      .get(baseUrl, {
        params: { api_name: "get_help_requests",
                  offset: 0,
                  row_count: 1000
                },
      })
      .then((res) => {
        setHelpRequests(res.data.result.help_requests);
        setTotalCount(res.data.result.count);
        setLoading(false);
      })
      .catch((err) => console.error(err))
  }, []);
  
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = helpRequests.slice(indexOfFirstRow, indexOfLastRow);
  
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      {loading ? (
        <Loading/>
      ) : (
        <div className="wrapper">
          <h1>
            Celkem žádá o pomoc {totalCount} lidí po celé České Republice
          </h1>
          <Map
            zoom={7}
            center={{ lat: 49.8600624, lng: 15.5860745 }}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            helpRequests={helpRequests}
            link={true}
          />
          <h1>Seznam inzerátů ({indexOfFirstRow + 1} - {Math.min(indexOfLastRow, totalCount)} / {totalCount})</h1>
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
              {currentRows.map((helpRequest) => (
                <HelpSummary
                  helpRequest={helpRequest}
                />
              ))}
            </tbody>
          </Table>
          <Pagination
            rowsPerPage={rowsPerPage}
            totalRows={helpRequests.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  )
}
