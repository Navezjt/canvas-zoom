import{S as Z,e as A,s as G,F as v,o as F,Q as x,G as y,h as D,r as q,u as w,v as z,w as g,k as E,H as S,C as ee,al as te,a6 as le,E as B,m as L,g as V,j as Q,n as se,af as b,Z as ae,ad as ne,V as ie,W as oe}from"./index-7a57bd3a.js";import{B as re,n as T}from"./Button-778c588b.js";import{B as ue}from"./BlockLabel-22b082f8.js";import{I as _e}from"./IconButton-85b41b48.js";import{E as fe}from"./Empty-cc9c00b2.js";import{S as he}from"./ShareButton-73aec789.js";import{D as ce}from"./Download-553b9ec5.js";import{V as K,P as me}from"./Player-d4b7175a.js";import{u as de}from"./utils-c3e3db58.js";import"./Undo-22283651.js";/* empty css                                             */function be(l){let e=l[0].data,s,t,a,i,c,o,f,m,n=U(l);i=new _e({props:{Icon:ce,label:"Download"}});let u=l[5]&&W(l);return{c(){n.c(),s=F(),t=L("div"),a=L("a"),v(i.$$.fragment),f=F(),u&&u.c(),V(a,"href",c=l[0].data),V(a,"target",window.__is_colab__?"_blank":null),V(a,"download",o=l[0].orig_name||l[0].name),V(t,"class","icon-buttons svelte-rvdo70"),V(t,"data-testid","download-div")},m(h,d){n.m(h,d),D(h,s,d),D(h,t,d),Q(t,a),y(i,a,null),Q(t,f),u&&u.m(t,null),m=!0},p(h,d){d&1&&G(e,e=h[0].data)?(q(),w(n,1,1,se),z(),n=U(h),n.c(),g(n,1),n.m(s.parentNode,s)):n.p(h,d),(!m||d&1&&c!==(c=h[0].data))&&V(a,"href",c),(!m||d&1&&o!==(o=h[0].orig_name||h[0].name))&&V(a,"download",o),h[5]?u?(u.p(h,d),d&32&&g(u,1)):(u=W(h),u.c(),g(u,1),u.m(t,null)):u&&(q(),w(u,1,1,()=>{u=null}),z())},i(h){m||(g(n),g(i.$$.fragment,h),g(u),m=!0)},o(h){w(n),w(i.$$.fragment,h),w(u),m=!1},d(h){h&&(E(s),E(t)),n.d(h),S(i),u&&u.d()}}}function ge(l){let e,s;return e=new fe({props:{unpadded_box:!0,size:"large",$$slots:{default:[we]},$$scope:{ctx:l}}}),{c(){v(e.$$.fragment)},m(t,a){y(e,t,a),s=!0},p(t,a){const i={};a&65536&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function U(l){let e,s;return e=new me({props:{src:l[0].data,subtitle:l[1]?.data,autoplay:l[4],mirror:!1,label:l[2]}}),e.$on("play",l[6]),e.$on("pause",l[7]),e.$on("stop",l[8]),e.$on("end",l[9]),{c(){v(e.$$.fragment)},m(t,a){y(e,t,a),s=!0},p(t,a){const i={};a&1&&(i.src=t[0].data),a&2&&(i.subtitle=t[1]?.data),a&16&&(i.autoplay=t[4]),a&4&&(i.label=t[2]),e.$set(i)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function W(l){let e,s;return e=new he({props:{value:l[0],formatter:l[10]}}),e.$on("error",l[11]),e.$on("share",l[12]),{c(){v(e.$$.fragment)},m(t,a){y(e,t,a),s=!0},p(t,a){const i={};a&1&&(i.value=t[0]),e.$set(i)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function we(l){let e,s;return e=new K({}),{c(){v(e.$$.fragment)},m(t,a){y(e,t,a),s=!0},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function ke(l){let e,s,t,a,i,c;e=new ue({props:{show_label:l[3],Icon:K,label:l[2]||"Video"}});const o=[ge,be],f=[];function m(n,u){return n[0]===null?0:1}return t=m(l),a=f[t]=o[t](l),{c(){v(e.$$.fragment),s=F(),a.c(),i=x()},m(n,u){y(e,n,u),D(n,s,u),f[t].m(n,u),D(n,i,u),c=!0},p(n,[u]){const h={};u&8&&(h.show_label=n[3]),u&4&&(h.label=n[2]||"Video"),e.$set(h);let d=t;t=m(n),t===d?f[t].p(n,u):(q(),w(f[d],1,1,()=>{f[d]=null}),z(),a=f[t],a?a.p(n,u):(a=f[t]=o[t](n),a.c()),g(a,1),a.m(i.parentNode,i))},i(n){c||(g(e.$$.fragment,n),g(a),c=!0)},o(n){w(e.$$.fragment,n),w(a),c=!1},d(n){n&&(E(s),E(i)),S(e,n),f[t].d(n)}}}function ve(l,e,s){let{value:t=null}=e,{subtitle:a=null}=e,{label:i=void 0}=e,{show_label:c=!0}=e,{autoplay:o}=e,{show_share_button:f=!0}=e,m=null,n=null;const u=ee();te(async()=>{t!==m&&a!==n&&n!==null&&(m=t,s(0,t=null),await le(),s(0,t=m)),m=t,n=a});function h(_){B.call(this,l,_)}function d(_){B.call(this,l,_)}function I(_){B.call(this,l,_)}function N(_){B.call(this,l,_)}const P=async _=>_?await de(_.data,"url"):"";function j(_){B.call(this,l,_)}function C(_){B.call(this,l,_)}return l.$$set=_=>{"value"in _&&s(0,t=_.value),"subtitle"in _&&s(1,a=_.subtitle),"label"in _&&s(2,i=_.label),"show_label"in _&&s(3,c=_.show_label),"autoplay"in _&&s(4,o=_.autoplay),"show_share_button"in _&&s(5,f=_.show_share_button)},l.$$.update=()=>{l.$$.dirty&1&&t&&u("change",t)},[t,a,i,c,o,f,h,d,I,N,P,j,C]}class ye extends Z{constructor(e){super(),A(this,e,ve,ke,G,{value:0,subtitle:1,label:2,show_label:3,autoplay:4,show_share_button:5})}}function Se(l){let e,s,t,a;const i=[l[7]];let c={};for(let o=0;o<i.length;o+=1)c=ae(c,i[o]);return e=new ne({props:c}),t=new ye({props:{value:l[16],subtitle:l[17],label:l[4],show_label:l[6],autoplay:l[13],show_share_button:l[14]}}),t.$on("play",l[21]),t.$on("pause",l[22]),t.$on("stop",l[23]),t.$on("end",l[24]),t.$on("share",l[25]),t.$on("error",l[26]),{c(){v(e.$$.fragment),s=F(),v(t.$$.fragment)},m(o,f){y(e,o,f),D(o,s,f),y(t,o,f),a=!0},p(o,f){const m=f&128?ie(i,[oe(o[7])]):{};e.$set(m);const n={};f&65536&&(n.value=o[16]),f&131072&&(n.subtitle=o[17]),f&16&&(n.label=o[4]),f&64&&(n.show_label=o[6]),f&8192&&(n.autoplay=o[13]),f&16384&&(n.show_share_button=o[14]),t.$set(n)},i(o){a||(g(e.$$.fragment,o),g(t.$$.fragment,o),a=!0)},o(o){w(e.$$.fragment,o),w(t.$$.fragment,o),a=!1},d(o){o&&E(s),S(e,o),S(t,o)}}}function Ve(l){let e,s;return e=new re({props:{visible:l[2],variant:l[3]===null&&l[5]==="upload"?"dashed":"solid",border_mode:"base",padding:!1,elem_id:l[0],elem_classes:l[1],height:l[8],width:l[9],container:l[10],scale:l[11],min_width:l[12],allow_overflow:!1,$$slots:{default:[Se]},$$scope:{ctx:l}}}),{c(){v(e.$$.fragment)},m(t,a){y(e,t,a),s=!0},p(t,[a]){const i={};a&4&&(i.visible=t[2]),a&40&&(i.variant=t[3]===null&&t[5]==="upload"?"dashed":"solid"),a&1&&(i.elem_id=t[0]),a&2&&(i.elem_classes=t[1]),a&256&&(i.height=t[8]),a&512&&(i.width=t[9]),a&1024&&(i.container=t[10]),a&2048&&(i.scale=t[11]),a&4096&&(i.min_width=t[12]),a&134471888&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function Be(l,e,s){let{elem_id:t=""}=e,{elem_classes:a=[]}=e,{visible:i=!0}=e,{value:c=null}=e,o=null,{label:f}=e,{source:m}=e,{root:n}=e,{root_url:u}=e,{show_label:h}=e,{loading_status:d}=e,{height:I}=e,{width:N}=e,{container:P=!1}=e,{scale:j=null}=e,{min_width:C=void 0}=e,{autoplay:_=!1}=e,{show_share_button:H=!0}=e,{gradio:k}=e,J=null,O=null;const M=()=>k.dispatch("play"),R=()=>k.dispatch("pause"),X=()=>k.dispatch("stop"),Y=()=>k.dispatch("end"),p=({detail:r})=>k.dispatch("share",r),$=({detail:r})=>k.dispatch("error",r);return l.$$set=r=>{"elem_id"in r&&s(0,t=r.elem_id),"elem_classes"in r&&s(1,a=r.elem_classes),"visible"in r&&s(2,i=r.visible),"value"in r&&s(3,c=r.value),"label"in r&&s(4,f=r.label),"source"in r&&s(5,m=r.source),"root"in r&&s(18,n=r.root),"root_url"in r&&s(19,u=r.root_url),"show_label"in r&&s(6,h=r.show_label),"loading_status"in r&&s(7,d=r.loading_status),"height"in r&&s(8,I=r.height),"width"in r&&s(9,N=r.width),"container"in r&&s(10,P=r.container),"scale"in r&&s(11,j=r.scale),"min_width"in r&&s(12,C=r.min_width),"autoplay"in r&&s(13,_=r.autoplay),"show_share_button"in r&&s(14,H=r.show_share_button),"gradio"in r&&s(15,k=r.gradio)},l.$$.update=()=>{l.$$.dirty&786440&&(c!=null?(s(16,J=T(c[0],n,u)),s(17,O=T(c[1],n,u))):(s(16,J=null),s(17,O=null))),l.$$.dirty&1081352&&JSON.stringify(c)!==JSON.stringify(o)&&(s(20,o=c),k.dispatch("change"))},[t,a,i,c,f,m,h,d,I,N,P,j,C,_,H,k,J,O,n,u,o,M,R,X,Y,p,$]}class De extends Z{constructor(e){super(),A(this,e,Be,Ve,G,{elem_id:0,elem_classes:1,visible:2,value:3,label:4,source:5,root:18,root_url:19,show_label:6,loading_status:7,height:8,width:9,container:10,scale:11,min_width:12,autoplay:13,show_share_button:14,gradio:15})}get elem_id(){return this.$$.ctx[0]}set elem_id(e){this.$$set({elem_id:e}),b()}get elem_classes(){return this.$$.ctx[1]}set elem_classes(e){this.$$set({elem_classes:e}),b()}get visible(){return this.$$.ctx[2]}set visible(e){this.$$set({visible:e}),b()}get value(){return this.$$.ctx[3]}set value(e){this.$$set({value:e}),b()}get label(){return this.$$.ctx[4]}set label(e){this.$$set({label:e}),b()}get source(){return this.$$.ctx[5]}set source(e){this.$$set({source:e}),b()}get root(){return this.$$.ctx[18]}set root(e){this.$$set({root:e}),b()}get root_url(){return this.$$.ctx[19]}set root_url(e){this.$$set({root_url:e}),b()}get show_label(){return this.$$.ctx[6]}set show_label(e){this.$$set({show_label:e}),b()}get loading_status(){return this.$$.ctx[7]}set loading_status(e){this.$$set({loading_status:e}),b()}get height(){return this.$$.ctx[8]}set height(e){this.$$set({height:e}),b()}get width(){return this.$$.ctx[9]}set width(e){this.$$set({width:e}),b()}get container(){return this.$$.ctx[10]}set container(e){this.$$set({container:e}),b()}get scale(){return this.$$.ctx[11]}set scale(e){this.$$set({scale:e}),b()}get min_width(){return this.$$.ctx[12]}set min_width(e){this.$$set({min_width:e}),b()}get autoplay(){return this.$$.ctx[13]}set autoplay(e){this.$$set({autoplay:e}),b()}get show_share_button(){return this.$$.ctx[14]}set show_share_button(e){this.$$set({show_share_button:e}),b()}get gradio(){return this.$$.ctx[15]}set gradio(e){this.$$set({gradio:e}),b()}}const ze=De;export{ze as default};
//# sourceMappingURL=index-99a47bfa.js.map
