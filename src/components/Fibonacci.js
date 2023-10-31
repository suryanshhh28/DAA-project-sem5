import React, { useState } from "react";
import { Link } from "react-router-dom";

const Fibonacci = () => {
  const [num, setNum] = useState(0);
  const [output, setOutput] = useState("");

  let dp = new Array(num + 1).fill(-1);

  function fibonacci(num) {
    if (num <= 1) return num;
    if (dp[num] !== -1) return dp[num];
    return (dp[num] = fibonacci(num - 1) + fibonacci(num - 2));
  }

  function handleChangeInput(e) {
    setNum(
      parseInt(e.target.value, 10) > 0 ? parseInt(e.target.value, 10) : ""
    );
  }

  function handleClick() {
    const ans = fibonacci(num);
    setOutput(ans);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-400 ">
      <div className="bg-white rounded p-8 shadow-lg w-96 m-10">
        <input
          className="p-4 m-2 text-black border border-gray-300 rounded-md focus:outline-none w-full"
          type="number"
          value={num}
          onChange={handleChangeInput}
          placeholder="Enter a number"
        />
        <button
          className="bg-blue-500 text-white p-4 px-6 rounded hover:bg-indigo-900 mt-4"
          onClick={handleClick}
        >
          Find
        </button>
        <div className="flex flex-col items-center ">
          {output === "" ? (
            <p className="text-xl text-black mt-2">Please enter a number</p>
          ) : (
            <p className="text-xl text-black mt-2">
              The fibonacci number is ➡️ {output}
            </p>
          )}
        </div>
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

export default Fibonacci;
