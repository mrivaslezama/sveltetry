import{S as B,i as C,s as U,a as W,e as p,c as j,b,d as h,f as P,g as d,h as g,j as z,o as Q,k as F,l as G,m as H,n as A,p as m,q as J,r as K,u as M,v as y,w as D,x as E,y as v,z as I,A as R,B as L}from"../chunks/index.72eb2937.js";const X="modulepreload",Y=function(a,e){return new URL(a,e).href},O={},w=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Y(f,i),f in O)return;O[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!i)for(let l=s.length-1;l>=0;l--){const u=s[l];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":X,t||(o.as="script",o.crossOrigin=""),o.href=f,document.head.appendChild(o),t)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},ie={};function Z(a){let e,n,i;var s=a[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,f(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&I(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][0])){if(e){y();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[12](e),v(e.$$.fragment),d(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&d(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[12](null),t&&g(n),e&&L(e,t)}}}function $(a){let e,n,i;var s=a[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[x]},$$scope:{ctx:t}}}}return s&&(e=E(s,f(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&I(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&8215&&(_.$$scope={dirty:r,ctx:t}),r&2&&s!==(s=t[1][0])){if(e){y();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[11](e),v(e.$$.fragment),d(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&d(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[11](null),t&&g(n),e&&L(e,t)}}}function x(a){let e,n,i;var s=a[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,f(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&I(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&16&&(_.data=t[4]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][1])){if(e){y();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[10](e),v(e.$$.fragment),d(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&d(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[10](null),t&&g(n),e&&L(e,t)}}}function T(a){let e,n=a[6]&&V(a);return{c(){e=F("div"),n&&n.c(),this.h()},l(i){e=G(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=H(e);n&&n.l(s),s.forEach(g),this.h()},h(){A(e,"id","svelte-announcer"),A(e,"aria-live","assertive"),A(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(i,s){b(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=V(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function V(a){let e;return{c(){e=J(a[7])},l(n){e=K(n,a[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&M(e,n[7])},d(n){n&&g(e)}}}function ee(a){let e,n,i,s,f;const t=[$,Z],r=[];function _(l,u){return l[1][1]?0:1}e=_(a),n=r[e]=t[e](a);let o=a[5]&&T(a);return{c(){n.c(),i=W(),o&&o.c(),s=p()},l(l){n.l(l),i=j(l),o&&o.l(l),s=p()},m(l,u){r[e].m(l,u),b(l,i,u),o&&o.m(l,u),b(l,s,u),f=!0},p(l,[u]){let k=e;e=_(l),e===k?r[e].p(l,u):(y(),h(r[k],1,1,()=>{r[k]=null}),P(),n=r[e],n?n.p(l,u):(n=r[e]=t[e](l),n.c()),d(n,1),n.m(i.parentNode,i)),l[5]?o?o.p(l,u):(o=T(l),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},i(l){f||(d(n),f=!0)},o(l){h(n),f=!1},d(l){r[e].d(l),l&&g(i),o&&o.d(l),l&&g(s)}}}function te(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:_=null}=e,{data_1:o=null}=e;z(i.page.notify);let l=!1,u=!1,k=null;Q(()=>{const c=i.page.subscribe(()=>{l&&(n(6,u=!0),n(7,k=document.title||"untitled page"))});return n(5,l=!0),c});function N(c){D[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function S(c){D[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function q(c){D[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,f=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,_=c.data_0),"data_1"in c&&n(4,o=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,f,r,_,o,l,u,k,i,s,N,S,q]}class se extends B{constructor(e){super(),C(this,e,te,ee,U,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const re=[()=>w(()=>import("../nodes/0.7a16d0b6.js"),["../nodes/0.7a16d0b6.js","../chunks/index.72eb2937.js","../chunks/tippy.8fe2a34b.js","../chunks/singletons.4ec2e51a.js","../chunks/i18n-svelte.e29bc5df.js","../assets/tippy.7df0e90e.css","../chunks/timeFormat.096cd535.js","../assets/0.2fa32c42.css"],import.meta.url),()=>w(()=>import("../nodes/1.428d9b35.js"),["../nodes/1.428d9b35.js","../chunks/index.72eb2937.js","../chunks/i18n-svelte.e29bc5df.js","../chunks/singletons.4ec2e51a.js"],import.meta.url),()=>w(()=>import("../nodes/2.14907bf5.js"),["../nodes/2.14907bf5.js","../chunks/index.72eb2937.js","../chunks/i18n-svelte.e29bc5df.js","../chunks/singletons.4ec2e51a.js","../chunks/tippy.8fe2a34b.js","../assets/tippy.7df0e90e.css","../chunks/image_banner.0655567c.js","../assets/2.aef64abf.css"],import.meta.url),()=>w(()=>import("../nodes/3.170ddec9.js"),["../nodes/3.170ddec9.js","../chunks/index.72eb2937.js","../chunks/post.152f8fc1.js","../chunks/i18n-svelte.e29bc5df.js","../chunks/singletons.4ec2e51a.js","../chunks/tippy.8fe2a34b.js","../assets/tippy.7df0e90e.css","../chunks/image_banner.0655567c.js","../chunks/timeFormat.096cd535.js","../assets/post.3c17f144.css"],import.meta.url),()=>w(()=>import("../nodes/4.bfe61d7c.js"),["../nodes/4.bfe61d7c.js","../chunks/index.72eb2937.js","../chunks/post.152f8fc1.js","../chunks/i18n-svelte.e29bc5df.js","../chunks/singletons.4ec2e51a.js","../chunks/tippy.8fe2a34b.js","../assets/tippy.7df0e90e.css","../chunks/image_banner.0655567c.js","../chunks/timeFormat.096cd535.js","../assets/post.3c17f144.css","../chunks/code_copy.242746cb.js","../assets/4.7893dccc.css"],import.meta.url),()=>w(()=>import("../nodes/5.a9432666.js"),["../nodes/5.a9432666.js","../chunks/index.72eb2937.js","../chunks/post.152f8fc1.js","../chunks/i18n-svelte.e29bc5df.js","../chunks/singletons.4ec2e51a.js","../chunks/tippy.8fe2a34b.js","../assets/tippy.7df0e90e.css","../chunks/image_banner.0655567c.js","../chunks/timeFormat.096cd535.js","../assets/post.3c17f144.css","../chunks/code_copy.242746cb.js"],import.meta.url),()=>w(()=>import("../nodes/6.1388c050.js"),["../nodes/6.1388c050.js","../chunks/index.72eb2937.js","../chunks/post.152f8fc1.js","../chunks/i18n-svelte.e29bc5df.js","../chunks/singletons.4ec2e51a.js","../chunks/tippy.8fe2a34b.js","../assets/tippy.7df0e90e.css","../chunks/image_banner.0655567c.js","../chunks/timeFormat.096cd535.js","../assets/post.3c17f144.css","../chunks/code_copy.242746cb.js"],import.meta.url)],oe=[],ae={"/":[2],"/about":[3],"/example":[4],"/hello-QWER":[5],"/quick-start":[6]},le={handleError:({error:a})=>{console.error(a)}};export{ae as dictionary,le as hooks,ie as matchers,re as nodes,se as root,oe as server_loads};