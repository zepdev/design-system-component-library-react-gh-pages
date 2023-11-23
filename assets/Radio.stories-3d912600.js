import{j as s}from"./clsx-667af910.js";import{r as A}from"./index-37ba2b57.js";import{R as o}from"./Radio-751b7caa.js";import{w as z,u as G,e as u}from"./index-6ac9fa72.js";import{S as T}from"./Spacing-ccf11184.js";import"./_commonjsHelpers-de833af9.js";import"./focus-d7245c50.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";const U={title:"Components/Radio",component:o,tags:["autodocs"],argTypes:{label:{control:"text"},checked:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[t=>{const[e,a]=A.useState("");return s.jsx(t,{value:e,setValue:a})}],parameters:{docs:{description:{component:"The Radio component is best used inside the Fieldset component, it allows setting hint and error messages."}}}},d={args:{label:"Label"},render:(t,e)=>{const{value:a,setValue:r}=e;return s.jsx(o,{name:"example-default",id:"id-1",label:t.label,checked:a==="radio",onChange:()=>r("radio")})}},n={render:(t,e)=>{const{value:a,setValue:r}=e;return s.jsxs(T,{direction:"column",children:[s.jsx(o,{name:"example-disabled",id:"id-2",label:"Disabled",checked:a==="disabled",onChange:()=>r("disabled"),disabled:!0}),s.jsx(o,{name:"example-disabled",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>r("disabled"),disabled:!0})]})}},c={render:(t,e)=>{const{value:a,setValue:r}=e;return s.jsx(o,{name:"example-error",id:"id-3",label:"Error",checked:a==="error",onChange:()=>r("error"),error:!0})}},i={render:(t,e)=>{const{value:a,setValue:r}=e;return s.jsx(o,{name:"example-aria-described-by","aria-describedby":"id-3",id:"id-3",label:"Error",checked:a==="error",onChange:()=>r("error"),error:!0})}},l={render:(t,e)=>{const{value:a,setValue:r}=e;return s.jsxs(T,{direction:"column",gap:"0.5",children:[s.jsx(o,{name:"example-group",id:"id-3-1",label:"Item 1",checked:a==="item-1",onChange:()=>r("item-1")}),s.jsx(o,{name:"example-group",id:"id-3-2",label:"Item 2",checked:a==="item-2",onChange:()=>r("item-2")}),s.jsx(o,{name:"example-group",id:"id-3-3",label:"Item 3",checked:a==="item-3",onChange:()=>r("item-3")})]})}},p="zep-radio-input",H="zep-radio-checked",m={args:{id:"id-4",onChange:()=>{}},render:(t,e)=>{const{checked:a,setChecked:r}=e;return s.jsx(o,{id:t.id,name:t.id,label:"Check an item",checked:a,onChange:()=>r(!a)})},play:async({canvasElement:t})=>{const e=z(t);await G.click(e.getByTestId(p)),await u(e.getByTestId(H)).toBeInTheDocument(),await u(e.getByTestId(p)).toHaveStyle({display:"block"})}};var g,b,h;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  },
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-default" id="id-1" label={args.label} checked={value === 'radio'} onChange={() => setValue('radio')} />;
  }
}`,...(h=(b=d.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,k,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var C,y,I;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-error" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(I=(y=c.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var V,R,S;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-aria-described-by" aria-describedby="id-3" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(S=(R=i.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var j,E,D;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
  }
}`,...(D=(E=l.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var f,w,B;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: ({
    id: 'id-4',
    onChange: () => {}
  } as RadioProps),
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Radio id={args.id} name={args.id} label="Check an item" checked={checked} onChange={() => setChecked(!checked)} />;
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
}`,...(B=(w=m.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const W=["Default","Disabled","Error","AriaDescribedBy","Group","CheckAnItem"];export{i as AriaDescribedBy,m as CheckAnItem,d as Default,n as Disabled,c as Error,l as Group,W as __namedExportsOrder,U as default};
//# sourceMappingURL=Radio.stories-3d912600.js.map
