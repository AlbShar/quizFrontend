"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[4],{6155:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(2791),o=n(6983),r=n(7691);const s=r.ZP.article`
  cursor: pointer;
  position: relative;
  height: 100%;
  width: 100%;
`,a=r.ZP.button`
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
`,d=r.ZP.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  ${e=>e.customStyle||""};

  @media screen and (min-width: 767.8px) {
    font-size: 16px;
  }
`,c=r.ZP.span`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;

  @media screen and (min-width: 767.8px) {
    font-size: 16px;
  }
`,l=r.ZP.img`
  position: absolute;
  left: 10px;
  top: 26%;
`,x=r.ZP.img`
  position: absolute;
  right: 10px;
  top: 40%;
`,p=r.ZP.ul`
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
  
`,h=r.ZP.li`
  font-family: Inter;
  padding: 3px 0;
  width: 300px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 767.8px) {
   padding: 5px 0;
  }
`;var f=n(184);const u=e=>{let{data:t,selected:n,customStyle:r,onClickElement:u,srcImg:m="",srcArrowDown:g}=e;const[b,w]=(0,i.useState)(!1),j=()=>{w((e=>!e))},v=(e=>Array.isArray(e)?e.map(((e,t)=>(0,f.jsx)(h,{tabIndex:0,onClick:()=>{u&&u(e),j()},children:(0,f.jsx)("div",{style:{display:"inline-flex",alignItems:"baseline",gap:2,justifyContent:"center"},children:(0,f.jsx)(c,{children:e})})},t+1))):Object.entries(e).map(((e,t)=>{const n=e[1],i=e[0];return(0,f.jsx)(h,{tabIndex:0,onClick:()=>{u&&u(n),j()},children:(0,f.jsxs)("div",{style:{display:"inline-flex",alignItems:"baseline",gap:2,justifyContent:"center"},children:[(0,f.jsx)("span",{style:{fontSize:16,fontWeight:600},children:n.toUpperCase()}),(0,f.jsx)("span",{style:{fontSize:12,fontWeight:400},children:i})]})},t+1)})))(t);return(0,i.useEffect)((()=>{const e=e=>{const t=e.target;t.closest("ul")||t.closest("button")||w(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),(0,f.jsxs)(s,{children:[(0,f.jsxs)(a,{onClick:()=>{j()},children:[m?(0,f.jsx)(l,{src:m,alt:"img"}):null,(0,f.jsx)(d,{className:"dropdown-btn-text",customStyle:r||"",children:n.toUpperCase()||""}),(0,f.jsx)(x,{src:g,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0432\u043d\u0438\u0437"})]}),(0,f.jsx)(o.Z,{in:b,timeout:300,classNames:"list",children:(0,f.jsx)(f.Fragment,{children:b&&(0,f.jsx)(p,{children:v})})})]})}},124:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(9388),o=n(7691);const r=o.ZP.span`
  color: red;
  display: inline-block;
  margin: 0 5px 0 0 ;
  text-transform: uppercase;
  font: var(--font-bold);
`,s=o.ZP.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;var a=n(184);const d=()=>(0,a.jsxs)(s,{children:[(0,a.jsx)(r,{children:"Error!"}),(0,a.jsx)(i.Z,{color:"error",fontSize:"medium"})]})},1587:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(1087),o=n(7879),r=n(7691);const s=r.ZP.button`
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
  max-width: 350px;
  width: 100%;
  max-height: 56px;
  height: 100%;

  &:disabled {
    background-color: rgba(88, 90, 255, 0.49);
    cursor: not-allowed;
  }

  @media screen and (min-width: 767.8px) {
    padding: 16px 18px;
    max-width: 230px;
  }
`;(0,r.ZP)(s)`
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
`;var a=n(184);const d=e=>{let{text:t,pageTo:n,onClick:r,id:d,isDisabledBtn:c}=e;const{t:l}=(0,o.$)();return(0,a.jsx)(i.rU,{className:"btn__link",to:n,onClick:r,id:d,children:(0,a.jsx)(s,{disabled:c,children:l(t)})})}},5157:(e,t,n)=>{n.d(t,{z:()=>r});var i=n(408),o=n(4530);const r=async e=>await new Promise((function(t,n){(0,i.jM)((0,i.iH)(o.Z,e),(i=>{const o=i.val();if(o)return t(o);n(new Error(`Value (${o}) from Firebase Database not found. Check url (${e})`))}))}))},1838:(e,t,n)=>{n.d(t,{r:()=>o});var i=n(5157);const o=async e=>{try{const t=await(0,i.z)(e);return(e=>Object.entries(e).length)(t)}catch(t){throw console.error(t),t}}},9856:(e,t,n)=>{n.d(t,{Z:()=>r});const i=n(7691).ZP.div`
  box-sizing: border-box;
  max-width: 85%;
  min-width: 287px;
  margin: 0 auto;
  padding: 0 5px;
  
  @media screen and (min-width: 1299.8px) {
    width: 1190px;
  }
`;var o=n(184);const r=e=>{let{children:t,style:n}=e;return(0,o.jsx)(i,{style:n,children:t})}},344:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(7691);const o=i.ZP.article`
  background-color: #fff;
  margin: 0 0 15px 0;
  border-radius: 0 0 5px 5px;
`,r=i.ZP.summary`
  box-sizing: border-box;
  width: 100%;
  background-color: var(--color-title-background);
  font: var(--font-little-text-regular);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  border-radius: 5px 5px 0 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title4);
    justify-content: flex-start;
    padding: 10px 0 10px 40px;
  }
`,s=i.ZP.p`
  font: var(--font-little-text-regular);
  color: black;
  padding: 0;
  margin: 0;
  text-align: justify;

  @media screen and (min-width: 459.8px) {
    font: var(--font-text-regular);
  }
`,a=(i.ZP.img`
  display: block;
  width: 100%;
  max-width: 1129px;
  margin: 13px 0 5px 0;

  @media screen and (min-width: 459.8px) {
    margin: 13px 0 10px 0;
  }
`,i.ZP.div`
  padding: 5px 10px;
  @media screen and (min-width: 459.8px) {
    padding: 10px 20px;
  }
`);var d=n(184);const c=e=>{let{title:t,text:n,idForText:i}=e;return(0,d.jsx)(o,{children:(0,d.jsxs)("details",{open:!0,children:[(0,d.jsx)(r,{children:t}),(0,d.jsx)(a,{children:(0,d.jsx)(s,{id:i,children:n})})]})})}},4530:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(2426),o=n(408);const r={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},s=(0,i.ZF)(r),a=(0,o.N8)(s)},8566:(e,t,n)=>{n.d(t,{Z:()=>i});const i=(e,t)=>{try{return localStorage.setItem(e,t)}catch(n){throw n instanceof DOMException&&n.code===DOMException.SECURITY_ERR?new Error("Don't block your cookies. Turn on it in setting of your browser."):new Error(`Unknown error caught: ${n}`)}}},6004:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var i=n(9856),o=n(2791),r=n(7879),s=n(5157);const a=async(e,t)=>{try{const n=((e,t)=>{const n=new Set,i=Object.values(e).map((e=>e[t].theme));for(const o of i)n.add(o);return n.size})(await(0,s.z)(e),t);return n}catch(n){throw console.error(n),n}};var d=n(1838),c=n(3201),l=n(124),x=n(7691);const p=x.ZP.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  box-sizing: border-box;
  list-style-type: none;
  margin: 26px 0 0 0;
  padding: 8px 12px;
  border-radius: 7px;
  background-color: #fff;
  max-width: 250px;

  @media screen and (min-width: 767.8px) {
    max-width: 577px;
    padding: 24px;
    flex-direction: row;
    max-height: 58px;
    align-items: center;
  }
`,h=x.ZP.img`
  width: 18px;
  height: 18px;
  margin: 0 8px 0 0;
`,f=x.ZP.li`
  color: white;
  font: var(--font-little-text-bold);
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);

    &:not(:last-child) {
      margin: 0 30px 0 0;
    }

    &:not(:last-child):after {
      color: black;
      position: relative;
      content: '/';
      left: 30px;
    }
  }
`;var u=n(3589);const m=n.p+"static/media/clock.8a5db54b6f0f9a4cc679e8cd9d78b38f.svg";const g=n.p+"static/media/bar-chart.768f7fb2145142f17bf632da33aa70b0.svg";const b=n.p+"static/media/help-circle.fc40940fc7507687f2f6260b252ddebc.svg";var w=n(184);const j=e=>{let{isChooseProfession:t,setChooseProfession:n}=e;const[i]=(0,o.useContext)(u.Hp),[s,x]=(0,o.useContext)(u.Sc),[j,v]=(0,o.useState)(0),y=`${i}/questions`,P=e=>{v(e)};(0,o.useEffect)((()=>{a(y,s).then(P)}),[i]),(0,o.useEffect)((()=>{n(!1)}),[]);const{t:Z}=(0,r.$)(),[k,C]=(0,o.useState)(!0),[_,z]=(0,o.useState)(0),[S,E]=(0,o.useState)(!1),I=[{text:` ${t?"~"+_:"_"} ${Z("\u0412\u0440\u0435\u043c\u044f")}`,srcIcon:m,alt:"icon of clock"},{text:`${t?_:"_"} ${Z("\u0412\u043e\u043f\u0440\u043e\u0441\u043e\u0432")}`,srcIcon:b,alt:"icon of question in circle"},{text:`${t?j:"_"} ${Z("\u0411\u043b\u043e\u043a\u0430")}`,srcIcon:g,alt:" icon of bar chart "}].map(((e,t)=>(0,w.jsxs)(f,{children:[(0,w.jsx)(h,{src:e.srcIcon,alt:e.alt}),(0,w.jsx)("span",{style:{color:"black"},children:e.text})]},t+1))),T=k||S?null:I,$=k?(0,w.jsx)(c.Z,{width:50,height:50,color:"#fcfdff",margin:"auto"}):null,D=S?(0,w.jsx)(l.Z,{}):null,F=e=>{C(!1),z(e)},O=e=>{E(!0),C(!1),console.error(e)};return(0,o.useEffect)((()=>{if(i){const e=`${i}/questions`;(0,d.r)(e).then(F).catch(O)}else C(!1)}),[i]),(0,w.jsx)("nav",{children:(0,w.jsxs)(p,{children:[T," ",$," ",D]})})};var v=n(1587),y=n(408),P=n(4530);var Z=n(8566),k=n(6155);const C=x.ZP.section`
  width: 250px;
  height: 45px;

  @media screen and (min-width: 767.8px) {
    width: 320px;
    height: 56px;
  }
`;const _=n.p+"static/media/arrowDownLarge.5cb9226dd89f16c2e62eb8a7b2afc8b7.svg",z=e=>{let{setChooseProfession:t}=e;const[,n]=(0,o.useContext)(u.Hp),{t:i}=(0,r.$)(),[s,a]=(0,o.useState)(""),d={[i("Frontend_\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a")]:"Frontend",[i("\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440")]:"Manager"},c=Object.keys(d);return(0,w.jsx)(C,{children:(0,w.jsx)(k.Z,{selected:s||i("\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435_\u0442\u0435\u0441\u0442\u0430"),data:c,onClickElement:e=>{(0,Z.Z)("profession",d[e]),n(d[e]),a(e),t(!0)},customStyle:"\n      gap: 10px; \n      justify-content: flex-end; \n\n      @media screen and (min-width: 767.8px) {\n        gap: 39px; \n        }",srcArrowDown:_})})},S=x.ZP.section`
  max-width: 100%;
  background-color: var(--color-call-action);
  padding: 16px;
  margin: 0 0 13px 0;
  border-radius: 7px;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 32px 0;
  }

  @media screen and (min-width: 767.8px) {
    padding: 16px 16px 16px 40px;
  }
`,E=x.ZP.h1`
    font: var(--font-title4);
    color: white;
    padding: 0;
    margin: 0;

    @media screen and (min-width: 459.8px) {
        font: var(--font-title2);
`,I=x.ZP.h2`
  font: var(--font-h2-little);
  color: white;

  @media screen and (min-width: 767.8px) {
    font: var(--font-h2-large);
  }
`,T=x.ZP.div`
  display: flex;
  width: auto;
  gap: 10px;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (min-width: 767.8px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 45px;
    align-items: center;
  }
`,$=x.ZP.div`
  width: 250px;
  height: 45px;

  @media screen and (min-width: 767.8px) {
    height: 56px;
  }
`,D=x.ZP.div`
  width: 250px;
  height: 45px;

  @media screen and (min-width: 767.8px) {
    width: 320px;
    height: 56px;
  }
`,F=e=>{let{isChooseProfession:t,setChooseProfession:n}=e;const{t:i}=(0,r.$)(),[s,a]=(0,o.useContext)(u.iT);return(0,w.jsxs)(S,{id:"CallToAction",children:[(0,w.jsx)(E,{children:i("\u0422\u0435\u0441\u0442_\u0434\u043b\u044f")}),(0,w.jsx)(j,{isChooseProfession:t,setChooseProfession:n}),(0,w.jsx)(I,{children:i("\u0414\u043e\u0431\u0440\u043e_\u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c")}),(0,w.jsx)(I,{children:i("\u0422\u0435\u0441\u0442_\u0431\u0443\u0434\u0435\u0442")}),(0,w.jsxs)(T,{children:[(0,w.jsx)(D,{children:(0,w.jsx)(z,{setChooseProfession:n})}),(0,w.jsx)($,{children:(0,w.jsx)(v.Z,{pageTo:"quiz",onClick:()=>{const e=(()=>{const e=(0,y.VF)((0,y.iH)(P.Z,"users/user"));if(e&&e.key)return e.key;return""})();a(e),(0,Z.Z)("idUser",e)},text:"\u041d\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u0441\u0442",isDisabledBtn:!t})})]})]})};var O=n(9922),q=n(344);const A=()=>{const{t:e}=(0,r.$)(),t=[{title:e("\u0427\u0442\u043e_\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435"),id:"generalInfoTestText",text:e("\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f_\u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c")},{title:e("\u041a\u0430\u043a_\u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c"),text:e("\u041f\u0440\u043e\u0439\u0442\u0438_\u0442\u0435\u0441\u0442")},{title:e("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b_\u0442\u0435\u0441\u0442\u0430"),text:e("\u041f\u043e\u0441\u043b\u0435_\u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f")}].map(((e,t)=>(0,w.jsx)(q.Z,{title:e.title,text:e.text,idForText:e.id},t+1)));return(0,w.jsx)("section",{children:t})},R=e=>{let{isChooseProfession:t,setChooseProfession:n}=e;return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(i.Z,{style:{flex:"1 1 auto"},children:(0,w.jsxs)(O.P,{children:[(0,w.jsx)(F,{isChooseProfession:t,setChooseProfession:n}),(0,w.jsx)(A,{})]})})})}},9922:(e,t,n)=>{n.d(t,{P:()=>i});const i=n(7691).ZP.main`
  flex: 1 1 auto;
  width: 100%;
  
`}}]);
//# sourceMappingURL=4.d25b5572.chunk.js.map