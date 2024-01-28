import React, { useState, useContext } from "react";
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
    const [showModal, setShowModal] = useState(true); // State to control modal visibility
    const navigate = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext);

    const formik = useFormik({
        validationSchema: Yup.object().shape({
            username: Yup.string().required("Username is required"),
            email: Yup.string().email("Enter a valid email address").required("Email address is required"),
            phone: Yup.string().required("Phone number is required"),
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
                setShowModal(false); // Close the modal after successful signup
            } catch (error) {
                const errorMessage = error.response?.data?.message || "Unable to sign up";
                console.log(errorMessage);
                toast.error(errorMessage);
            }
        }
    });

    return (
        <>
            {showModal && (
                <Card style={{ width: '30rem' }} className="mx-auto">
                    <Card.Header as="h5">Register or Sign up</Card.Header>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                required
                                name="username"
                                placeholder="Username"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                            />
                            {formik.errors.username && formik.touched.username && (
                                <span className="error">{formik.errors.username}</span>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                required
                                name="email"
                                placeholder="Email address"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.errors.email && formik.touched.email && (
                                <span className="error">{formik.errors.email}</span>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                required
                                name="phone"
                                placeholder="Phone number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                            />
                            {formik.errors.phone && formik.touched.phone && (
                                <span className="error">{formik.errors.phone}</span>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                required
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.errors.password && formik.touched.password && (
                                <span className="error">{formik.errors.password}</span>
                            )}
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={!formik.dirty || !formik.isValid}
                        >
                            Sign up
                        </Button>
                    </Form>
                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </Card>
            )}
            {!showModal && (
                <p>
                    Successfully signed up! {/* You can customize this success message */}
                </p>
            )}
        </>
    );
}

export default Signup;