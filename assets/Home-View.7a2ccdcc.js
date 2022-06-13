import{a as p}from"./index.becf6c0c.js";import{_ as n,o,c as l,a,w as i,b as e,r as h,u as r,R as c,F as f,d as w,e as y,f as m,t as u,p as v,g,h as $,i as L}from"./index.b9409530.js";import{I as N}from"./ImageBox.21515cfa.js";const I={class:"text-base font-normal sm:text-sm sm:my-1 whitespace-nowrap overflow-hidden text-ellipsis"},H={class:"mr-5 sm:mr-2"},S={props:{href:String,target:String},setup(t){return(s,d)=>(o(),l("li",I,[a(r(c),{to:t.href,class:"hover:text-slate-800"},{default:i(()=>[e("span",H,[h(s.$slots,"date",{},void 0,!0)]),e("span",null,[h(s.$slots,"title",{},void 0,!0)])]),_:3},8,["to"])]))}};var C=n(S,[["__scopeId","data-v-3033f0e4"]]);const x=t=>(v("data-v-53e4a98b"),t=t(),g(),t),V={class:"relative w-full h-full md:py-3 text-white"},D=x(()=>e("div",{class:"mb-5"},[e("span",{class:"px-3 py-1 text-xl font-bold bg-white rounded-full sm:text-base text-text-0-Color"},"\u6700\u65B0\u6D88\u606F")],-1)),B={class:"absolute bottom-20 right-0 font-bold hover:scale-110 md:bottom-0"},T=x(()=>e("span",{class:"px-3 py-1 text-base font-bold bg-yellow-400 rounded-full text-text-0-Color sm:text-sm"}," more",-1)),k={data(){return{newsList:[],visibleNewsList:[]}},methods:{LoadJson(){p.get("Data/News/NewsList.json").then(t=>{this.$newsList=t.data,this.newsList=this.$newsList,this.newsList.length>6?this.visibleNewsList=this.newsList.slice(this.newsList.length-6,this.newsList.length).reverse():this.visibleNewsList=this.newsList.slice().reverse()}).catch(function(t){console.log(t)})}},created(){this.$newList===null?this.LoadJson():this._newsList=this.$newsList}},F=Object.assign(k,{setup(t){return(s,d)=>(o(),l("div",V,[D,e("ul",null,[(o(!0),l(f,null,w(s.visibleNewsList,(_,b)=>(o(),y(C,{href:"/news/"+(s.newsList.length-1-b)},{date:i(()=>[m(u(_.date),1)]),title:i(()=>[m(u(_.title),1)]),_:2},1032,["href"]))),256))]),e("div",B,[a(r(c),{to:"/news"},{default:i(()=>[T]),_:1})])]))}});var j=n(F,[["__scopeId","data-v-53e4a98b"]]);const J=t=>(v("data-v-2f6c64e2"),t=t(),g(),t),R={class:"relative w-full h-full text-white"},q=$('<div class="mb-5" data-v-2f6c64e2><span class="px-3 py-1 text-xl font-bold bg-white rounded-full sm:text-base text-text-0-Color" data-v-2f6c64e2>\u53C3\u89C0\u8CC7\u8A0A</span></div><div data-v-2f6c64e2><div class="font-bold sm:text-sm sm:my-1" data-v-2f6c64e2>\u514D\u8CBB\u5165\u5834</div><div data-v-2f6c64e2>-</div><div class="text-base font-normal sm:text-sm sm:my-1" data-v-2f6c64e2>\u5468\u4E00\u4F11\u9928</div><div class="text-base font-normal sm:text-sm sm:my-1" data-v-2f6c64e2>\u9031\u4E8C\u81F3\u9031\u65E5 9:00-17:00</div><div class="text-base font-normal sm:text-sm sm:my-1" data-v-2f6c64e2>\u570B\u5B9A\u5047\u65E5\u7167\u5E38\u958B\u9928</div></div>',2),G={class:"font-bold absolute bottom-20 right-0 hover:scale-110 md:bottom-2"},O=J(()=>e("span",{class:"px-3 py-1 text-base font-bold bg-yellow-400 rounded-full text-text-0-Color sm:text-sm"}," more",-1)),z={setup(t){return(s,d)=>(o(),l("div",R,[q,e("div",G,[a(r(c),{to:"/vistInformation"},{default:i(()=>[O]),_:1})])]))}};var E=n(z,[["__scopeId","data-v-2f6c64e2"]]);const M={class:"wrap"},Y={class:"mb-24 px-20 lg:mb-14 md:px-10"},A={class:"flex flex-row h-300px md:h-480px md:flex-col px-20 md:px-10",ref:"target"},K={class:"w-2/3 h-full pt-3 pr-10 md:border-white md:border-b md:w-full md:pr-0 md:py-2 md:h-1/2"},P={class:"w-1/3 h-full pt-3 pl-10 md:float-left md:w-full md:pl-0 md:h-1/2 md:pt-5"},Q={class:"absolute w-full bottom-0 -z-50"},U=e("div",{class:"bg-bg-1-image h-8"},null,-1),W={class:"bg-bg-1-Color h-96",ref:"bg"},X={data(){return{homeData:null}},methods:{LoadJson(){p.get("Data/Home/Home.json").then(t=>{this.homeData=t.data}).catch(t=>{console.log(t),this.ToNotFound()})},GetTargetHeight(){const t=document.body.scrollHeight-(this.$refs.target.getBoundingClientRect().top+window.scrollY),s=this.$refs.bg;s.style.height=t+"px",console.log(s.style.height)},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},created(){this.LoadJson()},updated(){setTimeout(()=>{this.GetTargetHeight()},200)}},st=Object.assign(X,{setup(t){return(s,d)=>s.homeData!=null?(o(),l(f,{key:0},[e("div",null,[e("div",M,[e("div",Y,[a(N,{path:"Home",imgStyle:"w-full aspect-video",img:s.homeData.imgs,time:3e3,auto:!0},null,8,["img"])]),e("div",A,[e("div",K,[a(j)]),e("div",P,[a(E)])],512)])]),e("div",Q,[U,e("div",W,null,512)])],64)):L("",!0)}});export{st as default};
