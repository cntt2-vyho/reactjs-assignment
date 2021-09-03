import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux/reducers/FilterReducer';

const FilterCategory = () => {

    const listCategories = useSelector(state => state.productReducer.listCategories);
    const [hierarchicalCategoriesLvl0, sethierarchicalCategoriesLvl0] = useState();
    const [hierarchicalCategoriesLvl1, sethierarchicalCategoriesLvl1] = useState();

    const dispatch = useDispatch();

    const handleCategoryFilter = (value) => {

        if (hierarchicalCategoriesLvl0 !== value) {
            sethierarchicalCategoriesLvl0(value)
            dispatch(actions.filterByHierarchicalCategoriesLvl0(value));
        }
        else {
            sethierarchicalCategoriesLvl0();
            sethierarchicalCategoriesLvl1();

            dispatch(actions.filterByHierarchicalCategoriesLvl0())
            dispatch(actions.filterByHierarchicalCategoriesLvl1());
        }

    }

    const handleCategoryFilterLvl1 = (value) => {
        if (hierarchicalCategoriesLvl1 !== value) {
            sethierarchicalCategoriesLvl1(value);
            dispatch(actions.filterByHierarchicalCategoriesLvl1(`${hierarchicalCategoriesLvl0} > ${value}`))
        }
        else {
            sethierarchicalCategoriesLvl1()
            dispatch(actions.filterByHierarchicalCategoriesLvl1())
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
                                {Object.keys(listCategories).length > 0 && Object.keys(listCategories).slice(0, 10).map((value, key) => {
                                    return (
                                        <div className={listCategories[value].name == hierarchicalCategoriesLvl0 ? "ais-hierarchical-menu--item ais-hierarchical-menu--item__active" : "ais-hierarchical-menu--item"} key={key} >
                                            <div>
                                                <a className={listCategories[value].name == hierarchicalCategoriesLvl0 ? "facet-item active" : "facet-item"} onClick={() => handleCategoryFilter(listCategories[value].name)}>
                                                    <span className="facet-name">
                                                        <i className="fa fa-angle-right" /> {listCategories[value].name}
                                                    </span>
                                                </a>
                                            </div>
                                            {listCategories[value].name == hierarchicalCategoriesLvl0 &&
                                                <div className="ais-hierarchical-menu--list ais-hierarchical-menu--list__lvl1">
                                                    {
                                                        Object.keys(listCategories[value].lvl1).slice(0, 10).map(val => {
                                                            return (
                                                                <div className={listCategories[value].lvl1[val] === hierarchicalCategoriesLvl1 ? "ais-hierarchical-menu--item active" : "ais-hierarchical-menu--item"}>
                                                                    <div>
                                                                        <a className={listCategories[value].lvl1[val] === hierarchicalCategoriesLvl1 ? "facet-item active" : "facet-item"} onClick={() => handleCategoryFilterLvl1(listCategories[value].lvl1[val])} >
                                                                            <span className="facet-name"><i className="fa fa-angle-right" /> {listCategories[value].lvl1[val]}</span>
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
