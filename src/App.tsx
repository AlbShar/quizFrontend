import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderHome from "./modules/HeaderHome/index";
import Footer from "./modules/Footer/index";
import ReportBugPage from "./pages/ReportBugPage/ReportBugPage";
import Homepage from "./pages/Homepage/Homepage";
import Quiz from "./pages/Quiz/Quiz";
import Contact from "./pages/Contact/Contact";
import Results from "./pages/Results/Results";
import { GlobalStyles } from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HeaderHome />}>
            <Route index element={<Homepage />} />
            <Route index element={<Footer />} />
            <Route path="reportbug" element={<ReportBugPage />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="quiz" element={<Quiz />} />
          <Route path="results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
