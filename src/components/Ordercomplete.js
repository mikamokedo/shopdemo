import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Redirect
  } from "react-router-dom";

class Ordercomplete extends Component {


    render() {
     if(this.props.statusCheckoutstore === false){
         return <Redirect to="/notfound" />
     }   



        return(
            <div className="container padding30">
                    <h1 className="text-success text-center">ORDER PLACE SUCCESS</h1>
                    <h5 className="text-warning">Order Information</h5>
            </div>
           
            );
        }
    }
    const  mapStateToProps = (state) =>{
      return {
            statusCheckoutstore : state.statusCheckout
      }
    }
    const mapDispatchToProps = (dispatch)=>{
      return {
 
      }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(Ordercomplete);