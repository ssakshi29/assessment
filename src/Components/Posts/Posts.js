import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
// import {Link } from 'react-router-dom'
import './Post.css';

function Posts() {

      
      const {id}=useParams();
    
      const [data,setData]=useState([]);

    const getData =async () =>
    {
        const response=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}&skip=0&limit=10`);
        const actualData= await (response.json());
        console.log(actualData);
         setData(actualData);
    }

    useEffect(() => {    
      getData();
    }, [])
    
  return (
    <div>
       <div className="container-fluid table-responsive">
          {
           data.map( (currelement,index) =>{
             return(
                <div className="row" key={index}> 
                    <div className="colsize">
                       {currelement.title}
                    </div>
                    <div className="colsize">
                        <button type="button" className="button button1">Details</button>
                    </div>
                </div>
             )
           }
           )
          }
       </div>

      
        
    </div>
  )
}

export default Posts