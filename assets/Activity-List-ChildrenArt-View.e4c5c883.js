import{a as u}from"./index.becf6c0c.js";import{_ as p}from"./Road.2d0150fe.js";import{R as _}from"./RoadItem.3a29a4fb.js";import{A as v}from"./ActivityItem.d44319b2.js";import{o as d,c as f,a as h,w as i,b as m,F as w,d as x,e as A,f as a,t as c,n as g}from"./index.3f4c0492.js";const y={class:"wrap"},L=a("\u63A8\u5EE3\u6D3B\u52D5"),$=a("\u5152\u7AE5\u7F8E\u5B78\u6D3B\u52D5"),b=a("\u5152\u7AE5\u7F8E\u5B78\u6D3B\u52D5"),N=m("div",{class:"max-w-3xl p-5 mx-auto mt-20 mb-12 bg-gray-100 rounded-3xl sm:mt-10"},[m("div",{class:"text-lg font-bold sm:text-sm text-center"},"\u9019\u6B21\u5E36\u4F86\u7684\u5DE5\u4F5C\u574A\u5F9E10\u672C\u7E6A\u672C\u767C\u60F3\uFF0C\u5206\u6210\u5206\u7A0B\u662F\u300C\u7E6A\u672C\u8207\u4EBA\u6587\u300D\u3001\u300C\u79D1\u5B78\u8207\u5275\u9020\u300D\u5169\u500B\u4E3B\u8EF8\u3002\u7E6A\u672C\u8207\u4EBA\u6587\u7531\u6D41\u5BD3\u5DE5\u4F5C\u5BA4\u8207\u679C\u5BE6\u73A9\u6A02\u751F\u6D3B\u5BE6\u9A57\u5BA4\u5169\u500B\u6559\u80B2\u63A8\u5EE3\u5718\u968A\uFF0C \u4EE5\u300C\u81EA\u7136\u63A5\u89F8\u300D\u3001\u300C\u7AE5\u8DA3\u624B\u4F5C\u300D\u70BA\u8AB2\u7A0B\u7CBE\u795E\uFF0C\u5E36\u9818\u4EE5\u81EA\u7136\u754C\u7684\u6750\u6599\u6216\u89C0\u5BDF\uFF0C\u5E36\u9818\u5B69\u5B50\u8207\u5927\u4EBA\u5011\u9032\u884C\u624B\u4F5C\u8AB2\u7A0B\u3002\u300C\u79D1\u5B78\u8207\u5275\u9020\u300D\u5247\u7531\u5149\u8A66\u6240\u8207Pixelight\u4EE5\u300C\u93E1\u9762\u53CD\u5C04\u300D \u3001 \u300C\u96FB\u8DEF\u96FB\u5B78\u300D\u3001\u300C\u865B\u64EC\u5BE6\u5883\u300D\u70BA\u8A2D\u8A08\u7CBE\u795E\uFF0C\u5E36\u9818\u5B69\u5B50\u8207\u5927\u4EBA\u5011\u9032\u884C\u79D1\u5B78\u8207AR\u3001VR\u7684\u5947\u5999\u8996\u89BA\u9AD4\u9A57\u3002")],-1),D={class:"flex flex-wrap justify-between xl:justify-around max-w-5xl mx-auto"},j={data(){return{childrenArtList:[]}},methods:{LoadJson(){u.get("Data/Activities/"+this.$route.params.activityID+"/ChildrenArtList.json").then(r=>{this.childrenArtList=r.data;for(let s=0;s<this.childrenArtList.length;s++){let n=this.childrenArtList[s].title.split("\uFF1A");n.length===2?(this.childrenArtList[s].title=n[0]+"\uFF1A",this.childrenArtList[s].title2=n[1]):this.childrenArtList[s].title2=""}let t=3;this.$windowWidth<=this.$sm?t=1:this.$windowWidth<=this.$md||this.$windowWidth<=this.$lg||this.$windowWidth<=this.$xl?t=2:this.$windowWidth<=this.$2xl&&(t=3);var o=t-this.childrenArtList.length%t;o===t&&(o=0);for(var e={title:"none",date:"",typeName:"",path:""},l=0;l<o;l++)this.childrenArtList.push(e)}).catch(function(r){console.log(r)})}},created(){this.LoadJson()}},R=Object.assign(j,{setup(r){return(t,o)=>(d(),f("div",y,[h(p,{class:"mb-10"},{title:i(()=>[b]),default:i(()=>[h(_,null,{default:i(()=>[L]),_:1}),h(_,null,{default:i(()=>[$]),_:1})]),_:1}),N,m("div",D,[(d(!0),f(w,null,x(t.childrenArtList,(e,l)=>(d(),A(v,{href:"/activities/"+t.$route.params.activityID+"/"+l,img:"Data/Activities/"+t.$route.params.activityID+"/"+l+"/cover.jpg",typeName:e.typeName,class:g({invisible:e.title==="none"})},{title:i(()=>[a(c(e.title),1)]),title2:i(()=>[a(c(e.title2),1)]),date:i(()=>[a(c(e.date),1)]),_:2},1032,["href","img","typeName","class"]))),256))])]))}});export{R as default};
