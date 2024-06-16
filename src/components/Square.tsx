type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
  isWinnerSquare?: boolean;
};

export default function Square({
  value,
  onSquareClick,
  isWinnerSquare,
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
