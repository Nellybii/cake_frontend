import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import * as Yup from "yup";


import { BASE_URL } from "../../utils/Main";
import { useEffect } from "react";

function Signup() {


    const initialValues = {
        username:"",
        email: "",
        phone:"",
        password: ""
      };
      const LoginSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email().required("Email is required"),
        phone: Yup.string().required("Phone is required"),
        password: Yup.string()
          .required("Password is required")
          .min(4, "Password is too short - should be 4 chars minimum"),
      });

    
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/register`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         const data = await response.json();
//         setProducts(data);

//       } 
//     };

//     fetchData();
//   }, []);
    return (
        <Card style={{ width: '30rem' }} className="mx-auto">
            <Card.Header as="h5" >Register or Sign up</Card.Header>

            <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <FormikForm onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="username"
          
                value={formik.values.username}
                onChange={formik.handleChange}
                className={formik.errors.username && formik.touched.username ? "input-error" : null}
                placeholder="Enter your Username"
              />
              {formik.errors.username && formik.touched.username && (
                <span className="error">{formik.errors.username}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
          
                value={formik.values.email}
                onChange={formik.handleChange}
                className={formik.errors.email && formik.touched.email ? "input-error" : null}
                placeholder="Enter your email"
              />
              {formik.errors.email && formik.touched.email && (
                <span className="error">{formik.errors.email}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="phone"
          
                value={formik.values.phone}
                onChange={formik.handleChange}
                className={formik.errors.phone && formik.touched.phone ? "input-error" : null}
                placeholder="Enter your Phone number"
              />
              {formik.errors.phone && formik.touched.username && (
                <span className="error">{formik.errors.phone}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
         
                value={formik.values.password}
                onChange={formik.handleChange}
                className={formik.errors.password && formik.touched.password ? "input-error" : null}
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
              Sign up
            </Button>
          </FormikForm>
        )}
      </Formik>
        </Card>
    )
}

export default Signup