// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"
import { Loginpage } from "./components/LoginPage";
import { Createuser } from "./components/Createuserpage";
import { DashboarPage } from "./components/ShopingPage";
function App() {
  return (
    <div className="App">
      <main className="container">
        <BrowserRouter>
          <div>
            <Routes className="">
              <Route path="/" element={<Loginpage />} />
              <Route path="/Dashboard" element={<DashboarPage />} />
              <Route path="/singup" element={<Createuser />} />
            </Routes>
          </div>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
