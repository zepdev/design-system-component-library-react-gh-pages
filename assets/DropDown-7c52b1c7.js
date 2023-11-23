import{j as e,c as r}from"./clsx-667af910.js";import{r as w,R as O}from"./index-37ba2b57.js";import{g as L}from"./getDistanceToBottom-7ac1525d.js";import{F as f}from"./Icon-ad687a94.js";import{t as M}from"./tw-merge-1166cefb.js";import{N as o}from"./listbox-8d1c5416.js";const P=268,S=(n,s)=>r("zep-flex zep-w-full zep-items-center zep-justify-between zep-bg-background-light zep-px-1 zep-py-0.75",{"zep-bg-greyscale-200":n},{"zep-bg-greyscale-300":s},{"zep-pr-3":s}),N=w.forwardRef(({disabled:n=!1,items:s,message:z,label:g,placeholder:j,required:V,notRequiredHint:k="(optional)",readOnly:u=!1,state:m="default",...a},D)=>{const[t,C]=w.useState(null),y=O.useRef(null),d=m==="error",b=m==="info",l=n||u,R=d?"zep-text-error":b?"zep-text-info":"",_=i=>{a!=null&&a.onChange&&(a==null||a.onChange(i)),C(i)};return e.jsxs("div",{className:M(r("zep-relative","zep-inline-block","zep-text-left","zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":n},a.className)),"data-testid":"zep-drop-down",children:[e.jsx(o,{disabled:l,...a,onChange:_,value:(a==null?void 0:a.value)||t,ref:D,children:({open:i})=>{var v,q;const h=L(y.current)<P,I=u?void 0:j,x=((v=a==null?void 0:a.value)==null?void 0:v.name)||(t==null?void 0:t.name)||I,E=n?"zep-text-opacity-disabled":!((q=a==null?void 0:a.value)!=null&&q.name)&&!(t!=null&&t.name)&&!u?"zep-text-typography-dark-100/70":"zep-text-typography-dark-100",F=r("zep-bg-background-light","zep-inline-flex","zep-justify-between","zep-rounded-4","zep-border-solid","zep-pl-1","zep-pr-0.75","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none",d?"zep-border-2 zep-border-error":"zep-border-1 zep-border-neutral-dark-default",E,{"zep-bg-background-medium":u},{"zep-ring":i},{"zep-active:zep-ring":!l},{"zep-ring-offset-1":!l},{"focus-visible:zep-ring":!l},{"zep-ring-focus":!l},{"zep-cursor-not-allowed":l}),T=r("zep-absolute","zep-shadow-sm","zep-py-0.25","zep-z-10","zep-w-full","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-4","zep-bg-background-light","focus:zep-outline-none","zep-overflow-hidden","zep-overflow-y-auto",h?"zep-mb-[-25px]":"zep-mt-0.25",{"zep-bottom-full":h}),B=r(l?"zep-text-opacity-disabled":"zep-text-typography-dark-100","zep-shrink-0","zep-transition-transform","zep-duration-300",{"zep-rotate-180":i});return e.jsxs(e.Fragment,{children:[g&&e.jsxs(o.Label,{className:r("zep-block","zep-mb-0.5",{"zep-text-opacity-disabled":n}),children:[g,!V&&e.jsx("span",{className:"zep-ml-0.25",children:k})]}),e.jsx(o.Button,{className:F,ref:y,title:x,"data-testid":"zep-drop-down-button",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"zep-truncate",children:x}),e.jsx(f,{className:B,name:"chevron-mini-down",role:"img",size:24})]})}),e.jsx(o.Options,{className:T,"data-testid":"zep-drop-down-menu",children:s.map((p,G)=>e.jsx(o.Option,{value:p,title:p.name,className:({active:c,selected:H})=>S(c,H),children:({selected:c})=>e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"zep-truncate",children:p.name}),c&&e.jsx(f,{name:"check",role:"img",size:24,className:"zep-absolute zep-right-1"})]})},p.id))})]})}}),z&&e.jsxs("div",{className:r("zep-mt-0.25",{"zep-text-typography-dark-100":!d&&!b},"zep-text-0.875","zep-flex",R),children:[m!=="default"&&e.jsx(f,{name:d?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),e.jsx("span",{className:"zep-mt-0.125",children:z})]})]})});try{N.displayName="DropDown",N.__docgenInfo={description:"",displayName:"DropDown",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropDownItem[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"DropDownItem"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},notRequiredHint:{defaultValue:{value:"(optional)"},description:"",name:"notRequiredHint",required:!1,type:{name:"string"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"default"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((item: string) => void)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'}]}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ((bag: ListboxRenderPropArg<any>) => string)"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"any"}},by:{defaultValue:null,description:"",name:"by",required:!1,type:{name:"string | ((a: any, z: any) => boolean)"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}}}}}catch{}export{N as D};
//# sourceMappingURL=DropDown-7c52b1c7.js.map
