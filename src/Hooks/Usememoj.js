import React, { useState ,useMemo} from "react";

const Usememoj = () => {
  const [count, setCount] = useState(0);
  const [item, setitem] = useState(10);

  const Multimemo = useMemo(function multicount() {
    console.warn("multil");
    return count * 5;
  },[count])

  return (  
    <div>
      <h1>Usememo {count}</h1>
      <h1>Usememo {item}</h1>
      <h1> {Multimemo}</h1>
      <button onClick={() => setCount(count + 1)}>cliick me</button>
      <button onClick={() => setitem(item + 1)}>cliick me</button>
    </div>
  );
};

export default Usememoj;
