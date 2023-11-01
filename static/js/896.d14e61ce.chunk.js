"use strict";(globalThis.webpackChunkquizfrontend=globalThis.webpackChunkquizfrontend||[]).push([[896],{638:(e,t,n)=>{n.d(t,{R:()=>a});var i=n(1087),r=n(7879),o=n(184);const a=e=>{let{onClickCloseBtn:t,style:n}=e;const{t:a}=(0,r.$)("",{keyPrefix:"UI.feedback"});return(0,o.jsx)(i.rU,{to:"/feedback",className:"link",onClick:t,style:n,children:a("text")})}},4080:(e,t,n)=>{n.d(t,{k:()=>s});var i=n(1087),r=n(7691);const o=r.ZP.button`
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
`;(0,r.ZP)(o)`
  position: absolute;
  right: 0;
  top: 0;
`,r.ZP.button`
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: none;
  background-color: transparent;
  gap: 8px;
  cursor: pointer;
`,r.ZP.article`
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
`,r.ZP.img`
  width: 24px;
  height: 24px;
`,r.ZP.span`
  font: var(--font-button);
  color: var(--color-back-btn);
  text-transform: uppercase;
`;var a=n(184);const s=e=>{let{text:t,pageTo:n,onClick:r,id:s,isDisabledBtn:c}=e;const d=n.match(/\/(\w+)/);let l="home";return d&&d[1]&&(l=d[1]),(0,a.jsx)(i.rU,{className:"btn__link",to:n,onClick:r,id:s,children:(0,a.jsx)(o,{disabled:c,pageName:l,children:t})})}},5040:(e,t,n)=>{n.d(t,{r:()=>o});var i=n(408),r=n(8285);const o=async e=>{try{return new Promise(((t,n)=>{(0,i.jM)((0,i.iH)(r.Z,e),(i=>{const r=i.val();if(r)return t(r);n(new Error(`Value (${r}) from Firebase Database not found. Check url (${e})`))}))}))}catch(t){console.error(t)}}},1838:(e,t,n)=>{n.d(t,{r:()=>r});var i=n(5040);const r=async e=>{try{const t=await(0,i.r)(e);return(e=>Object.entries(e).length)(t)}catch(t){throw console.error(t),t}}},3413:(e,t,n)=>{n.d(t,{$:()=>u});var i=n(7879),r=n(3066),o=n(638),a=n(6401),s=n(5707),c=n(7691);const d=c.ZP.footer`
  box-sizing: border-box;
  background-color: var(--color-dark);
  padding: 20px 0 170px;

  @media screen and (min-width: 1299.8px) {
    padding: 34px 0 100px 0;
  }
`,l=c.ZP.ul`
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
`,x=c.ZP.div`
  font: var(--font-text6-regular);

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text5);
  }
`,m=c.ZP.div`
  font: var(--font-text7);

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text6);
  }
`,p=c.ZP.a`
  text-decoration: none;
  font: var(--font-text6);
  color: var(--color-white);

  &:visited {
    color: var(--color-white);
  }

  &:hover {
    color: var(--color-purple);
  }
`,h=c.ZP.nav`
  margin: 35px 0 0 0;
  width: 100%;

  @media screen and (min-width: 1299.8px) {
    margin: 0;
  }
`,g=c.ZP.li`
  text-align: left;

  &:not(:last-child) {
    margin: 0 0 12px 0;
  }

  @media screen and (min-width: 767.8px) {
    padding: 0px;
    text-align: center;

    &:not(:last-child) {
      margin: 0;
    }

    @media screen and (min-width: 1023.8px) {
      &:not(:last-child) {
        margin: 0;
      }
    }
    @media screen and (min-width: 1299.8px) {
      text-align: left;
    }
  }
`;var f=n(184);const u=()=>{const{t:e}=(0,i.$)("",{keyPrefix:"components.footer"}),t=[{profession:e("Frontend"),name:e("firstNameFrontend"),link:"https://t.me/AlbertS1"},{profession:e("Designer"),name:e("firstNameDesigner"),link:"https://t.me/lisa_vetta14"},{profession:"Project manager",name:e("firstNamePM"),link:"https://t.me/Nattalia_nat"}].map(((e,t)=>(0,f.jsx)(r.ZP,{item:!0,xs:0===t||2===t?1.35:.3,md:3,lg:2,xl:"auto",children:(0,f.jsx)(g,{children:(0,f.jsxs)(p,{href:e.link,target:"_blank",children:[(0,f.jsxs)(x,{children:[" ",e.profession]}),(0,f.jsxs)(m,{children:[" ",e.name]})]})})},t+1)));return(0,f.jsx)(d,{children:(0,f.jsx)(a.W,{children:(0,f.jsxs)(r.ZP,{container:!0,columns:{xs:2,md:12,xl:12},alignItems:"center",direction:"row",children:[(0,f.jsx)(r.ZP,{item:!0,xs:.7,md:3,xl:2,children:(0,f.jsx)(s.T,{location:"footer"})}),(0,f.jsx)(r.ZP,{item:!0,xs:1.3,md:6,xl:4,children:(0,f.jsxs)(r.ZP,{container:!0,flexDirection:"row",columns:{xs:1.3,md:6},rowSpacing:2.5,children:[(0,f.jsx)(r.ZP,{item:!0,xs:.9,md:3,children:(0,f.jsx)(o.R,{})}),(0,f.jsx)(r.ZP,{item:!0,xs:.3,md:3,children:(0,f.jsx)(p,{href:"#header",children:e("textUpLink")})})]})}),(0,f.jsx)(r.ZP,{item:!0,md:12,xl:6,children:(0,f.jsx)(r.ZP,{container:!0,columns:{xs:2,md:12,xl:6},justifyContent:"center",alignItems:"center",children:(0,f.jsx)(h,{id:"team",children:(0,f.jsx)(l,{children:(0,f.jsx)(r.ZP,{container:!0,columns:{xs:2,md:12,xl:6},columnSpacing:{xs:3,xl:5},rowSpacing:4,children:t})})})})})]})})})}},5707:(e,t,n)=>{n.d(t,{T:()=>s});var i=n(1087);n(2791);const r=n.p+"static/media/logo.1128005e65133553dc6b1dbd41fc739b.svg";const o=n(7691).ZP.img`
  width: 94px;
  height: 41px;
  cursor: pointer;
`;var a=n(184);const s=e=>{let{style:t}=e;return(0,a.jsx)(i.rU,{to:"/",children:(0,a.jsx)(o,{src:r,alt:"logo",style:t})})}},3050:(e,t,n)=>{n.d(t,{o:()=>o});const i=n(7691).ZP.main`
  flex: 1 1 auto;
  width: 100%;
  background-color: var(--color-white);
`;var r=n(184);const o=e=>{let{children:t,customStyle:n}=e;return(0,r.jsx)(i,{style:n,children:t})}},4896:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Se});var i=n(2791),r=n(7879),o=n(3066),a=n(6401),s=n(4080),c=n(2200),d=n(8566),l=n(8195),x=n(613),m=n(1838),p=n(5040);const h=async(e,t)=>{try{const n=((e,t)=>{const n=new Set,i=Object.values(e).map((e=>e[t].theme));for(const r of i)n.add(r);return n.size})(await(0,p.r)(e),t);return n}catch(n){throw console.error(n),n}};var g=n(7691);const f=g.ZP.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  box-sizing: border-box;
  list-style-type: none;
  margin: 26px 0 0 0;
  padding: 20px 27px;
  border-radius: 3px;
  background-color: var(--color-gray);
  min-height: 48px;

  @media screen and (min-width: 767.8px) {
    max-width: 512px;
    padding: 10px 15px;
    flex-direction: row;
    max-height: 58px;
    align-items: center;
  }

  @media screen and (min-width: 1299.8px) {
    padding: 10px 36px;
  }
`,u=g.ZP.img`
  width: 24px;
  height: 24px;
  margin: 0 8px 0 0;
`,b=g.ZP.li`
  color: white;
  font: var(--font-little-text-bold);
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:not(:last-child) {
    margin: 0 0 16px 0;
  }

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);

    &:not(:last-child) {
      margin: 0 0 0 0;
    }

    &:not(:last-child):after {
      color: var(--color-white);
      position: relative;
      content: '/';
      left: 15px;
    }
  }

  @media screen and (min-width: 1023.8px) {
    &:not(:last-child):after {
      left: 35px;
    }
  }

  @media screen and (min-width: 1299.8px) {
    &:not(:last-child):after {
      left: 20px;
    }
  }
`;const v=n.p+"static/media/clock.0a77f6d29e336326f0d849f3cbd9a200.svg";const j=n.p+"static/media/bar-chart.9788ed116eac0494510273d58ad31413.svg";const w=n.p+"static/media/help-circle.28fac9b5c3eeaf246dc3857d1a955460.svg";var P=n(184);const Z=e=>{let{isChooseProfession:t,quantityQuestions:n,quantityThemes:i}=e;const{t:o}=(0,r.$)("",{keyPrefix:"modules.callToAction.components.infoTest"}),a=[{text:` ${t?"~"+n:"0"} ${o("min")}`,srcIcon:v,alt:"icon of clock"},{text:`${t?n:"0"} ${o("questions")}`,srcIcon:w,alt:"icon of question in circle"},{text:`${t?i:"0"} ${o("block")}`,srcIcon:j,alt:" icon of bar chart "}];return(0,P.jsx)(P.Fragment,{children:a.map(((e,t)=>(0,P.jsxs)(b,{children:[(0,P.jsx)(u,{src:e.srcIcon,alt:e.alt}),(0,P.jsx)("span",{style:{color:"var(--color-white)"},children:e.text})]},t+1)))})},k=e=>{let{isChooseProfession:t,setChooseProfession:n}=e;const{isLoading:r,isError:o,quantityQuestions:a,quantityThemes:s}=(()=>{const[e]=(0,i.useContext)(c.Hp),[t,n]=(0,i.useContext)(c.Sc),[r,o]=(0,i.useState)(!0),[a,s]=(0,i.useState)(0),[d,l]=(0,i.useState)(0),[x,p]=(0,i.useState)(!1),g=e=>{const[t,n]=e;o(!1),s(t),l(n)},f=e=>{p(!0),o(!1),console.error(e)};return(0,i.useEffect)((()=>{if(e){const n=`${e}/questions`;Promise.all([(0,m.r)(n),h(n,t)]).then(g).catch(f)}}),[e]),{isLoading:r,isError:x,quantityQuestions:a,quantityThemes:d}})(),d=r||o?null:(0,P.jsx)(Z,{isChooseProfession:t,quantityQuestions:a,quantityThemes:s}),p=r?(0,P.jsx)(l.$,{width:50,height:50,color:"#fcfdff",margin:"auto"}):null,g=o?(0,P.jsx)(x.B,{}):null;return(0,P.jsx)("nav",{children:(0,P.jsxs)(f,{children:[d," ",p," ",g]})})};var y=n(408),C=n(8285);var T=n(5934);const $=n.p+"static/media/arrowDownLarge.5cb9226dd89f16c2e62eb8a7b2afc8b7.svg",S=e=>{let{setChooseProfession:t}=e;const[,n]=(0,i.useContext)(c.Hp),{t:o}=(0,r.$)("",{keyPrefix:"modules.callToAction.UI.dropdownProfession"}),[a,s]=(0,i.useState)(""),l={"Frontend development":"Frontend","Project management":"Manager"},x=Object.keys(l);return(0,P.jsx)(T.L,{typeFilter:"profession",selectedFilter:a||o("textBtn"),nameListItems:x,setFilter:e=>{(0,d.Z)("profession",l[e]),n(l[e]),s(e),t(!0)},srcArrowDown:$})},z=g.ZP.article`
  max-width: 100%;
  background-color: transparent;
  padding: 0;
  margin: 0 0 13px 0;
  border-radius: 7px;
  poisition: relative;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 32px 0;
  }
`,q=g.ZP.section`
  background-color: var(--color-dark);

  @media screen and (min-width: 1023.8px) {
    position: relative;
  }

  @media screen and (min-width: 1023.8px) {
    position: relative;
  }
`,I=g.ZP.h1`
  font: var(--font-text2);
  color: var(--color-white);
  padding: 0;
  margin: 0;
  text-align: left;
  padding: 75px 0 0 0;
  line-height: 36px;

  @media screen and (min-width: 767.8px) {
    padding: 87px 0 0 0;
    font: var(--font-text1);
    line-height: 37.5px;
  }

  @media screen and (min-width: 1023.8px) {
    line-height: 40px;
    padding: 137px 0 0 0;
  }
`,F=g.ZP.h2`
  font: var(--font-text5);
  color: white;
  text-align: left;
  margin: 24px 0 20px 0;

  @media screen and (min-width: 767.8px) {
    margin: 40px 0 54px 0;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text4);
  }
`,N=g.ZP.img`
  transform: translateY(4px);
  margin: 10px 0 0 0;
  width: 285px;
  height: 249px;

  @media screen and (min-width: 767.8px) {
    width: 578px;
    height: 505px;
  }

  @media screen and (min-width: 1023.8px) {
    position: absolute;
    transform: scale(0.7);
    bottom: -80px;
    right: -150px;
  }

  @media screen and (min-width: 1299.8px) {
    transform: scale(1);
    width: 578px;
    height: 505px;
    bottom: 0px;
    right: -100px;
  }
`,_=g.ZP.div`
  display: flex;
  width: auto;
  gap: 20px;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (min-width: 767.8px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 35px;
    align-items: center;
  }

  @media screen and (min-width: 1023.8px) {
    margin: 0 0 70px 0;
  }

  @media screen and (min-width: 1299.8px) {
    margin: 0 0 149px 0;
  }
`,D=e=>{let{isChooseProfession:t,setChooseProfession:l}=e;const{t:x}=(0,r.$)("",{keyPrefix:"modules.callToAction"}),[m,p]=(0,i.useContext)(c.iT);return(0,P.jsx)(q,{id:"startTest",children:(0,P.jsx)(a.W,{children:(0,P.jsxs)(o.ZP,{container:!0,columns:{xs:2,md:12,lg:12,xl:12},alignItems:"center",children:[(0,P.jsx)(o.ZP,{item:!0,xs:2,md:12,lg:8,xl:8,children:(0,P.jsxs)(z,{id:"CallToAction",children:[(0,P.jsx)(I,{children:x("mainTitle")}),(0,P.jsx)(k,{isChooseProfession:t,setChooseProfession:l}),(0,P.jsx)(F,{children:x("subTitle")}),(0,P.jsxs)(_,{children:[(0,P.jsx)(S,{setChooseProfession:l}),(0,P.jsx)(s.k,{pageTo:"quiz",onClick:()=>{const e=(()=>{const e=(0,y.VF)((0,y.iH)(C.Z,"users/user"));if(e&&e.key)return e.key;return""})();p(e),(0,d.Z)("idUser",e)},text:x("textStartBtn"),isDisabledBtn:!t})]})]})}),(0,P.jsx)(o.ZP,{item:!0,xs:2,md:12,children:(0,P.jsx)(N,{src:n(3487),alt:"img"})})]})})})};var R=n(3413),U=n(638);const W=n.p+"static/media/person_sitting.84a3313c8e0a7a6c27fe1733a5427236.svg",A=g.ZP.p`
  font: var(--font-text5);
  color: var(--color-black);
  text-align: left;
  margin: 0 0 10px 0;

  &:last-child {
    margin: 0;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text4);
  }
`,B=g.ZP.h3`
  font: var(--font-text10);
  max-width: 403px;
  color: var(--color-black);
  text-align: left;
  margin: 60px 0 40px 0;

  @media screen and (min-width: 767.8px) {
    text-align: left;
    margin: 0;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text2);
  }
`,L=g.ZP.img`
  width: 155px;
  height: 225px;
  transform: translateY(34px);
  z-index: 3;

  @media screen and (min-width: 767.8px) {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media screen and (min-width: 1023.8px) {
    width: 224px;
    height: 347px;
    bottom: -20px;
  }
`,E=g.ZP.article`
  @media screen and (min-width: 767.8px) {
    padding: 30px 0 85px 0;
  }

  @media screen and (min-width: 1023.8px) {
    padding: 90px 0 148px 0;
  }
`,H=g.ZP.section`
  background-color: var(--color-white);
`,Q=()=>{const{t:e}=(0,r.$)("",{keyPrefix:"components.aboutUs"}),[t]=(0,i.useContext)(c.Sc);return(0,P.jsx)(H,{children:(0,P.jsx)(a.W,{children:(0,P.jsx)(E,{lang:t,children:(0,P.jsxs)(o.ZP,{container:!0,columns:{xs:2,md:12,lg:12},children:[(0,P.jsx)(o.ZP,{item:!0,xs:2,md:6.2,lg:6.2,children:(0,P.jsx)(B,{children:e("mainTitle")})}),(0,P.jsxs)(o.ZP,{item:!0,xs:2,md:5.8,lg:5.8,children:[(0,P.jsxs)(A,{children:[e("text1")," "]}),(0,P.jsxs)(A,{children:[e("text2")," "]}),(0,P.jsxs)(A,{children:[e("text3"),(0,P.jsx)(U.R,{style:{color:"var(--color-purple)",font:"var(--font-text5)",fontWeight:700}}),e("text4")]})]}),(0,P.jsx)(L,{src:W,alt:"person_sitting"})]})})})})};const M=n.p+"static/media/img.762c12aa3293560ead8d0fe0c5ab66d1.svg";const O=n.p+"static/media/curve_line.41fc09e689b02c70523546b9e3d5eecf.svg",Y=g.ZP.h3`
  color: var(--color-black);
  font: var(--font-text10);
  text-align: center;
  margin: 65px 0 30px 0;

  @media screen and (min-width: 459.8px) {
    text-align: left;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text2);
  }
`,V=g.ZP.img`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 61px;
  height: 152px;
  z-index: 1;

  @media screen and (min-width: 767.8px) {
    transform: scale(1.25);
  }

  @media screen and (min-width: 1299.8px) {
    width: 122px;
    height: 305px;
    top: 20%;
  }
`,G=g.ZP.img`
  position: absolute;
  right: -5px;
  top: 61%;

  @media screen and (min-width: 1299.8px) {
    transform: scale(2.2);
    top: 36%;
  }
`,J=g.ZP.article`
  position: relative;
`,K=g.ZP.section`
  background-color: var(--color-white);
  position: relative;
`,X=g.ZP.article`
  background-color: var(--color-light-gray);
  border-radius: 3px;
  padding: 40px 0 32px 16px;

  &:not(:nth-child(4)) {
    margin: 0 0 15px 0;
  }

  @media screen and (min-width: 1023.8px) {
    padding: 44px 20px 44px 20px;
  }
`,ee=g.ZP.span`
  font: var(--font-text9);
  color: var(--color-purple);
`,te=g.ZP.h4`
  display: block;
  font: var(--font-text5-bold);
  color: var(--color-black);
  margin: 0;
  word-wrap: break-word;

  @media screen and (min-width: 1023.8px) {
    max-width: 100%;
    font: var(--font-text3);
  }
`,ne=g.ZP.p`
  font: var(--font-text6-regular);
  color: var(--color-black);
  margin: 30px 0 0 0;

  @media screen and (min-width: 767.8px) {
    margin: 0;
    font: var(--font-text5);
    margin: 40px 0 0 0;
  }

  @media screen and (min-width: 1023.8px) {
    margin: 0;
  }
`,ie=()=>{const{t:e}=(0,r.$)("",{keyPrefix:"components.benefitInfo"}),t=[{title:e("subTitle1"),text:e("text1")},{title:e("subTitle2"),text:e("text2")},{title:e("subTitle3"),text:e("text3")}];return(0,P.jsxs)(K,{children:[(0,P.jsx)(V,{src:M,alt:"image"}),(0,P.jsx)(a.W,{children:(0,P.jsx)(o.ZP,{container:!0,columns:{xs:2,md:6,lg:12},children:(0,P.jsxs)(J,{children:[(0,P.jsx)(Y,{children:e("mainTitle")}),t.map(((e,t)=>{const{title:n,text:i}=e;return(0,P.jsx)(re,{title:n,text:i,numberCard:t+1},t+1)})),(0,P.jsx)(G,{src:O,alt:"curve_line"})]})})})]})},re=e=>{let{numberCard:t,title:n,text:i}=e;const r=t<10?`0${t}`:t;return(0,P.jsx)(X,{children:(0,P.jsxs)(o.ZP,{container:!0,direction:"row",columns:{xs:2,md:6,lg:12},alignItems:"center",columnSpacing:{xs:2},children:[(0,P.jsx)(o.ZP,{item:!0,md:.7,lg:.7,children:(0,P.jsx)(ee,{children:r})}),(0,P.jsx)(o.ZP,{item:!0,xs:!0,md:!0,lg:5.45,children:(0,P.jsx)(te,{children:n})}),(0,P.jsx)(o.ZP,{item:!0,xs:2,md:5.5,lg:5,children:(0,P.jsx)(ne,{children:i})})]})})};const oe=n.p+"static/media/testRule1.308a2b987910c7657681834d9665332c.svg";const ae=n.p+"static/media/testRule2.3f7f5c1060af5867e44777ee343e7c77.svg";const se=n.p+"static/media/testRule3.347477bdb1a5d44fa0608034e8af61cf.svg";const ce=n.p+"static/media/testRule4.7b90c6b3f18e32f8251ce15786b39627.svg",de=g.ZP.h3`
  color: var(--color-black);
  margin: 10px 0 0 0;
  font: var(--font-text10);
  text-align: left;

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text2);
  }
`,le=g.ZP.h4`
  text-align: left;
  font: var(--font-text5);
  color: var(--color-black);
  margin: 45px 0 24px 0;

  @media screen and (min-width: 767.8px) {
    margin: 0 0 64px 0;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text4);
  }
`,xe=g.ZP.section`
  background-color: var(--color-light-gray2);
  position: relative;
`,me=g.ZP.article`
  padding: 80px 0;
`,pe=g.ZP.p`
  font: var(--font-text6-regular);
  color: var(--color-dark-gray);
  margin-top: 35px;

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text5);
  }
`,he=g.ZP.img`
  display: block;
  margin: 0 auto;
`,ge=g.ZP.article`
  box-sizing: border-box;
  background-color: var(--color-white);
  padding: 25px 20px;
  height: 276px;

  &:not(:last-child) {
    margin: 0 0 15px 0;
  }

  @media screen and (min-width: 767.8px) {
    height: 289px;
  }
`,fe=()=>{const{t:e}=(0,r.$)("",{keyPrefix:"components.testRules"}),t=[{img:oe,text:e("rule1")},{img:ae,text:e("rule2")},{img:se,text:e("rule3")},{img:ce,text:e("rule4")}];return(0,P.jsx)(xe,{id:"rules",children:(0,P.jsx)(a.W,{children:(0,P.jsxs)(me,{children:[(0,P.jsxs)(o.ZP,{container:!0,columns:{xs:2,md:12,xl:12},spacing:{md:3},children:[(0,P.jsx)(o.ZP,{item:!0,xs:2,md:6,xl:6,children:(0,P.jsx)(de,{children:e("mainTitle")})}),(0,P.jsx)(o.ZP,{item:!0,xs:2,md:6,xl:6,children:(0,P.jsxs)(le,{children:[e("subTitle")," "]})})]}),(0,P.jsx)(o.ZP,{container:!0,columns:{xs:2,md:12,xl:12},spacing:1.875,alignItems:"center",children:t.map(((e,t)=>{const{text:n,img:i}=e;return(0,P.jsx)(ue,{text:n,img:i},t)}))})]})})})},ue=e=>{let{text:t,img:n}=e;return(0,P.jsx)(o.ZP,{item:!0,xs:2,md:6,xl:3,children:(0,P.jsxs)(ge,{children:[(0,P.jsx)(he,{src:n,alt:"ruleTest"}),(0,P.jsx)(pe,{children:t})]})})};const be=n.p+"static/media/curve_line2.15d6fed56b99709672cfc6272d55e7c3.svg",ve=g.ZP.h3`
  color: var(--color-black);
  font: var(--font-text10);
  margin: 5px 0 0 0;

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text2);
  }
`,je=g.ZP.section`
  background-color: var(--color-light-gray2);
  position: relative;
`,we=g.ZP.article`
  padding: 0 0 134px 0;
`,Pe=g.ZP.h4`
  color: var(--color-black);
  font: var(--font-text5);
  margin: 40px 0 24px 0;

  @media screen and (min-width: 767.8px) {
    margin: 0 0 24px 0;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text4);
    margin-bottom: 59px;
  }
`,Ze=g.ZP.h5`
  color: var(--color-dark-gray);
  font: var(--font-text6-regular);
  text-align: center;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text6-regular);
  }
`,ke=g.ZP.img`
  position: absolute;
  bottom: 70px;
  left: 0px;
  z-index: 0;
  overflow: visible;
  max-height: 240px;
  width: 100%;

  @media screen and (min-width: 767.8px) {
    bottom: 30px;
    transform: scaleY(0.8);
  }

  @media screen and (min-width: 1299.8px) {
    left: -20px;
    bottom: 60px;
  }
`,ye=g.ZP.article`
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  width: 290px;
  border-radius: 80px;
  border: 2px solid var(--color-purple);
  background: var(--color-white);
  text-align: center;
  padding: 19px 13px;
  height: 60px;
  margin: 0;

  &:not(:last-child) {
    margin: 0 0 6px 0;
  }

  &#result3 {
    padding: 19px 2px;
  }

  @media screen and (min-width: 459.8px) {
    width: 100%;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text5);
  }
`,Ce=()=>{const{t:e}=(0,r.$)("",{keyPrefix:"components.resultsInfo"}),t=[e("result1"),e("result2"),e("result3"),e("result4")];return(0,P.jsx)(je,{children:(0,P.jsx)(a.W,{children:(0,P.jsxs)(we,{children:[(0,P.jsxs)(o.ZP,{container:!0,columns:{xs:2,md:12},children:[(0,P.jsx)(o.ZP,{item:!0,xs:2,md:6.2,children:(0,P.jsx)(ve,{children:e("mainTitle")})}),(0,P.jsx)(o.ZP,{item:!0,xs:2,md:5.5,children:(0,P.jsx)(Pe,{children:e("subTitle")})})]}),(0,P.jsx)(o.ZP,{container:!0,columns:{xs:2,md:12},rowSpacing:.75,columnSpacing:{md:1},children:t.map(((e,t)=>(0,P.jsx)(Te,{text:e,id:`result${t+1}`},t)))}),(0,P.jsx)(ke,{src:be,alt:"curver_line"})]})})})},Te=e=>{let{text:t,id:n}=e;return(0,P.jsx)(o.ZP,{item:!0,xs:2,md:6,children:(0,P.jsx)(ye,{id:n,children:(0,P.jsx)(Ze,{children:t})})})};var $e=n(3050);const Se=e=>{let{isChooseProfession:t,setChooseProfession:n}=e;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)($e.o,{children:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(D,{isChooseProfession:t,setChooseProfession:n}),(0,P.jsx)(ie,{}),(0,P.jsx)(Q,{}),(0,P.jsx)(fe,{}),(0,P.jsx)(Ce,{})]})}),(0,P.jsx)(R.$,{})]})}},3487:(e,t,n)=>{e.exports=n.p+"static/media/img1.ce11bc7991c5d2640fae.png"}}]);
//# sourceMappingURL=896.d14e61ce.chunk.js.map