import * as Yup from "yup"

// const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

export const signUpSchema = Yup.object({
    firstName: Yup.string().min(2).max(25).required("This is a required field"),
    lastName: Yup.string().min(2).max(25).required("This is a required field"),
    email: Yup.string().email().required("This is a required field"),
    phone: Yup.string()
    .matches(/^\+?\d{1,3}[-.\s]?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/, 'Invalid phone number')
    .required('This is a required field'),
    password: Yup.string().min(6, 'Password must be 6 characters long').matches(/[0-9]/, 'Password requires a number').matches(/[a-z]/, 'Password requires a lowercase letter').matches(/[A-Z]/, 'Password requires an uppercase letter').matches(/[^\w]/, 'Password requires a symbol').required("This is a required field"),
    confirmPassword: Yup.string().required("This is a required field").oneOf([Yup.ref('password'), null], 'Must match "password" field value')
})

export const loginSchema = Yup.object({
    email: Yup.string().email().required("This is a required field"),
    password: Yup.string().required("This is a required field")
})
