import{a as d}from"./index.becf6c0c.js";import{_ as h}from"./Road.e064ffe2.js";import{R as l}from"./RoadItem.7d03a48b.js";import{_ as c}from"./RoadItemRouter.90005979.js";import{E as m}from"./EventModal.3403fb54.js";import{_}from"./EventContentItem.104e9922.js";import{_ as p,o as u,c as f,b as r,a as n,w as e,f as a,t as s,F as g,i as v,p as D,g as b}from"./index.59cea802.js";/* empty css                                                               */import"./ImageBox.31efcbb0.js";const y=o=>(D("data-v-4d935146"),o=o(),b(),o),w={class:"wrap mb-20"},I=a("\u63A8\u5EE3\u6D3B\u52D5"),$=a("\u5152\u7AE5\u7F8E\u5B78\u6D3B\u52D5"),C=a(" \u5831\u540D\u65B9\u5F0F\uFF5C\u3000\u63A1\u9810\u7D04\u5831\u540D\u3002 "),k=a(" \u53C3\u8207\u5C0D\u8C61\uFF5C\u3000\u5152\u7AE5\u76F8\u95DC\u516C\u76CA\u793E\u5718\u3001\u7D44\u7E54\u3001\u5354\u6703\u3002\u8EAB\u5FC3\u969C\u7919\u8207\u5F31\u52E2\u5718\u9AD4\u512A\u5148\u53D7\u7406\u5831\u540D\u3002"),A=a(" \u8AB2\u7A0B\u8CBB\u7528\uFF5C\u3000\u65B0\u81FA\u5E63200\u5143\u6574\u3002 "),E={class:"absolute w-full bottom-0 -z-50"},N=y(()=>r("div",{class:"bg-bg-0-image h-8"},null,-1)),B={class:"bg-bg-2-Color h-0",ref:"bg"},T={data(){return{Data:null}},methods:{LoadJson(){let o=this.$route.params.activityID,t=this.$route.params.eventID;o&&t&&d.get("Data/Activities/"+o+"/"+t+"/ChildrenArtContent.json").then(i=>{this.Data=i.data}).catch(i=>{console.log(i),this.ToNotFound()})},GetTargetHeight(){let o=null;this.$windowWidth>this.$lg?o=document.getElementById("info"):o=document.getElementById("place");const t=document.body.scrollHeight-(o.getBoundingClientRect().top+window.scrollY),i=this.$refs.bg;i.style.height=t+"px"},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"LoadJson"},created(){this.LoadJson()},updated(){setTimeout(()=>{this.GetTargetHeight()},200)}},V=Object.assign(T,{setup(o){return(t,i)=>t.Data!=null?(u(),f(g,{key:0},[r("div",w,[n(h,{class:"mb-10"},{default:e(()=>[n(l,null,{default:e(()=>[I]),_:1}),n(c,{href:"/activities/ChildrenArts"},{default:e(()=>[$]),_:1}),n(l,null,{default:e(()=>[a(s(t.Data.title),1)]),_:1})]),_:1}),n(_,{img:t.Data.imgs,link:t.Data.link,info:t.Data.info,needKnew:!1,needlink:!1,teacherInfo:t.Data.teacherInfo,ref:"target"},{date:e(()=>[a(s(t.Data.date),1)]),time:e(()=>[a(s(t.Data.time),1)]),howto:e(()=>[C]),place:e(()=>[a(" \u6D3B\u52D5\u5730\u9EDE\uFF5C\u3000"+s(t.Data.place)+" \u3002",1)]),for:e(()=>[k]),money:e(()=>[A]),people:e(()=>[a(" \u53C3\u52A0\u4EBA\u6578\uFF5C\u3000"+s(t.Data.people),1)]),title:e(()=>[a(s(t.Data.title),1)]),teacher:e(()=>[a("\u6388\u8AB2\u8B1B\u5E2B\uFF5C"+s(t.Data.teacher),1)]),_:1},8,["img","link","info","teacherInfo"])]),r("div",E,[N,r("div",B,null,512)]),n(m)],64)):v("",!0)}});var M=p(V,[["__scopeId","data-v-4d935146"]]);export{M as default};
