'use client'
import React, { useEffect } from 'react'
import classes from './realreturn.module.css'

const Page = () => {
  useEffect(() => {
    function countdown(elementId, seconds) {
      var element, endTime, hours, mins, msLeft, time

      function updateTimer() {
        msLeft = endTime - +new Date()
        if (msLeft < 0) {
          console.log('done')
        } else {
          time = new Date(msLeft)
          hours = time.getUTCHours()
          mins = time.getUTCMinutes()
          element.innerHTML =
            '남은시간 : ' +
            (hours ? hours + ':' + ('0' + mins).slice(-2) : mins) +
            ':' +
            ('0' + time.getUTCSeconds()).slice(-2)
          setTimeout(updateTimer, time.getUTCMilliseconds())
        }
      }

      element = document.getElementById(elementId)
      endTime = +new Date() + 24000 * seconds
      updateTimer()
    }

    countdown('countdown', 300)
  }, [])

  const qksskq = () => {
    alert('해당 위치로 반납 부탁드립니다~!~!')
  }

  return (
    <div className="container mt-5 text-center">
      <main role="main" className="inner-cover">
        <h2 className="cover-heading">반납하시겠습니까?</h2>
        <br />
        <p className="lead" id="countdown">
          남은 대여 시간 :
        </p>
        <p className="lead">반납 위치 설정 :</p>
        <div className={classes.button}>
          <button className="btn mr-1 btn-outline-danger">인농관</button>
          <button className="btn ml-1 btn-outline-danger">세종관</button>
        </div>

        <p className="lead">
          <a className="btn btn-lg btn-secondary focus" onClick={qksskq}>
            반납하기
          </a>
        </p>
      </main>
    </div>
  )
}

export default Page
