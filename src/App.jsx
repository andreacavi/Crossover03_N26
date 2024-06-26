import "./App.css";
import { Route, Routes } from "react-router-dom";
import Manage from "./assets/Components/Manage";
import Accounts from "./assets/Components/Accounts";
import Navbar from "./assets/Components/Navbar";
import Footer from "./assets/Components/Footer";
import Landing from "./assets/Components/Landing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/test" element={<Landing />} /> */}
        <Route path="/" element={<Accounts />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
