import logo from "./logo.svg";
import reg_secure_logo from "./reg_secure_logo.webp";
import "./Reg.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Reg() {
  const navigate = useNavigate();

  const [mothertounge, setMothertounge] = useState([]);
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);

  const [dob, setDob] = useState("");
  const [rel, setRel] = useState("");
  const [cas, setCas] = useState("");
  const [mtt, setMtt] = useState("");
  const [eml, setEml] = useState("");
  const [psw, setPsw] = useState("");
  

  const continueHandleClick = () => {

    var id=localStorage.getItem("passingid");
    let url3 = "http://localhost:8000/update";
    let req3 = {
      updtdob: dob,
      updtrel: rel,
      updtcas: cas,
      updtmtt: mtt,
      updteml: eml,
      updtpsw: psw,
      updtid: id
    };
    console.log(req3);
    let header = {};
    axios
      .post(url3, req3, header)
      .then((res) => {
        console.log(res.data);
      })
      .catch();
      console.log(id);

      navigate("/");
  };
  

  const setCaste = (id) => {
    let url2 = "http://localhost:8000/fetchcaste";
    let req2 = { idx: id };
    let header2 = {};
    axios
      .post(url2, req2, header2)
      .then((res) => {
        setArray2(res.data);
        console.log("caste", res.data);
      })
      .catch();
  };

  useEffect(() => {
    let url = "http://localhost:8000/fetchmothertoungue";
    let req = {};
    let header = {};
    axios
      .post(url, req, header)
      .then((res) => {
        setMothertounge(res.data);
        console.log("some", res.data);
      })
      .catch();

    let url1 = "http://localhost:8000/fetchreligion";
    let req1 = {};
    let header1 = {};
    axios
      .post(url1, req1, header1)
      .then((res) => {
        setArray1(res.data);
        console.log("rel", res.data);
      })
      .catch();
  }, []);
  return (
    <div className="reg_container">
      <div className="reg_header">
        <div>
          <img src={logo} />
        </div>
        <div className="reg_logo_element">
          <label className="reg_header_element_one">
            ChristianMatrimony.com
          </label>
          <label className="reg_header_element_two">
            From Matrimony.com Group
          </label>
        </div>
      </div>
      <div className="reg_outer_body">
        <div className="reg_body_outer_header">
          <label>
            Great! You have completed <span>20%</span>
          </label>
        </div>
        <div className="reg_body">
          <div className="reg_middle_element">
            <div className="reg_section_one">
              <img src={reg_secure_logo} />
              <label>Trusted by Christians across the world!</label>
            </div>
            <div className="reg_section_two">
              <div className="reg_sec_two_header">
                <label className="upper">
                  Please provide us with your basic details
                </label>
              </div>
              <div className="reg_label_input">
                <label>Date of birth</label>
                <input onChange={(e)=>{setDob(e.target.value)}}></input>
              </div>
              <div className="reg_label_input">
                <label>Denomination</label>

                <select
                  onClick={(e) => {
                    setCaste(e.target.value);
                  }} onChange={(e)=>{setRel(e.target.value)}}
                >
                  <option>Select denomination</option>
                  {array1.map((itm, index) => {
                    return (
                      <>
                        <option value={itm.id}>{itm.txtReligion} </option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="reg_label_input">
                <label>Division</label>
                <select onChange={(e)=>{setCas(e.target.value)}}>
                  {array2.map((itm, index) => {
                    return (
                      <>
                        <option value={itm.id}>{itm.txtcaste}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="reg_label_input">
                <label>Subcaste (optional)</label>
                <input></input>
              </div>
              <div className="reg_label_input">
                <label>Mother tongue</label>
                <select onChange={(e)=>{setMtt(e.target.value)}}>
                  {mothertounge.map((itm, index) => {
                    return (
                      <>
                        <option value={itm.id}>{itm.txtMothertounge}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="reg_label_input">
                <label>Email id</label>
                <input onChange={(e)=>{setEml(e.target.value)}}></input>
              </div>
              <div className="reg_label_input">
                <label>Password</label>
                <input onChange={(e)=>{setPsw(e.target.value)}}></input>
              </div>
              <div className="reg_btn_ctr">
                <button
                  onClick={(e) => {
                    continueHandleClick(e);
                  }}
                >
                  CONTINUE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reg_footer">
        <label>Copyright © 2022. All rights reserved.</label>
      </div>
    </div>
  );
}
