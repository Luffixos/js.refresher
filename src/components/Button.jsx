function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }
  
  function PlayButton({ movieName }) {
    function handlePlayClick() {
      alert(`Playing ${movieName}!`);
    }
  
    return (
      <Button onClick={handlePlayClick}>
        Play "{movieName}"
      </Button>
    );
  }
  
  function UploadButton() {
    return (
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    );
  }
  
  export default function Toolbar() {
    return (
      <div>
        <PlayButton movieName="Kiki's Delivery Service" />
        <UploadButton />
      </div>
    );
  }
  
  export default function ColorSwitch({
    onChangeColor
  }) {
    return (
      <button onClick={e => {
        e.stopPropagation();
        onChangeColor();
      }}>
        Change color
      </button>
    );
  }

  // +1 -1
  // import { useState } from 'react';

  // export default function Counter() {
  //   const [number, setNumber] = useState(0);
  
  //   return (
  //     <>
  //       <h1>{number}</h1>
  //       <button onClick={() => {
  //         setNumber(number + 1);
  //       }}>+1</button>
  //     </>
  //   )
  // }
  

  // onPointerMove={e => {
  //   setPosition({
  //     x: e.clientX,
  //     y: e.clientY
  //   });
  // }}