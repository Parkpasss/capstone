'use client'
import React, { useState, useEffect } from 'react'
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

  const [activeButton, setActiveButton] = useState(null)

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId)
  }

  const qksskq = () => {
    alert('해당 위치로 반납 부탁드립니다~!~!')
  }

  return (
    <div className="container mt-6 text-center">
      <main role="main" class="inner-cover que">
        <h2>반납하시겠습니까?</h2>
        <br />
        <p id="countdown">남은 대여 시간 : </p>
        <p class="setloc">반납 위치 설정 : </p>
        <div class="locbtn">
          <button
            className={`btn mr-1 ${activeButton === '인농관' ? 'active' : ''}`}
            onClick={() => handleButtonClick('인농관')}
          >
            인농관
          </button>
          <button
            className={`btn ml-1 ${activeButton === '세종관' ? 'active' : ''}`}
            onClick={() => handleButtonClick('세종관')}
          >
            세종관
          </button>
        </div>
        <br></br>
        <a class="returnbtn" onClick={qksskq}>
          반납하기
        </a>{' '}
      </main>
    </div>
  )
}

export default Page
