import { useEffect } from 'react'
import { createConnection } from './168-chat'
export default function ChateRoomClear() {
  useEffect(() => {
    const connect = createConnection();
    connect.connect();
    return () => connect.disconnect();
  },[])
  return <h1>Welcome to the chat!</h1>
}
