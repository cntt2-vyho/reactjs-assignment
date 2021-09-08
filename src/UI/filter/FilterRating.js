import React, { useContext, useEffect, useState } from 'react';
import { ProductContext, FilterContext } from '../../App';
import { ratings } from '../../ultils/ratings';

import Spin from '../components/Spinner';

const FilterRating = (props) => {

    const { products } = useContext(ProductContext);
    const { filterDispatch } = useContext(FilterContext);

    const [rates, setRates] = useState();

    const handleRating = (value) => {

        if (value !== rates) {
            setRates(value)
            filterDispatch({ type: "FILTER_BY_RATING", payload: value })
        }
        else {
            setRates('');
            filterDispatch({ type: "FILTER_BY_RATING", payload: '' })
        }
    }

    useEffect(() => {
        if (props.clear === true) {
            setRates();
        }

    }, [props.clear]);

    return (
        <div id="rating" className="facet">
            <div data-reactroot>
                <div className="ais-root ais-star-rating">
                    <div className="ais-star-rating--header ais-header">
                        <div className="facet-title">Ratings</div>
                    </div>
                    <div className="ais-body ais-star-rating--body">
                        <div className="ais-star-rating--list">
                            {!products.renderRating ?
                                <Spin />
                                : Object.keys(products.renderRating).reverse().map(val => {
                                    return (
                                        <div className={val == rates ? "ais-star-rating--item ais-star-rating--item__active" : "ais-star-rating--item"} onClick={() => handleRating(val)}>
                                            <div className="ais-star-rating--link" >
                                                {ratings(val)}
                                                <span className="ms-1">&amp; Up</span>
                                                <span className="ais-star-rating--count ms-1">
                                                    {products.renderRating[val]}
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
