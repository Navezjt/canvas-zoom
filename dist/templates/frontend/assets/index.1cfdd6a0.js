import{S as T,i as D,s as G,F as b,H as C,G as y,B as u,f as v,D as h,J as q,p as k,c as N,m as R,o as A,t as B,l as I,N as j,A as z,O as E,K as J,af as fe,b as K,e as re,g as ue,h as _e,k as ce,n as oe,v as ge}from"./index.ec637aae.js";import"./Empty.svelte_svelte_type_style_lang.e5cb3f6c.js";import{B as M}from"./BlockTitle.8d34fd94.js";import"./Info.bca47f2a.js";const w=i=>{var e=null;return i<0?e=[52,152,219]:e=[231,76,60],me(he(Math.abs(i),[255,255,255],e))},he=(i,e,t)=>{i>1&&(i=1),i=Math.sqrt(i);var n=[0,0,0],o;for(o=0;o<3;o++)n[o]=Math.round(e[o]*(1-i)+t[o]*i);return n},me=i=>"rgb("+i[0]+", "+i[1]+", "+i[2]+")",U=(i,e,t,n,o)=>{var s=n/o,c=e/t,l=0,r=0,f=i?s>c:s<c;return f?(l=e,r=l/s):(r=t,l=r*s),{width:l,height:r,x:(e-l)/2,y:(t-r)/2}};function L(i,e,t){const n=i.slice();return n[2]=e[t],n}function de(i){let e;return{c(){e=C(i[1])},m(t,n){v(t,e,n)},p(t,n){n&2&&q(e,t[1])},d(t){t&&k(e)}}}function P(i){let e,t=i[2][0]+"",n,o,s;return{c(){e=b("div"),n=C(t),o=y(),u(e,"class","item svelte-x6nxfm"),u(e,"style",s="background-color: "+w(i[2][1]))},m(c,l){v(c,e,l),h(e,n),h(e,o)},p(c,l){l&1&&t!==(t=c[2][0]+"")&&q(n,t),l&1&&s!==(s="background-color: "+w(c[2][1]))&&u(e,"style",s)},d(c){c&&k(e)}}}function be(i){let e,t,n,o,s;t=new M({props:{$$slots:{default:[de]},$$scope:{ctx:i}}});let c=i[0],l=[];for(let r=0;r<c.length;r+=1)l[r]=P(L(i,c,r));return{c(){e=b("div"),N(t.$$.fragment),n=y(),o=b("div");for(let r=0;r<l.length;r+=1)l[r].c();u(o,"class","range svelte-x6nxfm"),u(e,"class","input-number svelte-x6nxfm")},m(r,f){v(r,e,f),R(t,e,null),h(e,n),h(e,o);for(let a=0;a<l.length;a+=1)l[a].m(o,null);s=!0},p(r,[f]){const a={};if(f&34&&(a.$$scope={dirty:f,ctx:r}),t.$set(a),f&1){c=r[0];let _;for(_=0;_<c.length;_+=1){const g=L(r,c,_);l[_]?l[_].p(g,f):(l[_]=P(g),l[_].c(),l[_].m(o,null))}for(;_<l.length;_+=1)l[_].d(1);l.length=c.length}},i(r){s||(A(t.$$.fragment,r),s=!0)},o(r){B(t.$$.fragment,r),s=!1},d(r){r&&k(e),I(t),j(l,r)}}}function ve(i,e,t){let{interpretation:n}=e,{label:o=""}=e;return i.$$set=s=>{"interpretation"in s&&t(0,n=s.interpretation),"label"in s&&t(1,o=s.label)},[n,o]}class ke extends T{constructor(e){super(),D(this,e,ve,be,G,{interpretation:0,label:1})}}function Q(i,e,t){const n=i.slice();return n[3]=e[t],n[5]=t,n}function pe(i){let e;return{c(){e=C(i[2])},m(t,n){v(t,e,n)},p(t,n){n&4&&q(e,t[2])},d(t){t&&k(e)}}}function V(i){let e,t=i[3]+"",n,o,s;return{c(){e=b("li"),n=C(t),o=y(),u(e,"class","dropdown-item svelte-1cqwepf"),u(e,"style",s="background-color: "+w(i[0][i[5]]))},m(c,l){v(c,e,l),h(e,n),h(e,o)},p(c,l){l&2&&t!==(t=c[3]+"")&&q(n,t),l&1&&s!==(s="background-color: "+w(c[0][c[5]]))&&u(e,"style",s)},d(c){c&&k(e)}}}function we(i){let e,t,n,o,s;t=new M({props:{$$slots:{default:[pe]},$$scope:{ctx:i}}});let c=i[1],l=[];for(let r=0;r<c.length;r+=1)l[r]=V(Q(i,c,r));return{c(){e=b("div"),N(t.$$.fragment),n=y(),o=b("ul");for(let r=0;r<l.length;r+=1)l[r].c();u(o,"class","dropdown-menu svelte-1cqwepf")},m(r,f){v(r,e,f),R(t,e,null),h(e,n),h(e,o);for(let a=0;a<l.length;a+=1)l[a].m(o,null);s=!0},p(r,[f]){const a={};if(f&68&&(a.$$scope={dirty:f,ctx:r}),t.$set(a),f&3){c=r[1];let _;for(_=0;_<c.length;_+=1){const g=Q(r,c,_);l[_]?l[_].p(g,f):(l[_]=V(g),l[_].c(),l[_].m(o,null))}for(;_<l.length;_+=1)l[_].d(1);l.length=c.length}},i(r){s||(A(t.$$.fragment,r),s=!0)},o(r){B(t.$$.fragment,r),s=!1},d(r){r&&k(e),I(t),j(l,r)}}}function ye(i,e,t){let{interpretation:n}=e,{choices:o}=e,{label:s=""}=e;return i.$$set=c=>{"interpretation"in c&&t(0,n=c.interpretation),"choices"in c&&t(1,o=c.choices),"label"in c&&t(2,s=c.label)},[n,o,s]}class Se extends T{constructor(e){super(),D(this,e,ye,we,G,{interpretation:0,choices:1,label:2})}}function Ce(i){let e;return{c(){e=C(i[0])},m(t,n){v(t,e,n)},p(t,n){n&1&&q(e,t[0])},d(t){t&&k(e)}}}function qe(i){let e,t,n,o,s,c,l,r,f,a,_,g,m;return t=new M({props:{$$slots:{default:[Ce]},$$scope:{ctx:i}}}),{c(){e=b("div"),N(t.$$.fragment),n=y(),o=b("button"),s=b("div"),l=y(),r=b("div"),f=z("svg"),a=z("line"),_=z("line"),u(s,"class","checkbox svelte-1nw19ca"),u(s,"style",c="background-color: "+w(i[2][0])),u(a,"x1","-7.5"),u(a,"y1","0"),u(a,"x2","-2.5"),u(a,"y2","5"),u(a,"stroke","black"),u(a,"stroke-width","4"),u(a,"stroke-linecap","round"),u(_,"x1","-2.5"),u(_,"y1","5"),u(_,"x2","7.5"),u(_,"y2","-7.5"),u(_,"stroke","black"),u(_,"stroke-width","4"),u(_,"stroke-linecap","round"),u(f,"viewBox","-10 -10 20 20"),u(f,"class","svelte-1nw19ca"),u(r,"class","checkbox svelte-1nw19ca"),u(r,"style",g="background-color: "+w(i[2][1])),u(o,"class","checkbox-item svelte-1nw19ca"),E(o,"selected",i[1]),u(e,"class","input-checkbox svelte-1nw19ca")},m(d,p){v(d,e,p),R(t,e,null),h(e,n),h(e,o),h(o,s),h(o,l),h(o,r),h(r,f),h(f,a),h(f,_),m=!0},p(d,[p]){const S={};p&9&&(S.$$scope={dirty:p,ctx:d}),t.$set(S),(!m||p&4&&c!==(c="background-color: "+w(d[2][0])))&&u(s,"style",c),(!m||p&4&&g!==(g="background-color: "+w(d[2][1])))&&u(r,"style",g),p&2&&E(o,"selected",d[1])},i(d){m||(A(t.$$.fragment,d),m=!0)},o(d){B(t.$$.fragment,d),m=!1},d(d){d&&k(e),I(t)}}}function Ae(i,e,t){let{label:n=""}=e,{original:o}=e,{interpretation:s}=e;return i.$$set=c=>{"label"in c&&t(0,n=c.label),"original"in c&&t(1,o=c.original),"interpretation"in c&&t(2,s=c.interpretation)},[n,o,s]}class Be extends T{constructor(e){super(),D(this,e,Ae,qe,G,{label:0,original:1,interpretation:2})}}function W(i,e,t){const n=i.slice();return n[4]=e[t],n[6]=t,n}function Ne(i){let e;return{c(){e=C(i[3])},m(t,n){v(t,e,n)},p(t,n){n&8&&q(e,t[3])},d(t){t&&k(e)}}}function X(i){let e,t,n,o,s,c,l,r,f,a,_=i[4]+"",g,m;return{c(){e=b("button"),t=b("div"),o=y(),s=b("div"),c=z("svg"),l=z("line"),r=z("line"),a=y(),g=C(_),m=y(),u(t,"class","checkbox svelte-1cbhr6k"),u(t,"style",n="background-color: "+w(i[1][i[6]][0])),u(l,"x1","-7.5"),u(l,"y1","0"),u(l,"x2","-2.5"),u(l,"y2","5"),u(l,"stroke","black"),u(l,"stroke-width","4"),u(l,"stroke-linecap","round"),u(r,"x1","-2.5"),u(r,"y1","5"),u(r,"x2","7.5"),u(r,"y2","-7.5"),u(r,"stroke","black"),u(r,"stroke-width","4"),u(r,"stroke-linecap","round"),u(c,"viewBox","-10 -10 20 20"),u(c,"class","svelte-1cbhr6k"),u(s,"class","checkbox svelte-1cbhr6k"),u(s,"style",f="background-color: "+w(i[1][i[6]][1])),u(e,"class","checkbox-item  svelte-1cbhr6k"),E(e,"selected",i[0].includes(i[4]))},m(d,p){v(d,e,p),h(e,t),h(e,o),h(e,s),h(s,c),h(c,l),h(c,r),h(e,a),h(e,g),h(e,m)},p(d,p){p&2&&n!==(n="background-color: "+w(d[1][d[6]][0]))&&u(t,"style",n),p&2&&f!==(f="background-color: "+w(d[1][d[6]][1]))&&u(s,"style",f),p&4&&_!==(_=d[4]+"")&&q(g,_),p&5&&E(e,"selected",d[0].includes(d[4]))},d(d){d&&k(e)}}}function Re(i){let e,t,n,o;t=new M({props:{$$slots:{default:[Ne]},$$scope:{ctx:i}}});let s=i[2],c=[];for(let l=0;l<s.length;l+=1)c[l]=X(W(i,s,l));return{c(){e=b("div"),N(t.$$.fragment),n=y();for(let l=0;l<c.length;l+=1)c[l].c();u(e,"class","input-checkbox-group svelte-1cbhr6k")},m(l,r){v(l,e,r),R(t,e,null),h(e,n);for(let f=0;f<c.length;f+=1)c[f].m(e,null);o=!0},p(l,[r]){const f={};if(r&136&&(f.$$scope={dirty:r,ctx:l}),t.$set(f),r&7){s=l[2];let a;for(a=0;a<s.length;a+=1){const _=W(l,s,a);c[a]?c[a].p(_,r):(c[a]=X(_),c[a].c(),c[a].m(e,null))}for(;a<c.length;a+=1)c[a].d(1);c.length=s.length}},i(l){o||(A(t.$$.fragment,l),o=!0)},o(l){B(t.$$.fragment,l),o=!1},d(l){l&&k(e),I(t),j(c,l)}}}function Ie(i,e,t){let{original:n}=e,{interpretation:o}=e,{choices:s}=e,{label:c=""}=e;return i.$$set=l=>{"original"in l&&t(0,n=l.original),"interpretation"in l&&t(1,o=l.interpretation),"choices"in l&&t(2,s=l.choices),"label"in l&&t(3,c=l.label)},[n,o,s,c]}class Te extends T{constructor(e){super(),D(this,e,Ie,Re,G,{original:0,interpretation:1,choices:2,label:3})}}function Y(i,e,t){const n=i.slice();return n[6]=e[t],n}function De(i){let e;return{c(){e=C(i[5])},m(t,n){v(t,e,n)},p(t,n){n&32&&q(e,t[5])},d(t){t&&k(e)}}}function Z(i){let e,t;return{c(){e=b("div"),u(e,"style",t="background-color: "+w(i[6])),u(e,"class","svelte-1sxprr7")},m(n,o){v(n,e,o)},p(n,o){o&2&&t!==(t="background-color: "+w(n[6]))&&u(e,"style",t)},d(n){n&&k(e)}}}function Ge(i){let e,t,n,o,s,c,l,r,f,a;t=new M({props:{$$slots:{default:[De]},$$scope:{ctx:i}}});let _=i[1],g=[];for(let m=0;m<_.length;m+=1)g[m]=Z(Y(i,_,m));return{c(){e=b("div"),N(t.$$.fragment),n=y(),o=b("input"),s=y(),c=b("div");for(let m=0;m<g.length;m+=1)g[m].c();l=y(),r=b("div"),f=C(i[0]),u(o,"type","range"),o.disabled=!0,u(o,"min",i[2]),u(o,"max",i[3]),u(o,"step",i[4]),u(o,"class","svelte-1sxprr7"),u(c,"class","range  svelte-1sxprr7"),u(r,"class","original svelte-1sxprr7"),u(e,"class","input-slider svelte-1sxprr7")},m(m,d){v(m,e,d),R(t,e,null),h(e,n),h(e,o),h(e,s),h(e,c);for(let p=0;p<g.length;p+=1)g[p].m(c,null);h(e,l),h(e,r),h(r,f),a=!0},p(m,[d]){const p={};if(d&544&&(p.$$scope={dirty:d,ctx:m}),t.$set(p),(!a||d&4)&&u(o,"min",m[2]),(!a||d&8)&&u(o,"max",m[3]),(!a||d&16)&&u(o,"step",m[4]),d&2){_=m[1];let S;for(S=0;S<_.length;S+=1){const F=Y(m,_,S);g[S]?g[S].p(F,d):(g[S]=Z(F),g[S].c(),g[S].m(c,null))}for(;S<g.length;S+=1)g[S].d(1);g.length=_.length}(!a||d&1)&&q(f,m[0])},i(m){a||(A(t.$$.fragment,m),a=!0)},o(m){B(t.$$.fragment,m),a=!1},d(m){m&&k(e),I(t),j(g,m)}}}function Me(i,e,t){let{original:n}=e,{interpretation:o}=e,{minimum:s}=e,{maximum:c}=e,{step:l}=e,{label:r=""}=e;return i.$$set=f=>{"original"in f&&t(0,n=f.original),"interpretation"in f&&t(1,o=f.interpretation),"minimum"in f&&t(2,s=f.minimum),"maximum"in f&&t(3,c=f.maximum),"step"in f&&t(4,l=f.step),"label"in f&&t(5,r=f.label)},[n,o,s,c,l,r]}class je extends T{constructor(e){super(),D(this,e,Me,Ge,G,{original:0,interpretation:1,minimum:2,maximum:3,step:4,label:5})}}function x(i,e,t){const n=i.slice();return n[4]=e[t],n[6]=t,n}function ze(i){let e;return{c(){e=C(i[3])},m(t,n){v(t,e,n)},p(t,n){n&8&&q(e,t[3])},d(t){t&&k(e)}}}function $(i){let e,t,n,o,s=i[4]+"",c,l;return{c(){e=b("button"),t=b("div"),o=y(),c=C(s),l=y(),u(t,"class","radio-circle svelte-1nekfre"),u(t,"style",n="background-color: "+w(i[1][i[6]])),u(e,"class","radio-item svelte-1nekfre"),E(e,"selected",i[0]===i[4])},m(r,f){v(r,e,f),h(e,t),h(e,o),h(e,c),h(e,l)},p(r,f){f&2&&n!==(n="background-color: "+w(r[1][r[6]]))&&u(t,"style",n),f&4&&s!==(s=r[4]+"")&&q(c,s),f&5&&E(e,"selected",r[0]===r[4])},d(r){r&&k(e)}}}function Ee(i){let e,t,n,o;t=new M({props:{$$slots:{default:[ze]},$$scope:{ctx:i}}});let s=i[2],c=[];for(let l=0;l<s.length;l+=1)c[l]=$(x(i,s,l));return{c(){e=b("div"),N(t.$$.fragment),n=y();for(let l=0;l<c.length;l+=1)c[l].c();u(e,"class","input-radio svelte-1nekfre")},m(l,r){v(l,e,r),R(t,e,null),h(e,n);for(let f=0;f<c.length;f+=1)c[f].m(e,null);o=!0},p(l,[r]){const f={};if(r&136&&(f.$$scope={dirty:r,ctx:l}),t.$set(f),r&7){s=l[2];let a;for(a=0;a<s.length;a+=1){const _=x(l,s,a);c[a]?c[a].p(_,r):(c[a]=$(_),c[a].c(),c[a].m(e,null))}for(;a<c.length;a+=1)c[a].d(1);c.length=s.length}},i(l){o||(A(t.$$.fragment,l),o=!0)},o(l){B(t.$$.fragment,l),o=!1},d(l){l&&k(e),I(t),j(c,l)}}}function Fe(i,e,t){let{original:n}=e,{interpretation:o}=e,{choices:s}=e,{label:c=""}=e;return i.$$set=l=>{"original"in l&&t(0,n=l.original),"interpretation"in l&&t(1,o=l.interpretation),"choices"in l&&t(2,s=l.choices),"label"in l&&t(3,c=l.label)},[n,o,s,c]}class Oe extends T{constructor(e){super(),D(this,e,Fe,Ee,G,{original:0,interpretation:1,choices:2,label:3})}}function He(i){let e;return{c(){e=C(i[1])},m(t,n){v(t,e,n)},p(t,n){n&2&&q(e,t[1])},d(t){t&&k(e)}}}function Je(i){let e,t,n,o,s,c,l,r,f,a;return t=new M({props:{$$slots:{default:[He]},$$scope:{ctx:i}}}),{c(){e=b("div"),N(t.$$.fragment),n=y(),o=b("div"),s=b("div"),c=b("canvas"),l=y(),r=b("img"),u(s,"class","interpretation svelte-h0dntu"),J(r.src,f=i[0])||u(r,"src",f),u(r,"class","svelte-h0dntu"),u(o,"class","image-preview svelte-h0dntu"),u(e,"class","input-image")},m(_,g){v(_,e,g),R(t,e,null),h(e,n),h(e,o),h(o,s),h(s,c),i[6](c),h(o,l),h(o,r),i[7](r),a=!0},p(_,[g]){const m={};g&514&&(m.$$scope={dirty:g,ctx:_}),t.$set(m),(!a||g&1&&!J(r.src,f=_[0]))&&u(r,"src",f)},i(_){a||(A(t.$$.fragment,_),a=!0)},o(_){B(t.$$.fragment,_),a=!1},d(_){_&&k(e),I(t),i[6](null),i[7](null)}}}function Ke(i,e,t){let{original:n}=e,{interpretation:o}=e,{shape:s}=e,{label:c=""}=e,l,r;const f=(g,m,d,p)=>{var S=d/g[0].length,F=p/g.length,O=0;g.forEach(function(se){var H=0;se.forEach(function(ae){m.fillStyle=w(ae),m.fillRect(H*S,O*F,S,F),H++}),O++})};fe(()=>{let g=U(!0,r.width,r.height,r.naturalWidth,r.naturalHeight);s&&(g=U(!0,g.width,g.height,s[0],s[1]));let m=g.width,d=g.height;l.setAttribute("height",`${d}`),l.setAttribute("width",`${m}`),f(o,l.getContext("2d"),m,d)});function a(g){K[g?"unshift":"push"](()=>{l=g,t(2,l)})}function _(g){K[g?"unshift":"push"](()=>{r=g,t(3,r)})}return i.$$set=g=>{"original"in g&&t(0,n=g.original),"interpretation"in g&&t(4,o=g.interpretation),"shape"in g&&t(5,s=g.shape),"label"in g&&t(1,c=g.label)},[n,c,l,r,o,s,a,_]}class Ue extends T{constructor(e){super(),D(this,e,Ke,Je,G,{original:0,interpretation:4,shape:5,label:1})}}function ee(i,e,t){const n=i.slice();return n[2]=e[t],n}function Le(i){let e;return{c(){e=C(i[1])},m(t,n){v(t,e,n)},p(t,n){n&2&&q(e,t[1])},d(t){t&&k(e)}}}function te(i){let e,t;return{c(){e=b("div"),u(e,"class","item svelte-13lmfcp"),u(e,"style",t="background-color: "+w(i[2]))},m(n,o){v(n,e,o)},p(n,o){o&1&&t!==(t="background-color: "+w(n[2]))&&u(e,"style",t)},d(n){n&&k(e)}}}function Pe(i){let e,t,n,o,s;t=new M({props:{$$slots:{default:[Le]},$$scope:{ctx:i}}});let c=i[0],l=[];for(let r=0;r<c.length;r+=1)l[r]=te(ee(i,c,r));return{c(){e=b("div"),N(t.$$.fragment),n=y(),o=b("div");for(let r=0;r<l.length;r+=1)l[r].c();u(o,"class","range svelte-13lmfcp")},m(r,f){v(r,e,f),R(t,e,null),h(e,n),h(e,o);for(let a=0;a<l.length;a+=1)l[a].m(o,null);s=!0},p(r,[f]){const a={};if(f&34&&(a.$$scope={dirty:f,ctx:r}),t.$set(a),f&1){c=r[0];let _;for(_=0;_<c.length;_+=1){const g=ee(r,c,_);l[_]?l[_].p(g,f):(l[_]=te(g),l[_].c(),l[_].m(o,null))}for(;_<l.length;_+=1)l[_].d(1);l.length=c.length}},i(r){s||(A(t.$$.fragment,r),s=!0)},o(r){B(t.$$.fragment,r),s=!1},d(r){r&&k(e),I(t),j(l,r)}}}function Qe(i,e,t){let{interpretation:n}=e,{label:o=""}=e;return i.$$set=s=>{"interpretation"in s&&t(0,n=s.interpretation),"label"in s&&t(1,o=s.label)},[n,o]}class Ve extends T{constructor(e){super(),D(this,e,Qe,Pe,G,{interpretation:0,label:1})}}function le(i,e,t){const n=i.slice();return n[2]=e[t][0],n[3]=e[t][1],n}function We(i){let e;return{c(){e=C(i[0])},m(t,n){v(t,e,n)},p(t,n){n&1&&q(e,t[0])},d(t){t&&k(e)}}}function ne(i){let e,t=i[2]+"",n,o,s;return{c(){e=b("span"),n=C(t),o=y(),u(e,"class","text-span svelte-15c0u2m"),u(e,"style",s="background-color: "+w(i[3]))},m(c,l){v(c,e,l),h(e,n),h(e,o)},p(c,l){l&2&&t!==(t=c[2]+"")&&q(n,t),l&2&&s!==(s="background-color: "+w(c[3]))&&u(e,"style",s)},d(c){c&&k(e)}}}function Xe(i){let e,t,n,o;t=new M({props:{$$slots:{default:[We]},$$scope:{ctx:i}}});let s=i[1],c=[];for(let l=0;l<s.length;l+=1)c[l]=ne(le(i,s,l));return{c(){e=b("div"),N(t.$$.fragment),n=y();for(let l=0;l<c.length;l+=1)c[l].c();u(e,"class","input-text svelte-15c0u2m")},m(l,r){v(l,e,r),R(t,e,null),h(e,n);for(let f=0;f<c.length;f+=1)c[f].m(e,null);o=!0},p(l,[r]){const f={};if(r&65&&(f.$$scope={dirty:r,ctx:l}),t.$set(f),r&2){s=l[1];let a;for(a=0;a<s.length;a+=1){const _=le(l,s,a);c[a]?c[a].p(_,r):(c[a]=ne(_),c[a].c(),c[a].m(e,null))}for(;a<c.length;a+=1)c[a].d(1);c.length=s.length}},i(l){o||(A(t.$$.fragment,l),o=!0)},o(l){B(t.$$.fragment,l),o=!1},d(l){l&&k(e),I(t),j(c,l)}}}function Ye(i,e,t){let{label:n=""}=e,{interpretation:o}=e;return i.$$set=s=>{"label"in s&&t(0,n=s.label),"interpretation"in s&&t(1,o=s.interpretation)},[n,o]}class Ze extends T{constructor(e){super(),D(this,e,Ye,Xe,G,{label:0,interpretation:1})}}const xe={audio:Ve,dropdown:Se,checkbox:Be,checkboxgroup:Te,number:ke,slider:je,radio:Oe,image:Ue,textbox:Ze};function ie(i){let e,t,n;const o=[i[0],{original:i[1].original},{interpretation:i[1].interpretation}];var s=i[2];function c(l){let r={};for(let f=0;f<o.length;f+=1)r=ge(r,o[f]);return{props:r}}return s&&(e=new s(c())),{c(){e&&N(e.$$.fragment),t=re()},m(l,r){e&&R(e,l,r),v(l,t,r),n=!0},p(l,r){const f=r&3?ue(o,[r&1&&_e(l[0]),r&2&&{original:l[1].original},r&2&&{interpretation:l[1].interpretation}]):{};if(s!==(s=l[2])){if(e){ce();const a=e;B(a.$$.fragment,1,0,()=>{I(a,1)}),oe()}s?(e=new s(c()),N(e.$$.fragment),A(e.$$.fragment,1),R(e,t.parentNode,t)):e=null}else s&&e.$set(f)},i(l){n||(e&&A(e.$$.fragment,l),n=!0)},o(l){e&&B(e.$$.fragment,l),n=!1},d(l){l&&k(t),e&&I(e,l)}}}function $e(i){let e,t,n=i[1]&&ie(i);return{c(){n&&n.c(),e=re()},m(o,s){n&&n.m(o,s),v(o,e,s),t=!0},p(o,[s]){o[1]?n?(n.p(o,s),s&2&&A(n,1)):(n=ie(o),n.c(),A(n,1),n.m(e.parentNode,e)):n&&(ce(),B(n,1,1,()=>{n=null}),oe())},i(o){t||(A(n),t=!0)},o(o){B(n),t=!1},d(o){n&&n.d(o),o&&k(e)}}}function et(i,e,t){let n,{component:o}=e,{component_props:s}=e,{value:c}=e;return i.$$set=l=>{"component"in l&&t(3,o=l.component),"component_props"in l&&t(0,s=l.component_props),"value"in l&&t(1,c=l.value)},i.$$.update=()=>{i.$$.dirty&8&&t(2,n=xe[o])},[s,c,n,o]}class tt extends T{constructor(e){super(),D(this,e,et,$e,G,{component:3,component_props:0,value:1})}}var ct=tt;const ot=["dynamic"];export{ct as Component,ot as modes};
//# sourceMappingURL=index.1cfdd6a0.js.map
