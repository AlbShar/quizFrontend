import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: ${Math.max(document.body.scrollHeight, document.body.offsetHeight, 
      document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)}px;
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
  height: ${Math.max(document.body.scrollHeight, document.body.offsetHeight, 
    document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)}px;

    background-color: var(--color-main-background); 
    --color-footer: #1C232E;
    --color-back-btn: #81868C;
    --color-quantity-questions: #81868C;
    --color-footer-content: #81868C;
    --color-main-background: #DFE4E9;
    --color-border-answer: #DFE4E9;
    --color-button: #6768D7;
    --color-scroll-bar: #6768D7;
    --color-title-background: #6768D7;
    --color-7: #0CD3FF;
    --color-call-action: #29316D;
    --color-call-action-info: #3E457B;
    --color-header: #252B58;
    --font-family-default: "Inter", "Arial", sans-serif;
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;    
}
`;
