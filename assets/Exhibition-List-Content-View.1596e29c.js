import{m as e,o as r,e as s,q as n,s as i}from"./index.06f13d4a.js";const a={data(){return{current:null}},components:{ExhibitionDreamView:e(()=>i(()=>import("./Exhibition-List-Dream-View.7e9f457e.js"),["assets/Exhibition-List-Dream-View.7e9f457e.js","assets/Exhibition-List-Dream-View.b307487d.css","assets/index.becf6c0c.js","assets/Road.54276ae8.js","assets/Road.fc576475.css","assets/index.06f13d4a.js","assets/index.3c516dfe.css","assets/RoadItem.a9882515.js","assets/Exhibition-List-Content-View.82548463.css","assets/ExhibitionItem.13a32a71.js","assets/ExhibitionItem.ebca78bb.css"])),ExhibitionGoodNightView:e(()=>i(()=>import("./Exhibition-List-GoodNight-View.c1348074.js"),["assets/Exhibition-List-GoodNight-View.c1348074.js","assets/Exhibition-List-GoodNight-View.5d0c3bc1.css","assets/index.becf6c0c.js","assets/Road.54276ae8.js","assets/Road.fc576475.css","assets/index.06f13d4a.js","assets/index.3c516dfe.css","assets/RoadItem.a9882515.js","assets/Exhibition-List-Content-View.82548463.css","assets/ExhibitionItem.13a32a71.js","assets/ExhibitionItem.ebca78bb.css"]))},methods:{SwitchViews(){let t=this.$route.params.exhibitionID;t&&(t==="Dream"?this.current="ExhibitionDreamView":t==="GoodNight"?this.current="ExhibitionGoodNightView":this.ToNotFound())},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"SwitchViews"},created(){this.SwitchViews()}},_=Object.assign(a,{setup(t){return(o,h)=>(r(),s(n(o.current)))}});export{_ as default};
