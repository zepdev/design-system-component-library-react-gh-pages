import{j as r,c as o}from"./clsx-667af910.js";import{r as a}from"./index-37ba2b57.js";const n=a.createContext({type:"bullet"}),l=({type:e="bullet",children:t,className:s})=>{const p=e==="bullet"?"ul":"ol";return r.jsx(n.Provider,{value:{type:e},children:r.jsx(p,{className:o("zep-typography-bodyText","zep-list-none","[&_ul]:zep-pl-2","[&_ol]:zep-pl-2","[counter-reset:section]",s),children:t})})},c=({children:e})=>{const{type:t}=a.useContext(n);return r.jsx("li",{className:o("zep-relative","zep-flex","zep-items-baseline","zep-py-0.5","[counter-increment:section]","before:zep-w-1.5","before:zep-h-1.5","before:zep-mr-0.75","before:zep-text-center","before:zep-shrink-0",{'before:[content:"•"]':t==="bullet"},{"before:[content:counter(section,lower-alpha)]":t==="alphabetical"},{"before:[content:counter(section)]":t==="numeric"}),children:e})};l.Item=c;try{l.displayName="List",l.__docgenInfo={description:"",displayName:"List",props:{type:{defaultValue:{value:"bullet"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"numeric"'},{value:'"bullet"'},{value:'"alphabetical"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{l as L};
//# sourceMappingURL=List-4e041a03.js.map
