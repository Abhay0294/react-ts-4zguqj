import * as React from 'react';
import './../style';

function StateMaintain() {
  const [name, setName] = React.useState('');
  const [state, setstate] = React.useState({
    name: '',
    selection: false,
  });

  /**Snap for the most common snippets:
  https://miro.medium.com/max/790/1*2wDZ1mo7_MHr2Qr2iZCNHg.png

  The return value of useMemo(callback, [dependency]) is NOT void but memoized value(value stored as cached rather recalculating it again) and It executes DURING render().
  */
  const user = React.useMemo(
    () => ({
      name: state.name,
      selection: state.selection,
    }),
    [state.name, state.selection]
  );

  /**
   * The return value of useEffect(callback, [dependency]) is void and It executes after render().
   */
  React.useEffect(() => {
    console.log('*****Use effect called******');
  }, [user]);

  const handleName = () => {
    setstate((prev) => ({ ...prev, name }));
    //()=>() call in this format while setting in useState
  };

  const handleSelection = () => {
    setstate((prev) => ({ ...prev, selection: true }));
  };

  console.log('Component Rendered');
  return (
    <div className="parent-container">
      <input
        placeholder="Type Name Here"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <button onClick={handleName}> Add Name</button>
      <button onClick={handleSelection}>Selection</button>
      <div>{`[Name: ${state.name}] [Selection: ${state.selection}]`}</div>
    </div>
  );
}

export default StateMaintain;
