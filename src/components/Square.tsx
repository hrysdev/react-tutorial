import { useState } from "react";

type SquareProps = {
  value: string;
};

export default function Square({ value }: SquareProps) {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    console.log("clicked!");
  };

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
