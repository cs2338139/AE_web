import{a as p}from"./index.becf6c0c.js";import{_ as x}from"./Road.db9572a2.js";import{R as f}from"./RoadItem.742cfedd.js";import{A as w}from"./ActivityItem.81533527.js";import{_ as v}from"./ElementPanel.68a41380.js";import{o as h,c as u,a as r,b as l,w as s,F as g,d as L,e as $,f as a,t as c,n as y}from"./index.fe5d838b.js";/* empty css                                                     */const D={class:"wrap"},b=a("\u63A8\u5EE3\u6D3B\u52D5"),A=a("\u7814\u7FD2\u71DF"),N=a("\u7814\u7FD2\u71DF"),j=l("div",{class:"text-center text-3xl"},"\u300C\u5922\u5883\u6F2B\u904A\uFF1A\u7E6A\u672C\u85DD\u8853\u300D\u5C55\u4E4B\u5DE5\u4F5C\u574A",-1),I=l("div",{class:"max-w-4xl mx-auto mt-8 mb-12 sm:mt-10"},[l("div",{class:"text-lg sm:text-sm text-center"}," \u9019\u6B21\u5E36\u4F86\u7684\u5DE5\u4F5C\u574A\u5F9E10\u672C\u7E6A\u672C\u767C\u60F3\uFF0C\u5206\u6210\u5206\u7A0B\u662F\u300C\u7E6A\u672C\u8207\u4EBA\u6587\u300D\u3001\u300C\u79D1\u5B78\u8207\u5275\u9020\u300D\u5169\u500B\u4E3B\u8EF8\u3002\u7E6A\u672C\u8207\u4EBA\u6587\u7531\u6D41\u5BD3\u5DE5\u4F5C\u5BA4\u8207\u679C\u5BE6\u73A9\u6A02\u751F\u6D3B\u5BE6\u9A57\u5BA4\u5169\u500B\u6559\u80B2\u63A8\u5EE3\u5718\u968A\uFF0C \u4EE5\u300C\u81EA\u7136\u63A5\u89F8\u300D\u3001\u300C\u7AE5\u8DA3\u624B\u4F5C\u300D\u70BA\u8AB2\u7A0B\u7CBE\u795E\uFF0C\u5E36\u9818\u4EE5\u81EA\u7136\u754C\u7684\u6750\u6599\u6216\u89C0\u5BDF\uFF0C\u5E36\u9818\u5B69\u5B50\u8207\u5927\u4EBA\u5011\u9032\u884C\u624B\u4F5C\u8AB2\u7A0B\u3002\u300C\u79D1\u5B78\u8207\u5275\u9020\u300D\u5247\u7531\u5149\u8A66\u6240\u8207Pixelight\u4EE5\u300C\u93E1\u9762\u53CD\u5C04\u300D \u3001 \u300C\u96FB\u8DEF\u96FB\u5B78\u300D\u3001\u300C\u865B\u64EC\u5BE6\u5883\u300D\u70BA\u8A2D\u8A08\u7CBE\u795E\uFF0C\u5E36\u9818\u5B69\u5B50\u8207\u5927\u4EBA\u5011\u9032\u884C\u79D1\u5B78\u8207AR\u3001VR\u7684\u5947\u5999\u8996\u89BA\u9AD4\u9A57\u3002 ")],-1),R={class:"flex flex-wrap justify-between xl:justify-around max-w-5xl mx-auto"},V={data(){return{meetingList:[]}},methods:{LoadJson(){p.get("Data/Activities/"+this.$route.params.activityID+"/MeetingList.json").then(o=>{this.meetingList=o.data;for(let e=0;e<this.meetingList.length;e++){this.meetingList[e].index=e;let n=this.meetingList[e].date.substring(0,16).replaceAll(".","/");n=n.replace("\uFF1A",":"),this.meetingList[e].newDate=new Date(n);let d=this.meetingList[e].title.split("\uFF1A");d.length===2?(this.meetingList[e].title=d[0]+"\uFF1A",this.meetingList[e].title2=d[1]):this.meetingList[e].title2=""}this.meetingList.sort(function(e,n){return e.newDate<n.newDate?-1:1});let t=3;this.$windowWidth<=this.$sm?t=1:this.$windowWidth<=this.$md||this.$windowWidth<=this.$lg||this.$windowWidth<=this.$xl?t=2:this.$windowWidth<=this.$2xl&&(t=3);var m=t-this.meetingList.length%t;m===t&&(m=0);for(var i={index:"0",title:"none",date:"",typeName:"",path:""},_=0;_<m;_++)this.meetingList.push(i)}).catch(function(o){console.log(o)})}},created(){this.LoadJson()},updated(){this.$refs.element&&this.$refs.element.ReSet()}},S=Object.assign(V,{setup(o){return(t,m)=>(h(),u(g,null,[r(v,{ref:"element"},null,512),l("div",D,[r(x,{class:"mb-5"},{title:s(()=>[N]),default:s(()=>[r(f,null,{default:s(()=>[b]),_:1}),r(f,null,{default:s(()=>[A]),_:1})]),_:1}),j,I,l("div",R,[(h(!0),u(g,null,L(t.meetingList,i=>(h(),$(w,{href:"/activities/"+t.$route.params.activityID+"/"+i.index,img:"Data/Activities/"+t.$route.params.activityID+"/"+i.index+"/cover.jpg",typeName:i.typeName,class:y({invisible:i.title==="none"})},{title:s(()=>[a(c(i.title),1)]),title2:s(()=>[a(c(i.title2),1)]),date:s(()=>[a(c(i.date),1)]),_:2},1032,["href","img","typeName","class"]))),256))])])],64))}});export{S as default};
