import{c as g,j as u}from"./clsx-36b9529f.js";import{w as Q,u as o,e as i}from"./index-dccde6df.js";import{r as I}from"./index-8b3efc3f.js";import{B as b,a as E}from"./Button-4e81009e.js";import"./_commonjsHelpers-de833af9.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";import"./index-24fb42db.js";import"./Icon-b16205c3.js";import"./tw-merge-1166cefb.js";import"./Spacing-3ed1191f.js";const z=({children:t,active:e,disabled:l,Comp:a="a",theme:r="default",...m})=>{const p=g("zep-typography-link",{"zep-border-b-2 zep-text-neutral-800":e&&(r??"default")==="default","zep-border-b-2 !zep-text-primary-default":e&&(r??"default")==="indigo","zep-cursor-not-allowed zep-pointer-events-none":l,"hover:zep-border-b-1 zep-box-border zep-text-neutral-800":!e&&r!=="indigo","hover:zep-border-b-1 zep-box-border !zep-text-primary-default":!e&&r==="indigo"});return u.jsx(a,{className:g("zep-no-underline","sm:zep-p-0.5","zep-p-0.25","zep-w-2.5","zep-h-2.5","sm:zep-w-3","sm:zep-h-3","zep-cursor-pointer","zep-typography-link","zep-text-typography-dark-70/70",p),"aria-current":e?"page":void 0,...m,children:u.jsx("span",{className:g("zep-w-2","zep-h-2","zep-leading-2","zep-flex","zep-items-center","zep-justify-center",e?"zep-text-typography-dark-100":"zep-text-typography-dark-70/70",{"zep-text-typography-dark-40/40":l}),children:t})})};try{z.displayName="PageLink",z.__docgenInfo={description:"",displayName:"PageLink",props:{Comp:{defaultValue:{value:"a"},description:"",name:"Comp",required:!1,type:{name:"any"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:{value:"default"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"indigo"'}]}}}}}catch{}const U=(t,e,l)=>{const a=[];if(e<=l)for(let r=1;r<=e;r++)a.push(r);else{const p=l-3,d=p/2;if(t-1<d||e-t<d){for(let v=1;v<=d+1;v++)a.push(v);a.push(NaN);for(let v=e-d;v<=e;v++)a.push(v)}else if(t-1>=p&&e-t>=p){const v=d-1;a.push(1),a.push(NaN);for(let c=t-v;c<=t+v;c++)a.push(c);a.push(NaN),a.push(e)}else{const v=t-1<e-t;let c=l;if(v){for(let n=1;n<=t+1;n++)a.push(n),c-=1;a.push(NaN),c-=1;for(let n=e-(c-1);n<=e;n++)a.push(n)}else{for(let n=e;n>=t-1;n--)a.unshift(n),c-=1;a.unshift(NaN),c-=1;for(let n=c;n>=1;n--)a.unshift(n)}}}return a},X=()=>{const t=()=>window.innerWidth<=768?5:7,[e,l]=I.useState(t);return I.useEffect(()=>{const a=()=>l(t);return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),{maxPageLength:e}},C=({Comp:t,currentPage:e,itemsPerPage:l,setCurrentPage:a,totalElements:r,theme:m="default"})=>{const{maxPageLength:p}=X(),d=I.useMemo(()=>Math.ceil(r/l),[l,r]),v=U(e,d,p),c=m==="indigo"?"!zep-text-primary-default":"zep-text-typography-dark-70/70";return u.jsxs("div",{className:g("zep-flex","zep-flex-col","sm:zep-gap-1.5","zep-gap-0.5","zep-items-center","zep-text-center"),"data-testid":"zep-pagination",children:[u.jsxs("div",{className:g("zep-flex","zep-gap-0.5"),children:[u.jsx(b,{className:g(c),disabled:e===1,icon:"arrow-long-left",onClick:()=>a(e-1),variant:E.DarkTertiary}),v.map((n,K)=>u.jsx(z,{Comp:t,theme:m,active:e===n,disabled:isNaN(n),onClick:()=>a(n),children:isNaN(n)?"...":n},K)),u.jsx(b,{className:g(c),disabled:e===d,icon:"arrow-long-right",onClick:()=>a(e+1),variant:E.DarkTertiary})]}),u.jsxs("ul",{className:g("zep-flex ","zep-gap-0.25"),children:[u.jsx("li",{children:l*e-l+1}),u.jsx("li",{children:"-"}),u.jsx("li",{children:Math.min(l*e,r)}),u.jsx("li",{children:"von"}),u.jsx("li",{children:r})]})]})};try{C.displayName="Pagination",C.__docgenInfo={description:"",displayName:"Pagination",props:{Comp:{defaultValue:null,description:"",name:"Comp",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"label"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},totalElements:{defaultValue:null,description:"",name:"totalElements",required:!0,type:{name:"number"}},theme:{defaultValue:{value:"default"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"indigo"'}]}}}}}catch{}const ue={title:"Components/Pagination",component:C,tags:["autodocs"],argTypes:{theme:{control:{type:"radio"},options:["default","indigo"]}},decorators:[t=>{const[e,l]=I.useState(1);return u.jsx(t,{currentPage:e,setCurrentPage:l})}]},x={setCurrentPage:()=>console.log("page changed"),currentPage:1,itemsPerPage:10,totalElements:160,theme:"default"},f=(t,e)=>{const{currentPage:l,setCurrentPage:a}=e,{totalElements:r,itemsPerPage:m,Comp:p,theme:d}=t;return u.jsx("div",{className:"zep-text-center zep-inline-block",children:u.jsx(C,{Comp:p,currentPage:l,itemsPerPage:m,setCurrentPage:a,totalElements:r,theme:d})})},y={args:{...x,theme:"default"},render:(t,e)=>f(t,e)},T={args:{...x,totalElements:20,theme:"default"},render:(t,e)=>f(t,e)},h={args:{...x,totalElements:20,theme:"default"},render:(t,e)=>f(t,e)},w={args:{...x,totalElements:20,theme:"indigo"},render:(t,e)=>f(t,e)},k={args:{...x,totalElements:192,theme:"default"},render:(t,e)=>f(t,e)},s="zep-pagination",B={args:{...x,Comp:"button",theme:"indigo"},render:(t,e)=>f(t,e),play:async({canvasElement:t})=>{const e=Q(t);await o.click(e.getByText("2")),await i(e.getByTestId(s)).toHaveTextContent("11-20von160"),await o.click(e.getByText("3")),await i(e.getByTestId(s)).toHaveTextContent("21-30von160"),await o.click(e.getByText("4")),await i(e.getByTestId(s)).toHaveTextContent("31-40von160"),await o.click(e.getByText("5")),await i(e.getByTestId(s)).toHaveTextContent("41-50von160"),await o.click(e.getByText("6")),await i(e.getByTestId(s)).toHaveTextContent("51-60von160"),await o.click(e.getByText("7")),await i(e.getByTestId(s)).toHaveTextContent("61-70von160"),await o.click(e.getByText("8")),await i(e.getByTestId(s)).toHaveTextContent("71-80von160"),await o.click(e.getByText("9")),await i(e.getByTestId(s)).toHaveTextContent("81-90von160"),await o.click(e.getByText("10")),await i(e.getByTestId(s)).toHaveTextContent("91-100von160"),await o.click(e.getByText("9")),await i(e.getByTestId(s)).toHaveTextContent("81-90von160"),await o.click(e.getByText("8")),await i(e.getByTestId(s)).toHaveTextContent("71-80von160"),await o.click(e.getByText("7")),await i(e.getByTestId(s)).toHaveTextContent("61-70von160"),await o.click(e.getByText("6")),await i(e.getByTestId(s)).toHaveTextContent("51-60von160"),await o.click(e.getByText("5")),await i(e.getByTestId(s)).toHaveTextContent("41-50von160"),await o.click(e.getByText("4")),await i(e.getByTestId(s)).toHaveTextContent("31-40von160"),await o.click(e.getByText("3")),await i(e.getByTestId(s)).toHaveTextContent("21-30von160"),await o.click(e.getByText("2")),await i(e.getByTestId(s)).toHaveTextContent("11-20von160"),await o.click(e.getByText("1")),await i(e.getByTestId(s)).toHaveTextContent("1-10von160")}};var H,L,P;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    theme: 'default'
  },
  render: (args, context) => defaultStory(args, context)
}`,...(P=(L=y.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var N,j,S;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    totalElements: 20,
    theme: 'default'
  },
  render: (args, context) => defaultStory(args, context)
}`,...(S=(j=T.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var _,q,M;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    totalElements: 20,
    theme: 'default'
  },
  render: (args, context) => defaultStory(args, context)
}`,...(M=(q=h.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var V,A,W;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    totalElements: 20,
    theme: 'indigo'
  },
  render: (args, context) => defaultStory(args, context)
}`,...(W=(A=w.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var D,F,G;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    totalElements: 192,
    theme: 'default'
  },
  render: (args, context) => defaultStory(args, context)
}`,...(G=(F=k.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var O,R,J;B.parameters={...B.parameters,docs:{...(O=B.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    Comp: 'button',
    theme: 'indigo'
  },
  render: (args, context) => defaultStory(args, context),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('2'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('11-20von160');
    await userEvent.click(canvas.getByText('3'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('21-30von160');
    await userEvent.click(canvas.getByText('4'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('31-40von160');
    await userEvent.click(canvas.getByText('5'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('41-50von160');
    await userEvent.click(canvas.getByText('6'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('51-60von160');
    await userEvent.click(canvas.getByText('7'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('61-70von160');
    await userEvent.click(canvas.getByText('8'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('71-80von160');
    await userEvent.click(canvas.getByText('9'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('81-90von160');
    await userEvent.click(canvas.getByText('10'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('91-100von160');
    await userEvent.click(canvas.getByText('9'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('81-90von160');
    await userEvent.click(canvas.getByText('8'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('71-80von160');
    await userEvent.click(canvas.getByText('7'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('61-70von160');
    await userEvent.click(canvas.getByText('6'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('51-60von160');
    await userEvent.click(canvas.getByText('5'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('41-50von160');
    await userEvent.click(canvas.getByText('4'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('31-40von160');
    await userEvent.click(canvas.getByText('3'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('21-30von160');
    await userEvent.click(canvas.getByText('2'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('11-20von160');
    await userEvent.click(canvas.getByText('1'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('1-10von160');
  }
}`,...(J=(R=B.parameters)==null?void 0:R.docs)==null?void 0:J.source}}};const ve=["Default","With1Page","With2Pages","WithIndigoTheme","With12Pages","AsButtonPageLinks"];export{B as AsButtonPageLinks,y as Default,k as With12Pages,T as With1Page,h as With2Pages,w as WithIndigoTheme,ve as __namedExportsOrder,ue as default};
