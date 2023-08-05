import { useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import data from "./Data";
//import Card from "./components/Card";

//Function App
const App = () => {
  //remove Tour Handler
  const [tours, setTours] = useState(data);
  function removeToolHandler(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h1>No tours Left</h1>
        <button className="btn-white" onClick={() => setTours(data)}>
          Referesh
        </button>
      </div>
    );
  }
  //UseState

  return (
    <div>
      <Tours tours={tours} removeToolHandler={removeToolHandler}></Tours>
    </div>
  );
};

export default App;
