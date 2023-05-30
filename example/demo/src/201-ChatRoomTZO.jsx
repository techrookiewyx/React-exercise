import { useEffect } from "react";
import { createConnectionT } from "./201-relink-chat";
export function ChatRoomTZO({ obj }) {
  const { serverUrl, roomId } = obj;
  useEffect(()=>{
    const conn = createConnectionT({
      roomId: roomId,
      serverUrl: serverUrl,
    });
    conn.connect();
    return () => conn.disconnect();
  },[serverUrl,roomId])
  return (
    <h1>Welcome to the {obj.roomId} room!</h1>
  )
}