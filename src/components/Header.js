import React, { Component } from 'react';
import Menu from './Menu.js'
class Header extends Component {
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
                      <li><img src="img/flag.png" alt="flag" /></li>
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
                  <a href="index.html"><img src="img/logo.png" alt="logo" /></a>
                </div>
              </div>
              <div className="col-md-10 col-sm-10 col-xs-12">
                <div className="search-chart-list">
                  <div className="catagori-menu">
                    <ul className="list-inline">
                      <li><i className="fa fa-search" /></li>
                      <li>
                        <select>
                          <option value="All Categories">All Categories</option>
                          <option value="Categorie One">Categorie One</option>
                          <option value="Categorie Two">Categorie Two</option>
                          <option value="Categorie Three">Categorie Three</option>
                          <option value="Categorie Four">Categorie Four</option>
                          <option value="Categorie Five">Categorie Five</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                  <div className="header-search">
                    <form action="#">
                      <input type="text" placeholder="My Search" />
                      <button type="button"><i className="fa fa-search" /></button>
                    </form>
                  </div>
                  <div className="header-chart">
                    <ul className="list-inline">
                      <li><a href="hihi"><i className="fa fa-cart-arrow-down" /></a></li>
                      <li className="chart-li"><a href="hihi">My cart</a>
                        <ul>
                          <li>
                            <div className="header-chart-dropdown">
                              <div className="header-chart-dropdown-list">
                                <div className="dropdown-chart-left floatleft">
                                  <a href="hihi"><img src="img/product/best-product-1.png" alt="list" /></a>
                                </div>
                                <div className="dropdown-chart-right">
                                  <h2><a href="hihi">Feugiat justo lacinia</a></h2>
                                  <h3>Qty: 1</h3>
                                  <h4>£80.00</h4>
                                </div>
                              </div>
                              <div className="header-chart-dropdown-list">
                                <div className="dropdown-chart-left floatleft">
                                  <a href="hihi"><img src="img/product/best-product-2.png" alt="list" /></a>
                                </div>
                                <div className="dropdown-chart-right">
                                  <h2><a href="hihi">Aenean eu tristique</a></h2>
                                  <h3>Qty: 1</h3>
                                  <h4>£70.00</h4>
                                </div>
                              </div>
                              <div className="chart-checkout">
                                <p>subtotal<span>£150.00</span></p>
                                <button type="button" className="btn btn-default">Chckout</button>
                              </div>
                            </div> 
                          </li> 
                        </ul> 
                      </li>
                      <li><a href="hihi">2 items</a></li>
                    </ul>
                  </div>
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

export default Header;