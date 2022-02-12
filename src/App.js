import React  from 'react'
import {  Route, Switch} from 'react-router-dom';
import "./App.css";
import Homepage from './Components/Homepage/Homepage';
import Postdetails from './Components/PostDetails/Postdetails';
import Posts from './Components/Posts/Posts';


function App() {
  return ( 

         <>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/posts/:user_id" component={Posts}/>
              <Route exact path="/:user_id/posts/:post_id" component={Postdetails}/>
            </Switch>
         </>
     
  );
}

export default App