import { useEffect, useState } from "react";
import { createConnection } from "./177-resync-cheat";


function ChatRoom({ room }) {
  const [url,setUrl] = useState('https://localhost:1234')
  useEffect(() => {
    const cont = createConnection(url, room);
    cont.connect();
    return () => cont.disconnect();
  }, [room,url])
  return (
    <>
      <div>
        <input
          type="text"
          value={url}
          onChange={e=>setUrl(e.target.value)}
        />
      </div>
      <h1>Welcome to the {room} room!</h1>
    </>
  )
} 

export default function EffectReactiveVle() { 
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