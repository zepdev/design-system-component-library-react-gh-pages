import{r as d,R as e}from"./index-76fb7be0.js";import{c as l}from"./clsx.m-1229b3e0.js";import{F as h}from"./Icon-9e5f2fad.js";import{t as N}from"./tw-merge-1166cefb.js";const m=d.forwardRef(({disabled:t=!1,label:s,message:p,placeholder:u,readOnly:n=!1,state:i="default",totalCharacters:z=500,...a},f)=>{const r=i==="error",[g,x]=d.useState(""),y=c=>{a.onChange&&a.onChange(c),x(c.target.value)},o=t||n,b=r?"zep-text-error":i==="info"?"zep-text-info":"",v=l("zep-inline-flex","zep-justify-between","zep-rounded-4","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none",r?"zep-border-2":"zep-border-1","zep-pr-0.75",t?"zep-text-opacity-disabled":"zep-text-typography-dark-100",{"zep-bg-background-medium":n},{"zep-border-neutral-dark-default":!t&&!r},{"zep-border-opacity-disabled":t},{"zep-border-error":r},{"zep-active:ring":!o},{"zep-ring-offset-1":!o},{"focus-visible:ring":!o},{"zep-ring-focus":!o},{"zep-cursor-not-allowed":o},a==null?void 0:a.className);return e.createElement("div",{className:N(l("zep-relative","zep-inline-block","zep-text-left",{"zep-cursor-not-allowed zep-opacity-disabled":t})),"data-testid":"zep-text-area"},s&&e.createElement("div",{className:l("zep-block","zep-mb-0.5")},s,!a.required&&e.createElement("span",{className:"zep-ml-0.25"},"(optional)")),e.createElement("div",{className:"zep-relative zep-mt-0.5"},e.createElement("textarea",{id:a.id,ref:f,maxLength:500,autoComplete:"off",placeholder:n?void 0:u,readOnly:n,disabled:t||n,"data-testid":"zep-text-area-input",...a,onChange:y,className:v})),e.createElement("div",{className:l("zep-mt-[4px]","zep-text-typography-dark-100","zep-text-0.875","zep-flex","zep-items-center",{"zep-opacity-70":!r},b)},p&&e.createElement("div",{className:l("zep-flex zep-items-center",{"zep-text-error":r})},i!=="default"&&e.createElement(h,{name:r?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),e.createElement("span",{className:"zep-mt-[2px]"},p)),e.createElement("div",{className:l("zep-ml-auto"),"data-testid":"zep-text-area-length-indicator"},g.length," / ",z)))});try{m.displayName="TextArea",m.__docgenInfo={description:"",displayName:"TextArea",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"info"'}]}},totalCharacters:{defaultValue:{value:"500"},description:"",name:"totalCharacters",required:!1,type:{name:"number"}}}}}catch{}export{m as T};
//# sourceMappingURL=TextArea-013b92d6.js.map
