import{m as t,o as s,e as r,q as n,s as i}from"./index.6cf28ad2.js";const a={data(){return{current:null}},components:{VideoPreVideoView:t(()=>i(()=>import("./Video-PreVideo-View.9f24426e.js"),["assets/Video-PreVideo-View.9f24426e.js","assets/Video-RecordVideo-View.4f913c29.css","assets/Road.81603ac6.js","assets/Road.b7996106.css","assets/index.6cf28ad2.js","assets/index.58ca9d19.css","assets/RoadItem.25abdc6d.js","assets/RoadItem.befe7e36.css"])),VideoListAnimationsView:t(()=>i(()=>import("./Video-Animations-View.0b86f02e.js"),["assets/Video-Animations-View.0b86f02e.js","assets/Video-Animations-View.fb1ed52b.css","assets/Road.81603ac6.js","assets/Road.b7996106.css","assets/index.6cf28ad2.js","assets/index.58ca9d19.css","assets/RoadItem.25abdc6d.js","assets/RoadItem.befe7e36.css"])),VideoRecordVideoView:t(()=>i(()=>import("./Video-RecordVideo-View.24c20b0f.js"),["assets/Video-RecordVideo-View.24c20b0f.js","assets/Video-RecordVideo-View.4f913c29.css","assets/Road.81603ac6.js","assets/Road.b7996106.css","assets/index.6cf28ad2.js","assets/index.58ca9d19.css","assets/RoadItem.25abdc6d.js","assets/RoadItem.befe7e36.css"]))},methods:{SwitchViews(){let e=this.$route.params.videoID;e&&(e==="PreVideos"?this.current="VideoPreVideoView":e==="RecordVideos"?this.current="VideoRecordVideoView":e==="Animations"?this.current="VideoListAnimationsView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},u=Object.assign(a,{setup(e){return(o,_)=>(s(),r(n(o.current)))}});export{u as default};
