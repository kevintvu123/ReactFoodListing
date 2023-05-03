import useMockFoodData from "./util/MockFoodData";
import FoodList from "./components/FoodList/FoodList";

function App() {
  // Calling mock fetch to API to pass data as prop into FoodList component
  const foodData = useMockFoodData();

  return (
    <div className="app">
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
