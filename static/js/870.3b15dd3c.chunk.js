"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[870],{1587:(t,e,n)=>{n.d(e,{Z:()=>d});var i=n(1087),r=n(7879),a=n(7691);const o=a.ZP.button`
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
`;(0,a.ZP)(o)`
  position: absolute;
  right: 0;
  top: 0;
`,a.ZP.button`
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: none;
  background-color: transparent;
  gap: 8px;
  cursor: pointer;
`,a.ZP.article`
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
`,a.ZP.span`
  font: var(--font-button);
  color: var(--color-back-btn);
  text-transform: uppercase;
`;var s=n(184);const d=t=>{let{text:e,pageTo:n,onClick:a,id:d,isDisabledBtn:c=!1}=t;const{t:l}=(0,r.$)();return(0,s.jsx)(i.rU,{className:"btn__link",to:n,onClick:a,id:d,children:(0,s.jsx)(o,{disabled:c,children:l(e)})})}},1838:(t,e,n)=>{n.d(e,{r:()=>a});var i=n(408),r=n(4530);const a=async()=>{try{return await new Promise((function(t,e){(0,i.jM)((0,i.iH)(r.Z,"questions"),(e=>{const n=Object.entries(e.val()).length;t(n)}))}))}catch(t){console.error(t)}}},344:(t,e,n)=>{n.d(e,{Z:()=>l});var i=n(7691);const r=i.ZP.article`
  background-color: #fff;
`,a=i.ZP.summary`
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
  cursor: pointer;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title4);
    justify-content: flex-start;
    padding: 10px 0 10px 40px;
  }
`,o=i.ZP.p`
  font: var(--font-little-text-regular);
  color: black;
  padding: 0;
  margin: 0;
  text-align: justify;

  @media screen and (min-width: 459.8px) {
    font: var(--font-text-regular);
  }
`,s=i.ZP.img`
  display: block;
  width: 100%;
  max-width: 1129px;
  margin: 13px 0 5px 0;

  @media screen and (min-width: 459.8px) {
    margin: 13px 0 10px 0;
  }
`,d=i.ZP.div`
  padding: 5px 10px;
  @media screen and (min-width: 459.8px) {
    padding: 10px 20px;
  }
`;var c=n(184);const l=t=>{let{title:e,text:n,imgSrc:i,imgAlt:l,idForText:x}=t;return(0,c.jsx)(r,{children:(0,c.jsxs)("details",{children:[(0,c.jsx)(a,{children:e}),(0,c.jsxs)(d,{children:[!!i&&(0,c.jsx)(s,{src:i,alt:l}),(0,c.jsx)(o,{id:x,children:n})]})]})})}},4530:(t,e,n)=>{n.d(e,{Z:()=>s});var i=n(2426),r=n(408);const a={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},o=(0,i.ZF)(a),s=(0,r.N8)(o)},265:(t,e,n)=>{n.d(e,{n:()=>i});const i=t=>{t.forEach((t=>{document.querySelector(t.selector)&&(document.querySelector(t.selector).innerHTML=JSON.parse(JSON.stringify(t.json)))}))}},2377:(t,e,n)=>{n.r(e),n.d(e,{default:()=>g});var i=n(7879),r=n(1087),a=n(9856),o=n(4702),s=n(5270),d=n(7691);const c=d.ZP.footer`
  box-sizing: border-box;
  background-color: var(--color-footer);
  padding: 16px;
  margin: 10px 0 0 0;

  @media screen and (min-width: 1023.8px) {
    margin: 30px 0 0 0;
  }
`,l=d.ZP.section`
  @media screen and (min-width: 767.8px) margin-right: 10px;
`,x=d.ZP.ul`
  list-style-type: none;
  padding: 0;

  @media screen and (min-width: 767.8px) {
    order: 2;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
  }

  @media screen and (min-width: 1023.8px) {
    margin: 0;
  }
`,p=d.ZP.li`
  text-align: left;

  &:not(:last-child) {
    margin: 0 0 12px 0;
  }

  @media screen and (min-width: 767.8px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0px;

    &:not(:last-child) {
      margin: 0;
    }

    @media screen and (min-width: 1023.8px) {
      &:not(:last-child) {
        margin: 0;
      }
    }
  }
`;var A=n(184);const g=()=>{const{t:t}=(0,i.$)(),e=[{text:t("\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c"),link:"/reportbug"},{text:t("\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"),link:"/reestablish"},{text:t("\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430"),link:"/politics"}].map(((t,e)=>(0,A.jsx)(p,{children:(0,A.jsx)(r.rU,{className:"footer__list-link",to:t.link,children:t.text})},e+1)));return(0,A.jsx)(c,{children:(0,A.jsx)(a.Z,{children:(0,A.jsxs)(s.b,{widthFlexStart:767.8,gap:15,jc:"flex-start",children:[(0,A.jsx)(o.Z,{location:"footer"}),(0,A.jsx)(l,{children:(0,A.jsx)("nav",{children:(0,A.jsx)(x,{children:e})})})]})})})}},2870:(t,e,n)=>{n.r(e),n.d(e,{default:()=>E});var i=n(2791),r=n(9856),a=n(7879),o=n(1838),s=n(3201),d=n(7691);const c=d.ZP.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  list-style-type: none;
  margin: 26px 0 0 0;
  padding: 8px 12px;
  background-color: var(--color-call-action-info);

  @media screen and (min-width: 459.8px) {
    max-width: 685px;
    padding: 24px;
    flex-direction: row;
  }
`,l=d.ZP.img`
  width: 18px;
  height: 18px;
  margin: 0 8px 0 0;
`,x=d.ZP.li`
  color: white;
  font: var(--font-little-text-bold);
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  @media screen and (min-width: 459.8px) {
    font: var(--font-text-bold);

    &:not(:last-child) {
      margin: 0 30px 0 0;
    }

    &:not(:last-child):after {
      position: relative;
      content: '/';
      left: 12px;
    }
  }
`;var p=n(184);const A=()=>{const{t:t}=(0,a.$)(),[e,r]=(0,i.useState)(!0),[d,A]=(0,i.useState)(0),g=t=>{r(!1),A(t)};(0,i.useEffect)((()=>{(0,o.r)().then(g)}),[]);const m=[{text:`~ ${d} ${t("\u0412\u0440\u0435\u043c\u044f")}`,srcIcon:n(874),alt:"icon of clock"},{text:t("\u0412\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u044e\u0449\u0430\u044f_\u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c"),srcIcon:n(5346),alt:"icon of question in circle"},{text:`${d} ${t("\u0412\u043e\u043f\u0440\u043e\u0441\u043e\u0432")}`,srcIcon:n(4801),alt:"icon of bar chart"}].map(((t,e)=>(0,p.jsxs)(x,{children:[(0,p.jsx)(l,{src:t.srcIcon,alt:t.alt}),(0,p.jsx)("span",{children:t.text})]},e+1)));return(0,p.jsx)("nav",{children:(0,p.jsx)(c,{children:e?(0,p.jsx)(s.Z,{width:50,height:50,color:"#fcfdff",margin:"auto"}):m})})};var g=n(1587),m=n(408),f=n(4530);const h=()=>{const t=(0,m.VF)((0,m.iH)(f.Z,"users/user"));if(t&&t.key){const e=t.key;localStorage.setItem("idUser",e)}},u=d.ZP.section`
  max-width: 100%;
  background-color: var(--color-call-action);
  padding: 16px;
  margin: 0 0 13px 0;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 32px 0;
  }

  @media screen and (min-width: 767.8px) {
    padding: 16px 16px 16px 40px;
  }
`,b=d.ZP.h1`
    font: var(--font-title4);
    color: white;
    padding: 0;
    margin: 0;

    @media screen and (min-width: 459.8px) {
        font: var(--font-title2);
`,j=d.ZP.p`
  font: var(--font-little-text-regular);
  color: white;

  @media screen and (min-width: 459.8px) {
    font: var(--font-text-regular);
  }
`,w=()=>{const{t:t}=(0,a.$)();return(0,p.jsxs)(u,{id:"CallToAction",children:[(0,p.jsx)(b,{children:t("\u0422\u0435\u0441\u0442_\u0434\u043b\u044f_Frontend_\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432")}),(0,p.jsx)(A,{}),(0,p.jsx)(j,{children:t("\u0414\u043e\u0431\u0440\u043e_\u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c")}),(0,p.jsx)(j,{children:t("\u0422\u0435\u0441\u0442_\u0431\u0443\u0434\u0435\u0442")}),(0,p.jsx)(g.Z,{pageTo:"quiz",onClick:h,text:"\u041d\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u0441\u0442"})]})};var v=n(2377),y=n(9922),k=n(344),P=n(265);const S=()=>{const{t:t}=(0,a.$)(),e=[{title:t("\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438_\u0442\u0435\u0441\u0442\u0430"),img:n(1176),id:"generalInfoTestText",alt:"\u041f\u0430\u0440\u0435\u043d\u044c \u0438\u0449\u0435\u0442 \u0432\u0435\u0440\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",text:t("\u0414\u0430\u043d\u043d\u044b\u0439_\u0442\u0435\u0441\u0442")},{title:t("\u041a\u0430\u043a_\u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c"),text:t("\u041f\u0440\u043e\u0439\u0442\u0438_\u0442\u0435\u0441\u0442")},{title:t("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b_\u0442\u0435\u0441\u0442\u0430"),img:n(5194),alt:"\u0422\u0435\u0441\u0442 \u0441 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c\u0438 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430\u043c\u0438 \u043e\u0442\u0432\u0435\u0442\u0430",text:t("\u041f\u043e\u0441\u043b\u0435_\u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f")}].map(((t,e)=>(0,p.jsx)(k.Z,{title:t.title,text:t.text,imgSrc:t.img||"",imgAlt:t.alt||"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",idForText:t.id},e+1))),r=[{selector:"#generalInfoTestText",json:t("\u0414\u0430\u043d\u043d\u044b\u0439_\u0442\u0435\u0441\u0442")}];return(0,i.useEffect)((()=>{(0,P.n)(r)})),(0,p.jsx)("section",{children:e})},E=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(y.P,{children:(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(w,{}),(0,p.jsx)(S,{})]})}),(0,p.jsx)(v.default,{})]})},5270:(t,e,n)=>{n.d(e,{b:()=>i});const i=n(7691).ZP.div`
  gap: ${t=>{let{gap:e}=t;return e?e+"px":""}};
  ${function(t){let{widthFlexStart:e,jc:n="space-between"}=t;return e?`\n      position: relative;\n      @media screen and (min-width: ${e}px) {\n        display: flex;\n        justify-content: ${n};\n        align-items: center;\n        width: 100%;\n      }\n      `:`\n            display: flex;\n            justify-content: ${n};\n            align-items: center;\n            `}}
`},9922:(t,e,n)=>{n.d(e,{P:()=>i});const i=n(7691).ZP.main`
  flex: 1 1 auto;
`},5194:(t,e,n)=>{t.exports=n.p+"static/media/chooseVariant.4bef527e0c0893f29d5c.png"},1176:(t,e,n)=>{t.exports=n.p+"static/media/variants.d6f7f1862e6bb1b814e0.png"},4801:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABfSURBVHgB7ZKxDcAgDARfWSRsktWyUiaK2IANzA+AQDaGAvmka+zimgeC3YjIS3+aWv8LPjw00XtlpEtE1kVGK3KJYLAir4iJiMxHrCtSRWBckTbiyvmRjxaaJ++Bngp79iiFrWF7mQAAAABJRU5ErkJggg=="},874:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEfSURBVHgB3VTtEYMgDM11AjeoIziKG+gGuEHdwG7CCIzQbsAIHSGFNhyByof0n+8u50kevLyIATg1ELEzIUxIExo9NK1N0AqzeTTxwjL0YSGz4c4OUOTiyvKDiRlDV2vt4SttsNWLCv6C3ulWIs/s8AEqQY6cyJgjOsuCvdvo+Tuknbjiulz1ekfwI+KanSlQ8QLjpKTkxNb6SKQkIIgiIdOeIVrnIiWBPu4CTyY3xyKQQZJTWZ3GxEeuEXAVXqER+L2uQYsuLP+k5wjtGKKzAnV3AxQ0gnVh2kvayen+xgUOAv2PpnOkkUj/jIqpRN6YSNEJhsPuBjWwRPTQtiruiK6s/WaK8TY4Avyd9ynY6ttvHgnZOfWIXEly0cGp8QbMLJubmLrH8AAAAABJRU5ErkJggg=="},5346:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF4SURBVHgBxVbtccIwDHV6/d9sgEegEzSdoN0gbFA2SDcIG6QbpJ0gI8AGZoPQCVRBpYtqrNgu3PHufAb0pPcsfxzG3BoAUOJ4w9HjcDBhxDFQzJr/ApPXVCwFXZYYuR9EAXa88DgvVJzhcCxTBCxMbTnOT4k5g2jjMpbQCwFrMoD8VghZjbTSBITbUbTQBmrwigZNhNtUBwQcnOOsNcRlI5UvUPEqAuKdcF9SoVZzjL81FGv9ACc1gaS132cSY8dlkmGYehk9TaItJyjxPwbu6Hd2823iAhVO3KYPhXag+UEmOlJemHmBXmz8FpSj6tfjlexojt3Ykly+F0XxiGOv8CzNp87c05e9EPlSEg0WfTYRiGO9Q/5BBvhEjOZCiCPfhYLcx3qmwIZ4pRK3Ys9siMDPyjizoZ8RkV5dhSANfJEg/4HcJOXC7012glwnFM976gNJQJ9rmUycV+/euCQBT2wF4dc3hFbbpxyxo+OtKMp/JJqLil8TPy1UEe7BqHRKAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=870.3b15dd3c.chunk.js.map