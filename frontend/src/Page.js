import logo from "./logo.svg";
import page_profile_logo from "./page_profile_logo.png";
import page_profile from "./page_profile.webp";
import "./Page.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Page() {
  const [usersdetails, setUsersdetails] = useState([]);
    // const [usersid, setUsersid] = useState("");
  useEffect(() => {
    let url = "http://localhost:8000/users";
    let req = {};
    let header = {};
    axios
      .post(url, req, header)
      .then((res) => {
        setUsersdetails(res.data);
        console.log("userlist", res.data);
      })
      .catch();
  }, []);
//   console.log("userid=",usersid);
  
  return (
    <div className="logo_container">
      <div className="page_sec_top">
        <div className="page_nav_bar">
          <div className="page_logo">
            <img src={logo}></img>
          </div>
          <div className="page_nav_list">
            <ul>
              <li>MY HOME</li>
              <li>SEARCH</li>
              <li>MATCHES</li>
              <li>MAILBOX</li>
              <li>UPGRADE NOW</li>
            </ul>
          </div>
          <div className="page_profile_logo">
            <img src={page_profile_logo}></img>
          </div>
        </div>
        <div className="page_search_bar">
          <div className="page_input">
            <input></input>
          </div>
          <div className="page_button">
            <button>SEARCH</button>
          </div>
        </div>
      </div>
      <div className="page_sec_bottom">
        <div className="page_content_list">
          {usersdetails.map((itm, index) => {
            return (
              <>
                <div className="page_row"  onClick={(e)=>{alert(itm.id)}}>
                  <div className="page_row_left_coln">
                    <img src={page_profile}></img>
                  </div>
                  <div className="page_row_right_coln">
                    <div className="page_row_right_header">
                      <label>{itm.txtUserName}</label>
                    </div>
                    <div className="page_row_right_label">
                      <label >{itm.dtDOB}, {itm.txtHeight}</label>
                      <label>{itm.txtEducation}</label>
                    </div>
                    <div className="page_row_right_label">
                      <label>Mumbai</label>
                      <label>Doctor</label>
                    </div>
                    <div className="page_row_right_label">
                      <label>Hindu, Brahmin Bhumihar</label>
                      <label>₹ 0 - 1 Lakh</label>
                    </div>
                    <div className="page_row_right_label">
                      <label>Hindi-UP/UK</label>
                      <label>Never Married</label>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
