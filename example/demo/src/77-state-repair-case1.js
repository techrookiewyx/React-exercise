import { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });
  function handleScore(){
    setPlayer({
      ...player,
      score: player.score + 1
    })
  }
  function handleFirstName(e) {
    setPlayer({
      ...player,
      firstName: e.target.value
    })
  }
  function handleLastName(e) {
     setPlayer({
      ...player,
      lastName: e.target.value
     })
  }
  return (
    <div>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handleScore}>+1</button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstName}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastName}
        />
      </label>
    </div>
  )
}