import{I as g}from"./ImageBox.54c875f6.js";import{o,c as l,b as e,r as a,F as d,d as m,t as n,f as p,k as r,_ as v,p as x,g as $,a as _,w as h}from"./index.6644ef1c.js";const y={class:"text-3xl mb-1 sm:mb-0.5 sm:text-xl"},f={class:"text-lg mb-6 sm:mb-2 sm:text-xs"},w=p("\u7E6A\u672C\uFF5C"),b={class:"text-lg sm:text-sm text-zinc-700"},k={data(){return{}},methods:{},created(){}},M=Object.assign(k,{props:{info:Array},setup(s){return(t,c)=>(o(),l(d,null,[e("div",y,[a(t.$slots,"title")]),e("div",f,[w,a(t.$slots,"ref")]),(o(!0),l(d,null,m(s.info,i=>(o(),l("div",b,n(i),1))),256))],64))}});const T={class:"text-lg mb-3 sm:text-sm text-zinc-700"},S={class:"text-lg sm:text-sm text-zinc-700"},E={data(){return{}},methods:{},created(){}},I=Object.assign(E,{props:{teacherInfo:Array},setup(s){return(t,c)=>(o(),l(d,null,[e("div",T,[a(t.$slots,"default")]),(o(!0),l(d,null,m(s.teacherInfo,i=>(o(),l("div",S,n(i),1))),256))],64))}});const C={class:"mb-3 text-4xl sm:text-xl sm:mb-0"},z={class:"text-3xl sm:text-lg"},A={data(){return{}},methods:{},created(){}},L=Object.assign(A,{props:{},setup(s){return(t,c)=>(o(),l(d,null,[e("div",C,[a(t.$slots,"date")]),e("div",z,[a(t.$slots,"time")])],64))}});const O={class:"text-lg xl:text-sm text-zinc-600"},j={key:0,class:"my-2 flex"},B={class:"whitespace-nowrap"},P={class:""},K={key:1,class:"my-2 flex"},D={class:"whitespace-nowrap"},N={class:""},V={key:2,class:"my-2 flex"},R={class:"whitespace-nowrap"},F={class:""},q={key:3,class:"my-2 flex"},G={class:"whitespace-nowrap"},H={class:""},J={key:4,class:"my-2 flex"},Q={class:"whitespace-nowrap"},U={class:""},W={key:5,class:"my-2 flex"},X={class:"whitespace-nowrap"},Y={class:""},Z={data(){return{_howTo:[],_place:[],_target:[],_money:[],_tip:[],_people:[]}},computed:{Re(){this.howTo!=null&&(this._howTo=this.howTo.split("\uFF5C")),this.place!=null&&(this._place=this.place.split("\uFF5C")),this.target!=null&&(this._target=this.target.split("\uFF5C")),this.money!=null&&(this._money=this.money.split("\uFF5C")),this.tip!=null&&(this._tip=this.tip.split("\uFF5C")),this.people!=null&&(this._people=this.people.split("\uFF5C"))}},created(){this.Re},updated(){this.Re}},tt=Object.assign(Z,{props:{howTo:String,place:String,target:String,money:String,tip:String,people:String},setup(s){return(t,c)=>(o(),l("ul",O,[t._howTo.length!=0?(o(),l("li",j,[e("div",B,n(t._howTo[0])+"\uFF5C",1),e("div",P,n(t._howTo[1]),1)])):r("",!0),t._target.length!=0?(o(),l("li",K,[e("div",D,n(t._target[0])+"\uFF5C",1),e("div",N,n(t._target[1]),1)])):r("",!0),t._people.length!=0?(o(),l("li",V,[e("div",R,n(t._people[0])+"\uFF5C",1),e("div",F,n(t._people[1]),1)])):r("",!0),t._money.length!=0?(o(),l("li",q,[e("div",G,n(t._money[0])+"\uFF5C",1),e("div",H,n(t._money[1]),1)])):r("",!0),t._place.length!=0?(o(),l("li",J,[e("div",Q,n(t._place[0])+"\uFF5C",1),e("div",U,n(t._place[1]),1)])):r("",!0),t._tip.length!=0?(o(),l("li",W,[e("div",X,n(t._tip[0])+"\uFF5C",1),e("div",Y,n(t._tip[1]),1)])):r("",!0)]))}});const et={class:"text-zinc-500 sm:text-sm"},st=e("div",null,"\u203B \u5BE6\u969B\u5185\u5BB9\u8ACB\u9015\u81EA\u672C\u9928\u7DB2\u7AD9https://www.arte.gov.tw\u67E5\u8A62\u3002",-1),ot=e("div",null,"\u6D3B\u52D5\u82E5\u56E0\u75AB\u60C5\u505C\u8FA6\u3001\u5EF6\u5F8C\u6216\u6539\u63A1\u7DDA\u4E0A\u6559\u5B78\u65B9\u5F0F\u8FA6\u7406\uFF0C\u5C07\u540C\u6B65\u65BC\u7DB2\u7AD9\u516C\u544A\u3002",-1),lt=[st,ot],nt={data(){return{}},methods:{},created(){}},at=Object.assign(nt,{props:{},setup(s){return(t,c)=>(o(),l("div",et,lt))}});const u=s=>(x("data-v-783529f8"),s=s(),$(),s),it={key:0,class:"panel"},rt=["href"],ct=u(()=>e("div",{class:"text bg-slate-400 text-bg-0-Color"},"\u5C1A\u672A\u958B\u653E",-1)),dt=[ct],_t=["href"],ht=u(()=>e("div",{class:"text bg-text-1-Color text-bg-0-Color"},"\u9EDE\u6211\u5831\u540D",-1)),mt=[ht],ut=u(()=>e("div",{class:"text bg-bg-2-Color text-text-1-Color lg:border-2 lg:border-bg-1-Color"},"\u5831\u540D\u9808\u77E5",-1)),gt=[ut],pt={data(){return{}},methods:{openModal(){this.$emitter.emit("OpenModal")}},created(){}},vt=Object.assign(pt,{props:{link:String,needKnew:Boolean,needLink:Boolean},setup(s){return(t,c)=>(o(),l("div",null,[s.needLink?(o(),l("div",it,[s.link===""?(o(),l("button",{key:0,href:s.link},dt,8,rt)):r("",!0),s.link!=""?(o(),l("a",{key:1,href:s.link,target:"_blank"},mt,8,_t)):r("",!0)])):r("",!0),s.needKnew?(o(),l("button",{key:1,onClick:c[0]||(c[0]=(...i)=>t.openModal&&t.openModal(...i)),class:"ml-5 panel"},gt)):r("",!0)]))}});var xt=v(vt,[["__scopeId","data-v-783529f8"]]);const $t={class:"mb-6 text-3xl sm:mb-4 sm:text-xl text-text-1-Color"},yt=e("div",{class:"text-2xl text-text-1-Color sm:text-lg"},"\u8AB2\u7A0B\u76EE\u6A19",-1),ft={class:"mb-5 text-xl mt-1 text-zinc-700 sm:text-base sm:mt-0"},wt=e("div",{class:"text-2xl text-text-1-Color sm:text-lg"},"\u9810\u671F\u6210\u679C",-1),bt={class:"mb-5 list-decimal list-inside"},kt={class:"text-xl my-1 text-zinc-700 sm:my-0 sm:text-base"},Mt=e("div",{class:"text-2xl text-text-1-Color sm:text-lg"},"\u6D41\u7A0B",-1),Tt={class:"text-xl my-1 text-zinc-700 sm:my-0 sm:text-base"},St=e("hr",{class:"my-8 border border-zinc-400 lg:border-0 sm:my-3"},null,-1),Et={class:"mb-10"},It={class:"text-lg sm:text-sm text-zinc-700"},Ct={class:"text-lg sm:text-sm text-zinc-500"},zt={data(){return{}},methods:{},created(){}},At=Object.assign(zt,{props:{MExpect:Array,MProcess:Array,MTeacher:Array},setup(s){return(t,c)=>(o(),l(d,null,[e("div",$t,[a(t.$slots,"MTitle")]),yt,e("div",ft,[a(t.$slots,"MTarget")]),wt,e("ul",bt,[(o(!0),l(d,null,m(s.MExpect,i=>(o(),l("li",kt,n(i),1))),256))]),Mt,e("ul",null,[(o(!0),l(d,null,m(s.MProcess,i=>(o(),l("li",Tt,n(i),1))),256))]),St,(o(!0),l(d,null,m(s.MTeacher,i=>(o(),l("div",Et,[e("div",It,"\u8B1B\u5E2B\uFF5C"+n(i.teacher),1),e("div",Ct,n(i.info),1)]))),256))],64))}});const Lt={class:"grid mb-10 gap-x-16 gap-y-10 xl:gap-y-5 lg:gap-x-0"},Ot={class:"col-start-1 col-end-4 row-start-1 row-end-4 lg:col-end-1"},jt={class:"col-start-4 col-end-6 row-start-1 row-end-2 pt-10 2xl:pt-5 xl:pt-0 lg:col-start-1 lg:col-end-1 lg:row-start-4 lg:row-end-5 lg:pt-5 sm:pt-0"},Bt={class:"col-start-4 col-end-6 row-start-2 row-end-3 lg:col-start-1 lg:col-end-1 lg:row-start-6 lg:row-end-7",id:"place"},Pt={class:"col-start-4 col-end-6 row-start-3 row-end-4 lg:col-start-1 lg:col-end-1 lg:row-start-7 lg:row-end-8 lg:pt-5"},Kt={class:"mb-10 xl:mb-5 lg:mb-10"},Dt={key:0,class:"mt-8 xl:mt-4 col-start-1 col-end-4 row-start-4 row-end-6 xl:row-start-4 lg:col-end-1 lg:row-start-5 lg:row-end-6 lg:pt-5 sm:pt-0",id:"info"},Nt=e("hr",{class:"my-8 border border-zinc-400 lg:border-0 sm:my-3"},null,-1),Vt=e("hr",{class:"hidden my-8 border-zinc-400 lg:block sm:mb-2"},null,-1),Rt={key:1,class:"mt-8 xl:mt-4 col-start-1 col-end-4 row-start-4 row-end-6 xl:row-start-4 lg:col-end-1 lg:row-start-5 lg:row-end-6 lg:pt-5 sm:pt-0",id:"info"},Ft={data(){return{}},methods:{},created(){}},Ht=Object.assign(Ft,{props:{img:Array,link:String,info:Array,teacherInfo:Array,needKnew:Boolean,needLink:Boolean,MExpect:Array,MProcess:Array,MTeacher:Array,howTo:String,place:String,target:String,money:String,tip:String,people:String},setup(s){return(t,c)=>(o(),l("div",Lt,[e("div",Ot,[_(g,{path:"Activities/"+t.$route.params.activityID+"/"+t.$route.params.eventID,img:s.img,time:3e3,auto:!1},null,8,["path","img"])]),e("div",jt,[_(L,null,{date:h(()=>[a(t.$slots,"date")]),time:h(()=>[a(t.$slots,"time")]),_:3})]),e("div",Bt,[_(tt,{howTo:s.howTo,place:s.place,target:s.target,money:s.money,tip:s.tip,people:s.people},null,8,["howTo","place","target","money","tip","people"])]),e("div",Pt,[e("div",Kt,[_(xt,{link:s.link,needKnew:s.needKnew,needLink:s.needLink},null,8,["link","needKnew","needLink"])]),_(at)]),s.info!=null?(o(),l("div",Dt,[_(M,{info:s.info},{title:h(()=>[a(t.$slots,"title")]),ref:h(()=>[a(t.$slots,"ref")]),_:3},8,["info"]),Nt,_(I,{teacherInfo:s.teacherInfo},{default:h(()=>[a(t.$slots,"teacher")]),_:3},8,["teacherInfo"]),Vt])):(o(),l("div",Rt,[_(At,{MExpect:s.MExpect,MProcess:s.MProcess,MTeacher:s.MTeacher},{MTitle:h(()=>[a(t.$slots,"MTitle")]),MTarget:h(()=>[a(t.$slots,"MTarget")]),_:3},8,["MExpect","MProcess","MTeacher"])]))]))}});export{Ht as _};
