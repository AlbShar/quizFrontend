import { lazy, Suspense, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import {Spinner} from 'UI/spinner';
import { GlobalStyles } from '../../styles/Global';

const Header = lazy(() => import('modules/header'));
// const Footer = lazy(() => import('components/footer'));
const Homepage = lazy(() => import('pages/home'));
const Quiz = lazy(() => import('pages/quiz'));
const Feedback = lazy(() => import('pages/feedback'));
const Results = lazy(() => import('pages/results'));
const Page404 = lazy(() => import('pages/page404'));


export const MyRoutes = () => {
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
              <Route path='feedback' element={<Feedback />} />
              <Route path='quiz' element={<Quiz />} />
              <Route path='results' element={<Results />} />
            </Route>
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

