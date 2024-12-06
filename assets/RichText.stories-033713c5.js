import{j as e,c as d}from"./clsx-667af910.js";import{L as D,a as I,c as P}from"./Link-5a03a5c9.js";import{L as R}from"./List-4e041a03.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-1c0b3313.js";const F=({level:t,children:c})=>{const l=t==="header-three"?"zep-typography-headlineSM-fluid-cqi zep-mb-1":"zep-typography-headlineMD-fluid-cqi zep-mb-2";return t==="header-three"?e.jsx("h3",{className:d(l),children:c}):e.jsx("h4",{className:d(l),children:c})},U=({children:t})=>e.jsx("p",{className:"zep-mb-2",children:t}),V=({ordered:t,items:c})=>e.jsx(R,{className:"zep-mb-2",type:t?"numeric":"bullet",children:c.map((l,o)=>e.jsx(R.Item,{children:l},o))}),y=({content:t,children:c,textColor:l})=>{const o=l==="white"?"!zep-text-typography-light-100":l==="black"?"!zep-text-typography-dark-100":"zep-text-indigo-500",C=(p,a,S)=>{const{type:x,text:E,inlineStyleRanges:T=[],entityRanges:k=[],items:w=[],ordered:_}=p,f=(s,n,g,r="style")=>{let i=[],m=0;return n.forEach(({offset:u,length:j,style:M,key:z})=>{u>m&&i.push({text:s.slice(m,u),style:null,url:null});const O=s.slice(u,u+j),A=r==="style"&&M||null,B=r==="entity"&&z!==void 0&&g?g[z].data.url:null;i.push({text:O,style:A,url:B}),m=u+j}),m<s.length&&i.push({text:s.slice(m),style:null,url:null}),i},q=f(E||"",k,S,"entity").flatMap((s,n)=>s.url?e.jsx(e.Fragment,{children:e.jsx(D,{href:s.url,as:"span",hasIcon:!1,label:s.text,mode:I.Inline,target:P.Blank},n)}):f(s.text,T,void 0,"style").map((r,i)=>r.style==="BOLD"?e.jsx("span",{className:"zep-typography-bodyStrong",children:r.text},n+"-"+i):r.style==="ITALIC"?e.jsx("span",{className:"zep-italic",children:r.text},n+"-"+i):e.jsx("span",{children:r.text},n+"-"+i))),b=e.jsx("span",{className:d(o),children:q.map((s,n)=>e.jsx("span",{children:s},`${a}-${n}`))});switch(x){case"header-three":case"header-four":return e.jsx(F,{className:d(o,"zep-font-500"),level:x,children:b},a);case"unstyled":return e.jsx(U,{className:o,children:b},a);case"list":return e.jsx(V,{className:o,ordered:!!_,items:w},a);default:return null}};return e.jsxs("div",{className:d(o,"zep-container","md:zep-w-[944px]","zep-mx-auto"),"data-testid":"zep-richtext",children:[t.blocks.map((p,a)=>C(p,a,t.entityMap)),t.images.map((p,a)=>e.jsx("div",{children:e.jsx("img",{className:"zep-h-auto zep-max-w-full zep-mb-1",src:p.src,alt:p.alt})},a)),c]})};try{y.displayName="RichText",y.__docgenInfo={description:"",displayName:"RichText",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Content"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"indigo"'},{value:'"black"'}]}}}}}catch{}const Y={title:"PowerSystems Components/RichText",component:y,tags:["autodocs"],argTypes:{textColor:{control:{type:"radio",options:["indigo","white","black"]}}}},$={blocks:[{type:"header-three",depth:0,text:"Li Europan lingues tot Europa",inlineStyleRanges:[],entityRanges:[],items:[],ordered:!1},{type:"header-four",depth:0,text:"Li Europan lingues",inlineStyleRanges:[],entityRanges:[],items:[],ordered:!1},{type:"unstyled",depth:0,text:"existent ae tareie eun myth Por ie ntiemusic sport etc, tot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular",inlineStyleRanges:[{offset:12,length:10,style:"BOLD"}],entityRanges:[{offset:12,length:10,key:0}],items:[],ordered:!1},{type:"list",ordered:!0,items:["First ordered item","Second ordered item","Third ordered item"],depth:0,text:"",inlineStyleRanges:[],entityRanges:[]},{type:"list",ordered:!1,items:["On refusa continuar payar custosi traductores.","pronunciation e plu commun paroles payar custosi traductores.","At solmen va esser grammatica, pronunciation e plu commun paroles."],depth:0,text:"",inlineStyleRanges:[],entityRanges:[]}],entityMap:{0:{type:"LINK",mutability:"MUTABLE",data:{url:"https://www.google.com"}}},images:[{src:"https://via.placeholder.com/600x400",alt:"Example Image",width:"600px",height:"400px"}],unstyled:[{type:"unstyled",depth:0,text:"Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic. Li franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental; in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.",inlineStyleRanges:[],entityRanges:[]}]},h={args:{textColor:"indigo",content:$,children:e.jsx("p",{className:"zep-mb-1",children:"This is Custom"})}};var L,v,N;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: ({
    textColor: 'indigo',
    content: sampleContent,
    children: <p className="zep-mb-1">This is Custom</p>
  } as RichTextProps)
}`,...(N=(v=h.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const Z=["Default"];export{h as Default,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=RichText.stories-033713c5.js.map
