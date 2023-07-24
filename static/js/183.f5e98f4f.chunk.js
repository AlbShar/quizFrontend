"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[183],{6155:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(2791),i=n(6983),o=n(7691);const s=o.ZP.article`
  cursor: pointer;
  position: relative;
  height: 100%;
  width: 100%;
`,a=o.ZP.button`
  box-sizing: border-box;
  display: block;
  position: relative;
  cursor: pointer;
  border: none;
  background-color: #5557ff;
  border-radius: 7px;
  padding: 0 15px;
  text-align: center;
  height: 100%;
  width: 100%;
  color: #fff;
`,l=o.ZP.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  ${e=>e.customStyle||""};

  @media screen and (min-width: 767.8px) {
    font-size: 16px;
  }
`,c=o.ZP.span`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;

  @media screen and (min-width: 767.8px) {
    font-size: 16px;
  }
`,d=o.ZP.img`
  position: absolute;
  left: 10px;
  top: 26%;
`,p=o.ZP.img`
  position: absolute;
  right: 10px;
  top: 40%;
`,x=o.ZP.ul`
  box-sizing: border-box;
  background-color: white;
  list-style-type: none;
  margin: 10px 0 0 0;
  padding: 5px 10px;
  border-radius: 7px;
  box-shadow: 0px 4px 4px 0px #0000003d;
  width: 100%;
  position: absolute;
  z-index: 2;
  
`,u=o.ZP.li`
  font-family: Inter;
  padding: 3px 0;
  width: 300px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 767.8px) {
   padding: 5px 0;
  }
`;var h=n(184);const g=e=>{let{data:t,selected:n,customStyle:o,onClickElement:g,srcImg:f="",srcArrowDown:m}=e;const[b,w]=(0,r.useState)(!1),j=()=>{w((e=>!e))},y=(e=>Array.isArray(e)?e.map(((e,t)=>(0,h.jsx)(u,{tabIndex:0,onClick:()=>{g&&g(e),j()},children:(0,h.jsx)("div",{style:{display:"inline-flex",alignItems:"baseline",gap:2,justifyContent:"center"},children:(0,h.jsx)(c,{children:e})})},t+1))):Object.entries(e).map(((e,t)=>{const n=e[1],r=e[0];return(0,h.jsx)(u,{tabIndex:0,onClick:()=>{g&&g(n),j()},children:(0,h.jsxs)("div",{style:{display:"inline-flex",alignItems:"baseline",gap:2,justifyContent:"center"},children:[(0,h.jsx)("span",{style:{fontSize:16,fontWeight:600},children:n.toUpperCase()}),(0,h.jsx)("span",{style:{fontSize:12,fontWeight:400},children:r})]})},t+1)})))(t);return(0,r.useEffect)((()=>{const e=e=>{const t=e.target;t.closest("ul")||t.closest("button")||w(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),(0,h.jsxs)(s,{children:[(0,h.jsxs)(a,{onClick:()=>{j()},children:[f?(0,h.jsx)(d,{src:f,alt:"img"}):null,(0,h.jsx)(l,{className:"dropdown-btn-text",customStyle:o||"",children:n.toUpperCase()||""}),(0,h.jsx)(p,{src:m,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0432\u043d\u0438\u0437"})]}),(0,h.jsx)(i.Z,{in:b,timeout:300,classNames:"list",children:(0,h.jsx)(h.Fragment,{children:b&&(0,h.jsx)(x,{children:y})})})]})}},124:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(9388),i=n(7691);const o=i.ZP.span`
  color: red;
  display: inline-block;
  margin: 0 5px 0 0 ;
  text-transform: uppercase;
  font: var(--font-bold);
`,s=i.ZP.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;var a=n(184);const l=()=>(0,a.jsxs)(s,{children:[(0,a.jsx)(o,{children:"Error!"}),(0,a.jsx)(r.Z,{color:"error",fontSize:"medium"})]})},5157:(e,t,n)=>{n.d(t,{z:()=>o});var r=n(408),i=n(4530);const o=async e=>await new Promise((function(t,n){(0,r.jM)((0,r.iH)(i.Z,e),(r=>{const i=r.val();if(i)return t(i);n(new Error(`Value (${i}) from Firebase Database not found. Check url (${e})`))}))}))},9856:(e,t,n)=>{n.d(t,{Z:()=>o});const r=n(7691).ZP.div`
  box-sizing: border-box;
  max-width: 85%;
  min-width: 287px;
  margin: 0 auto;
  padding: 0 5px;
  
  @media screen and (min-width: 1299.8px) {
    width: 1190px;
  }
`;var i=n(184);const o=e=>{let{children:t,style:n}=e;return(0,i.jsx)(r,{style:n,children:t})}},4702:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(1087);n(2791);const i=n.p+"static/media/logo.4d3848fe5a3348ebe87a5a4e5b79cc22.svg";const o=n(7691).ZP.img`
  width: 86px;
  height: 42px;
  cursor: pointer;

  @media screen and (min-width: 767.8px) {
    width: ${e=>{let{location:t}=e;return"header"===t?"140px":"113px"}};
    height: ${e=>{let{location:t}=e;return"header"===t?"68px":"55px"}};
  }
`;var s=n(184);const a=e=>{let{location:t,style:n}=e;return(0,s.jsx)(r.rU,{to:"/",children:(0,s.jsx)(o,{src:i,alt:"logo",location:t,style:n})})}},4530:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(2426),i=n(408);const o={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},s=(0,r.ZF)(o),a=(0,i.N8)(s)},8566:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(e,t)=>{try{return localStorage.setItem(e,t)}catch(n){throw n instanceof DOMException&&n.code===DOMException.SECURITY_ERR?new Error("Don't block your cookies. Turn on it in setting of your browser."):new Error(`Unknown error caught: ${n}`)}}},7183:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var r=n(7689),i=n(9856),o=n(2791),s=n(1061),a=n(8566),l=n(3589),c=n(6155);const d=n.p+"static/media/globe.8e0e80f185ac35233ab2955b9b1aaaaa.svg";const p=n.p+"static/media/arrowDownSmall.3d736f57b076917264a8cfd2af02db24.svg";var x=n(184);const u=()=>{const[e,t]=(0,o.useContext)(l.Sc),n={"\u0420\u0443\u0441\u0441\u043a\u0438\u0439":"ru",English:"en"};(0,o.useEffect)((()=>{document.querySelector("html").setAttribute("lang",e||"ru")}),[]);const[r,i]=(0,o.useState)(n["\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]);(0,o.useRef)(null);return(0,x.jsx)("div",{style:{width:88,height:44},children:(0,x.jsx)(c.Z,{data:n,selected:e,onClickElement:e=>(e=>{const n="ru"===e?"\u0420\u0443\u0441\u0441\u043a\u0438\u0439":"English";i(e),t(e),s.ZP.changeLanguage(e),(0,a.Z)("language",n),document.querySelector("html").setAttribute("lang",e)})(e),srcImg:d,srcArrowDown:p,customStyle:"margin: 0 0 0 13px"})})};var h=n(4702),g=n(7879),f=n(124),m=n(3201),b=n(5157);const w=async e=>{try{const n=await(0,b.z)(e);return t=n,Object.entries(t).length}catch(n){throw console.error(n),n}var t};var j=n(7691);const y=j.ZP.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`,v=j.ZP.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`,Z=j.ZP.div`
  display: none;

  @media screen and (min-width: 459.8px) {
    display: block;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 10px 24px;
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    gap: 8px;
    background-color: #FFFFFF;
    color: #000000;
    border-radius: 7px;
  }
`,E=e=>{let{isChooseProfession:t}=e;const{t:n}=(0,g.$)(),r=(0,o.useRef)(null),[i,s]=(0,o.useState)(!0),[a,c]=(0,o.useState)(!1),[d,p]=(0,o.useState)(0),[u]=(0,o.useContext)(l.Hp),h=a?(0,x.jsx)(f.Z,{}):null,b=i?(0,x.jsx)(m.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}):null,j=i||a?null:(0,x.jsxs)(Z,{children:[(0,x.jsx)(y,{children:`${n("\u041f\u0440\u043e\u0448\u043b\u0438_\u0442\u0435\u0441\u0442")}:`}),(0,x.jsx)(v,{ref:r,children:t?d:"-"})]}),E=e=>{s(!1),p(e)},P=e=>{throw s(!1),c(!0),new Error(e.message)};return(0,o.useEffect)((()=>{if(u){w(`${u}/users`).then(E).catch(P)}else s(!1)}),[u]),(0,x.jsxs)(x.Fragment,{children:[j," ",b," ",h]})},P=j.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${e=>{let{gap:t}=e;return t?t+"px":""}};
`,S=j.ZP.header`
  box-sizing: border-box;
  background: #EEEEFF;
  width: 100%;
  margin: 0 0 12px 0;
  padding: 30px 0;
}
`,z=e=>{let{isChooseProfession:t}=e;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(S,{children:(0,x.jsx)(i.Z,{children:(0,x.jsxs)(P,{children:[(0,x.jsx)(h.Z,{location:"header"}),(0,x.jsxs)(P,{gap:37,children:[(0,x.jsx)(E,{isChooseProfession:t}),(0,x.jsx)(u,{})]})]})})}),(0,x.jsx)(r.j3,{})]})}}}]);
//# sourceMappingURL=183.f5e98f4f.chunk.js.map