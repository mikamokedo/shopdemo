import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {changeStatusOpenFormAction,changeStatusOpenFormLoginAction,signout} from '../action/loginForm';
class Usercontrol extends Component{
    constructor(props){
        super(props);
        this.state ={
   
        }
    }

    openFormRegis = (event) =>{
        event.preventDefault();
      this.props.changeStatusOpenFormAction();
  
    }
    openFormLogin = (event) =>{
      event.preventDefault();
    this.props.changeStatusOpenFormLoginAction();
  
  }
  signOut = (event) =>{
    event.preventDefault();
    localStorage.removeItem('loginsuccess');
    this.props.signout();
  }

    render(){

        if(this.props.formLogin.loginsuccess){

            return(
                <div className="account_form">
                       <ul>
                           <li><a href="\">mikamokedo</a>
                                <ul class="signout">
                                    <li><a href="\" onClick={(event) => this.signOut(event)}>SignOut</a></li>
                                </ul>
                           </li>
                        </ul> 
                </div>
            )

        }
        return(
            <div className="account_form">
                    <ul>
                      <li><a href="\" onClick={(event) => this.openFormRegis(event)}>Register</a></li>  
                      <li><a href="\" onClick={(event) => this.openFormLogin(event)}>Login</a></li>  
                    </ul>
            </div>
        )
        


    }





}


const mapStateToProps = (state) =>{
    return{
      formLogin : state.formLogin
    }
  }
  const mapDispatchToProps = (dispatch) =>{
    return {
      changeStatusOpenFormAction : bindActionCreators(changeStatusOpenFormAction,dispatch),
      changeStatusOpenFormLoginAction : bindActionCreators(changeStatusOpenFormLoginAction,dispatch),
      signout : bindActionCreators(signout,dispatch),

      
    }
    
  } 
  
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Usercontrol)