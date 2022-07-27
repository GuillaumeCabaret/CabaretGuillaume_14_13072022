import React from "react";
import PropTypes from "prop-types";

function PageIndex({ page, data, pageIndex, gotoPage, previousPage, nextPage, canPreviousPage, canNextPage}) {
  const handleChangePage = (event) => {
    const pageNumber = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(pageNumber);
  };
  
 return (
    <div className="table__footer">
      <span className="table__entries">
        Showing {page.length} of {data.length} entries
      </span>
      <div className="table__navigation">
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
      </button>{' '}
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
      </button>{' '}
        <input
          className="table__navigation--input"
          type="number"
          defaultValue={pageIndex + 1}
          onChange={handleChangePage}
        ></input>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(page.length)} disabled={!canNextPage}>
          {'>>'}
      </button>
      </div>
    </div>
 );
}

PageIndex.propTypes = {
  page: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  pageIndex: PropTypes.number.isRequired,
  gotoPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  canPreviousPage: PropTypes.bool.isRequired,
  canNextPage: PropTypes.bool.isRequired,
  resetPageIndex: PropTypes.bool.isRequired,
};
console.log()
export default PageIndex;