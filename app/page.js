import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from './components/Header'

const Home = () => {
  return (
    <div className="bg-white-500 min-h-screen">
      <Head>
        <title>전자기기 대여 서비스</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <main className="container mx-auto p-4">
        <section>
          <div>
            <img src="main.jpg"></img>
          </div>

          <div className="container">
            <p>
              전대여🖖는 <b>노트북 사용이 잦은 대학생의 원활한 충전</b>을 위하여
              개발되었습니다.
              <br />
              각 건물에서 대여 및 반납이 가능하며, 화재 및 도난 방지를 위하여
              대여, 반납 시간에 제한이 존재합니다.
              <br />
              모든 충전기는 정품을 사용하고 있습니다.
            </p>
          </div>
        </section>
        <br />
        <br />
        <section>
          <div className="container">
            <div>
              <h2>
                <b>사용안내</b>
              </h2>
            </div>
            <p>
              대여 시간은 오전9시 ~ 오후 10시입니다.
              <br />
              하루에 한 번, 1인 기준 최대 2시간 사용 가능하고 연장은 최대
              1시간입니다.
              <br />
              원활한 서비스를 위하여 시간에 맞게 반납해 주시길 바랍니다
              <br />
              <b>
                ※미반납 또는 파손, 연체 시 서비스 이용 제한 또는 비용을 청구할
                수 있습니다.
              </b>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
