import{j as t,c as m}from"./clsx-36b9529f.js";import{a as ie,F as le}from"./Icon-16e72687.js";import{c as w}from"./index-24fb42db.js";import{r as te}from"./index-8b3efc3f.js";import{Z as pe,a as ce}from"./ZpsButton-e3381b34.js";import{t as j}from"./tw-merge-1166cefb.js";import{B as ue,a as V}from"./Button-8a1d7453.js";import"./_commonjsHelpers-de833af9.js";import"./Spacing-3ed1191f.js";var e=(a=>(a.Zps="ZPS",a.Cat="CAT",a.Zsd="ZSD",a.Default="Default",a))(e||{}),f=(a=>(a.Text="text",a.Button="button",a))(f||{});const ae=te.createContext({variant:e.Zps}),F=()=>te.useContext(ae),de=({children:a,...s})=>t.jsx("tbody",{...s,children:a}),me=({children:a,className:s,isFirstRow:n,align:c,...u})=>{const{variant:o}=F(),d={[e.Zps]:["zep-text-typography-primary-default "],[e.Cat]:["zep-text-typography-dark-100"],[e.Zsd]:["zep-text-typography-dark-100"],[e.Default]:["zep-text-typography-dark-100"]},z=w([` zep-inline-block
        sm:zep-text-unset
        sm:zep-py-0.5
        zep-typography-bodyText
        zep-whitespace-normal
        zep-max-w-[250px]
        lg:zep-max-w-[400px]
      `],{variants:{variant:d},defaultVariants:{variant:e.Zps}});return t.jsxs("td",{className:m("zep-justify-between zep-break-words zep-whitespace-normal sm:zep-table-cell zep-relative zep-py-0.75 sm:zep-py-0.5 zep-px-1 md:zep-px-1.5 zep-bg-greyscale-0 lg:zep-max-w- zep-group",s),style:{textAlign:c},...u,children:[t.jsx("span",{style:{width:"max-content"},className:j(z({variant:o}),o===e.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:a}),t.jsx("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"})]})},be=({children:a,className:s,...n})=>{const{variant:c}=F(),u={[e.Zps]:["zep-bg-indigo-500"],[e.Cat]:["zep-bg-yellow-500"],[e.Zsd]:["zep-bg-greyscale-200"],[e.Default]:["zep-bg-greyscale-0"]},o=w([`
      sm:zep-table-row-group`],{variants:{variant:u},defaultVariants:{variant:e.Zps}});return t.jsx("thead",{className:j(o({variant:c,className:s})),...n,children:a})},ge=({children:a,className:s,align:n="left",...c})=>{const{variant:u}=F(),o={[e.Zps]:["zep-text-typography-light-100"],[e.Cat]:["zep-text-typography-dark-100"],[e.Zsd]:["zep-text-typography-dark-100"],[e.Default]:["zep-text-typography-dark-100"]},d=w([`zep-inline-block
      sm:zep-text-unset
      sm:zep-py-0.5
      zep-typography-bodyText
      zep-break-words
      zep-whitespace-normal
      zep-max-w-[250px]
      lg:zep-max-w-[400px]
      `],{variants:{variant:o},defaultVariants:{variant:e.Zps}});return t.jsxs("th",{className:m("zep-w-auto zep-relative zep-py-0.75 sm:zep-py-0.5 zep-px-1 md:zep-px-1.5  lg:zep-break-words",s),style:{textAlign:n},...c,children:[t.jsx("span",{style:{width:"max-content"},className:j(d({variant:u})),children:a}),t.jsx("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"})]})},L=({children:a,className:s,...n})=>t.jsx("tr",{className:m(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",s),...n,children:a}),B=({children:a,className:s,variant:n=e.Zps,maxWidth:c,maxHeight:u,fullWidth:o,buttonLabel:d,descriptionBottom:z,descriptionTop:W,dataSource:ne,columns:H,align:x,tableButtonOnClick:E,...re})=>{const se=(i,p,h,Z,r)=>{switch(Z){case f.Button:return t.jsx(ue,{icon:r==null?void 0:r.iconName,variant:n===e.Zps?V.Tertiary:V.DarkTertiary,onClick:(r==null?void 0:r.onClick)===void 0?void 0:()=>r.onClick(i,p,h),children:r==null?void 0:r.title});case f.Text:default:return Object.keys(ie).includes(i)?t.jsx(le,{name:i}):i}};return t.jsx(ae.Provider,{value:{variant:n},children:t.jsxs(t.Fragment,{children:[W&&t.jsx("div",{className:`zep-mb-2.5 ${n===e.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:t.jsx("p",{children:W})}),t.jsx("div",{className:m("zep-overflow-scroll zep-w-auto",s,{"sm:zep-w-auto":o}),style:{maxWidth:c,maxHeight:u},"data-testid":"zep-table",children:t.jsxs("table",{className:m("zep-table zep-w-auto",{"sm:zep-w-full":o},"zep-table-auto"),...re,children:[t.jsx(be,{children:t.jsx(L,{children:H.map(({title:i,key:p},h)=>t.jsx(ge,{className:m({"sm:zep-sticky sm:zep-left-[0] sm:zep-z-20 sm:zep-drop-shadow-lg":h===0,"zep-bg-indigo-500":n===e.Zps,"zep-bg-yellow-500":n===e.Cat,"zep-bg-greyscale-200":n===e.Zsd}),align:x,children:i},`table-align-${x}-head-cell-${p}`))})}),t.jsx(de,{children:ne.map((i,p)=>t.jsx(L,{children:H.map(({key:h,dataIndex:Z,props:r,renderAs:oe},N)=>t.jsx(me,{align:x,isFirstRow:p===0,className:N===0?"sm:zep-sticky sm:zep-left-[0] sm:zep-z-20  sm:zep-drop-shadow-lg":"",children:se(i[Z],i,p,oe,r)},`table-align-${x}-cell-${p}-${h}-${N}`))},`table-align-${x}-row-${p}`))})]})}),z&&t.jsx("div",{className:`zep-my-2.5 ${n===e.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:t.jsx("p",{children:z})}),d&&E&&t.jsx("div",{children:t.jsx(pe,{label:d,variant:ce.Primary,labelClass:"zep-text-indigo-500",onClick:E})})]})})};try{B.displayName="Table",B.__docgenInfo={description:"",displayName:"Table",props:{dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{}[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<{}>[]"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"TableThemes.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZSD"'},{value:'"Default"'}]}},descriptionTop:{defaultValue:null,description:"",name:"descriptionTop",required:!1,type:{name:"string"}},descriptionBottom:{defaultValue:null,description:"",name:"descriptionBottom",required:!1,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},tableButtonOnClick:{defaultValue:null,description:"",name:"tableButtonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const Ce={title:"Components/Table",component:B,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(e)}},children:{control:{disable:!0}}},parameters:{a11y:{disable:!0}}},b=[{key:"k1",dataIndex:"type",title:"Type"},{key:"k2",dataIndex:"id",title:"Shop",renderAs:f.Button,props:{iconName:"download",onClick:a=>console.log("download",a)}},{key:"k3",dataIndex:"motor",title:"Motorleistung this is a test headline, this headline is much much longer"},{key:"k4",dataIndex:"grab",title:"max. Grabtiefe/ max. Reichweite"},{key:"k5",dataIndex:"loffel",title:"Löffelvolumen"},{key:"k6",dataIndex:"einsatz",title:"Einsatzgewicht"},{key:"k7",dataIndex:"konfig",title:"Konfigurator"},{key:"k8",dataIndex:"id",title:"Datenblatt Download",renderAs:f.Button,props:{iconName:"download",onClick:a=>console.log("download",a)}}],l={id:1,type:"300.9D*",motor:"13,7 kW (18,6 PS)",grab:"1,7 / 3,1 m this content is test content and could be much longer",loffel:"0,03 m³",einsatz:"985 kg",konfig:"300.9D*"},g=[l,{...l,id:2},{...l,id:3,loffel:"check"},{...l,id:4},{...l,id:5},{...l,id:6,loffel:"email"},{...l,id:7},{...l,id:8},{...l,id:9}],y={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:g,columns:b,tableButtonOnClick:()=>null}},S={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:g,columns:b,align:"left",tableButtonOnClick:()=>null}},k={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:g,columns:b,align:"center",tableButtonOnClick:()=>null}},v={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:g,columns:b,align:"right",tableButtonOnClick:()=>null}},T={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",maxWidth:700,maxHeight:500,variant:e.Zps,dataSource:g,columns:b,tableButtonOnClick:()=>null}},C={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",fullWidth:!0,variant:e.Zps,dataSource:g,tableButtonOnClick:()=>null,columns:b}};var O,D,K;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    tableButtonOnClick: () => null
  }
}`,...(K=(D=y.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var A,q,_;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(_=(q=S.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var $,I,R;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(R=(I=k.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var P,M,G;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(ee=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};const Ze=["Default","AlignLeft","AlignCenter","AlignRight","FixedSize","FullWidth"];export{k as AlignCenter,S as AlignLeft,v as AlignRight,y as Default,T as FixedSize,C as FullWidth,Ze as __namedExportsOrder,Ce as default};
