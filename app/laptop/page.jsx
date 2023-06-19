'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Laptop = () => {
  const [menu, setMenu] = useState([
    {
      id: 1,
      item: 'LG Gram',
      num: 0,
    },
    {
      id: 2,
      item: 'SAMSUNG',
      num: 0,
    },
    {
      id: 3,
      item: 'Macbook',
      num: 0,
    },
  ])

  const generateTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>메뉴</th>
            <th>수량</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.item}</td>
              <td>{item.num}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger plusbtn"
                  onClick={() => select(item.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-secondary delbtn"
                  onClick={() => unselect(item.id)}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  const select = (itemId) => {
    const updatedMenu = [...menu]
    const selectedItem = updatedMenu.find((item) => item.id === itemId)

    if (selectedItem.num < 4) {
      selectedItem.num += 1
      setMenu(updatedMenu)
    } else {
      alert('최대 4개까지 선택할 수 있습니다.')
    }
  }

  const unselect = (itemId) => {
    const updatedMenu = [...menu]
    const selectedItem = updatedMenu.find((item) => item.id === itemId)

    if (selectedItem.num > 0) {
      selectedItem.num = 0
      setMenu(updatedMenu)
    } else {
      alert('수량을 선택해주세요.')
    }
  }

  const calcSum = () => {
    let sum = 0
    menu.forEach((item) => {
      sum += item.num
    })
    return new Intl.NumberFormat().format(sum)
  }

  const eodu = () => {
    alert('대여가 완료되었습니다~!')
    // location.href = 'index.html'; // React에서는 다른 페이지로 이동하는 방식이 다릅니다.
  }

  return (
    <div>
      <div class="selh1">
        <h1>노트북 충전기를 선택해주세요.</h1>
      </div>
      {generateTable()}
      <p class="bot">총 수량: {calcSum()}</p>
      <button id="rentbtn" onClick={eodu}>
        <Link href="/">대여하기</Link>
      </button>
    </div>
  )
}

export default Laptop
