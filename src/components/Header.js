import React, { Component } from 'react';
import Menu from './Menu.js';
import { bindActionCreators } from 'redux';
import {fillterText,fillterSelect,fillterSubmit} from '../action/fillter';
import {changeStatusOpenFormAction,changeStatusOpenFormLoginAction} from '../action/loginForm';
import {connect} from 'react-redux';
import Cart from './Cart';
import Register from './Register';
import Login from './Login.js';
import Usercontrol from './Usercontrol.js';
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



  printTheFormRegis = () =>{
   let xhtml =  this.props.formLogin.openRegister ? <Register /> : null;
   return xhtml;
  }

  printTheFormLogin = () =>{
    let xhtml =  this.props.formLogin.openLogin ? <Login /> : null;
    return xhtml;
   }


    render() {
        return (
          <div>
<div className="header-area">
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
                  <div className="account_form">
                    <Usercontrol />
                  </div>
                <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Menu />
      {this.printTheFormRegis()}
      {this.printTheFormLogin()}


      </div>
        );
    }
}
const mapStateToProps = (state) =>{
  return{
    fillterValueText : state.fillterValueText,
    fillterValueSelect : state.fillterValueSelect,
    formLogin : state.formLogin
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    fillterTextAction:bindActionCreators(fillterText,dispatch),
    fillterSelectAction:bindActionCreators(fillterSelect,dispatch),
    fillterSubmitAction:bindActionCreators(fillterSubmit,dispatch),
  }
  
} 



export default connect(mapStateToProps, mapDispatchToProps)(Header)