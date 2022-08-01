import{a as v}from"./index.becf6c0c.js";import{_ as x}from"./Road.aef54b4b.js";import{R as _}from"./RoadItem.4bfd9cba.js";import{A as b}from"./ActivityItem.7121f9d7.js";import{_ as w}from"./ElementPanel.36d4369f.js";import{o as c,c as f,a as m,b as t,w as o,F as p,d as g,e as L,f as i,t as h,n as F}from"./index.629d490a.js";const $={class:"wrap mb-20"},y=i("\u63A8\u5EE3\u6D3B\u52D5"),D=i("\u5206\u4EAB\u6703"),A=i("\u5206\u4EAB\u6703"),j=t("div",{class:"sm:text-xl text-3xl text-center"},"\u300C\u5922\u5883\u6F2B\u904A\uFF1A\u7E6A\u672C\u85DD\u8853\u300D\u4E3B\u984C\u5C55\u4E4B\u5206\u4EAB\u6703\u7CFB\u5217\u6D3B\u52D5",-1),B=t("div",{class:"sm:mt-5 max-w-4xl mx-auto mt-8 mb-24"},[t("div",{class:"sm:text-sm text-base text-center"},[t("div",{class:"mb-10 sm:mb-5"},[i("\u900F\u904E\u8207\u7B56\u5C55\u4EBA\u9762\u5C0D\u9762\u5EA7\u8AC7\uFF0C\u85C9\u7531\u7D93\u9A57\u5206\u4EAB\u4E00\u540C\u63A2\u8A0E\u7E6A\u672C\u5C0D\u5152\u7AE5\u7684\u5F71\u97FF\uFF0C"),t("br"),i("\u9032\u800C\u6253\u958B\u7121\u9650\u60F3\u50CF\u529B\u548C\u597D\u5947\u5FC3\uFF0C\u555F\u767C\u85DD\u8853\u8208\u8DA3\u3002")]),t("div",null,[i(" \u5831\u540D\u65B9\u5F0F\uFF1A\u63A1\u7DB2\u8DEF\u7DDA\u4E0A\u5831\u540D(\u8A73\u5404\u5834\u6B21\u5831\u540D\u7DB2\u5740)\uFF0C\u5404\u5834\u6D3B\u52D5\u8ACB\u5206\u958B\u5831\u540D\u3002"),t("br"),i(" \u53C3\u8207\u5C0D\u8C61\uFF1A\u516C\u52D9\u4EBA\u54E1\u3001\u6559\u5E2B\u3001\u5B78\u751F\u3001\u4E00\u822C\u6C11\u773E\uFF0C\u51E1\u6709\u8208\u8DA3\u8005\u7686\u53EF\u5831\u540D\u3002"),t("br"),i(" \u7814\u7FD2\u6642\u6578\uFF1A\u516C\u52D9\u4EBA\u54E1\u53CA\u6559\u5E2B\u5168\u7A0B\u53C3\u8207\u8005\uFF0C\u5206\u5225\u6838\u4E88\u7D42\u8EAB\u5B78\u7FD2\u8A8D\u8B49\u6642\u6578\u3002"),t("br"),i(" \u4E0A\u8AB2\u5730\u9EDE\uFF1A\u672C\u9928\u7B2C3\u6703\u8B70\u5BA4\u3002 ")])])],-1),I={class:"xl:justify-around flex flex-wrap justify-between max-w-5xl mx-auto"},W=t("div",{class:"-z-10 absolute bottom-0 w-full"},[t("div",{class:"bg-bg-0-image h-8"}),t("div",{class:"absolute bg-no-repeat bg-w100% h-40 bg-Boy-image left-72 translate-y-8 w-40 xl:hidden"}),t("div",{class:"bg-bg-2-Color h-80"})],-1),C={data(){return{ForumList:[]}},methods:{LoadJson(){v.get("Data/Activities/"+this.$route.params.activityID+"/ForumList.json").then(r=>{this.ForumList=r.data;for(let s=0;s<this.ForumList.length;s++){this.ForumList[s].index=s;let l=this.ForumList[s].date.substring(0,16).replaceAll(".","/");l=l.replace("\uFF1A",":"),this.ForumList[s].newDate=new Date(l);let d=this.ForumList[s].title.split("\uFF1A");d.length===2?(this.ForumList[s].title=d[0]+"\uFF1A",this.ForumList[s].title2=d[1]):this.ForumList[s].title2=""}this.ForumList.sort(function(s,l){return s.newDate<l.newDate?-1:1});let e=3;this.$windowWidth<=this.$sm?e=1:this.$windowWidth<=this.$md||this.$windowWidth<=this.$lg||this.$windowWidth<=this.$xl?e=2:this.$windowWidth<=this.$2xl&&(e=3);var n=e-this.ForumList.length%e;n===e&&(n=0);for(var a={index:"0",title:"none",imgKey:"",date:"",teacher:"",path:""},u=0;u<n;u++)this.ForumList.push(a)}).catch(function(r){console.log(r)})}},created(){this.LoadJson()},updated(){this.$refs.element&&this.$refs.element.ReSet()}},S=Object.assign(C,{setup(r){return(e,n)=>(c(),f(p,null,[m(w,{ref:"element"},null,512),t("div",$,[m(x,{class:"mb-5"},{title:o(()=>[A]),default:o(()=>[m(_,null,{default:o(()=>[y]),_:1}),m(_,null,{default:o(()=>[D]),_:1})]),_:1}),j,B,t("div",I,[(c(!0),f(p,null,g(e.ForumList,a=>(c(),L(b,{href:"/activities/"+e.$route.params.activityID+"/"+a.index,img:"Data/Activities/"+e.$route.params.activityID+"/"+a.index+"/cover.jpg",class:F({invisible:a.title==="none"})},{title:o(()=>[i(h(a.title),1)]),title2:o(()=>[i(h(a.title2),1)]),date:o(()=>[i(h(a.date),1)]),_:2},1032,["href","img","class"]))),256))])]),W],64))}});export{S as default};