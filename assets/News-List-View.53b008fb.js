import{a as h}from"./index.becf6c0c.js";import{_ as f}from"./Road.ab167906.js";import{R as w}from"./RoadItem.1d615c81.js";import{o as a,c as p,b as s,r as _,_ as m,p as x,g as $,a as i,w as o,F as v,d as b,e as y,f as n,t as c}from"./index.2acf9c13.js";const g={class:"px-3 py-2 sm:px-0"},L={class:"px-3 py-1 border rounded-full border-text-1-Color box-content sm:px-0"},N={class:"px-3 py-2 whitespace-nowrap overflow-hidden text-ellipsis"},I={class:"px-3 py-2 sm:px-0"},S={methods:{router(){console.log(this.$props),this.$router.push({path:this.$props.href})}}},k=Object.assign(S,{props:{href:String},setup(e){return(t,r)=>(a(),p("tr",{class:"text-center cursor-pointer hover:bg-zinc-200 text-text-1-Color",onClick:r[0]||(r[0]=l=>t.router())},[s("td",g,[s("span",L,[_(t.$slots,"type")])]),s("td",N,[_(t.$slots,"title")]),s("td",I,[_(t.$slots,"date")])]))}});const d=e=>(x("data-v-1194be9f"),e=e(),$(),e),B={class:"w-full sm:text-xs table-fixed"},C=d(()=>s("tr",{class:"text-center w-full"},[s("th",{class:"px-3 py-2 w-1/6 sm:px-0"},[s("span",null,"\u516C\u544A\u985E\u5225")]),s("th",{class:"px-3 py-2"},[s("span",{class:"px-8"},"\u6A19\u984C")]),s("th",{class:"px-3 py-2 w-1/6 sm:w-1/4"},[s("span",null,"\u520A\u767B\u65E5\u671F")])],-1)),T=d(()=>s("br",null,null,-1)),V={props:{},setup(e){return(t,r)=>(a(),p("table",B,[C,T,_(t.$slots,"default",{},void 0,!0)]))}};var j=m(V,[["__scopeId","data-v-1194be9f"]]);const D={class:"wrap"},F=n("\u6700\u65B0\u6D88\u606F"),J=n("\u6700\u65B0\u6D88\u606F"),O={class:"mb-32 w-full"},R={data(){return{newsList:[]}},methods:{LoadJson(){h.get("Data/News/NewsList.json").then(e=>{this.$newsList=e.data,this.newsList=this.$newsList}).catch(function(e){console.log(e)})}},created(){this.$newList===null?this.LoadJson():this._newsList=this.$newsList}},G=Object.assign(R,{setup(e){return(t,r)=>(a(),p("div",D,[i(f,{class:"mb-10"},{title:o(()=>[J]),default:o(()=>[i(w,null,{default:o(()=>[F]),_:1})]),_:1}),s("div",O,[i(j,null,{default:o(()=>[(a(!0),p(v,null,b(t.newsList.slice().reverse(),(l,u)=>(a(),y(k,{href:"/news/"+(t.newsList.length-1-u)},{type:o(()=>[n(c(l.typeName),1)]),title:o(()=>[n(c(l.title),1)]),date:o(()=>[n(c(l.date),1)]),_:2},1032,["href"]))),256))]),_:1})])]))}});export{G as default};
