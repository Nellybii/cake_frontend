import { useState,useEffect,useContext } from 'react'

import { Link } from 'react-router-dom'
import { Form, Button, ButtonGroup } from 'react-bootstrap'
import { UserContext } from '../UseContext';

function Navlog() {
    const { user } = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState(user);
  useEffect(() => {
  
    if (!user) {
      handleLogout();
    }
  }, [user]);

    function handleLogout() {
        alert("logged out");
    setCurrentUser(null);
    }
    return (
        <>
            <Form inline className="mx-3">
                {currentUser === null ? (
                    <ButtonGroup>
                        <Button variant="secondary" as={Link} to="/login">
                            Login
                        </Button>
                        <Button variant="secondary" as={Link} to="/sign-up">
                            Signup
                        </Button>
                    </ButtonGroup>
                ) : (
                    <Button variant="secondary" onClick={handleLogout}>
                        Logout
                    </Button>
                )}
            </Form>
        </>
    )
}

export default Navlog



