import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

export const useDisplayItemsHeader = () => {
   const [isShowBurger, setShowBurger] = useState(true);
   const [isShowList, setShowList] = useState(false);
   const [isShowMenu, setShowMenu] = useState(false);
   const { pathname } = useLocation();

   const displayBurgerAndListDependsOnScreenSize = () => {
     if (window.innerWidth > 1299.8) {
       setShowBurger(false);
       setShowList(true);
     } else {
       setShowBurger(true);
       setShowList(false);
     }
   };

   const displayBurgerAndListDependsOnPage = () => {
     if (
       pathname.includes('quiz') ||
       pathname.includes('results') ||
       pathname.includes('feedback')
     ) {
       setShowList(false);
       setShowBurger(false);
     } else {
       displayBurgerAndListDependsOnScreenSize();
     }
   };

   useEffect(() => {
     displayBurgerAndListDependsOnPage();
     //eslint-disable-next-line
   }, [pathname]);

   useEffect(() => {
     displayBurgerAndListDependsOnScreenSize();
     displayBurgerAndListDependsOnPage();

     window.addEventListener('resize', displayBurgerAndListDependsOnScreenSize);
     return () => {
       window.removeEventListener(
         'resize',
         displayBurgerAndListDependsOnScreenSize,
       );
     };

     //eslint-disable-next-line
   }, []);

   return { isShowBurger, isShowList, isShowMenu, setShowMenu, setShowBurger };

};

