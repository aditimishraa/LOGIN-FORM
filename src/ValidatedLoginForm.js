import React from "react";

import { Formik } from "formik";
import * as EmailValidator from "email-validator";




const ValidatedLoginForm = () => (


  <Formik
    initialValues={{ name: "", username: "", phonenumber: "", email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
      validate={values => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!EmailValidator.validate(values.email)) {
        errors.email = "Invalid email address.";
      }
      if (!values.phonenumber) {
        errors.phonenumber = "Required";
      } else if (values.phonenumber.length < 10) {
        errors.phonenumber = "Phone Number must be 10 character long.";
      } else {
        errors.phonenumber = "Invalid phone number."
      }
      
  
      const passwordRegex = /(?=.*[0-9])/;
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be 8 characters long.";
      } else if (!passwordRegex.test(values.password)) {
        errors.password = "Invalid password. Must contain one number.";
      }
  
      return errors;
    }}
  >
    
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      

      return (
        <>
        <div>
          <h1>Validated Login Form</h1>
        </div>
        <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name && "error"}
          />

          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            alue={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.username && touched.username && "error"}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}

          <label htmlFor="phonenumber">Phone Number</label>
          <input
            id="phonenumber"
            name="phonenumber"
            type="tel"
            placeholder="Enter your number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            alue={values.phonenumber}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.phonenumber && touched.phonenumber && "error"}
          />
          {errors.phonenumber && touched.phonenumber && (
            <div className="input-feedback">{errors.phonenumber}</div>
          )}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}

          <button type="submit" disabled={isSubmitting}>
            Login
          </button>

        </form>
        
        </>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;