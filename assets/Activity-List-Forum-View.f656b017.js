import{a as p}from"./index.becf6c0c.js";import{_ as x}from"./Road.929f3886.js";import{R as _}from"./RoadItem.11711864.js";import{A as b}from"./ActivityItem.8781523e.js";import{o as d,c as f,b as t,a as c,w as o,F as v,d as w,e as g,f as e,t as h,n as L}from"./index.d5a6390a.js";const F={class:"wrap mb-20"},$=e("\u63A8\u5EE3\u6D3B\u52D5"),y=e("\u5206\u4EAB\u6703"),D=e("\u5206\u4EAB\u6703"),A=t("div",{class:"text-center text-3xl font-bold sm:text-xl"},"\u300C\u5922\u5883\u6F2B\u904A\uFF1A\u7E6A\u672C\u85DD\u8853\u300D\u5C55\u4E4B\u7E6A\u672C\u7F8E\u5B78\u5206\u4EAB\u6703",-1),j=t("div",{class:"max-w-4xl mx-auto mt-8 mb-24 sm:mt-5"},[t("div",{class:"text-base font-bold sm:text-sm text-center"},[t("div",{class:"mb-3"},[e(" \u53EF\u66FE\u60F3\u904E\uFF0C\u5B69\u5B50\u7684\u5922\uFF0C\u6703\u6709\u54EA\u4E9B\uFF1F"),t("br"),e("\u505A\u5922\u548C\u63A2\u7D22\u4E16\u754C\u7684\u80FD\u529B\uFF0C"),t("br"),e("\u662F\u5B69\u5B50\u8FCE\u5411\u672A\u4F86\u548C\u672A\u77E5\u7684\u52C7\u6C23\u3002"),t("br"),e(" \u900F\u904E\u8207\u7B56\u5C55\u4EBA\u9762\u5C0D\u9762\u5EA7\u8AC7\uFF0C\u85C9\u7531\u7D93\u9A57\u5206\u4EAB\u4E00\u540C\u63A2\u8A0E\u7E6A\u672C\u5C0D\u5152\u7AE5\u7684\u5F71\u97FF\uFF0C\u9032\u800C\u6253\u958B\u7121\u9650\u60F3\u50CF\u529B\u548C\u597D\u5947\u5FC3\uFF0C\u555F\u767C\u85DD\u8853\u8208\u8DA3\u3002 ")]),t("div",null,[e(" \u4E00\u3001\u5831\u540D\u65B9\u5F0F\uFF5C\u63A1\u7DDA\u4E0A\u5831\u540D"),t("br"),e(" \u4E8C\u3001\u4E0A\u8AB2\u5730\u9EDE\uFF5C\u672C\u9928\u7B2C3\u6703\u8B70\u5BA4\u3002"),t("br"),e(" \u4E09\u3001\u53C3\u8207\u5C0D\u8C61\uFF5C\u516C\u52D9\u4EBA\u54E1\u3001\u6559\u5E2B\u3001\u5B78\u751F\u3001\u4E00\u822C\u6C11\u773E ")])])],-1),I={class:"flex flex-wrap justify-between xl:justify-around max-w-5xl mx-auto"},W=t("div",{class:"absolute w-full bottom-0 -z-10"},[t("div",{class:"bg-bg-0-image h-8"}),t("div",{class:"bg-bg-2-Color h-80"})],-1),B={data(){return{ForumList:[]}},methods:{LoadJson(){p.get("Data/Activities/"+this.$route.params.activityID+"/ForumList.json").then(r=>{this.ForumList=r.data;for(let i=0;i<this.ForumList.length;i++){this.ForumList[i].index=i;let l=this.ForumList[i].date.substring(0,16).replaceAll(".","/");l=l.replace("\uFF1A",":"),this.ForumList[i].newDate=new Date(l);let m=this.ForumList[i].title.split("\uFF1A");m.length===2?(this.ForumList[i].title=m[0]+"\uFF1A",this.ForumList[i].title2=m[1]):this.ForumList[i].title2=""}this.ForumList.sort(function(i,l){return i.newDate<l.newDate?-1:1});let s=3;this.$windowWidth<=this.$sm?s=1:this.$windowWidth<=this.$md||this.$windowWidth<=this.$lg||this.$windowWidth<=this.$xl?s=2:this.$windowWidth<=this.$2xl&&(s=3);var n=s-this.ForumList.length%s;n===s&&(n=0);for(var a={title:"none",imgKey:"",date:"",teacher:"",path:""},u=0;u<n;u++)this.ForumList.push(a)}).catch(function(r){console.log(r)})}},created(){this.LoadJson()}},J=Object.assign(B,{setup(r){return(s,n)=>(d(),f(v,null,[t("div",F,[c(x,{class:"mb-5"},{title:o(()=>[D]),default:o(()=>[c(_,null,{default:o(()=>[$]),_:1}),c(_,null,{default:o(()=>[y]),_:1})]),_:1}),A,j,t("div",I,[(d(!0),f(v,null,w(s.ForumList,a=>(d(),g(b,{href:"/activities/"+s.$route.params.activityID+"/"+a.index,img:"Data/Activities/"+s.$route.params.activityID+"/"+a.index+"/cover.jpg",class:L({invisible:a.title==="none"})},{title:o(()=>[e(h(a.title),1)]),title2:o(()=>[e(h(a.title2),1)]),date:o(()=>[e(h(a.date),1)]),_:2},1032,["href","img","class"]))),256))])]),W],64))}});export{J as default};
