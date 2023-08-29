(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,"body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #f2f2f2;\n}\n\n/* Header */\n\n.header {\n    background-color: #3498db;\n    color: #fff;\n    text-align: center;\n    padding: 20px;\n}\n\n.header h1 {\n    margin: 2px 0 0 0;\n}\n\n/* Main */\n\n.main {\n    max-width: 700px;\n    height: 400px;\n    margin: 0 auto;\n    padding: 20px;\n    background-color: #fff;\n    border-radius: 5px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.form {\n    text-align: center;\n}\n\n.form input, button {\n    padding: 5px;\n}\n\n.main .btn:hover {\n    cursor: pointer;\n}\n\n/* Result */\n\n.result {\n    text-align: center;\n    margin: 20px 0 0 0;\n}\n\n.add-on {\n    background: rgba(220, 150, 37, 0.2);\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: 3px 5px rgba(0, 0, 0, 0.2);\n\n}\n\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],d=o[u]||0,p="".concat(u," ").concat(d);o[u]=d+1;var l=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var m=a(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),u=0;u<o.length;u++){var d=t(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),u=t(216),d=t.n(u),p=t(589),l=t.n(p),f=t(426),m={};m.styleTagTransform=l(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=function(n){if(!n)return;document.getElementById("result").classList.add("add-on");const e=document.getElementById("name"),t=document.getElementById("temp"),r=document.getElementById("humidity");e.textContent=n.name,t.textContent="Temperature : "+n.temperature+"°C",r.textContent="Humidity : "+n.humidity+"°C"},h=async function(n){const e=await fetch(`https://api.weatherapi.com/v1/current.json?key=52d1cc138f9f45f3b48195438230908&q=${n}&aqi=no`,{mode:"cors"});try{const n=e.json(),o=await n,i=o.current.temp_c,c=o.location.name,s=(t=c,r=i,a=o.current.humidity,{name:t,temperature:r,humidity:a});return v(s),s}catch(n){return alert(n),null}var t,r,a},y=document.getElementById("search"),g=document.getElementById("searchInput"),x=document.getElementById("searchBtn");y.addEventListener("submit",(n=>{n.preventDefault()})),x.addEventListener("click",(async()=>{""!==g.value&&await h(g.value)}))})()})();