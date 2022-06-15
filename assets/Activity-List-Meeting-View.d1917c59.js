import{a as u}from"./index.becf6c0c.js";import{_ as p}from"./Road.ab167906.js";import{R as g}from"./RoadItem.1d615c81.js";import{A as x}from"./ActivityItem.4e9893d0.js";import{o as d,c as f,a as c,w as s,b as m,F as w,d as v,e as L,f as a,t as h,n as y}from"./index.2acf9c13.js";const $={class:"wrap"},D=a("\u63A8\u5EE3\u6D3B\u52D5"),b=a("\u7814\u7FD2\u71DF"),A=a("\u7814\u7FD2\u71DF"),N=m("div",{class:"text-center text-3xl"},"\u300C\u5922\u5883\u6F2B\u904A\uFF1A\u7E6A\u672C\u85DD\u8853\u300D\u5C55\u4E4B\u5DE5\u4F5C\u574A",-1),j=m("div",{class:"max-w-4xl mx-auto mt-8 mb-12 sm:mt-10"},[m("div",{class:"text-lg sm:text-sm text-center"}," \u9019\u6B21\u5E36\u4F86\u7684\u5DE5\u4F5C\u574A\u5F9E10\u672C\u7E6A\u672C\u767C\u60F3\uFF0C\u5206\u6210\u5206\u7A0B\u662F\u300C\u7E6A\u672C\u8207\u4EBA\u6587\u300D\u3001\u300C\u79D1\u5B78\u8207\u5275\u9020\u300D\u5169\u500B\u4E3B\u8EF8\u3002\u7E6A\u672C\u8207\u4EBA\u6587\u7531\u6D41\u5BD3\u5DE5\u4F5C\u5BA4\u8207\u679C\u5BE6\u73A9\u6A02\u751F\u6D3B\u5BE6\u9A57\u5BA4\u5169\u500B\u6559\u80B2\u63A8\u5EE3\u5718\u968A\uFF0C \u4EE5\u300C\u81EA\u7136\u63A5\u89F8\u300D\u3001\u300C\u7AE5\u8DA3\u624B\u4F5C\u300D\u70BA\u8AB2\u7A0B\u7CBE\u795E\uFF0C\u5E36\u9818\u4EE5\u81EA\u7136\u754C\u7684\u6750\u6599\u6216\u89C0\u5BDF\uFF0C\u5E36\u9818\u5B69\u5B50\u8207\u5927\u4EBA\u5011\u9032\u884C\u624B\u4F5C\u8AB2\u7A0B\u3002\u300C\u79D1\u5B78\u8207\u5275\u9020\u300D\u5247\u7531\u5149\u8A66\u6240\u8207Pixelight\u4EE5\u300C\u93E1\u9762\u53CD\u5C04\u300D \u3001 \u300C\u96FB\u8DEF\u96FB\u5B78\u300D\u3001\u300C\u865B\u64EC\u5BE6\u5883\u300D\u70BA\u8A2D\u8A08\u7CBE\u795E\uFF0C\u5E36\u9818\u5B69\u5B50\u8207\u5927\u4EBA\u5011\u9032\u884C\u79D1\u5B78\u8207AR\u3001VR\u7684\u5947\u5999\u8996\u89BA\u9AD4\u9A57\u3002 ")],-1),I={class:"flex flex-wrap justify-between xl:justify-around max-w-5xl mx-auto"},V={data(){return{meetingList:[]}},methods:{LoadJson(){u.get("Data/Activities/"+this.$route.params.activityID+"/MeetingList.json").then(l=>{this.meetingList=l.data;for(let e=0;e<this.meetingList.length;e++){this.meetingList[e].index=e;let n=this.meetingList[e].date.substring(0,16).replaceAll(".","/");n=n.replace("\uFF1A",":"),this.meetingList[e].newDate=new Date(n);let r=this.meetingList[e].title.split("\uFF1A");r.length===2?(this.meetingList[e].title=r[0]+"\uFF1A",this.meetingList[e].title2=r[1]):this.meetingList[e].title2=""}this.meetingList.sort(function(e,n){return e.newDate<n.newDate?-1:1});let t=3;this.$windowWidth<=this.$sm?t=1:this.$windowWidth<=this.$md||this.$windowWidth<=this.$lg||this.$windowWidth<=this.$xl?t=2:this.$windowWidth<=this.$2xl&&(t=3);var o=t-this.meetingList.length%t;o===t&&(o=0);for(var i={title:"none",date:"",typeName:"",path:""},_=0;_<o;_++)this.meetingList.push(i)}).catch(function(l){console.log(l)})}},created(){this.LoadJson()}},F=Object.assign(V,{setup(l){return(t,o)=>(d(),f("div",$,[c(p,{class:"mb-5"},{title:s(()=>[A]),default:s(()=>[c(g,null,{default:s(()=>[D]),_:1}),c(g,null,{default:s(()=>[b]),_:1})]),_:1}),N,j,m("div",I,[(d(!0),f(w,null,v(t.meetingList,i=>(d(),L(x,{href:"/activities/"+t.$route.params.activityID+"/"+i.index,img:"Data/Activities/"+t.$route.params.activityID+"/"+i.index+"/cover.jpg",typeName:i.typeName,class:y({invisible:i.title==="none"})},{title:s(()=>[a(h(i.title),1)]),title2:s(()=>[a(h(i.title2),1)]),date:s(()=>[a(h(i.date),1)]),_:2},1032,["href","img","typeName","class"]))),256))])]))}});export{F as default};
