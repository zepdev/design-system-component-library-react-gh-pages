import{j as e,c as t}from"./clsx-36b9529f.js";import{r as D}from"./index-8b3efc3f.js";import{a as x,B as C}from"./Button-942b7a69.js";import"./_commonjsHelpers-de833af9.js";import"./index-24fb42db.js";import"./Icon-371bc4d0.js";import"./tw-merge-1166cefb.js";import"./Spacing-3ed1191f.js";const I=D.createContext({backgroundColor:"dark"}),_=()=>D.useContext(I),a=({backgroundColor:r="dark",imageAlignment:n="left",children:l})=>{const i=r==="dark"?"zep-bg-background-dark zep-text-typography-light-100":"zep-bg-background-light zep-text-typography-dark-100",p=n==="left"?"md:zep-flex-row":"md:zep-flex-row-reverse";return e.jsx(I.Provider,{value:{backgroundColor:r},children:e.jsx("div",{className:t(p,i,"zep-flex-col","zep-rounded-lg","zep-shadow-lg","md:zep-flex"),"data-testid":"zep-teaser",children:l})})},H=({src:r,alt:n,aspectRatio:l="16:9"})=>{const i=l==="16:9"?"zep-pb-[calc(9_*_100%_/_16)]":"zep-pb-[calc(16_*_100%_/_9)]";return e.jsx("div",{"data-testid":"zep-teaser-image",className:t("zep-justify-center zep-flex zep-items-center md:zep-w-5/6 md:zep-relative xl:zep-w-10/12"),children:e.jsx("div",{className:t("zep-relative","zep-w-full","zep-h-0","md:zep-relative","md:zep-block","md:zep-pl-8","md:zep-h-0",i),children:e.jsx("div",{className:t("zep-absolute zep-inset-0 zep-justify-center zep-flex zep-items-center"),children:e.jsx("img",{alt:n,src:r,className:t("zep-w-full zep-h-full zep-object-cover md:zep-w-full md:zep-h-full md:zep-max-w-full")})})})})},w=({children:r})=>e.jsx("div",{"data-testid":"zep-teaser-body",className:t("zep-@container zep-flex zep-items-center zep-p-1.5 md:zep-px-1.5 md:zep-w-1/2 xl:zep-w-1/2 lg:zep-px-[80px]"),children:e.jsx("div",{className:"lg:zep-pl-8 sm:zep-block zep-inline-grid",children:r})}),N=({children:r})=>e.jsx("p",{"data-testid":"zep-teaser-tagline",className:t("zep-typography-tagline zep-mb-0.5"),children:r}),A=({children:r})=>e.jsx("h4",{"data-testid":"zep-teaser-headline",className:t("zep-typography-headlineLG","supports-cqi:zep-typography-headlineLG-fluid-cqi","supports-cqi:after:zep-text-[0.23em]","zep-mb-0.5","zep-text-left"),children:r}),L=({children:r})=>e.jsx("p",{"data-testid":"zep-teaser-description",children:typeof r=="string"?`${r.slice(0,256)}${r.length>256?"...":""}`:""}),q=({children:r,label:n,onClick:l})=>{const{backgroundColor:i}=_(),p=i==="dark"?x.LightPrimary:x.DarkPrimary;return e.jsxs(C,{variant:p,onClick:l,className:t("zep-mt-1 lg:zep-mt-1.5 md:zep-flex"),"data-testid":"zep-teaser-button",label:n,children:[" ",r]})};a.Image=H;a.Tagline=N;a.Body=w;a.Headline=A;a.Description=L;a.Button=q;try{a.displayName="Teaser",a.__docgenInfo={description:"",displayName:"Teaser",props:{backgroundColor:{defaultValue:{value:"dark"},description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"white"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const $={title:"Components/Teaser",component:a,tags:["autodocs"],argTypes:{children:{control:{disable:!0}}}},s={src:"./assets/bagger-image.png",alt:"Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis."},m="TAGLINE",g="Headline large max characters of X",u="Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.",z="Button",o={args:{backgroundColor:"dark",imageAlignment:"left",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Image,{src:s.src,alt:s.alt}),e.jsxs(a.Body,{children:[e.jsx(a.Tagline,{children:m}),e.jsx(a.Headline,{children:g}),e.jsx(a.Description,{children:u}),e.jsx(a.Button,{label:z})]})]})}},c={args:{backgroundColor:"dark",imageAlignment:"right",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Image,{src:s.src,alt:s.alt}),e.jsxs(a.Body,{children:[e.jsx(a.Tagline,{children:m}),e.jsx(a.Headline,{children:g}),e.jsx(a.Description,{children:u}),e.jsx(a.Button,{label:z})]})]})}},d={args:{backgroundColor:"white",imageAlignment:"right",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Image,{src:s.src,alt:s.alt}),e.jsxs(a.Body,{children:[e.jsx(a.Tagline,{children:m}),e.jsx(a.Headline,{children:g}),e.jsx(a.Description,{children:u}),e.jsx(a.Button,{label:z})]})]})}};var T,h,f;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'dark',
    imageAlignment: 'left',
    children: <>
                                 <Teaser.Image src={Image.src} alt={Image.alt} />
                                 <Teaser.Body>
                                     <Teaser.Tagline>{Tagline}</Teaser.Tagline>
                                     <Teaser.Headline>{Headline}</Teaser.Headline>
                                     <Teaser.Description>{Description}</Teaser.Description>
                                     <Teaser.Button label={ButtonLabel}></Teaser.Button>
                                 </Teaser.Body>
                             </>
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,b,y;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'dark',
    imageAlignment: 'right',
    children: <>
                                 <Teaser.Image src={Image.src} alt={Image.alt} />
                                 <Teaser.Body>
                                     <Teaser.Tagline>{Tagline}</Teaser.Tagline>
                                     <Teaser.Headline>{Headline}</Teaser.Headline>
                                     <Teaser.Description>{Description}</Teaser.Description>
                                     <Teaser.Button label={ButtonLabel}></Teaser.Button>
                                 </Teaser.Body>
                             </>
  }
}`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var B,k,v;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'white',
    imageAlignment: 'right',
    children: <>
                                 <Teaser.Image src={Image.src} alt={Image.alt} />
                                 <Teaser.Body>
                                     <Teaser.Tagline>{Tagline}</Teaser.Tagline>
                                     <Teaser.Headline>{Headline}</Teaser.Headline>
                                     <Teaser.Description>{Description}</Teaser.Description>
                                     <Teaser.Button label={ButtonLabel}></Teaser.Button>
                                 </Teaser.Body>
                             </>
  }
}`,...(v=(k=d.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const O=["Default","ImageAlignmentRight","BackgroundColorWhite"];export{d as BackgroundColorWhite,o as Default,c as ImageAlignmentRight,O as __namedExportsOrder,$ as default};
