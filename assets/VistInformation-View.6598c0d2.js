import{o as i,c as a,a as t,w as e,b as l,u as d,R as n,h as o,f as s}from"./index.40d5d575.js";import{_ as c}from"./Road.3c6acf5a.js";import{R as m}from"./RoadItem.9baf920a.js";const r={class:"wrap"},f=s("\u53C3\u89C0\u8CC7\u8A0A"),x={class:"h-660px mb-10 md:h-1300px"},_={class:"flex flex-col justify-between float-left w-1/2 h-full xl:pr-16 md:w-full md:pr-0 md:h-1/2 md:pb-10"},v=o('<div><div class="my-2 text-lg font-bold">\u672C\u9928\u8CC7\u8A0A</div><div class="text-base font-normal xl:my-1">\u672C\u9928\u5730\u5740\uFF1A\u81FA\u5317\u5E02\u4E2D\u6B63\u5340\u5357\u6D77\u8DEF43\u865F</div><div class="text-base font-normal xl:my-1">\u958B\u653E\u6642\u9593\uFF1A\u9031\u4E8C\u81F3\u9031\u65E59\uFF1A00 - 17\uFF1A00 \uFF08\u514D\u8CBB\u53C3\u89C0\uFF0C\u9031\u4E00\u4F11\u9928\uFF09</div><div class="text-base font-normal xl:my-1">\u806F\u7D61\u96FB\u8A71\uFF1A\uFF0802\uFF092311\uFF0D0574\u8F49110</div></div><div><div class="my-2 text-lg font-bold">\u5C55\u89BD\u8CC7\u8A0A</div><div class="text-base font-normal xl:my-1">\u5C55\u89BD\u65E5\u671F\uFF1A2022.06.28 \u2013 09.25</div><div class="text-base font-normal xl:my-1">\u5C55\u89BD\u5730\u9EDE\uFF1A\u7B2C1\u30012\u5C55\u89BD\u5EF3</div><div class="text-base font-normal xl:my-1">\u7968\u50F9\uFF1A\u514D\u8CBB\u53C3\u89C0</div><div class="text-base font-normal xl:my-1">\u5730\u9EDE\uFF1A\u570B\u7ACB\u81FA\u7063\u85DD\u8853\u6559\u80B2\u9928 \u7B2C1\u30012\u5C55\u89BD\u5EF3</div><div class="text-base font-normal text-red-900 xl:my-1">\u5373\u65E5\u8D77\u9808\u914D\u6234\u53E3\u7F69\u4E14\u984D\u6EAB\u672A\u8D85\u904E37.5\u5EA6\u8005\uFF0C\u59CB\u5F97\u5165\u9928\uFF0C\u8A73\u60C5\u8ACB\u898B\u6700\u65B0\u6D88\u606F\u3002</div></div>',2),b=l("div",{class:"my-2 text-lg font-bold"},"\u89C0\u5C55\u9808\u77E5",-1),u={class:"list-disc list-outside"},h=o('<li class="text-base font-normal xl:my-1">\u5C55\u5834\u5167\u8ACB\u52FF\u651C\u5E36\u98DF\u7269\u3001\u98F2\u6599\u3001\u96E8\u5098\u3001\u5BF5\u7269\u5165\u5834\u3002</li><li class="text-base font-normal xl:my-1">\u5C55\u5834\u5167\u7981\u6B62\u89F8\u6478\u5C55\u54C1\u3002</li><li class="text-base font-normal xl:my-1">\u5165\u9928\u53C3\u89C0\u8ACB\u9075\u5B88\u53C3\u89C0\u79E9\u5E8F\uFF0C\u5171\u540C\u7DAD\u6301\u53C3\u89C0\u54C1\u8CEA\u3002</li><li class="text-base font-normal xl:my-1">\u70BA\u7DAD\u8B77\u5C55\u5834\u53C3\u89C0\u54C1\u8CEA\u53CA\u5B89\u5168\uFF0C\u5165\u5834\u53C3\u89C0\u524D\u8ACB\u6536\u59A5\u60A8\u7684\u81EA\u62CD\u8A2D\u5099\u3002</li><li class="text-base font-normal xl:my-1">\u5C55\u89BD\u4F5C\u54C1\u9664\u7279\u6B8A\u8072\u660E\u5916\uFF0C\u539F\u5247\u4E0A\u540C\u610F\u5728\u4E0D\u4F7F\u7528\u9583\u5149\u71C8\u53CA\u8173\u67B6\u4E4B\u60C5\u6CC1\u4E0B\u9069\u5EA6\u958B\u653E\u62CD\u7167\u3002</li>',5),y={class:"text-base font-normal xl:my-1"},p=s("\u5C55\u6F14\u6D3B\u52D5\u89C0\u5C55\u8A73\u60C5\u5373\u6642\u516C\u544A\u65BC"),w=s("\u6700\u65B0\u6D88\u606F "),g=s("\u3002"),V=l("div",{class:"relative float-right w-1/2 h-full md:w-full md: -scroll-mt-10 md:h-1/2"},[l("div",{class:"my-2 text-lg font-bold"},"\u4EA4\u901A\u65B9\u5F0F"),l("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14460.1568496027!2d121.5120648!3d25.0327433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd65b56c15052fd6b!2z5ZyL56uL6Ie654Gj6Jed6KGT5pWZ6IKy6aSo!5e0!3m2!1szh-TW!2stw!4v1652287018607!5m2!1szh-TW!2stw",class:"w-full mb-5 border border-solid rounded-lg h-1/2 border-zinc-600",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}," "),l("div",{class:"absolute bottom-0 flex flex-col justify-between list-decimal list-inside h-2/5"},[l("div",null,[l("div",{class:"mb-2 text-lg font-bold"},"\u642D\u516C\u8ECA"),l("ul",{class:"list-disc list-inside"},[l("li",null,"243\u3001248\u3001262\u3001304\u3001706\u65BC\u300C\u4E2D\u6B63\u4E8C\u5206\u5C40\u7AD9\u300D\u4E0B\u8ECA\u3002"),l("li",null,"1\u3001204\u3001630\u65BC\u300C\u5EFA\u570B\u4E2D\u5B78\u7AD9\u300D\u4E0B\u8ECA\u3002"),l("li",null,"3\u30015\u300118\u300138\u3001227\u3001235\u3001241\u3001243\u3001295\u3001662\u3001663\u65BC\u300C\u5357\u660C\u8DEF\u7AD9\u300D\u4E0B\u8ECA\u3002"),l("li",null,"\u7F85\u65AF\u798F\u8DEF\u5404\u7DDA\u516C\u8ECA\u65BC\u300C\u5357\u9580\u5E02\u5834\u7AD9\u300D\u4E0B\u8ECA\u3002"),l("li",null,"1\u3001204\u3001630\u3001242\u3001624\u3001907\u3001\u548C\u5E73\u5E79\u7DDA\u3001\u85CD28\u65BC\u300C\u690D\u7269\u5712\u7AD9\u300D\u4E0B\u8ECA\u3002")])]),l("div",null,[l("div",{class:"mb-2 text-lg font-bold"},"\u642D\u6377\u904B"),l("ul",{class:"list-disc list-inside"},[l("li",null,"\u6DE1\u6C34\u7DDA\u4E2D\u6B63\u7D00\u5FF5\u5802\u7AD91\u30012\u865F\u51FA\u53E3"),l("li",null,"\u5C0F\u5357\u9580\u7DDA\u5C0F\u5357\u9580\u7AD9\u4E0B\u8ECA3\u865F\u51FA\u53E3")])])])],-1),k={setup(z){return(N,I)=>(i(),a("div",r,[t(c,{class:"mb-10"},{default:e(()=>[t(m,null,{default:e(()=>[f]),_:1})]),_:1}),l("div",x,[l("div",_,[v,l("div",null,[b,l("ul",u,[h,l("li",y,[p,t(d(n),{to:"/News",class:"font-bold dec underline"},{default:e(()=>[w]),_:1}),g])])])]),V])]))}};export{k as default};
