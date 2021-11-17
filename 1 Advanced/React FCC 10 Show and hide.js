import React, { useState, useEffect, Fragment } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      {show && <Item/>}
      <button className='btn' onClick={()=> setShow(!show)}>
        show/hide   
      </button>
    </Fragment>
  )
};

const Item = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(()=> {
    window.addEventListener('resize', updateWidth);
    return (
      window.removeEventListener('resize', updateWidth)
    )
  }, [])

  return <div style={{margineTop:'2rem'}}>
    <h1>Window</h1>
    <h2>size : {width} px</h2>
  </div>
}

export default ShowHide;
