import './App.css';
import CarsForm from "./components/CarsComponent/CarsForm";
import CarsApi from "./components/CarsComponent/Cars";


function App() {
  return (
      <div className="App">
          <CarsApi/>
        <CarsForm/>
      </div>
  )
}

export default App;
