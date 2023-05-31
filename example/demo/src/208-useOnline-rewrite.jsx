import { useOnlineRe } from "./208-useOnline-re";

function SaveBar() { 
  const online = useOnlineRe();
  function handleSave() { 
    console.log('✅ Progress saved');
  }
  return (
    <button disabled={!online} onClick={handleSave}>
      {online ? 'Save progress' : 'Reconnecting...'}
    </button>
  )
}
function StatusBar() { 
  const online = useOnlineRe();
  return <h1>{online ? '✅ Online' : '❌ Disconnected'}</h1>
}
export default function HookOnlineRe() { 
  return (
   <>
     <SaveBar/>
     <StatusBar/>
   </>
  )
}