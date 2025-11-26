import{w as $,e as t,u as s}from"./index-dccde6df.js";import{L as aa,b as i,c as o,a}from"./Link-2b20a119.js";import"./_commonjsHelpers-de833af9.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";import"./clsx-36b9529f.js";import"./index-8b3efc3f.js";import"./Icon-371bc4d0.js";const ga={title:"Components/Link",component:aa,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},size:{control:{type:"radio",options:[i.Base,i.Small]}},target:{control:{type:"radio",options:[o.Blank,o.Self]}},mode:{control:{type:"radio",options:[a.Inline,a.Standalone]}}}},e={label:"Link",href:"#",disabled:!1,size:i.Base,target:o.Self,mode:a.Inline},c={args:{...e,icon:"arrow-long-right"}},l={args:{...e,mode:a.Standalone},play:async({canvasElement:Z,step:r})=>{const n=$(Z).getByRole("link");await r("Initial checks",async()=>{await t(n).toBeInTheDocument(),await t(n).not.toHaveFocus()}),await r("Focus link with keyboard",async()=>{await s.tab(),await t(n).toHaveFocus()}),await r("Blur link with keyboard",async()=>{await s.tab(),await t(n).not.toHaveFocus()}),await r("Focus link with mouse",async()=>{await s.click(n),await t(n).toHaveFocus()}),await r("Blur link after focus with mouse",async()=>{await s.tab(),await t(n).not.toHaveFocus()}),await r("Click link",async()=>{await s.click(n),await t(n).toHaveFocus()}),await r("Blur link and check focus",async()=>{await s.tab(),await t(n).not.toHaveFocus()})}},d={args:{...e,disabled:!0}},g={args:{...e,size:i.Small}},m={args:{...e,mode:a.Standalone,icon:"arrow-long-right",label:""}},p={args:{...e,icon:"arrow-long-right",iconPlacement:"after",href:"https://www.google.com",target:o.Blank,mode:a.Standalone}},u={args:{...e,icon:"arrow-long-right",iconPlacement:"after",href:"https://www.google.com",target:o.Blank,mode:a.Inline}},k={args:{...e,icon:"arrow-long-right",href:"https://www.google.com",iconPlacement:"before",target:o.Blank,mode:a.Standalone}},w={args:{...e,icon:"external-link",href:"https://www.google.com",iconPlacement:"after",target:o.Blank,mode:a.Standalone}},f={args:{...e,as:"span",label:"span tag (no focus)",href:"#",disabled:!1,size:i.Base,target:o.Blank,mode:a.Standalone}},h={args:{...e,label:"No Referrer",target:o.Blank,mode:a.Standalone,rel:"noreferrer"}};var S,L,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    icon: 'arrow-long-right'
  } as LinkProps
}`,...(b=(L=c.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var y,B,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    mode: LinkMode.Standalone
  } as LinkProps,
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
}`,...(v=(B=l.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var I,P,A;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true
  } as LinkProps
}`,...(A=(P=d.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var F,x,H;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: LinkSize.Small
  } as LinkProps
}`,...(H=(x=g.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var E,T,z;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    mode: LinkMode.Standalone,
    icon: 'arrow-long-right',
    label: ''
  } as LinkProps
}`,...(z=(T=m.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var M,R,D;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    icon: 'arrow-long-right',
    iconPlacement: 'after',
    href: 'https://www.google.com',
    target: LinkTarget.Blank,
    mode: LinkMode.Standalone
  } as LinkProps
}`,...(D=(R=p.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var C,O,N;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    icon: 'arrow-long-right',
    iconPlacement: 'after',
    href: 'https://www.google.com',
    target: LinkTarget.Blank,
    mode: LinkMode.Inline
  } as LinkProps
}`,...(N=(O=u.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var _,j,q;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    icon: 'arrow-long-right',
    href: 'https://www.google.com',
    iconPlacement: 'before',
    target: LinkTarget.Blank,
    mode: LinkMode.Standalone
  } as LinkProps
}`,...(q=(j=k.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,J,K;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    icon: 'external-link',
    href: 'https://www.google.com',
    iconPlacement: 'after',
    target: LinkTarget.Blank,
    mode: LinkMode.Standalone
  } as LinkProps
}`,...(K=(J=w.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,V;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    as: 'span',
    label: 'span tag (no focus)',
    href: '#',
    disabled: false,
    size: LinkSize.Base,
    target: LinkTarget.Blank,
    mode: LinkMode.Standalone
  } as LinkProps
}`,...(V=(U=f.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var W,X,Y;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'No Referrer',
    target: LinkTarget.Blank,
    mode: LinkMode.Standalone,
    rel: 'noreferrer'
  } as LinkProps
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ma=["Inline","Standalone","Disabled","Small","IconOnly","IconAfter","InlineIcon","IconBefore","External","AsSpanTag","RelAttribute"];export{f as AsSpanTag,d as Disabled,w as External,p as IconAfter,k as IconBefore,m as IconOnly,c as Inline,u as InlineIcon,h as RelAttribute,g as Small,l as Standalone,ma as __namedExportsOrder,ga as default};
