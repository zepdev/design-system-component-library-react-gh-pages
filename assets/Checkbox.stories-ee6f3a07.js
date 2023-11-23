import{j as a}from"./clsx-667af910.js";import{r as u}from"./index-37ba2b57.js";import{C as c}from"./Checkbox-74b09b14.js";import{w as O,u as P,e as R}from"./index-6ac9fa72.js";import{S as k}from"./Spacing-ccf11184.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-ad687a94.js";import"./focus-d7245c50.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";const $={title:"Components/Checkbox",component:c,tags:["autodocs"],argTypes:{checked:{control:{disable:!0}},error:{description:"Adds the visual reprensentation of the error state."},label:{description:"Sets the label text."}},decorators:[r=>{const[t,e]=u.useState(!1),[n,_]=u.useState({state1:!1,state2:!1,state3:!1});return a.jsx(r,{checked:t,setChecked:e,multiChecked:n,setMultiChecked:_})}],parameters:{docs:{description:{component:"The Checkbox component is best used inside the Fieldset component, it allows setting hint and error messages."}}}},s={render:(r,t)=>{const{checked:e,setChecked:n}=t;return a.jsx(c,{name:"id-1",id:"id-1",label:"Checkbox",...r,checked:e,onChange:()=>n(!e)})}},d={render:(r,t)=>{const{checked:e,setChecked:n}=t;return a.jsxs(k,{direction:"column",children:[a.jsx(c,{name:"id-2",id:"id-2",label:"Disabled",checked:!1,onChange:()=>n(!e),disabled:!0}),a.jsx(c,{name:"id-2-1",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>n(!e),disabled:!0})]})}},o={render:(r,t)=>a.jsxs(k,{direction:"column",children:[a.jsx(c,{name:"id-3",id:"id-3",label:"Error",checked:!1,onChange:()=>{},error:!0}),a.jsx(c,{name:"id-3-1",id:"id-3-1",label:"Error",checked:!0,onChange:()=>{},error:!0})]})},i={render:(r,t)=>{const{checked:e,setChecked:n}=t;return a.jsx(c,{name:"id-4",id:"id-4",label:"AutoFocus",checked:e,onChange:()=>n(!e),autoFocus:!0})}},h={render:(r,t)=>{const{checked:e,setChecked:n}=t;return a.jsx(c,{"aria-describedby":"id-4",name:"id-4",id:"id-4",label:"AriaDescribedBy",checked:e,onChange:()=>n(!e)})}},l={render:(r,t)=>{const{multiChecked:e,setMultiChecked:n}=t;return a.jsxs(k,{direction:"column",gap:"0.5",children:[a.jsx(c,{id:"id-3-1",name:"id-3-1",label:"Item 1",checked:e==null?void 0:e.state1,onChange:()=>n({...e,state1:!(e!=null&&e.state1)})}),a.jsx(c,{id:"id-3-2",name:"id-3-2",label:"Item 2",checked:e==null?void 0:e.state2,onChange:()=>n({...e,state2:!(e!=null&&e.state2)})}),a.jsx(c,{id:"id-3-3",name:"id-3-3",label:"Item 3",checked:e==null?void 0:e.state3,onChange:()=>n({...e,state3:!(e!=null&&e.state3)})})]})}},p="zep-checkbox-input",m={args:{id:"id-4",onChange:()=>{}},render:(r,t)=>{const{checked:e,setChecked:n}=t;return a.jsx(c,{id:r.id,name:r.id,label:"Check an item",checked:e,onChange:()=>n(!e)})},play:async({canvasElement:r})=>{const t=O(r);await P.click(t.getByTestId(p)),await R(t.getByTestId(p)).toHaveClass("checked:zep-bg-neutral-dark-default")}};var C,g,b;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox name="id-1" id="id-1" label="Checkbox" {...args} checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,f,S;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(f=d.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var j,y,I;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (args, context) => {
    return <Spacing direction="column">
        <Checkbox name="id-3" id="id-3" label="Error" checked={false} onChange={() => {}} error />
        <Checkbox name="id-3-1" id="id-3-1" label="Error" checked={true} onChange={() => {}} error />
      </Spacing>;
  }
}`,...(I=(y=o.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var E,D,v;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox name="id-4" id="id-4" label="AutoFocus" checked={checked} onChange={() => setChecked(!checked)} autoFocus />;
  }
}`,...(v=(D=i.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var A,w,B;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox aria-describedby="id-4" name="id-4" id="id-4" label="AriaDescribedBy" checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(B=(w=h.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var F,M,T;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(T=(M=l.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var z,G,H;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: ({
    id: 'id-4',
    onChange: () => {}
  } as CheckboxProps),
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox id={args.id} name={args.id} label="Check an item" checked={checked} onChange={() => setChecked(!checked)} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId(testItem));
    await expect(canvas.getByTestId(testItem)).toHaveClass('checked:zep-bg-neutral-dark-default');
  }
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const ee=["Default","Disabled","Error","AutoFocus","AriaDescribedBy","Group","CheckAnItem"];export{h as AriaDescribedBy,i as AutoFocus,m as CheckAnItem,s as Default,d as Disabled,o as Error,l as Group,ee as __namedExportsOrder,$ as default};
//# sourceMappingURL=Checkbox.stories-ee6f3a07.js.map
