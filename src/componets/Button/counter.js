import React, { useState } from "react";
import './counter.scss';


const ItemCounter = props => {
  const [value, setValue] = useState(props.init ? parseInt(props.init) : 0);
  return (
    <div className="count">
      <button
        className="count__btn count__btn--dec"
        onClick={() => {
          if (value - 1 >= parseInt(props.min)) setValue(value - 1);
        }}
      >
        -
      </button>
      <input type="number" className="count__input" disabled value={value} />
      <button
        className="count__btn count__btn--add"
        onClick={() => {
          if (value + 1 <= props.max) {
            setValue(value + 1);
            props.onAdd();
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default ItemCounter;
