import{j as O,c as $}from"./clsx-667af910.js";import{w as Pe,u as ve,e as Ee}from"./index-651af7b4.js";import{r as b,R as B}from"./index-37ba2b57.js";import{l as H,j as Ie,o as z,S as xe,D as G,T as De,u as U,h as ke,p as ce,c as Fe,d as ie,e as Ne,f as je,g as Le,R as $e,X as W,I as Z,y as Y,i as de,s as Ae,C as Me,k as _e,m as Ve,n as w,q as F,r as Be,t as ge,x as He,v as qe,w as Ke}from"./getDistanceToBottom-9e685d19.js";import{F as ne}from"./Icon-ceed2606.js";import{t as Ue}from"./tw-merge-1166cefb.js";import{S as Ge}from"./Spacing-6c783f0a.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";function We({container:e,accept:o,walk:l,enabled:t=!0}){let u=b.useRef(o),s=b.useRef(l);b.useEffect(()=>{u.current=o,s.current=l},[o,l]),H(()=>{if(!e||!t)return;let r=Ie(e);if(!r)return;let m=u.current,x=s.current,p=Object.assign(R=>m(R),{acceptNode:m}),g=r.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,p,!1);for(;g.nextNode();)x(g.currentNode)},[e,t,u,s])}function ze(e,o){let l=b.useRef([]),t=z(e);b.useEffect(()=>{let u=[...l.current];for(let[s,r]of o.entries())if(l.current[s]!==r){let m=t(o,u);return l.current=o,m}},[t,...o])}function Je(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Qe(){return/Android/gi.test(window.navigator.userAgent)}function Xe(){return Je()||Qe()}function Ze(...e){return b.useMemo(()=>Ie(...e),[...e])}var Ye=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ye||{}),et=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(et||{}),tt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(tt||{}),ot=(e=>(e[e.OpenCombobox=0]="OpenCombobox",e[e.CloseCombobox=1]="CloseCombobox",e[e.GoToOption=2]="GoToOption",e[e.RegisterOption=3]="RegisterOption",e[e.UnregisterOption=4]="UnregisterOption",e[e.RegisterLabel=5]="RegisterLabel",e))(ot||{});function ue(e,o=l=>l){let l=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,t=qe(o(e.options.slice()),s=>s.dataRef.current.domRef.current),u=l?t.indexOf(l):null;return u===-1&&(u=null),{options:t,activeOptionIndex:u}}let nt={1(e){var o;return(o=e.dataRef.current)!=null&&o.disabled||e.comboboxState===1?e:{...e,activeOptionIndex:null,comboboxState:1}},0(e){var o;if((o=e.dataRef.current)!=null&&o.disabled||e.comboboxState===0)return e;let l=e.activeOptionIndex;if(e.dataRef.current){let{isSelected:t}=e.dataRef.current,u=e.options.findIndex(s=>t(s.dataRef.current.value));u!==-1&&(l=u)}return{...e,comboboxState:0,activeOptionIndex:l}},2(e,o){var l,t,u,s;if((l=e.dataRef.current)!=null&&l.disabled||(t=e.dataRef.current)!=null&&t.optionsRef.current&&!((u=e.dataRef.current)!=null&&u.optionsPropsRef.current.static)&&e.comboboxState===1)return e;let r=ue(e);if(r.activeOptionIndex===null){let x=r.options.findIndex(p=>!p.dataRef.current.disabled);x!==-1&&(r.activeOptionIndex=x)}let m=He(o,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:x=>x.id,resolveDisabled:x=>x.dataRef.current.disabled});return{...e,...r,activeOptionIndex:m,activationTrigger:(s=o.trigger)!=null?s:1}},3:(e,o)=>{var l,t;let u={id:o.id,dataRef:o.dataRef},s=ue(e,m=>[...m,u]);e.activeOptionIndex===null&&(l=e.dataRef.current)!=null&&l.isSelected(o.dataRef.current.value)&&(s.activeOptionIndex=s.options.indexOf(u));let r={...e,...s,activationTrigger:1};return(t=e.dataRef.current)!=null&&t.__demoMode&&e.dataRef.current.value===void 0&&(r.activeOptionIndex=0),r},4:(e,o)=>{let l=ue(e,t=>{let u=t.findIndex(s=>s.id===o.id);return u!==-1&&t.splice(u,1),t});return{...e,...l,activationTrigger:1}},5:(e,o)=>({...e,labelId:o.id})},be=b.createContext(null);be.displayName="ComboboxActionsContext";function ee(e){let o=b.useContext(be);if(o===null){let l=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,ee),l}return o}let fe=b.createContext(null);fe.displayName="ComboboxDataContext";function J(e){let o=b.useContext(fe);if(o===null){let l=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,J),l}return o}function rt(e,o){return U(o.type,nt,e,o)}let at=b.Fragment;function lt(e,o){let{value:l,defaultValue:t,onChange:u,form:s,name:r,by:m=(f,h)=>f===h,disabled:x=!1,__demoMode:p=!1,nullable:g=!1,multiple:R=!1,...n}=e,[a=R?[]:void 0,y]=De(l,u,t),[v,c]=b.useReducer(rt,{dataRef:b.createRef(),comboboxState:p?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),T=b.useRef(!1),C=b.useRef({static:!1,hold:!1}),q=b.useRef(null),D=b.useRef(null),N=b.useRef(null),K=b.useRef(null),k=z(typeof m=="string"?(f,h)=>{let S=m;return(f==null?void 0:f[S])===(h==null?void 0:h[S])}:m),A=b.useCallback(f=>U(i.mode,{1:()=>a.some(h=>k(h,f)),0:()=>k(a,f)}),[a]),i=b.useMemo(()=>({...v,optionsPropsRef:C,labelRef:q,inputRef:D,buttonRef:N,optionsRef:K,value:a,defaultValue:t,disabled:x,mode:R?1:0,get activeOptionIndex(){if(T.current&&v.activeOptionIndex===null&&v.options.length>0){let f=v.options.findIndex(h=>!h.dataRef.current.disabled);if(f!==-1)return f}return v.activeOptionIndex},compare:k,isSelected:A,nullable:g,__demoMode:p}),[a,t,x,R,g,p,v]),I=b.useRef(i.activeOptionIndex!==null?i.options[i.activeOptionIndex]:null);b.useEffect(()=>{let f=i.activeOptionIndex!==null?i.options[i.activeOptionIndex]:null;I.current!==f&&(I.current=f)}),H(()=>{v.dataRef.current=i},[i]),ke([i.buttonRef,i.inputRef,i.optionsRef],()=>se.closeCombobox(),i.comboboxState===0);let M=b.useMemo(()=>({open:i.comboboxState===0,disabled:x,activeIndex:i.activeOptionIndex,activeOption:i.activeOptionIndex===null?null:i.options[i.activeOptionIndex].dataRef.current.value,value:a}),[i,x,a]),Q=z(f=>{let h=i.options.find(S=>S.id===f);h&&L(h.dataRef.current.value)}),d=z(()=>{if(i.activeOptionIndex!==null){let{dataRef:f,id:h}=i.options[i.activeOptionIndex];L(f.current.value),se.goToOption(w.Specific,h)}}),j=z(()=>{c({type:0}),T.current=!0}),P=z(()=>{c({type:1}),T.current=!1}),X=z((f,h,S)=>(T.current=!1,f===w.Specific?c({type:2,focus:w.Specific,id:h,trigger:S}):c({type:2,focus:f,trigger:S}))),E=z((f,h)=>(c({type:3,id:f,dataRef:h}),()=>{var S;((S=I.current)==null?void 0:S.id)===f&&(T.current=!0),c({type:4,id:f})})),_=z(f=>(c({type:5,id:f}),()=>c({type:5,id:null}))),L=z(f=>U(i.mode,{0(){return y==null?void 0:y(f)},1(){let h=i.value.slice(),S=h.findIndex(oe=>k(oe,f));return S===-1?h.push(f):h.splice(S,1),y==null?void 0:y(h)}})),se=b.useMemo(()=>({onChange:L,registerOption:E,registerLabel:_,goToOption:X,closeCombobox:P,openCombobox:j,selectActiveOption:d,selectOption:Q}),[]),Se=o===null?{}:{ref:o},te=b.useRef(null),Te=ce();return b.useEffect(()=>{te.current&&t!==void 0&&Te.addEventListener(te.current,"reset",()=>{y==null||y(t)})},[te,y]),B.createElement(be.Provider,{value:se},B.createElement(fe.Provider,{value:i},B.createElement(Fe,{value:U(i.comboboxState,{0:ie.Open,1:ie.Closed})},r!=null&&a!=null&&Ne({[r]:a}).map(([f,h],S)=>B.createElement(je,{features:Le.Hidden,ref:S===0?oe=>{var me;te.current=(me=oe==null?void 0:oe.closest("form"))!=null?me:null}:void 0,...$e({key:f,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:s,name:f,value:h})})),W({ourProps:Se,theirProps:n,slot:M,defaultTag:at,name:"Combobox"}))))}let it="input";function st(e,o){var l,t,u,s;let r=Z(),{id:m=`headlessui-combobox-input-${r}`,onChange:x,displayValue:p,type:g="text",...R}=e,n=J("Combobox.Input"),a=ee("Combobox.Input"),y=Y(n.inputRef,o),v=Ze(n.inputRef),c=b.useRef(!1),T=ce(),C=z(()=>{a.onChange(null),n.optionsRef.current&&(n.optionsRef.current.scrollTop=0),a.goToOption(w.Nothing)}),q=function(){var d;return typeof p=="function"&&n.value!==void 0?(d=p(n.value))!=null?d:"":typeof n.value=="string"?n.value:""}();ze(([d,j],[P,X])=>{if(c.current)return;let E=n.inputRef.current;E&&((X===0&&j===1||d!==P)&&(E.value=d),requestAnimationFrame(()=>{if(c.current||!E||(v==null?void 0:v.activeElement)!==E)return;let{selectionStart:_,selectionEnd:L}=E;Math.abs((L??0)-(_??0))===0&&_===0&&E.setSelectionRange(E.value.length,E.value.length)}))},[q,n.comboboxState,v]),ze(([d],[j])=>{if(d===0&&j===1){if(c.current)return;let P=n.inputRef.current;if(!P)return;let X=P.value,{selectionStart:E,selectionEnd:_,selectionDirection:L}=P;P.value="",P.value=X,L!==null?P.setSelectionRange(E,_,L):P.setSelectionRange(E,_)}},[n.comboboxState]);let D=b.useRef(!1),N=z(()=>{D.current=!0}),K=z(()=>{T.nextFrame(()=>{D.current=!1})}),k=z(d=>{switch(c.current=!0,d.key){case F.Enter:if(c.current=!1,n.comboboxState!==0||D.current)return;if(d.preventDefault(),d.stopPropagation(),n.activeOptionIndex===null){a.closeCombobox();return}a.selectActiveOption(),n.mode===0&&a.closeCombobox();break;case F.ArrowDown:return c.current=!1,d.preventDefault(),d.stopPropagation(),U(n.comboboxState,{0:()=>{a.goToOption(w.Next)},1:()=>{a.openCombobox()}});case F.ArrowUp:return c.current=!1,d.preventDefault(),d.stopPropagation(),U(n.comboboxState,{0:()=>{a.goToOption(w.Previous)},1:()=>{a.openCombobox(),T.nextFrame(()=>{n.value||a.goToOption(w.Last)})}});case F.Home:if(d.shiftKey)break;return c.current=!1,d.preventDefault(),d.stopPropagation(),a.goToOption(w.First);case F.PageUp:return c.current=!1,d.preventDefault(),d.stopPropagation(),a.goToOption(w.First);case F.End:if(d.shiftKey)break;return c.current=!1,d.preventDefault(),d.stopPropagation(),a.goToOption(w.Last);case F.PageDown:return c.current=!1,d.preventDefault(),d.stopPropagation(),a.goToOption(w.Last);case F.Escape:return c.current=!1,n.comboboxState!==0?void 0:(d.preventDefault(),n.optionsRef.current&&!n.optionsPropsRef.current.static&&d.stopPropagation(),n.nullable&&n.mode===0&&n.value===null&&C(),a.closeCombobox());case F.Tab:if(c.current=!1,n.comboboxState!==0)return;n.mode===0&&a.selectActiveOption(),a.closeCombobox();break}}),A=z(d=>{x==null||x(d),n.nullable&&n.mode===0&&d.target.value===""&&C(),a.openCombobox()}),i=z(()=>{c.current=!1}),I=de(()=>{if(n.labelId)return[n.labelId].join(" ")},[n.labelId]),M=b.useMemo(()=>({open:n.comboboxState===0,disabled:n.disabled}),[n]),Q={ref:y,id:m,role:"combobox",type:g,"aria-controls":(l=n.optionsRef.current)==null?void 0:l.id,"aria-expanded":n.comboboxState===0,"aria-activedescendant":n.activeOptionIndex===null||(t=n.options[n.activeOptionIndex])==null?void 0:t.id,"aria-labelledby":I,"aria-autocomplete":"list",defaultValue:(s=(u=e.defaultValue)!=null?u:n.defaultValue!==void 0?p==null?void 0:p(n.defaultValue):null)!=null?s:n.defaultValue,disabled:n.disabled,onCompositionStart:N,onCompositionEnd:K,onKeyDown:k,onChange:A,onBlur:i};return W({ourProps:Q,theirProps:R,slot:M,defaultTag:it,name:"Combobox.Input"})}let ut="button";function pt(e,o){var l;let t=J("Combobox.Button"),u=ee("Combobox.Button"),s=Y(t.buttonRef,o),r=Z(),{id:m=`headlessui-combobox-button-${r}`,...x}=e,p=ce(),g=z(v=>{switch(v.key){case F.ArrowDown:return v.preventDefault(),v.stopPropagation(),t.comboboxState===1&&u.openCombobox(),p.nextFrame(()=>{var c;return(c=t.inputRef.current)==null?void 0:c.focus({preventScroll:!0})});case F.ArrowUp:return v.preventDefault(),v.stopPropagation(),t.comboboxState===1&&(u.openCombobox(),p.nextFrame(()=>{t.value||u.goToOption(w.Last)})),p.nextFrame(()=>{var c;return(c=t.inputRef.current)==null?void 0:c.focus({preventScroll:!0})});case F.Escape:return t.comboboxState!==0?void 0:(v.preventDefault(),t.optionsRef.current&&!t.optionsPropsRef.current.static&&v.stopPropagation(),u.closeCombobox(),p.nextFrame(()=>{var c;return(c=t.inputRef.current)==null?void 0:c.focus({preventScroll:!0})}));default:return}}),R=z(v=>{if(Be(v.currentTarget))return v.preventDefault();t.comboboxState===0?u.closeCombobox():(v.preventDefault(),u.openCombobox()),p.nextFrame(()=>{var c;return(c=t.inputRef.current)==null?void 0:c.focus({preventScroll:!0})})}),n=de(()=>{if(t.labelId)return[t.labelId,m].join(" ")},[t.labelId,m]),a=b.useMemo(()=>({open:t.comboboxState===0,disabled:t.disabled,value:t.value}),[t]),y={ref:s,id:m,type:Ae(e,t.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(l=t.optionsRef.current)==null?void 0:l.id,"aria-expanded":t.comboboxState===0,"aria-labelledby":n,disabled:t.disabled,onClick:R,onKeyDown:g};return W({ourProps:y,theirProps:x,slot:a,defaultTag:ut,name:"Combobox.Button"})}let ct="label";function dt(e,o){let l=Z(),{id:t=`headlessui-combobox-label-${l}`,...u}=e,s=J("Combobox.Label"),r=ee("Combobox.Label"),m=Y(s.labelRef,o);H(()=>r.registerLabel(t),[t]);let x=z(()=>{var g;return(g=s.inputRef.current)==null?void 0:g.focus({preventScroll:!0})}),p=b.useMemo(()=>({open:s.comboboxState===0,disabled:s.disabled}),[s]);return W({ourProps:{ref:m,id:t,onClick:x},theirProps:u,slot:p,defaultTag:ct,name:"Combobox.Label"})}let bt="ul",ft=xe.RenderStrategy|xe.Static;function mt(e,o){let l=Z(),{id:t=`headlessui-combobox-options-${l}`,hold:u=!1,...s}=e,r=J("Combobox.Options"),m=Y(r.optionsRef,o),x=Me(),p=(()=>x!==null?(x&ie.Open)===ie.Open:r.comboboxState===0)();H(()=>{var a;r.optionsPropsRef.current.static=(a=e.static)!=null?a:!1},[r.optionsPropsRef,e.static]),H(()=>{r.optionsPropsRef.current.hold=u},[r.optionsPropsRef,u]),We({container:r.optionsRef.current,enabled:r.comboboxState===0,accept(a){return a.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});let g=de(()=>{var a,y;return(y=r.labelId)!=null?y:(a=r.buttonRef.current)==null?void 0:a.id},[r.labelId,r.buttonRef.current]),R=b.useMemo(()=>({open:r.comboboxState===0}),[r]),n={"aria-labelledby":g,role:"listbox","aria-multiselectable":r.mode===1?!0:void 0,id:t,ref:m};return W({ourProps:n,theirProps:s,slot:R,defaultTag:bt,features:ft,visible:p,name:"Combobox.Options"})}let vt="li";function xt(e,o){var l,t;let u=Z(),{id:s=`headlessui-combobox-option-${u}`,disabled:r=!1,value:m,...x}=e,p=J("Combobox.Option"),g=ee("Combobox.Option"),R=p.activeOptionIndex!==null?p.options[p.activeOptionIndex].id===s:!1,n=p.isSelected(m),a=b.useRef(null),y=_e({disabled:r,value:m,domRef:a,textValue:(t=(l=a.current)==null?void 0:l.textContent)==null?void 0:t.toLowerCase()}),v=Y(o,a),c=z(()=>g.selectOption(s));H(()=>g.registerOption(s,y),[y,s]);let T=b.useRef(!p.__demoMode);H(()=>{if(!p.__demoMode)return;let i=ge();return i.requestAnimationFrame(()=>{T.current=!0}),i.dispose},[]),H(()=>{if(p.comboboxState!==0||!R||!T.current||p.activationTrigger===0)return;let i=ge();return i.requestAnimationFrame(()=>{var I,M;(M=(I=a.current)==null?void 0:I.scrollIntoView)==null||M.call(I,{block:"nearest"})}),i.dispose},[a,R,p.comboboxState,p.activationTrigger,p.activeOptionIndex]);let C=z(i=>{if(r)return i.preventDefault();c(),p.mode===0&&g.closeCombobox(),Xe()||requestAnimationFrame(()=>{var I;return(I=p.inputRef.current)==null?void 0:I.focus()})}),q=z(()=>{if(r)return g.goToOption(w.Nothing);g.goToOption(w.Specific,s)}),D=Ve(),N=z(i=>D.update(i)),K=z(i=>{D.wasMoved(i)&&(r||R||g.goToOption(w.Specific,s,0))}),k=z(i=>{D.wasMoved(i)&&(r||R&&(p.optionsPropsRef.current.hold||g.goToOption(w.Nothing)))}),A=b.useMemo(()=>({active:R,selected:n,disabled:r}),[R,n,r]);return W({ourProps:{id:s,ref:v,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":n,disabled:void 0,onClick:C,onFocus:q,onPointerEnter:N,onMouseEnter:N,onPointerMove:K,onMouseMove:K,onPointerLeave:k,onMouseLeave:k},theirProps:x,slot:A,defaultTag:vt,name:"Combobox.Option"})}let gt=G(lt),zt=G(pt),ht=G(st),Ot=G(dt),Rt=G(mt),yt=G(xt),V=Object.assign(gt,{Input:ht,Button:zt,Label:Ot,Options:Rt,Option:yt});const wt=268,Ct=(e,o)=>{const l=new RegExp(o,"gi");return e.replace(l,t=>"<b>"+t+"</b>")},It=(e,o)=>$("zep-flex zep-w-full zep-items-center zep-justify-between zep-bg-background-light zep-px-1 zep-py-0.75",{"zep-bg-background-medium":e},{"zep-bg-background-medium":o},{"zep-pr-3":o}),pe=({disabled:e=!1,items:o,label:l,message:t,noOptionsLabel:u,placeholder:s,readOnly:r=!1,state:m="default",...x})=>{const p=B.useRef(null),g=B.useRef(null),R=m==="error",n=m==="info",[a,y]=B.useState(""),[v,c]=B.useState(null),T=a!==""||v!==null,C=e||r,q=R?"zep-text-error":n?"zep-text-info":"",D=a===""?o:o.filter(N=>N.name.toLowerCase().includes(a.toLowerCase()));return O.jsxs("div",{className:Ue($("zep-relative","zep-inline-block","zep-text-left","zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":e}),x.className),"data-testid":"zep-drop-down-filter",...x,children:[O.jsx(V,{as:"div",value:v,onChange:c,disabled:C,children:({open:N})=>{const k=Ke(g.current)<wt,A=e?"zep-text-opacity-disabled":"zep-text-typography-dark-100",i=$("zep-bg-background-light","zep-inline-flex","zep-justify-between","zep-rounded-4","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none","zep-truncate",R?"zep-border-2 zep-border-error":"zep-border-1 zep-border-neutral-dark-default",T?"zep-pr-4":"zep-pr-0.75",A,"placeholder:zep-text-typography-dark-100/70",{"zep-ring":N},{"zep-bg-background-medium":r},{"zep-border-opacity-disabled":e},{"zep-active:zep-ring":!C},{"zep-ring-offset-1":!C},{"focus-visible:zep-ring":!C},{"zep-ring-focus":!C},{"zep-cursor-not-allowed":C}),I=$("zep-absolute","zep-shadow-sm","zep-py-0.25","zep-z-10","zep-right-0","zep-w-full","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-4","zep-bg-background-light","zep-ring-1,","zep-ring-tertiary","zep-ring-opacity-1","focus:outline-none","zep-overflow-hidden","zep-overflow-y-auto",k?"zep-mb-[-25px]":"zep-mt-0.25",{"zep-bottom-full":k}),M=$("zep-absolute","zep-top-0.75","zep-right-2.5","zep-flex","zep-items-center"),Q=$(C?"zep-text-opacity-disabled":"zep-text-typography-dark-100","zep-shrink-0","zep-transition-transform","zep-duration-300",{"zep-rotate-180":N});return O.jsxs(O.Fragment,{children:[l&&O.jsx(V.Label,{className:$("zep-block","zep-mb-0.5",{"zep-text-opacity-disabled":e}),children:l}),O.jsxs("div",{className:"zeb-block zep-relative zep-mt-0.5",children:[O.jsx(V.Input,{className:i,autoComplete:"off",placeholder:r?void 0:s,readOnly:r,ref:g,"data-testid":"zep-drop-down-filter-input",onChange:d=>y(d.target.value)}),!!v&&O.jsx("button",{className:M,"data-testid":"zep-drop-down-filter-delete",disabled:C,onClick:()=>{y(""),c(null)},children:O.jsx(ne,{className:A,name:"delete-circle",size:24})}),O.jsx(V.Button,{"data-testid":"zep-drop-down-filter-button",className:"zep-absolute zep-inset-y-[0px] zep-right-[0px] zep-flex zep-items-center zep-pr-0.75",children:O.jsx(ne,{className:Q,name:"chevron-mini-down",role:"img",size:24})}),D.length>0?O.jsx(V.Options,{className:I,ref:p,"data-testid":"zep-drop-down-filter-menu",children:D.map(d=>O.jsx(V.Option,{"data-testid":"zep-drop-down-filter-option",value:d.name,className:({active:j,selected:P})=>It(j,P),children:({selected:j})=>O.jsxs(O.Fragment,{children:[O.jsx("span",{className:"zep-truncate",dangerouslySetInnerHTML:{__html:Ct(d.name,a)}}),j&&O.jsx(ne,{name:"check",role:"img",size:24,className:"zep-absolute zep-right-1"})]})},d.id))}):O.jsx(V.Options,{className:I,ref:p,children:O.jsx(V.Option,{"data-testid":"zep-drop-down-filter-no-options",value:0,className:$("zep-block zep-py-0.75 zep-text-center"),children:u})})]})]})}}),t&&O.jsxs("div",{className:$("zep-mt-0.25",{"zep-text-typography-dark-100":!R&&!n},"zep-text-0.875","zep-flex",q),children:[m!=="default"&&O.jsx(ne,{name:m==="error"?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),O.jsx("span",{className:"zep-mt-0.125",children:t})]})]})};try{pe.displayName="DropDownFilter",pe.__docgenInfo={description:"",displayName:"DropDownFilter",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropDownFilterItem[]"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},noOptionsLabel:{defaultValue:null,description:"",name:"noOptionsLabel",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"info"'}]}}}}}catch{}const le=[{id:1,name:"Navigation link"},{id:2,name:"Clickable action"},{id:3,name:"Archive"},{id:4,name:"Here is a really long text that should be truncated"},{id:5,name:"Duplicate"},{id:6,name:"License"},{id:7,name:"Move"},{id:8,name:"Sign out"}],Mt={title:"Components/DropDown Filter",component:pe,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}}},decorators:[e=>O.jsx(Ge,{className:"zep-w-[326px]",children:O.jsx(e,{})})]},re={args:{disabled:!1,items:le,label:"Dropdown Filter",noOptionsLabel:"Keine Optionen",placeholder:"Auswählen (Hint)",readOnly:!1,state:"default"}},ae={args:{disabled:!1,items:le,label:"Dropdown Filter",noOptionsLabel:"Keine Optionen",placeholder:"Auswählen (Hint)",readOnly:!1,state:"default"},play:async({canvasElement:e})=>{const o=Pe(e);await ve.click(o.getByTestId("zep-drop-down-filter-button")),await ve.click(o.getByText(le[2].name)),await Ee(o.getByTestId("zep-drop-down-filter-input")).toHaveValue(le[2].name)}};var he,Oe,Re;re.parameters={...re.parameters,docs:{...(he=re.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: ({
    disabled: false,
    items,
    label: 'Dropdown Filter',
    noOptionsLabel: 'Keine Optionen',
    placeholder: 'Auswählen (Hint)',
    readOnly: false,
    state: 'default'
  } as DropDownFilterProps)
}`,...(Re=(Oe=re.parameters)==null?void 0:Oe.docs)==null?void 0:Re.source}}};var ye,we,Ce;ae.parameters={...ae.parameters,docs:{...(ye=ae.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ce=(we=ae.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};const _t=["Default","SelectAnItem"];export{re as Default,ae as SelectAnItem,_t as __namedExportsOrder,Mt as default};
//# sourceMappingURL=DropDownFilter.stories-18a4c855.js.map
