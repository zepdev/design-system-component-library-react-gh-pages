import{j as o,c as m}from"./clsx-36b9529f.js";import{w as G,u as l,e as s}from"./index-dccde6df.js";import{r as I}from"./index-8b3efc3f.js";import{B as P,a as z}from"./Button-95ed3463.js";import"./_commonjsHelpers-de833af9.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";import"./index-24fb42db.js";import"./Icon-dac01d72.js";import"./tw-merge-1166cefb.js";import"./Spacing-3b8fb85e.js";const C=({children:t,active:e,disabled:r,Comp:a="a",...v})=>o.jsx(a,{className:m("zep-no-underline","sm:zep-p-0.5","zep-p-0.25","zep-w-2.5","zep-h-2.5","sm:zep-w-3","sm:zep-h-3","zep-cursor-pointer","zep-typography-link","zep-text-typography-dark-70/70",{"zep-border-b-2 zep-text-neutral-800":e,"zep-cursor-not-allowed zep-pointer-events-none":r,"hover:zep-border-b-1 zep-box-border zep-text-neutral-800":!e}),"aria-current":e?"page":void 0,...v,children:o.jsx("span",{className:m("zep-w-2","zep-h-2","zep-leading-2","zep-flex","zep-items-center","zep-justify-center",{"zep-text-typography-dark-100":e,"zep-text-typography-dark-40/40":r}),children:t})});try{C.displayName="PageLink",C.__docgenInfo={description:"",displayName:"PageLink",props:{Comp:{defaultValue:{value:"a"},description:"",name:"Comp",required:!1,type:{name:"any"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const O=(t,e,r)=>{const a=[];if(e<=r)for(let v=1;v<=e;v++)a.push(v);else{const d=r-3,p=d/2;if(t-1<p||e-t<p){for(let n=1;n<=p+1;n++)a.push(n);a.push(NaN);for(let n=e-p;n<=e;n++)a.push(n)}else if(t-1>=d&&e-t>=d){const n=p-1;a.push(1),a.push(NaN);for(let c=t-n;c<=t+n;c++)a.push(c);a.push(NaN),a.push(e)}else{const n=t-1<e-t;let c=r;if(n){for(let u=1;u<=t+1;u++)a.push(u),c-=1;a.push(NaN),c-=1;for(let u=e-(c-1);u<=e;u++)a.push(u)}else{for(let u=e;u>=t-1;u--)a.unshift(u),c-=1;a.unshift(NaN),c-=1;for(let u=c;u>=1;u--)a.unshift(u)}}}return a},B=({Comp:t,currentPage:e,lastPage:r,maxPageLength:a,itemsPerPage:v,setCurrentPage:g,totalElements:d})=>{const p=O(e,r,a);return o.jsxs("div",{className:m("zep-flex","zep-flex-col","sm:zep-gap-1.5","zep-gap-0.5","zep-items-center","zep-text-center"),"data-testid":"zep-pagination",children:[o.jsxs("div",{className:m("zep-flex","zep-gap-0.5"),children:[o.jsx(P,{className:"zep-text-typography-dark-70/70",disabled:e===1,icon:"arrow-long-left",onClick:()=>g(e-1),variant:z.DarkTertiary}),p.map((n,c)=>o.jsx(C,{Comp:t,active:e===n,disabled:isNaN(n),onClick:()=>g(n),children:isNaN(n)?"...":n},c)),o.jsx(P,{className:"zep-text-typography-dark-70/70",disabled:e===r,icon:"arrow-long-right",onClick:()=>g(e+1),variant:z.DarkTertiary})]}),o.jsxs("ul",{className:m("zep-flex ","zep-gap-0.25"),children:[o.jsx("li",{children:v*e-v+1}),o.jsx("li",{children:"-"}),o.jsx("li",{children:Math.min(v*e,d)}),o.jsx("li",{children:"von"}),o.jsx("li",{children:d})]})]})};try{B.displayName="Pagination",B.__docgenInfo={description:"",displayName:"Pagination",props:{Comp:{defaultValue:null,description:"",name:"Comp",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"title"'},{value:'"style"'},{value:'"clipPath"'},{value:'"filter"'},{value:'"mask"'},{value:'"path"'},{value:'"stop"'},{value:'"table"'},{value:'"link"'},{value:'"time"'},{value:'"search"'},{value:'"img"'},{value:'"menu"'},{value:'"dialog"'},{value:'"text"'},{value:'"label"'},{value:'"slot"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"switch"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},lastPage:{defaultValue:null,description:"",name:"lastPage",required:!0,type:{name:"number"}},maxPageLength:{defaultValue:null,description:"",name:"maxPageLength",required:!0,type:{name:"number"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},totalElements:{defaultValue:null,description:"",name:"totalElements",required:!0,type:{name:"number"}}}}}catch{}const le={title:"Components/Pagination",component:B,tags:["autodocs"],argTypes:{},decorators:[t=>{const[e,r]=I.useState(1);return o.jsx(t,{currentPage:e,setCurrentPage:r})}]},x={lastPage:10,maxPageLength:7,setCurrentPage:()=>console.log("page changed"),currentPage:1,itemsPerPage:10,totalElements:160},R=()=>{const t=()=>window.innerWidth<=768?5:7,[e,r]=I.useState(t);return I.useEffect(()=>{const a=()=>r(t);return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),{maxPageLength:e}},y=(t,e)=>{const{currentPage:r,setCurrentPage:a}=e,{lastPage:v,totalElements:g,itemsPerPage:d,Comp:p}=t,{maxPageLength:n}=R();return o.jsx("div",{className:"zep-text-center zep-inline-block",children:o.jsx(B,{Comp:p,currentPage:r,lastPage:v,maxPageLength:n,itemsPerPage:d,setCurrentPage:a,totalElements:g})})},T={args:{...x},render:(t,e)=>y(t,e)},f={args:{...x,lastPage:1,totalElements:20},render:(t,e)=>y(t,e)},w={args:{...x,lastPage:2,totalElements:20},render:(t,e)=>y(t,e)},h={args:{...x,lastPage:12,totalElements:192},render:(t,e)=>y(t,e)},i="zep-pagination",k={args:{...x,Comp:"button"},render:(t,e)=>y(t,e),play:async({canvasElement:t})=>{const e=G(t);await l.click(e.getByText("2")),await s(e.getByTestId(i)).toHaveTextContent("17-32von160"),await l.click(e.getByText("3")),await s(e.getByTestId(i)).toHaveTextContent("33-48von160"),await l.click(e.getByText("4")),await s(e.getByTestId(i)).toHaveTextContent("49-64von160"),await l.click(e.getByText("5")),await s(e.getByTestId(i)).toHaveTextContent("65-80von160"),await l.click(e.getByText("6")),await s(e.getByTestId(i)).toHaveTextContent("81-96von160"),await l.click(e.getByText("7")),await s(e.getByTestId(i)).toHaveTextContent("97-112von160"),await l.click(e.getByText("8")),await s(e.getByTestId(i)).toHaveTextContent("113-128von160"),await l.click(e.getByText("9")),await s(e.getByTestId(i)).toHaveTextContent("129-144von160"),await l.click(e.getByText("10")),await s(e.getByTestId(i)).toHaveTextContent("145-160von160"),await l.click(e.getByText("9")),await s(e.getByTestId(i)).toHaveTextContent("129-144von160"),await l.click(e.getByText("8")),await s(e.getByTestId(i)).toHaveTextContent("113-128von160"),await l.click(e.getByText("7")),await s(e.getByTestId(i)).toHaveTextContent("97-112von160"),await l.click(e.getByText("6")),await s(e.getByTestId(i)).toHaveTextContent("81-96von160"),await l.click(e.getByText("5")),await s(e.getByTestId(i)).toHaveTextContent("65-80von160"),await l.click(e.getByText("4")),await s(e.getByTestId(i)).toHaveTextContent("49-64von160"),await l.click(e.getByText("3")),await s(e.getByTestId(i)).toHaveTextContent("33-48von160"),await l.click(e.getByText("2")),await s(e.getByTestId(i)).toHaveTextContent("17-32von160"),await l.click(e.getByText("1")),await s(e.getByTestId(i)).toHaveTextContent("1-16von160")}};var b,L,E;T.parameters={...T.parameters,docs:{...(b=T.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  render: (args, context) => defaultStory(args, context)
}`,...(E=(L=T.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var H,N,j;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    lastPage: 1,
    totalElements: 20
  },
  render: (args, context) => defaultStory(args, context)
}`,...(j=(N=f.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var _,S,q;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    lastPage: 2,
    totalElements: 20
  },
  render: (args, context) => defaultStory(args, context)
}`,...(q=(S=w.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var V,A,M;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    lastPage: 12,
    totalElements: 192
  },
  render: (args, context) => defaultStory(args, context)
}`,...(M=(A=h.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var D,W,F;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    Comp: 'button'
  },
  render: (args, context) => defaultStory(args, context),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('2'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('17-32von160');
    await userEvent.click(canvas.getByText('3'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('33-48von160');
    await userEvent.click(canvas.getByText('4'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('49-64von160');
    await userEvent.click(canvas.getByText('5'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('65-80von160');
    await userEvent.click(canvas.getByText('6'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('81-96von160');
    await userEvent.click(canvas.getByText('7'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('97-112von160');
    await userEvent.click(canvas.getByText('8'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('113-128von160');
    await userEvent.click(canvas.getByText('9'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('129-144von160');
    await userEvent.click(canvas.getByText('10'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('145-160von160');
    await userEvent.click(canvas.getByText('9'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('129-144von160');
    await userEvent.click(canvas.getByText('8'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('113-128von160');
    await userEvent.click(canvas.getByText('7'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('97-112von160');
    await userEvent.click(canvas.getByText('6'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('81-96von160');
    await userEvent.click(canvas.getByText('5'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('65-80von160');
    await userEvent.click(canvas.getByText('4'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('49-64von160');
    await userEvent.click(canvas.getByText('3'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('33-48von160');
    await userEvent.click(canvas.getByText('2'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('17-32von160');
    await userEvent.click(canvas.getByText('1'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('1-16von160');
  }
}`,...(F=(W=k.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const se=["Default","With1Page","With2Pages","With12Pages","AsButtonPageLinks"];export{k as AsButtonPageLinks,T as Default,h as With12Pages,f as With1Page,w as With2Pages,se as __namedExportsOrder,le as default};
