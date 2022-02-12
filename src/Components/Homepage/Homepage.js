import React , {useEffect,useState} from 'react'
import './home.css';
import { Link } from "react-router-dom";

function Homepage() {


    const [data, setData] = useState([]);

    const getData = async ()=>{
       const res= await fetch('https://jsonplaceholder.typicode.com/users');
       const actualData= await (res.json());
       console.log(actualData);
       setData(actualData);    
    }
   

    useEffect(() => {
      getData();
    }, [])
    

 return (
        
    <>
   
            <div className="">
                 
            </div>
            <div className="container-fluid ">
                    <div className="table-responsive">
                        <div >
                            <div className="thead-dark ">
                                <div className="row">
                                    <div className="colsize">NAME</div>
                                    <div className="colsize">COMPANY</div>
                                    <div className="colsize">BLOG POSTS</div>
                                </div>
                            </div>
                            <div>
                            {
                                data.map((currelement,index) => {
                                return (
                                    <div className="row" key={index}>
                                        
                                        <div className="colsize">{currelement.name}</div>
                                        <div className="colsize">{currelement.company.name}</div>
                                        <div className="colsize">
                                        
                                        <Link to={`/Posts/${index+1}`}> BLOG POSTS</Link>
                                        </div>
                                    </div>
                                )
                        
                                }
                                )
                            }
                            </div>
                        </div>
                    </div>
        </div>
    </>  


  );
}

export default Homepage