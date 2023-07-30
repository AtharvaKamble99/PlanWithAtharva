import { useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import data from "./Data";
//import Card from "./components/Card";

//Function App
const App = () => {
  //remove Tour Handler
  function removeToolHandler(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  //UseState
  const [tours, setTours] = useState(data);
  return (
    <div>
      <Tours tours={tours} removeToolHandler={removeToolHandler}></Tours>
    </div>
  );
};

export default App;
