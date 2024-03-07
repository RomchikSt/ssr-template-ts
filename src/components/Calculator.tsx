import { useState } from "react";

type CalculatorProps = {
  page: string;
};

function Calculator({ page }) {
  const [result, setResult] = useState<number>(0);

  const handlePlus = () => {
    setResult(result + 1);
  };

  const handleMinus = () => {
    setResult(result - 1);
  };

  return (
    <div>
      <h1>{page}</h1>
      <h2>Result: {result}</h2>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}

export default Calculator;
