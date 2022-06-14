import{a as f}from"./index.becf6c0c.js";import{_}from"./Road.81603ac6.js";import{R as g}from"./RoadItem.25abdc6d.js";import{E as l}from"./ExhibitionItem.6744b23b.js";import{_ as u,o as h,c as b,b as i,a as o,w as s,F as c,d as x,n as p,t as n,f as a,i as v,p as D,g as w}from"./index.6cf28ad2.js";const r=e=>(D("data-v-3578eadb"),e=e(),w(),e),k={class:"wrap"},C=a("\u5C55\u89BD\u4ECB\u7D39"),E=a("\u5922\u5883\u623F"),y=a("\u5922\u5883\u623F"),S={class:"w-full mb-20 px-14 overflow-hidden aspect-video lg:px-0"},L=["src"],j={class:"text-center mb-20"},I={class:"sm:mb-10 mb-6 sm:px-1"},V={ref:"target",class:"relative"},$=r(()=>i("div",{class:"w-20 h-32 bg-no-repeat sm:bg-h100% bg-w100% bg-arrow-1-image mx-auto sm:h-20 sm:translate-x-14"},null,-1)),B=r(()=>i("div",{class:"w-36 h-32 bg-no-repeat sm:bg-h100% bg-w100% bg-arrow-2-image mx-auto -translate-x-12 sm:h-20 sm:translate-x-0"},null,-1)),N=r(()=>i("div",{class:"w-24 h-28 bg-no-repeat bg-h100% bg-arrow-3-image mx-auto -translate-x-16 sm:h-20 sm:-translate-x-0 sm:rotate-12"},null,-1)),T=r(()=>i("div",{class:"w-36 h-32 bg-no-repeat sm:bg-h100% bg-w100% bg-arrow-4-image mx-auto sm:h-20 sm:translate-x-14 sm:-rotate-12"},null,-1)),F={class:"absolute w-full bottom-0 -z-50"},H=r(()=>i("div",{class:"bg-foot-1-image h-8"},null,-1)),R={class:"bg-gradient-to-b from-black to-bg-3-Color",ref:"bg"},z={data(){return{dir:"Data/Exhibitions/"+this.$route.params.exhibitionID+"/",exhibitionData:null,infoState:"English",info:[]}},methods:{LoadJson(){f.get(this.dir+"ExhibitionList.json").then(e=>{this.exhibitionData=e.data,this.info=this.exhibitionData.info.cn}).catch(function(e){console.log(e)})},GetTargetHeight(){const e=document.body.scrollHeight-(this.$refs.target.getBoundingClientRect().top+window.scrollY),t=this.$refs.bg;t.style.height=e+15+"px",console.log(t.style.height)},ChangeLang(){this.infoState==="English"?(this.infoState="\u4E2D\u6587",this.info=this.exhibitionData.info.en):(this.infoState="English",this.info=this.exhibitionData.info.cn)}},created(){this.LoadJson()},updated(){setTimeout(()=>{this.GetTargetHeight()},200)}},G=Object.assign(z,{setup(e){return(t,d)=>t.exhibitionData!=null?(h(),b(c,{key:0},[i("div",k,[o(_,{class:"mb-10"},{title:s(()=>[y]),default:s(()=>[o(g,null,{default:s(()=>[C]),_:1}),o(g,null,{default:s(()=>[E]),_:1})]),_:1}),i("div",S,[i("img",{src:t.dir+t.exhibitionData.image},null,8,L)]),i("div",j,[i("div",I,[(h(!0),b(c,null,x(t.info,m=>(h(),b("div",{class:p([{my:m===""},"contentFont"])},n(m),3))),256))]),i("button",{class:"px-5 py-1 rounded-full text-bg-0-Color bg-bg-1-Color hover:bg-text-1-Color",onClick:d[0]||(d[0]=m=>t.ChangeLang())},n(t.infoState),1)]),i("div",V,[o(l,{img:t.dir+"0/cover.jpg",info:t.exhibitionData.books[0].info,href:"Dream /"+0,class:"mt-32 -mb-10 sm:mb-0 -translate-x-72 xl:-translate-x-52 lg:-translate-x-20 sm:-translate-x-1"},{title:s(()=>[a(n(t.exhibitionData.books[0].title),1)]),_:1},8,["img","info"]),$,o(l,{img:t.dir+"1/cover.jpg",info:t.exhibitionData.books[1].info,href:"Dream /"+1,class:"mt-0 mb-2 translate-x-24 sm:translate-x-1"},{title:s(()=>[a(n(t.exhibitionData.books[1].title),1)]),_:1},8,["img","info"]),B,o(l,{img:t.dir+"2/cover.jpg",info:t.exhibitionData.books[2].info,href:"Dream /"+2,class:"mt-0 mb-0 -translate-x-36 lg:-translate-x-20 sm:-translate-x-1"},{title:s(()=>[a(n(t.exhibitionData.books[2].title),1)]),_:1},8,["img","info"]),N,o(l,{img:t.dir+"3/cover.jpg",info:t.exhibitionData.books[3].info,href:"Dream /"+3,class:"mt-2 mb-2 translate-x-32 lg:translate-x-20 sm:translate-x-1"},{title:s(()=>[a(n(t.exhibitionData.books[3].title),1)]),_:1},8,["img","info"]),T,o(l,{img:t.dir+"4/cover.jpg",info:t.exhibitionData.books[4].info,href:"Dream /"+4,class:"mt-0 mb-2 -translate-x-28 sm:mb-8 md:-translate-x-20 sm:-translate-x-1"},{title:s(()=>[a(n(t.exhibitionData.books[4].title),1)]),_:1},8,["img","info"])],512)]),i("div",F,[H,i("div",R,null,512)])],64)):v("",!0)}});var K=u(G,[["__scopeId","data-v-3578eadb"]]);export{K as default};
