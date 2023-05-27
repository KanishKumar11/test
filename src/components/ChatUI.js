import React from 'react'
import Chat from '../Chat'
import Sidebar from '../Sibebar'
import RightSibebar from '../RightSidebar'

function ChatUI() {
  return (
    <>
    <Sidebar/>
    <Chat />
    <RightSibebar />
    </>
  )
}

export default ChatUI