import{r as y,R as t}from"./index-76fb7be0.js";import{R as o}from"./Radio-df2a022c.js";import{S as f}from"./Spacing-12a83a9e.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-1229b3e0.js";import"./focus-d7245c50.js";const T={title:"Components/Radio",component:o,tags:["autodocs"],argTypes:{label:{control:{disable:!0}},checked:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[d=>{const[a,e]=y.useState("");return t.createElement(d,{value:a,setValue:e})}]},l={render:(d,a)=>{const{value:e,setValue:r}=a;return t.createElement(o,{name:"example-default",id:"id-1",label:"Radio",checked:e==="radio",onChange:()=>r("radio")})}},s={render:(d,a)=>{const{value:e,setValue:r}=a;return t.createElement(f,{direction:"column"},t.createElement(o,{name:"example-disabled",id:"id-2",label:"Disabled",checked:e==="disabled",onChange:()=>r("disabled"),disabled:!0}),t.createElement(o,{name:"example-disabled",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>r("disabled"),disabled:!0}))}},n={render:(d,a)=>{const{value:e,setValue:r}=a;return t.createElement(o,{name:"example-error",id:"id-3",label:"Error",checked:e==="error",onChange:()=>r("error"),error:!0})}},c={render:(d,a)=>{const{value:e,setValue:r}=a;return t.createElement(o,{name:"example-aria-described-by","aria-describedby":"id-3",id:"id-3",label:"Error",checked:e==="error",onChange:()=>r("error"),error:!0})}},i={render:(d,a)=>{const{value:e,setValue:r}=a;return t.createElement(f,{direction:"column",gap:"0.5"},t.createElement(o,{name:"example-group",id:"id-3-1",label:"Item 1",checked:e==="item-1",onChange:()=>r("item-1")}),t.createElement(o,{name:"example-group",id:"id-3-2",label:"Item 2",checked:e==="item-2",onChange:()=>r("item-2")}),t.createElement(o,{name:"example-group",id:"id-3-3",label:"Item 3",checked:e==="item-3",onChange:()=>r("item-3")}))}};var m,u,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-default" id="id-1" label="Radio" checked={value === 'radio'} onChange={() => setValue('radio')} />;
  }
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,g,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,E,V;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-error" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(V=(E=n.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var v,k,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-aria-described-by" aria-describedby="id-3" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var R,S,D;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(S=i.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const j=["Default","Disabled","Error","AriaDescribedBy","Group"];export{c as AriaDescribedBy,l as Default,s as Disabled,n as Error,i as Group,j as __namedExportsOrder,T as default};
//# sourceMappingURL=Radio.stories-60d54f14.js.map
