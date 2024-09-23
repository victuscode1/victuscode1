import React, { useState } from "react";
import "./Style.css";
function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  return (
    <div>
      <InputPassword
        placeholder="Type password"
        data={password}
        setData={setPassword}
      />
      <br />
      <InputPassword
        placeholder="Re-type password"
        data={rePassword}
        setData={setRePassword}
      />
      <br />
      <button
        type="submit"
        disabled={
          password !== "" && rePassword !== "" && password === rePassword
            ? false
            : true
        }
        onClick={(e) => {
          alert("Password is reset");
        }}
      >
        Submit
      </button>
    </div>
  );
}

function InputPassword({ placeholder, data, setData }) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <label>
      <input
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
        type={isHidden ? "password" : "text"}
        placeholder={placeholder}
      />
      <button
        onClick={(e) => {
          //when show button is clicked- before changing the state- it will be true
          if (isHidden) {
            e.target.innerText = "Hide";
          } else {
            e.target.innerText = "Show";
          }
          setIsHidden((isHidden) => !isHidden);
        }}
        style={{ cursor: "pointer" }}
      >
        show
      </button>
    </label>
  );
}

export default function ShowHide() {
  return (
    <div className="Exercise5">
      <ResetPasswordForm />
    </div>
  );
}
