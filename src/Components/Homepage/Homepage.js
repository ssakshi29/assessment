import React , {useEffect,useState} from 'react'
import './home.css';
import { Link } from "react-router-dom";

function Homepage() {


    const [data, setData] = useState([]);
    const[Loading,setLoading] =useState(true)
    const [searchCompany,setSearchCompany]=useState(" ")

    const getData = async ()=>{
       const res= await fetch('https://jsonplaceholder.typicode.com/users');
       const actualData= await (res.json());
       setData(actualData);   
       setLoading(false)

    }
   

    useEffect(() => {
      getData();
    }, [])
    
    

    let datasearch =data.filter((value) =>
    {
        if(searchCompany == " " )
        return value;
        else if(value.company.name.toLowerCase().includes(searchCompany.toLowerCase())  )
              return value;

    })

    



 return (
        
    <>
            { Loading ? <h3>Loading..</h3>:
            <div>
            <div className="header_main">
                Home
            </div>
            <div className="search-wrap">
               
                <input type="text" 
                 placeholder="Search Company..."
                onChange={event =>
                setSearchCompany(event.target.value)}
                />
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
                               datasearch.map((currelement,index) => {
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
        </div>
            }
    </>  


  );
}

export default Homepage