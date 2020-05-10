import React, { useState } from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"

export default ({ requestsPerPage, totalRequests, paginate }) => {
  const pageNumbers = []
  const [selectedPageNumber, setSelectedPageNumber] = useState(1)
  const maxNum = Math.ceil(totalRequests / requestsPerPage)

  const pageClick = (pageNumber) => {
    if (pageNumber > maxNum) pageNumber = maxNum
    if (pageNumber < 1) pageNumber = 1
    setSelectedPageNumber(pageNumber)
    paginate(pageNumber)
  }

  for (let i = 1; i <= maxNum; i++) {
    pageNumbers.push(i)
  }

  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink first onClick={() => pageClick(0)} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous onClick={() => pageClick(selectedPageNumber - 1)} />
      </PaginationItem>
      {pageNumbers.map((number) => (
        <PaginationItem active={number === selectedPageNumber} onClick={() => pageClick(number)}>
          <PaginationLink key={number + "pglink"} color="secondary">
            {number}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationLink next onClick={() => pageClick(selectedPageNumber + 1)} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last onClick={() => pageClick(maxNum)} />
      </PaginationItem>
    </Pagination>
  )
}
