import { useEffect } from "react";
import { createEncryptedConnectionTTZ, createUnencryptedConnectionTTZ } from "./230-secret-chat";

export default function SecretRoom({ roomId, isEncrypted, onMessage }) {
  useEffect(() => { 
    const obj = {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    }
    function createConnection() { 
      if(isEncrypted){
        return createEncryptedConnectionTTZ(obj);
      }else{
        return createUnencryptedConnectionTTZ(obj);
      }
    }
    const conn = createConnection();
    conn.on('message', e => { onMessage(e) })
    conn.connect();
    return ()=> conn.disconnect()
  }, [roomId, isEncrypted, onMessage])
  return <h1>Welcome to the {roomId} room!</h1>
}