import{j as t,c as d}from"./clsx-36b9529f.js";import{c as j}from"./index-24fb42db.js";import{r as te}from"./index-8b3efc3f.js";import{Z as le,a as pe}from"./ZpsButton-6e99bf9e.js";import{t as w}from"./tw-merge-1166cefb.js";import{B as ue,a as N}from"./Button-1c08c907.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-2c887576.js";import"./Spacing-329983cf.js";var e=(a=>(a.Zps="ZPS",a.Cat="CAT",a.Zsd="ZSD",a.Default="Default",a))(e||{}),h=(a=>(a.Text="text",a.Button="button",a))(h||{});const ae=te.createContext({variant:e.Zps}),W=()=>te.useContext(ae),ce=({children:a,...o})=>t.jsx("tbody",{...o,children:a}),de=({children:a,className:o,isFirstRow:n,align:p,...u})=>{const{variant:s}=W(),g={[e.Zps]:["zep-text-typography-primary-default "],[e.Cat]:["zep-text-typography-dark-100"],[e.Zsd]:["zep-text-typography-dark-100"],[e.Default]:["zep-text-typography-dark-100"]},z=j([`
    zep-inline-block
    zep-text-right
    sm:zep-text-unset
    sm:zep-py-0.5
    zep-w-full
   zep-typography-bodyText
      `],{variants:{variant:g},defaultVariants:{variant:e.Zps}});return t.jsxs("td",{className:d("zep-justify-between sm:zep-table-cell zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 zep-bg-greyscale-0  lg:zep-whitespace-nowrap zep-group",o),style:{textAlign:p},...u,children:[t.jsx("span",{className:w(z({variant:s}),s===e.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:a}),t.jsx("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"})]})},me=({children:a,className:o,...n})=>{const{variant:p}=W(),u={[e.Zps]:["zep-bg-indigo-500"],[e.Cat]:["zep-bg-yellow-500"],[e.Zsd]:["zep-bg-greyscale-200"],[e.Default]:["zep-bg-greyscale-0"]},s=j([`
      sm:zep-table-row-group`],{variants:{variant:u},defaultVariants:{variant:e.Zps}});return t.jsx("thead",{className:w(s({variant:p,className:o})),...n,children:a})},be=({children:a,className:o,align:n="left",...p})=>{const{variant:u}=W(),s={[e.Zps]:["zep-text-typography-light-100"],[e.Cat]:["zep-text-typography-dark-100"],[e.Zsd]:["zep-text-typography-dark-100"],[e.Default]:["zep-text-typography-dark-100"]},g=j([`
      zep-inline-block
      lg:zep-py-0.5
      zep-w-full
      zep-typography-bodyStrong`],{variants:{variant:s},defaultVariants:{variant:e.Zps}});return t.jsxs("th",{className:d("zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 lg:zep-whitespace-nowrap",o),style:{textAlign:n},...p,children:[t.jsx("span",{className:w(g({variant:u})),children:a}),t.jsx("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"})]})},L=({children:a,className:o,...n})=>t.jsx("tr",{className:d(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",o),...n,children:a}),B=({children:a,className:o,variant:n=e.Zps,maxWidth:p,maxHeight:u,fullWidth:s,textTop:g=!0,buttonLabel:z,descriptionBottom:H,descriptionTop:ne,dataSource:re,columns:V,align:x,tableButtonOnClick:E,...oe})=>{const se=(c,l,f,Z,r)=>{switch(Z){case h.Button:return t.jsx(ue,{icon:r==null?void 0:r.iconName,variant:n===e.Zps?N.Tertiary:N.DarkTertiary,onClick:(r==null?void 0:r.onClick)===void 0?void 0:()=>r.onClick(c,l,f),children:r==null?void 0:r.title});case h.Text:default:return t.jsx("p",{children:c})}};return t.jsx(ae.Provider,{value:{variant:n},children:t.jsxs(t.Fragment,{children:[g&&t.jsx("div",{className:`zep-mb-2.5 ${n===e.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:t.jsx("p",{children:ne})}),t.jsx("div",{className:d("zep-overflow-scroll zep-w-full",o,{"sm:zep-w-full":s}),style:{maxWidth:p,maxHeight:u},"data-testid":"zep-table",children:t.jsxs("table",{className:d("zep-table zep-w-full",{"sm:zep-w-full":s}),...oe,children:[t.jsx(me,{children:t.jsx(L,{children:V.map(({title:c,key:l},f)=>t.jsx(be,{className:d({"zep-sticky zep-left-[0] zep-z-20 zep-drop-shadow-lg zep-min-w-[100px]":f===0,"zep-bg-indigo-500":n===e.Zps,"zep-bg-yellow-500":n===e.Cat,"zep-bg-greyscale-200":n===e.Zsd}),align:x,children:c},`table-align-${x}-head-cell-${l}`))})}),t.jsx(ce,{children:re.map((c,l)=>t.jsx(L,{children:V.map(({key:f,dataIndex:Z,props:r,renderAs:ie},F)=>t.jsx(de,{align:x,isFirstRow:l===0,className:F===0?"zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px]":"",children:se(c[Z],c,l,ie,r)},`table-align-${x}-cell-${l}-${f}-${F}`))},`table-align-${x}-row-${l}`))})]})}),H&&t.jsx("div",{className:`zep-my-2.5 ${n===e.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:t.jsx("p",{children:H})}),z&&E&&t.jsx("div",{children:t.jsx(le,{label:z,variant:pe.Primary,labelClass:"zep-text-indigo-500",onClick:E})})]})})};try{B.displayName="Table",B.__docgenInfo={description:"",displayName:"Table",props:{dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{}[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<{}>[]"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"TableThemes.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZSD"'},{value:'"Default"'}]}},textTop:{defaultValue:{value:"true"},description:"",name:"textTop",required:!1,type:{name:"boolean"}},descriptionTop:{defaultValue:null,description:"",name:"descriptionTop",required:!1,type:{name:"string"}},descriptionBottom:{defaultValue:null,description:"",name:"descriptionBottom",required:!1,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},tableButtonOnClick:{defaultValue:null,description:"",name:"tableButtonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const Te={title:"Components/Table",component:B,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(e)}},children:{control:{disable:!0}}},parameters:{a11y:{disable:!0}}},m=[{key:"k1",dataIndex:"type",title:"Type"},{key:"k2",dataIndex:"id",title:"Shop",renderAs:h.Button,props:{iconName:"download",onClick:a=>console.log("download",a)}},{key:"k3",dataIndex:"motor",title:"Motorleistung"},{key:"k4",dataIndex:"grab",title:"max. Grabtiefe/ max. Reichweite"},{key:"k5",dataIndex:"loffel",title:"Löffelvolumen"},{key:"k6",dataIndex:"einsatz",title:"Einsatzgewicht"},{key:"k7",dataIndex:"konfig",title:"Konfigurator"},{key:"k8",dataIndex:"id",title:"Datenblatt Download",renderAs:h.Button,props:{iconName:"download",onClick:a=>console.log("download",a)}}],i={id:1,type:"300.9D*",motor:"13,7 kW (18,6 PS)",grab:"1,7 / 3,1 m",loffel:"0,03 m³",einsatz:"985 kg",konfig:"300.9D*"},b=[i,{...i,id:2},{...i,id:3},{...i,id:4},{...i,id:5},{...i,id:6},{...i,id:7},{...i,id:8},{...i,id:9}],S={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:b,columns:m,tableButtonOnClick:()=>null}},y={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:b,columns:m,align:"left",tableButtonOnClick:()=>null}},v={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:b,columns:m,align:"center",tableButtonOnClick:()=>null}},k={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:b,columns:m,align:"right",tableButtonOnClick:()=>null}},T={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",maxWidth:700,maxHeight:500,variant:e.Zps,dataSource:b,columns:m,tableButtonOnClick:()=>null}},C={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",fullWidth:!0,variant:e.Zps,dataSource:b,tableButtonOnClick:()=>null,columns:m}};var D,O,K;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    tableButtonOnClick: () => null
  }
}`,...(K=(O=S.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var q,A,_;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    align: 'left',
    tableButtonOnClick: () => null
  }
}`,...(_=(A=y.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var $,R,P;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    align: 'center',
    tableButtonOnClick: () => null
  }
}`,...(P=(R=v.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var I,M,G;k.parameters={...k.parameters,docs:{...(I=k.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    align: 'right',
    tableButtonOnClick: () => null
  }
}`,...(G=(M=k.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var J,Q,U;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    maxWidth: 700,
    maxHeight: 500,
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    tableButtonOnClick: () => null
  }
}`,...(U=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,ee;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    fullWidth: true,
    variant: TableThemes.Zps,
    dataSource: cells,
    tableButtonOnClick: () => null,
    columns: heads
  }
}`,...(ee=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};const Ce=["Default","AlignLeft","AlignCenter","AlignRight","FixedSize","FullWidth"];export{v as AlignCenter,y as AlignLeft,k as AlignRight,S as Default,T as FixedSize,C as FullWidth,Ce as __namedExportsOrder,Te as default};
