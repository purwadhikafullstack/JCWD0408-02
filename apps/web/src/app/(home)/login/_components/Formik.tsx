"use client"

import ButtonComp from '@/components/ButtonComp'
import { Input } from '@/components/Input'
import { ErrorMessage, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email tidak valid").required("Mohon masukkan email anda"),
    password: Yup.string().required("Masukkan password")
})

const FormikComp = () => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(value, action) => {
                alert(JSON.stringify(value))
                action.resetForm()
            }}
        >
            {() => {
                return (
                    <Form className='flex flex-col'>
                        <div className='mb-2'>
                            <label htmlFor="email" className='text-black text-sm'>E-Mail Address</label>
                            <Input id='email' name='email' type='email' className='w-full h-10 border border-btn px-3 rounded-md focus:outline-btn' placeholder='Masukkan email' />
                            <ErrorMessage name='email' component='div' className='text-xs text-red-700' />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="password" className='text-black text-sm'>E-Mail Password</label>
                            <Input id='password' name='password' type='password' className='w-full h-10 border border-btn px-3 rounded-md focus:outline-btn' placeholder='Masukkan password' />
                            <ErrorMessage name='password' component='div' className='text-xs text-red-700' />
                        </div>

                        <ButtonComp text='Masuk' />

                    </Form>
                )
            }}

        </Formik >
    )
}

export default FormikComp