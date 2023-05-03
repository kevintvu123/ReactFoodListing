import { useState, useEffect } from "react";
import useMockFoodData from "./util/MockFoodData";

function App() {
  const foodData = useMockFoodData()

  console.log(foodData)

  return (
    <div className="app">
    </div>
  );
}

export default App;
