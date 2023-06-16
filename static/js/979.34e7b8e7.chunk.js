"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[979],{1838:(e,t,n)=>{n.d(t,{r:()=>o});var i=n(408),r=n(4530);const o=async()=>{try{return await new Promise((function(e,t){(0,i.jM)((0,i.iH)(r.Z,"questions"),(t=>{const n=Object.entries(t.val()).length;e(n)}))}))}catch(e){console.error(e)}}},9856:(e,t,n)=>{n.d(t,{Z:()=>o});n(2791);const i=n(7691).ZP.div`
  min-width: 287px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 5px;
`;var r=n(184);const o=e=>{let{children:t}=e;return(0,r.jsx)(i,{children:t})}},6038:(e,t,n)=>{n.d(t,{Z:()=>o});const i=n(7691).ZP.header`
  background-color: #252b58;
  width: 100%;
  margin: 0 0 34px 0;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 40px 0;
  }

  ${function(e){let{height:t}=e;if(t)return`\n      @media screen and (min-width: 1023.8px) {\n        height: ${t}px;\n      }\n            `}}}
`;var r=n(184);const o=e=>{let{children:t,height:n}=e;return(0,r.jsx)(i,{height:n,children:t})}},2626:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(1087);const r=n(7691).ZP.img`
  width: 86px;
  height: 42px;
  cursor: pointer;

  @media screen and (min-width: 767.8px) {
    width: ${e=>{let{location:t}=e;return"header"===t?"140px":"113px"}};
    height: ${e=>{let{location:t}=e;return"header"===t?"68px":"55px"}};
  }
`;var o=n(184);const s=e=>{let{location:t,style:s}=e;return(0,o.jsx)(i.rU,{to:"/",children:(0,o.jsx)(r,{src:n(6988),alt:"logo",location:t,style:s})})}},4530:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(2426),r=n(408);const o={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},s=(0,i.ZF)(o),a=(0,r.N8)(s)},3218:(e,t,n)=>{n.d(t,{k:()=>i});const i=e=>{const t=localStorage.getItem(e);if(null===t||void 0===t)throw new Error(`Value not found for key '${e}'`);try{return`${t}`}catch(n){throw n instanceof Error?new Error(`Invalid JSON data for key '${e}': ${n.message}`):new Error(`Unknown error caught: ${n}`)}}},7979:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ke});var i=n(2791),r=n(6038),o=n(2626),s=n(3201),a=n(408),l=n(3218),d=n(4530);var c=n(7691);const x=c.ZP.section`
  background-color: #3b4069;
  box-sizing: border-box;
  padding: 16px 8px 13px 16px;
  margin: 0;
`,p=(0,c.ZP)(x)`
  width: 100%;
  max-width: 288px;
  height: auto;

  @media screen and (min-width: 767.8px) {
    max-width: 235px;
  }

  @media screen and (min-width: 1023.8px) {
    max-width: 383px;
  }
`,h=c.ZP.article`
  padding: 0 0 12px 0;
  border-width: 0 0 1px 0;
  border-color: rgba(255, 255, 255, 0.1);
  border-style: solid;
`,u=c.ZP.article`
  padding: 9px 0 0 0;

  @media screen and (min-width: 1023.8px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,m=c.ZP.h3`
  color: #dfe4e9;
  font: var(--font-little-text-regular);
  margin: 0 8px 0 0;
  padding: 0;
`,f=c.ZP.h3`
  color: #ffffff;
  font: var(--font-little-text-bold);
  margin: 0;
  padding: 0;
`;var g=n(184);const w=()=>{const[e,t]=(0,i.useState)({name:"Alex",email:"Anton@gmail.com",loading:!0,error:!1}),n=!!e.loading&&(0,g.jsx)(s.Z,{width:60,height:60,color:"#fcfdff",margin:"0 auto"}),r=!e.loading&&!e.error&&(0,g.jsxs)(p,{children:[(0,g.jsxs)(h,{children:[(0,g.jsx)(m,{children:"\u0418\u043c\u044f"}),(0,g.jsx)(f,{children:e.name})]}),(0,g.jsx)(u,{children:(0,g.jsxs)("div",{children:[(0,g.jsx)(m,{as:"span",children:"Email"}),(0,g.jsx)(f,{as:"span",children:e.email})]})})]}),o=!!e.error&&"ERROR!!!",c=e=>{const{name:n,email:i}=e;t((e=>({...e,name:n,email:i,loading:!1})))},x=e=>{throw t((e=>({...e,loading:!1,error:!0}))),new Error(e)};return(0,i.useEffect)((()=>{new Promise((function(e,t){(0,a.jM)((0,a.iH)(d.Z,`users/user${(0,l.k)("idUser")}/userInfo`),(t=>{e(t.val())}))})).then(c).catch(x)}),[]),(0,g.jsxs)(g.Fragment,{children:[n,r," ",o]})},j=(0,c.ZP)(x)`
  position: relative;
  width: 288px;
  @media screen and (min-width: 767.8px) {
    max-width: 235px;
    min-height: 118px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`,A=c.ZP.h2`
  font: var(--font-title4);
  color: #ffffff;
  margin: 0;
  padding: 0;
  max-width: 205px;
`,b=c.ZP.img`
  width: 56px;
  height: 56px;
  position: absolute;
  top: 30%;
  right: 10px;

  @media screen and (min-width: 767.8px) {
    margin: 0 0 0 15px;
    position: relative;
  }
`,v=c.ZP.button`
  font: var(--font-little-text-regular);
  background-color: transparent;
  border: none;
  color: #ffffff;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,Z=()=>{const[e,t]=(0,i.useState)(window.innerWidth);return(0,i.useEffect)((()=>{const e=()=>{t(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,g.jsxs)(j,{children:[e<767&&(0,g.jsx)(A,{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442"}),(0,g.jsx)(v,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b"}),(0,g.jsx)(b,{src:n(272),alt:"icon pdf"})]})},P=c.ZP.div`
  gap: ${e=>{let{gap:t}=e;return t?t+"px":""}};

  ${function(e){let{widthColumnStart:t}=e;if(t)return"\n      display: flex;\n      flex-direction: column;\n      justigy-content: center;\n            "}}}

  ${function(e){let{widthColumnEnd:t}=e;if(t)return`\n      @media screen and (min-width: ${t}px) {\n        flex-direction: row;\n      }\n            `}}}

  ${function(e){let{widthFlexStart:t}=e;return t?`\n      position: relative;\n      @media screen and (min-width: ${t}px) {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        width: 100%;\n      }\n      `:"\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            "}}
`,y=e=>{let{style:t,children:n,widthFlexStart:i,widthColumnEnd:r,widthColumnStart:o,gap:s}=e;return(0,g.jsx)(P,{style:t,widthFlexStart:i,widthColumnStart:o,gap:s,widthColumnEnd:r,children:n})};var S=n(9856);const E=c.ZP.h1`
  font: var(--font-title5);
  margin: 0;
  padding: 0;
  color: white;
`,R=c.ZP.h2`
  font: var(--font-little-text-bold);
  margin: 0;
  padding: 0;
  color: white;
`,C=c.ZP.article`
  text-align: center;

  @media screen and (min-width: 767.8px) {
    text-align: left;
    margin: 0 15px 0 0;
  }
`,k=()=>(0,g.jsx)(r.Z,{height:235,children:(0,g.jsx)(S.Z,{children:(0,g.jsxs)(y,{widthColumnStart:320,widthColumnEnd:767.8,children:[(0,g.jsxs)(C,{children:[(0,g.jsx)(o.Z,{location:"header",style:{margin:"0 auto"}}),(0,g.jsx)(E,{children:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e!"}),(0,g.jsx)(R,{children:"\u0412\u044b \u043f\u0440\u043e\u0448\u043b\u0438 \u0442\u0435\u0441\u0442 :)"})]}),(0,g.jsxs)(y,{style:{margin:"16px 0 19px 0",maxWidth:642,width:"100%",boxSizing:"border-box"},widthColumnStart:320,widthColumnEnd:767.8,gap:24,children:[(0,g.jsx)(w,{}),(0,g.jsx)(Z,{})]})]})})});var Q=n(9922),O=n(7879);const F=c.ZP.article`
  cursor: pointer;
  position: relative;
`,B=c.ZP.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  cursor: pointer;
  border: 1px solid black;
`,H=c.ZP.span`
  color: black;
  font: var(--font-little-text-regular);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);
  }
`,D=c.ZP.ul`
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
`,I=c.ZP.img`
  // filter: invert(100);
  width: 12px;
  height: 12px;
  margin-left: 4px;
`,U=c.ZP.li`
  font: var(--font-text-regular);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,Y=e=>{let{hideListFilters:t,data:r,selected:o,isActive:s,style:a,themeHasChoosen:l,toggleListThemes:d,idWrapper:c}=e;const x=r.map(((e,t)=>(0,g.jsx)(U,{tabIndex:0,onClick:()=>l&&l(e),children:e},t+1)));return(0,i.useEffect)((()=>{const e=e=>{"LI"!==e.target.tagName&&t()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),(0,g.jsxs)(F,{style:a,id:c,children:[(0,g.jsxs)(B,{onClick:d,children:[(0,g.jsx)(H,{className:"dropdown-btn-text",children:o||r[0]}),(0,g.jsx)(I,{src:n(9744),alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0432\u043d\u0438\u0437"})]}),s&&(0,g.jsx)(D,{children:x})]})};Y.displayName="Dropdown";const N=Y,z=e=>{let{setFilterByRightAnswer:t}=e;const n=["\u0412\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b","\u0412\u0435\u0440\u043d\u043e","\u041d\u0435\u0432\u0435\u0440\u043d\u043e"],[r,o]=(0,i.useState)(n[0]),[s,a]=(0,i.useState)(!1),l=()=>{a((e=>!e))};return(0,g.jsx)(N,{toggleListThemes:l,data:n,selected:r,isActive:s,themeHasChoosen:e=>(e=>{l(),o(e),t(e)})(e),hideListFilters:()=>{a(!1)},idWrapper:"wrapperTypeAnswer"})},V=e=>{let{themesNames:t,setFilterByTheme:n}=e;const[r,o]=(0,i.useState)(t[0]),[s,a]=(0,i.useState)(!1),l=()=>{a((e=>!e))};return(0,g.jsx)(N,{toggleListThemes:l,data:t,selected:r,isActive:s,themeHasChoosen:e=>(e=>{l(),o(e),n(e)})(e),style:{margin:"0 25px 0 0"},hideListFilters:()=>{a(!1)},idWrapper:"wrapperThemes"})},W=async()=>await new Promise((function(e,t){(0,a.jM)((0,a.iH)(d.Z,"answers"),(n=>{n.val()?e(n.val()):t()}))})),T=async()=>await new Promise((function(e,t){(0,a.jM)((0,a.iH)(d.Z,"questions"),(n=>{n.val()?e(n.val()):t()}))})),J=e=>{const t=e.match(/\d+/);if(null!==t)return parseInt(t[0])},K=(e,t)=>{const n=Object.values(e);switch(t){case"\u0412\u0435\u0440\u043d\u043e":return n.filter((e=>{var t;return 1===(null===e||void 0===e||null===(t=e.userAnswer)||void 0===t?void 0:t.point)}));case"\u041d\u0435\u0432\u0435\u0440\u043d\u043e":return n.filter((e=>{var t;return 0===(null===e||void 0===e||null===(t=e.userAnswer)||void 0===t?void 0:t.point)}));default:return n}},q=e=>e?(e=>{const t=new Set(["\u0412\u0441\u0435 \u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0438"]);return Object.values(e).map((e=>e.theme)).forEach((e=>t.add(e))),Array.from(t)})(e):["\u0412\u0441\u0435 \u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0438"],L=(e,t)=>{const n=Object.values(e),i=q(e).filter(((e,t)=>t>0));for(let r=0;r<i.length;r++)if(t===i[r])return n.filter((e=>e.theme===i[r]));return n},X=e=>{const t=q(e).filter(((e,t)=>t>0)),n=Object.values(e).map((e=>({theme:e.theme,point:e.userAnswer.point}))),i={};for(const r of t)for(const e in n)r===n[e].theme&&(i[r]||(i[r]={totalPoints:0,totalQuantityQuestions:0}),i[r].totalPoints+=n[e].point,i[r].totalQuantityQuestions+=1);return i},G=c.ZP.li`
  box-sizing: border-box;
  list-style-type: none;
  font: var(--font-little-text-regular);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`,M=c.ZP.li`
  box-sizing: border-box;
  word-wrap: break-word;
  list-style-type: none;
  font: var(--font-little-text-regular);
  padding: 0 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`,$=c.ZP.ul`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 8px 0 17px 0;
  position: relative;
`,_=c.ZP.summary`
  box-sizing: border-box;
  width: 100%;
  background-color: var(--color-title-background);
  font: var(--font-little-text-regular);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin: 0 0 10px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title4);
    justify-content: flex-start;
    padding: 10px 0 10px 40px;
  }
`,ee=c.ZP.span`
  font: var(--font-little-text-bold);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);
  }
`,te=c.ZP.section`
  margin: 24px 0 18px 0;
  display: flex;
  justify-content: flex-start;
  align-items: start;
`,ne=c.ZP.span`
  position: absolute;
  color: ${e=>{let{isRight:t}=e;return t?"green":"red"}};
  top: 5px;
  right: 0;

  font: var(--font-little-text-bold);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);
  }
`,ie=e=>{let{setPointsByTheme:t}=e;const{t:n}=(0,O.$)(),[r,o]=(0,i.useState)(null),[c,x]=(0,i.useState)(!1),[p,h]=(0,i.useState)(!0),[u,m]=(0,i.useState)(""),[f,w]=(0,i.useState)(""),j=!!p&&(0,g.jsx)(s.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}),A=!!c&&"ERORR!",b=p||c?null:(()=>{if(r){const e=K(L(r,u),f);return(0,g.jsx)($,{children:Object.entries(e).map(((e,t)=>{const{descr:i,img:r,id:o,name:s,rightAnswer:a,theme:l,answerOptions:d,userAnswer:c}=e[1],x=!!c.point,p={borderRadius:10,border:`1px solid ${x?"green":"red"}`};return(0,g.jsx)(M,{style:p,children:(0,g.jsxs)($,{children:[(0,g.jsx)(ne,{isRight:x,children:x?"\u2714":"\u2718"}),(0,g.jsxs)(G,{children:[(0,g.jsx)(ee,{children:`\u0412\u043e\u043f\u0440\u043e\u0441 \u2116 ${o}: `}),`${s} (${l})`]}),"No"!==r&&(0,g.jsx)(G,{children:(0,g.jsx)("img",{style:{maxWidth:"100%"},src:r,alt:"code"})}),(0,g.jsxs)(G,{children:[(0,g.jsx)(ee,{children:`${n("\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b_\u043e\u0442\u0432\u0435\u0442\u043e\u0432")}: `}),Object.entries(d).map((e=>{let[t,n]=e;return`${t}: ${n}`})).join(", ")]}),(0,g.jsxs)(G,{children:[(0,g.jsx)(ee,{children:`${n("\u0412\u0430\u0448_\u043e\u0442\u0432\u0435\u0442")}: `})," ",c.userAnswer]}),!x&&(0,g.jsxs)(G,{children:[(0,g.jsx)(ee,{children:`${n("\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439_\u043e\u0442\u0432\u0435\u0442")}: `}),a]}),(0,g.jsxs)(G,{children:[(0,g.jsxs)(ee,{children:[`${n("\u041e\u0431\u044a\u044f\u0441\u043d\u0435\u043d\u0438\u0435")}: `," "]}),i]})]})},t+1)}))})}})(),v=e=>Object.fromEntries(Object.entries(e).map((e=>{let[t,n]=e;return[J(t),{point:n.point,userAnswer:n.userAnswer}]}))),Z=e=>{var t;const n=(null===(t=document.querySelector("html"))||void 0===t?void 0:t.getAttribute("lang"))||"ru";return Object.fromEntries(Object.entries(e).map((e=>{let[t,i]=e;return[J(t),i[n]]})))},P=e=>{throw x((e=>!e)),new Error(e)};return(0,i.useEffect)((()=>{Promise.all([new Promise((function(e,t){(0,a.jM)((0,a.iH)(d.Z,`users/user${(0,l.k)("idUser")}/answers`),(t=>{e(t.val())}))})),W(),T()]).then((e=>(e=>{const[t,n,i]=e,r={userAnswers:v(t),answerOptions:Z(n),infoQuestions:Z(i)},s={};for(const o in r.infoQuestions)s[o]={...r.infoQuestions[o],userAnswer:r.userAnswers[o],answerOptions:r.answerOptions[o]};o(s),h(!1)})(e))).catch(P)}),[]),(0,i.useEffect)((()=>{r&&t(X(r))}),[r]),(0,g.jsx)(S.Z,{children:(0,g.jsxs)("details",{open:!0,children:[(0,g.jsx)(_,{children:n("\u041e\u0442\u0432\u0435\u0442\u044b")}),(0,g.jsxs)(te,{children:[(0,g.jsx)(V,{themesNames:q(r),setFilterByTheme:e=>{m(e)}}),(0,g.jsx)(z,{setFilterByRightAnswer:e=>{w(e)}})]}),j," ",A," ",b]})})},re=c.ZP.article`
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 8px 9px 8px;
  max-height: 520px;

  &:not(list-child) {
    margin: 0 0 24px 0;
  }

  @media screen and (min-width: 767.8px) {
    &:not(list-child) {
      margin: 0;
    }
  }
`,oe=c.ZP.article`
  font: var(--font-little-text-regular);
  color: #29313c;
  text-align: justify;
  margin: 12px 0 0 0;

  @media screen and (min-width: 767.8px) {
    margin: 12px 0 42px 0;
  }

  @media screen and (min-width: 1023.8px) {
    margin: 12px 0 33px 0;
  }

  @media screen and (min-width: 1265.8px) {
    margin: 12px 0 15px 0;
  }
`,se=c.ZP.div`
  position: relative;
  width: 265px;
  height: 265px;

  @media screen and (min-width: 767.8px) {
    // width: 200px;
    // height: 200px;
  }
`,ae=c.ZP.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -25%);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 39px;
  line-height: 60px;
  color: #6768d7;
`;var le=n(1838),de=n(5967),ce=n(3623);de.kL.register(de.qi,de.u,de.De,de.f$);const xe=e=>{let{dataPieChart:t}=e;const n={labels:["\u0412\u0435\u0440\u043d\u043e","\u041d\u0435\u0432\u0435\u0440\u043d\u043e"],datasets:[{label:"%",data:t,backgroundColor:["green","red"],borderColor:["green","red"],cutout:"75%",borderWidth:1}]};return(0,g.jsx)(ce.$I,{data:n})},pe=e=>{let{rightAnswers:t}=e;const[n,r]=(0,i.useState)(0),o=+(100*t/n).toFixed(1),a=+(100-o).toFixed(1),[l,d]=(0,i.useState)(!0),c=l?(0,g.jsx)(s.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}):null,x=l?null:(0,g.jsxs)(re,{children:[(0,g.jsxs)(se,{children:[(0,g.jsx)(xe,{dataPieChart:[o,a]}),(0,g.jsx)(ae,{children:`${o} %`})]}),(0,g.jsx)(oe,{children:"\u0413\u0440\u0430\u0444\u0438\u043a \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u043d\u0442 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0434\u0430\u043d\u044b \u0432\u0435\u0440\u043d\u044b\u0435 \u0438 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b"})]});return(0,i.useEffect)((()=>{(0,le.r)().then((e=>{e&&(r(e),d(!1))}))}),[]),(0,g.jsxs)(g.Fragment,{children:[c," ",x]})},he=(c.ZP.section`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px 3px 20px;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    height: 1px;
    color: #dfe4e9;
    background-color: #dfe4e9;
    width: 256px;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    left: 50%;
  }

  @media screen and (min-width: 767.8px) {
    flex-direction: row;
    justify-content: space-between;
    height: 185px;

    &:after {
      transform: rotate(90deg);
      width: 102px;
      left: 43%;
    }
  }

  @media screen and (min-width: 1439.8px) {
    &:after {
      left: 45.5%;
    }
  }
`,c.ZP.article`
  text-align: center;
  padding: 16px 0;

  @media screen and (min-width: 767.8px) {
    flex-basis: 50%;
  }
`),ue=c.ZP.h3`
  color: #29313c;
  font: var(--font-title5);
  margin: 0;
  padding: 0;
`,me=c.ZP.h2`
  color: #6768d7;
  font: var(--font-title2);
  margin: 0;
  padding: 0;
`,fe=e=>{let{setRightAnswers:t}=e;const[n,r]=(0,i.useState)({error:!1,loading:!0,points:!1,totalQuestionNumbers:!1}),o=e=>e?Object.values(e).reduce(((e,t)=>e+t),0):0,c=e=>{const n={points:!1,totalQuestionNumbers:!1},[i,s]=e;n.points=(e=>{if(e)return Object.fromEntries(Object.entries({...e}).map((e=>{let[t,n]=e;return[t,n.point]})));return null})(s.value),n.totalQuestionNumbers=i.value?i.value:!1!==i.value&&null,r((function(e){const{totalQuestionNumbers:t,points:i}=n;return{...e,totalQuestionNumbers:t,points:i,loading:!1}})),t(o(n.points));for(const t in n)if(null===n[t])throw new Error(`The value of ${t} is ${n[t]} in ${n}`)},x=e=>{throw r((e=>({...e,loading:!1,error:!0}))),new Error(e)};(0,i.useEffect)((()=>{Promise.allSettled([(0,le.r)(),new Promise((function(e,t){(0,a.jM)((0,a.iH)(d.Z,`users/user${(0,l.k)("idUser")}/answers`),(t=>{e(t.val())}))}))]).then(c).catch(x)}),[]);const p=!!n.loading&&(0,g.jsx)(s.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}),h=!!n.error&&"ERROR!",u=!n.loading&&!n.error&&(0,g.jsxs)(he,{children:[(0,g.jsx)(ue,{children:"\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"}),(0,g.jsx)(me,{children:o(n.points)+" \u0438\u0437 "+n.totalQuestionNumbers})]});return(0,g.jsxs)(g.Fragment,{children:[p," ",h," ",u]})},ge=c.ZP.article`
  text-align: center;
  padding: 16px 0;

  @media screen and (min-width: 767.8px) {
    flex-basis: 50%;
  }
`,we=c.ZP.h3`
  color: #29313c;
  font: var(--font-title5);
  margin: 0;
  padding: 0;
`,je=c.ZP.h2`
  color: #6768d7;
  font: var(--font-title2);
  margin: 0;
  padding: 0;
`,Ae=e=>{let t="";if("number"===typeof e){if(e%60===0)t=e/60+" \u043c\u0438\u043d";else if(e<60)t=`${e} \u0441\u0435\u043a`;else if(e>60){const n=Math.floor(e/60);t=`${n} \u043c\u0438\u043d ${e-60*n} \u0441\u0435\u043a`}return t}return"boolean"!==typeof e&&null},be=()=>{const[e,t]=(0,i.useState)({loading:!0,error:!1,time:0}),n=e=>{const{time:n}=e;t((e=>({...e,loading:!1,time:n})))},r=!!e.loading&&(0,g.jsx)(s.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}),o=!!e.error&&"ERROR!",c=!e.loading&&!e.error&&(0,g.jsxs)(ge,{children:[(0,g.jsx)(we,{children:"\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043d\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f"}),(0,g.jsx)(je,{children:Ae(e.time)})]}),x=e=>{throw t((e=>({...e,loading:!1,error:!0}))),new Error(e)};return(0,i.useEffect)((()=>{new Promise((function(e,t){(0,a.jM)((0,a.iH)(d.Z,`users/user${(0,l.k)("idUser")}/userInfo`),(t=>{e(t.val())}))})).then(n).catch(x)}),[]),(0,g.jsxs)(g.Fragment,{children:[r," ",o," ",c]})};de.kL.register(de.uw,de.f$,de.ZL,de.Dx,de.u,de.De);const ve=e=>{let{pointsByTheme:t}=e;const[n,r]=(0,i.useState)(!0),o=["black","red","blue"],a={labels:[""],datasets:t?Object.entries(t).map(((e,t)=>{const n=+(e[1].totalPoints/e[1].totalQuantityQuestions*100).toFixed();return{label:`${n} % - ${e[0].length>25?`${e[0].slice(0,25)}...`:e[0]}`,data:[n],backgroundColor:o[t]}})):[]},l=n?(0,g.jsx)(s.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}):null,d=n?null:(0,g.jsx)(ce.$Q,{options:{maintainAspectRatio:!1,plugins:{legend:{position:"bottom",align:"start"},title:{display:!1}},scales:{y:{ticks:{stepSize:20}}}},data:a});return(0,i.useEffect)((()=>{t&&r(!1)}),[t]),(0,g.jsxs)(g.Fragment,{children:[d," ",l]})},Ze=c.ZP.article`
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 575px;
  width: 100%;
  height: 100%;
  padding: 16px 8px 9px 8px;

  &:not(list-child) {
    margin: 0 0 24px 0;
  }

  @media screen and (min-width: 767.8px) {
    max-width: 50%;

    &:not(list-child) {
      margin: 0;
    }
  }
  @media screen and (min-width: 1023.8px) {
    padding: 25px 8px 15px 8px;
  }
`,Pe=c.ZP.article`
  font: var(--font-little-text-regular);
  color: #29313c;
  text-align: justify;
  margin: 12px 0 0 0;
`,ye=c.ZP.span`
  position: relative;
  width: 100%;
  height: 220px;
  max-width: 525px;
`,Se=e=>{let{pointsByTheme:t}=e;return(0,g.jsxs)(Ze,{children:[(0,g.jsx)(ye,{children:(0,g.jsx)(ve,{pointsByTheme:t})}),(0,g.jsx)(Pe,{children:"\u0413\u0440\u0430\u0444\u0438\u043a \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u043d\u0442 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043f\u043e \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u0440\u0430\u0437\u0434\u0435\u043b\u0443. \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0432\u0435\u0440\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043a \u043e\u0431\u0449\u0435\u043c\u0443 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0438. \u0415\u0441\u043b\u0438 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \u043c\u0435\u043d\u0435\u0435 50 %, \u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0437\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e."})]})},Ee=c.ZP.div`
  @media screen and (min-width: 1023.8px) {
    transform: translateY(-100px);
  }
`,Re=c.ZP.section`
  box-sizing: border-box;
  margin: 18px 0 24px 0;

  @media screen and (min-width: 767.8px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
  }
`,Ce=c.ZP.section`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px 3px 20px;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    height: 1px;
    color: #dfe4e9;
    background-color: #dfe4e9;
    width: 256px;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    left: 50%;
  }

  @media screen and (min-width: 767.8px) {
    flex-direction: row;
    justify-content: space-between;
    height: 185px;

    &:after {
      transform: rotate(90deg);
      width: 102px;
      left: 43%;
    }
  }

  @media screen and (min-width: 1439.8px) {
    &:after {
      left: 45.5%;
    }
  }
`,ke=()=>{const[e,t]=(0,i.useState)(0),[n,r]=(0,i.useState)(null),o=(0,i.useCallback)((e=>{t(e)}),[]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(k,{}),(0,g.jsx)(Q.P,{children:(0,g.jsxs)(Ee,{children:[(0,g.jsxs)(S.Z,{children:[(0,g.jsxs)(Ce,{children:[(0,g.jsx)(fe,{setRightAnswers:o}),(0,g.jsx)(be,{})]}),(0,g.jsxs)(Re,{children:[(0,g.jsx)(Se,{pointsByTheme:n}),(0,g.jsx)(pe,{rightAnswers:e})]})]}),(0,g.jsx)(ie,{setPointsByTheme:r})]})})]})}},9922:(e,t,n)=>{n.d(t,{P:()=>i});const i=n(7691).ZP.main`
  flex: 1 1 auto;
`},9744:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABwSURBVHgB7Y2xDYAwDAQfZRFvBiPABIzACFkFOjrEBIxASwdfpKBIiIlS+qRTpMi6BwzDcIn/jnp60R3fCN1oQ1co6ekdbDPxI9xN+MmYGZFX3KOQ1IjUiKdGpGY8NnLWjsdG1HEHPUt4ZzrAMAw1Dx0pJGSXjajkAAAAAElFTkSuQmCC"},6988:(e,t,n)=>{e.exports=n.p+"static/media/logoQuiz.fe60373c0b47051a6b64.png"},272:e=>{e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=979.34e7b8e7.chunk.js.map