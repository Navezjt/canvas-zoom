import{S as H,i as J,s as M,e as w,f as k,p,W as N,F as j,G as I,B as v,O as S,D as g,y as O,X as W,Y as X,Z as Y,o as Z,t as z,T as q,q as K,u as L,ao as P,w as B,ap as C,H as E,I as Q,J as F}from"./index.ec637aae.js";function D(n,e,l){const s=n.slice();return s[14]=e[l],s[16]=l,s}function R(n){let e,l=n[14].name+"",s,f,d,_;function i(){return n[12](n[14],n[16])}return{c(){e=j("button"),s=E(l),f=I(),v(e,"class","svelte-1g805jl")},m(u,m){k(u,e,m),g(e,s),g(e,f),d||(_=Q(e,"click",i),d=!0)},p(u,m){n=u,m&8&&l!==(l=n[14].name+"")&&F(s,l)},d(u){u&&p(e),d=!1,_()}}}function U(n){let e,l=n[14].name+"",s,f;return{c(){e=j("button"),s=E(l),f=I(),v(e,"class","selected svelte-1g805jl")},m(d,_){k(d,e,_),g(e,s),g(e,f)},p(d,_){_&8&&l!==(l=d[14].name+"")&&F(s,l)},d(d){d&&p(e)}}}function A(n,e){let l,s;function f(i,u){return i[14].id===i[4]?U:R}let d=f(e),_=d(e);return{key:n,first:null,c(){l=w(),_.c(),s=w(),this.first=l},m(i,u){k(i,l,u),_.m(i,u),k(i,s,u)},p(i,u){e=i,d===(d=f(e))&&_?_.p(e,u):(_.d(1),_=d(e),_&&(_.c(),_.m(s.parentNode,s)))},d(i){i&&p(l),_.d(i),i&&p(s)}}}function V(n){let e,l,s=[],f=new Map,d,_,i,u=n[3];const m=t=>t[14].id;for(let t=0;t<u.length;t+=1){let o=D(n,u,t),r=m(o);f.set(r,s[t]=A(r,o))}const b=n[11].default,c=N(b,n,n[10],null);return{c(){e=j("div"),l=j("div");for(let t=0;t<s.length;t+=1)s[t].c();d=I(),c&&c.c(),v(l,"class","tab-nav scroll-hide svelte-1g805jl"),v(e,"class",_="tabs "+n[2].join(" ")+" svelte-1g805jl"),v(e,"id",n[1]),S(e,"hide",!n[0])},m(t,o){k(t,e,o),g(e,l);for(let r=0;r<s.length;r+=1)s[r].m(l,null);g(e,d),c&&c.m(e,null),i=!0},p(t,[o]){o&408&&(u=t[3],s=O(s,o,m,1,t,u,f,l,P,A,null,D)),c&&c.p&&(!i||o&1024)&&W(c,b,t,t[10],i?Y(b,t[10],o,null):X(t[10]),null),(!i||o&4&&_!==(_="tabs "+t[2].join(" ")+" svelte-1g805jl"))&&v(e,"class",_),(!i||o&2)&&v(e,"id",t[1]),o&5&&S(e,"hide",!t[0])},i(t){i||(Z(c,t),i=!0)},o(t){z(c,t),i=!1},d(t){t&&p(e);for(let o=0;o<s.length;o+=1)s[o].d();c&&c.d(t)}}}const x={};function $(n,e,l){let s,f,{$$slots:d={},$$scope:_}=e,{visible:i=!0}=e,{elem_id:u="id"}=e,{elem_classes:m=[]}=e,{selected:b}=e,c=[];const t=B(!1);q(n,t,a=>l(4,f=a));const o=B(0);q(n,o,a=>l(13,s=a));const r=K();L(x,{register_tab:a=>(c.push({name:a.name,id:a.id}),t.update(h=>h??a.id),l(3,c),c.length-1),unregister_tab:a=>{const h=c.findIndex(y=>y.id===a.id);c.splice(h,1),t.update(y=>y===a.id?c[h]?.id||c[c.length-1]?.id:y)},selected_tab:t,selected_tab_index:o});function T(a){l(9,b=a),C(t,f=a,f),C(o,s=c.findIndex(h=>h.id===a),s),r("change")}const G=(a,h)=>{T(a.id),r("select",{value:a.name,index:h})};return n.$$set=a=>{"visible"in a&&l(0,i=a.visible),"elem_id"in a&&l(1,u=a.elem_id),"elem_classes"in a&&l(2,m=a.elem_classes),"selected"in a&&l(9,b=a.selected),"$$scope"in a&&l(10,_=a.$$scope)},n.$$.update=()=>{n.$$.dirty&512&&b!==null&&T(b)},[i,u,m,c,f,t,o,r,T,b,_,d,G]}class te extends H{constructor(e){super(),J(this,e,$,V,M,{visible:0,elem_id:1,elem_classes:2,selected:9})}}export{te as T,x as a};
//# sourceMappingURL=TabItem.svelte_svelte_type_style_lang.6c9c1615.js.map
