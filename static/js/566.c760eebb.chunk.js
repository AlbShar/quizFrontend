"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[566],{5842:(e,t,n)=>{n.d(t,{Z:()=>r});n(2791);const r=n.p+"static/media/chevrondown.155409e0c48ea57ccaa9ebaf346774a8.svg"},124:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(9388),o=n(7691);const a=o.ZP.span`
  color: red;
  display: inline-block;
  margin: 0 5px 0 0 ;
  text-transform: uppercase;
  font: var(--font-bold);
`,i=o.ZP.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;var s=n(184);const c=()=>(0,s.jsxs)(i,{children:[(0,s.jsx)(a,{children:"Error!"}),(0,s.jsx)(r.Z,{color:"error",fontSize:"medium"})]})},5157:(e,t,n)=>{n.d(t,{z:()=>a});var r=n(408),o=n(4530);const a=async e=>await new Promise((function(t,n){(0,r.jM)((0,r.iH)(o.Z,e),(r=>{const o=r.val();if(o)return t(o);n(new Error(`Value (${o}) from Firebase Database not found. Check url (${e})`))}))}))},9856:(e,t,n)=>{n.d(t,{Z:()=>a});const r=n(7691).ZP.div`
max-width: 85%;
min-width: 287px;
margin: 0 auto;
padding: 0 5px;
@media screen and (min-width: 1299.8px) {
  max-width: 1190px;
}
`;var o=n(184);const a=e=>{let{children:t}=e;return(0,o.jsx)(r,{children:t})}},4702:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1087);n(2791);const o=n.p+"static/media/logo.4d3848fe5a3348ebe87a5a4e5b79cc22.svg";const a=n(7691).ZP.img`
  width: 86px;
  height: 42px;
  cursor: pointer;

  @media screen and (min-width: 767.8px) {
    width: ${e=>{let{location:t}=e;return"header"===t?"140px":"113px"}};
    height: ${e=>{let{location:t}=e;return"header"===t?"68px":"55px"}};
  }
`;var i=n(184);const s=e=>{let{location:t,style:n}=e;return(0,i.jsx)(r.rU,{to:"/",children:(0,i.jsx)(a,{src:o,alt:"logo",location:t,style:n})})}},4530:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(2426),o=n(408);const a={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},i=(0,r.ZF)(a),s=(0,o.N8)(i)},8566:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(e,t)=>{try{return localStorage.setItem(e,t)}catch(n){throw n instanceof DOMException&&n.code===DOMException.SECURITY_ERR?new Error("Don't block your cookies. Turn on it in setting of your browser."):new Error(`Unknown error caught: ${n}`)}}},2566:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var r=n(7689),o=n(9856),a=n(2791),i=n(1061),s=n(8566),c=n(3589),d=n(7691);const l=d.ZP.article`
  cursor: pointer;
  position: relative;
`,p=d.ZP.button`
box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: #5557ff;
  border-radius: 7px;
  padding: 11px;
  max-width: 88px;
  max-height: 44px;
`,x=d.ZP.span`
  color: #ffffff;
  font: var(--font-little-text-regular);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);
  }
`,u=d.ZP.ul`
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
  
`,h=d.ZP.li`
  font: var(--font-text-regular);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;const g=n.p+"static/media/globe.8e0e80f185ac35233ab2955b9b1aaaaa.svg";var f=n(5842),m=n(184);const b=(0,a.forwardRef)(((e,t)=>{let{data:n,selected:r,style:o,onClickElement:i}=e;const[s,c]=(0,a.useState)(!1),d=()=>{c((e=>!e))},b=Object.entries(n).map(((e,t)=>{const n=e[1],r=e[0];return(0,m.jsx)(h,{tabIndex:0,onClick:()=>{i&&i(n),d()},children:(0,m.jsxs)("div",{style:{display:"inline-flex",alignItems:"baseline",gap:2,justifyContent:"center"},children:[(0,m.jsx)("span",{style:{fontSize:16,fontWeight:700},children:n.toUpperCase()}),(0,m.jsx)("span",{style:{fontSize:12,fontWeight:400},children:r})]})},t+1)}));return(0,a.useEffect)((()=>{const e=e=>{e.target.closest("#wrapper")||c(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[t]),(0,m.jsxs)(l,{ref:t,style:o,id:"wrapper",children:[(0,m.jsxs)(p,{onClick:d,children:[(0,m.jsx)("img",{style:{margin:"0 7px 0 0"},src:g,alt:"global"}),(0,m.jsx)(x,{className:"dropdown-btn-text",children:r.toUpperCase()||"RU"}),(0,m.jsx)("img",{style:{margin:"0 0 0 7px"},src:f.Z,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0432\u043d\u0438\u0437"})]}),s&&(0,m.jsx)(u,{children:b})]})}));b.displayName="Dropdown";const w=b,j=()=>{const[e,t]=(0,a.useContext)(c.Sc),n={"\u0420\u0443\u0441\u0441\u043a\u0438\u0439":"ru",English:"en"};(0,a.useEffect)((()=>{document.querySelector("html").setAttribute("lang",e||"ru")}),[]);const[r,o]=(0,a.useState)(n["\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]),d=(0,a.useRef)(null);return(0,m.jsx)(w,{data:n,selected:e,onClickElement:e=>(e=>{const n="ru"===e?"\u0420\u0443\u0441\u0441\u043a\u0438\u0439":"English";o(e),t(e),i.ZP.changeLanguage(e),(0,s.Z)("language",n),document.querySelector("html").setAttribute("lang",e)})(e),ref:d})};var y=n(4702),v=n(7879),E=n(124),Z=n(3201),S=n(5157);const P=async()=>{try{const t=await(0,S.z)("users");return e=t,Object.entries(e).length}catch(t){throw console.error(t),t}var e},k=d.ZP.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`,z=d.ZP.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`,C=d.ZP.div`
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
`,F=()=>{const{t:e}=(0,v.$)(),t=(0,a.useRef)(null),[n,r]=(0,a.useState)(!0),[o,i]=(0,a.useState)(!1),[s,c]=(0,a.useState)(0),d=o?(0,m.jsx)(E.Z,{}):null,l=n?(0,m.jsx)(Z.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}):null,p=n||o?null:(0,m.jsxs)(C,{children:[(0,m.jsx)(k,{children:`${e("\u041f\u0440\u043e\u0448\u043b\u0438 \u0442\u0435\u0441\u0442")}:`}),(0,m.jsx)(z,{ref:t,children:s})]}),x=e=>{r(!1),c(e)},u=e=>{throw r(!1),i(!0),new Error(e.message)};return(0,a.useEffect)((()=>{P().then(x).catch(u)}),[]),(0,m.jsxs)(m.Fragment,{children:[p," ",l," ",d]})},R=d.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${e=>{let{gap:t}=e;return t?t+"px":""}};
`,_=d.ZP.header`
  box-sizing: border-box;
  background: #EEEEFF;
  width: 100%;
  margin: 0 0 12px 0;
  padding: 30px 0;
}
`,T=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(_,{children:(0,m.jsx)(o.Z,{children:(0,m.jsxs)(R,{children:[(0,m.jsx)(y.Z,{location:"header"}),(0,m.jsxs)(R,{gap:37,children:[(0,m.jsx)(F,{}),(0,m.jsx)(j,{})]})]})})}),(0,m.jsx)(r.j3,{})]})}}]);
//# sourceMappingURL=566.c760eebb.chunk.js.map