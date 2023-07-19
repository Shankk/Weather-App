(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(668),t.b),d=i()(o()),u=s()(l);d.push([n.id,`* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-family: 'Orbitron', sans-serif;\n    \n}\n\nbody {\n    margin: 0px;\n    padding: 0px;\n    width: 100vw;\n    height: 100vh;\n\n    display: flex;\n    flex-flow: column nowrap;\n}\n\n.searchContainer {\n    height: 20%;\n    width: 100%;\n    color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n#locationSearch{\n    all: unset;\n    height: 50%;\n    width: 60%;\n    min-width: 150px;\n    background-color: white;\n    border-radius: 12px;\n    padding-left: 0.5rem;\n    font-size: 1rem;\n}\n#searchButton {\n    all: unset;\n    height: 50%;\n    width: 20%;\n    min-width: 100px;\n    background-color: white;\n    border-radius: 12px;\n    font-size: 1rem;\n    text-align: center;\n}\n\n.main {\n    height: 100%;\n    width: 100%;\n    background-color: skyblue;\n    background-image: url(${u});\n    background-size: cover;\n    display: flex;\n    flex-flow: row nowrap;\n}\n\n.current {\n    height: 100%;\n    width: 30%;\n    min-width: 300px;\n    font-size: 1.5rem;\n    /* border: solid 4px blue;\n    border-radius: 12px; */\n    display: flex;\n    flex-flow: column nowrap;\n}\n\n#temp-c {\n    font-size: 4rem;\n}\n\n.basic , .advanced {\n    width: 100%;\n    height: 50%;\n    color: white;\n    gap: 15px;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    /* border: solid 4px blue;\n    border-radius: 12px; */\n}\n\n.adv-container {\n    width: 90%;\n    display: flex;\n    justify-content: flex-start;\n    gap: 20px;\n}\n\n#current-icon{\n    width: 20%;\n    height: auto;\n}\n\n#daily-icon , #hourly-icon{\n    width: 50%;\n    height: auto;\n}\n\n#adv-icon {\n    max-width: 100%;\n    height: auto;\n}\n\n.content {\n    height: 100%;\n    width: 70%;\n    font-size: 1.5rem;\n    /* border: solid 4px blue;\n    border-radius: 12px; */\n    padding: 1vh 0.5vw;\n    display: flex;\n    flex-flow: column nowrap;\n}\n\n.forecast {\n    height: 50%;\n    width: 100%;\n    font-size: 2rem;\n    font-weight: bolder;\n    /* border: solid 4px blue;\n    border-radius: 12px; */\n    padding: 1vh 0.5vw;\n    display: flex;\n    flex-flow: row nowrap;\n    overflow: auto;\n}\n\n.daily-container , .hourly-container{\n    height: 100%;\n    width: 100%;\n    min-width: 200px;\n    color: white;\n    font-size: 1.5rem;\n    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n    border: solid 1px lightblue;\n    border-radius: 24px;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n}\n\n/* Animations */\n#searchButton:hover {\n    background-color: lightblue;\n    transform: scale(1.1);\n}\n\n/* Scrollbar styles */\n::-webkit-scrollbar {\nwidth: 12px;\nheight: 12px;\n}\n\n::-webkit-scrollbar-track {\nborder: 1px solid lightblue;\nborder-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\nbackground: lightblue;  \nborder-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb:hover {\nbackground: lightblue;  \n}`,""]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},668:(n,e,t)=>{n.exports=t.p+"727ea3172b31fa561383.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(e)}function e(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}var r=t(379),o=t.n(r),a=t(795),i=t.n(a),c=t(569),s=t.n(c),l=t(565),d=t.n(l),u=t(216),p=t.n(u),f=t(589),h=t.n(f),m=t(28),y={};y.styleTagTransform=h(),y.setAttributes=d(),y.insert=s().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=p(),o()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals;const g=document.querySelector("#locationSearch"),b=document.querySelector("#searchButton"),v=document.querySelector("#date"),x=document.querySelector("#temp-c"),w=document.querySelector("#condition"),C=document.querySelector("#current-icon"),S=document.querySelector("#location"),k=document.querySelector("#feels-temp-c"),E=document.querySelector("#humidity"),j=document.querySelector("#chance-rain"),q=document.querySelector("#wind-speed"),_={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"},T={Sunny:"sunny.svg","Partly cloudy":"partly_cloudy_day.svg",Cloudy:"cloudy.svg","Patchy rain possible":"rainyCloud.svg","Moderate rain":"rainyCloud.svg","Heavy rain":"rainyCloud.svg","Moderate rain at times":"rainyCloud.svg",Mist:"foggy.svg",Fog:"foggy.svg",Clear:"clearNight.svg"},M={Clear:"clearNight.svg","Partly cloudy":"partly_cloudy_night.svg"},N=document.querySelector("#dailyForecast"),P=document.querySelector("#hourlyForecast");function z(n){return new Date(n.slice(0,4),n.slice(5,7)-1,n.slice(8,10))}function D(t){const r=function(t){e(1,arguments);var r=function(t){e(1,arguments);var r=Object.prototype.toString.call(t);return t instanceof Date||"object"===n(t)&&"[object Date]"===r?new Date(t.getTime()):"number"==typeof t||"[object Number]"===r?new Date(t):("string"!=typeof t&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}(t);return r.getDay()}(t);return _[r]}function A(n){return(e=n.slice(11,16)).length<5&&(e="0"+e),(e=e.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/)||[e]).length>1&&((e=e.slice(1))[5]=+e[0]<12?" AM":" PM",e[0]=+e[0]%12||12),e.join("");var e}function F(n,e,t,r){const o=document.createElement("div");o.classList.add("daily-container");const a=document.createElement("div");a.id="day-of-week",a.textContent=n;const i=document.createElement("div");i.id="day-temp",i.textContent="High: "+e+"°C";const c=document.createElement("div");c.id="day-feels",c.textContent="Low: "+t+"°C";const s=document.createElement("img");s.id="daily-icon",null!=T[r]?s.src="/src/images/weather/"+T[r]:s.src="/src/images/weather/"+T.Sunny,o.appendChild(a),o.appendChild(i),o.appendChild(c),o.appendChild(s),N.appendChild(o)}function I(n,e,t){const r=document.createElement("div");r.classList.add("hourly-container");const o=document.createElement("div");o.id="hour-of-day",o.textContent=n;const a=document.createElement("div");a.id="hour-temp",a.textContent=e+"°C";const i=document.createElement("img");i.id="hourly-icon",i.src="/src/images/weather/"+T[t],r.appendChild(o),r.appendChild(a),r.appendChild(i),P.appendChild(r)}function L(n,e,t,r){k.textContent=n+"°C",E.textContent=e+"%",j.textContent=t+"%",q.textContent=r+"km/h"}function O(){let n="https://api.weatherapi.com/v1/forecast.json?key=879b15820c1f4c41884224003230507&q="+g.value+"&days=7&aqi=no&alerts=no";fetch(n,{mode:"cors"}).then((function(n){return n.json()})).then((function(n){let e=n.current.temp_c,t=n.current.condition.text,r=n.location.name,o=n.location.region,a=n.location.country,i=n.current.feelslike_c,c=n.current.humidity,s=n.forecast.forecastday[0].day.daily_chance_of_rain,l=n.current.wind_kph;!function(n,e,t,r,o,a,i){v.textContent=n+" "+e,x.textContent=t+"°C",w.textContent=r,S.textContent=o+", "+a+", "+i;let c=null!=T[r]?T[r]:M[r];C.src="/src/images/weather/"+c}(D(z(n.forecast.forecastday[0].date)),A(n.location.localtime),e,t,r,o,a),L(i,c,s,l),function(n){N.textContent="",P.textContent="";for(let e in n)F(D(z(n[e].date)),n[e].day.maxtemp_c,n[e].day.mintemp_c,n[e].day.condition.text);for(let e in n[0].hour)I(A(n[0].hour[e].time),n[0].hour[e].temp_c,n[0].hour[e].condition.text)}(n.forecast.forecastday)})).catch((function(){console.log("Error!, Couldnt Find Data")}))}b.addEventListener("click",(()=>{O()})),O()})()})();