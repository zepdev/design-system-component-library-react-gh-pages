import{j as h,c as j}from"./clsx-667af910.js";import{w as Se,e as F,u as R}from"./index-36a8f999.js";import{r as b,R as K}from"./index-37ba2b57.js";import{g as Ee}from"./getDistanceToBottom-7ac1525d.js";import{F as ie}from"./Icon-117e9c75.js";import{t as Pe}from"./tw-merge-1166cefb.js";import{T as Be,h as Fe,p as be,e as Ne,i as me,u as He,a as I,o as we,x as Le}from"./use-tracked-pointer-3121fe42.js";import{l as U,e as ke,o as g,S as ge,D as Q,u as J,R as Ve,X,I as te,y as oe,s as $e,a as je,b as N}from"./keyboard-c0eee377.js";import{c as Ae,d as ce,C as Me,r as _e}from"./open-closed-e74d4eda.js";import{c as qe,p as Ke,I as Ue}from"./hidden-6a4b5cec.js";import{S as Ge}from"./Spacing-986d89c6.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-47d55b97.js";function We({container:e,accept:o,walk:n,enabled:t=!0}){let s=b.useRef(o),l=b.useRef(n);b.useEffect(()=>{s.current=o,l.current=n},[o,n]),U(()=>{if(!e||!t)return;let r=ke(e);if(!r)return;let f=s.current,x=l.current,u=Object.assign(z=>f(z),{acceptNode:f}),w=r.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,u,!1);for(;w.nextNode();)x(w.currentNode)},[e,t,s,l])}function ye(e,o){let n=b.useRef([]),t=g(e);b.useEffect(()=>{let s=[...n.current];for(let[l,r]of o.entries())if(n.current[l]!==r){let f=t(o,s);return n.current=o,f}},[t,...o])}function Je(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Qe(){return/Android/gi.test(window.navigator.userAgent)}function Xe(){return Je()||Qe()}function Ze(...e){return b.useMemo(()=>ke(...e),[...e])}var Ye=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ye||{}),et=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(et||{}),tt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(tt||{}),ot=(e=>(e[e.OpenCombobox=0]="OpenCombobox",e[e.CloseCombobox=1]="CloseCombobox",e[e.GoToOption=2]="GoToOption",e[e.RegisterOption=3]="RegisterOption",e[e.UnregisterOption=4]="UnregisterOption",e[e.RegisterLabel=5]="RegisterLabel",e))(ot||{});function pe(e,o=n=>n){let n=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,t=Ue(o(e.options.slice()),l=>l.dataRef.current.domRef.current),s=n?t.indexOf(n):null;return s===-1&&(s=null),{options:t,activeOptionIndex:s}}let nt={1(e){var o;return(o=e.dataRef.current)!=null&&o.disabled||e.comboboxState===1?e:{...e,activeOptionIndex:null,comboboxState:1}},0(e){var o;if((o=e.dataRef.current)!=null&&o.disabled||e.comboboxState===0)return e;let n=e.activeOptionIndex;if(e.dataRef.current){let{isSelected:t}=e.dataRef.current,s=e.options.findIndex(l=>t(l.dataRef.current.value));s!==-1&&(n=s)}return{...e,comboboxState:0,activeOptionIndex:n}},2(e,o){var n,t,s,l;if((n=e.dataRef.current)!=null&&n.disabled||(t=e.dataRef.current)!=null&&t.optionsRef.current&&!((s=e.dataRef.current)!=null&&s.optionsPropsRef.current.static)&&e.comboboxState===1)return e;let r=pe(e);if(r.activeOptionIndex===null){let x=r.options.findIndex(u=>!u.dataRef.current.disabled);x!==-1&&(r.activeOptionIndex=x)}let f=Le(o,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:x=>x.id,resolveDisabled:x=>x.dataRef.current.disabled});return{...e,...r,activeOptionIndex:f,activationTrigger:(l=o.trigger)!=null?l:1}},3:(e,o)=>{var n,t;let s={id:o.id,dataRef:o.dataRef},l=pe(e,f=>[...f,s]);e.activeOptionIndex===null&&(n=e.dataRef.current)!=null&&n.isSelected(o.dataRef.current.value)&&(l.activeOptionIndex=l.options.indexOf(s));let r={...e,...l,activationTrigger:1};return(t=e.dataRef.current)!=null&&t.__demoMode&&e.dataRef.current.value===void 0&&(r.activeOptionIndex=0),r},4:(e,o)=>{let n=pe(e,t=>{let s=t.findIndex(l=>l.id===o.id);return s!==-1&&t.splice(s,1),t});return{...e,...n,activationTrigger:1}},5:(e,o)=>({...e,labelId:o.id})},fe=b.createContext(null);fe.displayName="ComboboxActionsContext";function ne(e){let o=b.useContext(fe);if(o===null){let n=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ne),n}return o}let ve=b.createContext(null);ve.displayName="ComboboxDataContext";function Z(e){let o=b.useContext(ve);if(o===null){let n=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Z),n}return o}function at(e,o){return J(o.type,nt,e,o)}let rt=b.Fragment;function it(e,o){let{value:n,defaultValue:t,onChange:s,form:l,name:r,by:f=(m,y)=>m===y,disabled:x=!1,__demoMode:u=!1,nullable:w=!1,multiple:z=!1,...a}=e,[i=z?[]:void 0,O]=Be(n,s,t),[v,p]=b.useReducer(at,{dataRef:b.createRef(),comboboxState:u?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),T=b.useRef(!1),C=b.useRef({static:!1,hold:!1}),G=b.useRef(null),P=b.useRef(null),H=b.useRef(null),W=b.useRef(null),B=g(typeof f=="string"?(m,y)=>{let k=f;return(m==null?void 0:m[k])===(y==null?void 0:y[k])}:f),A=b.useCallback(m=>J(c.mode,{1:()=>i.some(y=>B(y,m)),0:()=>B(i,m)}),[i]),c=b.useMemo(()=>({...v,optionsPropsRef:C,labelRef:G,inputRef:P,buttonRef:H,optionsRef:W,value:i,defaultValue:t,disabled:x,mode:z?1:0,get activeOptionIndex(){if(T.current&&v.activeOptionIndex===null&&v.options.length>0){let m=v.options.findIndex(y=>!y.dataRef.current.disabled);if(m!==-1)return m}return v.activeOptionIndex},compare:B,isSelected:A,nullable:w,__demoMode:u}),[i,t,x,z,w,u,v]),S=b.useRef(c.activeOptionIndex!==null?c.options[c.activeOptionIndex]:null);b.useEffect(()=>{let m=c.activeOptionIndex!==null?c.options[c.activeOptionIndex]:null;S.current!==m&&(S.current=m)}),U(()=>{v.dataRef.current=c},[c]),Fe([c.buttonRef,c.inputRef,c.optionsRef],()=>ue.closeCombobox(),c.comboboxState===0);let M=b.useMemo(()=>({open:c.comboboxState===0,disabled:x,activeIndex:c.activeOptionIndex,activeOption:c.activeOptionIndex===null?null:c.options[c.activeOptionIndex].dataRef.current.value,value:i}),[c,x,i]),Y=g(m=>{let y=c.options.find(k=>k.id===m);y&&$(y.dataRef.current.value)}),d=g(()=>{if(c.activeOptionIndex!==null){let{dataRef:m,id:y}=c.options[c.activeOptionIndex];$(m.current.value),ue.goToOption(I.Specific,y)}}),V=g(()=>{p({type:0}),T.current=!0}),D=g(()=>{p({type:1}),T.current=!1}),ee=g((m,y,k)=>(T.current=!1,m===I.Specific?p({type:2,focus:I.Specific,id:y,trigger:k}):p({type:2,focus:m,trigger:k}))),E=g((m,y)=>(p({type:3,id:m,dataRef:y}),()=>{var k;((k=S.current)==null?void 0:k.id)===m&&(T.current=!0),p({type:4,id:m})})),_=g(m=>(p({type:5,id:m}),()=>p({type:5,id:null}))),$=g(m=>J(c.mode,{0(){return O==null?void 0:O(m)},1(){let y=c.value.slice(),k=y.findIndex(re=>B(re,m));return k===-1?y.push(m):y.splice(k,1),O==null?void 0:O(y)}})),ue=b.useMemo(()=>({onChange:$,registerOption:E,registerLabel:_,goToOption:ee,closeCombobox:D,openCombobox:V,selectActiveOption:d,selectOption:Y}),[]),Te=o===null?{}:{ref:o},ae=b.useRef(null),De=be();return b.useEffect(()=>{ae.current&&t!==void 0&&De.addEventListener(ae.current,"reset",()=>{O==null||O(t)})},[ae,O]),K.createElement(fe.Provider,{value:ue},K.createElement(ve.Provider,{value:c},K.createElement(Ae,{value:J(c.comboboxState,{0:ce.Open,1:ce.Closed})},r!=null&&i!=null&&Ne({[r]:i}).map(([m,y],k)=>K.createElement(qe,{features:Ke.Hidden,ref:k===0?re=>{var xe;ae.current=(xe=re==null?void 0:re.closest("form"))!=null?xe:null}:void 0,...Ve({key:m,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:l,name:m,value:y})})),X({ourProps:Te,theirProps:a,slot:M,defaultTag:rt,name:"Combobox"}))))}let lt="input";function st(e,o){var n,t,s,l;let r=te(),{id:f=`headlessui-combobox-input-${r}`,onChange:x,displayValue:u,type:w="text",...z}=e,a=Z("Combobox.Input"),i=ne("Combobox.Input"),O=oe(a.inputRef,o),v=Ze(a.inputRef),p=b.useRef(!1),T=be(),C=g(()=>{i.onChange(null),a.optionsRef.current&&(a.optionsRef.current.scrollTop=0),i.goToOption(I.Nothing)}),G=function(){var d;return typeof u=="function"&&a.value!==void 0?(d=u(a.value))!=null?d:"":typeof a.value=="string"?a.value:""}();ye(([d,V],[D,ee])=>{if(p.current)return;let E=a.inputRef.current;E&&((ee===0&&V===1||d!==D)&&(E.value=d),requestAnimationFrame(()=>{if(p.current||!E||(v==null?void 0:v.activeElement)!==E)return;let{selectionStart:_,selectionEnd:$}=E;Math.abs(($??0)-(_??0))===0&&_===0&&E.setSelectionRange(E.value.length,E.value.length)}))},[G,a.comboboxState,v]),ye(([d],[V])=>{if(d===0&&V===1){if(p.current)return;let D=a.inputRef.current;if(!D)return;let ee=D.value,{selectionStart:E,selectionEnd:_,selectionDirection:$}=D;D.value="",D.value=ee,$!==null?D.setSelectionRange(E,_,$):D.setSelectionRange(E,_)}},[a.comboboxState]);let P=b.useRef(!1),H=g(()=>{P.current=!0}),W=g(()=>{T.nextFrame(()=>{P.current=!1})}),B=g(d=>{switch(p.current=!0,d.key){case N.Enter:if(p.current=!1,a.comboboxState!==0||P.current)return;if(d.preventDefault(),d.stopPropagation(),a.activeOptionIndex===null){i.closeCombobox();return}i.selectActiveOption(),a.mode===0&&i.closeCombobox();break;case N.ArrowDown:return p.current=!1,d.preventDefault(),d.stopPropagation(),J(a.comboboxState,{0:()=>{i.goToOption(I.Next)},1:()=>{i.openCombobox()}});case N.ArrowUp:return p.current=!1,d.preventDefault(),d.stopPropagation(),J(a.comboboxState,{0:()=>{i.goToOption(I.Previous)},1:()=>{i.openCombobox(),T.nextFrame(()=>{a.value||i.goToOption(I.Last)})}});case N.Home:if(d.shiftKey)break;return p.current=!1,d.preventDefault(),d.stopPropagation(),i.goToOption(I.First);case N.PageUp:return p.current=!1,d.preventDefault(),d.stopPropagation(),i.goToOption(I.First);case N.End:if(d.shiftKey)break;return p.current=!1,d.preventDefault(),d.stopPropagation(),i.goToOption(I.Last);case N.PageDown:return p.current=!1,d.preventDefault(),d.stopPropagation(),i.goToOption(I.Last);case N.Escape:return p.current=!1,a.comboboxState!==0?void 0:(d.preventDefault(),a.optionsRef.current&&!a.optionsPropsRef.current.static&&d.stopPropagation(),a.nullable&&a.mode===0&&a.value===null&&C(),i.closeCombobox());case N.Tab:if(p.current=!1,a.comboboxState!==0)return;a.mode===0&&i.selectActiveOption(),i.closeCombobox();break}}),A=g(d=>{x==null||x(d),a.nullable&&a.mode===0&&d.target.value===""&&C(),i.openCombobox()}),c=g(()=>{p.current=!1}),S=me(()=>{if(a.labelId)return[a.labelId].join(" ")},[a.labelId]),M=b.useMemo(()=>({open:a.comboboxState===0,disabled:a.disabled}),[a]),Y={ref:O,id:f,role:"combobox",type:w,"aria-controls":(n=a.optionsRef.current)==null?void 0:n.id,"aria-expanded":a.comboboxState===0,"aria-activedescendant":a.activeOptionIndex===null||(t=a.options[a.activeOptionIndex])==null?void 0:t.id,"aria-labelledby":S,"aria-autocomplete":"list",defaultValue:(l=(s=e.defaultValue)!=null?s:a.defaultValue!==void 0?u==null?void 0:u(a.defaultValue):null)!=null?l:a.defaultValue,disabled:a.disabled,onCompositionStart:H,onCompositionEnd:W,onKeyDown:B,onChange:A,onBlur:c};return X({ourProps:Y,theirProps:z,slot:M,defaultTag:lt,name:"Combobox.Input"})}let ct="button";function ut(e,o){var n;let t=Z("Combobox.Button"),s=ne("Combobox.Button"),l=oe(t.buttonRef,o),r=te(),{id:f=`headlessui-combobox-button-${r}`,...x}=e,u=be(),w=g(v=>{switch(v.key){case N.ArrowDown:return v.preventDefault(),v.stopPropagation(),t.comboboxState===1&&s.openCombobox(),u.nextFrame(()=>{var p;return(p=t.inputRef.current)==null?void 0:p.focus({preventScroll:!0})});case N.ArrowUp:return v.preventDefault(),v.stopPropagation(),t.comboboxState===1&&(s.openCombobox(),u.nextFrame(()=>{t.value||s.goToOption(I.Last)})),u.nextFrame(()=>{var p;return(p=t.inputRef.current)==null?void 0:p.focus({preventScroll:!0})});case N.Escape:return t.comboboxState!==0?void 0:(v.preventDefault(),t.optionsRef.current&&!t.optionsPropsRef.current.static&&v.stopPropagation(),s.closeCombobox(),u.nextFrame(()=>{var p;return(p=t.inputRef.current)==null?void 0:p.focus({preventScroll:!0})}));default:return}}),z=g(v=>{if(_e(v.currentTarget))return v.preventDefault();t.comboboxState===0?s.closeCombobox():(v.preventDefault(),s.openCombobox()),u.nextFrame(()=>{var p;return(p=t.inputRef.current)==null?void 0:p.focus({preventScroll:!0})})}),a=me(()=>{if(t.labelId)return[t.labelId,f].join(" ")},[t.labelId,f]),i=b.useMemo(()=>({open:t.comboboxState===0,disabled:t.disabled,value:t.value}),[t]),O={ref:l,id:f,type:$e(e,t.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(n=t.optionsRef.current)==null?void 0:n.id,"aria-expanded":t.comboboxState===0,"aria-labelledby":a,disabled:t.disabled,onClick:z,onKeyDown:w};return X({ourProps:O,theirProps:x,slot:i,defaultTag:ct,name:"Combobox.Button"})}let pt="label";function dt(e,o){let n=te(),{id:t=`headlessui-combobox-label-${n}`,...s}=e,l=Z("Combobox.Label"),r=ne("Combobox.Label"),f=oe(l.labelRef,o);U(()=>r.registerLabel(t),[t]);let x=g(()=>{var w;return(w=l.inputRef.current)==null?void 0:w.focus({preventScroll:!0})}),u=b.useMemo(()=>({open:l.comboboxState===0,disabled:l.disabled}),[l]);return X({ourProps:{ref:f,id:t,onClick:x},theirProps:s,slot:u,defaultTag:pt,name:"Combobox.Label"})}let bt="ul",mt=ge.RenderStrategy|ge.Static;function ft(e,o){let n=te(),{id:t=`headlessui-combobox-options-${n}`,hold:s=!1,...l}=e,r=Z("Combobox.Options"),f=oe(r.optionsRef,o),x=Me(),u=(()=>x!==null?(x&ce.Open)===ce.Open:r.comboboxState===0)();U(()=>{var i;r.optionsPropsRef.current.static=(i=e.static)!=null?i:!1},[r.optionsPropsRef,e.static]),U(()=>{r.optionsPropsRef.current.hold=s},[r.optionsPropsRef,s]),We({container:r.optionsRef.current,enabled:r.comboboxState===0,accept(i){return i.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:i.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(i){i.setAttribute("role","none")}});let w=me(()=>{var i,O;return(O=r.labelId)!=null?O:(i=r.buttonRef.current)==null?void 0:i.id},[r.labelId,r.buttonRef.current]),z=b.useMemo(()=>({open:r.comboboxState===0}),[r]),a={"aria-labelledby":w,role:"listbox","aria-multiselectable":r.mode===1?!0:void 0,id:t,ref:f};return X({ourProps:a,theirProps:l,slot:z,defaultTag:bt,features:mt,visible:u,name:"Combobox.Options"})}let vt="li";function xt(e,o){var n,t;let s=te(),{id:l=`headlessui-combobox-option-${s}`,disabled:r=!1,value:f,...x}=e,u=Z("Combobox.Option"),w=ne("Combobox.Option"),z=u.activeOptionIndex!==null?u.options[u.activeOptionIndex].id===l:!1,a=u.isSelected(f),i=b.useRef(null),O=je({disabled:r,value:f,domRef:i,textValue:(t=(n=i.current)==null?void 0:n.textContent)==null?void 0:t.toLowerCase()}),v=oe(o,i),p=g(()=>w.selectOption(l));U(()=>w.registerOption(l,O),[O,l]);let T=b.useRef(!u.__demoMode);U(()=>{if(!u.__demoMode)return;let c=we();return c.requestAnimationFrame(()=>{T.current=!0}),c.dispose},[]),U(()=>{if(u.comboboxState!==0||!z||!T.current||u.activationTrigger===0)return;let c=we();return c.requestAnimationFrame(()=>{var S,M;(M=(S=i.current)==null?void 0:S.scrollIntoView)==null||M.call(S,{block:"nearest"})}),c.dispose},[i,z,u.comboboxState,u.activationTrigger,u.activeOptionIndex]);let C=g(c=>{if(r)return c.preventDefault();p(),u.mode===0&&w.closeCombobox(),Xe()||requestAnimationFrame(()=>{var S;return(S=u.inputRef.current)==null?void 0:S.focus()})}),G=g(()=>{if(r)return w.goToOption(I.Nothing);w.goToOption(I.Specific,l)}),P=He(),H=g(c=>P.update(c)),W=g(c=>{P.wasMoved(c)&&(r||z||w.goToOption(I.Specific,l,0))}),B=g(c=>{P.wasMoved(c)&&(r||z&&(u.optionsPropsRef.current.hold||w.goToOption(I.Nothing)))}),A=b.useMemo(()=>({active:z,selected:a,disabled:r}),[z,a,r]);return X({ourProps:{id:l,ref:v,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":a,disabled:void 0,onClick:C,onFocus:G,onPointerEnter:H,onMouseEnter:H,onPointerMove:W,onMouseMove:W,onPointerLeave:B,onMouseLeave:B},theirProps:x,slot:A,defaultTag:vt,name:"Combobox.Option"})}let wt=Q(it),gt=Q(ut),yt=Q(st),ht=Q(dt),zt=Q(ft),Ot=Q(xt),q=Object.assign(wt,{Input:yt,Button:gt,Label:ht,Options:zt,Option:Ot});const Rt=268,It=(e,o)=>{const n=new RegExp(o,"gi");return e.replace(n,t=>"<b>"+t+"</b>")},Ct=(e,o)=>j("zep-flex zep-w-full zep-items-center zep-justify-between zep-bg-background-light zep-px-1 zep-py-0.75",{"zep-bg-greyscale-200":e},{"zep-bg-greyscale-300":o},{"zep-pr-3":o}),de=({disabled:e=!1,items:o,label:n,message:t,noOptionsLabel:s,placeholder:l,readOnly:r=!1,state:f="default",...x})=>{const u=K.useRef(null),w=K.useRef(null),z=f==="error",a=f==="info",[i,O]=K.useState(""),[v,p]=K.useState(null),T=i!==""||v!==null,C=e||r,G=z?"zep-text-error":a?"zep-text-info":"",P=i===""?o:o.filter(H=>H.name.toLowerCase().includes(i.toLowerCase()));return h.jsxs("div",{className:Pe(j("zep-relative","zep-inline-block","zep-text-left","zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":e}),x.className),"data-testid":"zep-drop-down-filter",...x,children:[h.jsx(q,{as:"div",value:v,onChange:p,disabled:C,children:({open:H})=>{const B=Ee(w.current)<Rt,A=e?"zep-text-opacity-disabled":"zep-text-typography-dark-100",c=j("zep-bg-background-light","zep-inline-flex","zep-justify-between","zep-rounded-4","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none","zep-truncate",z?"zep-border-2 zep-border-error":"zep-border-1 zep-border-neutral-dark-default",T?"zep-pr-4":"zep-pr-0.75",A,"placeholder:zep-text-typography-dark-100/70",{"zep-ring":H},{"zep-bg-background-medium":r},{"zep-border-opacity-disabled":e},{"zep-active:zep-ring":!C},{"zep-ring-offset-1":!C},{"focus-visible:zep-ring":!C},{"zep-ring-focus":!C},{"zep-cursor-not-allowed":C}),S=j("zep-absolute","zep-shadow-sm","zep-py-0.25","zep-z-10","zep-right-0","zep-w-full","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-4","zep-bg-background-light","zep-ring-1,","zep-ring-tertiary","zep-ring-opacity-1","focus:outline-none","zep-overflow-hidden","zep-overflow-y-auto",B?"zep-mb-[-25px]":"zep-mt-0.25",{"zep-bottom-full":B}),M=j("zep-absolute","zep-top-0.75","zep-right-2.5","zep-flex","zep-items-center"),Y=j(C?"zep-text-opacity-disabled":"zep-text-typography-dark-100","zep-shrink-0","zep-transition-transform","zep-duration-300",{"zep-rotate-180":H});return h.jsxs(h.Fragment,{children:[n&&h.jsx(q.Label,{className:j("zep-block","zep-mb-0.5",{"zep-text-opacity-disabled":e}),children:n}),h.jsxs("div",{className:"zeb-block zep-relative zep-mt-0.5",children:[h.jsx(q.Input,{className:c,autoComplete:"off",placeholder:r?void 0:l,readOnly:r,ref:w,"data-testid":"zep-drop-down-filter-input",onChange:d=>O(d.target.value)}),!!v&&h.jsx("button",{className:M,"data-testid":"zep-drop-down-filter-delete",disabled:C,onClick:()=>{O(""),p(null)},children:h.jsx(ie,{className:A,name:"delete-circle",size:24})}),h.jsx(q.Button,{"data-testid":"zep-drop-down-filter-button",className:"zep-absolute zep-inset-y-[0px] zep-right-[0px] zep-flex zep-items-center zep-pr-0.75",children:h.jsx(ie,{className:Y,name:"chevron-mini-down",role:"img",size:24})}),P.length>0?h.jsx(q.Options,{className:S,ref:u,"data-testid":"zep-drop-down-filter-menu",children:P.map(d=>h.jsx(q.Option,{"data-testid":"zep-drop-down-filter-option",value:d.name,className:({active:V,selected:D})=>Ct(V,D),children:({selected:V})=>h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"zep-truncate",dangerouslySetInnerHTML:{__html:It(d.name,i)}}),V&&h.jsx(ie,{name:"check",role:"img",size:24,className:"zep-absolute zep-right-1"})]})},d.id))}):h.jsx(q.Options,{className:S,ref:u,children:h.jsx(q.Option,{"data-testid":"zep-drop-down-filter-no-options",value:0,className:j("zep-block zep-py-0.75 zep-text-center"),children:s})})]})]})}}),t&&h.jsxs("div",{className:j("zep-mt-0.25",{"zep-text-typography-dark-100":!z&&!a},"zep-text-0.875","zep-flex",G),children:[f!=="default"&&h.jsx(ie,{name:f==="error"?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),h.jsx("span",{className:"zep-mt-0.125",children:t})]})]})};try{de.displayName="DropDownFilter",de.__docgenInfo={description:"",displayName:"DropDownFilter",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropDownFilterItem[]"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},noOptionsLabel:{defaultValue:null,description:"",name:"noOptionsLabel",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"info"'}]}}}}}catch{}const L=[{id:1,name:"Navigation link"},{id:2,name:"Clickable action"},{id:3,name:"Archive"},{id:4,name:"Here is a really long text that should be truncated"},{id:5,name:"Duplicate"},{id:6,name:"License"},{id:7,name:"Move"},{id:8,name:"Sign out"}],qt={title:"Components/DropDown Filter",component:de,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}}},decorators:[e=>h.jsx(Ge,{className:"zep-w-[326px]",children:h.jsx(e,{})})]},le={args:{disabled:!1,items:L,label:"Dropdown Filter",noOptionsLabel:"Keine Optionen",placeholder:"Auswählen (Hint)",readOnly:!1,state:"default"},play:async({canvasElement:e,step:o})=>{const n=Se(e),t=n.getByTestId("zep-drop-down-filter-input"),s=n.getByTestId("zep-drop-down-filter-button");await o("Initial checks",async()=>{await F(t).toBeInTheDocument()}),await o("Select dropDown with keyboard",async()=>{await R.tab(),await F(t).toHaveFocus()}),await o("Open dropDown options with keyboard",async()=>{await R.keyboard("{arrowdown}"),await o("Check dropDown options",async()=>{L.forEach(l=>{F(n.getByText(l.name)).toBeInTheDocument()})})}),await o("Select dropDown first option with keyboard",async()=>{await R.keyboard("{arrowdown}"),await R.keyboard("{enter}"),await F(t).toHaveValue(L[1].name)}),await o("Select dropDown third option with keyboard",async()=>{await R.keyboard("{arrowdown}"),await R.keyboard("{arrowdown}"),await R.keyboard("{arrowdown}"),await R.keyboard("{enter}"),await F(t).toHaveValue(L[3].name)}),await o("Select dropDown second option with mouse",async()=>{await R.click(s),await R.click(n.getByText(L[2].name)),await F(t).toHaveValue(L[2].name)}),await o("Slect dropDown third option with mouse",async()=>{await R.click(s),await R.click(n.getByText(L[3].name)),await F(t).toHaveValue(L[3].name)}),await o("Delete dropDown option with mouse",async()=>{const l=n.getByTestId("zep-drop-down-filter-delete");await F(l).toBeInTheDocument(),await R.tab(),await F(t).not.toHaveFocus(),await R.click(l),await F(t).toHaveValue(""),await R.tab()}),await o("Blur dropDown",async()=>{await R.tab(),await F(t).not.toHaveFocus()})}},se={args:{disabled:!1,items:L,label:"Dropdown Filter",noOptionsLabel:"Keine Optionen",placeholder:"Auswählen (Hint)",readOnly:!1,state:"default"},play:async({canvasElement:e})=>{const o=Se(e);await R.click(o.getByTestId("zep-drop-down-filter-button")),await R.click(o.getByText(L[2].name)),await F(o.getByTestId("zep-drop-down-filter-input")).toHaveValue(L[2].name)}};var he,ze,Oe;le.parameters={...le.parameters,docs:{...(he=le.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: ({
    disabled: false,
    items,
    label: 'Dropdown Filter',
    noOptionsLabel: 'Keine Optionen',
    placeholder: 'Auswählen (Hint)',
    readOnly: false,
    state: 'default'
  } as DropDownFilterProps),
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByTestId('zep-drop-down-filter-input');
    const comboboxButton = canvas.getByTestId('zep-drop-down-filter-button');
    await step('Initial checks', async () => {
      await expect(combobox).toBeInTheDocument();
    });
    await step('Select dropDown with keyboard', async () => {
      await userEvent.tab();
      await expect(combobox).toHaveFocus();
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
      await expect(combobox).toHaveValue(items[1].name);
    });
    await step('Select dropDown third option with keyboard', async () => {
      await userEvent.keyboard('{arrowdown}');
      await userEvent.keyboard('{arrowdown}');
      await userEvent.keyboard('{arrowdown}');
      await userEvent.keyboard('{enter}');
      await expect(combobox).toHaveValue(items[3].name);
    });
    await step('Select dropDown second option with mouse', async () => {
      await userEvent.click(comboboxButton);
      await userEvent.click(canvas.getByText(items[2].name));
      await expect(combobox).toHaveValue(items[2].name);
    });
    await step('Slect dropDown third option with mouse', async () => {
      await userEvent.click(comboboxButton);
      await userEvent.click(canvas.getByText(items[3].name));
      await expect(combobox).toHaveValue(items[3].name);
    });
    await step('Delete dropDown option with mouse', async () => {
      const comboboxDeleteButton = canvas.getByTestId('zep-drop-down-filter-delete');
      await expect(comboboxDeleteButton).toBeInTheDocument();
      await userEvent.tab();
      await expect(combobox).not.toHaveFocus();
      await userEvent.click(comboboxDeleteButton);
      await expect(combobox).toHaveValue('');
      await userEvent.tab();
    });
    await step('Blur dropDown', async () => {
      await userEvent.tab();
      await expect(combobox).not.toHaveFocus();
    });
  }
}`,...(Oe=(ze=le.parameters)==null?void 0:ze.docs)==null?void 0:Oe.source}}};var Re,Ie,Ce;se.parameters={...se.parameters,docs:{...(Re=se.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: ({
    disabled: false,
    items,
    label: 'Dropdown Filter',
    noOptionsLabel: 'Keine Optionen',
    placeholder: 'Auswählen (Hint)',
    readOnly: false,
    state: 'default'
  } as DropDownFilterProps),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByTestId('zep-drop-down-filter-button'));
    await userEvent.click(canvas.getByText(items[2].name));
    await expect(canvas.getByTestId('zep-drop-down-filter-input')).toHaveValue(items[2].name);
  }
}`,...(Ce=(Ie=se.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};const Kt=["Default","SelectAnItem"];export{le as Default,se as SelectAnItem,Kt as __namedExportsOrder,qt as default};
//# sourceMappingURL=DropDownFilter.stories-dedd837c.js.map
