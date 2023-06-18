import React from 'react'
import Link from 'next/link'

const Chat = () => {
  return (
    <div>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        intent="WELCOME"
        chat-title="전대여🖖챗봇"
        agent-id="06f4b1a5-fa2f-4821-813c-23088abb102e"
        language-code="ko"
      ></df-messenger>
    </div>
  )
}

export default Chat
