(()=>{"use strict";var n={771:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto+Condensed:wght@700&display=swap);"]),a.push([n.id,"body{\n    margin: 0;\n    font-size: 62.5%;\n}\n\n\n.header{  \n    height: 8vh;\n    display: flex;\n    align-items: center;\n\n    font-family: 'Fredoka One', cursive;\n    background:black;\n    color: lightgray;\n\n    padding-left: 1em;\n\n    font-size: 1.6rem;\n    z-index: 2;\n}\n.content{\n    background: lightgrey;\n    height: 92vh;\n\n    display: grid;\n    grid-template-columns: 1fr 10fr;\n}\n#current-content{\n    height:100%;\n}\n.footer{\n    height: 3vh;\n    display: flex;\n    align-items: center;\n\n    font-family: 'Fredoka One', cursive;\n    background:black;\n    color:lightgrey;\n\n    padding-left: 1em;\n    font-size: 1rem;\n    \n}\n#wrapper{\n    background-color: rgb(0, 0, 0, 0.5);\n    position: absolute;\n    height: 92vh;\n    width: 100%;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    z-index: -1;\n}\n\n@media only screen and (max-width: 600px) {\n\n    .content {\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr 10fr;\n    }\n  }",""]);const c=a},756:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,".main{\n\n}",""]);const c=a},295:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"",""]);const c=a},622:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"",""]);const c=a},99:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"\n\n.projects-div{\n    margin: 1.5rem;\n    height: 80vh;\n    display: grid;\n    grid-template-columns: 1fr 16fr;;\n}\n.add-project-btn{\n    height: 4rem;\n    width: 4rem;\n    \n    border-radius: 50%;\n    border:none;\n    background-color: lightgray;\n    color:black;\n    font-size: 1.6rem;\n    font-family: 'Fredoka One', cursive;\n    transition: all 0.3s;\n\n    padding: 0px;\n}\n\n.add-project-btn:hover{\n    background-color: orange;\n    color:lightgrey;\n}\n\n.project-entry-div{\n    width: 80vmin;\n    height: 80vmin;\n    background-image: linear-gradient(orange, purple);\n    display: grid;\n    grid-template-columns: 10fr 1fr;\n    grid-template-rows: 1fr 10fr 1fr;\n\n    padding: 1.6em;\n    padding-right: 0;\n\n    row-gap: 1.6em;\n    border-radius: 2.5em;\n}\n\n.project-entry-title-span{\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding-left: 1.6em;\n    \n    height: 100%;\n\n    border-radius: 9999px;\n\n    background: rgba(255, 255, 255, 0.2);\n    transition: all 0.3s;\n}\n.project-entry-title-span:hover{\n    background: rgba(255, 255, 255, 0.5);\n}\n\n.project-entry-title{\n    height: 95%;\n    width: 95%;\n\n    outline: none;\n    background: transparent;\n\n    font-family: 'Fredoka One', cursive;\n    font-size: 1rem;\n    color:black;\n\n    \n\n    border:none;\n\n}\n.project-entry-close-btn{\n    border-radius: 50%;\n    width: 4rem;\n    height: 4rem;\n\n    background: transparent;\n\n    font-family: 'Fredoka One', cursive;\n    font-size: 1.6rem;\n    color:lightgray;\n\n\n    border:none;\n    transition: all 0.3s;\n}\n.project-entry-close-btn:hover{\n    color: black;\n}\n\n.project-entry-description-span{\n    display:flex;\n    justify-content: space-between;\n    align-items: center;    \n    padding-left: 1.6em;    \n    padding-right: 1.6em; \n        \n    height: 100%;\n\n\n    border-radius: 25px;\n    background: rgba(255, 255, 255, 0.2);\n\n    transition: all 0.3s;\n}\n.project-entry-description-span:hover{\n    background: rgba(255, 255, 255, 0.5);\n}\n.project-entry-description{\n    height: 95%;\n    width: 95%;\n\n    outline: none;\n    background: transparent;\n\n    font-family: 'Fredoka One', cursive;\n    font-size: 1rem;\n    color:black;\n\n    border:none;\n    resize: none;\n}\n\n.project-entry-add-btn{\n    width: 36%;\n    height: 90%;\n\n\n    align-self: center;\n    justify-self: end;\n\n    border-radius: 9999px;\n    border: none;\n    \n    font-family: 'Fredoka One', cursive;\n    background: orange;\n    color:lightgray;\n\n    font-size: 1rem;\n    text-align: center;\n\n    transition: all 0.3s;\n}\n\n.project-entry-add-btn:hover {\n    background-color: lightgray;\n    color: black;\n}\n*{\n    border:solid;\n}\n\n.projects-list{\n    border: solid blue;\n    padding: 1em;\n    height: 100%;\n    overflow: auto;\n}\n\n.project-tab{\n    width: 100%;\n    height: 4em;\n\n    display: grid;\n    grid-template-columns: 8fr 0.5fr 0.5fr;\n    margin-bottom: 10px;\n}\n.pinned{\n    position: sticky;\n    width: 50%;\n    background-color: blue;\n}\n\n.project-tab-title{\n    display:flex;\n    align-items: center;\n    padding-left: 1em;\n    font-size: 0.8rem;\n    font-family: 'Fredoka One', cursive;\n    color: black;\n}\n.project-tab-delete, .project-tab-pin{\n    width: 3em;\n    height: 3em;\n    border-radius: 50%;\n}\n.project-tab-delete{\n    color:blue;\n}\n\n.project-tab-pin{\n    color:red;\n}\n\n\n@media only screen and (max-width: 600px) {\n    .add-project-btn{\n        height: 2rem;\n        width: 2rem;\n        font-size: 1rem;\n        padding: 0px;\n        margin-left: auto;\n        margin-right: auto;\n    }\n    .project-entry-div{\n        padding: 1em;\n    }\n    .project-entry-close-btn{\n        height: 2rem;\n        width: 2rem;\n        font-size: 1rem;\n        color: lightgray;\n        padding: 0px;\n        margin-left: auto;\n        margin-right: auto;\n    }\n    .project-entry-title{\n        font-size: 0.8rem;\n    }\n    .project-entry-description-span{\n        border-radius: 10px;\n    }\n    .project-entry-description{\n        font-size: 0.8rem;\n        \n    }\n    .project-entry-add-btn{\n\n        background-color: lightgray;\n        color: black;\n        height: 90%;\n        width: 36%;\n        font-size: 0.4rem;\n    }\n  }\n",""]);const c=a},584:(n,e,t)=>{t.d(e,{Z:()=>k});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),d=t.n(c),s=new URL(t(808),t.b),l=new URL(t(682),t.b),p=new URL(t(889),t.b),u=new URL(t(761),t.b),m=new URL(t(981),t.b),h=new URL(t(802),t.b),b=a()(o()),g=d()(s),f=d()(l),y=d()(p),v=d()(u),x=d()(m),j=d()(h);b.push([n.id,".sidebar{\n    background-image: linear-gradient(orange, purple);\n    display: flex;\n    flex-direction: column;\n    gap: 3em;\n\n\n    align-items: center;\n    padding-top: 1.5rem;\n\n}\n.sidebar-btn{\n    border:none;\n    height: 3em;\n    width: 100%;\n\n    border-bottom-left-radius: 9999px;\n    border-top-left-radius: 9999px;\n    \n    background-position: center;\n    background-repeat: no-repeat;\n\n    transition: all 0.3s;\n    background-color: transparent;\n}\n\n.anim:hover{\n  transform: scale(1.1);\n}\n#projects-btn{\n    background-image: url("+g+");\n    background-size: 30%;\n    \n}\n\n#projects-btn:hover{\n  background-image: url("+f+");\n}\n\n#checklist-btn{\n    background-image: url("+y+");\n    background-size: 30%;\n  }\n#checklist-btn:hover{\n  background-image: url("+v+");\n}\n\n#notes-btn{\n    background-image: url("+x+");\n    background-size: 30%;\n  }\n#notes-btn:hover{\n  background-image: url("+j+");\n}\n\n\n@media only screen and (max-width: 600px) {\n    .sidebar {\n      background-image: linear-gradient(to right, orange, purple);\n        justify-content: center;\n        align-items: center;\n        flex-direction: row;\n        padding-top: 0;\n    }\n    .sidebar-btn{\n        border-top-left-radius: 9999px;\n        border-top-right-radius: 9999px;\n        border-bottom-left-radius: 0;\n        height: 100%;\n        width: 4rem;\n    }\n    #projects-btn{\n      background-size: 30%;\n    }\n    \n    #checklist-btn{\n      background-size: 30%;\n    }\n    \n    #notes-btn{\n      background-size: 30%;\n    }\n  }\n\n\n",""]);const k=b},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var d=r(n,o),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},889:(n,e,t)=>{n.exports=t.p+"3dad0ae8b21ccf129873.svg"},761:(n,e,t)=>{n.exports=t.p+"bc896d77d6585fc831ac.svg"},981:(n,e,t)=>{n.exports=t.p+"fec3f13b4bce2ae40b66.svg"},802:(n,e,t)=>{n.exports=t.p+"9ea9a2dee0bd8c1c0542.svg"},808:(n,e,t)=>{n.exports=t.p+"3636949af1961b810fde.svg"},682:(n,e,t)=>{n.exports=t.p+"272af9d0801a5ceaa5cc.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(771),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var b=t(584),g={};g.styleTagTransform=u(),g.setAttributes=d(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),e()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;var f=t(756),y={};function v(n){const e=document.getElementById("current-content");for(;e.hasChildNodes();)e.removeChild(e.lastChild);e.appendChild(n)}y.styleTagTransform=u(),y.setAttributes=d(),y.insert=a().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=l(),e()(f.Z,y),f.Z&&f.Z.locals&&f.Z.locals;var x=t(99),j={};j.styleTagTransform=u(),j.setAttributes=d(),j.insert=a().bind(null,"head"),j.domAPI=o(),j.insertStyleElement=l(),e()(x.Z,j),x.Z&&x.Z.locals&&x.Z.locals;let k=0,C=[];class w{constructor(n,e,t){this.title=n,this.description=e,this.pinned=t}}for(let n=0;n<20;n++)n%2==0?C.push(new w("ogga","bogga")):C.push(new w("nuga","suga"));function E(){const n=document.createElement("div");n.classList.add("projects-div");const e=document.createElement("div");e.classList.add("projects-list");const t=document.createElement("button");t.classList.add("add-project-btn"),t.setAttribute("type","button"),t.textContent="+",t.onclick=function(){L()},n.appendChild(t),n.appendChild(e),k=0;let r=0;return C.forEach((n=>{e.appendChild(A(n.title,r)),r++})),document.querySelectorAll(".pinned"),n}function L(n,e,t){const r=document.getElementById("wrapper");r.style.zIndex="1";const o=document.createElement("div");o.classList.add("project-entry-div");const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("maxlength","28"),i.setAttribute("placeholder","name your new project"),i.classList.add("project-entry-title"),i.value=e||"";const a=document.createElement("span");a.classList.add("project-entry-title-span");const c=document.createElement("button");c.setAttribute("type","button"),c.classList.add("project-entry-close-btn"),c.textContent="x",c.onclick=function(){r.style.zIndex="-1"},a.appendChild(i),o.appendChild(a),o.appendChild(c);const d=document.createElement("textarea");d.setAttribute("rows","10"),d.setAttribute("cols","32"),d.setAttribute("maxlength","310"),d.setAttribute("placeholder","add a description"),d.classList.add("project-entry-description"),d.value=t||"";const s=document.createElement("span");if(s.classList.add("project-entry-description-span"),s.appendChild(d),o.appendChild(s),o.appendChild(document.createElement("div")),null==n){const n=document.createElement("button");n.setAttribute("type","button"),n.classList.add("project-entry-add-btn"),n.textContent="add project",n.onclick=function(){let n=C.length;const e=document.querySelector(".projects-list"),t=document.querySelector(".project-entry-title").value,o=document.querySelector(".project-entry-description").value;C.push(new w(t,o)),e.appendChild(A(t,n)),r.style.zIndex="-1"},o.appendChild(n)}else{const e=document.createElement("button");e.setAttribute("type","button"),e.classList.add("project-entry-add-btn"),e.textContent="edit project",e.onclick=function(){document.querySelector(".project-tab-title").textContent=document.querySelector(".project-entry-title").value,C[n].title=document.querySelector(".project-entry-title").value,C[n].description=document.querySelector(".project-entry-description").value,r.style.zIndex="-1"},o.appendChild(e)}for(;r.hasChildNodes();)r.removeChild(r.lastChild);r.appendChild(o)}function A(n,e){const t=document.createElement("div");t.classList.add("project-tab"),C[e].pinned&&(t.classList.add("pinned"),t.style.top=k+"%",k+=8);const r=document.createElement("div");r.classList.add("project-tab-title"),r.textContent=n,r.onclick=function(){!function(n){let e=C[n].title,t=C[n].description;const r=document.getElementById("wrapper");r.style.zIndex="1";const o=document.createElement("div");o.classList.add("project-entry-div");const i=document.createElement("div");i.classList.add("view-project-title"),i.textContent=e;const a=document.createElement("button");a.setAttribute("type","button"),a.classList.add("project-entry-close-btn"),a.textContent="x",a.onclick=function(){r.style.zIndex="-1"};const c=document.createElement("div");c.classList.add("view-project-desc"),c.textContent=t;const d=document.createElement("div");d.classList.add("view-project-button-holder");const s=document.createElement("button");s.setAttribute("type","button"),s.classList.add("delete-project-button"),s.textContent="delete",s.onclick=function(){z(n),r.style.zIndex="-1"};const l=document.createElement("button");l.setAttribute("type","button"),l.classList.add("edit-project-project"),l.textContent="edit",l.onclick=function(){!function(n,e,t){L(n,e,t)}(n,e,t)};const p=document.createElement("button");for(p.setAttribute("type","button"),p.classList.add("pin-project-button"),p.textContent="pin",p.onclick=function(){S(n),r.style.zIndex="-1"},d.appendChild(s),d.appendChild(l),d.appendChild(p),o.appendChild(i),o.appendChild(a),o.appendChild(c),o.appendChild(document.createElement("div")),o.appendChild(d);r.hasChildNodes();)r.removeChild(r.lastChild);r.appendChild(o)}(e)};const o=document.createElement("button");o.setAttribute("id","button"),o.classList.add("project-tab-delete"),o.textContent="delete",o.onclick=function(){z(e)};const i=document.createElement("button");return i.setAttribute("type","button"),i.classList.add("project-tab-pin"),i.textContent="pin",i.onclick=function(){S(e)},t.appendChild(r),t.appendChild(o),t.appendChild(i),t}function z(n){const e=document.querySelector(".added-projects");if(null!=n){for(C.splice(n,1);e.hasChildNodes();)e.removeChild(e.lastChild);let t=0;C.forEach((n=>{e.appendChild(A(n.title,t)),t++}))}}let Z=0;function S(n){const e=document.querySelectorAll(".project-tab");C[n].pinned?(C[n].pinned=!1,e[n].classList.remove("pinned"),Z--):5!=Z&&(C[n].pinned=!0,e[n].classList.add("pinned"),Z++);const t=document.querySelectorAll(".pinned");null!=t[0]&&(t[0].style.top="0%"),null!=t[1]&&(t[1].style.top="8%"),null!=t[2]&&(t[2].style.top="16%"),null!=t[3]&&(t[3].style.top="24%"),null!=t[4]&&(t[4].style.top="32%")}var I=t(295),T={};T.styleTagTransform=u(),T.setAttributes=d(),T.insert=a().bind(null,"head"),T.domAPI=o(),T.insertStyleElement=l(),e()(I.Z,T),I.Z&&I.Z.locals&&I.Z.locals;var O=t(622),q={};q.styleTagTransform=u(),q.setAttributes=d(),q.insert=a().bind(null,"head"),q.domAPI=o(),q.insertStyleElement=l(),e()(O.Z,q),O.Z&&O.Z.locals&&O.Z.locals,function(){const n=document.getElementById("projects-btn"),e=document.getElementById("checklist-btn"),t=document.getElementById("notes-btn");function r(r){n.style.backgroundColor="",n.classList.add("anim"),e.style.backgroundColor="",e.classList.add("anim"),t.style.backgroundColor="",t.classList.add("anim"),r.classList.remove("anim"),r.style.backgroundColor="lightgrey"}v(E()),r(n),n.onclick=function(){v(E()),r(this)},e.onclick=function(){v(function(){const n=document.createElement("div");return n.classList.add("checklists-div"),n}()),r(this)},t.onclick=function(){v(function(){const n=document.createElement("div");return n.classList.add("notes-div"),n}()),r(this)}}()})()})();