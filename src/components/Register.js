import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {changeStatusOpenFormAction} from '../action/loginForm';
import firebase from '../firebaseConfig';
import {change_loading_status,change_loading_status_false} from '../action/loading';




class Register extends Component{
    constructor(prop){
        super(prop);
        this.state ={
            user : "",
            pass: "",
            repass: "",
            loginsucess : false,
            duplicateuser :false
        }
    }

    returnError = () =>{
       let result = "Register Account";
        if(this.state.loginsucess){
            result = `Register Success ${this.state.user}`
        }
        if(this.state.duplicateuser){
            result = 'user hasbeen Register';

        }
        return result;

    }

    openFormRegis = (event) =>{
        event.preventDefault();
      this.props.changeStatusOpenFormAction();
  
    }

    getValueInput = (event) =>{
      let  name = event.target.name;
      let value = event.target.value;
      this.setState({
          [name] : value
      })
    };
    submitFormRegis = () =>{
        if(this.state.pass === this.state.repass && this.state.user.length > 6){
            this.props.change_loading_status();
            const listUserHadRegis = new Promise((resolve,reject) =>{
                firebase.firestore().collection("userlist").get()
                .then((querySnapshot) =>{
                    return resolve(querySnapshot);

                }).catch((error) => {
                    return reject(error);

                }) 
            })
            listUserHadRegis.then((sucees) =>{
                let flag = true;
                sucees.forEach(item => {
                    console.log('forloop')
                   if(this.state.user === item.data().user){
                    this.setState({
                        loginsucess : false,
                        duplicateuser : true
                       });
                       flag = false;
                       this.props.change_loading_status_false();
                        return flag;
                        
                   }
                })
                if(flag){
                 const db = new Promise((resolve,reject) =>{
                firebase.firestore().collection("userlist").add({
                    user: this.state.user,
                    password: this.state.pass
                })
                .then(function(docRef) {
                   return resolve(docRef);

                        
                })
                .catch(function(error) {
                    return reject(error);
                }); 
            })
            db.then(sucees =>{
                this.setState({
                    loginsucess : true,
                    duplicateuser : false
                   });
                   this.props.change_loading_status_false();
            })
            .catch(erro => {
                console.log(erro);
            })  
          }
            })
        }
    }

    render(){

        return(
            <div className="wrap_all_regis ">
            <div className="wrap_form_regis">
        <h2 className="text-center">{this.returnError()}</h2>
                <div className="form-group">
                  <input type="text" className="form-control" name="user" aria-describedby="emailHelpId" placeholder="UserName" onChange={(event) => this.getValueInput(event)}/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="pass" aria-describedby="emailHelpId" placeholder="Password" onChange={(event) => this.getValueInput(event)}/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="repass" aria-describedby="emailHelpId" placeholder="RePassword" onChange={(event) => this.getValueInput(event)}/>
                </div>
                
                <div className="flex"><button className="btn btn-success" onClick={this.submitFormRegis}>Submit</button><button onClick={(event) => this.openFormRegis(event)} className="btn btn-danger">Cancle</button></div>
             </div>
             <div className="crgba"></div>
             </div>
        
        )

    }
}

const mapStateToProps = (state) =>{
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeStatusOpenFormAction : bindActionCreators(changeStatusOpenFormAction,dispatch),
        change_loading_status : bindActionCreators(change_loading_status,dispatch),
        change_loading_status_false : bindActionCreators(change_loading_status_false,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);