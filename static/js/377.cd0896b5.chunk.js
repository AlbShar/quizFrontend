"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[377],{9856:(n,e,t)=>{t.d(e,{Z:()=>a});t(2791);const r=t(7691).ZP.div`
  min-width: 287px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 5px;
`;var i=t(184);const a=n=>{let{children:e}=n;return(0,i.jsx)(r,{children:e})}},2626:(n,e,t)=>{t.d(e,{Z:()=>a});const r=t(7691).ZP.img`
  width: 86px;
  height: 42px;

  @media screen and (min-width: 767.8px) {
    width: ${n=>{let{location:e}=n;return"header"===e?"140px":"113px"}};
    height: ${n=>{let{location:e}=n;return"header"===e?"68px":"55px"}};
  }
`;var i=t(184);const a=n=>{let{location:e,style:a}=n;return(0,i.jsx)(r,{src:t(6988),alt:"logo",location:e,style:a})}},2377:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var r=t(7879),i=t(1087),a=t(9856),o=t(2626),c=t(5270),s=t(7691);const l=s.ZP.footer`
  box-sizing: border-box;
  background-color: var(--color-footer);
  padding: 16px;
  margin: 10px 0 0 0;

  @media screen and (min-width: 1023.8px) {
    margin: 30px 0 0 0;
  }
`,u=s.ZP.section`
  @media screen and (min-width: 767.8px) margin-right: 10px;
`,d=s.ZP.ul`
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
`,f=s.ZP.li`
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
`;var p=t(184);const g=()=>{const{t:n}=(0,r.$)(),e=[{text:n("\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c"),link:"/reportbug"},{text:n("\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"),link:"/reestablish"},{text:n("\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430"),link:"/politics"}].map(((n,e)=>(0,p.jsx)(f,{children:(0,p.jsx)(i.rU,{className:"footer__list-link",to:n.link,children:n.text})},e+1)));return(0,p.jsx)(l,{children:(0,p.jsx)(a.Z,{children:(0,p.jsxs)(c.b,{widthFlexStart:767.8,gap:15,jc:"flex-start",children:[(0,p.jsx)(o.Z,{location:"footer"}),(0,p.jsx)(u,{children:(0,p.jsx)("nav",{children:(0,p.jsx)(d,{children:e})})})]})})})}},5270:(n,e,t)=>{t.d(e,{b:()=>r});const r=t(7691).ZP.div`
  gap: ${n=>{let{gap:e}=n;return e?e+"px":""}};
  ${function(n){let{widthFlexStart:e,jc:t="space-between"}=n;return e?`\n      position: relative;\n      @media screen and (min-width: ${e}px) {\n        display: flex;\n        justify-content: ${t};\n        align-items: center;\n        width: 100%;\n      }\n      `:`\n            display: flex;\n            justify-content: ${t};\n            align-items: center;\n            `}}
`},7879:(n,e,t)=>{t.d(e,{$:()=>v});var r=t(3878);var i=t(8192),a=t(5267);function o(n,e){return(0,r.Z)(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,a,o,c=[],s=!0,l=!1;try{if(a=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=a.call(t)).done)&&(c.push(r.value),c.length!==e);s=!0);}catch(u){l=!0,i=u}finally{try{if(!s&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw i}}return c}}(n,e)||(0,i.Z)(n,e)||(0,a.Z)()}var c=t(4942),s=t(2791),l=t(8589);function u(){if(console&&console.warn){for(var n,e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(n=console).warn.apply(n,t)}}var d={};function f(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];"string"===typeof e[0]&&d[e[0]]||("string"===typeof e[0]&&(d[e[0]]=new Date),u.apply(void 0,e))}function p(n,e,t){n.loadNamespaces(e,(function(){if(n.isInitialized)t();else{n.on("initialized",(function e(){setTimeout((function(){n.off("initialized",e)}),0),t()}))}}))}function g(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.languages[0],i=!!e.options&&e.options.fallbackLng,a=e.languages[e.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(n,t){var r=e.services.backendConnector.state["".concat(n,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!o(e.isLanguageChangingTo,n))&&(!!e.hasResourceBundle(r,n)||(!(e.services.backendConnector.backend&&(!e.options.resources||e.options.partialBundledLanguages))||!(!o(r,n)||i&&!o(a,n))))}function h(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e.languages||!e.languages.length)return f("i18n.languages were undefined or empty",e.languages),!0;var r=void 0!==e.options.ignoreJSONStructure;return r?e.hasLoadedNamespace(n,{precheck:function(e,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!r(e.isLanguageChangingTo,n))return!1}}):g(n,e,t)}function x(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?x(Object(t),!0).forEach((function(e){(0,c.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var b=function(n,e){var t=(0,s.useRef)();return(0,s.useEffect)((function(){t.current=e?t.current:n}),[n,e]),t.current};function v(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.i18n,r=(0,s.useContext)(l.OO)||{},i=r.i18n,a=r.defaultNS,c=t||i||(0,l.nI)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new l.zv),!c){f("You will need to pass in an i18next instance by using initReactI18next");var u=function(n){return Array.isArray(n)?n[n.length-1]:n},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}c.options.react&&void 0!==c.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var g=m(m(m({},(0,l.JP)()),c.options.react),e),x=g.useSuspense,v=g.keyPrefix,y=n||a||c.options&&c.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(y);var w=(c.isInitialized||c.initializedStoreOnce)&&y.every((function(n){return h(n,c,g)}));function j(){return c.getFixedT(null,"fallback"===g.nsMode?y:y[0],v)}var O=(0,s.useState)(j),k=o(O,2),P=k[0],S=k[1],Z=y.join(),C=b(Z),N=(0,s.useRef)(!0);(0,s.useEffect)((function(){var n=g.bindI18n,e=g.bindI18nStore;function t(){N.current&&S(j)}return N.current=!0,w||x||p(c,y,(function(){N.current&&S(j)})),w&&C&&C!==Z&&N.current&&S(j),n&&c&&c.on(n,t),e&&c&&c.store.on(e,t),function(){N.current=!1,n&&c&&n.split(" ").forEach((function(n){return c.off(n,t)})),e&&c&&e.split(" ").forEach((function(n){return c.store.off(n,t)}))}}),[c,Z]);var I=(0,s.useRef)(!0);(0,s.useEffect)((function(){N.current&&!I.current&&S(j),I.current=!1}),[c,v]);var z=[P,c,w];if(z.t=P,z.i18n=c,z.ready=w,w)return z;if(!w&&!x)return z;throw new Promise((function(n){p(c,y,(function(){n()}))}))}},6988:(n,e,t)=>{n.exports=t.p+"static/media/logoQuiz.fe60373c0b47051a6b64.png"}}]);
//# sourceMappingURL=377.cd0896b5.chunk.js.map