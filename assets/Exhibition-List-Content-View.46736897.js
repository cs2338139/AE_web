import{m as e,o as r,e as s,q as n,s as i}from"./index.40d5d575.js";const a={data(){return{current:null}},components:{ExhibitionDreamView:e(()=>i(()=>import("./Exhibition-List-Dream-View.32e5c821.js"),["assets/Exhibition-List-Dream-View.32e5c821.js","assets/Exhibition-List-Dream-View.ef148d7b.css","assets/index.becf6c0c.js","assets/Road.3c6acf5a.js","assets/Album-List-Content-View.142053b7.css","assets/index.40d5d575.js","assets/index.2c561903.css","assets/RoadItem.9baf920a.js","assets/ExhibitionItem.4ad80ab3.js","assets/ExhibitionItem.e0c0282c.css"])),ExhibitionGoodNightView:e(()=>i(()=>import("./Exhibition-List-GoodNight-View.4a49bea8.js"),["assets/Exhibition-List-GoodNight-View.4a49bea8.js","assets/Exhibition-List-GoodNight-View.8527d4f8.css","assets/index.becf6c0c.js","assets/Road.3c6acf5a.js","assets/Album-List-Content-View.142053b7.css","assets/index.40d5d575.js","assets/index.2c561903.css","assets/RoadItem.9baf920a.js","assets/ExhibitionItem.4ad80ab3.js","assets/ExhibitionItem.e0c0282c.css"]))},methods:{SwitchViews(){let t=this.$route.params.exhibitionID;t&&(t==="Dream"?this.current="ExhibitionDreamView":t==="GoodNight"?this.current="ExhibitionGoodNightView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},_=Object.assign(a,{setup(t){return(o,h)=>(r(),s(n(o.current)))}});export{_ as default};
