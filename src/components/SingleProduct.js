import React, { Component } from 'react';
class SingleProduct extends Component {
    render() {
        return(
            <div className="product-item-area">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-4">
                  <div className="product-item-categori">
                    <div className="product-type">
                      <h2>Product Type</h2>
                      <ul>
                        <li><a href="#"><i className="fa fa-angle-right" />Dresses</a></li>
                        <li><a href="#" className="active"><i className="fa fa-angle-right" />Shirts</a></li>
                        <li><a href="#"><i className="fa fa-angle-right" />Coats</a></li>
                        <li><a href="#"><i className="fa fa-angle-right" />Jackets</a></li>
                        <li><a href="#"><i className="fa fa-angle-right" />Storts</a></li>
                        <li><a href="#"><i className="fa fa-angle-right" />Jeans</a></li>
                        <li><a href="#"><i className="fa fa-angle-right" />Skirts</a></li>
                        <li><a href="#"><i className="fa fa-angle-right" />Lingeris</a></li>
                        <li><a href="#"><i className="fa fa-angle-right" />Shoes</a></li>
                        <li><a href="#"><i className="fa fa-angle-right" />Bags</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="price-filter">
                    <h2>Filter by price</h2>
                    <div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><div className="ui-slider-range ui-widget-header ui-corner-all" style={{left: '17.6%', width: '82.4%'}} /><span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} style={{left: '17.6%'}} /><span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} style={{left: '100%'}} /></div>
                    <button className="btn btn-default">Filter</button>
                    <p>
                      <label htmlFor="amount">Price:</label>
                      <input type="text" id="amount" readOnly style={{border: 0, color: '#f6931f', fontWeight: 'bold'}} />
                    </p>
                  </div>
                  <div className="filter-size-area">
                    <h2>Filter by Size</h2>
                    <div className="filter-size">
                      <div className="filter-size-left">
                        <p>M (6)</p>
                        <p>X (7)</p>
                        <p>XS (10)</p>
                      </div>
                      <div className="filter-size-right">
                        <p>M (6)</p>
                        <p>X (7)</p>
                        <p>XS (10)</p>
                      </div>
                    </div>
                  </div>
                  <div className="add-shop">
                    <div className="add-kids single-add">
                      <a href="#"><img src="img/banner/kids-ad.jpg" alt="add" /></a>
                    </div>
                    <div className="add-dress single-add">
                      <a href="#"><img src="img/banner/kids-ad-2.jpg" alt="add" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-9 col-sm-8">
                  <div className="row">
                    <div className="col-md-5 col-sm-5">
                      <div className="product-item-tab">
                        {/* Tab panes */}
                        <div className="single-tab-content">
                          <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="img-one"><img src="img/single-product/single-product-1.jpg" alt="tab-img" /></div>
                            <div role="tabpanel" className="tab-pane" id="img-two"><img src="img/single-product/single-product-2.jpg" alt="tab-img" /></div>
                            <div role="tabpanel" className="tab-pane" id="img-three"><img src="img/single-product/single-product-1.jpg" alt="tab-img" /></div>
                          </div>
                        </div>
                        {/* Nav tabs */}
                        <div className="single-tab-img">
                          <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active"><a href="#img-one" role="tab" data-toggle="tab"><img src="img/single-product/s1.jpg" alt="tab-img" /></a></li>
                            <li role="presentation"><a href="#img-two" role="tab" data-toggle="tab"><img src="img/single-product/s2.jpg" alt="tab-img" /></a></li>
                            <li role="presentation" className="tab-last-li"><a href="#img-three" role="tab" data-toggle="tab"><img src="img/single-product/s3.jpg" alt="tab-img" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-7">
                      <div className="product-tab-content">
                        <div className="product-tab-header">
                          <h1>Baby New Style Jackets</h1>
                          <div className="best-product-rating">
                            <a href="#"><i className="fa fa-star" /></a>
                            <a href="#"><i className="fa fa-star" /></a>
                            <a href="#"><i className="fa fa-star" /></a>
                            <a href="#"><i className="fa fa-star" /></a>
                            <a href="#"><i className="fa fa-star" /></a>
                            <p>(3 costomar review)</p>
                          </div>
                          <h3>$52.00</h3>
                        </div>
                        <div className="product-item-code">
                          <p>Item Code  :   #897896</p>
                          <p>Availability :   In stock</p>
                        </div>
                        <div className="product-item-details">
                          <p>Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada. Mauris. </p>
                        </div>
                        <div className="size-chart">
                          <p>Size Chart: <i className="fa fa-plus" /></p>
                          {/*
                                            <select name="" id="">
                                                <option value="">Size Chart: <i class="fa fa-plus"></i></option>
                                                <option value="">Lg</option>
                                                <option value="">Xs</option>
                                                <option value="">Xs</option>
                                            </select>
                                            */}
                        </div>
                        <div className="available-option">
                          <h2>Available Options:</h2>
                          <div className="color-option fix">
                            <p>Color:</p>
                            <a href="#" className="color-1" />
                            <a href="#" className="color-2" />
                            <a href="#" className="color-3" />
                            <a href="#" className="color-4" />
                            <a href="#" className="color-5" />
                            <a href="#" className="color-6" />
                          </div>
                          <div className="size-option fix">
                            <p>Size:</p>
                            <select>
                              <option value="Choose an option">Choose an option</option>
                              <option value="Lg">Lg</option>
                              <option value="Xs">M</option>
                              <option value="Xs">Xs</option>
                            </select>
                          </div>
                          <div className="wishlist-icon">
                            <div className="single-wishlist">
                              <a href="#"><i className="fa fa-heart" /></a>
                              <p>wishlist</p>
                            </div>
                            <div className="single-wishlist">
                              <a href="#"><i className="fa fa-signal" /></a>
                              <p>Compare</p>
                            </div>
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="description-tab">
                        {/* Nav tabs */}
                        <ul className="nav nav-tabs" role="tablist">
                          <li role="presentation" className="active"><a href="#description" role="tab" data-toggle="tab">Description</a></li>
                          <li role="presentation"><a href="#information" role="tab" data-toggle="tab">Addisonal information</a></li>
                          <li role="presentation"><a href="#reviews" role="tab" data-toggle="tab">Reviews (3)</a></li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content">
                          <div role="tabpanel" className="tab-pane active" id="description">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                          </div>
                          <div role="tabpanel" className="tab-pane" id="information">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. </p>
                          </div>
                          <div role="tabpanel" className="tab-pane" id="reviews">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="single-product-slider similar-product">
                        <div className="product-items">
                          <h2 className="product-header">Similar PRODUCTS</h2>
                          <div className="row">
                            <div id="singleproduct-slider" className="owl-carousel owl-theme" style={{opacity: 1, display: 'block'}}>
                              <div className="owl-wrapper-outer"><div className="owl-wrapper" style={{width: '3516px', left: '0px', display: 'block', transition: 'all 0ms ease 0s', transform: 'translate3d(0px, 0px, 0px)'}}><div className="owl-item" style={{width: '293px'}}><div className="col-md-4">
                                      <div className="single-product">
                                        <div className="single-product-img">
                                          <a href="#">
                                            <img className="primary-img" src="img/product/single-product-1.jpg" alt="product" />
                                            <img className="secondary-img" src="img/product/kids-1.jpg" alt="product" />
                                          </a>
                                          <div className="single-product-action">
                                            <a href="#"><i className="fa fa-external-link" /></a>
                                            <a href="#"><i className="fa fa-shopping-cart" /></a>
                                          </div>
                                        </div>
                                        <div className="single-product-content">
                                          <div className="product-content-left">
                                            <h2><a href="#">EXCLUSIVE STYLE</a></h2>
                                            <p>Jacket’s</p>
                                          </div>
                                          <div className="product-content-right">
                                            <h3>$27.00</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div></div><div className="owl-item" style={{width: '293px'}}><div className="col-md-4">
                                      <div className="single-product">
                                        <div className="single-product-img">
                                          <a href="#">
                                            <img className="primary-img" src="img/product/kids-2.jpg" alt="product" />
                                            <img className="secondary-img" src="img/product/single-product-2.jpg" alt="product" />
                                          </a>
                                          <div className="single-product-action">
                                            <a href="#"><i className="fa fa-external-link" /></a>
                                            <a href="#"><i className="fa fa-shopping-cart" /></a>
                                          </div>
                                        </div>
                                        <div className="single-product-content">
                                          <div className="product-content-left">
                                            <h2><a href="#">EXCLUSIVE STYLE</a></h2>
                                            <p>Jacket’s</p>
                                          </div>
                                          <div className="product-content-right">
                                            <h3>$27.00</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div></div><div className="owl-item" style={{width: '293px'}}><div className="col-md-4">
                                      <div className="single-product">
                                        <div className="single-product-img">
                                          <a href="#">
                                            <img className="primary-img" src="img/product/kids-4.jpg" alt="product" />
                                            <img className="secondary-img" src="img/product/men-2.jpg" alt="product" />
                                          </a>
                                          <div className="single-product-action">
                                            <a href="#"><i className="fa fa-external-link" /></a>
                                            <a href="#"><i className="fa fa-shopping-cart" /></a>
                                          </div>
                                        </div>
                                        <div className="single-product-content">
                                          <div className="product-content-left">
                                            <h2><a href="#">EXCLUSIVE STYLE</a></h2>
                                            <p>Jacket’s</p>
                                          </div>
                                          <div className="product-content-right">
                                            <h3>$27.00</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div></div><div className="owl-item" style={{width: '293px'}}><div className="col-md-4">
                                      <div className="single-product">
                                        <div className="single-product-img">
                                          <a href="#">
                                            <img className="primary-img" src="img/product/single-product-1.jpg" alt="product" />
                                            <img className="secondary-img" src="img/product/kids-1.jpg" alt="product" />
                                          </a>
                                          <div className="single-product-action">
                                            <a href="#"><i className="fa fa-external-link" /></a>
                                            <a href="#"><i className="fa fa-shopping-cart" /></a>
                                          </div>
                                        </div>
                                        <div className="single-product-content">
                                          <div className="product-content-left">
                                            <h2><a href="#">EXCLUSIVE STYLE</a></h2>
                                            <p>Jacket’s</p>
                                          </div>
                                          <div className="product-content-right">
                                            <h3>$27.00</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div></div><div className="owl-item" style={{width: '293px'}}><div className="col-md-4">
                                      <div className="single-product">
                                        <div className="single-product-img">
                                          <a href="#">
                                            <img className="primary-img" src="img/product/single-product-2.jpg" alt="product" />
                                            <img className="secondary-img" src="img/product/women-2.jpg" alt="product" />
                                          </a>
                                          <div className="single-product-action">
                                            <a href="#"><i className="fa fa-external-link" /></a>
                                            <a href="#"><i className="fa fa-shopping-cart" /></a>
                                          </div>
                                        </div>
                                        <div className="single-product-content">
                                          <div className="product-content-left">
                                            <h2><a href="#">EXCLUSIVE STYLE</a></h2>
                                            <p>Jacket’s</p>
                                          </div>
                                          <div className="product-content-right">
                                            <h3>$27.00</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div></div><div className="owl-item" style={{width: '293px'}}><div className="col-md-4">
                                      <div className="single-product">
                                        <div className="single-product-img">
                                          <a href="#">
                                            <img className="primary-img" src="img/product/single-product-3.jpg" alt="product" />
                                            <img className="secondary-img" src="img/product/men-2.jpg" alt="product" />
                                          </a>
                                          <div className="single-product-action">
                                            <a href="#"><i className="fa fa-external-link" /></a>
                                            <a href="#"><i className="fa fa-shopping-cart" /></a>
                                          </div>
                                        </div>
                                        <div className="single-product-content">
                                          <div className="product-content-left">
                                            <h2><a href="#">EXCLUSIVE STYLE</a></h2>
                                            <p>Jacket’s</p>
                                          </div>
                                          <div className="product-content-right">
                                            <h3>$27.00</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div></div></div></div>
                              <div className="owl-controls clickable"><div className="owl-buttons"><div className="owl-prev"><i className="fa fa-chevron-left icon-white" /></div><div className="owl-next"><i className="fa fa-chevron-right icon-white" /></div></div></div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            );
        }
    }
    
    export default SingleProduct;