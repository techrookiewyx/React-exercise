import { useEffect, useState } from "react";
import { createConnection } from "./177-resync-cheat";

const serverUrl = 'https://localhost:1234';

function ChatRoom({ room }) {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const obj = {
      serverUrl: serverUrl,
      room: room
    }
    const cont = createConnection(obj);
    cont.connect();
    return () => cont.disconnect();
  }, [room])
  return (
    <>
      <h1>Welcome to the {room} room!</h1>
      <input value={message} onChange={e => setMessage(e.target.value)} />
    </>
  )
} 

export default function MoveOjbToEffect() { 
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