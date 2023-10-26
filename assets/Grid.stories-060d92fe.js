import{j as e}from"./clsx-667af910.js";import{r as o}from"./index-37ba2b57.js";import{G as z,a}from"./Grid-13fe5084.js";import"./_commonjsHelpers-de833af9.js";const h={title:"Components/Grid",component:z,tags:["autodocs"],argTypes:{children:{control:{disable:!0}},columns:{control:{type:"object"}}},parameters:{a11y:{disable:!0}}},r={args:{children:e.jsx(e.Fragment,{children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(t=>e.jsx("span",{className:"zep-p-0_25 zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-lightblue-500 zep-text-greyscale-0",children:t},`grid-item-${t}`))})}},s={args:{children:e.jsx(e.Fragment,{children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(t=>e.jsxs(o.Fragment,{children:[e.jsx(a,{colSpan:{lg:16-t},children:e.jsx("span",{className:"zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-darkblue-500 zep-p-0.25 zep-text-greyscale-0"})}),e.jsx(a,{colSpan:{lg:t},children:e.jsx("span",{className:"zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-lightblue-500 zep-p-0.25 zep-text-greyscale-0"})})]},`grid-item-duo-${16-t}`))})}};var p,n,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(item => <span className="zep-p-0_25 zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-lightblue-500 zep-text-greyscale-0" key={\`grid-item-\${item}\`}>
            {item}
          </span>)}
      </>
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,m,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const y=["Default","CustomGridItemsSpan"];export{s as CustomGridItemsSpan,r as Default,y as __namedExportsOrder,h as default};
//# sourceMappingURL=Grid.stories-060d92fe.js.map
