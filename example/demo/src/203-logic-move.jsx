import { useEffect, useState } from "react";
//202逻辑转移
export default function SaveButton() {
  const [online, setOnLine] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setOnLine(true);
    }
    function handleOffline() {
      setOnLine(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }
  }, []);
  function handleSave() { 
    console.log('✅ Progress saved');
  }
  return (
    <button disabled={!online} onClick={handleSave}>
      {online? 'Save progress' :'Reconnecting...'}
    </button>
  )
}