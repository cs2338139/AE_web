import{m as e,o as r,e as s,q as n,s as i}from"./index.128aed9e.js";const a={data(){return{current:null}},components:{ExhibitionDreamView:e(()=>i(()=>import("./Exhibition-List-Dream-View.5933e0c2.js"),["assets/Exhibition-List-Dream-View.5933e0c2.js","assets/Exhibition-List-Dream-View.e4e3ccdf.css","assets/index.becf6c0c.js","assets/Road.7ee5af4c.js","assets/Road.f2e20a63.css","assets/index.128aed9e.js","assets/index.efd837d2.css","assets/RoadItem.cb020ad1.js","assets/Activity-Event-Forum-View.63971b58.css","assets/ExhibitionItem.099d9a28.js","assets/ExhibitionItem.2e3787a7.css"])),ExhibitionGoodNightView:e(()=>i(()=>import("./Exhibition-List-GoodNight-View.c471f298.js"),["assets/Exhibition-List-GoodNight-View.c471f298.js","assets/Exhibition-List-GoodNight-View.e5c8c099.css","assets/index.becf6c0c.js","assets/Road.7ee5af4c.js","assets/Road.f2e20a63.css","assets/index.128aed9e.js","assets/index.efd837d2.css","assets/RoadItem.cb020ad1.js","assets/Activity-Event-Forum-View.63971b58.css","assets/ExhibitionItem.099d9a28.js","assets/ExhibitionItem.2e3787a7.css"]))},methods:{SwitchViews(){let t=this.$route.params.exhibitionID;t&&(t==="Dream"?this.current="ExhibitionDreamView":t==="GoodNight"?this.current="ExhibitionGoodNightView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},_=Object.assign(a,{setup(t){return(o,h)=>(r(),s(n(o.current)))}});export{_ as default};
