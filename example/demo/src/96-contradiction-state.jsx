import { useState } from "react";

export default function Contradiction() {
  const [text, setText] = useState('');
  const [sending,setSending] = useState(false);
  const [send,setSend] = useState(false);

  async function handleSubmit(e) { 
    e.preventDefault();
    setSending(true);
    await sendMessage(text);
    setSend(true);
    setSending(false);
  }
  function sendMessage() { 
    return new Promise((resolve) => {
       setTimeout(resolve,2000)
    })
  }
  if (send) {
    return <h1>Thanks for feedback!</h1>
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={sending}
        value={text}
        onChange={e => setText(e.target.value) }
      />
      <br />
      <button type="submit" disabled={sending}>Submit</button>
      {sending && <p>Sending...</p>}
    </form>
   )
 }