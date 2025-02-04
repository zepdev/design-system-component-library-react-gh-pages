import{j as e,c as s}from"./clsx-36b9529f.js";import{r as y}from"./index-8b3efc3f.js";import{Z as m,a as c}from"./ZpsButton-e1a5d697.js";import{S as B}from"./Spacing-3b8fb85e.js";import"./_commonjsHelpers-de833af9.js";import"./index-24fb42db.js";import"./Icon-4f52c51b.js";import"./tw-merge-1166cefb.js";const f=y.createContext({imageAlignment:"left"}),h=()=>y.useContext(f),t=({imageAlignment:a="left",children:i})=>e.jsx(f.Provider,{value:{imageAlignment:a},children:e.jsx("div",{className:"zep-grid-items zep-items-center zep-justify-center zep-min-screen",children:e.jsx("div",{className:s("zep-container","zep-mx-auto","zep-realative","zep-grid","zep-grid-cols-1","md:zep-gap-1.5","lg:zep-gap-2","md:zep-grid-cols-16"),"data-testid":"zep-mediaText-simple",children:i})})}),I=({src:a,alt:i,aspectRatio:l="4:3"})=>{const{imageAlignment:n}=h(),b=l==="4:3"?"zep-pb-[calc(3_*_100%_/_4)]":"zep-pb-[calc(4_*_100%_/_3)]",S=n==="left"?"md:zep-order-1":"",_=n==="left"?"md:zep-col-start-2 md:zep-col-end-9 xl:zep-col-start-3 xl:zep-col-end-10":"md:zep-col-start-9 md:zep-col-end-16 xl:zep-col-start-8 xl:zep-col-end-15";return e.jsx("div",{"data-testid":"zep-mediaText-image",className:s("zep-col-start-5","zep-col-end-13","zep-justify-center","zep-row-start-1","zep-row-end-1",S,_),children:e.jsx("div",{className:s("zep-relative",b),children:e.jsx("img",{alt:i,src:a,className:s("zep-w-full zep-h-full zep-object-cover md:zep-w-full md:zep-h-full md:zep-max-w-full")})})})},N=({children:a})=>{const{imageAlignment:i}=h(),l=i==="left"?"":"md:zep-order-1",n=i==="left"?"zep-col-start-6 zep-col-end-12 md:zep-col-start-8 md:zep-col-end-16 xl:zep-col-start-9 xl:zep-col-end-15":"zep-col-start-5 zep-col-end-13  md:zep-col-start-2 md:zep-col-end-10 xl:zep-col-start-3 xl:zep-col-end-9";return e.jsx("div",{className:s("zep-mt-[60%]","zep-w-[86%]","md:zep-w-auto","zep-mx-auto","md:zep-mt-[60px]","xl:zep-mt-[120px]","zep-h-[max-content]","zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]","zep-row-start-1","zep-row-end-1","zep-z-10","zep-p-1","sm:zep-p-1.5","md:zep-p-2","lg:zep-p-3","xl:zep-p-5",l,n),"data-testid":"zep-mediaText-body",children:e.jsx("div",{className:"",children:a})})},D=({children:a})=>e.jsx("p",{"data-testid":"zep-MediaText-tagline",className:s("zep-typography-tagline zep-text-steel-500 zep-mb-0.5"),children:a}),H=({children:a})=>e.jsx("h4",{"data-testid":"zep-MediaText-headline",className:s("zep-text-typography-light-100","zep-typography-headlineMD-fluid-cqi","after:zep-text-[0.23em]","zep-mb-1.5","xl:zep-mb-2","zep-text-left"),children:a}),P=({children:a})=>e.jsx("p",{"data-testid":"zep-MediaText-description",className:"zep-text-typography-light-100 zep-mb-1.5 xl:zep-mb-2",children:a}),w=({labelPrimary:a,labelSecondary:i,onClickPrimary:l,onClickSecondary:n})=>e.jsx("div",{className:"zep-block","data-testid":"zep-mediatext-buttons",children:e.jsxs(B,{gap:"1",className:s("max-md:zep-flex","sm:zep-flex-row"),direction:"column",children:[e.jsx(m,{onClick:l,label:a,variant:c.Primary}),e.jsx(m,{label:i,onClick:n,variant:c.Secondary})]})});t.Image=I;t.Body=N;t.Tagline=D;t.Headline=H;t.Description=P;t.Button=w;try{t.displayName="MediaText",t.__docgenInfo={description:"",displayName:"MediaText",props:{imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const F={title:"PowerSystems Components/MediaText",component:t,tags:["autodocs"],argTypes:{}},d={src:"./assets/image-4_3.png",alt:"Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis."},M="TAGLINE",j="Headline",v="Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque. Sed amet feugiat egestas elementum convallis pretium pellentesque. sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.",r={args:{imageAlignment:"left",children:e.jsxs(e.Fragment,{children:[e.jsx(t.Image,{src:d.src,alt:d.alt}),e.jsxs(t.Body,{children:[e.jsx(t.Tagline,{children:M}),e.jsx(t.Headline,{children:j}),e.jsx(t.Description,{children:v}),e.jsx(t.Button,{labelPrimary:"Primary",labelSecondary:"Secondary"})]})]})}},o={args:{imageAlignment:"right",children:e.jsxs(e.Fragment,{children:[e.jsx(t.Image,{src:d.src,alt:d.alt}),e.jsxs(t.Body,{children:[e.jsx(t.Tagline,{children:M}),e.jsx(t.Headline,{children:j}),e.jsx(t.Description,{children:v}),e.jsx(t.Button,{labelPrimary:"Primary",labelSecondary:"Secondary"})]})]})}};var p,x,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    imageAlignment: 'left',
    children: <>
        <MediaText.Image src={Image.src} alt={Image.alt} />
        <MediaText.Body>
          <MediaText.Tagline>{Tagline}</MediaText.Tagline>
          <MediaText.Headline>{Headline}</MediaText.Headline>
          <MediaText.Description>{Description}</MediaText.Description>
          <MediaText.Button labelPrimary="Primary" labelSecondary="Secondary"></MediaText.Button>
        </MediaText.Body>
      </>
  }
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var u,z,T;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    imageAlignment: 'right',
    children: <>
        <MediaText.Image src={Image.src} alt={Image.alt} />
        <MediaText.Body>
          <MediaText.Tagline>{Tagline}</MediaText.Tagline>
          <MediaText.Headline>{Headline}</MediaText.Headline>
          <MediaText.Description>{Description}</MediaText.Description>
          <MediaText.Button labelPrimary="Primary" labelSecondary="Secondary"></MediaText.Button>
        </MediaText.Body>
      </>
  }
}`,...(T=(z=o.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};const V=["Default","ImageRight"];export{r as Default,o as ImageRight,V as __namedExportsOrder,F as default};
