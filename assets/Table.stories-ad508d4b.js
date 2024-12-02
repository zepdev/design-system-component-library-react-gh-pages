import{j as e,c as h}from"./clsx-667af910.js";import{c as w}from"./index-47d55b97.js";import{r as J}from"./index-37ba2b57.js";import{B as oe,a as N}from"./Button-022ec53b.js";import{Z as le,a as se}from"./ZpsButton-36dab227.js";import{t as k}from"./tw-merge-1166cefb.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-2824f959.js";import"./Spacing-986d89c6.js";var t=(n=>(n.Zps="ZPS",n.Cat="CAT",n))(t||{}),l=(n=>(n.Text="text",n.Icon="icon",n.Booliean="boolean",n))(l||{});const Q=J.createContext({variant:t.Zps}),B=()=>J.useContext(Q),ie=({children:n,...o})=>e.jsx("tbody",{...o,children:n}),pe=({children:n,className:o,isFirstRow:r,align:u,...c})=>{const{variant:i}=B(),b={[t.Zps]:["zep-text-typography-primary-default "],[t.Cat]:["zep-text-typography-dark-100"]},T=w([`
    zep-inline-block
    zep-text-right
    sm:zep-text-unset
    sm:zep-py-0.5
    zep-w-full
   zep-typography-bodyText
      `],{variants:{variant:b},defaultVariants:{variant:t.Zps}});return e.jsxs("td",{className:h(" zep-justify-between sm:zep-table-cell zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 zep-bg-greyscale-0  lg:zep-whitespace-nowrap zep-group",o),style:{textAlign:u},...c,children:[e.jsx("span",{className:k(T({variant:i}),i===t.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:n}),e.jsx("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"})]})},ue=({children:n,className:o,...r})=>{const{variant:u}=B(),c={[t.Zps]:["zep-bg-indigo-500"],[t.Cat]:["zep-bg-yellow-500"]},i=w([`
      sm:zep-table-row-group`],{variants:{variant:c},defaultVariants:{variant:t.Zps}});return e.jsx("thead",{className:k(i({variant:u,className:o})),...r,children:n})},ce=({children:n,className:o,align:r="left",...u})=>{const{variant:c}=B(),i={[t.Zps]:["zep-text-typography-light-100"],[t.Cat]:["zep-text-typography-dark-100"]},b=w([`
      zep-inline-block
      lg:zep-py-0.5
      zep-w-full
      zep-typography-bodyStrong`],{variants:{variant:i},defaultVariants:{variant:t.Zps}});return e.jsxs("th",{className:h("zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 lg:zep-whitespace-nowrap",o),style:{textAlign:r},...u,children:[e.jsx("span",{className:k(b({variant:c})),children:n}),e.jsx("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"})]})},me=({children:n,className:o,...r})=>e.jsx("tr",{className:h(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",o),...r,children:n}),a=({children:n,className:o,variant:r=t.Zps,maxWidth:u,maxHeight:c,fullWidth:i,textTop:b=!0,buttonLabel:T,descriptionBottom:U,descriptionTop:X,rows:Y,columnNames:ee,align:g,tableButtonOnClick:te,iconButtonOnClick:ne,...ae})=>{const re=(x,p)=>{switch(x){case l.Text:return e.jsx("p",{children:p});case l.Icon:return e.jsx("div",{children:e.jsx(oe,{icon:p,variant:r===t.Zps?N.Tertiary:N.DarkTertiary,onClick:ne})});default:return e.jsx("div",{})}};return e.jsx(Q.Provider,{value:{variant:r},children:e.jsxs(e.Fragment,{children:[b&&e.jsx("div",{className:`zep-mb-2.5 ${r===t.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:e.jsx("p",{children:X})}),e.jsx("div",{className:h("zep-overflow-scroll zep-w-full sm:zep-w-auto",o,{"sm:zep-w-full":i}),style:{maxWidth:u,maxHeight:c},"data-testid":"zep-table",children:e.jsxs("table",{className:h("zep-table zep-w-full sm:zep-w-auto",{"sm:zep-w-full":i}),...ae,children:[e.jsx(a.Head,{children:e.jsx(a.Row,{children:ee.map((x,p)=>e.jsx(a.HeadCell,{className:p===0?`zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px] ${r===t.Zps?"zep-bg-indigo-500":"zep-bg-yellow-500"}`:"",align:g,children:x.name},`table-align-${g}-head-cell-${p}`))})}),e.jsx(a.Body,{children:Y.map((x,p)=>e.jsx(a.Row,{children:x.rowCells.map((j,Z)=>e.jsx(a.Cell,{align:g,isFirstRow:p===0,className:Z===0?"zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px]":"",children:e.jsx("div",{children:re(j.type,j.value)})},`table-align-${g}-cell-${p}-${Z}`))},`table-align-${g}-row-${p}`))})]})}),e.jsx("div",{className:`zep-my-2.5 ${r===t.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:e.jsx("p",{children:U})}),e.jsx("div",{children:e.jsx(le,{label:T,variant:se.Primary,labelClass:"zep-text-indigo-500",onClick:te})})]})})};a.Body=ie;a.Cell=pe;a.Head=ue;a.HeadCell=ce;a.Row=me;try{a.displayName="Table",a.__docgenInfo={description:"",displayName:"Table",props:{rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"TableRow[]"}},columnNames:{defaultValue:null,description:"",name:"columnNames",required:!0,type:{name:"TableHeads[]"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"TableThemes.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},textTop:{defaultValue:{value:"true"},description:"",name:"textTop",required:!1,type:{name:"boolean"}},descriptionTop:{defaultValue:null,description:"",name:"descriptionTop",required:!1,type:{name:"string"}},descriptionBottom:{defaultValue:null,description:"",name:"descriptionBottom",required:!0,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!0,type:{name:"string"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},tableButtonOnClick:{defaultValue:null,description:"",name:"tableButtonOnClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},iconButtonOnClick:{defaultValue:null,description:"",name:"iconButtonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const Se={title:"Components/Table",component:a,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(t)}},children:{control:{disable:!0}}},parameters:{a11y:{disable:!0}}},m=[{name:"Type"},{name:"Shop"},{name:"Motorleistung"},{name:"max. Grabtiefe/ max. Reichweite"},{name:"Löffelvolumen"},{name:"Einsatzgewicht"},{name:"Konfigurator"},{name:"Datenblatt Download"}],s=[{value:"300.9D*",type:l.Text},{value:"download",type:l.Icon},{value:"13,7 kW (18,6 PS)",type:l.Text},{value:"1,7 / 3,1 m",type:l.Text},{value:"0,03 m³",type:l.Text},{value:"985 kg",type:l.Text},{value:"300.9D*",type:l.Text},{value:"download",type:l.Icon}],d=[{rowCells:s},{rowCells:s},{rowCells:s},{rowCells:s},{rowCells:s},{rowCells:s},{rowCells:s},{rowCells:s},{rowCells:s},{rowCells:s}],f={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:t.Zps,rows:d,columnNames:m,iconButtonOnClick:()=>null,tableButtonOnClick:()=>null}},z={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:t.Zps,rows:d,columnNames:m,align:"left",iconButtonOnClick:()=>null,tableButtonOnClick:()=>null}},v={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:t.Zps,rows:d,columnNames:m,align:"center",iconButtonOnClick:()=>null,tableButtonOnClick:()=>null}},y={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:t.Zps,rows:d,columnNames:m,align:"right",iconButtonOnClick:()=>null,tableButtonOnClick:()=>null}},S={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",maxWidth:700,maxHeight:500,variant:t.Zps,rows:d,columnNames:m,iconButtonOnClick:()=>null,tableButtonOnClick:()=>null}},C={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",fullWidth:!0,variant:t.Zps,rows:d,iconButtonOnClick:()=>null,tableButtonOnClick:()=>null,columnNames:m}};var O,H,E;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    rows: rowCells,
    columnNames: heads,
    iconButtonOnClick: () => null,
    tableButtonOnClick: () => null
  }
}`,...(E=(H=f.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var W,V,F;z.parameters={...z.parameters,docs:{...(W=z.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    rows: rowCells,
    columnNames: heads,
    align: 'left',
    iconButtonOnClick: () => null,
    tableButtonOnClick: () => null
  }
}`,...(F=(V=z.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var L,q,K;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    rows: rowCells,
    columnNames: heads,
    align: 'center',
    iconButtonOnClick: () => null,
    tableButtonOnClick: () => null
  }
}`,...(K=(q=v.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var R,A,_;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    rows: rowCells,
    columnNames: heads,
    align: 'right',
    iconButtonOnClick: () => null,
    tableButtonOnClick: () => null
  }
}`,...(_=(A=y.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var $,M,D;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    maxWidth: 700,
    maxHeight: 500,
    variant: TableThemes.Zps,
    rows: rowCells,
    columnNames: heads,
    iconButtonOnClick: () => null,
    tableButtonOnClick: () => null
  }
}`,...(D=(M=S.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var P,I,G;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    fullWidth: true,
    variant: TableThemes.Zps,
    rows: rowCells,
    iconButtonOnClick: () => null,
    tableButtonOnClick: () => null,
    columnNames: heads
  }
}`,...(G=(I=C.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};const Ce=["Default","AlignLeft","AlignCenter","AlignRight","FixedSize","FullWidth"];export{v as AlignCenter,z as AlignLeft,y as AlignRight,f as Default,S as FixedSize,C as FullWidth,Ce as __namedExportsOrder,Se as default};
//# sourceMappingURL=Table.stories-ad508d4b.js.map
