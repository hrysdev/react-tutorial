type SquareProps = {
  value: string | null;
  isWinnerSquare?: boolean;
  onSquareClick: () => void;
};

export default function Square({
  value,
  isWinnerSquare,
  onSquareClick,
}: SquareProps) {
  return (
    <button
      className={`square ${isWinnerSquare ? "winner-square" : ""}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
