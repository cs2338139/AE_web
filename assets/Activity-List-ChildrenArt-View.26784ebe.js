import{a as h}from"./index.becf6c0c.js";import{_ as p}from"./Road.bd49274d.js";import{R as d}from"./RoadItem.85a4437d.js";import{_ as u}from"./ActivityItem.f992915b.js";import{o as r,c as m,a as o,w as a,b as l,F as f,d as v,e as g,f as i,t as _,n as y}from"./index.83cdd1af.js";const A={class:"wrap"},x=i("\u63A8\u5EE3\u6D3B\u52D5"),L=i("\u5152\u7AE5\u7F8E\u5B78\u6D3B\u52D5"),b=l("div",{class:"max-w-4xl p-5 mx-auto mt-20 mb-12 bg-gray-100 rounded-3xl"},[l("div",{class:"text-lg font-bold"},"\u9019\u6B21\u5E36\u4F86\u7684\u5DE5\u4F5C\u574A\u5F9E10\u672C\u7E6A\u672C\u767C\u60F3\uFF0C\u5206\u6210\u5206\u7A0B\u662F\u300C\u7E6A\u672C\u8207\u4EBA\u6587\u300D\u3001\u300C\u79D1\u5B78\u8207\u5275\u9020\u300D\u5169\u500B\u4E3B\u8EF8\u3002\u7E6A\u672C\u8207\u4EBA\u6587\u7531\u6D41\u5BD3\u5DE5\u4F5C\u5BA4\u8207\u679C\u5BE6\u73A9\u6A02\u751F\u6D3B\u5BE6\u9A57\u5BA4\u5169\u500B\u6559\u80B2\u63A8\u5EE3\u5718\u968A\uFF0C \u4EE5\u300C\u81EA\u7136\u63A5\u89F8\u300D\u3001\u300C\u7AE5\u8DA3\u624B\u4F5C\u300D\u70BA\u8AB2\u7A0B\u7CBE\u795E\uFF0C\u5E36\u9818\u4EE5\u81EA\u7136\u754C\u7684\u6750\u6599\u6216\u89C0\u5BDF\uFF0C\u5E36\u9818\u5B69\u5B50\u8207\u5927\u4EBA\u5011\u9032\u884C\u624B\u4F5C\u8AB2\u7A0B\u3002\u300C\u79D1\u5B78\u8207\u5275\u9020\u300D\u5247\u7531\u5149\u8A66\u6240\u8207Pixelight\u4EE5\u300C\u93E1\u9762\u53CD\u5C04\u300D \u3001 \u300C\u96FB\u8DEF\u96FB\u5B78\u300D\u3001\u300C\u865B\u64EC\u5BE6\u5883\u300D\u70BA\u8A2D\u8A08\u7CBE\u795E\uFF0C\u5E36\u9818\u5B69\u5B50\u8207\u5927\u4EBA\u5011\u9032\u884C\u79D1\u5B78\u8207AR\u3001VR\u7684\u5947\u5999\u8996\u89BA\u9AD4\u9A57\u3002")],-1),w={class:"flex flex-wrap justify-between"},N={data(){return{childrenArtList:[]}},methods:{LoadJson(){h.get("Data/Activities/"+this.$route.params.activityID+"/ChildrenArtList.json").then(s=>{this.childrenArtList=s.data;var t=3-this.childrenArtList.length%3;t===3&&(t=0);for(var n={title:"none",date:"",typeName:"",path:""},e=0;e<t;e++)this.childrenArtList.push(n)}).catch(function(s){console.log(s)})}},created(){this.LoadJson()}},C=Object.assign(N,{setup(s){return(t,n)=>(r(),m("div",A,[o(p,{class:"mb-10"},{default:a(()=>[o(d,null,{default:a(()=>[x]),_:1}),o(d,null,{default:a(()=>[L]),_:1})]),_:1}),b,l("div",w,[(r(!0),m(f,null,v(t.childrenArtList,(e,c)=>(r(),g(u,{href:"/activities/"+t.$route.params.activityID+"/"+c,img:"Data/Activities/"+t.$route.params.activityID+"/"+c+"/cover.jpg",typeName:e.typeName,class:y({invisible:e.title==="none"})},{title:a(()=>[i(_(e.title),1)]),date:a(()=>[i(_(e.date),1)]),_:2},1032,["href","img","typeName","class"]))),256))])]))}});export{C as default};
