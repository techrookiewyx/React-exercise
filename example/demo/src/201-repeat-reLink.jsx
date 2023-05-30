import {  useState } from "react";
import './8-example-logs.css'
import { ChatRoomTZO } from "./201-ChatRoomTZO";

export default function RepeatRelink() { 
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState('general');
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  const obj = {
    serverUrl: serverUrl,
    roomId: roomId
  }
  return (
    <div className={isDark? 'dark201' : ''}>
      <button onClick={() => { setIsDark(!isDark) }}>Toggle theme</button>
      <div>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => {setServerUrl(e.target.value)}}
        />
      </div>
      <div>
        Choose the chat room:{" "}
        <select value={roomId} onChange={e => {setRoomId(e.target.value)}}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </div>
      <hr />
      <ChatRoomTZO obj={obj} />
    </div>
  )
}
