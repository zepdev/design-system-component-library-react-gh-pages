import{w as j,e,u as o}from"./index-36a8f999.js";import{L as q,b as i,c as r,a as n}from"./Link-1853ddc9.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./clsx-667af910.js";import"./index-37ba2b57.js";import"./Icon-1d6fc851.js";const aa={title:"Components/Link",component:q,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},size:{control:{type:"radio",options:[i.Base,i.Small]}},target:{control:{type:"radio",options:[r.Blank,r.Self]}},mode:{control:{type:"radio",options:[n.Inline,n.Standalone]}}}},t={label:"Link",href:"#",disabled:!1,size:i.Base,target:r.Self,mode:n.Inline},c={args:{...t,hasIcon:!1}},l={args:{...t,mode:n.Standalone},play:async({canvasElement:O,step:s})=>{const a=j(O).getByRole("link");await s("Initial checks",async()=>{await e(a).toBeInTheDocument(),await e(a).not.toHaveFocus()}),await s("Focus link with keyboard",async()=>{await o.tab(),await e(a).toHaveFocus()}),await s("Blur link with keyboard",async()=>{await o.tab(),await e(a).not.toHaveFocus()}),await s("Focus link with mouse",async()=>{await o.click(a),await e(a).toHaveFocus()}),await s("Blur link after focus with mouse",async()=>{await o.tab(),await e(a).not.toHaveFocus()}),await s("Click link",async()=>{await o.click(a),await e(a).toHaveFocus()}),await s("Blur link and check focus",async()=>{await o.tab(),await e(a).not.toHaveFocus()})}},d={args:{...t,disabled:!0}},p={args:{...t,size:i.Small}},u={args:{...t,mode:n.Standalone,label:""}},m={args:{...t,icon:"external-link",href:"https://www.google.com",target:r.Blank,mode:n.Standalone}},k={args:{...t,as:"span",label:"span tag (no focus)",href:"#",disabled:!1,size:i.Base,target:r.Blank,mode:n.Standalone}},w={args:{...t,label:"No Referrer",target:r.Blank,mode:n.Standalone,rel:"noreferrer"}};var g,f,S;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    hasIcon: false
  } as LinkProps)
}`,...(S=(f=c.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,y,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    mode: LinkMode.Standalone
  } as LinkProps),
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    await step('Initial checks', async () => {
      await expect(link).toBeInTheDocument();
      await expect(link).not.toHaveFocus();
    });
    await step('Focus link with keyboard', async () => {
      await userEvent.tab();
      await expect(link).toHaveFocus();
    });
    await step('Blur link with keyboard', async () => {
      await userEvent.tab();
      await expect(link).not.toHaveFocus();
    });
    await step('Focus link with mouse', async () => {
      await userEvent.click(link);
      await expect(link).toHaveFocus();
    });
    await step('Blur link after focus with mouse', async () => {
      await userEvent.tab();
      await expect(link).not.toHaveFocus();
    });
    await step('Click link', async () => {
      await userEvent.click(link);
      await expect(link).toHaveFocus();
    });
    await step('Blur link and check focus', async () => {
      await userEvent.tab();
      await expect(link).not.toHaveFocus();
    });
  }
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,L,B;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    disabled: true
  } as LinkProps)
}`,...(B=(L=d.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var F,x,H;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    size: LinkSize.Small
  } as LinkProps)
}`,...(H=(x=p.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var A,E,I;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    mode: LinkMode.Standalone,
    label: ''
  } as LinkProps)
}`,...(I=(E=u.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var z,T,P;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    icon: 'external-link',
    href: 'https://www.google.com',
    target: LinkTarget.Blank,
    mode: LinkMode.Standalone
  } as LinkProps)
}`,...(P=(T=m.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var M,R,D;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    as: 'span',
    label: 'span tag (no focus)',
    href: '#',
    disabled: false,
    size: LinkSize.Base,
    target: LinkTarget.Blank,
    mode: LinkMode.Standalone
  } as LinkProps)
}`,...(D=(R=k.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var C,N,_;w.parameters={...w.parameters,docs:{...(C=w.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    label: 'No Referrer',
    target: LinkTarget.Blank,
    mode: LinkMode.Standalone,
    rel: 'noreferrer'
  } as LinkProps)
}`,...(_=(N=w.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const ea=["Inline","Standalone","Disabled","Small","Icon","External","AsSpanTag","RelAttribute"];export{k as AsSpanTag,d as Disabled,m as External,u as Icon,c as Inline,w as RelAttribute,p as Small,l as Standalone,ea as __namedExportsOrder,aa as default};
//# sourceMappingURL=Link.stories-c6a5a80b.js.map
