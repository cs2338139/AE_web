import{a as c}from"./index.becf6c0c.js";import{_ as m}from"./Road.c2ec6ea1.js";import{R as f}from"./RoadItem.40dc0993.js";import{_ as p}from"./RoadItemRouter.3cd8d67a.js";import{E as u}from"./EventModal.e80c736b.js";import{_}from"./EventContentItem.78036e74.js";import{_ as g}from"./ElementPanel.7b180c64.js";import{_ as v,o as D,c as I,a as r,b as l,w as i,f as s,t as n,F as $,p as b,g as y}from"./index.cea9219b.js";/* empty css                                                       *//* empty css                                                               */import"./ImageBox.a21a2c66.js";/* empty css                                                             *//* empty css                                                         */const w=e=>(b("data-v-55d2e7a8"),e=e(),y(),e),C={class:"wrap mb-20"},A=s("\u63A8\u5EE3\u6D3B\u52D5"),k=s("\u5152\u7AE5\u7F8E\u5B78\u6D3B\u52D5"),E={class:"absolute w-full bottom-0 -z-50"},B=w(()=>l("div",{class:"bg-bg-0-image h-8"},null,-1)),N={class:"bg-bg-2-Color h-0",ref:"bg"},T={data(){return{Data:{title:"",date:"",time:"",people:"",place:"",link:"",info:[],teacher:"",imgs:[]},interval:null}},methods:{LoadJson(){let e=this.$route.params.activityID,t=this.$route.params.eventID;e==="ChildrenArts"&&t&&c.get("Data/Activities/"+e+"/"+t+"/ChildrenArtContent.json").then(a=>{this.Data=a.data}).catch(a=>{console.log(a),this.ToNotFound()})},GetTargetHeight(e,t,a){const h=Math.floor(document.body.scrollHeight-(e.getBoundingClientRect().top+window.scrollY));if(t[0].main.clientHeight!=h){for(let o=0;o<t.length;o++)t[o].main.style.height=h+t[o].offset+"px";for(let o=0;o<a.length;o++){let d;a[o].offset!=0?d=a[o].main.clientHeight/a[o].offset:d=0,a[o].main.style.bottom=h-d+"px"}this.$refs.element&&this.$refs.element.ReSet()}},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"LoadJson"},created(){this.LoadJson()},mounted(){let e=document.getElementById("place");this.$windowWidth>this.$lg&&(e=document.getElementById("info"));let t=[{main:this.$refs.bg,offset:0}],a=[];this.interval=setInterval(()=>{this.GetTargetHeight(e,t,a)},100)},unmounted(){clearInterval(this.interval)}},F=Object.assign(T,{setup(e){return(t,a)=>(D(),I($,null,[r(g,{ref:"element"},null,512),l("div",C,[r(m,{class:"mb-10"},{default:i(()=>[r(f,null,{default:i(()=>[A]),_:1}),r(p,{href:"/activities/ChildrenArts"},{default:i(()=>[k]),_:1}),r(f,null,{default:i(()=>[s(n(t.Data.title),1)]),_:1})]),_:1}),r(_,{howTo:"\u5831\u540D\u65B9\u5F0F\uFF5C\u63A1\u9810\u7D04\u5831\u540D\uFF0C8 / 24 \uFF0D 9 / 21\uFF0C\u6BCF\u9031\u4E09\u9810\u7D04\u6D3B\u52D5\uFF0C\u5171\u8A08 5 \u5802\uFF0C\u984D\u6EFF\u622A\u6B62\u3002",place:"\u6D3B\u52D5\u5730\u9EDE\uFF5C"+t.Data.place+"\u3002",target:"\u53C3\u8207\u5C0D\u8C61\uFF5C\u5152\u7AE5\u76F8\u95DC\u516C\u76CA\u793E\u5718\u3001\u7D44\u7E54\u3001\u5354\u6703\uFF0C\u4EE5\u53CA\u8EAB\u5FC3\u969C\u7919\u8207\u5F31\u52E2\u5718\u9AD4\u512A\u5148\u53D7\u7406\u5831\u540D\u3002",money:"\u8AB2\u7A0B\u8CBB\u7528\uFF5C\u65B0\u81FA\u5E63200\u5143\u6574\u3002",people:"\u53C3\u52A0\u4EBA\u6578\uFF5C"+t.Data.people,img:t.Data.imgs,link:t.Data.link,info:t.Data.info,needKnew:!1,needLink:!1,teacherInfo:t.Data.teacherInfo,ref:"target"},{date:i(()=>[s(n(t.Data.date),1)]),time:i(()=>[s(n(t.Data.time),1)]),title:i(()=>[s(n(t.Data.title),1)]),ref:i(()=>[s(n(t.Data.ref),1)]),teacher:i(()=>[s("\u6388\u8AB2\u8B1B\u5E2B\uFF5C"+n(t.Data.teacher),1)]),_:1},8,["place","people","img","link","info","teacherInfo"])]),l("div",E,[B,l("div",N,null,512)]),r(u)],64))}});var W=v(F,[["__scopeId","data-v-55d2e7a8"]]);export{W as default};
