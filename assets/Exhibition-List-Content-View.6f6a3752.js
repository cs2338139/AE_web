import{m as e,o as r,e as s,q as n,s as i}from"./index.b9409530.js";const a={data(){return{current:null}},components:{ExhibitionDreamView:e(()=>i(()=>import("./Exhibition-List-Dream-View.40126798.js"),["assets/Exhibition-List-Dream-View.40126798.js","assets/Exhibition-List-Dream-View.80500de4.css","assets/index.becf6c0c.js","assets/Road.52da08bb.js","assets/Road.c01c427d.css","assets/index.b9409530.js","assets/index.dede60e7.css","assets/RoadItem.40540596.js","assets/RoadItemRouter.vue_vue_type_style_index_0_lang.7e44bb43.css","assets/ExhibitionItem.a7a7eed0.js","assets/ExhibitionItem.2a05566f.css"])),ExhibitionGoodNightView:e(()=>i(()=>import("./Exhibition-List-GoodNight-View.deea9626.js"),["assets/Exhibition-List-GoodNight-View.deea9626.js","assets/Exhibition-List-GoodNight-View.682b77e4.css","assets/index.becf6c0c.js","assets/Road.52da08bb.js","assets/Road.c01c427d.css","assets/index.b9409530.js","assets/index.dede60e7.css","assets/RoadItem.40540596.js","assets/RoadItemRouter.vue_vue_type_style_index_0_lang.7e44bb43.css","assets/ExhibitionItem.a7a7eed0.js","assets/ExhibitionItem.2a05566f.css"]))},methods:{SwitchViews(){let t=this.$route.params.exhibitionID;t&&(t==="Dream"?this.current="ExhibitionDreamView":t==="GoodNight"?this.current="ExhibitionGoodNightView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},_=Object.assign(a,{setup(t){return(o,h)=>(r(),s(n(o.current)))}});export{_ as default};
