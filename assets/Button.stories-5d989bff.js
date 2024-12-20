import{j as e}from"./clsx-36b9529f.js";import{w as I,e as c,u as p}from"./index-dccde6df.js";import{a as h}from"./modes-03772fb9.js";import{B as i,a as l,b as D}from"./Button-3d824351.js";import{S as s}from"./Spacing-14a4afc8.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";import"./themes-15eb72b0.js";import"./index-24fb42db.js";import"./Icon-9b18e277.js";import"./tw-merge-1166cefb.js";const F=Object.keys(D),J={title:"Components/Button",component:i,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},variant:{control:{type:"select",options:F}}}},u={args:{variant:l.Primary,label:"Button",title:"Button title",isLoading:!1,disabled:!1},play:async({canvasElement:t,step:n})=>{const r=I(t).getByRole("button");await n("Initial checks",async()=>{await c(r).toHaveTextContent("Button"),await c(r).toHaveAttribute("title","Button title"),await c(r).toBeEnabled()}),await n("Focus button with keyboard",async()=>{await p.tab(),await c(r).toHaveFocus()}),await n("Fire click event with keyboard",async()=>{await p.keyboard("{enter}"),await c(r).toHaveFocus(),await p.keyboard("{space}"),await c(r).toHaveFocus()}),await n("Fire click event with mouse",async()=>{await p.click(r),await c(r).toHaveFocus()}),await n("Blur button with keyboard and check focus",async()=>{await p.tab(),await c(r).not.toHaveFocus()})}},b={args:{variant:l.Primary,label:"",title:"Button title",icon:"alert",isLoading:!1,disabled:!1},play:async({canvasElement:t,step:n})=>{const r=I(t).getByRole("button");await n("Initial checks",async()=>{await c(r).toHaveAttribute("title","Button title"),await c(r).toBeEnabled()}),await n("Focus button with keyboard",async()=>{await p.tab(),await c(r).toHaveFocus()}),await n("Fire click event with keyboard",async()=>{await p.keyboard("{enter}"),await c(r).toHaveFocus(),await p.keyboard("{space}"),await c(r).toHaveFocus()}),await n("Fire click event with mouse",async()=>{await p.click(r),await c(r).toHaveFocus()}),await n("Blur button with keyboard and check focus",async()=>{await p.tab(),await c(r).not.toHaveFocus()})}},g={decorators:[t=>e.jsx(s,{alignItems:"stretch",children:e.jsx(t,{})})],args:{variant:l.Primary,label:"Button",title:"Button title",isLoading:!1,disabled:!1,className:"zep-w-full"},parameters:{chromatic:{modes:{desktopHoldingMedium:h.desktop_holding_medium,mobileCatDark:h.mobile_cat_dark}}}},a={dark:{card:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-900 zep-bg-greyscale-800",label:"a11y-disabled zep-border-t-1 zep-border-greyscale-800 zep-bg-greyscale-700 zep-p-0.25 zep-text-0.875 zep-text-greyscale-400"},light:{card:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100",label:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875"}},d={brandThemes:{[l.Primary]:{default:[],hover:["enabled:zep-bg-primary-hover","enabled:zep-text-primary-contrast"],active:["enabled:zep-bg-primary-active","enabled:zep-text-primary-contrast"],focus:["zep-outline","zep-outline-3","zep-outline-offset-1","zep-outline-focus"],disabled:[]},[l.Secondary]:{default:[],hover:["enabled:zep-bg-primary-hover","enabled:zep-text-primary-contrast","enabled:zep-ring-0"],active:["enabled:zep-bg-primary-active","enabled:zep-text-primary-contrast","enabled:zep-ring-0"],focus:["zep-outline","zep-outline-3","zep-outline-offset-1","zep-outline-focus"],disabled:[]},[l.Tertiary]:{default:[],hover:["enabled:zep-bg-tertiary-hover","enabled:zep-text-typography-primary-hover"],active:["enabled:zep-bg-tertiary-active","enabled:zep-text-typography-primary-active"],focus:["zep-outline","zep-outline-3","zep-outline-offset-1","zep-outline-focus"],disabled:[]}},neutralLight:{[l.LightPrimary]:{default:[],hover:["enabled:zep-bg-neutral-light-hover"],active:["enabled:zep-bg-neutral-light-active"],focus:["zep-outline","zep-outline-3","zep-outline-offset-1","zep-outline-focus"],disabled:[]},[l.LightSecondary]:{default:[],hover:["enabled:zep-bg-neutral-light-hover","enabled:zep-text-neutral-light-contrast","enabled:zep-ring-0"],active:["enabled:zep-bg-neutral-light-active","enabled:zep-text-neutral-light-contrast","enabled:zep-ring-0"],focus:["zep-outline","zep-outline-3","zep-outline-offset-1","zep-outline-focus"],disabled:[]},[l.LightTertiary]:{default:[],hover:["enabled:zep-bg-tertiary-hover","enabled:zep-text-neutral-light-contrast"],active:["enabled:zep-bg-tertiary-active","enabled:zep-text-neutral-light-contrast"],focus:["zep-outline","zep-outline-3","zep-outline-offset-1","zep-outline-focus"],disabled:[]}},neutralDark:{[l.DarkPrimary]:{default:[],hover:["enabled:zep-bg-neutral-dark-hover"],active:["enabled:zep-bg-neutral-dark-active"],focus:["zep-outline","zep-outline-3","zep-outline-offset-1","zep-outline-focus"],disabled:[]},[l.DarkSecondary]:{default:[],hover:["enabled:zep-bg-neutral-dark-hover","enabled:zep-text-neutral-dark-contrast","enabled:zep-ring-0"],active:["enabled:zep-bg-neutral-dark-active","enabled:zep-text-neutral-dark-contrast","enabled:zep-ring-0"],focus:["zep-outline","zep-outline-3","zep-outline-offset-1","zep-outline-focus"],disabled:[]},[l.DarkTertiary]:{default:[],hover:["enabled:zep-bg-tertiary-hover"],active:["enabled:zep-bg-tertiary-active"],focus:["zep-outline","zep-outline-3","zep-outline-offset-1","zep-outline-focus"],disabled:[]}}},H=t=>e.jsx(s,{direction:"column",gap:"1",children:[l.Primary,l.Secondary,l.Tertiary].map(n=>e.jsxs(s,{gap:"1",children:[e.jsxs(s,{direction:"column",justifyContent:"between",className:a.light.card,children:[e.jsx(s,{gap:"1",justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(i,{label:"Button",variant:n,className:`${t} ${d.brandThemes[n].default.join(" ")} zep-pointer-events-none`,tabIndex:-1},`${n}-${t}-default`)}),e.jsx("span",{className:a.light.label,children:`${n}-default`})]}),e.jsxs(s,{direction:"column",justifyContent:"between",className:a.light.card,children:[e.jsx(s,{gap:"1",justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(i,{label:"Button",variant:n,className:`${t} ${d.brandThemes[n].hover.join(" ")} zep-pointer-events-none`,tabIndex:-1},`${n}-${t}-hover`)}),e.jsx("span",{className:a.light.label,children:`${n}-hover`})]}),e.jsxs(s,{direction:"column",justifyContent:"between",className:a.light.card,children:[e.jsx(s,{gap:"1",justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(i,{label:"Button",variant:n,className:`${t} ${d.brandThemes[n].active.join(" ")} zep-pointer-events-none`,tabIndex:-1},`${n}-${t}-active`)}),e.jsx("span",{className:a.light.label,children:`${n}-active`})]}),e.jsxs(s,{direction:"column",justifyContent:"between",className:a.light.card,children:[e.jsx(s,{gap:"1",justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(i,{label:"Button",variant:n,className:`${t} ${d.brandThemes[n].focus.join(" ")} zep-pointer-events-none`,tabIndex:-1},`${n}-${t}-focus`)}),e.jsx("span",{className:a.light.label,children:`${n}-focus`})]}),e.jsxs(s,{direction:"column",justifyContent:"between",className:a.light.card,children:[e.jsx(s,{gap:"1",justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(i,{label:"Button",variant:n,disabled:!0,className:`${t} ${d.brandThemes[n].disabled.join(" ")} zep-pointer-events-none`,tabIndex:-1},`${n}-${t}-disabled`)}),e.jsx("span",{className:a.light.label,children:`${n}-disabled`})]}),e.jsxs(s,{direction:"column",justifyContent:"between",className:a.light.card,children:[e.jsx(s,{gap:"1",justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(i,{variant:n,icon:"info-circle-filled",className:`${t} zep-pointer-events-none`,tabIndex:-1},`${n}-${t}-icon`)}),e.jsx("span",{className:a.light.label,children:`${n}-icon`})]}),e.jsxs(s,{direction:"column",justifyContent:"between",className:a.light.card,children:[e.jsx(s,{gap:"1",justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(i,{variant:n,icon:"info-circle-filled",label:"Button",className:`${t} zep-pointer-events-none`,tabIndex:-1},`${n}-${t}-icon-left`)}),e.jsx("span",{className:a.light.label,children:`${n}-icon-left`})]}),e.jsxs(s,{direction:"column",justifyContent:"between",className:a.light.card,children:[e.jsx(s,{gap:"1",justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(i,{variant:n,icon:"info-circle-filled",iconPosition:"right",label:"Button",className:`${t} zep-pointer-events-none`,tabIndex:-1},`${n}-${t}-icon-right`)}),e.jsx("span",{className:a.light.label,children:`${n}-icon-right`})]})]},`${t}-${n}`))}),y=(t,n)=>e.jsx(s,{direction:"column",gap:"1",children:n.map(o=>e.jsxs(s,{gap:"1",children:[e.jsxs(s,{direction:"column",justifyContent:"between",className:t==="neutralDark"?a.light.card:a.dark.card,children:[e.jsx(s,{gap:"1",justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(i,{label:"Button",variant:o,className:`${t} ${d[t][o].default.join(" ")} zep-pointer-events-none`,tabIndex:-1},`${o}-${t}-default`)}),e.jsx("span",{className:t==="neutralDark"?a.light.label:a.dark.label,children:`${o}-default`})]}),e.jsxs(s,{direction:"column",justifyContent:"between",className:t==="neutralDark"?a.light.card:a.dark.card,children:[e.jsx(s,{gap:"1",justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(i,{label:"Button",variant:o,className:`${t} ${d[t][o].hover.join(" ")} zep-pointer-events-none`,tabIndex:-1},`${o}-${t}-hover`)}),e.jsx("span",{className:t==="neutralDark"?a.light.label:a.dark.label,children:`${o}-hover`})]}),e.jsxs(s,{direction:"column",justifyContent:"between",className:t==="neutralDark"?a.light.card:a.dark.card,children:[e.jsx(s,{gap:"1",justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(i,{label:"Button",variant:o,className:`${t} ${d[t][o].active.join(" ")} zep-pointer-events-none`,tabIndex:-1},`${o}-${t}-active`)}),e.jsx("span",{className:t==="neutralDark"?a.light.label:a.dark.label,children:`${o}-active`})]}),e.jsxs(s,{direction:"column",justifyContent:"between",className:t==="neutralDark"?a.light.card:a.dark.card,children:[e.jsx(s,{gap:"1",justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(i,{label:"Button",variant:o,className:`${t} ${d[t][o].focus.join(" ")} zep-pointer-events-none`,tabIndex:-1},`${o}-${t}-focus`)}),e.jsx("span",{className:t==="neutralDark"?a.light.label:a.dark.label,children:`${o}-focus`})]}),e.jsxs(s,{direction:"column",justifyContent:"between",className:t==="neutralDark"?a.light.card:a.dark.card,children:[e.jsx(s,{gap:"1",justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(i,{label:"Button",variant:o,disabled:!0,className:`${t} ${d[t][o].disabled.join(" ")} zep-pointer-events-none`,tabIndex:-1},`${o}-${t}-disabled`)}),e.jsx("span",{className:t==="neutralDark"?a.light.label:a.dark.label,children:`${o}-disabled`})]}),e.jsxs(s,{direction:"column",justifyContent:"between",className:t==="neutralDark"?a.light.card:a.dark.card,children:[e.jsx(s,{gap:"1",justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(i,{variant:o,icon:"info-circle-filled",className:`${t} zep-pointer-events-none`,tabIndex:-1},`${o}-${t}-icon`)}),e.jsx("span",{className:t==="neutralDark"?a.light.label:a.dark.label,children:`${o}-icon`})]}),e.jsxs(s,{direction:"column",justifyContent:"between",className:t==="neutralDark"?a.light.card:a.dark.card,children:[e.jsx(s,{gap:"1",justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(i,{variant:o,icon:"info-circle-filled",label:"Button",className:`${t} zep-pointer-events-none`,tabIndex:-1},`${o}-${t}-icon-left`)}),e.jsx("span",{className:t==="neutralDark"?a.light.label:a.dark.label,children:`${o}-icon-left`})]}),e.jsxs(s,{direction:"column",justifyContent:"between",className:t==="neutralDark"?a.light.card:a.dark.card,children:[e.jsx(s,{gap:"1",justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(i,{variant:o,icon:"info-circle-filled",iconPosition:"right",label:"Button",className:`${t} zep-pointer-events-none`,tabIndex:-1},`${o}-${t}-icon-right`)}),e.jsx("span",{className:t==="neutralDark"?a.light.label:a.dark.label,children:`${o}-icon-right`})]})]},`${t}-${o}`))}),m={decorators:[()=>e.jsx(e.Fragment,{children:e.jsxs(s,{direction:"column",gap:"4",children:[["theme_cat","theme_rental","theme_powersystems","theme_holding","theme_systems"].map(t=>e.jsxs(s,{direction:"column",gap:"1",className:"zep-p-1",children:[e.jsx("p",{className:"zep-typography-headlineSM zep-uppercase zep-text-typography-dark-100",children:t}),e.jsx(s,{gap:"1",children:H(t)})]},t)),e.jsxs(s,{direction:"column",gap:"1",className:"zep-bg-darkgrey-500 zep-p-1",children:[e.jsx("p",{className:"zep-typography-headlineSM zep-uppercase zep-text-typography-light-100",children:"neutral-Light"}),e.jsx(s,{gap:"1",children:y("neutralLight",[l.LightPrimary,l.LightSecondary,l.LightTertiary])})]},"theme-neutralLight"),e.jsxs(s,{direction:"column",gap:"1",className:"zep-p-1",children:[e.jsx("p",{className:"zep-typography-headlineSM zep-uppercase zep-text-typography-dark-100",children:"neutral-Dark"}),e.jsx(s,{gap:"1",children:y("neutralDark",[l.DarkPrimary,l.DarkSecondary,l.DarkTertiary])})]},"theme-neutralDark")]})})],parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:"*:not(.a11y-disabled)"}]}},controls:{exclude:/^./,hideNoControlsWarning:!0}}};var z,x,f;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.Primary,
    label: 'Button',
    title: 'Button title',
    isLoading: false,
    disabled: false
  } as ButtonProps,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await step('Initial checks', async () => {
      await expect(button).toHaveTextContent('Button');
      await expect(button).toHaveAttribute('title', 'Button title');
      await expect(button).toBeEnabled();
    });
    await step('Focus button with keyboard', async () => {
      await userEvent.tab();
      await expect(button).toHaveFocus();
    });
    await step('Fire click event with keyboard', async () => {
      await userEvent.keyboard('{enter}');
      await expect(button).toHaveFocus();
      await userEvent.keyboard('{space}');
      await expect(button).toHaveFocus();
    });
    await step('Fire click event with mouse', async () => {
      await userEvent.click(button);
      await expect(button).toHaveFocus();
    });
    await step('Blur button with keyboard and check focus', async () => {
      await userEvent.tab();
      await expect(button).not.toHaveFocus();
    });
  }
}`,...(f=(x=u.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var w,j,k;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.Primary,
    label: '',
    title: 'Button title',
    icon: 'alert',
    isLoading: false,
    disabled: false
  } as ButtonProps,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await step('Initial checks', async () => {
      await expect(button).toHaveAttribute('title', 'Button title');
      await expect(button).toBeEnabled();
    });
    await step('Focus button with keyboard', async () => {
      await userEvent.tab();
      await expect(button).toHaveFocus();
    });
    await step('Fire click event with keyboard', async () => {
      await userEvent.keyboard('{enter}');
      await expect(button).toHaveFocus();
      await userEvent.keyboard('{space}');
      await expect(button).toHaveFocus();
    });
    await step('Fire click event with mouse', async () => {
      await userEvent.click(button);
      await expect(button).toHaveFocus();
    });
    await step('Blur button with keyboard and check focus', async () => {
      await userEvent.tab();
      await expect(button).not.toHaveFocus();
    });
  }
}`,...(k=(j=b.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var N,v,$;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [Story => {
    return <Spacing alignItems="stretch">
          <Story />
        </Spacing>;
  }],
  args: {
    variant: ButtonVariant.Primary,
    label: 'Button',
    title: 'Button title',
    isLoading: false,
    disabled: false,
    className: 'zep-w-full'
  } as ButtonProps,
  parameters: {
    chromatic: {
      modes: {
        desktopHoldingMedium: allModes.desktop_holding_medium,
        mobileCatDark: allModes.mobile_cat_dark
      }
    }
  }
}`,...($=(v=g.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var B,C,S;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  decorators: [() => {
    return <>
          <Spacing direction="column" gap="4">
            {['theme_cat', 'theme_rental', 'theme_powersystems', 'theme_holding', 'theme_systems'].map(theme => <Spacing direction="column" key={theme} gap="1" className="zep-p-1">
                <p className="zep-typography-headlineSM zep-uppercase zep-text-typography-dark-100">{theme}</p>
                <Spacing gap="1">{BrandThemeButtons(theme)}</Spacing>
              </Spacing>)}
            <Spacing direction="column" key={'theme-neutralLight'} gap="1" className="zep-bg-darkgrey-500 zep-p-1">
              <p className="zep-typography-headlineSM zep-uppercase zep-text-typography-light-100">neutral-Light</p>
              <Spacing gap="1">
                {NeutralThemeButtons('neutralLight', [ButtonVariant.LightPrimary, ButtonVariant.LightSecondary, ButtonVariant.LightTertiary])}
              </Spacing>
            </Spacing>
            <Spacing direction="column" key={'theme-neutralDark'} gap="1" className="zep-p-1">
              <p className="zep-typography-headlineSM zep-uppercase zep-text-typography-dark-100">neutral-Dark</p>
              <Spacing gap="1">
                {NeutralThemeButtons('neutralDark', [ButtonVariant.DarkPrimary, ButtonVariant.DarkSecondary, ButtonVariant.DarkTertiary])}
              </Spacing>
            </Spacing>
          </Spacing>
        </>;
  }],
  parameters: {
    a11y: {
      config: {
        rules: [{
          // The autocomplete rule will not run based on the CSS selector provided (https://storybook.js.org/docs/react/writing-tests/accessibility-testing#story-level-a11y-configuration)
          id: 'color-contrast',
          selector: '*:not(.a11y-disabled)'
        }]
      }
    },
    controls: {
      exclude: /^./,
      hideNoControlsWarning: true
    }
  }
}`,...(S=(C=m.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const Q=["Default","IconButton","FullWidth","Overview"];export{u as Default,g as FullWidth,b as IconButton,m as Overview,Q as __namedExportsOrder,J as default};
