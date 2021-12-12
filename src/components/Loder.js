import React from 'react';

//gif
import gif from "../gif/spinner.gif";

const Loder = () => {
    return (
        <div>
           <img src={gif} alt="loding" />
           <h1>Loding...</h1>
        </div>
    );
};

export default Loder;