import{a as y}from"./index.becf6c0c.js";import{_ as D}from"./Road.db9572a2.js";import{R as T}from"./RoadItem.742cfedd.js";import{_ as p,o as c,c as d,b as t,r as b,F as u,k as S,p as w,g as x,f as r,a as h,w as m,t as l,d as f,e as v}from"./index.fe5d838b.js";import{_ as k}from"./ElementPanel.68a41380.js";/* empty css                                                     */const $=s=>(w("data-v-404da888"),s=s(),x(),s),C={class:"relative max-w-6xl mx-auto flex justify-between sm:flex-col sm:items-center"},I={class:"w-40 sm:w-30 sm:mb-5"},H=["src"],L={class:"w-3/4 sm:w-full"},B={class:"mb-3 text-xl sm:text-base sm:text-center"},A=r("\u95B1\u8B80\u76EA\u97A6\u97C6"),V={class:"dev sm:text-sm"},j=r("\u6587\u6DB5\u990A\u7684\u5DE5\u4F5C\u574A\u3001\u8AB2\u7A0B\u3001\u8B1B\u5EA7\u8207\u6587\u7AE0\uFF0C\u5F15\u9818\u5927\u773E\u9032\u5165\u4E0D\u540C\u8996\u91CE\u7684\u7E6A\u672C\u5947\u5E7B\u4E16\u754C\u3002 "),N=$(()=>t("br",null,null,-1)),R=$(()=>t("br",null,null,-1)),E=["href"],M={props:{img:String,href:String},setup(s){return(e,a)=>(c(),d("div",null,[t("div",C,[t("div",I,[t("img",{src:s.img,class:"rounded-full w-full"},null,8,H)]),t("div",L,[t("div",B,[b(e.$slots,"name",{},()=>[A],!0)]),t("div",V,[b(e.$slots,"info",{},()=>[j],!0)]),s.href!="none"?(c(),d(u,{key:0},[N,R,t("a",{href:s.href,target:"_blank",class:"bottom-0 right-0 absolute underline sm:text-sm sm:right-1/2 sm:translate-x-1/2"},"\u2192 \u81C9\u66F8\u5C08\u9801",8,E)],64)):S("",!0)])])]))}};var g=p(M,[["__scopeId","data-v-404da888"]]);const n=s=>(w("data-v-2d345d7e"),s=s(),x(),s),z={class:"wrap"},F=r("\u95DC\u65BC\u7B56\u5C55"),G=r("\u95DC\u65BC\u7B56\u5C55"),J={class:"md:px-0 w-full px-20 mb-20 overflow-hidden"},O=["src"],Y={class:"sm:mb-3 mb-5"},q={class:"sm:text-xl sm:mr-2 sm:block inline mr-5 text-2xl"},K={class:"sm:text-xs text-zinc-500 sm:block inline text-lg"},P=["innerHTML"],Q={class:"mb-20"},U=n(()=>t("div",{class:"bg-bg-0-image h-10"},null,-1)),W={class:"bg-bg-2-Color"},X={class:"wrap"},Z=n(()=>t("div",{class:"title"},"\u7B56\u5C55\u4EBA",-1)),tt=n(()=>t("br",null,null,-1)),et=n(()=>t("br",null,null,-1)),st=n(()=>t("div",{class:"absolute bg-no-repeat bg-w100% w-36 bg-Leaves-image -translate-y-24 -scale-x-100 left-0 h-48"},null,-1)),ot=n(()=>t("div",{class:"absolute bg-no-repeat bg-w100% w-36 bg-Boy-image right-60 h-36 rotate-180"},null,-1)),at=n(()=>t("div",{class:"bg-bg-0-image h-10 bg-bottom"},null,-1)),it={class:"wrap"},lt={class:"sm:mb-10 mb-20"},nt=n(()=>t("div",{class:"title"},"\u7B56\u5C55\u5718\u968A",-1)),rt={class:"bgCloud sm:mt-10 relative flex items-center justify-center mx-auto mt-5 mb-5"},mt={class:"sm:text-sm text w-3/5 text-lg text-center"},ct=n(()=>t("div",{class:"absolute bg-no-repeat bg-w100% w-24 bg-Bear-image -right-8 bottom-5 h-36"},null,-1)),dt={class:"sm:mb-10"},ht={class:"title",ref:"target"},ut={class:"bgCloud sm:mt-10 relative flex items-center justify-center mx-auto mt-5 mb-5"},_t={class:"sm:text-sm text w-3/5 text-lg text-center"},gt=n(()=>t("div",{class:"absolute bg-no-repeat bg-w100% w-24 bg-Rabbit-1-image right-0 bottom-5 h-36 -scale-x-100"},null,-1)),bt={class:"-z-50 absolute bottom-0 w-full"},ft={class:"absolute bg-no-repeat bg-w100% w-36 bg-Horse-image left-20 h-36 bottom-0",ref:"horse"},vt=n(()=>t("div",{class:"bg-bg-0-image h-8"},null,-1)),pt={class:"bg-bg-2-Color h-0",ref:"bg"},wt={data(){return{interval:null,dir:"Data/About/image/",aboutData:{image:"",info:[],curator:{image:"",name:"",info:"",link:""},curatorialTeamTip:"",curatorialTeam:[],promotionTeamTip:"",promotionTeam:[]},infoState:"English",info:{title:"",curator:"",info:""}}},methods:{LoadJson(){y.get("Data/About/about.json").then(s=>{this.aboutData=s.data,this.info=this.aboutData.info[0]}).catch(function(s){console.log(s)})},ChangeLang(){this.infoState==="English"?(this.infoState="\u4E2D\u6587",this.info=this.aboutData.info[1]):(this.infoState="English",this.info=this.aboutData.info[0])},GetTargetHeight(s,e,a){const o=Math.floor(document.body.scrollHeight-(s.getBoundingClientRect().top+window.scrollY));if(e[0].main.clientHeight!=o){for(let i=0;i<e.length;i++)e[i].main.style.height=o+e[i].offset+"px";for(let i=0;i<a.length;i++){let _;a[i].offset!=0?_=a[i].main.clientHeight/a[i].offset:_=0,a[i].main.style.bottom=o-_+"px"}this.$refs.element&&this.$refs.element.ReSet()}}},created(){this.LoadJson()},mounted(){let s=this.$refs.target,e=[{main:this.$refs.bg,offset:0}],a=[{main:this.$refs.horse,offset:4}];this.interval=setInterval(()=>{this.GetTargetHeight(s,e,a)},100)},unmounted(){clearInterval(this.interval)}},xt=Object.assign(wt,{setup(s){return(e,a)=>(c(),d(u,null,[h(k,{keyName:"Star-1",ref:"element"},null,512),t("div",z,[h(D,{class:"mb-10"},{title:m(()=>[G]),default:m(()=>[h(T,null,{default:m(()=>[F]),_:1})]),_:1}),t("div",J,[t("img",{src:e.dir+e.aboutData.image,class:"aspect-image w-full"},null,8,O)]),t("div",null,[t("button",{class:"text-bg-0-Color bg-bg-1-Color hover:bg-text-1-Color sm:text-xs xl:right-5 absolute right-0 px-5 py-1 rounded-full",onClick:a[0]||(a[0]=o=>e.ChangeLang())},l(e.infoState),1),t("div",Y,[t("div",q,l(e.info.title),1),t("div",K,l(e.info.curator),1)]),t("div",{class:"sm:mb-10 mb-20",innerHTML:e.info.info},null,8,P)])]),t("div",Q,[U,t("div",W,[t("div",X,[Z,h(g,{img:e.dir+e.aboutData.curator.image,href:e.aboutData.curator.link},{name:m(()=>[r(l(e.aboutData.curator.name),1)]),info:m(()=>[r(l(e.aboutData.curator.info),1)]),_:1},8,["img","href"]),tt,et])]),st,ot,at]),t("div",it,[t("div",lt,[nt,t("div",rt,[t("div",mt,l(e.aboutData.curatorialTeamTip),1),ct]),(c(!0),d(u,null,f(e.aboutData.curatorialTeam,o=>(c(),v(g,{img:e.dir+o.image,href:o.link,class:"sm:my-20 my-32"},{name:m(()=>[r(l(o.name),1)]),info:m(()=>[r(l(o.info),1)]),_:2},1032,["img","href"]))),256))]),t("div",dt,[t("div",ht,"\u63A8\u5EE3\u5718\u968A",512),t("div",ut,[t("div",_t,l(e.aboutData.promotionTeamTip),1),gt]),(c(!0),d(u,null,f(e.aboutData.promotionTeam,o=>(c(),v(g,{img:e.dir+o.image,href:o.link,class:"sm:my-20 my-32"},{name:m(()=>[r(l(o.name),1)]),info:m(()=>[r(l(o.info),1)]),_:2},1032,["img","href"]))),256))])]),t("div",bt,[t("div",ft,null,512),vt,t("div",pt,null,512)])],64))}});var Ct=p(xt,[["__scopeId","data-v-2d345d7e"]]);export{Ct as default};
