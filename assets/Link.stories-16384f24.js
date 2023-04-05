import{R as a}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";var n=(e=>(e.Standalone="standalone",e.Inline="inline",e))(n||{}),t=(e=>(e.Base="base",e.Small="sm",e))(t||{}),l=(e=>(e.Self="_self",e.Blank="_blank",e))(l||{});const o=({size:e=t.Base,variant:g=n.Inline,disabled:r=!1,target:v=l.Self,label:k,...b})=>{const L=e===t.Base?"text-base":"text-sm",S=r?"disabled cursor-not-allowed":"",w=r?"group-hover:no-underline":"group-hover:underline",y=()=>g===n.Standalone?a.createElement("svg",{className:"ml-1 icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M15.5073 18.585C15.2109 18.585 14.9336 18.4678 14.7276 18.2539C14.5274 18.0459 14.4199 17.7715 14.4253 17.4824C14.4307 17.1934 14.5479 16.9238 14.7563 16.7236L18.2339 13.374H3.08203C2.48535 13.374 2 12.8887 2 12.292C2 11.6953 2.48535 11.21 3.08203 11.21H18.2339L14.7563 7.86133C14.5483 7.66016 14.4307 7.39063 14.4253 7.10254C14.4199 6.81348 14.5274 6.53905 14.7276 6.33105C14.9336 6.11718 15.2109 6 15.5073 6C15.7886 6 16.0552 6.10742 16.2578 6.30176L21.6694 11.5137C21.7725 11.6221 21.8423 11.7236 21.8775 11.8096C21.9712 12.0039 22 12.1465 22 12.292C22 12.4434 21.9683 12.584 21.9004 12.7354C21.8462 12.8545 21.7754 12.96 21.69 13.0488L16.2578 18.2812C16.0547 18.4775 15.7881 18.585 15.5073 18.585Z"})):a.createElement(a.Fragment,null);return a.createElement("a",{className:`
        link 
        group 
        zep-sys 
        zep-core 
        inline-flex flex-row flex-nowrap items-center	
        group-active:underline 
        px-0.5 
        ${L} 
        ${S}`,tabIndex:r?-1:0,"aria-disabled":r,target:v,...b},a.createElement("span",{className:w},k),a.createElement(y,null))};try{o.displayName="Link",o.__docgenInfo={description:"",displayName:"Link",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"LinkVariant.Inline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standalone"'},{value:'"inline"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"LinkSize.Base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'}]}},target:{defaultValue:{value:"LinkTarget.Self"},description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}}}catch{}const x={title:"Components/Link",component:o,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},size:{control:{type:"radio",options:[t.Base,t.Small]}},target:{control:{type:"radio",options:[l.Blank,l.Self]}},variant:{control:{type:"radio",options:[n.Inline,n.Standalone]}}}},s={args:{label:"Link",href:"#",disabled:!1,size:t.Base,target:l.Self,variant:n.Inline}},i={args:{label:"Link",href:"https://www.google.com",disabled:!1,size:t.Base,target:l.Blank,variant:n.Inline}};var d,c,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: ({
    label: 'Link',
    href: '#',
    disabled: false,
    size: LinkSize.Base,
    target: LinkTarget.Self,
    variant: LinkVariant.Inline
  } as LinkProps)
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: ({
    label: 'Link',
    href: 'https://www.google.com',
    disabled: false,
    size: LinkSize.Base,
    target: LinkTarget.Blank,
    variant: LinkVariant.Inline
  } as LinkProps)
}`,...(f=(m=i.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const B=["Default","External"];export{s as Default,i as External,B as __namedExportsOrder,x as default};
//# sourceMappingURL=Link.stories-16384f24.js.map
