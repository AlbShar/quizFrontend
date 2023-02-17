import Header from "./modules/Header/index";
import Footer from "./modules/Footer/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReportBugPage from "./pages/ReportBugPage/ReportBugPage";
import Homepage from "./pages/Homepage/Homepage";
import Quiz from "./pages/Quiz/Quiz";
import Contact from "./pages/Contact/Contact";
import { GlobalStyles } from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Homepage />} />
            <Route index element={<Footer />} />
            <Route path="reportbug" element={<ReportBugPage />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
