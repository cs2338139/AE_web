import{m as e,o,e as s,q as n,s as i}from"./index.3282e3e0.js";const _={data(){return{current:null}},components:{ActivityForumView:e(()=>i(()=>import("./Activity-List-Forum-View.8437e699.js"),["assets/Activity-List-Forum-View.8437e699.js","assets/Activity-List-WorkShop-View.1c21060b.css","assets/index.becf6c0c.js","assets/Road.62a085a3.js","assets/index.3282e3e0.js","assets/index.40bccddf.css","assets/RoadItem.3ac72617.js","assets/ActivityItem.1e36659e.js"])),ActivityWorkShopView:e(()=>i(()=>import("./Activity-List-WorkShop-View.67b8ddfd.js"),["assets/Activity-List-WorkShop-View.67b8ddfd.js","assets/Activity-List-WorkShop-View.1c21060b.css","assets/index.becf6c0c.js","assets/Road.62a085a3.js","assets/index.3282e3e0.js","assets/index.40bccddf.css","assets/RoadItem.3ac72617.js","assets/ActivityItem.1e36659e.js"])),ActivityChildrenArtView:e(()=>i(()=>import("./Activity-List-ChildrenArt-View.1c3feaeb.js"),["assets/Activity-List-ChildrenArt-View.1c3feaeb.js","assets/Activity-List-WorkShop-View.1c21060b.css","assets/index.becf6c0c.js","assets/Road.62a085a3.js","assets/index.3282e3e0.js","assets/index.40bccddf.css","assets/RoadItem.3ac72617.js","assets/ActivityItem.1e36659e.js"])),ActivityMeetingView:e(()=>i(()=>import("./Activity-List-Meeting-View.8e3fa789.js"),["assets/Activity-List-Meeting-View.8e3fa789.js","assets/Activity-List-WorkShop-View.1c21060b.css","assets/index.becf6c0c.js","assets/Road.62a085a3.js","assets/index.3282e3e0.js","assets/index.40bccddf.css","assets/RoadItem.3ac72617.js","assets/ActivityItem.1e36659e.js"]))},methods:{SwitchViews(){let t=this.$route.params.activityID;t&&(t==="WorkShops"?this.current="ActivityWorkShopView":t==="Forums"?this.current="ActivityForumView":t==="ChildrenArts"?this.current="ActivityChildrenArtView":t==="Meetings"?this.current="ActivityMeetingView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},a=Object.assign(_,{setup(t){return(r,c)=>(o(),s(n(r.current)))}});export{a as default};
