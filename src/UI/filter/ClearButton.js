import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/reducers/FilterReducer';

const ClearButton = () => {

    const filter = useSelector(state => state.filterReducer);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (filter.rating || (filter.brand_like && filter.brand_like.length > 0) || (filter.type_like && filter.type_like.length > 0) || filter.price_lte || filter.price_gte || filter["hierarchicalCategories.lvl0"] || filter.price_range) {
            setShow(true)
        }
        else {
            setShow(false)
        }


    }, [filter]);

    const clearFilter = () => {
        const checkbox = document.querySelectorAll("input[type='checkbox']");

        checkbox.forEach((item) => {
            item.checked = false;
        });

        const item1 = document.querySelectorAll(".ais-star-rating--item.ais-star-rating--item__active");
        const item2 = document.querySelectorAll(".ais-price-ranges--item.ais-price-ranges--item--item__active");
        const item3 = document.querySelectorAll(".ais-hierarchical-menu--item.ais-hierarchical-menu--item__active");
        const item4 = document.querySelectorAll(".facet-item.active");

        item1.forEach((item) => {
            item.classList.remove("ais-star-rating--item__active");
        });
        item2.forEach((item) => {
            item.classList.remove("ais-price-ranges--item--item__active");
        });
        item3.forEach((item) => {
            item.classList.remove("ais-hierarchical-menu--item__active");
        });
        item4.forEach((item) => {
            item.classList.remove("active");
        });

        dispatch(actions.clearFilter());
    }

    return (
        <>
            {show &&
                <div id="clear-all">
                    <div className="ais-root ais-clear-all btn btn-block btn-default" onClick={() => clearFilter()} >
                        <div className="ais-body ais-clear-all--body">
                            <div className="ais-clear-all--link">
                                <div>
                                    <i className="fa fa-eraser" /> Clear all filters</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );

}

export default ClearButton;
