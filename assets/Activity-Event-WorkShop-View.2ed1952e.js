import{a as d}from"./index.becf6c0c.js";import{_ as p}from"./Road.b42b48b6.js";import{R as c}from"./RoadItem.06f6aeb2.js";import{_ as m}from"./RoadItemRouter.ab4b2741.js";import{E as u}from"./EventModal.fca7f5bb.js";import{_}from"./EventContentItem.c8a0df99.js";import{_ as g}from"./ElementPanel.7137ad60.js";import{_ as v,o as D,c as y,a as r,b as l,w as i,f as s,t as n,F as b,p as I,g as $}from"./index.6644ef1c.js";/* empty css                                                       *//* empty css                                                               */import"./ImageBox.54c875f6.js";const w=e=>(I("data-v-656f6764"),e=e(),$(),e),k={class:"wrap mb-20"},S=s("\u63A8\u5EE3\u6D3B\u52D5"),E=s("\u5DE5\u4F5C\u574A"),B={class:"absolute w-full bottom-0 -z-50"},N=w(()=>l("div",{class:"bg-bg-0-image h-8"},null,-1)),T={class:"bg-bg-2-Color h-0",ref:"bg"},W={data(){return{Data:{title:"",date:"",time:"",people:"",place:"",link:"",info:[],teacher:"",imgs:[]},interval:null}},methods:{LoadJson(){let e=this.$route.params.activityID,t=this.$route.params.eventID;e==="WorkShops"&&t&&d.get("Data/Activities/"+e+"/"+t+"/WorkShopContent.json").then(a=>{this.Data=a.data}).catch(a=>{console.log(a),this.ToNotFound()})},GetTargetHeight(e,t,a){const h=Math.floor(document.body.scrollHeight-(e.getBoundingClientRect().top+window.scrollY));if(t[0].main.clientHeight!=h){for(let o=0;o<t.length;o++)t[o].main.style.height=h+t[o].offset+"px";for(let o=0;o<a.length;o++){let f;a[o].offset!=0?f=a[o].main.clientHeight/a[o].offset:f=0,a[o].main.style.bottom=h-f+"px"}this.$refs.element&&this.$refs.element.ReSet()}},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"LoadJson"},created(){this.LoadJson()},mounted(){let e=document.getElementById("place");this.$windowWidth>this.$lg&&(e=document.getElementById("info"));let t=[{main:this.$refs.bg,offset:0}],a=[];this.interval=setInterval(()=>{this.GetTargetHeight(e,t,a)},100)},unmounted(){document.body.style.overflow="scroll",clearInterval(this.interval)}},F=Object.assign(W,{setup(e){return(t,a)=>(D(),y(b,null,[r(g,{ref:"element"},null,512),l("div",k,[r(p,{class:"mb-10"},{default:i(()=>[r(c,null,{default:i(()=>[S]),_:1}),r(m,{href:"/activities/WorkShops"},{default:i(()=>[E]),_:1}),r(c,null,{default:i(()=>[s(n(t.Data.title),1)]),_:1})]),_:1}),r(_,{howTo:"\u5831\u540D\u65B9\u5F0F\uFF5C\u63A1\u7DDA\u4E0A\u5831\u540D\u3002",place:"\u6D3B\u52D5\u5730\u9EDE\uFF5C"+t.Data.place+"\u3002",target:"\u53C3\u8207\u5C0D\u8C61\uFF5C\u570B\u5C0F\uFF08\u542B\uFF09\u4EE5\u4E0A\u5B78\u751F\uFF08\u570B\u5C0F\u5B78\u751F\u9700\u5BB6\u9577\u966A\u540C\uFF09\u3001\u4E00\u822C\u6C11\u773E\u3002",money:"\u8AB2\u7A0B\u8CBB\u7528\uFF5C\u65B0\u81FA\u5E63200\u5143\u6574\u3002",people:"\u53C3\u52A0\u4EBA\u6578\uFF5C\u6B63\u53D6"+t.Data.people+"\u4EBA\uFF0C\u5099\u53D65\u540D\uFF0C\u984D\u6EFF\u70BA\u6B62\u3002",img:t.Data.imgs,link:t.Data.link,info:t.Data.info,needKnew:!0,needLink:!0,teacherInfo:t.Data.teacherInfo,ref:"target"},{date:i(()=>[s(n(t.Data.date),1)]),time:i(()=>[s(n(t.Data.time),1)]),title:i(()=>[s(n(t.Data.title),1)]),ref:i(()=>[s(n(t.Data.ref),1)]),teacher:i(()=>[s("\u6388\u8AB2\u8B1B\u5E2B\uFF5C"+n(t.Data.teacher),1)]),_:1},8,["place","people","img","link","info","teacherInfo"])]),l("div",B,[N,l("div",T,null,512)]),r(u)],64))}});var z=v(F,[["__scopeId","data-v-656f6764"]]);export{z as default};
