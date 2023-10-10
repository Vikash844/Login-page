import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const SignUp = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(4, "name must be at least 4 characters")
            .required("name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        gender: Yup.string()
            .oneOf(["male", "female", "other"], "Invalid gender")
            .required("Gender is required"),
        userType: Yup.string()
            .oneOf(["customer", "seller"], "Invalid user type")
            .required("User Type is required"),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            console.log("Signup data:", values);
            setSubmitting(false);
        }, 1000);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col logo" id="logo">
                    <h1>My-Task Let's <br /> Management Better</h1>
                    <img src="element5-digital-OyCl7Y4y0Bk-unsplash.jpg" alt="" />
                </div>
                <div className="col login">
                    <div className="singupfrom">
                        <h1>Sign Up</h1>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                password: "",
                                confirmPassword: "",
                                gender: "",
                                userType: "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className="filed">
                                        <label>Name:</label>
                                        <Field  className="Text-area" type="text" name="name" placeholder="Enter Your Name" />
                                        <ErrorMessage name="name" component="p" className="error text-danger" />
                                    </div>
                                    <div className="filed">
                                        <label>Email:</label>
                                        <Field  className="Text-area" type="text" name="email" placeholder="Enter Your Email" />
                                        <ErrorMessage name="email" component="p" className="error text-danger" />
                                    </div>
                                    <div className="filed">
                                        <label>Password:</label>
                                        <Field  className="Text-area" type="password" name="password" placeholder="**********" />
                                        <ErrorMessage name="password" component="p" className="error text-danger" />
                                    </div>
                                    <div className="filed">
                                        <label>Confirm Password:</label>
                                        <Field  className="Text-area" type="password" name="confirmPassword" placeholder="**********" />
                                        <ErrorMessage
                                            name="confirmPassword"
                                            component="p"
                                            className="error text-danger"
                                        />
                                    </div>
                                    <div className="d-flex">
                                    <div className="filed">
                                        <label>Gender:</label>
                                        <Field as="select" name="gender" className = "Text-area" >
                                            <option value="" label="Select a gender" />
                                            <option value="male" label="Male" />
                                            <option value="female" label="Female" />
                                            <option value="other" label="Other" />
                                        </Field >
                                        <ErrorMessage name="gender" component="p" className="error text-danger" />
                                    </div>
                                    <div className="filed">
                                        <label>Type of User:</label>
                                        <Field as="select" name="userType" className = "Text-area" >
                                            <option value="" label="Select a user type" />
                                            <option value="customer" label="Teacher" />
                                            <option value="seller" label="Student" />
                                        </Field>
                                        <ErrorMessage name="userType" component="p" className="error text-danger" />
                                    </div>
                                    </div>
                                    
                                    <button className="button" type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? "Signing up..." : "Sign Up"}
                                    </button>
                                    <p>Already have an account  <Link to="/">Sign in</Link> </p>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
