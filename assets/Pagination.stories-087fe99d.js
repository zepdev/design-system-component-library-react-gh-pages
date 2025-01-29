import{j as r,c as g}from"./clsx-36b9529f.js";import{w as G,u as o,e as l}from"./index-dccde6df.js";import{r as B}from"./index-8b3efc3f.js";import{B as z,a as b}from"./Button-3d824351.js";import"./_commonjsHelpers-de833af9.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";import"./index-24fb42db.js";import"./Icon-9b18e277.js";import"./tw-merge-1166cefb.js";import"./Spacing-14a4afc8.js";const C=({children:t,active:e,disabled:n,Comp:a="a",...v})=>r.jsx(a,{className:g("zep-no-underline","sm:zep-p-0.5","zep-p-0.25","zep-w-2.5","zep-h-2.5","sm:zep-w-3","sm:zep-h-3","zep-cursor-pointer","zep-typography-link","zep-text-typography-dark-70/70",{"zep-border-b-2 zep-text-neutral-800":e,"zep-cursor-not-allowed zep-pointer-events-none":n,"hover:zep-border-b-1 zep-box-border zep-text-neutral-800":!e}),"aria-current":e?"page":void 0,...v,children:r.jsx("span",{className:g("zep-w-2","zep-h-2","zep-leading-2","zep-flex","zep-items-center","zep-justify-center",{"zep-text-typography-dark-100":e,"zep-text-typography-dark-40/40":n}),children:t})});try{C.displayName="PageLink",C.__docgenInfo={description:"",displayName:"PageLink",props:{Comp:{defaultValue:{value:"a"},description:"",name:"Comp",required:!1,type:{name:"any"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const O=(t,e,n)=>{const a=[];if(e<=n)for(let v=1;v<=e;v++)a.push(v);else{const p=n-3,d=p/2;if(t-1<d||e-t<d){for(let s=1;s<=d+1;s++)a.push(s);a.push(NaN);for(let s=e-d;s<=e;s++)a.push(s)}else if(t-1>=p&&e-t>=p){const s=d-1;a.push(1),a.push(NaN);for(let c=t-s;c<=t+s;c++)a.push(c);a.push(NaN),a.push(e)}else{const s=t-1<e-t;let c=n;if(s){for(let u=1;u<=t+1;u++)a.push(u),c-=1;a.push(NaN),c-=1;for(let u=e-(c-1);u<=e;u++)a.push(u)}else{for(let u=e;u>=t-1;u--)a.unshift(u),c-=1;a.unshift(NaN),c-=1;for(let u=c;u>=1;u--)a.unshift(u)}}}return a},R=()=>{const t=()=>window.innerWidth<=768?5:7,[e,n]=B.useState(t);return B.useEffect(()=>{const a=()=>n(t);return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),{maxPageLength:e}},I=({Comp:t,currentPage:e,itemsPerPage:n,setCurrentPage:a,totalElements:v})=>{const{maxPageLength:y}=R(),p=B.useMemo(()=>Math.ceil(v/n),[n,v]),d=O(e,p,y);return r.jsxs("div",{className:g("zep-flex","zep-flex-col","sm:zep-gap-1.5","zep-gap-0.5","zep-items-center","zep-text-center"),"data-testid":"zep-pagination",children:[r.jsxs("div",{className:g("zep-flex","zep-gap-0.5"),children:[r.jsx(z,{className:"zep-text-typography-dark-70/70",disabled:e===1,icon:"arrow-long-left",onClick:()=>a(e-1),variant:b.DarkTertiary}),d.map((s,c)=>r.jsx(C,{Comp:t,active:e===s,disabled:isNaN(s),onClick:()=>a(s),children:isNaN(s)?"...":s},c)),r.jsx(z,{className:"zep-text-typography-dark-70/70",disabled:e===p,icon:"arrow-long-right",onClick:()=>a(e+1),variant:b.DarkTertiary})]}),r.jsxs("ul",{className:g("zep-flex ","zep-gap-0.25"),children:[r.jsx("li",{children:n*e-n+1}),r.jsx("li",{children:"-"}),r.jsx("li",{children:Math.min(n*e,v)}),r.jsx("li",{children:"von"}),r.jsx("li",{children:v})]})]})};try{I.displayName="Pagination",I.__docgenInfo={description:"",displayName:"Pagination",props:{Comp:{defaultValue:null,description:"",name:"Comp",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"form"'},{value:'"slot"'},{value:'"style"'},{value:'"title"'},{value:'"button"'},{value:'"search"'},{value:'"article"'},{value:'"dialog"'},{value:'"figure"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"option"'},{value:'"switch"'},{value:'"table"'},{value:'"text"'},{value:'"time"'},{value:'"label"'},{value:'"stop"'},{value:'"image"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},totalElements:{defaultValue:null,description:"",name:"totalElements",required:!0,type:{name:"number"}}}}}catch{}const se={title:"Components/Pagination",component:I,tags:["autodocs"],argTypes:{},decorators:[t=>{const[e,n]=B.useState(1);return r.jsx(t,{currentPage:e,setCurrentPage:n})}]},m={setCurrentPage:()=>console.log("page changed"),currentPage:1,itemsPerPage:10,totalElements:160},x=(t,e)=>{const{currentPage:n,setCurrentPage:a}=e,{totalElements:v,itemsPerPage:y,Comp:p}=t;return r.jsx("div",{className:"zep-text-center zep-inline-block",children:r.jsx(I,{Comp:p,currentPage:n,itemsPerPage:y,setCurrentPage:a,totalElements:v})})},T={args:{...m},render:(t,e)=>x(t,e)},f={args:{...m,totalElements:20},render:(t,e)=>x(t,e)},w={args:{...m,totalElements:20},render:(t,e)=>x(t,e)},h={args:{...m,totalElements:192},render:(t,e)=>x(t,e)},i="zep-pagination",k={args:{...m,Comp:"button"},render:(t,e)=>x(t,e),play:async({canvasElement:t})=>{const e=G(t);await o.click(e.getByText("2")),await l(e.getByTestId(i)).toHaveTextContent("11-20von160"),await o.click(e.getByText("3")),await l(e.getByTestId(i)).toHaveTextContent("21-30von160"),await o.click(e.getByText("4")),await l(e.getByTestId(i)).toHaveTextContent("31-40von160"),await o.click(e.getByText("5")),await l(e.getByTestId(i)).toHaveTextContent("41-50von160"),await o.click(e.getByText("6")),await l(e.getByTestId(i)).toHaveTextContent("51-60von160"),await o.click(e.getByText("7")),await l(e.getByTestId(i)).toHaveTextContent("61-70von160"),await o.click(e.getByText("8")),await l(e.getByTestId(i)).toHaveTextContent("71-80von160"),await o.click(e.getByText("9")),await l(e.getByTestId(i)).toHaveTextContent("81-90von160"),await o.click(e.getByText("10")),await l(e.getByTestId(i)).toHaveTextContent("91-100von160"),await o.click(e.getByText("9")),await l(e.getByTestId(i)).toHaveTextContent("81-90von160"),await o.click(e.getByText("8")),await l(e.getByTestId(i)).toHaveTextContent("71-80von160"),await o.click(e.getByText("7")),await l(e.getByTestId(i)).toHaveTextContent("61-70von160"),await o.click(e.getByText("6")),await l(e.getByTestId(i)).toHaveTextContent("51-60von160"),await o.click(e.getByText("5")),await l(e.getByTestId(i)).toHaveTextContent("41-50von160"),await o.click(e.getByText("4")),await l(e.getByTestId(i)).toHaveTextContent("31-40von160"),await o.click(e.getByText("3")),await l(e.getByTestId(i)).toHaveTextContent("21-30von160"),await o.click(e.getByText("2")),await l(e.getByTestId(i)).toHaveTextContent("11-20von160"),await o.click(e.getByText("1")),await l(e.getByTestId(i)).toHaveTextContent("1-10von160")}};var H,L,E;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  render: (args, context) => defaultStory(args, context)
}`,...(E=(L=T.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var P,N,j;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    totalElements: 20
  },
  render: (args, context) => defaultStory(args, context)
}`,...(j=(N=f.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var _,S,M;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    totalElements: 20
  },
  render: (args, context) => defaultStory(args, context)
}`,...(M=(S=w.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var q,A,V;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    totalElements: 192
  },
  render: (args, context) => defaultStory(args, context)
}`,...(V=(A=h.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var D,W,F;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(F=(W=k.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const oe=["Default","With1Page","With2Pages","With12Pages","AsButtonPageLinks"];export{k as AsButtonPageLinks,T as Default,h as With12Pages,f as With1Page,w as With2Pages,oe as __namedExportsOrder,se as default};
