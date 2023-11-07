"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[111],{7357:(e,t,n)=>{n.d(t,{S:()=>r});const r=n(7691).ZP.button`
  padding: 8px 33px;
  background-color: #585aff;
  border: none;
  font: var(--font-button);
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  text-decoration: none;
  border-radius: 7px;

  &:disabled {
    opacity: 0.5;
  }

  @media screen and (min-width: 767.8px) {
    padding: 12px 80px;
  }
`},3050:(e,t,n)=>{n.d(t,{o:()=>a});const r=n(7691).ZP.main`
  flex: 1 1 auto;
  width: 100%;
  background-color: var(--color-white);
`;var i=n(184);const a=e=>{let{children:t,customStyle:n}=e;return(0,i.jsx)(r,{style:n,children:t})}},9111:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var r=n(7879),i=n(6401),a=n(5705),o=n(7357),l=n(184);const s=e=>{let{text:t,disabled:n}=e;const{t:i}=(0,r.$)();return(0,l.jsx)(o.S,{type:"submit",disabled:n,children:i(t)})};var c=n(7530);const d={NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_EMAILJS_SERVICE_ID,x={NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_EMAILJS_TEMPLATE_ID,p={NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_EMAILJS_PUBLIC_KEY,m=async e=>{try{if(d&&x){const t=await c.ZP.send(d,x,e,p);if("OK"===t.text)return!0;throw new Error(`EmailJSResponse has status - ${t.status} and text - ${t.text}`)}throw new Error("Check values of API KEYS in EMAILJS")}catch(t){return t instanceof Error?console.error(`There is an error in sendEmailApi file - ${t}`):console.error("Unexpected error",t),!1}};var u=n(7691);const h=u.ZP.label`
  position: absolute;
  top: -10px;
  left: 16px;
  z-index: 2;
  background-color: white;
  color: #81868c;
`,S=u.ZP.article`
  position: relative;
  margin: 0 0 30px 0;
`,E=e=>{let{setRef:t,name:n,type:r,placeholder:i,text:o}=e;return(0,l.jsxs)(S,{children:[(0,l.jsx)(h,{htmlFor:"name",children:o}),(0,l.jsx)(a.gN,{type:r,name:n,className:"input",placeholder:i,innerRef:t}),(0,l.jsx)(a.Bc,{className:"error",name:n,component:"div"})]})};var f=n(2791);const _=()=>{const e=[],[t,n]=(0,f.useState)(null);return(0,f.useEffect)((()=>{e[0].focus()}),[]),(0,f.useEffect)((()=>{const e=setTimeout((()=>n(null)),7e3);return()=>{clearTimeout(e)}}),[t]),{isSuccessSendingEmail:t,setSuccessSendingEmail:n,setRef:t=>{e.push(t)}}},g=e=>{let{name:t,email:n,text:r}=e;const i={};return t?t.length<2?i.name="\u0418\u043c\u044f \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 2-\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":t.length>30&&(i.name="\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):i.name="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",r||(i.text="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),n?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(n)||(i.email="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 E-mail"):i.email="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443",i},T=u.ZP.div`
  color: green;
  margin: 10px 0;
  font: var(--font-text7);
`,P=u.ZP.div`
  font: var(--font-text7);
  color: red;
`,v=u.ZP.article`
  position: relative;
  margin: 0 0 30px 0;
`,b=()=>{const{t:e}=(0,r.$)("",{keyPrefix:"modules.userForm"}),{isSuccessSendingEmail:t,setSuccessSendingEmail:n,setRef:i}=_(),o=[{text:e("name"),type:"name",placeholder:e("placeholderName")||"placeholder",name:"name"},{text:"Email",type:"email",placeholder:e("placeholderName")||"placeholder",name:"email"},{text:e("message"),type:"textarea",placeholder:e("placeholderMessage")||"placeholder",name:"text"}];return(0,l.jsx)(a.J9,{initialValues:{name:"",email:"",text:""},validate:g,onSubmit:async(e,t)=>{let{resetForm:r,setSubmitting:i}=t;await m(e)?(r(),i(!1),n(!0)):n(!1)},children:n=>{let{isSubmitting:r}=n;return(0,l.jsxs)(a.l0,{children:[o.map(((e,t)=>(0,f.createElement)(E,{...e,key:t,setRef:i}))),(0,l.jsx)(v,{children:!0===t?(0,l.jsx)(T,{children:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e, \u043f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e!"}):!1===t?(0,l.jsx)(P,{children:"\u041f\u0438\u0441\u044c\u043c\u043e \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c! \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u0447\u0443\u0442\u044c \u043f\u043e\u0437\u0436\u0435"}):null}),(0,l.jsx)(s,{text:e("btnText"),disabled:r})]})}})};var A=n(3050);const R=u.ZP.h1`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 20px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title2);
  }
`,j=u.ZP.section`
  background-color: white;
  padding: 18px 8px 16px 8px;

  @media screen and (min-width: 459.8px) {
    padding: 40px;
  }
`,C=u.ZP.p`
  font: var(--font-little-text-regular);
  color: black;
  padding: 0;
  margin: 0 0 20px 0;
  text-align: left;

  @media screen and (min-width: 459.8px) {
    font: var(--font-text-regular);
    margin: 16px 0;
  }
`,O=()=>{const{t:e}=(0,r.$)("",{keyPrefix:"pages.feedback"});return(0,l.jsx)(A.o,{children:(0,l.jsx)(i.W,{children:(0,l.jsxs)(j,{children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(R,{children:e("title")}),(0,l.jsx)(C,{children:e("text")})]}),(0,l.jsx)("article",{children:(0,l.jsx)(b,{})})]})})})}}}]);
//# sourceMappingURL=111.e2decb51.chunk.js.map