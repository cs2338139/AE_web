import{m as e,o,e as s,q as n,s as i}from"./index.6080f04d.js";const _={data(){return{current:null}},components:{ActivityEventForumView:e(()=>i(()=>import("./Activity-Event-Forum-View.7d6637d6.js"),["assets/Activity-Event-Forum-View.7d6637d6.js","assets/RoadItem.3dfdca91.css","assets/index.becf6c0c.js","assets/Road.8a2e7fcd.js","assets/Road.fbdaf685.css","assets/index.6080f04d.js","assets/index.462fa538.css","assets/RoadItem.b87553eb.js","assets/RoadItemRouter.77df440b.js","assets/EventContentItem.c891d982.js","assets/EventContentItem.bbc10cfc.css","assets/ImageBox.ff391dc5.js","assets/ImageBox.c6457a98.css"])),ActivityEventWorkShopView:e(()=>i(()=>import("./Activity-Event-WorkShop-View.79c345fd.js"),["assets/Activity-Event-WorkShop-View.79c345fd.js","assets/Activity-Event-WorkShop-View.d622287f.css","assets/index.becf6c0c.js","assets/Road.8a2e7fcd.js","assets/Road.fbdaf685.css","assets/index.6080f04d.js","assets/index.462fa538.css","assets/RoadItem.b87553eb.js","assets/RoadItem.3dfdca91.css","assets/RoadItemRouter.77df440b.js","assets/EventModal.fe9cac52.js","assets/EventModal.2b71cb8b.css","assets/EventContentItem.c891d982.js","assets/EventContentItem.bbc10cfc.css","assets/ImageBox.ff391dc5.js","assets/ImageBox.c6457a98.css"])),ActivityEventChildrenArtView:e(()=>i(()=>import("./Activity-Event-ChildrenArt-View.486d1631.js"),["assets/Activity-Event-ChildrenArt-View.486d1631.js","assets/Activity-Event-ChildrenArt-View.1392600f.css","assets/index.becf6c0c.js","assets/Road.8a2e7fcd.js","assets/Road.fbdaf685.css","assets/index.6080f04d.js","assets/index.462fa538.css","assets/RoadItem.b87553eb.js","assets/RoadItem.3dfdca91.css","assets/RoadItemRouter.77df440b.js","assets/EventModal.fe9cac52.js","assets/EventModal.2b71cb8b.css","assets/EventContentItem.c891d982.js","assets/EventContentItem.bbc10cfc.css","assets/ImageBox.ff391dc5.js","assets/ImageBox.c6457a98.css"])),ActivityEventMeetingView:e(()=>i(()=>import("./Activity-Event-Meeting-View.248cca79.js"),["assets/Activity-Event-Meeting-View.248cca79.js","assets/Activity-Event-Meeting-View.0fdce7fc.css","assets/index.becf6c0c.js","assets/Road.8a2e7fcd.js","assets/Road.fbdaf685.css","assets/index.6080f04d.js","assets/index.462fa538.css","assets/RoadItem.b87553eb.js","assets/RoadItem.3dfdca91.css","assets/RoadItemRouter.77df440b.js","assets/EventModal.fe9cac52.js","assets/EventModal.2b71cb8b.css","assets/EventContentItem.c891d982.js","assets/EventContentItem.bbc10cfc.css","assets/ImageBox.ff391dc5.js","assets/ImageBox.c6457a98.css"]))},methods:{SwitchViews(){let t=this.$route.params.activityID;t&&(t==="Forums"?this.current="ActivityEventForumView":t==="WorkShops"?this.current="ActivityEventWorkShopView":t==="ChildrenArts"?this.current="ActivityEventChildrenArtView":t==="Meetings"?this.current="ActivityEventMeetingView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},a=Object.assign(_,{setup(t){return(r,c)=>(o(),s(n(r.current)))}});export{a as default};
