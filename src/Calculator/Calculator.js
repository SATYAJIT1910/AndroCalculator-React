import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./Calculator.css"



function Calculator() {
    const [Mainstring,SetMainstring]=useState("");
    const [ChangeTXT, SetChangeTXT] = useState("RAD");
    const [ChangeTXT2, SetChangeTXT2] = useState("DEG");
    const [ChangeSin, SetChangeSin] = useState("Sin");
    const [InverseState, SetInverseState] = useState(0);
    /*Math.js codes*/

function Equals(){
   // SetMainstring(math.evalute(Mainstring));
}
//

    function Mytxtchange() {
        if (ChangeTXT == "RAD") {
            SetChangeTXT("DEG");
            SetChangeTXT2("RAD")
        }
        else {
            SetChangeTXT("RAD");
            SetChangeTXT2("DEG");

        }
    }

    function Inverse() {
        if (InverseState == 0) {
            SetInverseState(1);
        }
        else {
            SetInverseState(0);
        }


    }
    function TxtChanger(prop, prop1) {
        if (InverseState == 0) {
            return prop;

        }
        else {
            return prop1;
        }

    }
    function FunChanger(prop, prop1) {
        if (InverseState == 0) {
            return prop;

        }
        else {
            return prop1;
        }

    }




    return (
        <div style={{ display: "grid", justifyContent: "center" }}>
            <div style={{ padding: "20px" }} />
            <div style={{ background: "black" }}>
                <div style={{ padding: "30px" }}>

                    <button className="degbtn" onClick={Mytxtchange}>{ChangeTXT2}</button>
                    <button className="optionbtn">⋮</button>

                </div>
                <div style={{ display: "grid" }}>
                    <textarea name="" className="calc" cols="10" rows="1" readOnly value={Mainstring}></textarea>
                    <textarea name="" className="calcresult" cols="1" rows="1" readOnly></textarea>
                </div>

                <div style={{ background: "#1a74e9" }}>
                    <div>
                        <button className="buttonsup" onClick={Inverse}>INV</button>
                        <button className="buttonsup" onClick={Mytxtchange}>{ChangeTXT}</button>
                        <button className="buttonsup" onClick={()=>SetMainstring(Mainstring+ FunChanger('sin','arcsin'))}>{TxtChanger('sin','sin⁻¹')}</button>
                        <button className="buttonsup" onClick={()=>SetMainstring(Mainstring+ FunChanger('cos(','arccos('))}>{TxtChanger('cos','cos⁻¹')}</button>
                        <button className="buttonsup" onClick={()=>SetMainstring(Mainstring+ FunChanger('tan(','arctan('))} >{TxtChanger('tan','tan⁻¹')}</button>
                    </div>
                    <div>
                        <button className="buttonsup" onClick={()=>SetMainstring(Mainstring+'%')}>%</button>
                        <button className="buttonsup" onClick={()=>SetMainstring(Mainstring+ FunChanger('ln','2.71^'))}>{TxtChanger('ln','eˣ')}</button>
                        <button className="buttonsup" onClick={()=>SetMainstring(Mainstring+ FunChanger('log(','10^'))}>{TxtChanger('log','10ˣ')}</button>
                        <button className="buttonsup" onClick={()=>SetMainstring(Mainstring+ FunChanger('sqrt','^2'))}>{TxtChanger('√','x²')}</button>
                        <button className="buttonsup"onClick={()=>SetMainstring(Mainstring+'^')}>^</button>
                    </div>
                    <div>
                        <button className="buttonsup" onClick={()=>SetMainstring(Mainstring+'pi')}>∏</button>
                        <button className="buttonsup"onClick={()=>SetMainstring(Mainstring+'2.71')}>е</button>
                        <button className="buttonsup" onClick={()=>SetMainstring(Mainstring+'(')}>(</button>
                        <button className="buttonsup" onClick={()=>SetMainstring(Mainstring+')')}>)</button>
                        <button className="buttonsup" onClick={()=>SetMainstring(Mainstring+'!')}>!</button>
                    </div>
                </div>
                <div>
                    <button className="buttons" onClick={()=>SetMainstring(Mainstring+7)}>7</button>
                    <button className="buttons"  onClick={()=>SetMainstring(Mainstring+8)}>8</button>
                    <button className="buttons"  onClick={()=>SetMainstring(Mainstring+9)}>9</button>
                    <button className="buttonscon"  onClick={()=>SetMainstring(Mainstring+'/')}>÷</button>
                    <button className="buttonscon" onClick={()=>SetMainstring("")} >C</button>
                </div>
                <div style={{ background: "black" }}>
                    <button className="buttons"  onClick={()=>SetMainstring(Mainstring+4)}>4</button>
                    <button className="buttons"  onClick={()=>SetMainstring(Mainstring+5)}>5</button>
                    <button className="buttons"  onClick={()=>SetMainstring(Mainstring+6)}>6</button>
                    <button className="buttonscon"  onClick={()=>SetMainstring(Mainstring+'*')}>x</button>
                </div>
                <div style={{ background: "black" }}>
                    <button className="buttons"  onClick={()=>SetMainstring(Mainstring+1)}>1</button>
                    <button className="buttons"  onClick={()=>SetMainstring(Mainstring+2)}>2</button>
                    <button className="buttons"  onClick={()=>SetMainstring(Mainstring+3)}>3</button>
                    <button className="buttonscon"  onClick={()=>SetMainstring(Mainstring+'-')}>-</button>
                </div>
                <div>
                    <button className="buttons"  onClick={()=>SetMainstring(Mainstring+0)}>0</button>
                    <button className="buttons"  onClick={()=>SetMainstring(Mainstring+'.')}>.</button>
                    <button className="buttons"> </button>
                    <button className="buttonscon"  onClick={()=>SetMainstring(Mainstring+'+')}>+</button>
                    <button className="buttonscon" onClick={Equals}>=</button>
                </div>
            </div>
        </div>



    );
}
export default Calculator;