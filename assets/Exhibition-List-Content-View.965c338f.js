import{m as e,o as r,e as s,q as n,s as i}from"./index.f33df9ed.js";const a={data(){return{current:null}},components:{ExhibitionDreamView:e(()=>i(()=>import("./Exhibition-List-Dream-View.e85a1f0b.js"),["assets/Exhibition-List-Dream-View.e85a1f0b.js","assets/Exhibition-List-Dream-View.105aa14c.css","assets/index.becf6c0c.js","assets/Road.9a3f8096.js","assets/Road.af5e8791.css","assets/index.f33df9ed.js","assets/index.897dcf11.css","assets/RoadItem.ef4de652.js","assets/Activity-List-Content-View.818e17f2.css","assets/ExhibitionItem.a0e6baba.js","assets/ExhibitionItem.9fef73f6.css"])),ExhibitionGoodNightView:e(()=>i(()=>import("./Exhibition-List-GoodNight-View.dd769c38.js"),["assets/Exhibition-List-GoodNight-View.dd769c38.js","assets/Exhibition-List-GoodNight-View.3385c9a0.css","assets/index.becf6c0c.js","assets/Road.9a3f8096.js","assets/Road.af5e8791.css","assets/index.f33df9ed.js","assets/index.897dcf11.css","assets/RoadItem.ef4de652.js","assets/Activity-List-Content-View.818e17f2.css","assets/ExhibitionItem.a0e6baba.js","assets/ExhibitionItem.9fef73f6.css"]))},methods:{SwitchViews(){let t=this.$route.params.exhibitionID;t&&(t==="Dream"?this.current="ExhibitionDreamView":t==="GoodNight"?this.current="ExhibitionGoodNightView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},_=Object.assign(a,{setup(t){return(o,h)=>(r(),s(n(o.current)))}});export{_ as default};
