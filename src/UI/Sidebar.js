import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div id="clear-all">
                    <div style={{ display: 'none' }}>
                        <div className="ais-root ais-clear-all btn btn-block btn-default">
                            <div className="ais-body ais-clear-all--body">
                                <a className="ais-clear-all--link" href="#">
                                    <div>
                                        <i className="fa fa-eraser" /> Clear all filters</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="facet-wrapper">
                    <div className="facet-category-title">Show results for</div>
                    <div id="categories">
                        <div data-reactroot>
                            <div className="ais-root ais-hierarchical-menu">
                                <div className="ais-body ais-hierarchical-menu--body">
                                    <div className="ais-hierarchical-menu--list ais-hierarchical-menu--list__lvl0">
                                        <div className="ais-hierarchical-menu--item">
                                            <div>
                                                <a href="/" className="facet-item ">
                                                    <span className="facet-name">
                                                        <i className="fa fa-angle-right" /> Appliances</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-hierarchical-menu--item">
                                            <div>
                                                <a href="/" className="facet-item ">
                                                    <span className="facet-name">
                                                        <i className="fa fa-angle-right" /> Audio</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-hierarchical-menu--item">
                                            <div>
                                                <a href="/" className="facet-item ">
                                                    <span className="facet-name">
                                                        <i className="fa fa-angle-right" /> Cameras &amp; Camcorders</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-hierarchical-menu--item">
                                            <div>
                                                <a href="/" className="facet-item ">
                                                    <span className="facet-name">
                                                        <i className="fa fa-angle-right" /> Car Electronics &amp; GPS</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-hierarchical-menu--item">
                                            <div>
                                                <a href="/" className="facet-item ">
                                                    <span className="facet-name">
                                                        <i className="fa fa-angle-right" /> Cell Phones</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-hierarchical-menu--item">
                                            <div>
                                                <a href="/" className="facet-item ">
                                                    <span className="facet-name">
                                                        <i className="fa fa-angle-right" /> Computers &amp; Tablets</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-hierarchical-menu--item">
                                            <div>
                                                <a href="/" className="facet-item ">
                                                    <span className="facet-name">
                                                        <i className="fa fa-angle-right" /> Health, Fitness &amp; Beauty</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-hierarchical-menu--item">
                                            <div>
                                                <a href="/" className="facet-item ">
                                                    <span className="facet-name">
                                                        <i className="fa fa-angle-right" /> Office &amp; School Supplies</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-hierarchical-menu--item">
                                            <div>
                                                <a href="/" className="facet-item ">
                                                    <span className="facet-name">
                                                        <i className="fa fa-angle-right" /> TV &amp; Home Theater</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-hierarchical-menu--item">
                                            <div>
                                                <a href="/" className="facet-item ">
                                                    <span className="facet-name">
                                                        <i className="fa fa-angle-right" /> Video Games</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="facet-wrapper">
                    <div className="facet-category-title">Refine by</div>
                    <div id="types" className="facet">
                        <div data-reactroot>
                            <div className="ais-root ais-refinement-list">
                                <div className="ais-refinement-list--header ais-header">
                                    <div className="facet-title">Type</div>
                                </div>
                                <div className="ais-body ais-refinement-list--body">
                                    <div className="ais-refinement-list--list">
                                        <div className="ais-refinement-list--item">
                                            <div>
                                                <a href="/" className="facet-item">
                                                    <input type="checkbox" className="ais-refinement-list--checkbox" defaultValue="Trend cases" />Trend cases<span className="facet-count">(457)</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-refinement-list--item">
                                            <div>
                                                <a href="/" className="facet-item">
                                                    <input type="checkbox" className="ais-refinement-list--checkbox" defaultValue="Ult protection cases" />Ult protection cases<span className="facet-count">(393)</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-refinement-list--item">
                                            <div>
                                                <a href="/" className="facet-item">
                                                    <input type="checkbox" className="ais-refinement-list--checkbox" defaultValue="Ink cartridges" />Ink cartridges<span className="facet-count">(249)</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-refinement-list--item">
                                            <div>
                                                <a href="/" className="facet-item">
                                                    <input type="checkbox" className="ais-refinement-list--checkbox" defaultValue="Business cases" />Business cases<span className="facet-count">(217)</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-refinement-list--item">
                                            <div>
                                                <a href="/" className="facet-item">
                                                    <input type="checkbox" className="ais-refinement-list--checkbox" defaultValue="Connectivity" />Connectivity<span className="facet-count">(181)</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="brands" className="facet">
                        <div data-reactroot>
                            <div className="ais-root ais-refinement-list">
                                <div className="ais-refinement-list--header ais-header">
                                    <div className="facet-title">Brand</div>
                                </div>
                                <div className="ais-body ais-refinement-list--body">
                                    <div className="ais-refinement-list--list">
                                        <form noValidate className="searchbox sbx-sffv">
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                <symbol xmlns="http://www.w3.org/2000/svg" id="sbx-icon-search-12" viewBox="0 0 40 41">
                                                    <path d="M30.967 27.727l-.03-.03c-.778-.777-2.038-.777-2.815 0l-1.21 1.21c-.78.78-.778 2.04 0 2.817l.03.03 4.025-4.027zm1.083 1.084L39.24 36c.778.778.78 2.037 0 2.816l-1.21 1.21c-.777.778-2.038.78-2.816 0l-7.19-7.19 4.026-4.025zM15.724 31.45c8.684 0 15.724-7.04 15.724-15.724C31.448 7.04 24.408 0 15.724 0 7.04 0 0 7.04 0 15.724c0 8.684 7.04 15.724 15.724 15.724zm0-3.93c6.513 0 11.793-5.28 11.793-11.794 0-6.513-5.28-11.793-11.793-11.793C9.21 3.93 3.93 9.21 3.93 15.725c0 6.513 5.28 11.793 11.794 11.793z" fillRule="evenodd" />
                                                </symbol>
                                                <symbol xmlns="http://www.w3.org/2000/svg" id="sbx-icon-clear-2" viewBox="0 0 20 20">
                                                    <path d="M8.96 10L.52 1.562 0 1.042 1.04 0l.522.52L10 8.96 18.438.52l.52-.52L20 1.04l-.52.522L11.04 10l8.44 8.438.52.52L18.96 20l-.522-.52L10 11.04l-8.438 8.44-.52.52L0 18.96l.52-.522L8.96 10z" fillRule="evenodd" />
                                                </symbol>
                                            </svg>
                                            <div role="search" className="sbx-sffv__wrapper">
                                                <input type="search" name="search" placeholder="Search for other..." autoComplete="off" required className="sbx-sffv__input" />
                                                <button type="submit" title="Submit your search query." className="sbx-sffv__submit">
                                                    <i className="fa fa-search" aria-hidden="true">
                                                    </i>
                                                </button>
                                                <button type="reset" title="Clear the search query." className="sbx-sffv__reset">
                                                    <i className="fa fa-times" aria-hidden="true">
                                                    </i>
                                                </button>
                                            </div>
                                        </form>
                                        <div className="ais-refinement-list--item">
                                            <div>
                                                <a href="/" className="facet-item">
                                                    <input type="checkbox" className="ais-refinement-list--checkbox" defaultValue="Insignia™" />Insignia™<span className="facet-count">(746)</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-refinement-list--item">
                                            <div>
                                                <a href="/" className="facet-item">
                                                    <input type="checkbox" className="ais-refinement-list--checkbox" defaultValue="Samsung" />Samsung<span className="facet-count">(633)</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-refinement-list--item">
                                            <div>
                                                <a href="/" className="facet-item">
                                                    <input type="checkbox" className="ais-refinement-list--checkbox" defaultValue="Metra" />Metra<span className="facet-count">(591)</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-refinement-list--item">
                                            <div>
                                                <a href="/" className="facet-item">
                                                    <input type="checkbox" className="ais-refinement-list--checkbox" defaultValue="HP" />HP<span className="facet-count">(530)</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-refinement-list--item">
                                            <div>
                                                <a href="/" className="facet-item">
                                                    <input type="checkbox" className="ais-refinement-list--checkbox" defaultValue="Apple" />Apple<span className="facet-count">(442)</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="rating" className="facet">
                        <div data-reactroot>
                            <div className="ais-root ais-star-rating">
                                <div className="ais-star-rating--header ais-header">
                                    <div className="facet-title">Ratings</div>
                                </div>
                                <div className="ais-body ais-star-rating--body">
                                    <div className="ais-star-rating--list">
                                        <div className="ais-star-rating--item">
                                            <div>
                                                <a className="ais-star-rating--link" href>
                                                    <span className="ais-star-rating--star" />
                                                    <span className="ais-star-rating--star" />
                                                    <span className="ais-star-rating--star" />
                                                    <span className="ais-star-rating--star" />
                                                    <span className="ais-star-rating--star__empty" />
                                                    &amp; Up
                                                    <span className="ais-star-rating--count">16,075</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-star-rating--item">
                                            <div>
                                                <a className="ais-star-rating--link" href>
                                                    <span className="ais-star-rating--star" />
                                                    <span className="ais-star-rating--star" />
                                                    <span className="ais-star-rating--star" />
                                                    <span className="ais-star-rating--star__empty" />
                                                    <span className="ais-star-rating--star__empty" />
                                                    &amp; Up
                                                    <span className="ais-star-rating--count">17,697</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-star-rating--item">
                                            <div>
                                                <a className="ais-star-rating--link" href>
                                                    <span className="ais-star-rating--star" />
                                                    <span className="ais-star-rating--star" />
                                                    <span className="ais-star-rating--star__empty" />
                                                    <span className="ais-star-rating--star__empty" />
                                                    <span className="ais-star-rating--star__empty" />
                                                    &amp; Up
                                                    <span className="ais-star-rating--count">17,891</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ais-star-rating--item">
                                            <div>
                                                <a className="ais-star-rating--link" href>
                                                    <span className="ais-star-rating--star" />
                                                    <span className="ais-star-rating--star__empty" />
                                                    <span className="ais-star-rating--star__empty" />
                                                    <span className="ais-star-rating--star__empty" />
                                                    <span className="ais-star-rating--star__empty" />
                                                    &amp; Up
                                                    <span className="ais-star-rating--count">18,047</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="prices" className="facet">
                        <div data-reactroot>
                            <div className="ais-root ais-price-ranges">
                                <div className="ais-price-ranges--header ais-header">
                                    <div className="facet-title">Prices</div>
                                </div>
                                <div className="ais-body ais-price-ranges--body">
                                    <div>
                                        <div className="ais-price-ranges--list nav-list">
                                            <div className="ais-price-ranges--item">
                                                <a className="ais-price-ranges--link" href="#">
                                                    <div>
                                                        ≤
                                                        1
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ais-price-ranges--item">
                                                <a className="ais-price-ranges--link" href="#">
                                                    <div>
                                                        $1
                                                        -
                                                        80
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ais-price-ranges--item">
                                                <a className="ais-price-ranges--link" href="#">
                                                    <div>
                                                        $80
                                                        -
                                                        160
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ais-price-ranges--item">
                                                <a className="ais-price-ranges--link" href="#">
                                                    <div>
                                                        $160
                                                        -
                                                        240
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ais-price-ranges--item">
                                                <a className="ais-price-ranges--link" href="#">
                                                    <div>
                                                        $240
                                                        -
                                                        1,820
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ais-price-ranges--item">
                                                <a className="ais-price-ranges--link" href="#">
                                                    <div>
                                                        $1,820
                                                        -
                                                        3,400
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ais-price-ranges--item">
                                                <a className="ais-price-ranges--link" href="#">
                                                    <div>
                                                        $3,400
                                                        -
                                                        4,980
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ais-price-ranges--item">
                                                <a className="ais-price-ranges--link" href="#">
                                                    <div>
                                                        ≥
                                                        $4,980
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <form className="ais-price-ranges--form">
                                            <label className="ais-price-ranges--label">
                                                <span className="ais-price-ranges--currency">
                                                    {/* react-text: 34 */}${/* /react-text */}{/* react-text: 35 */} {/* /react-text */}
                                                </span>
                                                <input type="number" style={{ width: '50px' }} className="ais-price-ranges--input" defaultValue />
                                            </label>
                                            <span className="ais-price-ranges--separator">
                                                {/* react-text: 38 */} {/* /react-text */}{/* react-text: 39 */}to{/* /react-text */}{/* react-text: 40 */} {/* /react-text */}
                                            </span>
                                            <label className="ais-price-ranges--label">
                                                <span className="ais-price-ranges--currency">
                                                    {/* react-text: 43 */}${/* /react-text */}{/* react-text: 44 */} {/* /react-text */}
                                                </span>
                                                <input type="number" style={{ width: '50px' }} className="ais-price-ranges--input" defaultValue />
                                            </label>
                                            <button className="ais-price-ranges--button" type="submit">Go</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="thank-you">
                    Data courtesy of <a href="https://developer.bestbuy.com/">Best Buy</a>
                </div>
            </div>

        );
    }
}

export default Sidebar;