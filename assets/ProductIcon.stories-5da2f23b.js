import{j as e}from"./clsx-36b9529f.js";import{P as z,b as x}from"./Icon-b62d87dd.js";import{S as o}from"./Spacing-3ed1191f.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-24fb42db.js";const w={title:"General/Icons/ProductIcon",tags:["autodocs"],component:z,argTypes:{name:{control:{type:"select",options:[typeof x]}}},parameters:{controls:{exclude:["size"]}}},n={args:{name:"hook",role:"img"}},a={args:{name:"hook",role:"img",className:"zep-text-error"}},y=(r,h)=>r.localeCompare(h),b=Object.keys(x).sort(y),s={args:{name:"hook"},decorators:[()=>e.jsx(e.Fragment,{children:e.jsx(o,{direction:"column",gap:"2",children:e.jsxs(o,{direction:"column",gap:"1",children:[e.jsx("h3",{className:"zep-font-500",children:"Product Icons (56px)"}),e.jsx(o,{gap:"1",children:b.map(r=>e.jsxs(o,{direction:"column",justifyContent:"between",className:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100",children:[e.jsx(o,{justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(z,{name:r})}),e.jsx("span",{className:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875",children:r})]},r))})]})})})]};var c,t,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'hook',
    role: 'img'
  }
}`,...(p=(t=n.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var m,i,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'hook',
    role: 'img',
    className: 'zep-text-error'
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var g,d,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'hook'
  },
  decorators: [() => {
    return <>
          <Spacing direction="column" gap="2">
            <Spacing direction="column" gap="1">
              <h3 className="zep-font-500">Product Icons (56px)</h3>
              <Spacing gap="1">
                {productIconKeys.map(icon => <Spacing key={icon} direction="column" justifyContent="between" className="zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100">
                    <Spacing justifyContent="center" alignItems="center" className="zep-grow">
                      <ProductIcon name={icon} />
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
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const C=["Default","Colored","Overview"];export{a as Colored,n as Default,s as Overview,C as __namedExportsOrder,w as default};
