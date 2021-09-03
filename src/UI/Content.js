import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ratings } from '../ultils/ratings';
import Spin from './components/Spinner';
import Pagination from './Pagination';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { actions } from '../redux/reducers/FilterReducer';

const Content = () => {

    const [sorting, setsorting] = useState();
    const [loading, setLoading] = useState(true);

    const products = useSelector(state => state.productReducer.products);
    const totalProducts = useSelector(state => state.productReducer.totalProducts);
    const time = useSelector(state => state.productReducer.time);
    const search_name = useSelector(state => state.filterReducer.time);

    const dispatch = useDispatch();

    useEffect(() => {
        if (products) {
            setLoading(false)
        }
    }, []);

    const handleSorting = (value) => {
        if (value.target.value !== sorting) {
            setsorting(value.target.value);
            dispatch(actions.filterBySort(value.target.value))
        }
    }

    const highlighted = (text = '', highlight = '') => {
        if (!highlight.trim()) {
            return <div className="product-name">{text}</div>
        }
        const regex = new RegExp(`(${_.escapeRegExp(highlight)})`, 'gi')
        const parts = text.split(regex)
        return (
            <div className="product-name">
                {parts.filter(part => part).map((part, i) => (
                    regex.test(part) ? <em key={i}>{part}</em> : <span key={i}>{part}</span>
                ))}
            </div>
        )
    }


    return (
        <>
            {loading ? <Spin /> :
                products.length > 0 ? <div className="content-wrapper">
                    <section id="results-topbar">
                        <div id="stats" className="text-muted ms-2">
                            {totalProducts} results
                            <span className="ais-stats--time"> found in {time / 1000} ms</span>
                        </div>
                        <div className="sort-by">
                            <p className="">Sort by</p>
                            <div id="sort-by-selector" className="">
                                <select data-reactroot className="ais-sort-by-selector" onChange={(e) => handleSorting(e)}>
                                    <option className="ais-sort-by-selector--item" value="instant_search">Featured</option>
                                    <option className="ais-sort-by-selector--item" value="asc">Price asc.</option>
                                    <option className="ais-sort-by-selector--item" value="desc">Price desc.</option>
                                </select>
                            </div>
                        </div>
                    </section>
                    <main id="products">
                        <Row className="products-container g-2">
                            {products.map((value, keys) => {
                                return (
                                    <Col lg={3} key={keys} className="products-container__items">
                                        <article className="hit">
                                            <div className="product-picture-wrapper">
                                                <div className="product-picture">
                                                    <img src={value.image} alt={value.name} />
                                                </div>
                                            </div>
                                            <div className="product-desc-wrapper">
                                                {highlighted(value.name, search_name)}
                                                <div className="product-type" />
                                                <div className="product-price">$ {value.price}</div>
                                                <div className="product-rating">{ratings(value.rating)}
                                                </div>
                                            </div>
                                        </article>
                                    </Col>
                                )
                            })
                            }
                        </Row>
                    </main>
                    <Pagination />
                </div>
                    :
                    <div className="content-wrapper text-center">
                        <p>No results found matching <em>{search_name}</em>.</p>
                    </div>
            }

        </>
    );

}
export default Content;