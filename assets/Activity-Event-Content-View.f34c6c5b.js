import{m as e,o,e as s,q as n,s as i}from"./index.01d95b55.js";const _={data(){return{current:null}},components:{ActivityEventForumView:e(()=>i(()=>import("./Activity-Event-Forum-View.6b28620a.js"),["assets/Activity-Event-Forum-View.6b28620a.js","assets/Activity-List-Forum-View.f53dbe6f.css","assets/index.becf6c0c.js","assets/Road.31a14276.js","assets/Road.c80b24ba.css","assets/index.01d95b55.js","assets/index.34cca9d0.css","assets/RoadItem.6c5783e8.js","assets/RoadItemRouter.72b6e7bc.js","assets/EventContentItem.e7cb6a9f.js","assets/EventContentItem.cc0bb7a4.css","assets/ImageBox.d4aa89cb.js","assets/ImageBox.b24bf013.css"])),ActivityEventWorkShopView:e(()=>i(()=>import("./Activity-Event-WorkShop-View.60c0bd25.js"),["assets/Activity-Event-WorkShop-View.60c0bd25.js","assets/Activity-Event-WorkShop-View.8808395a.css","assets/index.becf6c0c.js","assets/Road.31a14276.js","assets/Road.c80b24ba.css","assets/index.01d95b55.js","assets/index.34cca9d0.css","assets/RoadItem.6c5783e8.js","assets/Activity-List-Forum-View.f53dbe6f.css","assets/RoadItemRouter.72b6e7bc.js","assets/EventModal.2c6bc46c.js","assets/EventModal.a2fa801f.css","assets/EventContentItem.e7cb6a9f.js","assets/EventContentItem.cc0bb7a4.css","assets/ImageBox.d4aa89cb.js","assets/ImageBox.b24bf013.css"])),ActivityEventChildrenArtView:e(()=>i(()=>import("./Activity-Event-ChildrenArt-View.dd5a553a.js"),["assets/Activity-Event-ChildrenArt-View.dd5a553a.js","assets/Activity-Event-ChildrenArt-View.12de8f8f.css","assets/index.becf6c0c.js","assets/Road.31a14276.js","assets/Road.c80b24ba.css","assets/index.01d95b55.js","assets/index.34cca9d0.css","assets/RoadItem.6c5783e8.js","assets/Activity-List-Forum-View.f53dbe6f.css","assets/RoadItemRouter.72b6e7bc.js","assets/EventModal.2c6bc46c.js","assets/EventModal.a2fa801f.css","assets/EventContentItem.e7cb6a9f.js","assets/EventContentItem.cc0bb7a4.css","assets/ImageBox.d4aa89cb.js","assets/ImageBox.b24bf013.css"])),ActivityEventMeetingView:e(()=>i(()=>import("./Activity-Event-Meeting-View.cdf7c573.js"),["assets/Activity-Event-Meeting-View.cdf7c573.js","assets/Activity-Event-Meeting-View.3b76867a.css","assets/index.becf6c0c.js","assets/Road.31a14276.js","assets/Road.c80b24ba.css","assets/index.01d95b55.js","assets/index.34cca9d0.css","assets/RoadItem.6c5783e8.js","assets/Activity-List-Forum-View.f53dbe6f.css","assets/RoadItemRouter.72b6e7bc.js","assets/EventModal.2c6bc46c.js","assets/EventModal.a2fa801f.css","assets/EventContentItem.e7cb6a9f.js","assets/EventContentItem.cc0bb7a4.css","assets/ImageBox.d4aa89cb.js","assets/ImageBox.b24bf013.css"]))},methods:{SwitchViews(){let t=this.$route.params.activityID;t&&(t==="Forums"?this.current="ActivityEventForumView":t==="WorkShops"?this.current="ActivityEventWorkShopView":t==="ChildrenArts"?this.current="ActivityEventChildrenArtView":t==="Meetings"?this.current="ActivityEventMeetingView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},a=Object.assign(_,{setup(t){return(r,c)=>(o(),s(n(r.current)))}});export{a as default};
