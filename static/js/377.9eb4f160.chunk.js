"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[377],{2377:(n,e,t)=>{t.r(e),t.d(e,{default:()=>p});var r=t(7879),i=t(1087),a=t(9856),o=t(4702),c=t(5270),s=t(7691);const u=s.ZP.footer`
  box-sizing: border-box;
  background-color: var(--color-footer);
  padding: 16px;
  margin: 10px 0 0 0;

  @media screen and (min-width: 1023.8px) {
    margin: 30px 0 0 0;
  }
`,l=s.ZP.section`
  @media screen and (min-width: 767.8px) margin-right: 10px;
`,f=s.ZP.ul`
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
`,d=s.ZP.li`
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
`;var g=t(184);const p=()=>{const{t:n}=(0,r.$)(),e=[{text:n("\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c"),link:"/reportbug"},{text:n("\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"),link:"/reestablish"},{text:n("\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430"),link:"/politics"}].map(((n,e)=>(0,g.jsx)(d,{children:(0,g.jsx)(i.rU,{className:"footer__list-link",to:n.link,children:n.text})},e+1)));return(0,g.jsx)(u,{children:(0,g.jsx)(a.Z,{children:(0,g.jsxs)(c.b,{widthFlexStart:767.8,gap:15,jc:"flex-start",children:[(0,g.jsx)(o.Z,{location:"footer"}),(0,g.jsx)(l,{children:(0,g.jsx)("nav",{children:(0,g.jsx)(f,{children:e})})})]})})})}},7879:(n,e,t)=>{t.d(e,{$:()=>y});var r=t(3878);var i=t(8192),a=t(5267);function o(n,e){return(0,r.Z)(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,a,o,c=[],s=!0,u=!1;try{if(a=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=a.call(t)).done)&&(c.push(r.value),c.length!==e);s=!0);}catch(l){u=!0,i=l}finally{try{if(!s&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw i}}return c}}(n,e)||(0,i.Z)(n,e)||(0,a.Z)()}var c=t(4942),s=t(2791),u=t(8589);function l(){if(console&&console.warn){for(var n,e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(n=console).warn.apply(n,t)}}var f={};function d(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];"string"===typeof e[0]&&f[e[0]]||("string"===typeof e[0]&&(f[e[0]]=new Date),l.apply(void 0,e))}function g(n,e,t){n.loadNamespaces(e,(function(){if(n.isInitialized)t();else{n.on("initialized",(function e(){setTimeout((function(){n.off("initialized",e)}),0),t()}))}}))}function p(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.languages[0],i=!!e.options&&e.options.fallbackLng,a=e.languages[e.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(n,t){var r=e.services.backendConnector.state["".concat(n,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!o(e.isLanguageChangingTo,n))&&(!!e.hasResourceBundle(r,n)||(!(e.services.backendConnector.backend&&(!e.options.resources||e.options.partialBundledLanguages))||!(!o(r,n)||i&&!o(a,n))))}function h(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e.languages||!e.languages.length)return d("i18n.languages were undefined or empty",e.languages),!0;var r=void 0!==e.options.ignoreJSONStructure;return r?e.hasLoadedNamespace(n,{precheck:function(e,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!r(e.isLanguageChangingTo,n))return!1}}):p(n,e,t)}function b(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function v(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(Object(t),!0).forEach((function(e){(0,c.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var x=function(n,e){var t=(0,s.useRef)();return(0,s.useEffect)((function(){t.current=e?t.current:n}),[n,e]),t.current};function y(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.i18n,r=(0,s.useContext)(u.OO)||{},i=r.i18n,a=r.defaultNS,c=t||i||(0,u.nI)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new u.zv),!c){d("You will need to pass in an i18next instance by using initReactI18next");var l=function(n){return Array.isArray(n)?n[n.length-1]:n},f=[l,{},!1];return f.t=l,f.i18n={},f.ready=!1,f}c.options.react&&void 0!==c.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=v(v(v({},(0,u.JP)()),c.options.react),e),b=p.useSuspense,y=p.keyPrefix,m=n||a||c.options&&c.options.defaultNS;m="string"===typeof m?[m]:m||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(m);var w=(c.isInitialized||c.initializedStoreOnce)&&m.every((function(n){return h(n,c,p)}));function j(){return c.getFixedT(null,"fallback"===p.nsMode?m:m[0],y)}var O=(0,s.useState)(j),k=o(O,2),P=k[0],C=k[1],S=m.join(),N=x(S),I=(0,s.useRef)(!0);(0,s.useEffect)((function(){var n=p.bindI18n,e=p.bindI18nStore;function t(){I.current&&C(j)}return I.current=!0,w||b||g(c,m,(function(){I.current&&C(j)})),w&&N&&N!==S&&I.current&&C(j),n&&c&&c.on(n,t),e&&c&&c.store.on(e,t),function(){I.current=!1,n&&c&&n.split(" ").forEach((function(n){return c.off(n,t)})),e&&c&&e.split(" ").forEach((function(n){return c.store.off(n,t)}))}}),[c,S]);var Z=(0,s.useRef)(!0);(0,s.useEffect)((function(){I.current&&!Z.current&&C(j),Z.current=!1}),[c,y]);var z=[P,c,w];if(z.t=P,z.i18n=c,z.ready=w,w)return z;if(!w&&!b)return z;throw new Promise((function(n){g(c,m,(function(){n()}))}))}}}]);
//# sourceMappingURL=377.9eb4f160.chunk.js.map