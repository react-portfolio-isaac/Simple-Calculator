import {
    useState,
    useRef
  } from "react"; 
  import "./App.css";

/* added some CSS */

/************************** */
  function App() { 
    const inputRef = useRef(null); 
    const resultRef = useRef(null); 
    const [result, setResult] = useState(0);
    const [entered, setEntered] = useState('');
   
    function plus(e) { 
        e.preventDefault();
        let inputVal = Number(inputRef.current.value)
        setResult(result => result + inputVal);
        setEntered(entered => '' + entered + ' + ' + inputVal.toString())
        // resetInput();
    };
   
    function minus(e) { 
        let inputVal = Number(inputRef.current.value)
        e.preventDefault(); 
        setResult(result => result - inputVal);
        setEntered(entered => '' + entered + ' - ' + inputVal.toString())
        // resetInput();
    };
   
    function times(e) { 
        let inputVal = Number(inputRef.current.value)
        e.preventDefault();
        setResult(result => result * inputVal);
        setEntered(entered => '(' + entered + ') x ' + inputVal.toString())
        // resetInput();
    }; 
   
    function divide(e) { 
        let inputVal = Number(inputRef.current.value)
        e.preventDefault();
        setResult(result => result/inputVal);
        setEntered(entered => '(' + entered + ') / ' + inputVal.toString())
        // resetInput();
    };
   
    function resetInput(e) { 
      // Add the code for the resetInput function 
      if(e) e.preventDefault()
      inputRef.current.value = '';
      inputRef.current.focus();
    }; 
   
    function resetResult(e) { 
        // Add the code for the resetResult function 
      e.preventDefault(); 
      setResult(val => val * 0)
      setEntered(str => '')
      resetInput()
    }; 
    return ( 
      <div className="App">
        <style>{
            ""
            }</style>
        <div> 
          <h1>Simple Calculator</h1> 
        </div> 
        <form>
            <h3>Total:</h3>
            <p ref={resultRef}>{result}</p>
            <h3>You entered:</h3>
            <textarea readonly value={entered} />
            <div><input
                pattern="[0-9]" 
                ref={inputRef} 
                type="number" 
                placeholder="Type a number" 
            /> 
            </div>
            <div>
                <button onClick={plus}> + add</button> 
                <button onClick={minus}> - subtract</button> 
                <button onClick={times}> x multiply</button> 
                <button onClick={divide}> / divide</button> 
            </div>
            <div>
            <button className='script' onClick={resetInput}>clear input</button> 
            <button className='script' conClick={resetResult}>reset all</button> 
            </div>
        </form> 
      </div> 
    ); 
  } 
   
  export default App; 
  