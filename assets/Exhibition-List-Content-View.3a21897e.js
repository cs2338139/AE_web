import{m as e,o as r,e as s,q as n,s as i}from"./index.c61e25c2.js";const a={data(){return{current:null}},components:{ExhibitionDreamView:e(()=>i(()=>import("./Exhibition-List-Dream-View.352586f2.js"),["assets/Exhibition-List-Dream-View.352586f2.js","assets/Exhibition-List-Dream-View.6133ea63.css","assets/index.becf6c0c.js","assets/Road.c8b00677.js","assets/RoadItemRouter.6cdea625.css","assets/index.c61e25c2.js","assets/index.5c164806.css","assets/RoadItem.501c29fb.js","assets/ExhibitionItem.ea2bfad8.js","assets/ExhibitionItem.6f26b6bb.css"])),ExhibitionGoodNightView:e(()=>i(()=>import("./Exhibition-List-GoodNight-View.6224d192.js"),["assets/Exhibition-List-GoodNight-View.6224d192.js","assets/Exhibition-List-GoodNight-View.c0aec6aa.css","assets/index.becf6c0c.js","assets/Road.c8b00677.js","assets/RoadItemRouter.6cdea625.css","assets/index.c61e25c2.js","assets/index.5c164806.css","assets/RoadItem.501c29fb.js","assets/ExhibitionItem.ea2bfad8.js","assets/ExhibitionItem.6f26b6bb.css"]))},methods:{SwitchViews(){let t=this.$route.params.exhibitionID;t&&(t==="Dream"?this.current="ExhibitionDreamView":t==="GoodNight"?this.current="ExhibitionGoodNightView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},_=Object.assign(a,{setup(t){return(o,h)=>(r(),s(n(o.current)))}});export{_ as default};
