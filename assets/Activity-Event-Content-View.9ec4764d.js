import{m as e,o,e as s,q as n,s as i}from"./index.3d29421e.js";const _={data(){return{current:null}},components:{ActivityEventForumView:e(()=>i(()=>import("./Activity-Event-Forum-View.32fcabea.js"),["assets/Activity-Event-Forum-View.32fcabea.js","assets/RoadItemRouter.50a80fed.css","assets/index.becf6c0c.js","assets/Road.6325823a.js","assets/index.3d29421e.js","assets/index.83bbde97.css","assets/RoadItem.06ad70e8.js","assets/RoadItemRouter.41ae109d.js","assets/EventContentItem.3adc7bc4.js","assets/EventContentItem.9eb7101b.css","assets/ImageBox.8deab72b.js","assets/ImageBox.0d056ba0.css"])),ActivityEventWorkShopView:e(()=>i(()=>import("./Activity-Event-WorkShop-View.49a40677.js"),["assets/Activity-Event-WorkShop-View.49a40677.js","assets/Activity-Event-WorkShop-View.453a6eb2.css","assets/index.becf6c0c.js","assets/Road.6325823a.js","assets/RoadItemRouter.50a80fed.css","assets/index.3d29421e.js","assets/index.83bbde97.css","assets/RoadItem.06ad70e8.js","assets/RoadItemRouter.41ae109d.js","assets/EventModal.98082965.js","assets/EventModal.4e75a530.css","assets/EventContentItem.3adc7bc4.js","assets/EventContentItem.9eb7101b.css","assets/ImageBox.8deab72b.js","assets/ImageBox.0d056ba0.css"])),ActivityEventChildrenArtView:e(()=>i(()=>import("./Activity-Event-ChildrenArt-View.1984de7a.js"),["assets/Activity-Event-ChildrenArt-View.1984de7a.js","assets/Activity-Event-ChildrenArt-View.c3dc55ef.css","assets/index.becf6c0c.js","assets/Road.6325823a.js","assets/RoadItemRouter.50a80fed.css","assets/index.3d29421e.js","assets/index.83bbde97.css","assets/RoadItem.06ad70e8.js","assets/RoadItemRouter.41ae109d.js","assets/EventModal.98082965.js","assets/EventModal.4e75a530.css","assets/EventContentItem.3adc7bc4.js","assets/EventContentItem.9eb7101b.css","assets/ImageBox.8deab72b.js","assets/ImageBox.0d056ba0.css"])),ActivityEventMeetingView:e(()=>i(()=>import("./Activity-Event-Meeting-View.5a36082b.js"),["assets/Activity-Event-Meeting-View.5a36082b.js","assets/Activity-Event-Meeting-View.32cbdfd0.css","assets/index.becf6c0c.js","assets/Road.6325823a.js","assets/RoadItemRouter.50a80fed.css","assets/index.3d29421e.js","assets/index.83bbde97.css","assets/RoadItem.06ad70e8.js","assets/RoadItemRouter.41ae109d.js","assets/EventModal.98082965.js","assets/EventModal.4e75a530.css","assets/EventContentItem.3adc7bc4.js","assets/EventContentItem.9eb7101b.css","assets/ImageBox.8deab72b.js","assets/ImageBox.0d056ba0.css"]))},methods:{SwitchViews(){let t=this.$route.params.activityID;t&&(t==="Forums"?this.current="ActivityEventForumView":t==="WorkShops"?this.current="ActivityEventWorkShopView":t==="ChildrenArts"?this.current="ActivityEventChildrenArtView":t==="Meetings"?this.current="ActivityEventMeetingView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},a=Object.assign(_,{setup(t){return(r,c)=>(o(),s(n(r.current)))}});export{a as default};
