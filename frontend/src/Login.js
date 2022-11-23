import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
export default function Login({show, setShow}) {
  const [userName,setUsername]=useState("");
  const [password,setPassword]=useState("");
    const navigate= useNavigate()
    
    const loginHandleClick=(e)=>{
      let url="http://localhost:8000/login";
      let req={username:userName,password:password}
      let header={} 
      console.log(req)
      axios.post(url, req, header).then((res)=>{
        console.log("gh",res.data.length);
        if(res.data.length>0){
          navigate("/Page");}
          else{
            alert("NO USER FOUND");
          }
          
      }).catch()
      
    }
    function close(){
      setShow(false);
    }
  
    

  return show?(
    <div className="login_container">
      <div className="login_box">
        <div className="login_header">
          <label>Login</label>
          <button onClick={close}>x</button>
          
        </div>
        <div className="login_body">
          <label>Matrimony Id/Mobile No./E-mail</label>
          <input type="text" placeholder="email" onChange={(e)=>{setUsername(e.target.value)}}></input>
          <label>Password</label>
          <input type="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
          <div className="row1">
            <input type="checkbox"></input>
            <label>Keep me logged in</label>
          </div>
          <button onClick={(e)=>{loginHandleClick(e)}}>LOGIN</button>
          <div className="login_row">
            <label>Forgot Password? </label>
            <label> Login Via OTP</label>
          </div>
        </div>
      </div>
    </div>
  ):(<></>)
}
