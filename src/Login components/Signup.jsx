import { useContext, useState } from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import * as Yup from "yup";
import { api } from "../utils/Main";




import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../Context/Auth";


function Signup() {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext)
    const formik = useFormik({
        validationSchema: Yup.object().shape({
            email: Yup.string()
              .email("Enter a valid email address")
              .required("Email address is required"),
            password: Yup.string().required("Password is required"),
        }),
        initialValues: {
            username: "",
            phone: "",
            email: "",
            password: "",
          },
        onSubmit: async (values, { resetForm }) => {
            
            try {
                const res = await api.post("register", values);
                console.log(res);        
                toast.success(res.data.message);
                 resetForm();
                localStorage.setItem("session", JSON.stringify(res.data));
                setIsAuthenticated(true);
                navigate("/");
        
            } catch (error) {
                const data = error.response.data;

                console.log("unable to log in");
                toast.error(data.message);
            }
        }
    })
    console.log("Formik Values:", formik.values);

    console.log(formik.errors);

    return (
        <Card style={{ width: '30rem' }} className="mx-auto">
            <Card.Header as="h5" >Register or Sign up</Card.Header>


            <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                         margin="normal"
                         required
                     
                         label="Username"
                         name="username"
                         autoComplete="email"
                         onChange={formik.handleChange}
                         autoFocus
                         onBlur={formik.onBlur}
                         value={formik.values.username}
                    />
                    {formik.errors.email && formik.touched.username && (
                        <span className="error">{formik.errors.username}</span>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control
                         margin="normal"
                         required
                     
                         label="Email Address"
                         name="email"
                         autoComplete="email"
                         onChange={formik.handleChange}
                         autoFocus
                         onBlur={formik.onBlur}
                         value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <span className="error">{formik.errors.email}</span>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control
                         margin="normal"
                         required
                     
                         label="Phone"
                         name="phone"
                         autoComplete="phone"
                         onChange={formik.handleChange}
                         autoFocus
                         onBlur={formik.onBlur}
                         value={formik.values.phone}
                    />
                    {formik.errors.email && formik.touched.username && (
                        <span className="error">{formik.errors.username}</span>
                    )}
                </Form.Group>
               
                
                <Form.Group className="mb-3" >
                    <Form.Control
                        margin="normal"
                        required
                   
                        label="Password"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                        onBlur={formik.onBlur}
                        value={formik.values.password}
                        placeholder="Password"
                    />
                    {formik.errors.password && formik.touched.password && (
                        <span className="error">{formik.errors.password}</span>
                    )}
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    className={!(formik.dirty && formik.isValid) ? "disabled-btn" : ""}
                    disabled={!(formik.dirty && formik.isValid)}
                >
                    Log in
                </Button>
            </Form>
      

            <p>
                Aleady have an account?
                <Link to="/login">Signup</Link>
            </p>
        </Card>
    )
}

export default Signup