import{m as e,o,e as s,q as n,s as i}from"./index.5c4a0e94.js";const _={data(){return{current:null}},components:{ActivityForumView:e(()=>i(()=>import("./Activity-List-Forum-View.d4646045.js"),["assets/Activity-List-Forum-View.d4646045.js","assets/Exhibition-List-Content-View.b9b74b7e.css","assets/index.becf6c0c.js","assets/Road.80a3718a.js","assets/Road.76bb88fb.css","assets/index.5c4a0e94.js","assets/index.34c36b49.css","assets/RoadItem.b5398fc8.js","assets/ActivityItem.97114a97.js","assets/ActivityItem.9299ff19.css"])),ActivityWorkShopView:e(()=>i(()=>import("./Activity-List-WorkShop-View.03ca657d.js"),["assets/Activity-List-WorkShop-View.03ca657d.js","assets/Exhibition-List-Content-View.b9b74b7e.css","assets/index.becf6c0c.js","assets/Road.80a3718a.js","assets/Road.76bb88fb.css","assets/index.5c4a0e94.js","assets/index.34c36b49.css","assets/RoadItem.b5398fc8.js","assets/ActivityItem.97114a97.js","assets/ActivityItem.9299ff19.css"])),ActivityChildrenArtView:e(()=>i(()=>import("./Activity-List-ChildrenArt-View.3354ae93.js"),["assets/Activity-List-ChildrenArt-View.3354ae93.js","assets/Activity-List-ChildrenArt-View.3e807422.css","assets/index.becf6c0c.js","assets/Road.80a3718a.js","assets/Road.76bb88fb.css","assets/index.5c4a0e94.js","assets/index.34c36b49.css","assets/RoadItem.b5398fc8.js","assets/Exhibition-List-Content-View.b9b74b7e.css","assets/ActivityItem.97114a97.js","assets/ActivityItem.9299ff19.css"])),ActivityMeetingView:e(()=>i(()=>import("./Activity-List-Meeting-View.2608a6f3.js"),["assets/Activity-List-Meeting-View.2608a6f3.js","assets/Exhibition-List-Content-View.b9b74b7e.css","assets/index.becf6c0c.js","assets/Road.80a3718a.js","assets/Road.76bb88fb.css","assets/index.5c4a0e94.js","assets/index.34c36b49.css","assets/RoadItem.b5398fc8.js","assets/ActivityItem.97114a97.js","assets/ActivityItem.9299ff19.css"]))},methods:{SwitchViews(){let t=this.$route.params.activityID;t&&(t==="WorkShops"?this.current="ActivityWorkShopView":t==="Forums"?this.current="ActivityForumView":t==="ChildrenArts"?this.current="ActivityChildrenArtView":t==="Meetings"?this.current="ActivityMeetingView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},a=Object.assign(_,{setup(t){return(r,c)=>(o(),s(n(r.current)))}});export{a as default};
