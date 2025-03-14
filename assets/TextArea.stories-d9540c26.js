import{j as n}from"./clsx-36b9529f.js";import{T as y}from"./TextArea-c52abf8c.js";import{w as m,u as s,e as h}from"./index-dccde6df.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-16e72687.js";import"./tw-merge-1166cefb.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";const B={title:"Components/Textarea",component:y,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}}},decorators:[e=>n.jsx("div",{style:{height:350},children:n.jsx(e,{})})]},a={args:{disabled:!1,label:"Text Area Label",placeholder:"Ihre Nachricht",readOnly:!1,state:"default"}},l="zep-text-area-input",r={args:{label:"Label",required:!0,notRequiredHint:"(optional)"},render:(e,t)=>n.jsx(y,{id:"id-interaction-test",name:"input",type:"text",label:e.label,placeholder:"Placeholder",required:e.required}),play:async({canvasElement:e})=>{const t=m(e);await s.click(t.getByTestId(l)),await s.type(t.getByTestId(l),"Tell me what you want, what you really really want",{delay:20}),await h(t.getByTestId(l)).toHaveValue("Tell me what you want, what you really really want")}};var o,i,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Text Area Label',
    placeholder: 'Ihre Nachricht',
    readOnly: false,
    state: 'default'
  } as TextAreaProps
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    required: true,
    notRequiredHint: '(optional)'
  },
  render: (args, context) => <TextArea id="id-interaction-test" name="input" type="text" label={args.label} placeholder="Placeholder" required={args.required} />,
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
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const j=["Default","FillValue"];export{a as Default,r as FillValue,j as __namedExportsOrder,B as default};
