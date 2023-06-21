"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[81],{5842:(e,t,n)=>{n.d(t,{Z:()=>r});n(2791);const r=n.p+"static/media/chevrondown.155409e0c48ea57ccaa9ebaf346774a8.svg"},4530:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2426),a=n(408);const i={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},s=(0,r.ZF)(i),o=(0,a.N8)(s)},2081:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var r=n(7689),a=n(9856),i=n(4702),s=n(5270),o=n(2791),l=n(7879),d=n(3201),c=n(408),p=n(4530);var x=n(7691);const g=x.ZP.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`,u=x.ZP.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`,h=x.ZP.div`
  display: none;

  @media screen and (min-width: 459.8px) {
    display: block;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 10px 24px;
    display: flex;
    justify-content: center;
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    gap: 8px;
    background-color: #FFFFFF;
    color: #000000;
    border-radius: 7px;
  }
`;var f=n(184);const b=()=>{const{t:e}=(0,l.$)(),t=(0,o.useRef)(null),[n,r]=(0,o.useState)(!0),[a,i]=(0,o.useState)(0);return(0,o.useEffect)((()=>{new Promise((function(e,t){(0,c.jM)((0,c.iH)(p.Z,"users"),(t=>{const n=Object.entries(t.val()).length;e(n)}))})).then((e=>{r(!1),i(e)}))}),[n]),n?(0,f.jsx)(d.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}):(0,f.jsxs)(h,{children:[(0,f.jsx)(g,{children:`${e("\u041f\u0440\u043e\u0448\u043b\u0438 \u0442\u0435\u0441\u0442")}:`}),(0,f.jsx)(u,{ref:t,children:a})]})},m=x.ZP.header`
  box-sizing: border-box;
  background: #EEEEFF;
  width: 100%;
  margin: 0 0 12px 0;
  padding: 30px 0;

  ${function(e){let{height:t}=e;if(t)return`\n      @media screen and (min-width: 1023.8px) {\n        height: ${t}px;\n      }\n            `}}}
`,j=e=>{let{children:t,height:n}=e;return(0,f.jsx)(m,{height:n,children:t})};var w=n(1061);const y=x.ZP.article`
  cursor: pointer;
  position: relative;
`,v=x.ZP.button`
box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid black;
  background-color: #5557ff;
  border-radius: 7px;
  padding: 11px;
  max-width: 88px;
  max-height: 44px;
`,E=x.ZP.span`
  color: #ffffff;
  font: var(--font-little-text-regular);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);
  }
`,S=x.ZP.ul`
  box-sizing: border-box ;
  max-width: 88px;
  z-index: 2;
  left: 0px;
  top: 60px;
  background-color: white;
  position: absolute;
  list-style-type: none;
  margin: 0;
  padding: 5px 10px;
  border-radius: 7px;
  box-shadow: 0px 4px 4px 0px #0000003D;

`,Z=x.ZP.li`
  font: var(--font-text-regular);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;const P=n.p+"static/media/globe.8e0e80f185ac35233ab2955b9b1aaaaa.svg";var z=n(5842);const k=(0,o.forwardRef)(((e,t)=>{let{data:n,selected:r,style:a,onClickElement:i}=e;const[s,l]=(0,o.useState)(!1),d=localStorage.getItem("i18nextLng"),c=()=>{l((e=>!e))},p=Object.entries(n).map(((e,t)=>{const n=e[1],r=e[0];return(0,f.jsx)(Z,{tabIndex:0,onClick:()=>{i&&i(n),c()},children:(0,f.jsxs)("div",{style:{display:"inline-flex",alignItems:"baseline",gap:2,justifyContent:"center"},children:[(0,f.jsx)("span",{style:{fontSize:16,fontWeight:700},children:n.toUpperCase()}),(0,f.jsx)("span",{style:{fontSize:12,fontWeight:400},children:r})]})},t+1)}));return(0,o.useEffect)((()=>{const e=e=>{e.target.closest("#wrapper")||l(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[t]),(0,f.jsxs)(y,{ref:t,style:a,id:"wrapper",children:[(0,f.jsxs)(v,{onClick:c,children:[(0,f.jsx)("img",{style:{margin:"0 7px 0 0"},src:P,alt:"global"}),(0,f.jsx)(E,{className:"dropdown-btn-text",children:d?d.toUpperCase():"RU"}),(0,f.jsx)("img",{style:{margin:"0 0 0 7px"},src:z.Z,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0432\u043d\u0438\u0437"})]}),s&&(0,f.jsx)(S,{children:p})]})}));k.displayName="Dropdown";const C=k,F=e=>{let{setNewLang:t}=e;const n={"\u0420\u0443\u0441\u0441\u043a\u0438\u0439":"ru",English:"en"};(0,o.useEffect)((()=>{const e=localStorage.getItem("i18nextLng");document.querySelector("html").setAttribute("lang",e||"ru")}),[]);const[r,a]=(0,o.useState)(n["\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]),i=(0,o.useRef)(null);return(0,f.jsx)(C,{data:n,selected:r,onClickElement:e=>(e=>{a(e),t(e),w.ZP.changeLanguage(e),localStorage.setItem("language","ru"===e?"\u0420\u0443\u0441\u0441\u043a\u0438\u0439":"English"),document.querySelector("html").setAttribute("lang",e)})(e),ref:i})},I=e=>{let{setNewLang:t}=e;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(j,{children:(0,f.jsx)(a.Z,{children:(0,f.jsxs)(s.b,{children:[(0,f.jsx)(i.Z,{location:"header"}),(0,f.jsxs)(s.b,{gap:37,children:[(0,f.jsx)(b,{}),(0,f.jsx)(F,{setNewLang:t})]})]})})}),(0,f.jsx)(r.j3,{})]})}}}]);
//# sourceMappingURL=81.e6d335da.chunk.js.map