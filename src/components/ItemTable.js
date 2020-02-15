import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'; 
import {deleteItem} from '../action/deleteitem';

class ItemTable extends Component {


onDelete = () =>{
    this.props.deleteFromAction(this.props.item.id);
}

    render() {
        return (
            <tr>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.cate}</td>
            <td>{this.props.item.descript}</td>
            <td className="maxwidth"><img src={this.props.item.image}/> </td>
            <td>{this.props.item.price}</td>
            <td>{this.props.item.quantity}</td>
            <td>{this.props.item.rate}</td>
            <td className="td_icon" ><i className="font_20 fa fa-edit text-warning"></i><i className="fa fa-trash text-danger font_20" onClick={this.onDelete}></i></td>
        </tr>
        )
    }
}


const mapStateToProps = (state) =>{
    return {

    }
};
const mapDispatchToProps = (dispatch) =>{
    return {
        deleteFromAction : bindActionCreators(deleteItem,dispatch),
    }
}







export default connect(mapStateToProps,mapDispatchToProps)(ItemTable);