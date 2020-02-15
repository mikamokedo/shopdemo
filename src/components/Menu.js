import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";
class Menu extends Component {
    render() {
        return(
        <div className="main-menu-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-menu hidden-xs">
                <nav>
                  <ul>
                    <li><NavLink to="/" exact={true} >Home</NavLink></li>
                    <li><NavLink to="/admin">Admin</NavLink></li>
                  </ul>
                </nav>
              </div>
              {/* Mobile MENU AREA */}
              <div className="mobile-menu hidden-sm hidden-md hidden-lg">
                <nav style={{display: 'block'}}>
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="shop.html">Shop</a>
                      <ul>
                        <li><a href="hihi">Shop Layouts</a>
                          <ul>
                            <li><a href="hihi">Full Width</a></li>
                            <li><a href="hihi">Sidebar Left</a></li>
                            <li><a href="hihi">Sidebar Right</a></li>
                            <li><a href="hihi">List View</a></li>
                          </ul>	
                        </li>
                        <li><a href="hihi">Shop Pages</a>
                          <ul>
                            <li><a href="hihi">Category</a></li>
                            <li><a href="hihi">My Account</a></li>
                            <li><a href="hihi">Wishlist</a></li>
                            <li><a href="hihi">Shopping Cart</a></li>
                          </ul>	
                        </li>
                        <li><a href="hihi">Product Types</a>
                          <ul>
                            <li><a href="hihi">Simple Product</a></li>
                            <li><a href="hihi">Variable Product</a></li>
                            <li><a href="hihi">Grouped Product</a></li>
                            <li><a href="hihi">Downloadable</a></li>
                          </ul>	
                        </li>
                      </ul>
                    </li>
                    <li><a href="shop.html">Men</a></li>
                    <li><a href="shop.html">Women</a></li>
                    <li><a href="shop.html">Kids</a></li>
                    <li><a href="shop.html">gift</a></li>
                    <li><a href="blog-left-sidebar.html">Blog</a>
                      <ul>
                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                        <li><a href="blog-single.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li><a href="hihi">Pages</a>
                      <ul>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="shop.html">Men</a></li>
                        <li><a href="shop.html">Women</a></li>
                        <li><a href="shop.html">Kids</a></li>
                        <li><a href="shop.html">Gift</a></li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="single-product.html">Single Product</a></li>
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="look-book.html">Look Book</a></li>
                        <li><a href="404.html">Error 404</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

        );
    }
}

export default Menu;