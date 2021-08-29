import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getData, getTotalPageAction, renderListCategories } from './redux/reducer';
import Content from './UI/Content';
import Header from './UI/Header';
import Sidebar from './UI/Sidebar';


const App = (props) => {
    // const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('');
    const [limit, setlimit] = useState(16);
    const [rating, setRating] = useState();
    const [type_like, settype_like] = useState([]);
    const [price_lte, setprice_lte] = useState();
    const [price_gte, setprice_gte] = useState();
    const [price_range, setprice_range] = useState();
    const [name_like, setname_like] = useState();

    const [brand_like, setbrand_like] = useState([]);



    useEffect(() => {
        props.getAllProduct(customFilter());
        props.getTotalPage(customFilter())
        props.renderListCategories(customFilter())

    }, [page, sort, brand_like, rating, type_like, price_lte, price_gte, price_range, name_like]);


    const customFilter = () => {
        var filterTemp = {};
        if (page) {
            filterTemp = { ...filterTemp, _page: page }
        }
        if (rating) {
            filterTemp = { ...filterTemp, rating: rating }
        }
        if (limit) {
            filterTemp = { ...filterTemp, _limit: 16 }
        }
        if (brand_like) {
            filterTemp = { ...filterTemp, brand_like: brand_like }
        }
        if (type_like) {
            filterTemp = { ...filterTemp, type_like: type_like }
        }
        if (price_gte) {
            filterTemp = { ...filterTemp, price_gte: price_gte }
        }
        if (name_like) {
            filterTemp = { ...filterTemp, name_like: name_like }
        }
        if (price_lte) {
            filterTemp = { ...filterTemp, price_lte: price_lte }
        }
        if (price_range) {
            filterTemp = { ...filterTemp, price_range: price_range }
        }
        switch (sort) {
            case "asc":
                filterTemp = { ...filterTemp, _sort: "price", _order: sort }
                break;
            case "desc":
                filterTemp = { ...filterTemp, _sort: "price", _order: sort }
                break;
            case "default":
                filterTemp = { ...filterTemp, _sort: "", _order: "" }
                return;
        }
        return filterTemp;
    }

    return (
        <>
            <Header setname_like={setname_like} />
            <div className="content">
                <Sidebar
                    setbrand_like={setbrand_like}
                    setRating={setRating}
                    settype_like={settype_like}
                    setprice_lte={setprice_lte}
                    setprice_gte={setprice_gte}
                    setprice_range={setprice_range}
                />
                <Content
                    products={props.products}
                    setSort={setSort}
                    setPage={setPage}
                    name_like={name_like}
                />
            </div>
        </>
    );

}
const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllProduct: (filter) => {
            dispatch(getData(filter))
        },
        getTotalPage: (filter) => {
            dispatch(getTotalPageAction(filter))
        },
        renderListCategories: (filter) => {
            dispatch(renderListCategories(filter))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);