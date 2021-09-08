import _ from 'lodash';
import React, { useContext, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ProductContext, FilterContext } from '../App';
import { ratings } from '../ultils/ratings';
import Paginations from './Pagination';

const Content = () => {

    const [sorting, setsorting] = useState();

    const { products } = useContext(ProductContext);
    const { filter, filterDispatch } = useContext(FilterContext);


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

    const handleSorting = (value) => {
        if (value.target.value !== sorting) {
            setsorting(value.target.value);
            filterDispatch({ type: "FILTER_BY_SORT", payload: value.target.value })
        }
    }

    return (
        <> {
            !products.loading ?
                <div className="content-wrapper">
                    <section id="results-topbar">
                        <div id="stats" className="text-muted ms-2">
                            {products.totalProducts} results
                            <span className="ais-stats--time"> found in {products.time / 1000} ms</span>
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
                            {products.products && products.products.map((value, keys) => {
                                return (
                                    <Col lg={3} key={keys} className="products-container__items">
                                        <article className="hit">
                                            <div className="product-picture-wrapper">
                                                <div className="product-picture">
                                                    <img src={value.image} alt={value.name} />
                                                </div>
                                            </div>
                                            <div className="product-desc-wrapper">
                                                {highlighted(value.name, filter.name_like)}
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
                    <Paginations />
                </div>
                :
                <div className="content-wrapper text-center">
                    <p>No results found matching <em>{filter.name_like}</em>.</p>
                </div>
        }
        </>

    );

}

export default Content;