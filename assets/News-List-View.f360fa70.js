import{a as f}from"./index.becf6c0c.js";import{_ as m}from"./Road.210c9bfe.js";import{R as w}from"./RoadItem.cc6023db.js";import{o,c as p,b as e,r as i,_ as x,p as $,g as v,a as _,w as a,F as d,d as b,e as y,f as n,t as c}from"./index.930edf46.js";import{_ as L}from"./ElementPanel.6930f52d.js";const g={class:"px-3 py-2 sm:px-0"},N={class:"px-3 py-1 border rounded-full border-text-1-Color box-content sm:px-0"},S={class:"px-3 py-2 whitespace-nowrap overflow-hidden text-ellipsis"},I={class:"px-3 py-2 sm:px-0"},k={methods:{router(){this.$router.push({path:this.$props.href})}}},B=Object.assign(k,{props:{href:String},setup(s){return(t,r)=>(o(),p("tr",{class:"text-center cursor-pointer hover:bg-zinc-200 text-text-1-Color",onClick:r[0]||(r[0]=l=>t.router())},[e("td",g,[e("span",N,[i(t.$slots,"type")])]),e("td",S,[i(t.$slots,"title")]),e("td",I,[i(t.$slots,"date")])]))}});const u=s=>($("data-v-1194be9f"),s=s(),v(),s),C={class:"w-full sm:text-xs table-fixed"},T=u(()=>e("tr",{class:"text-center w-full"},[e("th",{class:"px-3 py-2 w-1/6 sm:px-0"},[e("span",null,"\u516C\u544A\u985E\u5225")]),e("th",{class:"px-3 py-2"},[e("span",{class:"px-8"},"\u6A19\u984C")]),e("th",{class:"px-3 py-2 w-1/6 sm:w-1/4"},[e("span",null,"\u520A\u767B\u65E5\u671F")])],-1)),V=u(()=>e("br",null,null,-1)),j={props:{},setup(s){return(t,r)=>(o(),p("table",C,[T,V,i(t.$slots,"default",{},void 0,!0)]))}};var R=x(j,[["__scopeId","data-v-1194be9f"]]);const D={class:"wrap"},F=n("\u6700\u65B0\u6D88\u606F"),J=n("\u6700\u65B0\u6D88\u606F"),O={class:"mb-32 w-full"},z={data(){return{newsList:[]}},methods:{LoadJson(){f.get("Data/News/NewsList.json").then(s=>{this.$newsList=s.data,this.newsList=this.$newsList}).catch(function(s){console.log(s)})}},created(){this.$newList===null?this.LoadJson():this._newsList=this.$newsList},updated(){this.$refs.element&&this.$refs.element.ReSet()}},K=Object.assign(z,{setup(s){return(t,r)=>(o(),p(d,null,[_(L,{ref:"element"},null,512),e("div",D,[_(m,{class:"mb-10"},{title:a(()=>[J]),default:a(()=>[_(w,null,{default:a(()=>[F]),_:1})]),_:1}),e("div",O,[_(R,null,{default:a(()=>[(o(!0),p(d,null,b(t.newsList.slice().reverse(),(l,h)=>(o(),y(B,{href:"/news/"+(t.newsList.length-1-h)},{type:a(()=>[n(c(l.typeName),1)]),title:a(()=>[n(c(l.title),1)]),date:a(()=>[n(c(l.date),1)]),_:2},1032,["href"]))),256))]),_:1})])])],64))}});export{K as default};
