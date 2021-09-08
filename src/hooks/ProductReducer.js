export const productInitialTodoState = {
    products: [],
    listCategories: {},
    listTypes: {},
    listBrands: {},
    renderRating: {},
    price_range: {},
    totalPage: '',
    totalProducts: '',
    time: '',
    failure: '',
    error: '',
};

export const productReducer = (state = productInitialTodoState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "GET_PRODUCTS":
            return { ...state, products: [...payload] };
        case "GET_LIST_CATEGORIES":
            return { ...state, listCategories: { ...payload } };
        case "GET_LIST_TYPE":
            return { ...state, listTypes: { ...payload } };
        case "GET_LIST_BRAND":
            return { ...state, listBrands: { ...payload } };
        case "RENDER_RATING":
            return { ...state, renderRating: { ...payload } };
        case "GET_PRICE_RAGES":
            return { ...state, price_range: { ...payload } };
        case "GET_TOTAL_PAGE":
            return { ...state, totalPage: payload };
        case "GET_TOTAL_PRODUCTS":
            return { ...state, totalProducts: payload };
        case "GET_TIME":
            return { ...state, time: payload };
        case "SUCCESS":
            return { ...state };
        case "FAILURE":
            return { ...state, failure: payload };
        case "ERROR":
            return { ...state, error: payload };
        case "LOADING":
            return { ...state, loading: payload };

        default:
            return state;
    }
};

export default productReducer;
