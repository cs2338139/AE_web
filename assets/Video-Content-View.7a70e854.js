import{m as t,o as s,e as r,q as n,s as i}from"./index.59cea802.js";const a={data(){return{current:null}},components:{VideoPreVideoView:t(()=>i(()=>import("./Video-PreVideo-View.f9280000.js"),["assets/Video-PreVideo-View.f9280000.js","assets/OnlineTour-View.ea8e85b1.css","assets/Road.e064ffe2.js","assets/Road.86e013d9.css","assets/index.59cea802.js","assets/index.06008595.css","assets/RoadItem.7d03a48b.js","assets/Exhibition-List-Content-View.f5759758.css"])),VideoListAnimationsView:t(()=>i(()=>import("./Video-Animations-View.565c8ae2.js"),["assets/Video-Animations-View.565c8ae2.js","assets/Video-Animations-View.a0cb5ebc.css","assets/Road.e064ffe2.js","assets/Road.86e013d9.css","assets/index.59cea802.js","assets/index.06008595.css","assets/RoadItem.7d03a48b.js","assets/Exhibition-List-Content-View.f5759758.css"])),VideoRecordVideoView:t(()=>i(()=>import("./Video-RecordVideo-View.38e965a8.js"),["assets/Video-RecordVideo-View.38e965a8.js","assets/OnlineTour-View.ea8e85b1.css","assets/Road.e064ffe2.js","assets/Road.86e013d9.css","assets/index.59cea802.js","assets/index.06008595.css","assets/RoadItem.7d03a48b.js","assets/Exhibition-List-Content-View.f5759758.css"]))},methods:{SwitchViews(){let e=this.$route.params.videoID;e&&(e==="PreVideos"?this.current="VideoPreVideoView":e==="RecordVideos"?this.current="VideoRecordVideoView":e==="Animations"?this.current="VideoListAnimationsView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},u=Object.assign(a,{setup(e){return(o,_)=>(s(),r(n(o.current)))}});export{u as default};
