import React, { useState } from "react";
import icon from "../../public/developer-icon.jpg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("zaheen@gmail.com");
  const [password, setPassword] = useState("Zaheen@2021");
  const dispatch = useDispatch();  
  const navigate = useNavigate();

  const handleLogin = async () => {
    try{
    let response = await axios.post(`${BASE_URL}/login`,{
      emailId,
      password
    },
  { withCredentials: true });
    dispatch(addUser(response.data));
    navigate("/feed");
    }catch(error){
      console.log(error);
    }
  };

  return (
    <div>
      <div className="card card-side bg-base-300 shadow-sm flex justify-center align-center ml-[25%] mx-20 my-10 rounded-2xl w-1/2">
        <figure>
          <img src={icon} alt="Developer Icon" className="w-96" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-center">Login</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email ID</legend>
            <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="input" placeholder="Type here" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Type here" />
          </fieldset>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
