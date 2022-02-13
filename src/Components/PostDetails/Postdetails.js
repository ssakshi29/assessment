import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Postdetails.css'
function Postdetails() 
{

   const {user_id, post_id}=useParams();
   const [details,setPostDetails] = useState([]);
   const [content,setContent] = useState([]);
   let history= useHistory();
   

   useEffect(() => {

    const getPostDetails =async  () =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
        const actualData=await(response.json());
        console.log(actualData);
        setPostDetails(actualData);
     }

        getPostDetails();

   }, [post_id])
  


   const showComment =async () => 
   {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`);
      const actualData=await(response.json());
       setContent(actualData);
   }
   

   const deletePost =async (id) =>
   { 

    }
   
    



  return (
      <>
        <div className="header">
            Post Details- {`${post_id}`}
        </div>
        <div className='box'>
                <div className="title">
                    {details.title}
                </div>
                <div className="body">
                    <p>{details.body}</p>
                </div>
                <div className="button-container">
                    <span className="btn">  
                        <button className="button " onClick={showComment}> SHOW COMMENTS </button>
                    </span>
                    <span className="btn1">
                        <button className="button "  onClick={deletePost}>DELETE POST</button>
                    </span>
                </div>
        </div>
         
         <div  className="box1">
         {
          content.map((ele,index) =>
          {
              return(
                    <div key={index}>
                        <div className="title">
                        {index+1} - {ele.name}
                        </div>
                        <div className="body">
                         {ele.body}
                        </div>
                        <hr/>
                    </div>
              )
          }
          )
        }
        </div> 
      </>
  )

}

export default Postdetails