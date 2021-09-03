import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/reducers/FilterReducer';

const Header = () => {

    const [name_like, setname_like] = useState();

    const dispatch = useDispatch();

    const isChange = (e) => {
        setname_like(e.target.value);
        dispatch(actions.filterBySearchName(e.target.value));
    }

    const clearSearch = () => {
        setname_like('');
        dispatch(actions.filterBySearchName(''));
    }

    return (
        <header className="header" id="header">

            <div className="d-flex align-items-center">
                <img src="https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png" alt="logo" width={40} />

                <a href="/" className="logo px-4">amazing</a>
                <div className="header-search">
                    <input type="text" className="header-search__input" placeholder="Search a product" onChange={e => isChange(e)} value={name_like} name="search" />
                    <button className="header-search__button">
                        {!name_like ? <i className="fa fa-search" /> : <i className="fa fa-times" onClick={() => clearSearch()} />}
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header;