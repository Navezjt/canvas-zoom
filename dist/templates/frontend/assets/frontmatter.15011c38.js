import{s as m,t as a,f as s,a as i,p,S as l}from"./index.741c5c7e.js";import{yaml as f}from"./yaml.44f733df.js";import"./index.d69ed1d1.js";import"./Blocks.dbffb8d7.js";import"./Empty.svelte_svelte_type_style_lang.62c634b6.js";import"./BlockLabel.8308ded2.js";import"./Empty.b9a02fb5.js";/* empty css                                                    */import"./Check.abed11cb.js";import"./Copy.306cf0e8.js";import"./Download.dfe59cf4.js";const n=/^---\s*$/m,v={defineNodes:[{name:"Frontmatter",block:!0},"FrontmatterMark"],props:[m({Frontmatter:[a.documentMeta,a.monospace],FrontmatterMark:a.processingInstruction}),s.add({Frontmatter:i,FrontmatterMark:()=>null})],wrap:p(t=>{const{parser:e}=l.define(f);return t.type.name==="Frontmatter"?{parser:e,overlay:[{from:t.from+4,to:t.to-4}]}:null}),parseBlock:[{name:"Frontmatter",before:"HorizontalRule",parse:(t,e)=>{let r;const o=new Array;if(t.lineStart===0&&n.test(e.text)){for(o.push(t.elt("FrontmatterMark",0,4));t.nextLine();)if(n.test(e.text)){r=t.lineStart+4;break}return r!==void 0&&(o.push(t.elt("FrontmatterMark",r-4,r)),t.addElement(t.elt("Frontmatter",0,r,o))),!0}else return!1}}]};export{v as frontmatter};
//# sourceMappingURL=frontmatter.15011c38.js.map