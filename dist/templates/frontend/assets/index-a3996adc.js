import{S,e as U,s as C,F as E,G as q,w as F,u as G,H,a0 as T,a1 as X,ar as j,as as D,t as I,h as J,x as K,k as L,a6 as M}from"./index-7a57bd3a.js";import{U as N}from"./UploadButton-7b3e96dc.js";import{d as O}from"./Button-778c588b.js";function P(t){let i=t[11](t[3])+"",n;return{c(){n=I(i)},m(l,a){J(l,n,a)},p(l,a){a&2056&&i!==(i=l[11](l[3])+"")&&K(n,i)},d(l){l&&L(n)}}}function Q(t){let i,n;return i=new N({props:{elem_id:t[0],elem_classes:t[1],visible:t[2],file_count:t[4],file_types:t[5],size:t[6],scale:t[7],min_width:t[8],disabled:!0,variant:t[9],label:t[3],$$slots:{default:[P]},$$scope:{ctx:t}}}),i.$on("click",t[15]),i.$on("load",t[12]),{c(){E(i.$$.fragment)},m(l,a){q(i,l,a),n=!0},p(l,[a]){const s={};a&1&&(s.elem_id=l[0]),a&2&&(s.elem_classes=l[1]),a&4&&(s.visible=l[2]),a&16&&(s.file_count=l[4]),a&32&&(s.file_types=l[5]),a&64&&(s.size=l[6]),a&128&&(s.scale=l[7]),a&256&&(s.min_width=l[8]),a&512&&(s.variant=l[9]),a&8&&(s.label=l[3]),a&133128&&(s.$$scope={dirty:a,ctx:l}),i.$set(s)},i(l){n||(F(i.$$.fragment,l),n=!0)},o(l){G(i.$$.fragment,l),n=!1},d(l){H(i,l)}}}function R(t,i,n){let l;T(t,X,e=>n(11,l=e));let{elem_id:a=""}=i,{elem_classes:s=[]}=i,{visible:m=!0}=i,{label:b}=i,{value:_}=i,{file_count:r}=i,{file_types:h=[]}=i,{root:c}=i,{size:g="lg"}=i,{scale:d=null}=i,{min_width:w=void 0}=i,{variant:y="secondary"}=i,{gradio:u}=i;const A=j("upload_files")??D;async function k({detail:e}){n(13,_=e),await M();let B=(Array.isArray(e)?e:[e]).map(o=>o.blob);A(c,B).then(async o=>{o.error?(Array.isArray(e)?e:[e]).forEach(async(f,z)=>{f.data=await O(f.blob),f.blob=void 0}):(Array.isArray(e)?e:[e]).forEach((f,z)=>{o.files&&(f.orig_name=f.name,f.name=o.files[z],f.is_file=!0,f.blob=void 0)}),u.dispatch("change",_),u.dispatch("upload",e)})}const v=()=>u.dispatch("click");return t.$$set=e=>{"elem_id"in e&&n(0,a=e.elem_id),"elem_classes"in e&&n(1,s=e.elem_classes),"visible"in e&&n(2,m=e.visible),"label"in e&&n(3,b=e.label),"value"in e&&n(13,_=e.value),"file_count"in e&&n(4,r=e.file_count),"file_types"in e&&n(5,h=e.file_types),"root"in e&&n(14,c=e.root),"size"in e&&n(6,g=e.size),"scale"in e&&n(7,d=e.scale),"min_width"in e&&n(8,w=e.min_width),"variant"in e&&n(9,y=e.variant),"gradio"in e&&n(10,u=e.gradio)},[a,s,m,b,r,h,g,d,w,y,u,l,k,_,c,v]}class V extends S{constructor(i){super(),U(this,i,R,Q,C,{elem_id:0,elem_classes:1,visible:2,label:3,value:13,file_count:4,file_types:5,root:14,size:6,scale:7,min_width:8,variant:9,gradio:10})}}const x=V;export{x as default};
//# sourceMappingURL=index-a3996adc.js.map
