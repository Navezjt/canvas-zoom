import{S as j,i as H,s as T,G as C,C as o,M as r,g as d,F as M,q as g,r as L,b as S,e as v,m as h,p as b,t as k,n as w,x as q,$ as B,H as z,h as D,j as E,y as F}from"./index-87d85cdd.js";import{B as G}from"./Button-d1864b92.js";function A(t){let e,l;return{c(){e=C("div"),o(e,"id",t[0]),o(e,"class",l="prose "+t[1].join(" ")+" svelte-1yrv54"),o(e,"data-testid","markdown"),r(e,"min",t[4]),r(e,"hide",!t[2])},m(s,a){d(s,e,a),e.innerHTML=t[3],t[6](e)},p(s,[a]){a&8&&(e.innerHTML=s[3]),a&1&&o(e,"id",s[0]),a&2&&l!==(l="prose "+s[1].join(" ")+" svelte-1yrv54")&&o(e,"class",l),a&18&&r(e,"min",s[4]),a&6&&r(e,"hide",!s[2])},i:M,o:M,d(s){s&&g(e),t[6](null)}}}function I(t,e,l){let{elem_id:s=""}=e,{elem_classes:a=[]}=e,{visible:_=!0}=e,{value:u}=e,{min_height:f=!1}=e;const i=L();let m;function c(n){S[n?"unshift":"push"](()=>{m=n,l(5,m)})}return t.$$set=n=>{"elem_id"in n&&l(0,s=n.elem_id),"elem_classes"in n&&l(1,a=n.elem_classes),"visible"in n&&l(2,_=n.visible),"value"in n&&l(3,u=n.value),"min_height"in n&&l(4,f=n.min_height)},t.$$.update=()=>{t.$$.dirty&8&&i("change")},[s,a,_,u,f,m,c]}class J extends j{constructor(e){super(),H(this,e,I,A,T,{elem_id:0,elem_classes:1,visible:2,value:3,min_height:4})}}function K(t){let e,l,s,a,_;const u=[t[4],{variant:"center"}];let f={};for(let i=0;i<u.length;i+=1)f=q(f,u[i]);return e=new B({props:f}),a=new J({props:{min_height:t[4]&&t[4].status!=="complete",value:t[3],elem_id:t[0],elem_classes:t[1],visible:t[2]}}),a.$on("change",t[6]),{c(){v(e.$$.fragment),l=z(),s=C("div"),v(a.$$.fragment),o(s,"class","svelte-1ed2p3z"),r(s,"pending",t[4]?.status==="pending")},m(i,m){h(e,i,m),d(i,l,m),d(i,s,m),h(a,s,null),_=!0},p(i,m){const c=m&16?D(u,[E(i[4]),u[1]]):{};e.$set(c);const n={};m&16&&(n.min_height=i[4]&&i[4].status!=="complete"),m&8&&(n.value=i[3]),m&1&&(n.elem_id=i[0]),m&2&&(n.elem_classes=i[1]),m&4&&(n.visible=i[2]),a.$set(n),(!_||m&16)&&r(s,"pending",i[4]?.status==="pending")},i(i){_||(b(e.$$.fragment,i),b(a.$$.fragment,i),_=!0)},o(i){k(e.$$.fragment,i),k(a.$$.fragment,i),_=!1},d(i){w(e,i),i&&g(l),i&&g(s),w(a)}}}function N(t){let e,l;return e=new G({props:{visible:t[2],elem_id:t[0],elem_classes:t[1],disable:!0,$$slots:{default:[K]},$$scope:{ctx:t}}}),{c(){v(e.$$.fragment)},m(s,a){h(e,s,a),l=!0},p(s,[a]){const _={};a&4&&(_.visible=s[2]),a&1&&(_.elem_id=s[0]),a&2&&(_.elem_classes=s[1]),a&287&&(_.$$scope={dirty:a,ctx:s}),e.$set(_)},i(s){l||(b(e.$$.fragment,s),l=!0)},o(s){k(e.$$.fragment,s),l=!1},d(s){w(e,s)}}}function O(t,e,l){let{label:s}=e,{elem_id:a=""}=e,{elem_classes:_=[]}=e,{visible:u=!0}=e,{value:f=""}=e,{loading_status:i}=e;const m=L();function c(n){F.call(this,t,n)}return t.$$set=n=>{"label"in n&&l(5,s=n.label),"elem_id"in n&&l(0,a=n.elem_id),"elem_classes"in n&&l(1,_=n.elem_classes),"visible"in n&&l(2,u=n.visible),"value"in n&&l(3,f=n.value),"loading_status"in n&&l(4,i=n.loading_status)},t.$$.update=()=>{t.$$.dirty&32&&m("change")},[a,_,u,f,i,s,c]}class P extends j{constructor(e){super(),H(this,e,O,N,T,{label:5,elem_id:0,elem_classes:1,visible:2,value:3,loading_status:4})}}const U=P,V=["static"],W=t=>({type:{payload:"string"},description:{payload:"HTML rendering of markdown"}});export{U as Component,W as document,V as modes};
//# sourceMappingURL=index-1196caea.js.map
