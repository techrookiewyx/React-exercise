import { showNotice } from "./187-notification";
import { createConnection } from "./187-chat";
import { useEffect, useState } from "react";
//import { useEffectEvent } from 'react';
const serverUrl = "https://localhost:1234";

function ChatRoom({ room, theme }) {
  // const onConn = useEffectEvent(() => { 
  //   showNotice('Connected',theme)
  // })
  useEffect(() => { 
    const conn = createConnection(serverUrl, room);
    conn.on('connected', () => { 
      //onConn();
      showNotice('Connected',theme)
    })
    conn.connect();
    return ()=> conn.disconnect();
  },[room])
  return <h1>Welcome to the {room} room!</h1>
}

export default function EffectGetNotLogic() {
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
