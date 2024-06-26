import React, { useState } from 'react'
import { SiShopify } from 'react-icons/si';
import image1 from './../assets/Ecommerce web page.gif';
import image2 from './../assets/Ecommerce web page.gif';

import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Login = () => {
   
    const [userInfo, setUserInfo] = useState([]);
    const [loading ,setLoading] = useState(true);
    const [formData, setFormData] = useState({
      // username: "",
      password: "",
      email: "",
    });
    const navigate = useNavigate();
    const changeHandler = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    console.log(formData)
  
  
    const login = async () => {
      console.log("login executed", formData);
      let url = 'https://cybotrix.com/webapi/login/auth';
      let newLogin = {
        email: formData.email,
        password: formData.password
      }
      let postdata = {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(newLogin)
      }
      fetch(url, postdata)
        .then(res => res.json())
        .then(userinfo => {
          setUserInfo(userinfo);
          setLoading(false);
          console.log(setUserInfo)
          console.log(userinfo);
          if (userinfo.status === 'SUCCESS') {
            navigate('/');
            localStorage.setItem('token', userinfo.tokenno)
            localStorage.setItem('username', userinfo.name)
            localStorage.setItem('status', userinfo.status)
            window.location.reload();
          } else {
            alert("Invalid Email or Password")
          }
        })
    };
  
    
  
  return (
    <div className='middle container'>
      <div className="d-flex row justify-content-center align-items-center">
                <div className="col-lg-6 ">
                    <img src={image1} className="img-fluid "width={1000}/> 
                </div>
                <div className="col-lg-4 border border-black shadow-lg">
                  <div
                    class="p-5 rounded"
                  >
                    <h3 className="text-center text-black">Login</h3>

                   
                    <div
                      class="input-group mb-4 mt-4"
                      style={{ border: "1px solid black" }}
                    >
                      <span class="input-group-text">
                        <FaEnvelope />
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="user1@gmail.com"
                        style={{ border: "none", outline: "none" }}
                        name="email"
                        value={formData.email}
                        // value="user1@gmail.com"
                        onChange={changeHandler}
                      />
                    </div>
                    <div
                      class="input-group mb-4 mt-4"
                      style={{ border: "1px solid black" }}
                    >
                      <span class="input-group-text">
                        <FaLock />
                      </span>
                      <input
                        type="password"
                        id=""
                        class="form-control"
                        placeholder="123"
                        style={{ border: "none", outline: "none" }}
                        name="password"
                        value={formData.password}
                        // value="123"
                        onChange={changeHandler}
                      />
                    </div>
                    <div class="text-center">
                      <button
                        class="btn btn-dark bg-black w-100"
                        onClick={() => {
                          login()
                        }}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Login
