import{j as a}from"./clsx-36b9529f.js";import{r as b}from"./index-8b3efc3f.js";import{C as s}from"./Checkbox-cedd5105.js";import{w as P,e as r,u as o}from"./index-dccde6df.js";import{S as p}from"./Spacing-3ed1191f.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-10ac20a4.js";import"./focus-d7245c50.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";import"./index-24fb42db.js";const $={title:"Components/Checkbox",component:s,tags:["autodocs"],argTypes:{checked:{control:{disable:!0}},error:{description:"Adds the visual reprensentation of the error state."},label:{description:"Sets the label text."}},decorators:[c=>{const[n,e]=b.useState(!1),[t,R]=b.useState({state1:!1,state2:!1,state3:!1});return a.jsx(c,{checked:n,setChecked:e,multiChecked:t,setMultiChecked:R})}],parameters:{docs:{description:{component:"The Checkbox component is best used inside the Fieldset component, it allows setting hint and error messages."}}}},d={render:(c,n)=>{const{checked:e,setChecked:t}=n;return a.jsx(s,{name:"id-1",id:"id-1",label:"Checkbox",...c,checked:e,onChange:()=>t(!e)})},play:async({canvasElement:c,step:n})=>{const t=P(c).getByTestId("zep-checkbox-input");await n("Initial checks",async()=>{await r(t).toBeInTheDocument(),await r(t).not.toBeChecked()}),await n("Check checkbox focus",async()=>{await o.tab(),await r(t).toHaveFocus()}),await n("Fire check event with mouse and verify checked status",async()=>{await r(t).not.toBeChecked(),await o.click(t),await r(t).toBeChecked(),await o.click(t),await r(t).not.toBeChecked()}),await n("Blur checkbox with keyboard and check focus",async()=>{await o.tab(),await r(t).not.toHaveFocus()})}},i={render:(c,n)=>{const{checked:e,setChecked:t}=n;return a.jsxs(p,{direction:"column",children:[a.jsx(s,{name:"id-2",id:"id-2",label:"Disabled",checked:!1,onChange:()=>t(!e),disabled:!0}),a.jsx(s,{name:"id-2-1",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>t(!e),disabled:!0})]})}},h={render:(c,n)=>a.jsxs(p,{direction:"column",children:[a.jsx(s,{name:"id-3",id:"id-3",label:"Error",checked:!1,onChange:()=>{},error:!0}),a.jsx(s,{name:"id-3-1",id:"id-3-1",label:"Error",checked:!0,onChange:()=>{},error:!0})]})},k={render:(c,n)=>{const{checked:e,setChecked:t}=n;return a.jsx(s,{name:"id-4",id:"id-4",label:"AutoFocus",checked:e,onChange:()=>t(!e),autoFocus:!0})}},l={render:(c,n)=>{const{checked:e,setChecked:t}=n;return a.jsx(s,{"aria-describedby":"id-4",name:"id-4",id:"id-4",label:"AriaDescribedBy",checked:e,onChange:()=>t(!e)})}},u={render:(c,n)=>{const{multiChecked:e,setMultiChecked:t}=n;return a.jsxs(p,{direction:"column",gap:"0.5",children:[a.jsx(s,{id:"id-3-1",name:"id-3-1",label:"Item 1",checked:e==null?void 0:e.state1,onChange:()=>t({...e,state1:!(e!=null&&e.state1)})}),a.jsx(s,{id:"id-3-2",name:"id-3-2",label:"Item 2",checked:e==null?void 0:e.state2,onChange:()=>t({...e,state2:!(e!=null&&e.state2)})}),a.jsx(s,{id:"id-3-3",name:"id-3-3",label:"Item 3",checked:e==null?void 0:e.state3,onChange:()=>t({...e,state3:!(e!=null&&e.state3)})})]})}},C="zep-checkbox-input",m={args:{id:"id-4",onChange:()=>{}},render:(c,n)=>{const{checked:e,setChecked:t}=n;return a.jsx(s,{id:c.id,name:c.id,label:"Check an item",checked:e,onChange:()=>t(!e)})},play:async({canvasElement:c})=>{const n=P(c);await o.click(n.getByTestId(C)),await r(n.getByTestId(C)).toHaveClass("checked:zep-bg-primary-default")}};var x,g,w;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox name="id-1" id="id-1" label="Checkbox" {...args} checked={checked} onChange={() => setChecked(!checked)} />;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const checkboxInput = canvas.getByTestId('zep-checkbox-input');
    await step('Initial checks', async () => {
      await expect(checkboxInput).toBeInTheDocument();
      await expect(checkboxInput).not.toBeChecked();
    });
    await step('Check checkbox focus', async () => {
      await userEvent.tab();
      await expect(checkboxInput).toHaveFocus();
    });
    await step('Fire check event with mouse and verify checked status', async () => {
      await expect(checkboxInput).not.toBeChecked();
      await userEvent.click(checkboxInput);
      await expect(checkboxInput).toBeChecked();
      await userEvent.click(checkboxInput);
      await expect(checkboxInput).not.toBeChecked();
    });
    await step('Blur checkbox with keyboard and check focus', async () => {
      await userEvent.tab();
      await expect(checkboxInput).not.toHaveFocus();
    });
  }
}`,...(w=(g=d.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var y,I,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(I=i.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var f,B,E;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args, context) => {
    return <Spacing direction="column">
        <Checkbox name="id-3" id="id-3" label="Error" checked={false} onChange={() => {}} error />
        <Checkbox name="id-3-1" id="id-3-1" label="Error" checked={true} onChange={() => {}} error />
      </Spacing>;
  }
}`,...(E=(B=h.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var S,j,D;k.parameters={...k.parameters,docs:{...(S=k.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox name="id-4" id="id-4" label="AutoFocus" checked={checked} onChange={() => setChecked(!checked)} autoFocus />;
  }
}`,...(D=(j=k.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var F,A,T;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox aria-describedby="id-4" name="id-4" id="id-4" label="AriaDescribedBy" checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(T=(A=l.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var H,M,z;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(z=(M=u.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var G,_,O;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    id: 'id-4',
    onChange: () => {}
  } as CheckboxProps,
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
    await expect(canvas.getByTestId(testItem)).toHaveClass('checked:zep-bg-primary-default');
  }
}`,...(O=(_=m.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const ee=["Default","Disabled","Error","AutoFocus","AriaDescribedBy","Group","CheckAnItem"];export{l as AriaDescribedBy,k as AutoFocus,m as CheckAnItem,d as Default,i as Disabled,h as Error,u as Group,ee as __namedExportsOrder,$ as default};
