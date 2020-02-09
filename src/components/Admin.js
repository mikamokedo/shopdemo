import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {pushItemTostore} from '../action/addItem';




export class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    uploadfile = (e) =>{
        if(e.target.files[0]){
           const filechoice = e.target.files[0];
           this.setState(
               () => ({filechoice})
           );
        
        }
   
    }
    isEmpty = (obj) => {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return true;
        }
        return false;
    }

onsubmitForm = () =>{
    if(this.isEmpty(this.state)){
        this.props.pushItem(this.state);

    }
}
getInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
        [name] : value
    })
}





    render() {
        return (
                    <div className="container">
                            <div className="form-group">
                              <label for="">Name Product</label>
                              <input type="text" className="form-control" onChange={(e) => this.getInput(e)}name="name"/>
                            </div>
                            <div className="form-group">
                              <label for="">Category</label>
                              <select className="form-control" name="cate" onChange={(e) => this.getInput(e)}>
                                <option value="men">MEN</option>
                                <option value="women">WOMEN</option>
                                <option value="kid">KID</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="">descript Product</label>
                              <input type="text" className="form-control" onChange={(e) => this.getInput(e)}name="descript"/>
                            </div>
                            <div className="form-group">
                              <label for="">price Product</label>
                              <input type="text" className="form-control" onChange={(e) => this.getInput(e)}name="price"/>
                            </div>
                            <div className="form-group">
                              <label for="">quantity Product</label>
                              <input type="text" className="form-control" onChange={(e) => this.getInput(e)}name="quantity"/>
                            </div>
                            <div className="form-group">
                              <label for="">rate Product</label>
                              <input type="text" className="form-control" onChange={(e) => this.getInput(e)}name="rate"/>
                            </div>
                     
                <div className="form-group">
                  <label>Tai anh len</label>
                  <input type="file" className="form-control-file" name="" placeholder="" aria-describedby="fileHelpId" onChange={(e) => this.uploadfile(e)}/>
                  
                </div>
                        <button onClick={this.onsubmitForm} type="submit" className="btn btn-success">submit</button>

                </div>

        )
    }
}

const mapStateToProps = (state) =>{
    return {

    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
       pushItem : bindActionCreators(pushItemTostore,dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
