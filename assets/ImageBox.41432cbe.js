import{_ as h,j as m,o as i,c as l,b as o,a as r,k as f,v as _,F as a,d as c}from"./index.83cdd1af.js";const v={class:"relative"},I={class:"absolute w-full h-full"},p={class:"absolute left-0 right-0 text-center bottom-2"},g=["onClick"],S={class:"overflow-hidden"},x=["src"],b={data(){return{slideIndex:0,timeID:null}},methods:{autoSlides(){this.timeID=setInterval(()=>{this.plusSlides(1)},3e3)},plusSlides(e){this.slideIndex+=e,this.showSlides()},currentSlide(e){this.slideIndex=e,this.showSlides()},showSlides(){let e=this.$refs.dots,s=this.$refs.slides;if(clearInterval(this.timeID),s.length>1){this.$props.auto===!0&&this.autoSlides(),this.slideIndex>s.length-1&&(this.slideIndex=0),this.slideIndex<0&&(this.slideIndex=s.length-1);for(let t=0;t<s.length;t++)s[t].style.display="none";for(let t=0;t<e.length;t++)e[t].className=e[t].className.replace(" active","");s[this.slideIndex].style.display="block",e[this.slideIndex].className+=" active"}}},mounted(){this.showSlides(0),this.$emitter.on("emitIndex",e=>{this.currentSlide(e),console.log(e)})}},w=Object.assign(b,{props:{path:String,time:Number,auto:Boolean,img:Array,dot:{type:Boolean,default:!0}},setup(e){return(s,t)=>{const d=m("ion-icon");return i(),l("div",v,[o("div",I,[o("button",{onClick:t[0]||(t[0]=n=>s.plusSlides(-1)),class:"left-3 dirButton"},[r(d,{name:"chevron-back-circle"})]),o("button",{onClick:t[1]||(t[1]=n=>s.plusSlides(1)),class:"right-3 dirButton"},[r(d,{name:"chevron-forward-circle"})]),f(o("div",p,[(i(!0),l(a,null,c(e.img,(n,u)=>(i(),l("span",{class:"dot",onClick:k=>s.currentSlide(u),ref_for:!0,ref:"dots"},null,8,g))),256))],512),[[_,e.dot]])]),o("div",S,[(i(!0),l(a,null,c(e.img,n=>(i(),l("img",{src:"Data/"+e.path+"/Image/"+n,class:"mySlides w-full",ref_for:!0,ref:"slides"},null,8,x))),256))])])}}});var B=h(w,[["__scopeId","data-v-7ded5be5"]]);export{B as I};
