import React, {useEffect,useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import './Post.css';

function Posts({ data,setData }) {

   const {user_id}=useParams();
   const[Loading,setLoading] =useState(true)
   const [search,setSearch]=useState(" ")

    useEffect( () => {
      
     
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}&skip=0&limit=10`)
        .then((res)=>res.json())
        .then(res=> {  setData(res);   
          setLoading(false) })
      

      
      
      

       // eslint-disable-next-line
     }, [user_id])

     
     let datasearch =data.filter((value) =>
     {
         if(search === " " )
         return value;
         else if(value.title.toLowerCase().includes(search.toLowerCase())  )
               return value;
               return false
     })

  return (
    <div>
      {Loading ? <h3>Loading...</h3> :

       <div className="container ">
         <div className='heading'>
            <span>
               BLOG POSTS
            </span>
            <span  className="search-bar">
                  <input type="text" 
                  placeholder="Search Company..."
                   onChange={event =>
                   setSearch(event.target.value)}
                  />
            </span>
         </div>
          {
         datasearch.map( (currelement,index) =>{
             return(
                <div key={index} className="content" > 
                    <div className="left">
                     {index+1} - {currelement.title}
                    </div>
                    <div className="right">
                  
                        <Link to={`/${user_id}/posts/${currelement.id}`}>
                            <button className="button "> POST DETAILS </button>
                        </Link>
                       
                    </div>
                </div>
             )
           }
           )
          }
       </div>
      }
    </div>
  )
}

export default Posts