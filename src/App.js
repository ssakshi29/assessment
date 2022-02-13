import React , {useEffect,useState,useCallback} from 'react'
import {  Route, Switch} from 'react-router-dom';
import "./App.css";
import Homepage from './Components/Homepage/Homepage';
import Postdetails from './Components/PostDetails/Postdetails';
import Posts from './Components/Posts/Posts';



function App() {
   
  
  const [data,setData]=useState([]);
 
 
  return ( 

         <>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/posts/:user_id" element= {<Posts data={data} setData={setData} />} />
              <Route exact path="/:user_id/posts/:post_id" component={Postdetails}/>
            </Switch>
         </>
     
  );
}

export default App