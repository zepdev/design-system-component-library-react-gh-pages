import{j as e,c as t}from"./clsx-36b9529f.js";import{Z as n,a as m}from"./ZpsButton-8b2b5a0f.js";import{S as l}from"./Spacing-3ed1191f.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-24fb42db.js";import"./Icon-2a6dae81.js";import"./tw-merge-1166cefb.js";const r=({children:o})=>e.jsx("div",{className:"zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]",children:e.jsx("div",{className:t("zep-flex-col","zep-rounded-lg","zep-shadow-lg","md:zep-flex","zep-relative","zep-max-w-[1920px]","zep-mx-auto"),"data-testid":"zep-newhero",children:o})}),z=({imageSrc:o,imageAlt:a})=>e.jsx("div",{"data-testid":"",className:t("sm:zep-h-auto","md:zep-h-[380px]","lg:zep-h-[540px]","zep-flex"),children:e.jsx("img",{alt:a,src:o,"data-testid":"zep-newhero-image",className:t("zep-w-full","zep-object-cover","zep-h-[202px]","sm:zep-h-[380px]","md:zep-h-[380px]","lg:zep-h-[540px]","md:zep-max-w-full")})}),x=({children:o})=>e.jsx("div",{"data-testid":"zep-newhero-body",className:t("zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]","zep-px-[24px]","zep-py-[32px]","sm:zep-px-[40px]","sm:zep-py-[48px]","md:zep-px-[65px]","md:zep-py-[64px]","lg:zep-py-[80px]","lg:zep-px-[122px]","zep-items-center","zep-w-full"),children:e.jsx("div",{className:"sm:zep-w-9/12",children:o})}),g=({children:o})=>e.jsx("h4",{"data-testid":"new-hero-headline",className:t("zep-typography-headlineLG","zep-typography-headline2XL-fluid-cqi","supports-cqi:zep-typography-headline2XL-fluid-cqi","zep-text-typography-light-100","supports-cqi:after:zep-text-[0.23em]","zep-mb-2","zep-col-span-1"),children:o}),u=({buttonPrimary:o,buttonSecondary:a})=>e.jsx("div",{className:"zep-block","data-testid":"zep-new-herobutton",children:e.jsxs(l,{gap:"1",className:t("max-md:zep-flex","sm:zep-flex-row"),direction:"column",children:[e.jsx(n,{label:o,variant:m.Primary}),e.jsx(n,{label:a,variant:m.Secondary})]})}),h=({imageSrc:o,alt:a})=>e.jsx("img",{src:o,alt:a,width:"18.75%","data-testid":"zep-her-arrowIcon",className:t("zep-absolute","zep-hidden","zep-right-1","zep-bottom-1","sm:zep-block","sm:zep-mr-[2%]","sm:-zep-mb-[14.90%]","md:zep-mr-[3%]","md:-zep-mb-[14.80%]","xl:-zep-mb-[14%]")});r.Image=z;r.Body=x;r.Header=g;r.Button=u;r.IconArrow=h;try{r.displayName="Hero",r.__docgenInfo={description:"",displayName:"Hero",props:{}}}catch{}const _={title:"PowerSystems Components/Hero",component:r,tags:["autodocs"],argTypes:{children:{control:{disable:!0}}}},s={src:"./assets/hero_image.png",alt:"Lorem ipsum dolor sit amet consectetur.",iconSrc:"./assets/moving-forward-arrow.svg",iconAlt:"Lorem ipsum dolor"},y="Headline",b="Primary",H="Secondary",p={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r.Image,{imageSrc:s.src,imageAlt:s.alt}),e.jsxs(r.Body,{children:[e.jsx(r.Header,{children:y}),e.jsx(r.Button,{buttonPrimary:b,buttonSecondary:H})]}),e.jsx(r.IconArrow,{imageSrc:s.iconSrc,alt:s.iconAlt})]})}};var c,i,d;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <>
        <Hero.Image imageSrc={Image.src} imageAlt={Image.alt} />
        <Hero.Body>
          <Hero.Header>{Headline}</Hero.Header>
          <Hero.Button buttonPrimary={buttonPrimary} buttonSecondary={buttonSecondary}></Hero.Button>
        </Hero.Body>
        <Hero.IconArrow imageSrc={Image.iconSrc} alt={Image.iconAlt}></Hero.IconArrow>
      </>
  }
}`,...(d=(i=p.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const A=["Default"];export{p as Default,A as __namedExportsOrder,_ as default};
