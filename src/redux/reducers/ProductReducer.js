
import { getAllProduct, getProduct } from "../actions";
import { getTotalPage } from './../../ultils/ratings';
import Spin from './../../UI/components/Spinner';
import { customListCategories } from './../../ultils/ratings';

const types = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    GET_LIST_CATEGORIES: "GET_LIST_CATEGORIES",
    GET_LIST_TYPE: "GET_LIST_TYPE",
    GET_LIST_BRAND: "GET_LIST_BRAND",
    GET_TOTAL_PAGE: "GET_TOTAL_PAGE",
    GET_TOTAL_PRODUCTS: "GET_TOTAL_PRODUCTS",
    GET_TIME: "GET_TIME",
    RENDER_RATING: "RENDER_RATING",
    GET_PRICE_RAGES: "GET_PRICE_RAGES",
    LOADING: "LOADING",
    SUCCESS: "SUCCESS",
    FAILURE: "FAILURE",
    ERROR: "ERROR"
};

export const actions = {
    getProduct: (payload) => {
        return { type: types.GET_PRODUCTS, payload }
    },
    getListCategories: (payload) => {
        return { type: types.GET_LIST_CATEGORIES, payload }
    },
    getListType: (payload) => {
        return { type: types.GET_LIST_TYPE, payload }
    },
    getListBrand: (payload) => {
        return { type: types.GET_LIST_BRAND, payload }
    },
    getTotalPages: (payload) => {
        return { type: types.GET_TOTAL_PAGE, payload }
    },
    getTotalProducts: (payload) => {
        return { type: types.GET_TOTAL_PRODUCTS, payload }
    },
    getTime: (payload) => {
        return { type: types.GET_TIME, payload }
    },
    renderRating: (payload) => {
        return { type: types.RENDER_RATING, payload }
    },
    getPriceRanges: (payload) => {
        return { type: types.GET_PRICE_RAGES, payload }
    },
    checkLoading: (payload) => {
        if (!payload) { <Spin /> }
        return { type: types.LOADING, payload };
    },
    onFailure: (payload) => {
        return { type: types.FAILURE, payload };
    },
    onError: (payload) => {
        return { type: types.ERROR, payload };
    }
};

export const getData = (filter) => async (dispatch) => {
    dispatch(actions.checkLoading(true));
    try {
        const res = await getProduct(filter);
        if (res && res.status === 200) {
            dispatch(actions.getProduct(res.data));
        }
        else {
            dispatch(actions.onFailure(res.data.Message));
        }
        dispatch(actions.checkLoading(false));
    } catch (err) {
        dispatch(actions.checkLoading(false));
        dispatch(actions.onError(err));
    }
};


export const getTotalPageAction = (filter) => async (dispatch) => {
    dispatch(actions.checkLoading(true));
    const startTime = Date.now();

    const { brand_like, price_range, rating, type_like } = filter;
    try {
        const res = await getAllProduct(filter);
        if (res && res.status === 200) {
            const data = res.data.length;
            const perPage = 16;
            var totalPage = getTotalPage(data, perPage);
            var time = Date.now() - startTime;
            dispatch(actions.getTime(time));
            dispatch(actions.getTotalPages(totalPage));
            dispatch(actions.getTotalProducts(data));

            !rating && dispatch(actions.renderRating(customListCategories(res.data).rate));
            !type_like && dispatch(actions.getListType(customListCategories(res.data).listTypes));
            !brand_like && dispatch(actions.getListBrand(customListCategories(res.data).listBrands));
            !price_range && dispatch(actions.getPriceRanges(customListCategories(res.data).price_ranges));
            !filter["hierarchicalCategories.lvl0"] && dispatch(actions.getListCategories(customListCategories(res.data).listCategories))

        }
        else {
            dispatch(actions.onFailure(res.data.Message));
        }
        dispatch(actions.checkLoading(false));
    } catch (err) {
        dispatch(actions.checkLoading(false));
        dispatch(actions.onError(err));
    }
}
const initialState = {
    products: [],
    listCategories: {},
    totalPage: '',
    totalProducts: '',
    renderRating: {}
};

export const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_PRODUCTS:
            return { ...state, products: [...payload] };
        case types.GET_LIST_CATEGORIES:
            return { ...state, listCategories: { ...payload } };
        case types.GET_LIST_TYPE:
            return { ...state, listTypes: { ...payload } };
        case types.GET_LIST_BRAND:
            return { ...state, listBrands: { ...payload } };
        case types.RENDER_RATING:
            return { ...state, renderRating: { ...payload } };
        case types.GET_PRICE_RAGES:
            return { ...state, price_range: { ...payload } };
        case types.GET_TOTAL_PAGE:
            return { ...state, totalPage: payload };
        case types.GET_TOTAL_PRODUCTS:
            return { ...state, totalProducts: payload };
        case types.GET_TIME:
            return { ...state, time: payload };
        case types.SUCCESS:
            return { ...state };
        case types.FAILURE:
            return { ...state, loginFailure: payload };
        case types.ERROR:
            return { ...state, error: payload }
        default:
            return state;
    }
};
