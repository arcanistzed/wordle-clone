var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return null==t?"":t}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let h;function g(t){h=t}const $=[],m=[],w=[],y=[],x=Promise.resolve();let v=!1;function b(t){w.push(t)}const _=new Set;let k=0;function A(){const t=h;do{for(;k<$.length;){const t=$[k];k++,g(t),E(t.$$)}for(g(null),$.length=0,k=0;m.length;)m.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];_.has(e)||(_.add(e),e())}w.length=0}while($.length);for(;y.length;)y.pop()();v=!1,_.clear(),g(t)}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const j=new Set;let C;function L(){C={r:0,c:[],p:C}}function B(){C.r||o(C.c),C=C.p}function N(t,e){t&&t.i&&(j.delete(t),t.i(e))}function O(t,e,n,o){if(t&&t.o){if(j.has(t))return;j.add(t),C.c.push((()=>{j.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function S(t){t&&t.c()}function M(t,n,l,c){const{fragment:i,on_mount:u,on_destroy:s,after_update:a}=t.$$;i&&i.m(n,l),c||b((()=>{const n=u.map(e).filter(r);s?s.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(b)}function P(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e){-1===t.$$.dirty[0]&&($.push(t),v||(v=!0,x.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,r,l,c,i,u,a,f=[-1]){const d=h;g(e);const p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a(p.root);let $=!1;if(p.ctx=l?l(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),$&&T(e,t)),n})):[],p.update(),$=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(s)}else p.fragment&&p.fragment.c();r.intro&&N(e.$$.fragment),M(e,r.target,r.anchor,r.customElement),A()}g(d)}class z{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(e){let n,o,r;return{c(){n=f("letter"),o=d(e[0]),p(n,"class",r=c(e[1])+" svelte-113xjla")},m(t,e){u(t,n,e),i(n,o)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(o,t[0]),2&e&&r!==(r=c(t[1])+" svelte-113xjla")&&p(n,"class",r)},i:t,o:t,d(t){t&&s(n)}}}function U(t,e,n){let o,{letter:r=""}=e,{solution:l=""}=e,{word:c=""}=e;return t.$$set=t=>{"letter"in t&&n(0,r=t.letter),"solution"in t&&n(2,l=t.solution),"word"in t&&n(3,c=t.word)},t.$$.update=()=>{13&t.$$.dirty&&n(1,o=r.toLowerCase()===l[null==c?void 0:c.lastIndexOf(r)]&&r?"correct":l.toLowerCase().includes(r.toLowerCase())&&r?"almost":"incorrect")},[r,o,l,c]}class Y extends z{constructor(t){super(),q(this,t,U,I,l,{letter:0,solution:2,word:3})}}function Z(t,e,n){const o=t.slice();return o[8]=e[n],o[10]=n,o}function D(t,e,n){const o=t.slice();return o[8]=e[n],o[12]=n,o}function F(e){let n,o;return n=new Y({props:{solution:e[2],word:"",letter:""}}),{c(){S(n.$$.fragment)},m(t,e){M(n,t,e),o=!0},p:t,i(t){o||(N(n.$$.fragment,t),o=!0)},o(t){O(n.$$.fragment,t),o=!1},d(t){P(n,t)}}}function G(t){let e,n;return e=new Y({props:{solution:t[2],word:t[0][t[10]]?.join(""),letter:t[0][t[10]]?.[t[12]]??""}}),{c(){S(e.$$.fragment)},m(t,o){M(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.word=t[0][t[10]]?.join("")),1&n&&(o.letter=t[0][t[10]]?.[t[12]]??""),e.$set(o)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function H(t){let e,n,o,r;const l=[G,F],c=[];function i(t,e){return t[10]<=t[1]?0:1}return e=i(t),n=c[e]=l[e](t),{c(){n.c(),o=d("")},m(t,n){c[e].m(t,n),u(t,o,n),r=!0},p(t,r){let u=e;e=i(t),e===u?c[e].p(t,r):(L(),O(c[u],1,1,(()=>{c[u]=null})),B(),n=c[e],n?n.p(t,r):(n=c[e]=l[e](t),n.c()),N(n,1),n.m(o.parentNode,o))},i(t){r||(N(n),r=!0)},o(t){O(n),r=!1},d(t){c[e].d(t),t&&s(o)}}}function J(t){let e,n,o,r=new Array(t[4]),l=[];for(let e=0;e<r.length;e+=1)l[e]=H(D(t,r,e));const c=t=>O(l[t],1,1,(()=>{l[t]=null}));return{c(){e=f("row");for(let t=0;t<l.length;t+=1)l[t].c();n=d(" "),p(e,"class","svelte-pmxxir")},m(t,r){u(t,e,r);for(let t=0;t<l.length;t+=1)l[t].m(e,null);i(e,n),o=!0},p(t,o){if(7&o){let i;for(r=new Array(t[4]),i=0;i<r.length;i+=1){const c=D(t,r,i);l[i]?(l[i].p(c,o),N(l[i],1)):(l[i]=H(c),l[i].c(),N(l[i],1),l[i].m(e,n))}for(L(),i=r.length;i<l.length;i+=1)c(i);B()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)N(l[t]);o=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)O(l[t]);o=!1},d(t){t&&s(e),a(l,t)}}}function K(t){let e,n,o,r,l=new Array(t[5]),c=[];for(let e=0;e<l.length;e+=1)c[e]=J(Z(t,l,e));const i=t=>O(c[t],1,1,(()=>{c[t]=null}));return{c(){e=f("grid");for(let t=0;t<c.length;t+=1)c[t].c();p(e,"class","svelte-pmxxir")},m(l,i){u(l,e,i);for(let t=0;t<c.length;t+=1)c[t].m(e,null);var s,a,f,d;n=!0,o||(s=window,a="keydown",f=t[3],s.addEventListener(a,f,d),r=()=>s.removeEventListener(a,f,d),o=!0)},p(t,[n]){if(23&n){let o;for(l=new Array(t[5]),o=0;o<l.length;o+=1){const r=Z(t,l,o);c[o]?(c[o].p(r,n),N(c[o],1)):(c[o]=J(r),c[o].c(),N(c[o],1),c[o].m(e,null))}for(L(),o=l.length;o<c.length;o+=1)i(o);B()}},i(t){if(!n){for(let t=0;t<l.length;t+=1)N(c[t]);n=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)O(c[t]);n=!1},d(t){t&&s(e),a(c,t),o=!1,r()}}}function Q(t,e,n){const o=[];let r=0;const l=["apple","peach","pears","orange","banana","lemon","kiwis"];let c=l[Math.floor(Math.random()*l.length)];const i=c.length,u=i+1;return[o,r,c,function(t){var e,l,i;"Backspace"===t.key?n(0,o[r]=null===(e=o[r])||void 0===e?void 0:e.slice(0,-1),o):"Enter"===t.key&&(null===(l=o[r])||void 0===l?void 0:l.length)>=c.length?(console.log("Pressed enter"),o[r].join("").toLowerCase()===c?(alert("Correct! Starting over with a new word..."),location.reload()):r+1<u?n(1,r++,r):(alert("You lost! Starting over with a new word..."),location.reload())):t.key.match("^[A-Za-z]$")&&n(0,o[r]=[...null!==(i=o[r])&&void 0!==i?i:[],t.key.toUpperCase()],o)},i,u]}class R extends z{constructor(t){super(),q(this,t,Q,K,l,{})}}function V(e){let n,o,r;return o=new R({}),{c(){n=f("main"),S(o.$$.fragment)},m(t,e){u(t,n,e),M(o,n,null),r=!0},p:t,i(t){r||(N(o.$$.fragment,t),r=!0)},o(t){O(o.$$.fragment,t),r=!1},d(t){t&&s(n),P(o)}}}return new class extends z{constructor(t){super(),q(this,t,null,V,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
