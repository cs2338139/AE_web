import{a as h}from"./index.becf6c0c.js";import{_ as f}from"./Road.1bd2e3f9.js";import{R as m}from"./RoadItem.64b57414.js";import{o as a,c as p,b as s,r as _,_ as w,p as x,g as $,a as c,w as o,F as v,d as y,e as g,f as n,t as i}from"./index.c739338a.js";const b={class:"px-3 py-2 sm:px-0"},L={class:"px-3 py-1 font-medium border rounded-full border-text-1-Color box-content sm:px-0"},N={class:"px-3 py-2"},I={class:"px-3 py-2"},S={methods:{router(){console.log(this.$props),this.$router.push({path:this.$props.href})}}},k=Object.assign(S,{props:{href:String},setup(t){return(e,r)=>(a(),p("tr",{class:"text-center cursor-pointer hover:bg-zinc-200 text-text-1-Color",onClick:r[0]||(r[0]=l=>e.router())},[s("td",b,[s("span",L,[_(e.$slots,"type")])]),s("td",N,[_(e.$slots,"title")]),s("td",I,[_(e.$slots,"date")])]))}});const d=t=>(x("data-v-8a91ea8c"),t=t(),$(),t),B={class:"w-full sm:text-xs"},C=d(()=>s("tr",{class:"text-center"},[s("th",{class:"px-3 py-2 w-1/6 lg:w-1/6 sm:px-0"},[s("span",null,"\u516C\u544A\u985E\u5225")]),s("th",{class:"px-3 py-2"},[s("span",{class:"px-8"},"\u6A19\u984C")]),s("th",{class:"px-3 py-2 w-1/6"},[s("span",null,"\u520A\u767B\u65E5\u671F")])],-1)),T=d(()=>s("br",null,null,-1)),V={props:{},setup(t){return(e,r)=>(a(),p("table",B,[C,T,_(e.$slots,"default",{},void 0,!0)]))}};var j=w(V,[["__scopeId","data-v-8a91ea8c"]]);const D={class:"wrap"},F=n("\u6700\u65B0\u6D88\u606F"),J=n("\u6700\u65B0\u6D88\u606F"),O={class:"mb-32"},R={data(){return{newsList:[]}},methods:{LoadJson(){h.get("Data/News/NewsList.json").then(t=>{this.$newsList=t.data,this.newsList=this.$newsList}).catch(function(t){console.log(t)})}},created(){this.$newList===null?this.LoadJson():this._newsList=this.$newsList}},G=Object.assign(R,{setup(t){return(e,r)=>(a(),p("div",D,[c(f,{class:"mb-10"},{title:o(()=>[J]),default:o(()=>[c(m,null,{default:o(()=>[F]),_:1})]),_:1}),s("div",O,[c(j,null,{default:o(()=>[(a(!0),p(v,null,y(e.newsList.slice().reverse(),(l,u)=>(a(),g(k,{href:"/news/"+(e.newsList.length-1-u)},{type:o(()=>[n(i(l.typeName),1)]),title:o(()=>[n(i(l.title),1)]),date:o(()=>[n(i(l.date),1)]),_:2},1032,["href"]))),256))]),_:1})])]))}});export{G as default};