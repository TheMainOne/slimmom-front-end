"use strict";(self.webpackChunkslimmom_front_end=self.webpackChunkslimmom_front_end||[]).push([[878],{6564:function(n,t,e){e.d(t,{m:function(){return T}});var i=e(885),r=e(5048),a=e(168),o=e(7939),d=e(2791);var l=e.p+"static/media/Layer-4.a8eee669b7640dcc5a9c4e67d35fa9c6.svg";var c,s,u,x,p,h,f,m,g,b,j=e.p+"static/media/Layer-5.02bd20ea58ab3bc0124fa64536fa81b0.svg",v=o.ZP.div(c||(c=(0,a.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: ",";\n  color: ",";\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n"])),(function(n){return n.theme.lineHeight.verdanaHeight}),(function(n){return n.theme.colors.$grey}),(function(n){return n.theme.colors.$lightGrey})),y=o.ZP.div(s||(s=(0,a.Z)(["\n  background-repeat: no-repeat;\n  padding: 40px 15px 84px 20px;\n\n  @media (min-width: 768px) {\n    width: 768px;\n    min-height: 350px;\n    display: flex;\n    justify-content: flex-start;\n    padding: 91px 10px 91px 87px;\n\n    background-size: 369px 350px;\n    background-position: 399px bottom;\n    background-image: url(",");\n  }\n\n  @media (min-width: 1280px) {\n    width: 517px;\n    min-height: 850px;\n    height: 100vh;\n    padding: 292px 0 0 106px;\n    flex-direction: column;\n    justify-content: flex-start;\n\n    background-size: 505px 815px;\n    background-position: 35px 12px;\n    background-image: url(",");\n  }\n"])),j,l),Z=o.ZP.div(u||(u=(0,a.Z)(["\n  width: 285px;\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n\n  &:first-child {\n    width: 252px;\n    margin-bottom: 40px;\n\n    @media (min-width: 768px) {\n      margin-bottom: 0px;\n      margin-right: 60px;\n    }\n\n    @media (min-width: 1280px) {\n      margin-bottom: 60px;\n      margin-left: 0px;\n    }\n  }\n"]))),w=e(184),k=function(n){var t=n.children;return(0,w.jsx)(v,{children:t})},P=function(n){var t=n.children;return(0,w.jsx)(y,{children:t})},D=function(n){var t=n.children;return(0,w.jsx)(Z,{children:t})},L=o.ZP.table(x||(x=(0,a.Z)(["\n  border-collapse: collapse;\n"]))),z=o.ZP.th(p||(p=(0,a.Z)(["\n  text-align: left;\n  width: 150px;\n  border-right: 20px solid transparent;\n  padding-bottom: 14px;\n  font-weight: 400;\n  font-size: 14px;\n"]))),C=o.ZP.td(h||(h=(0,a.Z)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  width: 130px;\n"]))),_=o.ZP.tr(f||(f=(0,a.Z)(["\n  &:last-child "," {\n    padding-bottom: 0px;\n  }\n"])),z),E=function(n){var t=n.data;return(0,w.jsx)(L,{children:(0,w.jsxs)("tbody",{children:[(0,w.jsxs)(_,{children:[(0,w.jsx)(z,{children:"Left"}),(0,w.jsxs)(C,{children:[t.left||"000"," kcal"]})]}),(0,w.jsxs)(_,{children:[(0,w.jsx)(z,{children:"Consumed"}),(0,w.jsxs)(C,{children:[t.consumed||"000"," kcal"]})]}),(0,w.jsxs)(_,{children:[(0,w.jsx)(z,{children:"Daily rate"}),(0,w.jsxs)(C,{children:[t.dailyRate||"000"," kcal"]})]}),(0,w.jsxs)(_,{children:[(0,w.jsx)(z,{children:"n% of normal"}),(0,w.jsxs)(C,{children:[t.percente||"000"," kcal"]})]})]})})},F=e(5066).baseApi.injectEndpoints({endpoints:function(n){return{privatDailyNorma:n.query({query:function(){return"/users/daily-norma"},invalidatesTags:["PrivatDailyNorma"]})}}}).usePrivatDailyNormaQuery,M={dailyData:{},bannedProducts:{}},N=function(n,t){return n.total===n.totalInBase?"\u0412\u0441\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438 \u0438\u0437 \u0433\u0440\u0443\u043f\u044b: ".concat(t,"."):null},R=function(n,t){return n.total>n.totalInBase/2?"\u0411\u043e\u043b\u044c\u0448\u0435\u043d\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u0438\u0437 \u0433\u0440\u0443\u043f\u044b: ".concat(t,"."):null},$=function(n,t){var e=n.total,i=n.products,r=void 0===i?[]:i,a=null===r||void 0===r?void 0:r.map((function(n){return n.title.ru})).join(", ");return e<=4?"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0438\u0437 \u0433\u0440\u0443\u043f\u044b: ".concat(t," (").concat(a,")."):null},q=function(n){return(t=n,t[0]=t[0][0].toUpperCase()+t[0].substring(1),t).join(", ");var t},B=o.ZP.ul(m||(m=(0,a.Z)([""]))),H=o.ZP.li(g||(g=(0,a.Z)(["\n  padding-bottom: 14px;\n\n  &:last-child {\n    padding-bottom: 0;\n  }\n"]))),I=function(n){var t=n.productList;return(0,w.jsx)(w.Fragment,{children:null===t||void 0===t?void 0:t.map((function(n,t){return(0,w.jsx)(H,{children:n},t)}))})},S=function(n){var t=n.foodList,e=(0,d.useMemo)((function(){return function(n){if(n){var t=[],e=[];return Object.keys(n).forEach((function(i){var r=N(n[i],i)||$(n[i],i)||R(n[i],i)||null;r&&t.push(r),r||e.push(i)})),e.length>0&&t.push(q(e)),t}}(t.categories)}),[t]);return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(B,{children:(null===e||void 0===e?void 0:e.length)>0&&(0,w.jsx)(I,{productList:e})||"Your diet will be displayed here"})})},A=o.ZP.h3(b||(b=(0,a.Z)(["\n  font-family: 'Verdana';\n  font-size: 14px;\n  font-weight: 700;\n  color: ",";\n  margin-bottom: 20px;\n\n  @media (min-width: 768px) {\n    margin-bottom: 22px;\n  }\n\n  @media (min-width: 1280px) {\n    margin-bottom: 20px;\n  }\n"])),(function(n){return n.theme.colors.$black})),G=function(n){var t=n.text;return(0,w.jsx)(A,{children:t})},O=e(6386),Q=e(8673),T=function(){var n=(0,r.v9)((function(n){return n.calendar.activeDate})),t=(0,O.default)((0,Q.default)(n),"MM/dd/yyyy"),e=function(){var n=F().data,t=(0,d.useState)(M),e=(0,i.Z)(t,2),r=e[0],a=e[1];return(0,d.useEffect)((function(){var t;n&&a({dailyData:(t=n.results,{left:null,consumed:null,dailyRate:t.dailyRate,percente:null}),bannedProducts:n.results.bannedProducts})}),[n]),[r]}(),a=(0,i.Z)(e,1)[0];return(0,w.jsx)(k,{children:(0,w.jsxs)(P,{children:[(0,w.jsxs)(D,{children:[(0,w.jsx)(G,{text:"Summary for ".concat(t)}),(0,w.jsx)(E,{data:a.dailyData})]}),(0,w.jsxs)(D,{children:[(0,w.jsx)(G,{text:"Food not recommended"}),(0,w.jsx)(S,{foodList:a.bannedProducts})]})]})})}}}]);
//# sourceMappingURL=878.8a08fe8f.chunk.js.map