import React, { useEffect, useState } from "react";
import "./update.css";
import axios from "axios";
import { Link,useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
const UpdateUser = () => {
  const users = {
    name:"",
    email:"",
    address:""
  };

  const [user,setUser] = useState(users);
  const navigate = useNavigate()
  const {id} = useParams();

  const inputHandler = (e) =>{
    const {name,value} = e.target;
    setUser({...user,[name]:value})
  }

  useEffect(()=>{
    axios.get(`http://localhost:8080/api/user/${id}`).then((response)=>{
        setUser(response.data);
    }).catch((error)=>{
        console.log(error);
    })
  },[id])

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/update/user/${id}`,user).then((response)=>{
      toast.success(response.data.message,{position:"top-right"})
      navigate('/')
    })
    .catch((error)=>{
      console.log(error)
    })
    
  }

  return (
    <div className="addUser">
      <Link to="/" type="button" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
      </Link>
      <h3>Update User</h3>
      <form action="" className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            value={user.name}
            name="name"
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter Yout name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter Yout name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={user.address}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter Yout name"
          />
        </div>
        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
