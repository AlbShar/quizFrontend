"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[673],{124:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(9388),i=n(7691);const o=i.ZP.span`
  color: red;
  display: inline-block;
  margin: 0 5px 0 0 ;
  text-transform: uppercase;
  font: var(--font-bold);
`,s=i.ZP.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;var a=n(184);const d=()=>(0,a.jsxs)(s,{children:[(0,a.jsx)(o,{children:"Error!"}),(0,a.jsx)(r.Z,{color:"error",fontSize:"medium"})]})},1587:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(1087),i=n(7879),o=n(7691);const s=o.ZP.button`
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
`;(0,o.ZP)(s)`
  position: absolute;
  right: 0;
  top: 0;
`,o.ZP.button`
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: none;
  background-color: transparent;
  gap: 8px;
  cursor: pointer;
`,o.ZP.article`
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
`,o.ZP.img`
  width: 24px;
  height: 24px;
`,o.ZP.span`
  font: var(--font-button);
  color: var(--color-back-btn);
  text-transform: uppercase;
`;var a=n(184);const d=e=>{let{text:t,pageTo:n,onClick:o,id:d,isDisabledBtn:l}=e;const{t:c}=(0,i.$)();return(0,a.jsx)(r.rU,{className:"btn__link",to:n,onClick:o,id:d,children:(0,a.jsx)(s,{disabled:l,children:c(t)})})}},5157:(e,t,n)=>{n.d(t,{z:()=>o});var r=n(408),i=n(4530);const o=async e=>await new Promise((function(t,n){(0,r.jM)((0,r.iH)(i.Z,e),(r=>{const i=r.val();if(i)return t(i);n(new Error(`Value (${i}) from Firebase Database not found. Check url (${e})`))}))}))},1838:(e,t,n)=>{n.d(t,{r:()=>i});var r=n(5157);const i=async e=>{try{const t=await(0,r.z)(e);return(e=>Object.entries(e).length)(t)}catch(t){throw console.error(t),t}}},9856:(e,t,n)=>{n.d(t,{Z:()=>o});const r=n(7691).ZP.div`
max-width: 85%;
min-width: 287px;
margin: 0 auto;
padding: 0 5px;
@media screen and (min-width: 1299.8px) {
  max-width: 1190px;
}
`;var i=n(184);const o=e=>{let{children:t}=e;return(0,i.jsx)(r,{children:t})}},4530:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(2426),i=n(408);const o={apiKey:{NODE_ENV:"production",PUBLIC_URL:"/quizFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,authDomain:"quizfrontend-ac9ee.firebaseapp.com",databaseURL:"https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quizfrontend-ac9ee",storageBucket:"quizfrontend-ac9ee.appspot.com",messagingSenderId:"598479422146",appId:"1:598479422146:web:812463d02e2684ad0bf15b"},s=(0,r.ZF)(o),a=(0,i.N8)(s)},7673:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ge});var r=n(2791),i=n(9856),o=n(3366),s=n(7462),a=n(8182),d=n(2554),l=n(4419);function c(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(e){return parseFloat(e)}var p=n(2065),x=n(6934),h=n(1402),m=n(5878),f=n(1217);function g(e){return(0,f.Z)("MuiSkeleton",e)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var b=n(184);const w=["animation","className","component","height","style","variant","width"];let v,y,j,k,Z=e=>e;const S=(0,d.F4)(v||(v=Z`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),C=(0,d.F4)(y||(y=Z`
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
`)),P=(0,x.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((e=>{let{theme:t,ownerState:n}=e;const r=c(t.shape.borderRadius)||"px",i=u(t.shape.borderRadius);return(0,s.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,p.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${r}/${Math.round(i/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(e=>{let{ownerState:t}=e;return"pulse"===t.animation&&(0,d.iv)(j||(j=Z`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),S)}),(e=>{let{ownerState:t,theme:n}=e;return"wave"===t.animation&&(0,d.iv)(k||(k=Z`
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
    `),C,(n.vars||n).palette.action.hover)})),$=r.forwardRef((function(e,t){const n=(0,h.Z)({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:i,component:d="span",height:c,style:u,variant:p="text",width:x}=n,m=(0,o.Z)(n,w),f=(0,s.Z)({},n,{animation:r,component:d,variant:p,hasChildren:Boolean(m.children)}),v=(e=>{const{classes:t,variant:n,animation:r,hasChildren:i,width:o,height:s}=e,a={root:["root",n,r,i&&"withChildren",i&&!o&&"fitContent",i&&!s&&"heightAuto"]};return(0,l.Z)(a,g,t)})(f);return(0,b.jsx)(P,(0,s.Z)({as:d,ref:t,className:(0,a.Z)(v.root,i),ownerState:f},m,{style:(0,s.Z)({width:x,height:c},u)}))})),E=$;var A=n(2466);const N=(0,n(4046).ZP)();var q=n(7078),z=n(8519),B=n(5080),R=n(1184),F=n(5682);const T=["component","direction","spacing","divider","children","className","useFlexGap"],_=(0,B.Z)(),D=N("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function I(e){return(0,q.Z)({props:e,name:"MuiStack",defaultTheme:_})}function M(e,t){const n=r.Children.toArray(e).filter(Boolean);return n.reduce(((e,i,o)=>(e.push(i),o<n.length-1&&e.push(r.cloneElement(t,{key:`separator-${o}`})),e)),[])}const O=e=>{let{ownerState:t,theme:n}=e,r=(0,s.Z)({display:"flex",flexDirection:"column"},(0,R.k9)({theme:n},(0,R.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(t.spacing){const e=(0,F.hB)(n),i=Object.keys(n.breakpoints.values).reduce(((e,n)=>(("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e)),{}),o=(0,R.P$)({values:t.direction,base:i}),s=(0,R.P$)({values:t.spacing,base:i});"object"===typeof o&&Object.keys(o).forEach(((e,t,n)=>{if(!o[e]){const r=t>0?o[n[t-1]]:"column";o[e]=r}}));const a=(n,r)=>{return t.useFlexGap?{gap:(0,F.NA)(e,n)}:{"& > :not(style) + :not(style)":{margin:0,[`margin${i=r?o[r]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i]}`]:(0,F.NA)(e,n)}};var i};r=(0,A.Z)(r,(0,R.k9)({theme:n},s,a))}return r=(0,R.dt)(n.breakpoints,r),r};const Q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=D,useThemeProps:n=I,componentName:i="MuiStack"}=e,d=()=>(0,l.Z)({root:["root"]},(e=>(0,f.Z)(i,e)),{}),c=t(O),u=r.forwardRef((function(e,t){const r=n(e),i=(0,z.Z)(r),{component:l="div",direction:u="column",spacing:p=0,divider:x,children:h,className:m,useFlexGap:f=!1}=i,g=(0,o.Z)(i,T),w={direction:u,spacing:p,useFlexGap:f},v=d();return(0,b.jsx)(c,(0,s.Z)({as:l,ownerState:w,ref:t,className:(0,a.Z)(v.root,m)},g,{children:x?M(h,x):h}))}));return u}({createStyledComponent:(0,x.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,h.Z)({props:e,name:"MuiStack"})}),U=Q,H=()=>(0,b.jsxs)(U,{spacing:0,children:[(0,b.jsx)(E,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}}),(0,b.jsx)(E,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}}),(0,b.jsx)(E,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}}),(0,b.jsx)(E,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}}),(0,b.jsx)(E,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}})]});var L=n(5157);var K=n(7691);const W=K.ZP.li`
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
    margin-bottom: 15px;
  }
  @media screen and (min-width: 767.8px) {
    font: var(--font-regular);
    padding: 15px 20px;

  }
  
`,V=e=>{let{children:t,index:n,setRef:r,onClickAnswer:i}=e;return(0,b.jsx)(W,{ref:r,tabIndex:0,onClick:e=>i(n,e),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),i(n,e))},children:t})};var G=n(3589);const X=e=>{e.forEach((e=>{e.removeAttribute("style"),e.removeAttribute("data-useranswer")}))};var J=n(124);const Y=K.ZP.article`
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
`,ee=K.ZP.ul`
  margin: 0;
  padding: 0;
  @media screen and (min-width: 767.8px) {
    flex-basis: auto;
  }
`,te=e=>{let{setIsBtnNextDisabled:t,setUserAnswer:n}=e;const[i,o]=(0,r.useState)([]),[s,a]=(0,r.useState)(!0),[d,l]=(0,r.useState)(!1),[c]=(0,r.useContext)(G.s$),[u]=(0,r.useContext)(G.Sc),p=[],x=e=>{p.push(e)},h=(e,r)=>{if(r.target){const e=r.target.textContent||"";n(e)}X(p),p[e].setAttribute("style","background-color: #B7B7FF"),p[e].focus(),t(!1)},m=e=>{const t=Object.entries(e).map((e=>e.join(". ")));Array.isArray(t)&&(o(t),a(!1))},f=i.map(((e,t)=>(0,b.jsx)(V,{index:t,setRef:x,onClickAnswer:h,children:e},t+1))),g=s?(0,b.jsx)(H,{}):null,w=d?(0,b.jsx)(J.Z,{}):null,v=s||d?null:(0,b.jsx)(Y,{id:"answersAll",children:(0,b.jsx)(ee,{children:f})}),y=e=>{throw a(!1),l(!0),new Error(`${e.message}`)};return(0,r.useEffect)((()=>{(async e=>{try{return await(0,L.z)(e)}catch(t){throw console.error(t),t}})(`answers/answers${c}/${u}`).then(m).catch(y)}),[c,u]),(0,r.useEffect)((()=>{X(p)}),[c]),(0,b.jsxs)(b.Fragment,{children:[g," ",v," ",w]})},ne=()=>(0,b.jsx)(U,{spacing:1,children:(0,b.jsx)(E,{variant:"text",sx:{fontSize:"5rem"}})}),re=K.ZP.article`
  padding-bottom: 14px;
`,ie=K.ZP.h2`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 0 0 20px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-semi-bold);
  }
`,oe=K.ZP.picture`
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
`,se=K.ZP.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  ${function(e){let{currentQuestionNumb:t}=e;if(16!==t)return"\n      @media screen and (min-width: 667.8px) {\n        width: 85%;\n      }\n  \n      @media screen and (min-width: 923.8px) {\n        width: 78%;\n      }\n            "}}
`,ae=()=>{const[e]=(0,r.useContext)(G.s$),[t]=(0,r.useContext)(G.Sc),[n,i]=(0,r.useState)(""),[o,s]=(0,r.useState)(!0),[a,d]=(0,r.useState)(""),[l,c]=(0,r.useState)(!1),u=l?(0,b.jsx)(J.Z,{}):null,p=o?(0,b.jsx)(ne,{}):null,x=[`questions/question${e}/${t}/img`,`questions/question${e}/${t}/name`],h=o||l?null:a?(0,b.jsxs)(re,{children:[(0,b.jsx)(ie,{id:"questionTitle",tabIndex:0,children:n}),(0,b.jsxs)(oe,{children:[(0,b.jsx)("source",{type:"image/png",media:"(min-width: 320px)",srcSet:a,width:"120",height:"auto"}),(0,b.jsx)("source",{type:"image/png",media:"(min-width: 487px)",srcSet:a,width:"768",height:"auto"}),(0,b.jsx)("source",{type:"image/png",media:"(min-width: 769px)",srcSet:a,width:"1024",height:"auto"}),(0,b.jsx)(se,{src:a,width:"1024",height:"auto",alt:"\u041a\u043e\u0434 \u043d\u0430 JS"})]})]}):(0,b.jsx)(re,{children:(0,b.jsx)(ie,{id:"questionTitle",tabIndex:0,children:n})}),m=e=>{e.forEach(((e,t)=>{if("rejected"===e.status)throw new Error(`${x[t]}: ${e.reason}`)}));const t={src:"",question:""};e.forEach((e=>{e.value.startsWith("http")&&(t.src=e.value),"No"===e.value&&(t.src=""),"string"===typeof e.value&&(t.question=e.value)})),i(t.question),s(!1),d(t.src)},f=e=>{throw s(!1),c(!0),new Error(e)};return(0,r.useEffect)((()=>{Promise.allSettled(x.map((e=>(0,L.z)(e)))).then(m).catch(f)}),[e,t]),(0,b.jsxs)(b.Fragment,{children:[p," ",h," ",u]})};var de=n(7879);const le=()=>(0,b.jsx)(U,{spacing:3,children:(0,b.jsx)(E,{variant:"rounded",width:300,height:25})}),ce=async e=>{try{return await(0,L.z)(e)}catch(t){throw console.error(t),t}};var ue=n(1838);const pe=K.ZP.div`
  box-sizing: border-box;
  height: 6px;
  background-color: var(--color-scroll-bar);
  width: 370px;
`,xe=e=>{let{quizRef:t}=e;const[n]=(0,r.useContext)(G.s$),i=(0,r.useRef)(null);return(0,r.useEffect)((()=>{!async function(e){let{currentQuestionNumb:t,quizRef:n,scrollBarElementRef:r}=e;try{const e="questions",i=await(0,ue.r)(e),o=n.current,s=r.current;if(o&&i&&s){const e=(o.clientWidth-parseInt(getComputedStyle(o).paddingRight)-parseInt(getComputedStyle(o).paddingLeft))/i;s.style.width=t*e+"px"}}catch(i){throw i instanceof Error?new Error(`${i.message}`):new Error(`Unknown error caught: ${i}`)}}({currentQuestionNumb:n,quizRef:t,scrollBarElementRef:i})})),(0,b.jsx)(pe,{ref:i})};var he=n(408),me=n(4530);const fe=K.ZP.button`
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
`,ge=K.ZP.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 15px;
`,be=(0,K.ZP)(fe)`
  margin: 20px 0 0 0;
  display: block;

  @media screen and (min-width: 767.8px) {
    padding: 12px 30px;
  }
`,we=K.ZP.div`
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
`,ve=K.ZP.h1`
  margin-top: 0;
  font: 800 24px/36px Inter, Arial, sans-serif;
`,ye=K.ZP.span`
  font: 400 16px/24px Inter, Arial, sans-serif;
`,je=K.ZP.span`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
`,ke=e=>{let{title:t,subTitle:n,onClickHandler:r}=e;return(0,b.jsx)(ge,{id:"notification",children:(0,b.jsxs)(we,{children:[(0,b.jsx)(ve,{className:"notification__title",children:t}),(0,b.jsx)(je,{className:"notification__close",onClick:r,children:"\u2716"}),(0,b.jsx)(ye,{className:"notification__text",children:n}),(0,b.jsx)(be,{onClick:r,children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})]})})},Ze=e=>1===`${e}`.length?`0${e}`:`${e}`;var Se=n(4164);const Ce=e=>{let{children:t}=e;const n=document.createElement("article"),i=document.querySelector("#root");return null===i||void 0===i||i.append(n),(0,r.useEffect)((()=>()=>{n.remove()})),Se.createPortal(t,n)};const Pe=n.p+"static/media/pause.bb2b2d07bad30ada7aad2b9017f81d3b.svg",$e=K.ZP.div`
  display: flex;
  font: var(--font-little-text-regular);
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);
    flex-direction: row;
    width: 100%;
    max-width: 274px;
    gap: 66px;
  }
`,Ee=K.ZP.img`
  @media screen and (max-width: 767.8px) {
    width: 20px;
  }
`,Ae=K.ZP.button`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border-radius: 7px;
  color: #000000;
  font: var(--font-little-text-regular);
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin: 0;
  gap: 5px;
  padding: 5px;
  text-transform: uppercase;

  @media screen and (min-width: 767.8px) {
    padding: 10px;
    font: var(--font-bold);
    max-width: 120px;
    width: 100%;
  }
`,Ne=K.ZP.span`
  font: var(--font-bold);
`,qe=()=>{const{t:e}=(0,de.$)(),[t,n]=(0,r.useState)(!0),[i,o]=(0,r.useState)(!1),[s,a]=(0,r.useState)(0),[d]=(0,r.useContext)(G.iT),l=(0,r.useRef)(null),c=[`${Ze(Math.floor(s/3600)%60)}:`,`${Ze(Math.floor(s/60)%60)}:`,Ze(Math.floor(s%60))].map(((e,t)=>(0,b.jsx)("span",{children:e},t+1))),u=e("\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a1_\u043f\u0430\u0443\u0437\u0430"),p=e("\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a2_\u043f\u0430\u0443\u0437\u0430");return(0,r.useEffect)((()=>{const e=`users/user${d}/userInfo`,n=setTimeout((()=>{t&&a((e=>e+1))}),1e3);return()=>{clearTimeout(n),l.current||((e,t)=>{try{(0,he.Vx)((0,he.iH)(me.Z,t),{time:e})}catch(n){console.error(n)}})(s,e)}}),[s,t]),(0,b.jsxs)($e,{ref:l,children:[(0,b.jsxs)(Ae,{onClick:()=>{n(!1),o(!0)},children:[(0,b.jsx)(Ee,{src:Pe,alt:"pause"}),e("\u041f\u0430\u0443\u0437\u0430")]}),(0,b.jsx)(Ne,{children:c}),i&&(0,b.jsx)(Ce,{children:(0,b.jsx)(ke,{title:u,subTitle:p,onClickHandler:()=>{n(!0),o(!1)}})})]})},ze=K.ZP.h1`
  display: inline-block;
  font: var(--font-title4);
  color: black;
  padding: 0;
  position: relative;
  flex: 0 1 85%;
  margin: 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-bold);
  }
`,Be=K.ZP.span`
  color: #000;
  font-size: 16px;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;
  padding: 0 0 0 5px;
`,Re=(0,K.ZP)(Be)`
  display: block;
  padding: 0;

  @media screen and (min-width: 459.8px) {
    display: inline;
    padding: 0 0 0 10px;
  }
`,Fe=K.ZP.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 540px;
  padding: 20px 0;

  @media screen and (min-width: 459.8px) {
    max-width: 100%;
  }
`,Te=e=>{let{quizRef:t}=e;const{t:n}=(0,de.$)(),[i]=(0,r.useContext)(G.s$),[o]=(0,r.useContext)(G.Sc),[s,a]=(0,r.useState)(!0),[d,l]=(0,r.useState)(!1),[c,u]=(0,r.useState)(""),[p,x]=(0,r.useState)(0),h=s?(0,b.jsx)(le,{}):null,m=s||d?null:(0,b.jsxs)("section",{children:[(0,b.jsx)("article",{style:{backgroundColor:"#EEEEFF"},children:(0,b.jsx)(xe,{quizRef:t})}),(0,b.jsxs)(Fe,{children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)(ze,{id:"questionName",children:[n("\u0412\u043e\u043f\u0440\u043e\u0441")," ",i]}),(0,b.jsx)(Be,{id:"totalQuestionQuantity",tabIndex:0,children:`/ ${p}`}),(0,b.jsx)(Re,{id:"themeQuestion",children:c})]}),(0,b.jsx)(qe,{})]})]}),f=d?(0,b.jsx)(J.Z,{}):null,g=e=>{const t={theme:null,totalQuestionNumber:null};e.forEach((e=>{"number"===typeof e.value?t.totalQuestionNumber=e.value:"string"===typeof e.value&&(t.theme=e.value)})),a(!1),u(`${t.theme}`),x(t.totalQuestionNumber);for(const n in t)if(!t[n])throw new Error(`Value of ${n} is ${t[n]} in object "items"`)},w=e=>{throw l(!0),a(!1),new Error(e)};return(0,r.useEffect)((()=>{const e=`questions/question${i}/${o}/theme`;Promise.allSettled([ce(e),(0,ue.r)("questions")]).then(g).catch(w)}),[i,o]),(0,b.jsxs)(b.Fragment,{children:[h,m,f]})};var _e=n(9922);const De=n.p+"static/media/leftArrow.ffd35a492cc0b13d0f52b0e89016538e.svg",Ie=K.ZP.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 8px 18px;
  border: none;
  gap: 8px;
  cursor: pointer;
  border-radius: 7px;
  background-color: #585aff;
  width: 100%;
  max-width: 120px;
  max-height: 56px;

  &:disabled {
    background-color: #b7b7ff;
    cursor: not-allowed;
}

  @media screen and (min-width: 768.8px) {
    padding: 16px 18px;
    max-width: 170px;
    max-height: 56px;
    gap: 30px;
  }
`,Me=K.ZP.span`
  color: #fff;
  font: var(--font-bold);
  text-transform: uppercase;
`,Oe=e=>{let{setIsBtnNextDisabled:t,isBtnBackDisabled:n,setIsBtnBackDisabled:i}=e;const{t:o}=(0,de.$)();let[s,a]=(0,r.useContext)(G.s$);const[d]=(0,r.useContext)(G.iT);return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(Ie,{style:{justifyContent:"flex-start"},id:"btnBack",onClick:e=>{a(s-1),t(!1),i(!0),(e=>{let{idUser:t,currentQuestionNumb:n,selectorAnswers:r}=e;const i=`users/user${t}/answers/answer${n-1}`;let o="";try{(0,he.jM)((0,he.iH)(me.Z,i),(e=>{setTimeout((()=>{document.querySelectorAll(r).forEach((t=>{o=e.val().userAnswer,t.textContent===o&&(t.style.backgroundColor="#B7B7FF",t.setAttribute("data-useranswer","true"))}))}),10)}),{onlyOnce:!0})}catch(s){if(!o)throw new Error(`The value of variable 'userAnswerDb' is ${o}. ${s}`);throw new Error(`Unknown mistake: ${s}`)}})({idUser:d,currentQuestionNumb:s,selectorAnswers:"#answersAll ul li"})},disabled:n,children:[(0,b.jsx)("img",{src:De,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u043d\u0430\u0437\u0430\u0434"}),(0,b.jsx)(Me,{children:o("\u043d\u0430\u0437\u0430\u0434")})]})})};const Qe=n.p+"static/media/rightArrow.68d8ba69dceb545c90c48c34f34567b7.svg",Ue=e=>{let{onClickButtonHandler:t,isBtnNextDisabled:n}=e;const{t:r}=(0,de.$)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(Ie,{style:{justifyContent:"flex-end"},onClick:t,disabled:n,children:[(0,b.jsx)(Me,{children:r("\u041f\u0440\u0438\u043d\u044f\u0442\u044c")}),(0,b.jsx)("img",{src:Qe,alt:"rightArrow"})]})})},He=async e=>{var t,n;let{userAnswer:r,idUser:i,currentQuestionNumb:o,lang:s}=e;const a=null===(t=document.querySelector("#questionTitle"))||void 0===t?void 0:t.textContent,d=null===(n=document.querySelector("#themeQuestion"))||void 0===n?void 0:n.textContent,l=`users/user${i}/answers/answer${o}`;try{const e=await(async(e,t)=>{const n=`questions/question${e}/${t}/rightAnswer`;try{return await(0,L.z)(n)}catch(r){throw console.error(r),r}})(o,s),t=e===r?1:0;(0,he.t8)((0,he.iH)(me.Z,l),{question:a,userAnswer:r,point:t,theme:d})}catch(c){throw console.error(c),c}};var Le=n(1587);const Ke=K.ZP.article`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-top: 25px;
  max-width: 100%;
  padding: 5px;

  @media screen and (min-width: 767.8px) {
    margin-top: 50px;
  }
`,We=e=>{let{isBtnNextDisabled:t,setIsBtnNextDisabled:n,userAnswer:i}=e;const[o,s]=(0,r.useContext)(G.s$),[a]=(0,r.useContext)(G.Sc),[d]=(0,r.useContext)(G.iT),[l,c]=(0,r.useState)(0),[u,p]=(0,r.useState)(!0),x=(0,r.useCallback)((async()=>{const e=await(0,ue.r)("questions");c(e)}),[]);(0,r.useEffect)((()=>{x()}),[]);const h=e=>{s(o+1),He({userAnswer:i,idUser:d,currentQuestionNumb:o,lang:a}),n(!0),p(!1)};return(0,b.jsxs)(Ke,{children:[(0,b.jsx)(Oe,{setIsBtnNextDisabled:n,isBtnBackDisabled:u,setIsBtnBackDisabled:p}),l===o?(0,b.jsx)(Le.Z,{text:"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u0442\u0435\u0441\u0442",pageTo:"/contact",onClick:h,id:"btnFinish",isDisabledBtn:t}):(0,b.jsx)(Ue,{isBtnNextDisabled:t,onClickButtonHandler:h})]})},Ve=K.ZP.section`
  background-color: #fff;
  padding: 17px 8px 25px 8px;
  margin: 0 0 15px 0;
  border-radius: 7px;

  @media screen and (min-width: 1123.8px) {
    padding: 27px 40px 25px 40px;
    margin: 0 0 72px 0;
  }
`,Ge=()=>{const[e,t]=(0,r.useState)(1),n=(0,r.useRef)(null),[o,s]=(0,r.useState)(""),[a,d]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{const e=e=>{e.preventDefault(),e.returnValue="\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043a\u0438\u043d\u0443\u0442\u044c \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443? \u0412\u0441\u0435 \u043d\u0435\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u044b."};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[]),(0,b.jsx)(_e.P,{children:(0,b.jsx)(i.Z,{children:(0,b.jsx)(Ve,{ref:n,children:(0,b.jsxs)(G.s$.Provider,{value:[e,t],children:[(0,b.jsx)(Te,{quizRef:n}),(0,b.jsx)(ae,{}),(0,b.jsx)(te,{setIsBtnNextDisabled:d,setUserAnswer:s}),(0,b.jsx)(We,{setIsBtnNextDisabled:d,isBtnNextDisabled:a,userAnswer:o})]})})})})}},9922:(e,t,n)=>{n.d(t,{P:()=>r});const r=n(7691).ZP.main`
  flex: 1 1 auto;
`},2554:(e,t,n)=>{n.d(t,{F4:()=>o,iv:()=>i});n(2791),n(2561);var r=n(5207);n(3361),n(2110);function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.O)(t)}var o=function(){var e=i.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},8519:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),i=n(3366),o=n(2466),s=n(7416);const a=["sx"];function d(e){const{sx:t}=e,n=(0,i.Z)(e,a),{systemProps:d,otherProps:l}=(e=>{var t,n;const r={systemProps:{},otherProps:{}},i=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:s.Z;return Object.keys(e).forEach((t=>{i[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r})(n);let c;return c=Array.isArray(t)?[d,...t]:"function"===typeof t?function(){const e=t(...arguments);return(0,o.P)(e)?(0,r.Z)({},d,e):d}:(0,r.Z)({},d,t),(0,r.Z)({},l,{sx:c})}}}]);
//# sourceMappingURL=673.2e87505f.chunk.js.map