import React, { useContext, useEffect, useState } from 'react';
import { ProductContext, FilterContext } from '../../App';


const FilterCategory = () => {

    const [hierarchicalCategoriesLvl0, sethierarchicalCategoriesLvl0] = useState();
    const [hierarchicalCategoriesLvl1, sethierarchicalCategoriesLvl1] = useState();

    const { products } = useContext(ProductContext);
    const { filterDispatch } = useContext(FilterContext);

    const handleCategoryFilter = (value) => {

        if (hierarchicalCategoriesLvl0 !== value) {
            sethierarchicalCategoriesLvl0(value)
            sethierarchicalCategoriesLvl1('');

            filterDispatch({ type: "FILTER_BY_HIERARCHICAL_CATEGORIES_LVL0", payload: value })
        }
        else {
            sethierarchicalCategoriesLvl0();
            sethierarchicalCategoriesLvl1('');

            filterDispatch({ type: "FILTER_BY_HIERARCHICAL_CATEGORIES_LVL0", payload: '' });
        }

    }

    const handleCategoryFilterLvl1 = (value) => {
        if (hierarchicalCategoriesLvl1 !== value) {
            sethierarchicalCategoriesLvl1(value);

            filterDispatch({ type: "FILTER_BY_HIERARCHICAL_CATEGORIES_LVL1", payload: `${hierarchicalCategoriesLvl0} > ${value}` })
        }
        else {
            sethierarchicalCategoriesLvl1('');
            filterDispatch({ type: "FILTER_BY_HIERARCHICAL_CATEGORIES_LVL1", payload: '' })
        }
    }

    return (
        <section className="facet-wrapper">
            <div className="facet-category-title">Show results for</div>
            <div id="categories">
                <div data-reactroot>
                    <div className="ais-root ais-hierarchical-menu">
                        <div className="ais-body ais-hierarchical-menu--body">
                            <div className="ais-hierarchical-menu--list ais-hierarchical-menu--list__lvl0">
                                {Object.keys(products.listCategories).length > 0 && Object.keys(products.listCategories).slice(0, 10).map((value, key) => {
                                    return (
                                        <div className={products.listCategories[value].name == hierarchicalCategoriesLvl0 ? "ais-hierarchical-menu--item ais-hierarchical-menu--item__active" : "ais-hierarchical-menu--item"} key={key} >
                                            <div>
                                                <a className={products.listCategories[value].name == hierarchicalCategoriesLvl0 ? "facet-item active" : "facet-item"} onClick={() => handleCategoryFilter(products.listCategories[value].name)}>
                                                    <span className="facet-name">
                                                        <i className="fa fa-angle-right" /> {products.listCategories[value].name}
                                                    </span>
                                                </a>
                                            </div>
                                            {products.listCategories[value].name == hierarchicalCategoriesLvl0 &&
                                                <div className="ais-hierarchical-menu--list ais-hierarchical-menu--list__lvl1">
                                                    {
                                                        Object.keys(products.listCategories[value].lvl1).slice(0, 10).map(val => {
                                                            return (
                                                                <div className={products.listCategories[value].lvl1[val] === hierarchicalCategoriesLvl1 ? "ais-hierarchical-menu--item active" : "ais-hierarchical-menu--item"}>
                                                                    <div>
                                                                        <a className={products.listCategories[value].lvl1[val] === hierarchicalCategoriesLvl1 ? "facet-item active" : "facet-item"} onClick={() => handleCategoryFilterLvl1(products.listCategories[value].lvl1[val])} >
                                                                            <span className="facet-name"><i className="fa fa-angle-right" /> {products.listCategories[value].lvl1[val]}</span>
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                            )
                                                        })
                                                    }
                                                </div>}

                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}


export default FilterCategory;
