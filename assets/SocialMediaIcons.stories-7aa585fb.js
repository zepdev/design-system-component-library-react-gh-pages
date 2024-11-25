import{j as e}from"./clsx-667af910.js";import{S as m,a as g}from"./Icon-6b1de065.js";import{S as r}from"./Spacing-5c3b1745.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./index-47d55b97.js";const h={title:"General/Icons/SocialMediaIcon",tags:["autodocs"],component:m,argTypes:{name:{control:{type:"select",options:[typeof g]}}},parameters:{controls:{exclude:["size"]}}},o={args:{name:"youtube",role:"img"}},u=(a,d)=>a.localeCompare(d),z=Object.keys(g).sort(u),n={args:{name:"youtube"},decorators:[()=>e.jsx(e.Fragment,{children:e.jsx(r,{direction:"column",gap:"2",children:e.jsxs(r,{direction:"column",gap:"1",children:[e.jsx("h3",{className:"zep-font-500",children:"Functional Icons (24px)"}),e.jsx(r,{gap:"1",children:z.map(a=>e.jsxs(r,{direction:"column",justifyContent:"between",className:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100",children:[e.jsx(r,{justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsx(m,{name:a})}),e.jsx("span",{className:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875",children:a})]},a))})]})})})]};var c,s,t;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'youtube',
    role: 'img'
  }
}`,...(t=(s=o.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var p,i,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const I=["Default","Overview"];export{o as Default,n as Overview,I as __namedExportsOrder,h as default};
//# sourceMappingURL=SocialMediaIcons.stories-7aa585fb.js.map
