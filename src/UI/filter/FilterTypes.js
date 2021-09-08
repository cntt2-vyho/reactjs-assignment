import React, { useState, useEffect, useContext } from 'react';
import { FilterContext, ProductContext } from '../../App';

const FilterTypes = () => {

    const { products } = useContext(ProductContext);
    const { filterDispatch } = useContext(FilterContext);

    const [types, settypes] = useState([]);

    // console.log(filter.listTypes);

    // useEffect(() => {
    //     if (props.clear === true) {
    //         settypes([]);
    //     }

    // }, [props.clear]);

    const handleTypeSearch = (e) => {
        var temp = [...types];
        if (!(types.some(val => val === e.target.value))) {

            temp = [...temp, e.target.value]
            settypes([...temp]);

            filterDispatch({ type: "FILTER_BY_TYPE", payload: [...temp] })

        }
        else {
            temp = temp.filter(function (item) { return item !== e.target.value });

            settypes([...temp]);
            filterDispatch({ type: "FILTER_BY_TYPE", payload: [...temp] })

        }
    }

    return (
        <div>
            <div id="types" className="facet">
                <div data-reactroot>
                    <div className="ais-root ais-refinement-list">
                        <div className="ais-refinement-list--header ais-header">
                            <div className="facet-title">Type</div>
                        </div>
                        <div className="ais-body ais-refinement-list--body">
                            <div className="ais-refinement-list--list"></div>
                            {products.listTypes && Object.keys(products.listTypes).slice(0, 5).map((value, key) => {
                                return (
                                    <div className="ais-refinement-list--item">
                                        <div>
                                            <div className="facet-item">
                                                <input type="checkbox" checked={products.listTypes[value]?.checked} className="ais-refinement-list--checkbox" id={value} value={value} onChange={(e) => handleTypeSearch(e)} />
                                                <label htmlFor={value} className="facet-count" >{value} <span>({products.listTypes[value]})</span></label>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default FilterTypes;