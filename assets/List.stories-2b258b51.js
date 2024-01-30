import{j as e,c as h}from"./clsx-667af910.js";import{r as S}from"./index-37ba2b57.js";import{L as s}from"./Link-47ca2350.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-ffb6d13d.js";const k=S.createContext({type:"bullet"}),t=({type:i="bullet",children:r})=>{const f=i==="bullet"?"ul":"ol";return e.jsx(k.Provider,{value:{type:i},children:e.jsx(f,{className:h("zep-text-typography-dark-100","zep-typography-bodyText","zep-list-none","[&_ul]:zep-pl-2","[&_ol]:zep-pl-2","[counter-reset:section]"),children:r})})},z=({children:i})=>{const{type:r}=S.useContext(k);return e.jsx("li",{className:h("zep-relative","zep-flex","zep-items-baseline","zep-py-0.5","[counter-increment:section]","before:zep-w-1.5","before:zep-h-1.5","before:zep-mr-0.75","before:zep-text-center","before:zep-shrink-0",{'before:[content:"•"]':r==="bullet"},{"before:[content:counter(section,lower-alpha)]":r==="alphabetical"},{"before:[content:counter(section)]":r==="numeric"}),children:i})};t.Item=z;try{t.displayName="List",t.__docgenInfo={description:"",displayName:"List",props:{type:{defaultValue:{value:"bullet"},description:"",name:"type",required:!1,type:{name:"string"}}}}}catch{}const E={title:"Components/List",component:t,tags:["autodocs"],argTypes:{children:{control:{disable:!0}},type:{control:{type:"select",options:["ordered","unordered"]}}}},l={args:{type:"bullet"},render:({type:i})=>e.jsxs(t,{type:i,children:[e.jsx(t.Item,{children:"List item"}),e.jsx(t.Item,{children:"Super long list item Super long list item Super long list item Super long list item"}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})})]})},n={args:{type:"numeric"},render:({type:i})=>e.jsxs(t,{type:i,children:[e.jsx(t.Item,{children:"List item"}),e.jsx(t.Item,{children:"Super long list item Super long list item Super long list item Super long list item"}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})})]})},m={args:{type:"numeric"},render:({type:i})=>e.jsxs(t,{type:i,children:[e.jsx(t.Item,{children:"List item"}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})}),e.jsxs(t,{type:"alphabetical",children:[e.jsx(t.Item,{children:"List item"}),e.jsx(t.Item,{children:"Super long list item Super long list item Super long list item Super long list item"}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})})]})]})},o={args:{type:"bullet"},render:({type:i})=>e.jsxs(t,{type:i,children:[e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})})]})};var p,a,c;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: ({
    type: 'bullet'
  } as ListProps),
  render: ({
    type
  }) => <List type={type}>
      <List.Item>List item</List.Item>
      <List.Item>Super long list item Super long list item Super long list item Super long list item</List.Item>
      <List.Item>
        <Link label="Link item" />
      </List.Item>
    </List>
}`,...(c=(a=l.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var L,u,d;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: ({
    type: 'numeric'
  } as ListProps),
  render: ({
    type
  }) => <List type={type}>
      <List.Item>List item</List.Item>
      <List.Item>Super long list item Super long list item Super long list item Super long list item</List.Item>
      <List.Item>
        <Link label="Link item" />
      </List.Item>
    </List>
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var I,x,g;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: ({
    type: 'numeric'
  } as ListProps),
  render: ({
    type
  }) => <List type={type}>
      <List.Item>List item</List.Item>
      <List.Item>
        <Link label="Link item" />
      </List.Item>
      <List type="alphabetical">
        <List.Item>List item</List.Item>
        <List.Item>Super long list item Super long list item Super long list item Super long list item</List.Item>
        <List.Item>
          <Link label="Link item" />
        </List.Item>
      </List>
    </List>
}`,...(g=(x=m.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var y,b,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: ({
    type: 'bullet'
  } as ListProps),
  render: ({
    type
  }) => <List type={type}>
      <List.Item>
        <Link label="Link item" />
      </List.Item>
      <List.Item>
        <Link label="Link item" />
      </List.Item>
      <List.Item>
        <Link label="Link item" />
      </List.Item>
    </List>
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const O=["Default","Ordered","Mixed","LinkItems"];export{l as Default,o as LinkItems,m as Mixed,n as Ordered,O as __namedExportsOrder,E as default};
//# sourceMappingURL=List.stories-2b258b51.js.map
