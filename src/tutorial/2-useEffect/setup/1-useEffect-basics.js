import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (value > 3) {
      document.title = `New Messages(${value})`
    }
  })
  // we can use as many use effect as we want
  // [value] every time it will update when we change the value
  // [] use effect will work only with initial render
  return <React.Fragment>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value + 1)}>Click me</button>
  </React.Fragment>
};

export default UseEffectBasics;
