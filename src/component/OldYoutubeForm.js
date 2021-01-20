import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = values => {
    console.log('Form Data', values)
}

const validate = values => {
    // values.name values.email values.channel
    // errors.name errors.email errors.channel
    // errors.name = 'this field is required'

    let errors = {}
    if (!values.name) {
        errors.name = 'Required'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {
        errors.email = 'Invalid email format'
    }

    if (!values.channel) {
        errors.channel = 'Required'
    }
    return errors
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid Email Format').required('Required'),
    channel: Yup.string().required('Required')
}) 


function OldYoutubeForm () {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        // validate
    })

    console.log('Visited Fields', formik.touched)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>name</label>
                    <input type='text' id='name' name='name' 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        value={formik.values.name}                     
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className='error'> {formik.errors.name} </div>) : null}

                    <label htmlFor='email'>email</label>
                    <input type='email' id='email' name='email' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.email} 
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className='error'> {formik.errors.email} </div>) : null}

                    <label htmlFor='channel'>Channel</label>
                    <input type='text' id='channel' name='channel' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.channel} 
                    />
                    {formik.touched.channel && formik.errors.channel ? (
                        <div className='error'> {formik.errors.channel} </div>) : null}


                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default OldYoutubeForm
