import { useEffect, useState } from "react";
import { createConnection } from "./177-resync-cheat";


function ChatRoom({ room }) {
  const [serverUrl,setServerUrl] = useState('https://localhost:1234')
  useEffect(() => {
    const cont = createConnection(serverUrl, room);
    cont.connect();
    return () => cont.disconnect();
  }, [room,serverUrl]) //这里不限eslint会自动检查反应值是否被声明为依赖项
  return (
    <>
      <div>
        Server URL:{' '}
        <br />
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </div>
      <h1>Welcome to the {room} room!</h1>
    </>
  )
} 

export default function LinterCheckDeps() { 
  const [romm, setRoom] = useState('general');
  return (
  <>
    <label>
      Choose the chat room:{' '}
      <select
        value={romm}
        onChange={e=>setRoom(e.target.value)}
      >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
      </select>
    </label>
    <hr/>
    <ChatRoom room={romm} />
    </>
    )
}