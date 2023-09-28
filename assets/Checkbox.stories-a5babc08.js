import{r as u,R as r}from"./index-76fb7be0.js";import{C as c}from"./Checkbox-b9c6873d.js";import{S as m}from"./Spacing-12a83a9e.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-1229b3e0.js";import"./Icon-8d52bdb7.js";import"./focus-d7245c50.js";const H={title:"Components/Checkbox",component:c,tags:["autodocs"],argTypes:{checked:{control:{disable:!0}}},decorators:[a=>{const[n,e]=u.useState(!1),[t,_]=u.useState({state1:!1,state2:!1,state3:!1});return r.createElement(a,{checked:n,setChecked:e,multiChecked:t,setMultiChecked:_})}]},d={render:(a,n)=>{const{checked:e,setChecked:t}=n;return r.createElement(c,{name:"id-1",id:"id-1",label:"Checkbox",...a,checked:e,onChange:()=>t(!e)})}},s={render:(a,n)=>{const{checked:e,setChecked:t}=n;return r.createElement(m,{direction:"column"},r.createElement(c,{name:"id-2",id:"id-2",label:"Disabled",checked:!1,onChange:()=>t(!e),disabled:!0}),r.createElement(c,{name:"id-2-1",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>t(!e),disabled:!0}))}},o={render:(a,n)=>r.createElement(m,{direction:"column"},r.createElement(c,{name:"id-3",id:"id-3",label:"Error",checked:!1,onChange:()=>{},error:!0}),r.createElement(c,{name:"id-3-1",id:"id-3-1",label:"Error",checked:!0,onChange:()=>{},error:!0}))},i={render:(a,n)=>{const{checked:e,setChecked:t}=n;return r.createElement(c,{name:"id-4",id:"id-4",label:"AutoFocus",checked:e,onChange:()=>t(!e),autoFocus:!0})}},l={render:(a,n)=>{const{checked:e,setChecked:t}=n;return r.createElement(c,{"aria-describedby":"id-4",name:"id-4",id:"id-4",label:"AriaDescribedBy",checked:e,onChange:()=>t(!e)})}},h={render:(a,n)=>{const{multiChecked:e,setMultiChecked:t}=n;return r.createElement(m,{direction:"column",gap:"0.5"},r.createElement(c,{id:"id-3-1",name:"id-3-1",label:"Item 1",checked:e==null?void 0:e.state1,onChange:()=>t({...e,state1:!(e!=null&&e.state1)})}),r.createElement(c,{id:"id-3-2",name:"id-3-2",label:"Item 2",checked:e==null?void 0:e.state2,onChange:()=>t({...e,state2:!(e!=null&&e.state2)})}),r.createElement(c,{id:"id-3-3",name:"id-3-3",label:"Item 3",checked:e==null?void 0:e.state3,onChange:()=>t({...e,state3:!(e!=null&&e.state3)})}))}};var k,C,b;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox name="id-1" id="id-1" label="Checkbox" {...args} checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(b=(C=d.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var g,p,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Spacing direction="column">
        <Checkbox name="id-2" id="id-2" label="Disabled" checked={false} onChange={() => setChecked(!checked)} disabled />
        <Checkbox name="id-2-1" id="id-2-1" label="Disabled" checked={true} onChange={() => setChecked(!checked)} disabled />
      </Spacing>;
  }
}`,...(x=(p=s.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var E,S,f;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args, context) => {
    return <Spacing direction="column">
        <Checkbox name="id-3" id="id-3" label="Error" checked={false} onChange={() => {}} error />
        <Checkbox name="id-3-1" id="id-3-1" label="Error" checked={true} onChange={() => {}} error />
      </Spacing>;
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var D,A,y;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox name="id-4" id="id-4" label="AutoFocus" checked={checked} onChange={() => setChecked(!checked)} autoFocus />;
  }
}`,...(y=(A=i.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var F,I,M;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox aria-describedby="id-4" name="id-4" id="id-4" label="AriaDescribedBy" checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(M=(I=l.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var B,G,R;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Spacing direction="column" gap="0.5">
        <Checkbox id="id-3-1" name="id-3-1" label="Item 1" checked={multiChecked?.state1} onChange={() => setMultiChecked({
        ...multiChecked,
        state1: !multiChecked?.state1
      })} />
        <Checkbox id="id-3-2" name="id-3-2" label="Item 2" checked={multiChecked?.state2} onChange={() => setMultiChecked({
        ...multiChecked,
        state2: !multiChecked?.state2
      })} />
        <Checkbox id="id-3-3" name="id-3-3" label="Item 3" checked={multiChecked?.state3} onChange={() => setMultiChecked({
        ...multiChecked,
        state3: !multiChecked?.state3
      })} />
      </Spacing>;
  }
}`,...(R=(G=h.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};const J=["Default","Disabled","Error","AutoFocus","AriaDescribedBy","Group"];export{l as AriaDescribedBy,i as AutoFocus,d as Default,s as Disabled,o as Error,h as Group,J as __namedExportsOrder,H as default};
//# sourceMappingURL=Checkbox.stories-a5babc08.js.map
