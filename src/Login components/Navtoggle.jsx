// import React, { useContext } from 'react';
// import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import Loginbutton from '../Components/Loginbutton';
import Signupbutton from '../Components/Signupbutton';

function Navtoggle() {

    // const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    // const navigate = useNavigate();

    function handleLogout() {
     
    }

    return (
        
        <>
        <Form inline className="mx-3">
            {/* {isAuthenticated ? ( */}
                <ButtonGroup>
                
                
                <Signupbutton/>
                <Loginbutton/>
                    
                </ButtonGroup>
            {/* ) : (
                <Button variant="secondary" onClick={handleLogout}>
                    Logout
                </Button>
            )} */}
        </Form>
    </>
    )
}

export default Navtoggle