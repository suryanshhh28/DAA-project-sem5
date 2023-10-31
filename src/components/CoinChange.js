import React, { useState } from "react";
import { Link } from "react-router-dom";

const CoinChange = () => {
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [ans, setAns] = useState(0);

  const coinChange = () => {
    const arr = coins;
    const amt = amount;
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let coin of arr) {
      for (let i = coin; i <= amount; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
    setAns(dp[amt] === Infinity ? -1 : dp[amt]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      const newValue = inputValue.trim();
      if (newValue) {
        setCoins([...coins, parseInt(newValue)]);
        setInputValue("");
      }
    }
    console.log(coins);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
    if (e.key === "Enter") {
      coinChange();
      setCoins([]);
      setAmount(0);
    }
  };

  const findAns = () => {
    coinChange();
    setCoins([]);
    setAmount(0);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-400 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 m-10">
        <input
          className="border border-blue-300 rounded p-2 mb-4 w-full"
          type="text"
          placeholder="Enter elements in the array"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleKeyPress}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
        >
          Add
        </button>
        <input
          className="border border-blue-300 rounded p-2 mb-4 w-full"
          type="text"
          placeholder="Enter amount"
          onChange={handleAmountChange}
          onKeyPress={handleAmountChange}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={findAns}
        >
          Find
        </button>
        <h1 className="text-xl mt-4 text-black">
          {ans === -1 ? (
            "Can't be created :( "
          ) : (
            <p>Minimum number of 🪙 : {ans}</p>
          )}
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

export default CoinChange;
