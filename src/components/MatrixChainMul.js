import React, { useState } from "react";
import { Link } from "react-router-dom";

const MatrixChainMul = () => {
  const [matrix, setMatrix] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [ans, setAns] = useState(0);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  const handleValuesChange = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      const newValue = inputValue.trim();
      if (newValue) {
        setMatrix([...matrix, parseInt(newValue)]);
        setInputValue("");
      }
    }
    console.log(matrix);
  };

  const handleSubmit = () => {
    setAns(matrixChain(matrix));
    setMatrix([]);
  };

  function matrixChain(p) {
    const n = p.length;
    const memo = Array.from({ length: n }, () => Array(n).fill(-1));

    function recursive(i, j) {
      if (i === j) return 0;
      if (memo[i][j] !== -1) return memo[i][j];

      let minCost = Number.MAX_SAFE_INTEGER;

      for (let k = i; k < j; k++) {
        let cost =
          recursive(i, k) + recursive(k + 1, j) + p[i - 1] * p[k] * p[j];
        if (cost < minCost) minCost = cost;
      }

      memo[i][j] = minCost;
      return minCost;
    }

    return recursive(1, n - 1);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-400 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 m-10">
        <div>
          <input
            className="border border-blue-300 rounded p-2 mb-4 w-full"
            type="text"
            placeholder="Enter values of matrix"
            value={inputValue}
            onChange={handleChange}
            onKeyPress={handleValuesChange}
          />
          <button onClick={handleValuesChange} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4">
            Add
          </button>
        </div>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Find
        </button>
        <h1 className="text-xl mt-4 text-black">
          Minimum number of multiplications: {ans}
        </h1>
        <Link
          to={"/"}
          className="mt-4 flex justify-center text-blue-500 underline"
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default MatrixChainMul;
