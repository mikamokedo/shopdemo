import React, { Component } from 'react';
import {ChangeToSlug} from '../api/slugfunction';
import {
  Link
} from "react-router-dom";
class CartItem extends Component {





    render() {
        return(
            <div className="header-chart-dropdown-list">
            <div className="dropdown-chart-left floatleft quycss">
              <Link to={`/${this.props.value.cate}/${ChangeToSlug(this.props.value.name)}.${this.props.value.id}.html`}><img src={this.props.value.image} alt="list" /></Link>
            </div>
            <div className="dropdown-chart-right">

        <h2><Link to={`/${this.props.value.cate}/${ChangeToSlug(this.props.value.name)}.${this.props.value.id}.html`}>{this.props.value.name}</Link></h2>
        <h3>Qty: {this.props.value.buy}</h3>
        <h4>$ {this.props.value.price * this.props.value.buy}</h4>
            </div>
          </div>
            );
        }
    }
    
    export default CartItem;