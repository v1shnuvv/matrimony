import React from "react";
import logo from "./logo.svg";
import "./NewApp.css";
import bg from './background.webp'

export default function App() {
  return (
    <>

      <div className="home_row1">
        <div className="home_row1_left">
          <img className="home_row1_left_img" src={logo} />
          <div className="home_row1_left_text">
            <label className="home_row1_left_text_labelone">
              Christian Matrimony.com
            </label>
            <label>From Matrimony.com Group</label>
          </div>
        </div>
        <div className="home_row1_right">
          <label>Already a member?</label>
          <div>
            <button>Log In</button>
          </div>
        </div>
      </div>
      

      <div className="home_row2" style={{backgroundImage:`url(${bg})`}}>
        <div className="home_row2_inner">
          <label className="home_row2_inner_labelone">
            No. 1 and official matrimony service exclusively for Christians
          </label>
          <label className="home_row2_inner_labeltwo">Meet your Christian soulmate here!</label>
          <div className="home_row2_inner_inner">
            <div className="home_row2_inner_inner_col1">
              <label>Matrimony Profile For</label>
              <select>
                <option>Select</option>
                <option>Self</option>
                <option>Relative</option>
                <option>Friend</option>
              </select>
            </div>
            <div className="home_row2_inner_inner_col2">
              <label>Name</label>
              <input placeholder="Name" type={"text"} />
            </div>
            <div className="home_row2_inner_inner_col3">
              <label>Mobile Number</label>
              <input placeholder="Mobile Number" type={"text"} />
            </div>
            <button>Register Free</button>
          </div>
          <label className="home_row2_inner_labelthree">
            By clicking on Register Free, you agree to <span>Terms &
            Conditions</span> and <span>Privacy Policy</span>
          </label>
        </div>
      </div>
      <div className="home_row3"></div>
    </>
  );
}
