(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[67],{8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(u){c=!0,o=u}finally{try{l||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},c=r(6273),u=r(387),i=r(7190);var f={};function s(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=u.useRouter(),a=l.default.useMemo((function(){var t=o(c.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,v=e.children,y=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=l.default.createElement("a",null,v));var g=(t=l.default.Children.only(v))&&"object"===typeof t&&t.ref,w=o(i.useIntersection({rootMargin:"200px"}),2),C=w[0],E=w[1],O=l.default.useCallback((function(e){C(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,C]);l.default.useEffect((function(){var e=E&&r&&c.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(n,d,p,{locale:t})}),[p,d,E,b,r,n]);var j={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:l}))}(e,n,d,p,y,h,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof b?b:n&&n.locale,k=n&&n.isLocaleDomain&&c.getDomainLocale(p,M,n&&n.locales,n&&n.domainLocales);j.href=k||c.addBasePath(c.addLocale(p,M,n&&n.defaultLocale))}return l.default.cloneElement(t,j)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(u){c=!0,o=u}finally{try{l||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,n=a.useRef(),i=o(a.useState(!1),2),f=i[0],s=i[1],d=a.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||f||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=u.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:t}))}),[r,t,f]);return a.useEffect((function(){if(!c&&!f){var e=l.requestIdleCallback((function(){return s(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),[d,f]};var a=r(7294),l=r(9311),c="undefined"!==typeof IntersectionObserver;var u=new Map},1664:function(e,t,r){e.exports=r(8418)},6653:function(e,t,r){"use strict";r.d(t,{H_N:function(){return o}});var n=r(8357);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"}}]})(e)}},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function u(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),u(e.child))}))}function i(e){return function(t){return n.createElement(f,l({attr:l({},e.attr)},t),u(e.child))}}function f(e){var t=function(t){var r,o=e.attr,a=e.size,u=e.title,i=c(e,["attr","size","title"]),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,i,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}}}]);