import { useState } from "react";
import "./218-game.css";

function Square({value,onSquareClick}) {
  return <button onClick={onSquareClick} className="square">
    {value}
  </button>;
}
function Board({squares,fst,onPlay,total}) {
  function handleClick(i) {
    if(squares[i] || calWinner(squares)) return 
    const nextSquares = squares.slice();
    if (fst) {
      nextSquares[i] = "X";
    } else { 
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }
  const winner = calWinner(squares);
  let status;
    if(winner){ 
      status = 'Winner' + winner;
    } else {
      status = 'Next Player:' + (fst ? "X" : 'O');
    }
  function calWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { 
        return squares[a];
      }
    }
    return null;
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => {handleClick(0)}} />
        <Square value={squares[1]} onSquareClick={() => {handleClick(1)}}/>
        <Square value={squares[2]} onSquareClick={() => {handleClick(2)}}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => {handleClick(3)}}/>
        <Square value={squares[4]} onSquareClick={() => {handleClick(4)}}/>
        <Square value={squares[5]} onSquareClick={() => {handleClick(5)}}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => {handleClick(6)}}/>
        <Square value={squares[7]} onSquareClick={() => {handleClick(7)}}/>
        <Square value={squares[8]} onSquareClick={() => {handleClick(8)}}/>
      </div>
    </>
  );
}
export default function TicGame() {
  const [fst, setFst] = useState(true);
  const [squares, setSquares] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = squares[currentMove];
  console.log(squares);
  function handlePlay(newSq) {
    const nextHis = [...squares.slice(0, currentMove + 1), newSq];
    setSquares(nextHis);
    setFst(!fst);
    setCurrentMove(nextHis.length - 1);
  }
  function jumpTo(index) {
    setFst(index % 2 === 0);
    setCurrentMove(index);
  }
  const move = squares.map((ele,index) => { 
    let description;
    if (index > 0) {
      description = 'Go to #' + index
    } else { 
      description = 'Got to Start'
    }
    return(
      <li key={index}><button onClick={() => {jumpTo(index)}}>{description}</button></li>  
      )
  })
   
  return (
    <div className="game">
      <div >
        <Board total={squares} squares={current} fst={fst} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>
          {move}
        </ol>
      </div>
    </div>
  )
}
