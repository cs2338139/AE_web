import{a as h}from"./index.becf6c0c.js";import{_ as d}from"./Road.3ca2a781.js";import{R as l}from"./RoadItem.ac73632f.js";import{_ as c}from"./RoadItemRouter.181464ce.js";import{_ as m}from"./EventContentItem.f5d5abac.js";import{o as u,c as _,b as r,a as n,w as e,f as a,t as i,F as f,i as g}from"./index.45cfbd4d.js";import"./ImageBox.7fd1bd27.js";const p={class:"wrap mb-20"},D=a("\u63A8\u5EE3\u6D3B\u52D5"),b=a("\u5C08\u984C\u6F14\u8B1B"),v=a(" \u5831\u540D\u65B9\u5F0F\uFF5C\u3000\u63A1\u7DDA\u4E0A\u5831\u540D\u3002 "),y=a(" \u53C3\u8207\u5C0D\u8C61\uFF5C\u3000\u5C0D\u5152\u7AE5\u6559\u80B2\u6709\u8208\u8DA3\u6C11\u773E\u3001\u5B78\u6821\u85DD\u6587\u76F8\u95DC\u6559\u5E2B\u7686\u53EF\u5831\u540D\u3002 "),$={class:"absolute w-full bottom-0 -z-50"},w=r("div",{class:"bg-bg-0-image h-8"},null,-1),I={class:"bg-bg-2-Color h-0",ref:"bg"},F={data(){return{Data:null}},methods:{LoadJson(){let o=this.$route.params.activityID,t=this.$route.params.eventID;o&&t&&h.get("Data/Activities/"+o+"/"+t+"/ForumContent.json").then(s=>{this.Data=s.data}).catch(s=>{console.log(s),this.ToNotFound()})},GetTargetHeight(){let o=null;this.$windowWidth>this.$lg?o=document.getElementById("info"):o=document.getElementById("place");const t=document.body.scrollHeight-(o.getBoundingClientRect().top+window.scrollY),s=this.$refs.bg;s.style.height=t+"px"},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"LoadJson"},created(){this.LoadJson()},updated(){setTimeout(()=>{this.GetTargetHeight()},200)}},H=Object.assign(F,{setup(o){return(t,s)=>t.Data!=null?(u(),_(f,{key:0},[r("div",p,[n(d,{class:"mb-10"},{default:e(()=>[n(l,null,{default:e(()=>[D]),_:1}),n(c,{href:"/activities/Forums"},{default:e(()=>[b]),_:1}),n(l,null,{default:e(()=>[a(i(t.Data.title),1)]),_:1})]),_:1}),n(m,{img:t.Data.imgs,link:t.Data.link,info:t.Data.info,teacherInfo:t.Data.teacherInfo,ref:"target"},{date:e(()=>[a(i(t.Data.date),1)]),time:e(()=>[a(i(t.Data.time),1)]),howto:e(()=>[v]),for:e(()=>[y]),place:e(()=>[a(" \u4E0A\u8AB2\u5730\u9EDE\uFF5C\u3000"+i(t.Data.place)+"\u3002 ",1)]),title:e(()=>[a(i(t.Data.title),1)]),teacher:e(()=>[a("\u6F14\u8B1B\u8005\uFF5C"+i(t.Data.teacher),1)]),_:1},8,["img","link","info","teacherInfo"])]),r("div",$,[w,r("div",I,null,512)])],64)):g("",!0)}});export{H as default};
