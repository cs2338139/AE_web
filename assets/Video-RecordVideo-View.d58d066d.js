import{_ as c}from"./Road.5197deb0.js";import{R as a}from"./RoadItem.b1a51e20.js";import{_ as r}from"./ElementPanel.15fb4246.js";import{o as d,c as n,a as s,b as e,w as o,F as _,f as i}from"./index.2587b206.js";const m={class:"wrap"},u=i("\u5BA3\u5C0E\u5F71\u7247"),h=i("\u8A2A\u8AC7\u7D00\u9304\u7247"),g=i("\u8A2A\u8AC7\u7D00\u9304\u7247"),b={class:"max-w-5xl mx-auto"},f=e("div",{class:"relative w-full mb-20 aspect-video sm:mb-5"},[e("iframe",{src:"https://www.youtube.com/embed/6kkuh11bDiyOw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),p={class:"max-w-3xl pt-10 mx-auto mt-16",ref:"target"},w=e("div",{class:"mb-3 text-3xl sm:text-lg"},"\u300C\u5922\u5883\u6F2B\u904A\uFF1A\u7E6A\u672C\u85DD\u8853\u5C55\u300D\u8A2A\u8AC7\u7D00\u9304\u7247",-1),v=e("hr",{class:"mb-6 border border-zinc-600"},null,-1),x=e("div",{class:"mb-14 sm:text-sm"},[e("div",null,"\u5C55\u89BD\u65E5\u671F\uFF1A2022.06.28 \u2013 09.25"),e("div",null,"\u5C55\u89BD\u5730\u9EDE\uFF1A\u570B\u7ACB\u81FA\u7063\u85DD\u8853\u6559\u80B2\u9928 \u7B2C1\u30012\u5C55\u89BD\u5EF3")],-1),y=[w,v,x],$={class:"absolute bottom-0 w-full -z-50"},R=e("div",{class:"h-8 bg-bg-0-image"},null,-1),V={class:"h-0 bg-bg-2-Color",ref:"bg"},B={data(){},methods:{GetTargetHeight(){const t=document.body.scrollHeight-(this.$refs.target.getBoundingClientRect().top+window.scrollY),l=this.$refs.bg;l.style.height=t+"px"}},mounted(){setInterval(()=>{const t=document.body.scrollHeight-(this.$refs.target.getBoundingClientRect().top+window.scrollY);this.$refs.bg.clientHeight!=t&&this.GetTargetHeight()},100)},updated(){this.$refs.element&&this.$refs.element.ReSet()}},Y=Object.assign(B,{props:{},setup(t){return(l,H)=>(d(),n(_,null,[s(r,{ref:"element"},null,512),e("div",m,[s(c,{class:"mb-10"},{title:o(()=>[g]),default:o(()=>[s(a,null,{default:o(()=>[u]),_:1}),s(a,null,{default:o(()=>[h]),_:1})]),_:1}),e("div",b,[f,e("div",p,y,512)])]),e("div",$,[R,e("div",V,null,512)])],64))}});export{Y as default};
