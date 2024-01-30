import{j as t,c as J}from"./clsx-667af910.js";import{f as ve}from"./focus-d7245c50.js";import{r as u,R as S}from"./index-37ba2b57.js";import{l as _,S as te,D as G,y as C,a as K,o as $,X as O,I as Te,s as ye,u as D,e as ze,b as v}from"./keyboard-c0eee377.js";import{c as xe,p as je,I as A,N as B,O as R,M as y,t as Ie}from"./hidden-6a4b5cec.js";import{w as we,u as Ee,e as Le}from"./index-ddcfe27d.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";function $e(){let e=u.useRef(!1);return _(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Re({onFocus:e}){let[a,n]=u.useState(!0),s=$e();return a?S.createElement(xe,{as:"button",type:"button",features:je.Focusable,onFocus:o=>{o.preventDefault();let l,c=50;function x(){if(c--<=0){l&&cancelAnimationFrame(l);return}if(e()){if(cancelAnimationFrame(l),!s.current)return;n(!1);return}l=requestAnimationFrame(x)}l=requestAnimationFrame(x)}}):null}const fe=u.createContext(null);function Se(){return{groups:new Map,get(e,a){var n;let s=this.groups.get(e);s||(s=new Map,this.groups.set(e,s));let o=(n=s.get(a))!=null?n:0;s.set(a,o+1);let l=Array.from(s.keys()).indexOf(a);function c(){let x=s.get(a);x>1?s.set(a,x-1):s.delete(a)}return[l,c]}}}function Ne({children:e}){let a=u.useRef(Se());return u.createElement(fe.Provider,{value:a},e)}function Pe(e){let a=u.useContext(fe);if(!a)throw new Error("You must wrap your component in a <StableCollection>");let n=Me(),[s,o]=a.current.get(e,n);return u.useEffect(()=>o,[]),s}function Me(){var e,a,n;let s=(n=(a=(e=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:e.ReactCurrentOwner)==null?void 0:a.current)!=null?n:null;if(!s)return Symbol();let o=[],l=s;for(;l;)o.push(l.index),l=l.return;return"$."+o.join(".")}var ke=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ke||{}),Ae=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Ae||{}),De=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(De||{});let _e={0(e,a){var n;let s=A(e.tabs,p=>p.current),o=A(e.panels,p=>p.current),l=s.filter(p=>{var g;return!((g=p.current)!=null&&g.hasAttribute("disabled"))}),c={...e,tabs:s,panels:o};if(a.index<0||a.index>s.length-1){let p=D(Math.sign(a.index-e.selectedIndex),{[-1]:()=>1,0:()=>D(Math.sign(a.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(l.length===0)return c;let g=D(p,{0:()=>s.indexOf(l[0]),1:()=>s.indexOf(l[l.length-1])});return{...c,selectedIndex:g===-1?e.selectedIndex:g}}let x=s.slice(0,a.index),z=[...s.slice(a.index),...x].find(p=>l.includes(p));if(!z)return c;let f=(n=s.indexOf(z))!=null?n:e.selectedIndex;return f===-1&&(f=e.selectedIndex),{...c,selectedIndex:f}},1(e,a){var n;if(e.tabs.includes(a.tab))return e;let s=e.tabs[e.selectedIndex],o=A([...e.tabs,a.tab],c=>c.current),l=(n=o.indexOf(s))!=null?n:e.selectedIndex;return l===-1&&(l=e.selectedIndex),{...e,tabs:o,selectedIndex:l}},2(e,a){return{...e,tabs:e.tabs.filter(n=>n!==a.tab)}},3(e,a){return e.panels.includes(a.panel)?e:{...e,panels:A([...e.panels,a.panel],n=>n.current)}},4(e,a){return{...e,panels:e.panels.filter(n=>n!==a.panel)}}},Q=u.createContext(null);Q.displayName="TabsDataContext";function N(e){let a=u.useContext(Q);if(a===null){let n=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,N),n}return a}let Z=u.createContext(null);Z.displayName="TabsActionsContext";function ee(e){let a=u.useContext(Z);if(a===null){let n=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ee),n}return a}function Ge(e,a){return D(a.type,_e,e,a)}let Ce=u.Fragment;function Oe(e,a){let{defaultIndex:n=0,vertical:s=!1,manual:o=!1,onChange:l,selectedIndex:c=null,...x}=e;const z=s?"vertical":"horizontal",f=o?"manual":"auto";let p=c!==null,g=C(a),[d,h]=u.useReducer(Ge,{selectedIndex:c??n,tabs:[],panels:[]}),m=u.useMemo(()=>({selectedIndex:d.selectedIndex}),[d.selectedIndex]),M=K(l||(()=>{})),k=K(d.tabs),T=u.useMemo(()=>({orientation:z,activation:f,...d}),[z,f,d]),P=$(b=>(h({type:1,tab:b}),()=>h({type:2,tab:b}))),w=$(b=>(h({type:3,panel:b}),()=>h({type:4,panel:b}))),E=$(b=>{L.current!==b&&M.current(b),p||h({type:0,index:b})}),L=K(p?e.selectedIndex:d.selectedIndex),X=u.useMemo(()=>({registerTab:P,registerPanel:w,change:E}),[]);_(()=>{h({type:0,index:c??n})},[c]),_(()=>{if(L.current===void 0||d.tabs.length<=0)return;let b=A(d.tabs,I=>I.current);b.some((I,i)=>d.tabs[i]!==I)&&E(b.indexOf(d.tabs[L.current]))});let Y={ref:g};return S.createElement(Ne,null,S.createElement(Z.Provider,{value:X},S.createElement(Q.Provider,{value:T},T.tabs.length<=0&&S.createElement(Re,{onFocus:()=>{var b,I;for(let i of k.current)if(((b=i.current)==null?void 0:b.tabIndex)===0)return(I=i.current)==null||I.focus(),!0;return!1}}),O({ourProps:Y,theirProps:x,slot:m,defaultTag:Ce,name:"Tabs"}))))}let Fe="div";function qe(e,a){let{orientation:n,selectedIndex:s}=N("Tab.List"),o=C(a);return O({ourProps:{ref:o,role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:s},defaultTag:Fe,name:"Tabs.List"})}let Be="button";function Ue(e,a){var n,s;let o=Te(),{id:l=`headlessui-tabs-tab-${o}`,...c}=e,{orientation:x,activation:z,selectedIndex:f,tabs:p,panels:g}=N("Tab"),d=ee("Tab"),h=N("Tab"),m=u.useRef(null),M=C(m,a);_(()=>d.registerTab(m),[d,m]);let k=Pe("tabs"),T=p.indexOf(m);T===-1&&(T=k);let P=T===f,w=$(i=>{var j;let q=i();if(q===B.Success&&z==="auto"){let ge=(j=ze(m))==null?void 0:j.activeElement,ae=h.tabs.findIndex(he=>he.current===ge);ae!==-1&&d.change(ae)}return q}),E=$(i=>{let j=p.map(q=>q.current).filter(Boolean);if(i.key===v.Space||i.key===v.Enter){i.preventDefault(),i.stopPropagation(),d.change(T);return}switch(i.key){case v.Home:case v.PageUp:return i.preventDefault(),i.stopPropagation(),w(()=>R(j,y.First));case v.End:case v.PageDown:return i.preventDefault(),i.stopPropagation(),w(()=>R(j,y.Last))}if(w(()=>D(x,{vertical(){return i.key===v.ArrowUp?R(j,y.Previous|y.WrapAround):i.key===v.ArrowDown?R(j,y.Next|y.WrapAround):B.Error},horizontal(){return i.key===v.ArrowLeft?R(j,y.Previous|y.WrapAround):i.key===v.ArrowRight?R(j,y.Next|y.WrapAround):B.Error}}))===B.Success)return i.preventDefault()}),L=u.useRef(!1),X=$(()=>{var i;L.current||(L.current=!0,(i=m.current)==null||i.focus({preventScroll:!0}),d.change(T),Ie(()=>{L.current=!1}))}),Y=$(i=>{i.preventDefault()}),b=u.useMemo(()=>({selected:P}),[P]),I={ref:M,onKeyDown:E,onMouseDown:Y,onClick:X,id:l,role:"tab",type:ye(e,m),"aria-controls":(s=(n=g[T])==null?void 0:n.current)==null?void 0:s.id,"aria-selected":P,tabIndex:P?0:-1};return O({ourProps:I,theirProps:c,slot:b,defaultTag:Be,name:"Tabs.Tab"})}let We="div";function He(e,a){let{selectedIndex:n}=N("Tab.Panels"),s=C(a),o=u.useMemo(()=>({selectedIndex:n}),[n]);return O({ourProps:{ref:s},theirProps:e,slot:o,defaultTag:We,name:"Tabs.Panels"})}let Ve="div",Xe=te.RenderStrategy|te.Static;function Ye(e,a){var n,s,o,l;let c=Te(),{id:x=`headlessui-tabs-panel-${c}`,tabIndex:z=0,...f}=e,{selectedIndex:p,tabs:g,panels:d}=N("Tab.Panel"),h=ee("Tab.Panel"),m=u.useRef(null),M=C(m,a);_(()=>h.registerPanel(m),[h,m]);let k=Pe("panels"),T=d.indexOf(m);T===-1&&(T=k);let P=T===p,w=u.useMemo(()=>({selected:P}),[P]),E={ref:M,id:x,role:"tabpanel","aria-labelledby":(s=(n=g[T])==null?void 0:n.current)==null?void 0:s.id,tabIndex:P?z:-1};return!P&&((o=f.unmount)==null||o)&&!((l=f.static)!=null&&l)?S.createElement(xe,{as:"span",...E}):O({ourProps:E,theirProps:f,slot:w,defaultTag:Ve,features:Xe,visible:P,name:"Tabs.Panel"})}let Ke=G(Ue),Je=G(Oe),Qe=G(qe),Ze=G(He),ea=G(Ye),F=Object.assign(Ke,{Group:Je,List:Qe,Panels:Ze,Panel:ea});const aa=({children:e})=>t.jsx(F.Group,{"data-testid":"zep-tab-group",as:"div",children:e}),r=({disabled:e,children:a})=>t.jsx(F,{className:"zep-group zep-flex zep-flex-col zep-justify-between zep-gap-0.5 zep-outline-none",disabled:e,"data-testid":"zep-tab",children:({selected:n})=>t.jsxs(t.Fragment,{children:[t.jsx("span",{className:J("zep-typography-bodyText zep-rounded-4 zep-px-1 zep-outline-none zep-ring-focus  group-focus-visible:zep-text-typography-dark-100 group-focus-visible:zep-ring",{"zep-text-typography-dark-100":n,"zep-text-typography-dark-70/70":!n,"zep-text-typography-neutral-dark-disabled/40":e}),children:a}),t.jsx("span",{className:J("zep-w-full",{"zep-h-0.25 zep-bg-primary-default":n,"zep-h-[1px] zep-bg-transparent group-hover:zep-bg-primary-default":!n&&!e})})]})}),ta=({children:e})=>t.jsxs(F.List,{className:"zep-relative zep-flex zep-w-full zep-flex-col zep-overflow-x-scroll zep-bg-greyscale-0 zep-pt-0.75 sm:zep-overflow-visible","data-testid":"zep-tab-list",children:[t.jsx("span",{className:"zep-absolute zep-bottom-[0] zep-flex zep-w-full zep-border-b-1 zep-border-solid zep-border-greyscale-400"}),t.jsx("div",{className:"zep-relative zep-flex zep-gap-0.5 zep-whitespace-nowrap",children:e})]}),na=({children:e})=>t.jsx(F.Panel,{className:J(ve,"zep-rounded-4"),"data-testid":"zep-tab-panel",children:e}),ra=({children:e})=>t.jsx(F.Panels,{className:"zep-pt-1","data-testid":"zep-tab-panels",children:e});r.Group=aa;r.List=ta;r.Panel=na;r.Panels=ra;try{r.displayName="Tab",r.__docgenInfo={description:"",displayName:"Tab",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const fa={title:"Components/Tabs",component:r,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},U={render:()=>t.jsxs(r.Group,{children:[t.jsxs(r.List,{children:[t.jsx(r,{children:"Tab 1"}),t.jsx(r,{children:"Tab 2"}),t.jsx(r,{children:"Tab 3"})]}),t.jsxs(r.Panels,{children:[t.jsx(r.Panel,{children:"Panel 1"}),t.jsx(r.Panel,{children:"Panel 2"}),t.jsx(r.Panel,{children:"Panel 3"})]})]})},W={render:()=>t.jsxs(r.Group,{children:[t.jsxs(r.List,{children:[t.jsx(r,{children:"Tab 1"}),t.jsx(r,{disabled:!0,children:"Tab 2"}),t.jsx(r,{children:"Tab 3"})]}),t.jsxs(r.Panels,{children:[t.jsx(r.Panel,{children:"Panel 1"}),t.jsx(r.Panel,{children:"Panel 2"}),t.jsx(r.Panel,{children:"Panel 3"})]})]})},H={render:()=>t.jsxs(r.Group,{children:[t.jsx("span",{}),t.jsxs(r.List,{children:[t.jsx(r,{children:"Short tab 1"}),t.jsx(r,{children:"Medium text tab 2"}),t.jsx(r,{children:"Long text for the great tab 3"})]}),t.jsxs(r.Panels,{children:[t.jsxs(r.Panel,{children:[t.jsx("h2",{className:"zep-text-3",children:"Panel 1 Title"}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]}),t.jsxs(r.Panel,{children:[t.jsx("h2",{className:"zep-text-3",children:"Panel 2 Title"}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]}),t.jsxs(r.Panel,{children:[t.jsx("h2",{className:"zep-text-3",children:"Panel 3 Title"}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]})]})]})},sa="zep-tab-panel",V={args:{},render:(e,a)=>t.jsxs(r.Group,{children:[t.jsxs(r.List,{children:[t.jsx(r,{children:"Tab 1"}),t.jsx(r,{children:"Tab 2"}),t.jsx(r,{children:"Tab 3"})]}),t.jsxs(r.Panels,{children:[t.jsx(r.Panel,{children:"Panel 1"}),t.jsx(r.Panel,{children:"Panel 2"}),t.jsx(r.Panel,{children:"Panel 3"})]})]}),play:async({canvasElement:e})=>{const a=we(e);await Ee.click(a.getByText("Tab 2")),await Le(a.getByTestId(sa)).toHaveTextContent("Panel 2")}};var ne,re,se;U.parameters={...U.parameters,docs:{...(ne=U.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(re=U.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,ie,oe;W.parameters={...W.parameters,docs:{...(le=W.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(oe=(ie=W.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ue,ce,de;H.parameters={...H.parameters,docs:{...(ue=H.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(de=(ce=H.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,be,me;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: ({} as TabProps),
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
}`,...(me=(be=V.parameters)==null?void 0:be.docs)==null?void 0:me.source}}};const Pa=["Default","TabDisabled","TabVariableLength","SwitchPanel"];export{U as Default,V as SwitchPanel,W as TabDisabled,H as TabVariableLength,Pa as __namedExportsOrder,fa as default};
//# sourceMappingURL=Tabs.stories-128fd145.js.map
