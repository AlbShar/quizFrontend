import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Spinner from './UI/Spinner/Spinner';
import { GlobalStyles } from './styles/Global';
const HeaderHome = lazy(() => import('./modules/HeaderHome/index'));
const Footer = lazy(() => import('./modules/Footer/index'));
const ReportBugPage = lazy(() => import('./pages/ReportBugPage/ReportBugPage'));
const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const Quiz = lazy(() => import('./pages/Quiz/Quiz'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Results = lazy(() => import('./pages/Results/Results'));
const Page404 = lazy(() => import('./pages/Page404/Page404'));

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Suspense
          fallback={
            <Spinner
              width={250}
              height={250}
              color={'#1f2ce0'}
              margin={'0 auto'}
            />
          }
        >
          <Routes>
            <Route path='/' element={<HeaderHome />}>
              <Route index element={<Homepage />} />
              <Route index element={<Footer />} />
              <Route path='reportbug' element={<ReportBugPage />} />
              <Route path='contact' element={<Contact />} />
            </Route>
            <Route path='quiz' element={<Quiz />} />
            <Route path='results' element={<Results />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
