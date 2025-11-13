import{j as e}from"./clsx-36b9529f.js";import{S as m,c as g}from"./Icon-511b1404.js";import{S as a}from"./Spacing-3ed1191f.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-24fb42db.js";const h={title:"General/Icons/SocialMediaIcon",tags:["autodocs"],component:m,argTypes:{name:{control:{type:"select",options:[typeof g]}}},parameters:{controls:{exclude:["size"]}}},r={args:{name:"youtube",role:"img"}},u=(n,d)=>n.localeCompare(d),z=Object.keys(g).sort(u),o={args:{name:"youtube"},decorators:[()=>e.jsx(e.Fragment,{children:e.jsx(a,{direction:"column",gap:"2",children:e.jsxs(a,{direction:"column",gap:"1",children:[e.jsx("h3",{className:"zep-font-500",children:"Functional Icons (24px)"}),e.jsx(a,{gap:"1",children:z.map(n=>e.jsxs(a,{direction:"column",justifyContent:"between",className:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100",children:[e.jsx(a,{justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(m,{name:n})}),e.jsx("span",{className:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875",children:n})]},n))})]})})})]};var c,s,t;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'youtube',
    role: 'img'
  }
}`,...(t=(s=r.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var p,i,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'youtube'
  },
  decorators: [() => {
    return <>
          <Spacing direction="column" gap="2">
            <Spacing direction="column" gap="1">
              <h3 className="zep-font-500">Functional Icons (24px)</h3>
              <Spacing gap="1">
                {functionalIconKeys.map(icon => <Spacing key={icon} direction="column" justifyContent="between" className="zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100">
                    <Spacing justifyContent="center" alignItems="center" className="zep-grow">
                      <SocialMediaIcon name={icon} />
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
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const I=["Default","Overview"];export{r as Default,o as Overview,I as __namedExportsOrder,h as default};
