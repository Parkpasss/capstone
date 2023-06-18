import React from 'react'
import classes from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2 className={classes.left}>
            <Link href="https://www.joongbu.ac.kr/index.es?sid=a1">
              회사소개
            </Link>
            <Link href="https://bot.dialogflow.com/06f4b1a5-fa2f-4821-813c-23088abb102e">
              자주 묻는 질문
            </Link>
          </h2>
          <p>Copyright &copy; 2023, 전자기기 대여 서비스 전대여🖖</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
