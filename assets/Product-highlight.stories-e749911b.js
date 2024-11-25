import{j as e,c as t}from"./clsx-667af910.js";import{B as A,Z as y}from"./ZpsButton-4087ed3f.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./index-47d55b97.js";import"./Icon-6b1de065.js";import"./tw-merge-1166cefb.js";import"./Spacing-5c3b1745.js";const a=({productDetails:o,imageAlt:p,productImageSrc:f,buttonTitle:b,buttonText:x,imageAlignment:i,onClick:h})=>{const M=i==="right"?"md:zep-order-1":"",v=i==="right"?"md:-zep-mr-[160px] xl:zep-mr-auto":"md:-zep-ml-[160px] xl:zep-ml-auto";return e.jsx(e.Fragment,{children:e.jsxs("div",{className:t(v,"zep-grid md:zep-gap-2 zep-grid-cols-1 md:zep-grid-cols-16 xl:zep-max-w-[2042px] zep-mx-auto"),children:[e.jsx("div",{className:t(M,"zep-mb-1 sm:zep-mb-1.5 md:zep-col-span-10"),children:e.jsx("img",{className:t("zep-aspect-[4/3]"),src:f,alt:p})}),e.jsxs("div",{className:t("zep-px-1 zep-pt-1 sm:zep-px-1.5 sm:zep-pt-1.5 md:zep-px-1.5 md:zep-pt-1.5 lg:zep-px-2 lg:zep-pt-2  md:zep-col-span-6"),children:[e.jsx("div",{className:"zep-mb-2",children:o.map((z,C)=>{const{title:l,content:S}=z;return e.jsxs("div",{className:t("zep-border-b-1 zep-border-b-greyscale-400 last:zep-border-b-[0] sm:zep-mb-1 md:zep-mb-1.5 zep-mb-1  md:last:zep-mb-3"),children:[l&&e.jsx("h2",{"data-testid":"headline",className:t("zep-typography-headlineXS-fluid-cqi zep-mb-1"),children:l}),e.jsx("p",{className:t("zep-typography-bodyText zep-my-1 md:zep-my-1.5"),children:S})]},C)})}),e.jsx(A,{variant:y.Primary,label:x,title:b,onClick:h})]})]})})};try{a.displayName="ProductHighLight",a.__docgenInfo={description:"",displayName:"ProductHighLight",props:{imageAlignment:{defaultValue:null,description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},productImageSrc:{defaultValue:null,description:"",name:"productImageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},productDetails:{defaultValue:null,description:"",name:"productDetails",required:!0,type:{name:"ProductItem[]"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},buttonTitle:{defaultValue:null,description:"",name:"buttonTitle",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const k={title:"PowerSystems Components/ProductHighLight",component:a,tags:["autodocs"],argTypes:{}},n={args:{productDetails:[{title:"ESC für Neumotoren",content:"Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist."},{title:"ESC für gebrauchte Motoren (Advantage ESC)",content:"Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist."},{title:"ESC für überholte Motoren (Overhaul ESC)",content:"Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist."},{title:null,content:"Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar."}],productImageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"Lorem ipsum dolor sit ",imageAlt:"alt text",buttonText:"Button",buttonTitle:"button title",imageAlignment:"left"}},r={args:{productDetails:[{title:"ESC für Neumotoren",content:"Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar."}],productImageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",imageAlt:"alt text",buttonText:"Button",buttonTitle:"button title",imageAlignment:"left"}};var s,u,g;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: ({
    productDetails: [{
      title: 'ESC für Neumotoren',
      content: 'Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist.'
    }, {
      title: 'ESC für gebrauchte Motoren (Advantage ESC)',
      content: 'Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist.'
    }, {
      title: 'ESC für überholte Motoren (Overhaul ESC)',
      content: 'Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist.'
    }, {
      title: null,
      content: 'Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar.'
    }],
    productImageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    alt: 'Lorem ipsum dolor sit ',
    imageAlt: 'alt text',
    buttonText: 'Button',
    buttonTitle: 'button title',
    imageAlignment: 'left'
  } as ProductHighLightProps)
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var m,d,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: ({
    productDetails: [{
      title: 'ESC für Neumotoren',
      content: 'Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar.'
    }],
    productImageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    imageAlt: 'alt text',
    buttonText: 'Button',
    buttonTitle: 'button title',
    imageAlignment: 'left'
  } as ProductHighLightProps)
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const q=["Default","RightImageAlignment"];export{n as Default,r as RightImageAlignment,q as __namedExportsOrder,k as default};
//# sourceMappingURL=Product-highlight.stories-e749911b.js.map
