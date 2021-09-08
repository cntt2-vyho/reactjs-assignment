export const filterInitialTodoState = {
    _page: 1,
    _limit: 16
};

export const filterReducer = (state = filterInitialTodoState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "FILTER_BY_HIERARCHICAL_CATEGORIES_LVL0":
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
        case "FILTER_BY_HIERARCHICAL_CATEGORIES_LVL1":
            var temp = { ...state };
            if (payload) {
                temp = { ...temp, ["hierarchicalCategories.lvl1"]: payload }
            }
            else {
                delete temp["hierarchicalCategories.lvl1"];
            }
            return { ...temp };
        case "FILTER_BY_TYPE":
            var temp = { ...state };
            if (payload.length > 0) {
                temp = { ...temp, type_like: [...payload] }
            }
            else {
                delete temp.type_like;
            }
            return { ...temp };
        case "FILTER_BY_BRAND":
            var temp = { ...state };
            if (payload.length > 0) {
                temp = { ...temp, brand_like: [...payload] }
            }
            else {
                delete temp.brand_like;
            }
            return { ...temp };
        case "FILTER_BY_RATING":
            var temp = { ...state };
            if (payload) {
                temp = { ...temp, rating: payload }
            }
            else {
                delete temp.rating;
            }
            return { ...temp };
        case "FILTER_BY_PRICE_RANGE":
            var temp = { ...state };
            if (payload) {
                temp = { ...temp, price_range: payload }
            }
            else {
                delete temp.price_range;
            }
            return { ...temp };
        case "FILTER_BY_PRICE_GTE":
            var temp = { ...state };
            if (payload) {
                temp = { ...temp, price_gte: payload }
            }
            else {
                delete temp.price_gte;
            }
            return { ...temp };
        case "FILTER_BY_PRICE_LTE":
            var temp = { ...state };
            if (payload) {
                temp = { ...temp, price_lte: payload }
            }
            else {
                delete temp.price_lte;
            }
            return { ...temp };
        case "FILTER_BY_PAGE":
            return { ...state, _page: payload };
        case "FILTER_BY_SORT":
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
        case "FILTER_BY_SEARCH_NAME":
            var temp = { ...state };
            if (payload) {
                temp = { ...temp, name_like: payload };
            }
            else {
                delete temp.name_like;
            }
            return { ...temp };
        case "CLEAR_FILTER":
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

export default filterReducer;
