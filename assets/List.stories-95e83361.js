import{j as e}from"./clsx-667af910.js";import{L as t}from"./List-4e041a03.js";import{L as s}from"./Link-4a59850a.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-117e9c75.js";const O={title:"Components/List",component:t,tags:["autodocs"],argTypes:{children:{control:{disable:!0}},type:{control:{type:"select",options:["ordered","unordered"]}}}},r={args:{type:"bullet"},render:({type:i})=>e.jsxs(t,{type:i,children:[e.jsx(t.Item,{children:"List item"}),e.jsx(t.Item,{children:"Super long list item Super long list item Super long list item Super long list item"}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})})]})},m={args:{type:"numeric"},render:({type:i})=>e.jsxs(t,{type:i,children:[e.jsx(t.Item,{children:"List item"}),e.jsx(t.Item,{children:"Super long list item Super long list item Super long list item Super long list item"}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})})]})},l={args:{type:"numeric"},render:({type:i})=>e.jsxs(t,{type:i,children:[e.jsx(t.Item,{children:"List item"}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})}),e.jsxs(t,{type:"alphabetical",children:[e.jsx(t.Item,{children:"List item"}),e.jsx(t.Item,{children:"Super long list item Super long list item Super long list item Super long list item"}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})})]})]})},n={args:{type:"bullet"},render:({type:i})=>e.jsxs(t,{type:i,children:[e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})})]})};var o,p,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(p=r.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var L,c,d;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(d=(c=m.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,I,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(I=l.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var x,j,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const D=["Default","Ordered","Mixed","LinkItems"];export{r as Default,n as LinkItems,l as Mixed,m as Ordered,D as __namedExportsOrder,O as default};
//# sourceMappingURL=List.stories-95e83361.js.map
