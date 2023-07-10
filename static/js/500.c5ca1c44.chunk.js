"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[500],{9856:(e,n,t)=>{t.d(n,{Z:()=>a});const r=t(7691).ZP.div`
max-width: 85%;
min-width: 287px;
margin: 0 auto;
padding: 0 5px;
@media screen and (min-width: 1299.8px) {
  max-width: 1190px;
}
`;var i=t(184);const a=e=>{let{children:n}=e;return(0,i.jsx)(r,{children:n})}},9500:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var r=t(7879),i=t(1087),a=t(9856),o=t(4702),c=t(7691);const s=c.ZP.footer`
  box-sizing: border-box;
  background-color: var(--color-footer);
  padding: 16px;
  margin: 10px 0 0 0;

  @media screen and (min-width: 1023.8px) {
    margin: 30px 0 0 0;
  }
`,l=c.ZP.div`
  gap: 15px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 767.8px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
`,u=c.ZP.section`
  @media screen and (min-width: 767.8px) margin-right: 10px;
`,d=c.ZP.ul`
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
`,f=c.ZP.li`
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
`;var p=t(184);const g=()=>{const{t:e}=(0,r.$)(),n=[{text:e("\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c"),link:"/reportbug"},{text:e("\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"),link:"/reestablish"},{text:e("\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430"),link:"/politics"}].map(((e,n)=>(0,p.jsx)(f,{children:(0,p.jsx)(i.rU,{className:"footer__list-link",to:e.link,children:e.text})},n+1)));return(0,p.jsx)(s,{children:(0,p.jsx)(a.Z,{children:(0,p.jsxs)(l,{children:[(0,p.jsx)(o.Z,{location:"footer"}),(0,p.jsx)(u,{children:(0,p.jsx)("nav",{children:(0,p.jsx)(d,{children:n})})})]})})})}},4702:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(1087);t(2791);const i=t.p+"static/media/logo.4d3848fe5a3348ebe87a5a4e5b79cc22.svg";const a=t(7691).ZP.img`
  width: 86px;
  height: 42px;
  cursor: pointer;

  @media screen and (min-width: 767.8px) {
    width: ${e=>{let{location:n}=e;return"header"===n?"140px":"113px"}};
    height: ${e=>{let{location:n}=e;return"header"===n?"68px":"55px"}};
  }
`;var o=t(184);const c=e=>{let{location:n,style:t}=e;return(0,o.jsx)(r.rU,{to:"/",children:(0,o.jsx)(a,{src:i,alt:"logo",location:n,style:t})})}},7879:(e,n,t)=>{t.d(n,{$:()=>b});var r=t(3878);var i=t(8192),a=t(5267);function o(e,n){return(0,r.Z)(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a,o,c=[],s=!0,l=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=a.call(t)).done)&&(c.push(r.value),c.length!==n);s=!0);}catch(u){l=!0,i=u}finally{try{if(!s&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw i}}return c}}(e,n)||(0,i.Z)(e,n)||(0,a.Z)()}var c=t(4942),s=t(2791),l=t(8589);function u(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var d={};function f(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&d[n[0]]||("string"===typeof n[0]&&(d[n[0]]=new Date),u.apply(void 0,n))}function p(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function g(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],i=!!n.options&&n.options.fallbackLng,a=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!o(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!o(r,e)||i&&!o(a,e))))}function h(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return f("i18n.languages were undefined or empty",n.languages),!0;var r=void 0!==n.options.ignoreJSONStructure;return r?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):g(e,n,t)}function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=function(e,n){var t=(0,s.useRef)();return(0,s.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,s.useContext)(l.OO)||{},i=r.i18n,a=r.defaultNS,c=t||i||(0,l.nI)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new l.zv),!c){f("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}c.options.react&&void 0!==c.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var g=m(m(m({},(0,l.JP)()),c.options.react),n),x=g.useSuspense,b=g.keyPrefix,y=e||a||c.options&&c.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(y);var w=(c.isInitialized||c.initializedStoreOnce)&&y.every((function(e){return h(e,c,g)}));function j(){return c.getFixedT(null,"fallback"===g.nsMode?y:y[0],b)}var O=(0,s.useState)(j),k=o(O,2),P=k[0],Z=k[1],C=y.join(),S=v(C),N=(0,s.useRef)(!0);(0,s.useEffect)((function(){var e=g.bindI18n,n=g.bindI18nStore;function t(){N.current&&Z(j)}return N.current=!0,w||x||p(c,y,(function(){N.current&&Z(j)})),w&&S&&S!==C&&N.current&&Z(j),e&&c&&c.on(e,t),n&&c&&c.store.on(n,t),function(){N.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,t)})),n&&c&&n.split(" ").forEach((function(e){return c.store.off(e,t)}))}}),[c,C]);var I=(0,s.useRef)(!0);(0,s.useEffect)((function(){N.current&&!I.current&&Z(j),I.current=!1}),[c,b]);var z=[P,c,w];if(z.t=P,z.i18n=c,z.ready=w,w)return z;if(!w&&!x)return z;throw new Promise((function(e){p(c,y,(function(){e()}))}))}}}]);
//# sourceMappingURL=500.c5ca1c44.chunk.js.map