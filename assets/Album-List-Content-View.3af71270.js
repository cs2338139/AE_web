import{m as t,o,e as s,q as u,s as i}from"./index.5a559033.js";const n={data(){return{current:null}},components:{AlbumRecordView:t(()=>i(()=>import("./Album-List-Record-View.ec94e98c.js"),["assets/Album-List-Record-View.ec94e98c.js","assets/NotFound-View.ca1b562d.css","assets/index.becf6c0c.js","assets/Road.005f2f05.js","assets/index.5a559033.js","assets/index.124302ac.css","assets/RoadItem.90810e73.js","assets/AlbumItem.415fadce.js"])),AlbumPreExhibitionView:t(()=>i(()=>import("./Album-List-PreExhibition-View.68a92811.js"),["assets/Album-List-PreExhibition-View.68a92811.js","assets/NotFound-View.ca1b562d.css","assets/index.becf6c0c.js","assets/Road.005f2f05.js","assets/index.5a559033.js","assets/index.124302ac.css","assets/RoadItem.90810e73.js","assets/AlbumItem.415fadce.js"]))},methods:{SwitchViews(){let e=this.$route.params.albumID;e&&(e==="PreExhibitions"?this.current="AlbumPreExhibitionView":e==="Records"?this.current="AlbumRecordView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},h=Object.assign(n,{setup(e){return(r,a)=>(o(),s(u(r.current)))}});export{h as default};
