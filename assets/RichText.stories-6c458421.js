import{j as e,c as d}from"./clsx-36b9529f.js";import{L as O,a as A,c as F}from"./Link-4fc61896.js";import{L as R}from"./List-703f3c82.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-4f52c51b.js";const I=({level:t,children:c})=>{const i=t==="header-three"?"zep-typography-headlineSM-fluid-cqi zep-mb-1":"zep-typography-headlineMD-fluid-cqi zep-mb-2";return t==="header-three"?e.jsx("h3",{className:d(i),children:c}):e.jsx("h4",{className:d(i),children:c})},U=({children:t})=>e.jsx("p",{className:"zep-mb-2",children:t}),V=({ordered:t,items:c})=>e.jsx(R,{className:"zep-mb-2",type:t?"numeric":"bullet",children:c.map((i,o)=>e.jsx(R.Item,{children:i},o))}),g=({content:t,children:c,textColor:i})=>{const o=i==="white"?"!zep-text-typography-light-100":i==="black"?"!zep-text-typography-dark-100":"zep-text-indigo-500",S=(p,a,T)=>{const{type:x,text:v,inlineStyleRanges:k=[],entityRanges:E=[],items:w=[],ordered:_}=p,f=(s,r,y,n="style")=>{let l=[],m=0;return r.forEach(({offset:u,length:z,style:B,key:b})=>{u>m&&l.push({text:s.slice(m,u),style:null,url:null});const D=s.slice(u,u+z),P=n==="style"&&B||null,q=n==="entity"&&b!==void 0&&y?y[b].data.url:null;l.push({text:D,style:P,url:q}),m=u+z}),m<s.length&&l.push({text:s.slice(m),style:null,url:null}),l},M=f(v||"",E,T,"entity").flatMap((s,r)=>s.url?e.jsx(e.Fragment,{children:e.jsx(O,{href:s.url,as:"span",label:s.text,mode:A.Inline,target:F.Blank},r)}):f(s.text,k,void 0,"style").map((n,l)=>n.style==="BOLD"?e.jsx("span",{className:"zep-typography-bodyStrong",children:n.text},r+"-"+l):n.style==="ITALIC"?e.jsx("span",{className:"zep-italic",children:n.text},r+"-"+l):e.jsx("span",{children:n.text},r+"-"+l))),j=e.jsx("span",{className:d(o),children:M.map((s,r)=>e.jsx("span",{children:s},`${a}-${r}`))});switch(x){case"header-three":case"header-four":return e.jsx(I,{className:d(o,"zep-font-500"),level:x,children:j},a);case"unstyled":return e.jsx(U,{className:o,children:j},a);case"list":return e.jsx(V,{className:o,ordered:!!_,items:w},a);default:return null}};return e.jsxs("div",{className:d(o,"zep-container","md:zep-w-[944px]","zep-mx-auto"),"data-testid":"zep-richtext",children:[t.blocks.map((p,a)=>S(p,a,t.entityMap)),t.images.map((p,a)=>e.jsx("div",{children:e.jsx("img",{className:"zep-h-auto zep-max-w-full zep-mb-1",src:p.src,alt:p.alt})},a)),c]})};try{g.displayName="RichText",g.__docgenInfo={description:"",displayName:"RichText",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Content"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"indigo"'},{value:'"white"'},{value:'"black"'}]}}}}}catch{}const Y={title:"PowerSystems Components/RichText",component:g,tags:["autodocs"],argTypes:{textColor:{control:{type:"radio",options:["indigo","white","black"]}}}},$={blocks:[{type:"header-three",depth:0,text:"Li Europan lingues tot Europa",inlineStyleRanges:[],entityRanges:[],items:[],ordered:!1},{type:"header-four",depth:0,text:"Li Europan lingues",inlineStyleRanges:[],entityRanges:[],items:[],ordered:!1},{type:"unstyled",depth:0,text:"existent ae tareie eun myth Por ie ntiemusic sport etc, tot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular",inlineStyleRanges:[{offset:12,length:10,style:"BOLD"}],entityRanges:[{offset:12,length:10,key:0}],items:[],ordered:!1},{type:"list",ordered:!0,items:["First ordered item","Second ordered item","Third ordered item"],depth:0,text:"",inlineStyleRanges:[],entityRanges:[]},{type:"list",ordered:!1,items:["On refusa continuar payar custosi traductores.","pronunciation e plu commun paroles payar custosi traductores.","At solmen va esser grammatica, pronunciation e plu commun paroles."],depth:0,text:"",inlineStyleRanges:[],entityRanges:[]}],entityMap:{0:{type:"LINK",mutability:"MUTABLE",data:{url:"https://www.google.com"}}},images:[]},h={args:{textColor:"indigo",content:$,children:e.jsx("p",{className:"zep-mb-1",children:"This is Custom"})}};var L,N,C;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    textColor: 'indigo',
    content: sampleContent,
    children: <p className="zep-mb-1">This is Custom</p>
  } as RichTextProps
}`,...(C=(N=h.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};const Z=["Default"];export{h as Default,Z as __namedExportsOrder,Y as default};
