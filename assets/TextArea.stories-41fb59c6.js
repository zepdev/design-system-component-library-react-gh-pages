import{j as s}from"./clsx-667af910.js";import{T as y}from"./TextArea-9edd6925.js";import{w,u as o,e as x}from"./index-6ac9fa72.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-ad687a94.js";import"./tw-merge-1166cefb.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";const D={title:"Components/TextArea",component:y,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}}},decorators:[e=>s.jsx("div",{style:{height:350},children:s.jsx(e,{})})]},t={args:{disabled:!1,label:"Text Area Label",placeholder:"Ihre Nachricht",readOnly:!1,state:"default"}},l="zep-text-area-input",r={args:{label:"Label",required:!0,notRequiredHint:"(optional)"},render:(e,a)=>{const{message:g,setMessage:n}=a;return s.jsx(y,{id:"id-interaction-test",name:"input",type:"text",label:e.label,placeholder:"Placeholder",required:e.required,message:g,onInvalid:h=>{h.preventDefault(),n("Please enter a value")},onChange:()=>n(!1)})},play:async({canvasElement:e})=>{const a=w(e);await o.click(a.getByTestId(l)),await o.type(a.getByTestId(l),"Tell me what you want, what you really really want",{delay:20}),await x(a.getByTestId(l)).toHaveValue("Tell me what you want, what you really really want")}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: ({
    disabled: false,
    label: 'Text Area Label',
    placeholder: 'Ihre Nachricht',
    readOnly: false,
    state: 'default'
  } as TextAreaProps)
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    required: true,
    notRequiredHint: '(optional)'
  },
  render: (args, context) => {
    const {
      message,
      setMessage
    } = context;
    return <TextArea id="id-interaction-test" name="input" type="text" label={args.label} placeholder="Placeholder" required={args.required} message={message} onInvalid={e => {
      e.preventDefault();
      setMessage('Please enter a value');
    }} onChange={() => setMessage(false)} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId(testItem));
    await userEvent.type(canvas.getByTestId(testItem), 'Tell me what you want, what you really really want', {
      delay: 20
    });
    await expect(canvas.getByTestId(testItem)).toHaveValue('Tell me what you want, what you really really want');
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const H=["Default","FillValue"];export{t as Default,r as FillValue,H as __namedExportsOrder,D as default};
//# sourceMappingURL=TextArea.stories-41fb59c6.js.map
