'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import classes from './register.module.css'
import Link from 'next/link'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (username === '' || email === '' || password === '') {
      toast.error('빈칸을 채워주세요!')
      return
    }

    if (password.length < 6) {
      toast.error('비밀번호는 6자 이상 입력해주세요')
      return
    }

    try {
      const res = await fetch('http://localhost:3000/api/register', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
      })

      console.log(await res.json())
      if (res.ok) {
        toast.success('회원 가입이 완료되었습니다✔️')
        setTimeout(() => {
          signIn()
        }, 1500)
        return
      } else {
        toast.error('이미 있는 계정입니다🚫')
        return
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>회원가입✍️</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="닉네임"
            onChange={(e) => setUsername(e.target.value)}
          />
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
          <button className={classes.submitButton}>회원가입</button>
          <button className={classes.registerNow} onClick={() => signIn()}>
            <Link className={classes.loginNow} href="/login">
              아이디가 이미 있나요? <br /> 지금 바로 로그인해보세요!
            </Link>
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register
