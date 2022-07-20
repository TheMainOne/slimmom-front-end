"use strict";(self.webpackChunkslimmom_front_end=self.webpackChunkslimmom_front_end||[]).push([[714],{6874:function(e,t,n){n.d(t,{Z:function(){return R}});var i,r,a=n(4165),o=n(1413),d=n(5861),l=n(9439),h=n(2506),u=n(7939),s=u.ZP.form.withConfig({displayName:"CalculatoralorieFormstyled__Form",componentId:"sc-oqpy5b-0"})(["min-width:280px;display:flex;flex-direction:column;@media (min-width:","){align-items:flex-start;}"],(function(e){return e.theme.breakpoints.tablet})),c=u.ZP.div.withConfig({displayName:"CalculatoralorieFormstyled__Block",componentId:"sc-oqpy5b-1"})(["margin-top:19px;"]),g=u.ZP.div.withConfig({displayName:"CalculatoralorieFormstyled__InputContainer",componentId:"sc-oqpy5b-2"})(["@media (min-width:","){display:flex;width:510px;}@media (min-width:","){align-items:flex-start;}"],(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.desktop})),m=u.ZP.div.withConfig({displayName:"CalculatoralorieFormstyled__Wrapper",componentId:"sc-oqpy5b-3"})([""]),p=u.ZP.div.withConfig({displayName:"CalculatoralorieFormstyled__BoxButton",componentId:"sc-oqpy5b-4"})(["margin:auto;margin-top:40px;@media (min-width:","){margin:28px 0 0;}@media (min-width:","){margin-left:auto;margin-right:0;}"],(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.desktop})),x=n(168),f=n(7630),v=n(4479),b=n(7133),y=n(5523),Z=(0,f.ZP)(v.Z)({color:"#E0E0E0","&.Mui-checked":{color:" #fc842d"}}),w=(0,f.ZP)(b.Z)(i||(i=(0,x.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.2;\n  letter-spacing: 0.04em;\n  margin-bottom: 8.5px;\n  color: #9b9faa;\n\n  @media screen and (min-width: 768px) {\n    padding-bottom: 11px;\n    border-bottom: 1px solid #e0e0e0;\n    display: block;\n  }\n"]))),W=(0,f.ZP)(y.Z)(r||(r=(0,x.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.2;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n"]))),j=n(765),C=n(2791),k=n(5048),T=n(1014),_=n(2020),N=n(3541),P=function(e){var t={};return null!==e&&void 0!==e&&e.age&&Object.keys(e).forEach((function(n){return t[n]=Number(e[n])})),t},E=n(5708),I=n(2051),M=n.n(I),q=n(8747),B=n(1729),F=n(7942),z=n(184),D=[1,2,3,4],R=function(e){var t=e.openModal,n=e.getPrivatDailyNorma,i=(0,_.$)().t,r=(0,C.useState)(1),u=(0,l.Z)(r,2),x=u[0],f=u[1],v=M()(),b=(0,l.Z)(v,2),y=b[0],I=b[1].width,R=(0,k.I0)(),S=(0,k.v9)(T.M7),H=I<=767,V=(0,E.jo)(),$=(0,l.Z)(V,2)[1],A=F.Ry({height:F.Rx().typeError(i("validation.heightTypeError")).min(100,i("validation.heightMin")).max(250,i("validation.heightMax")).required(i("validation.height")),age:F.Rx(i("validation.ageNumber")).typeError(i("validation.ageTypeError")).min(18,i("validation.ageMin")).max(100,i("validation.ageMax")).required(i("validation.age")),currentWeight:F.Rx(i("validation.currentWeightNumber")).typeError(i("validation.currentWeightTypeError")).min(20,i("validation.currentWeightMin")).max(500,i("validation.currentWeightMax")).required(i("validation.currentWeight")),desiredWeight:F.Rx(i("validation.desiredWeightNumber")).typeError(i("validation.desiredWeightTypeError")).min(20,i("validation.desiredWeightMin")).max(500,i("validation.desiredWeightMax")).required(i("validation.desiredWeight"))}),L=(0,h.TA)({initialValues:{height:"",age:"",currentWeight:"",desiredWeight:""},validationSchema:A,onSubmit:function(){var e=(0,d.Z)((0,a.Z)().mark((function e(i,r){var d,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d=r.resetForm,l=(0,o.Z)((0,o.Z)({},i),{},{bloodType:x}),R((0,N.M)(P(l))),!S){e.next=6;break}return e.next=6,n(l);case 6:if(!L.dirty||S||H){e.next=9;break}return e.next=9,t();case 9:if(!L.dirty||S||!H){e.next=12;break}return e.next=12,$();case 12:d();case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()});return(0,z.jsxs)(s,{onSubmit:L.handleSubmit,children:[y,(0,z.jsxs)(g,{children:[(0,z.jsxs)(m,{children:[(0,z.jsx)(B.I,{name:"height",label:i("height"),value:L.values.height,onChange:L.handleChange,error:L.touched.height&&Boolean(L.errors.height),helperText:L.touched.height&&L.errors.height}),(0,z.jsx)(B.I,{name:"age",label:i("age"),value:L.values.age,onChange:L.handleChange,error:L.touched.age&&Boolean(L.errors.age),helperText:L.touched.age&&L.errors.age}),(0,z.jsx)(B.I,{name:"currentWeight",label:i("weight"),type:"currentWeight",value:L.values.currentWeight,onChange:L.handleChange,error:L.touched.currentWeight&&Boolean(L.errors.currentWeight),helperText:L.touched.currentWeight&&L.errors.currentWeight})]}),(0,z.jsxs)(m,{children:[(0,z.jsx)(B.I,{name:"desiredWeight",label:i("desiredWeight"),value:L.values.desiredWeight,onChange:L.handleChange,error:L.touched.desiredWeight&&Boolean(L.errors.desiredWeight),helperText:L.touched.desiredWeight&&L.errors.desiredWeight}),(0,z.jsxs)(c,{children:[(0,z.jsx)(w,{id:"demo-row-radio-buttons-group-label",children:i("bloodType")}),(0,z.jsx)(j.Z,{id:"bloodType",row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",onChange:function(e){return f(e.target.value)},children:D.map((function(e){return(0,z.jsx)(W,{value:e,control:(0,z.jsx)(Z,{}),label:e,checked:e===Number(x)},e)}))})]})]})]}),(0,z.jsx)(p,{children:(0,z.jsx)(q.z,{type:"submit",text:i("start")})})]})}},1729:function(e,t,n){n.d(t,{I:function(){return a}});var i=n(3183),r=n(184),a=function(e){var t=e.variant,n=void 0===t?"standard":t,a=e.name,o=void 0===a?"":a,d=e.type,l=void 0===d?"text":d,h=e.label,u=void 0===h?"":h,s=e.value,c=void 0===s?"":s,g=e.onChange,m=void 0===g?function(){}:g,p=e.error,x=void 0!==p&&p,f=e.helperText,v=void 0===f?"":f,b=e.autoComplete,y=void 0===b?"":b;return(0,r.jsx)(i.L,{variant:n,id:o,name:o,type:l,label:u,value:c,onChange:m,error:x,helperText:v,autoComplete:y})}},3287:function(e,t,n){n.d(t,{Z:function(){return d}});var i,r=n(168),a=n(7939).ZP.h1(i||(i=(0,r.Z)(["\n  width: 280px;\n  font-size: 18px;\n  font-weight: 700;\n  font-family: 'Verdana Bold';\n  line-height: ",";\n\n  @media (min-width: ",") {\n    width: 550px;\n    font-size: 34px;\n    line-height: ",";\n  }\n"])),(function(e){return e.theme.lineHeight.pageTitleHeight}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.lineHeight.verdanaHeight})),o=n(184),d=function(e){var t=e.title;return(0,o.jsx)(a,{children:t})}},7646:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var i,r=n(9439),a=n(366),o=n(6874),d=n(3287),l=n(168),h=n(7939).ZP.div(i||(i=(0,l.Z)(["\n  margin-top: 32px;\n\n  @media (min-width: 1280px) {\n    margin-top: 62px;\n  }\n"]))),u=n(2020),s=n(184),c=function(e){var t=e.getPrivatDailyNorma,n=(0,u.$)().t;return(0,s.jsxs)(a.qm,{children:[(0,s.jsx)(d.Z,{title:n("title")}),(0,s.jsx)(h,{children:(0,s.jsx)(o.Z,{getPrivatDailyNorma:t})})]})},g=n(4257),m=n(3452),p=function(){var e=(0,m.Xr)(),t=(0,r.Z)(e,2),n=t[0],i=t[1].data;return(0,s.jsxs)(a._z,{children:[(0,s.jsx)(c,{getPrivatDailyNorma:n}),(0,s.jsx)(g.m,{userData:i})]})}}}]);
//# sourceMappingURL=714.a9ea425d.chunk.js.map