import{a as p}from"./index.becf6c0c.js";import{_ as l,o,c as d,a as i,w as n,b as e,r as c,u as r,R as m,F as b,d as x,e as $,f as h,t as u,p as f,g as v,h as y,i as L}from"./index.360b48c7.js";import{I}from"./ImageBox.721be244.js";const N={class:"text-base font-normal sm:text-sm sm:my-1"},S={class:"mr-5 sm:mr-2"},D={props:{href:String,target:String},setup(t){return(s,a)=>(o(),d("li",N,[i(r(m),{to:t.href,class:"hover:text-slate-400"},{default:n(()=>[e("span",S,[c(s.$slots,"date",{},void 0,!0)]),e("span",null,[c(s.$slots,"title",{},void 0,!0)])]),_:3},8,["to"])]))}};var V=l(D,[["__scopeId","data-v-2b8fecee"]]);const g=t=>(f("data-v-40efd5ca"),t=t(),v(),t),H={class:"relative w-full h-full md:py-3"},k=g(()=>e("div",{class:"mb-5 font-bold text-2xl sm:text-base"},"\u6700\u65B0\u6D88\u606F",-1)),B={class:"mb-5"},F={class:"font-bold absolute bottom-0 right-0 sm:text-sm"},j=g(()=>e("span",null," more\uFF1E",-1)),J={data(){return{newsList:[]}},methods:{LoadJson(){p.get("Data/News/NewsList.json").then(t=>{this.$newsList=t.data,this.newsList=this.$newsList}).catch(function(t){console.log(t)})}},created(){this.$newList===null?this.LoadJson():this._newsList=this.$newsList}},q=Object.assign(J,{setup(t){return(s,a)=>(o(),d("div",H,[k,e("ul",B,[(o(!0),d(b,null,x(s.newsList.slice(s.newsList.length-6,s.newsList.length).reverse(),(_,w)=>(o(),$(V,{href:"/news/"+(s.newsList.length-1-w)},{date:n(()=>[h(u(_.date),1)]),title:n(()=>[h(u(_.title),1)]),_:2},1032,["href"]))),256))]),e("div",F,[i(r(m),{to:"/news",class:"hover:text-slate-400"},{default:n(()=>[j]),_:1})])]))}});var T=l(q,[["__scopeId","data-v-40efd5ca"]]);const C=t=>(f("data-v-6242f961"),t=t(),v(),t),O={class:"relative w-full h-full"},R=y('<div class="font-bold text-2xl sm:text-base sm:my-1" data-v-6242f961>\u53C3\u89C0\u8CC7\u8A0A</div><div data-v-6242f961>-</div><div class="font-bold sm:text-sm sm:my-1" data-v-6242f961>\u514D\u8CBB\u5165\u5834</div><div class="text-base font-normal sm:text-sm sm:my-1" data-v-6242f961>\u5468\u4E00\u4F11\u9928</div><div class="text-base font-normal sm:text-sm sm:my-1" data-v-6242f961>\u9031\u4E8C\u81F3\u9031\u65E5 9:00-17:00</div><div class="text-base font-normal sm:text-sm sm:my-1" data-v-6242f961>\u570B\u5B9A\u5047\u65E5\u7167\u5E38\u958B\u9928</div>',6),E={class:"font-bold absolute bottom-0 right-0 sm:text-sm"},M=C(()=>e("span",null," more\uFF1E",-1)),W={setup(t){return(s,a)=>(o(),d("div",O,[R,e("div",E,[i(r(m),{to:"/vistInformation",class:"hover:text-slate-400"},{default:n(()=>[M]),_:1})])]))}};var z=l(W,[["__scopeId","data-v-6242f961"]]);const A={key:0,class:"wrap"},G={class:"mb-10"},K={class:"mb-5 h-300px md:h-480px"},P={class:"float-left w-2/3 h-full pt-3 pr-10 border-r border-black md:border-r-0 md:border-t md:border-b md:w-full md:pr-0 md:py-2 md:h-1/2"},Q={class:"float-right w-1/3 h-full pt-3 pl-10 md:float-left md:w-full md:pl-0 md:h-1/2 md:pt-5"},U={data(){return{homeData:null,imgs:null}},methods:{LoadJson(){p.get("Data/Home/Home.json").then(t=>{if(this.homeData=t.data,this.$windowWidth>this.$md)this.imgs=this.homeData.imgs;else{let s=[];for(let a=0;a<this.homeData.phoneimgs.length;a++)s.push("phone/"+this.homeData.phoneimgs[a]);this.imgs=s}console.log(this.imgs)}).catch(t=>{console.log(t),this.ToNotFound()})},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},created(){this.LoadJson()}},tt=Object.assign(U,{setup(t){return(s,a)=>s.homeData!=null?(o(),d("div",A,[e("div",G,[i(I,{path:"Home",imgStyle:"w-full aspect-homeimage md:aspect-square",img:s.imgs,time:3e3,auto:!0},null,8,["img"])]),e("div",K,[e("div",P,[i(T)]),e("div",Q,[i(z)])])])):L("",!0)}});export{tt as default};
