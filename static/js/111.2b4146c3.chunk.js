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
`},3050:(e,t,n)=>{n.d(t,{o:()=>i});const r=n(7691).ZP.main`
  flex: 1 1 auto;
  width: 100%;
  background-color: var(--color-white);
`;var a=n(184);const i=e=>{let{children:t,customStyle:n}=e;return(0,a.jsx)(r,{style:n,children:t})}},9111:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var r=n(7879),a=n(6401),i=n(5705),l=n(7357),o=n(184);const s=e=>{let{text:t,disabled:n}=e;const{t:a}=(0,r.$)();return(0,o.jsx)(l.S,{type:"submit",disabled:n,children:a(t)})};var c=n(7530);const d="service_bzowwxu",x="template_cpdts7u",p=async e=>{try{{const t=await c.ZP.send(d,x,e,"-yvUtN4lJ1TH6FXnX");if("OK"===t.text)return!0;throw new Error(`EmailJSResponse has status - ${t.status} and text - ${t.text}`)}}catch(t){return t instanceof Error?console.error(`There is an error in sendEmailApi file - ${t}`):console.error("Unexpected error",t),!1}};var m=n(7691);const u=m.ZP.label`
  position: absolute;
  top: -10px;
  left: 16px;
  z-index: 2;
  background-color: white;
  color: #81868c;
`,h=m.ZP.article`
  position: relative;
  margin: 0 0 30px 0;
`,f=e=>{let{setRef:t,name:n,type:r,placeholder:a,text:l}=e;return(0,o.jsxs)(h,{children:[(0,o.jsx)(u,{htmlFor:"name",children:l}),(0,o.jsx)(i.gN,{type:r,name:n,className:"input",placeholder:a,innerRef:t}),(0,o.jsx)(i.Bc,{className:"error",name:n,component:"div"})]})};var g=n(2791);const b=()=>{const e=[],[t,n]=(0,g.useState)(null);return(0,g.useEffect)((()=>{e[0].focus()}),[]),(0,g.useEffect)((()=>{const e=setTimeout((()=>n(null)),7e3);return()=>{clearTimeout(e)}}),[t]),{isSuccessSendingEmail:t,setSuccessSendingEmail:n,setRef:t=>{e.push(t)}}},v=e=>{let{name:t,email:n,text:r}=e;const a={};return t?t.length<2?a.name="\u0418\u043c\u044f \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 2-\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":t.length>30&&(a.name="\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):a.name="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",r||(a.text="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),n?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(n)||(a.email="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 E-mail"):a.email="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443",a},j=m.ZP.div`
  color: green;
  margin: 10px 0;
  font: var(--font-text7);
`,w=m.ZP.div`
  font: var(--font-text7);
  color: red;
`,y=m.ZP.article`
  position: relative;
  margin: 0 0 30px 0;
`,S=()=>{const{t:e}=(0,r.$)("",{keyPrefix:"modules.userForm"}),{isSuccessSendingEmail:t,setSuccessSendingEmail:n,setRef:a}=b(),l=[{text:e("name"),type:"name",placeholder:e("placeholderName")||"placeholder",name:"name"},{text:"Email",type:"email",placeholder:e("placeholderName")||"placeholder",name:"email"},{text:e("message"),type:"textarea",placeholder:e("placeholderMessage")||"placeholder",name:"text"}];return(0,o.jsx)(i.J9,{initialValues:{name:"",email:"",text:""},validate:v,onSubmit:async(e,t)=>{let{resetForm:r,setSubmitting:a}=t;await p(e)?(r(),a(!1),n(!0)):n(!1)},children:n=>{let{isSubmitting:r}=n;return(0,o.jsxs)(i.l0,{children:[l.map(((e,t)=>(0,g.createElement)(f,{...e,key:t,setRef:a}))),(0,o.jsx)(y,{children:!0===t?(0,o.jsx)(j,{children:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e, \u043f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e!"}):!1===t?(0,o.jsx)(w,{children:"\u041f\u0438\u0441\u044c\u043c\u043e \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c! \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u0447\u0443\u0442\u044c \u043f\u043e\u0437\u0436\u0435"}):null}),(0,o.jsx)(s,{text:e("btnText"),disabled:r})]})}})};var k=n(3050);const Z=m.ZP.h1`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 20px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title2);
  }
`,E=m.ZP.section`
  background-color: white;
  padding: 18px 8px 16px 8px;

  @media screen and (min-width: 459.8px) {
    padding: 40px;
  }
`,P=m.ZP.p`
  font: var(--font-little-text-regular);
  color: black;
  padding: 0;
  margin: 0 0 20px 0;
  text-align: left;

  @media screen and (min-width: 459.8px) {
    font: var(--font-text-regular);
    margin: 16px 0;
  }
`,T=()=>{const{t:e}=(0,r.$)("",{keyPrefix:"pages.feedback"});return(0,o.jsx)(k.o,{children:(0,o.jsx)(a.W,{children:(0,o.jsxs)(E,{children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(Z,{children:e("title")}),(0,o.jsx)(P,{children:e("text")})]}),(0,o.jsx)("article",{children:(0,o.jsx)(S,{})})]})})})}}}]);
//# sourceMappingURL=111.2b4146c3.chunk.js.map