import{r as _,R as s}from"./index-76fb7be0.js";import{F as H}from"./FormField-3926efe5.js";import{S as y}from"./Spacing-12a83a9e.js";import{C as p}from"./Checkbox-7eb16649.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-1229b3e0.js";import"./Icon-bb12ad48.js";import"./focus-d7245c50.js";const J={title:"Components/FormField",component:H,tags:["autodocs"],argTypes:{state:{control:{disable:!0}},messageId:{control:{disable:!0}},message:{control:{disable:!0}}},decorators:[t=>{const[r,e]=_.useState({state1:!1,state2:!1,state3:!1});return s.createElement(t,{multiChecked:r,setMultiChecked:e})}]},o=({multiChecked:t,setMultiChecked:r,state:e,message:a,messageId:u,error:n=!1,name:g})=>s.createElement("form",null,s.createElement(H,{id:u,message:a,state:e},s.createElement(y,{direction:"column",gap:"0.5"},s.createElement(p,{id:"id-3-1",label:"Item 1",checked:t==null?void 0:t.state1,onChange:()=>r({...t,state1:!t.state1}),error:n,name:g}),s.createElement(p,{id:"id-3-2",label:"Item 2",checked:t==null?void 0:t.state2,onChange:()=>r({...t,state2:!(t!=null&&t.state2)}),name:g}),s.createElement(p,{id:"id-3-3",label:"Item 3",checked:t==null?void 0:t.state3,onChange:()=>r({...t,state3:!(t!=null&&t.state3)}),name:g})))),c={render:(t,r)=>{const{multiChecked:e,setMultiChecked:a}=r;return s.createElement(o,{multiChecked:e,setMultiChecked:a,message:"Hint message",messageId:"1",name:"default"})}},m={render:(t,r)=>{const{multiChecked:e,setMultiChecked:a}=r;return s.createElement(o,{multiChecked:e,setMultiChecked:a,state:"error",error:!0,message:"Error message",messageId:"2",name:"error"})}},d={render:(t,r)=>{const{multiChecked:e,setMultiChecked:a}=r;return s.createElement(o,{multiChecked:e,setMultiChecked:a,state:"info",message:"Info message",messageId:"3",name:"info"})}},l={render:(t,r)=>{const{multiChecked:e,setMultiChecked:a}=r,n=!(e!=null&&e.state1)||!(e!=null&&e.state2)||!(e!=null&&e.state3)?"All required":"";return s.createElement(o,{multiChecked:e,setMultiChecked:a,message:n,messageId:"4",name:"allRequired"})}},i={render:(t,r)=>{const{multiChecked:e,setMultiChecked:a}=r,n=!(e!=null&&e.state1)&&!(e!=null&&e.state2)&&!(e!=null&&e.state3)?"At least one required":"";return s.createElement(o,{multiChecked:e,setMultiChecked:a,message:n,messageId:"4",name:"singleRequired"})}};var E,f,q;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message="Hint message" messageId="1" name="default" />;
  }
}`,...(q=(f=c.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};var x,M,I;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} state="error" error message="Error message" messageId="2" name="error" />;
  }
}`,...(I=(M=m.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var h,C,k;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} state="info" message="Info message" messageId="3" name="info" />;
  }
}`,...(k=(C=d.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var R,S,b;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    const required = !multiChecked?.state1 || !multiChecked?.state2 || !multiChecked?.state3;
    const message = required ? 'All required' : '';
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message={message} messageId="4" name="allRequired" />;
  }
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var A,F,D;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    const required = !multiChecked?.state1 && !multiChecked?.state2 && !multiChecked?.state3;
    const message = required ? 'At least one required' : '';
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message={message} messageId="4" name="singleRequired" />;
  }
}`,...(D=(F=i.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const K=["Default","Error","Info","AllRequired","SingleRequired"];export{l as AllRequired,c as Default,m as Error,d as Info,i as SingleRequired,K as __namedExportsOrder,J as default};
//# sourceMappingURL=FormField.stories-2cd9901f.js.map
