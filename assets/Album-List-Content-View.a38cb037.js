import{m as t,o,e as s,q as u,s as i}from"./index.6cf28ad2.js";const n={data(){return{current:null}},components:{AlbumRecordView:t(()=>i(()=>import("./Album-List-Record-View.efc3d8cf.js"),["assets/Album-List-Record-View.efc3d8cf.js","assets/Content-View.68ad3c5e.css","assets/index.becf6c0c.js","assets/Road.81603ac6.js","assets/Road.e349209b.css","assets/index.6cf28ad2.js","assets/index.d41e7f2e.css","assets/RoadItem.25abdc6d.js","assets/AlbumItem.eac6207a.js"])),AlbumPreExhibitionView:t(()=>i(()=>import("./Album-List-PreExhibition-View.e573131e.js"),["assets/Album-List-PreExhibition-View.e573131e.js","assets/Content-View.68ad3c5e.css","assets/index.becf6c0c.js","assets/Road.81603ac6.js","assets/Road.e349209b.css","assets/index.6cf28ad2.js","assets/index.d41e7f2e.css","assets/RoadItem.25abdc6d.js","assets/AlbumItem.eac6207a.js"]))},methods:{SwitchViews(){let e=this.$route.params.albumID;e&&(e==="PreExhibitions"?this.current="AlbumPreExhibitionView":e==="Records"?this.current="AlbumRecordView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},h=Object.assign(n,{setup(e){return(r,a)=>(o(),s(u(r.current)))}});export{h as default};
