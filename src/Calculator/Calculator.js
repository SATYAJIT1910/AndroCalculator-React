import React from 'react';
import ReactDOM from 'react-dom';
import "./Calculator.css"
function Calculator(){
    return(
        <div style={{display:"grid",justifyContent:"center"}}>
            <div style={{padding:"20px"}}/>
            <div style={{background:"black"}}>
             <div style={{padding:"30px"}}>
        
                <button className="degbtn">DEG</button>
                <button className="optionbtn">⋮</button>
                 
                 </div>   
            <div style={{display:"grid"}}>
                <textarea name="" className="calc" cols="10" rows="1" readOnly></textarea>
                <textarea name="" className="calcresult" cols="1" rows="1" readOnly></textarea>
            </div>

            <div style={{background:"#1a74e9"}}>
            <div>
                <button className="buttonsup">INV</button>
                <button className="buttonsup">RAD</button>
                <button className="buttonsup">sin</button>
                <button className="buttonsup">cos</button>
                <button className="buttonsup">tan</button>
            </div>
            <div>
                <button className="buttonsup">%</button>
                <button className="buttonsup">ln</button>
                <button className="buttonsup">log</button>
                <button className="buttonsup">√</button>
                <button className="buttonsup">^</button>
            </div>
            <div>
                <button className="buttonsup">∏</button>
                <button className="buttonsup">е</button>
                <button className="buttonsup">(</button>
                <button className="buttonsup">)</button>
                <button className="buttonsup">!</button>
            </div>
            </div>
            <div>
                <button className="buttons">7</button>
                <button className="buttons">8</button>
                <button className="buttons">9</button>
                <button className="buttonscon">÷</button>
                <button className="buttonscon">⌫</button>
            </div>
            <div style={{background:"black"}}>
                <button className="buttons">4</button>
                <button className="buttons">5</button>
                <button className="buttons">6</button>
                <button className="buttonscon">x</button>
            </div>
            <div  style={{background:"black"}}>
                <button className="buttons">1</button>
                <button className="buttons">2</button>
                <button className="buttons">3</button>
                <button className="buttonscon">-</button>
            </div>
            <div>
                <button className="buttons">0</button>
                <button className="buttons">.</button>
                <button className="buttons"> </button>
                <button className="buttonscon">+</button>
                <button className="buttonscon">=</button>
            </div>
            </div>
            </div>



    );
}
export default Calculator;