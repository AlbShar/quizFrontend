import { lazy, Suspense, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Spinner from '../../UI/Spinner/Spinner';
import { GlobalStyles } from '../../styles/Global';

const Header = lazy(() => import('../../modules/Header/index'));
const Footer = lazy(() => import('../../components/Footer/Footer'));
const ReportBugPage = lazy(
  () => import('../../pages/ReportBugPage/ReportBugPage'),
);
const Homepage = lazy(() => import('../../pages/Homepage/Homepage'));
const Quiz = lazy(() => import('../../pages/Quiz/Quiz'));
const Contact = lazy(() => import('../../pages/Contact/Contact'));
const Results = lazy(() => import('../../pages/Results/Results'));
const Page404 = lazy(() => import('../../pages/Page404/Page404'));


const MyRoutes = () => {
    const [isChooseProfession, setChooseProfession] = useState<boolean>(false);


  return (
    <>
      <GlobalStyles />
      <BrowserRouter basename='/quizFrontend'>
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
            <Route
              path='/'
              element={<Header isChooseProfession={isChooseProfession} />}
            >
              <Route
                index
                element={
                  <Homepage
                    isChooseProfession={isChooseProfession}
                    setChooseProfession={setChooseProfession}
                  />
                }
              />
              <Route index element={<Footer />} />
              <Route path='reportbug' element={<ReportBugPage />} />
              <Route path='quiz' element={<Quiz />} />
              <Route path='contact' element={<Contact />} />
              <Route path='results' element={<Results />} />
            </Route>
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
