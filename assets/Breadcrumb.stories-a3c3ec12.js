import{j as e,c as n}from"./clsx-36b9529f.js";import{F as z}from"./Icon-c4b41303.js";import{r as h}from"./index-8b3efc3f.js";import{f as b}from"./focus-d7245c50.js";import{L as a}from"./Link-3871234c.js";import"./_commonjsHelpers-de833af9.js";const c=({items:r,...u})=>{const[l,f]=h.useState(!1),x=r.length>2?[...r.slice(0,1),e.jsx("button",{className:n(b,"zep-bg-greyscale-300","hover:zep-bg-greyscale-400","zep-rounded-4","zep-flex","zep-px-0.625","zep-leading-[22px]","zep-cursor-pointer"),onClick:()=>f(!0),children:"..."}),...r.slice(1)]:r,o=p=>r.length>2&&p===1;return e.jsx("nav",{className:"zep-flex",children:e.jsx("ol",{"data-testid":"zep-breadcrumb","aria-label":"breadcrumb","aria-labelledby":"breadcrumb",...u,className:n("zep-flex","zep-flex-row","zep-flex-wrap","zep-gap-0.25",{"max-sm:[&>li:not(:first-child)]:zep-hidden":!l},{"max-sm:[&>li:not(:last-child)]:zep-hidden":!l}),children:x.map((p,s)=>e.jsxs("li",{className:n({"max-sm:!zep-flex":o(s)},{"sm:!zep-hidden":o(s)},{"max-sm:!zep-hidden":o(s)&&l},"last:!zep-flex","first:!zep-flex","[&_svg]:last:zep-hidden","zep-flex","zep-flex-row","zep-flex-nowrap","zep-items-center","zep-gap-0.25","[&_a]:zep-h-full","[&_a]:zep-no-underline","[&_a]:last:zep-font-900","[&:not(:last-child)_a]:hover:zep-underline","[&:last-child_a]:zep-cursor-default"),children:[p,e.jsx(z,{name:"chevron-mini-right"})]},s))})})};try{c.displayName="Breadcrumb",c.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ReactNode[]"}}}}}catch{}const g=[e.jsx(a,{label:"Home",href:"#"}),e.jsx(a,{label:"Link 2",href:"#"}),e.jsx(a,{label:"Very Long Text",href:"#"}),e.jsx(a,{label:"Link 4",href:"#"}),e.jsx(a,{label:"Link 5"})],L={title:"Components/Breadcrumb",component:c,tags:["autodocs"],argTypes:{}},t={args:{items:g}};var i,m,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items
  } as BreadcrumbProps
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,L as default};
