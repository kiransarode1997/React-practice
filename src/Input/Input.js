import React, { useState } from "react";

const Input = () => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function valueChange(val) {
    console.warn(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }

//   function clickvalue() {}

  return (
    <div>
      {print ? <h1>input get the {data}</h1> : null}
      <input type="text" onChange={valueChange} />
      <button
        onClick={() => {
          setPrint(true);
        }}
      >
        value print
      </button>
    </div>
  );
};

export default Input;
