import React, {useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import './Post.css';

function Posts({ data,setData }) {

      
      const {user_id}=useParams();
      
      console.log(data);


    useEffect(() => {
      const getData = async () =>
    {
        const response=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}&skip=0&limit=10`);
        const actualData= await (response.json());
        console.log(actualData);
         setData(actualData);
    }
      getData();
     }, [])


  return (
    <div>
       <div className="container ">
          <div className="heading">
             BLOG POSTS
          </div>
          {
           data.map( (currelement,index) =>{
             return(
                <div className="content" key={index}> 
                    <div className="left">
                       {currelement.title}
                    </div>
                    <div className="right">
                  
                        <Link to={`/${user_id}/posts/${index+1}`}>
                            <button className="button "> POST DETAILS </button>
                        </Link>
                       
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