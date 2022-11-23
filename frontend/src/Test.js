import { useState } from "react";
import "./Test.css";
export default function Test() {
  const [userid, setuserid] = useState("dffdhhr");

  return (
    <div>
      <input
        type={"text"}
        value={userid}
        onChange={(e) => {
          setuserid(e.target.value)
          console.log(e.target.value)
          ;
        }}
        placeholder={"user id"}
      ></input>
      <button>signup</button>
      <div>{userid}</div>
    </div>
  );
}
