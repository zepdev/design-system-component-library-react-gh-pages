import{j as n}from"./clsx-667af910.js";import{r as u}from"./index-37ba2b57.js";import{C as c}from"./Checkbox-519113b2.js";import{S as m}from"./Spacing-6c783f0a.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-ceed2606.js";import"./focus-d7245c50.js";const H={title:"Components/Checkbox",component:c,tags:["autodocs"],argTypes:{checked:{control:{disable:!0}},error:{description:"Adds the visual reprensentation of the error state."},label:{description:"Sets the label text."}},decorators:[a=>{const[t,e]=u.useState(!1),[r,T]=u.useState({state1:!1,state2:!1,state3:!1});return n.jsx(a,{checked:t,setChecked:e,multiChecked:r,setMultiChecked:T})}],parameters:{docs:{description:{component:"The Checkbox component is best used inside the FormField component, it allows setting hint and error messages."}}}},s={render:(a,t)=>{const{checked:e,setChecked:r}=t;return n.jsx(c,{name:"id-1",id:"id-1",label:"Checkbox",...a,checked:e,onChange:()=>r(!e)})}},d={render:(a,t)=>{const{checked:e,setChecked:r}=t;return n.jsxs(m,{direction:"column",children:[n.jsx(c,{name:"id-2",id:"id-2",label:"Disabled",checked:!1,onChange:()=>r(!e),disabled:!0}),n.jsx(c,{name:"id-2-1",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>r(!e),disabled:!0})]})}},o={render:(a,t)=>n.jsxs(m,{direction:"column",children:[n.jsx(c,{name:"id-3",id:"id-3",label:"Error",checked:!1,onChange:()=>{},error:!0}),n.jsx(c,{name:"id-3-1",id:"id-3-1",label:"Error",checked:!0,onChange:()=>{},error:!0})]})},i={render:(a,t)=>{const{checked:e,setChecked:r}=t;return n.jsx(c,{name:"id-4",id:"id-4",label:"AutoFocus",checked:e,onChange:()=>r(!e),autoFocus:!0})}},h={render:(a,t)=>{const{checked:e,setChecked:r}=t;return n.jsx(c,{"aria-describedby":"id-4",name:"id-4",id:"id-4",label:"AriaDescribedBy",checked:e,onChange:()=>r(!e)})}},l={render:(a,t)=>{const{multiChecked:e,setMultiChecked:r}=t;return n.jsxs(m,{direction:"column",gap:"0.5",children:[n.jsx(c,{id:"id-3-1",name:"id-3-1",label:"Item 1",checked:e==null?void 0:e.state1,onChange:()=>r({...e,state1:!(e!=null&&e.state1)})}),n.jsx(c,{id:"id-3-2",name:"id-3-2",label:"Item 2",checked:e==null?void 0:e.state2,onChange:()=>r({...e,state2:!(e!=null&&e.state2)})}),n.jsx(c,{id:"id-3-3",name:"id-3-3",label:"Item 3",checked:e==null?void 0:e.state3,onChange:()=>r({...e,state3:!(e!=null&&e.state3)})})]})}};var k,b,p;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox name="id-1" id="id-1" label="Checkbox" {...args} checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(p=(b=s.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var C,g,x;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var S,f,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args, context) => {
    return <Spacing direction="column">
        <Checkbox name="id-3" id="id-3" label="Error" checked={false} onChange={() => {}} error />
        <Checkbox name="id-3-1" id="id-3-1" label="Error" checked={true} onChange={() => {}} error />
      </Spacing>;
  }
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var D,A,E;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox name="id-4" id="id-4" label="AutoFocus" checked={checked} onChange={() => setChecked(!checked)} autoFocus />;
  }
}`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var F,y,I;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox aria-describedby="id-4" name="id-4" id="id-4" label="AriaDescribedBy" checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(I=(y=h.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var M,B,G;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(B=l.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const J=["Default","Disabled","Error","AutoFocus","AriaDescribedBy","Group"];export{h as AriaDescribedBy,i as AutoFocus,s as Default,d as Disabled,o as Error,l as Group,J as __namedExportsOrder,H as default};
//# sourceMappingURL=Checkbox.stories-fa24c17d.js.map
