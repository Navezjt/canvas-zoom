import{S as P,i as Q,s as W,G as S,H as J,f as de,C as w,g as N,p as q,l as ee,t as D,o as le,q as R,r as he,D as F,J as L,a2 as me,aa as Ae,ab as se,N as ge,I as te,M as B,E as y,K as ne,b as V,ag as ie,B as Y,F as G,a as x,e as U,m as j,ad as oe,k as $,n as z,a0 as ye,a8 as Be,x as qe,$ as De,h as Ce,j as Se,y as X}from"./index-87d85cdd.js";/* empty css                                                  */import{B as Ee}from"./Button-d1864b92.js";import{B as Ne}from"./BlockTitle-57489203.js";/* empty css                                                    */import"./Info-67061f5d.js";function ue(t,e,l){const s=t.slice();return s[18]=e[l],s}function fe(t){let e,l,s,u,r,n=t[0],a=[];for(let i=0;i<n.length;i+=1)a[i]=ae(ue(t,n,i));return{c(){e=S("ul");for(let i=0;i<a.length;i+=1)a[i].c();w(e,"class","options svelte-1udn3b5"),w(e,"aria-expanded",t[1]),F(e,"top",t[6]),F(e,"bottom",t[7]),F(e,"max-height",`calc(${t[8]}px - var(--window-padding))`)},m(i,f){N(i,e,f);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(e,null);t[17](e),s=!0,u||(r=L(e,"mousedown",me(t[16])),u=!0)},p(i,f){if(f&517){n=i[0];let c;for(c=0;c<n.length;c+=1){const g=ue(i,n,c);a[c]?a[c].p(g,f):(a[c]=ae(g),a[c].c(),a[c].m(e,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=n.length}(!s||f&2)&&w(e,"aria-expanded",i[1]),f&64&&F(e,"top",i[6]),f&128&&F(e,"bottom",i[7]),f&256&&F(e,"max-height",`calc(${i[8]}px - var(--window-padding))`)},i(i){s||(Ae(()=>{s&&(l||(l=se(e,ie,{duration:200,y:5},!0)),l.run(1))}),s=!0)},o(i){l||(l=se(e,ie,{duration:200,y:5},!1)),l.run(0),s=!1},d(i){i&&R(e),ge(a,i),t[17](null),i&&l&&l.end(),u=!1,r()}}}function ae(t){let e,l,s,u=t[18]+"",r,n,a,i;return{c(){e=S("li"),l=S("span"),l.textContent="✓",s=J(),r=te(u),n=J(),w(l,"class","inner-item svelte-1udn3b5"),B(l,"hide",!t[9].includes(t[18])),w(e,"class","item svelte-1udn3b5"),w(e,"role","button"),w(e,"data-value",a=t[18]),w(e,"aria-label",i=t[18]),B(e,"selected",t[9].includes(t[18])),B(e,"active",t[2]===t[18]),B(e,"bg-gray-100",t[2]===t[18]),B(e,"dark:bg-gray-600",t[2]===t[18])},m(f,c){N(f,e,c),y(e,l),y(e,s),y(e,r),y(e,n)},p(f,c){c&513&&B(l,"hide",!f[9].includes(f[18])),c&1&&u!==(u=f[18]+"")&&ne(r,u),c&1&&a!==(a=f[18])&&w(e,"data-value",a),c&1&&i!==(i=f[18])&&w(e,"aria-label",i),c&513&&B(e,"selected",f[9].includes(f[18])),c&5&&B(e,"active",f[2]===f[18]),c&5&&B(e,"bg-gray-100",f[2]===f[18]),c&5&&B(e,"dark:bg-gray-600",f[2]===f[18])},d(f){f&&R(e)}}}function Re(t){let e,l,s,u,r=t[1]&&!t[3]&&fe(t);return{c(){e=S("div"),l=J(),r&&r.c(),s=de(),w(e,"class","reference")},m(n,a){N(n,e,a),t[15](e),N(n,l,a),r&&r.m(n,a),N(n,s,a),u=!0},p(n,[a]){n[1]&&!n[3]?r?(r.p(n,a),a&10&&q(r,1)):(r=fe(n),r.c(),q(r,1),r.m(s.parentNode,s)):r&&(ee(),D(r,1,1,()=>{r=null}),le())},i(n){u||(q(r),u=!0)},o(n){D(r),u=!1},d(n){n&&R(e),t[15](null),n&&R(l),r&&r.d(n),n&&R(s)}}}function Je(t,e,l){let s,{value:u=void 0}=e,{filtered:r}=e,{showOptions:n=!1}=e,{activeOption:a}=e,{disabled:i=!1}=e,f,c,g,_,v,k,b,m;const p=he();function O(h){V[h?"unshift":"push"](()=>{_=h,l(4,_)})}const E=h=>p("change",h);function T(h){V[h?"unshift":"push"](()=>{v=h,l(5,v)})}return t.$$set=h=>{"value"in h&&l(11,u=h.value),"filtered"in h&&l(0,r=h.filtered),"showOptions"in h&&l(1,n=h.showOptions),"activeOption"in h&&l(2,a=h.activeOption),"disabled"in h&&l(3,i=h.disabled)},t.$$.update=()=>{if(t.$$.dirty&30770){if(n&&_){if(v&&typeof u=="string"){let h=document.querySelector(`li[data-value="${u}"]`);h&&v.scrollTo(0,h.offsetTop)}l(12,f=_.getBoundingClientRect().top),l(13,c=window.innerHeight-_.getBoundingClientRect().bottom),l(14,g=_.parentElement?.getBoundingClientRect().height||0)}c>f?(l(6,k=`${g}px`),l(8,m=c),l(7,b=null)):(l(7,b=`${g}px`),l(8,m=f-g),l(6,k=null))}t.$$.dirty&2048&&l(9,s=Array.isArray(u)?u:[u])},[r,n,a,i,_,v,k,b,m,s,p,u,f,c,g,O,E,T]}class Me extends P{constructor(e){super(),Q(this,e,Je,Re,W,{value:11,filtered:0,showOptions:1,activeOption:2,disabled:3})}}function Te(t){let e,l;return{c(){e=Y("svg"),l=Y("path"),w(l,"d","M5 8l4 4 4-4z"),w(e,"class","dropdown-arrow svelte-p5edak"),w(e,"xmlns","http://www.w3.org/2000/svg"),w(e,"width","18"),w(e,"height","18"),w(e,"viewBox","0 0 18 18")},m(s,u){N(s,e,u),y(e,l)},p:G,i:G,o:G,d(s){s&&R(e)}}}class Ie extends P{constructor(e){super(),Q(this,e,null,Te,W,{})}}function Le(t){let e,l;return{c(){e=Y("svg"),l=Y("path"),w(l,"d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"),w(e,"xmlns","http://www.w3.org/2000/svg"),w(e,"width","16"),w(e,"height","16"),w(e,"viewBox","0 0 24 24")},m(s,u){N(s,e,u),y(e,l)},p:G,i:G,o:G,d(s){s&&R(e)}}}class be extends P{constructor(e){super(),Q(this,e,null,Le,W,{})}}function re(t,e,l){const s=t.slice();return s[30]=e[l],s}function Ue(t){let e;return{c(){e=te(t[1])},m(l,s){N(l,e,s)},p(l,s){s[0]&2&&ne(e,l[1])},d(l){l&&R(e)}}}function _e(t){let e,l,s=t[0],u=[];for(let n=0;n<s.length;n+=1)u[n]=ce(re(t,s,n));const r=n=>D(u[n],1,1,()=>{u[n]=null});return{c(){for(let n=0;n<u.length;n+=1)u[n].c();e=de()},m(n,a){for(let i=0;i<u.length;i+=1)u[i]&&u[i].m(n,a);N(n,e,a),l=!0},p(n,a){if(a[0]&4113){s=n[0];let i;for(i=0;i<s.length;i+=1){const f=re(n,s,i);u[i]?(u[i].p(f,a),q(u[i],1)):(u[i]=ce(f),u[i].c(),q(u[i],1),u[i].m(e.parentNode,e))}for(ee(),i=s.length;i<u.length;i+=1)r(i);le()}},i(n){if(!l){for(let a=0;a<s.length;a+=1)q(u[a]);l=!0}},o(n){u=u.filter(Boolean);for(let a=0;a<u.length;a+=1)D(u[a]);l=!1},d(n){ge(u,n),n&&R(e)}}}function ce(t){let e,l,s=t[30]+"",u,r,n,a,i,f,c,g,_;a=new be({});function v(){return t[20](t[30])}return{c(){e=S("div"),l=S("span"),u=te(s),r=J(),n=S("div"),U(a.$$.fragment),f=J(),w(l,"class","svelte-aqlk7e"),w(n,"class","token-remove svelte-aqlk7e"),w(n,"title",i="Remove "+t[30]),B(n,"hidden",t[4]),w(e,"class","token svelte-aqlk7e")},m(k,b){N(k,e,b),y(e,l),y(l,u),y(e,r),y(e,n),j(a,n,null),y(e,f),c=!0,g||(_=L(e,"click",me(v)),g=!0)},p(k,b){t=k,(!c||b[0]&1)&&s!==(s=t[30]+"")&&ne(u,s),(!c||b[0]&1&&i!==(i="Remove "+t[30]))&&w(n,"title",i),(!c||b[0]&16)&&B(n,"hidden",t[4])},i(k){c||(q(a.$$.fragment,k),c=!0)},o(k){D(a.$$.fragment,k),c=!1},d(k){k&&R(e),z(a),g=!1,_()}}}function je(t){let e,l,s,u,r,n=t[3]&&Array.isArray(t[0]),a,i,f,c,g,_,v,k,b,m,p,O,E,T;l=new Ne({props:{show_label:t[5],info:t[2],$$slots:{default:[Ue]},$$scope:{ctx:t}}});let h=n&&_e(t);_=new be({}),k=new Ie({});function M(o){t[26](o)}let H={showOptions:t[10],filtered:t[9],activeOption:t[8],disabled:t[4]};return t[0]!==void 0&&(H.value=t[0]),m=new Me({props:H}),V.push(()=>x(m,"value",M)),m.$on("change",t[14]),{c(){e=S("label"),U(l.$$.fragment),s=J(),u=S("div"),r=S("div"),h&&h.c(),a=J(),i=S("div"),f=S("input"),c=J(),g=S("div"),U(_.$$.fragment),v=J(),U(k.$$.fragment),b=J(),U(m.$$.fragment),w(f,"class","border-none svelte-aqlk7e"),f.disabled=t[4],w(f,"autocomplete","off"),B(f,"subdued",t[0]!==t[7]&&!t[6]),w(g,"class","token-remove remove-all svelte-aqlk7e"),w(g,"title","Clear"),B(g,"hide",!t[3]||!t[0]?.length||t[4]),w(i,"class","secondary-wrap svelte-aqlk7e"),w(r,"class","wrap-inner svelte-aqlk7e"),B(r,"showOptions",t[10]),w(u,"class","wrap svelte-aqlk7e")},m(o,A){N(o,e,A),j(l,e,null),y(e,s),y(e,u),y(u,r),h&&h.m(r,null),y(r,a),y(r,i),y(i,f),oe(f,t[7]),t[22](f),y(i,c),y(i,g),j(_,g,null),y(i,v),j(k,i,null),y(u,b),j(m,u,null),O=!0,E||(T=[L(f,"input",t[21]),L(f,"focus",t[23]),L(f,"keydown",t[15]),L(f,"keyup",t[24]),L(f,"blur",t[25]),L(g,"click",t[13])],E=!0)},p(o,A){const K={};A[0]&32&&(K.show_label=o[5]),A[0]&4&&(K.info=o[2]),A[0]&2|A[1]&4&&(K.$$scope={dirty:A,ctx:o}),l.$set(K),A[0]&9&&(n=o[3]&&Array.isArray(o[0])),n?h?(h.p(o,A),A[0]&9&&q(h,1)):(h=_e(o),h.c(),q(h,1),h.m(r,a)):h&&(ee(),D(h,1,1,()=>{h=null}),le()),(!O||A[0]&16)&&(f.disabled=o[4]),A[0]&128&&f.value!==o[7]&&oe(f,o[7]),(!O||A[0]&193)&&B(f,"subdued",o[0]!==o[7]&&!o[6]),(!O||A[0]&25)&&B(g,"hide",!o[3]||!o[0]?.length||o[4]),(!O||A[0]&1024)&&B(r,"showOptions",o[10]);const I={};A[0]&1024&&(I.showOptions=o[10]),A[0]&512&&(I.filtered=o[9]),A[0]&256&&(I.activeOption=o[8]),A[0]&16&&(I.disabled=o[4]),!p&&A[0]&1&&(p=!0,I.value=o[0],$(()=>p=!1)),m.$set(I)},i(o){O||(q(l.$$.fragment,o),q(h),q(_.$$.fragment,o),q(k.$$.fragment,o),q(m.$$.fragment,o),O=!0)},o(o){D(l.$$.fragment,o),D(h),D(_.$$.fragment,o),D(k.$$.fragment,o),D(m.$$.fragment,o),O=!1},d(o){o&&R(e),z(l),h&&h.d(),t[22](null),z(_),z(k),z(m),E=!1,ye(T)}}}function ze(t,e,l){let s,{label:u}=e,{info:r=void 0}=e,{value:n}=e,a=Array.isArray(n)?n.slice():n,{value_is_output:i=!1}=e,{multiselect:f=!1}=e,{max_choices:c}=e,{choices:g}=e,{disabled:_=!1}=e,{show_label:v}=e,{allow_custom_value:k=!1}=e;const b=he();let m,p,O=!1,E;function T(){b("change",n),i||b("input")}Be(()=>{l(16,i=!1)});function h(d){l(0,n),(!c||n.length<c)&&(n.push(d),b("select",{index:g.indexOf(d),value:d,selected:!0})),l(0,n)}function M(d){l(0,n),l(0,n=n.filter(C=>C!==d)),b("select",{index:g.indexOf(d),value:d,selected:!1})}function H(d){l(0,n=[]),l(7,m=""),d.preventDefault()}function o(d){const C=d.detail.target.dataset.value;if(k&&l(7,m=C),C!==void 0)if(f)n?.includes(C)?M(C):h(C),l(7,m="");else{l(0,n=C),l(7,m=C),l(10,O=!1),b("select",{index:g.indexOf(C),value:C,selected:!0});return}}function A(d){if(d.key==="Enter"&&p!=null)f?f&&Array.isArray(n)&&(n.includes(p)?M(p):h(p),l(7,m="")):(n!==p&&(l(0,n=p),b("select",{index:g.indexOf(n),value:n,selected:!0})),l(7,m=p),l(10,O=!1));else if(l(10,O=!0),d.key==="ArrowUp"||d.key==="ArrowDown"){p===null&&l(8,p=s[0]);const C=d.key==="ArrowUp"?-1:1,Z=s.indexOf(p)+C;l(8,p=Z<0?s[s.length-1]:Z===s.length?s[0]:s[Z]),d.preventDefault()}else d.key==="Escape"?l(10,O=!1):d.key==="Backspace"?f&&(!m||m==="")&&Array.isArray(n)&&n.length>0&&(M(n[n.length-1]),l(7,m="")):l(10,O=!0)}const K=d=>M(d);function I(){m=this.value,l(7,m),l(0,n)}function we(d){V[d?"unshift":"push"](()=>{E=d,l(11,E)})}const ve=()=>{l(10,O=!O),O?l(7,m=""):E.blur()},ke=()=>{k&&l(0,n=m)},pe=()=>{f?l(7,m=""):k||n!==m&&(typeof n=="string"&&m==""?l(7,m=n):(l(0,n=void 0),l(7,m=""))),l(10,O=!1)};function Oe(d){n=d,l(0,n)}return t.$$set=d=>{"label"in d&&l(1,u=d.label),"info"in d&&l(2,r=d.info),"value"in d&&l(0,n=d.value),"value_is_output"in d&&l(16,i=d.value_is_output),"multiselect"in d&&l(3,f=d.multiselect),"max_choices"in d&&l(17,c=d.max_choices),"choices"in d&&l(18,g=d.choices),"disabled"in d&&l(4,_=d.disabled),"show_label"in d&&l(5,v=d.show_label),"allow_custom_value"in d&&l(6,k=d.allow_custom_value)},t.$$.update=()=>{t.$$.dirty[0]&1&&typeof n=="string"&&l(7,m=n),t.$$.dirty[0]&262272&&l(9,s=g.filter(d=>m?d.toLowerCase().includes(m.toLowerCase()):d)),t.$$.dirty[0]&768&&(!p||!s.includes(p))&&l(8,p=s.length?s[0]:null),t.$$.dirty[0]&524289&&JSON.stringify(n)!=JSON.stringify(a)&&(l(19,a=Array.isArray(n)?n.slice():n),T()),t.$$.dirty[0]&524289&&JSON.stringify(n)!=JSON.stringify(a)&&(b("change",n),l(19,a=Array.isArray(n)?n.slice():n))},[n,u,r,f,_,v,k,m,p,s,O,E,M,H,o,A,i,c,g,a,K,I,we,ve,ke,pe,Oe]}class He extends P{constructor(e){super(),Q(this,e,ze,je,W,{label:1,info:2,value:0,value_is_output:16,multiselect:3,max_choices:17,choices:18,disabled:4,show_label:5,allow_custom_value:6},null,[-1,-1])}}function Ke(t){let e,l,s,u,r,n;const a=[t[12]];let i={};for(let _=0;_<a.length;_+=1)i=qe(i,a[_]);e=new De({props:i});function f(_){t[15](_)}function c(_){t[16](_)}let g={choices:t[9],multiselect:t[7],max_choices:t[8],label:t[2],info:t[3],show_label:t[10],allow_custom_value:t[13],disabled:t[14]==="static"};return t[0]!==void 0&&(g.value=t[0]),t[1]!==void 0&&(g.value_is_output=t[1]),s=new He({props:g}),V.push(()=>x(s,"value",f)),V.push(()=>x(s,"value_is_output",c)),s.$on("change",t[17]),s.$on("input",t[18]),s.$on("select",t[19]),s.$on("blur",t[20]),{c(){U(e.$$.fragment),l=J(),U(s.$$.fragment)},m(_,v){j(e,_,v),N(_,l,v),j(s,_,v),n=!0},p(_,v){const k=v&4096?Ce(a,[Se(_[12])]):{};e.$set(k);const b={};v&512&&(b.choices=_[9]),v&128&&(b.multiselect=_[7]),v&256&&(b.max_choices=_[8]),v&4&&(b.label=_[2]),v&8&&(b.info=_[3]),v&1024&&(b.show_label=_[10]),v&8192&&(b.allow_custom_value=_[13]),v&16384&&(b.disabled=_[14]==="static"),!u&&v&1&&(u=!0,b.value=_[0],$(()=>u=!1)),!r&&v&2&&(r=!0,b.value_is_output=_[1],$(()=>r=!1)),s.$set(b)},i(_){n||(q(e.$$.fragment,_),q(s.$$.fragment,_),n=!0)},o(_){D(e.$$.fragment,_),D(s.$$.fragment,_),n=!1},d(_){z(e,_),_&&R(l),z(s,_)}}}function Fe(t){let e,l;return e=new Ee({props:{visible:t[6],elem_id:t[4],elem_classes:t[5],disable:typeof t[11].container=="boolean"&&!t[11].container,$$slots:{default:[Ke]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment)},m(s,u){j(e,s,u),l=!0},p(s,[u]){const r={};u&64&&(r.visible=s[6]),u&16&&(r.elem_id=s[4]),u&32&&(r.elem_classes=s[5]),u&2048&&(r.disable=typeof s[11].container=="boolean"&&!s[11].container),u&2127759&&(r.$$scope={dirty:u,ctx:s}),e.$set(r)},i(s){l||(q(e.$$.fragment,s),l=!0)},o(s){D(e.$$.fragment,s),l=!1},d(s){z(e,s)}}}function Ge(t,e,l){let{label:s="Dropdown"}=e,{info:u=void 0}=e,{elem_id:r=""}=e,{elem_classes:n=[]}=e,{visible:a=!0}=e,{value:i}=e,{value_is_output:f=!1}=e,{multiselect:c=!1}=e,{max_choices:g}=e,{choices:_}=e,{show_label:v}=e,{style:k={}}=e,{loading_status:b}=e,{allow_custom_value:m=!1}=e,{mode:p}=e;c&&!i?i=[]:i||(i="");function O(o){i=o,l(0,i)}function E(o){f=o,l(1,f)}function T(o){X.call(this,t,o)}function h(o){X.call(this,t,o)}function M(o){X.call(this,t,o)}function H(o){X.call(this,t,o)}return t.$$set=o=>{"label"in o&&l(2,s=o.label),"info"in o&&l(3,u=o.info),"elem_id"in o&&l(4,r=o.elem_id),"elem_classes"in o&&l(5,n=o.elem_classes),"visible"in o&&l(6,a=o.visible),"value"in o&&l(0,i=o.value),"value_is_output"in o&&l(1,f=o.value_is_output),"multiselect"in o&&l(7,c=o.multiselect),"max_choices"in o&&l(8,g=o.max_choices),"choices"in o&&l(9,_=o.choices),"show_label"in o&&l(10,v=o.show_label),"style"in o&&l(11,k=o.style),"loading_status"in o&&l(12,b=o.loading_status),"allow_custom_value"in o&&l(13,m=o.allow_custom_value),"mode"in o&&l(14,p=o.mode)},[i,f,s,u,r,n,a,c,g,_,v,k,b,m,p,O,E,T,h,M,H]}class Ve extends P{constructor(e){super(),Q(this,e,Ge,Fe,W,{label:2,info:3,elem_id:4,elem_classes:5,visible:6,value:0,value_is_output:1,multiselect:7,max_choices:8,choices:9,show_label:10,style:11,loading_status:12,allow_custom_value:13,mode:14})}}const xe=Ve,$e=["static","dynamic"],el=t=>({type:{payload:"string"},description:{payload:"selected choice"},example_data:t.choices.length?t.choices[0]:""});export{xe as Component,el as document,$e as modes};
//# sourceMappingURL=index-f9e0cff0.js.map
