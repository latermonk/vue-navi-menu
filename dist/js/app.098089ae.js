(function(n){function e(e){for(var a,r,c=e[0],l=e[1],u=e[2],s=0,f=[];s<c.length;s++)r=c[s],i[r]&&f.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(n[a]=l[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],a=!0,r=1;r<t.length;r++){var l=t[r];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),n=c(c.s=t[0]))}return n}var a={},i={app:0},o=[];function r(n){return c.p+"js/"+({}[n]||n)+"."+{"chunk-15a09756":"e8078945","chunk-2d0b2d55":"ec8dbad5","chunk-2d0b9427":"d8112ee4","chunk-2d0dd841":"f2316ff9","chunk-2d210bfb":"59a68498","chunk-2d21e308":"e616147a","chunk-2d22d619":"664a4ff4","chunk-55015f7c":"a7e3f482","chunk-262cb278":"159a2fd2","chunk-2d21dcd0":"33792483"}[n]+".js"}function c(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(n){var e=[],t=i[n];if(0!==t)if(t)e.push(t[2]);else{var a=new Promise(function(e,a){t=i[n]=[e,a]});e.push(t[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(n),o=function(e){l.onerror=l.onload=null,clearTimeout(u);var t=i[n];if(0!==t){if(t){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,r=new Error("Loading chunk "+n+" failed.\n("+a+": "+o+")");r.type=a,r.request=o,t[1](r)}i[n]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},c.m=n,c.c=a,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)c.d(t,a,function(e){return n[e]}.bind(null,a));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/vue-navi-menu/",c.oe=function(n){throw console.error(n),n};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var d=u;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var a=t("2b0e"),i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("el-menu",{staticStyle:{"min-height":"100vh",width:"230px",float:"left"},attrs:{"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b","default-active":n.activeIndex,router:""}},[t("NavMenu",{attrs:{navMenus:n.menuData}})],1),t("router-view",{staticStyle:{"margin-left":"250px"}})],1)},o=[],r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"navMenu"},[n._l(n.navMenus,function(e){return[!e.childs&&e.entity?t("el-menu-item",{key:e.entity.id,attrs:{data:e,index:e.entity.name}},[t("i",{class:e.entity.icon}),t("span",{attrs:{slot:"title"},slot:"title"},[n._v(n._s(e.entity.alias))])]):n._e(),e.childs&&e.entity?t("el-submenu",{key:e.entity.id,attrs:{data:e,index:e.entity.name}},[t("template",{slot:"title"},[t("i",{class:e.entity.icon}),t("span",[n._v(" "+n._s(e.entity.alias))])]),t("NavMenu",{attrs:{navMenus:e.childs}})],2):n._e()]})],2)},c=[],l={name:"NavMenu",props:["navMenus"],data:function(){return{}},methods:{}},u=l,s=t("2877"),d=Object(s["a"])(u,r,c,!1,null,null,null),f=d.exports,h={components:{NavMenu:f},data:function(){return{activeIndex:"aa",menuData:[{entity:{id:0,name:"aa",icon:"el-icon-message",alias:"一级菜单"}},{entity:{id:1,name:"systemManage",icon:"el-icon-message",alias:"两级菜单"},childs:[{entity:{id:3,name:"authManage",icon:"el-icon-loading",alias:"echarts折线图-图例过滤"}},{entity:{id:4,name:"roleManage",icon:"el-icon-bell",alias:"echarts折线图-图例点击"}},{entity:{id:2,name:"menuManage",icon:"el-icon-edit",alias:"菜单管理",value:"/system/menu"}},{entity:{id:5,name:"groupManage",icon:"el-icon-mobile-phone\r\n",alias:"分组管理",value:"/system/group"}}]},{entity:{id:6,name:"userManage",icon:"el-icon-news",alias:"三级菜单"},childs:[{entity:{id:7,name:"accountManage",icon:"el-icon-phone-outline\r\n",alias:"帐号管理",value:""},childs:[{entity:{id:14,name:"emailManage",icon:"el-icon-sold-out\r\n",alias:"邮箱管理",value:"/content/email"}},{entity:{id:13,name:"passManage",icon:"el-icon-service\r\n",alias:"密码管理",value:"/content/pass"}}]},{entity:{id:8,name:"integralManage",icon:"el-icon-picture",alias:"积分管理",value:"/user/integral"}}]},{entity:{id:40,name:"contentManage",icon:"el-icon-rank",alias:"四级菜单"},childs:[{entity:{id:41,name:"classifyManage2",icon:"el-icon-printer",alias:"分类管理"},childs:[{entity:{id:42,name:"classifyManage3",icon:"el-icon-printer",alias:"分类管理"},childs:[{entity:{id:43,name:"classifyManage4",icon:"el-icon-printer",alias:"分类管理",value:"/content/classify"}}]}]}]}]}},mounted:function(){console.log(window.location.href);var n=window.location.href.lastIndexOf("/"),e=window.location.href.slice(n+1);this.activeIndex=e,console.log(this.activeIndex)}},p=h,m=Object(s["a"])(p,i,o,!1,null,null,null),g=m.exports,v=t("8c4f");a["default"].use(v["a"]);var y=new v["a"]({mode:"history",base:"/vue-navi-menu/",routes:[{path:"/",redirect:"/aa"},{path:"/aa",name:"aa",component:function(){return t.e("chunk-15a09756").then(t.bind(null,"5e975"))}},{path:"/authManage",name:"authManage",component:function(){return Promise.all([t.e("chunk-55015f7c"),t.e("chunk-2d21dcd0")]).then(t.bind(null,"d39d"))}},{path:"/roleManage",name:"roleManage",component:function(){return Promise.all([t.e("chunk-55015f7c"),t.e("chunk-262cb278")]).then(t.bind(null,"4ba6"))}},{path:"/menuManage",name:"menuManage",component:function(){return t.e("chunk-2d22d619").then(t.bind(null,"f6f9"))}},{path:"/groupManage",name:"groupManage",component:function(){return t.e("chunk-2d0b9427").then(t.bind(null,"31d7"))}},{path:"/classifyManage4",name:"classifyManage4",component:function(){return t.e("chunk-2d21e308").then(t.bind(null,"d501"))}},{path:"/emailManage",name:"emailManage",component:function(){return t.e("chunk-2d0b2d55").then(t.bind(null,"2694"))}},{path:"/passManage",name:"passManage",component:function(){return t.e("chunk-2d210bfb").then(t.bind(null,"b8e4"))}},{path:"/integralManage",name:"integralManage",component:function(){return t.e("chunk-2d0dd841").then(t.bind(null,"825f"))}},{path:"/integralManage",name:"integralManage",component:function(){return t.e("chunk-2d0dd841").then(t.bind(null,"825f"))}}]}),b=t("5c96"),M=t.n(b);t("0fae");a["default"].config.productionTip=!1,a["default"].use(M.a),new a["default"]({router:y,render:function(n){return n(g)}}).$mount("#app")}});
//# sourceMappingURL=app.098089ae.js.map