import{m as t,o,e as s,q as u,s as i}from"./index.1ab91bb4.js";const n={data(){return{current:null}},components:{AlbumRecordView:t(()=>i(()=>import("./Album-List-Record-View.a1678527.js"),["assets/Album-List-Record-View.a1678527.js","assets/RoadItem.a324ec91.css","assets/index.becf6c0c.js","assets/Road.60d85e53.js","assets/Road.76bb88fb.css","assets/index.1ab91bb4.js","assets/index.34c36b49.css","assets/RoadItem.11008afa.js","assets/AlbumItem.79ff4f04.js"])),AlbumPreExhibitionView:t(()=>i(()=>import("./Album-List-PreExhibition-View.412e1eac.js"),["assets/Album-List-PreExhibition-View.412e1eac.js","assets/RoadItem.a324ec91.css","assets/index.becf6c0c.js","assets/Road.60d85e53.js","assets/Road.76bb88fb.css","assets/index.1ab91bb4.js","assets/index.34c36b49.css","assets/RoadItem.11008afa.js","assets/AlbumItem.79ff4f04.js"]))},methods:{SwitchViews(){let e=this.$route.params.albumID;e&&(e==="PreExhibitions"?this.current="AlbumPreExhibitionView":e==="Records"?this.current="AlbumRecordView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},h=Object.assign(n,{setup(e){return(r,a)=>(o(),s(u(r.current)))}});export{h as default};
