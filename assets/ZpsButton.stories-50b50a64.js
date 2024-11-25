import{w as p,e as a,u as n}from"./index-36a8f999.js";import{B as d,Z as y,z as k}from"./ZpsButton-4087ed3f.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./clsx-667af910.js";import"./index-37ba2b57.js";import"./index-47d55b97.js";import"./Icon-6b1de065.js";import"./tw-merge-1166cefb.js";import"./Spacing-5c3b1745.js";const m=Object.keys(k),A={title:"PowerSystems Components/Button",component:d,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},variant:{control:{type:"select",options:m}}}},o={args:{variant:y.Primary,label:"Zps Button",title:"Button title",isLoading:!1,disabled:!1},play:async({canvasElement:s,step:e})=>{const t=p(s).getByRole("button");await e("Initial checks",async()=>{await a(t).toHaveTextContent("Button"),await a(t).toHaveAttribute("title","Button title"),await a(t).toBeEnabled()}),await e("Focus button with keyboard",async()=>{await n.tab(),await a(t).toHaveFocus()}),await e("Fire click event with keyboard",async()=>{await n.keyboard("{enter}"),await a(t).toHaveFocus(),await n.keyboard("{space}"),await a(t).toHaveFocus()}),await e("Fire click event with mouse",async()=>{await n.click(t),await a(t).toHaveFocus()}),await e("Blur button with keyboard and check focus",async()=>{await n.tab(),await a(t).not.toHaveFocus()})}},i={args:{variant:y.Primary,label:"",title:"Button title",icon:"alert",isLoading:!1,disabled:!1},play:async({canvasElement:s,step:e})=>{const t=p(s).getByRole("button");await e("Initial checks",async()=>{await a(t).toHaveAttribute("title","Button title"),await a(t).toBeEnabled()}),await e("Focus button with keyboard",async()=>{await n.tab(),await a(t).toHaveFocus()}),await e("Fire click event with keyboard",async()=>{await n.keyboard("{enter}"),await a(t).toHaveFocus(),await n.keyboard("{space}"),await a(t).toHaveFocus()}),await e("Fire click event with mouse",async()=>{await n.click(t),await a(t).toHaveFocus()}),await e("Blur button with keyboard and check focus",async()=>{await n.tab(),await a(t).not.toHaveFocus()})}};var c,r,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: ({
    variant: ZpsButtonVariant.Primary,
    label: 'Zps Button',
    title: 'Button title',
    isLoading: false,
    disabled: false
  } as ZpsButtonProps),
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
}`,...(u=(r=o.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};var w,l,b;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: ({
    variant: ZpsButtonVariant.Primary,
    label: '',
    title: 'Button title',
    icon: 'alert',
    isLoading: false,
    disabled: false
  } as ZpsButtonProps),
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
}`,...(b=(l=i.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};const R=["Default","IconButton"];export{o as Default,i as IconButton,R as __namedExportsOrder,A as default};
//# sourceMappingURL=ZpsButton.stories-50b50a64.js.map
