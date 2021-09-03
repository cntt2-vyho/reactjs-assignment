import React from 'react';
import FilterTypes from './filter/FilterTypes';
import FilterBrand from './filter/FilterBrand';
import FilterRating from './filter/FilterRating';
import FilterPriceRange from './filter/FilterPriceRange';
import FilterCategory from './filter/FilterCategory';
import ClearButton from './filter/ClearButton';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <ClearButton />
            <FilterCategory />
            <section className="facet-wrapper">
                <div className="facet-category-title">Refine by</div>

                <FilterTypes />
                <FilterBrand />
                <FilterRating />
                <FilterPriceRange />

            </section>
            <div className="thank-you">
                Data courtesy of <a href="https://developer.bestbuy.com/">Best Buy</a>
            </div>
        </div>

    );

}
export default Sidebar;