"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[137],{1587:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(1087),o=n(7879),i=n(7691);const a=i.ZP.button`
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
`;(0,i.ZP)(a)`
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
`;var s=n(184);const l=e=>{let{text:t,pageTo:n,onClick:i,id:l,isDisabledBtn:c=!1}=e;const{t:d}=(0,o.$)();return(0,s.jsx)(r.rU,{className:"btn__link",to:n,onClick:i,id:l,children:(0,s.jsx)(a,{disabled:c,children:d(t)})})}},1838:(e,t,n)=>{n.d(t,{r:()=>i});var r=n(408),o=n(4530);const i=async()=>{try{return await new Promise((function(e,t){(0,r.jM)((0,r.iH)(o.Z,"questions"),(t=>{const n=Object.entries(t.val()).length;e(n)}))}))}catch(e){console.error(e)}}},9856:(e,t,n)=>{n.d(t,{Z:()=>i});n(2791);const r=n(7691).ZP.div`
max-width: 85%;
min-width: 287px;
margin: 0 auto;
padding: 0 5px;
@media screen and (min-width: 1299.8px) {
  max-width: 1190px;
}
`;var o=n(184);const i=e=>{let{children:t}=e;return(0,o.jsx)(r,{children:t})}},4530:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(2426),o=n(408);const i={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},a=(0,r.ZF)(i),s=(0,o.N8)(a)},3218:(e,t,n)=>{n.d(t,{k:()=>r});const r=e=>{const t=localStorage.getItem(e);if(null===t||void 0===t)throw new Error(`Value not found for key '${e}'`);try{return`${t}`}catch(n){throw n instanceof Error?new Error(`Invalid JSON data for key '${e}': ${n.message}`):new Error(`Unknown error caught: ${n}`)}}},8137:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Je});var r=n(2791),o=n(9856),i=n(3366),a=n(7462),s=n(8182),l=n(2554),c=n(4419);function d(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(e){return parseFloat(e)}var p=n(2065),h=n(6934),x=n(1402),m=n(5878),g=n(1217);function f(e){return(0,g.Z)("MuiSkeleton",e)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var b=n(184);const w=["animation","className","component","height","style","variant","width"];let v,y,j,A,k=e=>e;const Z=(0,l.F4)(v||(v=k`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),S=(0,l.F4)(y||(y=k`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),C=(0,h.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((e=>{let{theme:t,ownerState:n}=e;const r=d(t.shape.borderRadius)||"px",o=u(t.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,p.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${r}/${Math.round(o/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(e=>{let{ownerState:t}=e;return"pulse"===t.animation&&(0,l.iv)(j||(j=k`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),Z)}),(e=>{let{ownerState:t,theme:n}=e;return"wave"===t.animation&&(0,l.iv)(A||(A=k`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),S,(n.vars||n).palette.action.hover)})),P=r.forwardRef((function(e,t){const n=(0,x.Z)({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:o,component:l="span",height:d,style:u,variant:p="text",width:h}=n,m=(0,i.Z)(n,w),g=(0,a.Z)({},n,{animation:r,component:l,variant:p,hasChildren:Boolean(m.children)}),v=(e=>{const{classes:t,variant:n,animation:r,hasChildren:o,width:i,height:a}=e,s={root:["root",n,r,o&&"withChildren",o&&!i&&"fitContent",o&&!a&&"heightAuto"]};return(0,c.Z)(s,f,t)})(g);return(0,b.jsx)(C,(0,a.Z)({as:l,ref:t,className:(0,s.Z)(v.root,o),ownerState:g},m,{style:(0,a.Z)({width:h,height:d},u)}))})),E=P;var $=n(2466);const q=(0,n(4046).ZP)();var R=n(7078),I=n(8519),T=n(5080),B=n(1184),N=n(5682);const z=["component","direction","spacing","divider","children","className","useFlexGap"],M=(0,T.Z)(),Q=q("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function F(e){return(0,R.Z)({props:e,name:"MuiStack",defaultTheme:M})}function U(e,t){const n=r.Children.toArray(e).filter(Boolean);return n.reduce(((e,o,i)=>(e.push(o),i<n.length-1&&e.push(r.cloneElement(t,{key:`separator-${i}`})),e)),[])}const H=e=>{let{ownerState:t,theme:n}=e,r=(0,a.Z)({display:"flex",flexDirection:"column"},(0,B.k9)({theme:n},(0,B.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(t.spacing){const e=(0,N.hB)(n),o=Object.keys(n.breakpoints.values).reduce(((e,n)=>(("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e)),{}),i=(0,B.P$)({values:t.direction,base:o}),a=(0,B.P$)({values:t.spacing,base:o});"object"===typeof i&&Object.keys(i).forEach(((e,t,n)=>{if(!i[e]){const r=t>0?i[n[t-1]]:"column";i[e]=r}}));const s=(n,r)=>{return t.useFlexGap?{gap:(0,N.NA)(e,n)}:{"& > :not(style) + :not(style)":{margin:0,[`margin${o=r?i[r]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,N.NA)(e,n)}};var o};r=(0,$.Z)(r,(0,B.k9)({theme:n},a,s))}return r=(0,B.dt)(n.breakpoints,r),r};const O=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=Q,useThemeProps:n=F,componentName:o="MuiStack"}=e,l=()=>(0,c.Z)({root:["root"]},(e=>(0,g.Z)(o,e)),{}),d=t(H),u=r.forwardRef((function(e,t){const r=n(e),o=(0,I.Z)(r),{component:c="div",direction:u="column",spacing:p=0,divider:h,children:x,className:m,useFlexGap:g=!1}=o,f=(0,i.Z)(o,z),w={direction:u,spacing:p,useFlexGap:g},v=l();return(0,b.jsx)(d,(0,a.Z)({as:c,ownerState:w,ref:t,className:(0,s.Z)(v.root,m)},f,{children:h?U(x,h):x}))}));return u}({createStyledComponent:(0,h.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,x.Z)({props:e,name:"MuiStack"})}),_=O,D=()=>(0,b.jsxs)(_,{spacing:0,children:[(0,b.jsx)(E,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}}),(0,b.jsx)(E,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}}),(0,b.jsx)(E,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}}),(0,b.jsx)(E,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}}),(0,b.jsx)(E,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}})]});var L=n(408),G=n(4530);var W=n(7691);const Y=W.ZP.li`
  word-wrap: break-word;
  box-sizing: border-box;
  flex-basis: 100%;
  list-style-type: none;
  padding: 7px;
  font: var(--font-little-text-regular);
  cursor: pointer;
  background-color: #EEEEFF;
  border-radius: 7px;
  border: none;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 767.8px) {
    font: var(--font-regular);
    padding: 15px 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  
`,V=e=>{let{children:t,index:n,setRef:r,onFocusUserAnswer:o}=e;return(0,b.jsx)(Y,{ref:r,tabIndex:0,onClick:()=>o(n),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),o(n))},children:t})},K=(0,r.createContext)(null),J=e=>{let{children:t,value:n}=e;return(0,b.jsx)(K.Provider,{value:n,children:t})},X=e=>{e.forEach((e=>{e.removeAttribute("style"),e.removeAttribute("data-useranswer")}))},ee=W.ZP.article`
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
`,te=W.ZP.ul`
  margin: 0;
  padding: 0;
  @media screen and (min-width: 767.8px) {
    flex-basis: auto;
  }
`,ne=e=>{let{showButtonAccept:t,lang:n}=e;const[o,i]=(0,r.useState)({answers:[],loading:!0,error:!1}),a=(0,r.useContext)(K),s=a?a[0]:1,l=[],c=e=>{l.push(e)},d=e=>{!!l.filter((e=>e.dataset.useranswer)).length||t(),X(l),l[e].setAttribute("style","background-color: #B7B7FF"),l[e].setAttribute("data-useranswer","true"),l[e].focus()},u=e=>{const t=Object.entries(e).map((e=>e.join(". ")));Array.isArray(t)&&i((e=>({...e,answers:t,loading:!1})))},p=o.answers.map(((e,t)=>(0,b.jsx)(V,{index:t,setRef:c,onFocusUserAnswer:d,children:e},t+1))),h=o.loading?(0,b.jsx)(D,{}):null,x=o.error?"ERROR!":null,m=o.loading||o.error?null:(0,b.jsx)(ee,{id:"answersAll",children:(0,b.jsx)(te,{children:p})}),g=()=>{i((e=>({...e,error:!0,loading:!1})))};return(0,r.useEffect)((()=>{X(l),s&&(async(e,t)=>await new Promise((function(n,r){(0,L.jM)((0,L.iH)(G.Z,`answers/answers${e}/${t}`),(e=>{e.val()?n(e.val()):r()}))})))(s,n).then(u).catch(g)}),[s,n]),(0,b.jsxs)(b.Fragment,{children:[" ",h," ",m," ",x]})},re=async(e,t)=>await new Promise((function(n,r){(0,L.jM)((0,L.iH)(G.Z,`questions/question${e}/${t}/img`),(e=>{const t=e.val();n(t)}))})),oe=async(e,t)=>await new Promise((function(n,r){(0,L.jM)((0,L.iH)(G.Z,`questions/question${e}/${t}/name`),(e=>{const t=e.val();n(t)}))})),ie=()=>(0,b.jsx)(_,{spacing:1,children:(0,b.jsx)(E,{variant:"text",sx:{fontSize:"5rem"}})}),ae=W.ZP.article`
  padding-bottom: 14px;
`,se=W.ZP.h2`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 20px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-semi-bold);
  }
`,le=W.ZP.picture`
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
`,ce=W.ZP.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  ${function(e){let{currentQuestionNumb:t}=e;if(16!==t)return"\n      @media screen and (min-width: 667.8px) {\n        width: 85%;\n      }\n  \n      @media screen and (min-width: 923.8px) {\n        width: 78%;\n      }\n            "}}
`,de=e=>{let{lang:t}=e;const n=(0,r.useContext)(K),o=n?n[0]:1,[i,a]=(0,r.useState)({question:"",loading:!0,srcImg:"",error:!1}),s=i.error?"ERROR!!":null,l=i.loading?(0,b.jsx)(ie,{}):null,c=i.loading||i.error?null:i.srcImg?(0,b.jsxs)(ae,{children:[(0,b.jsx)(se,{id:"questionTitle",tabIndex:0,children:i.question}),(0,b.jsxs)(le,{children:[(0,b.jsx)("source",{type:"image/png",media:"(min-width: 320px)",srcSet:i.srcImg,width:"120",height:"auto"}),(0,b.jsx)("source",{type:"image/png",media:"(min-width: 487px)",srcSet:i.srcImg,width:"768",height:"auto"}),(0,b.jsx)("source",{type:"image/png",media:"(min-width: 769px)",srcSet:i.srcImg,width:"1024",height:"auto"}),(0,b.jsx)(ce,{src:i.srcImg,width:"1024",height:"auto",alt:"\u041a\u043e\u0434 \u043d\u0430 JS"})]})]}):(0,b.jsx)(ae,{children:(0,b.jsx)(se,{id:"questionTitle",tabIndex:0,children:i.question})}),d=e=>{const t={src:"",question:""};e.forEach((e=>{e.value.startsWith("http")&&(t.src=e.value),"No"===e.value&&(t.src=""),"string"===typeof e.value&&(t.question=e.value)})),a((e=>({...e,loading:!1,question:t.question,srcImg:t.src})))},u=e=>{throw a((e=>({...e,loading:!1,error:!0}))),new Error(e)};return(0,r.useEffect)((()=>{Promise.allSettled([re(o,t),oe(o,t)]).then(d).catch(u)}),[o,t]),(0,b.jsxs)(b.Fragment,{children:[l," ",c," ",s]})};var ue=n(7879);const pe=()=>(0,b.jsx)(_,{spacing:3,children:(0,b.jsx)(E,{variant:"rounded",width:300,height:25})}),he=async(e,t)=>{try{return await new Promise((function(n,r){(0,L.jM)((0,L.iH)(G.Z,`questions/question${e}/${t}/theme`),(e=>{const t=e.val();n(t)}))}))}catch(n){console.error(n)}};var xe=n(1838);const me=W.ZP.h1`
  font: var(--font-title4);
  color: black;
  padding: 0;
  position: relative;
  flex: 0 1 85%;

  @media screen and (min-width: 459.8px) {
    font: var(--font-bold);
  }
`,ge=W.ZP.span`
  color: #000;
  font-size: 16px;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;
  padding: 0 0 0 5px;
`,fe=(0,W.ZP)(ge)`
  display: block;
  padding: 0;

  @media screen and (min-width: 459.8px) {
    display: inline;
    padding: 0 0 0 10px;
  }
`,be=e=>{let{lang:t}=e;const{t:n}=(0,ue.$)(),o=(0,r.useContext)(K),i=o?o[0]:1,[a,s]=(0,r.useState)({loading:!0,questionTheme:null,totalQuestionNumber:0}),l=a.loading?(0,b.jsx)(pe,{}):null,c=a.loading?null:(0,b.jsxs)(me,{id:"questionName",children:[n("\u0412\u043e\u043f\u0440\u043e\u0441")," ",i,(0,b.jsx)(ge,{id:"totalQuestionQuantity",tabIndex:0,children:`/ ${a.totalQuestionNumber}`}),(0,b.jsx)(fe,{id:"themeQuestion",children:a.questionTheme})]}),d=e=>{const t={theme:null,totalQuestionNumber:null};e.forEach((e=>{"number"===typeof e.value?t.totalQuestionNumber=e.value:"string"===typeof e.value&&(t.theme=e.value)})),s({loading:!1,questionTheme:`${t.theme}`,totalQuestionNumber:t.totalQuestionNumber});for(const n in t)if(!t[n])throw new Error(`Value of ${n} is ${t[n]} in object "items"`)};return(0,r.useEffect)((()=>{Promise.allSettled([he(i,t),(0,xe.r)()]).then(d)}),[i,t]),(0,b.jsxs)(b.Fragment,{children:[l,c]})};let we=0;const ve=W.ZP.button`
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
`,ye=W.ZP.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 15px;
`,je=(0,W.ZP)(ve)`
  margin: 20px 0 0 0;
  display: block;

  @media screen and (min-width: 767.8px) {
    padding: 12px 30px;
  }
`,Ae=W.ZP.div`
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
`,ke=W.ZP.h1`
  margin-top: 0;
  font: 800 24px/36px Inter, Arial, sans-serif;
`,Ze=W.ZP.span`
  font: 400 16px/24px Inter, Arial, sans-serif;
`,Se=W.ZP.span`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
`,Ce=e=>{let{title:t,subTitle:n,onClickHandler:r}=e;return(0,b.jsx)(ye,{id:"notification",children:(0,b.jsxs)(Ae,{children:[(0,b.jsx)(ke,{className:"notification__title",children:t}),(0,b.jsx)(Se,{className:"notification__close",onClick:r,children:"\u2716"}),(0,b.jsx)(Ze,{className:"notification__text",children:n}),(0,b.jsx)(je,{onClick:r,children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})]})})},Pe=e=>1===`${e}`.length?`0${e}`:`${e}`;var Ee=n(4164);const $e=e=>{let{children:t}=e;const n=document.createElement("article"),o=document.querySelector("#root");return null===o||void 0===o||o.append(n),(0,r.useEffect)((()=>()=>{n.remove()})),Ee.createPortal(t,n)},qe=W.ZP.div`
  font: var(--font-little-text-regular);
  text-align: center;

  @media screen and (min-width: 459.8px) {
    display: block;
  }

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);
  }
`,Re=W.ZP.button`
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
`,Ie=()=>{const{t:e}=(0,ue.$)(),[{isCounting:t,isModal:n,timeLeft:o},i]=(0,r.useState)({isModal:!1,isCounting:!0,timeLeft:0}),a=(0,r.useRef)(null),s=[`${Pe(Math.floor(o/3600)%60)}:`,`${Pe(Math.floor(o/60)%60)}:`,Pe(Math.floor(o%60))].map(((e,t)=>(0,b.jsx)("span",{children:e},t+1))),l=e("\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a1_\u043f\u0430\u0443\u0437\u0430"),c=e("\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a2_\u043f\u0430\u0443\u0437\u0430");return(0,r.useEffect)((()=>{const e=setTimeout((()=>{t&&i((e=>({...e,timeLeft:o+1})))}),1e3);return()=>{(e=>{try{const t=localStorage.getItem("idUser"),n=(0,L.iH)(G.Z,`users/user${t}/userInfo`);(0,L.Vx)(n,{time:e})}catch(t){console.error(t)}})(o),clearTimeout(e)}}),[o,t]),(0,b.jsxs)(qe,{ref:a,children:[(0,b.jsx)("span",{children:s}),n&&(0,b.jsx)($e,{children:(0,b.jsx)(Ce,{title:l,subTitle:c,onClickHandler:()=>{i((e=>({...e,isCounting:!0,isModal:!1})))}})}),(0,b.jsx)(Re,{onClick:()=>{i((e=>({...e,isCounting:!1,isModal:!0}))),we++},children:e("\u041f\u0430\u0443\u0437\u0430")})]})};const Te=W.ZP.div`
  box-sizing: border-box;
  height: 6px;
  background-color: var(--color-scroll-bar);
  border-radius: 2px 4px 4px 0;
  width: 370px;
`,Be=e=>{let{quizRef:t}=e;const n=(0,r.useContext)(K),o=n?n[0]:1,i=(0,r.useRef)(null);return(0,r.useEffect)((()=>{!async function(e){let{currentQuestionNumb:t,quizRef:n,scrollBarElementRef:r}=e;try{const e=await(0,xe.r)(),o=n.current,i=r.current;if(o&&e&&i){const n=(o.clientWidth-parseInt(getComputedStyle(o).paddingRight)-parseInt(getComputedStyle(o).paddingLeft))/e;i.style.width=t*n+"px"}}catch(o){throw o instanceof Error?new Error(`${o.message}`):new Error(`Unknown error caught: ${o}`)}}({currentQuestionNumb:o,quizRef:t,scrollBarElementRef:i})})),(0,b.jsx)(Te,{ref:i})};var Ne=n(9922),ze=n(3218);const Me=W.ZP.button`
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: none;
  background-color: transparent;
  gap: 8px;
  cursor: pointer;
`,Qe=(W.ZP.article`
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
`,W.ZP.img`
  width: 24px;
  height: 24px;
`),Fe=W.ZP.span`
  font: var(--font-button);
  color: var(--color-back-btn);
  text-transform: uppercase;
`,Ue=e=>{let{showButtonAccept:t}=e,[o,i]=(0,r.useContext)(K)||[1,()=>{}];return(0,b.jsx)(b.Fragment,{children:!(1===o)&&(0,b.jsxs)(Me,{id:"btnBack",onClick:e=>{i(--o),t(),(e=>{let{idUser:t,currentQuestionNumb:n,selectorAnswers:r}=e;const o=`users/user${t}/answers/answer${n}`;let i="";try{(0,L.jM)((0,L.iH)(G.Z,o),(e=>{setTimeout((()=>{document.querySelectorAll(r).forEach((t=>{i=e.val().userAnswer,t.textContent===i&&(t.style.border="2px solid rgb(103, 104, 215)",t.setAttribute("data-useranswer","true"))}))}),1)}),{onlyOnce:!0})}catch(a){if(!i)throw new Error(`The value of variable 'userAnswerDb' is ${i}. ${a}`);throw new Error(`Unknown mistake: ${a}`)}})({idUser:(0,ze.k)("idUser"),currentQuestionNumb:o,selectorAnswers:"#answersAll ul li"}),e.currentTarget.style.display="none"},children:[(0,b.jsx)(Qe,{src:n(7751),alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u043d\u0430\u0437\u0430\u0434"}),(0,b.jsx)(Fe,{children:"\u041d\u0430\u0437\u0430\u0434"})]})})};var He=n(1587);const Oe=W.ZP.button`
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
`,_e=(0,W.ZP)(Oe)`
  position: absolute;
  right: 0;
  top: 0;
`,De=e=>{let{onClickButtonHandler:t}=e;const{t:n}=(0,ue.$)(),[o,i]=(0,r.useContext)(K)||[1,()=>{}];let a;(0,L.jM)((0,L.iH)(G.Z,"questions"),(e=>{a=Object.entries(e.val()).length}));const s=a===o;return(0,b.jsx)(b.Fragment,{children:s?(0,b.jsx)(He.Z,{text:"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u0442\u0435\u0441\u0442",pageTo:"/contact"}):(0,b.jsx)(_e,{onClick:t,children:n("\u041f\u0440\u0438\u043d\u044f\u0442\u044c")})})},Le=e=>{let{onClickButtonHandler:t}=e;return(0,b.jsx)(He.Z,{text:"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u0442\u0435\u0441\u0442",pageTo:"/contact",onClick:t,id:"btnFinish"})},Ge=async e=>{var t,n;let{currentQuestionNumb:r,selectorQuestion:o,userAnswer:i,selectorTheme:a,idUser:s}=e;const l=null===(t=document.querySelector(a))||void 0===t?void 0:t.textContent,c=null===(n=document.querySelector(o))||void 0===n?void 0:n.textContent,d=await(async e=>{try{var t;const n=null===(t=document.querySelector("html"))||void 0===t?void 0:t.getAttribute("lang");return await new Promise((function(t,r){(0,L.jM)((0,L.iH)(G.Z,`questions/question${e}/${n}/rightAnswer`),(e=>{const n=e.val();t(n)}))}))}catch(n){console.error(n)}})(r);try{const e=(0,L.iH)(G.Z,`users/user${s}/answers/answer${r}`);(0,L.t8)(e,{question:c,userAnswer:i,theme:l,point:d===i?1:0,quantityPause:we})}catch(u){throw l?c?new Error(`Unknown mistake: ${u}`):new Error(`The value of variable 'question' is ${c}. ${u}`):new Error(`The value of variable 'theme' is ${l}. ${u}`)}},We=W.ZP.article`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 32px;
  max-width: 100%;
  padding: 5px;
`,Ye=e=>{let{isButtonAcceptVisibility:t,showButtonAccept:n,hideButtonAccept:o}=e;const[i,a]=(0,r.useContext)(K)||[0,()=>{}];let s=0;(0,L.jM)((0,L.iH)(G.Z,"questions"),(e=>{s=Object.entries(e.val()).length}));const l=()=>{(()=>{try{const e=localStorage.getItem("idUser"),t=(0,L.iH)(G.Z,`users/user${e}/userInfo`);(0,L.t8)(t,{quiantityPause:we})}catch(e){console.error(e)}})(),we=0},c=e=>{const t=document.querySelector("#btnBack");document.querySelectorAll("#answersAll ul li").forEach((e=>{e.dataset.useranswer&&(a(i+1),Ge({currentQuestionNumb:i,selectorQuestion:"#questionTitle",userAnswer:e.textContent||"No anwser",selectorTheme:"#themeQuestion",idUser:(0,ze.k)("idUser")}))})),e.currentTarget.closest("#btnFinish")?l():(o(),"none"===(null===t||void 0===t?void 0:t.style.display)&&(t.style.display="flex"))};return(0,b.jsxs)(We,{children:[(0,b.jsx)(Ue,{showButtonAccept:n}),t&&(s===i?(0,b.jsx)(Le,{onClickButtonHandler:c}):(0,b.jsx)(De,{onClickButtonHandler:c}))]})},Ve=W.ZP.section`
  background-color: #fff;
  padding: 0 8px 47px 8px;
  margin: 0 0 15px 0;
  border-radius: 7px;

  @media screen and (min-width: 1123.8px) {
    padding: 0 40px 47px 40px;
    margin: 0 0 72px 0;
  }
`,Ke=W.ZP.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 540px;
  padding: 20px 0;

  @media screen and (min-width: 459.8px) {
    max-width: 100%;
  }
`,Je=e=>{let{lang:t}=e;const[n,i]=(0,r.useState)(1),a=(0,r.useRef)(null),[s,l]=(0,r.useState)(!1),c=()=>{l(!0)};return(0,r.useEffect)((()=>{const e=e=>{e.preventDefault(),e.returnValue="\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043a\u0438\u043d\u0443\u0442\u044c \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443? \u0412\u0441\u0435 \u043d\u0435\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u044b."};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[]),(0,b.jsx)(Ne.P,{children:(0,b.jsx)(o.Z,{children:(0,b.jsx)(Ve,{ref:a,children:(0,b.jsxs)(J,{value:[n,i],children:[(0,b.jsx)(Be,{quizRef:a}),(0,b.jsxs)(Ke,{children:[(0,b.jsx)(be,{lang:t}),(0,b.jsx)(Ie,{})]}),(0,b.jsx)(de,{lang:t}),(0,b.jsx)(ne,{showButtonAccept:c,lang:t}),(0,b.jsx)(Ye,{showButtonAccept:c,isButtonAcceptVisibility:s,hideButtonAccept:()=>{l(!1)}})]})})})})}},9922:(e,t,n)=>{n.d(t,{P:()=>r});const r=n(7691).ZP.main`
  flex: 1 1 auto;
`},7751:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEOSURBVHgB7ZRBTgIxFIb/98a49ybegI4RdadH4ApGdmqmk+jGxKgnIF4DEmZm5xJvMEcgrGDBPFoCgRAmbQlsCN9iMm1e/7957V/gxNET+RYm7x+tq+u7rBE3J0W/9+e77synyIozcQcQMJEgAHYVrMSNfEU6eW7/IAAKEdcvTykCoUOK1xqsi5u2Dyomd1vGnKfpY7k5vfWQmaIvq7zYwiWLdODifDo03wsvA6nwTQy9GJUilMOBacWgZn47+u0zIRY9H0zRSl7bv9iB2qDl/W6h4lsQQZnL/BCrmzLPuv/Yl8G+TJxPxaZJQzWLIuuV8MSZZIvNgM2C/aeI7xGAl8HSxJQrmYx2CtyJI2YGzXRnSSGLjcUAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=137.7e583d25.chunk.js.map