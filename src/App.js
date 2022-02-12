import React  from 'react'
import {  Route, Switch} from 'react-router-dom';
import "./App.css";
import Homepage from './Components/Homepage/Homepage';
import Posts from './Components/Posts/Posts';

function App() {
  return ( 

         <>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/posts/:id" component={Posts}/>
              {/* <Route exact path="/" component={Posts}/> */}
            </Switch>
         </>
     
  );
}

export default App