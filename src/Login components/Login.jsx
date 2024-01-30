import { useContext, useState } from "react";
import { Button, Form, InputGroup, FormControl, Card } from "react-bootstrap";
import { useFormik } from "formik";
import { BASE_URL } from "../utils/Main";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../Login components/User";

function Login() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(User);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch(`${BASE_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();
        console.log(data);
        if (data.status == "fail") {
          toast.error(data.message);
        } else if (data.status == "success") {
          toast.success(data.message);
          resetForm();
          localStorage.setItem("session", JSON.stringify(data));
          setIsAuthenticated(true);
          navigate("/");
        }
      } catch (error) {
        toast.error("Unable to login. Please try again later.");
      }
    },
  });

  return (
    <Card style={{ width: "30rem", marginTop: "100px" }} className="mx-auto">
      <Card.Header as="h5">Log in</Card.Header>
      <Form
        onSubmit={formik.handleSubmit}
        style={{
          width: "26rem",
          marginTop: "20px",
          marginLeft: "30px",
        }}
      >
        <InputGroup className="mb-3" md="6">
          <InputGroup.Text id="basic-addon1">user@gmail.com</InputGroup.Text>
          <Form.Control
            required
            type="email"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            required
            type="password"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon2"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </InputGroup>
        <Button type="submit">Login</Button>
        <p>
          Dont have an account?
          <Link to="/sign-up">Signup</Link>
        </p>
      </Form>
    </Card>
  );
}

export default Login;
