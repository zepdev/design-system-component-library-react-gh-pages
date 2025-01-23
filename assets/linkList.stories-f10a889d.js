import{j as e,c as o}from"./clsx-36b9529f.js";import{L as m,c as d,a as g}from"./Link-96649b23.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-2a6dae81.js";const n=({headline:i,links:p})=>e.jsx("div",{className:o("zep-p-1.5","sm:zep-p-2.5","zep-max-w-[700px]","zep-min-w-[300px]"),"data-testid":"zep-link-list",children:e.jsxs("div",{className:o("zep-flex","zep-flex-col","zep-items-start"),children:[e.jsx("h4",{"data-testid":"link-list-headline",className:"zep-typography-headlineSM-fluid-cqi zep-uppercase zep-text-primary-default",children:i}),p.map((r,c)=>e.jsx("div",{className:"zep-mt-1.5 zep-text-primary-default",children:e.jsx(m,{label:"inline link",iconPlacement:"before",icon:r.icon,href:r.link,hasIcon:!0,target:d.Blank,mode:g.Inline})},c))]})});try{n.displayName="LinkList",n.__docgenInfo={description:"",displayName:"LinkList",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"LinkItem[]"}}}}}catch{}const f={title:"PowerSystems Components/LinkList",component:n,tags:["autodocs"],argTypes:{}},t={args:{links:[{icon:"arrow-right",link:"https://www.google.com"},{icon:"arrow-right",link:"https://www.google.com"},{icon:"arrow-right",link:"https://www.google.com"},{icon:"arrow-right",link:"https://www.google.com"}],headline:"headline"}};var a,s,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const z=["Default"];export{t as Default,z as __namedExportsOrder,f as default};
