"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[404],{6155:(e,t,n)=>{n.d(t,{Z:()=>f});var i=n(2791),r=n(6983),s=n(7691);const o=s.ZP.article`
  cursor: pointer;
  position: relative;
  width: 100%;
`,a=s.ZP.button`
  box-sizing: border-box;
  display: block;
  position: relative;
  cursor: pointer;
  border: none;
  background-color: #5557ff;
  border-radius: 7px;
  padding: 0 15px;
  text-align: center;
  min-height: 45px;
  width: 100%;
  color: #fff;

  @media screen and (min-width: 767.8px) {
    min-height: 56px;
  }
`,l=s.ZP.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  ${e=>e.customStyle||""};

  @media screen and (min-width: 767.8px) {
    font-size: 16px;
  }
`,d=s.ZP.span`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;

  @media screen and (min-width: 767.8px) {
    font-size: 16px;
  }
`,c=s.ZP.img`
  position: absolute;
  left: 10px;
  top: 26%;
`,x=s.ZP.img`
  position: absolute;
  right: 10px;
  top: 40%;
`,p=s.ZP.ul`
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
  
`,u=s.ZP.li`
  font-family: Inter;
  padding: 3px 0;
  width: 300px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 767.8px) {
   padding: 5px 0;
  }
`;var h=n(184);const f=e=>{let{data:t,selected:n,customStyle:s,onClickElement:f,srcImg:m="",srcArrowDown:g}=e;const[w,b]=(0,i.useState)(!1),j=()=>{b((e=>!e))},v=(e=>Array.isArray(e)?e.map(((e,t)=>(0,h.jsx)(u,{tabIndex:0,onClick:()=>{f&&f(e),j()},children:(0,h.jsx)("div",{style:{display:"inline-flex",alignItems:"baseline",gap:2,justifyContent:"center"},children:(0,h.jsx)(d,{children:e})})},t+1))):Object.entries(e).map(((e,t)=>{const n=e[1],i=e[0];return(0,h.jsx)(u,{tabIndex:0,onClick:()=>{f&&f(n),j()},children:(0,h.jsxs)("div",{style:{display:"inline-flex",alignItems:"baseline",gap:2,justifyContent:"center"},children:[(0,h.jsx)("span",{style:{fontSize:16,fontWeight:600},children:n.toUpperCase()}),(0,h.jsx)("span",{style:{fontSize:12,fontWeight:400},children:i})]})},t+1)})))(t);return(0,i.useEffect)((()=>{const e=e=>{const t=e.target;t.closest("ul")||t.closest("button")||b(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),(0,h.jsxs)(o,{children:[(0,h.jsxs)(a,{onClick:()=>{j()},children:[m?(0,h.jsx)(c,{src:m,alt:"img"}):null,(0,h.jsx)(l,{className:"dropdown-btn-text",customStyle:s||"",children:n.toUpperCase()||""}),(0,h.jsx)(x,{src:g,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0432\u043d\u0438\u0437"})]}),(0,h.jsx)(r.Z,{in:w,timeout:300,classNames:"list",children:(0,h.jsx)(h.Fragment,{children:w&&(0,h.jsx)(p,{children:v})})})]})}},124:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(9388),r=n(7691);const s=r.ZP.span`
  color: red;
  display: inline-block;
  margin: 0 5px 0 0 ;
  text-transform: uppercase;
  font: var(--font-bold);
`,o=r.ZP.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;var a=n(184);const l=()=>(0,a.jsxs)(o,{children:[(0,a.jsx)(s,{children:"Error!"}),(0,a.jsx)(i.Z,{color:"error",fontSize:"medium"})]})},5157:(e,t,n)=>{n.d(t,{z:()=>s});var i=n(408),r=n(4530);const s=async e=>await new Promise((function(t,n){(0,i.jM)((0,i.iH)(r.Z,e),(i=>{const r=i.val();if(r)return t(r);n(new Error(`Value (${r}) from Firebase Database not found. Check url (${e})`))}))}))},1838:(e,t,n)=>{n.d(t,{r:()=>r});var i=n(5157);const r=async e=>{try{const t=await(0,i.z)(e);return(e=>Object.entries(e).length)(t)}catch(t){throw console.error(t),t}}},9856:(e,t,n)=>{n.d(t,{Z:()=>s});const i=n(7691).ZP.div`
  box-sizing: border-box;
  max-width: 85%;
  min-width: 287px;
  margin: 0 auto;
  padding: 0 5px;
  
  @media screen and (min-width: 1299.8px) {
    width: 1190px;
  }
`;var r=n(184);const s=e=>{let{children:t,style:n}=e;return(0,r.jsx)(i,{style:n,children:t})}},4530:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(2426),r=n(408);const s={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},o=(0,i.ZF)(s),a=(0,r.N8)(o)},8404:(e,t,n)=>{n.r(t),n.d(t,{default:()=>de});var i=n(2791),r=n(9922),s=n(7879),o=n(9856),a=n(6155);const l=n.p+"static/media/chevrondown.155409e0c48ea57ccaa9ebaf346774a8.svg";var d=n(7691);const c=d.ZP.article`
  width: 270px;
  min-height: 45px;
  max-height: 56px;
  

  @media screen and (min-width: 767.8px) {
    max-height: 65px;
  }
`;var x=n(184);const p=e=>{let{setFilterByRightAnswer:t}=e;const n=["\u0412\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b","\u0412\u0435\u0440\u043d\u043e","\u041d\u0435\u0432\u0435\u0440\u043d\u043e"],[r,s]=(0,i.useState)(n[0]);return(0,x.jsx)(c,{children:(0,x.jsx)(a.Z,{data:n,selected:r,onClickElement:e=>{s(e),t(e)},srcArrowDown:l})})},u=e=>{let{themesNames:t,setFilterByTheme:n}=e;const[r,s]=(0,i.useState)(t[0]);return(0,x.jsx)(c,{children:(0,x.jsx)(a.Z,{data:t,selected:r,onClickElement:e=>{s(e),n(e)},srcArrowDown:l})})};var h=n(408),f=n(2575),m=n(4530);const g=async()=>{const e=(0,f.F)("profession");return await new Promise((function(t,n){(0,h.jM)((0,h.iH)(m.Z,`${e}/answers`),(e=>{e.val()?t(e.val()):n()}))}))},w=e=>{const t=(0,f.F)("profession");return new Promise((function(n,i){(0,h.jM)((0,h.iH)(m.Z,`${t}/users/user${e}/answers/`),(e=>{n(e.val())}))}))},b=async()=>{const e=(0,f.F)("profession");return await new Promise((function(t,n){(0,h.jM)((0,h.iH)(m.Z,`${e}/questions`),(e=>{e.val()?t(e.val()):n()}))}))};var j=n(3201);const v=e=>{const t=e.match(/\d+/);if(null!==t)return parseInt(t[0])};var y=n(3589);const Z=(e,t)=>{const n=Object.values(e);switch(t){case"\u0412\u0435\u0440\u043d\u043e":return n.filter((e=>{var t;return 1===(null===e||void 0===e||null===(t=e.userAnswer)||void 0===t?void 0:t.point)}));case"\u041d\u0435\u0432\u0435\u0440\u043d\u043e":return n.filter((e=>{var t;return 0===(null===e||void 0===e||null===(t=e.userAnswer)||void 0===t?void 0:t.point)}));default:return n}},P=e=>e?(e=>{const t=new Set(["\u0412\u0441\u0435 \u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0438"]);return Object.values(e).map((e=>e.theme)).forEach((e=>t.add(e))),Array.from(t)})(e):["\u0412\u0441\u0435 \u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0438"],$=(e,t)=>{const n=Object.values(e),i=P(e).filter(((e,t)=>t>0));for(let r=0;r<i.length;r++)if(t===i[r])return n.filter((e=>e.theme===i[r]));return n},S=e=>{const t=P(e).filter(((e,t)=>t>0)),n=Object.values(e).map((e=>({theme:e.theme,point:e.userAnswer.point}))),i={};for(const r of t)for(const e in n)r===n[e].theme&&(i[r]||(i[r]={totalPoints:0,totalQuantityQuestions:0}),i[r].totalPoints+=n[e].point,i[r].totalQuantityQuestions+=1);return i};var k=n(124);const E=d.ZP.li`
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
`,z=d.ZP.li`
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
`,A=d.ZP.ul`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 8px 0 17px 0;
  position: relative;
`,C=d.ZP.summary`
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
`,O=d.ZP.span`
  font: var(--font-little-text-bold);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);
  }
`,F=d.ZP.section`
  margin: 24px 0 18px 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 15px;

  @media screen and (min-width: 767.8px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,_=d.ZP.span`
  position: absolute;
  color: ${e=>{let{isRight:t}=e;return t?"green":"red"}};
  top: 5px;
  right: 0;

  font: var(--font-little-text-bold);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);
  }
`,T=e=>{let{setPointsByTheme:t}=e;const[n]=(0,i.useContext)(y.Sc),[r]=(0,i.useContext)(y.iT),{t:a}=(0,s.$)(),[l,d]=(0,i.useState)(null),[c,h]=(0,i.useState)(!1),[f,m]=(0,i.useState)(!0),[T,I]=(0,i.useState)(""),[R,Q]=(0,i.useState)(""),D=!!f&&(0,x.jsx)(j.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}),q=!!c&&(0,x.jsx)(k.Z,{}),H=f||c?null:(()=>{if(l){const e=Z($(l,T),R);return(0,x.jsx)(A,{children:Object.entries(e).map(((e,t)=>{const{descr:n,img:i,id:r,name:s,rightAnswer:o,theme:l,answerOptions:d,userAnswer:c}=e[1],p=!!c.point,u={borderRadius:10,border:`1px solid ${p?"green":"red"}`};return(0,x.jsx)(z,{style:u,children:(0,x.jsxs)(A,{children:[(0,x.jsx)(_,{isRight:p,children:p?"\u2714":"\u2718"}),(0,x.jsxs)(E,{children:[(0,x.jsx)(O,{children:`\u0412\u043e\u043f\u0440\u043e\u0441 \u2116 ${r}: `}),`${s} (${l})`]}),"No"!==i&&(0,x.jsx)(E,{children:(0,x.jsx)("img",{style:{maxWidth:"100%"},src:i,alt:"code"})}),(0,x.jsxs)(E,{children:[(0,x.jsx)(O,{children:`${a("\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b_\u043e\u0442\u0432\u0435\u0442\u043e\u0432")}: `}),Object.entries(d).map((e=>{let[t,n]=e;return`${t}: ${n}`})).join(", ")]}),(0,x.jsxs)(E,{children:[(0,x.jsx)(O,{children:`${a("\u0412\u0430\u0448_\u043e\u0442\u0432\u0435\u0442")}: `})," ",c.userAnswer]}),!p&&(0,x.jsxs)(E,{children:[(0,x.jsx)(O,{children:`${a("\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439_\u043e\u0442\u0432\u0435\u0442")}: `}),o]}),(0,x.jsxs)(E,{children:[(0,x.jsxs)(O,{children:[`${a("\u041e\u0431\u044a\u044f\u0441\u043d\u0435\u043d\u0438\u0435")}: `," "]}),n]})]})},t+1)}))})}})(),N=e=>Object.fromEntries(Object.entries(e).map((e=>{let[t,n]=e;return[v(t),{point:n.point,userAnswer:n.userAnswer}]}))),B=(e,t)=>Object.fromEntries(Object.entries(e).map((e=>{let[n,i]=e;return[v(n),i[`${t}`]]}))),L=e=>{throw h(!0),m(!1),new Error(e)};return(0,i.useEffect)((()=>{Promise.all([w(r),g(),b()]).then((e=>(e=>{const[t,i,r]=e,s={userAnswers:N(t),answerOptions:B(i,n),infoQuestions:B(r,n)},o={};for(const n in s.infoQuestions)o[n]={...s.infoQuestions[n],userAnswer:s.userAnswers[n],answerOptions:s.answerOptions[n]};d(o),m(!1)})(e))).catch(L)}),[n]),(0,i.useEffect)((()=>{l&&t(S(l))}),[l]),(0,x.jsx)(o.Z,{children:(0,x.jsxs)("details",{open:!0,children:[(0,x.jsx)(C,{children:a("\u041e\u0442\u0432\u0435\u0442\u044b")}),(0,x.jsxs)(F,{children:[(0,x.jsx)(u,{themesNames:P(l),setFilterByTheme:e=>{I(e)}}),(0,x.jsx)(p,{setFilterByRightAnswer:e=>{Q(e)}})]}),D," ",q," ",H]})})};var I=n(5967),R=n(3623),Q=n(1838);const D=d.ZP.article`
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
`,q=d.ZP.article`
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
`,H=d.ZP.div`
  position: relative;
  width: 265px;
  height: 265px;

  @media screen and (min-width: 767.8px) {
    // width: 200px;
    // height: 200px;
  }
`,N=d.ZP.span`
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
`;I.kL.register(I.qi,I.u,I.De,I.f$);const B=e=>{let{rightAnswers:t}=e;const{t:n}=(0,s.$)(),[r,o]=(0,i.useState)(0),[a,l]=(0,i.useState)(!0),[d]=(0,i.useContext)(y.Hp),c=+(100*t/r).toFixed(1),p=+(100-c).toFixed(1),u={labels:["\u0412\u0435\u0440\u043d\u043e","\u041d\u0435\u0432\u0435\u0440\u043d\u043e"],datasets:[{label:"%",data:[c,p],backgroundColor:["green","red"],borderColor:["green","red"],cutout:"75%",borderWidth:1}]},h=a?(0,x.jsx)(j.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}):null,f=a?null:(0,x.jsxs)(D,{children:[(0,x.jsxs)(H,{children:[(0,x.jsx)(R.$I,{data:u}),(0,x.jsx)(N,{children:`${c} %`})]}),(0,x.jsx)(q,{children:n("\u041f\u043e\u0434\u043f\u0438\u0441\u044c_\u043a\u0440\u0443\u0433\u043e\u0432\u0430\u044f_\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430")})]});return(0,i.useEffect)((()=>{(async()=>{const e=`${d}/questions`,t=await(0,Q.r)(e);o(t),l(!1)})()}),[]),(0,x.jsxs)(x.Fragment,{children:[h," ",f]})};var L=n(5157);const W=async e=>{try{return await(0,L.z)(e)}catch(t){throw console.error(t),t}},M=e=>e?Object.values(e).reduce(((e,t)=>e+t),0):0,K=(d.ZP.section`
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
`,d.ZP.article`
  text-align: center;
  padding: 16px 0;

  @media screen and (min-width: 767.8px) {
    flex-basis: 50%;
  }
`),U=d.ZP.h3`
  color: #29313c;
  font: var(--font-title5);
  margin: 0;
  padding: 0;
`,Y=d.ZP.h2`
  color: #6768d7;
  font: var(--font-title2);
  margin: 0;
  padding: 0;
`,V=e=>{let{setRightAnswers:t}=e;const{t:n}=(0,s.$)(),[r]=(0,i.useContext)(y.iT),[o]=(0,i.useContext)(y.Hp),[a,l]=(0,i.useState)(!0),[d,c]=(0,i.useState)(!1),[p,u]=(0,i.useState)(0),[h,f]=(0,i.useState)(0),m=e=>{const n={points:null,totalQuestionNumbers:0},[i,r]=e;n.points=(e=>{if(e)return Object.fromEntries(Object.entries({...e}).map((e=>{let[t,n]=e;return[t,n.point]})));return null})(r.value),n.totalQuestionNumbers=i.value?i.value:!1!==i.value&&null,l(!1),f(M(n.points)),u(n.totalQuestionNumbers),t(M(n.points));for(const t in n)if(null===n[t])throw new Error(`The value of ${t} is ${n[t]} in ${n}`)},g=e=>{throw c(!0),l(!1),new Error(e)};(0,i.useEffect)((()=>{const e=`${o}/questions`,t=`${o}/users/user${r}/answers`;Promise.allSettled([(0,Q.r)(e),W(t)]).then(m).catch(g)}),[]);const w=!!a&&(0,x.jsx)(j.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}),b=!!d&&(0,x.jsx)(k.Z,{}),v=!a&&!d&&(0,x.jsxs)(K,{children:[(0,x.jsx)(U,{children:n("\u0412\u0430\u0448_\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442")}),(0,x.jsx)(Y,{children:`${h} ${n("\u0438\u0437")} ${p}`})]});return(0,x.jsxs)(x.Fragment,{children:[w," ",b," ",v]})},X=d.ZP.article`
  text-align: center;
  padding: 16px 0;

  @media screen and (min-width: 767.8px) {
    flex-basis: 50%;
  }
`,G=d.ZP.h3`
  color: #29313c;
  font: var(--font-title5);
  margin: 0;
  padding: 0;
`,J=d.ZP.h2`
  color: #6768d7;
  font: var(--font-title2);
  margin: 0;
  padding: 0;
`,ee=(e,t,n)=>{let i="";if("number"===typeof e){if(e%60===0)i=`${e/60} ${t}`;else if(e<60)i=`${e}  ${t}`;else if(e>60){const r=Math.floor(e/60);i=`${r}  ${n} ${e-60*r}  ${t}`}return i}return"boolean"!==typeof e&&null},te=()=>{const{t:e}=(0,s.$)(),[t]=(0,i.useContext)(y.iT),[n,r]=(0,i.useState)({loading:!0,error:!1,time:0}),[o,a]=(0,i.useState)(!0),[l,d]=(0,i.useState)(0),[c,p]=(0,i.useState)(!1),[u]=(0,i.useContext)(y.Hp),f=e=>{const{time:t}=e;a(!1),d(t)},g=!!o&&(0,x.jsx)(j.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}),w=!!c&&(0,x.jsx)(k.Z,{}),b=!o&&!c&&(0,x.jsxs)(X,{children:[(0,x.jsx)(G,{children:e("\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043d\u043d\u043e\u0435_\u0432\u0440\u0435\u043c\u044f")}),(0,x.jsx)(J,{children:ee(l,e("\u0441\u0435\u043a"),e("\u043c\u0438\u043d"))})]}),v=e=>{throw a(!1),p(!0),new Error(e)};return(0,i.useEffect)((()=>{(e=>new Promise((function(t,n){(0,h.jM)((0,h.iH)(m.Z,e),(e=>{t(e.val())}))})))(`${u}/users/user${t}/userInfo`).then(f).catch(v)}),[]),(0,x.jsxs)(x.Fragment,{children:[g," ",w," ",b]})},ne=d.ZP.article`
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
`,ie=d.ZP.article`
  font: var(--font-little-text-regular);
  color: #29313c;
  text-align: justify;
  margin: 12px 0 0 0;
`,re=d.ZP.div`
  position: relative;
  width: 100%;
  height: 220px;
  max-width: 525px;
`;I.kL.register(I.uw,I.f$,I.ZL,I.Dx,I.u,I.De);const se=e=>{let{pointsByTheme:t}=e;const[n,r]=(0,i.useState)(!0),[o,a]=(0,i.useState)(!1),l=["black","red","blue"],{t:d}=(0,s.$)(),c={maintainAspectRatio:!1,plugins:{legend:{position:"bottom",align:"center"},title:{display:!1}},scales:{y:{max:100,ticks:{stepSize:25}}}},p={labels:[""],datasets:t?Object.entries(t).map(((e,t)=>{const n=+(e[1].totalPoints/e[1].totalQuantityQuestions*100).toFixed();return{label:`${n} % - ${e[0].length>25?`${e[0].slice(0,25)}...`:e[0]}`,data:[n],backgroundColor:l[t]}})):[]},u=n?(0,x.jsx)(j.Z,{width:50,height:50,color:"#1f2ce0",margin:"0 auto"}):null,h=n||o?null:(0,x.jsxs)(ne,{children:[(0,x.jsx)(re,{children:(0,x.jsx)(R.$Q,{options:c,data:p})}),(0,x.jsx)(ie,{children:d("\u041f\u043e\u0434\u043f\u0438\u0441\u044c_\u0441\u0442\u043e\u043b\u0431\u0447\u0430\u0442\u0430\u044f_\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430")})]}),f=o?(0,x.jsx)(k.Z,{}):null;return(0,i.useEffect)((()=>{t&&r(!1)}),[t]),(0,x.jsxs)(x.Fragment,{children:[h," ",u," ",f]})},oe=(0,i.memo)(se),ae=d.ZP.section`
  box-sizing: border-box;
  margin: 18px 0 24px 0;

  @media screen and (min-width: 767.8px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
  }
`,le=d.ZP.section`
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
`,de=()=>{const[e,t]=(0,i.useState)(0),[n,s]=(0,i.useState)(null),a=(0,i.useCallback)((e=>{t(e)}),[]);return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(r.P,{children:(0,x.jsxs)("div",{children:[(0,x.jsxs)(o.Z,{children:[(0,x.jsxs)(le,{children:[(0,x.jsx)(V,{setRightAnswers:a}),(0,x.jsx)(te,{})]}),(0,x.jsxs)(ae,{children:[(0,x.jsx)(oe,{pointsByTheme:n}),(0,x.jsx)(B,{rightAnswers:e})]})]}),(0,x.jsx)(T,{setPointsByTheme:s})]})})})}},9922:(e,t,n)=>{n.d(t,{P:()=>i});const i=n(7691).ZP.main`
  flex: 1 1 auto;
  width: 100%;
  
`}}]);
//# sourceMappingURL=404.2473d165.chunk.js.map