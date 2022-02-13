import React , {useState} from 'react'
import { Route, Routes} from 'react-router-dom';
import "./App.css";
import Homepage from './Components/Homepage/Homepage';
import Postdetails from './Components/PostDetails/Postdetails';
import Posts from './Components/Posts/Posts';



function App() {
   
  
  const [data,setData]=useState([]);

  return ( 

         <>
            <Routes>
              <Route exact path="/" element={<Homepage/>} />
              <Route exact path="/posts/:user_id" element= {<Posts data={data} setData={setData} />} />
              <Route exact path="/:user_id/posts/:post_id" element={<Postdetails data={data} setData={setData} />}/>
            </Routes>
         </>
     
  );
}

export default App