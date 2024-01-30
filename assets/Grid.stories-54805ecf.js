import{j as e}from"./clsx-667af910.js";import{r as o}from"./index-37ba2b57.js";import{G as z,a}from"./Grid-13fe5084.js";import"./_commonjsHelpers-de833af9.js";const h={title:"General/Grid",component:z,tags:["autodocs"],argTypes:{children:{control:{disable:!0}},columns:{control:{type:"object"}}},parameters:{a11y:{disable:!0}}},t={args:{children:e.jsx(e.Fragment,{children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(r=>e.jsx("span",{className:"zep-p-0_25 zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-lightblue-500 zep-text-greyscale-0",children:r},`grid-item-${r}`))})}},s={args:{children:e.jsx(e.Fragment,{children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(r=>e.jsxs(o.Fragment,{children:[e.jsx(a,{colSpan:{lg:16-r},children:e.jsx("span",{className:"zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-darkblue-500 zep-p-0.25 zep-text-greyscale-0"})}),e.jsx(a,{colSpan:{lg:r},children:e.jsx("span",{className:"zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-lightblue-500 zep-p-0.25 zep-text-greyscale-0"})})]},`grid-item-duo-${16-r}`))})}};var p,n,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(item => <span className="zep-p-0_25 zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-lightblue-500 zep-text-greyscale-0" key={\`grid-item-\${item}\`}>
            {item}
          </span>)}
      </>
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,l,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const y=["Default","CustomGridItemsSpan"];export{s as CustomGridItemsSpan,t as Default,y as __namedExportsOrder,h as default};
//# sourceMappingURL=Grid.stories-54805ecf.js.map
