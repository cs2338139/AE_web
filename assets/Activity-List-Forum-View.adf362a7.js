import{a as u}from"./index.becf6c0c.js";import{_ as f}from"./Road.fff845af.js";import{R as d}from"./RoadItem.1316f4fa.js";import{_ as h}from"./ActivityItem.e6eaa425.js";import{o as i,c as _,a as r,w as a,b as l,F as p,d as v,e as g,f as s,t as c,n as y}from"./index.a42c6770.js";const x={class:"wrap"},L=s("\u63A8\u5EE3\u6D3B\u52D5"),F=s("\u5C08\u984C\u8B1B\u5EA7"),b=l("div",{class:"max-w-4xl p-5 mx-auto mt-20 mb-12 bg-gray-100 rounded-3xl"},[l("div",{class:"text-lg font-bold"},"\u53EF\u66FE\u60F3\u904E\uFF0C\u5B69\u5B50\u7684\u5922\uFF0C\u6703\u6709\u54EA\u4E9B\uFF1F\u505A\u5922\u548C\u63A2\u7D22\u4E16\u754C\u7684\u80FD\u529B\uFF0C\u662F\u5B69\u5B50\u8FCE\u5411\u672A\u4F86\u548C\u672A\u77E5\u7684\u52C7\u6C23\u3002 \u900F\u904E\u8207\u7B56\u5C55\u4EBA\u9762\u5C0D\u9762\u5EA7\u8AC7\uFF0C\u85C9\u7531\u7D93\u9A57\u5206\u4EAB\u4E00\u540C\u63A2\u8A0E\u7E6A\u672C\u5C0D\u5152\u7AE5\u7684\u5F71\u97FF\uFF0C\u9032\u800C\u6253\u958B\u7121\u9650\u60F3\u50CF\u529B\u548C\u597D\u5947\u5FC3\uFF0C\u555F\u767C\u85DD\u8853\u8208\u8DA3\u3002")],-1),w={class:"flex flex-wrap justify-between xl:justify-around"},D={data(){return{ForumList:[]}},methods:{LoadJson(){u.get("Data/Activities/"+this.$route.params.activityID+"/ForumList.json").then(o=>{this.ForumList=o.data;var t=3-this.ForumList.length%3;t===3&&(t=0);for(var n={title:"none",imgKey:"",date:"",teacher:"",path:""},e=0;e<t;e++)this.ForumList.push(n)}).catch(function(o){console.log(o)})}},created(){this.LoadJson()}},k=Object.assign(D,{setup(o){return(t,n)=>(i(),_("div",x,[r(f,{class:"mb-10"},{default:a(()=>[r(d,null,{default:a(()=>[L]),_:1}),r(d,null,{default:a(()=>[F]),_:1})]),_:1}),b,l("div",w,[(i(!0),_(p,null,v(t.ForumList,(e,m)=>(i(),g(h,{href:"/activities/"+t.$route.params.activityID+"/"+m,img:"Data/Activities/"+t.$route.params.activityID+"/"+m+"/cover.jpg",class:y({invisible:e.title==="none"})},{title:a(()=>[s(c(e.title),1)]),date:a(()=>[s(c(e.date),1)]),teacher:a(()=>[s(c(e.teacher),1)]),_:2},1032,["href","img","class"]))),256))])]))}});export{k as default};
