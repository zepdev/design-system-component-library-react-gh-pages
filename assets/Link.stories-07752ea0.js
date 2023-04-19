import{R as a}from"./index-f1f749bf.js";import{f as _,b as w}from"./focus-29de1b9b.js";import"./_commonjsHelpers-042e6b4d.js";var n=(e=>(e.Standalone="standalone",e.Inline="inline",e))(n||{}),l=(e=>(e.Base="base",e.Small="sm",e))(l||{}),t=(e=>(e.Self="_self",e.Blank="_blank",e))(t||{});const h="zep-standaloneLink",i=({size:e=l.Base,mode:g=n.Inline,disabled:r=!1,target:b=t.Self,label:k,...v})=>{const L=e===l.Base?"text-zep-base":"text-zep-0_875",S=r?"group-hover:no-underline":"group-hover:underline",C=()=>g===n.Standalone?a.createElement("svg",{className:"ml-1 icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M15.5073 18.585C15.2109 18.585 14.9336 18.4678 14.7276 18.2539C14.5274 18.0459 14.4199 17.7715 14.4253 17.4824C14.4307 17.1934 14.5479 16.9238 14.7563 16.7236L18.2339 13.374H3.08203C2.48535 13.374 2 12.8887 2 12.292C2 11.6953 2.48535 11.21 3.08203 11.21H18.2339L14.7563 7.86133C14.5483 7.66016 14.4307 7.39063 14.4253 7.10254C14.4199 6.81348 14.5274 6.53905 14.7276 6.33105C14.9336 6.11718 15.2109 6 15.5073 6C15.7886 6 16.0552 6.10742 16.2578 6.30176L21.6694 11.5137C21.7725 11.6221 21.8423 11.7236 21.8775 11.8096C21.9712 12.0039 22 12.1465 22 12.292C22 12.4434 21.9683 12.584 21.9004 12.7354C21.8462 12.8545 21.7754 12.96 21.69 13.0488L16.2578 18.2812C16.0547 18.4775 15.7881 18.585 15.5073 18.585Z"})):a.createElement(a.Fragment,null);return a.createElement("a",{className:`
        ${h} 
        ${L} 
        ${_}
        ${w} border-separate
        leading-zep-1_25
        group
        group-active:underline 
        inline-flex flex-row flex-nowrap items-center
        ${r?"disabled cursor-not-allowed":""}`,tabIndex:r?-1:0,"aria-disabled":r,target:b,...v},a.createElement("span",{className:S},k),a.createElement(C,null))};try{i.displayName="Link",i.__docgenInfo={description:"",displayName:"Link",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},mode:{defaultValue:{value:"LinkMode.Inline"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"standalone"'},{value:'"inline"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"LinkSize.Base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'}]}},target:{defaultValue:{value:"LinkTarget.Self"},description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}}}catch{}const x={title:"Components/Link",component:i,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},size:{control:{type:"radio",options:[l.Base,l.Small]}},target:{control:{type:"radio",options:[t.Blank,t.Self]}},mode:{control:{type:"radio",options:[n.Inline,n.Standalone]}}}},o={args:{label:"Link",href:"#",disabled:!1,size:l.Base,target:t.Self,mode:n.Standalone}},s={args:{label:"Link",href:"https://www.google.com",disabled:!1,size:l.Base,target:t.Blank,mode:n.Inline}};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: ({
    label: 'Link',
    href: '#',
    disabled: false,
    size: LinkSize.Base,
    target: LinkTarget.Self,
    mode: LinkMode.Standalone
  } as LinkProps)
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,c,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: ({
    label: 'Link',
    href: 'https://www.google.com',
    disabled: false,
    size: LinkSize.Base,
    target: LinkTarget.Blank,
    mode: LinkMode.Inline
  } as LinkProps)
}`,...(f=(c=s.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const E=["Default","External"];export{o as Default,s as External,E as __namedExportsOrder,x as default};
//# sourceMappingURL=Link.stories-07752ea0.js.map
