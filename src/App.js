import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="contacts" element={<Contacts />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    // <>
    //   <Header />
    //   <Main/>
    //   <Footer/>
    // </>
  );
}

export default App;
