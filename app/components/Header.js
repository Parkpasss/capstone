import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="container flex">
        <div className="logo">
          <Link href="/">HOME</Link>
        </div>
        <div className="links">
          <Link href="/location"> LOCATION</Link>
          <Link href="/rent">RENT</Link>
          <Link href="/return">RETURN</Link>
        </div>
      </div>
      <div>
        <div className="sign">
          <div className="button-wrapper">
            <button>
              <Link href="/login">로그인🔐</Link>
            </button>
          </div>
          <div className="button-wrapper">
            <button>
              <Link href="/signup">회원가입✍️</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
