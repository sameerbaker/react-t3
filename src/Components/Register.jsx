import axios from "axios";
import { useFormik } from "formik";
import React from "react";

export default function Register() {
    const formik = useFormik({
        initialValues:{
            userName:'',
            email:'',
            password:''
        },onSubmit:RegisterUser,
        validate:values=>{
            let errors = {};
            if(values.email.length <= 10){
                errors.email = "email is required .. !!!";
            }
            if(values.password.length <= 6){
                errors.password = "password is required .. !!!";
            }
            return errors;

        }
    });
    async function RegisterUser(){
       const {data} = await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`,formik.values);
       console.log(data);
    }
    console.log(formik.values)
  return (
    <>
    <h1>Register :</h1>
      <form onSubmit={formik.handleSubmit}>
      <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            name="userName"
            onChange={formik.handleChange}
            value={formik.userName}
            id="name"
            placeholder="name@example.com"
          />
          <label for="name">Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.email}
            id="email"
            placeholder="name@example.com"
          />
          <label for="email">Email address</label>
          {formik.touched.email && formik.errors.email? <div className="alert alert-danger">{formik.errors.email}</div>:null}
        

        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.password}
            id="password"
            placeholder="Password"
          />
          <label for="password">Password</label>
          {formik.touched.password && formik.errors.password? <div className="alert alert-danger">{formik.errors.password}</div>:null}
          
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </>
  );
}