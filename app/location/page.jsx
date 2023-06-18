'use client'
import React, { useState } from 'react'

const Location = () => {
  const [currentImg, setCurrentImg] = useState('')

  const imgClick = (e) => {
    setCurrentImg(e.target.src)
  }

  return (
    <div className="container">
      <p className="m-3 mt-1 p-2 se">
        <img src="/location.jpg" alt="지도" className="m-5 p-2"></img>
        *세종관 2층 오디세이아, 인농관 4층 커피킹 옆 북카페에서 대여 혹은 반납할
        수 있습니다.*
      </p>
      <div className="jpgs">
        <div className="imgs d-flex justify-content-center">
          <img
            src="1.jpg"
            alt="세종관"
            className="m-5 p-2"
            onClick={imgClick}
          ></img>
          <img
            src="2.jpg"
            alt="인농관"
            className="m-5 p-2"
            onClick={imgClick}
          ></img>
        </div>
      </div>
      <div>
        <img src={currentImg} alt="현재 이미지" className="fade-in"></img>
      </div>
    </div>
  )
}

export default Location
