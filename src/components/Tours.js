import React from "react";
import Card from "./Card";

function Tours({ tours, removeToolHandler }) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan With Atharva</h2>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return (
            <Card
              {...tour}
              key={tour.id}
              removeToolHandler={removeToolHandler}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

//exporting the tours component
export default Tours;
