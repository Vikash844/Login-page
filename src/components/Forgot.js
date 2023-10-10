import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Forgot = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate form submission
    setTimeout(() => {
      console.log("Password reset request for email:", values.email);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col logo" id="logo">
          <h1>My-Task Let's <br /> Management Better</h1>
          <img src="philipp-katzenberger-iIJrUoeRoCQ-unsplash.jpg" alt="" />
        </div>
        <div className="col login">
          <div className="frogotfrom">
            <h1>Forgot Password</h1>
            <p>Enter your email address to reset your password.</p>
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="filed">
                    <label>Email:</label>
                    <Field type="text" name="email" className="Text-area" placeholder="Enter Your Email"/>
                    <ErrorMessage name="email" component="p" className="error text-danger" />
                  </div>
                  <button className="button" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                  <p>Back to <Link to="/"> Sign in </Link> Page</p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Forgot;
