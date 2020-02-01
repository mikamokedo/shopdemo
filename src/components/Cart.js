import React, { Component } from 'react';
import CartItem from './CartItem';
import {connect} from 'react-redux';
import {
    Link
  } from "react-router-dom";
class Cart extends Component {
        prinCartItem = () =>{
                let xhtml = null;
                let listitem = this.props.cartItemStore;
                xhtml =  listitem.map((value,key) =>{
                        return (
                            <CartItem 
                            value = {value} 
                            key ={key}
                            />
                        )
              })
                return xhtml;
        }
        totalmoney = () =>{
            let xhtml = 0;
            let listitem = this.props.cartItemStore;
            xhtml =  listitem.reduce((total,key) =>{
                return total += key.price * key.buy
            },0)
            return `${xhtml}$`;
        }
        showhoverCart = () =>{
            if(this.props.cartItemStore.length > 0){
                return (
                    <li>
                    <div className="header-chart-dropdown">
                    {this.prinCartItem()}
                      <div className="chart-checkout">
                         <p>subtotal<span>{this.totalmoney()}</span></p>
                        <Link to='/checkout' className="btn btn-default btn-success">Checkout</Link>
                      </div>
                    </div> 
                  </li> 
                )
            }


        }


    render() {
        
        return(
            <div className="header-chart">
            <ul className="list-inline">
              <li><a href="hihi"><i className="fa fa-cart-arrow-down" /></a></li>
              <li className="chart-li"><a href="hihi">My cart</a>
                <ul>
                    {this.showhoverCart()}
                </ul> 
              </li>
              <li><a href="hihi">{this.props.cartItemStore.length} items</a></li>
            </ul>
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

        }
        
      } 
      
      
      
      export default connect(mapStateToProps, mapDispatchToProps)(Cart)
