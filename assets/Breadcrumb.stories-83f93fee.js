import{j as e,c as p}from"./clsx-667af910.js";import{F as x}from"./Icon-6b1de065.js";import{r as z}from"./index-37ba2b57.js";import{f as b}from"./focus-d7245c50.js";import{L as s}from"./Link-3c6ea108.js";import"./_commonjsHelpers-de833af9.js";const c=({items:a,...f})=>{const[t,u]=z.useState(!1),h=a.length>2?[...a.slice(0,1),e.jsx("button",{className:p(b,"zep-bg-greyscale-300","hover:zep-bg-greyscale-400","zep-rounded-4","zep-flex","zep-px-0.625","zep-leading-[22px]","zep-cursor-pointer"),onClick:()=>u(!0),children:"..."}),...a.slice(1)]:a,o=n=>a.length>2&&n===1;return e.jsx("nav",{className:"zep-flex",children:e.jsx("ol",{"data-testid":"zep-breadcrumb","aria-label":"breadcrumb","aria-labelledby":"breadcrumb",...f,className:p("zep-flex","zep-flex-row","zep-flex-wrap","zep-gap-0.25",{"max-sm:[&>li:not(:first-child)]:zep-hidden":!t},{"max-sm:[&>li:not(:last-child)]:zep-hidden":!t}),children:h.map((n,r)=>e.jsxs("li",{className:p({"max-sm:!zep-flex":o(r)},{"sm:!zep-hidden":o(r)},{"max-sm:!zep-hidden":o(r)&&t},"last:!zep-flex","first:!zep-flex","[&_svg]:last:zep-hidden","zep-flex","zep-flex-row","zep-flex-nowrap","zep-items-center","zep-gap-0.25","[&_a]:zep-h-full","[&_a]:zep-no-underline","[&_a]:last:zep-font-900","[&:not(:last-child)_a]:hover:zep-underline","[&:last-child_a]:zep-cursor-default"),children:[n,e.jsx(x,{name:"chevron-mini-right"})]},r))})})};try{c.displayName="Breadcrumb",c.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ReactNode[]"}}}}}catch{}const g=[e.jsx(s,{hasIcon:!1,label:"Home",href:"#"}),e.jsx(s,{hasIcon:!1,label:"Link 2",href:"#"}),e.jsx(s,{hasIcon:!1,label:"Very Long Text",href:"#"}),e.jsx(s,{hasIcon:!1,label:"Link 4",href:"#"}),e.jsx(s,{hasIcon:!1,label:"Link 5"})],B={title:"Components/Breadcrumb",component:c,tags:["autodocs"],argTypes:{}},l={args:{items:g}};var i,m,d;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: ({
    items
  } as BreadcrumbProps)
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const L=["Default"];export{l as Default,L as __namedExportsOrder,B as default};
//# sourceMappingURL=Breadcrumb.stories-83f93fee.js.map
