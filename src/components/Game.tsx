import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAsc, setIsAsc] = useState(false);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: (string | null)[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const handleSort = () => {
    setIsAsc(!isAsc);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move) => {
    let location = "";
    if (move > 0) {
      const index = history[move - 1].findIndex((e, i) => e !== squares[i]);
      location = `(${Math.floor(index / 3) + 1}, ${(index % 3) + 1})`;
    }

    let description;
    if (move > 0) {
      description = `Go to move #${move} ${location}`;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        {move === currentMove ? (
          `You are at move #${move}… ${location}`
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });

  if (!isAsc) {
    moves.reverse();
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={handleSort}>{isAsc ? "Sort Asc" : "Sort Desc"}</button>
        <ol reversed={isAsc}>{moves}</ol>
      </div>
    </div>
  );
}
