(function(t){function e(e){for(var i,a,r=e[0],c=e[1],u=e[2],l=0,f=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={index:0},o=[];function a(t){return r.p+"static/js/"+({}[t]||t)+".js?03afda70"}function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=s[t]=[e,i]}));e.push(n[2]=i);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=a(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}s[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("fb05")},"14a0":function(t,e,n){"use strict";var i=n("c60d"),s=n.n(i);s.a},"275f":function(t,e,n){},"5fa0":function(t,e,n){"use strict";var i=n("c64a"),s=n.n(i);s.a},"779e":function(t,e,n){},"7d67":function(t,e,n){},"89ec":function(t,e,n){},9561:function(t,e,n){},a8c2:function(t,e,n){"use strict";var i=n("7d67"),s=n.n(i);s.a},aca6:function(t,e,n){"use strict";var i=n("89ec"),s=n.n(i);s.a},b38a:function(t,e,n){"use strict";var i=n("9561"),s=n.n(i);s.a},c50e:function(t,e,n){"use strict";t.exports={suggest:"//sugs.m.sm.cn/web",weather:"https://free-api.heweather.net/s6/weather/",weather_ic:"https://cdn.heweather.com/img/plugin/190516/icon/c/"}},c60d:function(t,e,n){},c64a:function(t,e,n){},ccdb:function(t,e,n){"use strict";var i=n("779e"),s=n.n(i);s.a},fb05:function(t,e,n){"use strict";n.r(e);n("96dd"),n("a60a"),n("e783"),n("8b1f");var i=n("6e6d"),s=(n("ed8b"),n("4634"),n("09d0")),o=(n("cc1d"),n("2427")),a=n.n(o),r=n("82c6"),c=n.n(r),u={400:"Error request",401:"Unauthorized, please log in again",403:"Deny access",404:"Request error, this resource was not found",405:"Request method is not allowed",408:"Request timeout",500:"Server side error",501:"Network not implemented",502:"Network Error",503:"Services are not available",504:"Network timeout",505:"http version does not support this request",default:"Connection error"},l=n("c50e"),d=n.n(l),f=void 0;Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=f.constructor;return f.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),a.a.defaults.retry=4,a.a.defaults.timeout=5e3,a.a.defaults.retryDelay=1e3,a.a.interceptors.request.use((function(t){return Object.assign(t.headers,{"Content-Type":"application/x-www-form-urlencoded"}),t})),a.a.interceptors.response.use((function(t){var e=t.data;return"string"==typeof e&&(e=JSON.parse(e)),Promise.resolve(t)}),(function(t){if(t){var e=void 0;e=t.response?u[e.response.status||"default"]:t.toString(),alert(e)}}));var h=function(t,e,n,i){var o=new Promise((function(o,r){var u={url:t,method:n};"post"===n?u.data=c.a.stringify(e):u.params=e,"object"==Object(s["a"])(i)&&Object.assign(u,i),a.a.request(u).then((function(t){o(t.data)})).catch((function(t){r(t)}))}));return o.always=function(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Function;console.log(f)},o};window.$={get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return h(t,e,"get",n)},post:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return h(t,e,"post",n)},JSONP:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t){if(e instanceof Object){var n=[];if(Object.keys(e).forEach((function(t){n.push("".concat(t,"=").concat(e[t]))})),n.length){var i="?";/\?/.test(t)&&(i="&"),t+=i+n.join("&")}}this.getScript(t)}},getScript:function(t,e){var n=this;return new Promise((function(i){var s=document.createElement("script");s.type="text/javascript",s.async="async",s.charset="UTF-8",s.src=t,s.addEventListener("load",(function(){i(),"function"==typeof e&&e()}),!1),s.addEventListener("error",(function(){n.error()}),!1),document.head.appendChild(s)}))},path:d.a,extend:Object.assign,error:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};alert("".concat(t.message||t.msg||"Error: Network Error").concat(t.code?"[code:".concat(t.code,"]"):""))}};var g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._t("default")],2)},p=[],v=(n("275f"),{name:"BaseLayout"}),m=v,w=(n("aca6"),n("4e82")),b=Object(w["a"])(m,g,p,!1,null,null,null),y=b.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.effect}},[t.loading?n("div",{staticClass:"site-loading"}):t._e()])},x=[],k=n("b27f"),C={name:"SiteLoading",data:function(){return{loading:!1,effect:"fade-in"}},methods:{show:function(){this.loading=!0,this.changeEffect("fade-out")},hide:function(){this.loading=!1,this.changeEffect("fade-in")},changeEffect:function(t){var e=this;Object(k["setTimeout"])((function(){e.effect=t}),300)}}},S=C,O=(n("5fa0"),Object(w["a"])(S,_,x,!1,null,null,null)),E=O.exports,j={install:function(t){var e=t.extend(E),n=(new e).$mount();document.body.appendChild(n.$el),t.prototype.$loading=window.$loading={show:function(){n.show()},hide:function(){n.hide()}}}},T=j,q=(n("8f42"),n("e6d1"),n("c041"),n("db3e"),window.location.search.slice(1)),I=function(){var t=this;q.replace(/([^=]*)=([^&]*)&?/g,(function(e,n,i){t[n]=decodeURIComponent(i).replace(/</g,"&lt;").replace(/>/g,"&gt;")}))};I.prototype.toString=function(){return q};new I;var L=navigator.userAgent.toLowerCase(),P={isMobile:/(iphone|ipod|ipad|ios|android|nokia|blackberry|webos|webos|webmate|bada|lg|ucweb)/i.test(L),isIos:/(iphone|ipod|ipad|ios)/i.test(L),isAndroid:/(android)/i.test(L),isChrome:/(chrome)/i.test(L),isWeiXin:/micromessenger/i.test(L),isQQBrowser:/qqbrowser/i.test(L)},W={set:function(t,e,n){var i=new Date;n&&i.setTime(i.getTime()+24*n*3600*1e3),document.cookie=t+"="+e+(n?";path=/;expires="+i.toGMTString():"")},get:function(t){for(var e,n=document.cookie.replace(/[ ]/g,""),i=n.split(";"),s=0;s<i.length;s++){i[s]=i[s].replace("="," ");var o=i[s].split(" ");if(t==o[0]){e=o[1];break}}return e},delete:function(t){var e=new Date;e.setTime(e.getTime()-1e4),document.cookie=t+"=v; expires ="+e.toGMTString()}};i["a"].config.productionTip=!1,i["a"].component("BaseLayout",y),i["a"].use(T);var B=function(){return n.e("chunk-2d21dfab").then(n.bind(null,"d438"))};P.isMobile&&B().then((function(t){t.default()}));var A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-layout",[n("div",{staticClass:"widget google"}),n("search-box"),n("div",{staticClass:"toolbar"},[n("weather-box",{attrs:{radius:t.radius[0]}}),n("a",{staticClass:"btn btn-qrcode",style:t.radius[1],attrs:{href:t.qrcode}},[t._v(t._s(t.qrcodeTxt))]),t.isAndroid?n("a",{staticClass:"btn btn-apk",style:t.radius[2],attrs:{href:"https://apkcombo.com/zh-cn/apk-downloader/"}},[t._v("软件")]):t._e()],1)],1)},M=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weather-box"},[n("a",{staticClass:"btn btn-weather",style:t.radius,on:{click:function(e){return t.toggleWeather(!0)}}},[n("span",{staticClass:"celsius"},[t._v(t._s(t.now.tmp||"--")+"°")]),t._v(t._s(t.basic.location||"--"))]),n("transition",{attrs:{name:"fade-in"}},[t.status?n("div",{staticClass:"weather-card"},[n("div",{staticClass:"cover",on:{click:function(e){return t.toggleWeather(!1)}}}),n("div",{staticClass:"card"},[n("div",{staticClass:"row"},[n("div",{staticClass:"location pull-left"},[t._v("\n                        "+t._s(t.basic.admin_area+t.basic.parent_city+(t.basic.parent_city==t.basic.location?"":t.basic.location))+"\n                        "),n("span",{staticClass:"link",on:{click:function(e){t.setlocation("请输入你的所在位置 ( 不输入 = 获取ip位置 )")}}},[t._v("切换")])]),n("div",{staticClass:"pull-right"},[n("a",{staticClass:"link",attrs:{href:"https://heweather.com",target:"_blank"}},[t._v("@和风天气")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"temp pull-left"},[n("img",{staticClass:"ic-cond",attrs:{src:t.weatherIc(t.now.cond_code+t.getCond())}}),n("div",{staticClass:"text"},[n("div",{staticClass:"num"},[t._v(t._s(t.now.tmp||"--")+"°")]),t._v("\n                            "+t._s(t.now.cond_txt||"--")+"\n                        ")])]),n("div",{staticClass:"wind pull-righ"},[n("span",{staticClass:"btn-brf"},[t._v(t._s(t.lifestyle[0].brf||"--"))]),n("div",[t._v(t._s(t.now.wind_dir+t.now.wind_sc+"级"))]),n("div",[t._v("相对湿度"+t._s(t.now.hum))])])]),n("div",{staticClass:"hr"}),n("div",{staticClass:"row"},[n("div",{staticClass:"forecast"},t._l(t.daily_forecast,(function(e,i){return n("div",{key:i,staticClass:"item"},[n("div",{staticClass:"date"},[t._v(t._s(0==i?"今天":t.shortTime(e.date)))]),n("img",{staticClass:"ic-cond",attrs:{src:t.weatherIc(e["cond_code_"+t.getCond()]+t.getCond())}}),n("div",{staticClass:"tmp"},[t._v(t._s(e.tmp_min)+"°/"+t._s(e.tmp_max)+"°")])])})),0)])]),n("b",{staticClass:"close",on:{click:function(e){return t.toggleWeather(!1)}}},[t._v("×")])]):t._e()])],1)},N=[],D={name:"WeatherBox",data:function(){var t={};return{status:!1,param:{location:"",key:"7f3c55309e6b466fa8ac4ac7c808f34d"},basic:t,daily_forecast:[],lifestyle:[t],now:t,update:t}},props:["radius"],methods:{getCond:function(){var t=(new Date).getHours()>18?"n":"d";return t},weatherIc:function(t){return $.path.weather_ic+t+".png"},shortTime:function(t){return t.substr(5)},toggleWeather:function(t){this.now.tmp?this.status=t:alert("还没准备好~")},setlocation:function(t){t?(t=prompt(t),t||(t="auto_ip")):(t="auto_ip",console.log("调整为判断ip区域")),this.param.location=t,W.set("location",t,3),this.getWeather()},geolocation:function(){return new Promise((function(t,e){var n=W.get("location");n&&t(n),navigator.geolocation||e("你的浏览器不支持自动定位服务！"),navigator.geolocation.getCurrentPosition((function(i){var s=i.coords,o=s.longitude,a=s.latitude;void 0!==o&&void 0!==a||e("无法获取到正确位置！"),n="".concat(o,",").concat(a),W.set("location",n,3),t(n)}),(function(t){var n=t.message;e(n||"浏览器拒绝提供位置服务！")})),setTimeout((function(){e("自动获取位置超时，取消任务")}),1e3)}))},getWeather:function(){var t=this;console.dir("开始获取天气"),$.get($.path.weather,this.param).then((function(e){var n=e.HeWeather6;console.dir("天气信息请求成功");var i=n.pop(),s=i.basic,o=i.daily_forecast,a=i.lifestyle,r=i.now,c=i.status,u=i.update;"ok"==c&&(t.basic=s,t.lifestyle=a,t.daily_forecast=o,t.now=r,t.update=u)})).catch((function(){console.error("天气信息请求失败"),t.now.tmp="--"}))}},mounted:function(){var t=this;this.geolocation().then((function(e){console.log("自动获取位置".concat(e)),t.param.location=e,t.getWeather()})).catch((function(e){console.error(e),t.setlocation()}))}},U=D,J=(n("a8c2"),Object(w["a"])(U,R,N,!1,null,null,null)),z=J.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box clearfix"},[n("span",{staticClass:"label select",on:{click:t.showEngineList}},[t._v("\n        "+t._s(t.Engines[t.engine]["text"])+"\n    ")]),n("select-list",{ref:"engineList",attrs:{option:t.Engines},on:{select:t.selectEngine}}),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.text,expression:"text",modifiers:{trim:!0}}],ref:"input",staticClass:"text",attrs:{type:"text",placeholder:"你要搜点什么？≖‿≖✧"},domProps:{value:t.text},on:{blur:[t.removeSuggest,function(e){return t.$forceUpdate()}],keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.quickSubmit(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.suggestWithKeyBoard(-1)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.suggestWithKeyBoard(1)}],input:function(e){e.target.composing||(t.text=e.target.value.trim())}}}),n("select-list",{ref:"suggestList",attrs:{option:t.suggest},on:{select:t.useSuggest}}),n("button",{staticClass:"submit",on:{click:t.submit}})],1)},F=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"select-list"},t._l(t.option,(function(e,i){return n("div",{key:i,class:["item",t.active==i?"active":""],on:{click:function(e){return t.check(i)}}},[t._v(t._s(e.text))])})),0)])},H=[],Q=[{text:"无选项",value:""}],X={name:"SelectList",data:function(){return{status:!1,active:void 0}},props:{option:{type:Array,default:Q}},methods:{toggle:function(t,e){this.status=null===t?!this.status:t,"number"===typeof e&&(this.active=e)},check:function(t){var e=this;this.active=t,this.$emit("select",t),this.$nextTick((function(){e.toggle(!1)}))},keyBoard:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;this.active=t,void 0!==t&&this.$emit("select",t)}}},V=X,Y=(n("ccdb"),Object(w["a"])(V,G,H,!1,null,null,null)),Z=Y.exports,tt=[{text:"百度",value:"https://www.baidu.com/s?wd="},{text:"谷歌",value:"https://www.google.com.hk/search?q="},{text:"知乎",value:"https://www.zhihu.com/search?type=content&q="}],et={name:"SearchBox",data:function(){return{engine:0,Engines:tt,suggest:[],suggestStatus:!1,suggestTimeOut:void 0,text:"",uninput:!1,uninputIdx:void 0}},computed:{suggestList:function(){return this.$refs.suggestList}},components:{SelectList:Z},watch:{text:function(t,e){e!==t&&(t?this.uninput?this.uninput=!1:this.getSuggess(t):this.suggest=[])}},methods:{getSuggess:function(t){$.JSONP($.path.suggest,{q:t,callback:"setSuggess",_:new Date/1})},useSuggest:function(t){this.text=this.suggest[t].value,this.submit()},removeSuggest:function(){var t=this;this.suggestTimeOut&&clearTimeout(this.suggestTimeOut),this.suggestTimeOut=setTimeout((function(){t.suggestStatus=!1,t.suggestList.toggle(t.suggestStatus)}),200)},suggestWithKeyBoard:function(t){this.suggestStatus&&this.suggest.length&&(void 0===this.uninputIdx&&(this.uninputIdx=-1),this.uninputIdx+=t,this.uninputIdx<0?this.uninputIdx=this.suggest.length-1:this.uninputIdx==this.suggest.length&&(this.uninputIdx=0),this.uninput=!0,this.suggestList.keyBoard(this.uninputIdx))},showEngineList:function(){this.$refs.engineList.toggle(null,this.engine)},selectEngine:function(t){this.engine=t},quickSubmit:function(){this.suggestStatus=!1,this.suggestList.toggle(this.suggestStatus),this.uninputIdx=void 0,this.submit()},submit:function(){void 0===this.uninputIdx&&(location.href=this.Engines[this.engine].value+encodeURIComponent(this.text))}},mounted:function(){var t=this;window.setSuggess=function(e){e.q;var n=e.r,i=[];n instanceof Array&&n.forEach((function(t){var e=t.w;i.push({text:e,value:e})})),t.uninputIdx=void 0,t.suggest=i,t.suggestStatus=!0,t.suggestList.toggle(t.suggestStatus),t.suggestList.keyBoard()}}},nt=et,it=(n("14a0"),Object(w["a"])(nt,K,F,!1,null,null,null)),st=it.exports,ot={name:"Index",data:function(){var t="https://cli.im/",e="二维码";return P.isAndroid&&P.isChrome&&(t="intent://mark.qrcode/#Intent;scheme=scan;package=mark.qrcode;S.browser_fallback_url=".concat(encodeURIComponent("https://cli.im/"),";end"),e="扫一扫"),{radius:[],isAndroid:P.isAndroid,qrcode:t,qrcodeTxt:e}},components:{WeatherBox:z,SearchBox:st},methods:{random:function(){return Math.floor(20*Math.random())-10+50+"%"},setRadius:function(){for(var t=[],e=0;e<3;e++)t[e]={borderRadius:"".concat(this.random()," ").concat(this.random()," ").concat(this.random()," ").concat(this.random(),"/").concat(this.random()," ").concat(this.random()," ").concat(this.random()," ").concat(this.random())};this.radius=t}},mounted:function(){setInterval(this.setRadius,3e3),this.setRadius()}},at=ot,rt=(n("b38a"),Object(w["a"])(at,A,M,!1,null,null,null)),ct=rt.exports;new i["a"]({render:function(t){return t(ct)}}).$mount("#app")}});