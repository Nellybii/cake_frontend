import React from "react";
import { Button, NavLink } from "react-bootstrap";

function Userprofile() {
  return (
    <div>
      <div className="contact-container2">
        <h2>Welcome to SweetCakes Bakery</h2>
        <div style={{ display: "flex" , textAlign:"center"}}>
          <div style={{padding:"10px"}}>
            <h5>New to SweetCakes?</h5>{" "}
            <NavLink href="/profile">
              <Button style={{ backgroundColor:"#7350cd", borderColor:"white" }}>Sign up here</Button>
            </NavLink>
          </div>
          <div style={{padding:"10px"}}>
            <h5>Already have an account?</h5>{" "}
            <NavLink href="/login">
              <Button style={{ backgroundColor:"#7350cd", borderColor:"white" }}>Log in</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
