(()=>{"use strict";var n={771:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto+Condensed:wght@700&display=swap);"]),a.push([n.id,"body{\n    margin: 0;\n    font-size: 62.5%;\n}\n\n\n.header{  \n    height: 8vh;\n    display: flex;\n    align-items: center;\n\n    font-family: 'Fredoka One', cursive;\n    background:black;\n    color: lightgray;\n\n    padding-left: 1em;\n\n    font-size: 1.6rem;\n    z-index: 2;\n}\n.content{\n    background: lightgrey;\n    height: 92vh;\n\n    display: grid;\n    grid-template-columns: 1fr 10fr;\n}\n#current-content{\n    height:100%;\n}\n.footer{\n    height: 3vh;\n    display: flex;\n    align-items: center;\n\n    font-family: 'Fredoka One', cursive;\n    background:black;\n    color:lightgrey;\n\n    padding-left: 1em;\n    font-size: 1rem;\n    \n}\n#wrapper{\n    background-color: rgb(0, 0, 0, 0.5);\n    position: absolute;\n    height: 92vh;\n    width: 100%;\n    transition: all 0.3;\n\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    z-index: -1;\n\n    transition: all 0.3s;\n}\n\n@media only screen and (max-width: 600px) {\n\n    .content {\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr 10fr;\n    }\n  }",""]);const s=a},756:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,".main{\n\n}",""]);const s=a},295:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"",""]);const s=a},622:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"",""]);const s=a},99:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,".projects-div{\n    margin: 1.5rem;\n    height: 90%;\n}\n.add-project-btn{\n    height: 4rem;\n    width: 4rem;\n    \n    border-radius: 50%;\n    border:none;\n    background-color: lightgray;\n    color:black;\n    font-size: 1.6rem;\n    font-family: 'Fredoka One', cursive;\n    transition: all 0.3s;\n}\n\n.add-project-btn:hover{\n    background-color: orange;\n    color:lightgrey;\n}\n\n.project-entry-div{\n    width: 80vmin;\n    height: 80vmin;\n    background-color: darkslategray;\n    display: grid;\n    grid-template-columns: 10fr 1fr;\n    grid-template-rows: 1fr 10fr 1fr;\n\n    padding: 1.6em;\n    padding-right: 0;\n\n    row-gap: 1.2em;\n    border-radius: 2.5em;\n}\n\n.project-entry-title-span{\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding-left: 1.6em;\n    \n    height: 100%;\n    margin: 1em;\n\n    border-radius: 9999px;\n\n    background: rgb(255, 255, 255, 0.2);\n    transition: all 0.3s;\n}\n.project-entry-title-span:hover{\n    background: rgb(255, 255, 255, 0.5);\n}\n\n.project-entry-title{\n    height: 95%;\n    width: 95%;\n\n    outline: none;\n    background: transparent;\n\n    font-family: 'Fredoka One', cursive;\n    font-size: 1rem;\n    color:lightgrey;\n\n    \n\n    border:none;\n\n}\n.project-entry-close-btn{\n    border-radius: 50%;\n    width: 4rem;\n    height: 4rem;\n\n    background: transparent;\n\n    font-family: 'Fredoka One', cursive;\n    font-size: 1.6rem;\n    color:lightgrey;\n\n    align-self: center;\n    justify-self: center;\n\n    border:none;\n    transition: all 0.3s;\n}\n.project-entry-close-btn:hover{\n    color: orange;\n}\n\n.project-entry-description-span{\n    display:flex;\n    justify-content: space-between;\n    align-items: center;    \n    padding-left: 1.6em;    \n    padding-right: 1.6em; \n        \n    height: 100%;\n    margin: 1em;\n\n    border-radius: 25px;\n    background: rgb(255, 255, 255, 0.2);\n\n    transition: all 0.3s;\n}\n.project-entry-description-span:hover{\n    background: rgb(255, 255, 255, 0.5);\n}\n.project-entry-description{\n    height: 95%;\n    width: 95%;\n\n    outline: none;\n    background: transparent;\n\n    font-family: 'Fredoka One', cursive;\n    font-size: 1rem;\n    color:lightgrey;\n\n    border:none;\n    resize: none;\n}\n\n.project-entry-add-btn{\n    width: 36%;\n    height: 90%;\n\n\n    align-self: center;\n    justify-self: end;\n\n    border-radius: 9999px;\n    border: none;\n    \n    font-family: 'Fredoka One', cursive;\n    background: rgb(255, 255, 255, 0.2);\n    color:lightgray;\n\n    font-size: 1rem;\n\n    transition: all 0.3s;\n}\n\n.project-entry-add-btn:hover{\n    background-color: orange;\n    color: lightgrey;\n}\n\n@media only screen and (max-width: 600px) {\n    .add-project-btn{\n        height: 2rem;\n        width: 2rem;\n        font-size: 1rem;\n    }\n    .project-entry-div{\n        padding: 1em;\n    }\n    .project-entry-close-btn{\n        height: 1em;\n        width: 1em;\n        font-size: 1rem;\n        color: orange;\n    }\n    .project-entry-title{\n        font-size: 0.8rem;\n    }\n    .project-entry-description-span{\n        border-radius: 10px;\n    }\n    .project-entry-description{\n        font-size: 0.8rem;\n        \n    }\n    .project-entry-add-btn{\n\n        background-color: orange;\n        color: lightgrey;\n\n        margin-right: 1em;\n        width: 36%;\n        font-size: 0.4rem;\n    }\n  }",""]);const s=a},584:(n,e,t)=>{t.d(e,{Z:()=>j});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),s=t(667),c=t.n(s),d=new URL(t(894),t.b),l=new URL(t(4),t.b),u=new URL(t(277),t.b),p=new URL(t(5),t.b),m=new URL(t(118),t.b),g=new URL(t(940),t.b),f=a()(o()),h=c()(d),b=c()(l),y=c()(u),v=c()(p),k=c()(m),x=c()(g);f.push([n.id,".sidebar{\n    background-color: orange;\n    display: flex;\n    flex-direction: column;\n    gap: 3em;\n\n\n    align-items: center;\n    padding-top: 1.5rem;\n\n}\n.sidebar-btn{\n    border:none;\n    height: 5em;\n    width: 100%;\n\n    border-bottom-left-radius: 9999px;\n    border-top-left-radius: 9999px;\n    \n    background-position: center;\n    background-repeat: no-repeat;\n\n    transition: all 0.3s;\n    background-color: transparent;\n}\n.anim:hover{\n  transform: scale(1.1);\n}\n#projects-btn{\n    background-image: url("+h+");\n    background-size: 40%;\n    \n  }\n\n#checklist-btn{\n    background-image: url("+b+");\n    background-size: 40%;\n  }\n\n#notes-btn{\n    background-image: url("+y+");\n    background-size: 40%;\n  }\n\n\n@media only screen and (max-width: 600px) {\n    .sidebar {\n        justify-content: center;\n        align-items: center;\n        flex-direction: row;\n        padding-top: 0;\n    }\n    .sidebar-btn{\n        border-top-left-radius: 9999px;\n        border-top-right-radius: 9999px;\n        border-bottom-left-radius: 0;\n        height: 100%;\n        width: 4rem;\n    }\n    #projects-btn{\n        background-image: url("+v+");\n      }\n    \n    #checklist-btn{\n        background-image: url("+k+");\n      }\n    \n    #notes-btn{\n        background-image: url("+x+");\n      }\n  }\n\n\n",""]);const j=f},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var g=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},118:(n,e,t)=>{n.exports=t.p+"41d12f65a3e8bc7f6c62.svg"},4:(n,e,t)=>{n.exports=t.p+"3dad0ae8b21ccf129873.svg"},940:(n,e,t)=>{n.exports=t.p+"44f576873f3dc7ee9da6.svg"},277:(n,e,t)=>{n.exports=t.p+"fec3f13b4bce2ae40b66.svg"},5:(n,e,t)=>{n.exports=t.p+"aabfedddd9fef81b56c0.svg"},894:(n,e,t)=>{n.exports=t.p+"3636949af1961b810fde.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(771),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var f=t(584),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var b=t(756),y={};function v(n){const e=document.getElementById("current-content");for(;e.hasChildNodes();)e.removeChild(e.lastChild);e.appendChild(n)}y.styleTagTransform=p(),y.setAttributes=c(),y.insert=a().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=l(),e()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;var k=t(99),x={};function j(){const n=document.createElement("div");n.classList.add("projects-div");const e=document.createElement("div");e.classList.add("projects-list");const t=document.createElement("button");return t.classList.add("add-project-btn"),t.setAttribute("type","button"),t.textContent="+",t.onclick=function(){!function(){const n=document.getElementById("wrapper");n.style.zIndex="1";const e=document.createElement("div");e.classList.add("project-entry-div");const t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("maxlength","28"),t.setAttribute("placeholder","Name your new project"),t.classList.add("project-entry-title");const r=document.createElement("span");r.classList.add("project-entry-title-span");const o=document.createElement("button");o.setAttribute("type","button"),o.classList.add("project-entry-close-btn"),o.textContent="x",o.onclick=function(){n.style.zIndex="-1"},r.appendChild(t),e.appendChild(r),e.appendChild(o);const i=document.createElement("textarea");i.setAttribute("rows","10"),i.setAttribute("cols","32"),i.setAttribute("maxlength","310"),i.setAttribute("placeholder","Project Description"),i.classList.add("project-entry-description");const a=document.createElement("span");a.classList.add("project-entry-description-span"),a.appendChild(i),e.appendChild(a),e.appendChild(document.createElement("div"));const s=document.createElement("button");for(s.setAttribute("type","button"),s.classList.add("project-entry-add-btn"),s.textContent="Add project",s.onclick=function(){const e=document.querySelector(".project-entry-title").value,t=document.querySelector(".project-entry-description").value;w.push(new C(e,t)),console.log(w),n.style.zIndex="-1"},e.appendChild(s);n.hasChildNodes();)n.removeChild(n.lastChild);n.appendChild(e)}()},n.appendChild(t),n.appendChild(e),n}x.styleTagTransform=p(),x.setAttributes=c(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=l(),e()(k.Z,x),k.Z&&k.Z.locals&&k.Z.locals;let w=[];class C{constructor(n,e){this.title=n,this.description=e}}var E=t(295),Z={};Z.styleTagTransform=p(),Z.setAttributes=c(),Z.insert=a().bind(null,"head"),Z.domAPI=o(),Z.insertStyleElement=l(),e()(E.Z,Z),E.Z&&E.Z.locals&&E.Z.locals;var A=t(622),L={};L.styleTagTransform=p(),L.setAttributes=c(),L.insert=a().bind(null,"head"),L.domAPI=o(),L.insertStyleElement=l(),e()(A.Z,L),A.Z&&A.Z.locals&&A.Z.locals,function(){const n=document.getElementById("projects-btn"),e=document.getElementById("checklist-btn"),t=document.getElementById("notes-btn");function r(r){n.style.backgroundColor="",n.classList.add("anim"),e.style.backgroundColor="",e.classList.add("anim"),t.style.backgroundColor="",t.classList.add("anim"),r.classList.remove("anim"),r.style.backgroundColor="lightgrey"}v(j()),r(n),n.onclick=function(){v(j()),r(this)},e.onclick=function(){v(function(){const n=document.createElement("div");return n.classList.add("checklists-div"),n}()),r(this)},t.onclick=function(){v(function(){const n=document.createElement("div");return n.classList.add("notes-div"),n}()),r(this)}}()})()})();