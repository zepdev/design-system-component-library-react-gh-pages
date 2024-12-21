import{j as l}from"./clsx-36b9529f.js";import{w as x,e as o,u as e,a as h,f as p}from"./index-5b16728d.js";import{D as f}from"./DropDown-6e88c562.js";import{S as B}from"./Spacing-3ed1191f.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";import"./getDistanceToBottom-7ac1525d.js";import"./Icon-388cc039.js";import"./tw-merge-1166cefb.js";import"./listbox-b26e582e.js";import"./calculate-active-index-fd3bc23a.js";import"./keyboard-17e5dc7a.js";import"./focus-management-fd8d9fed.js";import"./owner-86311e57.js";import"./form-a8bf782d.js";import"./hidden-2394f2e8.js";import"./open-closed-27d7b499.js";import"./bugs-8e007c11.js";import"./index-24fb42db.js";const a=[{id:1,name:"Navigation link"},{id:2,name:"Clickable action"},{id:3,name:"Archive"},{id:4,name:"Here is a really long text that should be truncated"},{id:5,name:"Duplicate"},{id:6,name:"License"},{id:7,name:"Move"},{id:8,name:"Sign out"}],J={title:"Components/DropDown Select",component:f,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}},readOnly:{control:{type:"boolean"}}},decorators:[s=>l.jsx(B,{className:"zep-w-[326px]",children:l.jsx(s,{})})]},r={args:{disabled:!1,readOnly:!1,items:a,label:"Dropdown",required:!1,notRequiredHint:"(optional)",className:"foo",state:"default",placeholder:"Auswählen (Hint)"},play:async({canvasElement:s,step:t})=>{const i=x(s),n=i.getByTestId("zep-drop-down-button");await t("Initial checks",async()=>{await o(n).toBeInTheDocument()}),await t("Select dropDown with keyboard",async()=>{await e.tab(),await o(n).toHaveFocus()}),await t("Open dropDown options with keyboard",async()=>{await e.keyboard("{arrowdown}"),await t("Check dropDown options",async()=>{a.forEach(v=>{o(i.getByText(v.name)).toBeInTheDocument()})})}),await t("Select dropDown first option with keyboard",async()=>{await e.keyboard("{arrowdown}"),await e.keyboard("{enter}"),await h(()=>{o(n).toHaveTextContent(a[1].name)})}),await t("Select dropDown second option with mouse",async()=>{await e.click(n),await e.click(i.getByText(a[2].name)),await o(n).toHaveTextContent(a[2].name)}),await t("Select dropDown third option with mouse",async()=>{await e.click(n),await e.click(i.getByText(a[3].name)),await o(n).toHaveTextContent(a[3].name)}),await t("Blur dropDown",async()=>{await e.click(n),await e.tab(),await o(n).not.toHaveFocus()})}},c={args:{disabled:!1,readOnly:!1,items:a,label:"Dropdown",required:!1,notRequiredHint:"(optional)",className:"foo",state:"default",placeholder:"Auswählen (Hint)"},play:async({canvasElement:s})=>{const t=x(s);await p.click(t.getByTestId("zep-drop-down-button")),await p.click(t.getByTitle(a[2].name));const i=t.getByTestId("zep-drop-down-button");await o(i).toHaveTextContent(a[2].name)}};var d,w,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    disabled: false,
    readOnly: false,
    items,
    label: 'Dropdown',
    required: false,
    notRequiredHint: '(optional)',
    className: 'foo',
    state: 'default',
    placeholder: 'Auswählen (Hint)'
  } as DropDownProps,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const comboboxButton = canvas.getByTestId('zep-drop-down-button');
    await step('Initial checks', async () => {
      await expect(comboboxButton).toBeInTheDocument();
    });
    await step('Select dropDown with keyboard', async () => {
      await userEvent.tab();
      await expect(comboboxButton).toHaveFocus();
    });
    await step('Open dropDown options with keyboard', async () => {
      await userEvent.keyboard('{arrowdown}');
      await step('Check dropDown options', async () => {
        items.forEach(item => {
          expect(canvas.getByText(item.name)).toBeInTheDocument();
        });
      });
    });
    await step('Select dropDown first option with keyboard', async () => {
      await userEvent.keyboard('{arrowdown}');
      await userEvent.keyboard('{enter}');
      await waitFor(() => {
        expect(comboboxButton).toHaveTextContent(items[1].name);
      });
    });
    await step('Select dropDown second option with mouse', async () => {
      await userEvent.click(comboboxButton);
      await userEvent.click(canvas.getByText(items[2].name));
      await expect(comboboxButton).toHaveTextContent(items[2].name);
    });
    await step('Select dropDown third option with mouse', async () => {
      await userEvent.click(comboboxButton);
      await userEvent.click(canvas.getByText(items[3].name));
      await expect(comboboxButton).toHaveTextContent(items[3].name);
    });
    await step('Blur dropDown', async () => {
      await userEvent.click(comboboxButton);
      await userEvent.tab();
      await expect(comboboxButton).not.toHaveFocus();
    });
  }
}`,...(m=(w=r.parameters)==null?void 0:w.docs)==null?void 0:m.source}}};var u,y,b;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: false,
    readOnly: false,
    items,
    label: 'Dropdown',
    required: false,
    notRequiredHint: '(optional)',
    className: 'foo',
    state: 'default',
    placeholder: 'Auswählen (Hint)'
  } as DropDownProps,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await fireEvent.click(canvas.getByTestId('zep-drop-down-button'));
    await fireEvent.click(canvas.getByTitle(items[2].name));
    const dropdownButton = canvas.getByTestId('zep-drop-down-button');
    await expect(dropdownButton).toHaveTextContent(items[2].name);
  }
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const K=["Default","SelectAnItem"];export{r as Default,c as SelectAnItem,K as __namedExportsOrder,J as default};
