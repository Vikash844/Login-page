import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("Logging in with:", values);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="full">
      <div className="container">
        <div className="row">
          <div className="col logo" id="logo">
            <h1>My-Task Let's <br /> Management Better</h1>
            <img src="photo-1523050854058-8df90110c9f1.avif" alt="" />
          </div>
          <div className="col login">
            <div className="From">
              <h1>Sign in</h1>
              <h5>Free access to our dashboard.</h5>
              <div className="icon">
                <img src="google.svg" alt="" />
                <p>Sing in with Google</p>

              </div>

              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="email">
                      <label id="txtemail">Email address:</label>
                      <Field className="input" type="text" name="email" placeholder=
                        'name@example.com' />
                      <ErrorMessage name="email" component="p" className="error" />
                    </div>
                    <div className="email">
                      <label id="txtpass">Password:</label>
                      <Field className="input" type="password" name="password" placeholder=
                        '**************' />
                      <ErrorMessage name="password" component="p" className="error" />
                    </div>
                    <div className="check">
                      <input className="input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="lable" for="flexCheckDefault">
                        Remember me
                      </label>
                      <Link to="Forgot">Forgot Password?</Link>
                    </div>

                    <button className="button" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Sign In....." : "Sign in"}
                    </button>
                    <p>Don't have an account yet? <Link to="/SingUp">Sign up here</Link> </p>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default LoginForm;
