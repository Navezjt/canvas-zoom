import{S as H,i as I,s as J,G as j,e as v,H as K,C,g as S,m as k,E as q,ad as y,J as E,al as U,p as w,t as N,q as T,n as B,a0 as O,r as P,a8 as Q,I as R,K as V,T as W,x as X,$ as Y,b as D,a as z,h as Z,j as p,k as G,y as g}from"./index-87d85cdd.js";/* empty css                                                  */import{B as x}from"./Button-d1864b92.js";/* empty css                                                    */import{B as $}from"./BlockTitle-57489203.js";import"./Info-67061f5d.js";function ee(l){let e;return{c(){e=R(l[2])},m(n,t){S(n,e,t)},p(n,t){t&4&&V(e,n[2])},d(n){n&&T(e)}}}function le(l){let e,n,t,s,_,m,r;return n=new $({props:{show_label:l[4],info:l[3],$$slots:{default:[ee]},$$scope:{ctx:l}}}),{c(){e=j("label"),v(n.$$.fragment),t=K(),s=j("input"),C(s,"type","number"),s.disabled=l[1],C(s,"class","svelte-og1zwl"),C(e,"class","block")},m(i,f){S(i,e,f),k(n,e,null),q(e,t),q(e,s),y(s,l[0]),_=!0,m||(r=[E(s,"input",l[8]),E(s,"keypress",l[5]),E(s,"blur",l[6])],m=!0)},p(i,[f]){const c={};f&16&&(c.show_label=i[4]),f&8&&(c.info=i[3]),f&2052&&(c.$$scope={dirty:f,ctx:i}),n.$set(c),(!_||f&2)&&(s.disabled=i[1]),f&1&&U(s.value)!==i[0]&&y(s,i[0])},i(i){_||(w(n.$$.fragment,i),_=!0)},o(i){N(n.$$.fragment,i),_=!1},d(i){i&&T(e),B(n),m=!1,O(r)}}}function te(l,e,n){let{value:t=0}=e,{value_is_output:s=!1}=e,{disabled:_=!1}=e,{label:m}=e,{info:r=void 0}=e,{show_label:i=!0}=e;const f=P();function c(){!isNaN(t)&&t!==null&&(f("change",t),s||f("input"))}Q(()=>{n(7,s=!1)});async function h(o){await W(),o.key==="Enter"&&(o.preventDefault(),f("submit"))}function a(o){f("blur")}function b(){t=U(this.value),n(0,t)}return l.$$set=o=>{"value"in o&&n(0,t=o.value),"value_is_output"in o&&n(7,s=o.value_is_output),"disabled"in o&&n(1,_=o.disabled),"label"in o&&n(2,m=o.label),"info"in o&&n(3,r=o.info),"show_label"in o&&n(4,i=o.show_label)},l.$$.update=()=>{l.$$.dirty&1&&c()},[t,_,m,r,i,h,a,s,b]}class ne extends H{constructor(e){super(),I(this,e,te,le,J,{value:0,value_is_output:7,disabled:1,label:2,info:3,show_label:4})}}function ae(l){let e,n,t,s,_,m;const r=[l[9]];let i={};for(let a=0;a<r.length;a+=1)i=X(i,r[a]);e=new Y({props:i});function f(a){l[11](a)}function c(a){l[12](a)}let h={label:l[2],info:l[3],show_label:l[8],disabled:l[10]==="static"};return l[0]!==void 0&&(h.value=l[0]),l[1]!==void 0&&(h.value_is_output=l[1]),t=new ne({props:h}),D.push(()=>z(t,"value",f)),D.push(()=>z(t,"value_is_output",c)),t.$on("change",l[13]),t.$on("input",l[14]),t.$on("submit",l[15]),t.$on("blur",l[16]),{c(){v(e.$$.fragment),n=K(),v(t.$$.fragment)},m(a,b){k(e,a,b),S(a,n,b),k(t,a,b),m=!0},p(a,b){const o=b&512?Z(r,[p(a[9])]):{};e.$set(o);const d={};b&4&&(d.label=a[2]),b&8&&(d.info=a[3]),b&256&&(d.show_label=a[8]),b&1024&&(d.disabled=a[10]==="static"),!s&&b&1&&(s=!0,d.value=a[0],G(()=>s=!1)),!_&&b&2&&(_=!0,d.value_is_output=a[1],G(()=>_=!1)),t.$set(d)},i(a){m||(w(e.$$.fragment,a),w(t.$$.fragment,a),m=!0)},o(a){N(e.$$.fragment,a),N(t.$$.fragment,a),m=!1},d(a){B(e,a),a&&T(n),B(t,a)}}}function ue(l){let e,n;return e=new x({props:{visible:l[6],elem_id:l[4],elem_classes:l[5],disable:typeof l[7].container=="boolean"&&!l[7].container,$$slots:{default:[ae]},$$scope:{ctx:l}}}),{c(){v(e.$$.fragment)},m(t,s){k(e,t,s),n=!0},p(t,[s]){const _={};s&64&&(_.visible=t[6]),s&16&&(_.elem_id=t[4]),s&32&&(_.elem_classes=t[5]),s&128&&(_.disable=typeof t[7].container=="boolean"&&!t[7].container),s&132879&&(_.$$scope={dirty:s,ctx:t}),e.$set(_)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function se(l,e,n){let{label:t="Number"}=e,{info:s=void 0}=e,{elem_id:_=""}=e,{elem_classes:m=[]}=e,{visible:r=!0}=e,{style:i={}}=e,{value:f=0}=e,{show_label:c}=e,{loading_status:h}=e,{mode:a}=e,{value_is_output:b=!1}=e;function o(u){f=u,n(0,f)}function d(u){b=u,n(1,b)}function A(u){g.call(this,l,u)}function F(u){g.call(this,l,u)}function L(u){g.call(this,l,u)}function M(u){g.call(this,l,u)}return l.$$set=u=>{"label"in u&&n(2,t=u.label),"info"in u&&n(3,s=u.info),"elem_id"in u&&n(4,_=u.elem_id),"elem_classes"in u&&n(5,m=u.elem_classes),"visible"in u&&n(6,r=u.visible),"style"in u&&n(7,i=u.style),"value"in u&&n(0,f=u.value),"show_label"in u&&n(8,c=u.show_label),"loading_status"in u&&n(9,h=u.loading_status),"mode"in u&&n(10,a=u.mode),"value_is_output"in u&&n(1,b=u.value_is_output)},[f,b,t,s,_,m,r,i,c,h,a,o,d,A,F,L,M]}class ie extends H{constructor(e){super(),I(this,e,se,ue,J,{label:2,info:3,elem_id:4,elem_classes:5,visible:6,style:7,value:0,show_label:8,loading_status:9,mode:10,value_is_output:1})}}const ce=ie,de=["static","dynamic"],he=l=>({type:{payload:"number"},description:{payload:"numeric value"},example_data:l.value??1});export{ce as Component,he as document,de as modes};
//# sourceMappingURL=index-4d4ab568.js.map
