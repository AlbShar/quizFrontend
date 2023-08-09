import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';

import Spinner from './UI/Spinner/Spinner';
import { GlobalStyles } from './styles/Global';
import {
  ContextLanguage,
  ContextIdUser,
  ContextProfession,
} from './components/Context';
import { getValueFromLocalStorage } from './helpers/getValueFromLocalStorage';

const Header = lazy(() => import('./modules/Header/index'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Feedback = lazy(() => import('./pages/Feedback/Feedback'));
const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const Quiz = lazy(() => import('./pages/Quiz/Quiz'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Results = lazy(() => import('./pages/Results/Results'));
const Page404 = lazy(() => import('./pages/Page404/Page404'));

function App() {
  const [profession, setProfession] = useState<string>(
    getValueFromLocalStorage('profession'),
  );
  const [isChooseProfession, setChooseProfession] = useState<boolean>(false);

  const [lang, setLang] = useState<string>(
    getValueFromLocalStorage('i18nextLng', 'ru').slice(0, 2),
  );
  const [idUser, setIdUser] = useState<string>(
    getValueFromLocalStorage('idUser'),
  );

  return (
    <>
      <GlobalStyles />
      <BrowserRouter basename='/quizFrontend'>
        <ContextLanguage.Provider value={[lang, setLang]}>
          <ContextIdUser.Provider value={[idUser, setIdUser]}>
            <ContextProfession.Provider value={[profession, setProfession]}>
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
                    <Route path='feedback' element={<Feedback />} />
                    <Route path='quiz' element={<Quiz />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='results' element={<Results />} />
                  </Route>
                  <Route path='*' element={<Page404 />} />
                </Routes>
              </Suspense>
            </ContextProfession.Provider>
          </ContextIdUser.Provider>
        </ContextLanguage.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
