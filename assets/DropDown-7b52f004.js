import{j as a,c as l}from"./clsx-36b9529f.js";import{r as o,R as H}from"./index-8b3efc3f.js";import{g as L}from"./getDistanceToBottom-7ac1525d.js";import{F as g}from"./Icon-9b18e277.js";import{t as O}from"./tw-merge-1166cefb.js";import{I as m}from"./listbox-b26e582e.js";const P=268,S=(n,p)=>l("zep-flex zep-w-full zep-items-center zep-justify-between zep-bg-background-light zep-px-1 zep-py-0.75",{"zep-bg-greyscale-200":n},{"zep-bg-greyscale-300":p},{"zep-pr-3":p}),N=o.forwardRef(({disabled:n=!1,items:p,message:y,label:b,placeholder:V,required:k,notRequiredHint:D="(optional)",readOnly:r=!1,state:s="default",...e},_)=>{const[t,C]=o.useState(null),h=H.useRef(null),i=o.useMemo(()=>s==="error",[s]),f=o.useMemo(()=>s==="info",[s]),u=o.useMemo(()=>n||r,[n,r]),I=o.useMemo(()=>i?"zep-text-error":f?"zep-text-info":"",[i,f]),R=d=>{e!=null&&e.onChange&&(e==null||e.onChange(d)),C(d)};return a.jsxs("div",{className:O(l("zep-relative","zep-inline-block","zep-text-left","zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":n},e.className)),"data-testid":"zep-drop-down",children:[a.jsx(m,{disabled:u,...e,onChange:R,value:(e==null?void 0:e.value)||t,ref:_,children:({open:d})=>{var w,q,j;const x=L(h.current)<P,M=r?void 0:V,v=((w=e==null?void 0:e.value)==null?void 0:w.name)||(t==null?void 0:t.name)||M,E=l("zep-bg-background-light","zep-inline-flex","zep-justify-between","zep-border-solid","zep-pl-1","zep-pr-0.75","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none",{"zep-text-opacity-disabled":n,"zep-text-typography-dark-100/70":!((q=e==null?void 0:e.value)!=null&&q.name||t!=null&&t.name||r)&&!n,"zep-text-typography-dark-100":(((j=e==null?void 0:e.value)==null?void 0:j.name)||(t==null?void 0:t.name)||r)&&!n,"zep-bg-background-medium":r,"zep-ring":d,"zep-active:zep-ring zep-ring-focus zep-ring-offset-1 focus-visible:zep-ring":!u,"zep-cursor-not-allowed":u,"zep-border-2 zep-border-error":i,"zep-border-1 zep-border-neutral-dark-default":!i}),F=l("zep-absolute","zep-shadow-[0_0_4px_rgba(0,0,0,0.24)]","zep-py-0.25","zep-z-10","zep-w-full","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-4","zep-bg-background-light","focus:zep-outline-none","zep-overflow-hidden","zep-overflow-y-auto",{"zep-bottom-full zep-mb-[-25px]":x,"zep-mt-0.25":!x}),T=l("zep-shrink-0","zep-transition-transform","zep-duration-300",{"zep-rotate-180":d,"zep-text-opacity-disabled":u,"zep-text-typography-dark-100":!u});return a.jsxs(a.Fragment,{children:[b&&a.jsxs(m.Label,{className:l("zep-block","zep-mb-0.5",{"zep-text-opacity-disabled":n}),children:[b,!k&&a.jsx("span",{className:"zep-ml-0.25",children:D})]}),a.jsx(m.Button,{className:E,ref:h,title:v,"data-testid":"zep-drop-down-button",children:a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"zep-truncate",children:v}),a.jsx(g,{className:T,name:"chevron-mini-down",role:"img",size:24})]})}),a.jsx(m.Options,{className:F,"data-testid":"zep-drop-down-menu",children:p.map(c=>a.jsx(m.Option,{value:c,title:c.name,className:({active:z,selected:B})=>S(z,B),children:({selected:z})=>a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"zep-truncate",children:c.name}),z&&a.jsx(g,{name:"check",role:"img",size:24,className:"zep-absolute zep-right-1"})]})},c.id))})]})}}),y&&a.jsxs("div",{className:l("zep-mt-0.25",{"zep-text-typography-dark-100":!i&&!f},"zep-text-0.875","zep-flex",I),children:[s!=="default"&&a.jsx(g,{name:i?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),a.jsx("span",{className:"zep-mt-0.125",children:y})]})]})});try{N.displayName="DropDown",N.__docgenInfo={description:"",displayName:"DropDown",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropDownItem[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"DropDownItem"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},notRequiredHint:{defaultValue:{value:"(optional)"},description:"",name:"notRequiredHint",required:!1,type:{name:"string"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"default"'},{value:'"info"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((item: DropDownItem) => void)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'}]}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ((bag: ListboxRenderPropArg<any>) => string)"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"any"}},by:{defaultValue:null,description:"",name:"by",required:!1,type:{name:"string | ((a: any, z: any) => boolean)"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}}}}}catch{}export{N as D};
