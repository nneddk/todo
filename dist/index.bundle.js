(()=>{"use strict";var n={771:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto+Condensed:wght@700&display=swap);"]),a.push([n.id,"body{\n    margin: 0;\n    font-size: 62.5%;\n}\n\n\n.header{  \n    height: 8vh;\n    display: flex;\n    align-items: center;\n\n    font-family: 'Fredoka One', cursive;\n    background:black;\n    color: lightgray;\n\n    padding-left: 1em;\n\n    font-size: 1.6rem;\n    z-index: 2;\n}\n.to{\n    color:orange;\n}\n.do{\n    color:purple;\n}\n.content{\n    background: lightgrey;\n    height: 92vh;\n\n    display: grid;\n    grid-template-columns: 1fr 10fr;\n}\n#current-content{\n    height:100%;\n}\n.footer{\n    height: 3vh;\n    display: flex;\n    align-items: center;\n\n    font-family: 'Fredoka One', cursive;\n    background:black;\n    color:lightgrey;\n\n    padding-left: 1em;\n    font-size: 1rem;\n    \n}\n#wrapper{\n    background-color: rgb(0, 0, 0, 0.5);\n    position: absolute;\n    height: 92vh;\n    width: 100%;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    z-index: -1;\n}\n\n@media only screen and (max-width: 600px) {\n\n    .content {\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr 10fr;\n    }\n  }",""]);const c=a},181:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"",""]);const c=a},622:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"",""]);const c=a},99:(n,e,t)=>{t.d(e,{Z:()=>C});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),d=t.n(c),s=new URL(t(917),t.b),l=new URL(t(847),t.b),p=new URL(t(467),t.b),u=new URL(t(680),t.b),m=new URL(t(770),t.b),b=new URL(t(248),t.b),g=new URL(t(295),t.b),h=a()(o()),f=d()(s),y=d()(l),v=d()(p),j=d()(u),k=d()(m),w=d()(b),x=d()(g);h.push([n.id,"\n.projects-div{\n    margin: 1rem;\n    height: 80vh;\n    display: grid;\n    grid-template-columns: 1fr 16fr;;\n}\n.add-project-btn{\n    height: 4rem;\n    width: 4rem;\n    justify-self: center;\n    \n    border-radius: 50%;\n    border:none;\n    background-color: lightgray;\n    color:black;\n    font-size: 1rem;\n    font-family: 'Fredoka One', cursive;\n    transition: all 0.3s;\n\n    padding: 0px;\n}\n\n.add-project-btn:hover{\n    background-color: orange;\n    color:lightgrey;\n}\n\n.project-entry-div{\n    width: 80vmin;\n    height: 80vmin;\n    background-image: linear-gradient(orange, purple);\n    display: grid;\n    grid-template-columns: 10fr 0.5fr;\n    grid-template-rows: 1fr 10fr 1.5fr;\n\n    padding: 1.6em;\n\n    row-gap: 1.6em;\n    border-radius: 25px;\n\n    justify-self: center;\n}\n\n.project-entry-title-span{\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n\n    \n    height: 100%;\n\n    border-radius: 9999px;\n\n    background: rgba(0, 0 , 0, 0.2);\n    transition: all 0.3s;\n\n    \n}\n.project-entry-title-span:hover{\n    background: rgba(0, 0 , 0, 0.3);\n}\n\n.project-entry-title{\n    height: 100%;\n    width: 100%;\n\n    outline: none;\n    background: transparent;\n\n    font-family: 'Fredoka One', cursive;\n\n    color: lightgray;\n    font-size: 1.6rem;\n    padding-left: 1em;\n    \n\n    border:none;\n\n}\n.project-entry-close-btn{\n    border-radius: 50%;\n    width: 3rem;\n    height: 3rem;\n\n    background: transparent;\n\n    font-family: 'Fredoka One', cursive;\n    font-size: 0.8rem;\n    color:lightgray;\n\n    border:none;\n\n    transition: all 0.3s;\n}\n.project-entry-close-btn:hover{\n    color: black;\n}\n\n.project-entry-description-span{\n    display:flex;\n    justify-content: space-between;\n    align-items: center;    \n        \n    height: 100%;\n\n\n    border-radius: 25px;\n    background: rgba(0, 0 , 0, 0.2);\n\n    transition: all 0.3s;\n}\n.project-entry-description-span:hover{\n    background: rgba(0, 0 , 0, 0.3);\n}\n.project-entry-description{\n    height: 95%;\n    width: 95%;\n\n    outline: none;\n    background: transparent;\n\n    font-family: 'Fredoka One', cursive;\n    font-size: 0.8rem;\n\n    color:lightgray;\n    align-items:unset;\n    overflow: auto;\n    padding-left: 2em;\n\n    border:none;\n    resize: none;\n}\n\n.project-entry-add-btn{\n    width: 30%;\n    height: 4rem;\n\n\n    align-self: center;\n    justify-self: end;\n\n    border-radius: 9999px;\n    border: none;\n    \n    font-family: 'Fredoka One', cursive;\n    background: orange;\n    color:lightgray;\n\n    font-size: 0.8rem;\n    text-align: center;\n\n    transition: all 0.3s;\n}\n\n.project-entry-add-btn:hover {\n    background-color: lightgray;\n    color: black;\n}\n\n.projects-list{\n    padding-left: 1em;\n    padding-right: 1em;\n    height: 100%;\n    overflow: auto;\n}\n\n.project-tab{\n    width: 90%;\n    height: 4rem;\n    border-radius: 9999px;\n\n    display: grid;\n    grid-template-columns: 10fr 1fr 1fr;\n    margin-bottom: 10px;\n    transition: all 0.3s;\n\n    align-self: center;\n    justify-self: center;\n}\n.project-tab:hover{\n    background-color: rgb(0, 0, 0, 0.2);\n}\n.pinned{\n    position:sticky;\n    bottom: 0;\n    width: 80%;\n    transition: all 0.3s;\n    background-image: linear-gradient(to right, orange, purple);\n}\n\n.pinned> .project-tab-title{\n    color:white;\n}\n.pinned> .project-tab-delete{\n    background-image: url("+f+");\n}\n.pinned> .project-tab-delete:hover{\n    transform: scale(1.1);\n}\n\n.pinned> .project-tab-pin{\n    background-image: url("+y+");\n}\n.pinned> .project-tab-pin:hover{\n    transform: scale(1.1);\n}\n\n.project-tab-title, .view-project-title, .view-project-desc{\n    display:flex;\n    align-items: center;\n    padding-left: 2em;\n    font-size: 1rem;\n    font-family: 'Fredoka One', cursive;\n    color: black;\n\n    transition: all 0.3s;\n}\n.project-tab-delete, .project-tab-pin{\n    width: 3em;\n    height: 3em;\n    border-radius: 50%;\n    background-color: transparent;\n    background-position: center;\n    background-repeat: no-repeat;\n    border:none;\n    align-self: center;\n    transition: all 0.3s;\n    background-size: 60%;\n}\n.project-tab-delete{\n    background-image: url("+v+");\n\n}\n.project-tab-delete:hover{\n    transform: scale(1.1);  \n}\n.project-tab-pin{\n    background-image: url("+j+");\n\n}\n.project-tab-pin:hover{\n    transform: scale(1.1);\n\n}\n.view-project-div{\n    width: 80vmin;\n    height: 80vmin;\n    background-image: linear-gradient(orange, purple);\n    display: grid;\n    grid-template-columns: 10fr 0.5fr;\n    grid-template-rows: 1fr 10fr 1.5fr;\n\n    padding: 1.6em;\n\n    row-gap: 1.6em;\n    border-radius: 25px;\n\n    justify-self: center;\n}\n.view-project-title{\n    height: 100%;\n    color: white;\n    font-size: 1.6rem;\n    padding-left: 1em;\n}\n.view-project-desc{\n    color:white;\n    align-items:unset;\n    overflow: auto;\n    padding-left: 2em;\n}\n.view-project-button-holder{\n    display: flex;\n    align-items: center;\n    justify-content: end;\n\n    gap: 2em;\n}\n.view-project-btn{\n    border-radius: 50%;\n    width: 4rem;\n    height: 4rem;\n\n    background: transparent;\n\n    font-family: 'Fredoka One', cursive;\n    color:lightgray;\n    transition: all 0.3s;\n\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 60%;\n\n    border:none;\n}\n.view-project-btn:hover{\n    transform: scale(1.2);\n}\n.delete-project-button{\n    background-image: url("+k+");\n}\n.edit-project-project{\n    background-image: url("+w+");\n}\n.pin-project-button{\n    background-image: url("+x+");\n}\n@media only screen and (max-width: 600px) {\n    .add-project-btn{\n        height: 2rem;\n        width: 2rem;\n        font-size: 1rem;\n        padding: 0px;\n        margin-left: auto;\n        margin-right: auto;\n    }\n    .project-entry-div{\n        padding: 1em;\n    }\n    .project-entry-close-btn{\n        height: 2rem;\n        width: 2rem;\n        font-size: 1rem;\n        color: lightgray;\n        padding: 0px;\n        margin-left: auto;\n        margin-right: auto;\n    }\n    .project-entry-title{\n        font-size: 0.8rem;\n        \n    }\n    .project-entry-description-span{\n        border-radius: 10px;\n    }\n    .project-entry-description{\n        font-size: 0.8rem;\n        padding-left: 1em;\n        \n        \n    }\n    .project-entry-add-btn{\n\n        background-color: lightgray;\n        color: black;\n        height: 90%;\n        width: 36%;\n        font-size: 0.4rem;\n    }\n    \n    .projects-list{\n        height: 100%;\n        overflow: auto;\n    }\n    .project-tab{\n        height: 2rem;\n    }\n    .project-tab-title, .view-project-title, .view-project-desc{\n        display:flex;\n        height: 100%;\n        text-overflow: ellipsis;\n        align-items: center;\n        padding-left: 1em;\n        font-size: 0.6rem;\n        font-family: 'Fredoka One', cursive;\n        transition: all 0.3s;\n    }\n\n    .project-tab-delete, .project-tab-pin{\n        width: 2rem;\n        height: 2rem;\n        background-size: 50%;\n    }\n\n    .view-project-title{\n        color: white;\n        font-size: 0.8rem;\n        \n    }\n    .view-project-desc{\n        color:white;\n        align-items:unset;\n        overflow: auto;\n        padding-left: 1em;\n    }\n    .view-project-button-holder{\n        display: flex;\n        align-items: center;\n        justify-content: end;\n    \n        gap: 0.5em;\n    }\n    .view-project-btn{\n        background-size: 40%;\n    }\n  }\n",""]);const C=h},584:(n,e,t)=>{t.d(e,{Z:()=>w});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),d=t.n(c),s=new URL(t(682),t.b),l=new URL(t(761),t.b),p=new URL(t(802),t.b),u=new URL(t(808),t.b),m=new URL(t(889),t.b),b=new URL(t(981),t.b),g=a()(o()),h=d()(s),f=d()(l),y=d()(p),v=d()(u),j=d()(m),k=d()(b);g.push([n.id,".sidebar{\n    background-image: linear-gradient(orange, purple);\n    display: flex;\n    flex-direction: column;\n    \n\n\n    align-items: center;\n    padding-top: 1rem;\n    gap:2rem;\n\n}\n.sidebar-btn{\n    border:none;\n    height: 4rem;\n    width: 100%;\n\n    border-bottom-left-radius: 9999px;\n    border-top-left-radius: 9999px;\n    \n    background-position: center;\n    background-repeat: no-repeat;\n\n    transition: all 0.3s;\n    background-color: transparent;\n}\n\n.anim:hover{\n    transform: scale(1.2);\n}\n\n.anim#projects-btn{\n    background-image: url("+h+");\n}\n.anim#checklist-btn{\n    background-image: url("+f+");\n}\n.anim#notes-btn{\n   background-image: url("+y+");\n}\n\n#projects-btn{\n    background-image: url("+v+");\n    background-size: 30%;\n}\n\n#projects-btn:hover{\n    background-image: url("+v+");\n}\n\n#checklist-btn{\n    background-image: url("+j+");\n    background-size: 30%;\n}\n\n#checklist-btn:hover{\n    background-image: url("+j+");\n    background-size: 30%;\n}\n\n#notes-btn{\n    background-image: url("+k+");\n    background-size: 30%;\n\n}\n#notes-btn:hover{\n    background-image: url("+k+");\n}\n@media only screen and (max-width: 600px) {\n    .sidebar {\n      background-image: linear-gradient(to right, orange, purple);\n        justify-content: center;\n        align-items: center;\n        flex-direction: row;\n        padding-top: 0;\n    }\n    .sidebar-btn{\n        border-top-left-radius: 9999px;\n        border-top-right-radius: 9999px;\n        border-bottom-left-radius: 0;\n        height: 100%;\n        width: 4rem;\n    }\n    #projects-btn{\n      background-size: 30%;\n    }\n    \n    #checklist-btn{\n      background-size: 30%;\n    }\n    \n    #notes-btn{\n      background-size: 30%;\n    }\n  }\n\n\n",""]);const w=g},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var b=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:b,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var d=r(n,o),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},889:(n,e,t)=>{n.exports=t.p+"3dad0ae8b21ccf129873.svg"},761:(n,e,t)=>{n.exports=t.p+"bc896d77d6585fc831ac.svg"},467:(n,e,t)=>{n.exports=t.p+"49d438901c30af162242.svg"},917:(n,e,t)=>{n.exports=t.p+"c0a82cd161072d253427.svg"},770:(n,e,t)=>{n.exports=t.p+"094b8bc32f635dff53ee.svg"},248:(n,e,t)=>{n.exports=t.p+"918c184688745660dae9.svg"},981:(n,e,t)=>{n.exports=t.p+"fec3f13b4bce2ae40b66.svg"},802:(n,e,t)=>{n.exports=t.p+"9ea9a2dee0bd8c1c0542.svg"},680:(n,e,t)=>{n.exports=t.p+"fe9b951ef76c655ce195.svg"},847:(n,e,t)=>{n.exports=t.p+"1d497a8983f21a319d65.svg"},295:(n,e,t)=>{n.exports=t.p+"a361390c381a00046045.svg"},808:(n,e,t)=>{n.exports=t.p+"3636949af1961b810fde.svg"},682:(n,e,t)=>{n.exports=t.p+"272af9d0801a5ceaa5cc.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(771),b={};b.styleTagTransform=u(),b.setAttributes=d(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),e()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals;var g=t(584),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;var f=t(99),y={};y.styleTagTransform=u(),y.setAttributes=d(),y.insert=a().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=l(),e()(f.Z,y),f.Z&&f.Z.locals&&f.Z.locals;let v=0,j=[];class k{constructor(n,e,t){this.title=n,this.description=e,this.pinned=t}}function w(){const n=document.createElement("div");n.classList.add("projects-div");const e=document.createElement("div");e.classList.add("projects-list");const t=document.createElement("button");t.classList.add("add-project-btn"),t.setAttribute("type","button"),t.textContent="+",t.onclick=function(){x()},n.appendChild(t),n.appendChild(e),v=0;let r=0;return j=JSON.parse(localStorage.getItem("data")||"[]"),j.forEach((n=>{e.appendChild(C(n.title,r)),r++})),document.querySelectorAll(".pinned"),n}function x(n,e,t){const r=document.getElementById("wrapper");r.style.zIndex="1";const o=document.createElement("div");o.classList.add("project-entry-div");const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("maxlength","64"),i.setAttribute("placeholder","name your new project"),i.classList.add("project-entry-title"),i.value=e||"";const a=document.createElement("span");a.classList.add("project-entry-title-span");const c=document.createElement("button");c.setAttribute("type","button"),c.classList.add("project-entry-close-btn"),c.textContent="x",c.onclick=function(){r.style.zIndex="-1"},a.appendChild(i),o.appendChild(a),o.appendChild(c);const d=document.createElement("textarea");d.setAttribute("rows","10"),d.setAttribute("cols","32"),d.setAttribute("placeholder","add a description"),d.classList.add("project-entry-description"),d.value=t||"";const s=document.createElement("span");if(s.classList.add("project-entry-description-span"),s.appendChild(d),o.appendChild(s),o.appendChild(document.createElement("div")),null==n){const n=document.createElement("button");n.setAttribute("type","button"),n.classList.add("project-entry-add-btn"),n.textContent="add project",n.onclick=function(){let n=j.length;const e=document.querySelector(".projects-list"),t=document.querySelector(".project-entry-title").value,o=document.querySelector(".project-entry-description").value;j.push(new k(t,o)),localStorage.setItem("data",JSON.stringify(j)),e.appendChild(C(t,n)),r.style.zIndex="-1"},o.appendChild(n)}else{const e=document.createElement("button");e.setAttribute("type","button"),e.classList.add("project-entry-add-btn"),e.textContent="edit project",e.onclick=function(){document.querySelectorAll(".project-tab-title")[n].textContent=document.querySelector(".project-entry-title").value,j[n].title=document.querySelector(".project-entry-title").value,j[n].description=document.querySelector(".project-entry-description").value,localStorage.setItem("data",JSON.stringify(j)),r.style.zIndex="-1"},o.appendChild(e)}for(;r.hasChildNodes();)r.removeChild(r.lastChild);r.appendChild(o)}function C(n,e){const t=document.createElement("div");t.classList.add("project-tab"),j[e].pinned&&(t.classList.add("pinned"),t.style.top=v+"%",v+=8);const r=document.createElement("div");r.classList.add("project-tab-title"),r.textContent=n,r.onclick=function(){!function(n){let e=j[n].title,t=j[n].description;const r=document.getElementById("wrapper");r.style.zIndex="1";const o=document.createElement("div");o.classList.add("view-project-div");const i=document.createElement("div");i.classList.add("view-project-title"),i.textContent=e;const a=document.createElement("button");a.setAttribute("type","button"),a.classList.add("project-entry-close-btn"),a.textContent="x",a.onclick=function(){r.style.zIndex="-1"};const c=document.createElement("div");c.classList.add("view-project-desc"),c.textContent=t;const d=document.createElement("div");d.classList.add("view-project-button-holder");const s=document.createElement("button");s.setAttribute("type","button"),s.classList.add("delete-project-button"),s.classList.add("view-project-btn"),s.onclick=function(){L(n),r.style.zIndex="-1"};const l=document.createElement("button");l.setAttribute("type","button"),l.classList.add("edit-project-project"),l.classList.add("view-project-btn"),l.onclick=function(){!function(n,e,t){x(n,e,t),localStorage.setItem("data",JSON.stringify(j))}(n,e,t)};const p=document.createElement("button");for(p.setAttribute("type","button"),p.classList.add("pin-project-button"),p.classList.add("view-project-btn"),p.onclick=function(){A(n),r.style.zIndex="-1"},d.appendChild(s),d.appendChild(l),d.appendChild(p),o.appendChild(i),o.appendChild(a),o.appendChild(c),o.appendChild(document.createElement("div")),o.appendChild(d);r.hasChildNodes();)r.removeChild(r.lastChild);r.appendChild(o)}(e)};const o=document.createElement("button");o.setAttribute("id","button"),o.classList.add("project-tab-delete"),o.onclick=function(){L(e)};const i=document.createElement("button");return i.setAttribute("type","button"),i.classList.add("project-tab-pin"),i.onclick=function(){A(e)},t.appendChild(r),t.appendChild(o),t.appendChild(i),t}function L(n){const e=document.querySelector(".projects-list");if(null!=n){for(j.splice(n,1),localStorage.setItem("data",JSON.stringify(j));e.hasChildNodes();)e.removeChild(e.lastChild);let t=0;v=0,j.forEach((n=>{e.appendChild(C(n.title,t)),t++}))}}let E=0;function A(n){const e=document.querySelectorAll(".project-tab");j[n].pinned?(j[n].pinned=!1,e[n].classList.remove("pinned"),E--):5!=E&&(j[n].pinned=!0,e[n].classList.add("pinned"),E++),localStorage.setItem("data",JSON.stringify(j));const t=document.querySelectorAll(".pinned");null!=t[0]&&(t[0].style.top="0%"),null!=t[1]&&(t[1].style.top="8%"),null!=t[2]&&(t[2].style.top="16%"),null!=t[3]&&(t[3].style.top="24%"),null!=t[4]&&(t[4].style.top="32%")}var z=t(181),S={};S.styleTagTransform=u(),S.setAttributes=d(),S.insert=a().bind(null,"head"),S.domAPI=o(),S.insertStyleElement=l(),e()(z.Z,S),z.Z&&z.Z.locals&&z.Z.locals;var I=t(622),Z={};function O(){const n=document.createElement("div");n.classList.add("sidebar");const e=document.createElement("button");e.setAttribute("type","button"),e.setAttribute("id","projects-btn"),e.classList.add("sidebar-btn"),e.classList.add("anim");const t=document.createElement("button");t.setAttribute("type","button"),t.setAttribute("id","checklist-btn"),t.classList.add("sidebar-btn"),t.classList.add("anim");const r=document.createElement("button");function o(n){e.style.backgroundColor="",e.classList.add("anim"),t.style.backgroundColor="",t.classList.add("anim"),r.style.backgroundColor="",r.classList.add("anim"),n.classList.remove("anim"),n.style.backgroundColor="lightgrey"}return r.setAttribute("type","button"),r.setAttribute("id","notes-btn"),r.classList.add("sidebar-btn"),r.classList.add("anim"),o(e),e.onclick=function(){T(w()),o(this)},t.onclick=function(){T(function(){const n=document.createElement("div");return n.classList.add("checklists-div"),n}()),o(this)},r.onclick=function(){T(function(){const n=document.createElement("div");return n.classList.add("notes-div"),n}()),o(this)},n.appendChild(e),n.appendChild(t),n.appendChild(r),n}function T(n){const e=document.getElementById("current-content");for(;e.hasChildNodes();)e.removeChild(e.lastChild);e.appendChild(n)}Z.styleTagTransform=u(),Z.setAttributes=d(),Z.insert=a().bind(null,"head"),Z.domAPI=o(),Z.insertStyleElement=l(),e()(I.Z,Z),I.Z&&I.Z.locals&&I.Z.locals,document.body.appendChild(function(){const n=document.createElement("div");n.classList.add("header");const e=document.createElement("span");e.classList.add("to"),e.textContent="to";const t=document.createElement("span");return t.classList.add("do"),t.textContent="do",n.appendChild(e),n.appendChild(t),n}()),document.body.appendChild(function(){const n=document.createElement("div");return n.setAttribute("id","wrapper"),n}()),document.body.appendChild(function(){const n=document.createElement("div");n.classList.add("content");const e=document.createElement("div");e.classList.add("main");const t=document.createElement("div");return t.setAttribute("id","current-content"),e.appendChild(t),n.appendChild(O()),n.appendChild(e),n}()),document.body.appendChild(function(){const n=document.createElement("div");return n.classList.add("footer"),n.textContent="nneddk",n}()),T(w())})()})();