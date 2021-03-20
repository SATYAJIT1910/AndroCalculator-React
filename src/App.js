import "./App.css"
import Calculator from "./Calculator/Calculator.js"

function App(){
  return (

    <div>
    <div style={{backgroundColor:"#383CC1",color:"white",padding:"2px",fontFamily:"sans-serif"}}>

      <h1 style={{justifyContent:"center",display:"flex"}}>AndroCalculator</h1>
      <h2 style={{justifyContent:"center",display:"flex"}}>Inspired from Google Calculator</h2>
      <h3 style={{justifyContent:"center",display:"flex"}}>Made by Satyajit Ghosh</h3>

    </div>
    <div>
      <Calculator/>
    </div>



    </div>
  );


}
export default App;