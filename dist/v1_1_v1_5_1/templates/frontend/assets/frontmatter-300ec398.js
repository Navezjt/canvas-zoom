import{s as m,f as s,a as i,p,t as a,S as l}from"./index-76874304.js";import{yaml as f}from"./yaml-95012b83.js";import"./index-87d85cdd.js";import"./Blocks-7a5eca09.js";import"./Button-d1864b92.js";import"./BlockLabel-168149fb.js";import"./Empty-db167e0b.js";/* empty css                                                    */import"./Check-54da4175.js";import"./Copy-8ff05c62.js";import"./Download-4d70238d.js";const n=/^---\s*$/m,v={defineNodes:[{name:"Frontmatter",block:!0},"FrontmatterMark"],props:[m({Frontmatter:[a.documentMeta,a.monospace],FrontmatterMark:a.processingInstruction}),s.add({Frontmatter:i,FrontmatterMark:()=>null})],wrap:p(t=>{const{parser:e}=l.define(f);return t.type.name==="Frontmatter"?{parser:e,overlay:[{from:t.from+4,to:t.to-4}]}:null}),parseBlock:[{name:"Frontmatter",before:"HorizontalRule",parse:(t,e)=>{let r;const o=new Array;if(t.lineStart===0&&n.test(e.text)){for(o.push(t.elt("FrontmatterMark",0,4));t.nextLine();)if(n.test(e.text)){r=t.lineStart+4;break}return r!==void 0&&(o.push(t.elt("FrontmatterMark",r-4,r)),t.addElement(t.elt("Frontmatter",0,r,o))),!0}else return!1}}]};export{v as frontmatter};
//# sourceMappingURL=frontmatter-300ec398.js.map
