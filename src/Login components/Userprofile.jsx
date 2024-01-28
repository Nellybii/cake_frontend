import { useState } from 'react';
import { Button, NavLink } from "react-bootstrap";
import Login from './Login';

function Userprofile() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function handleLogin() {
    setIsLoggedIn(false);

  }
  function handleLogout() {
    setIsLoggedIn(true);

  }
  return (
    <div>
      <div className="contact-container2">
        <h2>Welcome to SweetCakes Bakery</h2>
        <div style={{ display: "flex", textAlign: "center" }}>
          <div style={{ padding: "10px" }}>
            <h5>New to SweetCakes?</h5>{" "}
            <NavLink href="/profile">
              <Button style={{ backgroundColor: "#7350cd", borderColor: "white" }}>Sign up here</Button>
            </NavLink>
          </div>
          <div style={{ padding: "10px" }}>
            <h5>Already have an account?</h5>{" "}

            <div>
              {isLoggedIn
                ? <>
                <Button style={{ backgroundColor: "#7350cd", borderColor: "white" }} onClick={handleLogin}>Log in</Button>
                <Login/>
                </>

                : <Button style={{ backgroundColor: "#7350cd", borderColor: "white" }} onClick={handleLogout}>Log out</Button>


              }
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
