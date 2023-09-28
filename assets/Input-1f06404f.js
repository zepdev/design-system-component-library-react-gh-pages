import{r as x,R as e}from"./index-76fb7be0.js";import{c as a}from"./clsx.m-1229b3e0.js";import{f as y}from"./focus-d7245c50.js";import{F as c}from"./Icon-8d52bdb7.js";const s=x.forwardRef(({id:l,value:f,error:p,label:t,placeholder:z,disabled:n=!1,icon:i,readOnly:u=!1,hasInfoIcon:m=!1,message:v,onIconToggle:d,onIconInfoClick:h,onChange:g,...r},w)=>{const o=r.type||"text",b=a("zep-search-cancel:zep-appearance-none","zep-search-cancel:zep-w-1.5","zep-search-cancel:zep-h-1.5","zep-search-cancel:zep-border-[15px]","zep-search-cancel:zep-border-solid","zep-search-cancel:zep-border-transparent","zep-search-cancel:zep-cursor-pointer","zep-search-cancel:zep-bg-no-repeat","zep-search-cancel:zep-mr-[-16px]","zep-search-cancel:zep-bg-[url(/src/assets/search-cancel.svg)]"),k=a("zep-calendar-picker:zep-appearance-none","zep-calendar-picker:zep-w-1.5","zep-calendar-picker:zep-h-1.5","zep-calendar-picker:zep-p-0","zep-calendar-picker:zep-border-x-[16px]","zep-calendar-picker:zep-border-solid","zep-calendar-picker:zep-border-transparent","zep-calendar-picker:zep-cursor-pointer","zep-calendar-picker:zep-bg-no-repeat","zep-calendar-picker:zep-mr-[-16px]","zep-calendar-picker:zep-bg-[url(/src/assets/calendar.svg)]");return e.createElement("span",{className:a("zep-inline-flex","zep-flex-col","zep-flex-wrap","zep-items-stretch","zep-justify-start","zep-relative",[n?"zep-cursor-not-allowed zep-opacity-disabled":"zep-cursor-pointer"],r.className),"data-testid":"zep-input"},t&&e.createElement("label",{htmlFor:l,className:a("zep-mb-0.5","zep-text-neutral-dark-default")},t,!r.required&&e.createElement("span",{className:"zep-ml-0.25"},"(optional)")),e.createElement("div",{className:a("zep-inline-flex","zep-flex-row","zep-flex-nowrap","zep-items-center","zep-gap-0.5")},e.createElement("div",{className:a("zep-relative","zep-w-full")},e.createElement("input",{id:l,ref:w,value:f,defaultValue:"",placeholder:u?void 0:z,type:o,onChange:n?void 0:g,"aria-describedby":`aria-describedby-${l}`,disabled:n??u,"data-testid":"zep-input-field",...r,className:a(y,"zep-border-solid","zep-border-1","zep-w-full","zep-rounded-4","zep-h-3","zep-px-1","zep-leading-[48px]","zep-leading-[22px]","focus-visible:zep-ring-offset-1","invalid:[&:not(:placeholder-shown):not(:focus)]:zep-border-error","invalid:[&:not(:placeholder-shown):not(:focus)]:zep-border-2",{"zep-border-neutral-dark-default":!p},{"zep-border-2 zep-border-error":p},{"zep-cursor-not-allowed zep-bg-background-medium":u},{[k]:o==="date"},{[b]:o==="search"})}),i&&e.createElement(c,{onClick:d,className:a("zep-absolute","zep-top-[0px]","zep-bottom-0","zep-right-1","zep-h-full",{"zep-cursor-pointer":d}),name:i})),m&&e.createElement(c,{onClick:h,name:"info-circle-filled"})),v&&e.createElement("div",{className:a("zep-inline-flex","zep-flex-row","zep-items-center","zep-gap-0.25","zep-text-0.875","zep-text-error","zep-mt-0.25")},e.createElement(c,{name:"warning-triangle-filled"}),e.createElement("span",{id:`aria-describedby-${l}`,className:"zep-mt-[2px]"},v)))});try{s.displayName="Input",s.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"search"'},{value:'"email"'},{value:'"file"'},{value:'"password"'},{value:'"time"'},{value:'"alert"'},{value:'"link"'},{value:'"table"'},{value:'"location"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"Volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"voume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'}]}},hasInfoIcon:{defaultValue:{value:"false"},description:"",name:"hasInfoIcon",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},onIconToggle:{defaultValue:null,description:"",name:"onIconToggle",required:!1,type:{name:"(() => void)"}},onIconInfoClick:{defaultValue:null,description:"",name:"onIconInfoClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{s as I};
//# sourceMappingURL=Input-1f06404f.js.map
