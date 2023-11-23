import{j as t,c as ae}from"./clsx-667af910.js";import{r as o,R}from"./index-37ba2b57.js";import{l as F,S as le,D as q,y as B,a as ee,o as N,X as U,I as he,s as Ie,u as O,e as _e,b as y}from"./keyboard-c0eee377.js";import{c as Pe,p as we,I as G,N as V,O as $,M as z,t as Ee}from"./hidden-6a4b5cec.js";import{f as Le}from"./focus-d7245c50.js";import{w as Ne,u as $e,e as Re}from"./index-6ac9fa72.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";function Se(){let e=o.useRef(!1);return F(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Me({onFocus:e}){let[a,n]=o.useState(!0),r=Se();return a?R.createElement(Pe,{as:"button",type:"button",features:we.Focusable,onFocus:i=>{i.preventDefault();let s,c=50;function f(){if(c--<=0){s&&cancelAnimationFrame(s);return}if(e()){if(cancelAnimationFrame(s),!r.current)return;n(!1);return}s=requestAnimationFrame(f)}s=requestAnimationFrame(f)}}):null}const ve=o.createContext(null);function ke(){return{groups:new Map,get(e,a){var n;let r=this.groups.get(e);r||(r=new Map,this.groups.set(e,r));let i=(n=r.get(a))!=null?n:0;r.set(a,i+1);let s=Array.from(r.keys()).indexOf(a);function c(){let f=r.get(a);f>1?r.set(a,f-1):r.delete(a)}return[s,c]}}}function Ae({children:e}){let a=o.useRef(ke());return o.createElement(ve.Provider,{value:a},e)}function ye(e){let a=o.useContext(ve);if(!a)throw new Error("You must wrap your component in a <StableCollection>");let n=De(),[r,i]=a.current.get(e,n);return o.useEffect(()=>i,[]),r}function De(){var e,a,n;let r=(n=(a=(e=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:e.ReactCurrentOwner)==null?void 0:a.current)!=null?n:null;if(!r)return Symbol();let i=[],s=r;for(;s;)i.push(s.index),s=s.return;return"$."+i.join(".")}var Ce=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Ce||{}),Ge=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Ge||{}),Oe=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(Oe||{});let Fe={0(e,a){var n;let r=G(e.tabs,d=>d.current),i=G(e.panels,d=>d.current),s=r.filter(d=>{var P;return!((P=d.current)!=null&&P.hasAttribute("disabled"))}),c={...e,tabs:r,panels:i};if(a.index<0||a.index>r.length-1){let d=O(Math.sign(a.index-e.selectedIndex),{[-1]:()=>1,0:()=>O(Math.sign(a.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(s.length===0)return c;let P=O(d,{0:()=>r.indexOf(s[0]),1:()=>r.indexOf(s[s.length-1])});return{...c,selectedIndex:P===-1?e.selectedIndex:P}}let f=r.slice(0,a.index),j=[...r.slice(a.index),...f].find(d=>s.includes(d));if(!j)return c;let g=(n=r.indexOf(j))!=null?n:e.selectedIndex;return g===-1&&(g=e.selectedIndex),{...c,selectedIndex:g}},1(e,a){var n;if(e.tabs.includes(a.tab))return e;let r=e.tabs[e.selectedIndex],i=G([...e.tabs,a.tab],c=>c.current),s=(n=i.indexOf(r))!=null?n:e.selectedIndex;return s===-1&&(s=e.selectedIndex),{...e,tabs:i,selectedIndex:s}},2(e,a){return{...e,tabs:e.tabs.filter(n=>n!==a.tab)}},3(e,a){return e.panels.includes(a.panel)?e:{...e,panels:G([...e.panels,a.panel],n=>n.current)}},4(e,a){return{...e,panels:e.panels.filter(n=>n!==a.panel)}}},te=o.createContext(null);te.displayName="TabsDataContext";function S(e){let a=o.useContext(te);if(a===null){let n=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,S),n}return a}let ne=o.createContext(null);ne.displayName="TabsActionsContext";function re(e){let a=o.useContext(ne);if(a===null){let n=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,re),n}return a}function qe(e,a){return O(a.type,Fe,e,a)}let Be=o.Fragment;function Ue(e,a){let{defaultIndex:n=0,vertical:r=!1,manual:i=!1,onChange:s,selectedIndex:c=null,...f}=e;const j=r?"vertical":"horizontal",g=i?"manual":"auto";let d=c!==null,P=B(a),[u,v]=o.useReducer(qe,{selectedIndex:c??n,tabs:[],panels:[]}),m=o.useMemo(()=>({selectedIndex:u.selectedIndex}),[u.selectedIndex]),D=ee(s||(()=>{})),C=ee(u.tabs),T=o.useMemo(()=>({orientation:j,activation:g,...u}),[j,g,u]),h=N(p=>(v({type:1,tab:p}),()=>v({type:2,tab:p}))),w=N(p=>(v({type:3,panel:p}),()=>v({type:4,panel:p}))),E=N(p=>{L.current!==p&&D.current(p),d||v({type:0,index:p})}),L=ee(d?e.selectedIndex:u.selectedIndex),Q=o.useMemo(()=>({registerTab:h,registerPanel:w,change:E}),[]);F(()=>{v({type:0,index:c??n})},[c]),F(()=>{if(L.current===void 0||u.tabs.length<=0)return;let p=G(u.tabs,_=>_.current);p.some((_,l)=>u.tabs[l]!==_)&&E(p.indexOf(u.tabs[L.current]))});let Z={ref:P};return R.createElement(Ae,null,R.createElement(ne.Provider,{value:Q},R.createElement(te.Provider,{value:T},T.tabs.length<=0&&R.createElement(Me,{onFocus:()=>{var p,_;for(let l of C.current)if(((p=l.current)==null?void 0:p.tabIndex)===0)return(_=l.current)==null||_.focus(),!0;return!1}}),U({ourProps:Z,theirProps:f,slot:m,defaultTag:Be,name:"Tabs"}))))}let We="div";function He(e,a){let{orientation:n,selectedIndex:r}=S("Tab.List"),i=B(a);return U({ourProps:{ref:i,role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:r},defaultTag:We,name:"Tabs.List"})}let Ve="button";function Xe(e,a){var n,r;let i=he(),{id:s=`headlessui-tabs-tab-${i}`,...c}=e,{orientation:f,activation:j,selectedIndex:g,tabs:d,panels:P}=S("Tab"),u=re("Tab"),v=S("Tab"),m=o.useRef(null),D=B(m,a);F(()=>u.registerTab(m),[u,m]);let C=ye("tabs"),T=d.indexOf(m);T===-1&&(T=C);let h=T===g,w=N(l=>{var I;let H=l();if(H===V.Success&&j==="auto"){let ze=(I=_e(m))==null?void 0:I.activeElement,se=v.tabs.findIndex(je=>je.current===ze);se!==-1&&u.change(se)}return H}),E=N(l=>{let I=d.map(H=>H.current).filter(Boolean);if(l.key===y.Space||l.key===y.Enter){l.preventDefault(),l.stopPropagation(),u.change(T);return}switch(l.key){case y.Home:case y.PageUp:return l.preventDefault(),l.stopPropagation(),w(()=>$(I,z.First));case y.End:case y.PageDown:return l.preventDefault(),l.stopPropagation(),w(()=>$(I,z.Last))}if(w(()=>O(f,{vertical(){return l.key===y.ArrowUp?$(I,z.Previous|z.WrapAround):l.key===y.ArrowDown?$(I,z.Next|z.WrapAround):V.Error},horizontal(){return l.key===y.ArrowLeft?$(I,z.Previous|z.WrapAround):l.key===y.ArrowRight?$(I,z.Next|z.WrapAround):V.Error}}))===V.Success)return l.preventDefault()}),L=o.useRef(!1),Q=N(()=>{var l;L.current||(L.current=!0,(l=m.current)==null||l.focus({preventScroll:!0}),u.change(T),Ee(()=>{L.current=!1}))}),Z=N(l=>{l.preventDefault()}),p=o.useMemo(()=>({selected:h}),[h]),_={ref:D,onKeyDown:E,onMouseDown:Z,onClick:Q,id:s,role:"tab",type:Ie(e,m),"aria-controls":(r=(n=P[T])==null?void 0:n.current)==null?void 0:r.id,"aria-selected":h,tabIndex:h?0:-1};return U({ourProps:_,theirProps:c,slot:p,defaultTag:Ve,name:"Tabs.Tab"})}let Ye="div";function Ke(e,a){let{selectedIndex:n}=S("Tab.Panels"),r=B(a),i=o.useMemo(()=>({selectedIndex:n}),[n]);return U({ourProps:{ref:r},theirProps:e,slot:i,defaultTag:Ye,name:"Tabs.Panels"})}let Je="div",Qe=le.RenderStrategy|le.Static;function Ze(e,a){var n,r,i,s;let c=he(),{id:f=`headlessui-tabs-panel-${c}`,tabIndex:j=0,...g}=e,{selectedIndex:d,tabs:P,panels:u}=S("Tab.Panel"),v=re("Tab.Panel"),m=o.useRef(null),D=B(m,a);F(()=>v.registerPanel(m),[v,m]);let C=ye("panels"),T=u.indexOf(m);T===-1&&(T=C);let h=T===d,w=o.useMemo(()=>({selected:h}),[h]),E={ref:D,id:f,role:"tabpanel","aria-labelledby":(r=(n=P[T])==null?void 0:n.current)==null?void 0:r.id,tabIndex:h?j:-1};return!h&&((i=g.unmount)==null||i)&&!((s=g.static)!=null&&s)?R.createElement(Pe,{as:"span",...E}):U({ourProps:E,theirProps:g,slot:w,defaultTag:Je,features:Qe,visible:h,name:"Tabs.Panel"})}let ea=q(Xe),aa=q(Ue),ta=q(He),na=q(Ke),ra=q(Ze),W=Object.assign(ea,{Group:aa,List:ta,Panels:na,Panel:ra});const b=({disabled:e,children:a})=>t.jsx(W,{className:"zep-group zep-flex zep-flex-col zep-justify-between zep-gap-0.5 zep-outline-none",disabled:e,"data-testid":"zep-tab",children:({selected:n})=>t.jsxs(t.Fragment,{children:[t.jsx("span",{className:ae("zep-typography-bodyText zep-rounded-4 zep-px-1 zep-outline-none zep-ring-focus  group-focus-visible:zep-text-typography-dark-100 group-focus-visible:zep-ring",{"zep-text-typography-dark-100":n,"zep-text-typography-dark-70/70":!n,"zep-text-typography-neutral-dark-disabled/40":e}),children:a}),t.jsx("span",{className:ae("zep-w-full",{"zep-h-0.25 zep-bg-primary-default":n,"zep-h-[1px] zep-bg-transparent group-hover:zep-bg-primary-default":!n&&!e})})]})});try{b.displayName="Tab",b.__docgenInfo={description:"",displayName:"Tab",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const M=({children:e})=>t.jsx(W.Group,{"data-testid":"zep-tab-group",as:"div",children:e});try{M.displayName="TabGroup",M.__docgenInfo={description:"",displayName:"TabGroup",props:{}}}catch{}const k=({children:e})=>t.jsxs(W.List,{className:"zep-relative zep-flex zep-w-full zep-flex-col zep-overflow-x-scroll zep-bg-greyscale-0 zep-pt-0.75 sm:zep-overflow-visible","data-testid":"zep-tab-list",children:[t.jsx("span",{className:"zep-absolute zep-bottom-[0] zep-flex zep-w-full zep-border-b-1 zep-border-solid zep-border-greyscale-400"}),t.jsx("div",{className:"zep-relative zep-flex zep-gap-0.5 zep-whitespace-nowrap",children:e})]});try{k.displayName="TabList",k.__docgenInfo={description:"",displayName:"TabList",props:{}}}catch{}const x=({children:e})=>t.jsx(W.Panel,{className:ae(Le,"zep-rounded-4"),"data-testid":"zep-tab-panel",children:e});try{x.displayName="TabPanel",x.__docgenInfo={description:"",displayName:"TabPanel",props:{}}}catch{}const A=({children:e})=>t.jsx(W.Panels,{className:"zep-pt-1","data-testid":"zep-tab-panels",children:e});try{A.displayName="TabPanels",A.__docgenInfo={description:"",displayName:"TabPanels",props:{}}}catch{}const fa={title:"Components/Tabs",component:b,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},X={render:()=>t.jsxs(M,{children:[t.jsxs(k,{children:[t.jsx(b,{children:"Tab 1"}),t.jsx(b,{children:"Tab 2"}),t.jsx(b,{children:"Tab 3"})]}),t.jsxs(A,{children:[t.jsx(x,{children:"Panel 1"}),t.jsx(x,{children:"Panel 2"}),t.jsx(x,{children:"Panel 3"})]})]})},Y={render:()=>t.jsxs(M,{children:[t.jsxs(k,{children:[t.jsx(b,{children:"Tab 1"}),t.jsx(b,{disabled:!0,children:"Tab 2"}),t.jsx(b,{children:"Tab 3"})]}),t.jsxs(A,{children:[t.jsx(x,{children:"Panel 1"}),t.jsx(x,{children:"Panel 2"}),t.jsx(x,{children:"Panel 3"})]})]})},K={render:()=>t.jsxs(M,{children:[t.jsx("span",{}),t.jsxs(k,{children:[t.jsx(b,{children:"Short tab 1"}),t.jsx(b,{children:"Medium text tab 2"}),t.jsx(b,{children:"Long text for the great tab 3"})]}),t.jsxs(A,{children:[t.jsxs(x,{children:[t.jsx("h2",{className:"zep-text-3",children:"Panel 1 Title"}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]}),t.jsxs(x,{children:[t.jsx("h2",{className:"zep-text-3",children:"Panel 2 Title"}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]}),t.jsxs(x,{children:[t.jsx("h2",{className:"zep-text-3",children:"Panel 3 Title"}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]})]})]})},sa="zep-tab-panel",J={args:{},render:(e,a)=>t.jsxs(M,{children:[t.jsxs(k,{children:[t.jsx(b,{children:"Tab 1"}),t.jsx(b,{children:"Tab 2"}),t.jsx(b,{children:"Tab 3"})]}),t.jsxs(A,{children:[t.jsx(x,{children:"Panel 1"}),t.jsx(x,{children:"Panel 2"}),t.jsx(x,{children:"Panel 3"})]})]}),play:async({canvasElement:e})=>{const a=Ne(e);await $e.click(a.getByText("Tab 2")),await Re(a.getByTestId(sa)).toHaveTextContent("Panel 2")}};var ie,oe,ce;X.parameters={...X.parameters,docs:{...(ie=X.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <TabGroup>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Panel 1</TabPanel>
        <TabPanel>Panel 2</TabPanel>
        <TabPanel>Panel 3</TabPanel>
      </TabPanels>
    </TabGroup>
}`,...(ce=(oe=X.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var ue,de,pe;Y.parameters={...Y.parameters,docs:{...(ue=Y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <TabGroup>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab disabled>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Panel 1</TabPanel>
        <TabPanel>Panel 2</TabPanel>
        <TabPanel>Panel 3</TabPanel>
      </TabPanels>
    </TabGroup>
}`,...(pe=(de=Y.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var be,me,Te;K.parameters={...K.parameters,docs:{...(be=K.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <TabGroup>
      <span></span>
      <TabList>
        <Tab>Short tab 1</Tab>
        <Tab>Medium text tab 2</Tab>
        <Tab>Long text for the great tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <h2 className="zep-text-3">Panel 1 Title</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa
          impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur
          nesciunt deserunt in?
        </TabPanel>
        <TabPanel>
          <h2 className="zep-text-3">Panel 2 Title</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa
          impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur
          nesciunt deserunt in?
        </TabPanel>
        <TabPanel>
          <h2 className="zep-text-3">Panel 3 Title</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa
          impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur
          nesciunt deserunt in?
        </TabPanel>
      </TabPanels>
    </TabGroup>
}`,...(Te=(me=K.parameters)==null?void 0:me.docs)==null?void 0:Te.source}}};var xe,fe,ge;J.parameters={...J.parameters,docs:{...(xe=J.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: ({} as TabProps),
  render: (args, context) => {
    return <TabGroup>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Panel 1</TabPanel>
          <TabPanel>Panel 2</TabPanel>
          <TabPanel>Panel 3</TabPanel>
        </TabPanels>
      </TabGroup>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Tab 2'));
    await expect(canvas.getByTestId(testTabPanelItem)).toHaveTextContent('Panel 2');
  }
}`,...(ge=(fe=J.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};const ga=["Default","TabDisabled","TabVariableLength","SwitchPanel"];export{X as Default,J as SwitchPanel,Y as TabDisabled,K as TabVariableLength,ga as __namedExportsOrder,fa as default};
//# sourceMappingURL=Tabs.stories-80a46ecf.js.map
