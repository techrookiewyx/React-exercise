import { useOnline } from "./204-useOnline"

function SaveBar() { 
  const online = useOnline();
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
  const online = useOnline();
  return <h1>{online ? '✅ Online' : '❌ Disconnected'}</h1>
}
export default function HookOnline() { 
  return (
   <>
     <SaveBar/>
     <StatusBar/>
   </>
  )
}