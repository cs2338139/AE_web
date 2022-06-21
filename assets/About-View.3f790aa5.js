import{a as $}from"./index.becf6c0c.js";import{_ as y}from"./Road.f871ec96.js";import{R as D}from"./RoadItem.0cb78bfa.js";import{_ as f,o as r,c,b as t,r as b,F as m,i as v,p,g as w,f as l,a as u,w as n,t as a,d as _,n as C,e as g}from"./index.3a3e9017.js";import{_ as S}from"./ElementPanel.1e658a6e.js";const x=s=>(p("data-v-404da888"),s=s(),w(),s),k={class:"relative max-w-6xl mx-auto flex justify-between sm:flex-col sm:items-center"},T={class:"w-40 sm:w-30 sm:mb-5"},I=["src"],A={class:"w-3/4 sm:w-full"},B={class:"mb-3 text-xl sm:text-base sm:text-center"},L=l("\u95B1\u8B80\u76EA\u97A6\u97C6"),V={class:"dev sm:text-sm"},j=l("\u6587\u6DB5\u990A\u7684\u5DE5\u4F5C\u574A\u3001\u8AB2\u7A0B\u3001\u8B1B\u5EA7\u8207\u6587\u7AE0\uFF0C\u5F15\u9818\u5927\u773E\u9032\u5165\u4E0D\u540C\u8996\u91CE\u7684\u7E6A\u672C\u5947\u5E7B\u4E16\u754C\u3002 "),H=x(()=>t("br",null,null,-1)),N=x(()=>t("br",null,null,-1)),R=["href"],E={props:{img:String,href:String},setup(s){return(e,d)=>(r(),c("div",null,[t("div",k,[t("div",T,[t("img",{src:s.img,class:"rounded-full w-full"},null,8,I)]),t("div",A,[t("div",B,[b(e.$slots,"name",{},()=>[L],!0)]),t("div",V,[b(e.$slots,"info",{},()=>[j],!0)]),s.href!="none"?(r(),c(m,{key:0},[H,N,t("a",{href:s.href,target:"_blank",class:"bottom-0 right-0 absolute underline sm:text-sm sm:right-1/2 sm:translate-x-1/2"},"\u2192 \u81C9\u66F8\u5C08\u9801",8,R)],64)):v("",!0)])])]))}};var h=f(E,[["__scopeId","data-v-404da888"]]);const i=s=>(p("data-v-4b04ae7e"),s=s(),w(),s),z={class:"wrap"},F=l("\u95DC\u65BC\u7B56\u5C55"),G=l("\u95DC\u65BC\u7B56\u5C55"),J={class:"md:px-0 w-full px-20 mb-20 overflow-hidden"},O=["src"],Y={class:"sm:mb-3 mb-5"},q={class:"sm:text-xl sm:mr-2 sm:block inline mr-5 text-2xl"},K={class:"sm:text-xs text-zinc-500 sm:block inline text-lg"},M={class:"sm:mb-10 mb-20"},P={class:"mb-20"},Q=i(()=>t("div",{class:"bg-bg-0-image h-10"},null,-1)),U={class:"bg-bg-2-Color"},W={class:"wrap"},X=i(()=>t("div",{class:"title"},"\u7B56\u5C55\u4EBA",-1)),Z=i(()=>t("br",null,null,-1)),tt=i(()=>t("br",null,null,-1)),et=i(()=>t("div",{class:"absolute bg-no-repeat bg-w100% w-36 bg-Leaves-image -translate-y-24 -scale-x-100 left-0 h-48"},null,-1)),st=i(()=>t("div",{class:"absolute bg-no-repeat bg-w100% w-36 bg-Boy-image right-60 h-36 rotate-180"},null,-1)),ot=i(()=>t("div",{class:"bg-bg-0-image h-10 bg-bottom"},null,-1)),at={class:"wrap"},it={class:"sm:mb-10 mb-20"},lt=i(()=>t("div",{class:"title"},"\u7B56\u5C55\u5718\u968A",-1)),nt={class:"bgCloud sm:mt-10 relative flex items-center justify-center mx-auto mt-5 mb-5"},rt={class:"sm:text-sm text w-3/5 text-lg text-center"},ct=i(()=>t("div",{class:"absolute bg-no-repeat bg-w100% w-24 bg-Bear-image -right-8 bottom-5 h-36"},null,-1)),dt={class:"sm:mb-10"},mt={class:"title",ref:"target"},ut={class:"bgCloud sm:mt-10 relative flex items-center justify-center mx-auto mt-5 mb-5"},_t={class:"sm:text-sm text w-3/5 text-lg text-center"},ht=i(()=>t("div",{class:"absolute bg-no-repeat bg-w100% w-24 bg-Rabbit-1-image right-0 bottom-5 h-36 -scale-x-100"},null,-1)),bt={class:"-z-50 absolute bottom-0 w-full"},gt={class:"absolute bg-no-repeat bg-w100% w-36 bg-Horse-image left-20 h-36 bottom-0",ref:"horse"},ft=i(()=>t("div",{class:"bg-bg-0-image h-8"},null,-1)),vt={class:"bg-bg-2-Color h-0",ref:"bg"},pt={data(){return{dir:"Data/About/image/",aboutData:null,infoState:"English",info:{title:null,curator:null,info:[]}}},methods:{LoadJson(){$.get("Data/About/about.json").then(s=>{this.aboutData=s.data,this.info=this.aboutData.info[0]}).catch(function(s){console.log(s)})},ChangeLang(){this.infoState==="English"?(this.infoState="\u4E2D\u6587",this.info=this.aboutData.info[1]):(this.infoState="English",this.info=this.aboutData.info[0])},GetTargetHeight(){let s=this.$refs.target;const e=document.body.scrollHeight-(s.getBoundingClientRect().top+window.scrollY),d=this.$refs.bg,o=this.$refs.horse;d.style.height=e+"px",o.style.bottom=e-o.clientHeight/4+"px"}},created(){this.LoadJson()},mounted(){},updated(){setTimeout(()=>{this.GetTargetHeight()},100),this.$refs.element&&this.$refs.element.ReSet()}},wt=Object.assign(pt,{setup(s){return(e,d)=>e.aboutData!=null?(r(),c(m,{key:0},[u(S,{keyName:"About",ref:"element"},null,512),t("div",z,[u(y,{class:"mb-10"},{title:n(()=>[G]),default:n(()=>[u(D,null,{default:n(()=>[F]),_:1})]),_:1}),t("div",J,[t("img",{src:e.dir+e.aboutData.image,class:"aspect-image w-full"},null,8,O)]),t("div",null,[t("button",{class:"text-bg-0-Color bg-bg-1-Color hover:bg-text-1-Color sm:text-xs xl:right-5 absolute right-0 px-5 py-1 rounded-full",onClick:d[0]||(d[0]=o=>e.ChangeLang())},a(e.infoState),1),t("div",Y,[t("div",q,a(e.info.title),1),t("div",K,a(e.info.curator),1)]),t("div",M,[(r(!0),c(m,null,_(e.info.info,o=>(r(),c("div",{class:C([{my:o===""},"contentFont"])},a(o),3))),256))])])]),t("div",P,[Q,t("div",U,[t("div",W,[X,u(h,{img:e.dir+e.aboutData.curator.image,href:e.aboutData.curator.link},{name:n(()=>[l(a(e.aboutData.curator.name),1)]),info:n(()=>[l(a(e.aboutData.curator.info),1)]),_:1},8,["img","href"]),Z,tt])]),et,st,ot]),t("div",at,[t("div",it,[lt,t("div",nt,[t("div",rt,a(e.aboutData.curatorialTeamTip),1),ct]),(r(!0),c(m,null,_(e.aboutData.curatorialTeam,o=>(r(),g(h,{img:e.dir+o.image,href:o.link,class:"sm:my-20 my-32"},{name:n(()=>[l(a(o.name),1)]),info:n(()=>[l(a(o.info),1)]),_:2},1032,["img","href"]))),256))]),t("div",dt,[t("div",mt,"\u63A8\u5EE3\u5718\u968A",512),t("div",ut,[t("div",_t,a(e.aboutData.promotionTeamTip),1),ht]),(r(!0),c(m,null,_(e.aboutData.promotionTeam,o=>(r(),g(h,{img:e.dir+o.image,href:o.link,class:"sm:my-20 my-32"},{name:n(()=>[l(a(o.name),1)]),info:n(()=>[l(a(o.info),1)]),_:2},1032,["img","href"]))),256))])]),t("div",bt,[t("div",gt,null,512),ft,t("div",vt,null,512)])],64)):v("",!0)}});var St=f(wt,[["__scopeId","data-v-4b04ae7e"]]);export{St as default};