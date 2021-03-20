import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./Calculator.css"
function Calculator() {

    const [ChangeTXT, SetChangeTXT] = useState("RAD");
    const [ChangeTXT2, SetChangeTXT2] = useState("DEG");
    const [ChangeSin, SetChangeSin] = useState("Sin");
    const [InverseState, SetInverseState] = useState(0);
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




    return (
        <div style={{ display: "grid", justifyContent: "center" }}>
            <div style={{ padding: "20px" }} />
            <div style={{ background: "black" }}>
                <div style={{ padding: "30px" }}>

                    <button className="degbtn" onClick={Mytxtchange}>{ChangeTXT2}</button>
                    <button className="optionbtn">⋮</button>

                </div>
                <div style={{ display: "grid" }}>
                    <textarea name="" className="calc" cols="10" rows="1" readOnly></textarea>
                    <textarea name="" className="calcresult" cols="1" rows="1" readOnly></textarea>
                </div>

                <div style={{ background: "#1a74e9" }}>
                    <div>
                        <button className="buttonsup" onClick={Inverse}>INV</button>
                        <button className="buttonsup" onClick={Mytxtchange}>{ChangeTXT}</button>
                        <button className="buttonsup">{TxtChanger('sin','sin⁻¹')}</button>
                        <button className="buttonsup">{TxtChanger('cos','cos⁻¹')}</button>
                        <button className="buttonsup">{TxtChanger('tan','tan⁻¹')}</button>
                    </div>
                    <div>
                        <button className="buttonsup">%</button>
                        <button className="buttonsup">{TxtChanger('ln','eˣ')}</button>
                        <button className="buttonsup">{TxtChanger('log','10ˣ')}</button>
                        <button className="buttonsup">{TxtChanger('√','x²')}</button>
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
                <div style={{ background: "black" }}>
                    <button className="buttons">4</button>
                    <button className="buttons">5</button>
                    <button className="buttons">6</button>
                    <button className="buttonscon">x</button>
                </div>
                <div style={{ background: "black" }}>
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