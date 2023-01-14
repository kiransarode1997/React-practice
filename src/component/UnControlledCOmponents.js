import React, {useRef} from "react";

const UnControlledCOmponents = () => {

    let inputref = useRef(null)
    let inputretwo= useRef(null)

    function submiform (e){
        e.preventDefault()
        console.warn( "first value", inputref.current.value );
        console.warn( "first value", inputretwo.current.value );
        let inputth = document.getElementById("inputth").value
        console.warn( "first value", inputth );

    }

  return (
    <div>
      <form onSubmit={submiform}>
        <input ref={inputref} type="text" /> <br/><br/>
        <input ref={inputretwo} type="text" /> <br/><br/>
        <input id="inputth" type="text" /> <br/><br/>
        <button>click me</button>
      </form>
    </div>
  );
};

export default UnControlledCOmponents;
