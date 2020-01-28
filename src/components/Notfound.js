import React, { Component } from 'react';
import {
 Link
} from "react-router-dom";
import img404 from '../404-img.png';
class NotFound extends Component {
    render() {
        return(
          <div className="not-found-area fix">
            <div className="container">
            <div className="not-found">
              <h1>Uh oh! Look like something went wrong</h1>
              <img src={img404} alt={404} />
              <h2>Page cannot be found</h2>
              <p>Sorry but we couldn't find the page you are looking for. Please check to make sure you've typed the URL corectly. You may also want to search for what you are looking for.</p>
              <Link exact={true} to="/">Return to Home</Link>
            </div>
          </div>
          </div>
            );
        }
    }
    
    export default NotFound;