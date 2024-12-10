import{j as e,c as f}from"./clsx-36b9529f.js";import{c as j}from"./index-24fb42db.js";import{r as Y}from"./index-8b3efc3f.js";import{Z as le,a as pe}from"./ZpsButton-38651e20.js";import{t as w}from"./tw-merge-1166cefb.js";import{B as ue,a as E}from"./Button-5aa4a4c1.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-2b37dda0.js";import"./Spacing-3ed1191f.js";var t=(n=>(n.Zps="ZPS",n.Cat="CAT",n))(t||{}),h=(n=>(n.Text="text",n.Button="button",n))(h||{});const ee=Y.createContext({variant:t.Zps}),W=()=>Y.useContext(ee),ce=({children:n,...o})=>e.jsx("tbody",{...o,children:n}),de=({children:n,className:o,isFirstRow:a,align:p,...u})=>{const{variant:i}=W(),b={[t.Zps]:["zep-text-typography-primary-default "],[t.Cat]:["zep-text-typography-dark-100"]},C=j([`
    zep-inline-block
    zep-text-right
    sm:zep-text-unset
    sm:zep-py-0.5
    zep-w-full
   zep-typography-bodyText
      `],{variants:{variant:b},defaultVariants:{variant:t.Zps}});return e.jsxs("td",{className:f("zep-justify-between sm:zep-table-cell zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 zep-bg-greyscale-0  lg:zep-whitespace-nowrap zep-group",o),style:{textAlign:p},...u,children:[e.jsx("span",{className:w(C({variant:i}),i===t.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:n}),e.jsx("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"})]})},me=({children:n,className:o,...a})=>{const{variant:p}=W(),u={[t.Zps]:["zep-bg-indigo-500"],[t.Cat]:["zep-bg-yellow-500"]},i=j([`
      sm:zep-table-row-group`],{variants:{variant:u},defaultVariants:{variant:t.Zps}});return e.jsx("thead",{className:w(i({variant:p,className:o})),...a,children:n})},be=({children:n,className:o,align:a="left",...p})=>{const{variant:u}=W(),i={[t.Zps]:["zep-text-typography-light-100"],[t.Cat]:["zep-text-typography-dark-100"]},b=j([`
      zep-inline-block
      lg:zep-py-0.5
      zep-w-full
      zep-typography-bodyStrong`],{variants:{variant:i},defaultVariants:{variant:t.Zps}});return e.jsxs("th",{className:f("zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 lg:zep-whitespace-nowrap",o),style:{textAlign:a},...p,children:[e.jsx("span",{className:w(b({variant:u})),children:n}),e.jsx("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"})]})},F=({children:n,className:o,...a})=>e.jsx("tr",{className:f(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",o),...a,children:n}),Z=({children:n,className:o,variant:a=t.Zps,maxWidth:p,maxHeight:u,fullWidth:i,textTop:b=!0,buttonLabel:C,descriptionBottom:te,descriptionTop:ne,dataSource:ae,columns:H,align:g,tableButtonOnClick:re,...oe})=>{const ie=(c,l,x,B,r)=>{switch(B){case h.Button:return e.jsx(ue,{icon:r==null?void 0:r.iconName,variant:a===t.Zps?E.Tertiary:E.DarkTertiary,onClick:(r==null?void 0:r.onClick)===void 0?void 0:()=>r.onClick(c,l,x),children:r==null?void 0:r.title});case h.Text:default:return e.jsx("p",{children:c})}};return e.jsx(ee.Provider,{value:{variant:a},children:e.jsxs(e.Fragment,{children:[b&&e.jsx("div",{className:`zep-mb-2.5 ${a===t.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:e.jsx("p",{children:ne})}),e.jsx("div",{className:f("zep-overflow-scroll zep-w-full sm:zep-w-auto",o,{"sm:zep-w-full":i}),style:{maxWidth:p,maxHeight:u},"data-testid":"zep-table",children:e.jsxs("table",{className:f("zep-table zep-w-full sm:zep-w-auto",{"sm:zep-w-full":i}),...oe,children:[e.jsx(me,{children:e.jsx(F,{children:H.map(({title:c,key:l},x)=>e.jsx(be,{className:x===0?`zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px] ${a===t.Zps?"zep-bg-indigo-500":"zep-bg-yellow-500"}`:"",align:g,children:c},`table-align-${g}-head-cell-${l}`))})}),e.jsx(ce,{children:ae.map((c,l)=>e.jsx(F,{children:H.map(({key:x,dataIndex:B,props:r,renderAs:se},V)=>e.jsx(de,{align:g,isFirstRow:l===0,className:V===0?"zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px]":"",children:ie(c[B],c,l,se,r)},`table-align-${g}-cell-${l}-${x}-${V}`))},`table-align-${g}-row-${l}`))})]})}),e.jsx("div",{className:`zep-my-2.5 ${a===t.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:e.jsx("p",{children:te})}),e.jsx("div",{children:e.jsx(le,{label:C,variant:pe.Primary,labelClass:"zep-text-indigo-500",onClick:re})})]})})};try{Z.displayName="Table",Z.__docgenInfo={description:"",displayName:"Table",props:{dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{}[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<{}>[]"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"TableThemes.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},textTop:{defaultValue:{value:"true"},description:"",name:"textTop",required:!1,type:{name:"boolean"}},descriptionTop:{defaultValue:null,description:"",name:"descriptionTop",required:!1,type:{name:"string"}},descriptionBottom:{defaultValue:null,description:"",name:"descriptionBottom",required:!0,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!0,type:{name:"string"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},tableButtonOnClick:{defaultValue:null,description:"",name:"tableButtonOnClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}}}}}catch{}const Te={title:"Components/Table",component:Z,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(t)}},children:{control:{disable:!0}}},parameters:{a11y:{disable:!0}}},d=[{key:"k1",dataIndex:"type",title:"Type"},{key:"k2",dataIndex:"id",title:"Shop",renderAs:h.Button,props:{iconName:"download",onClick:n=>console.log("download",n)}},{key:"k3",dataIndex:"motor",title:"Motorleistung"},{key:"k4",dataIndex:"grab",title:"max. Grabtiefe/ max. Reichweite"},{key:"k5",dataIndex:"loffel",title:"Löffelvolumen"},{key:"k6",dataIndex:"einsatz",title:"Einsatzgewicht"},{key:"k7",dataIndex:"konfig",title:"Konfigurator"},{key:"k8",dataIndex:"id",title:"Datenblatt Download",renderAs:h.Button,props:{iconName:"download",onClick:n=>console.log("download",n)}}],s={id:1,type:"300.9D*",motor:"13,7 kW (18,6 PS)",grab:"1,7 / 3,1 m",loffel:"0,03 m³",einsatz:"985 kg",konfig:"300.9D*"},m=[s,{...s,id:2},{...s,id:3},{...s,id:4},{...s,id:5},{...s,id:6},{...s,id:7},{...s,id:8},{...s,id:9}],z={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:t.Zps,dataSource:m,columns:d,tableButtonOnClick:()=>null}},S={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:t.Zps,dataSource:m,columns:d,align:"left",tableButtonOnClick:()=>null}},y={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:t.Zps,dataSource:m,columns:d,align:"center",tableButtonOnClick:()=>null}},v={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:t.Zps,dataSource:m,columns:d,align:"right",tableButtonOnClick:()=>null}},k={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",maxWidth:700,maxHeight:500,variant:t.Zps,dataSource:m,columns:d,tableButtonOnClick:()=>null}},T={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",fullWidth:!0,variant:t.Zps,dataSource:m,tableButtonOnClick:()=>null,columns:d}};var N,L,O;z.parameters={...z.parameters,docs:{...(N=z.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(L=z.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var K,q,A;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(A=(q=S.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var $,_,D;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(D=(_=y.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var R,P,I;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(P=v.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var M,G,J;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(J=(G=k.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,X;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=T.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const Ce=["Default","AlignLeft","AlignCenter","AlignRight","FixedSize","FullWidth"];export{y as AlignCenter,S as AlignLeft,v as AlignRight,z as Default,k as FixedSize,T as FullWidth,Ce as __namedExportsOrder,Te as default};
