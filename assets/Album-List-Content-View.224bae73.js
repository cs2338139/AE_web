import{m as t,o,e as s,q as u,s as i}from"./index.5c4a0e94.js";const n={data(){return{current:null}},components:{AlbumRecordView:t(()=>i(()=>import("./Album-List-Record-View.f4063f4d.js"),["assets/Album-List-Record-View.f4063f4d.js","assets/Exhibition-List-Content-View.b9b74b7e.css","assets/index.becf6c0c.js","assets/Road.80a3718a.js","assets/Road.76bb88fb.css","assets/index.5c4a0e94.js","assets/index.34c36b49.css","assets/RoadItem.b5398fc8.js","assets/AlbumItem.c2b9a3eb.js"])),AlbumPreExhibitionView:t(()=>i(()=>import("./Album-List-PreExhibition-View.418a44a9.js"),["assets/Album-List-PreExhibition-View.418a44a9.js","assets/Exhibition-List-Content-View.b9b74b7e.css","assets/index.becf6c0c.js","assets/Road.80a3718a.js","assets/Road.76bb88fb.css","assets/index.5c4a0e94.js","assets/index.34c36b49.css","assets/RoadItem.b5398fc8.js","assets/AlbumItem.c2b9a3eb.js"]))},methods:{SwitchViews(){let e=this.$route.params.albumID;e&&(e==="PreExhibitions"?this.current="AlbumPreExhibitionView":e==="Records"?this.current="AlbumRecordView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},h=Object.assign(n,{setup(e){return(r,a)=>(o(),s(u(r.current)))}});export{h as default};
