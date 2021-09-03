import React, { useState } from 'react';
import { ratings } from '../../ultils/ratings';
import { useSelector, useDispatch } from 'react-redux';
import Spin from '../components/Spinner';
import { actions } from '../../redux/reducers/FilterReducer';

const FilterRating = () => {

    const renderRating = useSelector(state => state.productReducer.renderRating);

    const [rates, setRates] = useState();

    const dispatch = useDispatch();

    const handleRating = (value) => {

        if (value !== rates) {
            setRates(value);
            dispatch(actions.filterByRating(value))
        }
        else {
            setRates();
            dispatch(actions.filterByRating())
        }
    }

    return (
        <div id="rating" className="facet">
            <div data-reactroot>
                <div className="ais-root ais-star-rating">
                    <div className="ais-star-rating--header ais-header">
                        <div className="facet-title">Ratings</div>
                    </div>
                    <div className="ais-body ais-star-rating--body">
                        <div className="ais-star-rating--list">
                            {!renderRating ?
                                <Spin />
                                : Object.keys(renderRating).reverse().map((val, key) => {
                                    return (
                                        <div key={key} className={val === rates ? "ais-star-rating--item ais-star-rating--item__active" : "ais-star-rating--item"} onClick={() => handleRating(val)}>
                                            <div className="ais-star-rating--link" >
                                                {ratings(val)}
                                                <span className="ms-1">&amp; Up</span>
                                                <span className="ais-star-rating--count ms-1">
                                                    {renderRating[val]}
                                                </span>
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

export default FilterRating;
