"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[611],{1587:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(1087),o=n(7879),i=n(7691);const s=i.ZP.button`
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
`;(0,i.ZP)(s)`
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
`;var a=n(184);const l=e=>{let{text:t,pageTo:n,onClick:i,id:l,isDisabledBtn:c=!1}=e;const{t:d}=(0,o.$)();return(0,a.jsx)(r.rU,{className:"btn__link",to:n,onClick:i,id:l,children:(0,a.jsx)(s,{disabled:c,children:d(t)})})}},1838:(e,t,n)=>{n.d(t,{r:()=>i});var r=n(408),o=n(4530);const i=async()=>{try{return await new Promise((function(e,t){(0,r.jM)((0,r.iH)(o.Z,"questions"),(t=>{const n=Object.entries(t.val()).length;e(n)}))}))}catch(e){console.error(e)}}},9856:(e,t,n)=>{n.d(t,{Z:()=>i});n(2791);const r=n(7691).ZP.div`
  min-width: 287px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 5px;
`;var o=n(184);const i=e=>{let{children:t}=e;return(0,o.jsx)(r,{children:t})}},4530:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(2426),o=n(408);const i={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},s=(0,r.ZF)(i),a=(0,o.N8)(s)},3218:(e,t,n)=>{n.d(t,{k:()=>r});const r=e=>{const t=localStorage.getItem(e);if(null===t||void 0===t)throw new Error(`Value not found for key '${e}'`);try{return`${t}`}catch(n){throw n instanceof Error?new Error(`Invalid JSON data for key '${e}': ${n.message}`):new Error(`Unknown error caught: ${n}`)}}},611:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var r=n(2791),o=n(9856),i=n(408),s=n(4530);var a=n(7691);const l=a.ZP.li`
  word-wrap: break-word;
  box-sizing: border-box;
  flex-basis: 100%;
  list-style-type: none;
  border: 1px solid var(--color-border-answer);
  padding: 7px;
  font: var(--font-little-text-bold);
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);
    padding: 15px 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: 1123.8px) {
    font: var(--font-text-bold);
  }
`;var c=n(184);const d=e=>{let{children:t,index:n,setRef:r,onFocusUserAnswer:o}=e;return(0,c.jsx)(l,{ref:r,tabIndex:0,onClick:()=>o(n),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),o(n))},children:t})},u=(0,r.createContext)(null),p=e=>{let{children:t,value:n}=e;return(0,c.jsx)(u.Provider,{value:n,children:t})};var x=n(3201);const h=e=>{e.forEach((e=>{e.removeAttribute("style"),e.removeAttribute("data-useranswer")}))},m=a.ZP.article`
  @media screen and (min-width: 767.8px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }

  @media screen and (min-width: 1123.8px) {
    gap: 40px;
  }
`,g=a.ZP.ul`
  margin: 0;
  padding: 0;
  @media screen and (min-width: 767.8px) {
    flex-basis: auto;
  }
`,f=e=>{let{showButtonAccept:t}=e;const[n,o]=(0,r.useState)({answers:[],loading:!0,error:!1}),a=(0,r.useContext)(u),l=a?a[0]:1,p=[],f=e=>{p.push(e)},b=e=>{!!p.filter((e=>e.dataset.useranswer)).length||t(),h(p),p[e].setAttribute("style","border: 2px solid rgb(103, 104, 215)"),p[e].setAttribute("data-useranswer","true"),p[e].focus()},w=e=>{const t=Object.entries(e).map((e=>e.join(". ")));Array.isArray(t)&&o((e=>({...e,answers:t,loading:!1})))},v=n.answers.map(((e,t)=>(0,c.jsx)(d,{index:t,setRef:f,onFocusUserAnswer:b,children:e},t+1))),A=n.loading?(0,c.jsx)(x.Z,{width:50,height:50,color:"#1f2ce0",margin:""}):null,y=n.error?"ERROR!":null,j=n.loading||n.error?null:(0,c.jsx)(m,{id:"answersAll",children:(0,c.jsx)(g,{children:v})}),Z=()=>{o((e=>({...e,error:!0,loading:!1})))};return(0,r.useEffect)((()=>{h(p),l&&(async e=>{var t;const n=null===(t=document.querySelector("html"))||void 0===t?void 0:t.getAttribute("lang");return await new Promise((function(t,r){(0,i.jM)((0,i.iH)(s.Z,`answers/answers${e}/${n}`),(e=>{e.val()?t(e.val()):r()}))}))})(l).then(w).catch(Z)}),[l]),(0,c.jsxs)(c.Fragment,{children:[" ",A," ",j," ",y]})},b=async e=>{var t;const n=null===(t=document.querySelector("html"))||void 0===t?void 0:t.getAttribute("lang");return await new Promise((function(t,r){(0,i.jM)((0,i.iH)(s.Z,`questions/question${e}/${n}/img`),(e=>{const n=e.val();t(n)}))}))},w=async e=>{var t;const n=null===(t=document.querySelector("html"))||void 0===t?void 0:t.getAttribute("lang");return await new Promise((function(t,r){(0,i.jM)((0,i.iH)(s.Z,`questions/question${e}/${n}/name`),(e=>{const n=e.val();t(n)}))}))},v=a.ZP.article`
  padding-bottom: 14px;
`,A=a.ZP.h2`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 20px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title4);
  }
`,y=a.ZP.picture`
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
  max-width: 100%;

  @media screen and (min-width: 767.8px) {
    display: flex;
    align-items: center;
    flex-basis: 55%;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1123.8px) {
    flex-basis: 48%;
  }
`,j=a.ZP.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  ${function(e){let{currentQuestionNumb:t}=e;if(16!==t)return"\n      @media screen and (min-width: 667.8px) {\n        width: 85%;\n      }\n  \n      @media screen and (min-width: 923.8px) {\n        width: 78%;\n      }\n            "}}
`,Z=()=>{const e=(0,r.useContext)(u),t=e?e[0]:1,[n,o]=(0,r.useState)({question:"",loading:!0,srcImg:"",error:!1}),i=n.error?"ERROR!!":null,s=n.loading?(0,c.jsx)(x.Z,{width:50,height:50,color:"#1f2ce0",margin:"0"}):null,a=n.loading||n.error?null:n.srcImg?(0,c.jsxs)(v,{children:[(0,c.jsx)(A,{id:"questionTitle",tabIndex:0,children:n.question}),(0,c.jsxs)(y,{children:[(0,c.jsx)("source",{type:"image/png",media:"(min-width: 320px)",srcSet:n.srcImg,width:"120",height:"auto"}),(0,c.jsx)("source",{type:"image/png",media:"(min-width: 487px)",srcSet:n.srcImg,width:"768",height:"auto"}),(0,c.jsx)("source",{type:"image/png",media:"(min-width: 769px)",srcSet:n.srcImg,width:"1024",height:"auto"}),(0,c.jsx)(j,{src:n.srcImg,width:"1024",height:"auto",alt:"\u041a\u043e\u0434 \u043d\u0430 JS"})]})]}):(0,c.jsx)(v,{children:(0,c.jsx)(A,{id:"questionTitle",tabIndex:0,children:n.question})}),l=e=>{const t={src:"",question:""};e.forEach((e=>{e.value.startsWith("http")&&(t.src=e.value),"No"===e.value&&(t.src=""),"string"===typeof e.value&&(t.question=e.value)})),o((e=>({...e,loading:!1,question:t.question,srcImg:t.src})))},d=e=>{throw o((e=>({...e,loading:!1,error:!0}))),new Error(e)};return(0,r.useEffect)((()=>{Promise.allSettled([b(t),w(t)]).then(l).catch(d)}),[t]),(0,c.jsxs)(c.Fragment,{children:[s," ",a," ",i]})};var P=n(7879);const k=async e=>{try{var t;const n=null===(t=document.querySelector("html"))||void 0===t?void 0:t.getAttribute("lang");return await new Promise((function(t,r){(0,i.jM)((0,i.iH)(s.Z,`questions/question${e}/${n}/theme`),(e=>{const n=e.val();t(n)}))}))}catch(n){console.error(n)}};var q=n(1838);const E=a.ZP.h1`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 20px 0;
  position: relative;
  flex: 0 1 85%;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title4);
  }
`,C=a.ZP.span`
  font: var(--font-text-regular);
  color: var(--color-quantity-questions);
  padding: 0 0 0 5px;
`,S=(0,a.ZP)(C)`
  display: block;
  padding: 0;

  @media screen and (min-width: 459.8px) {
    display: inline;
    padding: 0 0 0 10px;
  }
`,$=()=>{const{t:e}=(0,P.$)(),t=(0,r.useContext)(u),n=t?t[0]:1,[o,i]=(0,r.useState)({loading:!0,questionTheme:null,totalQuestionNumber:0}),s=o.loading?(0,c.jsx)(x.Z,{width:50,height:50,color:"#1f2ce0",margin:""}):null,a=o.loading?null:(0,c.jsxs)(E,{id:"questionName",children:[e("\u0412\u043e\u043f\u0440\u043e\u0441")," ",n,(0,c.jsx)(C,{id:"totalQuestionQuantity",tabIndex:0,children:`/ ${o.totalQuestionNumber}`}),(0,c.jsx)(S,{id:"themeQuestion",children:o.questionTheme})]}),l=e=>{const t={theme:null,totalQuestionNumber:null};e.forEach((e=>{"number"===typeof e.value?t.totalQuestionNumber=e.value:"string"===typeof e.value&&(t.theme=e.value)})),i({loading:!1,questionTheme:`${t.theme}`,totalQuestionNumber:t.totalQuestionNumber});for(const n in t)if(!t[n])throw new Error(`Value of ${n} is ${t[n]} in object "items"`)};return(0,r.useEffect)((()=>{Promise.allSettled([k(n),(0,q.r)()]).then(l)}),[n]),(0,c.jsxs)(c.Fragment,{children:[s,a]})};let I=0;const T=a.ZP.button`
  padding: 8px 33px;
  background-color: var(--color-button);
  border: none;
  font: var(--font-button);
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  text-decoration: none;

  @media screen and (min-width: 767.8px) {
    padding: 12px 80px;
  }
`,R=a.ZP.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 15px;
`,B=(0,a.ZP)(T)`
  margin: 20px 0 0 0;
  display: block;

  @media screen and (min-width: 767.8px) {
    padding: 12px 30px;
  }
`,Q=a.ZP.div`
  box-sizing: border-box;
  position: absolute;
  padding: 15px;
  border-radius: 10px;
  background-color: white;
  margin: 0 auto;
  width: 90%;
  max-width: 700px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,N=a.ZP.h1`
  margin-top: 0;
  font: 800 24px/36px Inter, Arial, sans-serif;
`,U=a.ZP.span`
  font: 400 16px/24px Inter, Arial, sans-serif;
`,z=a.ZP.span`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
`,H=e=>{let{title:t,subTitle:n,onClickHandler:r}=e;return(0,c.jsx)(R,{id:"notification",children:(0,c.jsxs)(Q,{children:[(0,c.jsx)(N,{className:"notification__title",children:t}),(0,c.jsx)(z,{className:"notification__close",onClick:r,children:"\u2716"}),(0,c.jsx)(U,{className:"notification__text",children:n}),(0,c.jsx)(B,{onClick:r,children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})]})})},M=e=>1===`${e}`.length?`0${e}`:`${e}`;var _=n(4164);const O=e=>{let{children:t}=e;const n=document.createElement("article"),o=document.querySelector("#root");return null===o||void 0===o||o.append(n),(0,r.useEffect)((()=>()=>{n.remove()})),_.createPortal(t,n)},D=a.ZP.div`
  font: var(--font-little-text-regular);
  text-align: center;

  @media screen and (min-width: 459.8px) {
    display: block;
  }

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);
  }
`,F=a.ZP.button`
  color: black;
  font: var(--font-little-text-regular);
  background-color: transparent;
  border: 1px solid var(--color-border-answer);
  cursor: pointer;
  margin: 0 0 0 5px;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 0 10px;
  }

  &:hover {
    border: 1px solid #6768d7;
    transition: all ease 0.3s;
  }
`,L=()=>{const{t:e}=(0,P.$)(),[{isCounting:t,isModal:n,timeLeft:o},a]=(0,r.useState)({isModal:!1,isCounting:!0,timeLeft:0}),l=(0,r.useRef)(null),d=[`${M(Math.floor(o/3600)%60)}:`,`${M(Math.floor(o/60)%60)}:`,M(Math.floor(o%60))].map(((e,t)=>(0,c.jsx)("span",{children:e},t+1))),u=e("\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a1_\u043f\u0430\u0443\u0437\u0430"),p=e("\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a2_\u043f\u0430\u0443\u0437\u0430");return(0,r.useEffect)((()=>{const e=setTimeout((()=>{t&&a((e=>({...e,timeLeft:o+1})))}),1e3);return()=>{(e=>{try{const t=localStorage.getItem("idUser"),n=(0,i.iH)(s.Z,`users/user${t}/userInfo`);(0,i.Vx)(n,{time:e})}catch(t){console.error(t)}})(o),clearTimeout(e)}}),[o,t]),(0,c.jsxs)(D,{ref:l,children:[(0,c.jsx)("span",{children:d}),n&&(0,c.jsx)(O,{children:(0,c.jsx)(H,{title:u,subTitle:p,onClickHandler:()=>{a((e=>({...e,isCounting:!0,isModal:!1})))}})}),(0,c.jsx)(F,{onClick:()=>{a((e=>({...e,isCounting:!1,isModal:!0}))),I++},children:e("\u041f\u0430\u0443\u0437\u0430")})]})};const Y=a.ZP.div`
  box-sizing: border-box;
  height: 6px;
  background-color: var(--color-scroll-bar);
  border-radius: 2px 4px 4px 0;
  width: 370px;
`,V=e=>{let{quizRef:t}=e;const n=(0,r.useContext)(u),o=n?n[0]:1,i=(0,r.useRef)(null);return(0,r.useEffect)((()=>{!async function(e){let{currentQuestionNumb:t,quizRef:n,scrollBarElementRef:r}=e;try{const e=await(0,q.r)(),o=n.current,i=r.current;if(o&&e&&i){const n=(o.clientWidth-parseInt(getComputedStyle(o).paddingRight)-parseInt(getComputedStyle(o).paddingLeft))/e;i.style.width=t*n+"px"}}catch(o){throw o instanceof Error?new Error(`${o.message}`):new Error(`Unknown error caught: ${o}`)}}({currentQuestionNumb:o,quizRef:t,scrollBarElementRef:i})})),(0,c.jsx)(Y,{ref:i})};var W=n(9922),K=n(3218);const G=a.ZP.button`
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: none;
  background-color: transparent;
  gap: 8px;
  cursor: pointer;
`,J=(a.ZP.article`
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
`,a.ZP.img`
  width: 24px;
  height: 24px;
`),X=a.ZP.span`
  font: var(--font-button);
  color: var(--color-back-btn);
  text-transform: uppercase;
`,ee=e=>{let{showButtonAccept:t}=e,[o,a]=(0,r.useContext)(u)||[1,()=>{}];return(0,c.jsx)(c.Fragment,{children:!(1===o)&&(0,c.jsxs)(G,{id:"btnBack",onClick:e=>{a(--o),t(),(e=>{let{idUser:t,currentQuestionNumb:n,selectorAnswers:r}=e;const o=`users/user${t}/answers/answer${n}`;let a="";try{(0,i.jM)((0,i.iH)(s.Z,o),(e=>{setTimeout((()=>{document.querySelectorAll(r).forEach((t=>{a=e.val().userAnswer,t.textContent===a&&(t.style.border="2px solid rgb(103, 104, 215)",t.setAttribute("data-useranswer","true"))}))}),1)}),{onlyOnce:!0})}catch(l){if(!a)throw new Error(`The value of variable 'userAnswerDb' is ${a}. ${l}`);throw new Error(`Unknown mistake: ${l}`)}})({idUser:(0,K.k)("idUser"),currentQuestionNumb:o,selectorAnswers:"#answersAll ul li"}),e.currentTarget.style.display="none"},children:[(0,c.jsx)(J,{src:n(7751),alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u043d\u0430\u0437\u0430\u0434"}),(0,c.jsx)(X,{children:"\u041d\u0430\u0437\u0430\u0434"})]})})};var te=n(1587);const ne=a.ZP.button`
  padding: 8px 33px;
  background-color: var(--color-button);
  border: none;
  font: var(--font-button);
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  text-decoration: none;

  @media screen and (min-width: 767.8px) {
    padding: 12px 80px;
  }
`,re=(0,a.ZP)(ne)`
  position: absolute;
  right: 0;
  top: 0;
`,oe=e=>{let{onClickButtonHandler:t}=e;const{t:n}=(0,P.$)(),[o,a]=(0,r.useContext)(u)||[1,()=>{}];let l;(0,i.jM)((0,i.iH)(s.Z,"questions"),(e=>{l=Object.entries(e.val()).length}));const d=l===o;return(0,c.jsx)(c.Fragment,{children:d?(0,c.jsx)(te.Z,{text:"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u0442\u0435\u0441\u0442",pageTo:"/contact"}):(0,c.jsx)(re,{onClick:t,children:n("\u041f\u0440\u0438\u043d\u044f\u0442\u044c")})})},ie=e=>{let{onClickButtonHandler:t}=e;return(0,c.jsx)(te.Z,{text:"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u0442\u0435\u0441\u0442",pageTo:"/contact",onClick:t,id:"btnFinish"})},se=async e=>{var t,n;let{currentQuestionNumb:r,selectorQuestion:o,userAnswer:a,selectorTheme:l,idUser:c}=e;const d=null===(t=document.querySelector(l))||void 0===t?void 0:t.textContent,u=null===(n=document.querySelector(o))||void 0===n?void 0:n.textContent,p=await(async e=>{try{var t;const n=null===(t=document.querySelector("html"))||void 0===t?void 0:t.getAttribute("lang");return await new Promise((function(t,r){(0,i.jM)((0,i.iH)(s.Z,`questions/question${e}/${n}/rightAnswer`),(e=>{const n=e.val();t(n)}))}))}catch(n){console.error(n)}})(r);try{const e=(0,i.iH)(s.Z,`users/user${c}/answers/answer${r}`);(0,i.t8)(e,{question:u,userAnswer:a,theme:d,point:p===a?1:0,quantityPause:I})}catch(x){throw d?u?new Error(`Unknown mistake: ${x}`):new Error(`The value of variable 'question' is ${u}. ${x}`):new Error(`The value of variable 'theme' is ${d}. ${x}`)}},ae=a.ZP.article`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 32px;
  max-width: 100%;
  padding: 5px;
`,le=e=>{let{isButtonAcceptVisibility:t,showButtonAccept:n,hideButtonAccept:o}=e;const[a,l]=(0,r.useContext)(u)||[0,()=>{}];let d=0;(0,i.jM)((0,i.iH)(s.Z,"questions"),(e=>{d=Object.entries(e.val()).length}));const p=()=>{(()=>{try{const e=localStorage.getItem("idUser"),t=(0,i.iH)(s.Z,`users/user${e}/userInfo`);(0,i.t8)(t,{quiantityPause:I})}catch(e){console.error(e)}})(),I=0},x=e=>{const t=document.querySelector("#btnBack");document.querySelectorAll("#answersAll ul li").forEach((e=>{e.dataset.useranswer&&(l(a+1),se({currentQuestionNumb:a,selectorQuestion:"#questionTitle",userAnswer:e.textContent||"No anwser",selectorTheme:"#themeQuestion",idUser:(0,K.k)("idUser")}))})),e.currentTarget.closest("#btnFinish")?p():(o(),"none"===(null===t||void 0===t?void 0:t.style.display)&&(t.style.display="flex"))};return(0,c.jsxs)(ae,{children:[(0,c.jsx)(ee,{showButtonAccept:n}),t&&(d===a?(0,c.jsx)(ie,{onClickButtonHandler:x}):(0,c.jsx)(oe,{onClickButtonHandler:x}))]})},ce=a.ZP.section`
  background-color: #fff;
  padding: 0 8px 47px 8px;
  margin: 54px 0 15px 0;

  @media screen and (min-width: 1123.8px) {
    padding: 0 40px 47px 40px;
    margin: 114px 0 72px 0;
  }
`,de=a.ZP.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 540px;

  @media screen and (min-width: 459.8px) {
    max-width: 100%;
  }
`,ue=()=>{const[e,t]=(0,r.useState)(1),n=(0,r.useRef)(null),[i,s]=(0,r.useState)(!1),a=()=>{s(!0)};return(0,r.useEffect)((()=>{const e=e=>{e.preventDefault(),e.returnValue="\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043a\u0438\u043d\u0443\u0442\u044c \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443? \u0412\u0441\u0435 \u043d\u0435\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u044b."};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[]),(0,c.jsx)(W.P,{children:(0,c.jsx)(o.Z,{children:(0,c.jsx)(ce,{ref:n,children:(0,c.jsxs)(p,{value:[e,t],children:[(0,c.jsx)(V,{quizRef:n}),(0,c.jsxs)(de,{children:[(0,c.jsx)($,{}),(0,c.jsx)(L,{})]}),(0,c.jsx)(Z,{}),(0,c.jsx)(f,{showButtonAccept:a}),(0,c.jsx)(le,{showButtonAccept:a,isButtonAcceptVisibility:i,hideButtonAccept:()=>{s(!1)}})]})})})})}},9922:(e,t,n)=>{n.d(t,{P:()=>r});const r=n(7691).ZP.main`
  flex: 1 1 auto;
`},7751:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEOSURBVHgB7ZRBTgIxFIb/98a49ybegI4RdadH4ApGdmqmk+jGxKgnIF4DEmZm5xJvMEcgrGDBPFoCgRAmbQlsCN9iMm1e/7957V/gxNET+RYm7x+tq+u7rBE3J0W/9+e77synyIozcQcQMJEgAHYVrMSNfEU6eW7/IAAKEdcvTykCoUOK1xqsi5u2Dyomd1vGnKfpY7k5vfWQmaIvq7zYwiWLdODifDo03wsvA6nwTQy9GJUilMOBacWgZn47+u0zIRY9H0zRSl7bv9iB2qDl/W6h4lsQQZnL/BCrmzLPuv/Yl8G+TJxPxaZJQzWLIuuV8MSZZIvNgM2C/aeI7xGAl8HSxJQrmYx2CtyJI2YGzXRnSSGLjcUAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=611.c9b8d76a.chunk.js.map