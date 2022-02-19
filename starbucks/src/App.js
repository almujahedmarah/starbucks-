import './App.css';
import Home from './comp/Home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from './comp/Cart';
function App() {
  return (
    <div className="App">
      {/* <Home/> */}

      <Routes>
     <Route exact="true" path="/" element={<Home />}></Route>
     {/* <Route path="/About" element={<About />}></Route> */}
     <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
    </div>
  );
}

export default App;
