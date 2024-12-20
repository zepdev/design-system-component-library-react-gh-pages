import{j as e,c as y}from"./clsx-36b9529f.js";import{w as I,e as s}from"./index-5b16728d.js";import{B as k,a as w}from"./Button-d0b7fa9f.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";import"./index-24fb42db.js";import"./Icon-60e220ab.js";import"./tw-merge-1166cefb.js";import"./Spacing-3b8fb85e.js";const t=({children:a,align:i="left"})=>e.jsx("div",{className:y("zep-flex zep-flex-col md:zep-flex-row zep-w-full",{"md:zep-flex-row-reverse":i==="right"}),"data-testid":"zep-media-text",children:a}),j=({src:a,alt:i,children:n,aspectRatio:o="16:9"})=>e.jsxs("div",{className:y("zep-relative zep-w-full zep-overflow-hidden zep-order-1 md:zep-order-2 zep-h-fit"),"data-testid":"zep-media-text-image",children:[o==="16:9"&&e.jsx("div",{className:"zep-w-full zep-pb-[calc(9_*_100%_/_16)]"}),o==="9:16"&&e.jsx("div",{className:"zep-w-full zep-pb-[calc(16_*_100%_/_9)]"}),n||e.jsx("img",{src:a,alt:i,className:"zep-absolute zep-top-[0] zep-w-full zep-h-full zep-object-cover"})]}),H=({children:a})=>e.jsx("div",{className:"zep-flex zep-items-center zep-order-2 md:zep-order-1 zep-w-full","data-testid":"zep-media-text-body",children:e.jsx("div",{className:"zep-flex zep-flex-col zep-w-full zep-py-1.5 zep-px-1 zep-gap-1.5 sm:zep-py-2.5 sm:zep-px-1.5 md:zep-px-2.5 md:zep-py-[0] lg:zep-px-5",children:a})}),D=({children:a})=>e.jsx("h2",{className:"zep-typography-headlineMD sm:zep-typography-headlineXL zep-text-typography-dark-100","data-testid":"zep-media-text-headline",children:a}),C=({children:a})=>e.jsx("div",{className:"zep-flex zep-flex-col zep-gap-1 zep-typography-bodyText zep-text-typography-dark-100","data-testid":"zep-media-text-description",children:a}),L=({children:a,label:i,onClick:n})=>e.jsx(k,{variant:w.Secondary,onClick:n,className:"md:zep-self-start","data-testid":"zep-media-text-button",label:i,children:a});t.Image=j;t.Body=H;t.Headline=D;t.Description=C;t.Button=L;try{t.displayName="MediaText",t.__docgenInfo={description:"",displayName:"MediaText",props:{align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const J={title:"Components/MediaText",component:t,tags:["autodocs"],argTypes:{children:{control:{disable:!0}}}},l={src:"https://via.placeholder.com/1280x720",alt:"Cat® Motorteile stehen für ein Maximum an Haltbarkeit und Langlebigkeit - und viele davon sind sogar für eine mehrfache Überholung ausgelegt."},c="Mehr Betriebsstunden. Höhere Produktivität. Niedrigere Kosten",u="Cat® Motorteile stehen für ein Maximum an Haltbarkeit und Langlebigkeit - und viele davon sind sogar für eine mehrfache Überholung ausgelegt.",_=e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Cat® Motorteile stehen für ein Maximum an Haltbarkeit und Langlebigkeit - und viele davon sind sogar für eine mehrfache Überholung ausgelegt."}),e.jsx("p",{children:"Cat® Motorteile stehen für ein Maximum an Haltbarkeit und Langlebigkeit - und viele davon sind sogar für eine mehrfache Überholung ausgelegt."}),e.jsx("p",{children:"Cat® Motorteile stehen für ein Maximum an Haltbarkeit und Langlebigkeit - und viele davon sind sogar für eine mehrfache Überholung ausgelegt."}),e.jsx("p",{children:"Cat® Motorteile stehen für ein Maximum an Haltbarkeit und Langlebigkeit - und viele davon sind sogar für eine mehrfache Überholung ausgelegt."}),e.jsx("p",{children:"Cat® Motorteile stehen für ein Maximum an Haltbarkeit und Langlebigkeit - und viele davon sind sogar für eine mehrfache Überholung ausgelegt."}),e.jsx("p",{children:"Cat® Motorteile stehen für ein Maximum an Haltbarkeit und Langlebigkeit - und viele davon sind sogar für eine mehrfache Überholung ausgelegt."}),e.jsx("p",{children:"Cat® Motorteile stehen für ein Maximum an Haltbarkeit und Langlebigkeit - und viele davon sind sogar für eine mehrfache Überholung ausgelegt."}),e.jsx("p",{children:"Cat® Motorteile stehen für ein Maximum an Haltbarkeit und Langlebigkeit - und viele davon sind sogar für eine mehrfache Überholung ausgelegt."}),e.jsx("p",{children:"Cat® Motorteile stehen für ein Maximum an Haltbarkeit und Langlebigkeit - und viele davon sind sogar für eine mehrfache Überholung ausgelegt."}),e.jsx("p",{children:"Cat® Motorteile stehen für ein Maximum an Haltbarkeit und Langlebigkeit - und viele davon sind sogar für eine mehrfache Überholung ausgelegt."}),e.jsx("p",{children:"Cat® Motorteile stehen für ein Maximum an Haltbarkeit und Langlebigkeit - und viele davon sind sogar für eine mehrfache Überholung ausgelegt."}),e.jsx("p",{children:"Cat® Motorteile stehen für ein Maximum an Haltbarkeit und Langlebigkeit - und viele davon sind sogar für eine mehrfache Überholung ausgelegt."})]}),m="Click me!",r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t.Image,{src:l.src,alt:l.alt}),e.jsxs(t.Body,{children:[e.jsx(t.Headline,{children:c}),e.jsx(t.Description,{children:u}),e.jsx(t.Button,{label:m})]})]})},play:async({canvasElement:a,step:i})=>{const n=I(a),o=n.getByTestId("zep-media-text"),M=n.getByTestId("zep-media-text-image"),B=n.getByTestId("zep-media-text-body"),p=n.getByTestId("zep-media-text-headline"),x=n.getByTestId("zep-media-text-description"),g=n.getByTestId("zep-media-text-button");await i("Initial checks",async()=>{await s(o).toBeInTheDocument(),await s(B).toBeInTheDocument(),await s(M).toBeInTheDocument(),await s(p).toBeInTheDocument(),await s(x).toBeInTheDocument(),await s(g).toBeInTheDocument()}),await i("Check headline",async()=>{await s(p).toHaveTextContent(c)}),await i("Check description",async()=>{await s(x).toHaveTextContent(u)}),await i("Check button",async()=>{await s(g).toHaveTextContent(m)})}},d={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t.Image,{src:l.src,alt:l.alt}),e.jsxs(t.Body,{children:[e.jsx(t.Headline,{children:c}),e.jsx(t.Description,{children:_}),e.jsx(t.Button,{label:m})]})]})}};var h,T,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <>
        <MediaText.Image src={Image.src} alt={Image.alt} />
        <MediaText.Body>
          <MediaText.Headline>{Headline}</MediaText.Headline>
          <MediaText.Description>{Description}</MediaText.Description>
          <MediaText.Button label={ButtonText}></MediaText.Button>
        </MediaText.Body>
      </>
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const mediaText = canvas.getByTestId('zep-media-text');
    const mediaTextImage = canvas.getByTestId('zep-media-text-image');
    const mediaTextBody = canvas.getByTestId('zep-media-text-body');
    const mediaTextHeadline = canvas.getByTestId('zep-media-text-headline');
    const mediaTextDescription = canvas.getByTestId('zep-media-text-description');
    const mediaTextButton = canvas.getByTestId('zep-media-text-button');
    await step('Initial checks', async () => {
      await expect(mediaText).toBeInTheDocument();
      await expect(mediaTextBody).toBeInTheDocument();
      await expect(mediaTextImage).toBeInTheDocument();
      await expect(mediaTextHeadline).toBeInTheDocument();
      await expect(mediaTextDescription).toBeInTheDocument();
      await expect(mediaTextButton).toBeInTheDocument();
    });
    await step('Check headline', async () => {
      await expect(mediaTextHeadline).toHaveTextContent(Headline);
    });
    await step('Check description', async () => {
      await expect(mediaTextDescription).toHaveTextContent(Description);
    });
    await step('Check button', async () => {
      await expect(mediaTextButton).toHaveTextContent(ButtonText);
    });
  }
}`,...(f=(T=r.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var z,v,b;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: <>
        <MediaText.Image src={Image.src} alt={Image.alt} />
        <MediaText.Body>
          <MediaText.Headline>{Headline}</MediaText.Headline>
          <MediaText.Description>{DescriptionLong}</MediaText.Description>
          <MediaText.Button label={ButtonText}></MediaText.Button>
        </MediaText.Body>
      </>
  }
}`,...(b=(v=d.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const Q=["Default","LongText"];export{r as Default,d as LongText,Q as __namedExportsOrder,J as default};
