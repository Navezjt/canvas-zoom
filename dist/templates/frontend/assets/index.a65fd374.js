import{S as C,i as E,s as T,F as j,c as d,G as F,B as w,f as D,m as h,D as q,M as y,I as N,an as G,o as g,t as k,p as S,l as v,a2 as M,q as V,H as z,J as A,V as K,v as L,a7 as O,b as P,a as Q,g as R,h as U,j as W,x as B}from"./index.b33351d4.js";/* empty css                                                  */import{a as X}from"./Empty.svelte_svelte_type_style_lang.0208edb3.js";/* empty css                                                    */import{B as Y}from"./BlockTitle.b73fc1d0.js";import"./Info.a0605635.js";function Z(l){let e;return{c(){e=z(l[2])},m(n,a){D(n,e,a)},p(n,a){a&4&&A(e,n[2])},d(n){n&&S(e)}}}function p(l){let e,n,a,s,f,m,r;return n=new Y({props:{show_label:l[4],info:l[3],$$slots:{default:[Z]},$$scope:{ctx:l}}}),{c(){e=j("label"),d(n.$$.fragment),a=F(),s=j("input"),w(s,"type","number"),s.disabled=l[1],w(s,"class","svelte-1nnxs9b"),w(e,"class","block")},m(o,b){D(o,e,b),h(n,e,null),q(e,a),q(e,s),y(s,l[0]),f=!0,m||(r=[N(s,"input",l[7]),N(s,"keypress",l[5]),N(s,"blur",l[6])],m=!0)},p(o,[b]){const t={};b&16&&(t.show_label=o[4]),b&8&&(t.info=o[3]),b&1028&&(t.$$scope={dirty:b,ctx:o}),n.$set(t),(!f||b&2)&&(s.disabled=o[1]),b&1&&G(s.value)!==o[0]&&y(s,o[0])},i(o){f||(g(n.$$.fragment,o),f=!0)},o(o){k(n.$$.fragment,o),f=!1},d(o){o&&S(e),v(n),m=!1,M(r)}}}function x(l,e,n){let{value:a=0}=e,{disabled:s=!1}=e,{label:f}=e,{info:m=void 0}=e,{show_label:r=!0}=e;const o=V();function b(u){!isNaN(u)&&u!==null&&o("change",u)}async function t(u){await K(),u.key==="Enter"&&(u.preventDefault(),o("submit"))}function _(u){o("blur")}function c(){a=G(this.value),n(0,a)}return l.$$set=u=>{"value"in u&&n(0,a=u.value),"disabled"in u&&n(1,s=u.disabled),"label"in u&&n(2,f=u.label),"info"in u&&n(3,m=u.info),"show_label"in u&&n(4,r=u.show_label)},l.$$.update=()=>{l.$$.dirty&1&&b(a)},[a,s,f,m,r,t,_,c]}class $ extends C{constructor(e){super(),E(this,e,x,p,T,{value:0,disabled:1,label:2,info:3,show_label:4})}}function ee(l){let e,n,a,s,f;const m=[l[8]];let r={};for(let t=0;t<m.length;t+=1)r=L(r,m[t]);e=new O({props:r});function o(t){l[10](t)}let b={label:l[1],info:l[2],show_label:l[7],disabled:l[9]==="static"};return l[0]!==void 0&&(b.value=l[0]),a=new $({props:b}),P.push(()=>Q(a,"value",o)),a.$on("change",l[11]),a.$on("submit",l[12]),a.$on("blur",l[13]),{c(){d(e.$$.fragment),n=F(),d(a.$$.fragment)},m(t,_){h(e,t,_),D(t,n,_),h(a,t,_),f=!0},p(t,_){const c=_&256?R(m,[U(t[8])]):{};e.$set(c);const u={};_&2&&(u.label=t[1]),_&4&&(u.info=t[2]),_&128&&(u.show_label=t[7]),_&512&&(u.disabled=t[9]==="static"),!s&&_&1&&(s=!0,u.value=t[0],W(()=>s=!1)),a.$set(u)},i(t){f||(g(e.$$.fragment,t),g(a.$$.fragment,t),f=!0)},o(t){k(e.$$.fragment,t),k(a.$$.fragment,t),f=!1},d(t){v(e,t),t&&S(n),v(a,t)}}}function le(l){let e,n;return e=new X({props:{visible:l[5],elem_id:l[3],elem_classes:l[4],disable:typeof l[6].container=="boolean"&&!l[6].container,$$slots:{default:[ee]},$$scope:{ctx:l}}}),{c(){d(e.$$.fragment)},m(a,s){h(e,a,s),n=!0},p(a,[s]){const f={};s&32&&(f.visible=a[5]),s&8&&(f.elem_id=a[3]),s&16&&(f.elem_classes=a[4]),s&64&&(f.disable=typeof a[6].container=="boolean"&&!a[6].container),s&17287&&(f.$$scope={dirty:s,ctx:a}),e.$set(f)},i(a){n||(g(e.$$.fragment,a),n=!0)},o(a){k(e.$$.fragment,a),n=!1},d(a){v(e,a)}}}function ae(l,e,n){let{label:a="Number"}=e,{info:s=void 0}=e,{elem_id:f=""}=e,{elem_classes:m=[]}=e,{visible:r=!0}=e,{style:o={}}=e,{value:b=0}=e,{show_label:t}=e,{loading_status:_}=e,{mode:c}=e;function u(i){b=i,n(0,b)}function H(i){B.call(this,l,i)}function I(i){B.call(this,l,i)}function J(i){B.call(this,l,i)}return l.$$set=i=>{"label"in i&&n(1,a=i.label),"info"in i&&n(2,s=i.info),"elem_id"in i&&n(3,f=i.elem_id),"elem_classes"in i&&n(4,m=i.elem_classes),"visible"in i&&n(5,r=i.visible),"style"in i&&n(6,o=i.style),"value"in i&&n(0,b=i.value),"show_label"in i&&n(7,t=i.show_label),"loading_status"in i&&n(8,_=i.loading_status),"mode"in i&&n(9,c=i.mode)},[b,a,s,f,m,r,o,t,_,c,u,H,I,J]}class ne extends C{constructor(e){super(),E(this,e,ae,le,T,{label:1,info:2,elem_id:3,elem_classes:4,visible:5,style:6,value:0,show_label:7,loading_status:8,mode:9})}}var be=ne;const _e=["static","dynamic"],me=l=>({type:{payload:"number"},description:{payload:"numeric value"},example_data:l.value??1});export{be as Component,me as document,_e as modes};
//# sourceMappingURL=index.a65fd374.js.map
