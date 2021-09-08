import React, { useContext, useState } from 'react';
import { FilterContext } from '../App';

const Header = () => {

    const { filterDispatch } = useContext(FilterContext);

    const [search, setSearch] = useState('');

    const isChange = (e) => {
        if (e.target.value !== search) {
            setSearch(e.target.value);
            filterDispatch({ type: "FILTER_BY_SEARCH_NAME", payload: e.target.value })
        }
    }

    const clearSearch = () => {
        setSearch('');
        filterDispatch({ type: "FILTER_BY_SEARCH_NAME", payload: '' })
    }

    return (
        <header className="header" id="header">

            <div className="d-flex align-items-center">
                <img src="https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png" width={40} />

                <a href="/" className="logo px-4">amazing</a>
                <div className="header-search">
                    <input type="text" className="header-search__input" placeholder="Search a product" onChange={e => isChange(e)} value={search} name="search" />
                    <button className="header-search__button">
                        {!search ? <i className="fa fa-search" /> : <i className="fa fa-times" onClick={() => clearSearch()} />}
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header;