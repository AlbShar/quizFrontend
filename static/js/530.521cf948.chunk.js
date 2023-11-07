"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[530],{7357:(e,t,n)=>{n.d(t,{S:()=>r});const r=n(7691).ZP.button`
  padding: 8px 33px;
  background-color: #585aff;
  border: none;
  font: var(--font-button);
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  text-decoration: none;
  border-radius: 7px;

  &:disabled {
    opacity: 0.5;
  }

  @media screen and (min-width: 767.8px) {
    padding: 12px 80px;
  }
`},4080:(e,t,n)=>{n.d(t,{k:()=>a});var r=n(1087),i=n(7691);const o=i.ZP.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
  border: none;
  font: var(--font-button);
  text-transform: uppercase;
  cursor: pointer;
  color: ${e=>{let{pageName:t}=e;return"home"===t?"var(--color-black)":"var(--color-white)"}};
  text-decoration: none;
  border-radius: 3px;
  background-color: ${e=>{let{pageName:t}=e;return"home"===t?"var(--color-white)":"var(--color-purple)"}};
  width: 100%;
  height: 54px;

  &:disabled {
    background-color: ${e=>{let{pageName:t}=e;return"home"===t?"transparent":"var(--color-purple)"}};
    border: 2px solid var(--color-purple);
    cursor: not-allowed;
    color: var(--color-white);
    opacity: ${e=>{let{pageName:t}=e;return"home"===t?"1":"0.3"}};
  }

  @media screen and (min-width: 767.8px) {
    padding: 16px 18px;
  }
`;(0,i.ZP)(o)`
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
`;var s=n(184);const a=e=>{let{text:t,pageTo:n,onClick:i,id:a,isDisabledBtn:l}=e;const c=n.match(/\/(\w+)/);let d="home";return c&&c[1]&&(d=c[1]),(0,s.jsx)(r.rU,{className:"btn__link",to:n,onClick:i,id:a,children:(0,s.jsx)(o,{disabled:l,pageName:d,children:t})})}},5040:(e,t,n)=>{n.d(t,{r:()=>o});var r=n(408),i=n(8285);const o=async e=>{try{return new Promise(((t,n)=>{(0,r.jM)((0,r.iH)(i.Z,e),(r=>{const i=r.val();if(i)return t(i);n(new Error(`Value (${i}) from Firebase Database not found. Check url (${e})`))}))}))}catch(t){console.error(t)}}},1838:(e,t,n)=>{n.d(t,{r:()=>i});var r=n(5040);const i=async e=>{try{const t=await(0,r.r)(e);return(e=>Object.entries(e).length)(t)}catch(t){throw console.error(t),t}}},3050:(e,t,n)=>{n.d(t,{o:()=>o});const r=n(7691).ZP.main`
  flex: 1 1 auto;
  width: 100%;
  background-color: var(--color-white);
`;var i=n(184);const o=e=>{let{children:t,customStyle:n}=e;return(0,i.jsx)(r,{style:n,children:t})}},6775:(e,t,n)=>{n.d(t,{h:()=>o});var r=n(2791),i=n(4164);const o=e=>{let{children:t}=e;const n=document.createElement("article"),o=document.querySelector("#root");return null===o||void 0===o||o.append(n),(0,r.useEffect)((()=>()=>{n.remove()})),i.createPortal(t,n)}},6530:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Xe});var r=n(2791),i=n(6401),o=n(2200),s=n(613),a=n(7691);const l=a.ZP.li`
  word-wrap: break-word;
  box-sizing: border-box;
  flex-basis: 100%;
  list-style-type: none;
  padding: 7px;
  font: var(--font-little-text-regular);
  cursor: pointer;
  background-color: var(--color-light-gray);
  border-radius: 7px;
  border: none;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
  @media screen and (min-width: 767.8px) {
    font: var(--font-regular);
    padding: 15px 20px;
  }
`;var c=n(184);const d=e=>{let{children:t,index:n,setRef:r,onClickAnswer:i}=e;return(0,c.jsx)(l,{ref:r,tabIndex:0,onClick:e=>i(n,e),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),i(n,e))},children:t})};var u=n(3366),p=n(7462),x=n(8182),h=n(2554),m=n(4419);function f(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function g(e){return parseFloat(e)}var b=n(2065),w=n(6934),v=n(1402),y=n(5878),j=n(1217);function k(e){return(0,j.Z)("MuiSkeleton",e)}(0,y.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const $=["animation","className","component","height","style","variant","width"];let C,Z,S,P,B=e=>e;const E=(0,h.F4)(C||(C=B`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),N=(0,h.F4)(Z||(Z=B`
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
`)),A=(0,w.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((e=>{let{theme:t,ownerState:n}=e;const r=f(t.shape.borderRadius)||"px",i=g(t.shape.borderRadius);return(0,p.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,b.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${r}/${Math.round(i/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(e=>{let{ownerState:t}=e;return"pulse"===t.animation&&(0,h.iv)(S||(S=B`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),E)}),(e=>{let{ownerState:t,theme:n}=e;return"wave"===t.animation&&(0,h.iv)(P||(P=B`
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
    `),N,(n.vars||n).palette.action.hover)})),q=r.forwardRef((function(e,t){const n=(0,v.Z)({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:i,component:o="span",height:s,style:a,variant:l="text",width:d}=n,h=(0,u.Z)(n,$),f=(0,p.Z)({},n,{animation:r,component:o,variant:l,hasChildren:Boolean(h.children)}),g=(e=>{const{classes:t,variant:n,animation:r,hasChildren:i,width:o,height:s}=e,a={root:["root",n,r,i&&"withChildren",i&&!o&&"fitContent",i&&!s&&"heightAuto"]};return(0,m.Z)(a,k,t)})(f);return(0,c.jsx)(A,(0,p.Z)({as:o,ref:t,className:(0,x.Z)(g.root,i),ownerState:f},h,{style:(0,p.Z)({width:d,height:s},a)}))})),R=q;var z=n(2466);const I=(0,n(4046).ZP)();var D=n(7078),F=n(8519),T=n(5080),M=n(1184),H=n(5682);const _=["component","direction","spacing","divider","children","className","useFlexGap"],Q=(0,T.Z)(),U=I("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function O(e){return(0,D.Z)({props:e,name:"MuiStack",defaultTheme:Q})}function L(e,t){const n=r.Children.toArray(e).filter(Boolean);return n.reduce(((e,i,o)=>(e.push(i),o<n.length-1&&e.push(r.cloneElement(t,{key:`separator-${o}`})),e)),[])}const G=e=>{let{ownerState:t,theme:n}=e,r=(0,p.Z)({display:"flex",flexDirection:"column"},(0,M.k9)({theme:n},(0,M.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(t.spacing){const e=(0,H.hB)(n),i=Object.keys(n.breakpoints.values).reduce(((e,n)=>(("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e)),{}),o=(0,M.P$)({values:t.direction,base:i}),s=(0,M.P$)({values:t.spacing,base:i});"object"===typeof o&&Object.keys(o).forEach(((e,t,n)=>{if(!o[e]){const r=t>0?o[n[t-1]]:"column";o[e]=r}}));const a=(n,r)=>{return t.useFlexGap?{gap:(0,H.NA)(e,n)}:{"& > :not(style) + :not(style)":{margin:0,[`margin${i=r?o[r]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i]}`]:(0,H.NA)(e,n)}};var i};r=(0,z.Z)(r,(0,M.k9)({theme:n},s,a))}return r=(0,M.dt)(n.breakpoints,r),r};const V=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=U,useThemeProps:n=O,componentName:i="MuiStack"}=e,o=()=>(0,m.Z)({root:["root"]},(e=>(0,j.Z)(i,e)),{}),s=t(G),a=r.forwardRef((function(e,t){const r=n(e),i=(0,F.Z)(r),{component:a="div",direction:l="column",spacing:d=0,divider:h,children:m,className:f,useFlexGap:g=!1}=i,b=(0,u.Z)(i,_),w={direction:l,spacing:d,useFlexGap:g},v=o();return(0,c.jsx)(s,(0,p.Z)({as:a,ownerState:w,ref:t,className:(0,x.Z)(v.root,f)},b,{children:h?L(m,h):m}))}));return a}({createStyledComponent:(0,w.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,v.Z)({props:e,name:"MuiStack"})}),W=V,X=()=>(0,c.jsxs)(W,{spacing:0,children:[(0,c.jsx)(R,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}}),(0,c.jsx)(R,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}}),(0,c.jsx)(R,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}}),(0,c.jsx)(R,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}}),(0,c.jsx)(R,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}})]}),J=e=>{e.forEach((e=>{e.removeAttribute("style"),e.removeAttribute("data-useranswer")}))};var K=n(5040);const Y=()=>{const[e,t]=(0,r.useState)([]),[n,i]=(0,r.useState)(!0),[s,a]=(0,r.useState)(!1),[l]=(0,r.useContext)(o.Hp),[c]=(0,r.useContext)(o.s$),[d]=(0,r.useContext)(o.Sc),u=e=>{const n=Object.entries(e).map((e=>e.join(". ")));Array.isArray(n)&&(t(n),i(!1))},p=e=>{throw i(!1),a(!0),new Error(`${e.message}`)};return(0,r.useEffect)((()=>{(async e=>{try{return await(0,K.r)(e)}catch(t){throw console.error(t),t}})(`${l}/answers/answers${c}/${d}`).then(u).catch(p)}),[c,d,l]),{isError:s,isLoading:n,answers:e}},ee=a.ZP.article`
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
`,te=a.ZP.ul`
  margin: 0;
  padding: 0;
  @media screen and (min-width: 767.8px) {
    flex-basis: auto;
  }
`,ne=e=>{let{setIsBtnNextDisabled:t,setUserAnswer:n}=e;const{isError:i,isLoading:a,answers:l}=Y(),[u]=(0,r.useContext)(o.s$),p=[],x=e=>{p.push(e)},h=(e,r)=>{if(r.target){const e=r.target.textContent||"";n(e)}J(p),p[e].setAttribute("style","border: 3px solid #5557FF;"),p[e].focus(),t(!1)},m=l.map(((e,t)=>(0,c.jsx)(d,{index:t,setRef:x,onClickAnswer:h,children:e},t+1))),f=a?(0,c.jsx)(X,{}):null,g=i?(0,c.jsx)(s.B,{}):null,b=a||i?null:(0,c.jsx)(ee,{id:"answersAll",children:(0,c.jsx)(te,{children:m})});return(0,r.useEffect)((()=>{J(p)}),[u]),(0,c.jsxs)(c.Fragment,{children:[f," ",b," ",g]})},re=()=>(0,c.jsx)(W,{spacing:1,children:(0,c.jsx)(R,{variant:"text",sx:{fontSize:"5rem"}})}),ie=a.ZP.article`
  padding-bottom: 14px;
`,oe=a.ZP.h2`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 0 0 20px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-semi-bold);
  }
`,se=a.ZP.picture`
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
`,ae=a.ZP.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  ${function(e){let{currentQuestionNumb:t}=e;if(16!==t)return"\n      @media screen and (min-width: 667.8px) {\n        width: 85%;\n      }\n  \n      @media screen and (min-width: 923.8px) {\n        width: 78%;\n      }\n            "}}
`,le=e=>{let{questionName:t,srcImg:n}=e;return n?(0,c.jsxs)(ie,{children:[(0,c.jsx)(oe,{id:"questionTitle",tabIndex:0,children:t}),(0,c.jsxs)(se,{children:[(0,c.jsx)("source",{type:"image/png",media:"(min-width: 320px)",srcSet:n,width:"120",height:"auto"}),(0,c.jsx)("source",{type:"image/png",media:"(min-width: 487px)",srcSet:n,width:"768",height:"auto"}),(0,c.jsx)("source",{type:"image/png",media:"(min-width: 769px)",srcSet:n,width:"1024",height:"auto"}),(0,c.jsx)(ae,{src:n,width:"1024",height:"auto",alt:"\u041a\u043e\u0434 \u043d\u0430 JS"})]})]}):(0,c.jsx)(ie,{children:(0,c.jsx)(oe,{id:"questionTitle",tabIndex:0,children:t})})},ce=()=>{const{isLoading:e,isError:t,...n}=(()=>{const[e,t]=(0,r.useState)(""),[n,i]=(0,r.useState)(!0),[s,a]=(0,r.useState)(""),[l,c]=(0,r.useState)(!1),[d]=(0,r.useContext)(o.Hp),[u]=(0,r.useContext)(o.Sc),[p]=(0,r.useContext)(o.s$),x=[`${d}/questions/question${p}/${u}/img`,`${d}/questions/question${p}/${u}/name`],h=e=>{e.forEach(((e,t)=>{if("rejected"===e.status)throw new Error(`${x[t]}: ${e.reason}`)}));const n={src:"",question:""};e.forEach((e=>{e.value.startsWith("http")&&(n.src=e.value),"No"===e.value&&(n.src=""),"string"===typeof e.value&&(n.question=e.value)})),t(n.question),i(!1),a(n.src)},m=e=>{throw i(!1),c(!0),new Error(e)};return(0,r.useEffect)((()=>{Promise.allSettled(x.map((e=>(0,K.r)(e)))).then(h).catch(m)}),[p,u]),{isLoading:n,isError:l,questionName:e,srcImg:s}})(),i=t?(0,c.jsx)(s.B,{}):null,a=e?(0,c.jsx)(re,{}):null,l=e||t?null:(0,c.jsx)(le,{...n});return(0,c.jsxs)(c.Fragment,{children:[a," ",l," ",i]})};var de=n(7879);const ue=()=>(0,c.jsx)(W,{spacing:3,children:(0,c.jsx)(R,{variant:"rounded",width:300,height:25})}),pe=async e=>{try{return await(0,K.r)(e)}catch(t){throw console.error(t),t}};var xe=n(1838);const he=a.ZP.div`
  box-sizing: border-box;
  height: 6px;
  background-color: var(--color-scroll-bar);
  width: 370px;
`,me=e=>{let{quizRef:t}=e;const[n]=(0,r.useContext)(o.s$),[i]=(0,r.useContext)(o.Hp),s=(0,r.useRef)(null);return(0,r.useEffect)((()=>{!async function(e){let{currentQuestionNumb:t,quizRef:n,scrollBarElementRef:r,url:i}=e;try{const e=await(0,xe.r)(i),o=n.current,s=r.current;if(o&&e&&s){const n=(o.clientWidth-parseInt(getComputedStyle(o).paddingRight)-parseInt(getComputedStyle(o).paddingLeft))/e;s.style.width=t*n+"px"}}catch(o){throw o instanceof Error?new Error(`${o.message}`):new Error(`Unknown error caught: ${o}`)}}({currentQuestionNumb:n,scrollBarElementRef:s,quizRef:t,url:`${i}/questions`})}),[n]),(0,c.jsx)(he,{ref:s})};var fe=n(7357);const ge=a.ZP.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 15px;
`,be=(0,a.ZP)(fe.S)`
  margin: 20px 0 0 0;
  display: block;

  @media screen and (min-width: 767.8px) {
    padding: 12px 30px;
  }
`,we=a.ZP.div`
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
`,ve=a.ZP.h1`
  margin-top: 0;
  font: 800 24px/36px Inter, Arial, sans-serif;
`,ye=a.ZP.span`
  font: 400 16px/24px Inter, Arial, sans-serif;
`,je=a.ZP.span`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
`,ke=e=>{let{title:t,subTitle:n,onClickHandler:r}=e;const{t:i}=(0,de.$)("",{keyPrefix:"UI.modalPause"});return(0,c.jsx)(ge,{children:(0,c.jsxs)(we,{children:[(0,c.jsx)(ve,{className:"notification__title",children:t}),(0,c.jsx)(je,{className:"notification__close",onClick:r,children:"\u2716"}),(0,c.jsx)(ye,{className:"notification__text",children:n}),(0,c.jsx)(be,{onClick:r,"data-testid":"btn-continue",children:i("textBtn")})]})})};var $e=n(6775);const Ce=n.p+"static/media/pause.d915200c756ae182152419a63df4c525.svg",Ze=e=>1===`${e}`.length?`0${e}`:`${e}`;var Se=n(408),Pe=n(8285);const Be=a.ZP.div`
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
`,Ee=a.ZP.img`
  @media screen and (min-width: 767.8px) {
    width: 20px;
  }
`,Ne=a.ZP.button`
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
`,Ae=a.ZP.span`
  font: var(--font-bold);
`,qe=()=>{const{t:e}=(0,de.$)("",{keyPrefix:"modules.testInfo.components.timer"}),[t,n]=(0,r.useState)(!0),[i,s]=(0,r.useState)(!1),[a,l]=(0,r.useState)(0),[d]=(0,r.useContext)(o.iT),[u]=(0,r.useContext)(o.Hp),p=(0,r.useRef)(null),x=[`${Ze(Math.floor(a/3600)%60)}:`,`${Ze(Math.floor(a/60)%60)}:`,Ze(Math.floor(a%60))].map(((e,t)=>(0,c.jsx)("span",{children:e},t+1))),h=e("title"),m=e("subTitle");return(0,r.useEffect)((()=>{const e=`${u}/users/user${d}/userInfo`,n=setTimeout((()=>{t&&l((e=>e+1))}),1e3);return()=>{clearTimeout(n),p.current||((e,t)=>{try{(0,Se.Vx)((0,Se.iH)(Pe.Z,t),{time:e})}catch(n){console.error(n)}})(a,e)}}),[a,t]),(0,c.jsxs)(Be,{ref:p,children:[(0,c.jsxs)(Ne,{onClick:()=>{n(!1),s(!0)},"data-testid":"btn-pause",children:[(0,c.jsx)(Ee,{src:Ce,alt:"pause"}),e("pause")]}),(0,c.jsx)(Ae,{children:x}),i&&(0,c.jsx)($e.h,{children:(0,c.jsx)(ke,{title:h,subTitle:m,onClickHandler:()=>{n(!0),s(!1)}})})]})},Re=a.ZP.h1`
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
`,ze=a.ZP.span`
  color: #000;
  font-size: 16px;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;
  padding: 0 0 0 5px;
`,Ie=(0,a.ZP)(ze)`
  display: block;
  padding: 0;

  @media screen and (min-width: 459.8px) {
    display: inline;
    padding: 0 0 0 10px;
  }
`,De=a.ZP.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 540px;
  padding: 20px 0;

  @media screen and (min-width: 459.8px) {
    max-width: 100%;
  }
`,Fe=e=>{let{quizRef:t}=e;const{t:n}=(0,de.$)(),[i]=(0,r.useContext)(o.s$),[a]=(0,r.useContext)(o.Hp),[l]=(0,r.useContext)(o.Sc),[d,u]=(0,r.useState)(!0),[p,x]=(0,r.useState)(!1),[h,m]=(0,r.useState)(""),[f,g]=(0,r.useState)(0),b=d?(0,c.jsx)(ue,{}):null,w=d||p?null:(0,c.jsxs)("section",{children:[(0,c.jsx)("article",{style:{backgroundColor:"#EEEEFF"},children:(0,c.jsx)(me,{quizRef:t})}),(0,c.jsxs)(De,{children:[(0,c.jsxs)("div",{children:[(0,c.jsxs)(Re,{id:"questionName",children:[n("\u0412\u043e\u043f\u0440\u043e\u0441")," ",i]}),(0,c.jsx)(ze,{id:"totalQuestionQuantity",tabIndex:0,children:`/ ${f}`}),(0,c.jsx)(Ie,{id:"themeQuestion",children:h})]}),(0,c.jsx)(qe,{})]})]}),v=p?(0,c.jsx)(s.B,{}):null,y=e=>{const t={theme:null,totalQuestionNumber:null};e.forEach((e=>{"number"===typeof e.value?t.totalQuestionNumber=e.value:"string"===typeof e.value&&(t.theme=e.value)})),u(!1),m(`${t.theme}`),g(t.totalQuestionNumber);for(const n in t)if(!t[n])throw new Error(`Value of ${n} is ${t[n]} in object "items"`)},j=e=>{throw x(!0),u(!1),new Error(e)};return(0,r.useEffect)((()=>{const e=`${a}/questions/question${i}/${l}/theme`,t=`${a}/questions`;Promise.allSettled([pe(e),(0,xe.r)(t)]).then(y).catch(j)}),[i,l,a]),(0,c.jsxs)(c.Fragment,{children:[b,w,v]})};var Te=n(4080);const Me=async e=>{let{userAnswer:t,idUser:n,currentQuestionNumb:r,lang:i,profession:o}=e;try{const{name:e,theme:s}=await(async e=>{try{return await(0,K.r)(e)}catch(t){throw console.error(t),t}})(`${o}/questions/question${r}/${i}`),a=`${o}/users/user${n}/answers/answer${r}`,l=await(async(e,t,n)=>{const r=`${e}/questions/question${t}/${n}/rightAnswer`;try{return await(0,K.r)(r)}catch(i){throw console.error(i),i}})(o,r,i),c=l===t?1:0;(0,Se.t8)((0,Se.iH)(Pe.Z,a),{question:e,userAnswer:t,point:c,theme:s})}catch(s){throw console.error(s),s}};const He=n.p+"static/media/arrowleft.8cdee819e06b593b3c13c4f64420ac7e.svg",_e=a.ZP.button`
  box-sizing: border-box;
  display: flex;
  justify-content: ${e=>{let{typeBtn:t}=e;return"back"===t?"flex-start":"flex-end"}};
  align-items: center;
  padding: 8px 18px;
  border: ${e=>{let{typeBtn:t}=e;return"back"===t?"1px solid #000;":"none"}};
  gap: 8px;
  cursor: pointer;
  border-radius: 3px;
  background-color: ${e=>{let{typeBtn:t}=e;return"back"===t?"transparent":"var(--color-purple)"}};
  color: ${e=>{let{typeBtn:t}=e;return"back"===t?"#000":"var(--color-white)"}};
  font: var(--font-bold);
  text-transform: uppercase;
  width: 100%;
  max-width: 120px;
  max-height: 56px;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media screen and (min-width: 768.8px) {
    padding: 16px 18px;
    max-width: 170px;
    max-height: 56px;
    gap: 30px;
  }
`,Qe=e=>{let{setIsBtnNextDisabled:t,isBtnBackDisabled:n,setIsBtnBackDisabled:i}=e;const{t:s}=(0,de.$)("",{keyPrefix:"modules.testButtons.UI.btnBack"});let[a,l]=(0,r.useContext)(o.s$);const[d]=(0,r.useContext)(o.Hp),[u]=(0,r.useContext)(o.iT);return(0,c.jsxs)(_e,{id:"btnBack",onClick:e=>{l(a-1),t(!1),i(!0),(e=>{let{idUser:t,currentQuestionNumb:n,selectorAnswers:r,profession:i}=e;const o=`${i}/users/user${t}/answers/answer${n-1}`;let s="";try{(0,Se.jM)((0,Se.iH)(Pe.Z,o),(e=>{setTimeout((()=>{document.querySelectorAll(r).forEach((t=>{s=e.val().userAnswer,t.textContent===s&&(t.style.border="3px solid #5557FF",t.setAttribute("data-useranswer","true"))}))}),10)}),{onlyOnce:!0})}catch(a){if(!s)throw new Error(`The value of variable 'userAnswerDb' is ${s}. ${a}`);throw new Error(`Unknown mistake: ${a}`)}})({idUser:u,currentQuestionNumb:a,selectorAnswers:"#answersAll ul li",profession:d})},disabled:n,typeBtn:"back",children:[(0,c.jsx)("img",{src:He,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u043d\u0430\u0437\u0430\u0434",style:{color:"red"}}),s("text")]})};const Ue=n.p+"static/media/rightArrow.a2f215d113faf9c22269659fe3e61d24.svg",Oe=e=>{let{onClickButtonHandler:t,isBtnNextDisabled:n}=e;const{t:r}=(0,de.$)("",{keyPrefix:"modules.testButtons.UI.btnNext"});return(0,c.jsxs)(_e,{onClick:t,disabled:n,typeBtn:"next",children:[r("text"),(0,c.jsx)("img",{src:Ue,alt:"rightArrow"})]})},Le=a.ZP.article`
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
`,Ge=e=>{let{isBtnNextDisabled:t,setIsBtnNextDisabled:n,userAnswer:i}=e;const[s,a]=(0,r.useContext)(o.s$),[l]=(0,r.useContext)(o.Sc),[d]=(0,r.useContext)(o.iT),[u]=(0,r.useContext)(o.Hp),{t:p}=(0,de.$)("",{keyPrefix:"modules.testButtons"}),[x,h]=(0,r.useState)(0),[m,f]=(0,r.useState)(!0),g=(0,r.useCallback)((async()=>{const e=`${u}/questions`,t=await(0,xe.r)(e);h(t)}),[]);(0,r.useEffect)((()=>{g()}),[]);const b=e=>{a(s+1),Me({userAnswer:i,idUser:d,currentQuestionNumb:s,lang:l,profession:u}),n(!0),f(!1)};return(0,c.jsxs)(Le,{children:[(0,c.jsx)(Qe,{setIsBtnNextDisabled:n,isBtnBackDisabled:m,setIsBtnBackDisabled:f}),x===s?(0,c.jsx)(Te.k,{text:p("textBtn"),pageTo:"/results",onClick:b,id:"btnFinish",isDisabledBtn:t}):(0,c.jsx)(Oe,{isBtnNextDisabled:t,onClickButtonHandler:b})]})};var Ve=n(3050);const We=a.ZP.section`
  background-color: #fff;
  padding: 17px 8px 25px 8px;
  margin: 0 0 15px 0;
  border-radius: 7px;

  @media screen and (min-width: 1123.8px) {
    padding: 27px 40px 25px 40px;
    margin: 0 0 72px 0;
  }
`,Xe=()=>{const[e,t]=(0,r.useState)(1),n=(0,r.useRef)(null),[s,a]=(0,r.useState)(""),[l,d]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{const e=e=>{e.preventDefault(),e.returnValue="\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043a\u0438\u043d\u0443\u0442\u044c \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443? \u0412\u0441\u0435 \u043d\u0435\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u044b."};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[]),(0,c.jsx)(Ve.o,{customStyle:{backgroundColor:"#1C1C1C"},children:(0,c.jsx)(i.W,{children:(0,c.jsx)(We,{ref:n,id:"quiz",children:(0,c.jsxs)(o.s$.Provider,{value:[e,t],children:[(0,c.jsx)(Fe,{quizRef:n}),(0,c.jsx)(ce,{}),(0,c.jsx)(ne,{setIsBtnNextDisabled:d,setUserAnswer:a}),(0,c.jsx)(Ge,{setIsBtnNextDisabled:d,isBtnNextDisabled:l,userAnswer:s})]})})})})}},2554:(e,t,n)=>{n.d(t,{F4:()=>o,iv:()=>i});n(2791),n(2561);var r=n(5207);n(3361),n(2110);function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.O)(t)}var o=function(){var e=i.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},8519:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7462),i=n(3366),o=n(2466),s=n(7416);const a=["sx"];function l(e){const{sx:t}=e,n=(0,i.Z)(e,a),{systemProps:l,otherProps:c}=(e=>{var t,n;const r={systemProps:{},otherProps:{}},i=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:s.Z;return Object.keys(e).forEach((t=>{i[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r})(n);let d;return d=Array.isArray(t)?[l,...t]:"function"===typeof t?function(){const e=t(...arguments);return(0,o.P)(e)?(0,r.Z)({},l,e):l}:(0,r.Z)({},l,t),(0,r.Z)({},c,{sx:d})}}}]);
//# sourceMappingURL=530.521cf948.chunk.js.map