import React, { Component } from 'react';
class Checkout extends Component {
    render() {
        return(
            <div className="checkout-area">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-7">
                  <div className="billing-address">
                    <div className="checkout-head">
                      <h2>BILLING ADDRESS</h2>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea ligula eget dolor. Aenean massa.</p>
                    </div>
                    <div className="checkout-form">
                      <form action="#" method="post" className="form-horizontal">
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            country <sup>*</sup>
                          </label>
                          <div className="col-md-9">
                            <select>
                              <option>Sellect Country</option>
                              <option>America</option>
                              <option>Afganisthan</option>
                              <option>Bangladesh</option>
                              <option>Chin</option>
                              <option>Japna</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            First Name <sup>*</sup>
                          </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Last Name <sup>*</sup>
                          </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Company Name <sup>*</sup>
                          </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Address <sup>*</sup>
                          </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                          </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Town / City <sup>*</sup>
                          </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Postcode <sup>*</sup>
                          </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            E-mail Address <sup>*</sup>
                          </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Phone <sup>*</sup>
                          </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-12">
                            <input type="checkbox" /> Create an account?
                          </label>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-12">
                            <input type="checkbox" /> Ship a billing address?
                          </label>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Order Now
                          </label>
                          <div className="col-md-9">
                            <textarea rows={9} defaultValue={""} />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-5">
                  <div className="review-order">
                    <div className="checkout-head">
                      <h2>Review your Order</h2>
                    </div>
                    <div className="single-review">
                      <div className="single-review-img">
                        <a href="#"><img src="img/checkout.jpg" alt="review" /></a>
                      </div>
                      <div className="single-review-content fix">
                        <h2><a href="#">Lorem ipsum dolor sit</a></h2>
                        <p><span>Color :</span> Verdigris Red</p>
                        <p><span>Size :</span> L</p>
                        <h3>$150.0</h3>
                      </div>
                    </div>
                    <div className="single-review">
                      <div className="single-review-img">
                        <a href="#"><img src="img/checkout.jpg" alt="review" /></a>
                      </div>
                      <div className="single-review-content fix">
                        <h2><a href="#">Lorem ipsum dolor sit</a></h2>
                        <p><span>Color :</span> Verdigris Red</p>
                        <p><span>Size :</span> L</p>
                        <h3>$150.0</h3>
                      </div>
                    </div>
                    <div className="single-review">
                      <div className="single-review-img">
                        <a href="#"><img src="img/checkout.jpg" alt="review" /></a>
                      </div>
                      <div className="single-review-content fix">
                        <h2><a href="#">Lorem ipsum dolor sit</a></h2>
                        <p><span>Color :</span> Verdigris Red</p>
                        <p><span>Size :</span> L</p>
                        <h3>$150.0</h3>
                      </div>
                    </div>
                    <div className="subtotal-area">
                      <div className="subtotal-content fix">
                        <h2 className="floatleft">Subtotal</h2>
                        <h2 className="floatright">$450</h2>
                      </div>
                      <div className="subtotal-content fix">
                        <h2 className="floatleft">Shipping &amp; Handling </h2>
                        <h2 className="floatright">$15</h2>
                      </div>
                      <div className="subtotal-content fix">
                        <h2 className="floatleft">Grand Total</h2>
                        <h2 className="floatright">$465</h2>
                      </div>
                    </div>
                    <div className="payment-method">
                      <h2>PAYMENT METHOD</h2>
                      <div className="payment-checkbox">
                        <input type="checkbox" defaultChecked /> Direct Bank Transfer
                      </div>
                      <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order wont be shipped until the funds have cleared in our account.</p>
                      <div className="payment-checkbox">
                        <input type="checkbox" /> Chaque Payment <br />
                        <input type="checkbox" /> Paypal
                      </div>
                      <button type="button" className="btn">Place Order</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            );
        }
    }
    
    export default Checkout;