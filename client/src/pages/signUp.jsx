//Sign Up page

import React, { useRef, useState } from 'react'
import '../assets/signUp.style.css'
//import ReCAPTCHA from "react-google-recaptcha"
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik"
//import logoLatest from "../assets/utils/logoLatest.png"
import { encrypt } from '../utils'
import { signUpSchema } from '../schemas'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../assets/signUp.style.css';

import axios from 'axios'

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
}

export const SignUp = () => {

    const backendApi = process.env.REACT_APP_backend_url;


    const navigate = useNavigate()
    const navigateToLogin = () => {
        navigate("/login")
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: async ({ firstName, lastName, phone, email, password, confirmPassword }) => {

            const encryptedPassword = encrypt(password)
            const encryptedConfirmPassword = encrypt(confirmPassword)

            try {
                const res1 = await axios.post(`${backendApi}/users/signup`, {
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    phonenumber: phone,
                    password: encryptedPassword,
                    confirmPassword: encryptedConfirmPassword
                })
                if (res1.status === 200) {
                   
                    toast.success("Signup Successful!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });

                      setTimeout(() => {
                        navigateToLogin();
                      }, 1000); 
                }
                else {
                    toast.error("Something went wrong", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });

                }
            }catch (error) {
                    console.error(error.message);
                    toast.error(error.response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                }
            }
        })
    
    return (
        <div className='signUp_container'>
        <div className='signUp'>
            <h1>SIGN UP</h1>
            <form onSubmit={handleSubmit}>
                <div className='signUp_contact'>
                    <div className='signUp_contact-content'>
                        <label className='signUp_label' htmlFor="firstName">First Name<span className='req'>*</span></label>
                        <input type="text" name='firstName' placeholder='First Name' value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                        {errors.firstName && touched.firstName ? (<span className='validation-error'>{errors.firstName}</span>) : null}
                    </div>
                    <div className='signUp_contact-content'>
                        <label className='signUp_label' htmlFor="lastName">Last Name<span className='req'>*</span></label>
                        <input type="text" name='lastName' placeholder='Last Name' value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
                        {errors.lastName && touched.lastName ? (<span className='validation-error'>{errors.lastName}</span>) : null}
                    </div>
                </div>

                <div className='signUp_contact'>
                    <div className='signUp_contact-content'>
                        <label className='signUp_label' htmlFor="email">Email<span className='req'>*</span></label>
                        <input placeholder='Email' type='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                        {errors.email && touched.email ? (<span className='validation-error'>{errors.email}</span>) : null}
                    </div>
                    <div className='signUp_contact-content'>
                        <label className='signUp_label' htmlFor="phone">Phone<span className='req'>*</span></label>
                        <input type="tel" name='phone' placeholder='Phone Number' value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                        {errors.phone && touched.phone ? (<span className='validation-error'>{errors.phone}</span>) : null}
                    </div>
                </div>


                <div className='signUp_account'>
                    <label className='signUp_label' htmlFor="password">Password<span className='req'>*</span></label>
                    <input type='password' name='password' placeholder='Password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                    {errors.password && touched.password ? (<span className='validation-error'>{errors.password}</span>) : null}
                </div>
                <div className='signUp_account'>
                    <label className='signUp_label' htmlFor="confirmPassword">Confirm Password<span className='req'>*</span></label>
                    <input type='password' name='confirmPassword' placeholder='Confirm Password' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                    {errors.confirmPassword && touched.confirmPassword ? (<span className='validation-error'>{errors.confirmPassword}</span>) : null}
                </div>

                <div className='signUp_formDiv-names'>
                    <button type='submit' className='btn_solid'>Submit</button>
                </div>

                <div className='signUp_login'>
                   
                    <Link to="/login" className='btn btn_primary'>Already have an Account?</Link>
                </div>

            </form>
            <ToastContainer />
        </div>
</div>
    );

}

