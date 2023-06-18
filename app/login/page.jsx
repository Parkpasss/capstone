'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import classes from './login.module.css'
import { signIn } from 'next-auth/react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password === '' || email === '') {
      toast.error('빈칸을 채워주세요!')
      return
    }

    if (password.length < 6) {
      toast.error('비밀번호는 6자 이상 입력해주세요')
      return
    }

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (res?.error == null) {
        router.push('/')
      } else {
        toast.error('오류입니다🚫')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>로그인🔐</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="이메일"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={classes.submitButton}>로그인</button>
          <Link className={classes.loginNow} href="/register">
            아이디가 아직 없나요? <br /> 지금 만들어보세요!
          </Link>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login
