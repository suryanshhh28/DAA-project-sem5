import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full sm:h-100vh h-full  bg-indigo-600 flex flex-wrap justify-center items-center p-4 ">
      <Link to={"/fibonacci"} className="w-full md:w-1/2 lg:w-1/4 p-2">
        <div className="w-full h-40 bg-white flex items-center rounded-md hover:transform hover:bg-gray-200 hover:scale-105 transition-transform duration-300 ease-in-out">
          <p className="m-auto font-bold text-purple-500">Fibonacci</p>
        </div>
      </Link>

      <Link to={"/coinchange"} className="w-full md:w-1/2 lg:w-1/4 p-2">
        <div className="w-full h-40 bg-white flex items-center rounded-md hover:transform hover:bg-gray-200 hover:scale-105 transition-transform duration-300 ease-in-out">
          <p className="m-auto font-bold text-purple-500">Coin Change</p>
        </div>
      </Link>

      <Link to={"/knapsack"} className="w-full md:w-1/2 lg:w-1/4 p-2">
        <div className="w-full h-40 bg-white flex items-center rounded-md hover:transform hover:bg-gray-200 hover:scale-105 transition-transform duration-300 ease-in-out">
          <p className="m-auto font-bold text-purple-500">Knapsack</p>
        </div>
      </Link>

      <Link to={"/matrixchainmultiplication"} className="w-full md:w-1/2 lg:w-1/4 p-2">
        <div className="w-full h-40 bg-white flex items-center rounded-md hover:transform hover:bg-gray-200 hover:scale-105 transition-transform duration-300 ease-in-out">
          <p className="m-auto font-bold text-purple-500">Matrix Chain</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
