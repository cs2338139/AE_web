import{q as e,o,e as s,l as n,s as i}from"./index.71d2422e.js";const _={data(){return{current:null}},components:{ActivityEventForumView:e(()=>i(()=>import("./Activity-Event-Forum-View.a2ee2c48.js"),["assets/Activity-Event-Forum-View.a2ee2c48.js","assets/RoadItemRouter.vue_vue_type_style_index_0_lang.7ad31fdc.css","assets/index.becf6c0c.js","assets/Road.800b2e79.js","assets/Road.eb7288f4.css","assets/index.71d2422e.js","assets/index.7f5043aa.css","assets/RoadItem.eae78e95.js","assets/RoadItemRouter.e23cefd8.js","assets/EventContentItem.81b9498b.js","assets/EventContentItem.78ae0502.css","assets/ImageBox.c5ab0dbe.js","assets/ImageBox.b797e167.css","assets/ElementPanel.c2716f24.js","assets/ElementPanel.ad25fafa.css"])),ActivityEventWorkShopView:e(()=>i(()=>import("./Activity-Event-WorkShop-View.f1d7b2ac.js"),["assets/Activity-Event-WorkShop-View.f1d7b2ac.js","assets/Activity-Event-WorkShop-View.d2feff35.css","assets/RoadItemRouter.vue_vue_type_style_index_0_lang.7ad31fdc.css","assets/EventModal.vue_vue_type_style_index_0_scoped_true_lang.5c6d0cd2.css","assets/index.becf6c0c.js","assets/Road.800b2e79.js","assets/Road.eb7288f4.css","assets/index.71d2422e.js","assets/index.7f5043aa.css","assets/RoadItem.eae78e95.js","assets/RoadItemRouter.e23cefd8.js","assets/EventModal.f66ccff5.js","assets/EventContentItem.81b9498b.js","assets/EventContentItem.78ae0502.css","assets/ImageBox.c5ab0dbe.js","assets/ImageBox.b797e167.css","assets/ElementPanel.c2716f24.js","assets/ElementPanel.ad25fafa.css"])),ActivityEventChildrenArtView:e(()=>i(()=>import("./Activity-Event-ChildrenArt-View.aeb5d243.js"),["assets/Activity-Event-ChildrenArt-View.aeb5d243.js","assets/Activity-Event-ChildrenArt-View.bb58873f.css","assets/RoadItemRouter.vue_vue_type_style_index_0_lang.7ad31fdc.css","assets/EventModal.vue_vue_type_style_index_0_scoped_true_lang.5c6d0cd2.css","assets/index.becf6c0c.js","assets/Road.800b2e79.js","assets/Road.eb7288f4.css","assets/index.71d2422e.js","assets/index.7f5043aa.css","assets/RoadItem.eae78e95.js","assets/RoadItemRouter.e23cefd8.js","assets/EventModal.f66ccff5.js","assets/EventContentItem.81b9498b.js","assets/EventContentItem.78ae0502.css","assets/ImageBox.c5ab0dbe.js","assets/ImageBox.b797e167.css","assets/ElementPanel.c2716f24.js","assets/ElementPanel.ad25fafa.css"])),ActivityEventMeetingView:e(()=>i(()=>import("./Activity-Event-Meeting-View.1ec457ea.js"),["assets/Activity-Event-Meeting-View.1ec457ea.js","assets/Activity-Event-Meeting-View.dc0d8364.css","assets/RoadItemRouter.vue_vue_type_style_index_0_lang.7ad31fdc.css","assets/EventModal.vue_vue_type_style_index_0_scoped_true_lang.5c6d0cd2.css","assets/index.becf6c0c.js","assets/Road.800b2e79.js","assets/Road.eb7288f4.css","assets/index.71d2422e.js","assets/index.7f5043aa.css","assets/RoadItem.eae78e95.js","assets/EventContentItem.81b9498b.js","assets/EventContentItem.78ae0502.css","assets/ImageBox.c5ab0dbe.js","assets/ImageBox.b797e167.css","assets/ElementPanel.c2716f24.js","assets/ElementPanel.ad25fafa.css"]))},methods:{SwitchViews(){let t=this.$route.params.activityID;t&&(t==="Forums"?this.current="ActivityEventForumView":t==="WorkShops"?this.current="ActivityEventWorkShopView":t==="ChildrenArts"?this.current="ActivityEventChildrenArtView":t==="Meetings"?this.current="ActivityEventMeetingView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},a=Object.assign(_,{setup(t){return(r,c)=>(o(),s(n(r.current)))}});export{a as default};
