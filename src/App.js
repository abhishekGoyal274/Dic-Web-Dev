import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Facilities from "./components/Facilities";
import ContactUs from "./components/ContactUs";
import Campus from "./components/Campus";
import AddInfo from "./components/AddInfo";
import Students from "./components/Students";

// Drak Mod

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="Facilities" element={<Facilities />} />
            <Route path="Campus" element={<Campus />} />
            <Route path="Contact" element={<ContactUs />} />
            <Route path="Add" element={<AddInfo />} />
            <Route path="Students" element={<Students />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
