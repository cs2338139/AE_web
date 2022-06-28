import{a as w}from"./index.becf6c0c.js";import{_ as x}from"./Road.86d9bb96.js";import{R as f}from"./RoadItem.016c18f1.js";import{A as g}from"./ActivityItem.7e2b0d7c.js";import{_ as b}from"./ElementPanel.ffa4c0c6.js";import{_ as A,o as h,c as u,a as d,b as i,w as r,F as v,d as L,e as y,f as s,t as m,n as $,p as D,g as I}from"./index.8fdddabd.js";const _=l=>(D("data-v-5b87083e"),l=l(),I(),l),C={class:"wrap mb-20"},N=s("\u63A8\u5EE3\u6D3B\u52D5"),j=s("\u5152\u7AE5\u7F8E\u5B78\u6D3B\u52D5"),B=s("\u5152\u7AE5\u7F8E\u5B78\u6D3B\u52D5"),S=_(()=>i("div",{class:"text-center text-3xl sm:text-xl"},"\u300C\u5922\u5883\u6F2B\u904A\uFF1A\u7E6A\u672C\u85DD\u8853\u300D\u5C55\u4E4B\u5152\u7AE5\u7F8E\u5B78\u6D3B\u52D5",-1)),V=_(()=>i("div",{class:"max-w-4xl mx-auto mt-8 mb-24 sm:mt-5"},[i("div",{class:"text-base sm:text-sm text-center leading-8"},[s(" \u5831\u540D\u65B9\u5F0F\uFF5C\u63A1\u9810\u7D04\u5831\u540D(8/24-9/21)\uFF0C\u6BCF\u9031\u4E09\u9810\u7D04\u6D3B\u52D5\uFF0C\u5171\u8A085\u5802\uFF0C\u984D\u6EFF\u622A\u6B62"),i("br"),s(" \u4E0A\u8AB2\u5730\u9EDE\uFF5C\u672C\u9928\u7B2C2\u5C55\u89BD\u5EF3\u7FFB\u73A9\u8272\u5F69\u5340\uFF08\u843D\u5730\u7A97\u65C1\uFF09"),i("br"),s(" \u53C3\u8207\u5C0D\u8C61\uFF5C\u5152\u7AE5\u76F8\u95DC\u516C\u76CA\u793E\u5718\u3001\u7D44\u7E54\u3001\u5354\u6703\u3002\u8EAB\u5FC3\u969C\u7919\u8207\u5F31\u52E2\u5718\u9AD4\u512A\u5148\u53D7\u7406\u5831\u540D"),i("br"),s(" \u53C3\u8207\u4EBA\u6578\uFF5C10\u4EBA\uFF08\u9808\u5718\u9AD4\u5831\u540D\uFF09 ")])],-1)),W={class:"flex flex-wrap justify-between xl:justify-around max-w-5xl mx-auto"},k=_(()=>i("div",{class:"absolute w-full bottom-0 -z-50"},[i("div",{class:"bg-bg-0-image h-8"}),i("div",{class:"absolute bg-no-repeat bg-w100% h-40 bg-Boy-image left-72 translate-y-8 w-40"}),i("div",{class:"bg-bg-2-Color h-80"})],-1)),R={data(){return{childrenArtList:[]}},methods:{LoadJson(){w.get("Data/Activities/"+this.$route.params.activityID+"/ChildrenArtList.json").then(l=>{this.childrenArtList=l.data;for(let e=0;e<this.childrenArtList.length;e++){this.childrenArtList[e].index=e;let n=this.childrenArtList[e].date.substring(0,16).replaceAll(".","/");n=n.replace("\uFF1A",":"),this.childrenArtList[e].newDate=new Date(n);let c=this.childrenArtList[e].title.split("\uFF1A");c.length===2?(this.childrenArtList[e].title=c[0]+"\uFF1A",this.childrenArtList[e].title2=c[1]):this.childrenArtList[e].title2=""}this.childrenArtList.sort(function(e,n){return e.newDate<n.newDate?-1:1});let t=3;this.$windowWidth<=this.$sm?t=1:this.$windowWidth<=this.$md||this.$windowWidth<=this.$lg||this.$windowWidth<=this.$xl?t=2:this.$windowWidth<=this.$2xl&&(t=3);var o=t-this.childrenArtList.length%t;o===t&&(o=0);for(var a={index:"0",title:"none",date:"",typeName:"",path:""},p=0;p<o;p++)this.childrenArtList.push(a)}).catch(function(l){console.log(l)})}},created(){this.LoadJson(),this.$refs.element&&this.$refs.element.ReSet()}},z=Object.assign(R,{setup(l){return(t,o)=>(h(),u(v,null,[d(b,{ref:"element"},null,512),i("div",C,[d(x,{class:"mb-5"},{title:r(()=>[B]),default:r(()=>[d(f,null,{default:r(()=>[N]),_:1}),d(f,null,{default:r(()=>[j]),_:1})]),_:1}),S,V,i("div",W,[(h(!0),u(v,null,L(t.childrenArtList,a=>(h(),y(g,{href:"/activities/"+t.$route.params.activityID+"/"+a.index,img:"Data/Activities/"+t.$route.params.activityID+"/"+a.index+"/cover.jpg",typeName:a.typeName,class:$({invisible:a.title==="none"})},{title:r(()=>[s(m(a.title),1)]),title2:r(()=>[s(m(a.title2),1)]),date:r(()=>[s(m(a.date),1)]),_:2},1032,["href","img","typeName","class"]))),256))])]),k],64))}});var G=A(z,[["__scopeId","data-v-5b87083e"]]);export{G as default};
