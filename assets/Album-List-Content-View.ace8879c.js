import{m as t,o,e as s,q as u,s as i}from"./index.45cfbd4d.js";const n={data(){return{current:null}},components:{AlbumRecordView:t(()=>i(()=>import("./Album-List-Record-View.05cdaf63.js"),["assets/Album-List-Record-View.05cdaf63.js","assets/Exhibition-List-Content-View.b9b74b7e.css","assets/index.becf6c0c.js","assets/Road.3ca2a781.js","assets/Road.76bb88fb.css","assets/index.45cfbd4d.js","assets/index.34c36b49.css","assets/RoadItem.ac73632f.js","assets/AlbumItem.1121efca.js"])),AlbumPreExhibitionView:t(()=>i(()=>import("./Album-List-PreExhibition-View.a822092a.js"),["assets/Album-List-PreExhibition-View.a822092a.js","assets/Exhibition-List-Content-View.b9b74b7e.css","assets/index.becf6c0c.js","assets/Road.3ca2a781.js","assets/Road.76bb88fb.css","assets/index.45cfbd4d.js","assets/index.34c36b49.css","assets/RoadItem.ac73632f.js","assets/AlbumItem.1121efca.js"]))},methods:{SwitchViews(){let e=this.$route.params.albumID;e&&(e==="PreExhibitions"?this.current="AlbumPreExhibitionView":e==="Records"?this.current="AlbumRecordView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},h=Object.assign(n,{setup(e){return(r,a)=>(o(),s(u(r.current)))}});export{h as default};
