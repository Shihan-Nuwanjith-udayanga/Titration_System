import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/pages/Login";
import Registration from "./Components/pages/Registration";
import Home from "./Components/pages/Home";
import Process from "./Components/pages/Process";
import GetStart from "./Components/pages/GetStart";
import Success from "./Components/pages/Success";
import ViewDetails from "./Components/pages/ViewDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Register" element={<Registration/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Process" element={<Process/>}/>
          <Route path="/GetStart" element={<GetStart/>}/>
          <Route path="/Success" element={<Success/>}/>
          <Route path="/ViewDetails" element={<ViewDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
