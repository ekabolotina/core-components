(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1397:function(n,r,o){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}o(2),o(9),o(13),o(52),o(10),o(18),o(53),o(23),o(7),o(25),o(11),o(12),Object.defineProperty(r,"__esModule",{value:!0}),r.THEMES=r.ADDON_ID=void 0,o(1398);var e=f(o(0)),i=f(o(81)),a=o(98),c=o(60),l=o(28);function u(){if("function"!=typeof WeakMap)return null;var n=new WeakMap;return u=function(){return n},n}function f(n){if(n&&n.__esModule)return n;if(null===n||"object"!==t(n)&&"function"!=typeof n)return{default:n};var r=u();if(r&&r.has(n))return r.get(n);var o={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var a=e?Object.getOwnPropertyDescriptor(n,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=n[i]}return o.default=n,r&&r.set(n,o),o}function d(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var o=[],t=!0,e=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(t=(a=c.next()).done)&&(o.push(a.value),!r||o.length!==r);t=!0);}catch(n){e=!0,i=n}finally{try{t||null==c.return||c.return()}finally{if(e)throw i}}return o}(n,r)||function(n,r){if(!n)return;if("string"==typeof n)return p(n,r);var o=Object.prototype.toString.call(n).slice(8,-1);"Object"===o&&n.constructor&&(o=n.constructor.name);if("Map"===o||"Set"===o)return Array.from(n);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return p(n,r)}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(n,r){(null==r||r>n.length)&&(r=n.length);for(var o=0,t=Array(r);o<r;o++)t[o]=n[o];return t}r.ADDON_ID="theme-switcher";var s=["default","click"];r.THEMES=s;var m=function(){var n,r,o,t=d((0,e.useState)("default"),2),i=t[0],u=t[1],f=(0,a.useChannel)((n={},r=c.STORY_RENDERED,o=function(){return f("".concat("theme-switcher","/theme"),i)},r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n)),p=(0,e.useCallback)((function(n){u(n.target.value),f("".concat("theme-switcher","/theme"),n.target.value)}),[]);return e.default.createElement("div",{className:"tool"},e.default.createElement(l.Form.Select,{size:1,onChange:p,className:"select"},s.map((function(n){return e.default.createElement("option",{value:n,key:n},"Тема: ",n)}))))};m.displayName="Addon";var b=e.default.createElement(m,null);i.default.register("theme-switcher",(function(){i.default.add("theme-switcher",{type:i.types.TOOL,match:function(n){return"story"===n.viewMode},render:function(){return b}})}))},1398:function(n,r,o){var t=o(1399),e=o(1400);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[n.i,e,""]]);var i={insert:"head",singleton:!1},a=(t(e,i),e.locals?e.locals:{});n.exports=a},1400:function(n,r,o){var t=o(123),e=o(1401);(r=t(!1)).i(e),r.push([n.i,".tool {\n    margin-top: auto;\n    margin-bottom: auto;\n}\n\n.select {\n    background: red;\n}\n\n.click {\n    @mixin theme-click;\n}\n",""]),n.exports=r},1401:function(n,r,o){var t=o(123),e=o(1402),i=o(1403),a=o(1404),c=o(1405);(r=t(!1)).i(e),r.i(i),r.i(a),r.i(c),r.push([n.i,"@define-mixin theme-click {\n    @mixin amount-click;\n    @mixin form-control-click;\n    @mixin pure-input-click;\n    @mixin button-click;\n}\n",""]),n.exports=r},1402:function(n,r,o){(r=o(123)(!1)).push([n.i,"@define-mixin amount-click {\n    --amount-major-part-font-weight: bold;\n    --amount-minor-part-font-weight: normal;\n}\n",""]),n.exports=r},1403:function(n,r,o){(r=o(123)(!1)).push([n.i,"@define-mixin form-control-click {\n    /* core vars */\n    --color-dark-indigo-07-flat: #eeeff1;\n    --gap-s: 12px;\n    --gap-m: 16px;\n\n    /* base */\n    --form-control-border-radius: 4px;\n    --form-control-border-bottom: 0;\n    --form-control-bg-color: var(--color-dark-indigo-07-flat);\n\n    /* paddings */\n    --form-control-paddings: 0 var(--gap-s);\n    --form-control-l-paddings: 0 var(--gap-m);\n    --form-control-labeled-s-paddings: 23px var(--gap-s) 5px;\n    --form-control-labeled-m-paddings: 28px var(--gap-s) 8px;\n    --form-control-labeled-l-paddings: 34px var(--gap-m) 14px;\n\n    /* disabled */\n    --form-control-disabled-border-bottom: 0;\n    --form-control-disabled-bg-color: var(--color-dark-indigo-07-flat);\n\n    /* focus */\n    --form-control-focus-shadow: none;\n    --form-control-focus-border-bottom: 0;\n    --form-control-hover-bg-color: var(--color-dark-indigo-07-flat);\n\n    /* error */\n    --form-control-error-shadow: inset 0 0 0 1px var(--form-control-error-color);\n    --form-control-error-border-bottom: 0;\n    --form-control-error-icon-display: none;\n}\n",""]),n.exports=r},1404:function(n,r,o){(r=o(123)(!1)).push([n.i,"@define-mixin pure-input-click {\n    /* core vars */\n    --color-dark-indigo-07-flat: #eeeff1;\n    --gap-s: 12px;\n    --gap-m: 16px;\n\n    /* base */\n    --pure-input-border-radius: 4px;\n    --pure-input-border-bottom: 0;\n    --pure-input-bg-color: var(--color-dark-indigo-07-flat);\n\n    /* paddings */\n    --pure-input-paddings: 0 var(--gap-s);\n    --pure-input-l-paddings: 0 var(--gap-m);\n\n    /* disabled */\n    --pure-input-disabled-border-bottom: 0;\n    --pure-input-disabled-bg-color: var(--color-dark-indigo-07-flat);\n\n    /* focus */\n    --pure-input-focus-shadow: none;\n    --pure-input-focus-border-bottom: 0;\n    --pure-input-hover-bg-color: var(--color-dark-indigo-07-flat);\n}\n",""]),n.exports=r},1405:function(n,r,o){(r=o(123)(!1)).push([n.i,"@define-mixin button-click {\n    /* core vars */\n    --color-red-brand: #ef3124;\n    --color-red-dark: #d91d0b;\n\n    /* ghost */\n    --button-ghost-hover-color: var(--color-red-brand);\n    --button-ghost-active-color: var(--color-red-dark);\n}\n",""]),n.exports=r},470:function(n,r,o){o(471),o(614),o(1260),o(1365),o(1367),n.exports=o(1397)},533:function(n,r){}},[[470,1,2]]]);