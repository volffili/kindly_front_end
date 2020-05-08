import React, {useState} from 'react';

const Pagination = ({ rowsPerPage, totalRows, paginate }) => {
  
  
  const pageNumbers = [];
  const [selectedPageNumber, setSelectedPageNumber] = useState(1);
  
  const pageClick = (pageNumber) => {
    setSelectedPageNumber(pageNumber);
    paginate(pageNumber)
  };

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => pageClick(number)} href="javascript:;" className="page-link" style={number === selectedPageNumber ? {backgroundColor: '#2200CC', color: 'white'} : null}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
