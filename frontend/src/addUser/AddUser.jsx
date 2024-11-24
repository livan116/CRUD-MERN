import React, { useState } from "react";
import "./addUser.css";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const AddUser = () => {
  const users = {
    name:"",
    email:"",
    address:""
  };

  const [user,setUser] = useState(users);
  const navigate = useNavigate()
  const inputHandler = (e) =>{
    const {name,value} = e.target;
    setUser({...user,[name]:value})
  }

  const submitForm = async(e) =>{
    e.preventDefault();

    await axios.post("http://localhost:8080/api/user",user)
    .then((response)=>{
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
      <h3>Add New User</h3>
      <form action="" className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
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

export default AddUser;
