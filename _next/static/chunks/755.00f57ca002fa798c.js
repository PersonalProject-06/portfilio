"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{9755:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var i=t(5893),r=t(7294),a=t(7379);function o(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function s(){var n=o(["\n  max-width: 1040px;\n  background: #0F1624;\n  padding: 0rem;\n  list-style:none;\n  display: flex;\n  justify-content: space-between; \n  /* overflow-x: hidden; */\n\n  margin-left: 32px;\n  &:first-of-type{\n    margin-left: 0px;\n  }\n\n  margin-bottom: 80px;\n\n  //remove scrollbar\n  scrollbar-width: none;  \n   &::-webkit-scrollbar {\n     display: none;\n   }\n\n  @media "," {\n    overflow-x: scroll;\n    -webkit-overflow-scrolling: touch;\n    scroll-snap-type: x mandatory;\n    touch-action: pan-x;\n    justify-content: initial;\n    margin-bottom: 8px;\n  }\n"]);return s=function(){return n},n}function c(){var n=o(["\n  @media "," {\n    display: flex;\n    min-width: ","\n  }\n"]);return c=function(){return n},n}function l(){var n=o(["\n  background: #0F1624;\n  border-radius: 3px;\n  max-width: 196px;\n\n  @media "," {\n    max-width: 124px;\n  }\n  \n  @media "," {\n    margin-left: 32px;\n    min-width: 120px;\n    background: #0E131F;\n    padding: 4px;\n    align-content: start;\n    scroll-snap-align: start;\n    border-radius: 3px;\n    overflow: visible;\n    position: relative;\n    height: fit-content;\n    \n    ","; \n  }\n"]);return l=function(){return n},n}function u(){var n=o(["\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: 0.02em;\n  display: flex;\n  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */\n  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 8px;\n\n  @media "," {\n    font-size: 20px;\n    line-height: 28px;\n    margin-bottom: 4px;\n  }\n  \n  @media "," {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"]);return u=function(){return n},n}function d(){var n=o(["\n  margin-left: 21px;\n  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));\n  width: 100%;\n\n  @media "," {\n    -webkit-mask-image: none;\n    margin-left: 16px;\n    overflow: visible;\n  }\n"]);return d=function(){return n},n}function p(){var n=o(["\n  font-size: 14px;\n  line-height: 22px;\n  letter-spacing: 0.02em;\n  color: rgba(255, 255, 255, 0.75);\n  padding-right: 16px;\n\n  @media "," {\n    font-size: 12px;\n    line-height: 18px;\n    padding-right: 32px;\n  }\n  @media "," {\n    font-size: 10px;\n    line-height: 16px;\n    padding-right: 0;\n  }\n"]);return p=function(){return n},n}function h(){var n=o(["\n  width: 288px;\n\n  display: none;\n  visibility: hidden;\n\n  @media "," {\n    display: flex;\n    visibility: visible;\n    margin-bottom: 48px;\n  }\n"]);return h=function(){return n},n}function f(){var n=o(["\n  box-sizing: border-box;\n  background: none;\n  padding: 4px;\n  border: none;\n  cursor: pointer;\n  margin-right: 4px;\n  opacity: ",";\n  transform: ",";\n\n  &:focus {\n    outline: none;\n  }\n"]);return f=function(){return n},n}function m(){var n=o(["\n  background-color: white;\n  border-radius: 10px;\n  margin: auto;\n  width: 3px;\n  height: 3px;\n"]);return m=function(){return n},n}var g=a.default.ul(s(),(function(n){return n.theme.breakpoints.sm})),b=a.default.div(c(),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.final?"120%;":"min-content"})),x=a.default.div(l(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.active===n.index?"opacity: 1":"opacity: 0.5"})),v=a.default.h4(u(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),w=a.default.svg(d(),(function(n){return n.theme.breakpoints.sm})),k=a.default.p(p(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),y=a.default.div(h(),(function(n){return n.theme.breakpoints.sm})),j=a.default.button(f(),(function(n){return n.active===n.index?"1":".33"}),(function(n){return n.active===n.index?"scale(1.6)":"scale(1)"})),C=a.default.div(m()),S=t(8225),A=t(6129),E=A.G.length,F=function(){var n=(0,r.useState)(0),e=n[0],t=n[1],a=(0,r.useRef)(),o=function(n,e){return n.scrollTo({left:e,behavior:"smooth"})},s=function(n,e){if(n.preventDefault(),a.current){var t=Math.floor(.7*a.current.scrollWidth*(e/A.G.length));o(a.current,t)}};return(0,r.useEffect)((function(){window.addEventListener("resize",(function(){o(a.current,0)}))}),[]),(0,i.jsxs)(S.$0,{id:"about",children:[(0,i.jsx)(S.NZ,{children:"About Me"}),(0,i.jsx)(S.r4,{children:"A passionate Full Stack Software Developer having an experience of building Web an Mobile applications with JavaScript / Reactjs / React-Native / Nodejs and some other cool libraries and frameworks."}),(0,i.jsx)(g,{ref:a,onScroll:function(){if(a.current){var n=Math.round(a.current.scrollLeft/(.7*a.current.scrollWidth)*A.G.length);t(n)}},children:(0,i.jsx)(i.Fragment,{children:A.G.map((function(n,t){return(0,i.jsx)(b,{final:t===E-1,children:(0,i.jsxs)(x,{index:t,id:"carousel__item-".concat(t),active:e,onClick:function(n){return s(n,t)},children:[(0,i.jsxs)(v,{children:["".concat(n.year),(0,i.jsxs)(w,{width:"208",height:"6",viewBox:"0 0 208 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",fill:"url(#paint0_linear)","fill-opacity":"0.33"}),(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:"paint0_linear",x1:"-4.30412e-10",y1:"0.5",x2:"208",y2:"0.500295",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{"stop-color":"white"}),(0,i.jsx)("stop",{offset:"0.79478","stop-color":"white","stop-opacity":"0"})]})})]})]}),(0,i.jsx)(k,{children:n.text})]})},t)}))})}),(0,i.jsx)(y,{children:A.G.map((function(n,t){return(0,i.jsx)(j,{index:t,active:e,onClick:function(n){return s(n,t)},type:"button",children:(0,i.jsx)(C,{active:e})},t)}))}),(0,i.jsx)(S.dv,{})]})}},6129:function(n,e,t){t.d(e,{q:function(){return i},G:function(){return r}});var i=[{title:"Cryptocurrency Track",description:"Cryptocurrency Track is a platform that lets the user discover and learn more about the blockchain world.",image:"/images/projectImage-min.png",tags:["React","Redux Toolkit","Rapid API","Ant Design"],source:"https://github.com/firas-debich/kryptoApp",visit:"https://firas-debich.github.io/kryptoApp/",id:0,alt:"Cryptocurrency Track Firas debich project"},{title:"Travel Companion",description:"Travel Companion is a platform that lets customers discover new local or international restaurants, Hotel, Attractions and it's easy to use.",image:"/images/1-min.png",tags:["React","Rapid API","Material UI","Google API"],source:"https://github.com/firas-debich/travel.github.io",visit:"https://firas-debich.github.io/travel.github.io/",id:0,alt:"Travel Companion google map  Firas debich project"},{title:"Chrome Extension",description:"An Extension that blocks some of social media and unsecure website",image:"/images/2-min.png",tags:["JavaScript","Html 5","CSS 3"],source:"https://github.com/firas-debich/chrome-extension",visit:"https://github.com/firas-debich/chrome-extension",id:1,alt:"Chrome Extension firas debich block website"},{title:"Blockchain App",description:"Blockchain cryptocurrency app is a platform that allow the user to send ethereum through the blockchain network",image:"/images/bc-min.png",tags:["React","Tailwind CSS","Solidity","web 3"],source:"https://github.com/firas-debich/Blockchain-App",visit:"https://firas-debich.github.io/Blockchain-App/",id:1,alt:"Chrome Extension firas debich block website"},{title:"Carx",description:"A team Project where we Developed a mobile application that allows car users to ask for an agent to clean their car where ever they are.",image:"/images/carXProject-min.png",tags:["React Native","Tailwind css","Nest Js","PostgreSQL"],source:"https://github.com/firas-debich/carX",visit:"https://expo.dev/artifacts/b7481cbc-d12e-4968-8e7c-1b07c907c1b2",id:2,alt:"Carx firas debich"},{title:"UberEats Clone",description:"UberEats Clone is a commission-free online ordering system and food ordering app helping restaurants feed their hungry customers.",image:"/images/4-min.png",tags:["React Native","Google Places","Firebase"],source:"https://github.com/firas-debich/react-native-Uber-Eats-clone/tree/main",visit:"https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40firas_debich/UberEats-602025d23a45443b97518d82ff703a74-signed.apk",id:3,alt:"Uber Eats firas debich"}],r=[{year:"08/2020",text:"got My Baccalaureat"},{year:"11/2021",text:"Got my certificate as a full stack JS developer"},{year:"01/2022",text:"Start my journey at AWS re/Start Program"}]}}]);