import React, { useState } from 'react';

const UseStateCounter = () => {
  let [value, setValue] = useState(0)
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1) sync function whatever times you press it will increase by one
      setValue((prevState) => {return prevState + 1})
      // brackets take current value
    }, 2000)
  }
  return <React.Fragment>
    {/* <section style={{margin: '4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button type='button' className='btn' onClick={() => setValue(value - 1)}>Decrease</button>
      <button type='button' className='btn' onClick={() => setValue(0)}>Reset</button>
      <button type='button' className='btn' onClick={() => setValue(value + 1)}>Increase</button>
    </section> */}

    {/* Complex Counter */}
    <section style={{margin: '4rem 0'}}>
      <h2>More Complex Counter</h2>
      <h1>{value}</h1>
      <button className='btn'onClick={complexIncrease}>Increase Later</button>
    </section>
  </React.Fragment>
};

export default UseStateCounter;
