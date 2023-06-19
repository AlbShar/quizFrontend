"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[555],{6038:(e,t,n)=>{n.d(t,{Z:()=>a});const r=n(7691).ZP.header`
  background-color: #252b58;
  width: 100%;
  margin: 0 0 34px 0;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 40px 0;
  }

  ${function(e){let{height:t}=e;if(t)return`\n      @media screen and (min-width: 1023.8px) {\n        height: ${t}px;\n      }\n            `}}}
`;var i=n(184);const a=e=>{let{children:t,height:n}=e;return(0,i.jsx)(r,{height:n,children:t})}},4530:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(2426),i=n(408);const a={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},o=(0,r.ZF)(a),s=(0,i.N8)(o)},2555:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(7689),i=n(9856),a=n(4702),o=n(5270),s=n(2791),l=n(7879),d=n(3201),c=n(408),p=n(4530);var u=n(7691);const f=u.ZP.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffffcc;
`,x=u.ZP.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #0cd3ff;
`,g=u.ZP.div`
  box-sizing: border-box;
  border-radius: 2px;
  padding: 4px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  gap: 8px;
`;var h=n(184);const A=()=>{const{t:e}=(0,l.$)(),t=(0,s.useRef)(null),[n,r]=(0,s.useState)(!0),[i,a]=(0,s.useState)(0);return(0,s.useEffect)((()=>{new Promise((function(e,t){(0,c.jM)((0,c.iH)(p.Z,"users"),(t=>{const n=Object.entries(t.val()).length;e(n)}))})).then((e=>{r(!1),a(e)}))}),[n]),n?(0,h.jsx)(d.Z,{width:50,height:50,color:"#fcfdff",margin:"auto"}):(0,h.jsxs)(g,{children:[(0,h.jsx)(f,{children:e("\u041f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e")}),(0,h.jsx)(x,{ref:t,children:i})]})};var m=n(6038),b=n(1061);const w=u.ZP.article`
  cursor: pointer;
  position: relative;
`,j=u.ZP.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  cursor: pointer;
  border: 1px solid black;
`,v=u.ZP.span`
  color: black;
  font: var(--font-little-text-regular);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);
  }
`,S=u.ZP.ul`
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
`,E=u.ZP.img`
  // filter: invert(100);
  width: 12px;
  height: 12px;
  margin-left: 4px;
`,Z=u.ZP.li`
  font: var(--font-text-regular);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;n(9744);const P=(0,s.forwardRef)(((e,t)=>{let{data:r,selected:i,style:a,onClickElement:o}=e;const[l,d]=(0,s.useState)(!1),c=()=>{d((e=>!e))},p=r.map(((e,t)=>(0,h.jsx)(Z,{tabIndex:0,onClick:()=>{o&&o(e),c()},children:e},t+1)));return(0,s.useEffect)((()=>{const e=e=>{e.target.closest("#wrapper")||d(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[t]),(0,h.jsxs)(w,{ref:t,style:a,id:"wrapper",children:[(0,h.jsxs)(j,{onClick:c,children:[(0,h.jsx)(v,{className:"dropdown-btn-text",children:i||r[0]}),(0,h.jsx)(E,{src:n(9744),alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0432\u043d\u0438\u0437"})]}),l&&(0,h.jsx)(S,{children:p})]})}));P.displayName="Dropdown";const I=P,k=()=>{var e;const t=localStorage.getItem("language")||"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",[n,r]=(0,s.useState)(t),i=(0,s.useRef)(null),a=(null===(e=document.querySelector("html"))||void 0===e||e.getAttribute("lang"),{"\u0420\u0443\u0441\u0441\u043a\u0438\u0439":"ru",English:"en"});return(0,h.jsx)(I,{data:["\u0420\u0443\u0441\u0441\u043a\u0438\u0439","English"],selected:n,onClickElement:e=>(e=>{const t=a[e];r(e),b.ZP.changeLanguage(t),localStorage.setItem("language",e),document.querySelector("html").setAttribute("lang",t)})(e),ref:i})},y=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m.Z,{children:(0,h.jsxs)(i.Z,{children:[(0,h.jsxs)(o.b,{children:[(0,h.jsx)(a.Z,{location:"header"}),(0,h.jsx)(k,{})]}),(0,h.jsx)(A,{})]})}),(0,h.jsx)(r.j3,{})]})},5270:(e,t,n)=>{n.d(t,{b:()=>r});const r=n(7691).ZP.div`
  gap: ${e=>{let{gap:t}=e;return t?t+"px":""}};
  ${function(e){let{widthFlexStart:t,jc:n="space-between"}=e;return t?`\n      position: relative;\n      @media screen and (min-width: ${t}px) {\n        display: flex;\n        justify-content: ${n};\n        align-items: center;\n        width: 100%;\n      }\n      `:`\n            display: flex;\n            justify-content: ${n};\n            align-items: center;\n            `}}
`},9744:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABwSURBVHgB7Y2xDYAwDAQfZRFvBiPABIzACFkFOjrEBIxASwdfpKBIiIlS+qRTpMi6BwzDcIn/jnp60R3fCN1oQ1co6ekdbDPxI9xN+MmYGZFX3KOQ1IjUiKdGpGY8NnLWjsdG1HEHPUt4ZzrAMAw1Dx0pJGSXjajkAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=555.cbf4abc8.chunk.js.map