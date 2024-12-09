import{j as e,c as a}from"./clsx-36b9529f.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const i=({textColor:r,tagline:f,headline:C,showArrow:A})=>{const H=r==="white"?"!zep-text-typography-light-100":r==="black"?"!zep-text-typography-dark-100":"zep-text-indigo-500",S=r==="white"?"!zep-text-steel-500":r==="black"?"zep-text-typography-dark-70/70":"zep-text-steel-500";return e.jsx("div",{className:a("zep-container","zep-px-1.5","sm:zep-px-1","zep-grid","zep-gap-gridGap-md","lg:zep-gap-gridGap-lg","md:zep-grid-cols-16","zep-mx-auto"),"data-testid":"header-short",children:e.jsx("div",{className:a("zep-grid-cols-1","md:zep-col-start-1","md:zep-col-span-6"),children:e.jsxs("div",{className:"zep-flex",children:[A?e.jsx("img",{className:a("zep-h-4","sm:zep-h-[100px]","md:zep-h-4","xl:zep-h-[100px]","zep-w-auto","zep-mr-1.5","sm:zep-mr-2.5","md:zep-mr-1.5","xl:zep-mr-3.5","zep-self-center"),alt:"forward arrow",src:"./assets/moving-forward-arrow.svg"}):null,e.jsxs("div",{className:"zep-block zep-self-center",children:[e.jsx("h3",{className:a(S,"zep-mb-0.5 zep-typography-taglineMD zep-text-steel-500 zep-block"),children:f}),e.jsx("h2",{className:a(H,"zep-typography-headlineLG-fluid-cqi zep-block"),children:C})]})]})})})};try{i.displayName="HeaderShort",i.__docgenInfo={description:"",displayName:"HeaderShort",props:{textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"indigo"'}]}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!0,type:{name:"boolean"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}}}}}catch{}const _={title:"PowerSystems Components/Header Short",component:i,tags:["autodocs"],argTypes:{}},o={args:{textColor:"indigo",headline:"Headline",tagline:"Tagline",showArrow:!0}},t={args:{textColor:"indigo",headline:"Headline is longer than expected, This is just a long sample.",tagline:"Tagline",showArrow:!0}},n={args:{textColor:"indigo",headline:"Component without Tagline",showArrow:!0}},s={args:{textColor:"indigo",tagline:"Tagline",headline:"Component without Arrow",showArrow:!1}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    textColor: 'indigo',
    headline: 'Headline',
    tagline: 'Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,g,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    textColor: 'indigo',
    headline: 'Headline is longer than expected, This is just a long sample.',
    tagline: 'Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var h,u,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    textColor: 'indigo',
    headline: 'Component without Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(w=(u=n.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var x,z,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    textColor: 'indigo',
    tagline: 'Tagline',
    headline: 'Component without Arrow',
    showArrow: false
  } as HeaderShortProps
}`,...(y=(z=s.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};const N=["Default","LongHeadline","ComponentWithoutTagline","ComponentWithoutArrow"];export{s as ComponentWithoutArrow,n as ComponentWithoutTagline,o as Default,t as LongHeadline,N as __namedExportsOrder,_ as default};
