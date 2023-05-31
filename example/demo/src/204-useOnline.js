import { useState,useEffect } from "react";

export function useOnline(){ 
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
  return online;
}