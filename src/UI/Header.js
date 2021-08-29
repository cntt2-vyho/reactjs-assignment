import React, { useState } from 'react';

const Header = (props) => {

    const [search, setSearch] = useState('');

    const isChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <header className="header" id="header">

            <div className="d-flex align-items-center">
                <img src="https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png" width={40} />

                <a href="/" className="logo px-4">amazing</a>
                <div className="header-search">
                    <input type="text" className="header-search__input" placeholder="Search a product" onChange={e => isChange(e)} value={search} name="search" />
                    <button className="header-search__button">
                        <i className="fa fa-search" />
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header;