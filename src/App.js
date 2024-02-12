import "./App.css";
import { AiTwotonePlusCircle } from "react-icons/ai";
function App() {
  return (
    <div className="App">
      <div className="Todo__container">
        <h1>To do list </h1>
        <input  type="text"    placeholder="Aggiungi cose da fare"/>
        <button> <AiTwotonePlusCircle/></button>
      </div>
    </div>
  );
}

export default App;
