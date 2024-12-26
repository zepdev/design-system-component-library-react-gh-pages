import{j as t,c as b}from"./clsx-36b9529f.js";import{w as J,u as W,e as ee}from"./index-dccde6df.js";import{R as z,r as s}from"./index-8b3efc3f.js";import{F as te}from"./Icon-2a6dae81.js";import{f as re}from"./focus-d7245c50.js";import{O,U as $,y as C,c as ne,o as w,u as R,C as A,I as X,d as Y,T as se,b as v}from"./keyboard-17e5dc7a.js";import{s as oe,d as k,u as ae}from"./open-closed-27d7b499.js";import{r as le}from"./bugs-8e007c11.js";import{o as ie}from"./owner-86311e57.js";import{S as ce}from"./Spacing-3ed1191f.js";import"./_commonjsHelpers-de833af9.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";import"./index-24fb42db.js";var M;let pe=(M=z.startTransition)!=null?M:function(e){e()};var de=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(de||{}),ue=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(ue||{});let me={0:e=>({...e,disclosureState:R(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,r){return e.buttonId===r.buttonId?e:{...e,buttonId:r.buttonId}},3(e,r){return e.panelId===r.panelId?e:{...e,panelId:r.panelId}}},N=s.createContext(null);N.displayName="DisclosureContext";function B(e){let r=s.useContext(N);if(r===null){let i=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,B),i}return r}let F=s.createContext(null);F.displayName="DisclosureAPIContext";function Z(e){let r=s.useContext(F);if(r===null){let i=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Z),i}return r}let _=s.createContext(null);_.displayName="DisclosurePanelContext";function xe(){return s.useContext(_)}function he(e,r){return R(r.type,me,e,r)}let fe=s.Fragment;function Se(e,r){let{defaultOpen:i=!1,...c}=e,h=s.useRef(null),n=C(r,ne(u=>{h.current=u},e.as===void 0||e.as===s.Fragment)),a=s.useRef(null),m=s.useRef(null),o=s.useReducer(he,{disclosureState:i?0:1,linkedPanel:!1,buttonRef:m,panelRef:a,buttonId:null,panelId:null}),[{disclosureState:p,buttonId:d},S]=o,x=w(u=>{S({type:1});let j=ie(h);if(!j||!d)return;let l=(()=>u?u instanceof HTMLElement?u:u.current instanceof HTMLElement?u.current:j.getElementById(d):j.getElementById(d))();l==null||l.focus()}),y=s.useMemo(()=>({close:x}),[x]),f=s.useMemo(()=>({open:p===0,close:x}),[p,x]),D={ref:n};return z.createElement(N.Provider,{value:o},z.createElement(F.Provider,{value:y},z.createElement(oe,{value:R(p,{0:k.Open,1:k.Closed})},A({ourProps:D,theirProps:c,slot:f,defaultTag:fe,name:"Disclosure"}))))}let ye="button";function je(e,r){let i=X(),{id:c=`headlessui-disclosure-button-${i}`,...h}=e,[n,a]=B("Disclosure.Button"),m=xe(),o=m===null?!1:m===n.panelId,p=s.useRef(null),d=C(p,r,o?null:n.buttonRef),S=Y();s.useEffect(()=>{if(!o)return a({type:2,buttonId:c}),()=>{a({type:2,buttonId:null})}},[c,a,o]);let x=w(l=>{var g;if(o){if(n.disclosureState===1)return;switch(l.key){case v.Space:case v.Enter:l.preventDefault(),l.stopPropagation(),a({type:0}),(g=n.buttonRef.current)==null||g.focus();break}}else switch(l.key){case v.Space:case v.Enter:l.preventDefault(),l.stopPropagation(),a({type:0});break}}),y=w(l=>{switch(l.key){case v.Space:l.preventDefault();break}}),f=w(l=>{var g;le(l.currentTarget)||e.disabled||(o?(a({type:0}),(g=n.buttonRef.current)==null||g.focus()):a({type:0}))}),D=s.useMemo(()=>({open:n.disclosureState===0}),[n]),u=se(e,p),j=o?{ref:d,type:u,onKeyDown:x,onClick:f}:{ref:d,id:c,type:u,"aria-expanded":n.disclosureState===0,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:x,onKeyUp:y,onClick:f};return A({mergeRefs:S,ourProps:j,theirProps:h,slot:D,defaultTag:ye,name:"Disclosure.Button"})}let ge="div",be=O.RenderStrategy|O.Static;function ve(e,r){let i=X(),{id:c=`headlessui-disclosure-panel-${i}`,...h}=e,[n,a]=B("Disclosure.Panel"),{close:m}=Z("Disclosure.Panel"),o=Y(),p=C(r,n.panelRef,f=>{pe(()=>a({type:f?4:5}))});s.useEffect(()=>(a({type:3,panelId:c}),()=>{a({type:3,panelId:null})}),[c,a]);let d=ae(),S=(()=>d!==null?(d&k.Open)===k.Open:n.disclosureState===0)(),x=s.useMemo(()=>({open:n.disclosureState===0,close:m}),[n,m]),y={ref:p,id:c};return z.createElement(_.Provider,{value:n.panelId},A({mergeRefs:o,ourProps:y,theirProps:h,slot:x,defaultTag:ge,features:be,visible:S,name:"Disclosure.Panel"}))}let ze=$(Se),Ie=$(je),Pe=$(ve),T=Object.assign(ze,{Button:Ie,Panel:Pe});const E=s.forwardRef(({items:e,className:r,...i},c)=>t.jsx(t.Fragment,{children:e.map((h,n)=>{const{title:a,content:m,disabled:o}=h;return t.jsx(T,{children:({open:p})=>{const d=b("zep-transition-transform","zep-shrink-0",{"zep-rotate-180":p});return t.jsxs("div",{"data-disabled":o,className:b("zep-@container","first:zep-border-t-[0]","zep-border-t-1","last:zep-border-b-1","zep-border-greyscale-400","[&[data-disabled]]:zep-border-t-greyscale-400/40","[&[data-disabled]+*]:zep-border-t-greyscale-400/40","[&[data-disabled]]:last:zep-border-b-greyscale-400/40",{"[&+*]:hover:!zep-border-t-neutral-dark-active":!o},{"hover:!zep-border-neutral-dark-active":!o},r),children:[t.jsx(T.Button,{disabled:o,className:b("zep-typography-headlineXS-fluid-cqi","zep-w-full",re,"focus-visible:zep-ring-offset-1","zep-py-0.75","zep-px-0.5","sm:zep-py-1.25","sm:zep-px-1",{"zep-cursor-not-allowed":o},{"zep-opacity-disabled":o}),...i,ref:c,"data-testid":`zep-accordion-button-${n}`,children:t.jsxs(ce,{direction:"row",justifyContent:"between",gap:"1.5",wrap:"nowrap",className:"zep-w-full",children:[t.jsx("span",{className:"zep-text-left",children:a}),t.jsx(te,{className:b("zep-min-w-[24px] !zep-grow-0 zep-justify-end",d),name:"chevron-mini-down"})]})}),t.jsx(T.Panel,{className:b({"zep-hidden":!p},"zep-text-typography-dark-100","zep-pt-0.75","zep-pb-2","zep-px-0.5","sm:zep-pt-1.25","sm:zep-pb-2.5","sm:zep-px-1","zep-typography-bodyText"),children:m})]})}},`${a}-${n}`)})}));try{E.displayName="Accordion",E.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AccordionItem[]"}}}}}catch{}const Ke={title:"Components/Accordion",component:E,tags:["autodocs"],argTypes:{}},G=[{title:"Accordion 1",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"})]})},{title:"Accordion 2",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"})]})},{title:"Accordion 3 with a very long title that should wrap to the next line if there is not enough space",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"})]})},{title:"Accordion 4",disabled:!0,content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"})]})},{title:"Accordion 5",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"})]})}],I={args:{items:G},render:e=>t.jsx("div",{className:"zep-max-w-[712px]",children:t.jsx(E,{...e})})},we=2,H=`zep-accordion-button-${we}`,P={args:{items:G},play:async({canvasElement:e})=>{const r=J(e);await W.click(r.getByTestId(H)),await ee(r.getByTestId(H)).toHaveAttribute("data-headlessui-state","open")}};var K,L,U;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items
  },
  render: args => <div className="zep-max-w-[712px]">
      <Accordion {...args} />
    </div>
}`,...(U=(L=I.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var q,V,Q;P.parameters={...P.parameters,docs:{...(q=P.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items
  } as AccordionProps,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId(testItem));
    await expect(canvas.getByTestId(testItem)).toHaveAttribute('data-headlessui-state', 'open');
  }
}`,...(Q=(V=P.parameters)==null?void 0:V.docs)==null?void 0:Q.source}}};const Le=["Default","ExpandAnItem"];export{I as Default,P as ExpandAnItem,Le as __namedExportsOrder,Ke as default};
