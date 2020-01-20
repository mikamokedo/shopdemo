import React, { Component }  from 'react';
import Header from './components/Header.js';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';
import Index from './components/Index.js';
import routers from './routers/routers.js';
import firebaseApp from './firebase.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

class Checkout extends Component {
  printRouter = () =>{
    let xhtml = null;
    
      xhtml = routers.map((value,key) => {
            return(
              <Route exact={value.exact} path={value.path} component={value.component} key={key}/>
            )

      })

    return xhtml;
  }

  render() {
  let conso =  firebaseApp.database().ref().child('tasklist');
conso.once('value',snap =>
  console.log(snap.value())
)
      return(
    <div className="App">
      <Router>
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
      
      export default Checkout;
