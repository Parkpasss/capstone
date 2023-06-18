'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import classes from './navbar.module.css'
import person from '../../../public/person.jpg'
import { AiOutlineClose } from 'react-icons/ai'
import { signIn, signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const { data: session } = useSession()

  const handleShowDropdown = () => setShowDropdown((prev) => true)

  const handleHideDropdown = () => setShowDropdown((prev) => false)

  const loggedIn = false

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.left}>
          <Link href="/">전대여🖖</Link>
        </h2>
        <h2 className={classes.left}>
          <Link href="/location">위치</Link>
        </h2>
        <h2 className={classes.left}>
          <Link href="/rent">대여하기</Link>
        </h2>
        <h2 className={classes.left}>
          <Link href="/return">반납/연장하기</Link>
        </h2>
        <ul className={classes.right}>
          {session?.user ? (
            <div>
              <Image
                onClick={handleShowDropdown}
                src={person}
                width="45"
                height="45"
              />
              {showDropdown && (
                <div className={classes.dropdown}>
                  <AiOutlineClose
                    className={classes.closeIcon}
                    onClick={handleHideDropdown}
                  />
                  <button
                    onClick={() => {
                      signOut()
                      handleHideDropdown()
                    }}
                    className={classes.logout}
                  >
                    로그아웃🔓
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => {
                  signIn()
                }}
                className={classes.login}
              >
                로그인🔐
              </button>
              <div className={classes.register}>
                <Link href="/register">회원가입✍️</Link>
              </div>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
