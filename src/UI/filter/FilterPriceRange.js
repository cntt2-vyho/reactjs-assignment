import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/reducers/FilterReducer';

const FilterPriceRange = () => {

    const price_ranges = useSelector(state => state.productReducer.price_range)

    const [price_lte, setprice_lte] = useState();
    const [price_gte, setprice_gte] = useState();
    const [price_range, setprice_range] = useState();

    const dispatch = useDispatch();

    const handlePriceRange = (value) => {
        if (value !== price_range) {
            setprice_range(value);
            dispatch(actions.filterByPriceRange(value))
        }
        else {
            setprice_range();
            dispatch(actions.filterByPriceRange())
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.filterByPriceGte(price_gte ? price_gte : 0));
        dispatch(actions.filterByPriceLte(price_lte ? price_lte : 0));
    }

    return (
        <div id="prices" className="facet">
            <div data-reactroot>
                <div className="ais-root ais-price-ranges">
                    <div className="ais-price-ranges--header ais-header">
                        <div className="facet-title">Prices</div>
                    </div>
                    <div className="ais-body ais-price-ranges--body">
                        <div>
                            <div className="ais-price-ranges--list nav-list">
                                {
                                    price_ranges && Object.keys(price_ranges).map((value, key) => {
                                        return (
                                            <div className={value === price_range ? "ais-price-ranges--item ais-price-ranges--item--item__active" : "ais-price-ranges--item"} key={key} onClick={() => handlePriceRange(value)}>
                                                <div className="ais-price-ranges--link" >
                                                    <span>$ {value}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <form className="ais-price-ranges--form" onSubmit={(e) => handleSubmit(e)} >
                                <label className="ais-price-ranges--label">
                                    <span className="ais-price-ranges--currency">$ </span>
                                    <input type="number" id="price_gte_input" className="ais-price-ranges--input" value={price_gte} name="price_gte" onChange={(e) => setprice_gte(e.target.value)} />
                                </label>
                                <span className="ais-price-ranges--separator">to
                                </span>
                                <label className="ais-price-ranges--label">
                                    <span className="ais-price-ranges--currency">$ </span>
                                    <input type="number" id="price_lte_input" className="ais-price-ranges--input" value={price_lte} name="price_lte" onChange={(e) => setprice_lte(e.target.value)} />
                                </label>
                                <button className="ais-price-ranges--button" type="submit">Go</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default FilterPriceRange;
