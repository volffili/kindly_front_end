import React, { useState, useEffect } from "react"
import { Table, Row, Col } from "reactstrap"
import axios from "axios"
import HelpCard from "../components/HelpCard"
import { baseUrl } from "../Url"
import Map from "../components/Map"
import Loading from "../components/Loading"
import Pagination from "../components/Pagination"
import PageWrap from "../components/PageWrap"

export default () => {
  const [helpRequests, setHelpRequests] = useState([])
  const [totalCount, setTotalCount] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [requestsPerPage] = useState(6)

  useEffect(() => {
    setLoading(true)
    axios
      .get(baseUrl, {
        params: { api_name: "get_help_requests", offset: 0, row_count: 1000 },
      })
      .then((res) => {
        setHelpRequests(res.data.result.help_requests)
        setTotalCount(res.data.result.count)
        setLoading(false)
      })
      .catch((err) => console.error(err))
  }, [])

  const indexOfLastRequest = currentPage * requestsPerPage
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage
  const currentRequests = helpRequests.slice(indexOfFirstRequest, indexOfLastRequest)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <PageWrap>
      <Row>
        <Col align="center">
          <h3>Celkem žádá o pomoc {totalCount} lidí po celé České Republice</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Map
            zoom={7}
            center={{ lat: 49.8600624, lng: 15.5860745 }}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            helpRequests={helpRequests}
            link={true}
          />
        </Col>
      </Row>
      {/*<p>
            Seznam inzerátů ({indexOfFirstRow + 1} - {Math.min(indexOfLastRow, totalCount)} / {totalCount})
          </p>*/}
      {loading ? (
        <Loading />
      ) : (
        <Row>
          {currentRequests.map((helpRequest) => (
            <Col md="6" lg="4" xl="3">
              <HelpCard helpRequest={helpRequest} />
            </Col>
          ))}
        </Row>
      )}
      <Pagination rowsPerPage={requestsPerPage} totalRows={helpRequests.length} paginate={paginate} />
    </PageWrap>
  )
}
