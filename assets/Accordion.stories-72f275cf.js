import{j as t,c as b}from"./clsx-36b9529f.js";import{R as I,r as s}from"./index-8b3efc3f.js";import{F as re}from"./Icon-744794d1.js";import{f as ne}from"./focus-d7245c50.js";import{O as K,U as k,y as T,c as se,o as A,u as w,C as N,I as X,d as ee,T as oe,b as E}from"./keyboard-17e5dc7a.js";import{s as ae,d as _,u as le}from"./open-closed-27d7b499.js";import{r as ie}from"./bugs-8e007c11.js";import{o as ce}from"./owner-86311e57.js";import{S as de}from"./Spacing-3ed1191f.js";import"./_commonjsHelpers-de833af9.js";import"./index-24fb42db.js";var U;let pe=(U=I.startTransition)!=null?U:function(e){e()};var ue=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ue||{}),me=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(me||{});let xe={0:e=>({...e,disclosureState:w(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,r){return e.buttonId===r.buttonId?e:{...e,buttonId:r.buttonId}},3(e,r){return e.panelId===r.panelId?e:{...e,panelId:r.panelId}}},R=s.createContext(null);R.displayName="DisclosureContext";function $(e){let r=s.useContext(R);if(r===null){let c=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,$),c}return r}let F=s.createContext(null);F.displayName="DisclosureAPIContext";function te(e){let r=s.useContext(F);if(r===null){let c=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,te),c}return r}let B=s.createContext(null);B.displayName="DisclosurePanelContext";function he(){return s.useContext(B)}function Se(e,r){return w(r.type,xe,e,r)}let fe=s.Fragment;function je(e,r){let{defaultOpen:c=!1,...d}=e,h=s.useRef(null),n=T(r,se(x=>{h.current=x},e.as===void 0||e.as===s.Fragment)),o=s.useRef(null),p=s.useRef(null),l=s.useReducer(Se,{disclosureState:c?0:1,linkedPanel:!1,buttonRef:p,panelRef:o,buttonId:null,panelId:null}),[{disclosureState:m,buttonId:a},S]=l,u=A(x=>{S({type:1});let y=ce(h);if(!y||!a)return;let i=(()=>x?x instanceof HTMLElement?x:x.current instanceof HTMLElement?x.current:y.getElementById(a):y.getElementById(a))();i==null||i.focus()}),g=s.useMemo(()=>({close:u}),[u]),j=s.useMemo(()=>({open:m===0,close:u}),[m,u]),C={ref:n};return I.createElement(R.Provider,{value:l},I.createElement(F.Provider,{value:g},I.createElement(ae,{value:w(m,{0:_.Open,1:_.Closed})},N({ourProps:C,theirProps:d,slot:j,defaultTag:fe,name:"Disclosure"}))))}let ge="button";function ye(e,r){let c=X(),{id:d=`headlessui-disclosure-button-${c}`,...h}=e,[n,o]=$("Disclosure.Button"),p=he(),l=p===null?!1:p===n.panelId,m=s.useRef(null),a=T(m,r,l?null:n.buttonRef),S=ee();s.useEffect(()=>{if(!l)return o({type:2,buttonId:d}),()=>{o({type:2,buttonId:null})}},[d,o,l]);let u=A(i=>{var P;if(l){if(n.disclosureState===1)return;switch(i.key){case E.Space:case E.Enter:i.preventDefault(),i.stopPropagation(),o({type:0}),(P=n.buttonRef.current)==null||P.focus();break}}else switch(i.key){case E.Space:case E.Enter:i.preventDefault(),i.stopPropagation(),o({type:0});break}}),g=A(i=>{switch(i.key){case E.Space:i.preventDefault();break}}),j=A(i=>{var P;ie(i.currentTarget)||e.disabled||(l?(o({type:0}),(P=n.buttonRef.current)==null||P.focus()):o({type:0}))}),C=s.useMemo(()=>({open:n.disclosureState===0}),[n]),x=oe(e,m),y=l?{ref:a,type:x,onKeyDown:u,onClick:j}:{ref:a,id:d,type:x,"aria-expanded":n.disclosureState===0,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:u,onKeyUp:g,onClick:j};return N({mergeRefs:S,ourProps:y,theirProps:h,slot:C,defaultTag:ge,name:"Disclosure.Button"})}let Pe="div",be=K.RenderStrategy|K.Static;function Ee(e,r){let c=X(),{id:d=`headlessui-disclosure-panel-${c}`,...h}=e,[n,o]=$("Disclosure.Panel"),{close:p}=te("Disclosure.Panel"),l=ee(),m=T(r,n.panelRef,j=>{pe(()=>o({type:j?4:5}))});s.useEffect(()=>(o({type:3,panelId:d}),()=>{o({type:3,panelId:null})}),[d,o]);let a=le(),S=(()=>a!==null?(a&_.Open)===_.Open:n.disclosureState===0)(),u=s.useMemo(()=>({open:n.disclosureState===0,close:p}),[n,p]),g={ref:m,id:d};return I.createElement(B.Provider,{value:n.panelId},N({mergeRefs:l,ourProps:g,theirProps:h,slot:u,defaultTag:Pe,features:be,visible:S,name:"Disclosure.Panel"}))}let Ie=k(je),ze=k(ye),ve=k(Ee),O=Object.assign(Ie,{Button:ze,Panel:ve});var f=(e=>(e.ALL_CLOSED="ALL_CLOSED",e.ALL_OPEN="ALL_OPEN",e.FIRST_OPEN="FIRST_OPEN",e))(f||{});const z=s.forwardRef(({items:e,initialState:r=f.ALL_CLOSED,className:c,...d},h)=>{const n=o=>{switch(r){case f.ALL_OPEN:return!0;case f.FIRST_OPEN:return o===0;case f.ALL_CLOSED:default:return!1}};return t.jsx(t.Fragment,{children:e.map((o,p)=>{const{title:l,content:m,disabled:a}=o;return t.jsx(O,{defaultOpen:n(p),children:({open:S})=>{const u=b("zep-transition-transform","zep-shrink-0",{"zep-rotate-180":S});return t.jsxs("div",{"data-disabled":a,className:b("zep-@container","first:zep-border-t-[0]","zep-border-t-1","last:zep-border-b-1","zep-border-greyscale-400","[&[data-disabled]]:zep-border-t-greyscale-400/40","[&[data-disabled]+*]:zep-border-t-greyscale-400/40","[&[data-disabled]]:last:zep-border-b-greyscale-400/40",{"[&+*]:hover:!zep-border-t-neutral-dark-active":!a},{"hover:!zep-border-neutral-dark-active":!a},c),children:[t.jsx(O.Button,{disabled:a,className:b("zep-typography-headlineSM-fluid-cqi","zep-w-full",ne,"focus-visible:zep-ring-offset-1","zep-py-0.75","zep-px-0.5","sm:zep-py-1.25","sm:zep-px-1",{"zep-cursor-not-allowed":a},{"zep-opacity-disabled":a}),...d,ref:h,"data-testid":`zep-accordion-button-${p}`,children:t.jsxs(de,{direction:"row",justifyContent:"between",gap:"1.5",wrap:"nowrap",className:"zep-w-full",children:[t.jsx("h4",{className:"zep-text-left",children:l}),t.jsx(re,{className:b("zep-min-w-[24px] !zep-grow-0 zep-justify-end",u),name:"chevron-mini-down"})]})}),t.jsx(O.Panel,{className:b({"zep-hidden":!S},"zep-text-typography-dark-100","zep-pt-0.75","zep-pb-2","zep-px-0.5","sm:zep-pt-1.25","sm:zep-pb-2.5","sm:zep-px-1","zep-typography-bodyText"),children:m})]})}},`${l}-${p}`)})})});try{z.displayName="Accordion",z.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AccordionItem[]"}},initialState:{defaultValue:{value:"AccordionInitialState.ALL_CLOSED"},description:"",name:"initialState",required:!1,type:{name:"enum",value:[{value:'"ALL_CLOSED"'},{value:'"ALL_OPEN"'},{value:'"FIRST_OPEN"'}]}}}}}catch{}const $e={title:"Components/Accordion",component:z,tags:["autodocs"],argTypes:{}},M=[{title:"Accordion 1",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"})]})},{title:"Accordion 2",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"})]})},{title:"Accordion 3 with a very long title that should wrap to the next line if there is not enough space",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"})]})},{title:"Accordion 4",disabled:!0,content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"})]})},{title:"Accordion 5",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"})]})}],v={args:{items:M},render:e=>t.jsx("div",{className:"zep-max-w-[712px]",children:t.jsx(z,{...e})})},L={args:{items:M,initialState:f.ALL_OPEN}},D={args:{items:M,initialState:f.FIRST_OPEN},render:e=>t.jsx(z,{...e})};var q,V,H;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items
  },
  render: args => <div className="zep-max-w-[712px]">
      <Accordion {...args} />
    </div>
}`,...(H=(V=v.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var Q,Y,Z;L.parameters={...L.parameters,docs:{...(Q=L.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    items,
    initialState: AccordionInitialState.ALL_OPEN
  } as AccordionProps
}`,...(Z=(Y=L.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var G,J,W;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items,
    initialState: AccordionInitialState.FIRST_OPEN
  },
  render: args => <Accordion {...args} />
}`,...(W=(J=D.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};const Fe=["Default","ExpandAll","ExpandFirstItem"];export{v as Default,L as ExpandAll,D as ExpandFirstItem,Fe as __namedExportsOrder,$e as default};
