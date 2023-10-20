import{S as N,e as V,s as X,F as v,o as p,Q as P,G as L,h as E,r as Q,u as b,v as W,w as h,k as R,H as M,D as Z,C as K,a6 as F,R as q,m as I,g as T,j as z,n as A,U as Y,X as y,a8 as x,aa as $,ab as ee,ac as le,Z as ae,ad as ne,V as te,W as oe}from"./index-7a57bd3a.js";import{B as se,n as re}from"./Button-778c588b.js";import{U as ie}from"./UploadText-39304b69.js";import{U as ue}from"./Upload-0289bf35.js";import{M as fe}from"./ModifyUpload-d7989679.js";import{B as _e}from"./BlockLabel-22b082f8.js";import{F as ce}from"./File-24298f43.js";import{b as de,a as U}from"./babylonjs.loaders.min-59adc30d.js";import"./IconButton-85b41b48.js";function me(o){let e,a,l,n,i;return a=new fe({props:{absolute:!0}}),a.$on("clear",o[6]),{c(){e=I("div"),v(a.$$.fragment),l=p(),n=I("canvas"),T(n,"class","svelte-o1lgnv"),T(e,"class","input-model svelte-o1lgnv")},m(u,s){E(u,e,s),L(a,e,null),z(e,l),z(e,n),o[13](n),i=!0},p:A,i(u){i||(h(a.$$.fragment,u),i=!0)},o(u){b(a.$$.fragment,u),i=!1},d(u){u&&R(e),M(a),o[13](null)}}}function ge(o){let e,a,l;function n(u){o[12](u)}let i={filetype:".obj, .gltf, .glb",$$slots:{default:[be]},$$scope:{ctx:o}};return o[3]!==void 0&&(i.dragging=o[3]),e=new ue({props:i}),q.push(()=>Y(e,"dragging",n)),e.$on("load",o[5]),{c(){v(e.$$.fragment)},m(u,s){L(e,u,s),l=!0},p(u,s){const r={};s&16384&&(r.$$scope={dirty:s,ctx:u}),!a&&s&8&&(a=!0,r.dragging=u[3],y(()=>a=!1)),e.$set(r)},i(u){l||(h(e.$$.fragment,u),l=!0)},o(u){b(e.$$.fragment,u),l=!1},d(u){M(e,u)}}}function be(o){let e;const a=o[11].default,l=x(a,o,o[14],null);return{c(){l&&l.c()},m(n,i){l&&l.m(n,i),e=!0},p(n,i){l&&l.p&&(!e||i&16384)&&$(l,a,n,n[14],e?le(a,n[14],i,null):ee(n[14]),null)},i(n){e||(h(l,n),e=!0)},o(n){b(l,n),e=!1},d(n){l&&l.d(n)}}}function he(o){let e,a,l,n,i,u;e=new _e({props:{show_label:o[2],Icon:ce,label:o[1]||"3D Model"}});const s=[ge,me],r=[];function d(f,_){return f[0]===null?0:1}return l=d(o),n=r[l]=s[l](o),{c(){v(e.$$.fragment),a=p(),n.c(),i=P()},m(f,_){L(e,f,_),E(f,a,_),r[l].m(f,_),E(f,i,_),u=!0},p(f,[_]){const m={};_&4&&(m.show_label=f[2]),_&2&&(m.label=f[1]||"3D Model"),e.$set(m);let k=l;l=d(f),l===k?r[l].p(f,_):(Q(),b(r[k],1,1,()=>{r[k]=null}),W(),n=r[l],n?n.p(f,_):(n=r[l]=s[l](f),n.c()),h(n,1),n.m(i.parentNode,i))},i(f){u||(h(e.$$.fragment,f),h(n),u=!0)},o(f){b(e.$$.fragment,f),b(n),u=!1},d(f){f&&(R(a),R(i)),M(e,f),r[l].d(f)}}}function we(o,e,a){let l,n,i,{$$slots:u={},$$scope:s}=e,{value:r}=e,{clearColor:d=[0,0,0,0]}=e,{label:f=""}=e,{show_label:_}=e,m=!1;Z(()=>{r!=null&&S(),a(8,m=!0)});async function k({detail:t}){a(0,r=t),await F(),D("change",r),S()}async function B(){c&&g&&(c.dispose(),g.dispose()),a(0,r=null),await F(),D("clear")}const D=K();let w=!1;de.OBJFileLoader.IMPORT_VERTEX_COLORS=!0;let C,c,g;function S(){if(c&&!c.isDisposed&&g&&(c.dispose(),g.dispose()),g=new U.Engine(C,!0),c=new U.Scene(g),c.createDefaultCameraOrLight(),c.clearColor=c.clearColor=new U.Color4(...d),g.runRenderLoop(()=>{c.render()}),window.addEventListener("resize",()=>{g.resize()}),!r)return;let t;if(r.is_file)t=r.data;else{let G=r.data,H=U.Tools.DecodeBase64(G),J=new Blob([H]);t=URL.createObjectURL(J)}U.SceneLoader.ShowLoadingScreen=!1,U.SceneLoader.Append(t,"",c,()=>{c.createDefaultCamera(!0,!0,!0)},void 0,void 0,"."+r.name.split(".")[1])}function O(t){w=t,a(3,w)}function j(t){q[t?"unshift":"push"](()=>{C=t,a(4,C)})}return o.$$set=t=>{"value"in t&&a(0,r=t.value),"clearColor"in t&&a(7,d=t.clearColor),"label"in t&&a(1,f=t.label),"show_label"in t&&a(2,_=t.show_label),"$$scope"in t&&a(14,s=t.$$scope)},o.$$.update=()=>{o.$$.dirty&1&&a(10,{data:l,is_file:n,name:i}=r||{data:void 0,is_file:void 0,name:void 0},l,(a(9,n),a(0,r))),o.$$.dirty&1808&&C&&m&&l!=null&&n&&S(),o.$$.dirty&8&&D("drag",w)},[r,f,_,w,C,k,B,d,m,n,l,u,O,j,s]}class ke extends N{constructor(e){super(),V(this,e,we,he,X,{value:0,clearColor:7,label:1,show_label:2})}}function Ce(o){let e,a;return e=new ie({props:{type:"file"}}),{c(){v(e.$$.fragment)},m(l,n){L(e,l,n),a=!0},p:A,i(l){a||(h(e.$$.fragment,l),a=!0)},o(l){b(e.$$.fragment,l),a=!1},d(l){M(e,l)}}}function ve(o){let e,a,l,n;const i=[o[5]];let u={};for(let s=0;s<i.length;s+=1)u=ae(u,i[s]);return e=new ne({props:u}),l=new ke({props:{label:o[6],show_label:o[7],clearColor:o[4],value:o[12],$$slots:{default:[Ce]},$$scope:{ctx:o}}}),l.$on("change",o[16]),l.$on("drag",o[17]),l.$on("change",o[18]),l.$on("clear",o[19]),{c(){v(e.$$.fragment),a=p(),v(l.$$.fragment)},m(s,r){L(e,s,r),E(s,a,r),L(l,s,r),n=!0},p(s,r){const d=r&32?te(i,[oe(s[5])]):{};e.$set(d);const f={};r&64&&(f.label=s[6]),r&128&&(f.show_label=s[7]),r&16&&(f.clearColor=s[4]),r&4096&&(f.value=s[12]),r&1048576&&(f.$$scope={dirty:r,ctx:s}),l.$set(f)},i(s){n||(h(e.$$.fragment,s),h(l.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),b(l.$$.fragment,s),n=!1},d(s){s&&R(a),M(e,s),M(l,s)}}}function Le(o){let e,a;return e=new se({props:{visible:o[3],variant:o[0]===null?"dashed":"solid",border_mode:o[13]?"focus":"base",padding:!1,elem_id:o[1],elem_classes:o[2],container:o[8],scale:o[9],min_width:o[10],$$slots:{default:[ve]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},m(l,n){L(e,l,n),a=!0},p(l,[n]){const i={};n&8&&(i.visible=l[3]),n&1&&(i.variant=l[0]===null?"dashed":"solid"),n&8192&&(i.border_mode=l[13]?"focus":"base"),n&2&&(i.elem_id=l[1]),n&4&&(i.elem_classes=l[2]),n&256&&(i.container=l[8]),n&512&&(i.scale=l[9]),n&1024&&(i.min_width=l[10]),n&1063153&&(i.$$scope={dirty:n,ctx:l}),e.$set(i)},i(l){a||(h(e.$$.fragment,l),a=!0)},o(l){b(e.$$.fragment,l),a=!1},d(l){M(e,l)}}}function Me(o,e,a){let{elem_id:l=""}=e,{elem_classes:n=[]}=e,{visible:i=!0}=e,{value:u=null}=e,{root:s}=e,{root_url:r}=e,{clearColor:d}=e,{loading_status:f}=e,{label:_}=e,{show_label:m}=e,{container:k=!0}=e,{scale:B=null}=e,{min_width:D=void 0}=e,{gradio:w}=e,C,c=!1;const g=({detail:t})=>a(0,u=t),S=({detail:t})=>a(13,c=t),O=({detail:t})=>w.dispatch("change",t),j=()=>w.dispatch("clear");return o.$$set=t=>{"elem_id"in t&&a(1,l=t.elem_id),"elem_classes"in t&&a(2,n=t.elem_classes),"visible"in t&&a(3,i=t.visible),"value"in t&&a(0,u=t.value),"root"in t&&a(14,s=t.root),"root_url"in t&&a(15,r=t.root_url),"clearColor"in t&&a(4,d=t.clearColor),"loading_status"in t&&a(5,f=t.loading_status),"label"in t&&a(6,_=t.label),"show_label"in t&&a(7,m=t.show_label),"container"in t&&a(8,k=t.container),"scale"in t&&a(9,B=t.scale),"min_width"in t&&a(10,D=t.min_width),"gradio"in t&&a(11,w=t.gradio)},o.$$.update=()=>{o.$$.dirty&49153&&a(12,C=re(u,s,r))},[u,l,n,i,d,f,_,m,k,B,D,w,C,c,s,r,g,S,O,j]}class De extends N{constructor(e){super(),V(this,e,Me,Le,X,{elem_id:1,elem_classes:2,visible:3,value:0,root:14,root_url:15,clearColor:4,loading_status:5,label:6,show_label:7,container:8,scale:9,min_width:10,gradio:11})}}const Ie=De;export{Ie as default};
//# sourceMappingURL=index-3596a06f.js.map
