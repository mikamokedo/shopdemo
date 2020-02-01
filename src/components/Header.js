import React, { Component } from 'react';
import Menu from './Menu.js';
import { bindActionCreators } from 'redux';
import {fillterText,fillterSelect,fillterSubmit} from '../action/fillter';
import {connect} from 'react-redux';
import Cart from './Cart';
class Header extends Component {
  onSelect = (event) =>{
    let name = event.target.name;
    let fill = event.target.value;
    let value ={
      [name] : fill
    }
    this.props.fillterSelectAction(value);
  }
  onFillerName = (event) =>{
    let name = event.target.name;
    let fill = event.target.value;
    let value ={
      [name] : fill
    }
    this.props.fillterTextAction(value);
  }
  submitSearch = () =>{
    this.props.fillterSubmitAction();
  }

    render() {
        return (
          <div>
<div className="header-area">
        <div className="header-top-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="header-top-left">
                  <div className="header-top-menu">
                    <ul className="list-inline">
                      <li><img src="/img/flag.png" alt="flag" /></li>
                      <li className="dropdown"><a href="hihi" data-toggle="dropdown">English</a>
                        <ul className="dropdown-menu">
                          <li><a href="hihi">Spanish</a></li>
                          <li><a href="hihi">China</a></li>
                        </ul>
                      </li>
                      <li className="dropdown"><a href="hihi" data-toggle="dropdown">USD</a>
                        <ul className="dropdown-menu usd-dropdown">
                          <li><a href="hihi">USD</a></li>
                          <li><a href="hihi">GBP</a></li>
                          <li><a href="hihi">EUR</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <p>Welcome visitor!</p>
                </div>
              </div>
              <div className="col-md-8 col-sm-8 col-xs-12">
                <div className="header-top-right">
                  <ul className="list-inline">
                    <li><a href="hihi"><i className="fa fa-user" />My Account</a></li>
                    <li><a href="hihi"><i className="fa fa-heart" />Wishlist</a></li>
                    <li><a href="checkout.html"><i className="fa fa-check-square-o" />Checkout</a></li>
                    <li><a href="hihi"><i className="fa fa-lock" />Login</a></li>
                    <li><a href="hihi"><i className="fa fa-pencil-square-o" />Register</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-2 col-xs-12">
                <div className="header-logo">
                  <a href="index.html"><img src="/img/logo.png" alt="logo" /></a>
                </div>
              </div>
              <div className="col-md-10 col-sm-10 col-xs-12">
                <div className="search-chart-list">
                  <div className="catagori-menu">
                    <ul className="list-inline">
                      <li><i className="fa fa-search" /></li>
                      <li>
                        <select name="fillCate" onChange={(event) => this.onSelect(event)}>
                        <option value="all">Select Category</option>
                          <option value="men">MEN</option>
                          <option value="women">WOMEN</option>
                          <option value="kid">KID</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                  <div className="header-search">
                    <form action="#">
                      <input type="text" placeholder="My Search" onChange={(event) => this.onFillerName(event)} name="fillerName"/>
                      <button type="button" onClick ={() => this.submitSearch()}><i className="fa fa-search"/></button>
                    </form>
                  </div>
                <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Menu />
      </div>
        );
    }
}
const mapStateToProps = (state) =>{
  return{
    fillterValueText : state.fillterValueText,
    fillterValueSelect : state.fillterValueSelect,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    fillterTextAction:bindActionCreators(fillterText,dispatch),
    fillterSelectAction:bindActionCreators(fillterSelect,dispatch),
    fillterSubmitAction:bindActionCreators(fillterSubmit,dispatch)

  }
  
} 



export default connect(mapStateToProps, mapDispatchToProps)(Header)