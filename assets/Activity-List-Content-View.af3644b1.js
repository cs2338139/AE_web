import{m as e,o,e as s,q as n,s as i}from"./index.f33df9ed.js";const _={data(){return{current:null}},components:{ActivityForumView:e(()=>i(()=>import("./Activity-List-Forum-View.4012f9d2.js"),["assets/Activity-List-Forum-View.4012f9d2.js","assets/Activity-List-Content-View.818e17f2.css","assets/index.becf6c0c.js","assets/Road.9a3f8096.js","assets/Road.af5e8791.css","assets/index.f33df9ed.js","assets/index.897dcf11.css","assets/RoadItem.ef4de652.js","assets/ActivityItem.b00dab6c.js"])),ActivityWorkShopView:e(()=>i(()=>import("./Activity-List-WorkShop-View.5953c47b.js"),["assets/Activity-List-WorkShop-View.5953c47b.js","assets/Activity-List-Content-View.818e17f2.css","assets/index.becf6c0c.js","assets/Road.9a3f8096.js","assets/Road.af5e8791.css","assets/index.f33df9ed.js","assets/index.897dcf11.css","assets/RoadItem.ef4de652.js","assets/ActivityItem.b00dab6c.js"])),ActivityChildrenArtView:e(()=>i(()=>import("./Activity-List-ChildrenArt-View.58cee26e.js"),["assets/Activity-List-ChildrenArt-View.58cee26e.js","assets/Activity-List-Content-View.818e17f2.css","assets/index.becf6c0c.js","assets/Road.9a3f8096.js","assets/Road.af5e8791.css","assets/index.f33df9ed.js","assets/index.897dcf11.css","assets/RoadItem.ef4de652.js","assets/ActivityItem.b00dab6c.js"])),ActivityMeetingView:e(()=>i(()=>import("./Activity-List-Meeting-View.ff7ff04b.js"),["assets/Activity-List-Meeting-View.ff7ff04b.js","assets/Activity-List-Content-View.818e17f2.css","assets/index.becf6c0c.js","assets/Road.9a3f8096.js","assets/Road.af5e8791.css","assets/index.f33df9ed.js","assets/index.897dcf11.css","assets/RoadItem.ef4de652.js","assets/ActivityItem.b00dab6c.js"]))},methods:{SwitchViews(){let t=this.$route.params.activityID;t&&(t==="WorkShops"?this.current="ActivityWorkShopView":t==="Forums"?this.current="ActivityForumView":t==="ChildrenArts"?this.current="ActivityChildrenArtView":t==="Meetings"?this.current="ActivityMeetingView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},a=Object.assign(_,{setup(t){return(r,c)=>(o(),s(n(r.current)))}});export{a as default};
