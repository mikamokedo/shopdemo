import React, { Component } from 'react';
import {deleteCart} from '../action/addcart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ChangeToSlug} from '../api/slugfunction';

import {
    Link
  } from "react-router-dom";
class CheckoutItem extends Component {

    deleteItemCart = () =>{
      this.props.deleteAction(this.props.value);
    }

    render() {
        return(
            <div className="single-review">
            <div className="single-review-img">
            <Link to={`/${this.props.value.cate}/${ChangeToSlug(this.props.value.name)}.${this.props.value.id}.html`}><img src={this.props.value.image} alt="review" /></Link>
  
            </div>
            <div className="single-review-content fix">
        <h2><Link to={`/${this.props.value.cate}/${ChangeToSlug(this.props.value.name)}.${this.props.value.id}.html`}>{this.props.value.name}</Link></h2>
        
              <p><span>quantity :</span>{this.props.value.buy}</p>
              <h3>${this.props.value.price}</h3>
            </div>
            <i className="fa fa-times absolute" aria-hidden="true" onClick={() => this.deleteItemCart()}></i>
          </div>
            );
        }
    }
    const  mapStateToProps = (state) =>{
      return {

      }
    }
    const mapDispatchToProps = (dispatch)=>{
      return {
        deleteAction : bindActionCreators(deleteCart,dispatch)
      }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);