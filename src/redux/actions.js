import request from "./axios";

const getProduct = (filter) => {
    return request({
        url: `/products`,
        method: "GET",
        params: filter
    });
};

const getAllProduct = (filter) => {
    delete filter._page;
    delete filter._limit;
    return request({
        url: `/products`,
        method: "GET",
        params: filter
    });
};

export {
    getProduct,
    getAllProduct    
};