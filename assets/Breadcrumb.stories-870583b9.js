import{j as e,c as p}from"./clsx-667af910.js";import{F as x}from"./Icon-ceed2606.js";import{r as h}from"./index-37ba2b57.js";import{f as b}from"./focus-d7245c50.js";import{L as a}from"./Link-2a40cea5.js";import"./_commonjsHelpers-de833af9.js";const c=({items:r,...u})=>{const[l,f]=h.useState(!1),z=r.length>2?[...r.slice(0,1),e.jsx("button",{className:p(b,"zep-bg-greyscale-300","hover:zep-bg-greyscale-400","zep-rounded-4","zep-flex","zep-px-0.625","zep-leading-[22px]","zep-cursor-pointer"),onClick:()=>f(!0),children:"..."}),...r.slice(1)]:r,o=n=>r.length>2&&n===1;return e.jsx("nav",{className:"zep-flex",children:e.jsx("ol",{"data-testid":"zep-breadcrumb","aria-label":"breadcrumb","aria-labelledby":"breadcrumb",...u,className:p("zep-flex","zep-flex-row","zep-flex-wrap","zep-gap-0.25",{"max-sm:[&>li:not(:first-child)]:zep-hidden":!l},{"max-sm:[&>li:not(:last-child)]:zep-hidden":!l}),children:z.map((n,s)=>e.jsxs("li",{className:p({"max-sm:!zep-flex":o(s)},{"sm:!zep-hidden":o(s)},{"max-sm:!zep-hidden":o(s)&&l},"last:!zep-flex","first:!zep-flex","[&_svg]:first:zep-hidden","zep-flex","zep-flex-row","zep-flex-nowrap","zep-items-center","zep-gap-0.25","[&_a]:zep-h-full","[&_a]:zep-no-underline","[&_a]:last:zep-font-900","[&:not(:last-child)_a]:hover:zep-text-neutral-dark-hover","[&:not(:last-child)_a]:hover:zep-underline","[&:not(:last-child)_a]:hover:zep-decoration-2","[&:last-child_a]:zep-cursor-default"),children:[e.jsx(x,{name:"chevron-mini-right"}),n]},s))})})};try{c.displayName="Breadcrumb",c.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ReactNode[]"}}}}}catch{}const g=[e.jsx(a,{label:"Home",href:"#"}),e.jsx(a,{label:"Link 2",href:"#"}),e.jsx(a,{label:"Very Long Text",href:"#"}),e.jsx(a,{label:"Link 4",href:"#"}),e.jsx(a,{label:"Link 5"})],B={title:"Components/Breadcrumb",component:c,tags:["autodocs"],argTypes:{}},t={args:{items:g}};var i,d,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: ({
    items
  } as BreadcrumbProps)
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,B as default};
//# sourceMappingURL=Breadcrumb.stories-870583b9.js.map
