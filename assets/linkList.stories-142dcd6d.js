import{j as e,c as o}from"./clsx-36b9529f.js";import{L as m,c as d,a as g}from"./Link-2b20a119.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-371bc4d0.js";const t=({headline:i,links:p})=>e.jsx("div",{className:o("zep-p-1.5","sm:zep-p-2.5","zep-max-w-[700px]","zep-min-w-[300px]"),"data-testid":"zep-link-list",children:e.jsxs("div",{className:o("zep-flex","zep-flex-col","zep-items-start"),children:[e.jsx("h4",{"data-testid":"link-list-headline",className:"zep-typography-headlineSM-fluid-cqi zep-uppercase zep-text-primary-default",children:i}),p.map((r,c)=>e.jsx("div",{className:"zep-mt-1.5 zep-text-primary-default",children:e.jsx(m,{label:"inline link",iconPlacement:"before",icon:r.icon,href:r.link,target:d.Blank,mode:g.Inline,rel:"noopener noreferrer"})},c))]})});try{t.displayName="LinkList",t.__docgenInfo={description:"",displayName:"LinkList",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"LinkItem[]"}}}}}catch{}const f={title:"PowerSystems Components/LinkList",component:t,tags:["autodocs"],argTypes:{}},n={args:{links:[{icon:"arrow-right",link:"https://www.google.com"},{icon:"arrow-right",link:"https://www.google.com"},{icon:"arrow-right",link:"https://www.google.com"},{icon:"arrow-right",link:"https://www.google.com"}],headline:"headline"}};var a,s,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    links: [{
      icon: 'arrow-right',
      link: 'https://www.google.com'
    }, {
      icon: 'arrow-right',
      link: 'https://www.google.com'
    }, {
      icon: 'arrow-right',
      link: 'https://www.google.com'
    }, {
      icon: 'arrow-right',
      link: 'https://www.google.com'
    }],
    headline: 'headline'
  }
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const z=["Default"];export{n as Default,z as __namedExportsOrder,f as default};
