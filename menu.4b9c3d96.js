parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"moGU":[function(require,module,exports) {
"use strict";for(var e=window.location.href,t=document.querySelectorAll(".menu__link"),a=["manager","users","chanels","offers","profile","balance","support"],r=0;r<a.length;r++)e.includes(a[r])&&t[r+1].classList.add("menu__link--active");var s=document.querySelector(".page"),l=document.querySelector(".header__switcher"),c=localStorage.getItem("theme");c&&"dark"===c&&s.classList.add("page--theme-dark"),l.addEventListener("click",function(){s.classList.contains("page--theme-dark")?(s.classList.remove("page--theme-dark"),localStorage.setItem("theme","light")):(s.classList.add("page--theme-dark"),localStorage.setItem("theme","dark"))});
},{}]},{},["moGU"], null)
//# sourceMappingURL=menu.4b9c3d96.js.map