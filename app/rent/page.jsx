import Link from 'next/link'
import React from 'react'

const rent = () => {
  return (
    <div class="t">
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center mt-6">
        <h1 class="display-6">대여 할 기기를 선택해주세요</h1>
        <p class="lead">
          잘못 선택시 올바르지 않은 기기가 대여 될 수 있습니다😫 꼭! 확인하고
          골라주세요🫠
        </p>
      </div>
      <div class="container mt-6">
        <div class="card-deck text-center">
          <div class="card shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">노트북 충전기</h4>
            </div>
            <div class="card-body_r">
              <img
                src="https://cdn-icons-png.flaticon.com/512/689/689396.png"
                alt="노트북"
              />
              <ul class="list-unstyled mt-3 mb-4">
                <li>Samsung Galaxy</li>
                <li>LG Gram</li>
                <li>Apple Macbook</li>
              </ul>
              <div class="container btnn">
                <Link href="/laptop">
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-outline-danger btn_re btn-me"
                  >
                    Click
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div class="card shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">무선마우스</h4>
            </div>
            <div class="card-body_r">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3645/3645851.png"
                alt="마우스"
              />
              <ul class="list-unstyled mt-3 mb-4">
                <li>Noiseless</li>
                <li>Wireless</li>
                <li>Logitech</li>
              </ul>
              <div class="container btnn">
                <Link href="/mouse">
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-outline-danger btn_re btn-me"
                  >
                    Click
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="card shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">USB</h4>
            </div>
            <div class="card-body_r">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4738/4738945.png"
                alt="usb"
              />
              <ul class="list-unstyled mt-3 mb-4">
                <li>2GB</li>
                <li>8GB</li>
                <li>16GB</li>
              </ul>
              <div class="container btnn">
                <Link href="/usb">
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-outline-danger btn_re btn-me"
                  >
                    Click
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="card shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">연결 케이블</h4>
            </div>
            <div class="card-body_r">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5723/5723681.png"
                alt="케이블"
              />
              <ul class="list-unstyled mt-3 mb-4">
                <li>USB TYPE</li>
                <li>C TYPE</li>
                <li>Camera</li>
              </ul>
              <div class="container btnn">
                <Link href="/cable">
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-outline-danger btn_re btn-me"
                  >
                    Click
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default rent
