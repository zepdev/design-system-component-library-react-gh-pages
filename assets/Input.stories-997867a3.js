import{j as a}from"./clsx-36b9529f.js";import{w as _e,e as s,u as i}from"./index-dccde6df.js";import{r as b}from"./index-8b3efc3f.js";import{I as r}from"./Input-0cea49e7.js";import{S as d}from"./Spacing-3ed1191f.js";import{B as c}from"./Button-22761def.js";import{F as Ge}from"./Fieldset-48b72bdb.js";import"./_commonjsHelpers-de833af9.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";import"./focus-d7245c50.js";import"./Icon-2a6dae81.js";import"./index-24fb42db.js";import"./tw-merge-1166cefb.js";const ia={title:"Components/Input",component:r,tags:["autodocs"],decorators:[e=>a.jsx("div",{className:"zep-w-[326px] [&>*]:zep-w-full",children:a.jsx(e,{})})],argTypes:{label:{control:{type:"text"}},type:{control:{type:"select",options:["text","search","number","date","password"]}},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}},notRequiredHint:{control:{type:"text"}},readOnly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},hasInfoIcon:{control:{type:"boolean"}},placeholder:{control:{type:"text"}}}},p={args:{id:"id-default",placeholder:"Placeholder",name:"input",type:"text",label:"Label",disabled:!1,required:!1,notRequiredHint:"(optional)",readOnly:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,n)=>a.jsx(r,{placeholder:e.placeholder,...e}),play:async({canvasElement:e,step:n})=>{const t=_e(e).getByTestId("zep-input-field");await n("Initial checks",async()=>{await s(t).toBeInTheDocument(),await s(t).not.toHaveFocus()}),await n("Check inputField focus via Keyboard",async()=>{await i.tab(),await s(t).toHaveFocus()}),await n("Fill inputField with keyboard and check value",async()=>{await i.type(t,"Test value"),await s(t).toHaveValue("Test value")}),await n("Clear inputField with keyboard and check value",async()=>{await i.clear(t),await i.type(t,"New test value"),await s(t).toHaveValue("New test value")}),await n("Click inputField and check focus",async()=>{await i.click(t),await s(t).toHaveFocus()}),await n("Blur inputField with keyboard and check focus",async()=>{await i.tab(),await s(t).not.toHaveFocus()})}},y={decorators:[e=>{const[n,o]=b.useState("Prefilled");return a.jsx(e,{value:n,setValue:o})}],args:{id:"id-search",name:"input",type:"search",disabled:!1,label:"Label",placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)"},render:(e,n)=>{const{value:o,setValue:t}=n;return a.jsx(r,{autoFocus:!0,placeholder:e.placeholder,...e,value:o,onChange:l=>{t(l.target.value)}})}},v={args:{id:"id-number",name:"input",type:"number",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},x={args:{id:"id-date",name:"input",type:"date",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},q={decorators:[e=>{const[n,o]=b.useState("TopSecret"),[t,l]=b.useState("hide");return a.jsx(e,{value:n,setValue:o,icon:t,setIcon:l})}],args:{id:"id-password",label:"Label",name:"input",disabled:!1,required:!1,notRequiredHint:"(optional)"},render:(e,n)=>{const{value:o,setValue:t,icon:l,setIcon:u}=n;return a.jsx(r,{type:l==="hide"?"password":"text",icon:l,placeholder:e.placeholder,...e,value:o,onIconToggle:()=>{u(l==="hide"?"show":"hide")},onChange:f=>{t(f.target.value)}})}},S={args:{id:"id-disabled",name:"text",type:"number",label:"Label",disabled:!0,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},m={args:{id:"id-hint-message",placeholder:"Placeholder",name:"input",type:"text",label:"Label",disabled:!1,required:!1,notRequiredHint:"(optional)",readOnly:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,n)=>a.jsx(r,{message:"Hint message",placeholder:e.placeholder,...e})},g={args:{id:"id-info-message",placeholder:"Placeholder",name:"input",type:"text",label:"Label",disabled:!1,required:!1,notRequiredHint:"(optional)",readOnly:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,n)=>a.jsx(r,{message:"Info message",state:"info",placeholder:e.placeholder,...e})},h={args:{id:"id-error-message",name:"input",type:"text",label:"Label",disabled:!1,error:!0,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}},render:(e,n)=>a.jsx(r,{message:"Some error message",state:"error",placeholder:e.placeholder,...e})},I={args:{id:"id-readonly",name:"input",type:"text",label:"Label",value:"Filled",readOnly:!0,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{}}},w={args:{id:"id-more-info",name:"input",type:"text",label:"Label",placeholder:"Placeholder",hasInfoIcon:!0,infoTitle:"More information",required:!1,notRequiredHint:"(optional)",onIconInfoClick:()=>{alert("Info icon clicked")}}},H={args:{id:"id-autocomplete",name:"name",type:"text",label:"Name",placeholder:"Enter your name",disabled:!1,error:!1,autoComplete:"name",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}},render:(e,n)=>a.jsx(r,{message:"Click this field. A dropdown menu should appear with the names already entered",placeholder:e.placeholder,...e})},C={args:{id:"id-required-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onInvalid:()=>console.log("Invalid"),onChange:e=>{console.log(e.target.value)}},render:(e,n)=>a.jsx("form",{children:a.jsxs(d,{direction:"column",gap:"1",children:[a.jsx(r,{message:"Should validate empty field once button is clicked",placeholder:e.placeholder,...e}),a.jsx(c,{type:"submit",children:"Submit"})]})})},F={args:{id:"id-custom-validation-message",name:"input",type:"text",label:"Label",notRequiredHint:"(optional)",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onInvalid:e=>e.target.setCustomValidity("My validation message"),onChange:e=>{console.log(e.target.value)}},render:(e,n)=>a.jsx("form",{children:a.jsxs(d,{direction:"column",gap:"1",children:[a.jsx(r,{message:"Should validate empty field once button is clicked",placeholder:e.placeholder,...e}),a.jsx(c,{type:"submit",children:"Submit"})]})})},R={args:{id:"id-email-validation",name:"input",type:"email",label:"Email",placeholder:"Placeholder",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,n)=>a.jsx("form",{children:a.jsxs(d,{direction:"column",gap:"1",children:[a.jsx(r,{message:"Should validate email once button is clicked",placeholder:e.placeholder,...e}),a.jsx(c,{type:"submit",children:"Submit"})]})})},j={args:{id:"id-pattern-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",pattern:"[a-z]{4,20}",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,n)=>a.jsx("form",{children:a.jsxs(d,{direction:"column",gap:"1",children:[a.jsx(Ge,{message:"Only lowercase. Enter at least 4 chars and max 20.",children:a.jsx(r,{placeholder:e.placeholder,...e})}),a.jsx(c,{type:"submit",children:"Submit"})]})})},L={args:{id:"id-min-max-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",minLength:"8",maxLength:"12",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,n)=>a.jsx("form",{children:a.jsxs(d,{direction:"column",gap:"1",children:[a.jsx(r,{message:"Enter at least 8 chars. You cannot enter more than 12.",placeholder:e.placeholder,...e}),a.jsx(c,{type:"submit",children:"Submit"})]})})},k={decorators:[e=>{const[n,o]=b.useState("Should validate empty field once button is clicked"),[t,l]=b.useState("default");return a.jsx("form",{children:a.jsxs(d,{direction:"column",gap:"1",children:[a.jsx(e,{message:n,setMessage:o,state:t,setState:l}),a.jsx(c,{type:"submit",children:"Submit"})]})})}],args:{id:"id-aria-describedby",placeholder:"Placeholder",label:"Label",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,type:"text",name:"input"},render:(e,n)=>{const{message:o,setMessage:t}=n,{state:l,setState:u}=n;return a.jsx(Ge,{message:o,messageId:"message-element-id",messageAriaLive:"assertive",state:l,children:a.jsx(r,{"aria-describedby":"message-element-id",placeholder:e.placeholder,...e,onInvalid:f=>{f.preventDefault(),t(f.target.validationMessage),u("error")},onChange:()=>{l==="error"&&(t("Should validate empty field once submit is clicked and field is empty."),u("default"))}})})}},V="zep-input-field",P={args:{label:"Label",required:!0,notRequiredHint:"(optional)"},render:(e,n)=>a.jsx(r,{id:"id-interaction-test",name:"input",type:"text",label:e.label,placeholder:"Placeholder",required:e.required,notRequiredHint:e.notRequiredHint,onChange:()=>{}}),play:async({canvasElement:e})=>{const n=_e(e);await i.click(n.getByTestId(V)),await i.type(n.getByTestId(V),"example-value",{delay:20}),await s(n.getByTestId(V)).toHaveValue("example-value")}};var E,M,B,T,D;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'id-default',
    placeholder: 'Placeholder',
    name: 'input',
    type: 'text',
    label: 'Label',
    disabled: false,
    required: false,
    notRequiredHint: '(optional)',
    readOnly: false,
    error: false,
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <Input placeholder={args.placeholder} {...args} />;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const inputField = canvas.getByTestId('zep-input-field');
    await step('Initial checks', async () => {
      await expect(inputField).toBeInTheDocument();
      await expect(inputField).not.toHaveFocus();
    });
    await step('Check inputField focus via Keyboard', async () => {
      await userEvent.tab();
      await expect(inputField).toHaveFocus();
    });
    await step('Fill inputField with keyboard and check value', async () => {
      await userEvent.type(inputField, 'Test value');
      await expect(inputField).toHaveValue('Test value');
    });
    await step('Clear inputField with keyboard and check value', async () => {
      await userEvent.clear(inputField);
      await userEvent.type(inputField, 'New test value');
      await expect(inputField).toHaveValue('New test value');
    });
    await step('Click inputField and check focus', async () => {
      await userEvent.click(inputField);
      await expect(inputField).toHaveFocus();
    });
    await step('Blur inputField with keyboard and check focus', async () => {
      await userEvent.tab();
      await expect(inputField).not.toHaveFocus();
    });
  }
}`,...(B=(M=p.parameters)==null?void 0:M.docs)==null?void 0:B.source},description:{story:"The Input component is best used inside a Fieldset component, it allows setting hint and error messages.",...(D=(T=p.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var O,N,A;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  decorators: [Story => {
    const [value, setValue] = useState('Prefilled');
    return <Story value={value} setValue={setValue} />;
  }],
  args: {
    id: 'id-search',
    name: 'input',
    type: 'search',
    disabled: false,
    label: 'Label',
    placeholder: 'Placeholder',
    required: false,
    notRequiredHint: '(optional)'
  },
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Input autoFocus placeholder={args.placeholder} {...args} value={value} onChange={e => {
      setValue(e.target.value);
    }} />;
  }
}`,...(A=(N=y.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var z,K,Y;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: 'id-number',
    name: 'input',
    type: 'number',
    label: 'Label',
    disabled: false,
    error: false,
    placeholder: 'Placeholder',
    required: false,
    notRequiredHint: '(optional)',
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(Y=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var _,G,J;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: 'id-date',
    name: 'input',
    type: 'date',
    label: 'Label',
    disabled: false,
    error: false,
    placeholder: 'Placeholder',
    required: false,
    notRequiredHint: '(optional)',
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,W;q.parameters={...q.parameters,docs:{...(Q=q.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  decorators: [Story => {
    const [value, setValue] = useState('TopSecret');
    const [icon, setIcon] = useState('hide');
    return <Story value={value} setValue={setValue} icon={icon} setIcon={setIcon} />;
  }],
  args: {
    id: 'id-password',
    label: 'Label',
    name: 'input',
    disabled: false,
    required: false,
    notRequiredHint: '(optional)'
  },
  render: (args, context) => {
    const {
      value,
      setValue,
      icon,
      setIcon
    } = context;
    return <Input type={icon === 'hide' ? 'password' : 'text'} icon={icon} placeholder={args.placeholder} {...args} value={value} onIconToggle={() => {
      if (icon === 'hide') {
        setIcon('show');
      } else {
        setIcon('hide');
      }
    }} onChange={e => {
      setValue(e.target.value);
    }} />;
  }
}`,...(W=(U=q.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Z,$;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    id: 'id-disabled',
    name: 'text',
    type: 'number',
    label: 'Label',
    disabled: true,
    error: false,
    placeholder: 'Placeholder',
    required: false,
    notRequiredHint: '(optional)',
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...($=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,ne,te,re;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    id: 'id-hint-message',
    placeholder: 'Placeholder',
    name: 'input',
    type: 'text',
    label: 'Label',
    disabled: false,
    required: false,
    notRequiredHint: '(optional)',
    readOnly: false,
    error: false,
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <Input message="Hint message" placeholder={args.placeholder} {...args} />;
  }
}`,...(ne=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:ne.source},description:{story:"Here the Input component is used inside a FormField component to enable the use of a hint.",...(re=(te=m.parameters)==null?void 0:te.docs)==null?void 0:re.description}}};var oe,le,se,ie,de;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    id: 'id-info-message',
    placeholder: 'Placeholder',
    name: 'input',
    type: 'text',
    label: 'Label',
    disabled: false,
    required: false,
    notRequiredHint: '(optional)',
    readOnly: false,
    error: false,
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <Input message="Info message" state="info" placeholder={args.placeholder} {...args} />;
  }
}`,...(se=(le=g.parameters)==null?void 0:le.docs)==null?void 0:se.source},description:{story:"Here the Input component is used inside a FormField component to enable the use of an info message.",...(de=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:de.description}}};var ce,ue,pe,me,ge;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    id: 'id-error-message',
    name: 'input',
    type: 'text',
    label: 'Label',
    disabled: false,
    error: true,
    placeholder: 'Placeholder',
    required: false,
    notRequiredHint: '(optional)',
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <Input message="Some error message" state="error" placeholder={args.placeholder} {...args} />;
  }
}`,...(pe=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:pe.source},description:{story:"Here the Input component is used inside a FormField component to enable the use of an error message.",...(ge=(me=h.parameters)==null?void 0:me.docs)==null?void 0:ge.description}}};var he,be,fe;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    id: 'id-readonly',
    name: 'input',
    type: 'text',
    label: 'Label',
    value: 'Filled',
    readOnly: true,
    placeholder: 'Placeholder',
    required: false,
    notRequiredHint: '(optional)',
    onChange: e => {}
  }
}`,...(fe=(be=I.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ye,ve,xe;w.parameters={...w.parameters,docs:{...(ye=w.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    id: 'id-more-info',
    name: 'input',
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
    hasInfoIcon: true,
    infoTitle: 'More information',
    required: false,
    notRequiredHint: '(optional)',
    onIconInfoClick: () => {
      alert('Info icon clicked');
    }
  }
}`,...(xe=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var qe,Se,Ie;H.parameters={...H.parameters,docs:{...(qe=H.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    id: 'id-autocomplete',
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'Enter your name',
    disabled: false,
    error: false,
    autoComplete: 'name',
    required: false,
    notRequiredHint: '(optional)',
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <Input message="Click this field. A dropdown menu should appear with the names already entered" placeholder={args.placeholder} {...args} />;
  }
}`,...(Ie=(Se=H.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var we,He,Ce;C.parameters={...C.parameters,docs:{...(we=C.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    id: 'id-required-validation',
    name: 'input',
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    notRequiredHint: '(optional)',
    disabled: false,
    error: false,
    onInvalid: () => console.log('Invalid'),
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <form>
        <Spacing direction="column" gap="1">
          <Input message="Should validate empty field once button is clicked" placeholder={args.placeholder} {...args} />
          <Button type="submit">Submit</Button>
        </Spacing>
      </form>;
  }
}`,...(Ce=(He=C.parameters)==null?void 0:He.docs)==null?void 0:Ce.source}}};var Fe,Re,je;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    id: 'id-custom-validation-message',
    name: 'input',
    type: 'text',
    label: 'Label',
    notRequiredHint: '(optional)',
    placeholder: 'Placeholder',
    required: true,
    disabled: false,
    error: false,
    onInvalid: e => e.target.setCustomValidity('My validation message'),
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <form>
        <Spacing direction="column" gap="1">
          <Input message="Should validate empty field once button is clicked" placeholder={args.placeholder} {...args} />
          <Button type="submit">Submit</Button>
        </Spacing>
      </form>;
  }
}`,...(je=(Re=F.parameters)==null?void 0:Re.docs)==null?void 0:je.source}}};var Le,ke,Pe;R.parameters={...R.parameters,docs:{...(Le=R.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    id: 'id-email-validation',
    name: 'input',
    type: 'email',
    label: 'Email',
    placeholder: 'Placeholder',
    required: true,
    notRequiredHint: '(optional)',
    disabled: false,
    error: false,
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <form>
        <Spacing direction="column" gap="1">
          <Input message="Should validate email once button is clicked" placeholder={args.placeholder} {...args} />
          <Button type="submit">Submit</Button>
        </Spacing>
      </form>;
  }
}`,...(Pe=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};var Ve,Ee,Me;j.parameters={...j.parameters,docs:{...(Ve=j.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    id: 'id-pattern-validation',
    name: 'input',
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
    pattern: '[a-z]{4,20}',
    required: true,
    notRequiredHint: '(optional)',
    disabled: false,
    error: false,
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <form>
        <Spacing direction="column" gap="1">
          <Fieldset message="Only lowercase. Enter at least 4 chars and max 20.">
            <Input placeholder={args.placeholder} {...args} />
          </Fieldset>
          <Button type="submit">Submit</Button>
        </Spacing>
      </form>;
  }
}`,...(Me=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:Me.source}}};var Be,Te,De;L.parameters={...L.parameters,docs:{...(Be=L.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    id: 'id-min-max-validation',
    name: 'input',
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
    minLength: '8',
    maxLength: '12',
    required: true,
    notRequiredHint: '(optional)',
    disabled: false,
    error: false,
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <form>
        <Spacing direction="column" gap="1">
          <Input message="Enter at least 8 chars. You cannot enter more than 12." placeholder={args.placeholder} {...args} />
          <Button type="submit">Submit</Button>
        </Spacing>
      </form>;
  }
}`,...(De=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var Oe,Ne,Ae;k.parameters={...k.parameters,docs:{...(Oe=k.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  decorators: [Story => {
    const [message, setMessage] = useState('Should validate empty field once button is clicked');
    const [state, setState] = useState('default');
    return <form>
          <Spacing direction="column" gap="1">
            <Story message={message} setMessage={setMessage} state={state} setState={setState} />
            <Button type="submit">Submit</Button>
          </Spacing>
        </form>;
  }],
  args: {
    id: 'id-aria-describedby',
    placeholder: 'Placeholder',
    label: 'Label',
    required: true,
    notRequiredHint: '(optional)',
    disabled: false,
    error: false,
    type: 'text',
    name: 'input'
  },
  render: (args, context) => {
    const {
      message,
      setMessage
    } = context;
    const {
      state,
      setState
    } = context;
    return <Fieldset message={message} messageId="message-element-id" messageAriaLive="assertive" state={state}>
        <Input aria-describedby="message-element-id" placeholder={args.placeholder} {...args} onInvalid={e => {
        e.preventDefault();
        setMessage((e.target as HTMLInputElement).validationMessage);
        setState('error');
      }} onChange={() => {
        if (state === 'error') {
          setMessage('Should validate empty field once submit is clicked and field is empty.');
          setState('default');
        }
      }} />
      </Fieldset>;
  }
}`,...(Ae=(Ne=k.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};var ze,Ke,Ye;P.parameters={...P.parameters,docs:{...(ze=P.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    required: true,
    notRequiredHint: '(optional)'
  },
  render: (args, context) => {
    return <Input id="id-interaction-test" name="input" type="text" label={args.label} placeholder="Placeholder" required={args.required} notRequiredHint={args.notRequiredHint} onChange={() => {}} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId(testItem));
    await userEvent.type(canvas.getByTestId(testItem), 'example-value', {
      delay: 20
    });
    await expect(canvas.getByTestId(testItem)).toHaveValue('example-value');
  }
}`,...(Ye=(Ke=P.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};const da=["Default","Search","Number","Date","Password","Disabled","HintMessage","InfoMessage","ErrorMessage","Readonly","InfoIcon","Autocomplete","RequiredValidation","CustomValidationMessage","EmailValidation","PatternValidation","MinMaxValidation","AriaDescribedby","FillValue"];export{k as AriaDescribedby,H as Autocomplete,F as CustomValidationMessage,x as Date,p as Default,S as Disabled,R as EmailValidation,h as ErrorMessage,P as FillValue,m as HintMessage,w as InfoIcon,g as InfoMessage,L as MinMaxValidation,v as Number,q as Password,j as PatternValidation,I as Readonly,C as RequiredValidation,y as Search,da as __namedExportsOrder,ia as default};
