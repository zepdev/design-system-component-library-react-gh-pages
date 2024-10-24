import{c as a,j as e}from"./clsx-667af910.js";import{r as N}from"./index-37ba2b57.js";import{f as V}from"./focus-d7245c50.js";import{F as n}from"./Icon-117e9c75.js";const z=N.forwardRef(({id:u,value:m,error:c,label:d,placeholder:h,disabled:o=!1,required:s,notRequiredHint:g="(optional)",icon:v,readOnly:i=!1,hasInfoIcon:x=!1,messageAriaLive:b="polite",state:l="default",infoTitle:w,message:p,onIconToggle:f,onIconInfoClick:k,onChange:y,...r},j)=>{const t=r.type??"text",q=a("zep-search-cancel:zep-appearance-none","zep-search-cancel:zep-w-1.5","zep-search-cancel:zep-h-1.5","zep-search-cancel:zep-border-[15px]","zep-search-cancel:zep-border-solid","zep-search-cancel:zep-border-transparent","zep-search-cancel:zep-cursor-pointer","zep-search-cancel:zep-bg-no-repeat","zep-search-cancel:zep-mr-[-16px]","zep-search-cancel:zep-bg-[url(/assets/search-cancel.svg)]"),I=a("zep-calendar-picker:zep-appearance-none","zep-calendar-picker:zep-w-1.5","zep-calendar-picker:zep-h-1.5","zep-calendar-picker:zep-p-0","zep-calendar-picker:zep-border-x-[16px]","zep-calendar-picker:zep-border-solid","zep-calendar-picker:zep-border-transparent","zep-calendar-picker:zep-cursor-pointer","zep-calendar-picker:zep-bg-no-repeat","zep-calendar-picker:zep-mr-[-16px]","zep-calendar-picker:zep-bg-[url(/assets/calendar.svg)]");return e.jsxs("div",{className:a("zep-inline-flex","zep-flex-col","zep-flex-wrap","zep-items-stretch","zep-justify-start","zep-relative",[o?"zep-cursor-not-allowed zep-opacity-disabled":"zep-cursor-pointer"],r.className),"data-testid":"zep-input",children:[d&&e.jsxs("label",{htmlFor:u,className:a("zep-mb-0.5","zep-text-typography-dark-100"),children:[d,!s&&e.jsx("span",{"data-testid":"zep-input-label-hint",className:"zep-ml-0.25",children:g})]}),e.jsxs("div",{className:a("zep-inline-flex","zep-flex-row","zep-flex-nowrap","zep-items-center","zep-gap-0.5"),children:[e.jsxs("div",{className:a("zep-relative","zep-w-full"),children:[e.jsx("input",{id:u,ref:j,value:m,defaultValue:"",placeholder:i?void 0:h,type:t,onChange:o?void 0:y,"aria-describedby":r["aria-describedby"],disabled:o??i,required:s,"data-testid":"zep-input-field",...r,className:a(V,"zep-border-solid","zep-border-1","zep-w-full","zep-rounded-4","zep-h-3","zep-px-1","zep-leading-3","zep-leading-[22px]","placeholder:zep-text-typography-dark-100/70","focus-visible:zep-ring-offset-1","invalid:[&:not(:placeholder-shown):not(:focus)]:zep-border-error","invalid:[&:not(:placeholder-shown):not(:focus)]:zep-border-2",{"zep-border-neutral-dark-default":!c},{"zep-border-2 zep-border-error":c},{"zep-cursor-not-allowed zep-bg-background-medium":i},{[I]:t==="date"},{[q]:t==="search"})}),v&&e.jsx(n,{onClick:f,className:a("zep-absolute","zep-top-[0px]","zep-bottom-0","zep-right-1","zep-h-full",{"zep-cursor-pointer":f}),name:v})]}),x&&e.jsx("button",{onClick:k,children:e.jsx(n,{name:"info-circle-filled",title:w})})]}),p&&e.jsxs("span",{id:p,"aria-live":b,className:a({"zep-text-error":l==="error","zep-text-info":l==="info","zep-text-typography-dark-100":l==="default"},"zep-mt-0.25 zep-flex zep-flex-row zep-gap-0.5 zep-text-0.875"),children:[l==="error"&&e.jsx(n,{name:"warning-triangle-filled",className:"zep-flex-shrink-0 zep-text-error"}),l==="info"&&e.jsx(n,{name:"info-circle-filled",className:"zep-flex-shrink-0 zep-text-info"}),e.jsx("span",{className:"zep-mt-0.125",children:p})]})]})});try{z.displayName="Input",z.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'}]}},hasInfoIcon:{defaultValue:{value:"false"},description:"",name:"hasInfoIcon",required:!1,type:{name:"boolean"}},infoTitle:{defaultValue:null,description:"",name:"infoTitle",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},notRequiredHint:{defaultValue:{value:"(optional)"},description:"",name:"notRequiredHint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},messageAriaLive:{defaultValue:{value:"polite"},description:"",name:"messageAriaLive",required:!1,type:{name:"enum",value:[{value:'"off"'},{value:'"assertive"'},{value:'"polite"'}]}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"disabled"'},{value:'"error"'},{value:'"info"'}]}},onIconToggle:{defaultValue:null,description:"",name:"onIconToggle",required:!1,type:{name:"(() => void)"}},onIconInfoClick:{defaultValue:null,description:"",name:"onIconInfoClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{z as I};
//# sourceMappingURL=Input-b6fca717.js.map
