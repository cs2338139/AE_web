import{a as u}from"./index.becf6c0c.js";import{_ as x}from"./Road.a6ab1779.js";import{R as _}from"./RoadItem.0c2de4b0.js";import{A as v}from"./ActivityItem.d819baee.js";import{_ as g}from"./ElementPanel.cedc16f4.js";import{o as m,c as w,a as h,b as s,w as o,F as f,d as b,e as k,f as a,t as c,n as L}from"./index.8ff17dab.js";const S={class:"wrap mb-20"},$=a("\u63A8\u5EE3\u6D3B\u52D5"),y=a("\u5DE5\u4F5C\u574A"),D=a("\u5DE5\u4F5C\u574A"),A=s("div",{class:"text-center text-3xl sm:text-xl"},"\u300C\u5922\u5883\u6F2B\u904A\uFF1A\u7E6A\u672C\u85DD\u8853\u300D\u5C55\u4E4B\u5DE5\u4F5C\u574A",-1),N=s("div",{class:"max-w-4xl mx-auto mt-8 mb-24 sm:mt-5"},[s("div",{class:"text-lg sm:text-sm text-center leading-6"},[s("div",{class:"mb-3"}," \u9019\u6B21\u5E36\u4F86\u7684\u5DE5\u4F5C\u574A\u5F9E10\u672C\u7E6A\u672C\u767C\u60F3\uFF0C\u5206\u6210\u5206\u7A0B\u662F\u300C\u7E6A\u672C\u8207\u4EBA\u6587\u300D\u3001\u300C\u79D1\u5B78\u8207\u5275\u9020\u300D\u5169\u500B\u4E3B\u8EF8\u3002\u7E6A\u672C\u8207\u4EBA\u6587\u7531\u6D41\u5BD3\u5DE5\u4F5C\u5BA4\u8207\u679C\u5BE6\u73A9\u6A02\u751F\u6D3B\u5BE6\u9A57\u5BA4\u5169\u500B\u6559\u80B2\u63A8\u5EE3\u5718\u968A\uFF0C \u4EE5\u300C\u81EA\u7136\u63A5\u89F8\u300D\u3001\u300C\u7AE5\u8DA3\u624B\u4F5C\u300D\u70BA\u8AB2\u7A0B\u7CBE\u795E\uFF0C\u5E36\u9818\u4EE5\u81EA\u7136\u754C\u7684\u6750\u6599\u6216\u89C0\u5BDF\uFF0C\u5E36\u9818\u5B69\u5B50\u8207\u5927\u4EBA\u5011\u9032\u884C\u624B\u4F5C\u8AB2\u7A0B\u3002 "),s("div",null,"\u300C\u79D1\u5B78\u8207\u5275\u9020\u300D\u5247\u7531\u5149\u8A66\u6240\u8207Pixelight\u4EE5\u300C\u93E1\u9762\u53CD\u5C04\u300D \u3001 \u300C\u96FB\u8DEF\u96FB\u5B78\u300D\u3001\u300C\u865B\u64EC\u5BE6\u5883\u300D\u70BA\u8A2D\u8A08\u7CBE\u795E\uFF0C\u5E36\u9818\u5B69\u5B50\u8207\u5927\u4EBA\u5011\u9032\u884C\u79D1\u5B78\u8207AR\u3001VR\u7684\u5947\u5999\u8996\u89BA\u9AD4\u9A57\u3002")])],-1),W={class:"flex flex-wrap justify-between xl:justify-around max-w-5xl mx-auto"},j=s("div",{class:"absolute w-full bottom-0 -z-10"},[s("div",{class:"bg-bg-0-image h-8"}),s("div",{class:"absolute bg-no-repeat bg-w100% h-40 bg-Boy-image left-72 translate-y-8 w-40"}),s("div",{class:"bg-bg-2-Color h-80"})],-1),B={data(){return{workShopList:[]}},methods:{LoadJson(){u.get("Data/Activities/"+this.$route.params.activityID+"/WorkShopList.json").then(r=>{this.workShopList=r.data;for(let e=0;e<this.workShopList.length;e++){this.workShopList[e].index=e;let l=this.workShopList[e].date.substring(0,16).replaceAll(".","/");l=l.replace("\uFF1A",":"),this.workShopList[e].newDate=new Date(l);let d=this.workShopList[e].title.split("\uFF1A");d.length===2?(this.workShopList[e].title=d[0]+"\uFF1A",this.workShopList[e].title2=d[1]):this.workShopList[e].title2=""}this.workShopList.sort(function(e,l){return e.newDate<l.newDate?-1:1});let t=3;this.$windowWidth<=this.$sm?t=1:this.$windowWidth<=this.$md||this.$windowWidth<=this.$lg||this.$windowWidth<=this.$xl?t=2:this.$windowWidth<=this.$2xl&&(t=3);var n=t-this.workShopList.length%t;n===t&&(n=0);for(var i={index:"0",index:"0",title:"none",date:"",typeName:"",path:""},p=0;p<n;p++)this.workShopList.push(i)}).catch(function(r){console.log(r)})}},created(){this.LoadJson()},mounted(){},updated(){this.$refs.element&&this.$refs.element.ReSet()}},J=Object.assign(B,{setup(r){return(t,n)=>(m(),w(f,null,[h(g,{ref:"element"},null,512),s("div",S,[h(x,{class:"mb-5"},{title:o(()=>[D]),default:o(()=>[h(_,null,{default:o(()=>[$]),_:1}),h(_,null,{default:o(()=>[y]),_:1})]),_:1}),A,N,s("div",W,[(m(!0),w(f,null,b(t.workShopList,i=>(m(),k(v,{href:"/activities/"+t.$route.params.activityID+"/"+i.index,img:"Data/Activities/"+t.$route.params.activityID+"/"+i.index+"/cover.jpg",typeName:i.typeName,class:L({invisible:i.title==="none"})},{title:o(()=>[a(c(i.title),1)]),title2:o(()=>[a(c(i.title2),1)]),date:o(()=>[a(c(i.date),1)]),_:2},1032,["href","img","typeName","class"]))),256))])]),j],64))}});export{J as default};
