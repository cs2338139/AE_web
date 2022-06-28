import{a as p}from"./index.becf6c0c.js";import{_ as g}from"./Road.db9572a2.js";import{R as b}from"./RoadItem.742cfedd.js";import{_ as k}from"./RoadItemRouter.394ba09e.js";import{I as x}from"./ImageBox.1b2a6ab5.js";import{_ as v}from"./ElementPanel.68a41380.js";import{_ as D,o as n,c as h,a as l,b as o,w as c,t as i,n as f,F as d,d as _,p as $,g as w,f as u}from"./index.fe5d838b.js";/* empty css                                                       *//* empty css                                                     */const I=e=>($("data-v-a772d34e"),e=e(),w(),e),y={class:"wrap"},N=u("\u5C55\u89BD\u4ECB\u7D39"),B={class:"gap-x-16 grid grid-cols-5 mb-20"},C={class:"xl:col-end-6 col-start-1 col-end-4"},S={class:"xl:col-start-1 col-start-4 col-end-6"},E={class:"sm:text-lg text-text-1-Color text-3xl"},F={class:"sm:text-base text-text-1-Color text-xl"},H={class:"mt-3"},L={class:"sm:text-sm mb-3 text-xl"},R={class:"mt-8 sm:text-xs"},T={class:"-z-50 absolute bottom-0 w-full"},V=I(()=>o("div",{class:"bg-bg-0-image h-8"},null,-1)),G={class:"bg-bg-2-Color h-56",ref:"bg"},J={data(){return{exhibitionsName:null,bookData:{title:"",title2:"",author:[],imgs:[]},element:null,interval:null}},methods:{LoadJson(){let e=this.$route.params.exhibitionID,t=this.$route.params.bookID;e&&t&&p.get("Data/Exhibitions/"+e+"/"+t+"/BookContent.json").then(a=>{this.bookData=a.data,this.SwitchElement(e,t)}).catch(a=>{console.log(a),this.ToNotFound()})},SwitchElement(e,t){switch(e){case"GoodNight":switch(this.exhibitionsName="\u665A\u5B89\u5C4B",t){case"0":this.element="Rabbit";break;case"1":this.element="Spaceship";break;case"2":this.element="Horse";break;case"3":this.element="Robbers";break;case"4":this.element="Bear";break;case"5":this.element="Moon";break}break;case"Dream":switch(this.exhibitionsName="\u5922\u5883\u623F",t){case"0":this.element="Ghost";break;case"1":this.element="Leaf";break;case"2":this.element="Leaf";break;case"3":this.element="Truck";break;case"4":this.element="Coral";break}break}},GetTargetHeight(e,t,a){const r=Math.floor(document.body.scrollHeight-(e.getBoundingClientRect().top+window.scrollY));if(t[0].main.clientHeight!=r){for(let s=0;s<t.length;s++)t[s].main.style.height=r+t[s].offset+"px";for(let s=0;s<a.length;s++){let m;a[s].offset!=0?m=a[s].main.clientHeight/a[s].offset:m=0,a[s].main.style.bottom=r-m+"px"}this.$refs.element&&this.$refs.element.ReSet()}},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"LoadJson"},created(){this.LoadJson()},mounted(){let e=this.$refs.target,t=[{main:this.$refs.bg,offset:0}],a=[];this.interval=setInterval(()=>{this.bookData.author.length===2&&(e=this.$refs.target[1],this.GetTargetHeight(e,t,a))},100)},unmounted(){clearInterval(this.interval)}},M=Object.assign(J,{setup(e){return(t,a)=>(n(),h(d,null,[l(v,{ref_key:"element",ref:element},null,512),o("div",y,[l(g,{class:"mb-10"},{default:c(()=>[l(b,null,{default:c(()=>[N]),_:1}),l(k,{href:"/exhibitions/"+t.$route.params.exhibitionID},{default:c(()=>[u(i(t.exhibitionsName),1)]),_:1},8,["href"]),l(b,null,{default:c(()=>[u(i(t.bookData.title),1)]),_:1})]),_:1}),o("div",B,[o("div",C,[l(x,{path:"Exhibitions/"+t.$route.params.exhibitionID+"/"+t.$route.params.bookID,img:t.bookData.imgs,time:3e3,auto:!1},null,8,["path","img"])]),o("div",S,[o("div",E,i(t.bookData.title),1),o("div",{class:f(["image",t.element])},null,2),o("div",F,i(t.bookData.title2),1),o("div",H,[(n(!0),h(d,null,_(t.bookData.author,r=>(n(),h("div",{class:"mb-10",ref_for:!0,ref:"target"},[o("div",L,i(r.author),1),(n(!0),h(d,null,_(r.info,s=>(n(),h("div",{class:f([{my:s===""},"contentFont"])},i(s),3))),256)),o("div",R,i(t.bookData.copyright),1)],512))),256))])])])]),o("div",T,[V,o("div",G,null,512)])],64))}});var U=D(M,[["__scopeId","data-v-a772d34e"]]);export{U as default};
