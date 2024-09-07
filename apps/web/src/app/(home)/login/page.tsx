import DesainLoginRegis from '@/components/DesainLoginRegis'
import React from 'react'
import FormikComp from './_components/Formik'

const Login = () => {
    return (
        <div className=' bg-latar'>
            <DesainLoginRegis text1='Masuk' text2='Daftar' href='/register' hrefTenant='/logintenant' ket='Belum' ketTenant='Tenant' ketPembeli='Pembeli'>
                <FormikComp />
            </DesainLoginRegis>
        </div>
    )
}

export default Login