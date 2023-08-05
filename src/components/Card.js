import { useState } from "react";
import "../index.css";
function Card({ id, name, info, price, image, removeToolHandler }) {
  //ReadMore Handler
  function readmoreHandler() {
    setReadmore(!readmore);
  }

  //UseState
  const [readmore, setReadmore] = useState(false);

  //Description Information
  const desc = info;

  //reducing the lenght of text
  const description = readmore ? desc : `${desc.substring(0, 150)}`;

  //returning values
  return (
    <div className="card">
      <img src={image} className="image" alt="none"></img>
      <div className="tour-info">
        {/* tour deatils has the PRICE and THE NAME OF PLACE */}
        <div className="tour-details">
          <h4 className="tour-price"> ₹{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="descritption">
          {description}
          {/* It will cause the read-more , show-less toggle */}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `   Show Less` : `   Read More`}
          </span>
        </div>
      </div>
      <button className="btn-red" onClick={() => removeToolHandler(id)}>
        Not Intrested
      </button>
      {/* <button className="rounded-full..." onClick={() => removeTour(props.id)}>
        Not Intrested
      </button> */}
    </div>
  );
}

export default Card;
