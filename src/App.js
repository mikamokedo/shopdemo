import React, { Component }  from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import routers from './routers/routers.js';
import Loading from './components/Loading';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  printRouter = () =>{
    let xhtml = null;
    
      xhtml = routers.map((value,key) => {
            return(
              <Route exact={value.exact} path={value.path} component={value.component} key={key}/>
            )

      })

    return xhtml;
  }

showLoadingAnimation = () =>{
    var loadingStatus =  this.props.loadingStatus;
    let xhtml = null;
    xhtml =  (loadingStatus.loading) ? <Loading/> : null;
    return xhtml;
  }







  render() {

      return(
    <div className="App">
      <Router>
        {this.showLoadingAnimation()}
      <Header />
    
     
          <Switch>
       {this.printRouter()}   
       </Switch>

       <Footer />  
       </Router>
    </div>
            );
          }
      }
      const mapStateToProps = (state, ownProps) => {
        return {
            loadingStatus : state.loading,
            listProducts : state.ListProducts
        }
      }
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

      export default connect(mapStateToProps, mapDispatchToProps)(App)