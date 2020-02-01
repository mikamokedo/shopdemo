import React, { Component } from 'react';
import CheckoutItem from './CheckoutItem';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {off_checkout_success} from '../action/redirect';
import {
  Redirect
} from "react-router-dom";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state ={
      firstName : "",
      lasttName : "",
      address : "",
      city : "",
      postcode : "",
      email : "",
      phone : "",
      flag : false
    }

  }
    prinCheckoutItem = () =>{
      let {cartItemStore} = this.props;
      let xhtml = null; 
        if(cartItemStore && cartItemStore.length > 0){

            xhtml = cartItemStore.map((element,key) =>{
                return <CheckoutItem value ={element} key={key}/>
            })
        }
        return xhtml;

    }

    totalMoney = () =>{
      let {cartItemStore} = this.props;
         let result = 0;
         result =   cartItemStore.reduce((total,ele) =>{
            return total += ele.price * ele.buy
         },0)
         return result;
    }
    getValue = (event) =>{
      let name = event.target.name;
      let value = event.target.value;
      this.setState({
        [name] : value
      })

    }
    submitorder = () =>{
     this.props.changestatusCheckoutAction();
if(this.state.firstName && this.state.lasttName && this.state.address && this.state.city && this.state.postcode && this.state.email && this.state.phone){
  this.setState({
    flag:true
  });
}
    
    
    }




    render() {
      if(this.state.flag){
        return <Redirect to="/order-success.html" />
      }
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
                            First Name <sup>*</sup>
                          </label>
                          <div className="col-md-9">
                          <span className="text-danger">{(this.state.firstName === "") ? "Please type it!" : ""}</span>
                            <input type="text" className="form-control" onChange={(event) => this.getValue(event)} name="firstName"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Last Name <sup>*</sup>
                          </label>
                          <div className="col-md-9">
                            <span className="text-danger">{(this.state.lasttName === "") ? "Please type it!" : ""}</span>
                            <input type="text" className="form-control" onChange={(event) => this.getValue(event)} name="lasttName"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Address <sup>*</sup>
                          </label>
                          <div className="col-md-9">
                          <span className="text-danger">{(this.state.address === "") ? "Please type it!" : ""}</span>
                            <input type="text" className="form-control" onChange={(event) => this.getValue(event)} name="address"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Town / City <sup>*</sup>
                          </label>
                          <div className="col-md-9">
                          <span className="text-danger">{(this.state.city === "") ? "Please type it!" : ""}</span>
                            <input type="text" className="form-control" onChange={(event) => this.getValue(event)} name="city"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Postcode <sup>*</sup>
                          </label>
                          <div className="col-md-9">
                          <span className="text-danger">{(this.state.postcode === "") ? "Please type it!" : ""}</span>
                            <input type="text" className="form-control" onChange={(event) => this.getValue(event)} name="postcode"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            E-mail Address <sup>*</sup>
                          </label>
                          <div className="col-md-9">
                          <span className="text-danger">{(this.state.email === "") ? "Please type it!" : ""}</span>
                            <input type="text" className="form-control" onChange={(event) => this.getValue(event)} name="email"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Phone <sup>*</sup>
                          </label>
                          <div className="col-md-9">
                          <span className="text-danger">{(this.state.phone === "") ? "Please type it!" : ""}</span>
                            <input type="text" className="form-control" onChange={(event) => this.getValue(event)} name="phone"/>
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
{this.prinCheckoutItem()}





                    <div className="subtotal-area">
                      <div className="subtotal-content fix">
                        <h2 className="floatleft">Subtotal</h2>
        <h2 className="floatright">${this.totalMoney()}</h2>
                      </div>
                      <div className="subtotal-content fix">
                        <h2 className="floatleft">Shipping &amp; Handling </h2>
                        <h2 className="floatright">$15</h2>
                      </div>
                      <div className="subtotal-content fix">
                        <h2 className="floatleft">Grand Total</h2>
        <h2 className="floatright">${this.totalMoney() + 15}</h2>
                      </div>
                    </div>
                    <div className="payment-method">
                  

                      <button type="button" className="btn" onClick={() => this.submitorder()}>Place Order</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            );
        }
    }
    const mapStateToProps = (state) =>{
      return{
          cartItemStore : state.addToCart
      }
    }
    const mapDispatchToProps = (dispatch) =>{
      return {
          changestatusCheckoutAction : bindActionCreators(off_checkout_success,dispatch)
      }
      
    } 
    
    
    
    export default connect(mapStateToProps, mapDispatchToProps)(Checkout)