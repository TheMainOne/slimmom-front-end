"use strict";(self.webpackChunkslimmom_front_end=self.webpackChunkslimmom_front_end||[]).push([[260],{4941:function(n,e,t){t.d(e,{Z:function(){return I}});var i,r,o=t(4165),a=t(1413),d=t(5861),l=t(9439),s=t(2506),h=t(7939),u=h.ZP.form.withConfig({displayName:"CalculatoralorieFormstyled__Form",componentId:"sc-oqpy5b-0"})(["min-width:280px;display:flex;flex-direction:column;@media (min-width:","){align-items:flex-start;}"],(function(n){return n.theme.breakpoints.tablet})),c=h.ZP.div.withConfig({displayName:"CalculatoralorieFormstyled__Block",componentId:"sc-oqpy5b-1"})(["margin-top:19px;"]),m=h.ZP.div.withConfig({displayName:"CalculatoralorieFormstyled__InputContainer",componentId:"sc-oqpy5b-2"})(["@media (min-width:","){display:flex;width:510px;}@media (min-width:","){align-items:flex-start;}"],(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.desktop})),g=h.ZP.div.withConfig({displayName:"CalculatoralorieFormstyled__Wrapper",componentId:"sc-oqpy5b-3"})([""]),p=h.ZP.div.withConfig({displayName:"CalculatoralorieFormstyled__BoxButton",componentId:"sc-oqpy5b-4"})(["margin:auto;margin-top:40px;@media (min-width:","){margin:28px 0 0;}@media (min-width:","){margin-left:auto;margin-right:0;}"],(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.desktop})),x=t(168),f=t(7630),b=t(4479),v=t(7133),Z=t(5523),y=t(7391),w=(0,f.ZP)(b.Z)({color:"#E0E0E0","&.Mui-checked":{color:" #fc842d"}}),j=(0,f.ZP)(v.Z)(i||(i=(0,x.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.2;\n  letter-spacing: 0.04em;\n  margin-bottom: 8.5px;\n  color: #9b9faa;\n\n  @media screen and (min-width: 768px) {\n    padding-bottom: 11px;\n    border-bottom: 1px solid #e0e0e0;\n    display: block;\n  }\n"]))),C=(0,f.ZP)(Z.Z)(r||(r=(0,x.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.2;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n"]))),P=(0,f.ZP)(y.Z)({"& ":{marginBottom:"20px",width:"240px"},"& label":{color:"#9B9FAA",fontFamily:"Verdana",fontWeight:700,fontSize:"14px",lineHeight:"1.2",letterSpacing:"0.04em"},"& label.Mui-focused":{color:"#FC842D"},"& .MuiInput-underline:before":{borderBottom:"1px solid #E0E0E0"},"& .MuiInput-underline:after":{borderBottomColor:"#FC842D"}}),W=t(765),k=t(2791),F=t(5048),M=t(1014),S=t(3168),q=t(7942),z=q.Ry({height:q.Rx("Height it is number").min(100,"Height should be of min 100").max(250,"Height should be of max 250").required("Height is required"),age:q.Rx("Age it is number").min(18,"Age should be of min 18").max(100,"Age should be of max 100").required("Age is required"),currentWeight:q.Rx("CurrentWeight it is number").min(20,"CurrentWeight should be of min 20").max(500,"CurrentWeight should be of max 500").required("CurrentWeight is required"),desiredWeight:q.Rx("DesiredWeight it is number").min(20,"DesiredWeight should be of min 20").max(500,"DesiredWeight should be of max 500").required("DesiredWeight is required")}),B=t(3541),T=function(n){var e={};return null!==n&&void 0!==n&&n.age&&Object.keys(n).forEach((function(t){return e[t]=Number(n[t])})),e},H=t(5708),_=t(2051),D=t.n(_),$=t(8747),N=t(184),E=[1,2,3,4],I=function(n){var e=n.openModal,t=n.getPrivatDailyNorma,i=(0,S.$)().t,r=(0,k.useState)(1),h=(0,l.Z)(r,2),x=h[0],f=h[1],b=D()(),v=(0,l.Z)(b,2),Z=v[0],y=v[1].width,q=(0,F.I0)(),_=(0,F.v9)(M.M7),I=y<=767,A=(0,H.s)(),R=(0,l.Z)(A,2)[1],V=(0,s.TA)({initialValues:{height:"",age:"",currentWeight:"",desiredWeight:""},validationSchema:z,onSubmit:function(){var n=(0,d.Z)((0,o.Z)().mark((function n(i,r){var d,l;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(d=r.resetForm,l=(0,a.Z)((0,a.Z)({},i),{},{bloodType:x}),q((0,B.M)(T(l))),!_){n.next=6;break}return n.next=6,t(l);case 6:if(!V.dirty||_||I){n.next=9;break}return n.next=9,e();case 9:if(!V.dirty||_||!I){n.next=12;break}return n.next=12,R();case 12:d();case 13:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()});return(0,N.jsxs)(u,{onSubmit:V.handleSubmit,children:[Z,(0,N.jsxs)(m,{children:[(0,N.jsxs)(g,{children:[(0,N.jsx)(P,{variant:"standard",id:"height",name:"height",label:i("height"),value:V.values.height,onChange:V.handleChange,error:V.touched.height&&Boolean(V.errors.height),helperText:V.touched.height&&V.errors.height}),(0,N.jsx)(P,{variant:"standard",id:"age",name:"age",label:i("age"),value:V.values.age,onChange:V.handleChange,error:V.touched.age&&Boolean(V.errors.age),helperText:V.touched.age&&V.errors.age}),(0,N.jsx)(P,{variant:"standard",id:"currentWeight",name:"currentWeight",label:i("weight"),type:"currentWeight",value:V.values.currentWeight,onChange:V.handleChange,error:V.touched.currentWeight&&Boolean(V.errors.currentWeight),helperText:V.touched.currentWeight&&V.errors.currentWeight})]}),(0,N.jsxs)(g,{children:[(0,N.jsx)(P,{variant:"standard",id:"desiredWeight",name:"desiredWeight",label:i("desiredWeight"),value:V.values.desiredWeight,onChange:V.handleChange,error:V.touched.desiredWeight&&Boolean(V.errors.desiredWeight),helperText:V.touched.desiredWeight&&V.errors.desiredWeight}),(0,N.jsxs)(c,{children:[(0,N.jsx)(j,{id:"demo-row-radio-buttons-group-label",children:i("bloodType")}),(0,N.jsx)(W.Z,{id:"bloodType",row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",onChange:function(n){return f(n.target.value)},children:E.map((function(n){return(0,N.jsx)(C,{value:n,control:(0,N.jsx)(w,{}),label:n,checked:n===Number(x)},n)}))})]})]})]}),(0,N.jsx)(p,{children:(0,N.jsx)($.z,{type:"submit",text:i("start")})})]})}},6893:function(n,e,t){t.d(e,{o:function(){return s}});var i=t(5708),r=t(4164),o=t(3895),a=t(1642),d=t(184),l=(0,o.H)().mobileModalRoot,s=function(n){var e=n.onClose,t=n.children;return(0,i.oS)(),(0,i.Dj)(e),(0,r.createPortal)((0,d.jsx)(a.hZ,{children:(0,d.jsx)(a.dX,{children:t})}),l)}},3287:function(n,e,t){t.d(e,{Z:function(){return d}});var i,r=t(168),o=t(7939).ZP.h1(i||(i=(0,r.Z)(["\n  width: 280px;\n  font-size: 18px;\n  font-weight: 700;\n  font-family: 'Verdana Bold';\n  line-height: ",";\n\n  @media (min-width: ",") {\n    width: 550px;\n    font-size: 34px;\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.lineHeight.pageTitleHeight}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.lineHeight.verdanaHeight})),a=t(184),d=function(n){var e=n.title;return(0,a.jsx)(o,{children:e})}},4260:function(n,e,t){t.r(e),t.d(e,{default:function(){return en}});var i,r,o,a,d,l,s,h,u,c,m,g,p=t(9439),x=t(2791),f=t(3287),b=t(168),v=t(7939),Z=v.ZP.div(i||(i=(0,b.Z)(["\n  height: 100%;\n  padding-top: ",";\n\n  @media (min-width: ",") {\n    padding-top: ",";\n    padding-bottom: ",";\n\n    @media (max-width: 1279px) and (orientation: landscape) {\n      padding-bottom: ",";\n    }\n  }\n\n  @media (min-width: ",") {\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n"])),(function(n){return(0,n.theme.spacing)(8)}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return(0,n.theme.spacing)(25)}),(function(n){return(0,n.theme.spacing)(99)}),(function(n){return(0,n.theme.spacing)(28)}),(function(n){return n.theme.breakpoints.desktop}),(function(n){return(0,n.theme.spacing)(36)}),(function(n){return(0,n.theme.spacing)(28)})),y=v.ZP.div(r||(r=(0,b.Z)(["\n  width: 100%;\n  margin-top: 32px;\n  @media (min-width: ",") {\n    margin-top: 62px;\n    width: 512px;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),w=t(366),j=t(7630),C=t(5574),P=t(9157),W=t(6871),k=t(8747),F=t(5048),M=v.ZP.h2(o||(o=(0,b.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 26px;\n  line-height: ",";\n  width: 390px;\n  color: ",";\n  margin-bottom: ",";\n\n  @media screen and (max-width: 767px) {\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 26px;\n    max-width: 280px;\n    text-align: start;\n  }\n"])),(function(n){return n.theme.lineHeight.verdanaHeight}),(function(n){return n.theme.colors.$black}),(function(n){return(0,n.theme.spacing)(5)})),S=v.ZP.p(a||(a=(0,b.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 58px;\n  text-align: center;\n  letter-spacing: 0.04em;\n  margin-bottom: 32px;\n\n  color: ",";\n"])),(function(n){return n.theme.colors.$blue})),q=v.ZP.span(d||(d=(0,b.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: center;\n  letter-spacing: 0.04em;\n  margin-bottom: 16px;\n\n  color: ",";\n\n  @media screen and (max-width: 767px) {\n  }\n"])),(function(n){return n.theme.colors.$blue})),z=v.ZP.div(l||(l=(0,b.Z)(["\n  min-height: 300px;\n"]))),B=t(8380),T=t(7325),H=v.ZP.div(s||(s=(0,b.Z)(["\n  min-height: 220px;\n  text-align: start;\n"]))),_=v.ZP.ol(h||(h=(0,b.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  text-align: start;\n  padding: 20px;\n\n  color: ",";\n  @media screen and (max-width: 767px) {\n    text-align: start;\n  }\n"])),(function(n){return n.theme.colors.$grey})),D=v.ZP.li(u||(u=(0,b.Z)(["\n  margin-bottom: 10px;\n\n  color: ",";\n"])),(function(n){return n.theme.colors.$grey})),$=v.ZP.h3(c||(c=(0,b.Z)(["\n  text-align: start;\n  ::before {\n    content: '';\n    width: 330px;\n    margin-bottom: 20px;\n\n    display: flex;\n    flex-direction: row;\n    border: 1px solid ",";\n    @media screen and (max-width: 767px) {\n      width: 280px;\n    }\n  }\n  @media screen and (max-width: 767px) {\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.04em;\n  }\n"])),(function(n){return n.theme.colors.$lightGrey})),N=t(3168),E=t(184),I=function(n){n.user;var e,t,i=n.data,r=(n.isLoading,(0,N.$)().t),o=i&&Object.keys(null===i||void 0===i||null===(e=i.results)||void 0===e||null===(t=e.bannedProducts)||void 0===t?void 0:t.categories);return(0,E.jsxs)(H,{children:[o&&(0,E.jsx)($,{children:r("bannedFood")}),(0,E.jsx)(_,{children:o&&o.map((function(n){return(0,E.jsx)(D,{children:n},n)}))})]})},A=t(1014),R=function(){var n,e=(0,N.$)().t,t=(0,F.v9)(A.is),i=(0,B.b)(),r=(0,p.Z)(i,2),o=r[0],a=r[1],d=a.data,l=a.isLoading;(0,x.useEffect)((function(){if(t){var n=t.height,e=t.age,i=t.currentWeight,r=t.desiredWeight,a=t.bloodType;o({currentWeight:i,height:n,age:e,desiredWeight:r,bloodType:a})}}),[o,t]);var s=null===d||void 0===d||null===(n=d.results)||void 0===n?void 0:n.dailyRate;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(M,{children:e("recommendation")}),(0,E.jsx)(z,{children:l?(0,E.jsx)(T.$,{}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(S,{children:[s," ",(0,E.jsx)(q,{children:e("kcal")})]}),(0,E.jsx)(I,{user:t,data:d,isLoading:l})]})})]})},V=t(6856),O=v.ZP.div(m||(m=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: ",";\n  text-align: center;\n  font-family: 'Verdana';\n  margin: auto;\n  margin-top: 64px;\n\n  color: ",";\n"])),(function(n){return n.theme.lineHeight.verdanaHeight}),(function(n){return n.theme.colors.$black})),G=(0,v.ZP)(V.FU5)(g||(g=(0,b.Z)(["\n  cursor: pointer;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  z-index: 10;\n\n  @media screen and (max-width: 767px) {\n    display: none;\n  }\n"]))),L=function(n){var e=n.setShowModal,t=(0,W.s0)();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(O,{children:[(0,E.jsx)(R,{}),(0,E.jsx)(k.z,{autoFocus:!0,text:"Start losing weight",onClick:function(){return t("/signup")}})]}),(0,E.jsx)(G,{"aria-label":"Close modal",onClick:function(){e((function(n){return!n}))}})]})},X=t(2051),U=t.n(X),J=t(6893),K=t(5708),Q=(0,j.ZP)(C.Z)((function(n){n.theme;return{"& .MuiDialogContent-root":{width:672,height:560}}})),Y=function(n){var e=n.showModal,t=n.setShowModal,i=U()(),r=(0,p.Z)(i,2),o=r[0],a=r[1].width<=767,d=(0,K.s)(),l=(0,p.Z)(d,2),s=l[0],h=l[1];return(0,E.jsxs)(E.Fragment,{children:[o,a?s&&(0,E.jsx)(J.o,{onClose:h,children:(0,E.jsx)(L,{})}):(0,E.jsx)("div",{children:(0,E.jsx)(Q,{onClose:function(){t((function(n){return!n}))},"aria-labelledby":"customized-dialog-title",open:e,maxWidth:!1,children:(0,E.jsx)(P.Z,{children:(0,E.jsx)(L,{setShowModal:t})})})})]})},nn=t(4941),en=function(){var n=U()(),e=(0,p.Z)(n,1)[0],t=(0,x.useState)(!1),i=(0,p.Z)(t,2),r=i[0],o=i[1],a=(0,N.$)().t;return(0,E.jsx)(w.ZP,{children:(0,E.jsxs)(Z,{children:[e,(0,E.jsx)(f.Z,{title:a("title")}),(0,E.jsx)(y,{children:(0,E.jsx)(nn.Z,{openModal:function(){return o((function(n){return!n}))}})}),(0,E.jsx)(Y,{showModal:r,setShowModal:o})]})})}},8380:function(n,e,t){t.d(e,{X:function(){return r},b:function(){return o}});var i=t(5066).baseApi.injectEndpoints({endpoints:function(n){return{getPrivateDailyNorma:n.mutation({query:function(n){return{url:"/users/daily-norma/private",method:"POST",body:n}},invalidatesTags:["PrivatDailyNorma"]}),getBannedProducts:n.mutation({query:function(n){return{url:"/users/daily-norma/public",method:"POST",body:n}},invalidatesTags:["BannedProducts"]})}}}),r=i.useGetPrivateDailyNormaMutation,o=i.useGetBannedProductsMutation}}]);
//# sourceMappingURL=260.0a09f0e8.chunk.js.map