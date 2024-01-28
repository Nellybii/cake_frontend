import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, ButtonGroup } from 'react-bootstrap'

function Navlog() {
    const [currentUser, SetCurrentUser] = useState(null)


    function handleLogout() {
        alert("logged out")
        SetCurrentUser(!null)
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



{/* <Nav.Link href="/login">
              Log In
            </Nav.Link>
            <Nav.Link href="/sign-up">
            Sign Up
            </Nav.Link> */}