import{j as t,c as ae}from"./clsx-36b9529f.js";import{f as ke}from"./focus-d7245c50.js";import{n as q,A as le,Y as O,s as W,y as B,c as V,a as $,K as U,$ as ge,b as Ge,w as Ae,V as he,d as Ce,u as _,e as Ne,f as v,t as De}from"./use-resolve-button-type-b3b0b2a7.js";import{r as c,R as k}from"./index-8b3efc3f.js";import{f as ve,s as Fe}from"./hidden-c16e1a7c.js";import{G as M,A as K,v as R,T as z}from"./focus-management-0ff5d8df.js";import{w as Me,u as _e,e as qe}from"./index-2c24bede.js";import"./_commonjsHelpers-de833af9.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";function Oe(){let e=c.useRef(!1);return q(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Be({onFocus:e}){let[a,r]=c.useState(!0),s=Oe();return a?k.createElement(ve,{as:"button",type:"button",features:Fe.Focusable,onFocus:o=>{o.preventDefault();let l,i=50;function d(){if(i--<=0){l&&cancelAnimationFrame(l);return}if(e()){if(cancelAnimationFrame(l),!s.current)return;r(!1);return}l=requestAnimationFrame(d)}l=requestAnimationFrame(d)}}):null}const ze=c.createContext(null);function Ve(){return{groups:new Map,get(e,a){var r;let s=this.groups.get(e);s||(s=new Map,this.groups.set(e,s));let o=(r=s.get(a))!=null?r:0;s.set(a,o+1);let l=Array.from(s.keys()).indexOf(a);function i(){let d=s.get(a);d>1?s.set(a,d-1):s.delete(a)}return[l,i]}}}function Ue({children:e}){let a=c.useRef(Ve());return c.createElement(ze.Provider,{value:a},e)}function je(e){let a=c.useContext(ze);if(!a)throw new Error("You must wrap your component in a <StableCollection>");let r=c.useId(),[s,o]=a.current.get(e,r);return c.useEffect(()=>o,[]),s}var He=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(He||{}),We=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(We||{}),Ke=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(Ke||{});let Ye={0(e,a){var r;let s=M(e.tabs,p=>p.current),o=M(e.panels,p=>p.current),l=s.filter(p=>{var P;return!((P=p.current)!=null&&P.hasAttribute("disabled"))}),i={...e,tabs:s,panels:o};if(a.index<0||a.index>s.length-1){let p=_(Math.sign(a.index-e.selectedIndex),{[-1]:()=>1,0:()=>_(Math.sign(a.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(l.length===0)return i;let P=_(p,{0:()=>s.indexOf(l[0]),1:()=>s.indexOf(l[l.length-1])});return{...i,selectedIndex:P===-1?e.selectedIndex:P}}let d=s.slice(0,a.index),j=[...s.slice(a.index),...d].find(p=>l.includes(p));if(!j)return i;let f=(r=s.indexOf(j))!=null?r:e.selectedIndex;return f===-1&&(f=e.selectedIndex),{...i,selectedIndex:f}},1(e,a){if(e.tabs.includes(a.tab))return e;let r=e.tabs[e.selectedIndex],s=M([...e.tabs,a.tab],l=>l.current),o=e.selectedIndex;return e.info.current.isControlled||(o=s.indexOf(r),o===-1&&(o=e.selectedIndex)),{...e,tabs:s,selectedIndex:o}},2(e,a){return{...e,tabs:e.tabs.filter(r=>r!==a.tab)}},3(e,a){return e.panels.includes(a.panel)?e:{...e,panels:M([...e.panels,a.panel],r=>r.current)}},4(e,a){return{...e,panels:e.panels.filter(r=>r!==a.panel)}}},te=c.createContext(null);te.displayName="TabsDataContext";function G(e){let a=c.useContext(te);if(a===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,G),r}return a}let ne=c.createContext(null);ne.displayName="TabsActionsContext";function re(e){let a=c.useContext(ne);if(a===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,re),r}return a}function Je(e,a){return _(a.type,Ye,e,a)}let Xe="div";function Qe(e,a){let{defaultIndex:r=0,vertical:s=!1,manual:o=!1,onChange:l,selectedIndex:i=null,...d}=e;const j=s?"vertical":"horizontal",f=o?"manual":"auto";let p=i!==null,P=W({isControlled:p}),E=B(a),[T,b]=c.useReducer(Je,{info:P,selectedIndex:i??r,tabs:[],panels:[]}),A=V({selectedIndex:T.selectedIndex}),C=W(l||(()=>{})),I=W(T.tabs),x=c.useMemo(()=>({orientation:j,activation:f,...T}),[j,f,T]),N=$(m=>(b({type:1,tab:m}),()=>b({type:2,tab:m}))),D=$(m=>(b({type:3,panel:m}),()=>b({type:4,panel:m}))),g=$(m=>{h.current!==m&&C.current(m),p||b({type:0,index:m})}),h=W(p?e.selectedIndex:T.selectedIndex),L=c.useMemo(()=>({registerTab:N,registerPanel:D,change:g}),[]);q(()=>{b({type:0,index:i??r})},[i]),q(()=>{if(h.current===void 0||T.tabs.length<=0)return;let m=M(T.tabs,w=>w.current);m.some((w,S)=>T.tabs[S]!==w)&&g(m.indexOf(T.tabs[h.current]))});let Z={ref:E},F=U();return k.createElement(Ue,null,k.createElement(ne.Provider,{value:L},k.createElement(te.Provider,{value:x},x.tabs.length<=0&&k.createElement(Be,{onFocus:()=>{var m,w;for(let S of I.current)if(((m=S.current)==null?void 0:m.tabIndex)===0)return(w=S.current)==null||w.focus(),!0;return!1}}),F({ourProps:Z,theirProps:d,slot:A,defaultTag:Xe,name:"Tabs"}))))}let Ze="div";function ea(e,a){let{orientation:r,selectedIndex:s}=G("Tab.List"),o=B(a),l=V({selectedIndex:s}),i=e,d={ref:o,role:"tablist","aria-orientation":r};return U()({ourProps:d,theirProps:i,slot:l,defaultTag:Ze,name:"Tabs.List"})}let aa="button";function ta(e,a){var r,s;let o=c.useId(),{id:l=`headlessui-tabs-tab-${o}`,disabled:i=!1,autoFocus:d=!1,...j}=e,{orientation:f,activation:p,selectedIndex:P,tabs:E,panels:T}=G("Tab"),b=re("Tab"),A=G("Tab"),[C,I]=c.useState(null),x=c.useRef(null),N=B(x,a,I);q(()=>b.registerTab(x),[b,x]);let D=je("tabs"),g=E.indexOf(x);g===-1&&(g=D);let h=g===P,L=$(u=>{let y=u();if(y===K.Success&&p==="auto"){let ee=Ne(x.current),se=A.tabs.findIndex(Re=>Re.current===ee);se!==-1&&b.change(se)}return y}),Z=$(u=>{let y=E.map(ee=>ee.current).filter(Boolean);if(u.key===v.Space||u.key===v.Enter){u.preventDefault(),u.stopPropagation(),b.change(g);return}switch(u.key){case v.Home:case v.PageUp:return u.preventDefault(),u.stopPropagation(),L(()=>R(y,z.First));case v.End:case v.PageDown:return u.preventDefault(),u.stopPropagation(),L(()=>R(y,z.Last))}if(L(()=>_(f,{vertical(){return u.key===v.ArrowUp?R(y,z.Previous|z.WrapAround):u.key===v.ArrowDown?R(y,z.Next|z.WrapAround):K.Error},horizontal(){return u.key===v.ArrowLeft?R(y,z.Previous|z.WrapAround):u.key===v.ArrowRight?R(y,z.Next|z.WrapAround):K.Error}}))===K.Success)return u.preventDefault()}),F=c.useRef(!1),m=$(()=>{var u;F.current||(F.current=!0,(u=x.current)==null||u.focus({preventScroll:!0}),b.change(g),De(()=>{F.current=!1}))}),w=$(u=>{u.preventDefault()}),{isFocusVisible:S,focusProps:ye}=ge({autoFocus:d}),{isHovered:Ie,hoverProps:we}=Ge({isDisabled:i}),{pressed:Le,pressProps:$e}=Ae({disabled:i}),Ee=V({selected:h,hover:Ie,active:Le,focus:S,autofocus:d,disabled:i}),Se=he({ref:N,onKeyDown:Z,onMouseDown:w,onClick:m,id:l,role:"tab",type:Ce(e,C),"aria-controls":(s=(r=T[g])==null?void 0:r.current)==null?void 0:s.id,"aria-selected":h,tabIndex:h?0:-1,disabled:i||void 0,autoFocus:d},ye,we,$e);return U()({ourProps:Se,theirProps:j,slot:Ee,defaultTag:aa,name:"Tabs.Tab"})}let na="div";function ra(e,a){let{selectedIndex:r}=G("Tab.Panels"),s=B(a),o=V({selectedIndex:r}),l=e,i={ref:s};return U()({ourProps:i,theirProps:l,slot:o,defaultTag:na,name:"Tabs.Panels"})}let sa="div",la=le.RenderStrategy|le.Static;function ia(e,a){var r,s,o,l;let i=c.useId(),{id:d=`headlessui-tabs-panel-${i}`,tabIndex:j=0,...f}=e,{selectedIndex:p,tabs:P,panels:E}=G("Tab.Panel"),T=re("Tab.Panel"),b=c.useRef(null),A=B(b,a);q(()=>T.registerPanel(b),[T,b]);let C=je("panels"),I=E.indexOf(b);I===-1&&(I=C);let x=I===p,{isFocusVisible:N,focusProps:D}=ge(),g=V({selected:x,focus:N}),h=he({ref:A,id:d,role:"tabpanel","aria-labelledby":(s=(r=P[I])==null?void 0:r.current)==null?void 0:s.id,tabIndex:x?j:-1},D),L=U();return!x&&((o=f.unmount)==null||o)&&!((l=f.static)!=null&&l)?k.createElement(ve,{"aria-hidden":"true",...h}):L({ourProps:h,theirProps:f,slot:g,defaultTag:sa,features:la,visible:x,name:"Tabs.Panel"})}let oa=O(ta),ua=O(Qe),ca=O(ea),da=O(ra),pa=O(ia),H=Object.assign(oa,{Group:ua,List:ca,Panels:da,Panel:pa});const ba=({children:e})=>t.jsx(H.Group,{"data-testid":"zep-tab-group",as:"div",children:e}),n=({disabled:e,children:a})=>t.jsx(H,{className:"zep-group zep-flex zep-flex-col zep-justify-between zep-gap-0.5 zep-outline-none",disabled:e,"data-testid":"zep-tab",children:({selected:r})=>t.jsxs(t.Fragment,{children:[t.jsx("span",{className:ae("zep-typography-bodyText zep-rounded-4 zep-px-1 zep-outline-none zep-ring-focus  group-focus-visible:zep-text-typography-dark-100 group-focus-visible:zep-ring",{"zep-text-typography-dark-100":r,"zep-text-typography-dark-70/70":!r,"zep-text-typography-neutral-dark-disabled/40":e}),children:a}),t.jsx("span",{className:ae("zep-w-full",{"zep-h-0.25 zep-bg-primary-default":r,"zep-h-[1px] zep-bg-transparent group-hover:zep-bg-primary-default":!r&&!e})})]})}),ma=({children:e})=>t.jsxs(H.List,{className:"zep-relative zep-flex zep-w-full zep-flex-col zep-overflow-x-scroll zep-bg-greyscale-0 zep-pt-0.75 sm:zep-overflow-visible","data-testid":"zep-tab-list",children:[t.jsx("span",{className:"zep-absolute zep-bottom-[0] zep-flex zep-w-full zep-border-b-1 zep-border-solid zep-border-greyscale-400"}),t.jsx("div",{className:"zep-relative zep-flex zep-gap-0.5 zep-whitespace-nowrap",children:e})]}),Ta=({children:e})=>t.jsx(H.Panel,{className:ae(ke,"zep-rounded-4"),"data-testid":"zep-tab-panel",children:e}),xa=({children:e})=>t.jsx(H.Panels,{className:"zep-pt-1","data-testid":"zep-tab-panels",children:e});n.Group=ba;n.List=ma;n.Panel=Ta;n.Panels=xa;try{n.displayName="Tab",n.__docgenInfo={description:"",displayName:"Tab",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const Ea={title:"Components/Tabs",component:n,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},Y={render:()=>t.jsxs(n.Group,{children:[t.jsxs(n.List,{children:[t.jsx(n,{children:"Tab 1"}),t.jsx(n,{children:"Tab 2"}),t.jsx(n,{children:"Tab 3"})]}),t.jsxs(n.Panels,{children:[t.jsx(n.Panel,{children:"Panel 1"}),t.jsx(n.Panel,{children:"Panel 2"}),t.jsx(n.Panel,{children:"Panel 3"})]})]})},J={render:()=>t.jsxs(n.Group,{children:[t.jsxs(n.List,{children:[t.jsx(n,{children:"Tab 1"}),t.jsx(n,{disabled:!0,children:"Tab 2"}),t.jsx(n,{children:"Tab 3"})]}),t.jsxs(n.Panels,{children:[t.jsx(n.Panel,{children:"Panel 1"}),t.jsx(n.Panel,{children:"Panel 2"}),t.jsx(n.Panel,{children:"Panel 3"})]})]})},X={render:()=>t.jsxs(n.Group,{children:[t.jsx("span",{}),t.jsxs(n.List,{children:[t.jsx(n,{children:"Short tab 1"}),t.jsx(n,{children:"Medium text tab 2"}),t.jsx(n,{children:"Long text for the great tab 3"})]}),t.jsxs(n.Panels,{children:[t.jsxs(n.Panel,{children:[t.jsx("h2",{className:"zep-text-3",children:"Panel 1 Title"}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]}),t.jsxs(n.Panel,{children:[t.jsx("h2",{className:"zep-text-3",children:"Panel 2 Title"}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]}),t.jsxs(n.Panel,{children:[t.jsx("h2",{className:"zep-text-3",children:"Panel 3 Title"}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]})]})]})},fa="zep-tab-panel",Q={args:{},render:(e,a)=>t.jsxs(n.Group,{children:[t.jsxs(n.List,{children:[t.jsx(n,{children:"Tab 1"}),t.jsx(n,{children:"Tab 2"}),t.jsx(n,{children:"Tab 3"})]}),t.jsxs(n.Panels,{children:[t.jsx(n.Panel,{children:"Panel 1"}),t.jsx(n.Panel,{children:"Panel 2"}),t.jsx(n.Panel,{children:"Panel 3"})]})]}),play:async({canvasElement:e})=>{const a=Me(e);await _e.click(a.getByText("Tab 2")),await qe(a.getByTestId(fa)).toHaveTextContent("Panel 2")}};var ie,oe,ue;Y.parameters={...Y.parameters,docs:{...(ie=Y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <Tab.Group>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Panel 1</Tab.Panel>
        <Tab.Panel>Panel 2</Tab.Panel>
        <Tab.Panel>Panel 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
}`,...(ue=(oe=Y.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ce,de,pe;J.parameters={...J.parameters,docs:{...(ce=J.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <Tab.Group>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab disabled>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Panel 1</Tab.Panel>
        <Tab.Panel>Panel 2</Tab.Panel>
        <Tab.Panel>Panel 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
}`,...(pe=(de=J.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var be,me,Te;X.parameters={...X.parameters,docs:{...(be=X.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <Tab.Group>
      <span></span>
      <Tab.List>
        <Tab>Short tab 1</Tab>
        <Tab>Medium text tab 2</Tab>
        <Tab>Long text for the great tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <h2 className="zep-text-3">Panel 1 Title</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa
          impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur
          nesciunt deserunt in?
        </Tab.Panel>
        <Tab.Panel>
          <h2 className="zep-text-3">Panel 2 Title</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa
          impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur
          nesciunt deserunt in?
        </Tab.Panel>
        <Tab.Panel>
          <h2 className="zep-text-3">Panel 3 Title</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa
          impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur
          nesciunt deserunt in?
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
}`,...(Te=(me=X.parameters)==null?void 0:me.docs)==null?void 0:Te.source}}};var xe,fe,Pe;Q.parameters={...Q.parameters,docs:{...(xe=Q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {} as TabProps,
  render: (args, context) => {
    return <Tab.Group>
        <Tab.List>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Panel 1</Tab.Panel>
          <Tab.Panel>Panel 2</Tab.Panel>
          <Tab.Panel>Panel 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Tab 2'));
    await expect(canvas.getByTestId(testTabPanelItem)).toHaveTextContent('Panel 2');
  }
}`,...(Pe=(fe=Q.parameters)==null?void 0:fe.docs)==null?void 0:Pe.source}}};const Sa=["Default","TabDisabled","TabVariableLength","SwitchPanel"];export{Y as Default,Q as SwitchPanel,J as TabDisabled,X as TabVariableLength,Sa as __namedExportsOrder,Ea as default};
