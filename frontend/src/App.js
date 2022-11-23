import { useState } from "react";
import axios from "axios";
import "./App.css";
import logo from "./logo.svg";
import footer1 from "./footer1.webp";
import footer2 from "./footer2.webp";
import footer3 from "./footer3.webp";
import footer4 from "./footer4.webp";
import footer5 from "./footer5.webp";
import bg from "./background.webp";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
export default function App() {
  const navigate = useNavigate();
  
  const [show,setShow]=useState(false);

  const [userfor, setUserfor] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [id, setId] = useState("");

  const handleClickReg = (e) => {
    
    let url="http://localhost:8000/register"
    let req={userfor:userfor,
    username:name,
    mobilenumber:mobile}
    let header={}
    console.log(req)
    axios.post(url,req,header).then((res)=>{
      console.log("newid",res.data);
      localStorage.setItem("passingid",res.data.insertId)
      
    }).catch()

    navigate("/Register");
  };
  
  const popup=()=>{
    setShow(true);
  }
  
  
  return (
    <div className="app_container">

      <Login show={show} setShow={setShow}/>

      <div className="app_header">
        <div className="app_header_left">
          <div className="app_header_left_img">
            <img src={logo} />
          </div>
          <div className="app_header_left_label">
            <label className="app_upper">ChristianMatrimony.com</label>
            <label className="app_lower">From Matrimony.com Group</label>
          </div>
        </div>
        <div className="app_header_right">
          <div className="app_header_right_label">
            <label>Already a Member?</label>
          </div>
          <div className="app_header_right_button">
            <button onClick={popup}>
              LogIn
            </button>
          </div>
        </div>
      </div>

      <div className="app_mid" style={{ backgroundImage: `url(${bg})` }}>
        <div className="app_middle">
          <label className="app_mid_upper">
            No. 1 and official matrimony service exclusively for Christians
          </label>

          <label className="app_mid_lower">
            Meet your Christian soulmate here!
          </label>
          <div className="app_form">
            <div className="app_middle_element_1">
              <div className="app_middle_element_part_1">
                <label>Matrimony Profile For</label>
              </div>
              <div className="app_middle_element_part_2">
                <select
                  name=""
                  onChange={(e) => {
                    setUserfor(e.target.value);
                  }}
                >
                  <option value="SELECT">SELECT</option>
                  <option value="Self">Self</option>
                  <option value="Relative">Relative</option>
                  <option value="Friend">Friend</option>
                </select>
              </div>
            </div>
            <div className="app_middle_element_2">
              <div className="app_middle_element_part_1">
                <label>Name</label>
              </div>
              <div className="app_middle_element_part_2">
                <input
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="app_middle_element_3">
              <div className="app_middle_element_part_1">
                <label>Mobile Number</label>
              </div>
              <div className="app_middle_element_part_2">
                <input
                  placeholder="Mobile number"
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="app_middle_element_4">
              <button
                onClick={(e) => {
                  handleClickReg();
                }}
              >
                Register now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="app_footer">
        <div className="app_footer_element">
          <img src={footer1} />
          <label>
            10+ years of service in helping Christians cherish the meaning of
            Happy marriage
          </label>
        </div>
        <div className="app_footer_element">
          <img src={footer2} />
          <label>
            2 Lakh+ people have found their life partner using our services
          </label>
        </div>
        <div className="app_footer_element">
          <img src={footer3} />
          <label>
            2020's winner of 'India's Growth Champions Award' by The Economic
            Times
          </label>
        </div>
        <div className="app_footer_element">
          <img src={footer4} />
          <label>
            1 Lakh+ genuine profiles with 100% verified phone numbers
          </label>
        </div>
        <div className="app_footer_element">
          <img src={footer5} />
          <label>130+ branches across India to serve you better</label>
        </div>
      </div>
    </div>
  );
}
