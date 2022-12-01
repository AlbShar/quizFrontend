import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReportBug from "./pages/ReportBug/ReportBug";
import Homepage from "./pages/Homepage/Homepage";
import Quiz from "./pages/Quiz/Quiz";

function App() {
  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="reportbug" element={<ReportBug />} />
          <Route path="quiz" element={<Quiz />} />
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
