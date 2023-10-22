"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[598],{158:(e,t,n)=>{n.d(t,{S:()=>r});const r=n(7691).ZP.button`
  padding: 8px 33px;
  background-color: #585AFF;
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
`},9835:(e,t,n)=>{n.d(t,{o:()=>a});var r=n(1087),i=n(7691);const o=i.ZP.button`
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
`;var s=n(184);const a=e=>{let{text:t,pageTo:n,onClick:i,id:a,isDisabledBtn:l}=e;const d=n.match(/\/(\w+)/);let c="home";return d&&d[1]&&(c=d[1]),(0,s.jsx)(r.rU,{className:"btn__link",to:n,onClick:i,id:a,children:(0,s.jsx)(o,{disabled:l,pageName:c,children:t})})}},5157:(e,t,n)=>{n.d(t,{z:()=>o});var r=n(408),i=n(8285);const o=async e=>await new Promise((function(t,n){(0,r.jM)((0,r.iH)(i.Z,e),(r=>{const i=r.val();if(i)return t(i);n(new Error(`Value (${i}) from Firebase Database not found. Check url (${e})`))}))}))},1838:(e,t,n)=>{n.d(t,{r:()=>i});var r=n(5157);const i=async e=>{try{const t=await(0,r.z)(e);return(e=>Object.entries(e).length)(t)}catch(t){throw console.error(t),t}}},4835:(e,t,n)=>{n.d(t,{W:()=>r.W});var r=n(9856)},4042:(e,t,n)=>{n.d(t,{h:()=>o});var r=n(2791),i=n(4164);const o=e=>{let{children:t}=e;const n=document.createElement("article"),o=document.querySelector("#root");return null===o||void 0===o||o.append(n),(0,r.useEffect)((()=>()=>{n.remove()})),i.createPortal(t,n)}},598:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ve});var r=n(2791),i=n(4835),o=n(3589),s=n(361),a=n(7691);const l=a.ZP.li`
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
`;var d=n(184);const c=e=>{let{children:t,index:n,setRef:r,onClickAnswer:i}=e;return(0,d.jsx)(l,{ref:r,tabIndex:0,onClick:e=>i(n,e),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),i(n,e))},children:t})};var u=n(3366),p=n(7462),x=n(8182),h=n(2554),m=n(4419);function f(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function b(e){return parseFloat(e)}var g=n(2065),w=n(6934),v=n(1402),y=n(5878),j=n(1217);function k(e){return(0,j.Z)("MuiSkeleton",e)}(0,y.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const $=["animation","className","component","height","style","variant","width"];let Z,S,C,P,B=e=>e;const N=(0,h.F4)(Z||(Z=B`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),E=(0,h.F4)(S||(S=B`
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
`)),A=(0,w.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((e=>{let{theme:t,ownerState:n}=e;const r=f(t.shape.borderRadius)||"px",i=b(t.shape.borderRadius);return(0,p.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,g.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${r}/${Math.round(i/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(e=>{let{ownerState:t}=e;return"pulse"===t.animation&&(0,h.iv)(C||(C=B`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),N)}),(e=>{let{ownerState:t,theme:n}=e;return"wave"===t.animation&&(0,h.iv)(P||(P=B`
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
    `),E,(n.vars||n).palette.action.hover)})),q=r.forwardRef((function(e,t){const n=(0,v.Z)({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:i,component:o="span",height:s,style:a,variant:l="text",width:c}=n,h=(0,u.Z)(n,$),f=(0,p.Z)({},n,{animation:r,component:o,variant:l,hasChildren:Boolean(h.children)}),b=(e=>{const{classes:t,variant:n,animation:r,hasChildren:i,width:o,height:s}=e,a={root:["root",n,r,i&&"withChildren",i&&!o&&"fitContent",i&&!s&&"heightAuto"]};return(0,m.Z)(a,k,t)})(f);return(0,d.jsx)(A,(0,p.Z)({as:o,ref:t,className:(0,x.Z)(b.root,i),ownerState:f},h,{style:(0,p.Z)({width:c,height:s},a)}))})),z=q;var R=n(2466);const F=(0,n(4046).ZP)();var D=n(7078),T=n(8519),I=n(5080),M=n(1184),_=n(5682);const Q=["component","direction","spacing","divider","children","className","useFlexGap"],H=(0,I.Z)(),U=F("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function O(e){return(0,D.Z)({props:e,name:"MuiStack",defaultTheme:H})}function W(e,t){const n=r.Children.toArray(e).filter(Boolean);return n.reduce(((e,i,o)=>(e.push(i),o<n.length-1&&e.push(r.cloneElement(t,{key:`separator-${o}`})),e)),[])}const G=e=>{let{ownerState:t,theme:n}=e,r=(0,p.Z)({display:"flex",flexDirection:"column"},(0,M.k9)({theme:n},(0,M.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(t.spacing){const e=(0,_.hB)(n),i=Object.keys(n.breakpoints.values).reduce(((e,n)=>(("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e)),{}),o=(0,M.P$)({values:t.direction,base:i}),s=(0,M.P$)({values:t.spacing,base:i});"object"===typeof o&&Object.keys(o).forEach(((e,t,n)=>{if(!o[e]){const r=t>0?o[n[t-1]]:"column";o[e]=r}}));const a=(n,r)=>{return t.useFlexGap?{gap:(0,_.NA)(e,n)}:{"& > :not(style) + :not(style)":{margin:0,[`margin${i=r?o[r]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i]}`]:(0,_.NA)(e,n)}};var i};r=(0,R.Z)(r,(0,M.k9)({theme:n},s,a))}return r=(0,M.dt)(n.breakpoints,r),r};const L=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=U,useThemeProps:n=O,componentName:i="MuiStack"}=e,o=()=>(0,m.Z)({root:["root"]},(e=>(0,j.Z)(i,e)),{}),s=t(G),a=r.forwardRef((function(e,t){const r=n(e),i=(0,T.Z)(r),{component:a="div",direction:l="column",spacing:c=0,divider:h,children:m,className:f,useFlexGap:b=!1}=i,g=(0,u.Z)(i,Q),w={direction:l,spacing:c,useFlexGap:b},v=o();return(0,d.jsx)(s,(0,p.Z)({as:a,ownerState:w,ref:t,className:(0,x.Z)(v.root,f)},g,{children:h?W(m,h):m}))}));return a}({createStyledComponent:(0,w.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,v.Z)({props:e,name:"MuiStack"})}),V=L,X=()=>(0,d.jsxs)(V,{spacing:0,children:[(0,d.jsx)(z,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}}),(0,d.jsx)(z,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}}),(0,d.jsx)(z,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}}),(0,d.jsx)(z,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}}),(0,d.jsx)(z,{variant:"text",sx:{fontSize:"3rem",padding:"7px"}})]});var J=n(5157);const K=e=>{e.forEach((e=>{e.removeAttribute("style"),e.removeAttribute("data-useranswer")}))},Y=a.ZP.article`
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
`,ee=a.ZP.ul`
  margin: 0;
  padding: 0;
  @media screen and (min-width: 767.8px) {
    flex-basis: auto;
  }
`,te=e=>{let{setIsBtnNextDisabled:t,setUserAnswer:n}=e;const[i,a]=(0,r.useState)([]),[l,u]=(0,r.useState)(!0),[p,x]=(0,r.useState)(!1),[h]=(0,r.useContext)(o.Hp),[m]=(0,r.useContext)(o.s$),[f]=(0,r.useContext)(o.Sc),b=[],g=e=>{b.push(e)},w=(e,r)=>{if(r.target){const e=r.target.textContent||"";n(e)}K(b),b[e].setAttribute("style","border: 3px solid #5557FF;"),b[e].focus(),t(!1)},v=e=>{const t=Object.entries(e).map((e=>e.join(". ")));Array.isArray(t)&&(a(t),u(!1))},y=i.map(((e,t)=>(0,d.jsx)(c,{index:t,setRef:g,onClickAnswer:w,children:e},t+1))),j=l?(0,d.jsx)(X,{}):null,k=p?(0,d.jsx)(s.B,{}):null,$=l||p?null:(0,d.jsx)(Y,{id:"answersAll",children:(0,d.jsx)(ee,{children:y})}),Z=e=>{throw u(!1),x(!0),new Error(`${e.message}`)};return(0,r.useEffect)((()=>{(async e=>{try{return await(0,J.z)(e)}catch(t){throw console.error(t),t}})(`${h}/answers/answers${m}/${f}`).then(v).catch(Z)}),[m,f,h]),(0,r.useEffect)((()=>{K(b)}),[m]),(0,d.jsxs)(d.Fragment,{children:[j," ",$," ",k]})},ne=()=>(0,d.jsx)(V,{spacing:1,children:(0,d.jsx)(z,{variant:"text",sx:{fontSize:"5rem"}})}),re=a.ZP.article`
  padding-bottom: 14px;
`,ie=a.ZP.h2`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 0 0 20px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-semi-bold);
  }
`,oe=a.ZP.picture`
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
`,se=a.ZP.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  ${function(e){let{currentQuestionNumb:t}=e;if(16!==t)return"\n      @media screen and (min-width: 667.8px) {\n        width: 85%;\n      }\n  \n      @media screen and (min-width: 923.8px) {\n        width: 78%;\n      }\n            "}}
`,ae=()=>{const[e]=(0,r.useContext)(o.s$),[t]=(0,r.useContext)(o.Hp),[n]=(0,r.useContext)(o.Sc),[i,a]=(0,r.useState)(""),[l,c]=(0,r.useState)(!0),[u,p]=(0,r.useState)(""),[x,h]=(0,r.useState)(!1),m=x?(0,d.jsx)(s.B,{}):null,f=l?(0,d.jsx)(ne,{}):null,b=[`${t}/questions/question${e}/${n}/img`,`${t}/questions/question${e}/${n}/name`],g=l||x?null:u?(0,d.jsxs)(re,{children:[(0,d.jsx)(ie,{id:"questionTitle",tabIndex:0,children:i}),(0,d.jsxs)(oe,{children:[(0,d.jsx)("source",{type:"image/png",media:"(min-width: 320px)",srcSet:u,width:"120",height:"auto"}),(0,d.jsx)("source",{type:"image/png",media:"(min-width: 487px)",srcSet:u,width:"768",height:"auto"}),(0,d.jsx)("source",{type:"image/png",media:"(min-width: 769px)",srcSet:u,width:"1024",height:"auto"}),(0,d.jsx)(se,{src:u,width:"1024",height:"auto",alt:"\u041a\u043e\u0434 \u043d\u0430 JS"})]})]}):(0,d.jsx)(re,{children:(0,d.jsx)(ie,{id:"questionTitle",tabIndex:0,children:i})}),w=e=>{e.forEach(((e,t)=>{if("rejected"===e.status)throw new Error(`${b[t]}: ${e.reason}`)}));const t={src:"",question:""};e.forEach((e=>{e.value.startsWith("http")&&(t.src=e.value),"No"===e.value&&(t.src=""),"string"===typeof e.value&&(t.question=e.value)})),a(t.question),c(!1),p(t.src)},v=e=>{throw c(!1),h(!0),new Error(e)};return(0,r.useEffect)((()=>{Promise.allSettled(b.map((e=>(0,J.z)(e)))).then(w).catch(v)}),[e,n]),(0,d.jsxs)(d.Fragment,{children:[f," ",g," ",m]})};var le=n(7879);const de=()=>(0,d.jsx)(V,{spacing:3,children:(0,d.jsx)(z,{variant:"rounded",width:300,height:25})}),ce=async e=>{try{return await(0,J.z)(e)}catch(t){throw console.error(t),t}};var ue=n(1838);const pe=a.ZP.div`
  box-sizing: border-box;
  height: 6px;
  background-color: var(--color-scroll-bar);
  width: 370px;
`,xe=e=>{let{quizRef:t}=e;const[n]=(0,r.useContext)(o.s$),[i]=(0,r.useContext)(o.Hp),s=(0,r.useRef)(null);return(0,r.useEffect)((()=>{!async function(e){let{currentQuestionNumb:t,quizRef:n,scrollBarElementRef:r,url:i}=e;try{const e=await(0,ue.r)(i),o=n.current,s=r.current;if(o&&e&&s){const n=(o.clientWidth-parseInt(getComputedStyle(o).paddingRight)-parseInt(getComputedStyle(o).paddingLeft))/e;s.style.width=t*n+"px"}}catch(o){throw o instanceof Error?new Error(`${o.message}`):new Error(`Unknown error caught: ${o}`)}}({currentQuestionNumb:n,scrollBarElementRef:s,quizRef:t,url:`${i}/questions`})}),[n]),(0,d.jsx)(pe,{ref:s})};var he=n(2575),me=n(158);const fe=a.ZP.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 15px;
`,be=(0,a.ZP)(me.S)`
  margin: 20px 0 0 0;
  display: block;

  @media screen and (min-width: 767.8px) {
    padding: 12px 30px;
  }
`,ge=a.ZP.div`
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
`,we=a.ZP.h1`
  margin-top: 0;
  font: 800 24px/36px Inter, Arial, sans-serif;
`,ve=a.ZP.span`
  font: 400 16px/24px Inter, Arial, sans-serif;
`,ye=a.ZP.span`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
`,je=e=>{let{title:t,subTitle:n,onClickHandler:r}=e;return(0,d.jsx)(fe,{children:(0,d.jsxs)(ge,{children:[(0,d.jsx)(we,{className:"notification__title",children:t}),(0,d.jsx)(ye,{className:"notification__close",onClick:r,children:"\u2716"}),(0,d.jsx)(ve,{className:"notification__text",children:n}),(0,d.jsx)(be,{onClick:r,"data-testid":"btn-continue",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})]})})};var ke=n(4042);const $e=n.p+"static/media/pause.bb2b2d07bad30ada7aad2b9017f81d3b.svg",Ze=e=>1===`${e}`.length?`0${e}`:`${e}`;var Se=n(408),Ce=n(8285);const Pe=a.ZP.div`
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
`,Be=a.ZP.img`
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
`,Ee=a.ZP.span`
  font: var(--font-bold);
`,Ae=()=>{const{t:e}=(0,le.$)(),[t,n]=(0,r.useState)(!0),[i,s]=(0,r.useState)(!1),[a,l]=(0,r.useState)(0),[c]=(0,r.useContext)(o.iT),u=(0,r.useRef)(null),p=[`${Ze(Math.floor(a/3600)%60)}:`,`${Ze(Math.floor(a/60)%60)}:`,Ze(Math.floor(a%60))].map(((e,t)=>(0,d.jsx)("span",{children:e},t+1))),x=e("\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a1_\u043f\u0430\u0443\u0437\u0430"),h=e("\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a2_\u043f\u0430\u0443\u0437\u0430");return(0,r.useEffect)((()=>{const e=`${(0,he.F)("profession")}/users/user${c}/userInfo`,n=setTimeout((()=>{t&&l((e=>e+1))}),1e3);return()=>{clearTimeout(n),u.current||((e,t)=>{try{(0,Se.Vx)((0,Se.iH)(Ce.Z,t),{time:e})}catch(n){console.error(n)}})(a,e)}}),[a,t]),(0,d.jsxs)(Pe,{ref:u,children:[(0,d.jsxs)(Ne,{onClick:()=>{n(!1),s(!0)},"data-testid":"btn-pause",children:[(0,d.jsx)(Be,{src:$e,alt:"pause"}),e("\u041f\u0430\u0443\u0437\u0430")]}),(0,d.jsx)(Ee,{children:p}),i&&(0,d.jsx)(ke.h,{children:(0,d.jsx)(je,{title:x,subTitle:h,onClickHandler:()=>{n(!0),s(!1)}})})]})},qe=a.ZP.h1`
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
`,Re=(0,a.ZP)(ze)`
  display: block;
  padding: 0;

  @media screen and (min-width: 459.8px) {
    display: inline;
    padding: 0 0 0 10px;
  }
`,Fe=a.ZP.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 540px;
  padding: 20px 0;

  @media screen and (min-width: 459.8px) {
    max-width: 100%;
  }
`,De=e=>{let{quizRef:t}=e;const{t:n}=(0,le.$)(),[i]=(0,r.useContext)(o.s$),[a]=(0,r.useContext)(o.Hp),[l]=(0,r.useContext)(o.Sc),[c,u]=(0,r.useState)(!0),[p,x]=(0,r.useState)(!1),[h,m]=(0,r.useState)(""),[f,b]=(0,r.useState)(0),g=c?(0,d.jsx)(de,{}):null,w=c||p?null:(0,d.jsxs)("section",{children:[(0,d.jsx)("article",{style:{backgroundColor:"#EEEEFF"},children:(0,d.jsx)(xe,{quizRef:t})}),(0,d.jsxs)(Fe,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)(qe,{id:"questionName",children:[n("\u0412\u043e\u043f\u0440\u043e\u0441")," ",i]}),(0,d.jsx)(ze,{id:"totalQuestionQuantity",tabIndex:0,children:`/ ${f}`}),(0,d.jsx)(Re,{id:"themeQuestion",children:h})]}),(0,d.jsx)(Ae,{})]})]}),v=p?(0,d.jsx)(s.B,{}):null,y=e=>{const t={theme:null,totalQuestionNumber:null};e.forEach((e=>{"number"===typeof e.value?t.totalQuestionNumber=e.value:"string"===typeof e.value&&(t.theme=e.value)})),u(!1),m(`${t.theme}`),b(t.totalQuestionNumber);for(const n in t)if(!t[n])throw new Error(`Value of ${n} is ${t[n]} in object "items"`)},j=e=>{throw x(!0),u(!1),new Error(e)};return(0,r.useEffect)((()=>{const e=`${a}/questions/question${i}/${l}/theme`,t=`${a}/questions`;Promise.allSettled([ce(e),(0,ue.r)(t)]).then(y).catch(j)}),[i,l,a]),(0,d.jsxs)(d.Fragment,{children:[g,w,v]})};var Te=n(9835);const Ie=n.p+"static/media/leftArrow.d24a277ed37233dbe9c0bbd8451938c6.svg",Me=a.ZP.button`
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
`,_e=e=>{let{setIsBtnNextDisabled:t,isBtnBackDisabled:n,setIsBtnBackDisabled:i}=e;const{t:s}=(0,le.$)("",{keyPrefix:"modules.testButtons.UI.btnBack"});let[a,l]=(0,r.useContext)(o.s$);const[c]=(0,r.useContext)(o.iT);return(0,d.jsxs)(Me,{id:"btnBack",onClick:e=>{l(a-1),t(!1),i(!0),(e=>{let{idUser:t,currentQuestionNumb:n,selectorAnswers:r}=e;const i=`${(0,he.F)("profession")}/users/user${t}/answers/answer${n-1}`;let o="";try{(0,Se.jM)((0,Se.iH)(Ce.Z,i),(e=>{setTimeout((()=>{document.querySelectorAll(r).forEach((t=>{o=e.val().userAnswer,t.textContent===o&&(t.style.border="3px solid #5557FF",t.setAttribute("data-useranswer","true"))}))}),10)}),{onlyOnce:!0})}catch(s){if(!o)throw new Error(`The value of variable 'userAnswerDb' is ${o}. ${s}`);throw new Error(`Unknown mistake: ${s}`)}})({idUser:c,currentQuestionNumb:a,selectorAnswers:"#answersAll ul li"})},disabled:n,typeBtn:"back",children:[(0,d.jsx)("img",{src:Ie,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u043d\u0430\u0437\u0430\u0434",style:{color:"red"}}),s("text")]})};const Qe=n.p+"static/media/rightArrow.68d8ba69dceb545c90c48c34f34567b7.svg",He=e=>{let{onClickButtonHandler:t,isBtnNextDisabled:n}=e;const{t:r}=(0,le.$)("",{keyPrefix:"modules.testButtons.UI.btnNext"});return(0,d.jsxs)(Me,{onClick:t,disabled:n,typeBtn:"next",children:[r("text"),(0,d.jsx)("img",{src:Qe,alt:"rightArrow"})]})},Ue=async e=>{var t,n;let{userAnswer:r,idUser:i,currentQuestionNumb:o,lang:s}=e;const a=null===(t=document.querySelector("#questionTitle"))||void 0===t?void 0:t.textContent,l=null===(n=document.querySelector("#themeQuestion"))||void 0===n?void 0:n.textContent,d=(0,he.F)("profession"),c=`${d}/users/user${i}/answers/answer${o}`;try{const e=await(async(e,t,n)=>{const r=`${e}/questions/question${t}/${n}/rightAnswer`;try{return await(0,J.z)(r)}catch(i){throw console.error(i),i}})(d,o,s),t=e===r?1:0;(0,Se.t8)((0,Se.iH)(Ce.Z,c),{question:a,userAnswer:r,point:t,theme:l})}catch(u){throw console.error(u),u}},Oe=a.ZP.article`
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
`,We=e=>{let{isBtnNextDisabled:t,setIsBtnNextDisabled:n,userAnswer:i}=e;const[s,a]=(0,r.useContext)(o.s$),[l]=(0,r.useContext)(o.Sc),[c]=(0,r.useContext)(o.iT),[u]=(0,r.useContext)(o.Hp),{t:p}=(0,le.$)("",{keyPrefix:"modules.testButtons"}),[x,h]=(0,r.useState)(0),[m,f]=(0,r.useState)(!0),b=(0,r.useCallback)((async()=>{const e=`${u}/questions`,t=await(0,ue.r)(e);h(t)}),[]);(0,r.useEffect)((()=>{b()}),[]);const g=e=>{a(s+1),Ue({userAnswer:i,idUser:c,currentQuestionNumb:s,lang:l}),n(!0),f(!1)};return(0,d.jsxs)(Oe,{children:[(0,d.jsx)(_e,{setIsBtnNextDisabled:n,isBtnBackDisabled:m,setIsBtnBackDisabled:f}),x===s?(0,d.jsx)(Te.o,{text:p("textBtn"),pageTo:"/results",onClick:g,id:"btnFinish",isDisabledBtn:t}):(0,d.jsx)(He,{isBtnNextDisabled:t,onClickButtonHandler:g})]})},Ge=a.ZP.section`
  background-color: #fff;
  padding: 17px 8px 25px 8px;
  margin: 0 0 15px 0;
  border-radius: 7px;

  @media screen and (min-width: 1123.8px) {
    padding: 27px 40px 25px 40px;
    margin: 0 0 72px 0;
  }
`,Le=a.ZP.main`
  flex: 1 1 auto;
  width: 100%;
  background-color: var(--color-dark);
`,Ve=()=>{const[e,t]=(0,r.useState)(1),n=(0,r.useRef)(null),[s,a]=(0,r.useState)(""),[l,c]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{const e=e=>{e.preventDefault(),e.returnValue="\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043a\u0438\u043d\u0443\u0442\u044c \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443? \u0412\u0441\u0435 \u043d\u0435\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u044b."};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[]),(0,d.jsx)(Le,{children:(0,d.jsx)(i.W,{children:(0,d.jsx)(Ge,{ref:n,id:"quiz",children:(0,d.jsxs)(o.s$.Provider,{value:[e,t],children:[(0,d.jsx)(De,{quizRef:n}),(0,d.jsx)(ae,{}),(0,d.jsx)(te,{setIsBtnNextDisabled:c,setUserAnswer:a}),(0,d.jsx)(We,{setIsBtnNextDisabled:c,isBtnNextDisabled:l,userAnswer:s})]})})})})}},2554:(e,t,n)=>{n.d(t,{F4:()=>o,iv:()=>i});n(2791),n(2561);var r=n(5207);n(3361),n(2110);function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.O)(t)}var o=function(){var e=i.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},8519:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7462),i=n(3366),o=n(2466),s=n(7416);const a=["sx"];function l(e){const{sx:t}=e,n=(0,i.Z)(e,a),{systemProps:l,otherProps:d}=(e=>{var t,n;const r={systemProps:{},otherProps:{}},i=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:s.Z;return Object.keys(e).forEach((t=>{i[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r})(n);let c;return c=Array.isArray(t)?[l,...t]:"function"===typeof t?function(){const e=t(...arguments);return(0,o.P)(e)?(0,r.Z)({},l,e):l}:(0,r.Z)({},l,t),(0,r.Z)({},d,{sx:c})}}}]);
//# sourceMappingURL=598.bf3a2314.chunk.js.map