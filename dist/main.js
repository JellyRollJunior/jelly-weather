(()=>{var n={365:(n,t,e)=>{"use strict";e.d(t,{A:()=>s});var r=e(354),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect,\nspan {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nhtml {\n  --main-color: #E0EFEA;\n  --secondary-color: #564734;\n  --tertiary-color: #8EA076;\n\n  background-color: var(--tertiary-color);\n  color: var(--secondary-color);\n  text-align: center;\n  padding: 24px 0;\n}\n\n.flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.wrapper {\n  background-color: var(--main-color);\n  border-radius: 25px;\n  border: 3.9px solid var(--secondary-color);\n}\n\n.wrapper,\noutput {\n  flex-direction: column;\n  max-width: 1050px;\n  margin: auto;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  width: 100%;\n  padding: 0 36px;\n  margin-top: 24px;\n}\n\n#location {\n  color: var(--secondary-color);\n  width: 200px;\n  border-radius: 8px;\n  padding-left: 6px;\n  vertical-align: middle;\n}\n\nbutton {\n  color: var(--secondary-color);\n  vertical-align: middle;\n  border-radius: 8px;\n}\n\n#unit {\n  padding: 1px 12px;\n}\n\n.location-display-wrapper {\n  margin-top: 24px;\n}\n\nsection {\n  margin-top: 20px;\n}\n\n.overview {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  justify-items: center;\n  align-items: center;\n\n  padding: 12px 0px 21px 0px;\n  border: 3px solid var(--secondary-color);\n  border-radius: 36px;\n  width: 750px;\n}\n\n.overview > img {\n  --icon-size: 100px;\n  width: var(--icon-size);\n  height: var(--icon-size);\n}\n\n.range {\n  line-height: 1.65;\n  padding-top: 12px;\n  width: 250px;\n}\n\n.stats {\n  display: grid;\n  grid-template-columns: 150px 150px 150px;\n  gap: 32px 42px;\n}\n\n.forecast-card-holder {\n  flex-wrap: wrap;\n  gap: 16px;\n  width: 850px;\n  margin: 16px 0 32px 0;\n}\n\n.card {\n  display: grid;\n  grid-template-rows: 30px 130px 30px;\n  align-items: center;\n  gap: 12px;\n\n  width: 185px;\n  padding: 16px 24px 20px 24px;\n  border-radius: 24px;\n  border: 2px solid var(--secondary-color);\n}\n\n/* Font sizes */\nh1 {\n  font-size: 1.9rem;\n}\n\nh2 {\n  font-size: 1.3rem;\n}\n\n.date-wrapper {\n  font-weight: normal;\n}\n\n.current-conditions > h2 {\n  font-size: 3.4rem;\n}\n\n#conditions {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.range > div {\n  font-size: 1.3rem;\n}\n\n.stats > div > div {\n  font-size: 1.5rem;\n}\n\n.hidden {\n  display: none;\n}\n\n.loader-wrapper {\n  padding: 24px;\n}\n\n.loader {\n  animation: spin 2s linear infinite;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #746a5c;\n  border-top: 16px solid #bdde92;\n  border-radius: 50%;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;;;EAGE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;;EAKE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;EAC1B,yBAAyB;;EAEzB,uCAAuC;EACvC,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,mCAAmC;EACnC,mBAAmB;EACnB,0CAA0C;AAC5C;;AAEA;;EAEE,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;;EAEnB,WAAW;EACX,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;EAC7B,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,qBAAqB;EACrB,mBAAmB;;EAEnB,0BAA0B;EAC1B,wCAAwC;EACxC,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,wCAAwC;EACxC,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,SAAS;EACT,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,mBAAmB;EACnB,SAAS;;EAET,YAAY;EACZ,4BAA4B;EAC5B,mBAAmB;EACnB,wCAAwC;AAC1C;;AAEA,eAAe;AACf;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,KAAK,uBAAuB,EAAE;EAC9B,OAAO,yBAAyB,EAAE;AACpC",sourcesContent:["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect,\nspan {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nhtml {\n  --main-color: #E0EFEA;\n  --secondary-color: #564734;\n  --tertiary-color: #8EA076;\n\n  background-color: var(--tertiary-color);\n  color: var(--secondary-color);\n  text-align: center;\n  padding: 24px 0;\n}\n\n.flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.wrapper {\n  background-color: var(--main-color);\n  border-radius: 25px;\n  border: 3.9px solid var(--secondary-color);\n}\n\n.wrapper,\noutput {\n  flex-direction: column;\n  max-width: 1050px;\n  margin: auto;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  width: 100%;\n  padding: 0 36px;\n  margin-top: 24px;\n}\n\n#location {\n  color: var(--secondary-color);\n  width: 200px;\n  border-radius: 8px;\n  padding-left: 6px;\n  vertical-align: middle;\n}\n\nbutton {\n  color: var(--secondary-color);\n  vertical-align: middle;\n  border-radius: 8px;\n}\n\n#unit {\n  padding: 1px 12px;\n}\n\n.location-display-wrapper {\n  margin-top: 24px;\n}\n\nsection {\n  margin-top: 20px;\n}\n\n.overview {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  justify-items: center;\n  align-items: center;\n\n  padding: 12px 0px 21px 0px;\n  border: 3px solid var(--secondary-color);\n  border-radius: 36px;\n  width: 750px;\n}\n\n.overview > img {\n  --icon-size: 100px;\n  width: var(--icon-size);\n  height: var(--icon-size);\n}\n\n.range {\n  line-height: 1.65;\n  padding-top: 12px;\n  width: 250px;\n}\n\n.stats {\n  display: grid;\n  grid-template-columns: 150px 150px 150px;\n  gap: 32px 42px;\n}\n\n.forecast-card-holder {\n  flex-wrap: wrap;\n  gap: 16px;\n  width: 850px;\n  margin: 16px 0 32px 0;\n}\n\n.card {\n  display: grid;\n  grid-template-rows: 30px 130px 30px;\n  align-items: center;\n  gap: 12px;\n\n  width: 185px;\n  padding: 16px 24px 20px 24px;\n  border-radius: 24px;\n  border: 2px solid var(--secondary-color);\n}\n\n/* Font sizes */\nh1 {\n  font-size: 1.9rem;\n}\n\nh2 {\n  font-size: 1.3rem;\n}\n\n.date-wrapper {\n  font-weight: normal;\n}\n\n.current-conditions > h2 {\n  font-size: 3.4rem;\n}\n\n#conditions {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.range > div {\n  font-size: 1.3rem;\n}\n\n.stats > div > div {\n  font-size: 1.5rem;\n}\n\n.hidden {\n  display: none;\n}\n\n.loader-wrapper {\n  padding: 24px;\n}\n\n.loader {\n  animation: spin 2s linear infinite;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #746a5c;\n  border-top: 16px solid #bdde92;\n  border-radius: 50%;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}"],sourceRoot:""}]);const s=i},314:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},354:n=>{"use strict";n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=e(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=o(m,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var c=r(n,o),u=0;u<a.length;u++){var d=e(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},659:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},106:(n,t,e)=>{var r={"./clear-day.svg":701,"./clear-night.svg":977,"./cloudy.svg":561,"./fog.svg":487,"./hail.svg":983,"./partly-cloudy-day.svg":769,"./partly-cloudy-night.svg":653,"./rain-snow-showers-day.svg":725,"./rain-snow-showers-night.svg":758,"./rain-snow.svg":933,"./rain.svg":99,"./search.svg":321,"./showers-day.svg":155,"./showers-night.svg":47,"./sleet.svg":814,"./snow-showers-day.svg":495,"./snow-showers-night.svg":827,"./snow.svg":928,"./thunder-rain.svg":992,"./thunder-showers-day.svg":982,"./thunder-showers-night.svg":666,"./thunder.svg":185,"./wind.svg":167};function o(n){var t=a(n);return e(t)}function a(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=a,n.exports=o,o.id=106},701:(n,t,e)=>{"use strict";n.exports=e.p+"0ae928911d7143fe5c97.svg"},977:(n,t,e)=>{"use strict";n.exports=e.p+"10da86080cdf8ab805dc.svg"},561:(n,t,e)=>{"use strict";n.exports=e.p+"b3bf211cc12293dba117.svg"},487:(n,t,e)=>{"use strict";n.exports=e.p+"4367781d78de4b41c8ba.svg"},983:(n,t,e)=>{"use strict";n.exports=e.p+"3889cfa8600afb2befbe.svg"},769:(n,t,e)=>{"use strict";n.exports=e.p+"1b7e30503cbfe9b1328f.svg"},653:(n,t,e)=>{"use strict";n.exports=e.p+"f16ddc81302dd032a209.svg"},725:(n,t,e)=>{"use strict";n.exports=e.p+"2049dc22f51b775cff95.svg"},758:(n,t,e)=>{"use strict";n.exports=e.p+"70b740bd0df75f5a12ca.svg"},933:(n,t,e)=>{"use strict";n.exports=e.p+"0f570b61f610cc47550c.svg"},99:(n,t,e)=>{"use strict";n.exports=e.p+"6e4f357e69e53710441a.svg"},321:(n,t,e)=>{"use strict";n.exports=e.p+"2d2d46c0f61ca53d9d51.svg"},155:(n,t,e)=>{"use strict";n.exports=e.p+"4a2b8451b8315b4993a1.svg"},47:(n,t,e)=>{"use strict";n.exports=e.p+"86d5570e13c926b05b8a.svg"},814:(n,t,e)=>{"use strict";n.exports=e.p+"c11ff972687fa3708771.svg"},495:(n,t,e)=>{"use strict";n.exports=e.p+"acb2b455bd9de4db2a8b.svg"},827:(n,t,e)=>{"use strict";n.exports=e.p+"21754c08cf67996293bf.svg"},928:(n,t,e)=>{"use strict";n.exports=e.p+"a38ec89338af4551eb0e.svg"},992:(n,t,e)=>{"use strict";n.exports=e.p+"83b0db88aba6097c5c55.svg"},982:(n,t,e)=>{"use strict";n.exports=e.p+"545dd2062c3e501db0f4.svg"},666:(n,t,e)=>{"use strict";n.exports=e.p+"e83e5d078be84eac9071.svg"},185:(n,t,e)=>{"use strict";n.exports=e.p+"9e22ef7b53fde88ba057.svg"},167:(n,t,e)=>{"use strict";n.exports=e.p+"f9e79d493e2fd83a55bd.svg"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{"use strict";var n=e(72),t=e.n(n),r=e(825),o=e.n(r),a=e(659),i=e.n(a),s=e(56),c=e.n(s),u=e(540),d=e.n(u),l=e(113),p=e.n(l),m=e(365),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(m.A,h),m.A&&m.A.locals&&m.A.locals;const f="JRPNTC8Y8V73YMJ6EY5B684W7",A="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",g="http://api.geonames.org/";async function w(n){try{const t=await fetch(n,{mode:"cors"});if(console.log(t),!t.ok)throw new Error(`Error: ${t.status}`);return t}catch(n){return console.log("API request failed",n),null}}const y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function b(n){return(t={})=>{const e=t.width?String(t.width):n.defaultWidth;return n.formats[e]||n.formats[n.defaultWidth]}}const x={date:b({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:b({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:b({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},v={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function C(n){return(t,e)=>{let r;if("formatting"===(e?.context?String(e.context):"standalone")&&n.formattingValues){const t=n.defaultFormattingWidth||n.defaultWidth,o=e?.width?String(e.width):t;r=n.formattingValues[o]||n.formattingValues[t]}else{const t=n.defaultWidth,o=e?.width?String(e.width):n.defaultWidth;r=n.values[o]||n.values[t]}return r[n.argumentCallback?n.argumentCallback(t):t]}}const E={ordinalNumber:(n,t)=>{const e=Number(n),r=e%100;if(r>20||r<10)switch(r%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},era:C({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:C({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:n=>n-1}),month:C({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:C({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:C({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function B(n){return(t,e={})=>{const r=e.width,o=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],a=t.match(o);if(!a)return null;const i=a[0],s=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(s)?function(n){for(let t=0;t<n.length;t++)if(n[t].test(i))return t}(s):function(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&n[t].test(i))return t}(s);let u;return u=n.valueCallback?n.valueCallback(c):c,u=e.valueCallback?e.valueCallback(u):u,{value:u,rest:t.slice(i.length)}}}const S={ordinalNumber:(k={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:n=>parseInt(n,10)},(n,t={})=>{const e=n.match(k.matchPattern);if(!e)return null;const r=e[0],o=n.match(k.parsePattern);if(!o)return null;let a=k.valueCallback?k.valueCallback(o[0]):o[0];return a=t.valueCallback?t.valueCallback(a):a,{value:a,rest:n.slice(r.length)}}),era:B({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:B({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:n=>n+1}),month:B({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:B({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:B({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var k;const M={code:"en-US",formatDistance:(n,t,e)=>{let r;const o=y[n];return r="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),e?.addSuffix?e.comparison&&e.comparison>0?"in "+r:r+" ago":r},formatLong:x,formatRelative:(n,t,e,r)=>v[n],localize:E,match:S,options:{weekStartsOn:0,firstWeekContainsDate:1}};let P={};function q(){return P}Math.pow(10,8);const T=6048e5,W=864e5,Y=Symbol.for("constructDateFrom");function D(n,t){return"function"==typeof n?n(t):n&&"object"==typeof n&&Y in n?n[Y](t):n instanceof Date?new n.constructor(t):new Date(t)}function z(n,t){return D(t||n,n)}function j(n){const t=z(n),e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+n-+e}function O(n,t){const e=z(n,t?.in);return e.setHours(0,0,0,0),e}function N(n,t){const e=z(n,t?.in);return function(n,t,e){const[r,o]=function(n,...t){const e=D.bind(null,n||t.find((n=>"object"==typeof n)));return t.map(e)}(e?.in,n,t),a=O(r),i=O(o),s=+a-j(a),c=+i-j(i);return Math.round((s-c)/W)}(e,function(n,t){const e=z(n,t?.in);return e.setFullYear(e.getFullYear(),0,1),e.setHours(0,0,0,0),e}(e))+1}function L(n,t){const e=q(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??e.weekStartsOn??e.locale?.options?.weekStartsOn??0,o=z(n,t?.in),a=o.getDay(),i=(a<r?7:0)+a-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function F(n,t){return L(n,{...t,weekStartsOn:1})}function H(n,t){const e=z(n,t?.in),r=e.getFullYear(),o=D(e,0);o.setFullYear(r+1,0,4),o.setHours(0,0,0,0);const a=F(o),i=D(e,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const s=F(i);return e.getTime()>=a.getTime()?r+1:e.getTime()>=s.getTime()?r:r-1}function $(n,t){const e=z(n,t?.in),r=+F(e)-+function(n,t){const e=H(n,t),r=D(t?.in||n,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),F(r)}(e);return Math.round(r/T)+1}function G(n,t){const e=z(n,t?.in),r=e.getFullYear(),o=q(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=D(t?.in||n,0);i.setFullYear(r+1,0,a),i.setHours(0,0,0,0);const s=L(i,t),c=D(t?.in||n,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);const u=L(c,t);return+e>=+s?r+1:+e>=+u?r:r-1}function Q(n,t){const e=z(n,t?.in),r=+L(e,t)-+function(n,t){const e=q(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??e.firstWeekContainsDate??e.locale?.options?.firstWeekContainsDate??1,o=G(n,t),a=D(t?.in||n,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),L(a,t)}(e,t);return Math.round(r/T)+1}function X(n,t){return(n<0?"-":"")+Math.abs(n).toString().padStart(t,"0")}const I={y(n,t){const e=n.getFullYear(),r=e>0?e:1-e;return X("yy"===t?r%100:r,t.length)},M(n,t){const e=n.getMonth();return"M"===t?String(e+1):X(e+1,2)},d:(n,t)=>X(n.getDate(),t.length),a(n,t){const e=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];default:return"am"===e?"a.m.":"p.m."}},h:(n,t)=>X(n.getHours()%12||12,t.length),H:(n,t)=>X(n.getHours(),t.length),m:(n,t)=>X(n.getMinutes(),t.length),s:(n,t)=>X(n.getSeconds(),t.length),S(n,t){const e=t.length,r=n.getMilliseconds();return X(Math.trunc(r*Math.pow(10,e-3)),t.length)}},J={G:function(n,t,e){const r=n.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(r,{width:"abbreviated"});case"GGGGG":return e.era(r,{width:"narrow"});default:return e.era(r,{width:"wide"})}},y:function(n,t,e){if("yo"===t){const t=n.getFullYear(),r=t>0?t:1-t;return e.ordinalNumber(r,{unit:"year"})}return I.y(n,t)},Y:function(n,t,e,r){const o=G(n,r),a=o>0?o:1-o;return"YY"===t?X(a%100,2):"Yo"===t?e.ordinalNumber(a,{unit:"year"}):X(a,t.length)},R:function(n,t){return X(H(n),t.length)},u:function(n,t){return X(n.getFullYear(),t.length)},Q:function(n,t,e){const r=Math.ceil((n.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return X(r,2);case"Qo":return e.ordinalNumber(r,{unit:"quarter"});case"QQQ":return e.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(r,{width:"narrow",context:"formatting"});default:return e.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,t,e){const r=Math.ceil((n.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return X(r,2);case"qo":return e.ordinalNumber(r,{unit:"quarter"});case"qqq":return e.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(r,{width:"narrow",context:"standalone"});default:return e.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,t,e){const r=n.getMonth();switch(t){case"M":case"MM":return I.M(n,t);case"Mo":return e.ordinalNumber(r+1,{unit:"month"});case"MMM":return e.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(r,{width:"narrow",context:"formatting"});default:return e.month(r,{width:"wide",context:"formatting"})}},L:function(n,t,e){const r=n.getMonth();switch(t){case"L":return String(r+1);case"LL":return X(r+1,2);case"Lo":return e.ordinalNumber(r+1,{unit:"month"});case"LLL":return e.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(r,{width:"narrow",context:"standalone"});default:return e.month(r,{width:"wide",context:"standalone"})}},w:function(n,t,e,r){const o=Q(n,r);return"wo"===t?e.ordinalNumber(o,{unit:"week"}):X(o,t.length)},I:function(n,t,e){const r=$(n);return"Io"===t?e.ordinalNumber(r,{unit:"week"}):X(r,t.length)},d:function(n,t,e){return"do"===t?e.ordinalNumber(n.getDate(),{unit:"date"}):I.d(n,t)},D:function(n,t,e){const r=N(n);return"Do"===t?e.ordinalNumber(r,{unit:"dayOfYear"}):X(r,t.length)},E:function(n,t,e){const r=n.getDay();switch(t){case"E":case"EE":case"EEE":return e.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(r,{width:"short",context:"formatting"});default:return e.day(r,{width:"wide",context:"formatting"})}},e:function(n,t,e,r){const o=n.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return X(a,2);case"eo":return e.ordinalNumber(a,{unit:"day"});case"eee":return e.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(o,{width:"short",context:"formatting"});default:return e.day(o,{width:"wide",context:"formatting"})}},c:function(n,t,e,r){const o=n.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return X(a,t.length);case"co":return e.ordinalNumber(a,{unit:"day"});case"ccc":return e.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(o,{width:"narrow",context:"standalone"});case"cccccc":return e.day(o,{width:"short",context:"standalone"});default:return e.day(o,{width:"wide",context:"standalone"})}},i:function(n,t,e){const r=n.getDay(),o=0===r?7:r;switch(t){case"i":return String(o);case"ii":return X(o,t.length);case"io":return e.ordinalNumber(o,{unit:"day"});case"iii":return e.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(r,{width:"short",context:"formatting"});default:return e.day(r,{width:"wide",context:"formatting"})}},a:function(n,t,e){const r=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(r,{width:"narrow",context:"formatting"});default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(n,t,e){const r=n.getHours();let o;switch(o=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(o,{width:"narrow",context:"formatting"});default:return e.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(n,t,e){const r=n.getHours();let o;switch(o=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return e.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(o,{width:"narrow",context:"formatting"});default:return e.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(n,t,e){if("ho"===t){let t=n.getHours()%12;return 0===t&&(t=12),e.ordinalNumber(t,{unit:"hour"})}return I.h(n,t)},H:function(n,t,e){return"Ho"===t?e.ordinalNumber(n.getHours(),{unit:"hour"}):I.H(n,t)},K:function(n,t,e){const r=n.getHours()%12;return"Ko"===t?e.ordinalNumber(r,{unit:"hour"}):X(r,t.length)},k:function(n,t,e){let r=n.getHours();return 0===r&&(r=24),"ko"===t?e.ordinalNumber(r,{unit:"hour"}):X(r,t.length)},m:function(n,t,e){return"mo"===t?e.ordinalNumber(n.getMinutes(),{unit:"minute"}):I.m(n,t)},s:function(n,t,e){return"so"===t?e.ordinalNumber(n.getSeconds(),{unit:"second"}):I.s(n,t)},S:function(n,t){return I.S(n,t)},X:function(n,t,e){const r=n.getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return U(r);case"XXXX":case"XX":return K(r);default:return K(r,":")}},x:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"x":return U(r);case"xxxx":case"xx":return K(r);default:return K(r,":")}},O:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+R(r,":");default:return"GMT"+K(r,":")}},z:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+R(r,":");default:return"GMT"+K(r,":")}},t:function(n,t,e){return X(Math.trunc(+n/1e3),t.length)},T:function(n,t,e){return X(+n,t.length)}};function R(n,t=""){const e=n>0?"-":"+",r=Math.abs(n),o=Math.trunc(r/60),a=r%60;return 0===a?e+String(o):e+String(o)+t+X(a,2)}function U(n,t){return n%60==0?(n>0?"-":"+")+X(Math.abs(n)/60,2):K(n,t)}function K(n,t=""){const e=n>0?"-":"+",r=Math.abs(n);return e+X(Math.trunc(r/60),2)+t+X(r%60,2)}const Z=(n,t)=>{switch(n){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},V=(n,t)=>{switch(n){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},_={p:V,P:(n,t)=>{const e=n.match(/(P+)(p+)?/)||[],r=e[1],o=e[2];if(!o)return Z(n,t);let a;switch(r){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;default:a=t.dateTime({width:"full"})}return a.replace("{{date}}",Z(r,t)).replace("{{time}}",V(o,t))}},nn=/^D+$/,tn=/^Y+$/,en=["D","DD","YY","YYYY"];function rn(n){return!(!((t=n)instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t))&&"number"!=typeof n||isNaN(+z(n)));var t}const on=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,an=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,sn=/^'([^]*?)'?$/,cn=/''/g,un=/[a-zA-Z]/;function dn(n,t,e){const r=q(),o=e?.locale??r.locale??M,a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=z(n,e?.in);if(!rn(s))throw new RangeError("Invalid time value");let c=t.match(an).map((n=>{const t=n[0];return"p"===t||"P"===t?(0,_[t])(n,o.formatLong):n})).join("").match(on).map((n=>{if("''"===n)return{isToken:!1,value:"'"};const t=n[0];if("'"===t)return{isToken:!1,value:ln(n)};if(J[t])return{isToken:!0,value:n};if(t.match(un))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:n}}));o.localize.preprocessor&&(c=o.localize.preprocessor(s,c));const u={firstWeekContainsDate:a,weekStartsOn:i,locale:o};return c.map((r=>{if(!r.isToken)return r.value;const a=r.value;return(!e?.useAdditionalWeekYearTokens&&function(n){return tn.test(n)}(a)||!e?.useAdditionalDayOfYearTokens&&function(n){return nn.test(n)}(a))&&function(n,t,e){const r=function(n,t,e){const r="Y"===n[0]?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${r} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(n,t,e);if(console.warn(r),en.includes(n))throw new RangeError(r)}(a,t,String(n)),(0,J[a[0]])(s,a,o.localize,u)})).join("")}function ln(n){const t=n.match(sn);return t?t[1].replace(cn,"'"):n}var pn=e(769);const mn=function(){let n={};const t=e(106);return t.keys().forEach((e=>{n[e.replace("./","")]=t(e)})),n}(),hn=document.querySelectorAll(".unit-temp"),fn=document.querySelectorAll(".unit-amount"),An=document.querySelectorAll(".unit-speed"),gn=document.querySelector(".loader-wrapper"),wn=document.querySelector("output");let yn="Taipei",bn=!0;async function xn(n){gn.classList.contains("hidden")&&gn.classList.remove("hidden"),wn.classList.contains("hidden")||wn.classList.add("hidden");const t=await async function(n,t){const e=await w(function(n,t){return`${A}${n}/next7days?key=${f}&${t?"unitGroup=metric":"unitGroup=us"}`}(n,t));if(null===e)return null;const r=await e.json();console.log("raw data: "),console.log(r);const o=function(n){const{address:t,currentConditions:e,days:r,description:o,timezone:a}=n,i=function(n){const{temp:t,icon:e,feelslike:r,humidity:o,precip:a,precipprob:i,sunrise:s,sunset:c,windspeed:u,conditions:d}=n;return{temp:t,icon:e,feelslike:r,humidity:o,precip:a,precipprob:i,sunrise:s,sunset:c,windspeed:u,conditions:d}}(e),s=function(n){return n.map((n=>{const{tempmax:t,tempmin:e,datetimeEpoch:r,icon:o}=n;return{tempmax:t,tempmin:e,datetimeEpoch:r,icon:o}}))}(r);return{address:t,currentConditions:i,days:s,description:o,timezone:a}}(r);return console.log("cleaned data: "),console.log(o),o}(n,bn),e=await async function(n){const t=await w(function(n){return`${g}searchJSON?q=${n}&maxRows=1&username=jellyrolljunior`}(n));if(null===t)return null;const e=await t.json();return 0===e.totalResultsCount?null:e.geonames[0].countryName}(n);null!==t&&null!==e?(yn=n,document.querySelector(".forecast-card-holder").textContent="",function(n,t){(function(n,t){const e=document.querySelector("h1 > .city"),r=document.querySelector("h1 > .country"),o=document.querySelector("h2 > .date"),a=document.querySelector("h2 > .time");e.textContent=n.address,r.textContent=t;const i=(new Date).toLocaleString("en-US",{timeZone:n.timezone});o.textContent=dn(i,"EEEE, LLLL do, uuuu"),a.textContent=dn(i,"KK:mmaaa")})(n,t),function(n){const t=document.querySelector(".overview > .icon"),e=mn[`${n.currentConditions.icon}.svg`];t.src=void 0!==e?e:pn}(n),function(n){const t=document.querySelector("#temp"),e=document.querySelector("#conditions"),r=document.querySelector("#feels-like");t.textContent=n.currentConditions.temp,e.textContent=n.currentConditions.conditions,r.textContent=n.currentConditions.feelslike}(n),function(n){const t=document.querySelector("#high"),e=document.querySelector("#low");t.textContent=n.days[0].tempmax,e.textContent=n.days[0].tempmin}(n),function(n){const t=document.querySelector("#precip-prob"),e=document.querySelector("#precip"),r=document.querySelector("#humidity"),o=document.querySelector("#sunrise"),a=document.querySelector("#sunset"),i=document.querySelector("#windspeed");t.textContent=n.currentConditions.precipprob,e.textContent=n.currentConditions.precip,r.textContent=n.currentConditions.humidity,o.textContent=n.currentConditions.sunrise,a.textContent=n.currentConditions.sunset,i.textContent=n.currentConditions.windspeed}(n),function(n){const t=document.querySelector(".forecast-card-holder");n.days.forEach(((n,e)=>{0!=e&&t.appendChild(function(n){const t=document.createElement("div");t.classList.add("card");const e=document.createElement("div"),r=document.createElement("img"),o=document.createElement("div");o.appendChild(document.createTextNode(`H: ${Math.round(+n.tempmax)}°`));const a=document.createElement("span");a.className="unit-temp",a.textContent="C",o.appendChild(a),o.appendChild(document.createTextNode(` / L: ${Math.round(+n.tempmin)}°`));const i=a.cloneNode(!0);o.appendChild(i),t.append(e,r,o);const s=1e3*n.datetimeEpoch;return e.textContent=dn(new Date(s),"iiii"),r.src=mn[`${n.icon}.svg`],t}(n))}))}(n)}(t,e)):function(n){alert(`There is no data available for location: ${n}`)}(n),gn.classList.contains("hidden")||gn.classList.add("hidden"),wn.classList.contains("hidden")&&wn.classList.remove("hidden")}!async function(){!function(){const n=document.querySelector("form"),t=document.querySelector("#location");n.addEventListener("submit",(n=>{n.preventDefault();const e=t.value;console.log(e),""===e||(xn(e),t.value="")}))}(),function(){const n=document.querySelector("#unit");n.addEventListener("click",(()=>{bn=!bn,xn(yn),function(n){n?(hn.forEach((n=>{n.textContent="C"})),fn.forEach((n=>{n.textContent="mm"})),An.forEach((n=>{n.textContent="km/h"}))):(hn.forEach((n=>{n.textContent="F"})),fn.forEach((n=>{n.textContent="in"})),An.forEach((n=>{n.textContent="mph"})))}(bn),n.textContent=bn?"Switch to imperial":"Switch to metric"}))}(),xn(yn)}()})()})();
//# sourceMappingURL=main.js.map