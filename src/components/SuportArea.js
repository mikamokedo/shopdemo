import React, { Component } from 'react';
class SupportArea extends Component {
    render() {
        return(
            <div className="support-area">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="single-support">
                    <div className="sigle-support-icon">
                      <p><i className="fa fa-plane" /></p>
                    </div>
                    <div className="sigle-support-content">
                      <h2>FREE SHIPPING </h2>
                      <p>On Ordersover $200</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="single-support">
                    <div className="sigle-support-icon">
                      <p><i className="fa fa-dollar" /></p>
                    </div>
                    <div className="sigle-support-content">
                      <h2>FREE SHIPPING </h2>
                      <p>Moneyback guarantee</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="single-support">
                    <div className="sigle-support-icon">
                      <p><i className="fa fa-clock-o" /></p>
                    </div>
                    <div className="sigle-support-content">
                      <h2>24/7 SUPPORT</h2>
                      <p>Online consultations</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 hidden-sm col-xs-12">
                  <div className="single-support">
                    <div className="sigle-support-icon">
                      <p><i className="fa fa-umbrella" /></p>
                    </div>
                    <div className="sigle-support-content">
                      <h2>SAFE SHOPPING</h2>
                      <p>Safe Shopping Guarantee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
            );
        }
    }
    
    export default SupportArea;