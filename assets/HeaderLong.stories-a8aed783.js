import{j as e,c as n}from"./clsx-36b9529f.js";import{Z as v,a as q}from"./ZpsButton-f838aaab.js";import{L as j,a as A}from"./Link-2b20a119.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-24fb42db.js";import"./Icon-371bc4d0.js";import"./tw-merge-1166cefb.js";import"./Spacing-3ed1191f.js";const o=({textColor:t,type:r,tagline:C,headline:w,description:L,linkHref:l,linkText:p,buttonOnClick:m,buttonText:d})=>{const u=t==="white"?"zep-text-typography-light-100":t==="black"?"zep-text-typography-dark-100":"zep-text-indigo-500",T=t==="white"?"zep-text-yellow-500":t==="black"?"zep-text-typography-dark-100":"zep-text-indigo-500",H=t==="white"?"zep-text-steel-500":t==="black"?"zep-text-typography-dark-70/70":"zep-text-steel-500";return e.jsxs("div",{className:n("zep-px-1.5","sm:zep-px-1","zep-break-words","zep-max-w-[1920px]","zep-mx-auto"),"data-testid":"header-long",children:[e.jsx("div",{className:"zep-block zep-max-w-[944px] zep-self-center",children:e.jsx("h3",{className:n(H,"zep-mb-0.5 zep-typography-taglineMD"),children:C})}),e.jsxs("div",{className:"md:zep-flex md:zep-justify-between",children:[e.jsx("h2",{className:n(u,"zep-mb-1.5 md:zep-mb-2.5 sm:zep-mb-1.5 md:zep-mr-2 zep-max-w-[944px] zep-typography-headlineLG-fluid-cqi"),children:w}),e.jsx("div",{className:"md:zep-float-right",children:r==="button"&&d&&m?e.jsx(v,{className:"zep-mb-2.5 zep-whitespace-nowrap md:zep-mb-[0px]",label:d,onClick:m,variant:q.Primary}):r==="link"&&l&&p?e.jsx(j,{className:n(T,"zep-font-400","zep-mb-2","zep-whitespace-nowrap","md:zep-mb-[0px]","hover:zep-underline","hover:zep-font-500","zep-cursor-pointer"),as:"div",label:p,href:l,mode:A.Standalone}):null})]}),e.jsx("div",{className:"zep-max-w-[944px] zep-break-all",children:e.jsx("p",{className:n(u),children:L})})]})};try{o.displayName="HeaderLong",o.__docgenInfo={description:"",displayName:"HeaderLong",props:{textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"indigo"'}]}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},buttonOnClick:{defaultValue:null,description:"",name:"buttonOnClick",required:!1,type:{name:"(() => {})"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"button"'},{value:'"link"'}]}}}}}catch{}const Z={title:"PowerSystems Components/Header Long",component:o,tags:["autodocs"],argTypes:{}},a={args:{textColor:"indigo",type:"button",tagline:"Tagline",headline:"Headline",linkText:"Click me",linkHref:"https://www.google.com",buttonText:"Click me",buttonOnClick:()=>{},description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},i={args:{textColor:"indigo",type:"link",tagline:"Tagline",headline:"Headline",linkText:"Click me",linkHref:"https://www.google.com",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},s={args:{textColor:"indigo",type:"button",tagline:"Tagline",headline:"Headline",linkText:"Click me",buttonText:"Click me",buttonOnClick:()=>{},description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}};var c,g,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    textColor: 'indigo',
    type: 'button',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    buttonText: 'Click me',
    buttonOnClick: () => {},
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var k,h,b;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    textColor: 'indigo',
    type: 'link',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var z,f,y;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    textColor: 'indigo',
    type: 'button',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    buttonText: 'Click me',
    buttonOnClick: () => {},
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const E=["Default","WithLink","WithButton"];export{a as Default,s as WithButton,i as WithLink,E as __namedExportsOrder,Z as default};
