import React from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';

const Paginations = (props) => {


    const handlePageClick = (e) => {
        const selectedPage = e.selected + 1;
        props.setPage(selectedPage)
    };

    return (
        <>
            <nav aria-label="Page navigation">
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={props.totalPage}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </nav>
        </>
    );

}
const mapStateToProps = (state, ownProps) => {
    return {
        totalPage: state.totalPage
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Paginations)