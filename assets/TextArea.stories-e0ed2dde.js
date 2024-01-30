import{j as s}from"./clsx-667af910.js";import{T as y}from"./TextArea-d15ac771.js";import{w as m,u as o,e as h}from"./index-ddcfe27d.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-ffb6d13d.js";import"./tw-merge-1166cefb.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";const j={title:"Components/Textarea",component:y,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}}},decorators:[e=>s.jsx("div",{style:{height:350},children:s.jsx(e,{})})]},a={args:{disabled:!1,label:"Text Area Label",placeholder:"Ihre Nachricht",readOnly:!1,state:"default"}},l="zep-text-area-input",r={args:{label:"Label",required:!0,notRequiredHint:"(optional)"},render:(e,t)=>s.jsx(y,{id:"id-interaction-test",name:"input",type:"text",label:e.label,placeholder:"Placeholder",required:e.required}),play:async({canvasElement:e})=>{const t=m(e);await o.click(t.getByTestId(l)),await o.type(t.getByTestId(l),"Tell me what you want, what you really really want",{delay:20}),await h(t.getByTestId(l)).toHaveValue("Tell me what you want, what you really really want")}};var n,i,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: ({
    disabled: false,
    label: 'Text Area Label',
    placeholder: 'Ihre Nachricht',
    readOnly: false,
    state: 'default'
  } as TextAreaProps)
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
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const A=["Default","FillValue"];export{a as Default,r as FillValue,A as __namedExportsOrder,j as default};
//# sourceMappingURL=TextArea.stories-e0ed2dde.js.map
