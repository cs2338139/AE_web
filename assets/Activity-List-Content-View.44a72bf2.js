import{m as e,o,e as s,q as n,s as i}from"./index.128aed9e.js";const _={data(){return{current:null}},components:{ActivityForumView:e(()=>i(()=>import("./Activity-List-Forum-View.c58de70a.js"),["assets/Activity-List-Forum-View.c58de70a.js","assets/Activity-Event-Forum-View.63971b58.css","assets/index.becf6c0c.js","assets/Road.7ee5af4c.js","assets/Road.f2e20a63.css","assets/index.128aed9e.js","assets/index.efd837d2.css","assets/RoadItem.cb020ad1.js","assets/ActivityItem.f4883b4c.js"])),ActivityWorkShopView:e(()=>i(()=>import("./Activity-List-WorkShop-View.d17f45f2.js"),["assets/Activity-List-WorkShop-View.d17f45f2.js","assets/Activity-Event-Forum-View.63971b58.css","assets/index.becf6c0c.js","assets/Road.7ee5af4c.js","assets/Road.f2e20a63.css","assets/index.128aed9e.js","assets/index.efd837d2.css","assets/RoadItem.cb020ad1.js","assets/ActivityItem.f4883b4c.js"])),ActivityChildrenArtView:e(()=>i(()=>import("./Activity-List-ChildrenArt-View.53a52039.js"),["assets/Activity-List-ChildrenArt-View.53a52039.js","assets/Activity-Event-Forum-View.63971b58.css","assets/index.becf6c0c.js","assets/Road.7ee5af4c.js","assets/Road.f2e20a63.css","assets/index.128aed9e.js","assets/index.efd837d2.css","assets/RoadItem.cb020ad1.js","assets/ActivityItem.f4883b4c.js"])),ActivityMeetingView:e(()=>i(()=>import("./Activity-List-Meeting-View.f0a473fb.js"),["assets/Activity-List-Meeting-View.f0a473fb.js","assets/Activity-Event-Forum-View.63971b58.css","assets/index.becf6c0c.js","assets/Road.7ee5af4c.js","assets/Road.f2e20a63.css","assets/index.128aed9e.js","assets/index.efd837d2.css","assets/RoadItem.cb020ad1.js","assets/ActivityItem.f4883b4c.js"]))},methods:{SwitchViews(){let t=this.$route.params.activityID;t&&(t==="WorkShops"?this.current="ActivityWorkShopView":t==="Forums"?this.current="ActivityForumView":t==="ChildrenArts"?this.current="ActivityChildrenArtView":t==="Meetings"?this.current="ActivityMeetingView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},a=Object.assign(_,{setup(t){return(r,c)=>(o(),s(n(r.current)))}});export{a as default};
