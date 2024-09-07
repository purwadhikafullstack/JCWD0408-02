import React from 'react'
import Image from 'next/image'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';
import { Logo } from './Logo';

interface IPropsDesainLogin {
    text1: string;
    text2: string;
    href: string;
    hrefTenant: string;
    ket: string;
    ketTenant: string;
    ketPembeli: string;
    children: React.ReactNode;
}

const DesainLoginRegis = ({ children, text1, text2, href, ket, hrefTenant, ketTenant, ketPembeli }: IPropsDesainLogin) => {
    return (
        <section className='h-screen w-screen max-w-7xl mx-auto flex justify-between items-center md:px-5 lg:px-14'>
            <main className='bg-white w-full md:w-1/2 py-5 px-5 rounded-xl shadow-lg'>

                {/* Logo ucapan selamat start */}
                <div className='flex flex-col items-center'>
                    <Logo colorBird='btn' colorText='gray-900' size='scale-150' />
                    <div className='flex flex-col mt-9 items-center'>
                        <h1 className='text-black text-lg font-medium'>Selamat datang</h1>
                        <h2 className='text-[10px] text-hitam'>{`Mohon masukkan data anda untuk ${text1} account ${ketPembeli}`}</h2>
                    </div>
                    <div className='w-full my-3'>
                        {children}
                    </div>
                    <div className='w-full flex gap-2 justify-center items-center text-xs text-hitam mb-3'>
                        <p>{`${ket} punya account Nezztar? `}<Link href={`${href}`} className='text-btn font-semibold'>{text2}</Link></p><span className='w-1 h-1 rounded-full bg-hitam'></span><Link href={`${hrefTenant}`} className='text-btn font-semibold'>{`Buat account ${ketTenant}`}</Link>
                    </div>
                </div>
                {/* Logo ucapan selamat end */}

                {/* Hiasan --atau-- start */}
                <div className='flex items-center gap-3 my-3'>
                    <span className='h-[0.1px] w-full bg-gray-300'></span>
                    <p className='text-xs text-hitam'>atau</p>
                    <span className='h-[0.1px] w-full bg-gray-300'></span>
                </div>
                {/* Hiasan --atau-- end */}

                {/* Login dengan sosmed start */}
                <div className='flex gap-6'>
                    <button type='button' className='border rounded-md border-btn w-full flex justify-center py-2'><Image src={'/google.svg'} alt='google' width={50} height={50} className='w-8 h-8' /></button>
                    <button type='button' className='border rounded-md border-btn w-full flex justify-center py-2'><BsTwitterX className='w-8 h-8' /></button>
                    <button type='button' className='border rounded-md border-btn w-full flex justify-center py-2'><FaFacebook className='w-8 h-8 text-blue-700' /></button>
                </div>
                {/* Login dengan sosmed end */}

                {/* Syarat ketentuan dan kebijakan privasi start */}
                <div className='flex items-center justify-center text-[10px] md:text-xs text-center text-hitam mt-4'>
                    <p>Dengan masuk atau membuat account, Anda setuju dengan kami <span className='text-btn'>Syarat & Ketentuan</span> Dan <span className='text-btn'>Kebijkan privasi</span></p>
                </div>
                {/* Syarat ketentuan dan kebijakan privasi end */}

            </main>

            {/* Image start */}
            <main className='hidden md:block'>
                <Image src={'/Realtor-bro.svg'} alt='Vector' width={400} height={400} />
            </main>
            {/* Image end */}
        </section>
    )
}

export default DesainLoginRegis