import React from "react";
import Card from "./Card";
function Tours({ tours, removeTourHandler }) {
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
              removeTourHandler={removeTourHandler}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default Tours;