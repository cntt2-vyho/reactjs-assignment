import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/reducers/FilterReducer';

const Paginations = () => {

    const [currentPage, setcurrentPage] = useState(1);

    const totalPage = useSelector(state => state.productReducer.totalPage);

    const dispatch = useDispatch();

    const handlePageClick = (e) => {

        const selectedPage = e.selected + 1;
        if (selectedPage !== currentPage) {
            setcurrentPage(selectedPage)
            dispatch(actions.filterByPage(selectedPage))
        }

    };

    return (
        <>
            <nav aria-label="Page navigation">
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={totalPage}
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

export default Paginations;