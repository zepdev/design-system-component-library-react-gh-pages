import{j as s}from"./clsx-667af910.js";import{r as z}from"./index-37ba2b57.js";import{R as c}from"./Radio-751b7caa.js";import{w,e as r,u as i}from"./index-ddcfe27d.js";import{S as j}from"./Spacing-7a381318.js";import"./_commonjsHelpers-de833af9.js";import"./focus-d7245c50.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-47d55b97.js";const W={title:"Components/Radio Button",component:c,tags:["autodocs"],argTypes:{label:{control:"text"},checked:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[t=>{const[a,e]=z.useState("");return s.jsx(t,{value:a,setValue:e})}],parameters:{docs:{description:{component:"The Radio component is best used inside the Fieldset component, it allows setting hint and error messages."}}}},d={args:{label:"Label"},render:(t,a)=>{const{value:e,setValue:o}=a;return s.jsx(c,{name:"example-default",id:"id-1",label:t.label,checked:e==="radio",onChange:()=>o("radio")})},play:async({canvasElement:t})=>{const e=w(t).getByTestId("zep-radio-input");await r(e).toBeInTheDocument(),await i.tab(),await r(e).toHaveFocus(),await i.click(e),await r(e).toHaveFocus(),await i.tab(),await r(e).not.toHaveFocus()}},n={render:(t,a)=>{const{value:e,setValue:o}=a;return s.jsxs(j,{direction:"column",children:[s.jsx(c,{name:"example-disabled",id:"id-2",label:"Disabled",checked:e==="disabled",onChange:()=>o("disabled"),disabled:!0}),s.jsx(c,{name:"example-disabled",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>o("disabled"),disabled:!0})]})}},l={render:(t,a)=>{const{value:e,setValue:o}=a;return s.jsx(c,{name:"example-error",id:"id-3",label:"Error",checked:e==="error",onChange:()=>o("error"),error:!0})}},u={render:(t,a)=>{const{value:e,setValue:o}=a;return s.jsx(c,{name:"example-aria-described-by","aria-describedby":"id-3",id:"id-3",label:"Error",checked:e==="error",onChange:()=>o("error"),error:!0})}},m={render:(t,a)=>{const{value:e,setValue:o}=a;return s.jsxs(j,{direction:"column",gap:"0.5",children:[s.jsx(c,{name:"example-group",id:"id-3-1",label:"Item 1",checked:e==="item-1",onChange:()=>o("item-1")}),s.jsx(c,{name:"example-group",id:"id-3-2",label:"Item 2",checked:e==="item-2",onChange:()=>o("item-2")}),s.jsx(c,{name:"example-group",id:"id-3-3",label:"Item 3",checked:e==="item-3",onChange:()=>o("item-3")})]})},play:async({canvasElement:t})=>{const e=w(t).getAllByTestId("zep-radio-input");await r(e[0]).toBeInTheDocument(),await i.tab(),await r(e[0]).toHaveFocus(),await i.keyboard("{arrowdown}"),await r(e[1]).toHaveFocus(),await i.keyboard("{arrowdown}"),await r(e[2]).toHaveFocus(),await i.keyboard("{arrowup}"),await r(e[1]).toHaveFocus(),await i.keyboard("{arrowup}"),await r(e[0]).toHaveFocus(),await i.click(e[0]),await r(e[0]).toHaveFocus(),await i.tab(),await r(e[0]).not.toHaveFocus()}},b="zep-radio-input-interactive",A="zep-radio-checked",p={args:{id:"id-4",onChange:()=>{}},render:(t,a)=>s.jsx(c,{id:t.id,name:t.id,label:"Check an item",onChange:()=>{},"data-testid":b}),play:async({canvasElement:t})=>{const a=w(t);await i.click(a.getByTestId(b)),await r(a.getByTestId(A)).toBeInTheDocument(),await r(a.getByTestId(b)).toHaveStyle({display:"block"})}};var v,h,g;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  },
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-default" id="id-1" label={args.label} checked={value === 'radio'} onChange={() => setValue('radio')} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByTestId('zep-radio-input');

    // Basic radio checks
    await expect(radio).toBeInTheDocument();

    // Select radio with keyboard
    await userEvent.tab();
    await expect(radio).toHaveFocus();

    // Fire click event with mouse
    await userEvent.click(radio);

    // Check radio focus
    await expect(radio).toHaveFocus();

    // Blur radio with keyboard
    await userEvent.tab();

    // Check radio focus
    await expect(radio).not.toHaveFocus();
  }
}`,...(g=(h=d.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,k,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Spacing direction="column">
        <Radio name="example-disabled" id="id-2" label="Disabled" checked={value === 'disabled'} onChange={() => setValue('disabled')} disabled />
        <Radio name="example-disabled" id="id-2-1" label="Disabled" checked={true} onChange={() => setValue('disabled')} disabled />
      </Spacing>;
  }
}`,...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var I,C,E;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-error" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var B,F,H;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-aria-described-by" aria-describedby="id-3" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(H=(F=u.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var S,V,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Spacing direction="column" gap="0.5">
        <Radio name="example-group" id="id-3-1" label="Item 1" checked={value === 'item-1'} onChange={() => setValue('item-1')} />
        <Radio name="example-group" id="id-3-2" label="Item 2" checked={value === 'item-2'} onChange={() => setValue('item-2')} />
        <Radio name="example-group" id="id-3-3" label="Item 3" checked={value === 'item-3'} onChange={() => setValue('item-3')} />
      </Spacing>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByTestId('zep-radio-input');

    // Basic radio checks
    await expect(radios[0]).toBeInTheDocument();

    // Select radio with keyboard
    await userEvent.tab();
    await expect(radios[0]).toHaveFocus();

    // Select next radio with keyboard
    await userEvent.keyboard('{arrowdown}');
    await expect(radios[1]).toHaveFocus();

    // Select next radio with keyboard
    await userEvent.keyboard('{arrowdown}');
    await expect(radios[2]).toHaveFocus();

    // Select previous radio with keyboard
    await userEvent.keyboard('{arrowup}');
    await expect(radios[1]).toHaveFocus();

    // Select previous radio with keyboard
    await userEvent.keyboard('{arrowup}');
    await expect(radios[0]).toHaveFocus();

    // Fire click event with mouse
    await userEvent.click(radios[0]);

    // Check radio focus
    await expect(radios[0]).toHaveFocus();

    // Blur radio with keyboard
    await userEvent.tab();

    // Check radio focus
    await expect(radios[0]).not.toHaveFocus();
  }
}`,...(T=(V=m.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var D,R,f;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: ({
    id: 'id-4',
    onChange: () => {}
  } as RadioProps),
  render: (args, context) => {
    return <Radio id={args.id} name={args.id} label="Check an item" onChange={() => {}} data-testid={testItem} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId(testItem));
    await expect(canvas.getByTestId(checkedItem)).toBeInTheDocument();
    await expect(canvas.getByTestId(testItem)).toHaveStyle({
      display: 'block'
    });
  }
}`,...(f=(R=p.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};const X=["Default","Disabled","Error","AriaDescribedBy","Group","CheckAnItem"];export{u as AriaDescribedBy,p as CheckAnItem,d as Default,n as Disabled,l as Error,m as Group,X as __namedExportsOrder,W as default};
//# sourceMappingURL=Radio.stories-0e6d3a59.js.map
