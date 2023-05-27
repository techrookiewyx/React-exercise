import { useEffect, useState } from "react";
import { createEncryptedConnection, createUnencryptedConnection } from "./184-conntect";

export default function RepeatSwitchRoom(){
  const [secret, setSecret] = useState(false);
  const [room, setRoom] = useState('general');
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={room}
          onChange={e=>setRoom(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <br/>
      <label>
        <input
          type='checkbox'
          checked={secret}
          onChange={e => setSecret(e.target.checked)}
        />
        {' '}Enable encryption
      </label>
      <hr />
      <ChatRoom connect={secret ? createEncryptedConnection :
        createUnencryptedConnection} room={room} />
    </>
  )
}

function ChatRoom({ connect, room }) {
  useEffect(() => { 
    const conn = connect(room);
    conn.connect();
    return () => conn.disconnect();
  },[connect,room])
}