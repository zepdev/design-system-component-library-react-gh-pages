import{j as t,c as J}from"./clsx-36b9529f.js";import{f as ve}from"./focus-d7245c50.js";import{r as u,R}from"./index-8b3efc3f.js";import{l as A,O as te,U as G,a as U,y as O,o as w,C as D,I as Te,T as ze,u as M,b as v}from"./keyboard-17e5dc7a.js";import{u as xe,s as ye,t as je}from"./hidden-2394f2e8.js";import{I as C,N as B,O as S,M as z}from"./focus-management-fd8d9fed.js";import{o as Ie}from"./owner-86311e57.js";import{w as we,u as Ee,e as Le}from"./index-2c24bede.js";import"./_commonjsHelpers-de833af9.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";function Se(){let e=u.useRef(!1);return A(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Re({onFocus:e}){let[a,n]=u.useState(!0),s=Se();return a?R.createElement(xe,{as:"button",type:"button",features:ye.Focusable,onFocus:o=>{o.preventDefault();let i,c=50;function T(){if(c--<=0){i&&cancelAnimationFrame(i);return}if(e()){if(cancelAnimationFrame(i),!s.current)return;n(!1);return}i=requestAnimationFrame(T)}i=requestAnimationFrame(T)}}):null}const fe=u.createContext(null);function $e(){return{groups:new Map,get(e,a){var n;let s=this.groups.get(e);s||(s=new Map,this.groups.set(e,s));let o=(n=s.get(a))!=null?n:0;s.set(a,o+1);let i=Array.from(s.keys()).indexOf(a);function c(){let T=s.get(a);T>1?s.set(a,T-1):s.delete(a)}return[i,c]}}}function Ne({children:e}){let a=u.useRef($e());return u.createElement(fe.Provider,{value:a},e)}function Pe(e){let a=u.useContext(fe);if(!a)throw new Error("You must wrap your component in a <StableCollection>");let n=ke(),[s,o]=a.current.get(e,n);return u.useEffect(()=>o,[]),s}function ke(){var e,a,n;let s=(n=(a=(e=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:e.ReactCurrentOwner)==null?void 0:a.current)!=null?n:null;if(!s)return Symbol();let o=[],i=s;for(;i;)o.push(i.index),i=i.return;return"$."+o.join(".")}var _e=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(_e||{}),Ce=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Ce||{}),Me=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(Me||{});let Ae={0(e,a){var n;let s=C(e.tabs,p=>p.current),o=C(e.panels,p=>p.current),i=s.filter(p=>{var h;return!((h=p.current)!=null&&h.hasAttribute("disabled"))}),c={...e,tabs:s,panels:o};if(a.index<0||a.index>s.length-1){let p=M(Math.sign(a.index-e.selectedIndex),{[-1]:()=>1,0:()=>M(Math.sign(a.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(i.length===0)return c;let h=M(p,{0:()=>s.indexOf(i[0]),1:()=>s.indexOf(i[i.length-1])});return{...c,selectedIndex:h===-1?e.selectedIndex:h}}let T=s.slice(0,a.index),y=[...s.slice(a.index),...T].find(p=>i.includes(p));if(!y)return c;let g=(n=s.indexOf(y))!=null?n:e.selectedIndex;return g===-1&&(g=e.selectedIndex),{...c,selectedIndex:g}},1(e,a){if(e.tabs.includes(a.tab))return e;let n=e.tabs[e.selectedIndex],s=C([...e.tabs,a.tab],i=>i.current),o=e.selectedIndex;return e.info.current.isControlled||(o=s.indexOf(n),o===-1&&(o=e.selectedIndex)),{...e,tabs:s,selectedIndex:o}},2(e,a){return{...e,tabs:e.tabs.filter(n=>n!==a.tab)}},3(e,a){return e.panels.includes(a.panel)?e:{...e,panels:C([...e.panels,a.panel],n=>n.current)}},4(e,a){return{...e,panels:e.panels.filter(n=>n!==a.panel)}}},Q=u.createContext(null);Q.displayName="TabsDataContext";function $(e){let a=u.useContext(Q);if(a===null){let n=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,$),n}return a}let Z=u.createContext(null);Z.displayName="TabsActionsContext";function ee(e){let a=u.useContext(Z);if(a===null){let n=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ee),n}return a}function Ge(e,a){return M(a.type,Ae,e,a)}let Oe=u.Fragment;function De(e,a){let{defaultIndex:n=0,vertical:s=!1,manual:o=!1,onChange:i,selectedIndex:c=null,...T}=e;const y=s?"vertical":"horizontal",g=o?"manual":"auto";let p=c!==null,h=U({isControlled:p}),j=O(a),[m,d]=u.useReducer(Ge,{info:h,selectedIndex:c??n,tabs:[],panels:[]}),N=u.useMemo(()=>({selectedIndex:m.selectedIndex}),[m.selectedIndex]),k=U(i||(()=>{})),f=U(m.tabs),P=u.useMemo(()=>({orientation:y,activation:g,...m}),[y,g,m]),I=w(b=>(d({type:1,tab:b}),()=>d({type:2,tab:b}))),E=w(b=>(d({type:3,panel:b}),()=>d({type:4,panel:b}))),L=w(b=>{_.current!==b&&k.current(b),p||d({type:0,index:b})}),_=U(p?e.selectedIndex:m.selectedIndex),Y=u.useMemo(()=>({registerTab:I,registerPanel:E,change:L}),[]);A(()=>{d({type:0,index:c??n})},[c]),A(()=>{if(_.current===void 0||m.tabs.length<=0)return;let b=C(m.tabs,l=>l.current);b.some((l,x)=>m.tabs[x]!==l)&&L(b.indexOf(m.tabs[_.current]))});let X={ref:j};return R.createElement(Ne,null,R.createElement(Z.Provider,{value:Y},R.createElement(Q.Provider,{value:P},P.tabs.length<=0&&R.createElement(Re,{onFocus:()=>{var b,l;for(let x of f.current)if(((b=x.current)==null?void 0:b.tabIndex)===0)return(l=x.current)==null||l.focus(),!0;return!1}}),D({ourProps:X,theirProps:T,slot:N,defaultTag:Oe,name:"Tabs"}))))}let Fe="div";function qe(e,a){let{orientation:n,selectedIndex:s}=$("Tab.List"),o=O(a);return D({ourProps:{ref:o,role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:s},defaultTag:Fe,name:"Tabs.List"})}let Ue="button";function Be(e,a){var n,s;let o=Te(),{id:i=`headlessui-tabs-tab-${o}`,...c}=e,{orientation:T,activation:y,selectedIndex:g,tabs:p,panels:h}=$("Tab"),j=ee("Tab"),m=$("Tab"),d=u.useRef(null),N=O(d,a);A(()=>j.registerTab(d),[j,d]);let k=Pe("tabs"),f=p.indexOf(d);f===-1&&(f=k);let P=f===g,I=w(l=>{var x;let q=l();if(q===B.Success&&y==="auto"){let ge=(x=Ie(d))==null?void 0:x.activeElement,ae=m.tabs.findIndex(he=>he.current===ge);ae!==-1&&j.change(ae)}return q}),E=w(l=>{let x=p.map(q=>q.current).filter(Boolean);if(l.key===v.Space||l.key===v.Enter){l.preventDefault(),l.stopPropagation(),j.change(f);return}switch(l.key){case v.Home:case v.PageUp:return l.preventDefault(),l.stopPropagation(),I(()=>S(x,z.First));case v.End:case v.PageDown:return l.preventDefault(),l.stopPropagation(),I(()=>S(x,z.Last))}if(I(()=>M(T,{vertical(){return l.key===v.ArrowUp?S(x,z.Previous|z.WrapAround):l.key===v.ArrowDown?S(x,z.Next|z.WrapAround):B.Error},horizontal(){return l.key===v.ArrowLeft?S(x,z.Previous|z.WrapAround):l.key===v.ArrowRight?S(x,z.Next|z.WrapAround):B.Error}}))===B.Success)return l.preventDefault()}),L=u.useRef(!1),_=w(()=>{var l;L.current||(L.current=!0,(l=d.current)==null||l.focus({preventScroll:!0}),j.change(f),je(()=>{L.current=!1}))}),Y=w(l=>{l.preventDefault()}),X=u.useMemo(()=>{var l;return{selected:P,disabled:(l=e.disabled)!=null?l:!1}},[P,e.disabled]),b={ref:N,onKeyDown:E,onMouseDown:Y,onClick:_,id:i,role:"tab",type:ze(e,d),"aria-controls":(s=(n=h[f])==null?void 0:n.current)==null?void 0:s.id,"aria-selected":P,tabIndex:P?0:-1};return D({ourProps:b,theirProps:c,slot:X,defaultTag:Ue,name:"Tabs.Tab"})}let We="div";function He(e,a){let{selectedIndex:n}=$("Tab.Panels"),s=O(a),o=u.useMemo(()=>({selectedIndex:n}),[n]);return D({ourProps:{ref:s},theirProps:e,slot:o,defaultTag:We,name:"Tabs.Panels"})}let Ve="div",Ke=te.RenderStrategy|te.Static;function Ye(e,a){var n,s,o,i;let c=Te(),{id:T=`headlessui-tabs-panel-${c}`,tabIndex:y=0,...g}=e,{selectedIndex:p,tabs:h,panels:j}=$("Tab.Panel"),m=ee("Tab.Panel"),d=u.useRef(null),N=O(d,a);A(()=>m.registerPanel(d),[m,d,T]);let k=Pe("panels"),f=j.indexOf(d);f===-1&&(f=k);let P=f===p,I=u.useMemo(()=>({selected:P}),[P]),E={ref:N,id:T,role:"tabpanel","aria-labelledby":(s=(n=h[f])==null?void 0:n.current)==null?void 0:s.id,tabIndex:P?y:-1};return!P&&((o=g.unmount)==null||o)&&!((i=g.static)!=null&&i)?R.createElement(xe,{as:"span","aria-hidden":"true",...E}):D({ourProps:E,theirProps:g,slot:I,defaultTag:Ve,features:Ke,visible:P,name:"Tabs.Panel"})}let Xe=G(Be),Je=G(De),Qe=G(qe),Ze=G(He),ea=G(Ye),F=Object.assign(Xe,{Group:Je,List:Qe,Panels:Ze,Panel:ea});const aa=({children:e})=>t.jsx(F.Group,{"data-testid":"zep-tab-group",as:"div",children:e}),r=({disabled:e,children:a})=>t.jsx(F,{className:"zep-group zep-flex zep-flex-col zep-justify-between zep-gap-0.5 zep-outline-none",disabled:e,"data-testid":"zep-tab",children:({selected:n})=>t.jsxs(t.Fragment,{children:[t.jsx("span",{className:J("zep-typography-bodyText zep-rounded-4 zep-px-1 zep-outline-none zep-ring-focus  group-focus-visible:zep-text-typography-dark-100 group-focus-visible:zep-ring",{"zep-text-typography-dark-100":n,"zep-text-typography-dark-70/70":!n,"zep-text-typography-neutral-dark-disabled/40":e}),children:a}),t.jsx("span",{className:J("zep-w-full",{"zep-h-0.25 zep-bg-primary-default":n,"zep-h-[1px] zep-bg-transparent group-hover:zep-bg-primary-default":!n&&!e})})]})}),ta=({children:e})=>t.jsxs(F.List,{className:"zep-relative zep-flex zep-w-full zep-flex-col zep-overflow-x-scroll zep-bg-greyscale-0 zep-pt-0.75 sm:zep-overflow-visible","data-testid":"zep-tab-list",children:[t.jsx("span",{className:"zep-absolute zep-bottom-[0] zep-flex zep-w-full zep-border-b-1 zep-border-solid zep-border-greyscale-400"}),t.jsx("div",{className:"zep-relative zep-flex zep-gap-0.5 zep-whitespace-nowrap",children:e})]}),na=({children:e})=>t.jsx(F.Panel,{className:J(ve,"zep-rounded-4"),"data-testid":"zep-tab-panel",children:e}),ra=({children:e})=>t.jsx(F.Panels,{className:"zep-pt-1","data-testid":"zep-tab-panels",children:e});r.Group=aa;r.List=ta;r.Panel=na;r.Panels=ra;try{r.displayName="Tab",r.__docgenInfo={description:"",displayName:"Tab",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const Pa={title:"Components/Tabs",component:r,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},W={render:()=>t.jsxs(r.Group,{children:[t.jsxs(r.List,{children:[t.jsx(r,{children:"Tab 1"}),t.jsx(r,{children:"Tab 2"}),t.jsx(r,{children:"Tab 3"})]}),t.jsxs(r.Panels,{children:[t.jsx(r.Panel,{children:"Panel 1"}),t.jsx(r.Panel,{children:"Panel 2"}),t.jsx(r.Panel,{children:"Panel 3"})]})]})},H={render:()=>t.jsxs(r.Group,{children:[t.jsxs(r.List,{children:[t.jsx(r,{children:"Tab 1"}),t.jsx(r,{disabled:!0,children:"Tab 2"}),t.jsx(r,{children:"Tab 3"})]}),t.jsxs(r.Panels,{children:[t.jsx(r.Panel,{children:"Panel 1"}),t.jsx(r.Panel,{children:"Panel 2"}),t.jsx(r.Panel,{children:"Panel 3"})]})]})},V={render:()=>t.jsxs(r.Group,{children:[t.jsx("span",{}),t.jsxs(r.List,{children:[t.jsx(r,{children:"Short tab 1"}),t.jsx(r,{children:"Medium text tab 2"}),t.jsx(r,{children:"Long text for the great tab 3"})]}),t.jsxs(r.Panels,{children:[t.jsxs(r.Panel,{children:[t.jsx("h2",{className:"zep-text-3",children:"Panel 1 Title"}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]}),t.jsxs(r.Panel,{children:[t.jsx("h2",{className:"zep-text-3",children:"Panel 2 Title"}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]}),t.jsxs(r.Panel,{children:[t.jsx("h2",{className:"zep-text-3",children:"Panel 3 Title"}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]})]})]})},sa="zep-tab-panel",K={args:{},render:(e,a)=>t.jsxs(r.Group,{children:[t.jsxs(r.List,{children:[t.jsx(r,{children:"Tab 1"}),t.jsx(r,{children:"Tab 2"}),t.jsx(r,{children:"Tab 3"})]}),t.jsxs(r.Panels,{children:[t.jsx(r.Panel,{children:"Panel 1"}),t.jsx(r.Panel,{children:"Panel 2"}),t.jsx(r.Panel,{children:"Panel 3"})]})]}),play:async({canvasElement:e})=>{const a=we(e);await Ee.click(a.getByText("Tab 2")),await Le(a.getByTestId(sa)).toHaveTextContent("Panel 2")}};var ne,re,se;W.parameters={...W.parameters,docs:{...(ne=W.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(re=W.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,ie,oe;H.parameters={...H.parameters,docs:{...(le=H.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(oe=(ie=H.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ue,ce,de;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(de=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,be,me;K.parameters={...K.parameters,docs:{...(pe=K.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(be=K.parameters)==null?void 0:be.docs)==null?void 0:me.source}}};const ga=["Default","TabDisabled","TabVariableLength","SwitchPanel"];export{W as Default,K as SwitchPanel,H as TabDisabled,V as TabVariableLength,ga as __namedExportsOrder,Pa as default};
