"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[367],{1587:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(1087),i=n(7879),r=n(7691);const o=r.ZP.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
  border: none;
  font: var(--font-button);
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  text-decoration: none;
  border-radius: 7px;
  background-color: #585AFF;
  max-width: 190px;
  width: 100%;
  max-height: 56px;

  &:disabled {
    background-color: rgba(88, 90, 255, 0.49);
    cursor: not-allowed;
  }

  @media screen and (min-width: 767.8px) {
    padding: 16px 18px;
    max-width: 230px;
  }
`;(0,r.ZP)(o)`
  position: absolute;
  right: 0;
  top: 0;
`,r.ZP.button`
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: none;
  background-color: transparent;
  gap: 8px;
  cursor: pointer;
`,r.ZP.article`
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
`,r.ZP.img`
  width: 24px;
  height: 24px;
`,r.ZP.span`
  font: var(--font-button);
  color: var(--color-back-btn);
  text-transform: uppercase;
`;var s=n(184);const l=e=>{let{text:t,pageTo:n,onClick:r,id:l,isDisabledBtn:d}=e;const{t:p}=(0,i.$)();return(0,s.jsx)(a.rU,{className:"btn__link",to:n,onClick:r,id:l,children:(0,s.jsx)(o,{disabled:d,children:p(t)})})}},9856:(e,t,n)=>{n.d(t,{Z:()=>r});const a=n(7691).ZP.div`
max-width: 85%;
min-width: 287px;
margin: 0 auto;
padding: 0 5px;
@media screen and (min-width: 1299.8px) {
  max-width: 1190px;
}
`;var i=n(184);const r=e=>{let{children:t}=e;return(0,i.jsx)(a,{children:t})}},4530:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(2426),i=n(408);const r={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},o=(0,a.ZF)(r),s=(0,i.N8)(o)},367:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var a=n(2791),i=n(7879),r=n(9856),o=n(9922);const s=(e,t)=>{e.target.style.transition="all ease 0.3s",e.target.style.borderColor=t,e.target.previousElementSibling.style.color=t};var l=n(7691);const d=l.ZP.input`
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
`;var p=n(184);const c=e=>{let{isFirstRender:t,isValueValidate:n,type:a,id:r,setRefs:o,name:l,placeholder:c,onChange:u,value:m,onError:x,keyHint:h,onValidateInput:g}=e;const{t:b}=(0,i.$)(),f="email"===r?"username":"on";return(0,p.jsx)(d,{required:!0,autoComplete:f,enterKeyHint:h,ref:o,type:a,id:r,name:l,value:m,placeholder:b(c)||"Placeholder",onFocus:e=>{("email"===e.target.type||t||n)&&s(e,"#6768d7")},onBlur:e=>{((e,t)=>{e.target.style.borderColor=t,e.target.previousElementSibling.style.color=t})(e,"#81868C"),g(e)},onKeyDown:e=>{"Tab"===e.key&&g(e)},onKeyUp:e=>{const t=e.key;"Backspace"!==t&&"Delete"!==t||x(e)},onChange:u,onInput:x})},u=(0,a.memo)(c);var m=n(1587),x=n(408),h=n(4530);var g=n(3589);const b=e=>{let{userName:t,userEmail:n,isDisabledBtn:i}=e;const[r]=(0,a.useContext)(g.iT);return(0,p.jsx)(m.Z,{isDisabledBtn:i,text:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c_\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",pageTo:"/results",onClick:()=>{(async(e,t,n)=>{try{const a=(0,x.iH)(h.Z,`users/user${e}/userInfo`);(0,x.Vx)(a,{name:t,email:n})}catch(a){throw a instanceof Error?new Error(`${a.message}`):new Error(`Unknown error caught: ${a}`)}})(r,t,n)}})},f=()=>{const[e,t]=(0,a.useState)(""),[n,i]=(0,a.useState)(!1),[r,o]=(0,a.useState)(!0),l=(0,a.useMemo)((()=>{const t=e.length<2||e.length>30,n=/[~!@#$%^&*()+`'"\";:<>/\\|]/.test(e);return t||n}),[e]),d=(0,a.useCallback)((t=>{(r||""!==e)&&(o(!1),s(t,"#81868C")),l?(i(!1),s(t,"red")):i(!0)}),[r,e,l]);return{valueUserName:e,isFirstRenderName:r,isNameValidation:n,setValueUserName:t,hideErrorInputName:e=>{l||(i(!0),s(e,"#6768d7"))},onValidateInputName:d,warningMessageName:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}},E=()=>{const[e,t]=(0,a.useState)(""),[n,i]=(0,a.useState)(!1),[r,o]=(0,a.useState)(!0),l=(0,a.useMemo)((()=>{const t=[],n=e.split(""),a=n.indexOf("@"),i=n.indexOf(".");for(let e=a+1;e<i;e++)t.push(n[e]);return t.join("").length}),[e]),d=(0,a.useMemo)((()=>{const t=[],n=e.split(""),a=n.indexOf("@");for(let e=0;e<a;e++)t.push(n[e]);return t.join("").length}),[e]),p=(0,a.useMemo)((()=>e.length<7||e.length>64||(d<1||d>32)||(l<1||l>31)||!e.includes("@")||!e.includes(".")),[e]),c=(0,a.useCallback)((e=>{r&&o(!1),p?(i((e=>!1)),s(e,"red")):i((e=>!0))}),[e,r,p]),u=(0,a.useCallback)((e=>{p||(i(!0),s(e,"#6768d7"))}),[n,e]);return{valueEmail:e,isFirstRenderEmail:r,isEmailValidation:n,warningMessageEmail:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 E-mail",setValueEmail:t,hideErrorInputEmail:u,onValidateInputEmail:c}},w=l.ZP.span`
  position: absolute;
  top: -10px;
  left: 16px;
  z-index: 2;
  background-color: white;
  color: #81868c;
`,v=l.ZP.p`
  position: relative;
  &:nth-child(3) {
    @media screen and (min-width: 459.8px) {
      display: inline-block;
    }
  }
`,y=l.ZP.fieldset`
  border: none;
  padding: 0;

  margin: 0 0 16px 0;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 28px 0;
  }
`,V=l.ZP.span`
  display: block;
  font: var(--font-little-text-regular);
  color: red;
`,k=()=>{const{t:e}=(0,i.$)(),{valueUserName:t,isFirstRenderName:n,isNameValidation:r,setValueUserName:o,hideErrorInputName:s,onValidateInputName:l,warningMessageName:d}=f(),{valueEmail:c,isFirstRenderEmail:m,isEmailValidation:x,setValueEmail:h,hideErrorInputEmail:g,onValidateInputEmail:k,warningMessageEmail:j}=E(),[P,F]=(0,a.useState)(!0),Z=[],C=[{htmlFor:"username",placeholder:"\u0412\u0430\u0448\u0435_\u0438\u043c\u044f",type:"text",id:"username",name:"userName",nameField:e("\u0412\u0430\u0448\u0435_\u0438\u043c\u044f"),value:t,isValidation:r,isFirstRender:n,onError:s,onValidateInput:l,warningMessage:d,isValueValidate:r,keyHint:"next"},{htmlFor:"email",placeholder:"E-mail",type:"email",id:"email",name:"userEmail",nameField:"Email",value:c,isValidation:x,isFirstRender:m,onError:g,onValidateInput:k,warningMessage:j,isValueValidate:x,keyHint:"send"}],N=e=>{const t=e.target,n=t.value;"text"===t.type?o((e=>n)):h((e=>n))};(0,a.useEffect)((()=>{(()=>{var e;null===(e=Z[0])||void 0===e||e.focus()})()}),[]),(0,a.useEffect)((()=>{F(!(x&&r))}),[x,r]);const I=e=>{Z.push(e)};return(0,p.jsxs)("form",{children:[(0,p.jsx)(y,{children:C.map(((e,t)=>{const{htmlFor:n,placeholder:a,nameField:i,type:r,id:o,name:s,isValidation:l,value:d,isFirstRender:c,onError:m,onValidateInput:x,warningMessage:h,isValueValidate:g,keyHint:b}=e;return(0,p.jsx)(v,{children:(0,p.jsxs)("label",{htmlFor:n,children:[(0,p.jsx)(w,{children:i}),(0,p.jsx)(u,{setRefs:I,placeholder:a,type:r,id:o,name:s,value:d,onChange:N,onError:m,onValidateInput:x,isValueValidate:g,isFirstRender:c,keyHint:b}),c||l?null:(0,p.jsx)(V,{children:h})]})},t+1)}))}),(0,p.jsx)(b,{userName:t,userEmail:c,isDisabledBtn:P})]})},j=l.ZP.h1`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 0 0 4px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title2);
    margin: 0 0 16px 0;
  }
`,P=l.ZP.section`
  background-color: white;
  padding: 18px 8px 16px 8px;

  @media screen and (min-width: 459.8px) {
    padding: 40px;
  }
`,F=l.ZP.p`
  font: var(--font-little-text-regular);
  color: black;
  padding: 0;
  margin: 0;
  text-align: left;

  @media screen and (min-width: 459.8px) {
    font: var(--font-text-regular);
    margin: 16px 0;
  }
`,Z=()=>{const{t:e}=(0,i.$)();return(0,p.jsx)(o.P,{children:(0,p.jsx)(r.Z,{children:(0,p.jsxs)(P,{children:[(0,p.jsxs)("article",{children:[(0,p.jsx)(j,{children:e("\u041f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u0430\u044f_\u0440\u0430\u0431\u043e\u0442\u0430")}),(0,p.jsx)(F,{children:e("\u0423\u0447\u043b\u0438_\u0432\u0430\u0448\u0438_\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b")})]}),(0,p.jsx)("article",{children:(0,p.jsx)(k,{})})]})})})}},9922:(e,t,n)=>{n.d(t,{P:()=>a});const a=n(7691).ZP.main`
  flex: 1 1 auto;
`}}]);
//# sourceMappingURL=367.4de49aaa.chunk.js.map