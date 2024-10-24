import{j as e}from"./clsx-667af910.js";import{P as z,a as x}from"./Icon-58810b29.js";import{S as o}from"./Spacing-a8401166.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./index-47d55b97.js";const w={title:"General/Icons/ProductIcon",tags:["autodocs"],component:z,argTypes:{name:{control:{type:"select",options:[typeof x]}}},parameters:{controls:{exclude:["size"]}}},a={args:{name:"hook",role:"img"}},s={args:{name:"hook",role:"img",className:"zep-text-error"}},y=(r,h)=>r.localeCompare(h),j=Object.keys(x).sort(y),c={args:{name:"hook"},decorators:[()=>e.jsx(e.Fragment,{children:e.jsx(o,{direction:"column",gap:"2",children:e.jsxs(o,{direction:"column",gap:"1",children:[e.jsx("h3",{className:"zep-font-500",children:"Product Icons (56px)"}),e.jsx(o,{gap:"1",children:j.map(r=>e.jsxs(o,{direction:"column",justifyContent:"between",className:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100",children:[e.jsx(o,{justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(z,{name:r})}),e.jsx("span",{className:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875",children:r})]},r))})]})})})]};var n,t,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    name: 'hook',
    role: 'img'
  }
}`,...(p=(t=a.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var m,i,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'hook',
    role: 'img',
    className: 'zep-text-error'
  }
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var g,d,u;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(d=c.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const C=["Default","Colored","Overview"];export{s as Colored,a as Default,c as Overview,C as __namedExportsOrder,w as default};
//# sourceMappingURL=ProductIcon.stories-148f36b8.js.map
