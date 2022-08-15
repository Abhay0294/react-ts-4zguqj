import * as React from 'react';
import './../style';

function ButtonCounter() {
  const [count, setState] = React.useState(0);

  const clickHandler = () => {
    setState(count + 1);
  };

  return (
    <div className="parent-container">
      <button className="button-counter" onClick={clickHandler}>
        Click +
      </button>
      <input
        placeholder="counter values"
        value={`You clicked ${count} times`}
      ></input>
      <button className="button-counter" onClick={clickHandler}>
        Click -
      </button>
    </div>
  );
}

export default ButtonCounter;

/**
 * We don't use 'this' in react's functional componenet
 */
