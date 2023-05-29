import { useEffect, useState } from "react";
import { createConnection, sendMessage } from "./186-event-effect-chat";
const serverUrl = 'https://localhost:1234';
function ChatRoom({ room }) {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const connect = createConnection(serverUrl, room);
    connect.connect();
    return () => connect.disconnect();
  },[room])
  return (
    <>
      <h1>Welcome to the {room} room!</h1>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      {" "}
      <button onClick={() => {sendMessage(message)}}>Send</button>
    </>
  ) 
}

export default function EvenetAndEffect() { 
  const [room,setRoom] = useState('general');
  const [show, setShow] = useState(false);
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
      {" "}{" "}
      <button onClick={()=>{setShow(!show)}}>{show ? 'Close chat' : 'Open chat'}</button>
      {show && <hr />}
      {show && <ChatRoom room={room} />}
    </>
  )
}