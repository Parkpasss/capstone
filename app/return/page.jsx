import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const page = () => {
  return (
    <div className="bg-white-500">
      <Head>
        <title>전대여🖖반납하러 가기</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <main className="container mx-auto p-4 returnq">
        <div class="container text-center mt-5 ">
          <h2>반납하시겠습니까?</h2>
          <br />
          <Link href="/realreturn">
            <button class="mr-5 btn_r">예</button>
          </Link>
          <Link href="/extend">
            <button class="btn_r">아니오 (연장하기⚡)</button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default page
