import{a as c}from"./index.becf6c0c.js";import{_ as b}from"./Road.210c9bfe.js";import{R as f}from"./RoadItem.cc6023db.js";import{_ as x}from"./AlbumItem.c6c1dc77.js";import{_ as g}from"./ElementPanel.6930f52d.js";import{o as m,c as d,a as n,b as p,w as e,F as u,d as $,e as w,f as o,t as _,n as L}from"./index.930edf46.js";const E={class:"wrap"},v=o("\u6D3B\u52D5\u82B1\u7D6E"),D=o("\u5C55\u89BD\u82B1\u7D6E"),j=o("\u5C55\u89BD\u82B1\u7D6E"),y={class:"flex flex-wrap justify-between xl:justify-around max-w-5xl mx-auto"},W={data(){return{preExhibitionList:[],href:[],img:[]}},methods:{LoadJson(){c.get("Data/Albums/"+this.$route.params.albumID+"/PreExhibitionList.json").then(l=>{this.preExhibitionList=l.data;for(let t=0;t<this.preExhibitionList.length;t++)this.preExhibitionList[t].Enable===!1?(this.href[t]="",this.img[t]="Data/Other/ComingSoon.jpg"):(this.href[t]="/Albums/"+this.$route.params.albumID+"/"+t,this.img[t]="Data/Albums/"+this.$route.params.albumID+"/"+t+"/cover.jpg");for(let t=0;t<this.preExhibitionList.length;t++){let h=this.preExhibitionList[t].title.split("\uFF1A");h.length===2?(this.preExhibitionList[t].title=h[0]+"\uFF1A",this.preExhibitionList[t].title2=h[1]):this.preExhibitionList[t].title2=""}let i=4;this.$windowWidth<=this.$sm?i=1:this.$windowWidth<=this.$md||this.$windowWidth<=this.$lg||this.$windowWidth<=this.$xl?i=2:this.$windowWidth<=this.$2xl&&(i=3);var r=i-this.preExhibitionList.length%i;r===i&&(r=0);for(var s={index:"0",title:"none",tip:""},a=0;a<r;a++)this.preExhibitionList.push(s),this.href.push("")}).catch(function(l){console.log(l)})}},created(){this.LoadJson()},updated(){this.$refs.element&&this.$refs.element.ReSet()}},N=Object.assign(W,{setup(l){return(i,r)=>(m(),d(u,null,[n(g,{ref:"element"},null,512),p("div",E,[n(b,{class:"mb-10"},{title:e(()=>[j]),default:e(()=>[n(f,null,{default:e(()=>[v]),_:1}),n(f,null,{default:e(()=>[D]),_:1})]),_:1}),p("div",y,[(m(!0),d(u,null,$(i.preExhibitionList,(s,a)=>(m(),w(x,{href:i.href[a],img:i.img[a],class:L({invisible:s.title==="none"})},{title:e(()=>[o(_(s.title),1)]),title2:e(()=>[o(_(s.title2),1)]),_:2},1032,["href","img","class"]))),256))])])],64))}});export{N as default};
