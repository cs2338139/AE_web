import{a as d}from"./index.becf6c0c.js";import{_ as h}from"./Road.b42b48b6.js";import{R as r}from"./RoadItem.06f6aeb2.js";import{_ as c}from"./RoadItemRouter.ab4b2741.js";import{E as m}from"./EventModal.fca7f5bb.js";import{_ as p}from"./EventContentItem.c8a0df99.js";import{_ as u}from"./ElementPanel.7137ad60.js";import{_ as f,o as g,c as _,a as i,b as l,w as a,f as s,t as n,F as v,p as b,g as D}from"./index.6644ef1c.js";/* empty css                                                       *//* empty css                                                               */import"./ImageBox.54c875f6.js";const $=e=>(b("data-v-0e00b4f0"),e=e(),D(),e),w={class:"wrap mb-20"},I=s("\u63A8\u5EE3\u6D3B\u52D5"),y=s("\u5152\u7AE5\u7F8E\u5B78\u6D3B\u52D5"),C={class:"absolute w-full bottom-0 -z-50"},B=$(()=>l("div",{class:"bg-bg-0-image h-8"},null,-1)),E={class:"bg-bg-2-Color h-0",ref:"bg"},A={data(){return{Data:{title:"",date:"",time:"",people:"",place:"",link:"",info:[],teacher:"",imgs:[]},interval:null}},methods:{LoadJson(){let e=this.$route.params.activityID,t=this.$route.params.eventID;e==="ChildrenArts"&&t&&d.get("Data/Activities/"+e+"/"+t+"/ChildrenArtContent.json").then(o=>{this.Data=o.data}).catch(o=>{console.log(o),this.ToNotFound()})},GetTargetHeight(){let e=null;this.$windowWidth>this.$lg?e=document.getElementById("info"):e=document.getElementById("place");const t=document.body.scrollHeight-(e.getBoundingClientRect().top+window.scrollY),o=this.$refs.bg;o.style.height=t+"px"},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"LoadJson"},created(){this.LoadJson()},updated(){this.interval=setInterval(()=>{let e=null;this.$windowWidth>this.$lg?e=document.getElementById("info"):e=document.getElementById("place");const t=document.body.scrollHeight-(e.getBoundingClientRect().top+window.scrollY);this.$refs.bg.clientHeight!=t&&(this.GetTargetHeight(),this.$refs.element&&this.$refs.element.ReSet())},100)},unmounted(){clearInterval(this.interval)}},k=Object.assign(A,{setup(e){return(t,o)=>(g(),_(v,null,[i(u,{ref:"element"},null,512),l("div",w,[i(h,{class:"mb-10"},{default:a(()=>[i(r,null,{default:a(()=>[I]),_:1}),i(c,{href:"/activities/ChildrenArts"},{default:a(()=>[y]),_:1}),i(r,null,{default:a(()=>[s(n(t.Data.title),1)]),_:1})]),_:1}),i(p,{howTo:"\u5831\u540D\u65B9\u5F0F\uFF5C\u672C\u9805\u6D3B\u52D5\u63A1\u5718\u9AD4\u9810\u7D04\u5831\u540D(8/24-9/21)\uFF0C\u6BCF\u9031\u4E09\u9810\u7D04\u6D3B\u52D5\uFF0C\u5171\u8A085\u5802\uFF0C\u984D\u6EFF\u70BA\u6B62\u3002",place:"\u6D3B\u52D5\u5730\u9EDE\uFF5C"+t.Data.place+"\u3002",target:"\u53C3\u8207\u5C0D\u8C61\uFF5C\u5152\u7AE5\u76F8\u95DC\u516C\u76CA\u793E\u5718\u3001\u7D44\u7E54\u3001\u5354\u6703\u3002\u8EAB\u5FC3\u969C\u7919\u8207\u5F31\u52E2\u5718\u9AD4\u512A\u5148\u53D7\u7406\u5831\u540D\u3002",money:"\u8AB2\u7A0B\u8CBB\u7528\uFF5C\u65B0\u81FA\u5E63200\u5143\u6574\u3002",people:"\u53C3\u52A0\u4EBA\u6578\uFF5C\u6B63\u53D6"+t.Data.people,img:t.Data.imgs,link:t.Data.link,info:t.Data.info,needKnew:!1,needLink:!1,teacherInfo:t.Data.teacherInfo,ref:"target"},{date:a(()=>[s(n(t.Data.date),1)]),time:a(()=>[s(n(t.Data.time),1)]),title:a(()=>[s(n(t.Data.title),1)]),teacher:a(()=>[s("\u6388\u8AB2\u8B1B\u5E2B\uFF5C"+n(t.Data.teacher),1)]),_:1},8,["place","people","img","link","info","teacherInfo"])]),l("div",C,[B,l("div",E,null,512)]),i(m)],64))}});var G=f(k,[["__scopeId","data-v-0e00b4f0"]]);export{G as default};
