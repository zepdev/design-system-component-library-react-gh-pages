import{R as e,r as o}from"./index-76fb7be0.js";import{G as z,a as n}from"./Grid-0ac69849.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-1229b3e0.js";const f={title:"Components/Grid",component:z,tags:["autodocs"],argTypes:{children:{control:{disable:!0}},columns:{control:{type:"object"}}}},r={args:{children:e.createElement(e.Fragment,null,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(t=>e.createElement("span",{className:"zep-p-0_25 zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-lightblue-500 zep-text-greyscale-0",key:`grid-item-${t}`},t)))}},a={args:{children:e.createElement(e.Fragment,null,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(t=>e.createElement(o.Fragment,{key:`grid-item-duo-${16-t}`},e.createElement(n,{colSpan:{lg:16-t}},e.createElement("span",{className:"zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-darkblue-500 zep-p-0.25 zep-text-greyscale-0"})),e.createElement(n,{colSpan:{lg:t}},e.createElement("span",{className:"zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-lightblue-500 zep-p-0.25 zep-text-greyscale-0"})))))}};var p,s,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(item => <span className="zep-p-0_25 zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-lightblue-500 zep-text-greyscale-0" key={\`grid-item-\${item}\`}>
            {item}
          </span>)}
      </>
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var m,l,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => <Fragment key={\`grid-item-duo-\${16 - item}\`}>
            <GridItem colSpan={{
          lg: (16 - item as any)
        }}>
              <span className="zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-darkblue-500 zep-p-0.25 zep-text-greyscale-0" />
            </GridItem>
            <GridItem colSpan={{
          lg: (item as any)
        }}>
              <span className="zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-lightblue-500 zep-p-0.25 zep-text-greyscale-0" />
            </GridItem>
          </Fragment>)}
      </>
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const h=["Default","CustomGridItemsSpan"];export{a as CustomGridItemsSpan,r as Default,h as __namedExportsOrder,f as default};
//# sourceMappingURL=Grid.stories-4eb68b9b.js.map
