import { useState } from "react";
function sendMessage(message) {
  console.log('Sending message: ' + message);
}
export default function NoEffectForm() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  function handleSubmit(e) { 
    e.preventDefault();
    sendMessage(message);
    setShow(false);
  }
  return ( 
    <div>
      {show ?
        <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          placeholder="Message"
          onChange={e => setMessage(e.target.value)}
        />
        <br/>
        <button type="" disabled={message===''}>
          Send
        </button >
      </form>
        : 
        <>
        <h1>Thanks for using our services!</h1>
        <button onClick={() => {
          setShow(true);
          setMessage('');
        }}>Open chat</button>
      </>
      }
   </div>
  )
}