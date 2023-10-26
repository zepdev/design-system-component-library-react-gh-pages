import{j as e}from"./clsx-667af910.js";import{F as b,a as j,P as S,b as N}from"./Icon-ceed2606.js";import{S as n}from"./Spacing-6c783f0a.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";const A={title:"Components/Icons",component:b,argTypes:{name:{control:{type:"select",options:[typeof j]}},size:{control:{disable:!0}}}},o={args:{name:"chevron-mini-down",role:"img"}},c={args:{name:"chevron-mini-down",role:"img",className:"zep-text-error"}},s={args:{name:"chevron-mini-down"},decorators:[()=>e.jsx(S,{name:"hook"})]},v=Object.keys(j),C=Object.keys(N),w=r=>r.sort((I,f)=>I.localeCompare(f)),F=w(v),P=w(C),a={args:{name:"chevron-mini-down"},decorators:[()=>e.jsx(e.Fragment,{children:e.jsxs(n,{direction:"column",gap:"2",children:[e.jsxs(n,{direction:"column",gap:"1",children:[e.jsx("h3",{className:"zep-font-500",children:"Functional Icons (24px)"}),e.jsx(n,{gap:"1",children:F.map(r=>e.jsxs(n,{direction:"column",justifyContent:"between",className:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100",children:[e.jsx(n,{justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(b,{name:r})}),e.jsx("span",{className:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875",children:r})]}))})]}),e.jsxs(n,{direction:"column",gap:"1",children:[e.jsx("h3",{className:"zep-font-500",children:"Product Icons (56px)"}),e.jsx(n,{gap:"1",children:P.map(r=>e.jsxs(n,{direction:"column",justifyContent:"between",className:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100",children:[e.jsx(n,{justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(S,{name:r})}),e.jsx("span",{className:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875",children:r})]}))})]})]})})]};var t,p,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down',
    role: 'img'
  }
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,l,d;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down',
    role: 'img',
    className: 'zep-text-error'
  }
}`,...(d=(l=c.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,u,z;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down'
  },
  decorators: [() => {
    return <ProductIcon name="hook" />;
  }]
}`,...(z=(u=s.parameters)==null?void 0:u.docs)==null?void 0:z.source}}};var x,y,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down'
  },
  decorators: [() => {
    return <>
          <Spacing direction="column" gap="2">
            <Spacing direction="column" gap="1">
              <h3 className="zep-font-500">Functional Icons (24px)</h3>
              <Spacing gap="1">
                {sortedFunctionalIconKeys.map(icon => <Spacing direction="column" justifyContent="between" className="zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100">
                    <Spacing justifyContent="center" alignItems="center" className="zep-grow">
                      <FunctionalIcon name={icon} />
                    </Spacing>
                    <span className="zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875">
                      {icon}
                    </span>
                  </Spacing>)}
              </Spacing>
            </Spacing>
            <Spacing direction="column" gap="1">
              <h3 className="zep-font-500">Product Icons (56px)</h3>
              <Spacing gap="1">
                {sortedProductIconKeys.map(icon => <Spacing direction="column" justifyContent="between" className="zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100">
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
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const R=["Functional","Colored","Product","Overview"];export{c as Colored,o as Functional,a as Overview,s as Product,R as __namedExportsOrder,A as default};
//# sourceMappingURL=Icon.stories-acf1b351.js.map
