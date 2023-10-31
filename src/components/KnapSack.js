import React, { useState } from "react";
import { Link } from "react-router-dom";

const KnapSack = () => {
  const [ans, setAns] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [inputWeight, setInputWeight] = useState("");
  const [inputCapacity, setInputCapacity] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [values, setValues] = useState([]);
  const [weights, setWeights] = useState([]);

  const handleValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleWeightChange = (e) => {
    setInputWeight(e.target.value);
  };

  const handleCapChange = (e) => {
    setInputCapacity(e.target.value);
  };

  const handleCapacityChange = (e) => {
    
    setCapacity(parseInt(e.target.value));
  };

  const handleValuesChange = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      const newValue = inputValue.trim();
      if (newValue) {
        setValues([...values, parseInt(newValue)]);
        setInputValue("");
      }
    }
    console.log(values);
  };

  const handleWeightsChange = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      const newValue = inputWeight.trim();
      if (newValue) {
        setWeights([...weights, parseInt(newValue)]);
        setInputWeight("");
      }
    }
    console.log(weights);
  };

//   const handleAnswer = () => {
//     getKnapSack();
//   };

  function getKnapSack() {
    const cap = capacity;
    const val = values;
    const wt = weights;

    console.log(cap, val, wt);

    const arr = new Array(val.length + 1);

    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(cap + 1).fill(0);
    }

    console.log(arr);

    for (let i = 1; i <= val.length; i++) {
      for (let j = 0; j <= cap; j++) {
        if (wt[i - 1] > j) {
          arr[i][j] = arr[i - 1][j];
        } else {
          arr[i][j] = Math.max(
            arr[i - 1][j],
            arr[i - 1][j - wt[i - 1]] + val[i - 1]
          );
        }
        console.log(arr[i][j]);
      }
    }

    console.log("answer", arr[val.length][cap]);

    setAns(arr[val.length][cap]);

    setValues([]);
    setWeights([]);
    setCapacity(0);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-400 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 m-10">
        <div>
          <input
            className="border border-blue-300 rounded p-2 mb-4 w-full"
            type="text"
            placeholder="Enter values in the array"
            value={inputValue}
            onChange={handleValueChange}
            onKeyPress={handleValuesChange}
          />
          <button
            onClick={handleValuesChange}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
          >
            Add
          </button>
          <input
            className="border border-blue-300 rounded p-2 mb-4 w-full"
            type="text"
            placeholder="Enter weights in the array"
            value={inputWeight}
            onChange={handleWeightChange}
            onKeyPress={handleWeightsChange}
          />
          <button
            onClick={handleWeightsChange}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
          >
            Add
          </button>
          <input
            className="border border-blue-300 rounded p-2 mb-4 w-full"
            type="text"
            placeholder="Enter knapsack capacity"
            value={inputCapacity}
            onChange={handleCapChange}
            onKeyPress={handleCapacityChange}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={getKnapSack}
        >
          Find
        </button>
        <h1 className="text-xl mt-4 text-black">
          {ans === -1 ? "No solution found." : `Maximum 💰: ${ans}`}
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

export default KnapSack;
