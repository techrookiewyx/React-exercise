import { useEffect } from "react";
import { createConnection } from "./177-resync-cheat";

const serverUrl = 'https://localhost:1234';
//通过将room从组件中移除来表明该变量不是反应式
const room = 'music';
export default function RemoveDeps() { 
    useEffect(() => {
      const cont = createConnection(serverUrl, room);
      cont.connect();
      return () => cont.disconnect();
    }, [])
    return <h1>Welcome to the {room} room!</h1>
}