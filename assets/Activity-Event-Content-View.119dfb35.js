import{m as e,o,e as s,q as n,s as i}from"./index.feab78df.js";const _={data(){return{current:null}},components:{ActivityEventForumView:e(()=>i(()=>import("./Activity-Event-Forum-View.3d33e077.js"),["assets/Activity-Event-Forum-View.3d33e077.js","assets/RoadItem.a324ec91.css","assets/index.becf6c0c.js","assets/Road.a5615689.js","assets/Road.76bb88fb.css","assets/index.feab78df.js","assets/index.34c36b49.css","assets/RoadItem.0c7df1a3.js","assets/RoadItemRouter.cfa371a9.js","assets/EventContentItem.4ab29edc.js","assets/EventContentItem.f1602ce0.css","assets/ImageBox.1f046abb.js","assets/ImageBox.8c48b966.css"])),ActivityEventWorkShopView:e(()=>i(()=>import("./Activity-Event-WorkShop-View.4f772dcb.js"),["assets/Activity-Event-WorkShop-View.4f772dcb.js","assets/Activity-Event-WorkShop-View.f0f6fe19.css","assets/index.becf6c0c.js","assets/Road.a5615689.js","assets/Road.76bb88fb.css","assets/index.feab78df.js","assets/index.34c36b49.css","assets/RoadItem.0c7df1a3.js","assets/RoadItem.a324ec91.css","assets/RoadItemRouter.cfa371a9.js","assets/EventModal.fa762330.js","assets/EventModal.dc5ec290.css","assets/EventContentItem.4ab29edc.js","assets/EventContentItem.f1602ce0.css","assets/ImageBox.1f046abb.js","assets/ImageBox.8c48b966.css"])),ActivityEventChildrenArtView:e(()=>i(()=>import("./Activity-Event-ChildrenArt-View.6f66345d.js"),["assets/Activity-Event-ChildrenArt-View.6f66345d.js","assets/Activity-Event-ChildrenArt-View.6dc3208c.css","assets/index.becf6c0c.js","assets/Road.a5615689.js","assets/Road.76bb88fb.css","assets/index.feab78df.js","assets/index.34c36b49.css","assets/RoadItem.0c7df1a3.js","assets/RoadItem.a324ec91.css","assets/RoadItemRouter.cfa371a9.js","assets/EventModal.fa762330.js","assets/EventModal.dc5ec290.css","assets/EventContentItem.4ab29edc.js","assets/EventContentItem.f1602ce0.css","assets/ImageBox.1f046abb.js","assets/ImageBox.8c48b966.css"])),ActivityEventMeetingView:e(()=>i(()=>import("./Activity-Event-Meeting-View.0c946ad5.js"),["assets/Activity-Event-Meeting-View.0c946ad5.js","assets/Activity-Event-Meeting-View.b0e9d4a7.css","assets/index.becf6c0c.js","assets/Road.a5615689.js","assets/Road.76bb88fb.css","assets/index.feab78df.js","assets/index.34c36b49.css","assets/RoadItem.0c7df1a3.js","assets/RoadItem.a324ec91.css","assets/RoadItemRouter.cfa371a9.js","assets/EventModal.fa762330.js","assets/EventModal.dc5ec290.css","assets/EventContentItem.4ab29edc.js","assets/EventContentItem.f1602ce0.css","assets/ImageBox.1f046abb.js","assets/ImageBox.8c48b966.css"]))},methods:{SwitchViews(){let t=this.$route.params.activityID;t&&(t==="Forums"?this.current="ActivityEventForumView":t==="WorkShops"?this.current="ActivityEventWorkShopView":t==="ChildrenArts"?this.current="ActivityEventChildrenArtView":t==="Meetings"?this.current="ActivityEventMeetingView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},a=Object.assign(_,{setup(t){return(r,c)=>(o(),s(n(r.current)))}});export{a as default};
