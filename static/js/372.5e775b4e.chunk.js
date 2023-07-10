"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[372],{5842:(e,t,n)=>{n.d(t,{Z:()=>r});n(2791);const r=n.p+"static/media/chevrondown.155409e0c48ea57ccaa9ebaf346774a8.svg"},124:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(9388),i=n(7691);const s=i.ZP.span`
  color: red;
  display: inline-block;
  margin: 0 5px 0 0 ;
  text-transform: uppercase;
  font: var(--font-bold);
`,o=i.ZP.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;var a=n(184);const l=()=>(0,a.jsxs)(o,{children:[(0,a.jsx)(s,{children:"Error!"}),(0,a.jsx)(r.Z,{color:"error",fontSize:"medium"})]})},5157:(e,t,n)=>{n.d(t,{z:()=>s});var r=n(408),i=n(4530);const s=async e=>await new Promise((function(t,n){(0,r.jM)((0,r.iH)(i.Z,e),(r=>{const i=r.val();if(i)return t(i);n(new Error(`Value (${i}) from Firebase Database not found. Check url (${e})`))}))}))},1838:(e,t,n)=>{n.d(t,{r:()=>i});var r=n(5157);const i=async e=>{try{const t=await(0,r.z)(e);return(e=>Object.entries(e).length)(t)}catch(t){throw console.error(t),t}}},9856:(e,t,n)=>{n.d(t,{Z:()=>s});const r=n(7691).ZP.div`
max-width: 85%;
min-width: 287px;
margin: 0 auto;
padding: 0 5px;
@media screen and (min-width: 1299.8px) {
  max-width: 1190px;
}
`;var i=n(184);const s=e=>{let{children:t}=e;return(0,i.jsx)(r,{children:t})}},4530:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(2426),i=n(408);const s={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},o=(0,r.ZF)(s),a=(0,i.N8)(o)},4372:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var r=n(2791),i=n(9922),s=n(7879),o=n(9856),a=n(5842),l=n(7691);const d=l.ZP.article`
  cursor: pointer;
  position: relative;
`,c=l.ZP.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  cursor: pointer;
  border: 1px solid black;
`,x=l.ZP.span`
  color: black;
  font: var(--font-little-text-regular);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);
  }
`,u=l.ZP.ul`
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
`,p=l.ZP.img`
  filter: invert(100);
  margin-left: 4px;
`,f=l.ZP.li`
  font: var(--font-text-regular);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;var h=n(184);const m=e=>{let{hideListFilters:t,data:n,selected:i,isActive:s,style:o,themeHasChoosen:l,toggleListThemes:m,idWrapper:g}=e;const w=n.map(((e,t)=>(0,h.jsx)(f,{tabIndex:0,onClick:()=>l&&l(e),children:e},t+1)));return(0,r.useEffect)((()=>{const e=e=>{"LI"!==e.target.tagName&&t()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),(0,h.jsxs)(d,{style:o,id:g,children:[(0,h.jsxs)(c,{onClick:m,children:[(0,h.jsx)(x,{className:"dropdown-btn-text",children:i||n[0]}),(0,h.jsx)(p,{src:a.Z,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0432\u043d\u0438\u0437"})]}),s&&(0,h.jsx)(u,{children:w})]})};m.displayName="Dropdown";const g=m,w=e=>{let{setFilterByRightAnswer:t}=e;const n=["\u0412\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b","\u0412\u0435\u0440\u043d\u043e","\u041d\u0435\u0432\u0435\u0440\u043d\u043e"],[i,s]=(0,r.useState)(n[0]),[o,a]=(0,r.useState)(!1),l=()=>{a((e=>!e))};return(0,h.jsx)(g,{toggleListThemes:l,data:n,selected:i,isActive:o,themeHasChoosen:e=>(e=>{l(),s(e),t(e)})(e),hideListFilters:()=>{a(!1)},idWrapper:"wrapperTypeAnswer"})},b=e=>{let{themesNames:t,setFilterByTheme:n}=e;const[i,s]=(0,r.useState)(t[0]),[o,a]=(0,r.useState)(!1),l=()=>{a((e=>!e))};return(0,h.jsx)(g,{toggleListThemes:l,data:t,selected:i,isActive:o,themeHasChoosen:e=>(e=>{l(),s(e),n(e)})(e),style:{margin:"0 25px 0 0"},hideListFilters:()=>{a(!1)},idWrapper:"wrapperThemes"})};var j=n(408),v=n(4530);const y=async()=>await new Promise((function(e,t){(0,j.jM)((0,j.iH)(v.Z,"answers"),(n=>{n.val()?e(n.val()):t()}))})),Z=e=>new Promise((function(t,n){(0,j.jM)((0,j.iH)(v.Z,`users/user${e}/answers/`),(e=>{t(e.val())}))})),P=async()=>await new Promise((function(e,t){(0,j.jM)((0,j.iH)(v.Z,"questions"),(n=>{n.val()?e(n.val()):t()}))}));var $=n(3201);const S=e=>{const t=e.match(/\d+/);if(null!==t)return parseInt(t[0])};var k=n(3589);const A=(e,t)=>{const n=Object.values(e);switch(t){case"\u0412\u0435\u0440\u043d\u043e":return n.filter((e=>{var t;return 1===(null===e||void 0===e||null===(t=e.userAnswer)||void 0===t?void 0:t.point)}));case"\u041d\u0435\u0432\u0435\u0440\u043d\u043e":return n.filter((e=>{var t;return 0===(null===e||void 0===e||null===(t=e.userAnswer)||void 0===t?void 0:t.point)}));default:return n}},E=e=>e?(e=>{const t=new Set(["\u0412\u0441\u0435 \u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0438"]);return Object.values(e).map((e=>e.theme)).forEach((e=>t.add(e))),Array.from(t)})(e):["\u0412\u0441\u0435 \u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0438"],O=(e,t)=>{const n=Object.values(e),r=E(e).filter(((e,t)=>t>0));for(let i=0;i<r.length;i++)if(t===r[i])return n.filter((e=>e.theme===r[i]));return n},T=e=>{const t=E(e).filter(((e,t)=>t>0)),n=Object.values(e).map((e=>({theme:e.theme,point:e.userAnswer.point}))),r={};for(const i of t)for(const e in n)i===n[e].theme&&(r[i]||(r[i]={totalPoints:0,totalQuantityQuestions:0}),r[i].totalPoints+=n[e].point,r[i].totalQuantityQuestions+=1);return r};var z=n(124);const C=l.ZP.li`
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
`,_=l.ZP.li`
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
`,F=l.ZP.ul`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 8px 0 17px 0;
  position: relative;
`,L=l.ZP.summary`
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
`,R=l.ZP.span`
  font: var(--font-little-text-bold);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);
  }
`,Q=l.ZP.section`
  margin: 24px 0 18px 0;
  display: flex;
  justify-content: flex-start;
  align-items: start;
`,N=l.ZP.span`
  position: absolute;
  color: ${e=>{let{isRight:t}=e;return t?"green":"red"}};
  top: 5px;
  right: 0;

  font: var(--font-little-text-bold);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);
  }
`,q=e=>{let{setPointsByTheme:t}=e;const[n]=(0,r.useContext)(k.Sc),[i]=(0,r.useContext)(k.iT),{t:a}=(0,s.$)(),[l,d]=(0,r.useState)(null),[c,x]=(0,r.useState)(!1),[u,p]=(0,r.useState)(!0),[f,m]=(0,r.useState)(""),[g,j]=(0,r.useState)(""),v=!!u&&(0,h.jsx)($.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}),q=!!c&&(0,h.jsx)(z.Z,{}),H=u||c?null:(()=>{if(l){const e=A(O(l,f),g);return(0,h.jsx)(F,{children:Object.entries(e).map(((e,t)=>{const{descr:n,img:r,id:i,name:s,rightAnswer:o,theme:l,answerOptions:d,userAnswer:c}=e[1],x=!!c.point,u={borderRadius:10,border:`1px solid ${x?"green":"red"}`};return(0,h.jsx)(_,{style:u,children:(0,h.jsxs)(F,{children:[(0,h.jsx)(N,{isRight:x,children:x?"\u2714":"\u2718"}),(0,h.jsxs)(C,{children:[(0,h.jsx)(R,{children:`\u0412\u043e\u043f\u0440\u043e\u0441 \u2116 ${i}: `}),`${s} (${l})`]}),"No"!==r&&(0,h.jsx)(C,{children:(0,h.jsx)("img",{style:{maxWidth:"100%"},src:r,alt:"code"})}),(0,h.jsxs)(C,{children:[(0,h.jsx)(R,{children:`${a("\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b_\u043e\u0442\u0432\u0435\u0442\u043e\u0432")}: `}),Object.entries(d).map((e=>{let[t,n]=e;return`${t}: ${n}`})).join(", ")]}),(0,h.jsxs)(C,{children:[(0,h.jsx)(R,{children:`${a("\u0412\u0430\u0448_\u043e\u0442\u0432\u0435\u0442")}: `})," ",c.userAnswer]}),!x&&(0,h.jsxs)(C,{children:[(0,h.jsx)(R,{children:`${a("\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439_\u043e\u0442\u0432\u0435\u0442")}: `}),o]}),(0,h.jsxs)(C,{children:[(0,h.jsxs)(R,{children:[`${a("\u041e\u0431\u044a\u044f\u0441\u043d\u0435\u043d\u0438\u0435")}: `," "]}),n]})]})},t+1)}))})}})(),I=e=>Object.fromEntries(Object.entries(e).map((e=>{let[t,n]=e;return[S(t),{point:n.point,userAnswer:n.userAnswer}]}))),B=(e,t)=>Object.fromEntries(Object.entries(e).map((e=>{let[n,r]=e;return[S(n),r[`${t}`]]}))),D=e=>{throw x(!0),p(!1),new Error(e)};return(0,r.useEffect)((()=>{Promise.all([Z(i),y(),P()]).then((e=>(e=>{const[t,r,i]=e,s={userAnswers:I(t),answerOptions:B(r,n),infoQuestions:B(i,n)},o={};for(const n in s.infoQuestions)o[n]={...s.infoQuestions[n],userAnswer:s.userAnswers[n],answerOptions:s.answerOptions[n]};d(o),p(!1)})(e))).catch(D)}),[n]),(0,r.useEffect)((()=>{l&&t(T(l))}),[l]),(0,h.jsx)(o.Z,{children:(0,h.jsxs)("details",{open:!0,children:[(0,h.jsx)(L,{children:a("\u041e\u0442\u0432\u0435\u0442\u044b")}),(0,h.jsxs)(Q,{children:[(0,h.jsx)(b,{themesNames:E(l),setFilterByTheme:e=>{m(e)}}),(0,h.jsx)(w,{setFilterByRightAnswer:e=>{j(e)}})]}),v," ",q," ",H]})})};var H=n(5967),I=n(3623),B=n(1838);const D=l.ZP.article`
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
`,W=l.ZP.article`
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
`,M=l.ZP.div`
  position: relative;
  width: 265px;
  height: 265px;

  @media screen and (min-width: 767.8px) {
    // width: 200px;
    // height: 200px;
  }
`,K=l.ZP.span`
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
`;H.kL.register(H.qi,H.u,H.De,H.f$);const U=e=>{let{rightAnswers:t}=e;const{t:n}=(0,s.$)(),[i,o]=(0,r.useState)(0),[a,l]=(0,r.useState)(!0),d=+(100*t/i).toFixed(1),c=+(100-d).toFixed(1),x={labels:["\u0412\u0435\u0440\u043d\u043e","\u041d\u0435\u0432\u0435\u0440\u043d\u043e"],datasets:[{label:"%",data:[d,c],backgroundColor:["green","red"],borderColor:["green","red"],cutout:"75%",borderWidth:1}]},u=a?(0,h.jsx)($.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}):null,p=a?null:(0,h.jsxs)(D,{children:[(0,h.jsxs)(M,{children:[(0,h.jsx)(I.$I,{data:x}),(0,h.jsx)(K,{children:`${d} %`})]}),(0,h.jsx)(W,{children:n("\u041f\u043e\u0434\u043f\u0438\u0441\u044c_\u043a\u0440\u0443\u0433\u043e\u0432\u0430\u044f_\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430")})]});return(0,r.useEffect)((()=>{(async()=>{const e=await(0,B.r)("questions");o(e),l(!1)})()}),[]),(0,h.jsxs)(h.Fragment,{children:[u," ",p]})};var Y=n(5157);const V=async e=>{try{return await(0,Y.z)(e)}catch(t){throw console.error(t),t}},X=e=>e?Object.values(e).reduce(((e,t)=>e+t),0):0,G=(l.ZP.section`
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
`,l.ZP.article`
  text-align: center;
  padding: 16px 0;

  @media screen and (min-width: 767.8px) {
    flex-basis: 50%;
  }
`),J=l.ZP.h3`
  color: #29313c;
  font: var(--font-title5);
  margin: 0;
  padding: 0;
`,ee=l.ZP.h2`
  color: #6768d7;
  font: var(--font-title2);
  margin: 0;
  padding: 0;
`,te=e=>{let{setRightAnswers:t}=e;const{t:n}=(0,s.$)(),[i]=(0,r.useContext)(k.iT),[o,a]=(0,r.useState)(!0),[l,d]=(0,r.useState)(!1),[c,x]=(0,r.useState)(0),[u,p]=(0,r.useState)(0),f=e=>{const n={points:null,totalQuestionNumbers:0},[r,i]=e;n.points=(e=>{if(e)return Object.fromEntries(Object.entries({...e}).map((e=>{let[t,n]=e;return[t,n.point]})));return null})(i.value),n.totalQuestionNumbers=r.value?r.value:!1!==r.value&&null,a(!1),p(X(n.points)),x(n.totalQuestionNumbers),t(X(n.points));for(const t in n)if(null===n[t])throw new Error(`The value of ${t} is ${n[t]} in ${n}`)},m=e=>{throw d(!0),a(!1),new Error(e)};(0,r.useEffect)((()=>{const e=`users/user${i}/answers`;Promise.allSettled([(0,B.r)("questions"),V(e)]).then(f).catch(m)}),[]);const g=!!o&&(0,h.jsx)($.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}),w=!!l&&(0,h.jsx)(z.Z,{}),b=!o&&!l&&(0,h.jsxs)(G,{children:[(0,h.jsx)(J,{children:n("\u0412\u0430\u0448_\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442")}),(0,h.jsx)(ee,{children:`${u} ${n("\u0438\u0437")} ${c}`})]});return(0,h.jsxs)(h.Fragment,{children:[g," ",w," ",b]})},ne=l.ZP.article`
  text-align: center;
  padding: 16px 0;

  @media screen and (min-width: 767.8px) {
    flex-basis: 50%;
  }
`,re=l.ZP.h3`
  color: #29313c;
  font: var(--font-title5);
  margin: 0;
  padding: 0;
`,ie=l.ZP.h2`
  color: #6768d7;
  font: var(--font-title2);
  margin: 0;
  padding: 0;
`,se=(e,t,n)=>{let r="";if("number"===typeof e){if(e%60===0)r=`${e/60} ${t}`;else if(e<60)r=`${e}  ${t}`;else if(e>60){const i=Math.floor(e/60);r=`${i}  ${n} ${e-60*i}  ${t}`}return r}return"boolean"!==typeof e&&null},oe=()=>{const{t:e}=(0,s.$)(),[t]=(0,r.useContext)(k.iT),[n,i]=(0,r.useState)({loading:!0,error:!1,time:0}),[o,a]=(0,r.useState)(!0),[l,d]=(0,r.useState)(0),[c,x]=(0,r.useState)(!1),u=e=>{const{time:t}=e;a(!1),d(t)},p=!!o&&(0,h.jsx)($.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}),f=!!c&&(0,h.jsx)(z.Z,{}),m=!o&&!c&&(0,h.jsxs)(ne,{children:[(0,h.jsx)(re,{children:e("\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043d\u043d\u043e\u0435_\u0432\u0440\u0435\u043c\u044f")}),(0,h.jsx)(ie,{children:se(l,e("\u0441\u0435\u043a"),e("\u043c\u0438\u043d"))})]}),g=e=>{throw a(!1),x(!0),new Error(e)};return(0,r.useEffect)((()=>{(e=>new Promise((function(t,n){(0,j.jM)((0,j.iH)(v.Z,`users/user${e}/userInfo`),(e=>{t(e.val())}))})))(t).then(u).catch(g)}),[]),(0,h.jsxs)(h.Fragment,{children:[p," ",f," ",m]})},ae=l.ZP.article`
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
`,le=l.ZP.article`
  font: var(--font-little-text-regular);
  color: #29313c;
  text-align: justify;
  margin: 12px 0 0 0;
`,de=l.ZP.div`
  position: relative;
  width: 100%;
  height: 220px;
  max-width: 525px;
`;H.kL.register(H.uw,H.f$,H.ZL,H.Dx,H.u,H.De);const ce=e=>{let{pointsByTheme:t}=e;const[n,i]=(0,r.useState)(!0),[o,a]=(0,r.useState)(!1),l=["black","red","blue"],{t:d}=(0,s.$)(),c={maintainAspectRatio:!1,plugins:{legend:{position:"bottom",align:"center"},title:{display:!1}},scales:{y:{max:100,ticks:{stepSize:25}}}},x={labels:[""],datasets:t?Object.entries(t).map(((e,t)=>{const n=+(e[1].totalPoints/e[1].totalQuantityQuestions*100).toFixed();return{label:`${n} % - ${e[0].length>25?`${e[0].slice(0,25)}...`:e[0]}`,data:[n],backgroundColor:l[t]}})):[]},u=n?(0,h.jsx)($.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}):null,p=n||o?null:(0,h.jsxs)(ae,{children:[(0,h.jsx)(de,{children:(0,h.jsx)(I.$Q,{options:c,data:x})}),(0,h.jsx)(le,{children:d("\u041f\u043e\u0434\u043f\u0438\u0441\u044c_\u0441\u0442\u043e\u043b\u0431\u0447\u0430\u0442\u0430\u044f_\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430")})]}),f=o?(0,h.jsx)(z.Z,{}):null;return(0,r.useEffect)((()=>{t&&i(!1)}),[t]),(0,h.jsxs)(h.Fragment,{children:[p," ",u," ",f]})},xe=(0,r.memo)(ce),ue=l.ZP.section`
  box-sizing: border-box;
  margin: 18px 0 24px 0;

  @media screen and (min-width: 767.8px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
  }
`,pe=l.ZP.section`
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
`,fe=()=>{const[e,t]=(0,r.useState)(0),[n,s]=(0,r.useState)(null),a=(0,r.useCallback)((e=>{t(e)}),[]);return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(i.P,{children:(0,h.jsxs)("div",{children:[(0,h.jsxs)(o.Z,{children:[(0,h.jsxs)(pe,{children:[(0,h.jsx)(te,{setRightAnswers:a}),(0,h.jsx)(oe,{})]}),(0,h.jsxs)(ue,{children:[(0,h.jsx)(xe,{pointsByTheme:n}),(0,h.jsx)(U,{rightAnswers:e})]})]}),(0,h.jsx)(q,{setPointsByTheme:s})]})})})}},9922:(e,t,n)=>{n.d(t,{P:()=>r});const r=n(7691).ZP.main`
  flex: 1 1 auto;
`}}]);
//# sourceMappingURL=372.5e775b4e.chunk.js.map