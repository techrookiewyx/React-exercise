import { showNotice } from "./187-notification";
import { createConnection } from "./187-chat";
import { useEffect, useState } from "react";
// import { useEffectEvent } from 'react';
const serverUrl = "https://localhost:1234";

function ChatRoom({ room, theme }) {
  // const onConn = useEffectEvent(room => { 
  //   showNotice('Welcome to '+room,theme)
  // })
  useEffect(() => { 
    const conn = createConnection(serverUrl, room);
    let id 
    conn.on('connected', () => { 
      id = setTimeout(() => {
        //onConn(room);
        showNotice('Welcome to '+room,theme)
      }, 2000); 
    })
    conn.connect();
    return () => {
      conn.disconnect();
      clearTimeout(id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[room,theme])
  return <h1>Welcome to the {room} room!</h1>
}

export default function RepeatDelayInfo() {
  const [room, setRoom] = useState("general");
  const [dark, setDark] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={room} onChange={(e) => setRoom(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <br />
      <label>
        <input
          type='checkbox'
          checked={dark}
          onChange={e => setDark(e.target.checked)}
        />
        {' Use dark theme'}
      </label>
      <hr />
      <ChatRoom
        room={room}
        theme={dark ? 'dark' : 'light'}
      />
    </>
  );
}
