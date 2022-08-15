import * as React from 'react';
import './../style';

function ButtonCounter() {
  const [count, setState] = React.useState(0);

  return (
    <div className="parent-container">
      <button
        className="button-counter"
        onClick={() => {
          setState(count + 1);
        }}
      >
        Click +/-
      </button>
      <input placeholder="counter values">{this.count}</input>
    </div>
  );
}

export default ButtonCounter;
