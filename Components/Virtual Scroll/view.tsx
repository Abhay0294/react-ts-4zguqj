import * as React from 'react';
import SampleList from '../../Components/Virtual Scroll/list';
import './../../style';

export default function DisplayScroll() {
  return (
    <div>
      <div className="list-container">
        <SampleList />
      </div>
    </div>
  );
}
