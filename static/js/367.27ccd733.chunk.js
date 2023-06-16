"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[367],{1587:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(1087),r=n(7879),i=n(7691);const o=i.ZP.button`
  padding: 8px 33px;
  background-color: var(--color-button);
  border: none;
  font: var(--font-button);
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  text-decoration: none;

  &:disabled {
    filter: grayscale(0.7);
    cursor: not-allowed;
  }

  @media screen and (min-width: 767.8px) {
    padding: 12px 80px;
  }
`;(0,i.ZP)(o)`
  position: absolute;
  right: 0;
  top: 0;
`,i.ZP.button`
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: none;
  background-color: transparent;
  gap: 8px;
  cursor: pointer;
`,i.ZP.article`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 32px;
  max-width: 540px;
  padding: 5px;

  @media screen and (min-width: 768.8px) {
    max-width: 100%;
  }
`,i.ZP.img`
  width: 24px;
  height: 24px;
`,i.ZP.span`
  font: var(--font-button);
  color: var(--color-back-btn);
  text-transform: uppercase;
`;var l=n(184);const s=e=>{let{text:t,pageTo:n,onClick:i,id:s,isDisabledBtn:d=!1}=e;const{t:p}=(0,r.$)();return(0,l.jsx)(a.rU,{className:"btn__link",to:n,onClick:i,id:s,children:(0,l.jsx)(o,{disabled:d,children:p(t)})})}},9856:(e,t,n)=>{n.d(t,{Z:()=>i});n(2791);const a=n(7691).ZP.div`
  min-width: 287px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 5px;
`;var r=n(184);const i=e=>{let{children:t}=e;return(0,r.jsx)(a,{children:t})}},4530:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(2426),r=n(408);const i={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},o=(0,a.ZF)(i),l=(0,r.N8)(o)},3218:(e,t,n)=>{n.d(t,{k:()=>a});const a=e=>{const t=localStorage.getItem(e);if(null===t||void 0===t)throw new Error(`Value not found for key '${e}'`);try{return`${t}`}catch(n){throw n instanceof Error?new Error(`Invalid JSON data for key '${e}': ${n.message}`):new Error(`Unknown error caught: ${n}`)}}},367:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var a=n(2791),r=n(7879),i=n(9856),o=n(9922);const l=(e,t)=>{e.target.style.transition="all ease 0.3s",e.target.style.borderColor=t,e.target.previousElementSibling.style.color=t};var s=n(7691);const d=s.ZP.input`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 288px;
  height: 56px;
  border: 1px solid #81868c80;
  padding: 16px 19px;
  font: var(--font-text-bold);
  outline: none;

  &::placeholder {
    color: #81868c;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
  }

  @media screen and (min-width: 459.8px) {
    max-width: 391px;
  }
`;var p=n(184);const c=e=>{let{isFirstRender:t,isValueValidate:n,type:a,id:i,setRefs:o,name:s,placeholder:c,onChange:u,value:m,onError:x,keyHint:h,onValidateInput:g}=e;const{t:f}=(0,r.$)(),b="email"===i?"username":"on";return(0,p.jsx)(d,{required:!0,autoComplete:b,enterKeyHint:h,ref:o,type:a,id:i,name:s,value:m,placeholder:f(c)||"Placeholder",onFocus:e=>{("email"===e.target.type||t||n)&&l(e,"#6768d7")},onBlur:e=>{((e,t)=>{e.target.style.borderColor=t,e.target.previousElementSibling.style.color=t})(e,"#81868C"),g(e)},onKeyDown:e=>{"Tab"===e.key&&g(e)},onKeyUp:e=>{const t=e.key;"Backspace"!==t&&"Delete"!==t||x(e)},onChange:u,onInput:x})},u=(0,a.memo)(c);var m=n(1587),x=n(3218),h=n(408),g=n(4530);const f=e=>{let{userName:t,userEmail:n,isDisabledBtn:a}=e;return(0,p.jsx)(m.Z,{isDisabledBtn:a,text:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c_\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",pageTo:"/results",onClick:()=>{(async(e,t,n)=>{try{const a=(0,h.iH)(g.Z,`users/user${e}/userInfo`);(0,h.Vx)(a,{name:t,email:n})}catch(a){throw a instanceof Error?new Error(`${a.message}`):new Error(`Unknown error caught: ${a}`)}})((0,x.k)("idUser"),t,n)}})},b=()=>{const[e,t]=(0,a.useState)(""),[n,r]=(0,a.useState)(!1),[i,o]=(0,a.useState)(!0),s=(0,a.useMemo)((()=>{const t=e.length<2||e.length>30,n=/[~!@#$%^&*()+`'"\";:<>/\\|]/.test(e);return t||n}),[e]),d=(0,a.useCallback)((t=>{(i||""!==e)&&(o(!1),l(t,"#81868C")),s?(r(!1),l(t,"red")):r(!0)}),[i,e,s]);return{valueUserName:e,isFirstRenderName:i,isNameValidation:n,setValueUserName:t,hideErrorInputName:e=>{s||(r(!0),l(e,"#6768d7"))},onValidateInputName:d,warningMessageName:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}},E=()=>{const[e,t]=(0,a.useState)(""),[n,r]=(0,a.useState)(!1),[i,o]=(0,a.useState)(!0),s=(0,a.useMemo)((()=>{const t=[],n=e.split(""),a=n.indexOf("@"),r=n.indexOf(".");for(let e=a+1;e<r;e++)t.push(n[e]);return t.join("").length}),[e]),d=(0,a.useMemo)((()=>{const t=[],n=e.split(""),a=n.indexOf("@");for(let e=0;e<a;e++)t.push(n[e]);return t.join("").length}),[e]),p=(0,a.useMemo)((()=>e.length<7||e.length>64||(d<1||d>32)||(s<1||s>31)||!e.includes("@")||!e.includes(".")),[e]),c=(0,a.useCallback)((e=>{i&&o(!1),p?(r((e=>!1)),l(e,"red")):r((e=>!0))}),[e,i,p]),u=(0,a.useCallback)((e=>{p||(r(!0),l(e,"#6768d7"))}),[n,e]);return{valueEmail:e,isFirstRenderEmail:i,isEmailValidation:n,warningMessageEmail:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 E-mail",setValueEmail:t,hideErrorInputEmail:u,onValidateInputEmail:c}},w=s.ZP.span`
  position: absolute;
  top: -10px;
  left: 16px;
  z-index: 2;
  background-color: white;
  color: #81868c;
`,v=s.ZP.p`
  position: relative;
  &:nth-child(3) {
    @media screen and (min-width: 459.8px) {
      display: inline-block;
    }
  }
`,k=s.ZP.fieldset`
  border: none;
  padding: 0;

  margin: 0 0 16px 0;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 28px 0;
  }
`,y=s.ZP.div`
  font: var(--font-little-text-regular);
  color: red;
`,V=()=>{const{t:e}=(0,r.$)(),{valueUserName:t,isFirstRenderName:n,isNameValidation:i,setValueUserName:o,hideErrorInputName:l,onValidateInputName:s,warningMessageName:d}=b(),{valueEmail:c,isFirstRenderEmail:m,isEmailValidation:x,setValueEmail:h,hideErrorInputEmail:g,onValidateInputEmail:V,warningMessageEmail:j}=E(),[P,Z]=(0,a.useState)(!0),I=[],N=[{htmlFor:"username",placeholder:"\u0412\u0430\u0448\u0435_\u0438\u043c\u044f",type:"text",id:"username",name:"userName",nameField:e("\u0412\u0430\u0448\u0435_\u0438\u043c\u044f"),value:t,isValidation:i,isFirstRender:n,onError:l,onValidateInput:s,warningMessage:d,isValueValidate:i,keyHint:"next"},{htmlFor:"email",placeholder:"E-mail",type:"email",id:"email",name:"userEmail",nameField:"Email",value:c,isValidation:x,isFirstRender:m,onError:g,onValidateInput:V,warningMessage:j,isValueValidate:x,keyHint:"send"}],C=e=>{const t=e.target,n=t.value;"text"===t.type?o((e=>n)):h((e=>n))};(0,a.useEffect)((()=>{(()=>{var e;null===(e=I[0])||void 0===e||e.focus()})()}),[]),(0,a.useEffect)((()=>{Z(!(x&&i))}),[x,i]);const F=e=>{I.push(e)};return(0,p.jsxs)("form",{children:[(0,p.jsx)(k,{children:N.map(((e,t)=>{const{htmlFor:n,placeholder:a,nameField:r,type:i,id:o,name:l,isValidation:s,value:d,isFirstRender:c,onError:m,onValidateInput:x,warningMessage:h,isValueValidate:g,keyHint:f}=e;return(0,p.jsx)(v,{children:(0,p.jsxs)("label",{htmlFor:n,children:[(0,p.jsx)(w,{children:r}),(0,p.jsx)(u,{setRefs:F,placeholder:a,type:i,id:o,name:l,value:d,onChange:C,onError:m,onValidateInput:x,isValueValidate:g,isFirstRender:c,keyHint:f}),c||s?null:(0,p.jsx)(y,{children:h})]})},t+1)}))}),(0,p.jsx)(f,{userName:t,userEmail:c,isDisabledBtn:P})]})},j=s.ZP.h1`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 0 0 4px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title2);
    margin: 0 0 16px 0;
  }
`,P=s.ZP.section`
  background-color: white;
  padding: 18px 8px 16px 8px;

  @media screen and (min-width: 459.8px) {
    padding: 40px;
  }
`,Z=s.ZP.p`
  font: var(--font-little-text-regular);
  color: black;
  padding: 0;
  margin: 0;
  text-align: left;

  @media screen and (min-width: 459.8px) {
    font: var(--font-text-regular);
    margin: 16px 0;
  }
`,I=()=>{const{t:e}=(0,r.$)();return(0,p.jsx)(o.P,{children:(0,p.jsx)(i.Z,{children:(0,p.jsxs)(P,{children:[(0,p.jsxs)("article",{children:[(0,p.jsx)(j,{children:e("\u041f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u0430\u044f_\u0440\u0430\u0431\u043e\u0442\u0430")}),(0,p.jsx)(Z,{children:e("\u0423\u0447\u043b\u0438_\u0432\u0430\u0448\u0438_\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b")})]}),(0,p.jsx)("article",{children:(0,p.jsx)(V,{})})]})})})}},9922:(e,t,n)=>{n.d(t,{P:()=>a});const a=n(7691).ZP.main`
  flex: 1 1 auto;
`}}]);
//# sourceMappingURL=367.27ccd733.chunk.js.map