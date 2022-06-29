import{a as u}from"./index.becf6c0c.js";import{_ as p}from"./Road.0979e200.js";import{R as c}from"./RoadItem.aafb1201.js";import{E as d}from"./ExhibitionItem.f8de6b0d.js";import{_ as v}from"./ElementPanel.cb1dbf5d.js";import{_ as x,o as m,c as f,a as l,b as i,w as o,F as _,d as w,n as D,t as h,f as r,p as k,g as C}from"./index.889bca5f.js";const e=s=>(k("data-v-cd8cf2d6"),s=s(),C(),s),N={class:"wrap"},S=r("\u5C55\u89BD\u4ECB\u7D39"),E=r("\u665A\u5B89\u5C4B"),G=r("\u665A\u5B89\u5C4B"),y={class:"w-full mb-20 overflow-hidden px-14 aspect-video lg:px-0"},I=["src"],j={class:"mb-20 text-center"},L={class:"mb-6 sm:mb-10 sm:px-1"},$={ref:"target",class:"relative overflow-x-hidden"},R={class:"mt-32 -mb-10 sm:mb-0 -translate-x-72 xl:-translate-x-52 lg:-translate-x-20 sm:-translate-x-1"},B=e(()=>i("div",{class:"w-11 h-14 bg-no-repeat bg-w100% bg-Rabbit-1-image absolute left-2 top-14"},null,-1)),H=e(()=>i("div",{class:"w-32 h-20 bg-no-repeat bg-w100% bg-Rabbit-2-image absolute -right-12 bottom-12 sm:hidden"},null,-1)),V=e(()=>i("div",{class:"w-20 h-32 bg-no-repeat sm:bg-h100% bg-w100% bg-arrow-1-image mx-auto sm:h-20 sm:translate-x-14"},null,-1)),F={class:"mt-0 mb-2 translate-x-24 sm:translate-x-1"},T=e(()=>i("div",{class:"w-24 h-20 bg-no-repeat bg-w100% bg-Spaceship-image absolute right-10 top-5 sm:right-5"},null,-1)),z=e(()=>i("div",{class:"w-36 h-32 bg-no-repeat sm:bg-h100% bg-w100% bg-arrow-2-image mx-auto -translate-x-12 sm:h-20 sm:translate-x-0"},null,-1)),J={class:"mt-0 mb-0 -translate-x-36 lg:-translate-x-20 sm:-translate-x-1"},M=e(()=>i("div",{class:"w-24 h-24 bg-no-repeat bg-w100% bg-Horse-image absolute left-28 -bottom-8 sm:hidden"},null,-1)),O=e(()=>i("div",{class:"w-24 h-28 bg-no-repeat bg-h100% bg-arrow-3-image mx-auto -translate-x-16 sm:h-20 sm:-translate-x-0 sm:rotate-12"},null,-1)),Y={class:"mt-2 mb-2 translate-x-32 lg:translate-x-20 sm:translate-x-1"},q=e(()=>i("div",{class:"w-32 h-24 bg-no-repeat bg-w100% bg-Robbers-image absolute top-4 right-2 rotate-12 sm:right-0"},null,-1)),A=e(()=>i("div",{class:"w-36 h-32 bg-no-repeat sm:bg-h100% bg-w100% bg-arrow-4-image mx-auto sm:h-20 sm:translate-x-14 sm:-rotate-12"},null,-1)),K={class:"mt-0 mb-2 -translate-x-28 sm:mb-8 md:-translate-x-20 sm:-translate-x-1"},P=e(()=>i("div",{class:"w-16 h-20 bg-no-repeat bg-w100% bg-Bear-image absolute top-4 right-2 rotate-12"},null,-1)),Q=e(()=>i("div",{class:"w-24 h-24 bg-no-repeat bg-w100% bg-Boy-image rotate-270 absolute -left-12 bottom-3 sm:hidden"},null,-1)),U=e(()=>i("div",{class:"w-36 h-32 bg-no-repeat sm:bg-h100% bg-w100% bg-arrow-5-image mx-auto sm:h-20 sm:rotate-45"},null,-1)),W={class:"mt-0 mb-2 sm:translate-x-1"},X=e(()=>i("div",{class:"w-32 h-32 bg-no-repeat bg-w100% bg-arrow-6-image absolute -top-8 right-16 sm:hidden"},null,-1)),Z={class:"absolute bottom-0 w-full -z-50"},tt=e(()=>i("div",{class:"h-8 bg-bg-0-image"},null,-1)),it={class:"bg-gradient-to-b from-bg-2-Color via-navColor to-black",ref:"bg"},ot={data(){return{dir:"Data/Exhibitions/"+this.$route.params.exhibitionID+"/",exhibitionData:{image:"",info:{cn:[],en:[]},books:[{title:"",info:[]},{title:"",info:[]},{title:"",info:[]},{title:"",info:[]},{title:"",info:[]},{title:"",info:[]}]},infoState:"English",info:[],interval:null}},methods:{LoadJson(){u.get(this.dir+"ExhibitionList.json").then(s=>{this.exhibitionData=s.data,this.info=this.exhibitionData.info.cn}).catch(function(s){console.log(s)})},GetTargetHeight(s,t,n){const g=Math.floor(document.body.scrollHeight-(s.getBoundingClientRect().top+window.scrollY));if(t[0].main.clientHeight!=g){for(let a=0;a<t.length;a++)t[a].main.style.height=g+t[a].offset+"px";for(let a=0;a<n.length;a++){let b;n[a].offset!=0?b=n[a].main.clientHeight/n[a].offset:b=0,n[a].main.style.bottom=g-b+"px"}this.$refs.element&&this.$refs.element.ReSet()}},ChangeLang(){this.infoState==="English"?(this.infoState="\u4E2D\u6587",this.info=this.exhibitionData.info.en):(this.infoState="English",this.info=this.exhibitionData.info.cn)}},created(){this.LoadJson()},mounted(){let s=this.$refs.target,t=[{main:this.$refs.bg,offset:15}],n=[];this.interval=setInterval(()=>{this.GetTargetHeight(s,t,n)},100)},unmounted(){clearInterval(this.interval)}},et=Object.assign(ot,{setup(s){return(t,n)=>(m(),f(_,null,[l(v,{ref:"element"},null,512),i("div",N,[l(p,{class:"mb-10"},{title:o(()=>[G]),default:o(()=>[l(c,null,{default:o(()=>[S]),_:1}),l(c,null,{default:o(()=>[E]),_:1})]),_:1}),i("div",y,[i("img",{src:t.dir+t.exhibitionData.image},null,8,I)]),i("div",j,[i("div",L,[(m(!0),f(_,null,w(t.info,g=>(m(),f("div",{class:D([{my:g===""},"contentFont"])},h(g),3))),256))]),i("button",{class:"px-5 py-1 rounded-full text-bg-0-Color bg-bg-1-Color hover:bg-text-1-Color",onClick:n[0]||(n[0]=g=>t.ChangeLang())},h(t.infoState),1)]),i("div",$,[i("div",R,[l(d,{img:t.dir+"0/cover.jpg",info:t.exhibitionData.books[0].info,href:"GoodNight/"+0},{title:o(()=>[r(h(t.exhibitionData.books[0].title),1)]),default:o(()=>[B,H]),_:1},8,["img","info"])]),V,i("div",F,[l(d,{img:t.dir+"1/cover.jpg",info:t.exhibitionData.books[1].info,href:"GoodNight/"+1},{title:o(()=>[r(h(t.exhibitionData.books[1].title),1)]),default:o(()=>[T]),_:1},8,["img","info"])]),z,i("div",J,[l(d,{img:t.dir+"2/cover.jpg",info:t.exhibitionData.books[2].info,href:"GoodNight/"+2},{title:o(()=>[r(h(t.exhibitionData.books[2].title),1)]),default:o(()=>[M]),_:1},8,["img","info"])]),O,i("div",Y,[l(d,{img:t.dir+"3/cover.jpg",info:t.exhibitionData.books[3].info,href:"GoodNight/"+3},{title:o(()=>[r(h(t.exhibitionData.books[3].title),1)]),default:o(()=>[q]),_:1},8,["img","info"])]),A,i("div",K,[l(d,{img:t.dir+"4/cover.jpg",info:t.exhibitionData.books[4].info,href:"GoodNight/"+4},{title:o(()=>[r(h(t.exhibitionData.books[4].title),1)]),default:o(()=>[P,Q]),_:1},8,["img","info"])]),U,i("div",W,[l(d,{img:t.dir+"5/cover.jpg",info:t.exhibitionData.books[5].info,href:"GoodNight/"+5},{title:o(()=>[r(h(t.exhibitionData.books[5].title),1)]),default:o(()=>[X]),_:1},8,["img","info"])])],512)]),i("div",Z,[tt,i("div",it,null,512)])],64))}});var gt=x(et,[["__scopeId","data-v-cd8cf2d6"]]);export{gt as default};