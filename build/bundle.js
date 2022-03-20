var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function l(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}const s="undefined"!=typeof window;let u=s?()=>window.performance.now():()=>Date.now(),a=s?t=>requestAnimationFrame(t):t;const f=new Set;function d(t){f.forEach((n=>{n.c(t)||(f.delete(n),n.f())})),0!==f.size&&a(d)}function p(t,n){t.appendChild(n)}function m(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function h(t){const n=y("style");return function(t,n){p(t.head||t,n)}(m(t),n),n.sheet}function $(t,n,e){t.insertBefore(n,e||null)}function g(t){t.parentNode.removeChild(t)}function w(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function y(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function x(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}const _=new Map;let b,k=0;function E(t,n,e,o,r,l,c,i=0){const s=16.666/o;let u="{\n";for(let t=0;t<=1;t+=s){const o=n+(e-n)*l(t);u+=100*t+`%{${c(o,1-o)}}\n`}const a=u+`100% {${c(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${i}`,d=m(t),{stylesheet:p,rules:$}=_.get(d)||function(t,n){const e={stylesheet:h(n),rules:{}};return _.set(t,e),e}(d,t);$[f]||($[f]=!0,p.insertRule(`@keyframes ${f} ${a}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${o}ms linear ${r}ms 1 both`,k+=1,f}function C(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),k-=r,k||a((()=>{k||(_.forEach((t=>{const{stylesheet:n}=t;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.rules={}})),_.clear())})))}function A(t){b=t}const j=[],L=[],N=[],R=[],S=Promise.resolve();let O=!1;function B(t){N.push(t)}const M=new Set;let P,T=0;function z(){const t=b;do{for(;T<j.length;){const t=j[T];T++,A(t),D(t.$$)}for(A(null),j.length=0,T=0;L.length;)L.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];M.has(n)||(M.add(n),n())}N.length=0}while(j.length);for(;R.length;)R.pop()();O=!1,M.clear(),A(t)}function D(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(B)}}function q(t,n,e){t.dispatchEvent(function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(`${n?"intro":"outro"}${e}`))}const F=new Set;let U;function Y(){U={r:0,c:[],p:U}}function Z(){U.r||r(U.c),U=U.p}function G(t,n){t&&t.i&&(F.delete(t),t.i(n))}function H(t,n,e,o){if(t&&t.o){if(F.has(t))return;F.add(t),U.c.push((()=>{F.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const I={duration:0};function J(e,o,r){let c,i,s=o(e,r),p=!1,m=0;function h(){c&&C(e,c)}function $(){const{delay:o=0,duration:r=300,easing:l=n,tick:$=t,css:g}=s||I;g&&(c=E(e,0,1,r,o,l,g,m++)),$(0,1);const w=u()+o,y=w+r;i&&i.abort(),p=!0,B((()=>q(e,!0,"start"))),i=function(t){let n;return 0===f.size&&a(d),{promise:new Promise((e=>{f.add(n={c:t,f:e})})),abort(){f.delete(n)}}}((t=>{if(p){if(t>=y)return $(1,0),q(e,!0,"end"),h(),p=!1;if(t>=w){const n=l((t-w)/r);$(n,1-n)}}return p}))}let g=!1;return{start(){g||(g=!0,C(e),l(s)?(s=s(),(P||(P=Promise.resolve(),P.then((()=>{P=null}))),P).then($)):$())},invalidate(){g=!1},end(){p&&(h(),p=!1)}}}function K(t){t&&t.c()}function Q(t,n,o,c){const{fragment:i,on_mount:s,on_destroy:u,after_update:a}=t.$$;i&&i.m(n,o),c||B((()=>{const n=s.map(e).filter(l);u?u.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(B)}function V(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function W(t,n){-1===t.$$.dirty[0]&&(j.push(t),O||(O=!0,S.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function X(n,e,l,c,i,s,u,a=[-1]){const f=b;A(n);const d=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:e.target||f.$$.root};u&&u(d.root);let p=!1;if(d.ctx=l?l(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&W(n,t)),e})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(g)}else d.fragment&&d.fragment.c();e.intro&&G(n.$$.fragment),Q(n,e.target,e.anchor,e.customElement),z()}A(f)}class tt{$destroy(){V(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function nt(t,{delay:e=0,duration:o=400,easing:r=n}={}){const l=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>"opacity: "+t*l}}function et(n){let e,o,r;return{c(){e=y("span"),o=v(n[0])},m(t,n){$(t,e,n),p(e,o)},p(t,n){1&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(o,t[0])},i(t){r||B((()=>{r=J(e,nt,{}),r.start()}))},o:t,d(t){t&&g(e)}}}function ot(n){let e,o,r=n[0],l=et(n);return{c(){e=y("letter"),l.c(),x(e,"class",o=i(n[1])+" svelte-113xjla")},m(t,n){$(t,e,n),l.m(e,null)},p(n,[s]){1&s&&c(r,r=n[0])?(Y(),H(l,1,1,t),Z(),l=et(n),l.c(),G(l),l.m(e,null)):l.p(n,s),2&s&&o!==(o=i(n[1])+" svelte-113xjla")&&x(e,"class",o)},i(t){G(l)},o(t){H(l)},d(t){t&&g(e),l.d(t)}}}function rt(t,n,e){let o,{letter:r=""}=n,{solution:l=""}=n,{word:c=""}=n,{position:i=0}=n;return t.$$set=t=>{"letter"in t&&e(0,r=t.letter),"solution"in t&&e(2,l=t.solution),"word"in t&&e(3,c=t.word),"position"in t&&e(4,i=t.position)},t.$$.update=()=>{29&t.$$.dirty&&e(1,o=""===c?"":r.toLowerCase()===l[i]&&r?"correct":l.toLowerCase().includes(r.toLowerCase())&&r?"almost":"incorrect")},[r,o,l,c,i]}class lt extends tt{constructor(t){super(),X(this,t,rt,ot,c,{letter:0,solution:2,word:3,position:4})}}function ct(t,n,e){const o=t.slice();return o[8]=n[e],o[10]=e,o}function it(t,n,e){const o=t.slice();return o[8]=n[e],o[12]=e,o}function st(n){let e,o;return e=new lt({props:{solution:n[2],word:"",letter:""}}),{c(){K(e.$$.fragment)},m(t,n){Q(e,t,n),o=!0},p:t,i(t){o||(G(e.$$.fragment,t),o=!0)},o(t){H(e.$$.fragment,t),o=!1},d(t){V(e,t)}}}function ut(t){let n,e;return n=new lt({props:{solution:t[2],word:"",letter:t[0][t[10]]?.[t[12]]??"",position:t[12]}}),{c(){K(n.$$.fragment)},m(t,o){Q(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.letter=t[0][t[10]]?.[t[12]]??""),n.$set(o)},i(t){e||(G(n.$$.fragment,t),e=!0)},o(t){H(n.$$.fragment,t),e=!1},d(t){V(n,t)}}}function at(t){let n,e;return n=new lt({props:{solution:t[2],word:t[0][t[10]]?.join(""),letter:t[0][t[10]]?.[t[12]]??"",position:t[12]}}),{c(){K(n.$$.fragment)},m(t,o){Q(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.word=t[0][t[10]]?.join("")),1&e&&(o.letter=t[0][t[10]]?.[t[12]]??""),n.$set(o)},i(t){e||(G(n.$$.fragment,t),e=!0)},o(t){H(n.$$.fragment,t),e=!1},d(t){V(n,t)}}}function ft(t){let n,e,o,r;const l=[at,ut,st],c=[];function i(t,n){return t[10]<t[1]?0:t[10]===t[1]?1:2}return n=i(t),e=c[n]=l[n](t),{c(){e.c(),o=v("")},m(t,e){c[n].m(t,e),$(t,o,e),r=!0},p(t,r){let s=n;n=i(t),n===s?c[n].p(t,r):(Y(),H(c[s],1,1,(()=>{c[s]=null})),Z(),e=c[n],e?e.p(t,r):(e=c[n]=l[n](t),e.c()),G(e,1),e.m(o.parentNode,o))},i(t){r||(G(e),r=!0)},o(t){H(e),r=!1},d(t){c[n].d(t),t&&g(o)}}}function dt(t){let n,e,o,r=new Array(t[4]),l=[];for(let n=0;n<r.length;n+=1)l[n]=ft(it(t,r,n));const c=t=>H(l[t],1,1,(()=>{l[t]=null}));return{c(){n=y("row");for(let t=0;t<l.length;t+=1)l[t].c();e=v(" "),x(n,"class","svelte-pmxxir")},m(t,r){$(t,n,r);for(let t=0;t<l.length;t+=1)l[t].m(n,null);p(n,e),o=!0},p(t,o){if(7&o){let i;for(r=new Array(t[4]),i=0;i<r.length;i+=1){const c=it(t,r,i);l[i]?(l[i].p(c,o),G(l[i],1)):(l[i]=ft(c),l[i].c(),G(l[i],1),l[i].m(n,e))}for(Y(),i=r.length;i<l.length;i+=1)c(i);Z()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)G(l[t]);o=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)H(l[t]);o=!1},d(t){t&&g(n),w(l,t)}}}function pt(t){let n,e,o,r,l=new Array(t[5]),c=[];for(let n=0;n<l.length;n+=1)c[n]=dt(ct(t,l,n));const i=t=>H(c[t],1,1,(()=>{c[t]=null}));return{c(){n=y("grid");for(let t=0;t<c.length;t+=1)c[t].c();x(n,"class","svelte-pmxxir")},m(l,i){$(l,n,i);for(let t=0;t<c.length;t+=1)c[t].m(n,null);var s,u,a,f;e=!0,o||(s=window,u="keydown",a=t[3],s.addEventListener(u,a,f),r=()=>s.removeEventListener(u,a,f),o=!0)},p(t,[e]){if(23&e){let o;for(l=new Array(t[5]),o=0;o<l.length;o+=1){const r=ct(t,l,o);c[o]?(c[o].p(r,e),G(c[o],1)):(c[o]=dt(r),c[o].c(),G(c[o],1),c[o].m(n,null))}for(Y(),o=l.length;o<c.length;o+=1)i(o);Z()}},i(t){if(!e){for(let t=0;t<l.length;t+=1)G(c[t]);e=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)H(c[t]);e=!1},d(t){t&&g(n),w(c,t),o=!1,r()}}}function mt(t,n,e){const o=[];let r=0;const l=["apple","peach","pears","orange","banana","lemon","kiwis"],c=l[Math.floor(Math.random()*l.length)];console.log(c);const i=c.length,s=i+1;return[o,r,c,function(t){var n,l,i;"Backspace"===t.key?e(0,o[r]=null===(n=o[r])||void 0===n?void 0:n.slice(0,-1),o):"Enter"===t.key&&(null===(l=o[r])||void 0===l?void 0:l.length)>=c.length?(console.log("Pressed enter"),o[r].join("").toLowerCase()===c?(e(1,r++,r),setTimeout((()=>{alert("Correct! Starting over with a new word..."),location.reload()}),500)):r+1<s?e(1,r++,r):(e(1,r++,r),setTimeout((()=>{alert("You lost! Starting over with a new word..."),location.reload()}),500))):t.key.match("^[A-Za-z]$")&&e(0,o[r]=[...null!==(i=o[r])&&void 0!==i?i:[],t.key.toUpperCase()],o)},i,s]}class ht extends tt{constructor(t){super(),X(this,t,mt,pt,c,{})}}function $t(n){let e,o,r;return o=new ht({}),{c(){e=y("main"),K(o.$$.fragment)},m(t,n){$(t,e,n),Q(o,e,null),r=!0},p:t,i(t){r||(G(o.$$.fragment,t),r=!0)},o(t){H(o.$$.fragment,t),r=!1},d(t){t&&g(e),V(o)}}}return new class extends tt{constructor(t){super(),X(this,t,null,$t,c,{})}}({target:document.body})}();