import React, { Component } from 'react';
import {ChangeToSlug} from '../api/slugfunction';
import {
    Link
  } from "react-router-dom";
  import {connect} from 'react-redux';
  import { bindActionCreators } from 'redux';
import {addtoCart} from '../action/addcart';
class Item extends Component {
    getInforAddCart = (event) =>{
      event.preventDefault();
        this.props.getInforAddCartAction(this.props.item)
    }




    render() {
        return (
            <div className="owl-item"><div className="col-md-4">
            <div className="single-product">
              <div className="single-product-img">
              <Link to={`/${this.props.item.cate}/${ChangeToSlug(this.props.item.name)}.${this.props.item.id}.html`}>
                  <img className="primary-img" src={this.props.item.image} alt="product" />
                  </Link>
                <div className="single-product-action">
                  <Link to={`/${this.props.item.cate}/${ChangeToSlug(this.props.item.name)}.${this.props.item.id}.html`}><i className="fa fa-external-link" /></Link>
                  <a href="/" onClick={(event) => this.getInforAddCart(event)}><i className="fa fa-shopping-cart" /></a>
                </div>
              </div>
              <div className="single-product-content">
                <div className="product-content-left">
                  <h2>
                      <a href="hihi">{this.props.item.name}</a>
                    
                  </h2>
        <p>{this.props.item.cate}</p>
                </div>
                <div className="product-content-right">
                  <h3>${this.props.item.price}</h3>
                </div>
              </div>
            </div>
          </div></div>
        );
    }
}

    
const mapStateToProps = (state) =>{
  return{

  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    getInforAddCartAction:bindActionCreators(addtoCart,dispatch)

  }
  
} 



export default connect(mapStateToProps, mapDispatchToProps)(Item)