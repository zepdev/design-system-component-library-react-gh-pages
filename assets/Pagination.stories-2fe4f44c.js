import{j as r,c as m}from"./clsx-667af910.js";import{w as G,u as s,e as l}from"./index-36a8f999.js";import{r as I}from"./index-37ba2b57.js";import{B as z,a as P}from"./Button-145549bb.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-47d55b97.js";import"./Icon-6b1de065.js";import"./tw-merge-1166cefb.js";import"./Spacing-5c3b1745.js";const C=({children:t,active:e,disabled:i,Comp:a="a",...v})=>r.jsx(a,{className:m("zep-no-underline","sm:zep-p-0.5","zep-p-0.25","zep-w-2.5","zep-h-2.5","sm:zep-w-3","sm:zep-h-3","zep-cursor-pointer","zep-typography-link","zep-text-typography-dark-70/70",{"zep-border-b-2 zep-text-neutral-800":e,"zep-cursor-not-allowed zep-pointer-events-none":i,"hover:zep-border-b-1 zep-box-border zep-text-neutral-800":!e}),"aria-current":e?"page":void 0,...v,children:r.jsx("span",{className:m("zep-w-2","zep-h-2","zep-leading-2","zep-flex","zep-items-center","zep-justify-center",{"zep-text-typography-dark-100":e,"zep-text-typography-dark-40/40":i}),children:t})});try{C.displayName="PageLink",C.__docgenInfo={description:"",displayName:"PageLink",props:{Comp:{defaultValue:{value:"a"},description:"",name:"Comp",required:!1,type:{name:"any"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const O=(t,e,i)=>{const a=[];if(e<=i)for(let v=1;v<=e;v++)a.push(v);else{const d=i-3,p=d/2;if(t-1<p||e-t<p){for(let n=1;n<=p+1;n++)a.push(n);a.push(NaN);for(let n=e-p;n<=e;n++)a.push(n)}else if(t-1>=d&&e-t>=d){const n=p-1;a.push(1),a.push(NaN);for(let c=t-n;c<=t+n;c++)a.push(c);a.push(NaN),a.push(e)}else{const n=t-1<e-t;let c=i;if(n){for(let u=1;u<=t+1;u++)a.push(u),c-=1;a.push(NaN),c-=1;for(let u=e-(c-1);u<=e;u++)a.push(u)}else{for(let u=e;u>=t-1;u--)a.unshift(u),c-=1;a.unshift(NaN),c-=1;for(let u=c;u>=1;u--)a.unshift(u)}}}return a},B=({Comp:t,currentPage:e,lastPage:i,maxLength:a,setCurrentPage:v,totalElements:g})=>{const d=O(e,i,a),p=g/i;return r.jsxs("div",{className:m("zep-flex","zep-flex-col","sm:zep-gap-1.5","zep-gap-0.5","zep-items-center","zep-text-center"),"data-testid":"zep-pagination",children:[r.jsxs("div",{className:m("zep-flex","zep-gap-0.5"),children:[r.jsx(z,{className:"zep-text-typography-dark-70/70",disabled:e===1,icon:"arrow-long-left",onClick:()=>v(e-1),variant:P.DarkTertiary}),d.map((n,c)=>r.jsx(C,{Comp:t,active:e===n,disabled:isNaN(n),onClick:()=>v(n),children:isNaN(n)?"...":n},c)),r.jsx(z,{className:"zep-text-typography-dark-70/70",disabled:e===i,icon:"arrow-long-right",onClick:()=>v(e+1),variant:P.DarkTertiary})]}),r.jsxs("ul",{className:m("zep-flex ","zep-gap-0.25"),children:[r.jsx("li",{children:p*e-p+1}),r.jsx("li",{children:"-"}),r.jsx("li",{children:p*e}),r.jsx("li",{children:"von"}),r.jsx("li",{children:g})]})]})};try{B.displayName="Pagination",B.__docgenInfo={description:"",displayName:"Pagination",props:{Comp:{defaultValue:null,description:"",name:"Comp",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"slot"'},{value:'"style"'},{value:'"title"'},{value:'"center"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"option"'},{value:'"search"'},{value:'"switch"'},{value:'"table"'},{value:'"text"'},{value:'"time"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},lastPage:{defaultValue:null,description:"",name:"lastPage",required:!0,type:{name:"number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},totalElements:{defaultValue:null,description:"",name:"totalElements",required:!0,type:{name:"number"}}}}}catch{}const le={title:"Components/Pagination",component:B,tags:["autodocs"],argTypes:{},decorators:[t=>{const[e,i]=I.useState(1);return r.jsx(t,{currentPage:e,setCurrentPage:i})}]},x={lastPage:10,maxLength:7,setCurrentPage:()=>console.log("page changed"),currentPage:1,totalElements:160},R=()=>{const t=()=>window.innerWidth<=768?5:7,[e,i]=I.useState(t);return I.useEffect(()=>{const a=()=>i(t);return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),{maxLength:e}},y=(t,e)=>{const{currentPage:i,setCurrentPage:a}=e,{lastPage:v,totalElements:g,Comp:d}=t,{maxLength:p}=R();return r.jsx("div",{className:"zep-text-center zep-inline-block",children:r.jsx(B,{Comp:d,currentPage:i,lastPage:v,maxLength:p,setCurrentPage:a,totalElements:g})})},T={args:{...x},render:(t,e)=>y(t,e)},f={args:{...x,lastPage:1,totalElements:20},render:(t,e)=>y(t,e)},w={args:{...x,lastPage:2,totalElements:20},render:(t,e)=>y(t,e)},h={args:{...x,lastPage:12,totalElements:192},render:(t,e)=>y(t,e)},o="zep-pagination",k={args:{...x,Comp:"button"},render:(t,e)=>y(t,e),play:async({canvasElement:t})=>{const e=G(t);await s.click(e.getByText("2")),await l(e.getByTestId(o)).toHaveTextContent("17-32von160"),await s.click(e.getByText("3")),await l(e.getByTestId(o)).toHaveTextContent("33-48von160"),await s.click(e.getByText("4")),await l(e.getByTestId(o)).toHaveTextContent("49-64von160"),await s.click(e.getByText("5")),await l(e.getByTestId(o)).toHaveTextContent("65-80von160"),await s.click(e.getByText("6")),await l(e.getByTestId(o)).toHaveTextContent("81-96von160"),await s.click(e.getByText("7")),await l(e.getByTestId(o)).toHaveTextContent("97-112von160"),await s.click(e.getByText("8")),await l(e.getByTestId(o)).toHaveTextContent("113-128von160"),await s.click(e.getByText("9")),await l(e.getByTestId(o)).toHaveTextContent("129-144von160"),await s.click(e.getByText("10")),await l(e.getByTestId(o)).toHaveTextContent("145-160von160"),await s.click(e.getByText("9")),await l(e.getByTestId(o)).toHaveTextContent("129-144von160"),await s.click(e.getByText("8")),await l(e.getByTestId(o)).toHaveTextContent("113-128von160"),await s.click(e.getByText("7")),await l(e.getByTestId(o)).toHaveTextContent("97-112von160"),await s.click(e.getByText("6")),await l(e.getByTestId(o)).toHaveTextContent("81-96von160"),await s.click(e.getByText("5")),await l(e.getByTestId(o)).toHaveTextContent("65-80von160"),await s.click(e.getByText("4")),await l(e.getByTestId(o)).toHaveTextContent("49-64von160"),await s.click(e.getByText("3")),await l(e.getByTestId(o)).toHaveTextContent("33-48von160"),await s.click(e.getByText("2")),await l(e.getByTestId(o)).toHaveTextContent("17-32von160"),await s.click(e.getByText("1")),await l(e.getByTestId(o)).toHaveTextContent("1-16von160")}};var b,L,E;T.parameters={...T.parameters,docs:{...(b=T.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(q=(S=w.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var V,A,D;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    lastPage: 12,
    totalElements: 192
  },
  render: (args, context) => defaultStory(args, context)
}`,...(D=(A=h.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var M,W,F;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(W=k.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const oe=["Default","With1Page","With2Pages","With12Pages","AsButtonPageLinks"];export{k as AsButtonPageLinks,T as Default,h as With12Pages,f as With1Page,w as With2Pages,oe as __namedExportsOrder,le as default};
//# sourceMappingURL=Pagination.stories-2fe4f44c.js.map
