import { useEffect, useState } from "react";
import { createConnection } from "./177-resync-cheat";

const serverUrl = 'https://localhost:1234';

function ChatRoom({ room }) {
  useEffect(() => {
    const cont = createConnection(serverUrl, room);
    cont.connect();
    return () => cont.disconnect();
  }, [room])
  return <h1>Welcome to the {room} room!</h1>
} 

export default function DepsWithCode() { 
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