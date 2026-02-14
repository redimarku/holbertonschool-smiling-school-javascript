import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./Pages/Courses";
import Pricing from "./Pages/Pricing";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Navigation from "./Components/Navbar";
import Footer from './Components/Footer';
import NewPricing from "./Pages/NewPricing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          {/* <Route path="/new-pricing" element={<NewPricing />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
