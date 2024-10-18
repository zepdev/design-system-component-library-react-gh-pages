import{j as t}from"./clsx-667af910.js";import{r as H}from"./index-37ba2b57.js";import{F as D}from"./Fieldset-cea39a4f.js";import{S as _}from"./Spacing-5c3b1745.js";import{C as p}from"./Checkbox-2bba82a1.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-1d6fc851.js";import"./index-47d55b97.js";import"./focus-d7245c50.js";const K={title:"Components/Fieldset",component:D,tags:["autodocs"],argTypes:{state:{control:{disable:!0}},messageId:{control:{disable:!0}},message:{control:{disable:!0}}},decorators:[s=>{const[r,e]=H.useState({state1:!1,state2:!1,state3:!1});return t.jsx(s,{multiChecked:r,setMultiChecked:e})}]},o=({multiChecked:s,setMultiChecked:r,state:e,message:a,messageId:l,error:n=!1,name:g})=>t.jsx("form",{children:t.jsx(D,{id:l,message:a,state:e,children:t.jsxs(_,{direction:"column",gap:"0.5",children:[t.jsx(p,{id:"id-3-1",label:"Item 1",checked:s==null?void 0:s.state1,onChange:()=>r({...s,state1:!s.state1}),error:n,name:g}),t.jsx(p,{id:"id-3-2",label:"Item 2",checked:s==null?void 0:s.state2,onChange:()=>r({...s,state2:!(s!=null&&s.state2)}),name:g}),t.jsx(p,{id:"id-3-3",label:"Item 3",checked:s==null?void 0:s.state3,onChange:()=>r({...s,state3:!(s!=null&&s.state3)}),name:g})]})})}),c={render:(s,r)=>{const{multiChecked:e,setMultiChecked:a}=r;return t.jsx(o,{multiChecked:e,setMultiChecked:a,message:"Hint message",messageId:"1",name:"default"})}},d={render:(s,r)=>{const{multiChecked:e,setMultiChecked:a}=r;return t.jsx(o,{multiChecked:e,setMultiChecked:a,state:"error",error:!0,message:"Error message",messageId:"2",name:"error"})}},m={render:(s,r)=>{const{multiChecked:e,setMultiChecked:a}=r;return t.jsx(o,{multiChecked:e,setMultiChecked:a,state:"info",message:"Info message",messageId:"3",name:"info"})}},i={render:(s,r)=>{const{multiChecked:e,setMultiChecked:a}=r,n=!(e!=null&&e.state1)||!(e!=null&&e.state2)||!(e!=null&&e.state3)?"All required":"";return t.jsx(o,{multiChecked:e,setMultiChecked:a,message:n,messageId:"4",name:"allRequired"})}},u={render:(s,r)=>{const{multiChecked:e,setMultiChecked:a}=r,n=!(e!=null&&e.state1)&&!(e!=null&&e.state2)&&!(e!=null&&e.state3)?"At least one required":"";return t.jsx(o,{multiChecked:e,setMultiChecked:a,message:n,messageId:"4",name:"singleRequired"})}};var x,f,q;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message="Hint message" messageId="1" name="default" />;
  }
}`,...(q=(f=c.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};var M,I,h;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} state="error" error message="Error message" messageId="2" name="error" />;
  }
}`,...(h=(I=d.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var j,E,C;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} state="info" message="Info message" messageId="3" name="info" />;
  }
}`,...(C=(E=m.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var k,S,R;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    const required = !multiChecked?.state1 || !multiChecked?.state2 || !multiChecked?.state3;
    const message = required ? 'All required' : '';
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message={message} messageId="4" name="allRequired" />;
  }
}`,...(R=(S=i.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var b,A,F;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    const required = !multiChecked?.state1 && !multiChecked?.state2 && !multiChecked?.state3;
    const message = required ? 'At least one required' : '';
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message={message} messageId="4" name="singleRequired" />;
  }
}`,...(F=(A=u.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const L=["Default","Error","Info","AllRequired","SingleRequired"];export{i as AllRequired,c as Default,d as Error,m as Info,u as SingleRequired,L as __namedExportsOrder,K as default};
//# sourceMappingURL=Fieldset.stories-026e5e2a.js.map
