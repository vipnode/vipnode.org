/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(t,e,n){"use strict";var r=n(31);n.n(r).a},122:function(t,e,n){"use strict";var r=n(32);n.n(r).a},123:function(t,e,n){},124:function(t,e,n){t.exports=n.p+"img/74a348a.png"},125:function(t,e,n){"use strict";n.r(e);n(51),n(83),n(84);var r=n(19),o=n.n(r),a=(n(35),n(36),n(74),n(3)),i=n.n(a),s=(n(89),n(90),n(63),n(46),n(65),n(64),n(94),n(106),n(0)),u={},c=n(20),l=n.n(c),p=n(72),h=n.n(p),f=n(48),d=function(){return n.e(2).then(n.bind(null,142)).then(function(t){return t.default||t})},m=function(){return n.e(3).then(n.bind(null,143)).then(function(t){return t.default||t})},v=function(){return n.e(4).then(n.bind(null,144)).then(function(t){return t.default||t})},x=function(){return Promise.all([n.e(10),n.e(6)]).then(n.bind(null,140)).then(function(t){return t.default||t})},g=function(){return n.e(7).then(n.bind(null,145)).then(function(t){return t.default||t})},_=function(){return n.e(8).then(n.bind(null,146)).then(function(t){return t.default||t})},y=function(){return n.e(5).then(n.bind(null,141)).then(function(t){return t.default||t})};s.a.use(f.a),window.history.scrollRestoration="manual";var w=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var b=n(73),C=n.n(b).a,k={name:"nuxt-child",functional:!0,props:["keepAlive","keepAliveProps"],render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var a=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,l={};$.forEach(function(t){void 0!==c[t]&&(l[t]=c[t])});var p={};E.forEach(function(t){"function"==typeof c[t]&&(p[t]=c[t].bind(a))});var h=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),h)return h.call(a,t)};var f=[t("router-view",r)];return void 0!==o.keepAlive&&(f=[t("keep-alive",{props:o.keepAliveProps},f)]),t("transition",{props:l,on:p},f)}},$=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],E=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],R={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},T={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},S=(n(111),n(14)),A=Object(S.a)(T,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);A.options.__file="nuxt-error.vue";var j=A.exports,q=(n(112),n(113),n(114),n(116),n(118),n(75),n(120),n(121),function(){return{}});function P(t,e){var n=t.options.data||q;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),l()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function N(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function O(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function D(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function L(t){return Promise.all(D(t,function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",r.components[o]=N(e));case 5:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function M(t){return I.apply(this,arguments)}function I(){return(I=i()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e);case 2:return t.abrupt("return",l()({},e,{meta:O(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function U(t,e){return B.apply(this,arguments)}function B(){return(B=i()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=o()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},n=t,a=o()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=X(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=10;break}return t.next=9,M(n.route);case 9:e.context.route=t.sent;case 10:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=16;break}return t.next=15,M(n.from);case 15:e.context.from=t.sent;case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function J(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function Q(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function K(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?H:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l,p=a[c.name];if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(l=s(p[h]),!e[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===h?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(p),!e[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=F.exec(t));){var u=n[0],c=n[1],l=n.index;if(i+=t.slice(a,l),a=l+u.length,c)i+=c[1];else{var p=t[a],h=n[2],f=n[3],d=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var g=null!=h&&null!=p&&p!==h,_="+"===v||"*"===v,y="?"===v||"*"===v,w=n[2]||s,b=d||m;r.push({name:f||o++,prefix:h||"",delimiter:w,optional:y,repeat:_,partial:g,asterisk:!!x,pattern:b?G(b):x?".*":"[^"+V(w)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))}function z(t,e){var n={},r=l()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var F=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function H(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function V(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function G(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function X(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/");return 2===(a=s.split("#")).length&&(s=a[0],o=a[1]),i+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=o?"#"+o:""}var W={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||K(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:k,NuxtError:j}},Y={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,throttle:200,duration:5e3,height:"2px",color:"black",failedColor:"red"}},methods:{start:function(){var t=this;return this.canSuccess=!0,this._throttle&&clearTimeout(this._throttle),this._timer&&(clearInterval(this._timer),this._timer=null,this.percent=0),this._throttle=setTimeout(function(){t.show=!0,t._cut=1e4/Math.floor(t.duration),t._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100)},this.throttle),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,clearTimeout(this._throttle),this._throttle=null,setTimeout(function(){t.show=!1,s.a.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},Z=(n(122),Object(S.a)(Y,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,null,null,null));Z.options.__file="nuxt-loading.vue";var tt=Z.exports,et=(n(123),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"five columns",attrs:{id:"logo-container"}},[e("h1",{attrs:{id:"vipnode"}},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:n(124),alt:"vipnode",id:"vipnode-logo"}})])]),this._v(" "),e("h2",{staticClass:"hidden-md-down"},[this._v("Economic incentive for running Ethereum nodes.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"hidden-md-up"},[e("a",{staticClass:"button-primary button",attrs:{href:"/#intro"}},[this._v("Reserve")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://medium.com/vipnode"}},[this._v("Blog")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"button button-primary button-small",attrs:{href:"/#intro"}},[this._v("Reserve Your vipnode")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://github.com/vipnode/vipnode.org"}},[this._v("Source code")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/#newsletter"}},[this._v("Get updates")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://medium.com/vipnode"}},[this._v("Blog")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-newsletter six columns"},[e("p",[this._v("\n          Get notifications of features or breaking changes\n        ")]),this._v(" "),e("form",{attrs:{action:"https://tinyletter.com/vipnode",method:"post",target:"popupwindow",onsubmit:"window.open('https://tinyletter.com/vipnode', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"}},[e("input",{staticClass:"input-text",attrs:{type:"text",name:"email",id:"tlemail",placeholder:"satoshin@gmx.com"}}),this._v(" "),e("input",{attrs:{type:"hidden",value:"1",name:"embed"}}),this._v(" "),e("input",{staticClass:"button-primary button-small",attrs:{type:"submit",value:"Subscribe"}})]),this._v(" "),e("p",[this._v("Made with 🍁 in Toronto, Canada")])])}]),nt=Object(S.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"nav row"},[t._m(0),t._v(" "),n("nav",{staticClass:"seven columns"},[n("ul",[t._m(1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/faq"}},[t._v("FAQ")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/status"}},[t._v("Status")])],1),t._v(" "),t._m(2),t._v(" "),n("li",{staticClass:"hidden-md-down"},[n("nuxt-link",{staticClass:"button-primary button",attrs:{to:"/"}},[t._v("Reserve")])],1)])])]),t._v(" "),n("nuxt"),t._v(" "),n("div",{attrs:{id:"footer"}},[n("nav",{staticClass:"row"},[n("ul",{staticClass:"six columns"},[t._m(3),t._v(" "),t._m(4),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/docs"}},[t._v("Docs + support")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/status"}},[t._v("Status")])],1),t._v(" "),t._m(5),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),t._m(6),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/faq"}},[t._v("FAQ")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/press"}},[t._v("Press")])],1)]),t._v(" "),t._m(7)])])],1)},et,!1,null,null,null);nt.options.__file="default.vue";var rt={_default:nt.exports},ot={head:{titleTemplate:"%s · Vipnode",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{property:"og:type",content:"website"},{property:"og:image",name:"twitter:image",content:"https://vipnode.org/img/preview-card.png"},{name:"twitter:card",content:"summary_large_image"}],link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=PT+Mono|PT+Sans:400,700"},{rel:"shortcut icon",href:"img/icon-32px.png"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),a=t("transition",{props:{name:"layout",mode:"out-in"}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,a])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&rt["_"+t]||(t="default"),this.layoutName=t,this.layout=rt["_"+t],this.layout},loadLayout:function(t){return t&&rt["_"+t]||(t="default"),Promise.resolve(rt["_"+t])}},components:{NuxtLoading:tt}};s.a.component(C.name,C),s.a.component(k.name,k),s.a.component(R.name,R),s.a.component(W.name,W),s.a.use(h.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var at={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function it(){return(it=i()(regeneratorRuntime.mark(function t(e){var n,r,o,a,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new f.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:w,routes:[{path:"/about",component:d,name:"about"},{path:"/docs",component:m,name:"docs"},{path:"/faq",component:v,name:"faq"},{path:"/pool",component:x,name:"pool"},{path:"/press",component:g,name:"press"},{path:"/status",component:_,name:"status"},{path:"/",component:y,name:"index"}],fallback:!1});case 2:return n=t.sent,r=l()({router:n,nuxt:{defaultTransition:at,transitions:[at],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},at,{name:t}):Object.assign({},at,t):at}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},ot),o=e?e.next:function(t){return r.router.push(t)},e?a=n.resolve(e.url).route:(i=Q(n.options.base),a=n.resolve(i).route),t.next=8,U(r,{route:a,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(t)||Object.defineProperty(s.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),t.next=12;break;case 12:return t.abrupt("return",{app:r,router:n});case 13:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var st,ut,ct=[],lt=window.__NUXT__||{};function pt(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function ht(t,e,n){return ft.apply(this,arguments)}function ft(){return(ft=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!st.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?z(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,L(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function dt(t,e){return lt.serverRendered&&e&&P(t,e),t._Ctor=t,t}function mt(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof u[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),u[t])}),!a)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():J(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function vt(t,e,n){return xt.apply(this,arguments)}function xt(){return(xt=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i,u,c,l,p,h,f,d,m,v,x,g,_,y,w=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return ct=e===n?[]:O(n,o=[]).map(function(t,e){return K(n.matched[o[e]].path)(n.params)}),a=!1,i=function(t){n.path===t.path&&w.$loading.finish&&w.$loading.finish(),n.path!==t.path&&w.$loading.pause&&w.$loading.pause(),a||(a=!0,r(t))},t.next=7,U(st,{route:e,from:n,next:i.bind(this)});case 7:if(this._dateLastError=st.nuxt.dateErr,this._hadError=!!st.nuxt.err,(c=O(e,u=[])).length){t.next=25;break}return t.next=14,mt.call(this,c,st.context);case 14:if(!a){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof j.layout?j.layout(st.context):j.layout);case 18:return l=t.sent,t.next=21,mt.call(this,c,st.context,l);case 21:if(!a){t.next=23;break}return t.abrupt("return");case 23:return st.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(pt(c,e,n)),t.prev=27,t.next=30,mt.call(this,c,st.context);case 30:if(!a){t.next=32;break}return t.abrupt("return");case 32:if(!st.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(p=c[0].options.layout)&&(p=p(st.context)),t.next=38,this.loadLayout(p);case 38:return p=t.sent,t.next=41,mt.call(this,c,st.context,p);case 41:if(!a){t.next=43;break}return t.abrupt("return");case 43:if(!st.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:h=!0,t.prev=46,f=!0,d=!1,m=void 0,t.prev=50,v=c[Symbol.iterator]();case 52:if(f=(x=v.next()).done){t.next=64;break}if("function"==typeof(g=x.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,g.options.validate(st.context);case 58:if(h=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:f=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),d=!0,m=t.t0;case 70:t.prev=70,t.prev=71,f||null==v.return||v.return();case 73:if(t.prev=73,!d){t.next=76;break}throw m;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(h){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=K(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,w._pathChanged&&w._queryChanged||t._path!==ct[n])t._dataRefresh=!0;else if(!w._pathChanged&&w._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return w._diffQuery[t]}))}if(!w._hadError&&w._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,s=a&&i?30:45;if(a){var c=J(t.options.asyncData,st.context).then(function(e){P(t,e),w.$loading.increase&&w.$loading.increase(s)});o.push(c)}if(w.$loading.manual=!1===t.options.loading,i){var l=t.options.fetch(st.context);l&&(l instanceof Promise||"function"==typeof l.then)||(l=Promise.resolve(l)),l.then(function(t){w.$loading.increase&&w.$loading.increase(s)}),o.push(l)}return Promise.all(o)}));case 89:a||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=111;break;case 92:if(t.prev=92,t.t2=t.catch(27),t.t2){t.next=98;break}t.t2={},t.next=100;break;case 98:if("ERR_REDIRECT"!==t.t2.message){t.next=100;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,t.t2));case 100:return ct=[],_=t.t2.response&&t.t2.response.status,t.t2.statusCode=t.t2.statusCode||t.t2.status||_||500,b=t.t2,s.a.config.errorHandler&&s.a.config.errorHandler(b),"function"==typeof(y=j.layout)&&(y=y(st.context)),t.next=108,this.loadLayout(y);case 108:this.error(t.t2),this.$nuxt.$emit("routeChanged",e,n,t.t2),r(!1);case 111:case"end":return t.stop()}var b},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function gt(t,e){D(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function _t(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?j.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(st.context)),this.setLayout(e)}function yt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=O(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),_t.call(n,t)})}function wt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),ut.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function bt(){return(bt=i()(regeneratorRuntime.mark(function t(e){var n,r,o,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return st=e.app,ut=e.router,t.next=4,Promise.all((void 0,c=Q((u=ut).options.base,u.options.mode),D(u.match(c),function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o,a){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return i=dt(N(e),lt.data?lt.data[a]:null),r.components[o]=i,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())));case 4:return n=t.sent,r=new s.a(st),o=lt.layout||"default",t.next=9,r.loadLayout(o);case 9:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){wt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(pt(n,ut.currentRoute)),ct=ut.currentRoute.matched.map(function(t){return K(t.path)(ut.currentRoute.params)})),r.$loading={},lt.error&&r.error(lt.error),ut.beforeEach(ht.bind(r)),ut.beforeEach(vt.bind(r)),ut.afterEach(gt),ut.afterEach(yt.bind(r)),!lt.serverRendered){t.next=22;break}return a(),t.abrupt("return");case 22:vt.call(r,ut.currentRoute,ut.currentRoute,function(t){if(!t)return gt(ut.currentRoute,ut.currentRoute),_t.call(r,ut.currentRoute),void a();ut.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 23:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.a.config,{silent:!0,performance:!1}),function(t){return it.apply(this,arguments)}().then(function(t){return bt.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},31:function(t,e,n){},32:function(t,e,n){},73:function(t,e,n){"use strict";var r={name:"no-ssr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,o=e.props,a=r(),i=a.default,s=a.placeholder;return n._isMounted?i:(n.$once("hook:mounted",function(){n.$forceUpdate()}),t(o.placeholderTag,{class:["no-ssr-placeholder"]},o.placeholder||s))}};t.exports=r},77:function(t,e,n){t.exports=n(125)}},[[77,9,1]]]);