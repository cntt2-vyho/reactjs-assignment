const types = {
    FILTER_BY_HIERARCHICAL_CATEGORIES_LVL0: "FILTER_BY_HIERARCHICAL_CATEGORIES_LVL0",
    FILTER_BY_HIERARCHICAL_CATEGORIES_LVL1: "FILTER_BY_HIERARCHICAL_CATEGORIES_LVL1",
    FILTER_BY_TYPE: "FILTER_BY_TYPE",
    FILTER_BY_BRAND: "FILTER_BY_BRAND",
    FILTER_BY_RATING: "FILTER_BY_RATING",
    FILTER_BY_PRICE_RANGE: "FILTER_BY_PRICE_RANGE",
    FILTER_BY_PRICE_GTE: "FILTER_BY_PRICE_GTE",
    FILTER_BY_PRICE_LTE: "FILTER_BY_PRICE_LTE",
    FILTER_BY_PAGE: "FILTER_BY_PAGE",
    FILTER_BY_SORT: "FILTER_BY_SORT",
    FILTER_BY_SEARCH_NAME: "FILTER_BY_SEARCH_NAME",
    CLEAR_FILTER: "CLEAR_FILTER"
};

export const actions = {
    filterByHierarchicalCategoriesLvl0: (payload) => {
        return { type: types.FILTER_BY_HIERARCHICAL_CATEGORIES_LVL0, payload }
    },
    filterByHierarchicalCategoriesLvl1: (payload) => {
        return { type: types.FILTER_BY_HIERARCHICAL_CATEGORIES_LVL1, payload }
    },
    filterByType: (payload) => {
        return { type: types.FILTER_BY_TYPE, payload }
    },
    filterByBrand: (payload) => {
        return { type: types.FILTER_BY_BRAND, payload }
    },
    filterByRating: (payload) => {
        return { type: types.FILTER_BY_RATING, payload }
    },
    filterByPriceRange: (payload) => {
        return { type: types.FILTER_BY_PRICE_RANGE, payload }
    },
    filterByPriceGte: (payload) => {
        return { type: types.FILTER_BY_PRICE_GTE, payload }
    },
    filterByPriceLte: (payload) => {
        return { type: types.FILTER_BY_PRICE_LTE, payload }
    },
    filterByPage: (payload) => {
        return { type: types.FILTER_BY_PAGE, payload }
    },
    filterBySort: (payload) => {
        return { type: types.FILTER_BY_SORT, payload }
    },
    filterBySearchName: (payload) => {
        return { type: types.FILTER_BY_SEARCH_NAME, payload };
    },
    clearFilter: () => {
        return { type: types.CLEAR_FILTER };
    }
};

const initialState = {
    _page: 1,
    _limit: 16,
};

export const filterReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case types.FILTER_BY_HIERARCHICAL_CATEGORIES_LVL0:
            var temp = { ...state };
            if (payload) {
                delete temp["hierarchicalCategories.lvl1"];
                temp = { ...temp, ["hierarchicalCategories.lvl0"]: payload }
            }
            else {
                delete temp["hierarchicalCategories.lvl0"];
                delete temp["hierarchicalCategories.lvl1"];
            }
            return { ...temp };
        case types.FILTER_BY_HIERARCHICAL_CATEGORIES_LVL1:
            var temp = { ...state };
            if (payload) {
                temp = { ...temp, ["hierarchicalCategories.lvl1"]: payload }
            }
            else {
                delete temp["hierarchicalCategories.lvl1"];
            }
            return { ...temp };
        case types.FILTER_BY_TYPE:
            var temp = { ...state };
            if (payload.length > 0) {
                temp = { ...temp, type_like: [...payload] }
            }
            else {
                delete temp.type_like;
            }
            return { ...temp };
        case types.FILTER_BY_BRAND:
            var temp = { ...state };
            if (payload.length > 0) {
                temp = { ...temp, brand_like: [...payload] }
            }
            else {
                delete temp.brand_like;
            }
            return { ...temp };
        case types.FILTER_BY_RATING:
            var temp = { ...state };
            if (payload) {
                temp = { ...temp, rating: payload }
            }
            else {
                delete temp.rating;
            }
            return { ...temp };
        case types.FILTER_BY_PRICE_RANGE:
            var temp = { ...state };
            if (payload) {
                temp = { ...temp, price_range: payload }
            }
            else {
                delete temp.price_range;
            }
            return { ...temp };
        case types.FILTER_BY_PRICE_GTE:
            var temp = { ...state };
            if (payload) {
                temp = { ...temp, price_gte: payload }
            }
            else {
                delete temp.price_gte;
            }
            return { ...temp };
        case types.FILTER_BY_PRICE_LTE:
            var temp = { ...state };
            if (payload) {
                temp = { ...temp, price_lte: payload }
            }
            else {
                delete temp.price_lte;
            }
            return { ...temp };
        case types.FILTER_BY_PAGE:
            return { ...state, _page: payload };
        case types.FILTER_BY_SORT:
            var temp = { ...state };
            switch (payload) {
                case "instant_search":
                    delete temp._order;
                    delete temp._sort;
                    break;
                case "asc":
                    temp = { ...temp, _sort: "price", _order: payload }
                    break;
                case "desc":
                    temp = { ...temp, _sort: "price", _order: payload }
                    break;
                default:
                    break;
            }
            return { ...temp };
        case types.FILTER_BY_SEARCH_NAME:
            var temp = { ...state };
            if (payload) {
                temp = { ...temp, name_like: payload };
            }
            else {
                delete temp.name_like;
            }
            return { ...temp };
        case types.CLEAR_FILTER:
            var temp = { ...state };
            delete temp["hierarchicalCategories.lvl0"];
            delete temp["hierarchicalCategories.lvl1"];
            delete temp.type_like;
            delete temp.brand_like;
            delete temp.rating;
            delete temp.price_range;
            delete temp.price_gte;
            delete temp.price_lte;
            return { ...temp };
        default:
            return state;
    }
};
