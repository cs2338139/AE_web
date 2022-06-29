import{a as p}from"./index.becf6c0c.js";import{_ as g}from"./Road.a4cb62ad.js";import{R as u}from"./RoadItem.5511d9a6.js";import{_ as k}from"./RoadItemRouter.0a881444.js";import{I as x}from"./ImageBox.4fea961d.js";import{_ as v}from"./ElementPanel.6817a174.js";import{_ as D,o as n,c as h,a as r,b as o,w as c,t as i,n as f,F as b,d as _,p as $,g as w,f as d}from"./index.dc529616.js";/* empty css                                                       */const I=e=>($("data-v-76721df6"),e=e(),w(),e),j={class:"wrap"},O=d("\u5C55\u89BD\u4ECB\u7D39"),N={class:"gap-x-16 grid grid-cols-5 mb-20"},y={class:"xl:col-end-6 col-start-1 col-end-4"},B={class:"xl:col-start-1 col-start-4 col-end-6"},C={class:"sm:text-lg text-text-1-Color text-3xl"},S={class:"sm:text-base text-text-1-Color text-xl"},E={class:"mt-3"},F={class:"sm:text-sm mb-3 text-xl"},H={class:"mt-8 sm:text-xs"},L={class:"-z-50 absolute bottom-0 w-full"},R=I(()=>o("div",{class:"bg-bg-0-image h-8"},null,-1)),T={class:"bg-bg-2-Color h-56",ref:"bg"},V={data(){return{exhibitionsName:null,bookData:{title:"",title2:"",author:[],imgs:[]},elementObject:null,interval:null}},methods:{LoadJson(){let e=this.$route.params.exhibitionID,t=this.$route.params.bookID;e&&t&&p.get("Data/Exhibitions/"+e+"/"+t+"/BookContent.json").then(a=>{this.bookData=a.data,this.SwitchElement(e,t)}).catch(a=>{console.log(a),this.ToNotFound()})},SwitchElement(e,t){switch(e){case"GoodNight":switch(this.exhibitionsName="\u665A\u5B89\u5C4B",t){case"0":this.elemenObjectt="Rabbit";break;case"1":this.elementObject="Spaceship";break;case"2":this.elementObject="Horse";break;case"3":this.elementObject="Robbers";break;case"4":this.elementObject="Bear";break;case"5":this.elementObject="Moon";break}break;case"Dream":switch(this.exhibitionsName="\u5922\u5883\u623F",t){case"0":this.elementObject="Ghost";break;case"1":this.elementObject="Leaf";break;case"2":this.elementObject="Leaf";break;case"3":this.elementObject="Truck";break;case"4":this.elementObject="Coral";break}break}},GetTargetHeight(e,t,a){const l=Math.floor(document.body.scrollHeight-(e.getBoundingClientRect().top+window.scrollY));if(t[0].main.clientHeight!=l){for(let s=0;s<t.length;s++)t[s].main.style.height=l+t[s].offset+"px";for(let s=0;s<a.length;s++){let m;a[s].offset!=0?m=a[s].main.clientHeight/a[s].offset:m=0,a[s].main.style.bottom=l-m+"px"}this.$refs.element&&this.$refs.element.ReSet()}},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"LoadJson"},created(){this.LoadJson()},mounted(){let e=this.$refs.target,t=[{main:this.$refs.bg,offset:0}],a=[];this.interval=setInterval(()=>{this.bookData.author.length===2&&(e=this.$refs.target[1],this.GetTargetHeight(e,t,a))},100)},unmounted(){clearInterval(this.interval)}},G=Object.assign(V,{setup(e){return(t,a)=>(n(),h(b,null,[r(v,{ref:"element"},null,512),o("div",j,[r(g,{class:"mb-10"},{default:c(()=>[r(u,null,{default:c(()=>[O]),_:1}),r(k,{href:"/exhibitions/"+t.$route.params.exhibitionID},{default:c(()=>[d(i(t.exhibitionsName),1)]),_:1},8,["href"]),r(u,null,{default:c(()=>[d(i(t.bookData.title),1)]),_:1})]),_:1}),o("div",N,[o("div",y,[r(x,{path:"Exhibitions/"+t.$route.params.exhibitionID+"/"+t.$route.params.bookID,img:t.bookData.imgs,time:3e3,auto:!1},null,8,["path","img"])]),o("div",B,[o("div",C,i(t.bookData.title),1),o("div",{class:f(["image",t.elementObject])},null,2),o("div",S,i(t.bookData.title2),1),o("div",E,[(n(!0),h(b,null,_(t.bookData.author,l=>(n(),h("div",{class:"mb-10",ref_for:!0,ref:"target"},[o("div",F,i(l.author),1),(n(!0),h(b,null,_(l.info,s=>(n(),h("div",{class:f([{my:s===""},"contentFont"])},i(s),3))),256)),o("div",H,i(t.bookData.copyright),1)],512))),256))])])])]),o("div",L,[R,o("div",T,null,512)])],64))}});var Q=D(G,[["__scopeId","data-v-76721df6"]]);export{Q as default};
