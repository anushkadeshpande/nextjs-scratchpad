import React from 'react'

type MessageProps = {
  id: string,
  sender: string,
  message: string
}

const Message = ({id, sender, message}: MessageProps) => {
  return (
    <li className="flex gap-1 items-center">{sender} : {message}</li>
  )
}

export default Message