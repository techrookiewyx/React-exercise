import { useState } from "react";
import { useChatRoom } from "./207-useChatRoom";

export function ChatRoomTZS({room}){
  const [url, setUrl] = useState('https://localhost:1234');
  useChatRoom({
    url: url,
    room: room,
  });
  return (
    <>
      <label>
       Server URL:
        <br />
        <input value={url} onChange={e=>setUrl(e.target.value)}/>
      </label>
      <h1>Welcome to the {room} room!</h1>
    </>
  )
}