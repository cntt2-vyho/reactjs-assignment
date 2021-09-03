import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux/reducers/FilterReducer';

const FilterTypes = () => {

    const listTypes = useSelector(state => state.productReducer.listTypes);

    const [types, settypes] = useState([]);

    const dispatch = useDispatch();

    const handleTypeSearch = (e) => {
        var temp = [...types];
        if (!(types.some(val => val === e.target.value))) {

            temp = [...temp, e.target.value]
            settypes([...temp]);
            dispatch(actions.filterByType([...temp]))

        }
        else {
            temp = temp.filter(function (item) { return item !== e.target.value })

            settypes([...temp]);
            dispatch(actions.filterByType([...temp]))

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
                            {listTypes && Object.keys(listTypes).slice(0, 5).map((value, key) => {
                                return (
                                    <div className="ais-refinement-list--item" key={key}>
                                        <div>
                                            <div className="facet-item">
                                                <input type="checkbox" className="ais-refinement-list--checkbox" id={value} value={value} onChange={(e) => handleTypeSearch(e)} />
                                                <label htmlFor={value} className="facet-count" >{value} <span>({listTypes[value]})</span></label>
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