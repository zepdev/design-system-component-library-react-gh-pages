import{j as o}from"./clsx-667af910.js";import{r as E}from"./index-37ba2b57.js";import{R as s}from"./Radio-a1557b8e.js";import{S as f}from"./Spacing-6c783f0a.js";import"./_commonjsHelpers-de833af9.js";import"./focus-d7245c50.js";const L={title:"Components/Radio",component:s,tags:["autodocs"],argTypes:{label:{control:"text"},checked:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[t=>{const[a,e]=E.useState("");return o.jsx(t,{value:a,setValue:e})}],parameters:{docs:{description:{component:"The Radio component is best used inside the FormField component, it allows setting hint and error messages."}}}},d={args:{label:"Label"},render:(t,a)=>{const{value:e,setValue:r}=a;return o.jsx(s,{name:"example-default",id:"id-1",label:t.label,checked:e==="radio",onChange:()=>r("radio")})}},l={render:(t,a)=>{const{value:e,setValue:r}=a;return o.jsxs(f,{direction:"column",children:[o.jsx(s,{name:"example-disabled",id:"id-2",label:"Disabled",checked:e==="disabled",onChange:()=>r("disabled"),disabled:!0}),o.jsx(s,{name:"example-disabled",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>r("disabled"),disabled:!0})]})}},i={render:(t,a)=>{const{value:e,setValue:r}=a;return o.jsx(s,{name:"example-error",id:"id-3",label:"Error",checked:e==="error",onChange:()=>r("error"),error:!0})}},n={render:(t,a)=>{const{value:e,setValue:r}=a;return o.jsx(s,{name:"example-aria-described-by","aria-describedby":"id-3",id:"id-3",label:"Error",checked:e==="error",onChange:()=>r("error"),error:!0})}},c={render:(t,a)=>{const{value:e,setValue:r}=a;return o.jsxs(f,{direction:"column",gap:"0.5",children:[o.jsx(s,{name:"example-group",id:"id-3-1",label:"Item 1",checked:e==="item-1",onChange:()=>r("item-1")}),o.jsx(s,{name:"example-group",id:"id-3-2",label:"Item 2",checked:e==="item-2",onChange:()=>r("item-2")}),o.jsx(s,{name:"example-group",id:"id-3-3",label:"Item 3",checked:e==="item-3",onChange:()=>r("item-3")})]})}};var m,u,p;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(u=d.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,g,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,V,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-error" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(v=(V=i.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var k,C,j;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-aria-described-by" aria-describedby="id-3" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(j=(C=n.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var R,S,D;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(S=c.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const T=["Default","Disabled","Error","AriaDescribedBy","Group"];export{n as AriaDescribedBy,d as Default,l as Disabled,i as Error,c as Group,T as __namedExportsOrder,L as default};
//# sourceMappingURL=Radio.stories-d934b80f.js.map
