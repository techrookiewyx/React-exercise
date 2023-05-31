import { useState } from "react";
import { ChatRoomTZS } from "./207-chatroom";
export default function HookChatRoom() {
  const [room,setRoom] = useState('general');
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={room}
          onChange={e => {setRoom(e.target.value)}}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoomTZS room={room} />
    </>
  )
}