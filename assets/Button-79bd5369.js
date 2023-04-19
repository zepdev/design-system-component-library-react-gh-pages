import{R as a}from"./index-f1f749bf.js";import{f as u,b as c}from"./focus-29de1b9b.js";var t=(e=>(e.Primary="primary",e.Secondary="secondary",e.Tertiary="tertiary",e))(t||{});const p="zep-button",r=({variant:e=t.Primary,label:n,isLoading:i=!1,children:o,disabled:l=!1,...s})=>{const d=i?a.createElement("i",{className:"mr-zep-0_5","data-testid":"loading-icon"},"loading icon"):"";return a.createElement("button",{className:`
      ${p} 
      zep-${e} 
      ${l?"disabled cursor-not-allowed":""} 
      ${u} focus-within:ring-offset-2 
      ${c}
      leading-zep-1_25
      px-zep-1 py-zep-0_75 
      text-zep-base`,...s},d,n||o)};try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"ButtonVariant.Primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}export{r as B,t as a};
//# sourceMappingURL=Button-79bd5369.js.map
