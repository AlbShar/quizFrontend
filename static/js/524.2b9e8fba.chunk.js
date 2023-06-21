"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[524],{5842:(e,t,n)=>{n.r(t),n.d(t,{ReactComponent:()=>s,default:()=>l});var r,i=n(2791);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){let{title:n,titleId:o,...s}=e;return i.createElement("svg",a({width:8,height:6,viewBox:"0 0 8 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),n?i.createElement("title",{id:o},n):null,r||(r=i.createElement("path",{d:"M1 1.5L4 4.5L7 1.5",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const s=i.forwardRef(o),l=n.p+"static/media/chevrondown.155409e0c48ea57ccaa9ebaf346774a8.svg"},6038:(e,t,n)=>{n.d(t,{Z:()=>a});const r=n(7691).ZP.header`
  background-color: #252b58;
  width: 100%;
  margin: 0 0 34px 0;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 40px 0;
  }

  ${function(e){let{height:t}=e;if(t)return`\n      @media screen and (min-width: 1023.8px) {\n        height: ${t}px;\n      }\n            `}}}
`;var i=n(184);const a=e=>{let{children:t,height:n}=e;return(0,i.jsx)(r,{height:n,children:t})}},4530:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(2426),i=n(408);const a={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},o=(0,r.ZF)(a),s=(0,i.N8)(o)},3524:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var r=n(7689),i=n(9856),a=n(4702),o=n(5270),s=n(2791),l=n(7879),d=n(3201),c=n(408),p=n(4530);var f=n(7691);const u=f.ZP.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffffcc;
`,x=f.ZP.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #0cd3ff;
`,g=f.ZP.div`
  box-sizing: border-box;
  border-radius: 2px;
  padding: 4px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  gap: 8px;
`;var h=n(184);const m=()=>{const{t:e}=(0,l.$)(),t=(0,s.useRef)(null),[n,r]=(0,s.useState)(!0),[i,a]=(0,s.useState)(0);return(0,s.useEffect)((()=>{new Promise((function(e,t){(0,c.jM)((0,c.iH)(p.Z,"users"),(t=>{const n=Object.entries(t.val()).length;e(n)}))})).then((e=>{r(!1),a(e)}))}),[n]),n?(0,h.jsx)(d.Z,{width:50,height:50,color:"#fcfdff",margin:"auto"}):(0,h.jsxs)(g,{children:[(0,h.jsx)(u,{children:e("\u041f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e")}),(0,h.jsx)(x,{ref:t,children:i})]})};var b=n(6038),j=n(1061);const w=f.ZP.article`
  cursor: pointer;
  position: relative;
`,v=f.ZP.button`
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
`,y=f.ZP.span`
  color: #ffffff;
  font: var(--font-little-text-regular);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);
  }
`,S=f.ZP.ul`
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

`,E=f.ZP.li`
  font: var(--font-text-regular);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;const P=n.p+"static/media/globe.8e0e80f185ac35233ab2955b9b1aaaaa.svg";var Z=n(5842);const k=(0,s.forwardRef)(((e,t)=>{let{data:n,selected:r,style:i,onClickElement:a}=e;const[o,l]=(0,s.useState)(!1),d=localStorage.getItem("i18nextLng"),c=()=>{l((e=>!e))},p=Object.entries(n).map(((e,t)=>{const n=e[1],r=e[0];return(0,h.jsx)(E,{tabIndex:0,onClick:()=>{a&&a(n),c()},children:(0,h.jsxs)("div",{style:{display:"inline-flex",alignItems:"baseline",gap:2,justifyContent:"center"},children:[(0,h.jsx)("span",{style:{fontSize:16,fontWeight:700},children:n.toUpperCase()}),(0,h.jsx)("span",{style:{fontSize:12,fontWeight:400},children:r})]})},t+1)}));return(0,s.useEffect)((()=>{const e=e=>{e.target.closest("#wrapper")||l(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[t]),(0,h.jsxs)(w,{ref:t,style:i,id:"wrapper",children:[(0,h.jsxs)(v,{onClick:c,children:[(0,h.jsx)("img",{style:{margin:"0 7px 0 0"},src:P,alt:"global"}),(0,h.jsx)(y,{className:"dropdown-btn-text",children:d?d.toUpperCase():"RU"}),(0,h.jsx)("img",{style:{margin:"0 0 0 7px"},src:Z.default,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0432\u043d\u0438\u0437"})]}),o&&(0,h.jsx)(S,{children:p})]})}));k.displayName="Dropdown";const z=k,C=()=>{const e={"\u0420\u0443\u0441\u0441\u043a\u0438\u0439":"ru",English:"en"};(0,s.useEffect)((()=>{const e=localStorage.getItem("i18nextLng");document.querySelector("html").setAttribute("lang",e||"ru")}),[]);const[t,n]=(0,s.useState)(e["\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]),r=(0,s.useRef)(null);return(0,h.jsx)(z,{data:e,selected:t,onClickElement:e=>(e=>{n(e),j.ZP.changeLanguage(e),localStorage.setItem("language","ru"===e?"\u0420\u0443\u0441\u0441\u043a\u0438\u0439":"English"),document.querySelector("html").setAttribute("lang",e)})(e),ref:r})},I=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(b.Z,{children:(0,h.jsxs)(i.Z,{children:[(0,h.jsxs)(o.b,{children:[(0,h.jsx)(a.Z,{location:"header"}),(0,h.jsx)(C,{})]}),(0,h.jsx)(m,{})]})}),(0,h.jsx)(r.j3,{})]})},5270:(e,t,n)=>{n.d(t,{b:()=>r});const r=n(7691).ZP.div`
  gap: ${e=>{let{gap:t}=e;return t?t+"px":""}};
  ${function(e){let{widthFlexStart:t,jc:n="space-between"}=e;return t?`\n      position: relative;\n      @media screen and (min-width: ${t}px) {\n        display: flex;\n        justify-content: ${n};\n        align-items: center;\n        width: 100%;\n      }\n      `:`\n            display: flex;\n            justify-content: ${n};\n            align-items: center;\n            `}}
`}}]);
//# sourceMappingURL=524.2b9e8fba.chunk.js.map