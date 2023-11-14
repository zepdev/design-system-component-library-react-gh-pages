import{c as a,j as e}from"./clsx-667af910.js";import{r as I}from"./index-37ba2b57.js";import{f as j}from"./focus-d7245c50.js";import{F as p}from"./Icon-3aaedf22.js";const f=I.forwardRef(({id:l,value:z,error:c,label:i,placeholder:h,disabled:r=!1,required:t,notRequiredHint:m="(optional)",icon:s,readOnly:n=!1,hasInfoIcon:g=!1,message:d,onIconToggle:v,onIconInfoClick:b,onChange:w,...u},x)=>{const o=u.type??"text",k=a("zep-search-cancel:zep-appearance-none","zep-search-cancel:zep-w-1.5","zep-search-cancel:zep-h-1.5","zep-search-cancel:zep-border-[15px]","zep-search-cancel:zep-border-solid","zep-search-cancel:zep-border-transparent","zep-search-cancel:zep-cursor-pointer","zep-search-cancel:zep-bg-no-repeat","zep-search-cancel:zep-mr-[-16px]","zep-search-cancel:zep-bg-[url(/assets/search-cancel.svg)]"),y=a("zep-calendar-picker:zep-appearance-none","zep-calendar-picker:zep-w-1.5","zep-calendar-picker:zep-h-1.5","zep-calendar-picker:zep-p-0","zep-calendar-picker:zep-border-x-[16px]","zep-calendar-picker:zep-border-solid","zep-calendar-picker:zep-border-transparent","zep-calendar-picker:zep-cursor-pointer","zep-calendar-picker:zep-bg-no-repeat","zep-calendar-picker:zep-mr-[-16px]","zep-calendar-picker:zep-bg-[url(/assets/calendar.svg)]");return e.jsxs("span",{className:a("zep-inline-flex","zep-flex-col","zep-flex-wrap","zep-items-stretch","zep-justify-start","zep-relative",[r?"zep-cursor-not-allowed zep-opacity-disabled":"zep-cursor-pointer"],u.className),"data-testid":"zep-input",children:[i&&e.jsxs("label",{htmlFor:l,className:a("zep-mb-0.5","zep-text-typography-dark-100"),children:[i,!t&&e.jsx("span",{"data-testid":"zep-input-label-hint",className:"zep-ml-0.25",children:m})]}),e.jsxs("div",{className:a("zep-inline-flex","zep-flex-row","zep-flex-nowrap","zep-items-center","zep-gap-0.5"),children:[e.jsxs("div",{className:a("zep-relative","zep-w-full"),children:[e.jsx("input",{id:l,ref:x,value:z,defaultValue:"",placeholder:n?void 0:h,type:o,onChange:r?void 0:w,"aria-describedby":`aria-describedby-${l}`,disabled:r??n,required:t,"data-testid":"zep-input-field",...u,className:a(j,"zep-border-solid","zep-border-1","zep-w-full","zep-rounded-4","zep-h-3","zep-px-1","zep-leading-3","zep-leading-[22px]","placeholder:zep-text-typography-dark-100/70","focus-visible:zep-ring-offset-1","invalid:[&:not(:placeholder-shown):not(:focus)]:zep-border-error","invalid:[&:not(:placeholder-shown):not(:focus)]:zep-border-2",{"zep-border-neutral-dark-default":!c},{"zep-border-2 zep-border-error":c},{"zep-cursor-not-allowed zep-bg-background-medium":n},{[y]:o==="date"},{[k]:o==="search"})}),s&&e.jsx(p,{onClick:v,className:a("zep-absolute","zep-top-[0px]","zep-bottom-0","zep-right-1","zep-h-full",{"zep-cursor-pointer":v}),name:s})]}),g&&e.jsx(p,{onClick:b,name:"info-circle-filled"})]}),d&&e.jsxs("div",{className:a("zep-inline-flex","zep-flex-row","zep-gap-0.5","zep-text-0.875","zep-text-error","zep-mt-0.25"),children:[e.jsx(p,{name:"warning-triangle-filled",className:"zep-flex-shrink-0"}),e.jsx("span",{id:`aria-describedby-${l}`,className:"zep-mt-0.125",children:d})]})]})});try{f.displayName="Input",f.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"search"'},{value:'"email"'},{value:'"file"'},{value:'"password"'},{value:'"time"'},{value:'"alert"'},{value:'"link"'},{value:'"table"'},{value:'"location"'},{value:'"copy"'},{value:'"phone"'},{value:'"stop"'},{value:'"download"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"Volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"voume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'}]}},hasInfoIcon:{defaultValue:{value:"false"},description:"",name:"hasInfoIcon",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},notRequiredHint:{defaultValue:{value:"(optional)"},description:"",name:"notRequiredHint",required:!1,type:{name:"string"}},onIconToggle:{defaultValue:null,description:"",name:"onIconToggle",required:!1,type:{name:"(() => void)"}},onIconInfoClick:{defaultValue:null,description:"",name:"onIconInfoClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{f as I};
//# sourceMappingURL=Input-42b43dba.js.map
