import React from "react";
import PropTypes from "prop-types";

function PageIndex({ page, data, pageIndex, gotoPage, previousPage, nextPage, canPreviousPage, canNextPage}) {

 return (
    <div className="table__footer">
      <span className="table__entries">
        Showing {page.length} of {data.length} entries
      </span>
      <div className="table__navigation">
      <button className = "paginate start" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        <i></i><i></i> <i></i><i></i>
      </button>{' '}
      <button className = "paginate left" onClick={() => previousPage()} disabled={!canPreviousPage}>
        <i></i><i></i>
      </button>{' '}
        <p className="counter" type="number">{pageIndex + 1}</p>
        <button className="paginate right" onClick={() => nextPage()} disabled={!canNextPage}>
          <i></i><i></i>
        </button>{' '}
        <button className="paginate end" onClick={() => gotoPage(page.length)} disabled={!canNextPage}>
          <i></i><i></i> <i></i><i></i>
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
};
console.log()
export default PageIndex;