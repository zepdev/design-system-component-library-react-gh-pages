import{j as e}from"./clsx-36b9529f.js";import{L as t}from"./List-703f3c82.js";import{L as s}from"./Link-0eb62a3d.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-371bc4d0.js";const O={title:"Components/List",component:t,tags:["autodocs"],argTypes:{children:{control:{disable:!0}},type:{control:{type:"select",options:["ordered","unordered"]}}}},n={args:{type:"bullet"},render:({type:i})=>e.jsxs(t,{type:i,children:[e.jsx(t.Item,{children:"List item"}),e.jsx(t.Item,{children:"Super long list item Super long list item Super long list item Super long list item"}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})})]})},r={args:{type:"numeric"},render:({type:i})=>e.jsxs(t,{type:i,children:[e.jsx(t.Item,{children:"List item"}),e.jsx(t.Item,{children:"Super long list item Super long list item Super long list item Super long list item"}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})})]})},m={args:{type:"numeric"},render:({type:i})=>e.jsxs(t,{type:i,children:[e.jsx(t.Item,{children:"List item"}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})}),e.jsxs(t,{type:"alphabetical",children:[e.jsx(t.Item,{children:"List item"}),e.jsx(t.Item,{children:"Super long list item Super long list item Super long list item Super long list item"}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})})]})]})},l={args:{type:"bullet"},render:({type:i})=>e.jsxs(t,{type:i,children:[e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})}),e.jsx(t.Item,{children:e.jsx(s,{label:"Link item"})})]})};var o,p,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: 'bullet'
  } as ListProps,
  render: ({
    type
  }) => <List type={type}>
      <List.Item>List item</List.Item>
      <List.Item>Super long list item Super long list item Super long list item Super long list item</List.Item>
      <List.Item>
        <Link label="Link item" />
      </List.Item>
    </List>
}`,...(a=(p=n.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var L,c,d;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'numeric'
  } as ListProps,
  render: ({
    type
  }) => <List type={type}>
      <List.Item>List item</List.Item>
      <List.Item>Super long list item Super long list item Super long list item Super long list item</List.Item>
      <List.Item>
        <Link label="Link item" />
      </List.Item>
    </List>
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,I,g;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'numeric'
  } as ListProps,
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
}`,...(g=(I=m.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var x,j,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'bullet'
  } as ListProps,
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
}`,...(S=(j=l.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const D=["Default","Ordered","Mixed","LinkItems"];export{n as Default,l as LinkItems,m as Mixed,r as Ordered,D as __namedExportsOrder,O as default};
