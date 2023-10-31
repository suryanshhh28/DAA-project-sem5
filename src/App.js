import Fibonacci from "./components/Fibonacci";
import CoinChange from "./components/CoinChange";
import KnapSack from "./components/KnapSack";
import MatrixChainMul from "./components/MatrixChainMul";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div style={{height:"100vh"}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fibonacci" element={<Fibonacci />} />
        <Route path="/coinchange" element={<CoinChange />} />
        <Route path="/knapsack" element={<KnapSack />} />
        <Route path="/matrixchainmultiplication" element={<MatrixChainMul />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
