import{a as p}from"./index.becf6c0c.js";import{_}from"./Road.b42b48b6.js";import{R as h}from"./RoadItem.06f6aeb2.js";import{_ as g}from"./RoadItemRouter.ab4b2741.js";import{I as $}from"./ImageBox.54c875f6.js";import{_ as w}from"./ElementPanel.7137ad60.js";import{_ as v,i as y,o as n,c as m,a as o,b as l,w as u,F as r,d as f,k as C,f as d,t as c}from"./index.6644ef1c.js";/* empty css                                                       */const I={class:"wrap"},D=d("\u6D3B\u52D5\u82B1\u7D6E"),x={class:"flex flex-wrap justify-between lg:justify-around"},E=["onClick"],k=["src"],N={class:"mb-10 w-80 bg-slate-600 invisible"},M={ref:"Modal",class:"fixed bottom-0 left-0 z-50 hidden w-full h-screen bg-black-05"},V={class:"absolute top-0 bottom-0 left-0 right-0 max-w-5xl m-auto aspect-image"},j={data(){return{albumName:null,albumEventData:{title:"",imgsCount:0},imgs:[],fixedCount:0,path:"Albums/"+this.$route.params.albumID+"/"+this.$route.params.albumEventID}},methods:{LoadJson(){let a=this.$route.params.albumID,t=this.$route.params.albumEventID;a&&t&&p.get("Data/Albums/"+a+"/"+t+"/albumEventContent.json").then(i=>{this.albumEventData=i.data;let e=4;this.$windowWidth<=this.$sm?e=2:this.$windowWidth<=this.$md||this.$windowWidth<=this.$lg||this.$windowWidth<=this.$xl?e=3:this.$windowWidth<=this.$2xl&&(e=4),this.fixedCount=e-this.albumEventData.imgsCount%e,this.fixedCount===e&&(this.fixedCount=0);for(let s=1;s<=this.albumEventData.imgsCount;s++)this.imgs.push("img ("+s+").jpg");switch(a){case"Records":this.albumName="\u6D3B\u52D5\u7D00\u9304";break;case"PreExhibitions":this.albumName="\u5C55\u89BD\u82B1\u7D6E";break}}).catch(i=>{console.log(i),this.ToNotFound()})},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})},openModal(a){this.$refs.Modal.style.display="block",document.body.style.overflow="hidden",this.$emitter.emit("emitIndex",a)},closeModal(){this.$refs.Modal.style.display="none",document.body.style.overflow="scroll"}},watch:{$route:"LoadJson"},created(){this.LoadJson()},mounted(){},updated(){this.$refs.element&&this.$refs.element.ReSet()},unmounted(){document.body.style.overflow="scroll"}},A=Object.assign(j,{setup(a){return(t,i)=>{const e=y("ion-icon");return n(),m(r,null,[o(w,{ref:"element"},null,512),l("div",I,[o(_,{class:"mb-10"},{default:u(()=>[o(h,null,{default:u(()=>[D]),_:1}),o(g,{href:"/Albums/"+t.$route.params.albumID},{default:u(()=>[d(c(t.albumName),1)]),_:1},8,["href"]),o(h,null,{default:u(()=>[d(c(t.albumEventData.title),1)]),_:1})]),_:1}),l("div",x,[(n(!0),m(r,null,f(t.imgs,(s,b)=>(n(),m("button",{onClick:F=>t.openModal(b)},[l("img",{src:"Data/"+t.path+"/Image/"+s,class:"mb-10 w-80 lg:w-60 md:w-40"},null,8,k)],8,E))),256)),t.fixedCount>0?(n(!0),m(r,{key:0},f(t.fixedCount,s=>(n(),m("div",N))),256)):C("",!0)]),l("div",M,[l("div",V,[l("button",{onClick:i[0]||(i[0]=(...s)=>t.closeModal&&t.closeModal(...s)),class:"absolute right-5 top-5 z-50"},[o(e,{name:"close-outline"})]),o($,{path:t.path,img:t.imgs,time:3e3,auto:!1,dot:!1,emitIndex:t.emitIndex},null,8,["path","img","emitIndex"])])],512)])],64)}}});var S=v(A,[["__scopeId","data-v-56083eb0"]]);export{S as default};
