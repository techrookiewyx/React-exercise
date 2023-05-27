import { useEffect, useState } from "react";
import { createConnection } from "./177-resync-cheat";

const serverUrl = 'https://localhost:1234';
function CharRoom({ room }) {
  const [text, setText] = useState('');
  useEffect(() => {
    const conntect = createConnection(serverUrl, room);
    conntect.connect();
    return () => conntect.disconnect();
  }, [room])
  return (
    <>
      <h1>Welcome to the {room} room!</h1>
      <input
        value={text}
        onChange={e=>setText(e.target.value)}
      />
    </>
  )
}

export default function RepeateIptResync() { 
  const [room, setRoom] = useState('general');
  return (
    <>
      <label>
        Choose the chat room: {' '}
        <select
          value={room}
          onChange={e=>setRoom(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <CharRoom room={room}/>
    </>
  )
}