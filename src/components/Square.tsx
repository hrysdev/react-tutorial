type SquareProps = {
  value: string;
};

export default function Square({ value }: SquareProps) {
  const handleClick = () => {
    console.log("clicked!");
  };

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
