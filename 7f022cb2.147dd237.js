(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{100:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return i}));var n=r(99),o=r(101);function c(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,u=void 0!==i&&i,a=c.absolute,s=void 0!==a&&a;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(u)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(c,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},101:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},107:function(e,t,r){"use strict";var n=r(0),o=r(109);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},109:function(e,t,r){"use strict";var n=r(0),o=r.n(n).a.createContext(void 0);t.a=o},112:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(0),o=r.n(n),c=r(100),i=r(107);function u(e){var t=Object(i.a)(),r=t.isDarkTheme;t.setLightTheme,t.setDarkTheme;return o.a.createElement("img",{src:r?Object(c.a)(e.imgsrcdark):Object(c.a)(e.imgsrclight),class:e.customclass})}},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),c=(r(0),r(98)),i=(r(100),r(112)),u={id:"how-to-contribute",title:"Comment contribuer \xe0 ce site",slug:"/comment-contribuer"},a={unversionedId:"welcome/how-to-contribute",id:"welcome/how-to-contribute",isDocsHomePage:!1,title:"Comment contribuer \xe0 ce site",description:"Ce site est participatif",source:"@site/docs/welcome/how-to-contribute.mdx",slug:"/comment-contribuer",permalink:"/ressources/docs/comment-contribuer",editUrl:"https://github.com/women-on-rails/ressources/edit/master/website/docs/welcome/how-to-contribute.mdx",version:"current",lastUpdatedAt:1603179567,sidebar:"docs",previous:{title:"Pour commencer",permalink:"/ressources/docs/"},next:{title:"Comment faire son CV en ligne",permalink:"/ressources/docs/faire-son-profil-en-ligne/cv"}},s=[{value:"Ce site est participatif",id:"ce-site-est-participatif",children:[]},{value:"Proposer du contenu sans coder",id:"proposer-du-contenu-sans-coder",children:[]},{value:"Proposer du contenu en codant",id:"proposer-du-contenu-en-codant",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"ce-site-est-participatif"},"Ce site est participatif"),Object(c.b)("p",null,"Tu peux:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"nous dire ce que tu aimerais y voir :)"),Object(c.b)("li",{parentName:"ul"},"modifier ou ajouter une ressource (on a une ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/women-on-rails/ressources/projects?query=is%3Aopen+sort%3Aname-asc"}),"liste d'id\xe9es de pages \xe0 \xe9crire par cat\xe9gorie"),")"),Object(c.b)("li",{parentName:"ul"},"\xe9crire un article pour le blog")),Object(c.b)("h2",{id:"proposer-du-contenu-sans-coder"},"Proposer du contenu sans coder"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.google.com/forms/d/e/1FAIpQLSc9RNDuJ4TG6EnPB4iJ4zDfpig47JckNAesoE_SuqgLvTythA/viewform?usp=sf_link"}),"remplir ce formulaire contact")),Object(c.b)("li",{parentName:"ul"},"envoyer un mail \xe0",Object(c.b)("br",null),Object(c.b)(i.a,{imgsrcdark:"/img/email_dark.png",imgsrclight:"/img/email.png",mdxType:"DarkModeImage"}))),Object(c.b)("h2",{id:"proposer-du-contenu-en-codant"},"Proposer du contenu en codant"),Object(c.b)("p",null,"Tu trouveras toutes les infos techniques en d\xe9tails pour contribuer en codant dans le ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/women-on-rails/ressources/blob/master/CONTRIBUTING.md"}),"fichier CONTRIBUTING du projet"),"."))}p.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||c;return r?o.a.createElement(b,u(u({ref:t},s),{},{components:r})):o.a.createElement(b,u({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=m;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var s=2;s<c;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";var n=r(0),o=r(20);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}}}]);