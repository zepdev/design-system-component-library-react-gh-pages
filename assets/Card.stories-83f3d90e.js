import{j as e,c as l}from"./clsx-36b9529f.js";import{L as m,a as h}from"./Link-f2eb8ddd.js";import{f as x}from"./focus-d7245c50.js";import{w as D,e as s,u as d}from"./index-dccde6df.js";import{C as T}from"./Card-6a629f23.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-9b18e277.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";const R={title:"Components/Card",component:T,tags:["autodocs"],argTypes:{}},o={decorators:[a=>e.jsx("div",{className:"zep-max-w-[312px]",children:e.jsx(a,{})})],args:{children:"Content"},play:async({canvasElement:a,step:r})=>{const t=D(a).getByTestId("zep-card");await r("Initial steps",async()=>{await s(t).toBeInTheDocument(),await s(t).not.toHaveFocus()}),await r("Select card with keyboard",async()=>{await d.tab(),await s(t).toHaveFocus()}),await r("Select card with mouse",async()=>{await d.click(t),await s(t).toHaveFocus()}),await r("Blur card with keyboard",async()=>{await d.tab(),await s(t).not.toHaveFocus()})}},p={decorators:[a=>e.jsx("div",{className:"zep-max-w-[312px]",children:e.jsx("button",{className:l(x,"zep-zep-focus-visible:zep-zep-outline-none","zep-rounded-8"),children:e.jsx(a,{})})})],args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25",children:"Category"}),e.jsx("h4",{className:"zep-typography-headlineSM zep-mb-1 zep-text-typography-dark-100 group-hover:zep-underline",children:"I am a fluid typo h4"}),e.jsx("p",{className:"zep-typography-bodyText zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100",children:"Description"}),e.jsx(m,{as:"span",label:"standalone link",href:"#",mode:h.Standalone})]})}},n={decorators:[a=>e.jsx("div",{className:"zep-max-w-[312px]",children:e.jsx("button",{className:l(x,"zep-focus-visible:zep-outline-none","zep-rounded-8"),children:e.jsx(a,{})})})],args:{image:e.jsx("img",{className:"zep-aspect-16.9 zep-object-cover",src:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"construction site",title:"construction site"}),children:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25",children:"Category"}),e.jsx("h3",{className:"zep-typography-headlineSM zep-mb-1 zep-text-typography-dark-100 group-hover:zep-underline",children:"I am a h3"}),e.jsx("p",{className:"zep-typography-body-text zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100",children:"Description"}),e.jsx(m,{as:"span",label:"standalone link",href:"#",mode:h.Standalone})]})}},i={decorators:[a=>e.jsx("div",{className:"zep-max-w-[312px]",children:e.jsx(a,{})})],args:{image:e.jsx("img",{className:"zep-aspect-16.9 zep-object-cover",src:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"construction site",title:"construction site"}),children:e.jsx(e.Fragment,{children:e.jsx("h3",{className:"zep-typography-headlineSM zep-text-typography-dark-100 group-hover:zep-underline",children:"Title"})})}},c={decorators:[a=>e.jsx("div",{className:"zep-max-w-[600px] ",children:e.jsx("button",{className:l(x,"zep-@container zep-w-full","zep-zep-focus-visible:zep-zep-outline-none","zep-rounded-8"),children:e.jsx(a,{})})})],args:{isFluid:!0,image:e.jsx("img",{className:"zep-aspect-16.9 zep-object-cover",src:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"construction site",title:"construction site"}),children:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25",children:"Category"}),e.jsx("h4",{className:"zep-typography-headlineSM supports-cqi:zep-typography-headlineSM-fluid-cqi supports-cqi:after:zep-text-[0.5em] zep-mb-1 zep-text-left zep-text-typography-dark-100 group-hover:zep-underline",children:"I am a fluid typo h4 working with container related size units (and viewport units fallback)"}),e.jsx("p",{className:"zep-typography-bodyText zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100",children:"Description"}),e.jsx(m,{as:"span",label:"standalone link",href:"#",mode:h.Standalone})]})}};var y,u,z;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-max-w-[312px]">
        <Story />
      </div>],
  args: {
    children: 'Content'
  } as CardProps,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByTestId('zep-card');
    await step('Initial steps', async () => {
      await expect(card).toBeInTheDocument();
      await expect(card).not.toHaveFocus();
    });
    await step('Select card with keyboard', async () => {
      await userEvent.tab();
      await expect(card).toHaveFocus();
    });
    await step('Select card with mouse', async () => {
      await userEvent.click(card);
      await expect(card).toHaveFocus();
    });
    await step('Blur card with keyboard', async () => {
      await userEvent.tab();
      await expect(card).not.toHaveFocus();
    });
  }
}`,...(z=(u=o.parameters)==null?void 0:u.docs)==null?void 0:z.source}}};var g,f,b;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-max-w-[312px]">
        <button className={clsx(focusRing, 'zep-zep-focus-visible:zep-zep-outline-none', 'zep-rounded-8')}>
          <Story />
        </button>
      </div>],
  args: {
    children: <>
        <p className="zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25">Category</p>
        <h4 className="zep-typography-headlineSM zep-mb-1 zep-text-typography-dark-100 group-hover:zep-underline">
          I am a fluid typo h4
        </h4>
        <p className="zep-typography-bodyText zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100">Description</p>
        <Link as={'span'} label="standalone link" href="#" mode={LinkMode.Standalone} />
      </>
  } as CardProps
}`,...(b=(f=p.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var w,v,j;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-max-w-[312px]">
        <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8')}>
          <Story />
        </button>
      </div>],
  args: {
    image: <img className="zep-aspect-16.9 zep-object-cover" src="https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="construction site" title="construction site" />,
    children: <>
        <p className="zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25">Category</p>
        <h3 className="zep-typography-headlineSM zep-mb-1 zep-text-typography-dark-100 group-hover:zep-underline">
          I am a h3
        </h3>
        <p className="zep-typography-body-text zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100">Description</p>
        <Link as={'span'} label="standalone link" href="#" mode={LinkMode.Standalone} />
      </>
  } as CardProps
}`,...(j=(v=n.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var k,N,S;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-max-w-[312px]">
        <Story />
      </div>],
  args: {
    image: <img className="zep-aspect-16.9 zep-object-cover" src="https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="construction site" title="construction site" />,
    children: <>
        <h3 className="zep-typography-headlineSM zep-text-typography-dark-100 group-hover:zep-underline">Title</h3>
      </>
  } as CardProps
}`,...(S=(N=i.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var M,H,C;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-max-w-[600px] ">
        <button className={clsx(focusRing, 'zep-@container zep-w-full', 'zep-zep-focus-visible:zep-zep-outline-none', 'zep-rounded-8')}>
          <Story />
        </button>
      </div>],
  args: {
    isFluid: true,
    image: <img className="zep-aspect-16.9 zep-object-cover" src="https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="construction site" title="construction site" />,
    children: <>
        <p className="zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25">Category</p>
        <h4 className="zep-typography-headlineSM supports-cqi:zep-typography-headlineSM-fluid-cqi supports-cqi:after:zep-text-[0.5em] zep-mb-1 zep-text-left zep-text-typography-dark-100 group-hover:zep-underline">
          I am a fluid typo h4 working with container related size units (and viewport units fallback)
        </h4>
        <p className="zep-typography-bodyText zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100">Description</p>
        <Link as={'span'} label="standalone link" href="#" mode={LinkMode.Standalone} />
      </>
  } as CardProps
}`,...(C=(H=c.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};const _=["Default","WithChildren","WithChildrenAndImage","ProductCard","WithFluidTypoHeadline"];export{o as Default,i as ProductCard,p as WithChildren,n as WithChildrenAndImage,c as WithFluidTypoHeadline,_ as __namedExportsOrder,R as default};
