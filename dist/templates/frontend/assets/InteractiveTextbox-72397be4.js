import{S as K,e as L,s as M,af as f,F as w,G as v,w as g,u as b,H as k,C as O,R as G,U as H,o as P,h as Q,r as Y,v as y,X as N,k as p,Z as $,ad as ee,V as te,W as se}from"./index-7a57bd3a.js";import{T as ie}from"./Textbox-f0c3ea5d.js";import{B as le}from"./Button-778c588b.js";function R(i){let e,t;const u=[i[17]];let a={};for(let n=0;n<u.length;n+=1)a=$(a,u[n]);return e=new ee({props:a}),{c(){w(e.$$.fragment)},m(n,_){v(e,n,_),t=!0},p(n,_){const c=_&131072?te(u,[se(n[17])]):{};e.$set(c)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){k(e,n)}}}function ne(i){let e,t,u,a,n,_=i[17]&&R(i);function c(l){i[21](l)}function m(l){i[22](l)}let r={label:i[3],info:i[4],show_label:i[10],lines:i[8],type:i[12],rtl:i[18],text_align:i[19],max_lines:i[11]?i[11]:i[8]+1,placeholder:i[9],show_copy_button:i[16],autofocus:i[20],container:i[13]};return i[0]!==void 0&&(r.value=i[0]),i[1]!==void 0&&(r.value_is_output=i[1]),t=new ie({props:r}),G.push(()=>H(t,"value",c)),G.push(()=>H(t,"value_is_output",m)),t.$on("change",i[23]),t.$on("input",i[24]),t.$on("submit",i[25]),t.$on("blur",i[26]),t.$on("select",i[27]),t.$on("focus",i[28]),{c(){_&&_.c(),e=P(),w(t.$$.fragment)},m(l,o){_&&_.m(l,o),Q(l,e,o),v(t,l,o),n=!0},p(l,o){l[17]?_?(_.p(l,o),o&131072&&g(_,1)):(_=R(l),_.c(),g(_,1),_.m(e.parentNode,e)):_&&(Y(),b(_,1,1,()=>{_=null}),y());const h={};o&8&&(h.label=l[3]),o&16&&(h.info=l[4]),o&1024&&(h.show_label=l[10]),o&256&&(h.lines=l[8]),o&4096&&(h.type=l[12]),o&262144&&(h.rtl=l[18]),o&524288&&(h.text_align=l[19]),o&2304&&(h.max_lines=l[11]?l[11]:l[8]+1),o&512&&(h.placeholder=l[9]),o&65536&&(h.show_copy_button=l[16]),o&1048576&&(h.autofocus=l[20]),o&8192&&(h.container=l[13]),!u&&o&1&&(u=!0,h.value=l[0],N(()=>u=!1)),!a&&o&2&&(a=!0,h.value_is_output=l[1],N(()=>a=!1)),t.$set(h)},i(l){n||(g(_),g(t.$$.fragment,l),n=!0)},o(l){b(_),b(t.$$.fragment,l),n=!1},d(l){l&&p(e),_&&_.d(l),k(t,l)}}}function ae(i){let e,t;return e=new le({props:{visible:i[7],elem_id:i[5],elem_classes:i[6],scale:i[14],min_width:i[15],allow_overflow:!1,padding:i[13],$$slots:{default:[ne]},$$scope:{ctx:i}}}),{c(){w(e.$$.fragment)},m(u,a){v(e,u,a),t=!0},p(u,[a]){const n={};a&128&&(n.visible=u[7]),a&32&&(n.elem_id=u[5]),a&64&&(n.elem_classes=u[6]),a&16384&&(n.scale=u[14]),a&32768&&(n.min_width=u[15]),a&8192&&(n.padding=u[13]),a&1075789599&&(n.$$scope={dirty:a,ctx:u}),e.$set(n)},i(u){t||(g(e.$$.fragment,u),t=!0)},o(u){b(e.$$.fragment,u),t=!1},d(u){k(e,u)}}}function ue(i,e,t){const u=O();let{gradio:a={dispatch:u}}=e,{label:n="Textbox"}=e,{info:_=void 0}=e,{elem_id:c=""}=e,{elem_classes:m=[]}=e,{visible:r=!0}=e,{value:l=""}=e,{lines:o}=e,{placeholder:h=""}=e,{show_label:T}=e,{max_lines:x}=e,{type:S="text"}=e,{container:B=!0}=e,{scale:C=null}=e,{min_width:I=void 0}=e,{show_copy_button:j=!1}=e,{loading_status:q=void 0}=e,{value_is_output:d=!1}=e,{rtl:D=!1}=e,{text_align:E=void 0}=e,{autofocus:F=!1}=e;function U(s){l=s,t(0,l)}function V(s){d=s,t(1,d)}const W=()=>a.dispatch("change",l),X=()=>a.dispatch("input"),Z=()=>a.dispatch("submit"),z=()=>a.dispatch("blur"),A=s=>a.dispatch("select",s.detail),J=()=>a.dispatch("focus");return i.$$set=s=>{"gradio"in s&&t(2,a=s.gradio),"label"in s&&t(3,n=s.label),"info"in s&&t(4,_=s.info),"elem_id"in s&&t(5,c=s.elem_id),"elem_classes"in s&&t(6,m=s.elem_classes),"visible"in s&&t(7,r=s.visible),"value"in s&&t(0,l=s.value),"lines"in s&&t(8,o=s.lines),"placeholder"in s&&t(9,h=s.placeholder),"show_label"in s&&t(10,T=s.show_label),"max_lines"in s&&t(11,x=s.max_lines),"type"in s&&t(12,S=s.type),"container"in s&&t(13,B=s.container),"scale"in s&&t(14,C=s.scale),"min_width"in s&&t(15,I=s.min_width),"show_copy_button"in s&&t(16,j=s.show_copy_button),"loading_status"in s&&t(17,q=s.loading_status),"value_is_output"in s&&t(1,d=s.value_is_output),"rtl"in s&&t(18,D=s.rtl),"text_align"in s&&t(19,E=s.text_align),"autofocus"in s&&t(20,F=s.autofocus)},[l,d,a,n,_,c,m,r,o,h,T,x,S,B,C,I,j,q,D,E,F,U,V,W,X,Z,z,A,J]}class he extends K{constructor(e){super(),L(this,e,ue,ae,M,{gradio:2,label:3,info:4,elem_id:5,elem_classes:6,visible:7,value:0,lines:8,placeholder:9,show_label:10,max_lines:11,type:12,container:13,scale:14,min_width:15,show_copy_button:16,loading_status:17,value_is_output:1,rtl:18,text_align:19,autofocus:20})}get gradio(){return this.$$.ctx[2]}set gradio(e){this.$$set({gradio:e}),f()}get label(){return this.$$.ctx[3]}set label(e){this.$$set({label:e}),f()}get info(){return this.$$.ctx[4]}set info(e){this.$$set({info:e}),f()}get elem_id(){return this.$$.ctx[5]}set elem_id(e){this.$$set({elem_id:e}),f()}get elem_classes(){return this.$$.ctx[6]}set elem_classes(e){this.$$set({elem_classes:e}),f()}get visible(){return this.$$.ctx[7]}set visible(e){this.$$set({visible:e}),f()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),f()}get lines(){return this.$$.ctx[8]}set lines(e){this.$$set({lines:e}),f()}get placeholder(){return this.$$.ctx[9]}set placeholder(e){this.$$set({placeholder:e}),f()}get show_label(){return this.$$.ctx[10]}set show_label(e){this.$$set({show_label:e}),f()}get max_lines(){return this.$$.ctx[11]}set max_lines(e){this.$$set({max_lines:e}),f()}get type(){return this.$$.ctx[12]}set type(e){this.$$set({type:e}),f()}get container(){return this.$$.ctx[13]}set container(e){this.$$set({container:e}),f()}get scale(){return this.$$.ctx[14]}set scale(e){this.$$set({scale:e}),f()}get min_width(){return this.$$.ctx[15]}set min_width(e){this.$$set({min_width:e}),f()}get show_copy_button(){return this.$$.ctx[16]}set show_copy_button(e){this.$$set({show_copy_button:e}),f()}get loading_status(){return this.$$.ctx[17]}set loading_status(e){this.$$set({loading_status:e}),f()}get value_is_output(){return this.$$.ctx[1]}set value_is_output(e){this.$$set({value_is_output:e}),f()}get rtl(){return this.$$.ctx[18]}set rtl(e){this.$$set({rtl:e}),f()}get text_align(){return this.$$.ctx[19]}set text_align(e){this.$$set({text_align:e}),f()}get autofocus(){return this.$$.ctx[20]}set autofocus(e){this.$$set({autofocus:e}),f()}}export{he as I};
//# sourceMappingURL=InteractiveTextbox-72397be4.js.map
