"use client"

import { SignIn } from '@clerk/nextjs'
import React, { useState } from 'react'

import Recaptcha from "react-google-recaptcha";

const SignInPage = () => {

  const [Captcha, setCaptcha] = useState<string | null>();

  const key = process.env.NEXT_PUBLIC_RECAPTCHA_KEY || '';

  return (
    <>
      {Captcha ? (
        <div className='flex items-center justify-center h-screen'>
          <SignIn />
        </div>
      ) : (
        <div className='flex items-center justify-center h-screen'>
          <Recaptcha sitekey={key} onChange={setCaptcha} />
        </div>
      )}
    </>

  )
}

export default SignInPage
