import { useSyncExternalStore } from "react";

function subscribe(cb) { 
    window.addEventListener('online', cb);
    window.addEventListener('offline', cb);
    return () => {
      window.removeEventListener('online', cb);
      window.removeEventListener('offline', cb);
    }
}
export function useOnlineRe(){ 
  return useSyncExternalStore(
   subscribe,
   ()=> navigator.onLine,
   ()=> true
 )
}