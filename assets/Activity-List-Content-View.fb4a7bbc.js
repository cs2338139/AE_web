import{m as e,o,e as s,q as n,s as i}from"./index.c739338a.js";const _={data(){return{current:null}},components:{ActivityForumView:e(()=>i(()=>import("./Activity-List-Forum-View.e009328d.js"),["assets/Activity-List-Forum-View.e009328d.js","assets/Exhibition-List-Content-View.6cd079b0.css","assets/index.becf6c0c.js","assets/Road.1bd2e3f9.js","assets/Road.05754fda.css","assets/index.c739338a.js","assets/index.21abe7f1.css","assets/RoadItem.64b57414.js","assets/ActivityItem.6919bd12.js","assets/ActivityItem.d75fec9f.css"])),ActivityWorkShopView:e(()=>i(()=>import("./Activity-List-WorkShop-View.0ff81a67.js"),["assets/Activity-List-WorkShop-View.0ff81a67.js","assets/Exhibition-List-Content-View.6cd079b0.css","assets/index.becf6c0c.js","assets/Road.1bd2e3f9.js","assets/Road.05754fda.css","assets/index.c739338a.js","assets/index.21abe7f1.css","assets/RoadItem.64b57414.js","assets/ActivityItem.6919bd12.js","assets/ActivityItem.d75fec9f.css"])),ActivityChildrenArtView:e(()=>i(()=>import("./Activity-List-ChildrenArt-View.044a2cdb.js"),["assets/Activity-List-ChildrenArt-View.044a2cdb.js","assets/Activity-List-ChildrenArt-View.50a2a7eb.css","assets/index.becf6c0c.js","assets/Road.1bd2e3f9.js","assets/Road.05754fda.css","assets/index.c739338a.js","assets/index.21abe7f1.css","assets/RoadItem.64b57414.js","assets/Exhibition-List-Content-View.6cd079b0.css","assets/ActivityItem.6919bd12.js","assets/ActivityItem.d75fec9f.css"])),ActivityMeetingView:e(()=>i(()=>import("./Activity-List-Meeting-View.f9495a3b.js"),["assets/Activity-List-Meeting-View.f9495a3b.js","assets/Exhibition-List-Content-View.6cd079b0.css","assets/index.becf6c0c.js","assets/Road.1bd2e3f9.js","assets/Road.05754fda.css","assets/index.c739338a.js","assets/index.21abe7f1.css","assets/RoadItem.64b57414.js","assets/ActivityItem.6919bd12.js","assets/ActivityItem.d75fec9f.css"]))},methods:{SwitchViews(){let t=this.$route.params.activityID;t&&(t==="WorkShops"?this.current="ActivityWorkShopView":t==="Forums"?this.current="ActivityForumView":t==="ChildrenArts"?this.current="ActivityChildrenArtView":t==="Meetings"?this.current="ActivityMeetingView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},a=Object.assign(_,{setup(t){return(r,c)=>(o(),s(n(r.current)))}});export{a as default};
