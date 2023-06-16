"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[870],{1587:(t,e,n)=>{n.d(e,{Z:()=>s});var i=n(1087),r=n(7879),a=n(7691);const o=a.ZP.button`
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
`;var d=n(184);const s=t=>{let{text:e,pageTo:n,onClick:a,id:s,isDisabledBtn:c=!1}=t;const{t:l}=(0,r.$)();return(0,d.jsx)(i.rU,{className:"btn__link",to:n,onClick:a,id:s,children:(0,d.jsx)(o,{disabled:c,children:l(e)})})}},1838:(t,e,n)=>{n.d(e,{r:()=>a});var i=n(408),r=n(4530);const a=async()=>{try{return await new Promise((function(t,e){(0,i.jM)((0,i.iH)(r.Z,"questions"),(e=>{const n=Object.entries(e.val()).length;t(n)}))}))}catch(t){console.error(t)}}},9856:(t,e,n)=>{n.d(e,{Z:()=>a});n(2791);const i=n(7691).ZP.div`
  min-width: 287px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 5px;
`;var r=n(184);const a=t=>{let{children:e}=t;return(0,r.jsx)(i,{children:e})}},344:(t,e,n)=>{n.d(e,{Z:()=>l});var i=n(7691);const r=i.ZP.article`
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
`,d=i.ZP.img`
  display: block;
  width: 100%;
  max-width: 1129px;
  margin: 13px 0 5px 0;

  @media screen and (min-width: 459.8px) {
    margin: 13px 0 10px 0;
  }
`,s=i.ZP.div`
  padding: 5px 10px;
  @media screen and (min-width: 459.8px) {
    padding: 10px 20px;
  }
`;var c=n(184);const l=t=>{let{title:e,text:n,imgSrc:i,imgAlt:l,idForText:x}=t;return(0,c.jsx)(r,{children:(0,c.jsxs)("details",{children:[(0,c.jsx)(a,{children:e}),(0,c.jsxs)(s,{children:[!!i&&(0,c.jsx)(d,{src:i,alt:l}),(0,c.jsx)(o,{id:x,children:n})]})]})})}},2626:(t,e,n)=>{n.d(e,{Z:()=>a});const i=n(7691).ZP.img`
  width: 86px;
  height: 42px;

  @media screen and (min-width: 767.8px) {
    width: ${t=>{let{location:e}=t;return"header"===e?"140px":"113px"}};
    height: ${t=>{let{location:e}=t;return"header"===e?"68px":"55px"}};
  }
`;var r=n(184);const a=t=>{let{location:e,style:a}=t;return(0,r.jsx)(i,{src:n(6988),alt:"logo",location:e,style:a})}},4530:(t,e,n)=>{n.d(e,{Z:()=>d});var i=n(2426),r=n(408);const a={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},o=(0,i.ZF)(a),d=(0,r.N8)(o)},713:(t,e,n)=>{n.d(e,{X:()=>i,v:()=>r});const i=3600,r=3},265:(t,e,n)=>{n.d(e,{n:()=>i});const i=t=>{t.forEach((t=>{document.querySelector(t.selector)&&(document.querySelector(t.selector).innerHTML=JSON.parse(JSON.stringify(t.json)))}))}},2377:(t,e,n)=>{n.r(e),n.d(e,{default:()=>g});var i=n(7879),r=n(1087),a=n(9856),o=n(2626),d=n(5270),s=n(7691);const c=s.ZP.footer`
  box-sizing: border-box;
  background-color: var(--color-footer);
  padding: 16px;
  margin: 10px 0 0 0;

  @media screen and (min-width: 1023.8px) {
    margin: 30px 0 0 0;
  }
`,l=s.ZP.section`
  @media screen and (min-width: 767.8px) margin-right: 10px;
`,x=s.ZP.ul`
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
`,p=s.ZP.li`
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
`;var A=n(184);const g=()=>{const{t:t}=(0,i.$)(),e=[{text:t("\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c"),link:"/reportbug"},{text:t("\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"),link:"/reestablish"},{text:t("\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430"),link:"/politics"}].map(((t,e)=>(0,A.jsx)(p,{children:(0,A.jsx)(r.rU,{className:"footer__list-link",to:t.link,children:t.text})},e+1)));return(0,A.jsx)(c,{children:(0,A.jsx)(a.Z,{children:(0,A.jsxs)(d.b,{widthFlexStart:767.8,gap:15,jc:"flex-start",children:[(0,A.jsx)(o.Z,{location:"footer"}),(0,A.jsx)(l,{children:(0,A.jsx)("nav",{children:(0,A.jsx)(x,{children:e})})})]})})})}},2870:(t,e,n)=>{n.r(e),n.d(e,{default:()=>S});var i=n(2791),r=n(9856),a=n(7879),o=n(1838),d=n(3201),s=n(713),c=n(7691);const l=c.ZP.ul`
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
`,x=c.ZP.img`
  width: 18px;
  height: 18px;
  margin: 0 8px 0 0;
`,p=c.ZP.li`
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
`;var A=n(184);const g=()=>{const{t:t}=(0,a.$)(),[e,r]=(0,i.useState)({loading:!0,quantityQuestions:0}),c=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;void 0!==t&&r({loading:!1,quantityQuestions:t})};(0,i.useEffect)((()=>{(0,o.r)().then(c)}),[e.loading]);const g=[{text:`${s.X/60} ${t("\u0412\u0440\u0435\u043c\u044f")}`,srcIcon:n(874),alt:"icon of clock"},{text:t("\u0412\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u044e\u0449\u0430\u044f_\u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c"),srcIcon:n(5346),alt:"icon of question in circle"},{text:`${e.quantityQuestions} ${t("\u0412\u043e\u043f\u0440\u043e\u0441\u043e\u0432")}`,srcIcon:n(4801),alt:"icon of bar chart"}].map(((t,e)=>(0,A.jsxs)(p,{children:[(0,A.jsx)(x,{src:t.srcIcon,alt:t.alt}),(0,A.jsx)("span",{children:t.text})]},e+1)));return(0,A.jsx)("nav",{children:(0,A.jsx)(l,{children:e.loading?(0,A.jsx)(d.Z,{width:50,height:50,color:"#fcfdff",margin:"auto"}):g})})};var m=n(1587),h=n(408),f=n(4530);const u=()=>{const t=(0,h.VF)((0,h.iH)(f.Z,"users/user"));if(t&&t.key){const e=t.key;localStorage.setItem("idUser",e)}},b=c.ZP.section`
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
`,j=c.ZP.h1`
    font: var(--font-title4);
    color: white;
    padding: 0;
    margin: 0;

    @media screen and (min-width: 459.8px) {
        font: var(--font-title2);
`,w=c.ZP.p`
  font: var(--font-little-text-regular);
  color: white;

  @media screen and (min-width: 459.8px) {
    font: var(--font-text-regular);
  }
`,v=()=>{const{t:t}=(0,a.$)();return(0,A.jsxs)(b,{id:"CallToAction",children:[(0,A.jsx)(j,{children:t("\u0422\u0435\u0441\u0442_\u0434\u043b\u044f_Frontend_\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432")}),(0,A.jsx)(g,{}),(0,A.jsx)(w,{children:t("\u0414\u043e\u0431\u0440\u043e_\u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c")}),(0,A.jsx)(w,{children:t("\u0422\u0435\u0441\u0442_\u0431\u0443\u0434\u0435\u0442")}),(0,A.jsx)(m.Z,{pageTo:"quiz",onClick:u,text:"\u041d\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u0441\u0442"})]})};var y=n(2377),P=n(9922),k=n(344),Z=n(265);const E=()=>{const{t:t}=(0,a.$)(),e=[{title:t("\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438_\u0442\u0435\u0441\u0442\u0430"),img:n(1176),id:"generalInfoTestText",alt:"\u041f\u0430\u0440\u0435\u043d\u044c \u0438\u0449\u0435\u0442 \u0432\u0435\u0440\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",text:t("\u0414\u0430\u043d\u043d\u044b\u0439_\u0442\u0435\u0441\u0442")},{title:t("\u041a\u0430\u043a_\u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c"),text:t("\u041f\u0440\u043e\u0439\u0442\u0438_\u0442\u0435\u0441\u0442")},{title:t("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b_\u0442\u0435\u0441\u0442\u0430"),img:n(5194),alt:"\u0422\u0435\u0441\u0442 \u0441 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c\u0438 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430\u043c\u0438 \u043e\u0442\u0432\u0435\u0442\u0430",text:t("\u041f\u043e\u0441\u043b\u0435_\u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f")}].map(((t,e)=>(0,A.jsx)(k.Z,{title:t.title,text:t.text,imgSrc:t.img||"",imgAlt:t.alt||"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",idForText:t.id},e+1))),r=[{selector:"#generalInfoTestText",json:t("\u0414\u0430\u043d\u043d\u044b\u0439_\u0442\u0435\u0441\u0442")}];return(0,i.useEffect)((()=>{(0,Z.n)(r)})),(0,A.jsx)("section",{children:e})},S=()=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(P.P,{children:(0,A.jsxs)(r.Z,{children:[(0,A.jsx)(v,{}),(0,A.jsx)(E,{})]})}),(0,A.jsx)(y.default,{})]})},5270:(t,e,n)=>{n.d(e,{b:()=>i});const i=n(7691).ZP.div`
  gap: ${t=>{let{gap:e}=t;return e?e+"px":""}};
  ${function(t){let{widthFlexStart:e,jc:n="space-between"}=t;return e?`\n      position: relative;\n      @media screen and (min-width: ${e}px) {\n        display: flex;\n        justify-content: ${n};\n        align-items: center;\n        width: 100%;\n      }\n      `:`\n            display: flex;\n            justify-content: ${n};\n            align-items: center;\n            `}}
`},9922:(t,e,n)=>{n.d(e,{P:()=>i});const i=n(7691).ZP.main`
  flex: 1 1 auto;
`},6988:(t,e,n)=>{t.exports=n.p+"static/media/logoQuiz.fe60373c0b47051a6b64.png"},5194:(t,e,n)=>{t.exports=n.p+"static/media/chooseVariant.4bef527e0c0893f29d5c.png"},1176:(t,e,n)=>{t.exports=n.p+"static/media/variants.d6f7f1862e6bb1b814e0.png"},4801:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABfSURBVHgB7ZKxDcAgDARfWSRsktWyUiaK2IANzA+AQDaGAvmka+zimgeC3YjIS3+aWv8LPjw00XtlpEtE1kVGK3KJYLAir4iJiMxHrCtSRWBckTbiyvmRjxaaJ++Bngp79iiFrWF7mQAAAABJRU5ErkJggg=="},874:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEfSURBVHgB3VTtEYMgDM11AjeoIziKG+gGuEHdwG7CCIzQbsAIHSGFNhyByof0n+8u50kevLyIATg1ELEzIUxIExo9NK1N0AqzeTTxwjL0YSGz4c4OUOTiyvKDiRlDV2vt4SttsNWLCv6C3ulWIs/s8AEqQY6cyJgjOsuCvdvo+Tuknbjiulz1ekfwI+KanSlQ8QLjpKTkxNb6SKQkIIgiIdOeIVrnIiWBPu4CTyY3xyKQQZJTWZ3GxEeuEXAVXqER+L2uQYsuLP+k5wjtGKKzAnV3AxQ0gnVh2kvayen+xgUOAv2PpnOkkUj/jIqpRN6YSNEJhsPuBjWwRPTQtiruiK6s/WaK8TY4Avyd9ynY6ttvHgnZOfWIXEly0cGp8QbMLJubmLrH8AAAAABJRU5ErkJggg=="},5346:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF4SURBVHgBxVbtccIwDHV6/d9sgEegEzSdoN0gbFA2SDcIG6QbpJ0gI8AGZoPQCVRBpYtqrNgu3PHufAb0pPcsfxzG3BoAUOJ4w9HjcDBhxDFQzJr/ApPXVCwFXZYYuR9EAXa88DgvVJzhcCxTBCxMbTnOT4k5g2jjMpbQCwFrMoD8VghZjbTSBITbUbTQBmrwigZNhNtUBwQcnOOsNcRlI5UvUPEqAuKdcF9SoVZzjL81FGv9ACc1gaS132cSY8dlkmGYehk9TaItJyjxPwbu6Hd2823iAhVO3KYPhXag+UEmOlJemHmBXmz8FpSj6tfjlexojt3Ykly+F0XxiGOv8CzNp87c05e9EPlSEg0WfTYRiGO9Q/5BBvhEjOZCiCPfhYLcx3qmwIZ4pRK3Ys9siMDPyjizoZ8RkV5dhSANfJEg/4HcJOXC7012glwnFM976gNJQJ9rmUycV+/euCQBT2wF4dc3hFbbpxyxo+OtKMp/JJqLil8TPy1UEe7BqHRKAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=870.5b875746.chunk.js.map