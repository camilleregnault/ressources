(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{112:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(s,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(f,i(i({ref:t},c),{},{components:r})):o.a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},113:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return s}));var n=r(22),o=r(115);function a(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,s=a.forcePrependBaseUrl,i=void 0!==s&&s,l=a.absolute,c=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(i)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+u:u}(a,r,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},115:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},118:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(0),o=r.n(n),a=r(113);function s(e){var t=e.src,r=(e.alt,e.href),n=e.title,s=e.description;return o.a.createElement("div",{class:"avatar"},o.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{class:"avatar__photo avatar__photo--xl",src:Object(a.a)(t)})),o.a.createElement("div",{class:"avatar__intro"},o.a.createElement("h4",{class:"avatar__name"},o.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},n)),o.a.createElement("small",{class:"avatar__subtitle"},s)))}},119:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(0),o=r.n(n),a=r(113);function s(e){var t=e.src,r=e.alt,n=e.href,s=e.title;return o.a.createElement("div",{class:"avatar"},o.a.createElement("a",{class:"avatar__photo-link avatar__photo avatar__photo--lg",href:n,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{alt:r,src:Object(a.a)(t)})),o.a.createElement("div",{class:"avatar__intro"},o.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("h4",{class:"avatar__name"},s))))}},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),a=(r(0),r(112)),s=r(119),i=r(118),l={id:"blog",title:"Comment cr\xe9er son blog",sidebar_label:"Blog",slug:"/faire-son-profil-en-ligne/blog",keywords:["blog d\xe9veloppeur web","blog d\xe9veloppement web"],description:"Les plateformes disponibles pour faire son blog de d\xe9veloppement web et publier ses articles."},c={unversionedId:"online_profile/blog",id:"online_profile/blog",isDocsHomePage:!1,title:"Comment cr\xe9er son blog",description:"Les plateformes disponibles pour faire son blog de d\xe9veloppement web et publier ses articles.",source:"@site/docs/online_profile/blog.mdx",slug:"/faire-son-profil-en-ligne/blog",permalink:"/ressources/docs/faire-son-profil-en-ligne/blog",editUrl:"https://github.com/women-on-rails/ressources/edit/master/website/docs/online_profile/blog.mdx",version:"current",lastUpdatedAt:1605451052,sidebar_label:"Blog",sidebar:"docs",previous:{title:"Comment faire un portfolio",permalink:"/ressources/docs/faire-son-profil-en-ligne/portfolio"},next:{title:"Des ressources gratuites pour le design",permalink:"/ressources/docs/faire-son-profil-en-ligne/ressources-gratuites-design"}},u=[{value:"Des plateformes de blog pour d\xe9veloppeuses et d\xe9veloppeurs",id:"des-plateformes-de-blog-pour-d\xe9veloppeuses-et-d\xe9veloppeurs",children:[]},{value:"Une newsletter qui fait aussi blog",id:"une-newsletter-qui-fait-aussi-blog",children:[]},{value:"Cr\xe9er son propre blog",id:"cr\xe9er-son-propre-blog",children:[]}],p={toc:u};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\xc9crire un blog a de nombreux avantages: partager tes connaissances, les renforcer aussi par l'exercice de recherche et d'\xe9criture, \xeatre identifi\xe9\xb7e comme ma\xeetrisant certains sujets.",Object(a.b)("br",null),"\nSi tu souhaites devenir experte ou expert absolu\xb7e (oui oui on n'a pas peur des mots) dans la gestion de ton blog, on te conseille de suivre ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/monicalent"},"Monica Lent"),", pour progresser en blogging et SEO."),Object(a.b)("h2",{id:"des-plateformes-de-blog-pour-d\xe9veloppeuses-et-d\xe9veloppeurs"},"Des plateformes de blog pour d\xe9veloppeuses et d\xe9veloppeurs"),Object(a.b)("p",null,"Des plateformes o\xf9 tu peux partager ton contenu et rejoindre une communaut\xe9 tech:"),Object(a.b)("div",{class:"container"},Object(a.b)(i.a,{src:"/img/online_profile/blog/dev.png",alt:"Logo Dev.to",href:"https://dev.to/",title:"Dev.to",description:"Dev.to te permet de poster des articles et t'abonner \xe0 des autrices ou auteurs ou sujets qui t'int\xe9ressent pour \xeatre notifi\xe9\xb7e en cas de publication. Bonus: le site est en open-source en Ruby On Rails, tu peux donc y contributer si tu veux #meta.",mdxType:"HorizontalCard"}),Object(a.b)(i.a,{src:"/img/online_profile/blog/hashnode.png",alt:"Logo Hashnode",href:"https://hashnode.com",title:"Hashnode",description:"Hashnode est une plateforme gratuite tr\xe8s compl\xe8te car elle te permet de publier un blog, d'avoir des personnes qui s'inscrivent \xe0 tes publications avec un syst\xe8me de newsletter, tout en \xe9tant pr\xe9sente ou pr\xe9sent sur un fil d'articles. Hashnode b\xe9n\xe9ficie aussi d'une communaut\xe9 pour bloggers, avec des bootcamps d'\xe9criture et des d\xe9fis comme 2articles1week.",mdxType:"HorizontalCard"})),Object(a.b)("br",null),Object(a.b)("h2",{id:"une-newsletter-qui-fait-aussi-blog"},"Une newsletter qui fait aussi blog"),Object(a.b)("p",null,"Un autre moyen de partager ce que tu \xe9cris ce sont des plateformes qui mixent blog et newsletter: chaque article est directement envoy\xe9 \xe0 tes abonn\xe9\xb7e\xb7s. Les articles sont conserv\xe9s \xe0 un m\xeame endroit donc consultables en ligne.",Object(a.b)("br",null),"\nLe principe est le m\xeame pour les deux sites en-dessous, ils se diff\xe9rencient par leur page d'accueil ou le style qu'on peut appliquer, \xe7a d\xe9pendra de tes go\xfbts !"),Object(a.b)("div",{class:"container"},Object(a.b)("div",{class:"row"},Object(a.b)("div",{class:"col col--4"},Object(a.b)(s.a,{src:"/img/online_profile/blog/revue.png",alt:"Logo revue",href:"https://www.getrevue.co/",title:"Revue",mdxType:"Avatar"})),Object(a.b)("div",{class:"col col--4"},Object(a.b)(s.a,{src:"/img/online_profile/blog/substack.png",alt:"Logo Substack",href:"https://substack.com/",title:"Substack",mdxType:"Avatar"})))),Object(a.b)("br",null),Object(a.b)("h2",{id:"cr\xe9er-son-propre-blog"},"Cr\xe9er son propre blog"),Object(a.b)("p",null,"Tu peux aussi faire s\xe9cession et cr\xe9er ton propre site sous format de blog, pour \xe7a tu peux te servir des ressources de la page ",Object(a.b)("a",{parentName:"p",href:"./portfolio"},"portfolio"),"."))}d.isMDXComponent=!0}}]);