import{I as p}from"./ImageBox.a7c3a486.js";import{o as n,c as l,b as e,r as o,F as c,d as i,t as m,_ as g,i as h,p as f,g as v,a as _,w as a}from"./index.c739338a.js";const $={class:"text-3xl font-bold mb-6 sm:mb-2 sm:text-xl",ref:"title"},b={class:"text-lg sm:text-sm text-zinc-700 font-semibold"},x={data(){return{}},methods:{},created(){}},y=Object.assign(x,{props:{info:Array},setup(s){return(t,r)=>(n(),l(c,null,[e("div",$,[o(t.$slots,"default")],512),(n(!0),l(c,null,i(s.info,d=>(n(),l("div",b,m(d),1))),256))],64))}});const w={class:"text-lg font-bold mb-3 sm:text-sm text-zinc-700"},I={class:"text-lg sm:text-sm text-zinc-700 font-semibold"},k={data(){return{}},methods:{},created(){}},C=Object.assign(k,{props:{teacherInfo:Array},setup(s){return(t,r)=>(n(),l(c,null,[e("div",w,[o(t.$slots,"default")]),(n(!0),l(c,null,i(s.teacherInfo,d=>(n(),l("div",I,m(d),1))),256))],64))}});const E={class:"mb-3 text-4xl font-bold sm:text-xl sm:mb-0"},O={class:"text-3xl font-bold sm:text-lg"},j={data(){return{}},methods:{},created(){}},z=Object.assign(j,{props:{},setup(s){return(t,r)=>(n(),l(c,null,[e("div",E,[o(t.$slots,"date")]),e("div",O,[o(t.$slots,"time")])],64))}});const S={class:"text-lg xl:text-sm font-semibold text-zinc-600"},A={class:"my-2"},B={class:"my-2"},K={class:"my-2"},D={class:"my-2"},M={class:"my-2"},L={data(){return{}},methods:{},created(){}},N=Object.assign(L,{props:{},setup(s){return(t,r)=>(n(),l("ul",S,[e("li",A,[o(t.$slots,"howto")]),e("li",B,[o(t.$slots,"place")]),e("li",K,[o(t.$slots,"for")]),e("li",D,[o(t.$slots,"money")]),e("li",M,[o(t.$slots,"people")])]))}});const V={class:"text-zinc-500 font-semibold sm:text-sm"},F=e("div",null,"\u203B \u5BE6\u969B\u5185\u5BB9\u8ACB\u9015\u81EA\u672C\u9928\u7DB2\u7AD9https://www.arte.gov.tw\u67E5\u8A62\u3002",-1),P=e("div",null,"\u6D3B\u52D5\u82E5\u56E0\u75AB\u60C5\u505C\u8FA6\u3001\u5EF6\u5F8C\u6216\u6539\u63A1\u7DDA\u4E0A\u6559\u5B78\u65B9\u5F0F\u8FA6\u7406\uFF0C\u5C07\u540C\u6B65\u65BC\u7DB2\u7AD9\u516C\u544A\u3002",-1),T=[F,P],q={data(){return{}},methods:{},created(){}},G=Object.assign(q,{props:{},setup(s){return(t,r)=>(n(),l("div",V,T))}});const u=s=>(f("data-v-2bb330af"),s=s(),v(),s),H=["href"],J=u(()=>e("div",{class:"text bg-text-1-Color text-bg-0-Color"},"\u9EDE\u6211\u5831\u540D",-1)),Q=[J],R=u(()=>e("div",{class:"text bg-bg-2-Color text-text-1-Color lg:border-2 lg:border-bg-1-Color"},"\u5831\u540D\u9808\u77E5",-1)),U=[R],W={data(){return{}},methods:{openModal(){this.$emitter.emit("OpenModal")}},created(){}},X=Object.assign(W,{props:{link:String,needKnew:Boolean},setup(s){return(t,r)=>(n(),l("div",null,[e("a",{href:s.link,target:"_blank",class:"panel"},Q,8,H),s.needKnew?(n(),l("button",{key:0,onClick:r[0]||(r[0]=(...d)=>t.openModal&&t.openModal(...d)),class:"ml-5 panel"},U)):h("",!0)]))}});var Y=g(X,[["__scopeId","data-v-2bb330af"]]);const Z={class:"grid mb-10 gap-x-16 gap-y-10 xl:gap-y-5 lg:gap-x-0"},tt={class:"col-start-1 col-end-4 row-start-1 row-end-4 lg:col-end-1"},et={class:"col-start-4 col-end-6 row-start-1 row-end-2 pt-10 2xl:pt-5 xl:pt-0 lg:col-start-1 lg:col-end-1 lg:row-start-4 lg:row-end-5 lg:pt-5 sm:pt-0"},st={class:"col-start-4 col-end-6 row-start-2 row-end-3 lg:col-start-1 lg:col-end-1 lg:row-start-6 lg:row-end-7",ref:"place"},ot={class:"col-start-4 col-end-6 row-start-3 row-end-4 lg:col-start-1 lg:col-end-1 lg:row-start-7 lg:row-end-8 lg:pt-5"},nt={class:"mb-10 xl:mb-5 lg:mb-10"},lt={class:"mt-8 xl:mt-4 col-start-1 col-end-4 row-start-4 row-end-6 xl:row-start-4 lg:col-end-1 lg:row-start-5 lg:row-end-6 lg:pt-5 sm:pt-0"},at=e("hr",{class:"my-8 border border-zinc-400 lg:border-0 sm:my-3"},null,-1),rt=e("hr",{class:"hidden my-8 border-zinc-400 lg:block sm:mb-2"},null,-1),_t={data(){return{}},methods:{},created(){}},it=Object.assign(_t,{props:{img:Array,link:String,info:Array,teacherInfo:Array,needKnew:Boolean},setup(s){return(t,r)=>(n(),l("div",Z,[e("div",tt,[_(p,{path:"Activities/"+t.$route.params.activityID+"/"+t.$route.params.eventID,img:s.img,time:3e3,auto:!1},null,8,["path","img"])]),e("div",et,[_(z,null,{date:a(()=>[o(t.$slots,"date")]),time:a(()=>[o(t.$slots,"time")]),_:3})]),e("div",st,[_(N,null,{howto:a(()=>[o(t.$slots,"howto")]),place:a(()=>[o(t.$slots,"place")]),for:a(()=>[o(t.$slots,"for")]),money:a(()=>[o(t.$slots,"money")]),people:a(()=>[o(t.$slots,"people")]),_:3})],512),e("div",ot,[e("div",nt,[_(Y,{link:"link",needKnew:s.needKnew},null,8,["needKnew"])]),_(G)]),e("div",lt,[_(y,{info:s.info,ref_key:"info",ref:info},{default:a(()=>[o(t.$slots,"title")]),_:3},8,["info"]),at,_(C,{teacherInfo:s.teacherInfo},{default:a(()=>[o(t.$slots,"teacher")]),_:3},8,["teacherInfo"]),rt])]))}});export{it as _};