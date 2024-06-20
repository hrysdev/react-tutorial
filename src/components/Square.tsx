type SquareProps = {
  value: string | null;
  isWinner?: boolean;
  onSquareClick: () => void;
};

export default function Square({
  value,
  isWinner,
  onSquareClick,
}: SquareProps) {
  return (
    <button
      className={`square ${isWinner ? "winner" : ""}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
