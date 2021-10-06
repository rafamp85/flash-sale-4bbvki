import React, { useState } from 'react';
import './style.css';
/*
 
idhi Chaalaaaaa Easy neeeku.. get started.. may be 15 minutes lo chesesthav emo. .

Flash Sale for 5 Seconds

This assignment focuses on passing function as props and trigger props in child components

a E-commerce website wants to give controls to the vendor and conduct the flash sales based on the vendor choice of items. vendors can click on the buttons and do a flash sale for five seconds after the five seconds the flash sale would stop and then you would `show no on-going sales message`.

A vendor can not start another flash sale if a flash sale is already in progress(please disable the controls)

Bonus Points:

1. if the controls are dynamically rendered from an API, and have different flash sale duration(in seconds) for each item
[
  {
    item: 'computers',
    duration: 10,
    id: 1
  },
   {
    item: 'iPads',
    duration: 5,
    id: 2
  },
   {
    item: 'HardDrives',
    duration: 3,
    id: 3
  }
]

*/

export default function App() {
  const arrBtns = [
    {
      item: 'computers',
      duration: 10,
      id: 1
    },
     {
      item: 'iPads',
      duration: 5,
      id: 2
    },
     {
      item: 'HardDrives',
      duration: 3,
      id: 3
    }
  ]

  const [disableBtn, setDisableBtn] = useState(false);

  const onClickBtn = e => {

    setDisableBtn(true);
    let timeSelected = 0;

    if( e.target.innerHTML.includes('Computers') ) {
      timeSelected = arrBtns[0].duration;
    } else if( e.target.innerHTML.includes('iPads') ) {
      timeSelected = arrBtns[1].duration;
    } else {
      timeSelected = arrBtns[2].duration;
    }

    let totalElapsedTime = timeSelected + '000';

    setTimeout(() => {
      setDisableBtn(false);
    }, totalElapsedTime);
  };

  return (
    <div>
      <h1>
        On Going Sale. . . <pre>Computers</pre>
      </h1>
      {/* <h1>No on-going sales, check back later</h1> */}
      <Computers 
        disableBtn={disableBtn}
        onClickBtn={onClickBtn}
      />

      <Ipads
        disableBtn={disableBtn}
        onClickBtn={onClickBtn}
      />
      <HardDrives 
        disableBtn={disableBtn}
        onClickBtn={onClickBtn}
      />
    </div>
  );
}

export const Computers = ({disableBtn, onClickBtn}) => {

  return (
    <button 
      disabled={disableBtn} 
      onClick={onClickBtn}
    >
      Computers for 5 seconds
    </button>
  );
};

export const Ipads = ({disableBtn, onClickBtn}) => {

  return(
    <button
      disabled={disableBtn}
      onClick={onClickBtn}
    >
      iPads for 5 seconds
    </button>
  );
  
};

export const HardDrives = ({disableBtn, onClickBtn}) => {

  return(
    <button
      disabled={disableBtn}
      onClick={onClickBtn}
    >
      Hard Drives for 5 seconds
    </button>
  );
};
