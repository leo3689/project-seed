(function(e){function a(a){for(var s,r,c=a[0],l=a[1],o=a[2],f=0,d=[];f<c.length;f++)r=c[f],n[r]&&d.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(a);while(d.length)d.shift()();return i.push.apply(i,o||[]),t()}function t(){for(var e,a=0;a<i.length;a++){for(var t=i[a],s=!0,c=1;c<t.length;c++){var l=t[c];0!==n[l]&&(s=!1)}s&&(i.splice(a--,1),e=r(r.s=t[0]))}return e}var s={},n={index:0},i=[];function r(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=s,r.d=function(e,a,t){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)r.d(t,s,function(a){return e[a]}.bind(null,s));return t},r.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var o=0;o<c.length;o++)a(c[o]);var u=l;i.push([3,"chunk-vendors"]),t()})({"01c4":function(e,a,t){"use strict";var s=t("b6f9"),n=t.n(s);n.a},"01fe":function(e,a,t){"use strict";var s=t("6ef2"),n=t.n(s);n.a},"123a":function(e,a,t){"use strict";var s=t("22ac"),n=t.n(s);n.a},"22ac":function(e,a,t){},2583:function(e,a,t){},3:function(e,a,t){e.exports=t("df31")},"365c":function(e,a,t){"use strict";t("cadf"),t("551c"),t("097d");var s=t("2b0e"),n=t("bc3a"),i=t.n(n),r=t("ed08"),c=t("a65d"),l=t.n(c);t("5ed1");s["default"].use(l.a,{theme:"primary",position:"bottom-right",duration:5e3,action:[{text:"清除",onClick:function(e,a){a.goAway(0)}}],iconPack:"fontawesome"});var o=i.a.create({baseURL:""});o.interceptors.response.use(function(e){return 200!==e.status?Promise.reject(e):200===e.data.code?Promise.resolve(e.data):(s["default"].toasted.error(e.data.msg,{icon:"times-circle"}),Promise.reject(e))},function(e){return void 0===e.response||null===e.response?(s["default"].toasted.error(e,{icon:"times-circle"}),Promise.reject(e)):(401===e.response.status&&r["a"].http.goPage("/login"),e.response.data.code?(s["default"].toasted.error("".concat(e.response.data.code," - ").concat(e.response.data.msg),{icon:"times-circle"}),Promise.reject(e.response.data)):(s["default"].toasted.error("".concat(e," - ").concat(e.response.statusText),{icon:"times-circle"}),Promise.reject(e.response)))});var u=o,f={login:function(e){return u.post("/login",e)}},d=f,m="/auth",p={getUserPage:function(){return u.post("".concat(m,"/user/page"))}},v=p;a["a"]={web:d,auth:v}},"477f":function(e,a,t){"use strict";var s=t("fa0f"),n=t.n(s);n.a},"4f0b":function(e,a,t){},5717:function(e,a,t){},"61c2":function(e,a,t){"use strict";var s=t("d580"),n=t.n(s);n.a},"6ef2":function(e,a,t){},b6f9:function(e,a,t){},b786:function(e,a,t){"use strict";var s=t("2583"),n=t.n(s);n.a},d580:function(e,a,t){},df31:function(e,a,t){"use strict";t.r(a);var s=t("2b0e"),n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("nav",{staticClass:"navbar border-bottom",class:e.$store.getters.theme,attrs:{role:"navigation","aria-label":"main navigation"}},[t("div",{staticClass:"navbar-brand"},[t("a",{staticClass:"navbar-item",attrs:{href:"/index"}},[t("img",{attrs:{src:e.$config.nav.logo,width:"112",height:"28"}})]),e._m(0)]),t("div",{staticClass:"navbar-menu",attrs:{id:"app-navbar"}},[t("div",{staticClass:"navbar-start"},e._l(e.$config.nav.menu,function(a,s){return t("a",{key:s,staticClass:"navbar-item is-size-7",class:{"is-active":e.$store.getters.menuKey===s},on:{click:function(a){e.menuSelect(s)}}},[e._v("\n          "+e._s(a.label)+"\n        ")])})),t("div",{staticClass:"navbar-end"},[t("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[t("a",{staticClass:"navbar-link is-size-7"},[e.$config.nav.theme.icon?t("i",{staticClass:"mr-1",class:e.$config.nav.theme.icon}):e._e(),e._v(e._s(e.$config.nav.theme.label)+"\n          ")]),t("div",{staticClass:"navbar-dropdown is-right"},e._l(e.$config.nav.theme.options,function(a){return t("a",{key:a.label,staticClass:"navbar-item is-size-7",on:{click:function(t){e.changeTheme(a.theme)}}},[t("span",{staticClass:"color-box",class:a.theme}),a.icon?t("i",{staticClass:"mr-1",class:a.icon}):e._e(),e._v(e._s(a.label)+"\n            ")])}))]),t("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[t("a",{staticClass:"navbar-link is-size-7"},[e.$config.nav.language.icon?t("i",{staticClass:"mr-1",class:e.$config.nav.language.icon}):e._e(),e._v(e._s(e.$config.nav.language.label)+"\n          ")]),t("div",{staticClass:"navbar-dropdown is-right"},e._l(e.$config.nav.language.options,function(a){return t("a",{key:a.label,staticClass:"navbar-item is-size-7",on:{click:function(t){e.changeLocale(a.link)}}},[a.icon?t("i",{staticClass:"mr-1",class:a.icon}):e._e(),e._v(e._s(a.label)+"\n            ")])}))]),t("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[t("a",{staticClass:"navbar-link is-size-7"},[e.$config.nav.notify.icon?t("i",{staticClass:"mr-1",class:e.$config.nav.notify.icon}):e._e(),e._v(e._s(e.$config.nav.notify.label)+"\n            "),t("span",{class:"is-danger"===e.$store.getters.theme?"has-text-warning":"has-text-danger"},[e._v("(99+)")])]),e._m(1)]),t("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[t("a",{staticClass:"navbar-link is-size-7"},[t("img",{staticClass:"mr-1",attrs:{src:e.$config.nav.avatar,height:"28",width:"28"}}),t("span",[e._v("User")])]),t("div",{staticClass:"navbar-dropdown is-right"},e._l(e.$config.nav.userMenu,function(a){return t("div",{key:a.label},[a.isDivided?t("a",{staticClass:"navbar-divider"}):e._e(),a.isDirect?t("a",{staticClass:"navbar-item is-size-7",attrs:{href:a.link}},[a.icon?t("i",{staticClass:"mr-1",class:a.icon}):e._e(),e._v(e._s(a.label)+"\n              ")]):t("a",{staticClass:"navbar-item is-size-7",on:{click:function(t){e.goPage(a.link)}}},[a.icon?t("i",{staticClass:"mr-1",class:a.icon}):e._e(),e._v(e._s(a.label)+"\n              ")])])}))])])])]),t("div",{staticClass:"columns is-marginless"},[t("div",{staticClass:"column sidebar is-2-desktop is-3-tablet is-mobile"},[t("aside",{staticClass:"menu"},e._l(e.$store.getters.sidebar,function(a){return t("div",{key:a.label},[t("p",{staticClass:"menu-label"},[e._v(e._s(a.label))]),a.options?t("ul",{staticClass:"menu-list"},e._l(a.options,function(a){return t("li",{key:a.label},[a.children||!a.link?t("a",{staticClass:"is-size-7"},[a.icon?t("i",{staticClass:"fa-sm mr-1",class:a.icon}):e._e(),e._v(e._s(a.label)+"\n              ")]):a.isDirect?t("a",{staticClass:"is-size-7",attrs:{href:a.link}},[a.icon?t("i",{staticClass:"fa-sm mr-1",class:a.icon}):e._e(),e._v(e._s(a.label)+"\n              ")]):t("a",{staticClass:"is-size-7",class:{"is-active":e.$store.getters.currentPage===a.link},on:{click:function(t){e.goPage(a.link)}}},[a.icon?t("i",{staticClass:"fa-sm mr-1",class:a.icon}):e._e(),e._v(e._s(a.label)+"\n              ")]),a.children?t("ul",e._l(a.children,function(a){return t("li",{key:a.label},[a.isDirect?t("a",{staticClass:"is-size-7",attrs:{href:a.link}},[a.icon?t("i",{staticClass:"fa-sm mr-1",class:a.icon}):e._e(),e._v(e._s(a.label)+"\n                  ")]):t("a",{staticClass:"is-size-7",class:{"is-active":e.$store.getters.currentPage===a.link},on:{click:function(t){e.goPage(a.link)}}},[a.icon?t("i",{staticClass:"fa-sm mr-1",class:a.icon}):e._e(),e._v(e._s(a.label)+"\n                  ")])])})):e._e()])})):e._e()])}))]),t("div",{staticClass:"column is-marginless",class:{"is-paddingless":"iframe"===e.$store.getters.pageType}},[t("router-view")],1)]),t("div",{staticClass:"footer has-text-centered is-size-7"},[e._v("\n    "+e._s(e.$config.appName)+" ©2018 Created by "),t("a",{attrs:{href:"https://github.com/YupaiTS",target:"_blank"}},[e._v("YupaiTS")])])])},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a",{staticClass:"navbar-burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"app-navbar"}},[t("span",{attrs:{"aria-hidden":"true"}}),t("span",{attrs:{"aria-hidden":"true"}}),t("span",{attrs:{"aria-hidden":"true"}})])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"navbar-dropdown is-right"},[t("div",{staticClass:"notify-box"},[t("div",{staticClass:"has-text-dark"},[e._v("你有"),t("span",{staticClass:"has-text-danger"},[e._v("99+")]),e._v("条消息")]),t("a",{staticClass:"navbar-divider"})])])}],r=(t("ac6a"),{name:"App",created:function(){this.init()},methods:{init:function(){this.initToggle(),this.initTheme(),this.initLocale(),this.$api.auth.getUserPage()},initToggle:function(){document.addEventListener("DOMContentLoaded",function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(function(e){e.addEventListener("click",function(){var a=e.dataset.target,t=document.getElementById(a);e.classList.toggle("is-active"),t.classList.toggle("is-active")})})})},initTheme:function(){var e=localStorage.getItem("theme");e&&this.$store.dispatch("setTheme",e)},initLocale:function(){var e=localStorage.getItem("locale");e&&this.$store.dispatch("setLocale",e)},changeTheme:function(e){localStorage.setItem("theme",e),this.$store.dispatch("setTheme",e)},changeLocale:function(e){localStorage.setItem("locale",e),this.$store.dispatch("setLocale",e)},goPage:function(e){this.$router.push(e)},menuSelect:function(e){this.$store.dispatch("setMenuKey",e),this.$store.dispatch("setSidebar",this.$config.nav.menu[e].sidebar)}}}),c=r,l=(t("b786"),t("2877")),o=Object(l["a"])(c,n,i,!1,null,null,null);o.options.__file="App.vue";var u=o.exports,f=(t("b54a"),t("cadf"),t("551c"),t("097d"),t("8c4f")),d=t("2f62"),m={appName:"种子应用",nav:{logo:"https://bulma.io/images/bulma-logo.png",avatar:"https://avatars3.githubusercontent.com/u/12194490?s=460&v=4",menu:{system:{label:"系统管理",sidebar:[{label:"概览",options:[{label:"仪表盘",icon:"fas fa-tachometer-alt",link:"/dashboard",menuKey:"system",custom:"dashboard"}]},{label:"系统管理",options:[{label:"组织管理",icon:"fas fa-building",children:[{label:"用户管理",icon:"fas fa-users",link:"/user",pageType:"manage",menuKey:"system",breadcrumb:["系统管理","组织管理","用户管理"]},{label:"部门管理",icon:"fas fa-building",link:"/department",pageType:"manage",menuKey:"system",breadcrumb:["系统管理","组织管理","部门管理"]}]},{label:"权限管理",icon:"fas fa-shield-alt",children:[{label:"角色管理",icon:"fas fa-user-tag",link:"/role",pageType:"manage",menuKey:"system",breadcrumb:["系统管理","组织管理","角色管理"]},{label:"权限管理",icon:"fas fa-shield-alt",link:"/privilege",pageType:"manage",menuKey:"system",breadcrumb:["系统管理","组织管理","权限管理"]},{label:"鉴权规则",icon:"fas fa-user-shield",link:"/filter-chain",pageType:"manage",menuKey:"system",breadcrumb:["系统管理","组织管理","鉴权规则"]}]},{label:"系统监控",icon:"fas fa-chart-line",children:[{label:"Druid监控",icon:"fas fa-database",link:"/druid/index.html",pageType:"iframe",menuKey:"system"}]},{label:"消息推送",icon:"fas fa-comment-alt"},{label:"开发工具",icon:"fas fa-toolbox",children:[{label:"接口文档",icon:"fas fa-code",link:"/swagger-ui.html",pageType:"iframe",menuKey:"system"},{label:"代码生成器",icon:"fas fa-laptop-code",link:"/code-gen",menuKey:"system",custom:"code-gen"}]}]}]},biz:{label:"业务管理",sidebar:[]}},theme:{label:"主题",icon:"fas fa-palette",options:[{label:"主色",theme:"is-primary"},{label:"亮色",theme:"is-white"},{label:"暗色",theme:"is-dark"},{label:"绿色",theme:"is-success"},{label:"黄色",theme:"is-warning"},{label:"红色",theme:"is-danger"},{label:"蓝色",theme:"is-info"}]},language:{label:"语言",icon:"fas fa-globe",options:[{label:"English",locale:"en"},{label:"简体中文",locale:"zh_CN"}]},notify:{label:"消息",icon:"fas fa-envelope"},userMenu:[{label:"个人中心",icon:"fas fa-user",isDivided:!1,link:"/profile"},{label:"修改密码",icon:"fas fa-lock",isDivided:!1,link:"/modify-password"},{label:"退出登录",icon:"fas fa-sign-out-alt",isDivided:!0,link:"/logout",isDirect:!0},{label:"报告错误",icon:"fas fa-bug",isDivided:!0,link:"/bug-report"}]}},p=m;s["default"].use(d["a"]);var v=new d["a"].Store({state:{theme:"is-primary",locale:"zh_CN",pageType:"",currentPage:"/",menuKey:"system",sidebar:p.nav.menu.system.sidebar,breadcrumb:[]},getters:{theme:function(e){return e.theme},locale:function(e){return e.locale},pageType:function(e){return e.pageType},currentPage:function(e){return e.currentPage},menuKey:function(e){return e.menuKey},sidebar:function(e){return e.sidebar},breadcrumb:function(e){return e.breadcrumb}},mutations:{setTheme:function(e,a){e.theme=a},setLocale:function(e,a){e.locale=a},setPageType:function(e,a){e.pageType=a},setCurrentPage:function(e,a){e.currentPage=a},setMenuKey:function(e,a){e.menuKey=a},setSidebar:function(e,a){e.sidebar=a},setBreadcrumb:function(e,a){e.breadcrumb=a}},actions:{setTheme:function(e,a){var t=e.commit;t("setTheme",a)},setLocale:function(e,a){var t=e.commit;t("setLocale",a)},setPageType:function(e,a){var t=e.commit;t("setPageType",a)},setCurrentPage:function(e,a){var t=e.commit;t("setCurrentPage",a)},setMenuKey:function(e,a){var t=e.commit;t("setMenuKey",a)},setSidebar:function(e,a){var t=e.commit;t("setSidebar",a)},setBreadcrumb:function(e,a){var t=e.commit;t("setBreadcrumb",a)}}}),b=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",["iframe"===e.$store.getters.pageType?t("div",[t("i-frame-page",{attrs:{src:e.$route.path}})],1):"manage"===e.$store.getters.pageType?t("div",[t("manage-page")],1):t("div",[t("router-view")],1)])},g=[],h=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("iframe",{staticClass:"iframe-content",attrs:{src:e.src}})])},_=[],y={name:"IFramePage",props:{src:{type:String,required:!0}}},C=y,k=(t("01c4"),Object(l["a"])(C,h,_,!1,null,"2e43c880",null));k.options.__file="IFramePage.vue";var $=k.exports,P=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("breadcrumb"),t("a",{staticClass:"navbar-divider"}),t("nav",{staticClass:"level mt-1"},[e._m(0),t("div",{staticClass:"level-right"},[t("button",{staticClass:"button is-success is-small mr-1",on:{click:e.add}},[t("i",{staticClass:"fas fa-plus mr-1"}),e._v("创建\n      ")]),t("button",{staticClass:"button is-danger is-small",on:{click:e.batchDelete}},[t("i",{staticClass:"fas fa-trash-alt mr-1"}),e._v("批量删除\n      ")])])]),t("data-table")],1)},T=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"level-left"},[t("p",{staticClass:"control is-size-7"},[e._v("编号：")]),t("p",{staticClass:"control mr-1"},[t("input",{staticClass:"input is-small",attrs:{type:"text",placeholder:"请填写编号"}})]),t("p",{staticClass:"control is-size-7"},[e._v("关键字：")]),t("p",{staticClass:"control mr-1"},[t("input",{staticClass:"input is-small",attrs:{type:"text",placeholder:"请填写查找关键字"}})]),t("button",{staticClass:"button is-primary is-small"},[t("i",{staticClass:"fas fa-search mr-1"}),e._v("查找\n      ")])])}],w=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("nav",{staticClass:"breadcrumb is-small",attrs:{"aria-label":"breadcrumbs"}},[t("ul",[t("li",[t("a",{on:{click:function(a){e.$router.push("/")}}},[e._m(0),e._v("\n          主页\n        ")])]),e._l(e.$store.getters.breadcrumb,function(a){return t("li",{key:a,staticClass:"is-active"},[t("a",{attrs:{href:"#"}},[e._v(e._s(a))])])})],2)])])},x=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fas fa-home mr-1"})])}],E={name:"Breadcrumb"},K=E,j=(t("61c2"),Object(l["a"])(K,w,x,!1,null,"e31a65b0",null));j.options.__file="Breadcrumb.vue";var z=j.exports,D=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"card"},[e._m(0),t("pagination")],1)},O=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("table",{staticClass:"table is-striped is-hoverable is-fullwidth"},[t("thead",[t("tr",{staticClass:"is-size-7"},[t("th",{staticClass:"is-narrow"},[t("input",{attrs:{type:"checkbox"}})]),t("th",[e._v("ID")]),t("th",[e._v("头像")]),t("th",[e._v("用户名")]),t("th",[e._v("姓名")]),t("th",[e._v("手机号")]),t("th",[e._v("Email")]),t("th",[e._v("性别")]),t("th",[e._v("生日")]),t("th",[e._v("创建时间")]),t("th",[e._v("操作")])])]),t("tbody",[t("tr",{staticClass:"is-size-7"},[t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td",{staticClass:"is-size-7"},[t("button",{staticClass:"button is-primary is-small"},[t("i",{staticClass:"fas fa-edit mr-1"}),e._v("编辑\n        ")])])])])])}],S=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("nav",{staticClass:"pagination is-right is-small ml-1 mr-1"},[t("a",{staticClass:"pagination-previous"},[e._v("上一页")]),t("a",{staticClass:"pagination-next"},[e._v("下一页")]),t("ul",{staticClass:"pagination-list"},[t("li",[t("a",{staticClass:"pagination-link"},[e._v("1")])]),t("li",[t("span",{staticClass:"pagination-ellipsis"},[e._v("…")])]),t("li",[t("a",{staticClass:"pagination-link"},[e._v("45")])]),t("li",[t("a",{staticClass:"pagination-link is-current"},[e._v("46")])]),t("li",[t("a",{staticClass:"pagination-link"},[e._v("47")])]),t("li",[t("span",{staticClass:"pagination-ellipsis"},[e._v("…")])]),t("li",[t("a",{staticClass:"pagination-link"},[e._v("86")])])])])}],M={name:"Pagination"},I=M,B=(t("e809"),Object(l["a"])(I,S,L,!1,null,"d22ec332",null));B.options.__file="Pagination.vue";var A=B.exports,N={name:"DataTable",components:{Pagination:A},props:{columns:{},data:{}}},U=N,F=(t("f536"),Object(l["a"])(U,D,O,!1,null,"3be0cbe2",null));F.options.__file="DataTable.vue";var q=F.exports,J={name:"ManagePage",components:{DataTable:q,Breadcrumb:z},methods:{add:function(){alert("创建")},batchDelete:function(){alert("批量删除")}}},Y=J,G=(t("123a"),Object(l["a"])(Y,P,T,!1,null,"2ff4241a",null));G.options.__file="ManagePage.vue";var R=G.exports,H={name:"Page",components:{ManagePage:R,IFramePage:$}},Q=H,V=(t("fc62"),Object(l["a"])(Q,b,g,!1,null,"291699e9",null));V.options.__file="Page.vue";var W=V.exports,X=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e._v("\n  仪表盘\n")])},Z=[],ee={name:"Dashboard"},ae=ee,te=(t("477f"),Object(l["a"])(ae,X,Z,!1,null,"6fb24ed2",null));te.options.__file="Dashboard.vue";var se=te.exports,ne=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e._v("\n  代码生成\n")])},ie=[],re={name:"Dashboard"},ce=re,le=(t("01fe"),Object(l["a"])(ce,ne,ie,!1,null,"30555ad8",null));le.options.__file="CodeGen.vue";var oe=le.exports;s["default"].use(f["a"]);var ue={dashboard:se,"code-gen":oe},fe={path:"/",component:W,redirect:"/dashboard",children:[]};for(var de in p.nav.menu)p.nav.menu.hasOwnProperty(de)&&p.nav.menu[de].sidebar.forEach(function(e){e.options.forEach(function(e){if(e.children)e.children.forEach(function(e){if(e.link){var a={path:e.link,component:W,meta:{menuKey:e.menuKey,breadcrumb:e.breadcrumb}};e.pageType?a.meta.pageType=e.pageType:e.custom&&(a.component=ue[e.custom]),fe.children.push(a)}});else if(e.link){var a={path:e.link,component:W,meta:{menuKey:e.menuKey}};e.pageType?a.meta.pageType=e.pageType:e.custom&&(a.component=ue[e.custom]),fe.children.push(a)}})});var me=new f["a"]({routes:[fe]});me.beforeEach(function(e,a,t){v.dispatch("setPageType",e.meta.pageType||""),v.dispatch("setCurrentPage",e.path),v.dispatch("setMenuKey",e.meta.menuKey||"system"),v.dispatch("setBreadcrumb",e.meta.breadcrumb||[]),t()});var pe=me,ve=t("365c");t("5717");s["default"].config.productionTip=!1,s["default"].prototype.$config=p,s["default"].prototype.$api=ve["a"],new s["default"]({router:pe,store:v,render:function(e){return e(u)}}).$mount("#app")},e809:function(e,a,t){"use strict";var s=t("fc4b"),n=t.n(s);n.a},ed08:function(e,a,t){"use strict";t("a481"),t("cadf"),t("551c"),t("097d");var s={openPage:function(e){window.open(e).location},goPage:function(e){window.location.replace(e)},jumpPage:function(e){window.location.href=e}},n=s;a["a"]={http:n}},f536:function(e,a,t){"use strict";var s=t("fdaf"),n=t.n(s);n.a},fa0f:function(e,a,t){},fc4b:function(e,a,t){},fc62:function(e,a,t){"use strict";var s=t("4f0b"),n=t.n(s);n.a},fdaf:function(e,a,t){}});
//# sourceMappingURL=index.1f98174f.js.map