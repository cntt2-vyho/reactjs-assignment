import React, { useState } from 'react';
import { compare } from '../../ultils/compare';
import Spin from '../components/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux/reducers/FilterReducer';

const FilterBrand = () => {

    const listBrands = useSelector(state => state.productReducer.listBrands);
    const dispatch = useDispatch();

    const [brands, setbrands] = useState([]);
    const [search, setsearch] = useState('');

    const renderResultSearch = (arr) => {
        var result = [];
        arr && Object.keys(arr).map((item) => {
            if (compare(item).indexOf(compare(search)) !== -1) {
                result = [...result, { name: item, count: arr[item] }]
            }
        })
        return result;
    }

    const handleBrandSearch = (e) => {
        var temp = [...brands];
        if (!(brands.some(val => val === e.target.value))) {
            temp = [...temp, e.target.value]
            setbrands([...temp])
            dispatch(actions.filterByBrand([...temp]));
        }
        else {
            temp = temp.filter(function (item) { return item !== e.target.value })
            setbrands([...temp])
            dispatch(actions.filterByBrand([...temp]));
        }
    }

    return (
        <div id="brands" className="facet">
            <div data-reactroot>
                <div className="ais-root ais-refinement-list">
                    <div className="ais-refinement-list--header ais-header">
                        <div className="facet-title">Brand</div>
                    </div>
                    <div className="ais-body ais-refinement-list--body">
                        <div className="ais-refinement-list--list">
                            <form noValidate className="searchbox sbx-sffv">
                                <div role="search" className="sbx-sffv__wrapper">
                                    <input type="text" name="search" id="brand_search" value={search} onChange={(e) => setsearch(e.target.value)} />
                                    <button type="submit" title="Submit your search query." className="sbx-sffv__submit">
                                        <i className="fa fa-search" aria-hidden="true">
                                        </i>
                                    </button>
                                    <button type="reset" title="Clear the search query." className="sbx-sffv__reset" onClick={() => setsearch("")}>
                                        <i className="fa fa-times" aria-hidden="true">
                                        </i>
                                    </button>
                                </div>
                            </form>
                            {!listBrands ? <Spin /> : renderResultSearch(listBrands).slice(0, 5).map((value, key) => {
                                return (
                                    <div className="ais-refinement-list--item" key={key}>
                                        <div>
                                            <div className="facet-item">
                                                <input type="checkbox" className="ais-refinement-list--checkbox" value={value.name} id={value.name} onChange={(e) => handleBrandSearch(e)} />
                                                <label className="facet-count" htmlFor={value.name} >{value.name}
                                                    <span>({value.count})</span></label>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default FilterBrand;
