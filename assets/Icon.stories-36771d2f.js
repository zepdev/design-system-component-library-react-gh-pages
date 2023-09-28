import{R as e}from"./index-76fb7be0.js";import{F as w,a as I,P as h,b as N}from"./Icon-bb12ad48.js";import{S as n}from"./Spacing-12a83a9e.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-1229b3e0.js";const _={title:"Components/Icons",component:w,argTypes:{name:{control:{type:"select",options:[typeof I]}},size:{control:{disable:!0}}}},a={args:{name:"chevron-mini-down",role:"img"}},o={args:{name:"chevron-mini-down",role:"img",className:"zep-text-error"}},c={args:{name:"chevron-mini-down"},decorators:[()=>e.createElement(h,{name:"hook"})]},v=Object.keys(I),C=Object.keys(N),x=r=>r.sort((f,E)=>f.localeCompare(E)),F=x(v),P=x(C),t={args:{name:"chevron-mini-down"},decorators:[()=>e.createElement(e.Fragment,null,e.createElement(n,{direction:"column",gap:"2"},e.createElement(n,{direction:"column",gap:"1"},e.createElement("h3",{className:"zep-font-500"},"Functional Icons (24px)"),e.createElement(n,{gap:"1"},F.map(r=>e.createElement(n,{direction:"column",justifyContent:"between",className:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100"},e.createElement(n,{justifyContent:"center",alignItems:"center",className:"zep-grow"},e.createElement(w,{name:r})),e.createElement("span",{className:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875"},r))))),e.createElement(n,{direction:"column",gap:"1"},e.createElement("h3",{className:"zep-font-500"},"Product Icons (56px)"),e.createElement(n,{gap:"1"},P.map(r=>e.createElement(n,{direction:"column",justifyContent:"between",className:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100"},e.createElement(n,{justifyContent:"center",alignItems:"center",className:"zep-grow"},e.createElement(h,{name:r})),e.createElement("span",{className:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875"},r)))))))]};var s,p,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down',
    role: 'img'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,l,g;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down',
    role: 'img',
    className: 'zep-text-error'
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var d,u,z;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down'
  },
  decorators: [() => {
    return <ProductIcon name="hook" />;
  }]
}`,...(z=(u=c.parameters)==null?void 0:u.docs)==null?void 0:z.source}}};var y,b,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const A=["Functional","Colored","Product","Overview"];export{o as Colored,a as Functional,t as Overview,c as Product,A as __namedExportsOrder,_ as default};
//# sourceMappingURL=Icon.stories-36771d2f.js.map
