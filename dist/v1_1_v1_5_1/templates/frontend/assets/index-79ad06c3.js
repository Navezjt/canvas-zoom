import{S as U,i as V,s as F,B as R,C as f,g,E as C,F as B,q as b,G as p,H as z,D as S,r as ae,a7 as se,a8 as oe,f as G,N as J,y,b as fe,M as H,J as w,L,a0 as ne,I as ce,K as re,a9 as ue,e as K,m as Y,p as T,t as E,n as Z,l as _e,o as de}from"./index-87d85cdd.js";import{B as he}from"./Button-d1864b92.js";import{B as me}from"./BlockLabel-168149fb.js";/* empty css                                                    */import{n as O}from"./ModifyUpload.svelte_svelte_type_style_lang-ba6baa96.js";function ge(a){let e,i,t;return{c(){e=R("svg"),i=R("path"),t=R("path"),f(i,"fill","currentColor"),f(i,"d","M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84Z"),f(t,"fill","currentColor"),f(t,"d","M8 10h16v2H8zm0 6h10v2H8z"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),f(e,"aria-hidden","true"),f(e,"role","img"),f(e,"class","iconify iconify--carbon"),f(e,"width","100%"),f(e,"height","100%"),f(e,"preserveAspectRatio","xMidYMid meet"),f(e,"viewBox","0 0 32 32")},m(l,s){g(l,e,s),C(e,i),C(e,t)},p:B,i:B,o:B,d(l){l&&b(e)}}}class be extends U{constructor(e){super(),V(this,e,null,ge,F,{})}}function P(a,e,i){const t=a.slice();return t[17]=e[i],t[19]=i,t}function Q(a,e,i){const t=a.slice();return t[20]=e[i],t[22]=i,t}function W(a,e,i){const t=a.slice();return t[23]=e[i],t}function X(a){let e,i=a[0],t=[];for(let l=0;l<i.length;l+=1)t[l]=le(P(a,i,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=G()},m(l,s){for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(l,s);g(l,e,s)},p(l,s){if(s&85){i=l[0];let n;for(n=0;n<i.length;n+=1){const o=P(l,i,n);t[n]?t[n].p(o,s):(t[n]=le(o),t[n].c(),t[n].m(e.parentNode,e))}for(;n<t.length;n+=1)t[n].d(1);t.length=i.length}},d(l){J(t,l),l&&b(e)}}}function ve(a){let e,i,t;return{c(){e=p("img"),L(e.src,i=a[20].data)||f(e,"src",i),f(e,"alt",t=a[20].alt_text)},m(l,s){g(l,e,s)},p(l,s){s&1&&!L(e.src,i=l[20].data)&&f(e,"src",i),s&1&&t!==(t=l[20].alt_text)&&f(e,"alt",t)},d(l){l&&b(e)}}}function ke(a){let e,i,t,l,s,n;return{c(){e=p("video"),i=p("track"),f(i,"kind","captions"),e.controls=!0,L(e.src,t=a[20].data)||f(e,"src",t),f(e,"title",l=a[20].alt_text),f(e,"preload","auto")},m(o,v){g(o,e,v),C(e,i),s||(n=[w(e,"play",a[11]),w(e,"pause",a[12]),w(e,"ended",a[13])],s=!0)},p(o,v){v&1&&!L(e.src,t=o[20].data)&&f(e,"src",t),v&1&&l!==(l=o[20].alt_text)&&f(e,"title",l)},d(o){o&&b(e),s=!1,ne(n)}}}function pe(a){let e,i,t,l,s;return{c(){e=p("audio"),e.controls=!0,f(e,"preload","metadata"),L(e.src,i=a[20].data)||f(e,"src",i),f(e,"title",t=a[20].alt_text)},m(n,o){g(n,e,o),l||(s=[w(e,"play",a[8]),w(e,"pause",a[9]),w(e,"ended",a[10])],l=!0)},p(n,o){o&1&&!L(e.src,i=n[20].data)&&f(e,"src",i),o&1&&t!==(t=n[20].alt_text)&&f(e,"title",t)},d(n){n&&b(e),l=!1,ne(s)}}}function ye(a){let e,i=a[20]+"",t,l,s=a[2]&&a[22]==1&&x(a);return{c(){e=new ue(!1),t=z(),s&&s.c(),l=G(),e.a=t},m(n,o){e.m(i,n,o),g(n,t,o),s&&s.m(n,o),g(n,l,o)},p(n,o){o&1&&i!==(i=n[20]+"")&&e.p(i),n[2]&&n[22]==1?s?s.p(n,o):(s=x(n),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},d(n){n&&e.d(),n&&b(t),s&&s.d(n),n&&b(l)}}}function x(a){let e,i=a[2],t=[];for(let l=0;l<i.length;l+=1)t[l]=$(W(a,i,l));return{c(){e=p("div");for(let l=0;l<t.length;l+=1)t[l].c();f(e,"class","feedback svelte-13f7djk")},m(l,s){g(l,e,s);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null)},p(l,s){if(s&4){i=l[2];let n;for(n=0;n<i.length;n+=1){const o=W(l,i,n);t[n]?t[n].p(o,s):(t[n]=$(o),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=i.length}},d(l){l&&b(e),J(t,l)}}}function $(a){let e,i=a[23]+"",t;return{c(){e=p("button"),t=ce(i),f(e,"class","svelte-13f7djk")},m(l,s){g(l,e,s),C(e,t)},p(l,s){s&4&&i!==(i=l[23]+"")&&re(t,i)},d(l){l&&b(e)}}}function ee(a){let e,i,t,l,s,n,o;function v(d,h){if(h&1&&(i=null),h&1&&(t=null),h&1&&(l=null),typeof d[20]=="string")return ye;if(i==null&&(i=!!(d[20]!==null&&d[20].mime_type?.includes("audio"))),i)return pe;if(t==null&&(t=!!(d[20]!==null&&d[20].mime_type?.includes("video"))),t)return ke;if(l==null&&(l=!!(d[20]!==null&&d[20].mime_type?.includes("image"))),l)return ve}let u=v(a,-1),_=u&&u(a);function k(){return a[14](a[19],a[22],a[20])}return{c(){e=p("div"),_&&_.c(),s=z(),f(e,"data-testid",a[22]==0?"user":"bot"),f(e,"class","message "+(a[22]==0?"user":"bot")+" svelte-13f7djk"),H(e,"latest",a[19]===a[0].length-1),H(e,"hide",a[20]===null),H(e,"selectable",a[4])},m(d,h){g(d,e,h),_&&_.m(e,null),C(e,s),n||(o=w(e,"click",k),n=!0)},p(d,h){a=d,u===(u=v(a,h))&&_?_.p(a,h):(_&&_.d(1),_=u&&u(a),_&&(_.c(),_.m(e,s))),h&1&&H(e,"latest",a[19]===a[0].length-1),h&1&&H(e,"hide",a[20]===null),h&16&&H(e,"selectable",a[4])},d(d){d&&b(e),_&&_.d(),n=!1,o()}}}function le(a){let e,i=a[17],t=[];for(let l=0;l<i.length;l+=1)t[l]=ee(Q(a,i,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=G()},m(l,s){for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(l,s);g(l,e,s)},p(l,s){if(s&85){i=l[17];let n;for(n=0;n<i.length;n+=1){const o=Q(l,i,n);t[n]?t[n].p(o,s):(t[n]=ee(o),t[n].c(),t[n].m(e.parentNode,e))}for(;n<t.length;n+=1)t[n].d(1);t.length=i.length}},d(l){J(t,l),l&&b(e)}}}function te(a){let e;return{c(){e=p("div"),e.innerHTML=`<div class="dot-flashing svelte-13f7djk"></div>
				 
				<div class="dot-flashing svelte-13f7djk"></div>
				 
				<div class="dot-flashing svelte-13f7djk"></div>`,f(e,"class","message pending svelte-13f7djk")},m(i,t){g(i,e,t)},d(i){i&&b(e)}}}function we(a){let e,i,t,l=a[0]!==null&&X(a),s=a[1]&&te();return{c(){e=p("div"),i=p("div"),l&&l.c(),t=z(),s&&s.c(),f(i,"class","message-wrap svelte-13f7djk"),f(e,"class","wrap svelte-13f7djk"),S(e,"height",`${a[3].height}px`),S(e,"max-height",`${a[3].height}px`)},m(n,o){g(n,e,o),C(e,i),l&&l.m(i,null),C(i,t),s&&s.m(i,null),a[15](e)},p(n,[o]){n[0]!==null?l?l.p(n,o):(l=X(n),l.c(),l.m(i,t)):l&&(l.d(1),l=null),n[1]?s||(s=te(),s.c(),s.m(i,null)):s&&(s.d(1),s=null),o&8&&S(e,"height",`${n[3].height}px`),o&8&&S(e,"max-height",`${n[3].height}px`)},i:B,o:B,d(n){n&&b(e),l&&l.d(),s&&s.d(),a[15](null)}}}function Ce(a,e,i){let{value:t}=e,l=null,{pending_message:s=!1}=e,{feedback:n=null}=e,{style:o={}}=e,{selectable:v=!1}=e,u,_;const k=ae();se(()=>{_=u&&u.offsetHeight+u.scrollTop>u.scrollHeight-100}),oe(()=>{_&&(u.scrollTo(0,u.scrollHeight),u.querySelectorAll("img").forEach(r=>{r.addEventListener("load",()=>{u.scrollTo(0,u.scrollHeight)})})),u.querySelectorAll("pre > code").forEach(r=>{let D=r,q=r.parentElement;q.style.position="relative";const m=document.createElement("button");m.className="copy-button",m.innerHTML="Copy",m.style.position="absolute",m.style.right="0",m.style.top="0",m.style.zIndex="1",m.style.padding="var(--spacing-md)",m.style.marginTop="12px",m.style.fontSize="var(--text-sm)",m.style.borderBottomLeftRadius="var(--radius-sm)",m.style.backgroundColor="var(--block-label-background-fill)",m.addEventListener("click",()=>{navigator.clipboard.writeText(D.innerText.trimEnd()),m.innerHTML="Copied!",setTimeout(()=>{m.innerHTML="Copy"},1e3)}),q.appendChild(m)})});function d(r){y.call(this,a,r)}function h(r){y.call(this,a,r)}function M(r){y.call(this,a,r)}function N(r){y.call(this,a,r)}function A(r){y.call(this,a,r)}function I(r){y.call(this,a,r)}const c=(r,D,q)=>k("select",{index:[r,D],value:q});function j(r){fe[r?"unshift":"push"](()=>{u=r,i(5,u)})}return a.$$set=r=>{"value"in r&&i(0,t=r.value),"pending_message"in r&&i(1,s=r.pending_message),"feedback"in r&&i(2,n=r.feedback),"style"in r&&i(3,o=r.style),"selectable"in r&&i(4,v=r.selectable)},a.$$.update=()=>{a.$$.dirty&129&&t!==l&&(i(7,l=t),k("change"))},[t,s,n,o,v,u,k,l,d,h,M,N,A,I,c,j]}class He extends U{constructor(e){super(),V(this,e,Ce,we,F,{value:0,pending_message:1,feedback:2,style:3,selectable:4})}}function ie(a){let e,i;return e=new me({props:{show_label:a[5],Icon:be,float:!1,label:a[4]||"Chatbot",disable:typeof a[3].container=="boolean"&&!a[3].container}}),{c(){K(e.$$.fragment)},m(t,l){Y(e,t,l),i=!0},p(t,l){const s={};l&32&&(s.show_label=t[5]),l&16&&(s.label=t[4]||"Chatbot"),l&8&&(s.disable=typeof t[3].container=="boolean"&&!t[3].container),e.$set(s)},i(t){i||(T(e.$$.fragment,t),i=!0)},o(t){E(e.$$.fragment,t),i=!1},d(t){Z(e,t)}}}function Te(a){let e,i,t,l=a[5]&&ie(a);return i=new He({props:{style:a[3],selectable:a[6],value:a[8],pending_message:a[7]?.status==="pending"}}),i.$on("change",a[12]),i.$on("select",a[13]),{c(){l&&l.c(),e=z(),K(i.$$.fragment)},m(s,n){l&&l.m(s,n),g(s,e,n),Y(i,s,n),t=!0},p(s,n){s[5]?l?(l.p(s,n),n&32&&T(l,1)):(l=ie(s),l.c(),T(l,1),l.m(e.parentNode,e)):l&&(_e(),E(l,1,1,()=>{l=null}),de());const o={};n&8&&(o.style=s[3]),n&64&&(o.selectable=s[6]),n&256&&(o.value=s[8]),n&128&&(o.pending_message=s[7]?.status==="pending"),i.$set(o)},i(s){t||(T(l),T(i.$$.fragment,s),t=!0)},o(s){E(l),E(i.$$.fragment,s),t=!1},d(s){l&&l.d(s),s&&b(e),Z(i,s)}}}function Le(a){let e,i;return e=new he({props:{elem_id:a[0],elem_classes:a[1],visible:a[2],padding:!1,$$slots:{default:[Te]},$$scope:{ctx:a}}}),{c(){K(e.$$.fragment)},m(t,l){Y(e,t,l),i=!0},p(t,[l]){const s={};l&1&&(s.elem_id=t[0]),l&2&&(s.elem_classes=t[1]),l&4&&(s.visible=t[2]),l&33272&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){i||(T(e.$$.fragment,t),i=!0)},o(t){E(e.$$.fragment,t),i=!1},d(t){Z(e,t)}}}function je(a,e,i){let{elem_id:t=""}=e,{elem_classes:l=[]}=e,{visible:s=!0}=e,{value:n=[]}=e,o,{style:v={}}=e,{label:u}=e,{show_label:_=!0}=e,{root:k}=e,{root_url:d}=e,{selectable:h=!1}=e;const M=c=>c.replace('src="/file',`src="${k}file`);let{loading_status:N=void 0}=e;function A(c){y.call(this,a,c)}function I(c){y.call(this,a,c)}return a.$$set=c=>{"elem_id"in c&&i(0,t=c.elem_id),"elem_classes"in c&&i(1,l=c.elem_classes),"visible"in c&&i(2,s=c.visible),"value"in c&&i(9,n=c.value),"style"in c&&i(3,v=c.style),"label"in c&&i(4,u=c.label),"show_label"in c&&i(5,_=c.show_label),"root"in c&&i(10,k=c.root),"root_url"in c&&i(11,d=c.root_url),"selectable"in c&&i(6,h=c.selectable),"loading_status"in c&&i(7,N=c.loading_status)},a.$$.update=()=>{a.$$.dirty&3584&&i(8,o=n?n.map(([c,j])=>[typeof c=="string"?M(c):O(c,k,d),typeof j=="string"?M(j):O(j,k,d)]):[])},[t,l,s,v,u,_,h,N,o,n,k,d,A,I]}class Be extends U{constructor(e){super(),V(this,e,je,Le,F,{elem_id:0,elem_classes:1,visible:2,value:9,style:3,label:4,show_label:5,root:10,root_url:11,selectable:6,loading_status:7})}}const ze=Be,Ae=["static"],Ie=a=>({type:{payload:"Array<[string, string]>"},description:{payload:"list of message pairs of"},example_data:a.value?.length?a.value:[["Hi","Hello"],["1 + 1","2"]]});export{ze as Component,Ie as document,Ae as modes};
//# sourceMappingURL=index-79ad06c3.js.map
