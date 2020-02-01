import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {feetSingleProducts} from '../action/products';
class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleItem : null
    }
  }
  

    componentWillMount() {
      const id = this.props.match.match.params.id;
      this.props.putIdTosaga(id);
    }


    prinStar = () =>{
      let xhtml = [];
    const  numberstar = this.props.singleProductsFromStore.rate;
      for (let index = 0; index < numberstar; index++) {
            xhtml.push(<a href="/"><i className="fa fa-star" /></a>);   
      }
      for (let index2 = 0; index2 < 5 - numberstar; index2++) {
        xhtml.push(<a href="/"><i className="fa fa-star-o" /></a>);
    
  }
      return xhtml;

    }
    render() {
     const singleItem = this.props.singleProductsFromStore;


        return(
            <div className="product-item-area">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-4">
                  <div className="product-item-categori">
                    <div className="product-type">
                      <h2>Product Type</h2>
                      <ul>
                        <li><a href="/"><i className="fa fa-angle-right" />Dresses</a></li>
                        <li><a href="/" className="active"><i className="fa fa-angle-right" />Shirts</a></li>
                        <li><a href="/"><i className="fa fa-angle-right" />Coats</a></li>
                        <li><a href="/"><i className="fa fa-angle-right" />Jackets</a></li>
                        <li><a href="/"><i className="fa fa-angle-right" />Storts</a></li>
                        <li><a href="/"><i className="fa fa-angle-right" />Jeans</a></li>
                        <li><a href="/"><i className="fa fa-angle-right" />Skirts</a></li>
                        <li><a href="/"><i className="fa fa-angle-right" />Lingeris</a></li>
                        <li><a href="/"><i className="fa fa-angle-right" />Shoes</a></li>
                        <li><a href="/"><i className="fa fa-angle-right" />Bags</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-9 col-sm-8 mt-2">
                  <div className="row">
                    <div className="col-md-5 col-sm-5">
                      <div className="product-item-tab">
                        {/* Tab panes */}
                        <div className="single-tab-content">
                          <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="img-one"><img src={singleItem.image} alt="tab-img" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-7">
                      <div className="product-tab-content">
                        <div className="product-tab-header">
    <h1>{singleItem.name}</h1>
                          <div className="best-product-rating">
                  {this.prinStar()}
                          </div>
                          <h3>${singleItem.price}</h3>
                        </div>
                        <div className="product-item-code">
                          <p>Item Code  :   #897896</p>
                          <p>Availability :   {singleItem.quantity}</p>
                        </div>
                        <div className="product-item-details">
                          <p>{singleItem.descript}</p>
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
                              <a href="/"><i className="fa fa-heart" /></a>
                              <p>wishlist</p>
                            </div>
                            <div className="single-wishlist">
                              <a href="/"><i className="fa fa-signal" /></a>
                              <p>Compare</p>
                            </div>
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
    const mapStateToProps = (state) => {
      return {
        singleProductsFromStore : state.singleProducts
      }
    }
    const mapDispatchToProps = (dispatch) => {
      return {
      putIdTosaga: bindActionCreators(feetSingleProducts,dispatch)
      }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)