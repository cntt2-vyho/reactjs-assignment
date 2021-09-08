import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { ProductContext, FilterContext } from '../App';

const Paginations = () => {

    const { products } = useContext(ProductContext);
    const { filterDispatch } = useContext(FilterContext);

    const handlePageClick = (e) => {

        const selectedPage = e.selected + 1;
        console.log("selectedPage: ", selectedPage);
        filterDispatch({ type: "FILTER_BY_PAGE", payload: selectedPage });
    };

    return (
        <>
            <nav aria-label="Page navigation">
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={products.totalPage}
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