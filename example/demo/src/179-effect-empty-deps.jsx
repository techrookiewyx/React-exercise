import { useEffect, useState } from "react";
import { createConnection } from "./177-resync-cheat";

const serverUrl = "https://localhost:1234";
const room = "general";
function ChatRoom() {
  useEffect(() => {
    const cont = createConnection(serverUrl, room);
    cont.connect();
    return () => cont.disconnect();
  }, []);
  return <h1>Welcome to the {room} room!</h1>;
}

export default function EffecEmptyDeps() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom />}
    </>
  );
}
