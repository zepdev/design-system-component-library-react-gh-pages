import{j as t,c as y}from"./clsx-667af910.js";import{R as b,r as o}from"./index-37ba2b57.js";import{F as K}from"./Icon-3aaedf22.js";import{f as U}from"./focus-d7245c50.js";import{S as _,D as E,y as C,T as V,o as v,u as T,X as R,I as q,s as X,e as Q,b as g}from"./keyboard-c0eee377.js";import{c as Y,d as I,C as Z,r as G}from"./open-closed-e74d4eda.js";import{S as J}from"./Spacing-6c783f0a.js";import"./_commonjsHelpers-de833af9.js";var B;let W=(B=b.startTransition)!=null?B:function(e){e()};var ee=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ee||{}),te=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(te||{});let re={0:e=>({...e,disclosureState:T(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,r){return e.buttonId===r.buttonId?e:{...e,buttonId:r.buttonId}},3(e,r){return e.panelId===r.panelId?e:{...e,panelId:r.panelId}}},$=o.createContext(null);$.displayName="DisclosureContext";function N(e){let r=o.useContext($);if(r===null){let c=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,N),c}return r}let A=o.createContext(null);A.displayName="DisclosureAPIContext";function H(e){let r=o.useContext(A);if(r===null){let c=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,H),c}return r}let F=o.createContext(null);F.displayName="DisclosurePanelContext";function ne(){return o.useContext(F)}function oe(e,r){return T(r.type,re,e,r)}let se=o.Fragment;function le(e,r){let{defaultOpen:c=!1,...d}=e,m=o.useRef(null),n=C(r,V(u=>{m.current=u},e.as===void 0||e.as===o.Fragment)),s=o.useRef(null),a=o.useRef(null),i=o.useReducer(oe,{disclosureState:c?0:1,linkedPanel:!1,buttonRef:a,panelRef:s,buttonId:null,panelId:null}),[{disclosureState:p,buttonId:x},S]=i,h=v(u=>{S({type:1});let l=Q(m);if(!l||!x)return;let f=(()=>u?u instanceof HTMLElement?u:u.current instanceof HTMLElement?u.current:l.getElementById(x):l.getElementById(x))();f==null||f.focus()}),j=o.useMemo(()=>({close:h}),[h]),D=o.useMemo(()=>({open:p===0,close:h}),[p,h]),z={ref:n};return b.createElement($.Provider,{value:i},b.createElement(A.Provider,{value:j},b.createElement(Y,{value:T(p,{0:I.Open,1:I.Closed})},R({ourProps:z,theirProps:d,slot:D,defaultTag:se,name:"Disclosure"}))))}let ae="button";function ie(e,r){let c=q(),{id:d=`headlessui-disclosure-button-${c}`,...m}=e,[n,s]=N("Disclosure.Button"),a=ne(),i=a===null?!1:a===n.panelId,p=o.useRef(null),x=C(p,r,i?null:n.buttonRef);o.useEffect(()=>{if(!i)return s({type:2,buttonId:d}),()=>{s({type:2,buttonId:null})}},[d,s,i]);let S=v(l=>{var f;if(i){if(n.disclosureState===1)return;switch(l.key){case g.Space:case g.Enter:l.preventDefault(),l.stopPropagation(),s({type:0}),(f=n.buttonRef.current)==null||f.focus();break}}else switch(l.key){case g.Space:case g.Enter:l.preventDefault(),l.stopPropagation(),s({type:0});break}}),h=v(l=>{switch(l.key){case g.Space:l.preventDefault();break}}),j=v(l=>{var f;G(l.currentTarget)||e.disabled||(i?(s({type:0}),(f=n.buttonRef.current)==null||f.focus()):s({type:0}))}),D=o.useMemo(()=>({open:n.disclosureState===0}),[n]),z=X(e,p),u=i?{ref:x,type:z,onKeyDown:S,onClick:j}:{ref:x,id:d,type:z,"aria-expanded":n.disclosureState===0,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:S,onKeyUp:h,onClick:j};return R({ourProps:u,theirProps:m,slot:D,defaultTag:ae,name:"Disclosure.Button"})}let ce="div",de=_.RenderStrategy|_.Static;function pe(e,r){let c=q(),{id:d=`headlessui-disclosure-panel-${c}`,...m}=e,[n,s]=N("Disclosure.Panel"),{close:a}=H("Disclosure.Panel"),i=C(r,n.panelRef,j=>{W(()=>s({type:j?4:5}))});o.useEffect(()=>(s({type:3,panelId:d}),()=>{s({type:3,panelId:null})}),[d,s]);let p=Z(),x=(()=>p!==null?(p&I.Open)===I.Open:n.disclosureState===0)(),S=o.useMemo(()=>({open:n.disclosureState===0,close:a}),[n,a]),h={ref:i,id:d};return b.createElement(F.Provider,{value:n.panelId},R({ourProps:h,theirProps:m,slot:S,defaultTag:ce,features:de,visible:x,name:"Disclosure.Panel"}))}let ue=E(le),me=E(ie),xe=E(pe),w=Object.assign(ue,{Button:me,Panel:xe});const k=o.forwardRef(({items:e,...r},c)=>t.jsx(t.Fragment,{children:e.map((d,m)=>{const{title:n,content:s,disabled:a}=d;return t.jsx(w,{children:({open:i})=>{const p=y("zep-transition-transform","zep-duration-500","zep-shrink-0",{"zep-rotate-180":i});return t.jsxs("div",{"data-disabled":a,className:y("zep-@container","first:zep-border-t-[0]","zep-border-t-1","last:zep-border-b-1","zep-border-greyscale-400","[&[data-disabled]]:zep-border-t-greyscale-400/40","[&[data-disabled]+*]:zep-border-t-greyscale-400/40","[&[data-disabled]]:last:zep-border-b-greyscale-400/40",{"[&+*]:hover:!zep-border-t-neutral-dark-active":!a},{"hover:!zep-border-neutral-dark-active":!a}),children:[t.jsx(w.Button,{disabled:a,className:y("zep-typography-headlineXS-fluid-cqi","zep-w-full",U,"focus-visible:zep-ring-offset-1","zep-py-0.75","zep-px-0.5","sm:zep-py-1.25","sm:zep-px-1",{"zep-cursor-not-allowed":a},{"zep-opacity-disabled":a}),...r,ref:c,children:t.jsxs(J,{direction:"row",justifyContent:"between",gap:"1.5",wrap:"nowrap",className:"zep-w-full",children:[t.jsx("span",{className:"zep-text-left",children:n}),t.jsx(K,{className:y("zep-min-w-[24px] !zep-grow-0 zep-justify-end",p),name:"chevron-mini-down"})]})}),t.jsx(w.Panel,{className:y({"zep-hidden":!i},"zep-text-typography-dark-100","zep-pt-0.75","zep-pb-2","zep-px-0.5","sm:zep-pt-1.25","sm:zep-pb-2.5","sm:zep-px-1","zep-typography-bodyText"),children:s})]})}},`${n}-${m}`)})}));try{k.displayName="Accordion",k.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AccordionItem[]"}}}}}catch{}const ve={title:"Components/Accordion",component:k,tags:["autodocs"],argTypes:{}},he=[{title:"Accordion 1",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"})]})},{title:"Accordion 2",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"}),t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"})]})},{title:"Accordion 3 with a very long title that should wrap to the next line if there is not enough space",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"})]})},{title:"Accordion 4",disabled:!0,content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"})]})},{title:"Accordion 5",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Some text here"}),t.jsx("p",{children:"Some text there"})]})}],P={args:{items:he},render:e=>t.jsx("div",{className:"zep-max-w-[712px]",children:t.jsx(k,{...e})})};var O,M,L;P.parameters={...P.parameters,docs:{...(O=P.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items
  },
  render: args => <div className="zep-max-w-[712px]">
      <Accordion {...args} />
    </div>
}`,...(L=(M=P.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};const Ie=["Default"];export{P as Default,Ie as __namedExportsOrder,ve as default};
//# sourceMappingURL=Accordion.stories-ecd68e02.js.map
