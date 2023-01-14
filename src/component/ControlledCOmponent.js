import React, {useState} from "react";

const ControlledCOmponent = () => {

    const [val ,setVal] = useState()
    const [item ,setItem] = useState()
  return (
    <div>
      <input type="text"  value={val} onChange={(e)=>setVal(e.target.value)} />
      <input type="text"  value={item} onChange={(e)=>setItem(e.target.value)} />
      <h1>{val}</h1>
    </div>
  );
};

export default ControlledCOmponent;
