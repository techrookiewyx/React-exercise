import { useEffect } from 'react'
import { createConnection } from './168-chat'
export default function ChateRoom() {
  useEffect(() => {
    const connect = createConnection();
    connect.connect();
  },[])
  return <h1>Welcome to the chat!</h1>
}
