import * as React from 'react';
import './../../style';

export default function SampleList() {
  // const [list, updateList] = React.useState([]);
  const list = [];

  (() => {
    for (let i = 0; i <= 100; i++) {
      list.push(i);
    }
  })();
  const generateListItems = list.map((myList) => {
    return <li>{myList}</li>;
  });

  return (
    <div>
      <div className="list-items">
        <ul>{generateListItems}</ul>
      </div>
    </div>
  );
}
