import{j as a}from"./clsx-667af910.js";import{r as R}from"./index-37ba2b57.js";import{I as C}from"./Input-42b43dba.js";import{F as t}from"./FormField-36d586d5.js";import{S as s}from"./Spacing-6c783f0a.js";import{B as i}from"./Button-30bc00fc.js";import"./_commonjsHelpers-de833af9.js";import"./focus-d7245c50.js";import"./Icon-3aaedf22.js";import"./tw-merge-1166cefb.js";const Ae={title:"Components/Input",component:C,tags:["autodocs"],decorators:[e=>a.jsx("div",{className:"zep-w-[326px] [&>*]:zep-w-full",children:a.jsx(e,{})})],argTypes:{label:{control:{type:"text"}},type:{control:{type:"select",options:["text","search","number","date","password"]}},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}},notRequiredHint:{control:{type:"text"}},readOnly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},message:{control:{type:"text"}},hasInfoIcon:{control:{type:"boolean"}},placeholder:{control:{type:"text"}}}},d={decorators:[e=>a.jsx(t,{message:"Hint message",children:a.jsx(e,{})})],args:{id:"id-default",name:"input",type:"text",label:"Label",disabled:!1,required:!1,notRequiredHint:"(optional)",readOnly:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},c={decorators:[e=>{const[r,o]=R.useState("Prefilled");return a.jsx(e,{value:r,setValue:o})}],args:{label:"Label",required:!1,notRequiredHint:"(optional)"},render:(e,r)=>{const{value:o,setValue:n}=r;return a.jsx(C,{id:"id-search",name:"input",type:"search",label:e.label,disabled:!1,autoFocus:!0,placeholder:"Placeholder",value:o,onChange:l=>{n(l.target.value)}})}},u={args:{id:"id-number",name:"input",type:"number",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},m={args:{id:"id-date",name:"input",type:"date",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},p={decorators:[e=>{const[r,o]=R.useState("TopSecret"),[n,l]=R.useState("hide");return a.jsx(e,{value:r,setValue:o,icon:n,setIcon:l})}],args:{label:"Label",required:!1,notRequiredHint:"(optional)"},render:(e,r)=>{const{value:o,setValue:n,icon:l,setIcon:H}=r;return a.jsx(C,{id:"id-password",name:"input",type:l==="hide"?"password":"text",label:e.label,disabled:!1,icon:l,required:e.required,placeholder:"Placeholder",value:o,onIconToggle:()=>{H(l==="hide"?"show":"hide")},onChange:He=>{n(He.target.value)}})}},g={args:{id:"id-disabled",name:"text",type:"number",label:"Label",disabled:!0,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},h={decorators:[e=>a.jsx(t,{message:"Some error message",state:"error",children:a.jsx(e,{})})],args:{id:"id-error-message",name:"input",type:"text",label:"Label",disabled:!1,error:!0,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},b={args:{id:"id-readonly",name:"input",type:"text",label:"Label",value:"Filled",readOnly:!0,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{}}},f={decorators:[e=>a.jsx(t,{message:"Info message",state:"info",children:a.jsx(e,{})})],args:{id:"id-info-message",name:"input",type:"text",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},y={args:{id:"id-more-info",name:"input",type:"text",label:"Label",placeholder:"Placeholder",hasInfoIcon:!0,required:!1,notRequiredHint:"(optional)",onIconInfoClick:()=>{alert("Info icon clicked")}}},x={decorators:[e=>a.jsx(t,{message:"Click this field. A dropdown menu should appear with the names already entered",children:a.jsx(e,{})})],args:{id:"id-autocomplete",name:"name",type:"text",label:"Name",placeholder:"Enter your name",disabled:!1,error:!1,autoComplete:"name",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},S={decorators:[e=>a.jsx("form",{children:a.jsxs(s,{direction:"column",gap:"1",children:[a.jsx(t,{message:"Should validate empty field once button is clicked",children:a.jsx(e,{})}),a.jsx(i,{type:"submit",children:"Submit"})]})})],args:{id:"id-required-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onInvalid:()=>console.log("Invalid"),onChange:e=>{console.log(e.target.value)}}},q={decorators:[e=>a.jsx("form",{children:a.jsxs(s,{direction:"column",gap:"1",children:[a.jsx(t,{message:"Should validate empty field once button is clicked",children:a.jsx(e,{})}),a.jsx(i,{type:"submit",children:"Submit"})]})})],args:{id:"id-custom-validation-message",name:"input",type:"text",label:"Label",notRequiredHint:"(optional)",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onInvalid:e=>e.target.setCustomValidity("My validation message"),onChange:e=>{console.log(e.target.value)}}},v={decorators:[e=>a.jsx("form",{children:a.jsxs(s,{direction:"column",gap:"1",children:[a.jsx(t,{message:"Should validate email once button is clicked",children:a.jsx(e,{})}),a.jsx(i,{type:"submit",children:"Submit"})]})})],args:{id:"id-email-validation",name:"input",type:"email",label:"Email",placeholder:"Placeholder",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},F={decorators:[e=>a.jsx("form",{children:a.jsxs(s,{direction:"column",gap:"1",children:[a.jsx(t,{message:"Only lowercase. Enter at least 4 chars and max 20.",children:a.jsx(e,{})}),a.jsx(i,{type:"submit",children:"Submit"})]})})],args:{id:"id-pattern-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",pattern:"[a-z]{4,20}",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},j={decorators:[e=>a.jsx("form",{children:a.jsxs(s,{direction:"column",gap:"1",children:[a.jsx(t,{message:"Enter at least 8 chars. You cannot enter more than 12.",children:a.jsx(e,{})}),a.jsx(i,{type:"submit",children:"Submit"})]})})],args:{id:"id-min-max-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",minLength:"8",maxLength:"12",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},I={decorators:[e=>{const[r,o]=R.useState(null);return a.jsx("form",{children:a.jsxs(s,{direction:"column",gap:"1",children:[a.jsx(t,{message:"Should validate empty field once button is clicked",children:a.jsx(e,{message:r,setMessage:o})}),a.jsx(i,{type:"submit",children:"Submit"})]})})}],args:{label:"Label",required:!0,notRequiredHint:"(optional)"},render:(e,r)=>{const{message:o,setMessage:n}=r;return a.jsx(C,{id:"id-aria-describedby",name:"input",type:"text",label:e.label,placeholder:"Placeholder",required:e.required,notRequiredHint:e.notRequiredHint,message:o,onInvalid:l=>{l.preventDefault(),n("Please enter a value")},onChange:()=>n(!1)})}};var P,L,V,M,w;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  decorators: [Story => {
    return <FormField message="Hint message">
          <Story />
        </FormField>;
  }],
  args: {
    id: 'id-default',
    name: 'input',
    type: 'text',
    label: 'Label',
    disabled: false,
    required: false,
    notRequiredHint: '(optional)',
    readOnly: false,
    error: false,
    placeholder: 'Placeholder',
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(V=(L=d.parameters)==null?void 0:L.docs)==null?void 0:V.source},description:{story:"The Input component is best used inside a FormField component, it allows setting hint and error messages.",...(w=(M=d.parameters)==null?void 0:M.docs)==null?void 0:w.description}}};var E,k,B;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  decorators: [Story => {
    const [value, setValue] = useState('Prefilled');
    return <Story value={value} setValue={setValue} />;
  }],
  args: {
    label: 'Label',
    required: false,
    notRequiredHint: '(optional)'
  },
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Input id="id-search" name="input" type="search" label={args.label} disabled={false} autoFocus placeholder="Placeholder" value={value} onChange={e => {
      setValue(e.target.value);
    }} />;
  }
}`,...(B=(k=c.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var D,O,A;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(O=u.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var T,N,z;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(z=(N=m.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var Y,_,G;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  decorators: [Story => {
    const [value, setValue] = useState('TopSecret');
    const [icon, setIcon] = useState('hide');
    return <Story value={value} setValue={setValue} icon={icon} setIcon={setIcon} />;
  }],
  args: {
    label: 'Label',
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
    return <Input id="id-password" name="input" type={icon === 'hide' ? 'password' : 'text'} label={args.label} disabled={false} icon={icon} required={args.required} placeholder="Placeholder" value={value} onIconToggle={() => {
      if (icon === 'hide') {
        setIcon('show');
      } else {
        setIcon('hide');
      }
    }} onChange={e => {
      setValue(e.target.value);
    }} />;
  }
}`,...(G=(_=p.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  decorators: [Story => {
    return <FormField message="Some error message" state="error">
          <Story />
        </FormField>;
  }],
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
  }
}`,...(X=(W=h.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,re,oe;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  decorators: [Story => {
    return <FormField message="Info message" state="info">
          <Story />
        </FormField>;
  }],
  args: {
    id: 'id-info-message',
    name: 'input',
    type: 'text',
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
}`,...(oe=(re=f.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var te,le,ne;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    id: 'id-more-info',
    name: 'input',
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
    hasInfoIcon: true,
    required: false,
    notRequiredHint: '(optional)',
    onIconInfoClick: () => {
      alert('Info icon clicked');
    }
  }
}`,...(ne=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var se,ie,de;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  decorators: [Story => {
    return <FormField message="Click this field. A dropdown menu should appear with the names already entered">
          <Story />
        </FormField>;
  }],
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
  }
}`,...(de=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,ue,me;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  decorators: [Story => {
    return <form>
          <Spacing direction="column" gap="1">
            <FormField message="Should validate empty field once button is clicked">
              <Story />
            </FormField>
            <Button type="submit">Submit</Button>
          </Spacing>
        </form>;
  }],
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
  }
}`,...(me=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ge,he;q.parameters={...q.parameters,docs:{...(pe=q.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  decorators: [Story => {
    return <form>
          <Spacing direction="column" gap="1">
            <FormField message="Should validate empty field once button is clicked">
              <Story />
            </FormField>
            <Button type="submit">Submit</Button>
          </Spacing>
        </form>;
  }],
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
  }
}`,...(he=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var be,fe,ye;v.parameters={...v.parameters,docs:{...(be=v.parameters)==null?void 0:be.docs,source:{originalSource:`{
  decorators: [Story => {
    return <form>
          <Spacing direction="column" gap="1">
            <FormField message="Should validate email once button is clicked">
              <Story />
            </FormField>
            <Button type="submit">Submit</Button>
          </Spacing>
        </form>;
  }],
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
  }
}`,...(ye=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var xe,Se,qe;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  decorators: [Story => {
    return <form>
          <Spacing direction="column" gap="1">
            <FormField message="Only lowercase. Enter at least 4 chars and max 20.">
              <Story />
            </FormField>
            <Button type="submit">Submit</Button>
          </Spacing>
        </form>;
  }],
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
  }
}`,...(qe=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:qe.source}}};var ve,Fe,je;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  decorators: [Story => {
    return <form>
          <Spacing direction="column" gap="1">
            <FormField message="Enter at least 8 chars. You cannot enter more than 12.">
              <Story />
            </FormField>
            <Button type="submit">Submit</Button>
          </Spacing>
        </form>;
  }],
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
  }
}`,...(je=(Fe=j.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var Ie,Re,Ce;I.parameters={...I.parameters,docs:{...(Ie=I.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  decorators: [Story => {
    const [message, setMessage] = useState(null);
    return <form>
          <Spacing direction="column" gap="1">
            <FormField message="Should validate empty field once button is clicked">
              <Story message={message} setMessage={setMessage} />
            </FormField>
            <Button type="submit">Submit</Button>
          </Spacing>
        </form>;
  }],
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
    return <Input id="id-aria-describedby" name="input" type="text" label={args.label} placeholder="Placeholder" required={args.required} notRequiredHint={args.notRequiredHint} message={message} onInvalid={e => {
      e.preventDefault();
      setMessage('Please enter a value');
    }} onChange={() => setMessage(false)} />;
  }
}`,...(Ce=(Re=I.parameters)==null?void 0:Re.docs)==null?void 0:Ce.source}}};const Te=["Default","Search","Number","Date","Password","Disabled","ErrorMessage","Readonly","InfoMessage","InfoIcon","Autocomplete","RequiredValidation","CustomValidationMessage","EmailValidation","PatternValidation","MinMaxValidation","AriaDescribedby"];export{I as AriaDescribedby,x as Autocomplete,q as CustomValidationMessage,m as Date,d as Default,g as Disabled,v as EmailValidation,h as ErrorMessage,y as InfoIcon,f as InfoMessage,j as MinMaxValidation,u as Number,p as Password,F as PatternValidation,b as Readonly,S as RequiredValidation,c as Search,Te as __namedExportsOrder,Ae as default};
//# sourceMappingURL=Input.stories-f441f6a1.js.map
