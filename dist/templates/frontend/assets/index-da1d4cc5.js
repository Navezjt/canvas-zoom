import{S as C,e as A,s as j,m as k,t as N,g as m,N as u,h as b,j as M,x as T,n as w,k as v,I as D,O as E,Q as K,M as U,y as Oe,ap as We,D as Ne,R as Se,p as R,b as se,B as $,a0 as Ve,a1 as Ge,o as I,K as p,F as Q,G as X,w as H,u as S,H as Y,f as ie,r as O,v as W,T as x,aq as ae}from"./index-7a57bd3a.js";import{B as Ke,g as Qe}from"./Button-778c588b.js";/* empty css                                             */import{c as Xe}from"./csv-b0b7514a.js";import{d as Ye}from"./dsv-576afacd.js";var Ze=Ye("	"),Je=Ze.parseRows;function Ue(s){let e,l;return{c(){e=k("div"),l=N(s[0]),m(e,"class","svelte-1ayixqk"),u(e,"table",s[1]==="table"),u(e,"gallery",s[1]==="gallery"),u(e,"selected",s[2])},m(t,n){b(t,e,n),M(e,l)},p(t,[n]){n&1&&T(l,t[0]),n&2&&u(e,"table",t[1]==="table"),n&2&&u(e,"gallery",t[1]==="gallery"),n&4&&u(e,"selected",t[2])},i:w,o:w,d(t){t&&v(e)}}}function pe(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class xe extends C{constructor(e){super(),A(this,e,pe,Ue,j,{value:0,type:1,selected:2})}}function $e(s){let e,l;return{c(){e=k("div"),l=N(s[0]),m(e,"class","svelte-1ayixqk"),u(e,"table",s[1]==="table"),u(e,"gallery",s[1]==="gallery"),u(e,"selected",s[2])},m(t,n){b(t,e,n),M(e,l)},p(t,[n]){n&1&&T(l,t[0]),n&2&&u(e,"table",t[1]==="table"),n&2&&u(e,"gallery",t[1]==="gallery"),n&4&&u(e,"selected",t[2])},i:w,o:w,d(t){t&&v(e)}}}function el(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class ll extends C{constructor(e){super(),A(this,e,el,$e,j,{value:0,type:1,selected:2})}}function tl(s){let e,l=s[0].toLocaleString()+"",t;return{c(){e=k("div"),t=N(l),m(e,"class","svelte-1ayixqk"),u(e,"table",s[1]==="table"),u(e,"gallery",s[1]==="gallery"),u(e,"selected",s[2])},m(n,a){b(n,e,a),M(e,t)},p(n,[a]){a&1&&l!==(l=n[0].toLocaleString()+"")&&T(t,l),a&2&&u(e,"table",n[1]==="table"),a&2&&u(e,"gallery",n[1]==="gallery"),a&4&&u(e,"selected",n[2])},i:w,o:w,d(n){n&&v(e)}}}function nl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class sl extends C{constructor(e){super(),A(this,e,nl,tl,j,{value:0,type:1,selected:2})}}function fe(s,e,l){const t=s.slice();return t[3]=e[l],t[5]=l,t}function ce(s){let e;return{c(){e=N(", ")},m(l,t){b(l,e,t)},d(l){l&&v(e)}}}function ue(s){let e=s[3].toLocaleString()+"",l,t,n=s[5]!==s[0].length-1&&ce();return{c(){l=N(e),n&&n.c(),t=K()},m(a,i){b(a,l,i),n&&n.m(a,i),b(a,t,i)},p(a,i){i&1&&e!==(e=a[3].toLocaleString()+"")&&T(l,e),a[5]!==a[0].length-1?n||(n=ce(),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(a){a&&(v(l),v(t)),n&&n.d(a)}}}function il(s){let e,l=D(s[0]),t=[];for(let n=0;n<l.length;n+=1)t[n]=ue(fe(s,l,n));return{c(){e=k("div");for(let n=0;n<t.length;n+=1)t[n].c();m(e,"class","svelte-1ayixqk"),u(e,"table",s[1]==="table"),u(e,"gallery",s[1]==="gallery"),u(e,"selected",s[2])},m(n,a){b(n,e,a);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null)},p(n,[a]){if(a&1){l=D(n[0]);let i;for(i=0;i<l.length;i+=1){const f=fe(n,l,i);t[i]?t[i].p(f,a):(t[i]=ue(f),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=l.length}a&2&&u(e,"table",n[1]==="table"),a&2&&u(e,"gallery",n[1]==="gallery"),a&4&&u(e,"selected",n[2])},i:w,o:w,d(n){n&&v(e),E(t,n)}}}function al(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class fl extends C{constructor(e){super(),A(this,e,al,il,j,{value:0,type:1,selected:2})}}function cl(s){let e,l;return{c(){e=k("div"),l=N(s[0]),m(e,"class","svelte-1ayixqk"),u(e,"table",s[1]==="table"),u(e,"gallery",s[1]==="gallery"),u(e,"selected",s[2])},m(t,n){b(t,e,n),M(e,l)},p(t,[n]){n&1&&T(l,t[0]),n&2&&u(e,"table",t[1]==="table"),n&2&&u(e,"gallery",t[1]==="gallery"),n&4&&u(e,"selected",t[2])},i:w,o:w,d(t){t&&v(e)}}}function ul(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class rl extends C{constructor(e){super(),A(this,e,ul,cl,j,{value:0,type:1,selected:2})}}function ol(s){let e,l;return{c(){e=k("div"),l=N(s[0]),m(e,"class","svelte-1ayixqk"),u(e,"table",s[1]==="table"),u(e,"gallery",s[1]==="gallery"),u(e,"selected",s[2])},m(t,n){b(t,e,n),M(e,l)},p(t,[n]){n&1&&T(l,t[0]),n&2&&u(e,"table",t[1]==="table"),n&2&&u(e,"gallery",t[1]==="gallery"),n&4&&u(e,"selected",t[2])},i:w,o:w,d(t){t&&v(e)}}}function _l(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class dl extends C{constructor(e){super(),A(this,e,_l,ol,j,{value:0,type:1,selected:2})}}function ml(s){let e,l;return{c(){e=k("img"),U(e.src,l=s[1]+s[0])||m(e,"src",l),m(e,"class","svelte-gqt00k"),u(e,"table",s[2]==="table"),u(e,"gallery",s[2]==="gallery"),u(e,"selected",s[3])},m(t,n){b(t,e,n)},p(t,[n]){n&3&&!U(e.src,l=t[1]+t[0])&&m(e,"src",l),n&4&&u(e,"table",t[2]==="table"),n&4&&u(e,"gallery",t[2]==="gallery"),n&8&&u(e,"selected",t[3])},i:w,o:w,d(t){t&&v(e)}}}function gl(s,e,l){let{value:t}=e,{samples_dir:n}=e,{type:a}=e,{selected:i=!1}=e;return s.$$set=f=>{"value"in f&&l(0,t=f.value),"samples_dir"in f&&l(1,n=f.samples_dir),"type"in f&&l(2,a=f.type),"selected"in f&&l(3,i=f.selected)},[t,n,a,i]}class hl extends C{constructor(e){super(),A(this,e,gl,ml,j,{value:0,samples_dir:1,type:2,selected:3})}}function bl(s){let e,l,t;return{c(){e=k("div"),l=N(s[0]),m(e,"class","svelte-1viwdyg"),Oe(()=>s[5].call(e)),u(e,"table",s[1]==="table"),u(e,"gallery",s[1]==="gallery"),u(e,"selected",s[2])},m(n,a){b(n,e,a),M(e,l),t=We(e,s[5].bind(e)),s[6](e)},p(n,[a]){a&1&&T(l,n[0]),a&2&&u(e,"table",n[1]==="table"),a&2&&u(e,"gallery",n[1]==="gallery"),a&4&&u(e,"selected",n[2])},i:w,o:w,d(n){n&&v(e),t(),s[6](null)}}}function vl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e,i,f;function c(r,z){!r||!z||(f.style.setProperty("--local-text-width",`${z<150?z:200}px`),l(4,f.style.whiteSpace="unset",f))}Ne(()=>{c(f,i)});function d(){i=this.clientWidth,l(3,i)}function g(r){Se[r?"unshift":"push"](()=>{f=r,l(4,f)})}return s.$$set=r=>{"value"in r&&l(0,t=r.value),"type"in r&&l(1,n=r.type),"selected"in r&&l(2,a=r.selected)},[t,n,a,i,f,d,g]}class yl extends C{constructor(e){super(),A(this,e,vl,bl,j,{value:0,type:1,selected:2})}}function kl(s){let e,l;return{c(){e=k("div"),l=N(s[0]),m(e,"class","svelte-1ayixqk"),u(e,"table",s[1]==="table"),u(e,"gallery",s[1]==="gallery"),u(e,"selected",s[2])},m(t,n){b(t,e,n),M(e,l)},p(t,[n]){n&1&&T(l,t[0]),n&2&&u(e,"table",t[1]==="table"),n&2&&u(e,"gallery",t[1]==="gallery"),n&4&&u(e,"selected",t[2])},i:w,o:w,d(t){t&&v(e)}}}function wl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class ql extends C{constructor(e){super(),A(this,e,wl,kl,j,{value:0,type:1,selected:2})}}function zl(s){let e,l,t,n;return{c(){e=k("video"),e.muted=!0,e.playsInline=!0,U(e.src,l=s[3]+s[2])||m(e,"src",l),m(e,"class","svelte-1tntsc1"),u(e,"table",s[0]==="table"),u(e,"gallery",s[0]==="gallery"),u(e,"selected",s[1])},m(a,i){b(a,e,i),s[5](e),t||(n=[R(e,"mouseover",function(){se(s[4].play)&&s[4].play.apply(this,arguments)}),R(e,"mouseout",function(){se(s[4].pause)&&s[4].pause.apply(this,arguments)})],t=!0)},p(a,i){s=a,i&12&&!U(e.src,l=s[3]+s[2])&&m(e,"src",l),i&1&&u(e,"table",s[0]==="table"),i&1&&u(e,"gallery",s[0]==="gallery"),i&2&&u(e,"selected",s[1])},d(a){a&&v(e),s[5](null),t=!1,$(n)}}}function Ml(s){let e;function l(a,i){return zl}let n=l()(s);return{c(){n.c(),e=K()},m(a,i){n.m(a,i),b(a,e,i)},p(a,[i]){n.p(a,i)},i:w,o:w,d(a){a&&v(e),n.d(a)}}}function Hl(s,e,l){let{type:t}=e,{selected:n=!1}=e,{value:a}=e,{samples_dir:i}=e,f;async function c(){l(4,f.muted=!0,f),l(4,f.playsInline=!0,f),l(4,f.controls=!1,f),f.setAttribute("muted",""),await f.play(),f.pause()}Ne(()=>{c()});function d(g){Se[g?"unshift":"push"](()=>{f=g,l(4,f)})}return s.$$set=g=>{"type"in g&&l(0,t=g.type),"selected"in g&&l(1,n=g.selected),"value"in g&&l(2,a=g.value),"samples_dir"in g&&l(3,i=g.samples_dir)},[t,n,a,i,f,d]}class Cl extends C{constructor(e){super(),A(this,e,Hl,Ml,j,{type:0,selected:1,value:2,samples_dir:3})}}function Al(s){let e,l=(Array.isArray(s[0])?s[0].join(", "):s[0])+"",t;return{c(){e=k("div"),t=N(l),m(e,"class","svelte-rgtszb"),u(e,"table",s[1]==="table"),u(e,"gallery",s[1]==="gallery"),u(e,"selected",s[2])},m(n,a){b(n,e,a),M(e,t)},p(n,[a]){a&1&&l!==(l=(Array.isArray(n[0])?n[0].join(", "):n[0])+"")&&T(t,l),a&2&&u(e,"table",n[1]==="table"),a&2&&u(e,"gallery",n[1]==="gallery"),a&4&&u(e,"selected",n[2])},i:w,o:w,d(n){n&&v(e)}}}function jl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class Nl extends C{constructor(e){super(),A(this,e,jl,Al,j,{value:0,type:1,selected:2})}}function re(s,e,l){const t=s.slice();return t[11]=e[l],t[13]=l,t}function oe(s,e,l){const t=s.slice();return t[14]=e[l],t[16]=l,t}function _e(s){let e,l,t;function n(f,c){return typeof f[6]=="string"?Tl:Sl}let a=n(s),i=a(s);return{c(){e=k("div"),i.c(),m(e,"class","svelte-1cib1xd"),u(e,"table",s[1]==="table"),u(e,"gallery",s[1]==="gallery"),u(e,"selected",s[2])},m(f,c){b(f,e,c),i.m(e,null),l||(t=[R(e,"mouseenter",s[9]),R(e,"mouseleave",s[10])],l=!0)},p(f,c){a===(a=n(f))&&i?i.p(f,c):(i.d(1),i=a(f),i&&(i.c(),i.m(e,null))),c&2&&u(e,"table",f[1]==="table"),c&2&&u(e,"gallery",f[1]==="gallery"),c&4&&u(e,"selected",f[2])},d(f){f&&v(e),i.d(),l=!1,$(t)}}}function Sl(s){let e,l,t=D(s[6].slice(0,3)),n=[];for(let i=0;i<t.length;i+=1)n[i]=ge(re(s,t,i));let a=s[0].length>3&&he(s);return{c(){e=k("table");for(let i=0;i<n.length;i+=1)n[i].c();l=I(),a&&a.c(),m(e,"class"," svelte-1cib1xd")},m(i,f){b(i,e,f);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null);M(e,l),a&&a.m(e,null)},p(i,f){if(f&64){t=D(i[6].slice(0,3));let c;for(c=0;c<t.length;c+=1){const d=re(i,t,c);n[c]?n[c].p(d,f):(n[c]=ge(d),n[c].c(),n[c].m(e,l))}for(;c<n.length;c+=1)n[c].d(1);n.length=t.length}i[0].length>3?a?a.p(i,f):(a=he(i),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(i){i&&v(e),E(n,i),a&&a.d()}}}function Tl(s){let e;return{c(){e=N(s[6])},m(l,t){b(l,e,t)},p(l,t){t&64&&T(e,l[6])},d(l){l&&v(e)}}}function de(s){let e,l=s[14]+"",t;return{c(){e=k("td"),t=N(l),m(e,"class","svelte-1cib1xd")},m(n,a){b(n,e,a),M(e,t)},p(n,a){a&64&&l!==(l=n[14]+"")&&T(t,l)},d(n){n&&v(e)}}}function me(s){let e;return{c(){e=k("td"),e.textContent="…",m(e,"class","svelte-1cib1xd")},m(l,t){b(l,e,t)},d(l){l&&v(e)}}}function ge(s){let e,l,t=D(s[11].slice(0,3)),n=[];for(let i=0;i<t.length;i+=1)n[i]=de(oe(s,t,i));let a=s[11].length>3&&me();return{c(){e=k("tr");for(let i=0;i<n.length;i+=1)n[i].c();l=I(),a&&a.c()},m(i,f){b(i,e,f);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null);M(e,l),a&&a.m(e,null)},p(i,f){if(f&64){t=D(i[11].slice(0,3));let c;for(c=0;c<t.length;c+=1){const d=oe(i,t,c);n[c]?n[c].p(d,f):(n[c]=de(d),n[c].c(),n[c].m(e,l))}for(;c<n.length;c+=1)n[c].d(1);n.length=t.length}i[11].length>3?a||(a=me(),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(i){i&&v(e),E(n,i),a&&a.d()}}}function he(s){let e;return{c(){e=k("div"),m(e,"class","overlay svelte-1cib1xd"),u(e,"odd",s[3]%2!=0),u(e,"even",s[3]%2==0),u(e,"button",s[1]==="gallery")},m(l,t){b(l,e,t)},p(l,t){t&8&&u(e,"odd",l[3]%2!=0),t&8&&u(e,"even",l[3]%2==0),t&2&&u(e,"button",l[1]==="gallery")},d(l){l&&v(e)}}}function Dl(s){let e,l=s[4]&&_e(s);return{c(){l&&l.c(),e=K()},m(t,n){l&&l.m(t,n),b(t,e,n)},p(t,[n]){t[4]?l?l.p(t,n):(l=_e(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:w,o:w,d(t){t&&v(e),l&&l.d(t)}}}function Ll(s,e,l){let t;Ve(s,Ge,y=>l(8,t=y));let{value:n}=e,{samples_dir:a}=e,{type:i}=e,{selected:f=!1}=e,{index:c}=e,d=!1,g=n,r=Array.isArray(g);const z=()=>l(5,d=!0),o=()=>l(5,d=!1);return s.$$set=y=>{"value"in y&&l(0,n=y.value),"samples_dir"in y&&l(7,a=y.samples_dir),"type"in y&&l(1,i=y.type),"selected"in y&&l(2,f=y.selected),"index"in y&&l(3,c=y.index)},s.$$.update=()=>{s.$$.dirty&401&&!r&&typeof n=="string"&&/\.[a-zA-Z]+$/.test(n)&&fetch(a+n).then(y=>y.text()).then(y=>{try{if(n.endsWith("csv")){const _=y.split(`
`).slice(0,4).map(q=>q.split(",").slice(0,4).join(",")).join(`
`);l(6,g=Xe(_))}else if(n.endsWith("tsv")){const _=y.split(`
`).slice(0,4).map(q=>q.split("	").slice(0,4).join("	")).join(`
`);l(6,g=Je(_))}else throw new Error(t("dataframe.incorrect_format"));l(4,r=!0)}catch(_){console.error(_)}}).catch(y=>{l(6,g=n),l(4,r=!0)})},[n,i,f,c,r,d,g,a,t,z,o]}class Bl extends C{constructor(e){super(),A(this,e,Ll,Dl,j,{value:0,samples_dir:7,type:1,selected:2,index:3})}}function Rl(s){let e,l;return{c(){e=k("div"),l=N(s[0]),m(e,"class","svelte-1ayixqk"),u(e,"table",s[1]==="table"),u(e,"gallery",s[1]==="gallery"),u(e,"selected",s[2])},m(t,n){b(t,e,n),M(e,l)},p(t,[n]){n&1&&T(l,t[0]),n&2&&u(e,"table",t[1]==="table"),n&2&&u(e,"gallery",t[1]==="gallery"),n&4&&u(e,"selected",t[2])},i:w,o:w,d(t){t&&v(e)}}}function Il(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class Fl extends C{constructor(e){super(),A(this,e,Il,Rl,j,{value:0,type:1,selected:2})}}function Pl(s){let e;return{c(){e=k("div"),p(e,"background-color",s[0]),m(e,"class","svelte-h6ogpl"),u(e,"table",s[1]==="table"),u(e,"gallery",s[1]==="gallery"),u(e,"selected",s[2])},m(l,t){b(l,e,t)},p(l,[t]){t&1&&p(e,"background-color",l[0]),t&2&&u(e,"table",l[1]==="table"),t&2&&u(e,"gallery",l[1]==="gallery"),t&4&&u(e,"selected",l[2])},i:w,o:w,d(l){l&&v(e)}}}function El(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class Ol extends C{constructor(e){super(),A(this,e,El,Pl,j,{value:0,type:1,selected:2})}}function Wl(s){let e,l;return{c(){e=k("div"),l=N(s[0]),m(e,"class","svelte-1ayixqk"),u(e,"table",s[1]==="table"),u(e,"gallery",s[1]==="gallery"),u(e,"selected",s[2])},m(t,n){b(t,e,n),M(e,l)},p(t,[n]){n&1&&T(l,t[0]),n&2&&u(e,"table",t[1]==="table"),n&2&&u(e,"gallery",t[1]==="gallery"),n&4&&u(e,"selected",t[2])},i:w,o:w,d(t){t&&v(e)}}}function Vl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class Gl extends C{constructor(e){super(),A(this,e,Vl,Wl,j,{value:0,type:1,selected:2})}}function Kl(s){let e;return{c(){e=k("div"),m(e,"class","prose svelte-1ayixqk"),u(e,"table",s[1]==="table"),u(e,"gallery",s[1]==="gallery"),u(e,"selected",s[2])},m(l,t){b(l,e,t),e.innerHTML=s[0]},p(l,[t]){t&1&&(e.innerHTML=l[0]),t&2&&u(e,"table",l[1]==="table"),t&2&&u(e,"gallery",l[1]==="gallery"),t&4&&u(e,"selected",l[2])},i:w,o:w,d(l){l&&v(e)}}}function Ql(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class Xl extends C{constructor(e){super(),A(this,e,Ql,Kl,j,{value:0,type:1,selected:2})}}function Yl(s){let e;return{c(){e=k("div"),m(e,"class","prose svelte-zvfedn"),u(e,"table",s[1]==="table"),u(e,"gallery",s[1]==="gallery"),u(e,"selected",s[2])},m(l,t){b(l,e,t),e.innerHTML=s[0]},p(l,[t]){t&1&&(e.innerHTML=l[0]),t&2&&u(e,"table",l[1]==="table"),t&2&&u(e,"gallery",l[1]==="gallery"),t&4&&u(e,"selected",l[2])},i:w,o:w,d(l){l&&v(e)}}}function Zl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class Jl extends C{constructor(e){super(),A(this,e,Zl,Yl,j,{value:0,type:1,selected:2})}}function Ul(s){let e,l;return{c(){e=k("pre"),l=N(s[0]),m(e,"class","svelte-agpzo2"),u(e,"table",s[1]==="table"),u(e,"gallery",s[1]==="gallery"),u(e,"selected",s[2])},m(t,n){b(t,e,n),M(e,l)},p(t,[n]){n&1&&T(l,t[0]),n&2&&u(e,"table",t[1]==="table"),n&2&&u(e,"gallery",t[1]==="gallery"),n&4&&u(e,"selected",t[2])},i:w,o:w,d(t){t&&v(e)}}}function pl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class xl extends C{constructor(e){super(),A(this,e,pl,Ul,j,{value:0,type:1,selected:2})}}const G={dropdown:ll,checkbox:sl,checkboxgroup:fl,number:xe,slider:rl,radio:dl,image:hl,textbox:yl,audio:ql,video:Cl,file:Nl,dataframe:Bl,model3d:Fl,colorpicker:Ol,timeseries:Gl,markdown:Xl,html:Jl,code:xl};function be(s,e,l){const t=s.slice();return t[32]=e[l],t}function ve(s,e,l){const t=s.slice();return t[35]=e[l],t[37]=l,t}function ye(s,e,l){const t=s.slice();t[0]=e[l].value,t[39]=e[l].component,t[42]=l;const n=t[1][t[42]];return t[40]=n,t}function ke(s,e,l){const t=s.slice();return t[43]=e[l],t}function we(s,e,l){const t=s.slice();return t[35]=e[l],t[37]=l,t}function $l(s){let e,l,t,n,a,i,f,c=D(s[3]),d=[];for(let o=0;o<c.length;o+=1)d[o]=qe(ke(s,c,o));let g=D(s[15]),r=[];for(let o=0;o<g.length;o+=1)r[o]=He(ve(s,g,o));const z=o=>S(r[o],1,1,()=>{r[o]=null});return{c(){e=k("div"),l=k("table"),t=k("thead"),n=k("tr");for(let o=0;o<d.length;o+=1)d[o].c();a=I(),i=k("tbody");for(let o=0;o<r.length;o+=1)r[o].c();m(n,"class","tr-head svelte-13hsdno"),m(l,"class","svelte-13hsdno"),m(e,"class","table-wrap svelte-13hsdno")},m(o,y){b(o,e,y),M(e,l),M(l,t),M(t,n);for(let _=0;_<d.length;_+=1)d[_]&&d[_].m(n,null);M(l,a),M(l,i);for(let _=0;_<r.length;_+=1)r[_]&&r[_].m(i,null);f=!0},p(o,y){if(y[0]&8){c=D(o[3]);let _;for(_=0;_<c.length;_+=1){const q=ke(o,c,_);d[_]?d[_].p(q,y):(d[_]=qe(q),d[_].c(),d[_].m(n,null))}for(;_<d.length;_+=1)d[_].d(1);d.length=c.length}if(y[0]&1756291){g=D(o[15]);let _;for(_=0;_<g.length;_+=1){const q=ve(o,g,_);r[_]?(r[_].p(q,y),H(r[_],1)):(r[_]=He(q),r[_].c(),H(r[_],1),r[_].m(i,null))}for(O(),_=g.length;_<r.length;_+=1)z(_);W()}},i(o){if(!f){for(let y=0;y<g.length;y+=1)H(r[y]);f=!0}},o(o){r=r.filter(Boolean);for(let y=0;y<r.length;y+=1)S(r[y]);f=!1},d(o){o&&v(e),E(d,o),E(r,o)}}}function et(s){let e,l,t=D(s[12]),n=[];for(let i=0;i<t.length;i+=1)n[i]=Ae(we(s,t,i));const a=i=>S(n[i],1,1,()=>{n[i]=null});return{c(){e=k("div");for(let i=0;i<n.length;i+=1)n[i].c();m(e,"class","gallery svelte-13hsdno")},m(i,f){b(i,e,f);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null);l=!0},p(i,f){if(f[0]&1760387){t=D(i[12]);let c;for(c=0;c<t.length;c+=1){const d=we(i,t,c);n[c]?(n[c].p(d,f),H(n[c],1)):(n[c]=Ae(d),n[c].c(),H(n[c],1),n[c].m(e,null))}for(O(),c=t.length;c<n.length;c+=1)a(c);W()}},i(i){if(!l){for(let f=0;f<t.length;f+=1)H(n[f]);l=!0}},o(i){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)S(n[f]);l=!1},d(i){i&&v(e),E(n,i)}}}function qe(s){let e,l=s[43]+"",t,n;return{c(){e=k("th"),t=N(l),n=I(),m(e,"class","svelte-13hsdno")},m(a,i){b(a,e,i),M(e,t),M(e,n)},p(a,i){i[0]&8&&l!==(l=a[43]+"")&&T(t,l)},d(a){a&&v(e)}}}function ze(s){let e,l,t,n;var a=s[39];function i(f){return{props:{value:f[0],samples_dir:f[17],type:"table",selected:f[14]===f[37],index:f[37]}}}return a&&(l=x(a,i(s))),{c(){e=k("td"),l&&Q(l.$$.fragment),p(e,"max-width",s[40]==="textbox"?"35ch":"auto"),m(e,"class",t=ae(s[40])+" svelte-13hsdno")},m(f,c){b(f,e,c),l&&X(l,e,null),n=!0},p(f,c){const d={};if(c[0]&32768&&(d.value=f[0]),c[0]&16384&&(d.selected=f[14]===f[37]),c[0]&32768&&a!==(a=f[39])){if(l){O();const g=l;S(g.$$.fragment,1,0,()=>{Y(g,1)}),W()}a?(l=x(a,i(f)),Q(l.$$.fragment),H(l.$$.fragment,1),X(l,e,null)):l=null}else a&&l.$set(d);(!n||c[0]&2)&&p(e,"max-width",f[40]==="textbox"?"35ch":"auto"),(!n||c[0]&2&&t!==(t=ae(f[40])+" svelte-13hsdno"))&&m(e,"class",t)},i(f){n||(l&&H(l.$$.fragment,f),n=!0)},o(f){l&&S(l.$$.fragment,f),n=!1},d(f){f&&v(e),l&&Y(l)}}}function Me(s){let e,l,t=s[40]!==void 0&&G[s[40]]!==void 0&&ze(s);return{c(){t&&t.c(),e=K()},m(n,a){t&&t.m(n,a),b(n,e,a),l=!0},p(n,a){n[40]!==void 0&&G[n[40]]!==void 0?t?(t.p(n,a),a[0]&2&&H(t,1)):(t=ze(n),t.c(),H(t,1),t.m(e.parentNode,e)):t&&(O(),S(t,1,1,()=>{t=null}),W())},i(n){l||(H(t),l=!0)},o(n){S(t),l=!1},d(n){n&&v(e),t&&t.d(n)}}}function He(s){let e,l,t,n,a,i=D(s[35]),f=[];for(let r=0;r<i.length;r+=1)f[r]=Me(ye(s,i,r));const c=r=>S(f[r],1,1,()=>{f[r]=null});function d(){return s[28](s[37])}function g(){return s[29](s[37])}return{c(){e=k("tr");for(let r=0;r<f.length;r+=1)f[r].c();l=I(),m(e,"class","tr-body svelte-13hsdno")},m(r,z){b(r,e,z);for(let o=0;o<f.length;o+=1)f[o]&&f[o].m(e,null);M(e,l),t=!0,n||(a=[R(e,"click",d),R(e,"mouseenter",g),R(e,"mouseleave",s[30])],n=!0)},p(r,z){if(s=r,z[0]&180226){i=D(s[35]);let o;for(o=0;o<i.length;o+=1){const y=ye(s,i,o);f[o]?(f[o].p(y,z),H(f[o],1)):(f[o]=Me(y),f[o].c(),H(f[o],1),f[o].m(e,l))}for(O(),o=i.length;o<f.length;o+=1)c(o);W()}},i(r){if(!t){for(let z=0;z<i.length;z+=1)H(f[z]);t=!0}},o(r){f=f.filter(Boolean);for(let z=0;z<f.length;z+=1)S(f[z]);t=!1},d(r){r&&v(e),E(f,r),n=!1,$(a)}}}function Ce(s){let e,l,t;var n=s[15][0][0].component;function a(i){return{props:{value:i[35][0],samples_dir:i[17],type:"gallery",selected:i[14]===i[37],index:i[37]}}}return n&&(e=x(n,a(s))),{c(){e&&Q(e.$$.fragment),l=K()},m(i,f){e&&X(e,i,f),b(i,l,f),t=!0},p(i,f){const c={};if(f[0]&4096&&(c.value=i[35][0]),f[0]&16384&&(c.selected=i[14]===i[37]),f[0]&32768&&n!==(n=i[15][0][0].component)){if(e){O();const d=e;S(d.$$.fragment,1,0,()=>{Y(d,1)}),W()}n?(e=x(n,a(i)),Q(e.$$.fragment),H(e.$$.fragment,1),X(e,l.parentNode,l)):e=null}else n&&e.$set(c)},i(i){t||(e&&H(e.$$.fragment,i),t=!0)},o(i){e&&S(e.$$.fragment,i),t=!1},d(i){i&&v(l),e&&Y(e,i)}}}function Ae(s){let e,l=Object.keys(G).includes(s[1][0])&&G[s[1][0]],t,n,a,i,f=l&&Ce(s);function c(){return s[25](s[37],s[35])}function d(){return s[26](s[37])}return{c(){e=k("button"),f&&f.c(),t=I(),m(e,"class","gallery-item svelte-13hsdno")},m(g,r){b(g,e,r),f&&f.m(e,null),M(e,t),n=!0,a||(i=[R(e,"click",c),R(e,"mouseenter",d),R(e,"mouseleave",s[27])],a=!0)},p(g,r){s=g,r[0]&2&&(l=Object.keys(G).includes(s[1][0])&&G[s[1][0]]),l?f?(f.p(s,r),r[0]&2&&H(f,1)):(f=Ce(s),f.c(),H(f,1),f.m(e,t)):f&&(O(),S(f,1,1,()=>{f=null}),W())},i(g){n||(H(f),n=!0)},o(g){S(f),n=!1},d(g){g&&v(e),f&&f.d(),a=!1,$(i)}}}function lt(s){let e,l,t=D(s[13]),n=[];for(let a=0;a<t.length;a+=1)n[a]=je(be(s,t,a));return{c(){e=k("div"),l=N(`Pages:
			`);for(let a=0;a<n.length;a+=1)n[a].c();m(e,"class","paginate svelte-13hsdno")},m(a,i){b(a,e,i),M(e,l);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(e,null)},p(a,i){if(i[0]&10240){t=D(a[13]);let f;for(f=0;f<t.length;f+=1){const c=be(a,t,f);n[f]?n[f].p(c,i):(n[f]=je(c),n[f].c(),n[f].m(e,null))}for(;f<n.length;f+=1)n[f].d(1);n.length=t.length}},d(a){a&&v(e),E(n,a)}}}function tt(s){let e,l=s[32]+1+"",t,n,a,i;function f(){return s[31](s[32])}return{c(){e=k("button"),t=N(l),n=I(),m(e,"class","svelte-13hsdno"),u(e,"current-page",s[11]===s[32])},m(c,d){b(c,e,d),M(e,t),M(e,n),a||(i=R(e,"click",f),a=!0)},p(c,d){s=c,d[0]&8192&&l!==(l=s[32]+1+"")&&T(t,l),d[0]&10240&&u(e,"current-page",s[11]===s[32])},d(c){c&&v(e),a=!1,i()}}}function nt(s){let e;return{c(){e=k("div"),e.textContent="..."},m(l,t){b(l,e,t)},p:w,d(l){l&&v(e)}}}function je(s){let e;function l(a,i){return a[32]===-1?nt:tt}let t=l(s),n=t(s);return{c(){n.c(),e=K()},m(a,i){n.m(a,i),b(a,e,i)},p(a,i){t===(t=l(a))&&n?n.p(a,i):(n.d(1),n=t(a),n&&(n.c(),n.m(e.parentNode,e)))},d(a){a&&v(e),n.d(a)}}}function st(s){let e,l,t,n,a,i,f,c,d,g,r;const z=[et,$l],o=[];function y(q,L){return q[16]?0:1}f=y(s),c=o[f]=z[f](s);let _=s[18]&&lt(s);return{c(){e=k("div"),l=ie("svg"),t=ie("path"),n=I(),a=N(s[2]),i=I(),c.c(),d=I(),_&&_.c(),g=K(),m(t,"fill","currentColor"),m(t,"d","M10 6h18v2H10zm0 18h18v2H10zm0-9h18v2H10zm-6 0h2v2H4zm0-9h2v2H4zm0 18h2v2H4z"),m(l,"xmlns","http://www.w3.org/2000/svg"),m(l,"xmlns:xlink","http://www.w3.org/1999/xlink"),m(l,"aria-hidden","true"),m(l,"role","img"),m(l,"width","1em"),m(l,"height","1em"),m(l,"preserveAspectRatio","xMidYMid meet"),m(l,"viewBox","0 0 32 32"),m(l,"class","svelte-13hsdno"),m(e,"class","label svelte-13hsdno")},m(q,L){b(q,e,L),M(e,l),M(l,t),M(e,n),M(e,a),b(q,i,L),o[f].m(q,L),b(q,d,L),_&&_.m(q,L),b(q,g,L),r=!0},p(q,L){(!r||L[0]&4)&&T(a,q[2]);let F=f;f=y(q),f===F?o[f].p(q,L):(O(),S(o[F],1,1,()=>{o[F]=null}),W(),c=o[f],c?c.p(q,L):(c=o[f]=z[f](q),c.c()),H(c,1),c.m(d.parentNode,d)),q[18]&&_.p(q,L)},i(q){r||(H(c),r=!0)},o(q){S(c),r=!1},d(q){q&&(v(e),v(i),v(d),v(g)),o[f].d(q),_&&_.d(q)}}}function it(s){let e,l;return e=new Ke({props:{visible:s[6],padding:!1,elem_id:s[4],elem_classes:s[5],scale:s[8],min_width:s[9],allow_overflow:!1,container:!1,$$slots:{default:[st]},$$scope:{ctx:s}}}),{c(){Q(e.$$.fragment)},m(t,n){X(e,t,n),l=!0},p(t,n){const a={};n[0]&64&&(a.visible=t[6]),n[0]&16&&(a.elem_id=t[4]),n[0]&32&&(a.elem_classes=t[5]),n[0]&256&&(a.scale=t[8]),n[0]&512&&(a.min_width=t[9]),n[0]&130191|n[1]&32768&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){l||(H(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function at(s,e,l){let t,n,{components:a}=e,{label:i="Examples"}=e,{headers:f}=e,{samples:c}=e,{elem_id:d=""}=e,{elem_classes:g=[]}=e,{visible:r=!0}=e,{value:z=null}=e,{root:o}=e,{root_url:y}=e,{samples_per_page:_=10}=e,{scale:q=null}=e,{min_width:L=void 0}=e,{gradio:F}=e,Te=Qe(null,o,y),V=0,ne=c.length>_,Z,J,P=[],ee=-1;function le(h){l(14,ee=h)}function te(){l(14,ee=-1)}const De=(h,B)=>{l(0,z=h+V*_),F.dispatch("click",z),F.dispatch("select",{index:z,value:B})},Le=h=>le(h),Be=()=>te(),Re=h=>{l(0,z=h+V*_),F.dispatch("click",z)},Ie=h=>le(h),Fe=()=>te(),Pe=h=>l(11,V=h);return s.$$set=h=>{"components"in h&&l(1,a=h.components),"label"in h&&l(2,i=h.label),"headers"in h&&l(3,f=h.headers),"samples"in h&&l(21,c=h.samples),"elem_id"in h&&l(4,d=h.elem_id),"elem_classes"in h&&l(5,g=h.elem_classes),"visible"in h&&l(6,r=h.visible),"value"in h&&l(0,z=h.value),"root"in h&&l(22,o=h.root),"root_url"in h&&l(23,y=h.root_url),"samples_per_page"in h&&l(7,_=h.samples_per_page),"scale"in h&&l(8,q=h.scale),"min_width"in h&&l(9,L=h.min_width),"gradio"in h&&l(10,F=h.gradio)},s.$$.update=()=>{s.$$.dirty[0]&2&&l(16,t=a.length<2),s.$$.dirty[0]&18884736&&(ne?(l(13,P=[]),l(12,Z=c.slice(V*_,(V+1)*_)),l(24,J=Math.ceil(c.length/_)),[0,V,J-1].forEach(h=>{for(let B=h-2;B<=h+2;B++)B>=0&&B<J&&!P.includes(B)&&(P.length>0&&B-P[P.length-1]>1&&P.push(-1),P.push(B))})):l(12,Z=c.slice())),s.$$.dirty[0]&4098&&l(15,n=Z.map(h=>h.map((B,Ee)=>({value:B,component:G[a[Ee]]}))))},[z,a,i,f,d,g,r,_,q,L,F,V,Z,P,ee,n,t,Te,ne,le,te,c,o,y,J,De,Le,Be,Re,Ie,Fe,Pe]}class ft extends C{constructor(e){super(),A(this,e,at,it,j,{components:1,label:2,headers:3,samples:21,elem_id:4,elem_classes:5,visible:6,value:0,root:22,root_url:23,samples_per_page:7,scale:8,min_width:9,gradio:10},null,[-1,-1])}}const dt=ft;export{dt as default};
//# sourceMappingURL=index-da1d4cc5.js.map
