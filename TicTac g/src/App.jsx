import { useState } from "react";
import "./App.css";

function Square({ value, onSquareClick, highlight }) {
  return (
    <button
      className={`square ${value ? "filled" : ""} ${highlight ? "highlight" : ""}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0, Draws: 0 });

  function handleClick(i) {
    if (calculateWinner(squares).winner || squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const { winner, line } = calculateWinner(squares);


  if (winner || (!squares.includes(null) && !winner)) {
    setTimeout(() => {
      if (winner) {
        setScore((prev) => ({ ...prev, [winner]: prev[winner] + 1 }));
      } else {
        setScore((prev) => ({ ...prev, Draws: prev.Draws + 1 }));
      }
      setSquares(Array(9).fill(null)); 
      setXIsNext(true);
    }, 1000);
  }

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (!squares.includes(null)) {
    status = "It's a Draw!";
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="game">
      <h1 className="title">Tic Tac Toe</h1>

    
      <div className="scoreboard">
        <div className="score x-score">X Wins: {score.X}</div>
        <div className="score o-score">O Wins: {score.O}</div>
        <div className="score draw-score">Draws: {score.Draws}</div>
      </div>

      <div className="status">{status}</div>
      <div className="board">
        {squares.map((square, i) => (
          <Square
            key={i}
            value={square}
            onSquareClick={() => handleClick(i)}
            highlight={line.includes(i)}
          />
        ))}
      </div>
      <button className="reset" onClick={() => setSquares(Array(9).fill(null))}>
        Reset Board
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return { winner: null, line: [] };
}

export default Board;
