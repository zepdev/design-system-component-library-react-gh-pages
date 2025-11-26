import{j as a,c as m}from"./clsx-36b9529f.js";import{a as ie,F as le}from"./Icon-b16205c3.js";import{c as j}from"./index-24fb42db.js";import{r as ae}from"./index-8b3efc3f.js";import{Z as pe,a as ce}from"./ZpsButton-d855d1ed.js";import{t as W}from"./tw-merge-1166cefb.js";import{B as ue,a as L}from"./Button-4e81009e.js";import"./_commonjsHelpers-de833af9.js";import"./Spacing-3ed1191f.js";var e=(t=>(t.Zps="ZPS",t.Cat="CAT",t.Zsd="ZSD",t.Default="Default",t))(e||{}),h=(t=>(t.Text="text",t.Button="button",t))(h||{});const ne=ae.createContext({variant:e.Zps}),F=()=>ae.useContext(ne),de=({children:t,...o})=>a.jsx("tbody",{...o,children:t}),me=({children:t,className:o,isFirstRow:r,align:c,...u})=>{const{variant:i}=F(),d={[e.Zps]:["zep-text-typography-primary-default "],[e.Cat]:["zep-text-typography-dark-100"],[e.Zsd]:["zep-text-typography-dark-100"],[e.Default]:["zep-text-typography-dark-100"]},z=j([` zep-inline-block
        sm:zep-text-unset
        sm:zep-py-0.5
        zep-typography-bodyText
        zep-whitespace-normal
        zep-max-w-[250px]
        lg:zep-max-w-[400px]
      `],{variants:{variant:d},defaultVariants:{variant:e.Zps}});return a.jsxs("td",{className:m("zep-justify-between zep-break-words zep-whitespace-normal sm:zep-table-cell zep-relative zep-py-0.75 sm:zep-py-0.5 zep-px-1 md:zep-px-1.5 zep-bg-greyscale-0 lg:zep-max-w- zep-group",o),style:{textAlign:c},...u,children:[a.jsx("span",{style:{width:"max-content"},className:W(z({variant:i}),i===e.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:t}),a.jsx("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"})]})},be=({children:t,className:o,...r})=>{const{variant:c}=F(),u={[e.Zps]:["zep-bg-indigo-500"],[e.Cat]:["zep-bg-yellow-500"],[e.Zsd]:["zep-bg-greyscale-200"],[e.Default]:["zep-bg-greyscale-0"]},i=j([`
      sm:zep-table-row-group`],{variants:{variant:u},defaultVariants:{variant:e.Zps}});return a.jsx("thead",{className:W(i({variant:c,className:o})),...r,children:t})},ge=({children:t,className:o,align:r="left",...c})=>{const{variant:u}=F(),i={[e.Zps]:["zep-text-typography-light-100"],[e.Cat]:["zep-text-typography-dark-100"],[e.Zsd]:["zep-text-typography-dark-100"],[e.Default]:["zep-text-typography-dark-100"]},d=j([`zep-inline-block
      sm:zep-text-unset
      sm:zep-py-0.5
      zep-typography-bodyText
      zep-break-words
      zep-whitespace-normal
      zep-max-w-[250px]
      lg:zep-max-w-[400px]
      `],{variants:{variant:i},defaultVariants:{variant:e.Zps}});return a.jsxs("th",{className:m("zep-w-auto zep-relative zep-py-0.75 sm:zep-py-0.5 zep-px-1 md:zep-px-1.5  lg:zep-break-words",o),style:{textAlign:r},...c,children:[a.jsx("span",{style:{width:"max-content"},className:W(d({variant:u})),children:t}),a.jsx("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"})]})},O=({children:t,className:o,...r})=>a.jsx("tr",{className:m(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",o),...r,children:t}),w=({children:t,className:o,variant:r=e.Zps,maxWidth:c,maxHeight:u,fullWidth:i,buttonLabel:d,descriptionBottom:z,descriptionTop:H,dataSource:re,columns:N,align:x,tableButtonOnClick:E,...se})=>{const oe=(n,p,f,B,s)=>{var y;switch(B){case h.Button:return n!=="x"&&((y=n==null?void 0:n.toString())!=null&&y.includes(".pdf"))?a.jsx(ue,{icon:s==null?void 0:s.iconName,variant:r===e.Zps?L.Tertiary:L.DarkTertiary,onClick:(s==null?void 0:s.onClick)===void 0?void 0:()=>s.onClick(n,p,f),renderLink:!0,href:n,children:s==null?void 0:s.title}):null;case h.Text:default:return Object.keys(ie).includes(n)?a.jsx(le,{name:n}):n}};return a.jsx(ne.Provider,{value:{variant:r},children:a.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-1.5",children:[H&&a.jsx("p",{className:r===e.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100",children:H}),a.jsx("div",{className:m("zep-overflow-scroll zep-w-auto",o,{"sm:zep-w-auto":i}),style:{maxWidth:c,maxHeight:u},"data-testid":"zep-table",children:a.jsxs("table",{className:m("zep-table zep-w-auto",{"sm:zep-w-full":i},"zep-table-auto"),...se,children:[a.jsx(be,{children:a.jsx(O,{children:N.map(({title:n,key:p},f)=>a.jsx(ge,{className:m({"sm:zep-sticky sm:zep-left-[0] sm:zep-z-20 sm:zep-drop-shadow-lg":f===0,"zep-bg-indigo-500":r===e.Zps,"zep-bg-yellow-500":r===e.Cat,"zep-bg-greyscale-200":r===e.Zsd}),align:x,children:n},`table-align-${x}-head-cell-${p}`))})}),a.jsx(de,{children:re.map((n,p)=>a.jsx(O,{children:N.map(({key:f,dataIndex:B,props:s,renderAs:y},V)=>(console.log("AAA",n),a.jsx(me,{align:x,isFirstRow:p===0,className:V===0?"sm:zep-sticky sm:zep-left-[0] sm:zep-z-20  sm:zep-drop-shadow-lg":"",children:oe(n[B],n,p,y,s)},`table-align-${x}-cell-${p}-${f}-${V}`)))},`table-align-${x}-row-${p}`))})]})}),z&&a.jsx("p",{className:`zep-typography-supportText ${r===e.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:z}),d&&E&&a.jsx("div",{children:a.jsx(pe,{label:d,variant:ce.Primary,labelClass:"zep-text-indigo-500",onClick:E})})]})})};try{w.displayName="Table",w.__docgenInfo={description:"",displayName:"Table",props:{dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{}[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<{}>[]"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"TableThemes.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZSD"'},{value:'"Default"'}]}},descriptionTop:{defaultValue:null,description:"",name:"descriptionTop",required:!1,type:{name:"string"}},descriptionBottom:{defaultValue:null,description:"",name:"descriptionBottom",required:!1,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},tableButtonOnClick:{defaultValue:null,description:"",name:"tableButtonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const Ce={title:"Components/Table",component:w,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(e)}},children:{control:{disable:!0}}},parameters:{a11y:{disable:!0}}},b=[{key:"k1",dataIndex:"type",title:"Type"},{key:"k2",dataIndex:"id",title:"Shop",renderAs:h.Button,props:{iconName:"download",onClick:t=>console.log("download",t)}},{key:"k3",dataIndex:"motor",title:"Motorleistung this is a test headline, this headline is much much longer"},{key:"k4",dataIndex:"grab",title:"max. Grabtiefe/ max. Reichweite"},{key:"k5",dataIndex:"loffel",title:"Löffelvolumen"},{key:"k6",dataIndex:"einsatz",title:"Einsatzgewicht"},{key:"k7",dataIndex:"konfig",title:"Konfigurator"},{key:"k8",dataIndex:"id",title:"Datenblatt Download",renderAs:h.Button,props:{iconName:"download",onClick:t=>console.log("download",t)}}],l={id:1,type:"300.9D*",motor:"13,7 kW (18,6 PS)",grab:"1,7 / 3,1 m this content is test content and could be much longer",loffel:"0,03 m³",einsatz:"985 kg",konfig:"300.9D*"},g=[l,{...l,id:"x"},{...l,id:"addad.pdf",loffel:"check"},{...l,id:4},{...l,id:5},{...l,id:6,loffel:"email"},{...l,id:7},{...l,id:8},{...l,id:9}],S={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:g,columns:b,tableButtonOnClick:()=>null}},k={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:g,columns:b,align:"left",tableButtonOnClick:()=>null}},v={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:g,columns:b,align:"center",tableButtonOnClick:()=>null}},T={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:g,columns:b,align:"right",tableButtonOnClick:()=>null}},C={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",maxWidth:700,maxHeight:500,variant:e.Zps,dataSource:g,columns:b,tableButtonOnClick:()=>null}},Z={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",fullWidth:!0,variant:e.Zps,dataSource:g,tableButtonOnClick:()=>null,columns:b}};var A,D,K;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    tableButtonOnClick: () => null
  }
}`,...(K=(D=S.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var q,_,$;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...($=(_=k.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var I,R,P;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(R=v.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var M,G,J;T.parameters={...T.parameters,docs:{...(M=T.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(J=(G=T.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,X;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=C.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,ee,te;Z.parameters={...Z.parameters,docs:{...(Y=Z.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(te=(ee=Z.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Ze=["Default","AlignLeft","AlignCenter","AlignRight","FixedSize","FullWidth"];export{v as AlignCenter,k as AlignLeft,T as AlignRight,S as Default,C as FixedSize,Z as FullWidth,Ze as __namedExportsOrder,Ce as default};
