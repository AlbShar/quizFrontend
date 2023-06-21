"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[986],{5842:(e,t,n)=>{n.d(t,{Z:()=>r});n(2791);const r=n.p+"static/media/chevrondown.155409e0c48ea57ccaa9ebaf346774a8.svg"},1838:(e,t,n)=>{n.d(t,{r:()=>s});var r=n(408),i=n(4530);const s=async()=>{try{return await new Promise((function(e,t){(0,r.jM)((0,r.iH)(i.Z,"questions"),(t=>{const n=Object.entries(t.val()).length;e(n)}))}))}catch(e){console.error(e)}}},9856:(e,t,n)=>{n.d(t,{Z:()=>s});n(2791);const r=n(7691).ZP.div`
max-width: 85%;
min-width: 287px;
margin: 0 auto;
padding: 0 5px;
@media screen and (min-width: 1299.8px) {
  max-width: 1190px;
}
`;var i=n(184);const s=e=>{let{children:t}=e;return(0,i.jsx)(r,{children:t})}},4530:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(2426),i=n(408);const s={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},o=(0,r.ZF)(s),a=(0,i.N8)(o)},3218:(e,t,n)=>{n.d(t,{k:()=>r});const r=e=>{const t=localStorage.getItem(e);if(null===t||void 0===t)throw new Error(`Value not found for key '${e}'`);try{return`${t}`}catch(n){throw n instanceof Error?new Error(`Invalid JSON data for key '${e}': ${n.message}`):new Error(`Unknown error caught: ${n}`)}}},2986:(e,t,n)=>{n.r(t),n.d(t,{default:()=>xe});var r=n(2791),i=n(9922),s=n(7879),o=n(9856),a=n(5842),l=n(7691);const d=l.ZP.article`
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
`,p=l.ZP.ul`
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
`,u=l.ZP.img`
  filter: invert(100);
  margin-left: 4px;
`,h=l.ZP.li`
  font: var(--font-text-regular);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;var f=n(184);const m=e=>{let{hideListFilters:t,data:n,selected:i,isActive:s,style:o,themeHasChoosen:l,toggleListThemes:m,idWrapper:g}=e;const w=n.map(((e,t)=>(0,f.jsx)(h,{tabIndex:0,onClick:()=>l&&l(e),children:e},t+1)));return(0,r.useEffect)((()=>{const e=e=>{"LI"!==e.target.tagName&&t()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),(0,f.jsxs)(d,{style:o,id:g,children:[(0,f.jsxs)(c,{onClick:m,children:[(0,f.jsx)(x,{className:"dropdown-btn-text",children:i||n[0]}),(0,f.jsx)(u,{src:a.Z,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0432\u043d\u0438\u0437"})]}),s&&(0,f.jsx)(p,{children:w})]})};m.displayName="Dropdown";const g=m,w=e=>{let{setFilterByRightAnswer:t}=e;const n=["\u0412\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b","\u0412\u0435\u0440\u043d\u043e","\u041d\u0435\u0432\u0435\u0440\u043d\u043e"],[i,s]=(0,r.useState)(n[0]),[o,a]=(0,r.useState)(!1),l=()=>{a((e=>!e))};return(0,f.jsx)(g,{toggleListThemes:l,data:n,selected:i,isActive:o,themeHasChoosen:e=>(e=>{l(),s(e),t(e)})(e),hideListFilters:()=>{a(!1)},idWrapper:"wrapperTypeAnswer"})},b=e=>{let{themesNames:t,setFilterByTheme:n}=e;const[i,s]=(0,r.useState)(t[0]),[o,a]=(0,r.useState)(!1),l=()=>{a((e=>!e))};return(0,f.jsx)(g,{toggleListThemes:l,data:t,selected:i,isActive:o,themeHasChoosen:e=>(e=>{l(),s(e),n(e)})(e),style:{margin:"0 25px 0 0"},hideListFilters:()=>{a(!1)},idWrapper:"wrapperThemes"})};var j=n(408),v=n(4530);const y=async()=>await new Promise((function(e,t){(0,j.jM)((0,j.iH)(v.Z,"answers"),(n=>{n.val()?e(n.val()):t()}))}));var P=n(3218);const Z=async()=>await new Promise((function(e,t){(0,j.jM)((0,j.iH)(v.Z,"questions"),(n=>{n.val()?e(n.val()):t()}))}));var $=n(3201);const k=e=>{const t=e.match(/\d+/);if(null!==t)return parseInt(t[0])},E=(e,t)=>{const n=Object.values(e);switch(t){case"\u0412\u0435\u0440\u043d\u043e":return n.filter((e=>{var t;return 1===(null===e||void 0===e||null===(t=e.userAnswer)||void 0===t?void 0:t.point)}));case"\u041d\u0435\u0432\u0435\u0440\u043d\u043e":return n.filter((e=>{var t;return 0===(null===e||void 0===e||null===(t=e.userAnswer)||void 0===t?void 0:t.point)}));default:return n}},S=e=>e?(e=>{const t=new Set(["\u0412\u0441\u0435 \u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0438"]);return Object.values(e).map((e=>e.theme)).forEach((e=>t.add(e))),Array.from(t)})(e):["\u0412\u0441\u0435 \u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0438"],O=(e,t)=>{const n=Object.values(e),r=S(e).filter(((e,t)=>t>0));for(let i=0;i<r.length;i++)if(t===r[i])return n.filter((e=>e.theme===r[i]));return n},A=e=>{const t=S(e).filter(((e,t)=>t>0)),n=Object.values(e).map((e=>({theme:e.theme,point:e.userAnswer.point}))),r={};for(const i of t)for(const e in n)i===n[e].theme&&(r[i]||(r[i]={totalPoints:0,totalQuantityQuestions:0}),r[i].totalPoints+=n[e].point,r[i].totalQuantityQuestions+=1);return r},T=l.ZP.li`
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
`,R=l.ZP.li`
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
`,_=l.ZP.ul`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 8px 0 17px 0;
  position: relative;
`,F=l.ZP.summary`
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
`,C=l.ZP.span`
  font: var(--font-little-text-bold);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);
  }
`,z=l.ZP.section`
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
`,Q=e=>{let{setPointsByTheme:t,lang:n}=e;const{t:i}=(0,s.$)(),[a,l]=(0,r.useState)(null),[d,c]=(0,r.useState)(!1),[x,p]=(0,r.useState)(!0),[u,h]=(0,r.useState)(""),[m,g]=(0,r.useState)(""),Q=!!x&&(0,f.jsx)($.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}),L=!!d&&"ERORR!",I=x||d?null:(()=>{if(a){const e=E(O(a,u),m);return(0,f.jsx)(_,{children:Object.entries(e).map(((e,t)=>{const{descr:n,img:r,id:s,name:o,rightAnswer:a,theme:l,answerOptions:d,userAnswer:c}=e[1],x=!!c.point,p={borderRadius:10,border:`1px solid ${x?"green":"red"}`};return(0,f.jsx)(R,{style:p,children:(0,f.jsxs)(_,{children:[(0,f.jsx)(N,{isRight:x,children:x?"\u2714":"\u2718"}),(0,f.jsxs)(T,{children:[(0,f.jsx)(C,{children:`\u0412\u043e\u043f\u0440\u043e\u0441 \u2116 ${s}: `}),`${o} (${l})`]}),"No"!==r&&(0,f.jsx)(T,{children:(0,f.jsx)("img",{style:{maxWidth:"100%"},src:r,alt:"code"})}),(0,f.jsxs)(T,{children:[(0,f.jsx)(C,{children:`${i("\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b_\u043e\u0442\u0432\u0435\u0442\u043e\u0432")}: `}),Object.entries(d).map((e=>{let[t,n]=e;return`${t}: ${n}`})).join(", ")]}),(0,f.jsxs)(T,{children:[(0,f.jsx)(C,{children:`${i("\u0412\u0430\u0448_\u043e\u0442\u0432\u0435\u0442")}: `})," ",c.userAnswer]}),!x&&(0,f.jsxs)(T,{children:[(0,f.jsx)(C,{children:`${i("\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439_\u043e\u0442\u0432\u0435\u0442")}: `}),a]}),(0,f.jsxs)(T,{children:[(0,f.jsxs)(C,{children:[`${i("\u041e\u0431\u044a\u044f\u0441\u043d\u0435\u043d\u0438\u0435")}: `," "]}),n]})]})},t+1)}))})}})(),B=e=>Object.fromEntries(Object.entries(e).map((e=>{let[t,n]=e;return[k(t),{point:n.point,userAnswer:n.userAnswer}]}))),H=(e,t)=>Object.fromEntries(Object.entries(e).map((e=>{let[n,r]=e;return[k(n),r[`${t}`]]}))),q=e=>{throw c((e=>!e)),new Error(e)};return(0,r.useEffect)((()=>{Promise.all([new Promise((function(e,t){(0,j.jM)((0,j.iH)(v.Z,`users/user${(0,P.k)("idUser")}/answers/`),(t=>{e(t.val())}))})),y(),Z()]).then((e=>(e=>{const[t,r,i]=e,s={userAnswers:B(t),answerOptions:H(r,n),infoQuestions:H(i,n)},o={};for(const n in s.infoQuestions)o[n]={...s.infoQuestions[n],userAnswer:s.userAnswers[n],answerOptions:s.answerOptions[n]};l(o),p(!1)})(e))).catch(q)}),[n]),(0,r.useEffect)((()=>{a&&t(A(a))}),[a]),(0,f.jsx)(o.Z,{children:(0,f.jsxs)("details",{open:!0,children:[(0,f.jsx)(F,{children:i("\u041e\u0442\u0432\u0435\u0442\u044b")}),(0,f.jsxs)(z,{children:[(0,f.jsx)(b,{themesNames:S(a),setFilterByTheme:e=>{h(e)}}),(0,f.jsx)(w,{setFilterByRightAnswer:e=>{g(e)}})]}),Q," ",L," ",I]})})},L=l.ZP.article`
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
`,I=l.ZP.article`
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
`,B=l.ZP.div`
  position: relative;
  width: 265px;
  height: 265px;

  @media screen and (min-width: 767.8px) {
    // width: 200px;
    // height: 200px;
  }
`,H=l.ZP.span`
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
`;var q=n(1838),D=n(5967),W=n(3623);D.kL.register(D.qi,D.u,D.De,D.f$);const M=e=>{let{dataPieChart:t}=e;const n={labels:["\u0412\u0435\u0440\u043d\u043e","\u041d\u0435\u0432\u0435\u0440\u043d\u043e"],datasets:[{label:"%",data:t,backgroundColor:["green","red"],borderColor:["green","red"],cutout:"75%",borderWidth:1}]};return(0,f.jsx)(W.$I,{data:n})},U=e=>{let{rightAnswers:t}=e;const{t:n}=(0,s.$)(),[i,o]=(0,r.useState)(0),a=+(100*t/i).toFixed(1),l=+(100-a).toFixed(1),[d,c]=(0,r.useState)(!0),x=d?(0,f.jsx)($.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}):null,p=d?null:(0,f.jsxs)(L,{children:[(0,f.jsxs)(B,{children:[(0,f.jsx)(M,{dataPieChart:[a,l]}),(0,f.jsx)(H,{children:`${a} %`})]}),(0,f.jsx)(I,{children:n("\u041f\u043e\u0434\u043f\u0438\u0441\u044c_\u043a\u0440\u0443\u0433\u043e\u0432\u0430\u044f_\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430")})]});return(0,r.useEffect)((()=>{(0,q.r)().then((e=>{e&&(o(e),c(!1))}))}),[]),(0,f.jsxs)(f.Fragment,{children:[x," ",p]})},K=(l.ZP.section`
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
`),Y=l.ZP.h3`
  color: #29313c;
  font: var(--font-title5);
  margin: 0;
  padding: 0;
`,V=l.ZP.h2`
  color: #6768d7;
  font: var(--font-title2);
  margin: 0;
  padding: 0;
`,X=e=>{let{setRightAnswers:t}=e;const{t:n}=(0,s.$)(),[i,o]=(0,r.useState)({error:!1,loading:!0,points:!1,totalQuestionNumbers:!1}),a=e=>e?Object.values(e).reduce(((e,t)=>e+t),0):0,l=e=>{const n={points:!1,totalQuestionNumbers:!1},[r,i]=e;n.points=(e=>{if(e)return Object.fromEntries(Object.entries({...e}).map((e=>{let[t,n]=e;return[t,n.point]})));return null})(i.value),n.totalQuestionNumbers=r.value?r.value:!1!==r.value&&null,o((function(e){const{totalQuestionNumbers:t,points:r}=n;return{...e,totalQuestionNumbers:t,points:r,loading:!1}})),t(a(n.points));for(const t in n)if(null===n[t])throw new Error(`The value of ${t} is ${n[t]} in ${n}`)},d=e=>{throw o((e=>({...e,loading:!1,error:!0}))),new Error(e)};(0,r.useEffect)((()=>{Promise.allSettled([(0,q.r)(),new Promise((function(e,t){(0,j.jM)((0,j.iH)(v.Z,`users/user${(0,P.k)("idUser")}/answers`),(t=>{e(t.val())}))}))]).then(l).catch(d)}),[]);const c=!!i.loading&&(0,f.jsx)($.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}),x=!!i.error&&"ERROR!",p=!i.loading&&!i.error&&(0,f.jsxs)(K,{children:[(0,f.jsx)(Y,{children:n("\u0412\u0430\u0448_\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442")}),(0,f.jsx)(V,{children:`${a(i.points)} ${n("\u0438\u0437")} ${i.totalQuestionNumbers}`})]});return(0,f.jsxs)(f.Fragment,{children:[c," ",x," ",p]})},J=l.ZP.article`
  text-align: center;
  padding: 16px 0;

  @media screen and (min-width: 767.8px) {
    flex-basis: 50%;
  }
`,G=l.ZP.h3`
  color: #29313c;
  font: var(--font-title5);
  margin: 0;
  padding: 0;
`,ee=l.ZP.h2`
  color: #6768d7;
  font: var(--font-title2);
  margin: 0;
  padding: 0;
`,te=(e,t,n)=>{let r="";if("number"===typeof e){if(e%60===0)r=`${e/60} ${t}`;else if(e<60)r=`${e}  ${t}`;else if(e>60){const i=Math.floor(e/60);r=`${i}  ${n} ${e-60*i}  ${t}`}return r}return"boolean"!==typeof e&&null},ne=()=>{const{t:e}=(0,s.$)(),[t,n]=(0,r.useState)({loading:!0,error:!1,time:0}),i=e=>{const{time:t}=e;n((e=>({...e,loading:!1,time:t})))},o=!!t.loading&&(0,f.jsx)($.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}),a=!!t.error&&"ERROR!",l=!t.loading&&!t.error&&(0,f.jsxs)(J,{children:[(0,f.jsx)(G,{children:e("\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043d\u043d\u043e\u0435_\u0432\u0440\u0435\u043c\u044f")}),(0,f.jsx)(ee,{children:te(t.time,e("\u0441\u0435\u043a"),e("\u043c\u0438\u043d"))})]}),d=e=>{throw n((e=>({...e,loading:!1,error:!0}))),new Error(e)};return(0,r.useEffect)((()=>{new Promise((function(e,t){(0,j.jM)((0,j.iH)(v.Z,`users/user${(0,P.k)("idUser")}/userInfo`),(t=>{e(t.val())}))})).then(i).catch(d)}),[]),(0,f.jsxs)(f.Fragment,{children:[o," ",a," ",l]})};D.kL.register(D.uw,D.f$,D.ZL,D.Dx,D.u,D.De);const re=e=>{let{pointsByTheme:t}=e;const[n,i]=(0,r.useState)(!0),s=["black","red","blue"],o={labels:[""],datasets:t?Object.entries(t).map(((e,t)=>{const n=+(e[1].totalPoints/e[1].totalQuantityQuestions*100).toFixed();return{label:`${n} % - ${e[0].length>25?`${e[0].slice(0,25)}...`:e[0]}`,data:[n],backgroundColor:s[t]}})):[]},a=n?(0,f.jsx)($.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}):null,l=n?null:(0,f.jsx)(W.$Q,{options:{maintainAspectRatio:!1,plugins:{legend:{position:"bottom",align:"start"},title:{display:!1}},scales:{y:{ticks:{stepSize:20}}}},data:o});return(0,r.useEffect)((()=>{t&&i(!1)}),[t]),(0,f.jsxs)(f.Fragment,{children:[l," ",a]})},ie=(0,r.memo)(re),se=l.ZP.article`
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
`,oe=l.ZP.article`
  font: var(--font-little-text-regular);
  color: #29313c;
  text-align: justify;
  margin: 12px 0 0 0;
`,ae=l.ZP.span`
  position: relative;
  width: 100%;
  height: 220px;
  max-width: 525px;
`,le=e=>{let{pointsByTheme:t}=e;const{t:n}=(0,s.$)();return(0,f.jsxs)(se,{children:[(0,f.jsx)(ae,{children:(0,f.jsx)(ie,{pointsByTheme:t})}),(0,f.jsx)(oe,{children:n("\u041f\u043e\u0434\u043f\u0438\u0441\u044c_\u0441\u0442\u043e\u043b\u0431\u0447\u0430\u0442\u0430\u044f_\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430")})]})},de=l.ZP.section`
  box-sizing: border-box;
  margin: 18px 0 24px 0;

  @media screen and (min-width: 767.8px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
  }
`,ce=l.ZP.section`
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
`,xe=e=>{let{lang:t}=e;const[n,s]=(0,r.useState)(0),[a,l]=(0,r.useState)(null),d=(0,r.useCallback)((e=>{s(e)}),[]);return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(i.P,{children:(0,f.jsxs)("div",{children:[(0,f.jsxs)(o.Z,{children:[(0,f.jsxs)(ce,{children:[(0,f.jsx)(X,{setRightAnswers:d}),(0,f.jsx)(ne,{})]}),(0,f.jsxs)(de,{children:[(0,f.jsx)(le,{pointsByTheme:a}),(0,f.jsx)(U,{rightAnswers:n})]})]}),(0,f.jsx)(Q,{setPointsByTheme:l,lang:t})]})})})}},9922:(e,t,n)=>{n.d(t,{P:()=>r});const r=n(7691).ZP.main`
  flex: 1 1 auto;
`}}]);
//# sourceMappingURL=986.117d0109.chunk.js.map