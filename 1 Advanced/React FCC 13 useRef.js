import React, { useEffect, useRef, Fragment } from 'react';

/* Similarities between useRef and useEffect
  1. preserves value
  2. DOES NOT trigger re-render
  3. target DOM nodes/elements
*/

const UseRefBasics = () => {

  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus(); // adding the focus on the current value each time we re-render
  })

  return (<Fragment>
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <input type='text' ref={refContainer} />
        <button type='submit'>submit</button>
      </div>
    </form>
    <div ref={divContainer}>Hello world</div>
  </Fragment>)
};

export default UseRefBasics;
