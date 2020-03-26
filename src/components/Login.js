import React,{Component} from 'react';
import {changeStatusOpenFormLoginAction,loginsucces,signout} from '../action/loginForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {change_loading_status,change_loading_status_false} from '../action/loading';
import firebase from '../firebaseConfig';



class Login extends Component{
    constructor(prop){
        super(prop);
        this.state={
            loginsuccess : "Login"
        }

    }
    resultTitlePrin = () =>{
        return this.state.loginsuccess
    }

    getValueInput = (event) =>{
        let  name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        })
      }

      openFormLogin = () =>{
        this.props.changeStatusOpenFormLoginAction();

      }
      submitFormLogin = () =>{
        if(this.state.user.length > 6 && this.state.pass){
            this.props.change_loading_status();
            const listUserHadRegis = new Promise((resolve,reject) =>{
                firebase.firestore().collection("userlist").get()
                .then((querySnapshot) =>{
                    return resolve(querySnapshot);

                }).catch((error) => {
                    return reject(error);

                }) 
            })
            listUserHadRegis.then((data) =>{
                let flag = false;
                    data.forEach(ele =>{
                        if(ele.data().user === this.state.user){
                           if(ele.data().password === this.state.pass){
                            this.setState({
                                loginsuccess : 'Login Success'
                            })
                            localStorage.setItem('loginsuccess',JSON.stringify(this.state.user));
                            flag = true;
                            this.props.changeStatusOpenFormLoginAction();
                            this.props.loginsucces();
                            this.props.change_loading_status_false();
                           }
                           else{
                            flag = true;
                            this.setState({
                                loginsuccess : 'Login Failed'
                            });
                            this.props.change_loading_status_false();
                           }
                          
                        }
                      
                    })
                    if(flag === false){
                        this.setState({
                            loginsuccess : 'Login Failed'
                        });
                        this.props.change_loading_status_false();
                    }
            
        })
      }}





    render(){


        return(
            <div className="wrap_all_regis">
            <div className="wrap_form_regis wrap_all_login">
        <h2 className="text-center">{this.resultTitlePrin()}</h2>
                <div className="form-group">
                  <input type="text" className="form-control" name="user" aria-describedby="emailHelpId" placeholder="UserName" onChange={(event) => this.getValueInput(event)}/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="pass" aria-describedby="emailHelpId" placeholder="Password" onChange={(event) => this.getValueInput(event)}/>
                </div>
                
                <div className="flex"><button className="btn btn-success" onClick={this.submitFormLogin}>Submit</button><button onClick={(event) => this.openFormLogin(event)} className="btn btn-danger">Cancle</button></div>
             </div>
             <div className="crgba"></div>
             </div>
        )}


}


const mapStateToProps = (state) =>{
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeStatusOpenFormLoginAction : bindActionCreators(changeStatusOpenFormLoginAction,dispatch),
        change_loading_status : bindActionCreators(change_loading_status,dispatch),
        change_loading_status_false : bindActionCreators(change_loading_status_false,dispatch),
        loginsucces: bindActionCreators(loginsucces,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);