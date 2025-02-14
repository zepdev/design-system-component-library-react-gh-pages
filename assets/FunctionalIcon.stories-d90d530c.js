import{j as e}from"./clsx-36b9529f.js";import{F as z,a as x}from"./Icon-2c887576.js";import{S as r}from"./Spacing-329983cf.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-24fb42db.js";const N={title:"General/Icons/FunctionalIcon",tags:["autodocs"],component:z,argTypes:{name:{control:{type:"select",options:[typeof x]}}},parameters:{controls:{exclude:["size"]}}},o={args:{name:"chevron-mini-down",role:"img"}},a={args:{name:"chevron-mini-down",role:"img",className:"zep-text-error"}},y=(n,h)=>n.localeCompare(h),j=Object.keys(x).sort(y),s={args:{name:"chevron-mini-down"},decorators:[()=>e.jsx(e.Fragment,{children:e.jsx(r,{direction:"column",gap:"2",children:e.jsxs(r,{direction:"column",gap:"1",children:[e.jsx("h3",{className:"zep-font-500",children:"Functional Icons (24px)"}),e.jsx(r,{gap:"1",children:j.map(n=>e.jsxs(r,{direction:"column",justifyContent:"between",className:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100",children:[e.jsx(r,{justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(z,{name:n})}),e.jsx("span",{className:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875",children:n})]},n))})]})})})]};var c,t,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down',
    role: 'img'
  }
}`,...(p=(t=o.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var i,m,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down',
    role: 'img',
    className: 'zep-text-error'
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var g,d,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down'
  },
  decorators: [() => {
    return <>
          <Spacing direction="column" gap="2">
            <Spacing direction="column" gap="1">
              <h3 className="zep-font-500">Functional Icons (24px)</h3>
              <Spacing gap="1">
                {functionalIconKeys.map(icon => <Spacing key={icon} direction="column" justifyContent="between" className="zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100">
                    <Spacing justifyContent="center" alignItems="center" className="zep-grow">
                      <FunctionalIcon name={icon} />
                    </Spacing>
                    <span className="zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875">
                      {icon}
                    </span>
                  </Spacing>)}
              </Spacing>
            </Spacing>
          </Spacing>
        </>;
  }]
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const F=["Default","Colored","Overview"];export{a as Colored,o as Default,s as Overview,F as __namedExportsOrder,N as default};
