import React,{useState,useEffect} from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import './Postdetails.css'

function Postdetails({data , setData }) 
{

   const {user_id, post_id}=useParams();
   const [details,setPostDetails] = useState([]);
   const [content,setContent] = useState([]); 
   const[Loading,setLoading] =useState(true)
   const navigate = useNavigate()

   useEffect(() => {
    const getPostDetails =async  () =>{

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
        const val=await(res.json());
        setPostDetails(val);
        setLoading(false);
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
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:"DELETE"})
        .then(res=>{
            if(res.status !== 200){
                return
            }else{
                setData(data.filter((e)=>{
                    return `${e.id}` !== id
                }))
            }
        })
     
        navigate(`/posts/${user_id}`)
        setTimeout(() => {
          alert(`Delete successfully`)
         
        }, 2000);
       
    }
   


  return (
      <>
      {Loading ? <h3>Loading..</h3> :
        <div>
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
                        <button className="button " onClick={()=>deletePost(post_id)}>DELETE POST</button>
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
    </div>
      }
      </>
  )

}

export default Postdetails