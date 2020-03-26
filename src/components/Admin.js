import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {pushItemTostore} from '../action/addItem';
import ItemTable from './ItemTable';
import {feetListProducts} from '../action/products';




class Admin extends Component {
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
componentDidMount(){
    this.props.feetListProducts();
  }


printlistProduct = () =>{
    let xhtml = null;
   let {listProducts} = this.props;
    xhtml = listProducts.map((item,key)=>{
        return <ItemTable item={item} key={key}/>
    })
    return xhtml;
}



    render() {
        return (
                    <div className="container padding30">
                           <div className="add_form">
                            <div className="form-group">
                              <label>Name Product</label>
                              <input type="text" className="form-control" onChange={(e) => this.getInput(e)}name="name"/>
                            </div>
                            <div className="form-group">
                              <label>Category</label>
                              <select className="form-control" name="cate" onChange={(e) => this.getInput(e)}>
                              <option>Select Category</option>
                                <option value="men">MEN</option>
                                <option value="women">WOMEN</option>
                                <option value="kid">KID</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label>descript Product</label>
                              <input type="text" className="form-control" onChange={(e) => this.getInput(e)}name="descript"/>
                            </div>
                            <div className="form-group">
                              <label>price Product</label>
                              <input type="text" className="form-control" onChange={(e) => this.getInput(e)}name="price"/>
                            </div>
                            <div className="form-group">
                              <label>quantity Product</label>
                              <input type="text" className="form-control" onChange={(e) => this.getInput(e)}name="quantity"/>
                            </div>
                            <div className="form-group">
                              <label>rate Product</label>
                              <input type="text" className="form-control" onChange={(e) => this.getInput(e)}name="rate"/>
                            </div>
                                
                            <div className="form-group">
                            <label>Tai anh len</label>
                            <input type="file" className="form-control-file" name="" placeholder="" aria-describedby="fileHelpId" onChange={(e) => this.uploadfile(e)}/>
                            
                            </div>
                        <button onClick={this.onsubmitForm} type="submit" className="btn btn-success">submit</button>
                        </div>

                            <table className="table table-striped table-inverse table-responsive font_16">
                                <thead className="thead-inverse">
                                    <tr>
                                        <th>Name</th>
                                        <th>Cate</th>
                                        <th>Description</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quanity</th>
                                        <th>rate</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                       {this.printlistProduct()}
          

                                    </tbody>
                            </table>

                     </div>

        )
    }
}

const mapStateToProps = (state) =>{
    return {
        listProducts : state.ListProducts
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
       pushItem : bindActionCreators(pushItemTostore,dispatch),
       feetListProducts : bindActionCreators(feetListProducts,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
