import{j as a,c as s}from"./clsx-36b9529f.js";import{F as i}from"./Icon-371bc4d0.js";const t=({messageId:l,messageAriaLive:n,children:d,state:e="default",message:r,disabled:p=!1,...o})=>a.jsxs("fieldset",{className:s("zep-inline-flex","zep-flex-col","zep-flex-nowrap",[p?"zep-cursor-not-allowed zep-opacity-disabled":"zep-cursor-pointer"]),"data-testid":"zep-form-fieldset",...o,children:[d,r&&a.jsxs("span",{id:l,"aria-live":n,className:s({"zep-text-error":e==="error","zep-text-info":e==="info","zep-text-typography-dark-100":e==="default"},"zep-mt-0.25 zep-flex zep-flex-row zep-gap-0.5 zep-text-0.875"),children:[e==="error"&&a.jsx(i,{name:"warning-triangle-filled",className:"zep-flex-shrink-0 zep-text-error"}),e==="info"&&a.jsx(i,{name:"info-circle-filled",className:"zep-flex-shrink-0 zep-text-info"}),a.jsx("span",{className:"zep-mt-0.125",children:r})]})]});try{t.displayName="Fieldset",t.__docgenInfo={description:"",displayName:"Fieldset",props:{messageAriaLive:{defaultValue:null,description:"",name:"messageAriaLive",required:!1,type:{name:"enum",value:[{value:'"off"'},{value:'"assertive"'},{value:'"polite"'}]}},messageId:{defaultValue:null,description:"",name:"messageId",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"error"'},{value:'"default"'},{value:'"info"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{t as F};
