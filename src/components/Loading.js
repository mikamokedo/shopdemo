import React, { Component } from 'react';
import loading from '../loading.svg';

class Loading extends Component {
    render() {
        return (
            <div  className="loading">
                    <img src={loading} alt="fdgdfgd" />
            </div>
        );
    }
}

export default Loading;