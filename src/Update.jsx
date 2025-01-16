import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams,useNavigate } from "react-router-dom";


function Update(){

  //  const [data, setData]=useState([]);
    const {id}=useParams();

    const [values, setValues]=useState({
        name:'',
        email:'',
        phone:'',
    })

    useEffect(()=>{
    
        axios.get('http://localhost:3000/users/'+id)
        .then(res=>setValues(res.data))
        .catch(e=>console.error(e))

    },[])


    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:3000/users/'+id,values)
        .then(res=> setValues(res),
        navigate('/')
       )
        .catch(e=>console.error(e))
        

    }

    return(
       <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
             <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                 <h1>Update a User</h1>
                 <form onSubmit={handleSubmit}>
                     <div className="mb-2">
                         <label htmlFor="name">Name:</label>
                         <input type="text" name="name" className="form-control" placeholder="Enter Name"
                      value={values.name}  onChange={e=>setValues({...values, name:e.target.value})}></input>
                     </div>
                     <div className="mb-2">
                         <label htmlFor="email">Email:</label>
                         <input type="text" name="email" className="form-control" placeholder="Enter Email"
                        value={values.email}  onChange={e=>setValues({...values, email:e.target.value})}></input>
                     </div>
                     <div className="mb-3">
                         <label htmlFor="phone">Phone:</label>
                         <input type="text" name="phone" className="form-control" placeholder="Enter Phone"
                        value={values.phone}  onChange={e=>setValues({...values, phone:e.target.value})}></input>
                     </div>
                     <button className="btn btn-success">Submit</button>
                     <Link to="/" className="btn btn-primary ms-3">Back</Link>
                 </form>
             </div>
          </div>
    )
}

export default Update