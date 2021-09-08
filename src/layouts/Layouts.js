import React, { useEffect, useContext } from "react";
import Sidebar from './../UI/Sidebar';
import Header from './../UI/Header';
import Content from './../UI/Content';
import { FilterContext, ProductContext } from "../App";
import { getAllProduct, getProduct } from "../hooks/actions";
import { customListCategories, getTotalPage } from "../ultils/ratings";

const Layouts = () => {

    const { products, productsDispatch } = useContext(ProductContext);
    const { filter } = useContext(FilterContext);

    const filterAll = { ...filter, _limit: 16 }

    useEffect(() => {
        getProducts(filterAll);
        getProductAll(filterAll);
    }, [filter]);

    const getProducts = async (filter) => {
        productsDispatch({ type: "LOADING", payload: true })
        try {
            const res = await getProduct(filter);
            if (res && res.status === 200) {
                productsDispatch({ type: "GET_PRODUCTS", payload: res.data })
            }
            else {
                productsDispatch({ type: "FAILURE", payload: res.data.Message })
            }
            productsDispatch({ type: "LOADING", payload: false })
        } catch (err) {
            productsDispatch({ type: "LOADING", payload: false })
            productsDispatch({ type: "ERROR", payload: false })
        }
    };


    const getProductAll = async (filter) => {
        productsDispatch({ type: "LOADING", payload: true })
        const startTime = Date.now();

        const { brand_like, price_range, rating, type_like } = filter;
        try {
            const res = await getAllProduct(filter);
            if (res && res.status === 200) {
                const data = res.data.length;
                const perPage = 16;
                var totalPage = getTotalPage(data, perPage);
                var time = Date.now() - startTime;
                productsDispatch({ type: "GET_TIME", payload: time })
                productsDispatch({ type: "GET_TOTAL_PAGE", payload: totalPage })
                productsDispatch({ type: "GET_TOTAL_PRODUCTS", payload: data });

                !rating && productsDispatch({ type: "RENDER_RATING", payload: customListCategories(res.data).rate });
                !type_like && productsDispatch({ type: "GET_LIST_TYPE", payload: customListCategories(res.data).listTypes });
                !brand_like && productsDispatch({ type: "GET_LIST_BRAND", payload: customListCategories(res.data).listBrands });
                !price_range && productsDispatch({ type: "GET_PRICE_RAGES", payload: customListCategories(res.data).price_ranges });
                !filter["hierarchicalCategories.lvl0"] && productsDispatch({ type: "GET_LIST_CATEGORIES", payload: customListCategories(res.data).listCategories });

            }
            else {
                productsDispatch({ type: "FAILURE", payload: res.data.Message })
            }
            productsDispatch({ type: "LOADING", payload: false })
        } catch (err) {
            productsDispatch({ type: "LOADING", payload: false })
            productsDispatch({ type: "ERROR", payload: false })
        }
    }

    return (
        <>
            <Header />
            <div className="content">
                <Sidebar />
                <Content />
            </div>
        </>
    )
}

export default Layouts;