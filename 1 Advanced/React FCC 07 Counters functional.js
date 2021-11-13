import React, {Fragment, useState} from 'react';

const useStateCounterComplex = () => {
    const [value, setValue] = useState(0);
    const reset = () => {
        setValue(0);
    };
    const complexIncrease = () => {
        setTimeout(()=>{
           // setValue(value+1);
           setValue((prevState)=>{
               return prevState + 1;
           })
        }, 2000)
    }

    return (
        <Fragment>
            <section style={{ margin: '4rem 0'}}>
            <h2>More Complex Counter</h2>
            <h1>{value}</h1>
            <button className='btn' onClick={complexIncrease}>
                increase later
            </button>
            </section>
        </Fragment>
    );
};

export default useStateCounterComplex