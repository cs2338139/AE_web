import{a as l}from"./index.becf6c0c.js";import{_ as d}from"./Road.fa61d30a.js";import{R as r}from"./RoadItem.8506b93b.js";import{_ as c}from"./RoadItemRouter.427feda3.js";import{E as h}from"./EventModal.b82e8695.js";import{_ as m}from"./EventContentItem.5bcce52a.js";import{_ as p,o as _,c as u,b as f,a as s,w as e,f as a,t as o,F as D,i as v}from"./index.eb2518bc.js";import"./ImageBox.abb406dc.js";const g={class:"wrap"},y=a("\u63A8\u5EE3\u6D3B\u52D5"),$=a("\u7814\u7FD2\u71DF"),M=a(" \u53C3\u8207\u5C0D\u8C61\uFF5C\u3000\u5152\u7AE5\u76F8\u95DC\u516C\u76CA\u793E\u5718\u3001\u7D44\u7E54\u3001\u5354\u6703\u3002\u8EAB\u5FC3\u969C\u7919\u8207\u5F31\u52E2\u5718\u9AD4\u512A\u5148\u53D7\u7406\u5831\u540D\u3002"),I={data(){return{Data:null}},methods:{LoadJson(){let n=this.$route.params.activityID,t=this.$route.params.eventID;n&&t&&l.get("Data/Activities/"+n+"/"+t+"/MeetingContent.json").then(i=>{this.Data=i.data}).catch(i=>{console.log(i),this.ToNotFound()})},openModal(){this.$refs.Modal.style.display="block"},closeModal(){this.$refs.Modal.style.display="none"},ToNotFound(){this.$router.push({name:"NotFound",params:{pathMatch:this.$route.path.substring(1).split("/")},query:this.$route.query,hash:this.$route.hash})}},watch:{$route:"LoadJson"},created(){this.LoadJson()}},k=Object.assign(I,{setup(n){return(t,i)=>t.Data!=null?(_(),u(D,{key:0},[f("div",g,[s(d,{class:"mb-10"},{default:e(()=>[s(r,null,{default:e(()=>[y]),_:1}),s(c,{href:"/activities/Meetings"},{default:e(()=>[$]),_:1}),s(r,null,{default:e(()=>[a(o(t.Data.title),1)]),_:1})]),_:1}),s(m,{img:t.Data.imgs,link:t.Data.link,info:t.Data.info,needKnew:!0,teacherInfo:t.Data.teacherInfo},{date:e(()=>[a(o(t.Data.date),1)]),time:e(()=>[a(o(t.Data.time),1)]),for:e(()=>[M]),people:e(()=>[a(" \u53C3\u52A0\u4EBA\u6578\uFF5C\u3000"+o(t.Data.people),1)]),place:e(()=>[a(" \u6D3B\u52D5\u5730\u9EDE\uFF5C\u3000"+o(t.Data.place)+" \u3002",1)]),title:e(()=>[a(o(t.Data.title),1)]),teacher:e(()=>[a("\u6388\u8AB2\u8B1B\u5E2B\uFF5C\u3000"+o(t.Data.teacher),1)]),_:1},8,["img","link","info","teacherInfo"])]),s(h)],64)):v("",!0)}});var C=p(k,[["__scopeId","data-v-a910c46c"]]);export{C as default};
