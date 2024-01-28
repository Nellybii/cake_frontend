
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import * as Yup from "yup";


function Login() {
  const initialValues = {
    email: "",
    password: ""
  };


  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password too short";
    }
    return errors;
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum"),
  });
  const handleSubmit = async (values)=>{
    const response = await fetch(`${BASE_URL}/login`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
  }
  const data = await response.json();



  return (
    <Card style={{ width: '30rem' }}>
      <Card.Header as="h5">Log In</Card.Header>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      //   onSubmit={(values) => {
      //     console.log(values);
      //   }}
      // >
        {(formik) => (
          <FormikForm onSubmit={formik.handleSubmit}>
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
              Log in
            </Button>
          </FormikForm>
        )}
      </Formik>
    </Card>
  );
}

export default Login;
