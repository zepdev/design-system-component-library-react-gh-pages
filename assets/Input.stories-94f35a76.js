import{j as a}from"./clsx-667af910.js";import{w as Ge,u as w,e as Je}from"./index-6ac9fa72.js";import{r as g}from"./index-37ba2b57.js";import{I as t}from"./Input-80bd70fb.js";import{S as s}from"./Spacing-ccf11184.js";import{B as i}from"./Button-6c22d89d.js";import{F as _e}from"./Fieldset-f0fac1a5.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./focus-d7245c50.js";import"./Icon-ad687a94.js";import"./tw-merge-1166cefb.js";const ia={title:"Components/Input",component:t,tags:["autodocs"],decorators:[e=>a.jsx("div",{className:"zep-w-[326px] [&>*]:zep-w-full",children:a.jsx(e,{})})],argTypes:{label:{control:{type:"text"}},type:{control:{type:"select",options:["text","search","number","date","password"]}},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}},notRequiredHint:{control:{type:"text"}},readOnly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},hasInfoIcon:{control:{type:"boolean"}},placeholder:{control:{type:"text"}}}},c={args:{id:"id-default",placeholder:"Placeholder",name:"input",type:"text",label:"Label",disabled:!1,required:!1,notRequiredHint:"(optional)",readOnly:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,r)=>a.jsx(t,{placeholder:e.placeholder,...e})},b={decorators:[e=>{const[r,o]=g.useState("Prefilled");return a.jsx(e,{value:r,setValue:o})}],args:{id:"id-search",name:"input",type:"search",disabled:!1,label:"Label",placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)"},render:(e,r)=>{const{value:o,setValue:l}=r;return a.jsx(t,{autoFocus:!0,placeholder:e.placeholder,...e,value:o,onChange:n=>{l(n.target.value)}})}},f={args:{id:"id-number",name:"input",type:"number",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},y={args:{id:"id-date",name:"input",type:"date",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},x={decorators:[e=>{const[r,o]=g.useState("TopSecret"),[l,n]=g.useState("hide");return a.jsx(e,{value:r,setValue:o,icon:l,setIcon:n})}],args:{id:"id-password",label:"Label",name:"input",disabled:!1,required:!1,notRequiredHint:"(optional)"},render:(e,r)=>{const{value:o,setValue:l,icon:n,setIcon:d}=r;return a.jsx(t,{type:n==="hide"?"password":"text",icon:n,placeholder:e.placeholder,...e,value:o,onIconToggle:()=>{d(n==="hide"?"show":"hide")},onChange:h=>{l(h.target.value)}})}},v={args:{id:"id-disabled",name:"text",type:"number",label:"Label",disabled:!0,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},u={args:{id:"id-hint-message",placeholder:"Placeholder",name:"input",type:"text",label:"Label",disabled:!1,required:!1,notRequiredHint:"(optional)",readOnly:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,r)=>a.jsx(t,{message:"Hint message",placeholder:e.placeholder,...e})},p={args:{id:"id-info-message",placeholder:"Placeholder",name:"input",type:"text",label:"Label",disabled:!1,required:!1,notRequiredHint:"(optional)",readOnly:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,r)=>a.jsx(t,{message:"Info message",state:"info",placeholder:e.placeholder,...e})},m={args:{id:"id-error-message",name:"input",type:"text",label:"Label",disabled:!1,error:!0,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}},render:(e,r)=>a.jsx(t,{message:"Some error message",state:"error",placeholder:e.placeholder,...e})},q={args:{id:"id-readonly",name:"input",type:"text",label:"Label",value:"Filled",readOnly:!0,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{}}},S={args:{id:"id-more-info",name:"input",type:"text",label:"Label",placeholder:"Placeholder",hasInfoIcon:!0,infoTitle:"More information",required:!1,notRequiredHint:"(optional)",onIconInfoClick:()=>{alert("Info icon clicked")}}},I={args:{id:"id-autocomplete",name:"name",type:"text",label:"Name",placeholder:"Enter your name",disabled:!1,error:!1,autoComplete:"name",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}},render:(e,r)=>a.jsx(t,{message:"Click this field. A dropdown menu should appear with the names already entered",placeholder:e.placeholder,...e})},H={args:{id:"id-required-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onInvalid:()=>console.log("Invalid"),onChange:e=>{console.log(e.target.value)}},render:(e,r)=>a.jsx("form",{children:a.jsxs(s,{direction:"column",gap:"1",children:[a.jsx(t,{message:"Should validate empty field once button is clicked",placeholder:e.placeholder,...e}),a.jsx(i,{type:"submit",children:"Submit"})]})})},R={args:{id:"id-custom-validation-message",name:"input",type:"text",label:"Label",notRequiredHint:"(optional)",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onInvalid:e=>e.target.setCustomValidity("My validation message"),onChange:e=>{console.log(e.target.value)}},render:(e,r)=>a.jsx("form",{children:a.jsxs(s,{direction:"column",gap:"1",children:[a.jsx(t,{message:"Should validate empty field once button is clicked",placeholder:e.placeholder,...e}),a.jsx(i,{type:"submit",children:"Submit"})]})})},C={args:{id:"id-email-validation",name:"input",type:"email",label:"Email",placeholder:"Placeholder",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,r)=>a.jsx("form",{children:a.jsxs(s,{direction:"column",gap:"1",children:[a.jsx(t,{message:"Should validate email once button is clicked",placeholder:e.placeholder,...e}),a.jsx(i,{type:"submit",children:"Submit"})]})})},P={args:{id:"id-pattern-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",pattern:"[a-z]{4,20}",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,r)=>a.jsx("form",{children:a.jsxs(s,{direction:"column",gap:"1",children:[a.jsx(_e,{message:"Only lowercase. Enter at least 4 chars and max 20.",children:a.jsx(t,{placeholder:e.placeholder,...e})}),a.jsx(i,{type:"submit",children:"Submit"})]})})},j={args:{id:"id-min-max-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",minLength:"8",maxLength:"12",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,r)=>a.jsx("form",{children:a.jsxs(s,{direction:"column",gap:"1",children:[a.jsx(t,{message:"Enter at least 8 chars. You cannot enter more than 12.",placeholder:e.placeholder,...e}),a.jsx(i,{type:"submit",children:"Submit"})]})})},L={decorators:[e=>{const[r,o]=g.useState("Should validate empty field once button is clicked"),[l,n]=g.useState("default");return a.jsx("form",{children:a.jsxs(s,{direction:"column",gap:"1",children:[a.jsx(e,{message:r,setMessage:o,state:l,setState:n}),a.jsx(i,{type:"submit",children:"Submit"})]})})}],args:{id:"id-aria-describedby",placeholder:"Placeholder",label:"Label",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,type:"text",name:"input"},render:(e,r)=>{const{message:o,setMessage:l}=r,{state:n,setState:d}=r;return a.jsx(_e,{message:o,messageId:"message-element-id",messageAriaLive:"assertive",state:n,children:a.jsx(t,{"aria-describedby":"message-element-id",placeholder:e.placeholder,...e,onInvalid:h=>{h.preventDefault(),l(h.target.validationMessage),d("error")},onChange:()=>{n==="error"&&(l("Should validate empty field once submit is clicked and field is empty."),d("default"))}})})}},V="zep-input-field",M={args:{label:"Label",required:!0,notRequiredHint:"(optional)"},render:(e,r)=>{const{message:o,setMessage:l}=r;return a.jsx(t,{id:"id-interaction-test",name:"input",type:"text",label:e.label,placeholder:"Placeholder",required:e.required,notRequiredHint:e.notRequiredHint,message:o,onInvalid:n=>{n.preventDefault(),l("Please enter a value")},onChange:()=>l(!1)})},play:async({canvasElement:e})=>{const r=Ge(e);await w.click(r.getByTestId(V)),await w.type(r.getByTestId(V),"example-value",{delay:20}),await Je(r.getByTestId(V)).toHaveValue("example-value")}};var E,B,F,k,T;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
  }
}`,...(F=(B=c.parameters)==null?void 0:B.docs)==null?void 0:F.source},description:{story:"The Input component is best used inside a Fieldset component, it allows setting hint and error messages.",...(T=(k=c.parameters)==null?void 0:k.docs)==null?void 0:T.description}}};var D,O,A;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(O=b.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var z,N,Y;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Y=(N=f.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var _,G,J;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Z;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Z=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ae,re,te;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ae=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:"Here the Input component is used inside a FormField component to enable the use of a hint.",...(te=(re=u.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};var ne,oe,le,se,ie;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(le=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:le.source},description:{story:"Here the Input component is used inside a FormField component to enable the use of an info message.",...(ie=(se=p.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var de,ce,ue,pe,me;m.parameters={...m.parameters,docs:{...(de=m.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(ce=m.parameters)==null?void 0:ce.docs)==null?void 0:ue.source},description:{story:"Here the Input component is used inside a FormField component to enable the use of an error message.",...(me=(pe=m.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};var ge,he,be;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(be=(he=q.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var fe,ye,xe;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(xe=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var ve,qe,Se;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Se=(qe=I.parameters)==null?void 0:qe.docs)==null?void 0:Se.source}}};var Ie,He,Re;H.parameters={...H.parameters,docs:{...(Ie=H.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Re=(He=H.parameters)==null?void 0:He.docs)==null?void 0:Re.source}}};var Ce,Pe,je;R.parameters={...R.parameters,docs:{...(Ce=R.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(je=(Pe=R.parameters)==null?void 0:Pe.docs)==null?void 0:je.source}}};var Le,Me,Ve;C.parameters={...C.parameters,docs:{...(Le=C.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ve=(Me=C.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var we,Ee,Be;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Be=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:Be.source}}};var Fe,ke,Te;j.parameters={...j.parameters,docs:{...(Fe=j.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Te=(ke=j.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var De,Oe,Ae;L.parameters={...L.parameters,docs:{...(De=L.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ae=(Oe=L.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source}}};var ze,Ne,Ye;M.parameters={...M.parameters,docs:{...(ze=M.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
    return <Input id="id-interaction-test" name="input" type="text" label={args.label} placeholder="Placeholder" required={args.required} notRequiredHint={args.notRequiredHint} message={message} onInvalid={e => {
      e.preventDefault();
      setMessage('Please enter a value');
    }} onChange={() => setMessage(false)} />;
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
}`,...(Ye=(Ne=M.parameters)==null?void 0:Ne.docs)==null?void 0:Ye.source}}};const da=["Default","Search","Number","Date","Password","Disabled","HintMessage","InfoMessage","ErrorMessage","Readonly","InfoIcon","Autocomplete","RequiredValidation","CustomValidationMessage","EmailValidation","PatternValidation","MinMaxValidation","AriaDescribedby","FillValue"];export{L as AriaDescribedby,I as Autocomplete,R as CustomValidationMessage,y as Date,c as Default,v as Disabled,C as EmailValidation,m as ErrorMessage,M as FillValue,u as HintMessage,S as InfoIcon,p as InfoMessage,j as MinMaxValidation,f as Number,x as Password,P as PatternValidation,q as Readonly,H as RequiredValidation,b as Search,da as __namedExportsOrder,ia as default};
//# sourceMappingURL=Input.stories-94f35a76.js.map
