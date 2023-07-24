"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[194],{9856:(e,n,t)=>{t.d(n,{Z:()=>o});const r=t(7691).ZP.div`
  box-sizing: border-box;
  max-width: 85%;
  min-width: 287px;
  margin: 0 auto;
  padding: 0 5px;
  
  @media screen and (min-width: 1299.8px) {
    width: 1190px;
  }
`;var i=t(184);const o=e=>{let{children:n,style:t}=e;return(0,i.jsx)(r,{style:t,children:n})}},344:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(7691);const i=r.ZP.article`
  background-color: #fff;
  margin: 0 0 15px 0;
  border-radius: 0 0 5px 5px;
`,o=r.ZP.summary`
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
`,a=r.ZP.p`
  font: var(--font-little-text-regular);
  color: black;
  padding: 0;
  margin: 0;
  text-align: justify;

  @media screen and (min-width: 459.8px) {
    font: var(--font-text-regular);
  }
`,c=(r.ZP.img`
  display: block;
  width: 100%;
  max-width: 1129px;
  margin: 13px 0 5px 0;

  @media screen and (min-width: 459.8px) {
    margin: 13px 0 10px 0;
  }
`,r.ZP.div`
  padding: 5px 10px;
  @media screen and (min-width: 459.8px) {
    padding: 10px 20px;
  }
`);var s=t(184);const u=e=>{let{title:n,text:t,idForText:r}=e;return(0,s.jsx)(i,{children:(0,s.jsxs)("details",{open:!0,children:[(0,s.jsx)(o,{children:n}),(0,s.jsx)(c,{children:(0,s.jsx)(a,{id:r,children:t})})]})})}},8194:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var r=t(2791),i=t(7879),o=t(9856),a=t(344);var c=t(184);const s=()=>{const{t:e}=(0,i.$)(),n=[{title:e("\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c"),id:"reportBugText",text:e("\u0415\u0441\u043b\u0438_\u0432\u044b_\u043d\u0430\u0448\u043b\u0438_\u043e\u0448\u0438\u0431\u043a\u0443")}].map(((e,n)=>(0,c.jsx)(a.Z,{title:e.title,text:e.text,idForText:e.id},n+1))),t=[{selector:"#reportBugText",json:e("\u0415\u0441\u043b\u0438_\u0432\u044b_\u043d\u0430\u0448\u043b\u0438_\u043e\u0448\u0438\u0431\u043a\u0443")}];return(0,r.useEffect)((()=>{t.forEach((e=>{document.querySelector(e.selector)&&(document.querySelector(e.selector).innerHTML=JSON.parse(JSON.stringify(e.json)))}))})),(0,c.jsx)("section",{children:n})};var u=t(9922);const l=t(7691).ZP.h1`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 20px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title2);
  }
`,d=()=>{const{t:e}=(0,i.$)();return(0,c.jsx)(u.P,{children:(0,c.jsxs)(o.Z,{children:[(0,c.jsx)(l,{children:e("\u041d\u0430\u0448\u043b\u0438_\u043e\u0448\u0438\u0431\u043a\u0443")}),(0,c.jsx)(s,{})]})})}},9922:(e,n,t)=>{t.d(n,{P:()=>r});const r=t(7691).ZP.main`
  flex: 1 1 auto;
  width: 100%;
  
`},7879:(e,n,t)=>{t.d(n,{$:()=>m});var r=t(3878);var i=t(8192),o=t(5267);function a(e,n){return(0,r.Z)(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o,a,c=[],s=!0,u=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=o.call(t)).done)&&(c.push(r.value),c.length!==n);s=!0);}catch(l){u=!0,i=l}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw i}}return c}}(e,n)||(0,i.Z)(e,n)||(0,o.Z)()}var c=t(4942),s=t(2791),u=t(8589);function l(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var d={};function f(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&d[n[0]]||("string"===typeof n[0]&&(d[n[0]]=new Date),l.apply(void 0,n))}function p(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function g(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],i=!!n.options&&n.options.fallbackLng,o=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!a(r,e)||i&&!a(o,e))))}function x(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return f("i18n.languages were undefined or empty",n.languages),!0;var r=void 0!==n.options.ignoreJSONStructure;return r?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):g(e,n,t)}function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=function(e,n){var t=(0,s.useRef)();return(0,s.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function m(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,s.useContext)(u.OO)||{},i=r.i18n,o=r.defaultNS,c=t||i||(0,u.nI)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new u.zv),!c){f("You will need to pass in an i18next instance by using initReactI18next");var l=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[l,{},!1];return d.t=l,d.i18n={},d.ready=!1,d}c.options.react&&void 0!==c.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var g=v(v(v({},(0,u.JP)()),c.options.react),n),h=g.useSuspense,m=g.keyPrefix,y=e||o||c.options&&c.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(y);var w=(c.isInitialized||c.initializedStoreOnce)&&y.every((function(e){return x(e,c,g)}));function j(){return c.getFixedT(null,"fallback"===g.nsMode?y:y[0],m)}var O=(0,s.useState)(j),k=a(O,2),P=k[0],S=k[1],Z=y.join(),C=b(Z),N=(0,s.useRef)(!0);(0,s.useEffect)((function(){var e=g.bindI18n,n=g.bindI18nStore;function t(){N.current&&S(j)}return N.current=!0,w||h||p(c,y,(function(){N.current&&S(j)})),w&&C&&C!==Z&&N.current&&S(j),e&&c&&c.on(e,t),n&&c&&c.store.on(n,t),function(){N.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,t)})),n&&c&&n.split(" ").forEach((function(e){return c.store.off(e,t)}))}}),[c,Z]);var T=(0,s.useRef)(!0);(0,s.useEffect)((function(){N.current&&!T.current&&S(j),T.current=!1}),[c,m]);var I=[P,c,w];if(I.t=P,I.i18n=c,I.ready=w,w)return I;if(!w&&!h)return I;throw new Promise((function(e){p(c,y,(function(){e()}))}))}}}]);
//# sourceMappingURL=194.ea4d9b5b.chunk.js.map