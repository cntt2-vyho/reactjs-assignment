import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Content extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <section id="results-topbar" class="d-flex justify-content-between">
                    <div id="stats" className="text-muted">
                        <div>
                            21,469 results
                            <span className="ais-stats--time">found in 2ms</span>
                        </div>
                    </div>
                    <div className="sort-by">
                        <label className="d-inline-block me-4">Sort by</label>
                        <div id="sort-by-selector" className="d-inline-block">
                            <select data-reactroot className="ais-sort-by-selector">
                                <option className="ais-sort-by-selector--item" value="instant_search">Featured</option>
                                <option className="ais-sort-by-selector--item" value="instant_search_price_asc">Price asc.</option>
                                <option className="ais-sort-by-selector--item" value="instant_search_price_desc">Price desc.</option>
                            </select>
                        </div>
                    </div>
                </section>
                <main id="products">
                    <Row className="products-container">
                        <Col lg={3} className="products-container__items">
                            <article className="hit">
                                <div className="product-picture-wrapper">
                                    <div className="product-picture"><img src="https://cdn-demo.algolia.com/bestbuy-0118/5477500_sb.jpg" className /></div>
                                </div>
                                <div className="product-desc-wrapper">
                                    <div className="product-name">Amazon - Fire TV Stick with Alexa Voice Remote - Black</div>
                                    <div className="product-type" />
                                    <div className="product-price">$39.99</div>
                                    <div className="product-rating"><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star__empty" /></div>
                                </div>
                            </article>
                        </Col>
                        <Col lg={3} className="products-container__items">
                            <article className="hit">
                                <div className="product-picture-wrapper">
                                    <div className="product-picture"><img src="https://cdn-demo.algolia.com/bestbuy-0118/4397400_sb.jpg" className /></div>
                                </div>
                                <div className="product-desc-wrapper">
                                    <div className="product-name">Google - Chromecast - Black</div>
                                    <div className="product-type" />
                                    <div className="product-price">$35</div>
                                    <div className="product-rating"><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star__empty" /></div>
                                </div>
                            </article>
                        </Col>
                        <Col lg={3} className="products-container__items">
                            <article className="hit">
                                <div className="product-picture-wrapper">
                                    <div className="product-picture"><img src="https://cdn-demo.algolia.com/bestbuy-0118/5588602_sb.jpg" className /></div>
                                </div>
                                <div className="product-desc-wrapper">
                                    <div className="product-name">Dell - Inspiron 15.6" Touch-Screen Laptop - Intel Core i5 - 6GB Memory - 1TB Hard Drive - Black</div>
                                    <div className="product-type" />
                                    <div className="product-price">$499.99</div>
                                    <div className="product-rating"><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star__empty" /></div>
                                </div>
                            </article>
                        </Col>
                        <Col lg={3} className="products-container__items">
                            <article className="hit">
                                <div className="product-picture-wrapper">
                                    <div className="product-picture"><img src="https://cdn-demo.algolia.com/bestbuy-0118/5578851_sb.jpg" className /></div>
                                </div>
                                <div className="product-desc-wrapper">
                                    <div className="product-name">Amazon - Echo Dot</div>
                                    <div className="product-type" />
                                    <div className="product-price">$49.99</div>
                                    <div className="product-rating"><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star__empty" /></div>
                                </div>
                            </article>
                        </Col>
                        <Col lg={3} className="products-container__items">
                            <article className="hit">
                                <div className="product-picture-wrapper">
                                    <div className="product-picture"><img src="https://cdn-demo.algolia.com/bestbuy-0118/6443034_sb.jpg" className /></div>
                                </div>
                                <div className="product-desc-wrapper">
                                    <div className="product-name">Apple - MacBook Air® (Latest Model) - 13.3" Display - Intel Core i5 - 8GB Memory - 128GB Flash Storage - Silver</div>
                                    <div className="product-type" />
                                    <div className="product-price">$999.99</div>
                                    <div className="product-rating"><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star__empty" /></div>
                                </div>
                            </article>
                        </Col>
                        <Col lg={3} className="products-container__items">
                            <article className="hit">
                                <div className="product-picture-wrapper">
                                    <div className="product-picture"><img src="https://cdn-demo.algolia.com/bestbuy-0118/4863102_sb.jpg" className /></div>
                                </div>
                                <div className="product-desc-wrapper">
                                    <div className="product-name">Sharp - 50" Class (49.5" Diag.) - LED - 1080p - Smart - HDTV Roku TV - Black</div>
                                    <div className="product-type" />
                                    <div className="product-price">$429.99</div>
                                    <div className="product-rating"><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star__empty" /></div>
                                </div>
                            </article>
                        </Col>
                        <Col lg={3} className="products-container__items">
                            <article className="hit">
                                <div className="product-picture-wrapper">
                                    <div className="product-picture"><img src="https://cdn-demo.algolia.com/bestbuy-0118/5578849_sb.jpg" className /></div>
                                </div>
                                <div className="product-desc-wrapper">
                                    <div className="product-name">Google - Google Home - White/Slate fabric</div>
                                    <div className="product-type" />
                                    <div className="product-price">$129</div>
                                    <div className="product-rating"><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star__empty" /></div>
                                </div>
                            </article>
                        </Col>
                        <Col lg={3} className="products-container__items">
                            <article className="hit">
                                <div className="product-picture-wrapper">
                                    <div className="product-picture"><img src="https://cdn-demo.algolia.com/bestbuy-0118/6848136_sb.jpg" className /></div>
                                </div>
                                <div className="product-desc-wrapper">
                                    <div className="product-name">Apple - EarPods™ with Remote and Mic - White</div>
                                    <div className="product-type" />
                                    <div className="product-price">$29.99</div>
                                    <div className="product-rating"><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star__empty" /></div>
                                </div>
                            </article>
                        </Col>
                        <Col lg={3} className="products-container__items">
                            <article className="hit">
                                <div className="product-picture-wrapper">
                                    <div className="product-picture"><img src="https://cdn-demo.algolia.com/bestbuy-0118/4374300_sb.jpg" className /></div>
                                </div>
                                <div className="product-desc-wrapper">
                                    <div className="product-name">Philips - hue A19 Smart LED Light Bulb - White Only</div>
                                    <div className="product-type" />
                                    <div className="product-price">$14.99</div>
                                    <div className="product-rating"><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star__empty" /></div>
                                </div>
                            </article>
                        </Col>
                        <Col lg={3} className="products-container__items">
                            <article className="hit">
                                <div className="product-picture-wrapper">
                                    <div className="product-picture"><img src="https://cdn-demo.algolia.com/bestbuy-0118/5723538_sb.jpg" className /></div>
                                </div>
                                <div className="product-desc-wrapper">
                                    <div className="product-name">Nintendo - amiibo Figure (The Legend of Zelda: Breath of the Wild Series Zelda)</div>
                                    <div className="product-type" />
                                    <div className="product-price">$15.99</div>
                                    <div className="product-rating"><span className="ais-star-rating--star__empty" /><span className="ais-star-rating--star__empty" /><span className="ais-star-rating--star__empty" /><span className="ais-star-rating--star__empty" /><span className="ais-star-rating--star__empty" /></div>
                                </div>
                            </article>
                        </Col>
                        <Col lg={3} className="products-container__items">
                            <article className="hit">
                                <div className="product-picture-wrapper">
                                    <div className="product-picture"><img src="https://cdn-demo.algolia.com/bestbuy-0118/5723537_sb.jpg" className /></div>
                                </div>
                                <div className="product-desc-wrapper">
                                    <div className="product-name">Nintendo - amiibo Figure (The Legend of Zelda: Breath of the Wild Series Link (Archer))</div>
                                    <div className="product-type" />
                                    <div className="product-price">$15.99</div>
                                    <div className="product-rating"><span className="ais-star-rating--star__empty" /><span className="ais-star-rating--star__empty" /><span className="ais-star-rating--star__empty" /><span className="ais-star-rating--star__empty" /><span className="ais-star-rating--star__empty" /></div>
                                </div>
                            </article>
                        </Col>
                        <Col lg={3} className="products-container__items">
                            <article className="hit">
                                <div className="product-picture-wrapper">
                                    <div className="product-picture"><img src="https://cdn-demo.algolia.com/bestbuy-0118/5513500_sb.jpg" className /></div>
                                </div>
                                <div className="product-desc-wrapper">
                                    <div className="product-name">Roku - Express Streaming Media Player - Black</div>
                                    <div className="product-type" />
                                    <div className="product-price">$29.99</div>
                                    <div className="product-rating"><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star__empty" /></div>
                                </div>
                            </article>
                        </Col>
                        <Col lg={3} className="products-container__items">
                            <article className="hit">
                                <div className="product-picture-wrapper">
                                    <div className="product-picture"><img src="https://cdn-demo.algolia.com/bestbuy-0118/5723529_sb.jpg" className /></div>
                                </div>
                                <div className="product-desc-wrapper">
                                    <div className="product-name">Nintendo - amiibo Figure (The Legend of Zelda: Breath of the Wild Series Link (Rider))</div>
                                    <div className="product-type" />
                                    <div className="product-price">$15.99</div>
                                    <div className="product-rating"><span className="ais-star-rating--star__empty" /><span className="ais-star-rating--star__empty" /><span className="ais-star-rating--star__empty" /><span className="ais-star-rating--star__empty" /><span className="ais-star-rating--star__empty" /></div>
                                </div>
                            </article>
                        </Col>
                        <Col lg={3} className="products-container__items">
                            <article className="hit">
                                <div className="product-picture-wrapper">
                                    <div className="product-picture"><img src="https://cdn-demo.algolia.com/bestbuy-0118/9881868_rb.jpg" className /></div>
                                </div>
                                <div className="product-desc-wrapper">
                                    <div className="product-name">Rocketfish™ - Tilting TV Wall Mount for Most 32"-70" TVs - Black</div>
                                    <div className="product-type" />
                                    <div className="product-price">$99.99</div>
                                    <div className="product-rating"><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star__empty" /></div>
                                </div>
                            </article>
                        </Col>
                        <Col lg={3} className="products-container__items">
                            <article className="hit">
                                <div className="product-picture-wrapper">
                                    <div className="product-picture"><img src="https://cdn-demo.algolia.com/bestbuy-0118/5723700_sb.jpg" className /></div>
                                </div>
                                <div className="product-desc-wrapper">
                                    <div className="product-name">Nintendo - amiibo Figure (The Legend of Zelda: Breath of the Wild Series Guardian)</div>
                                    <div className="product-type" />
                                    <div className="product-price">$19.99</div>
                                    <div className="product-rating"><span className="ais-star-rating--star__empty" /><span className="ais-star-rating--star__empty" /><span className="ais-star-rating--star__empty" /><span className="ais-star-rating--star__empty" /><span className="ais-star-rating--star__empty" /></div>
                                </div>
                            </article>
                        </Col>
                        <Col lg={3} className="products-container__items">
                            <article className="hit">
                                <div className="product-picture-wrapper">
                                    <div className="product-picture"><img src="https://cdn-demo.algolia.com/bestbuy-0118/5407064_sb.jpg" className /></div>
                                </div>
                                <div className="product-desc-wrapper">
                                    <div className="product-name">LG - Ultra Slim 8x Max. DVD Write Speed External USB DVD±RW/CD-RW Drive - Black</div>
                                    <div className="product-type" />
                                    <div className="product-price">$39.99</div>
                                    <div className="product-rating"><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star" /><span className="ais-star-rating--star__empty" /></div>
                                </div>
                            </article>
                        </Col>
                    </Row>
                </main>
                <section id="pagination">
                    <div data-reactroot>
                        <ul className="ais-pagination">
                            <li className="ais-pagination--item ais-pagination--item__previous ais-pagination--item__disabled"><span className="ais-pagination--link"><i className="fa fa-angle-left fa-2x" /> Previous page</span></li>
                            <li className="ais-pagination--item ais-pagination--item__page ais-pagination--item__active active"><a className="ais-pagination--link" aria-label={1} href="#">1</a></li>
                            <li className="ais-pagination--item ais-pagination--item__page"><a className="ais-pagination--link" aria-label={2} href="#">2</a></li>
                            <li className="ais-pagination--item ais-pagination--item__page"><a className="ais-pagination--link" aria-label={3} href="#">3</a></li>
                            <li className="ais-pagination--item ais-pagination--item__page"><a className="ais-pagination--link" aria-label={4} href="#">4</a></li>
                            <li className="ais-pagination--item ais-pagination--item__page"><a className="ais-pagination--link" aria-label={5} href="#">5</a></li>
                            <li className="ais-pagination--item ais-pagination--item__page"><a className="ais-pagination--link" aria-label={6} href="#">6</a></li>
                            <li className="ais-pagination--item ais-pagination--item__page"><a className="ais-pagination--link" aria-label={7} href="#">7</a></li>
                            <li className="ais-pagination--item ais-pagination--item__next"><a className="ais-pagination--link" aria-label="Next" href="#">Next page <i className="fa fa-angle-right fa-2x" /></a></li>
                        </ul>
                    </div>
                </section>
            </div>

        );
    }
}

export default Content;