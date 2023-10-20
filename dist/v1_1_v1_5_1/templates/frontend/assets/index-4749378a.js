import{c as F,e as I,s as ce,N as me,t as c,P as _e,g as Ue,T as E,p as Qe,h as J,E as v,b as se,j as Ze,k as Ge,l as Ve,m as Ke,f as Je,i as Ye,n as We,o as et,q as ne,r as tt}from"./index-76874304.js";import{html as rt}from"./index-b139078b.js";import"./index-87d85cdd.js";import"./Blocks-7a5eca09.js";import"./Button-d1864b92.js";import"./BlockLabel-168149fb.js";import"./Empty-db167e0b.js";/* empty css                                                    */import"./Check-54da4175.js";import"./Copy-8ff05c62.js";import"./Download-4d70238d.js";import"./index-1856e092.js";import"./index-ca069d01.js";import"./index-f9d68a48.js";class X{constructor(e,r,s,n,i,o,a){this.type=e,this.value=r,this.from=s,this.hash=n,this.end=i,this.children=o,this.positions=a,this.hashProp=[[I.contextHash,n]]}static create(e,r,s,n,i){let o=n+(n<<8)+e+(r<<4)|0;return new X(e,r,s,o,i,[],[])}addChild(e,r){e.prop(I.contextHash)!=this.hash&&(e=new E(e.type,e.children,e.positions,e.length,this.hashProp)),this.children.push(e),this.positions.push(r)}toTree(e,r=this.end){let s=this.children.length-1;return s>=0&&(r=Math.max(r,this.positions[s]+this.children[s].length+this.from)),new E(e.types[this.type],this.children,this.positions,r-this.from).balance({makeTree:(i,o,a)=>new E(F.none,i,o,a,this.hashProp)})}}var f;(function(t){t[t.Document=1]="Document",t[t.CodeBlock=2]="CodeBlock",t[t.FencedCode=3]="FencedCode",t[t.Blockquote=4]="Blockquote",t[t.HorizontalRule=5]="HorizontalRule",t[t.BulletList=6]="BulletList",t[t.OrderedList=7]="OrderedList",t[t.ListItem=8]="ListItem",t[t.ATXHeading1=9]="ATXHeading1",t[t.ATXHeading2=10]="ATXHeading2",t[t.ATXHeading3=11]="ATXHeading3",t[t.ATXHeading4=12]="ATXHeading4",t[t.ATXHeading5=13]="ATXHeading5",t[t.ATXHeading6=14]="ATXHeading6",t[t.SetextHeading1=15]="SetextHeading1",t[t.SetextHeading2=16]="SetextHeading2",t[t.HTMLBlock=17]="HTMLBlock",t[t.LinkReference=18]="LinkReference",t[t.Paragraph=19]="Paragraph",t[t.CommentBlock=20]="CommentBlock",t[t.ProcessingInstructionBlock=21]="ProcessingInstructionBlock",t[t.Escape=22]="Escape",t[t.Entity=23]="Entity",t[t.HardBreak=24]="HardBreak",t[t.Emphasis=25]="Emphasis",t[t.StrongEmphasis=26]="StrongEmphasis",t[t.Link=27]="Link",t[t.Image=28]="Image",t[t.InlineCode=29]="InlineCode",t[t.HTMLTag=30]="HTMLTag",t[t.Comment=31]="Comment",t[t.ProcessingInstruction=32]="ProcessingInstruction",t[t.URL=33]="URL",t[t.HeaderMark=34]="HeaderMark",t[t.QuoteMark=35]="QuoteMark",t[t.ListMark=36]="ListMark",t[t.LinkMark=37]="LinkMark",t[t.EmphasisMark=38]="EmphasisMark",t[t.CodeMark=39]="CodeMark",t[t.CodeText=40]="CodeText",t[t.CodeInfo=41]="CodeInfo",t[t.LinkTitle=42]="LinkTitle",t[t.LinkLabel=43]="LinkLabel"})(f||(f={}));class st{constructor(e,r){this.start=e,this.content=r,this.marks=[],this.parsers=[]}}class nt{constructor(){this.text="",this.baseIndent=0,this.basePos=0,this.depth=0,this.markers=[],this.pos=0,this.indent=0,this.next=-1}forward(){this.basePos>this.pos&&this.forwardInner()}forwardInner(){let e=this.skipSpace(this.basePos);this.indent=this.countIndent(e,this.pos,this.indent),this.pos=e,this.next=e==this.text.length?-1:this.text.charCodeAt(e)}skipSpace(e){return N(this.text,e)}reset(e){for(this.text=e,this.baseIndent=this.basePos=this.pos=this.indent=0,this.forwardInner(),this.depth=1;this.markers.length;)this.markers.pop()}moveBase(e){this.basePos=e,this.baseIndent=this.countIndent(e,this.pos,this.indent)}moveBaseColumn(e){this.baseIndent=e,this.basePos=this.findColumn(e)}addMarker(e){this.markers.push(e)}countIndent(e,r=0,s=0){for(let n=r;n<e;n++)s+=this.text.charCodeAt(n)==9?4-s%4:1;return s}findColumn(e){let r=0;for(let s=0;r<this.text.length&&s<e;r++)s+=this.text.charCodeAt(r)==9?4-s%4:1;return r}scrub(){if(!this.baseIndent)return this.text;let e="";for(let r=0;r<this.basePos;r++)e+=" ";return e+this.text.slice(this.basePos)}}function ie(t,e,r){if(r.pos==r.text.length||t!=e.block&&r.indent>=e.stack[r.depth+1].value+r.baseIndent)return!0;if(r.indent>=r.baseIndent+4)return!1;let s=(t.type==f.OrderedList?ee:W)(r,e,!1);return s>0&&(t.type!=f.BulletList||Y(r,e,!1)<0)&&r.text.charCodeAt(r.pos+s-1)==t.value}const ge={[f.Blockquote](t,e,r){return r.next!=62?!1:(r.markers.push(m(f.QuoteMark,e.lineStart+r.pos,e.lineStart+r.pos+1)),r.moveBase(r.pos+(C(r.text.charCodeAt(r.pos+1))?2:1)),t.end=e.lineStart+r.text.length,!0)},[f.ListItem](t,e,r){return r.indent<r.baseIndent+t.value&&r.next>-1?!1:(r.moveBaseColumn(r.baseIndent+t.value),!0)},[f.OrderedList]:ie,[f.BulletList]:ie,[f.Document](){return!0}};function C(t){return t==32||t==9||t==10||t==13}function N(t,e=0){for(;e<t.length&&C(t.charCodeAt(e));)e++;return e}function oe(t,e,r){for(;e>r&&C(t.charCodeAt(e-1));)e--;return e}function ke(t){if(t.next!=96&&t.next!=126)return-1;let e=t.pos+1;for(;e<t.text.length&&t.text.charCodeAt(e)==t.next;)e++;if(e<t.pos+3)return-1;if(t.next==96){for(let r=e;r<t.text.length;r++)if(t.text.charCodeAt(r)==96)return-1}return e}function Le(t){return t.next!=62?-1:t.text.charCodeAt(t.pos+1)==32?2:1}function Y(t,e,r){if(t.next!=42&&t.next!=45&&t.next!=95)return-1;let s=1;for(let n=t.pos+1;n<t.text.length;n++){let i=t.text.charCodeAt(n);if(i==t.next)s++;else if(!C(i))return-1}return r&&t.next==45&&we(t)>-1&&t.depth==e.stack.length||s<3?-1:1}function be(t,e){for(let r=t.stack.length-1;r>=0;r--)if(t.stack[r].type==e)return!0;return!1}function W(t,e,r){return(t.next==45||t.next==43||t.next==42)&&(t.pos==t.text.length-1||C(t.text.charCodeAt(t.pos+1)))&&(!r||be(e,f.BulletList)||t.skipSpace(t.pos+2)<t.text.length)?1:-1}function ee(t,e,r){let s=t.pos,n=t.next;for(;n>=48&&n<=57;){s++;if(s==t.text.length)return-1;n=t.text.charCodeAt(s)}return s==t.pos||s>t.pos+9||n!=46&&n!=41||s<t.text.length-1&&!C(t.text.charCodeAt(s+1))||r&&!be(e,f.OrderedList)&&(t.skipSpace(s+1)==t.text.length||s>t.pos+1||t.next!=49)?-1:s+1-t.pos}function Se(t){if(t.next!=35)return-1;let e=t.pos+1;for(;e<t.text.length&&t.text.charCodeAt(e)==35;)e++;if(e<t.text.length&&t.text.charCodeAt(e)!=32)return-1;let r=e-t.pos;return r>6?-1:r}function we(t){if(t.next!=45&&t.next!=61||t.indent>=t.baseIndent+4)return-1;let e=t.pos+1;for(;e<t.text.length&&t.text.charCodeAt(e)==t.next;)e++;let r=e;for(;e<t.text.length&&C(t.text.charCodeAt(e));)e++;return e==t.text.length?r:-1}const Q=/^[ \t]*$/,Ce=/-->/,Ae=/\?>/,Z=[[/^<(?:script|pre|style)(?:\s|>|$)/i,/<\/(?:script|pre|style)>/i],[/^\s*<!--/,Ce],[/^\s*<\?/,Ae],[/^\s*<![A-Z]/,/>/],[/^\s*<!\[CDATA\[/,/\]\]>/],[/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i,Q],[/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i,Q]];function xe(t,e,r){if(t.next!=60)return-1;let s=t.text.slice(t.pos);for(let n=0,i=Z.length-(r?1:0);n<i;n++)if(Z[n][0].test(s))return n;return-1}function ae(t,e){let r=t.countIndent(e,t.pos,t.indent),s=t.countIndent(t.skipSpace(e),e,r);return s>=r+5?r+1:s}function B(t,e,r){let s=t.length-1;s>=0&&t[s].to==e&&t[s].type==f.CodeText?t[s].to=r:t.push(m(f.CodeText,e,r))}const z={LinkReference:void 0,IndentedCode(t,e){let r=e.baseIndent+4;if(e.indent<r)return!1;let s=e.findColumn(r),n=t.lineStart+s,i=t.lineStart+e.text.length,o=[],a=[];for(B(o,n,i);t.nextLine()&&e.depth>=t.stack.length;)if(e.pos==e.text.length){B(a,t.lineStart-1,t.lineStart);for(let l of e.markers)a.push(l)}else{if(e.indent<r)break;{if(a.length){for(let h of a)h.type==f.CodeText?B(o,h.from,h.to):o.push(h);a=[]}B(o,t.lineStart-1,t.lineStart);for(let h of e.markers)o.push(h);i=t.lineStart+e.text.length;let l=t.lineStart+e.findColumn(e.baseIndent+4);l<i&&B(o,l,i)}}return a.length&&(a=a.filter(l=>l.type!=f.CodeText),a.length&&(e.markers=a.concat(e.markers))),t.addNode(t.buffer.writeElements(o,-n).finish(f.CodeBlock,i-n),n),!0},FencedCode(t,e){let r=ke(e);if(r<0)return!1;let s=t.lineStart+e.pos,n=e.next,i=r-e.pos,o=e.skipSpace(r),a=oe(e.text,e.text.length,o),l=[m(f.CodeMark,s,s+i)];o<a&&l.push(m(f.CodeInfo,t.lineStart+o,t.lineStart+a));for(let h=!0;t.nextLine()&&e.depth>=t.stack.length;h=!1){let u=e.pos;if(e.indent-e.baseIndent<4)for(;u<e.text.length&&e.text.charCodeAt(u)==n;)u++;if(u-e.pos>=i&&e.skipSpace(u)==e.text.length){for(let p of e.markers)l.push(p);l.push(m(f.CodeMark,t.lineStart+e.pos,t.lineStart+u)),t.nextLine();break}else{h||B(l,t.lineStart-1,t.lineStart);for(let L of e.markers)l.push(L);let p=t.lineStart+e.basePos,d=t.lineStart+e.text.length;p<d&&B(l,p,d)}}return t.addNode(t.buffer.writeElements(l,-s).finish(f.FencedCode,t.prevLineEnd()-s),s),!0},Blockquote(t,e){let r=Le(e);return r<0?!1:(t.startContext(f.Blockquote,e.pos),t.addNode(f.QuoteMark,t.lineStart+e.pos,t.lineStart+e.pos+1),e.moveBase(e.pos+r),null)},HorizontalRule(t,e){if(Y(e,t,!1)<0)return!1;let r=t.lineStart+e.pos;return t.nextLine(),t.addNode(f.HorizontalRule,r),!0},BulletList(t,e){let r=W(e,t,!1);if(r<0)return!1;t.block.type!=f.BulletList&&t.startContext(f.BulletList,e.basePos,e.next);let s=ae(e,e.pos+1);return t.startContext(f.ListItem,e.basePos,s-e.baseIndent),t.addNode(f.ListMark,t.lineStart+e.pos,t.lineStart+e.pos+r),e.moveBaseColumn(s),null},OrderedList(t,e){let r=ee(e,t,!1);if(r<0)return!1;t.block.type!=f.OrderedList&&t.startContext(f.OrderedList,e.basePos,e.text.charCodeAt(e.pos+r-1));let s=ae(e,e.pos+r);return t.startContext(f.ListItem,e.basePos,s-e.baseIndent),t.addNode(f.ListMark,t.lineStart+e.pos,t.lineStart+e.pos+r),e.moveBaseColumn(s),null},ATXHeading(t,e){let r=Se(e);if(r<0)return!1;let s=e.pos,n=t.lineStart+s,i=oe(e.text,e.text.length,s),o=i;for(;o>s&&e.text.charCodeAt(o-1)==e.next;)o--;(o==i||o==s||!C(e.text.charCodeAt(o-1)))&&(o=e.text.length);let a=t.buffer.write(f.HeaderMark,0,r).writeElements(t.parser.parseInline(e.text.slice(s+r+1,o),n+r+1),-n);o<e.text.length&&a.write(f.HeaderMark,o-s,i-s);let l=a.finish(f.ATXHeading1-1+r,e.text.length-s);return t.nextLine(),t.addNode(l,n),!0},HTMLBlock(t,e){let r=xe(e,t,!1);if(r<0)return!1;let s=t.lineStart+e.pos,n=Z[r][1],i=[],o=n!=Q;for(;!n.test(e.text)&&t.nextLine();){if(e.depth<t.stack.length){o=!1;break}for(let h of e.markers)i.push(h)}o&&t.nextLine();let a=n==Ce?f.CommentBlock:n==Ae?f.ProcessingInstructionBlock:f.HTMLBlock,l=t.prevLineEnd();return t.addNode(t.buffer.writeElements(i,-s).finish(a,l-s),s),!0},SetextHeading:void 0};class it{constructor(e){this.stage=0,this.elts=[],this.pos=0,this.start=e.start,this.advance(e.content)}nextLine(e,r,s){if(this.stage==-1)return!1;let n=s.content+`
`+r.scrub(),i=this.advance(n);return i>-1&&i<n.length?this.complete(e,s,i):!1}finish(e,r){return(this.stage==2||this.stage==3)&&N(r.content,this.pos)==r.content.length?this.complete(e,r,r.content.length):!1}complete(e,r,s){return e.addLeafElement(r,m(f.LinkReference,this.start,this.start+s,this.elts)),!0}nextStage(e){return e?(this.pos=e.to-this.start,this.elts.push(e),this.stage++,!0):(e===!1&&(this.stage=-1),!1)}advance(e){for(;;){if(this.stage==-1)return-1;if(this.stage==0){if(!this.nextStage(ye(e,this.pos,this.start,!0)))return-1;if(e.charCodeAt(this.pos)!=58)return this.stage=-1;this.elts.push(m(f.LinkMark,this.pos+this.start,this.pos+this.start+1)),this.pos++}else if(this.stage==1){if(!this.nextStage(ve(e,N(e,this.pos),this.start)))return-1}else if(this.stage==2){let r=N(e,this.pos),s=0;if(r>this.pos){let n=Ne(e,r,this.start);if(n){let i=q(e,n.to-this.start);i>0&&(this.nextStage(n),s=i)}}return s||(s=q(e,this.pos)),s>0&&s<e.length?s:-1}else return q(e,this.pos)}}}function q(t,e){for(;e<t.length;e++){let r=t.charCodeAt(e);if(r==10)break;if(!C(r))return-1}return e}class ot{nextLine(e,r,s){let n=r.depth<e.stack.length?-1:we(r),i=r.next;if(n<0)return!1;let o=m(f.HeaderMark,e.lineStart+r.pos,e.lineStart+n);return e.nextLine(),e.addLeafElement(s,m(i==61?f.SetextHeading1:f.SetextHeading2,s.start,e.prevLineEnd(),[...e.parser.parseInline(s.content,s.start),o])),!0}finish(){return!1}}const at={LinkReference(t,e){return e.content.charCodeAt(0)==91?new it(e):null},SetextHeading(){return new ot}},lt=[(t,e)=>Se(e)>=0,(t,e)=>ke(e)>=0,(t,e)=>Le(e)>=0,(t,e)=>W(e,t,!0)>=0,(t,e)=>ee(e,t,!0)>=0,(t,e)=>Y(e,t,!0)>=0,(t,e)=>xe(e,t,!0)>=0],ht={text:"",end:0};class ft{constructor(e,r,s,n){this.parser=e,this.input=r,this.ranges=n,this.line=new nt,this.atEnd=!1,this.dontInject=new Set,this.stoppedAt=null,this.rangeI=0,this.to=n[n.length-1].to,this.lineStart=this.absoluteLineStart=this.absoluteLineEnd=n[0].from,this.block=X.create(f.Document,0,this.lineStart,0,0),this.stack=[this.block],this.fragments=s.length?new ct(s,r):null,this.readLine()}get parsedPos(){return this.absoluteLineStart}advance(){if(this.stoppedAt!=null&&this.absoluteLineStart>this.stoppedAt)return this.finish();let{line:e}=this;for(;;){for(;e.depth<this.stack.length;)this.finishContext();for(let s of e.markers)this.addNode(s.type,s.from,s.to);if(e.pos<e.text.length)break;if(!this.nextLine())return this.finish()}if(this.fragments&&this.reuseFragment(e.basePos))return null;e:for(;;){for(let s of this.parser.blockParsers)if(s){let n=s(this,e);if(n!=!1){if(n==!0)return null;e.forward();continue e}}break}let r=new st(this.lineStart+e.pos,e.text.slice(e.pos));for(let s of this.parser.leafBlockParsers)if(s){let n=s(this,r);n&&r.parsers.push(n)}e:for(;this.nextLine()&&e.pos!=e.text.length;){if(e.indent<e.baseIndent+4){for(let s of this.parser.endLeafBlock)if(s(this,e,r))break e}for(let s of r.parsers)if(s.nextLine(this,e,r))return null;r.content+=`
`+e.scrub();for(let s of e.markers)r.marks.push(s)}return this.finishLeaf(r),null}stopAt(e){if(this.stoppedAt!=null&&this.stoppedAt<e)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=e}reuseFragment(e){if(!this.fragments.moveTo(this.absoluteLineStart+e,this.absoluteLineStart)||!this.fragments.matches(this.block.hash))return!1;let r=this.fragments.takeNodes(this);if(!r)return!1;let s=r,n=this.absoluteLineStart+r;for(let i=1;i<this.ranges.length;i++){let o=this.ranges[i-1].to,a=this.ranges[i].from;o>=this.lineStart&&a<n&&(s-=a-o)}return this.lineStart+=s,this.absoluteLineStart+=r,this.moveRangeI(),this.absoluteLineStart<this.to?(this.lineStart++,this.absoluteLineStart++,this.readLine()):(this.atEnd=!0,this.readLine()),!0}get depth(){return this.stack.length}parentType(e=this.depth-1){return this.parser.nodeSet.types[this.stack[e].type]}nextLine(){return this.lineStart+=this.line.text.length,this.absoluteLineEnd>=this.to?(this.absoluteLineStart=this.absoluteLineEnd,this.atEnd=!0,this.readLine(),!1):(this.lineStart++,this.absoluteLineStart=this.absoluteLineEnd+1,this.moveRangeI(),this.readLine(),!0)}moveRangeI(){for(;this.rangeI<this.ranges.length-1&&this.absoluteLineStart>=this.ranges[this.rangeI].to;)this.rangeI++,this.absoluteLineStart=Math.max(this.absoluteLineStart,this.ranges[this.rangeI].from)}scanLine(e){let r=ht;if(r.end=e,e>=this.to)r.text="";else if(r.text=this.lineChunkAt(e),r.end+=r.text.length,this.ranges.length>1){let s=this.absoluteLineStart,n=this.rangeI;for(;this.ranges[n].to<r.end;){n++;let i=this.ranges[n].from,o=this.lineChunkAt(i);r.end=i+o.length,r.text=r.text.slice(0,this.ranges[n-1].to-s)+o,s=r.end-r.text.length}}return r}readLine(){let{line:e}=this,{text:r,end:s}=this.scanLine(this.absoluteLineStart);for(this.absoluteLineEnd=s,e.reset(r);e.depth<this.stack.length;e.depth++){let n=this.stack[e.depth],i=this.parser.skipContextMarkup[n.type];if(!i)throw new Error("Unhandled block context "+f[n.type]);if(!i(n,this,e))break;e.forward()}}lineChunkAt(e){let r=this.input.chunk(e),s;if(this.input.lineChunks)s=r==`
`?"":r;else{let n=r.indexOf(`
`);s=n<0?r:r.slice(0,n)}return e+s.length>this.to?s.slice(0,this.to-e):s}prevLineEnd(){return this.atEnd?this.lineStart:this.lineStart-1}startContext(e,r,s=0){this.block=X.create(e,s,this.lineStart+r,this.block.hash,this.lineStart+this.line.text.length),this.stack.push(this.block)}startComposite(e,r,s=0){this.startContext(this.parser.getNodeType(e),r,s)}addNode(e,r,s){typeof e=="number"&&(e=new E(this.parser.nodeSet.types[e],M,M,(s??this.prevLineEnd())-r)),this.block.addChild(e,r-this.block.from)}addElement(e){this.block.addChild(e.toTree(this.parser.nodeSet),e.from-this.block.from)}addLeafElement(e,r){this.addNode(this.buffer.writeElements(V(r.children,e.marks),-r.from).finish(r.type,r.to-r.from),r.from)}finishContext(){let e=this.stack.pop(),r=this.stack[this.stack.length-1];r.addChild(e.toTree(this.parser.nodeSet),e.from-r.from),this.block=r}finish(){for(;this.stack.length>1;)this.finishContext();return this.addGaps(this.block.toTree(this.parser.nodeSet,this.lineStart))}addGaps(e){return this.ranges.length>1?Be(this.ranges,0,e.topNode,this.ranges[0].from,this.dontInject):e}finishLeaf(e){for(let s of e.parsers)if(s.finish(this,e))return;let r=V(this.parser.parseInline(e.content,e.start),e.marks);this.addNode(this.buffer.writeElements(r,-e.start).finish(f.Paragraph,e.content.length),e.start)}elt(e,r,s,n){return typeof e=="string"?m(this.parser.getNodeType(e),r,s,n):new Me(e,r)}get buffer(){return new Ie(this.parser.nodeSet)}}function Be(t,e,r,s,n){if(n.has(r.tree))return r.tree;let i=t[e].to,o=[],a=[],l=r.from+s;function h(u,p){for(;p?u>=i:u>i;){let d=t[e+1].from-i;s+=d,u+=d,e++,i=t[e].to}}for(let u=r.firstChild;u;u=u.nextSibling){h(u.from+s,!0);let p=u.from+s,d;u.to+s>i?(d=Be(t,e,u,s,n),h(u.to+s,!1)):d=u.toTree(),o.push(d),a.push(p-l)}return h(r.to+s,!1),new E(r.type,o,a,r.to+s-l,r.tree?r.tree.propValues:void 0)}class j extends _e{constructor(e,r,s,n,i,o,a,l,h){super(),this.nodeSet=e,this.blockParsers=r,this.leafBlockParsers=s,this.blockNames=n,this.endLeafBlock=i,this.skipContextMarkup=o,this.inlineParsers=a,this.inlineNames=l,this.wrappers=h,this.nodeTypes=Object.create(null);for(let u of e.types)this.nodeTypes[u.name]=u.id}createParse(e,r,s){let n=new ft(this,e,r,s);for(let i of this.wrappers)n=i(n,e,r,s);return n}configure(e){let r=G(e);if(!r)return this;let{nodeSet:s,skipContextMarkup:n}=this,i=this.blockParsers.slice(),o=this.leafBlockParsers.slice(),a=this.blockNames.slice(),l=this.inlineParsers.slice(),h=this.inlineNames.slice(),u=this.endLeafBlock.slice(),p=this.wrappers;if(H(r.defineNodes)){n=Object.assign({},n);let d=s.types.slice(),L;for(let S of r.defineNodes){let{name:g,block:k,composite:b,style:w}=typeof S=="string"?{name:S}:S;if(d.some($=>$.name==g))continue;b&&(n[d.length]=($,$e,qe)=>b($e,qe,$.value));let x=d.length,re=b?["Block","BlockContext"]:k?x>=f.ATXHeading1&&x<=f.SetextHeading2?["Block","LeafBlock","Heading"]:["Block","LeafBlock"]:void 0;d.push(F.define({id:x,name:g,props:re&&[[I.group,re]]})),w&&(L||(L={}),Array.isArray(w)||w instanceof Ue?L[g]=w:Object.assign(L,w))}s=new me(d),L&&(s=s.extend(ce(L)))}if(H(r.props)&&(s=s.extend(...r.props)),H(r.remove))for(let d of r.remove){let L=this.blockNames.indexOf(d),S=this.inlineNames.indexOf(d);L>-1&&(i[L]=o[L]=void 0),S>-1&&(l[S]=void 0)}if(H(r.parseBlock))for(let d of r.parseBlock){let L=a.indexOf(d.name);if(L>-1)i[L]=d.parse,o[L]=d.leaf;else{let S=d.before?T(a,d.before):d.after?T(a,d.after)+1:a.length-1;i.splice(S,0,d.parse),o.splice(S,0,d.leaf),a.splice(S,0,d.name)}d.endLeaf&&u.push(d.endLeaf)}if(H(r.parseInline))for(let d of r.parseInline){let L=h.indexOf(d.name);if(L>-1)l[L]=d.parse;else{let S=d.before?T(h,d.before):d.after?T(h,d.after)+1:h.length-1;l.splice(S,0,d.parse),h.splice(S,0,d.name)}}return r.wrap&&(p=p.concat(r.wrap)),new j(s,i,o,a,u,n,l,h,p)}getNodeType(e){let r=this.nodeTypes[e];if(r==null)throw new RangeError(`Unknown node type '${e}'`);return r}parseInline(e,r){let s=new dt(this,e,r);e:for(let n=r;n<s.end;){let i=s.char(n);for(let o of this.inlineParsers)if(o){let a=o(s,i,n);if(a>=0){n=a;continue e}}n++}return s.resolveMarkers(0)}}function H(t){return t!=null&&t.length>0}function G(t){if(!Array.isArray(t))return t;if(t.length==0)return null;let e=G(t[0]);if(t.length==1)return e;let r=G(t.slice(1));if(!r||!e)return e||r;let s=(o,a)=>(o||M).concat(a||M),n=e.wrap,i=r.wrap;return{props:s(e.props,r.props),defineNodes:s(e.defineNodes,r.defineNodes),parseBlock:s(e.parseBlock,r.parseBlock),parseInline:s(e.parseInline,r.parseInline),remove:s(e.remove,r.remove),wrap:n?i?(o,a,l,h)=>n(i(o,a,l,h),a,l,h):n:i}}function T(t,e){let r=t.indexOf(e);if(r<0)throw new RangeError(`Position specified relative to unknown parser ${e}`);return r}let Ee=[F.none];for(let t=1,e;e=f[t];t++)Ee[t]=F.define({id:t,name:e,props:t>=f.Escape?[]:[[I.group,t in ge?["Block","BlockContext"]:["Block","LeafBlock"]]]});const M=[];class Ie{constructor(e){this.nodeSet=e,this.content=[],this.nodes=[]}write(e,r,s,n=0){return this.content.push(e,r,s,4+n*4),this}writeElements(e,r=0){for(let s of e)s.writeTo(this,r);return this}finish(e,r){return E.build({buffer:this.content,nodeSet:this.nodeSet,reused:this.nodes,topID:e,length:r})}}class O{constructor(e,r,s,n=M){this.type=e,this.from=r,this.to=s,this.children=n}writeTo(e,r){let s=e.content.length;e.writeElements(this.children,r),e.content.push(this.type,this.from+r,this.to+r,e.content.length+4-s)}toTree(e){return new Ie(e).writeElements(this.children,-this.from).finish(this.type,this.to-this.from)}}class Me{constructor(e,r){this.tree=e,this.from=r}get to(){return this.from+this.tree.length}get type(){return this.tree.type.id}get children(){return M}writeTo(e,r){e.nodes.push(this.tree),e.content.push(e.nodes.length-1,this.from+r,this.to+r,-1)}toTree(){return this.tree}}function m(t,e,r,s){return new O(t,e,r,s)}const He={resolve:"Emphasis",mark:"EmphasisMark"},Pe={resolve:"Emphasis",mark:"EmphasisMark"},P={},le={};class A{constructor(e,r,s,n){this.type=e,this.from=r,this.to=s,this.side=n}}const he="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";let R=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;try{R=new RegExp("[\\p{Pc}|\\p{Pd}|\\p{Pe}|\\p{Pf}|\\p{Pi}|\\p{Po}|\\p{Ps}]","u")}catch{}const _={Escape(t,e,r){if(e!=92||r==t.end-1)return-1;let s=t.char(r+1);for(let n=0;n<he.length;n++)if(he.charCodeAt(n)==s)return t.append(m(f.Escape,r,r+2));return-1},Entity(t,e,r){if(e!=38)return-1;let s=/^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(t.slice(r+1,r+31));return s?t.append(m(f.Entity,r,r+1+s[0].length)):-1},InlineCode(t,e,r){if(e!=96||r&&t.char(r-1)==96)return-1;let s=r+1;for(;s<t.end&&t.char(s)==96;)s++;let n=s-r,i=0;for(;s<t.end;s++)if(t.char(s)==96){if(i++,i==n&&t.char(s+1)!=96)return t.append(m(f.InlineCode,r,s+1,[m(f.CodeMark,r,r+n),m(f.CodeMark,s+1-n,s+1)]))}else i=0;return-1},HTMLTag(t,e,r){if(e!=60||r==t.end-1)return-1;let s=t.slice(r+1,t.end),n=/^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(s);if(n)return t.append(m(f.URL,r,r+1+n[0].length));let i=/^!--[^>](?:-[^-]|[^-])*?-->/i.exec(s);if(i)return t.append(m(f.Comment,r,r+1+i[0].length));let o=/^\?[^]*?\?>/.exec(s);if(o)return t.append(m(f.ProcessingInstruction,r,r+1+o[0].length));let a=/^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(s);return a?t.append(m(f.HTMLTag,r,r+1+a[0].length)):-1},Emphasis(t,e,r){if(e!=95&&e!=42)return-1;let s=r+1;for(;t.char(s)==e;)s++;let n=t.slice(r-1,r),i=t.slice(s,s+1),o=R.test(n),a=R.test(i),l=/\s|^$/.test(n),h=/\s|^$/.test(i),u=!h&&(!a||l||o),p=!l&&(!o||h||a),d=u&&(e==42||!p||o),L=p&&(e==42||!u||a);return t.append(new A(e==95?He:Pe,r,s,(d?1:0)|(L?2:0)))},HardBreak(t,e,r){if(e==92&&t.char(r+1)==10)return t.append(m(f.HardBreak,r,r+2));if(e==32){let s=r+1;for(;t.char(s)==32;)s++;if(t.char(s)==10&&s>=r+2)return t.append(m(f.HardBreak,r,s+1))}return-1},Link(t,e,r){return e==91?t.append(new A(P,r,r+1,1)):-1},Image(t,e,r){return e==33&&t.char(r+1)==91?t.append(new A(le,r,r+2,1)):-1},LinkEnd(t,e,r){if(e!=93)return-1;for(let s=t.parts.length-1;s>=0;s--){let n=t.parts[s];if(n instanceof A&&(n.type==P||n.type==le)){if(!n.side||t.skipSpace(n.to)==r&&!/[(\[]/.test(t.slice(r+1,r+2)))return t.parts[s]=null,-1;let i=t.takeContent(s),o=t.parts[s]=ut(t,i,n.type==P?f.Link:f.Image,n.from,r+1);if(n.type==P)for(let a=0;a<s;a++){let l=t.parts[a];l instanceof A&&l.type==P&&(l.side=0)}return o.to}}return-1}};function ut(t,e,r,s,n){let{text:i}=t,o=t.char(n),a=n;if(e.unshift(m(f.LinkMark,s,s+(r==f.Image?2:1))),e.push(m(f.LinkMark,n-1,n)),o==40){let l=t.skipSpace(n+1),h=ve(i,l-t.offset,t.offset),u;h&&(l=t.skipSpace(h.to),u=Ne(i,l-t.offset,t.offset),u&&(l=t.skipSpace(u.to))),t.char(l)==41&&(e.push(m(f.LinkMark,n,n+1)),a=l+1,h&&e.push(h),u&&e.push(u),e.push(m(f.LinkMark,l,a)))}else if(o==91){let l=ye(i,n-t.offset,t.offset,!1);l&&(e.push(l),a=l.to)}return m(r,s,a,e)}function ve(t,e,r){if(t.charCodeAt(e)==60){for(let n=e+1;n<t.length;n++){let i=t.charCodeAt(n);if(i==62)return m(f.URL,e+r,n+1+r);if(i==60||i==10)return!1}return null}else{let n=0,i=e;for(let o=!1;i<t.length;i++){let a=t.charCodeAt(i);if(C(a))break;if(o)o=!1;else if(a==40)n++;else if(a==41){if(!n)break;n--}else a==92&&(o=!0)}return i>e?m(f.URL,e+r,i+r):i==t.length?null:!1}}function Ne(t,e,r){let s=t.charCodeAt(e);if(s!=39&&s!=34&&s!=40)return!1;let n=s==40?41:s;for(let i=e+1,o=!1;i<t.length;i++){let a=t.charCodeAt(i);if(o)o=!1;else{if(a==n)return m(f.LinkTitle,e+r,i+1+r);a==92&&(o=!0)}}return null}function ye(t,e,r,s){for(let n=!1,i=e+1,o=Math.min(t.length,i+999);i<o;i++){let a=t.charCodeAt(i);if(n)n=!1;else{if(a==93)return s?!1:m(f.LinkLabel,e+r,i+1+r);if(s&&!C(a)&&(s=!1),a==91)return!1;a==92&&(n=!0)}}return null}class dt{constructor(e,r,s){this.parser=e,this.text=r,this.offset=s,this.parts=[]}char(e){return e>=this.end?-1:this.text.charCodeAt(e-this.offset)}get end(){return this.offset+this.text.length}slice(e,r){return this.text.slice(e-this.offset,r-this.offset)}append(e){return this.parts.push(e),e.to}addDelimiter(e,r,s,n,i){return this.append(new A(e,r,s,(n?1:0)|(i?2:0)))}addElement(e){return this.append(e)}resolveMarkers(e){for(let s=e;s<this.parts.length;s++){let n=this.parts[s];if(!(n instanceof A&&n.type.resolve&&n.side&2))continue;let i=n.type==He||n.type==Pe,o=n.to-n.from,a,l=s-1;for(;l>=e;l--){let g=this.parts[l];if(g instanceof A&&g.side&1&&g.type==n.type&&!(i&&(n.side&1||g.side&2)&&(g.to-g.from+o)%3==0&&((g.to-g.from)%3||o%3))){a=g;break}}if(!a)continue;let h=n.type.resolve,u=[],p=a.from,d=n.to;if(i){let g=Math.min(2,a.to-a.from,o);p=a.to-g,d=n.from+g,h=g==1?"Emphasis":"StrongEmphasis"}a.type.mark&&u.push(this.elt(a.type.mark,p,a.to));for(let g=l+1;g<s;g++)this.parts[g]instanceof O&&u.push(this.parts[g]),this.parts[g]=null;n.type.mark&&u.push(this.elt(n.type.mark,n.from,d));let L=this.elt(h,p,d,u);this.parts[l]=i&&a.from!=p?new A(a.type,a.from,p,a.side):null,(this.parts[s]=i&&n.to!=d?new A(n.type,d,n.to,n.side):null)?this.parts.splice(s,0,L):this.parts[s]=L}let r=[];for(let s=e;s<this.parts.length;s++){let n=this.parts[s];n instanceof O&&r.push(n)}return r}findOpeningDelimiter(e){for(let r=this.parts.length-1;r>=0;r--){let s=this.parts[r];if(s instanceof A&&s.type==e)return r}return null}takeContent(e){let r=this.resolveMarkers(e);return this.parts.length=e,r}skipSpace(e){return N(this.text,e-this.offset)+this.offset}elt(e,r,s,n){return typeof e=="string"?m(this.parser.getNodeType(e),r,s,n):new Me(e,r)}}function V(t,e){if(!e.length)return t;if(!t.length)return e;let r=t.slice(),s=0;for(let n of e){for(;s<r.length&&r[s].to<n.to;)s++;if(s<r.length&&r[s].from<n.from){let i=r[s];i instanceof O&&(r[s]=new O(i.type,i.from,i.to,V(i.children,[n])))}else r.splice(s++,0,n)}return r}const pt=[f.CodeBlock,f.ListItem,f.OrderedList,f.BulletList];class ct{constructor(e,r){this.fragments=e,this.input=r,this.i=0,this.fragment=null,this.fragmentEnd=-1,this.cursor=null,e.length&&(this.fragment=e[this.i++])}nextFragment(){this.fragment=this.i<this.fragments.length?this.fragments[this.i++]:null,this.cursor=null,this.fragmentEnd=-1}moveTo(e,r){for(;this.fragment&&this.fragment.to<=e;)this.nextFragment();if(!this.fragment||this.fragment.from>(e?e-1:0))return!1;if(this.fragmentEnd<0){let i=this.fragment.to;for(;i>0&&this.input.read(i-1,i)!=`
`;)i--;this.fragmentEnd=i?i-1:0}let s=this.cursor;s||(s=this.cursor=this.fragment.tree.cursor(),s.firstChild());let n=e+this.fragment.offset;for(;s.to<=n;)if(!s.parent())return!1;for(;;){if(s.from>=n)return this.fragment.from<=r;if(!s.childAfter(n))return!1}}matches(e){let r=this.cursor.tree;return r&&r.prop(I.contextHash)==e}takeNodes(e){let r=this.cursor,s=this.fragment.offset,n=this.fragmentEnd-(this.fragment.openEnd?1:0),i=e.absoluteLineStart,o=i,a=e.block.children.length,l=o,h=a;for(;;){if(r.to-s>n){if(r.type.isAnonymous&&r.firstChild())continue;break}if(e.dontInject.add(r.tree),e.addNode(r.tree,r.from-s),r.type.is("Block")&&(pt.indexOf(r.type.id)<0?(o=r.to-s,a=e.block.children.length):(o=l,a=h,l=r.to-s,h=e.block.children.length)),!r.nextSibling())break}for(;e.block.children.length>a;)e.block.children.pop(),e.block.positions.pop();return o-i}}const mt=ce({"Blockquote/...":c.quote,HorizontalRule:c.contentSeparator,"ATXHeading1/... SetextHeading1/...":c.heading1,"ATXHeading2/... SetextHeading2/...":c.heading2,"ATXHeading3/...":c.heading3,"ATXHeading4/...":c.heading4,"ATXHeading5/...":c.heading5,"ATXHeading6/...":c.heading6,"Comment CommentBlock":c.comment,Escape:c.escape,Entity:c.character,"Emphasis/...":c.emphasis,"StrongEmphasis/...":c.strong,"Link/... Image/...":c.link,"OrderedList/... BulletList/...":c.list,"BlockQuote/...":c.quote,"InlineCode CodeText":c.monospace,URL:c.url,"HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark":c.processingInstruction,"CodeInfo LinkLabel":c.labelName,LinkTitle:c.string,Paragraph:c.content}),gt=new j(new me(Ee).extend(mt),Object.keys(z).map(t=>z[t]),Object.keys(z).map(t=>at[t]),Object.keys(z),lt,ge,Object.keys(_).map(t=>_[t]),Object.keys(_),[]);function kt(t,e,r){let s=[];for(let n=t.firstChild,i=e;;n=n.nextSibling){let o=n?n.from:r;if(o>i&&s.push({from:i,to:o}),!n)break;i=n.to}return s}function Lt(t){let{codeParser:e,htmlParser:r}=t;return{wrap:Qe((n,i)=>{let o=n.type.id;if(e&&(o==f.CodeBlock||o==f.FencedCode)){let a="";if(o==f.FencedCode){let h=n.node.getChild(f.CodeInfo);h&&(a=i.read(h.from,h.to))}let l=e(a);if(l)return{parser:l,overlay:h=>h.type.id==f.CodeText}}else if(r&&(o==f.HTMLBlock||o==f.HTMLTag))return{parser:r,overlay:kt(n.node,n.from,n.to)};return null})}}const bt={resolve:"Strikethrough",mark:"StrikethroughMark"},St={defineNodes:[{name:"Strikethrough",style:{"Strikethrough/...":c.strikethrough}},{name:"StrikethroughMark",style:c.processingInstruction}],parseInline:[{name:"Strikethrough",parse(t,e,r){if(e!=126||t.char(r+1)!=126||t.char(r+2)==126)return-1;let s=t.slice(r-1,r),n=t.slice(r+2,r+3),i=/\s|^$/.test(s),o=/\s|^$/.test(n),a=R.test(s),l=R.test(n);return t.addDelimiter(bt,r,r+2,!o&&(!l||i||a),!i&&(!a||o||l))},after:"Emphasis"}]};function y(t,e,r=0,s,n=0){let i=0,o=!0,a=-1,l=-1,h=!1,u=()=>{s.push(t.elt("TableCell",n+a,n+l,t.parser.parseInline(e.slice(a,l),n+a)))};for(let p=r;p<e.length;p++){let d=e.charCodeAt(p);d==124&&!h?((!o||a>-1)&&i++,o=!1,s&&(a>-1&&u(),s.push(t.elt("TableDelimiter",p+n,p+n+1))),a=l=-1):(h||d!=32&&d!=9)&&(a<0&&(a=p),l=p+1),h=!h&&d==92}return a>-1&&(i++,s&&u()),i}function fe(t,e){for(let r=e;r<t.length;r++){let s=t.charCodeAt(r);if(s==124)return!0;s==92&&r++}return!1}const Oe=/^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/;class ue{constructor(){this.rows=null}nextLine(e,r,s){if(this.rows==null){this.rows=!1;let n;if((r.next==45||r.next==58||r.next==124)&&Oe.test(n=r.text.slice(r.pos))){let i=[];y(e,s.content,0,i,s.start)==y(e,n,r.pos)&&(this.rows=[e.elt("TableHeader",s.start,s.start+s.content.length,i),e.elt("TableDelimiter",e.lineStart+r.pos,e.lineStart+r.text.length)])}}else if(this.rows){let n=[];y(e,r.text,r.pos,n,e.lineStart),this.rows.push(e.elt("TableRow",e.lineStart+r.pos,e.lineStart+r.text.length,n))}return!1}finish(e,r){return this.rows?(e.addLeafElement(r,e.elt("Table",r.start,r.start+r.content.length,this.rows)),!0):!1}}const wt={defineNodes:[{name:"Table",block:!0},{name:"TableHeader",style:{"TableHeader/...":c.heading}},"TableRow",{name:"TableCell",style:c.content},{name:"TableDelimiter",style:c.processingInstruction}],parseBlock:[{name:"Table",leaf(t,e){return fe(e.content,0)?new ue:null},endLeaf(t,e,r){if(r.parsers.some(n=>n instanceof ue)||!fe(e.text,e.basePos))return!1;let s=t.scanLine(t.absoluteLineEnd+1).text;return Oe.test(s)&&y(t,e.text,e.basePos)==y(t,s,e.basePos)},before:"SetextHeading"}]};class Ct{nextLine(){return!1}finish(e,r){return e.addLeafElement(r,e.elt("Task",r.start,r.start+r.content.length,[e.elt("TaskMarker",r.start,r.start+3),...e.parser.parseInline(r.content.slice(3),r.start+3)])),!0}}const At={defineNodes:[{name:"Task",block:!0,style:c.list},{name:"TaskMarker",style:c.atom}],parseBlock:[{name:"TaskList",leaf(t,e){return/^\[[ xX]\]/.test(e.content)&&t.parentType().name=="ListItem"?new Ct:null},after:"SetextHeading"}]},xt=[wt,At,St];function Re(t,e,r){return(s,n,i)=>{if(n!=t||s.char(i+1)==t)return-1;let o=[s.elt(r,i,i+1)];for(let a=i+1;a<s.end;a++){let l=s.char(a);if(l==t)return s.addElement(s.elt(e,i,a+1,o.concat(s.elt(r,a,a+1))));if(l==92&&o.push(s.elt("Escape",a,a+++2)),C(l))break}return-1}}const Bt={defineNodes:[{name:"Superscript",style:c.special(c.content)},{name:"SuperscriptMark",style:c.processingInstruction}],parseInline:[{name:"Superscript",parse:Re(94,"Superscript","SuperscriptMark")}]},Et={defineNodes:[{name:"Subscript",style:c.special(c.content)},{name:"SubscriptMark",style:c.processingInstruction}],parseInline:[{name:"Subscript",parse:Re(126,"Subscript","SubscriptMark")}]},It={defineNodes:[{name:"Emoji",style:c.character}],parseInline:[{name:"Emoji",parse(t,e,r){let s;return e!=58||!(s=/^[a-zA-Z_0-9]+:/.exec(t.slice(r+1,t.end)))?-1:t.addElement(t.elt("Emoji",r,r+1+s[0].length))}}]},ze=Ke({block:{open:"<!--",close:"-->"}}),Te=new I,De=gt.configure({props:[Je.add(t=>!t.is("Block")||t.is("Document")||K(t)!=null?void 0:(e,r)=>({from:r.doc.lineAt(e.from).to,to:e.to})),Te.add(K),Ye.add({Document:()=>null}),We.add({Document:ze})]});function K(t){let e=/^(?:ATX|Setext)Heading(\d)$/.exec(t.name);return e?+e[1]:void 0}function Mt(t,e){let r=t;for(;;){let s=r.nextSibling,n;if(!s||(n=K(s.type))!=null&&n<=e)break;r=s}return r.to}const Ht=et.of((t,e,r)=>{for(let s=J(t).resolveInner(r,-1);s&&!(s.from<e);s=s.parent){let n=s.type.prop(Te);if(n==null)continue;let i=Mt(s,n);if(i>r)return{from:r,to:i}}return null});function te(t){return new Ve(ze,t,[Ht],"markdown")}const Pt=te(De),vt=De.configure([xt,Et,Bt,It]),Xe=te(vt);function Nt(t,e){return r=>{if(r&&t){let s=null;if(r=/\S*/.exec(r)[0],typeof t=="function"?s=t(r):s=ne.matchLanguageName(t,r,!0),s instanceof ne)return s.support?s.support.language.parser:tt.getSkippingParser(s.load());if(s)return s.parser}return e?e.parser:null}}class D{constructor(e,r,s,n,i,o,a){this.node=e,this.from=r,this.to=s,this.spaceBefore=n,this.spaceAfter=i,this.type=o,this.item=a}blank(e,r=!0){let s=this.spaceBefore+(this.node.name=="Blockquote"?">":"");if(e!=null){for(;s.length<e;)s+=" ";return s}else{for(let n=this.to-this.from-s.length-this.spaceAfter.length;n>0;n--)s+=" ";return s+(r?this.spaceAfter:"")}}marker(e,r){let s=this.node.name=="OrderedList"?String(+je(this.item,e)[2]+r):"";return this.spaceBefore+s+this.type+this.spaceAfter}}function Fe(t,e){let r=[];for(let n=t;n&&n.name!="Document";n=n.parent)(n.name=="ListItem"||n.name=="Blockquote"||n.name=="FencedCode")&&r.push(n);let s=[];for(let n=r.length-1;n>=0;n--){let i=r[n],o,a=e.lineAt(i.from),l=i.from-a.from;if(i.name=="FencedCode")s.push(new D(i,l,l,"","","",null));else if(i.name=="Blockquote"&&(o=/^[ \t]*>( ?)/.exec(a.text.slice(l))))s.push(new D(i,l,l+o[0].length,"",o[1],">",null));else if(i.name=="ListItem"&&i.parent.name=="OrderedList"&&(o=/^([ \t]*)\d+([.)])([ \t]*)/.exec(a.text.slice(l)))){let h=o[3],u=o[0].length;h.length>=4&&(h=h.slice(0,h.length-4),u-=4),s.push(new D(i.parent,l,l+u,o[1],h,o[2],i))}else if(i.name=="ListItem"&&i.parent.name=="BulletList"&&(o=/^([ \t]*)([-+*])([ \t]{1,4}\[[ xX]\])?([ \t]+)/.exec(a.text.slice(l)))){let h=o[4],u=o[0].length;h.length>4&&(h=h.slice(0,h.length-4),u-=4);let p=o[2];o[3]&&(p+=o[3].replace(/[xX]/," ")),s.push(new D(i.parent,l,l+u,o[1],h,p,i))}}return s}function je(t,e){return/^(\s*)(\d+)(?=[.)])/.exec(e.sliceString(t.from,t.from+10))}function U(t,e,r,s=0){for(let n=-1,i=t;;){if(i.name=="ListItem"){let a=je(i,e),l=+a[2];if(n>=0){if(l!=n+1)return;r.push({from:i.from+a[1].length,to:i.from+a[0].length,insert:String(n+2+s)})}n=l}let o=i.nextSibling;if(!o)break;i=o}}const yt=({state:t,dispatch:e})=>{let r=J(t),{doc:s}=t,n=null,i=t.changeByRange(o=>{if(!o.empty||!Xe.isActiveAt(t,o.from))return n={range:o};let a=o.from,l=s.lineAt(a),h=Fe(r.resolveInner(a,-1),s);for(;h.length&&h[h.length-1].from>a-l.from;)h.pop();if(!h.length)return n={range:o};let u=h[h.length-1];if(u.to-u.spaceAfter.length>a-l.from)return n={range:o};let p=a>=u.to-u.spaceAfter.length&&!/\S/.test(l.text.slice(u.to));if(u.item&&p)if(u.node.firstChild.to>=a||l.from>0&&!/[^\s>]/.test(s.lineAt(l.from-1).text)){let k=h.length>1?h[h.length-2]:null,b,w="";k&&k.item?(b=l.from+k.from,w=k.marker(s,1)):b=l.from+(k?k.to:0);let x=[{from:b,to:a,insert:w}];return u.node.name=="OrderedList"&&U(u.item,s,x,-2),k&&k.node.name=="OrderedList"&&U(k.item,s,x),{range:v.cursor(b+w.length),changes:x}}else{let k="";for(let b=0,w=h.length-2;b<=w;b++)k+=h[b].blank(b<w?h[b+1].from-k.length:null,b<w);return k+=t.lineBreak,{range:v.cursor(a+k.length),changes:{from:l.from,insert:k}}}if(u.node.name=="Blockquote"&&p&&l.from){let k=s.lineAt(l.from-1),b=/>\s*$/.exec(k.text);if(b&&b.index==u.from){let w=t.changes([{from:k.from+b.index,to:k.to},{from:l.from+u.from,to:l.to}]);return{range:o.map(w),changes:w}}}let d=[];u.node.name=="OrderedList"&&U(u.item,s,d);let L=u.item&&u.item.from<l.from,S="";if(!L||/^[\s\d.)\-+*>]*/.exec(l.text)[0].length>=u.to)for(let k=0,b=h.length-1;k<=b;k++)S+=k==b&&!L?h[k].marker(s,1):h[k].blank(k<b?h[k+1].from-S.length:null);let g=a;for(;g>l.from&&/\s/.test(l.text.charAt(g-l.from-1));)g--;return S=t.lineBreak+S,d.push({from:g,to:a,insert:S}),{range:v.cursor(g+S.length),changes:d}});return n?!1:(e(t.update(i,{scrollIntoView:!0,userEvent:"input"})),!0)};function de(t){return t.name=="QuoteMark"||t.name=="ListMark"}function Ot(t,e){let r=t.resolveInner(e,-1),s=e;de(r)&&(s=r.from,r=r.parent);for(let n;n=r.childBefore(s);)if(de(n))s=n.from;else if(n.name=="OrderedList"||n.name=="BulletList")r=n.lastChild,s=r.to;else break;return r}const Rt=({state:t,dispatch:e})=>{let r=J(t),s=null,n=t.changeByRange(i=>{let o=i.from,{doc:a}=t;if(i.empty&&Xe.isActiveAt(t,i.from)){let l=a.lineAt(o),h=Fe(Ot(r,o),a);if(h.length){let u=h[h.length-1],p=u.to-u.spaceAfter.length+(u.spaceAfter?1:0);if(o-l.from>p&&!/\S/.test(l.text.slice(p,o-l.from)))return{range:v.cursor(l.from+p),changes:{from:l.from+p,to:o}};if(o-l.from==p){let d=l.from+u.from;if(u.item&&u.node.from<u.item.from&&/\S/.test(l.text.slice(u.from,u.to)))return{range:i,changes:{from:d,to:l.from+u.to,insert:u.blank(u.to-u.from)}};if(d<o)return{range:v.cursor(d),changes:{from:d,to:o}}}}}return s={range:i}});return s?!1:(e(t.update(n,{scrollIntoView:!0,userEvent:"delete"})),!0)},zt=[{key:"Enter",run:yt},{key:"Backspace",run:Rt}],pe=rt({matchClosingTags:!1});function Jt(t={}){let{codeLanguages:e,defaultCodeLanguage:r,addKeymap:s=!0,base:{parser:n}=Pt}=t;if(!(n instanceof j))throw new RangeError("Base parser provided to `markdown` should be a Markdown parser");let i=t.extensions?[t.extensions]:[],o=[pe.support],a;r instanceof se?(o.push(r.support),a=r.language):r&&(a=r);let l=e||a?Nt(e,a):void 0;return i.push(Lt({codeParser:l,htmlParser:pe.language.parser})),s&&o.push(Ze.high(Ge.of(zt))),new se(te(n.configure(i)),o)}export{Pt as commonmarkLanguage,Rt as deleteMarkupBackward,yt as insertNewlineContinueMarkup,Jt as markdown,zt as markdownKeymap,Xe as markdownLanguage};
//# sourceMappingURL=index-4749378a.js.map
