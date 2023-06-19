"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[555],{9856:(e,t,n)=>{n.d(t,{Z:()=>o});n(2791);const r=n(7691).ZP.div`
  min-width: 287px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 5px;
`;var i=n(184);const o=e=>{let{children:t}=e;return(0,i.jsx)(r,{children:t})}},6038:(e,t,n)=>{n.d(t,{Z:()=>o});const r=n(7691).ZP.header`
  background-color: #252b58;
  width: 100%;
  margin: 0 0 34px 0;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 40px 0;
  }

  ${function(e){let{height:t}=e;if(t)return`\n      @media screen and (min-width: 1023.8px) {\n        height: ${t}px;\n      }\n            `}}}
`;var i=n(184);const o=e=>{let{children:t,height:n}=e;return(0,i.jsx)(r,{height:n,children:t})}},2626:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(1087);const i=n(7691).ZP.img`
  width: 86px;
  height: 42px;
  cursor: pointer;

  @media screen and (min-width: 767.8px) {
    width: ${e=>{let{location:t}=e;return"header"===t?"140px":"113px"}};
    height: ${e=>{let{location:t}=e;return"header"===t?"68px":"55px"}};
  }
`;var o=n(184);const a=e=>{let{location:t,style:a}=e;return(0,o.jsx)(r.rU,{to:"/",children:(0,o.jsx)(i,{src:n(6988),alt:"logo",location:t,style:a})})}},4530:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(2426),i=n(408);const o={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},a=(0,r.ZF)(o),s=(0,i.N8)(a)},2555:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var r=n(7689),i=n(9856),o=n(2626),a=n(5270),s=n(2791),d=n(7879),l=n(3201),c=n(408),p=n(4530);var x=n(7691);const u=x.ZP.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffffcc;
`,h=x.ZP.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #0cd3ff;
`,g=x.ZP.div`
  box-sizing: border-box;
  border-radius: 2px;
  padding: 4px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  gap: 8px;
`;var f=n(184);const A=()=>{const{t:e}=(0,d.$)(),t=(0,s.useRef)(null),[n,r]=(0,s.useState)(!0),[i,o]=(0,s.useState)(0);return(0,s.useEffect)((()=>{new Promise((function(e,t){(0,c.jM)((0,c.iH)(p.Z,"users"),(t=>{const n=Object.entries(t.val()).length;e(n)}))})).then((e=>{r(!1),o(e)}))}),[n]),n?(0,f.jsx)(l.Z,{width:50,height:50,color:"#fcfdff",margin:"auto"}):(0,f.jsxs)(g,{children:[(0,f.jsx)(u,{children:e("\u041f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e")}),(0,f.jsx)(h,{ref:t,children:i})]})};var m=n(6038),b=n(1061);const w=x.ZP.article`
  cursor: pointer;
  position: relative;
`,j=x.ZP.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  cursor: pointer;
  border: 1px solid black;
`,v=x.ZP.span`
  color: black;
  font: var(--font-little-text-regular);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);
  }
`,Z=x.ZP.ul`
  z-index: 2;
  left: 0px;
  top: 30px;
  background-color: white;
  position: absolute;
  list-style-type: none;
  font: var(--font-text-bold);
  margin: 0;
  padding: 5px 10px;
  border-radius: 10px 0 0 10px;
`,S=x.ZP.img`
  // filter: invert(100);
  width: 12px;
  height: 12px;
  margin-left: 4px;
`,P=x.ZP.li`
  font: var(--font-text-regular);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;n(9744);const E=(0,s.forwardRef)(((e,t)=>{let{data:r,selected:i,style:o,onClickElement:a}=e;const[d,l]=(0,s.useState)(!1),c=()=>{l((e=>!e))},p=r.map(((e,t)=>(0,f.jsx)(P,{tabIndex:0,onClick:()=>{a&&a(e),c()},children:e},t+1)));return(0,s.useEffect)((()=>{const e=e=>{e.target.closest("#wrapper")||l(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[t]),(0,f.jsxs)(w,{ref:t,style:o,id:"wrapper",children:[(0,f.jsxs)(j,{onClick:c,children:[(0,f.jsx)(v,{className:"dropdown-btn-text",children:i||r[0]}),(0,f.jsx)(S,{src:n(9744),alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0432\u043d\u0438\u0437"})]}),d&&(0,f.jsx)(Z,{children:p})]})}));E.displayName="Dropdown";const y=E,I=()=>{var e;const t=localStorage.getItem("language")||"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",[n,r]=(0,s.useState)(t),i=(0,s.useRef)(null),o=(null===(e=document.querySelector("html"))||void 0===e||e.getAttribute("lang"),{"\u0420\u0443\u0441\u0441\u043a\u0438\u0439":"ru",English:"en"});return(0,f.jsx)(y,{data:["\u0420\u0443\u0441\u0441\u043a\u0438\u0439","English"],selected:n,onClickElement:e=>(e=>{const t=o[e];r(e),b.ZP.changeLanguage(t),localStorage.setItem("language",e),document.querySelector("html").setAttribute("lang",t)})(e),ref:i})},k=()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.Z,{children:(0,f.jsxs)(i.Z,{children:[(0,f.jsxs)(a.b,{children:[(0,f.jsx)(o.Z,{location:"header"}),(0,f.jsx)(I,{})]}),(0,f.jsx)(A,{})]})}),(0,f.jsx)(r.j3,{})]})},5270:(e,t,n)=>{n.d(t,{b:()=>r});const r=n(7691).ZP.div`
  gap: ${e=>{let{gap:t}=e;return t?t+"px":""}};
  ${function(e){let{widthFlexStart:t,jc:n="space-between"}=e;return t?`\n      position: relative;\n      @media screen and (min-width: ${t}px) {\n        display: flex;\n        justify-content: ${n};\n        align-items: center;\n        width: 100%;\n      }\n      `:`\n            display: flex;\n            justify-content: ${n};\n            align-items: center;\n            `}}
`},9744:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABwSURBVHgB7Y2xDYAwDAQfZRFvBiPABIzACFkFOjrEBIxASwdfpKBIiIlS+qRTpMi6BwzDcIn/jnp60R3fCN1oQ1co6ekdbDPxI9xN+MmYGZFX3KOQ1IjUiKdGpGY8NnLWjsdG1HEHPUt4ZzrAMAw1Dx0pJGSXjajkAAAAAElFTkSuQmCC"},6988:(e,t,n)=>{e.exports=n.p+"static/media/logoQuiz.fe60373c0b47051a6b64.png"}}]);
//# sourceMappingURL=555.817c8455.chunk.js.map