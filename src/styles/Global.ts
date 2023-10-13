import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: ${Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
    )}px;
  }
  
  div#root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflowY:  hidden;
  height: ${Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight,
  )}px;

    background-color: var(--color-main-background); 
    --font-family-default: "Montserrat", "Arial", sans-serif;
    --color-white: #FFF;
    --color-black: #000;
    --color-dark: #1C1C1C;
    --color-purple: #5557FF;
    --color-gray: #3C3C3C;
    --color-dark-gray: #4F4F4F;
    --color-light-gray: #F5F5F5; 
    --color-light-gray2: #ECECEC; 

    --font-text1: 700 50px/40px var(--font-family-default);
    --font-text2: 600 32px/32px var(--font-family-default);
    --font-text3: 600 22px/22px var(--font-family-default);
    --font-text4: 400 22px/26px var(--font-family-default);
    --font-text5: 400 18px/22px var(--font-family-default);
    --font-text5-bold: 600 18px/22px var(--font-family-default);
    --font-text6: 600 16px/22px var(--font-family-default);
    --font-text6-regular: 400 16px/22px var(--font-family-default);
    --font-text7: 600 14px/22px var(--font-family-default);
    --font-text8: 400 10px/22px var(--font-family-default);
    --font-text9: 700 37px/22px var(--font-family-default);
    --font-text10: 600 24px/22px var(--font-family-default);
    --font-text11: 600 26px/28px var(--font-family-default);







    --color-footer: #1C232E;
    --color-back-btn: #81868C;
    --color-quantity-questions: #81868C;
    --color-footer-content: #81868C;
    --color-main-background: #EEEEFF;
    --color-border-answer: #DFE4E9;
    --color-button: #6768D7;
    --color-scroll-bar: #6768D7;
    --color-title-background: #6768D7;
    --color-7: #0CD3FF;
    --color-call-action: #29316D;
    --color-call-action-info: #3E457B;
    --color-header: #252B58;
    --line-height-text: 24px;
    --line-height-little-text: 22px;
    --font-text-regular: 400 16px/var(--line-height-text) var(--font-family-default);
    --font-text-bold: 700 16px/var(--line-height-text) var(--font-family-default);
    --font-little-text-regular: 400 14px/var(--line-height-little-text)  var(--font-family-default);
    --font-little-text-bold: 700 14px/var(--line-height-little-text) var(--font-family-default);
    --font-button: 700 16px/24px var(--font-family-default);
    --font-title1: 800 48px/60px var(--font-family-default);
    --font-title2: 800 40px/48px var(--font-family-default);
    --font-title3: 800 32px/42px var(--font-family-default);
    --font-title4: 800 24px/36px var(--font-family-default);
    --font-title5: 800 20px/32px var(--font-family-default);
    --font-h2-little: 400 14px/20px var(--font-family-default);
    --font-h2-large: 400 18px/24px var(--font-family-default);

    --font-bold: 700 16px/24px var(--font-family-default);
    --font-regular: 500 18px/24px var(--font-family-default);
    --font-semi-bold: 600 35px/44px var(--font-family-default);
    --font-extra-bold: 800 48px/60px var(--font-family-default);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;    
}
`;
