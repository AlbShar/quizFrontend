"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[907],{638:(e,t,n)=>{n.d(t,{R:()=>s});var r=n(1087),i=n(7879),o=n(184);const s=e=>{let{onClickCloseBtn:t,style:n}=e;const{t:s}=(0,i.$)("",{keyPrefix:"UI.feedback"});return(0,o.jsx)(r.rU,{to:"/feedback",className:"link",onClick:t,style:n,children:s("text")})}},5040:(e,t,n)=>{n.d(t,{r:()=>o});var r=n(408),i=n(8285);const o=async e=>{try{return new Promise(((t,n)=>{(0,r.jM)((0,r.iH)(i.Z,e),(r=>{const i=r.val();if(i)return t(i);n(new Error(`Value (${i}) from Firebase Database not found. Check url (${e})`))}))}))}catch(t){console.error(t)}}},5707:(e,t,n)=>{n.d(t,{T:()=>a});var r=n(1087);n(2791);const i=n.p+"static/media/logo.1128005e65133553dc6b1dbd41fc739b.svg";const o=n(7691).ZP.img`
  width: 94px;
  height: 41px;
  cursor: pointer;
`;var s=n(184);const a=e=>{let{style:t}=e;return(0,s.jsx)(r.rU,{to:"/",children:(0,s.jsx)(o,{src:i,alt:"logo",style:t})})}},6775:(e,t,n)=>{n.d(t,{h:()=>o});var r=n(2791),i=n(4164);const o=e=>{let{children:t}=e;const n=document.createElement("article"),o=document.querySelector("#root");return null===o||void 0===o||o.append(n),(0,r.useEffect)((()=>()=>{n.remove()})),i.createPortal(t,n)}},907:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var r=n(7689),i=n(6775),o=n(5707),s=n(6401),a=n(2791);const c=n.p+"static/media/burger_menu.b941d05b3c392f58816f667c00c6a091.svg";var l=n(1061),d=n(2200),x=n(8566),p=n(6983),u=n(7691);const h=u.ZP.button`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  padding: 8px 5px;
  text-align: center;
  height: 100%;
  width: 75px;
  background-color: ${e=>{let{isClickButton:t}=e;return t?"var(--color-purple)":"var(--color-white)"}};

  @media screen and (min-width: 767.8px) {
    width: 91px;
  }
`,g=u.ZP.span`
  display: inline-block;
  font: var(--font-text7);
  color: ${e=>{let{isClickButton:t}=e;return t?"var(--color-white)":"var(--color-black)"}};

  @media screen and (min-width: 767.8px) {
    font: var(--font-text6);
  }
`,m=u.ZP.span`
  font: var(--font-text6);
`,w=u.ZP.span`
  font: var(--font-text8);
`,f=(u.ZP.span`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;

  @media screen and (min-width: 767.8px) {
    font-size: 16px;
  }
`,u.ZP.ul`
  box-sizing: border-box;
  list-style-type: none;
  margin: 5px 0 0 0;
  padding: 0;
  border-radius: 7px;
  box-shadow: 0px 4px 4px 0px #0000003d;
  width: 100%;
  position: absolute;
  z-index: 2;
  background-color: var(--color-white);
`),b=u.ZP.li`
  color: var(--color-black);
  background-color: transparent;
  border-radius: 7px;
  text-align: center;
  cursor: pointer;

  font-family: Inter;
  padding: 5px 7px;
  width: auto;

  &:hover {
    color: var(--color-white);
    background-color: var(--color-purple);
  }

  @media screen and (min-width: 767.8px) {
    padding: 5px 10px;
  }
`,j=u.ZP.img`
  filter: ${e=>{let{isClickButton:t}=e;return t?"invert(1)":"invert(0)"}};
`,v=u.ZP.div`
  display: inline-flex;
  align-items: baseline;
  gap: 2px;
  justify-content: flex-start;
  border: '1px solid blue';
  width: 71px;
`;var k=n(184);const A=e=>{let{data:t,selected:n,customStyle:r,onClickElement:i,srcImg:o="",srcArrowDown:s}=e;const[c,l]=(0,a.useState)(!1),d=()=>{l((e=>!e))},x=(e=>Object.entries(e).map(((e,t)=>{const n=e[1],r=e[0];return(0,k.jsx)(b,{tabIndex:0,onClick:()=>{i&&i(n),d()},children:(0,k.jsxs)(v,{children:[(0,k.jsx)(m,{children:n.toUpperCase()}),(0,k.jsx)(w,{children:r})]})},t+1)})))(t);return(0,a.useEffect)((()=>{const e=e=>{const t=e.target;t.closest("ul")||t.closest("button")||l(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),(0,k.jsxs)("div",{style:{position:"relative"},children:[(0,k.jsxs)(h,{onClick:()=>{d()},isClickButton:c,children:[(0,k.jsx)(j,{src:o,alt:"img",isClickButton:c}),(0,k.jsx)(g,{className:"dropdown-btn-text",isClickButton:c,children:n.toUpperCase()||""}),(0,k.jsx)(j,{src:s,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0432\u043d\u0438\u0437",isClickButton:c})]}),(0,k.jsx)(p.Z,{in:c,timeout:300,classNames:"list",children:(0,k.jsx)(k.Fragment,{children:c&&(0,k.jsx)(f,{children:x})})})]})};const y=n.p+"static/media/arrowDown.e69690c97f3f0e17d8c28d48413f2833.svg",C=()=>{const[e,t]=(0,a.useContext)(d.Sc),r={"\u0420\u0443\u0441\u0441\u043a\u0438\u0439":"ru",English:"en"};(0,a.useEffect)((()=>{document.querySelector("html").setAttribute("lang",e||"ru")}),[]);const[i,o]=(0,a.useState)(r["\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]);return(0,k.jsx)(A,{data:r,selected:e,onClickElement:e=>(e=>{const n="ru"===e?"\u0420\u0443\u0441\u0441\u043a\u0438\u0439":"English";o(e),t(e),l.ZP.changeLanguage(e),(0,x.Z)("language",n),document.querySelector("html").setAttribute("lang",e)})(e),srcImg:n(1661),srcArrowDown:y})};var P=n(7879),B=n(613),S=n(8195);const E=u.ZP.span`
  color: var(--color-white);
  font: var(--font-text7);
`,Z=u.ZP.span`
  color: var(--color-white);
  font: var(--font-text7);
`,z=u.ZP.div`
  box-sizing: border-box;
  width: 100%;
  width: 200px;
  height: 40px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #fff;
  gap: 8px;
  background-color: var(--color-dark);
  color: #000000;

  @media screen and (min-width: 767.8px) {
    width: 268px;
  }
`;var U=n(5040);const R=async e=>{try{const n=await(0,U.r)(e);return t=n,Object.entries(t).length}catch(n){throw console.error(n),n}var t},I=e=>{let{isChooseProfession:t}=e;const{t:n}=(0,P.$)("",{keyPrefix:"modules.header.components.totalTested"}),i=(0,a.useRef)(null),{isError:o,isLoading:s,totalTestedUsers:c,isHomePage:l}=(()=>{const[e,t]=(0,a.useState)(!0),[n,i]=(0,a.useState)(!1),[o,s]=(0,a.useState)(0),c=(0,r.TH)(),[l,x]=(0,a.useState)("/"!==c.pathname),[p]=(0,a.useContext)(d.Hp),u=e=>{t(!1),s(e)},h=e=>{throw t(!1),i(!0),new Error(e.message)};return(0,a.useEffect)((()=>{p?R(`${p}/users`).then(u).catch(h):t(!1)}),[p]),(0,a.useEffect)((()=>{x("/"!==c.pathname)}),[c.pathname]),{isError:n,isLoading:e,totalTestedUsers:o,isHomePage:l}})(),x=o?(0,k.jsx)(B.B,{}):null,p=s?(0,k.jsx)(S.$,{width:50,height:50,color:"#fcfdff",margin:"0 auto"}):null,u=s||o?null:(0,k.jsxs)(z,{children:[(0,k.jsx)(E,{children:`${n("totalTested")}:`}),(0,k.jsx)(Z,{ref:i,children:l||t?c:"-"})]});return(0,k.jsxs)(k.Fragment,{children:[u," ",p," ",x]})};var L=n(638);const M=u.ZP.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  gap: 10px;
  font: var(--font-text7);


  @media screen and (min-width: 767.8px) {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: flex-start;
      font: var(--font-text6);
  }

  @media screen and (min-width: 1023.8px) {
    gap: 35px;
    flex-direction: row;
  }


}`,O=u.ZP.a`
  text-decoration: none;
  color: var(--color-white);

  &:visited {
    color: var(--color-white);
  }

  &:hover {
    color: var(--color-purple);
  }
`,D=u.ZP.li`
  cursor: pointer;
  margin: 0 0 13px 0;

  @media screen and (min-width: 767.8px) {
    margin: 0;
    width: 100%;
    text-align: center;

  }

  @media screen and (min-width: 1023.8px) {
    margin: 0;
    width: auto;
  }

 
}`,H=e=>{let{onClickCloseBtn:t}=e;const{t:n}=(0,P.$)("",{keyPrefix:"UI.list"});return(0,k.jsxs)(M,{children:[(0,k.jsx)(D,{children:(0,k.jsx)(L.R,{onClickCloseBtn:t})}),(0,k.jsx)(D,{children:(0,k.jsxs)(O,{href:"#team",children:[" ",n("team")]})}),(0,k.jsx)(D,{children:(0,k.jsx)(O,{href:"#rules",children:n("rules")})})]})};const Q=n.p+"static/media/close_btn.7354a8c140282c3c0220dd32a1ea6080.svg",T=u.ZP.article`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  background-color: var(--color-dark);
  padding: 31px 20px 34px 25px;

   @media screen and (min-width: 1299.8px) {
    width: 200px;
    right: 0;
    top: 30px;
  }
}`,W=e=>{let{onClickCloseBtn:t}=e;return(0,k.jsxs)(T,{children:[(0,k.jsx)("div",{style:{textAlign:"right"},children:(0,k.jsx)("img",{src:Q,alt:"close",onClick:t})}),(0,k.jsx)(H,{onClickCloseBtn:t})]})},$=(u.ZP.article`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: ${e=>{let{gap:t}=e;return t?t+"px":""}};
  margin: 0 0 13px 0;

  @media screen and (min-width: 767.8px) {
    justify-content: flex-start;
    gap: 10px;
    margin: 0;
  }

  @media screen and (min-width: 1023.8px) {
    gap: 80px;
  }
`,u.ZP.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${e=>{let{gap:t}=e;return t?t+"px":""}};
  margin-top: 13px;

  &:not(: last-child) {
    margin: 0 0 13px 0;
  }

  @media screen and (min-width: 767.8px) {
    align-items: stretch;
    margin: 0;
    gap: 27px;
  }
`),N=u.ZP.section`
  position: relative;

  @media screen and (min-width: 767.8px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 62px;
  }

  @media screen and (min-width: 1023.8px) {
    gap: 150px;
  }

  @media screen and (min-width: 1299.8px) {
    justify-content: space-between;
  }
`,X=u.ZP.header`
  box-sizing: border-box;
  background: var(--color-dark);
  width: 100%;
  padding: 19px 0;

}

`,F=(u.ZP.div`
  display: none;

  @media screen and (min-width: 767.8px) {
    display: none;
  }
}`,u.ZP.img`
  position: absolute;
  top: 12px;
  right: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media screen and (min-width: 1299.8px) {
    display: none;
  }
}`),q=e=>{let{isChooseProfession:t}=e;const{isShowBurger:n,isShowList:l,isShowMenu:d,setShowMenu:x,setShowBurger:p}=(()=>{const[e,t]=(0,a.useState)(!0),[n,i]=(0,a.useState)(!1),[o,s]=(0,a.useState)(!1),{pathname:c}=(0,r.TH)(),l=()=>{window.innerWidth>1299.8?(t(!1),i(!0)):(t(!0),i(!1))},d=()=>{c.includes("quiz")||c.includes("results")||c.includes("feedback")?(i(!1),t(!1)):l()};return(0,a.useEffect)((()=>{d()}),[c]),(0,a.useEffect)((()=>(l(),d(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)})),[]),{isShowBurger:e,isShowList:n,isShowMenu:o,setShowMenu:s,setShowBurger:t}})();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(X,{id:"header",children:(0,k.jsx)(s.W,{children:(0,k.jsxs)(N,{children:[(0,k.jsx)(o.T,{location:"header"}),n&&(0,k.jsx)(F,{src:c,alt:"menu",onClick:()=>{x(!0)}}),l&&(0,k.jsx)(H,{}),d&&(0,k.jsx)(i.h,{children:(0,k.jsx)(W,{onClickCloseBtn:()=>{p(!0),x(!1)}})}),(0,k.jsxs)($,{children:[(0,k.jsx)(I,{isChooseProfession:t}),(0,k.jsx)(C,{})]})]})})}),(0,k.jsx)(r.j3,{})]})}},1661:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFJSURBVHgB3VXbcYMwENy4AjowJbiD0EHoADowHUAHpIOkg7gDkgriDpQOUoIjJXdh0QMY2+MP78wO9up0L6QDuHdklnvLN0tjeRIa0SpcgNLym5ymaM4J9EwOBozZm8Rvx26t8042uOxdewpykgu1MrfW0P9+yXlNzneiDaK1ZNdSdRBbDVLOBdCS97RR28HIvCoglWhyGWayZ2e9aC8Re13jygYvQWxo8UmeHWnapleE+JBnQdohov1D27MjTduwjdjnCCsOtAdaPOG6+PW9wQ2hLdouaIoc46lRBKeOKzjKk8/xF22MBeB9bHeMBXiPBFCtQIgqEkCP7CFiP7k8DTlOXR7/1OlFM5hBiXWjokN6VFRYQE9BGq+KHOPLdXzEdNi1WIkW03mfGtcD2S1OUh81pvM+RZd9iQtQ4+/z+Inwk+mGWoa7xg+9t5jSp5cXUgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=907.272069e5.chunk.js.map