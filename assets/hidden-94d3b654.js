import{D as n,X as d}from"./keyboard-85458e10.js";function l(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}let a="div";var s=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(s||{});function u(e,t){let{features:o=1,...i}=e,r={ref:t,"aria-hidden":(o&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return d({ourProps:r,theirProps:i,slot:{},defaultTag:a,name:"Hidden"})}let p=n(u);export{p as c,s as p,l as t};
//# sourceMappingURL=hidden-94d3b654.js.map
