import{_ as m}from"./Road.db9572a2.js";import{R as n}from"./RoadItem.742cfedd.js";import{_}from"./ElementPanel.68a41380.js";import{o as f,c as h,a,b as s,w as l,F as u,f as d,h as v}from"./index.fe5d838b.js";/* empty css                                                     */const b={class:"wrap"},g=d("\u7DDA\u4E0A\u5C55\u89BD"),p=d("\u7B56\u5C55\u4EBA\u7DDA\u4E0A\u5C0E\u89BD"),x=d("\u7B56\u5C55\u4EBA\u7DDA\u4E0A\u5C0E\u89BD"),w={class:"max-w-5xl mx-auto"},y=s("div",{class:"relative w-full mb-20 aspect-video sm:mb-5"},[s("iframe",{src:"https://www.youtube.com/embed/6kkuh11bDiyOw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),$={class:"max-w-3xl pt-10 mx-auto mt-16",ref:"target"},H=v('<div class="mb-3 text-3xl sm:text-lg">\u5922\u5883\u6F2B\u904A\uFF1A\u7E6A\u672C\u85DD\u8853\u5C55 \u7DDA\u4E0A\u5C0E\u89BD\u5F71\u7247</div><div class="mb-3 text-xl sm:text-sm">\u7B56\u5C55\u4EBA\uFF1A\u5433\u6587\u541B</div><div class="mb-6">\u7531\u7B56\u5C55\u4EBA\u8207\u7B56\u5C55\u5718\u968A\u5E36\u9818\u8457\u5927\u5BB6\u4E00\u8D77\u5728\u5C55\u9593\u6F2B\u904A\uFF0C\u4E00\u8D77\u804A\u804A\u95DC\u65BC\u7E6A\u672C\u7684\u6545\u4E8B\u3002</div><hr class="mb-6 border border-zinc-600"><div class="mb-14 sm:text-sm"><div>\u5922\u5883\u6F2B\u904A\uFF1A\u7E6A\u672C\u85DD\u8853\u5C55</div><div>\u5C55\u89BD\u65E5\u671F\uFF1A2022.06.28 \u2013 09.25</div><div>\u5C55\u89BD\u5730\u9EDE\uFF1A\u570B\u7ACB\u81FA\u7063\u85DD\u8853\u6559\u80B2\u9928 \u7B2C1\u30012\u5C55\u89BD\u5EF3</div></div>',5),T=[H],V={class:"absolute bottom-0 w-full -z-50"},k=s("div",{class:"h-8 bg-bg-0-image"},null,-1),B={class:"h-0 bg-bg-2-Color",ref:"bg"},N={data(){},methods:{GetTargetHeight(o,i,e){const r=Math.floor(document.body.scrollHeight-(o.getBoundingClientRect().top+window.scrollY));if(i[0].main.clientHeight!=r){for(let t=0;t<i.length;t++)i[t].main.style.height=r+i[t].offset+"px";for(let t=0;t<e.length;t++){let c;e[t].offset!=0?c=e[t].main.clientHeight/e[t].offset:c=0,e[t].main.style.bottom=r-c+"px"}this.$refs.element&&this.$refs.element.ReSet()}}},mounted(){let o=this.$refs.target,i=[{main:this.$refs.bg,offset:0}],e=[];this.interval=setInterval(()=>{this.GetTargetHeight(o,i,e)},100)},unmounted(){clearInterval(this.interval)}},F=Object.assign(N,{props:{},setup(o){return(i,e)=>(f(),h(u,null,[a(_,{ref:"element"},null,512),s("div",b,[a(m,{class:"mb-10"},{title:l(()=>[x]),default:l(()=>[a(n,null,{default:l(()=>[g]),_:1}),a(n,null,{default:l(()=>[p]),_:1})]),_:1}),s("div",w,[y,s("div",$,T,512)])]),s("div",V,[k,s("div",B,null,512)])],64))}});export{F as default};
