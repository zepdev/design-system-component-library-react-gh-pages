import{j as t,c as m}from"./clsx-36b9529f.js";import{c as j}from"./index-24fb42db.js";import{r as te}from"./index-8b3efc3f.js";import{Z as oe,a as le}from"./ZpsButton-8b2b5a0f.js";import{t as w}from"./tw-merge-1166cefb.js";import{B as pe,a as V}from"./Button-22761def.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-2a6dae81.js";import"./Spacing-3ed1191f.js";var e=(a=>(a.Zps="ZPS",a.Cat="CAT",a.Zsd="ZSD",a.Default="Default",a))(e||{}),x=(a=>(a.Text="text",a.Button="button",a))(x||{});const ae=te.createContext({variant:e.Zps}),W=()=>te.useContext(ae),ce=({children:a,...s})=>t.jsx("tbody",{...s,children:a}),ue=({children:a,className:s,isFirstRow:n,align:p,...c})=>{const{variant:i}=W(),d={[e.Zps]:["zep-text-typography-primary-default "],[e.Cat]:["zep-text-typography-dark-100"],[e.Zsd]:["zep-text-typography-dark-100"],[e.Default]:["zep-text-typography-dark-100"]},z=j([`
    zep-inline-block
    zep-text-right
    sm:zep-text-unset
    sm:zep-py-0.5
    zep-w-full
   zep-typography-bodyText
      `],{variants:{variant:d},defaultVariants:{variant:e.Zps}});return t.jsxs("td",{className:m("zep-justify-between sm:zep-table-cell zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 zep-bg-greyscale-0  lg:zep-whitespace-nowrap zep-group",s),style:{textAlign:p},...c,children:[t.jsx("span",{className:w(z({variant:i}),i===e.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:a}),t.jsx("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"})]})},de=({children:a,className:s,...n})=>{const{variant:p}=W(),c={[e.Zps]:["zep-bg-indigo-500"],[e.Cat]:["zep-bg-yellow-500"],[e.Zsd]:["zep-bg-greyscale-200"],[e.Default]:["zep-bg-greyscale-0"]},i=j([`
      sm:zep-table-row-group`],{variants:{variant:c},defaultVariants:{variant:e.Zps}});return t.jsx("thead",{className:w(i({variant:p,className:s})),...n,children:a})},me=({children:a,className:s,align:n="left",...p})=>{const{variant:c}=W(),i={[e.Zps]:["zep-text-typography-light-100"],[e.Cat]:["zep-text-typography-dark-100"],[e.Zsd]:["zep-text-typography-dark-100"],[e.Default]:["zep-text-typography-dark-100"]},d=j([`
      zep-inline-block
      lg:zep-py-0.5
      zep-w-full
      zep-typography-bodyStrong`],{variants:{variant:i},defaultVariants:{variant:e.Zps}});return t.jsxs("th",{className:m("zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 lg:zep-whitespace-nowrap",s),style:{textAlign:n},...p,children:[t.jsx("span",{className:w(d({variant:c})),children:a}),t.jsx("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"})]})},L=({children:a,className:s,...n})=>t.jsx("tr",{className:m(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",s),...n,children:a}),B=({children:a,className:s,variant:n=e.Zps,maxWidth:p,maxHeight:c,fullWidth:i,buttonLabel:d,descriptionBottom:z,descriptionTop:H,dataSource:ne,columns:E,align:f,tableButtonOnClick:F,...re})=>{const se=(u,l,h,Z,r)=>{switch(Z){case x.Button:return t.jsx(pe,{icon:r==null?void 0:r.iconName,variant:n===e.Zps?V.Tertiary:V.DarkTertiary,onClick:(r==null?void 0:r.onClick)===void 0?void 0:()=>r.onClick(u,l,h),children:r==null?void 0:r.title});case x.Text:default:return t.jsx("p",{children:u})}};return t.jsx(ae.Provider,{value:{variant:n},children:t.jsxs(t.Fragment,{children:[H&&t.jsx("div",{className:`zep-mb-2.5 ${n===e.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:t.jsx("p",{children:H})}),t.jsx("div",{className:m("zep-overflow-scroll zep-w-full",s,{"sm:zep-w-full":i}),style:{maxWidth:p,maxHeight:c},"data-testid":"zep-table",children:t.jsxs("table",{className:m("zep-table zep-w-full",{"sm:zep-w-full":i}),...re,children:[t.jsx(de,{children:t.jsx(L,{children:E.map(({title:u,key:l},h)=>t.jsx(me,{className:m({"zep-sticky zep-left-[0] zep-z-20 zep-drop-shadow-lg zep-min-w-[100px]":h===0,"zep-bg-indigo-500":n===e.Zps,"zep-bg-yellow-500":n===e.Cat,"zep-bg-greyscale-200":n===e.Zsd}),align:f,children:u},`table-align-${f}-head-cell-${l}`))})}),t.jsx(ce,{children:ne.map((u,l)=>t.jsx(L,{children:E.map(({key:h,dataIndex:Z,props:r,renderAs:ie},N)=>t.jsx(ue,{align:f,isFirstRow:l===0,className:N===0?"zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px]":"",children:se(u[Z],u,l,ie,r)},`table-align-${f}-cell-${l}-${h}-${N}`))},`table-align-${f}-row-${l}`))})]})}),z&&t.jsx("div",{className:`zep-my-2.5 ${n===e.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:t.jsx("p",{children:z})}),d&&F&&t.jsx("div",{children:t.jsx(oe,{label:d,variant:le.Primary,labelClass:"zep-text-indigo-500",onClick:F})})]})})};try{B.displayName="Table",B.__docgenInfo={description:"",displayName:"Table",props:{dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{}[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<{}>[]"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"TableThemes.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZSD"'},{value:'"Default"'}]}},descriptionTop:{defaultValue:null,description:"",name:"descriptionTop",required:!1,type:{name:"string"}},descriptionBottom:{defaultValue:null,description:"",name:"descriptionBottom",required:!1,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},tableButtonOnClick:{defaultValue:null,description:"",name:"tableButtonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const ve={title:"Components/Table",component:B,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(e)}},children:{control:{disable:!0}}},parameters:{a11y:{disable:!0}}},b=[{key:"k1",dataIndex:"type",title:"Type"},{key:"k2",dataIndex:"id",title:"Shop",renderAs:x.Button,props:{iconName:"download",onClick:a=>console.log("download",a)}},{key:"k3",dataIndex:"motor",title:"Motorleistung"},{key:"k4",dataIndex:"grab",title:"max. Grabtiefe/ max. Reichweite"},{key:"k5",dataIndex:"loffel",title:"Löffelvolumen"},{key:"k6",dataIndex:"einsatz",title:"Einsatzgewicht"},{key:"k7",dataIndex:"konfig",title:"Konfigurator"},{key:"k8",dataIndex:"id",title:"Datenblatt Download",renderAs:x.Button,props:{iconName:"download",onClick:a=>console.log("download",a)}}],o={id:1,type:"300.9D*",motor:"13,7 kW (18,6 PS)",grab:"1,7 / 3,1 m",loffel:"0,03 m³",einsatz:"985 kg",konfig:"300.9D*"},g=[o,{...o,id:2},{...o,id:3},{...o,id:4},{...o,id:5},{...o,id:6},{...o,id:7},{...o,id:8},{...o,id:9}],S={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:g,columns:b,tableButtonOnClick:()=>null}},y={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:g,columns:b,align:"left",tableButtonOnClick:()=>null}},k={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:g,columns:b,align:"center",tableButtonOnClick:()=>null}},v={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:g,columns:b,align:"right",tableButtonOnClick:()=>null}},T={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",maxWidth:700,maxHeight:500,variant:e.Zps,dataSource:g,columns:b,tableButtonOnClick:()=>null}},C={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",fullWidth:!0,variant:e.Zps,dataSource:g,tableButtonOnClick:()=>null,columns:b}};var D,O,K;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    tableButtonOnClick: () => null
  }
}`,...(K=(O=S.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var A,q,_;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    align: 'left',
    tableButtonOnClick: () => null
  }
}`,...(_=(q=y.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var $,R,P;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    align: 'center',
    tableButtonOnClick: () => null
  }
}`,...(P=(R=k.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var I,M,G;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    align: 'right',
    tableButtonOnClick: () => null
  }
}`,...(G=(M=v.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var J,Q,U;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
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
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    fullWidth: true,
    variant: TableThemes.Zps,
    dataSource: cells,
    tableButtonOnClick: () => null,
    columns: heads
  }
}`,...(ee=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};const Te=["Default","AlignLeft","AlignCenter","AlignRight","FixedSize","FullWidth"];export{k as AlignCenter,y as AlignLeft,v as AlignRight,S as Default,T as FixedSize,C as FullWidth,Te as __namedExportsOrder,ve as default};
