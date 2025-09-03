import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);

  const fetchUser = async () => {
    if(userData){
      return;
    }
    try{
      let user = await axios.get(BASE_URL+"/profile/view",{
        withCredentials: true
      });
      dispatch(addUser(user));
    }catch(err){
      if(err.status === 401){
        navigate("/login");
      }
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUser();
  },[]);

  return (
    <>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Body