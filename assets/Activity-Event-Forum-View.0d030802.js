import{a as c}from"./index.becf6c0c.js";import{_ as d}from"./Road.c2ec6ea1.js";import{R as f}from"./RoadItem.40dc0993.js";import{_ as u}from"./RoadItemRouter.3cd8d67a.js";import{_ as p}from"./EventContentItem.78036e74.js";import{_ as g}from"./ElementPanel.7b180c64.js";import{o as _,c as v,a as n,b as l,w as o,f as s,t as r,F as D}from"./index.cea9219b.js";/* empty css                                                       */import"./ImageBox.a21a2c66.js";/* empty css                                                             *//* empty css                                                         */const $={class:"wrap mb-20"},b=s("\u63A8\u5EE3\u6D3B\u52D5"),y=s("\u5206\u4EAB\u6703"),I={class:"absolute w-full bottom-0 -z-50"},w=l("div",{class:"bg-bg-0-image h-8"},null,-1),F={class:"bg-bg-2-Color h-0",ref:"bg"},k={data(){return{Data:{title:"",date:"",time:"",place:"",link:"",info:[],teacher:"",teacherInfo:[],imgs:[]},interval:null}},methods:{LoadJson(){let i=this.$route.params.activityID,t=this.$route.params.eventID;i==="Forums"&&t&&c.get("Data/Activities/"+i+"/"+t+"/ForumContent.json").then(e=>{this.Data=e.data}).catch(e=>{console.log(e),this.ToNotFound()})},GetTargetHeight(i,t,e){const h=Math.floor(document.body.scrollHeight-(i.getBoundingClientRect().top+window.scrollY));if(t[0].main.clientHeight!=h){for(let a=0;a<t.length;a++)t[a].main.style.height=h+t[a].offset+"px";for(let a=0;a<e.length;a++){let m;e[a].offset!=0?m=e[a].main.clientHeight/e[a].offset:m=0,e[a].main.style.bottom=h-m+"px"}this.$refs.element&&this.$refs.element.ReSet()}},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"LoadJson"},created(){this.LoadJson()},mounted(){let i=document.getElementById("place");this.$windowWidth>this.$lg&&(i=document.getElementById("info"));let t=[{main:this.$refs.bg,offset:0}],e=[];this.interval=setInterval(()=>{this.GetTargetHeight(i,t,e)},100)},unmounted(){clearInterval(this.interval)}},q=Object.assign(k,{setup(i){return(t,e)=>(_(),v(D,null,[n(g,{ref:"element"},null,512),l("div",$,[n(d,{class:"mb-10"},{default:o(()=>[n(f,null,{default:o(()=>[b]),_:1}),n(u,{href:"/activities/Forums"},{default:o(()=>[y]),_:1}),n(f,null,{default:o(()=>[s(r(t.Data.title),1)]),_:1})]),_:1}),n(p,{howTo:"\u5831\u540D\u65B9\u5F0F\uFF5C\u63A1\u7DDA\u4E0A\u5831\u540D\u3002",place:"\u4E0A\u8AB2\u5730\u9EDE\uFF5C"+t.Data.place,target:"\u53C3\u8207\u5C0D\u8C61\uFF5C\u516C\u52D9\u4EBA\u54E1\u3001\u6559\u5E2B\u3001\u5B78\u751F\u53CA\u4E00\u822C\u6C11\u773E\u3002",img:t.Data.imgs,link:t.Data.link,info:t.Data.info,needLink:!0,teacherInfo:t.Data.teacherInfo,tip:"\u7814\u7FD2\u6642\u6578\uFF5C"+t.Data.tip,ref:"target"},{date:o(()=>[s(r(t.Data.date),1)]),time:o(()=>[s(r(t.Data.time),1)]),title:o(()=>[s(r(t.Data.title),1)]),teacher:o(()=>[s("\u6F14\u8B1B\u8005\uFF5C"+r(t.Data.teacher),1)]),_:1},8,["place","img","link","info","teacherInfo","tip"])]),l("div",I,[w,l("div",F,null,512)])],64))}});export{q as default};
