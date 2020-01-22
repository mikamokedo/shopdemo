import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {feetListProducts} from '../action/products';
import Iteam from './Item';
class MainProduct extends Component {
  constructor(props) {
    super(props);
      this.state={
        listProducts : []
      }
  }
  

componentWillMount() {
  this.props.feetListProducts();
}
componentWillReceiveProps(nexprops){
  if(nexprops.listProducts && nexprops.listProducts.length > 0){
    this.setState({
      listProducts : nexprops.listProducts
    })
  }



}
prinListItem = () =>{
  let xhtml = null;
  let listProducts = this.state.listProducts;
  xhtml = listProducts.map((item) =>{
    return(<Iteam item ={item}/>) 
  })
  return xhtml;
}


    render() {
        return (
            <div className="product-area">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-4">
                  <div className="product-catagori-area">
                    <div className="product-categeries">
                      <h2>Categeries</h2>
                      <div className="panel-group" id="accrodian">
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <i className="fa fa-heart" /> Style
                              <a className="collapsed" data-toggle="collapse" href="#colOne" data-parent="#accrodian" aria-expanded="false" />
                            </h4>
                          </div>
                          <div className="panel-collapse collapse" id="colOne" aria-expanded="false">
                            <div className="panel-body">
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-1</a>
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-2</a>
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-3</a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <i className="fa fa-male" /> Men
                              <a className="collapsed" data-toggle="collapse" href="#colTwo" data-parent="#accrodian" aria-expanded="false" />
                            </h4>
                          </div>
                          <div className="panel-collapse collapse" id="colTwo" aria-expanded="false">
                            <div className="panel-body">
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-1</a>
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-2</a>
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-3</a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <i className="fa fa-female" /> Women
                              <a className="collapsed" data-toggle="collapse" href="#colThree" data-parent="#accrodian" aria-expanded="false" />
                            </h4>
                          </div>
                          <div className="panel-collapse collapse" id="colThree" aria-expanded="false">
                            <div className="panel-body">
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-1</a>
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-2</a>
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-3</a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <i className="fa fa-odnoklassniki" /> Kids
                              <a className="collapsed" data-toggle="collapse" href="#colFour" data-parent="#accrodian" aria-expanded="false" />
                            </h4>
                          </div>
                          <div className="panel-collapse collapse" id="colFour" aria-expanded="false">
                            <div className="panel-body">
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-1</a>
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-2</a>
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-3</a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <i className="fa fa-gift" /> Gift
                              <a className="collapsed" data-toggle="collapse" href="#colFive" data-parent="#accrodian" aria-expanded="false" />
                            </h4>
                          </div>
                          <div className="panel-collapse collapse" id="colFive" aria-expanded="false">
                            <div className="panel-body">
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-1</a>
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-2</a>
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-3</a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <i className="fa fa-bitbucket" /> Accessories
                              <a className="collapsed" data-toggle="collapse" href="#colSix" data-parent="#accrodian" aria-expanded="false" />
                            </h4>
                          </div>
                          <div className="panel-collapse collapse" id="colSix" aria-expanded="false">
                            <div className="panel-body">
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-1</a>
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-2</a>
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-3</a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <i className="fa fa-coffee" /> Offer
                              <a className="collapsed" data-toggle="collapse" href="#colSeven" data-parent="#accrodian" aria-expanded="false" />
                            </h4>
                          </div>
                          <div className="panel-collapse collapse" id="colSeven" aria-expanded="false">
                            <div className="panel-body">
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-1</a>
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-2</a>
                              <a href="hihi"><i className="fa fa-angle-double-right" /> Categori-3</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="best-seller-area">
                      <h2 className="header-title">Best seller</h2>
                      <div className="best-sell-product">
                        <div className="best-product-img">
                          <a href="hihi"><img src="img/product/best-product-1.png" alt="product" /></a>
                        </div>
                        <div className="best-product-content">
                          <h2><a href="hihi">Et harum quidem red T-shirt</a></h2>
                          <h3>$45.00</h3>
                          <div className="best-product-rating">
                            <a href="hihi"><i className="fa fa-star" /></a>
                            <a href="hihi"><i className="fa fa-star" /></a>
                            <a href="hihi"><i className="fa fa-star" /></a>
                            <a href="hihi"><i className="fa fa-star" /></a>
                            <a href="hihi"><i className="fa fa-star-o" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="best-sell-product">
                        <div className="best-product-img">
                          <a href="hihi"><img src="img/product/best-product-2.png" alt="product" /></a>
                        </div>
                        <div className="best-product-content">
                          <h2><a href="hihi">Et harum quidem red T-shirt</a></h2>
                          <h3>$45.00</h3>
                          <div className="best-product-rating">
                            <a href="hihi"><i className="fa fa-star" /></a>
                            <a href="hihi"><i className="fa fa-star" /></a>
                            <a href="hihi"><i className="fa fa-star" /></a>
                            <a href="hihi"><i className="fa fa-star" /></a>
                            <a href="hihi"><i className="fa fa-star-o" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="best-sell-product">
                        <div className="best-product-img">
                          <a href="hihi"><img src="img/product/best-product-3.png" alt="product" /></a>
                        </div>
                        <div className="best-product-content">
                          <h2><a href="hihi">Et harum quidem red T-shirt</a></h2>
                          <h3>$45.00</h3>
                          <div className="best-product-rating">
                            <a href="hihi"><i className="fa fa-star" /></a>
                            <a href="hihi"><i className="fa fa-star" /></a>
                            <a href="hihi"><i className="fa fa-star" /></a>
                            <a href="hihi"><i className="fa fa-star" /></a>
                            <a href="hihi"><i className="fa fa-star-o" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="best-sell-product">
                        <div className="best-product-img">
                          <a href="hihi"><img src="img/product/best-product-2.png" alt="product" /></a>
                        </div>
                        <div className="best-product-content">
                          <h2><a href="hihi">Et harum quidem red T-shirt</a></h2>
                          <h3>$45.00</h3>
                          <div className="best-product-rating">
                            <a href="hihi"><i className="fa fa-star" /></a>
                            <a href="hihi"><i className="fa fa-star" /></a>
                            <a href="hihi"><i className="fa fa-star" /></a>
                            <a href="hihi"><i className="fa fa-star" /></a>
                            <a href="hihi"><i className="fa fa-star-o" /></a>
                          </div>
                        </div>
                      </div>
                      <p className="view-details">
                        <a href="hihi">View details</a>
                      </p>
                    </div>
                    <div className="add-kids single-add">
                      <a href="hihi"><img src="img/banner/kids-ad.jpg" alt="add" /></a>
                    </div>
                    <div className="testmonial-area fix">
                      <h2 className="header-title">Testimonial</h2>
                      <div id="owl-testmonial" className="owl-carousel owl-theme">
                        <div className="owl-wrapper-outer"><div className="owl-wrapper"><div className="owl-item"><div className="testmonial fix">
                                <span><i className="fa fa-quote-left" /></span>
                                <p>Lorem ipsum dolor consetetuer adipiscing elit. Aenean commdo ligula eget dolor. Aenean massa.</p>
                                <h3>-MatthE Jensen</h3>
                                <img src="img/testmonial.jpg" alt="" />
                              </div></div><div className="owl-item"><div className="testmonial fix">
                                <span><i className="fa fa-quote-left" /></span>
                                <p>Lorem ipsum dolor consetetuer adipiscing elit. Aenean commdo ligula eget dolor. Aenean massa.</p>
                                <h3>-MatthE Jensen</h3>
                                <img src="img/testmonial.jpg" alt="" />
                              </div></div></div></div>
                        <div className="owl-controls clickable"><div className="owl-buttons"><div className="owl-prev"><i className="fa fa-chevron-left icon-white" /></div><div className="owl-next"><i className="fa fa-chevron-right icon-white" /></div></div></div></div>
                    </div>
                    <div className="subscribe-area">
                      <h2>Subscribe Letter</h2>
                      <form action="#">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Enter your E-mail" />
                          <button type="button" className="btn"><i className="fa fa-envelope-o" /></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-9 col-sm-8">
                  <div className="product-items-area">
                    <div className="product-items">
                      <h2 className="product-header">ALL PRODUCTS FOR SELL</h2>
                        <div id="product-slider-kids" className="wrap_slide">
                            {this.prinListItem()}

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



const mapDispatchToProps = (dispatch) => {
  return {
    feetListProducts : bindActionCreators(feetListProducts,dispatch)
  }
}


const mapStateToProps = (state) => {
  return {
    listProducts : state.ListProducts
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainProduct)