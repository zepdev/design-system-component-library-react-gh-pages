import{c as l,j as a}from"./clsx-36b9529f.js";import{r as u}from"./index-8b3efc3f.js";import{F as j}from"./Icon-2b37dda0.js";import{t as N}from"./tw-merge-1166cefb.js";const z=u.forwardRef(({disabled:t=!1,label:i,message:d,placeholder:m,readOnly:o=!1,state:n="default",totalCharacters:f=500,...e},x)=>{const r=n==="error",[g,h]=u.useState(""),y=p=>{var c;(c=e.onChange)==null||c.call(e,p),h(p.target.value)},s=t||o,b=r?"zep-text-error":n==="info"?"zep-text-info":"",v=l("zep-block","zep-justify-between","zep-rounded-4","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none","placeholder:zep-text-typography-dark-100/70",r?"zep-border-2":"zep-border-1","zep-pr-0.75",t?"zep-text-opacity-disabled":"zep-text-typography-dark-100",{"zep-bg-background-medium":o},{"zep-border-neutral-dark-default":!t&&!r},{"zep-border-opacity-disabled":t},{"zep-border-error":r},{"zep-active:ring":!s},{"zep-ring-offset-1":!s},{"focus-visible:zep-ring":!s},{"zep-ring-focus":!s},{"zep-cursor-not-allowed":s},e==null?void 0:e.className);return a.jsxs("div",{className:N(l("zep-relative","zep-inline-block","zep-text-left",{"zep-cursor-not-allowed zep-opacity-disabled":t})),"data-testid":"zep-text-area",children:[i&&a.jsxs("div",{className:l("zep-block","zep-mb-0.5","zep-text-neutral-dark-default"),children:[i,!e.required&&a.jsx("span",{className:"zep-ml-0.25",children:"(optional)"})]}),a.jsx("textarea",{id:e.id,ref:x,maxLength:500,autoComplete:"off",placeholder:o?void 0:m,readOnly:o,disabled:t||o,"data-testid":"zep-text-area-input",...e,onChange:y,className:v}),a.jsxs("div",{className:l("zep-mt-0.25","zep-text-typography-dark-100","zep-text-0.875","zep-flex",b),children:[d&&a.jsxs("div",{className:l("zep-flex",{"zep-text-error":r}),children:[n!=="default"&&a.jsx(j,{name:r?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),a.jsx("span",{className:"zep-mt-0.125",children:d})]}),a.jsxs("div",{className:l("zep-ml-auto","zep-mt-0.125","zep-pl-0.5","zep-flex-shrink-0"),"data-testid":"zep-text-area-length-indicator",children:[g.length," / ",f]})]})]})});try{z.displayName="TextArea",z.__docgenInfo={description:"",displayName:"TextArea",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"default"'}]}},totalCharacters:{defaultValue:{value:"500"},description:"",name:"totalCharacters",required:!1,type:{name:"number"}}}}}catch{}export{z as T};
