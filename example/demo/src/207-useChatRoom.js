import { useEffect } from "react";
import { createConnectionTWS } from "./207-hook-chast";
import { showNoticeTWS } from "./207-toast";
export function useChatRoom({room,url}) { 
  useEffect(() => {
    const obj = {
      url: url,
      room: room
    }
    const conn = createConnectionTWS(obj);
    conn.on('message', (msg) => { 
      showNoticeTWS('New message: ' + msg);
    })
    conn.connect();
    return () => conn.disconnect();
  },[room,url])
}