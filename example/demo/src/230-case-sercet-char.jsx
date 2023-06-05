import { useState } from "react";
import { showNotice } from "./187-notification";
import SecretRoom from "./230-secretRoom";
export default function SecretChat() {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState('general');
  const [isEncrypted, setIsEncrypted] = useState(false);
  return (
    <>
      <label>
      <input
        type='checkbox'
        checked={isDark}
        onChange={e => {setIsDark(e.target.checked)}}
      />
        {" "}
        Use dark theme
      </label>
      <br/>
      <label>
      <input
        type='checkbox'
        checked={isEncrypted}
        onChange={e => {setIsEncrypted(e.target.checked)}}
      />
        {" "}
        Enable encryption
      </label>
      <br/>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => { setRoomId(e.target.value) }}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <SecretRoom
        isEncrypted={isEncrypted}
        roomId={roomId}
        onMessage={e => {
          showNotice('New message: ' + e, isDark ? 'dark':'light')
        }}
      />
    </>
  )
}