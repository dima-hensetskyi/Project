(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},82:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n.n(a),i=n(8),o=n.n(i);n(46),n.p,n(47),n(48);var s=function(){return Object(c.jsxs)("div",{className:"balance-block",children:[Object(c.jsx)("div",{className:"balance-text-sum",children:"$100000"}),Object(c.jsx)("div",{className:"balance-text",children:"Current Balance"})]})},l=n(93),d=n(91),j=(n(49),n(9)),u=n(25),b=n(15),O=n(90),h=n(12),g=n(94),m=n(92),f=n(40),p=n(36),x=n.n(p),v=(n(62),n(63),n.p+"static/media/056-plus.a0162b51.png"),y=n.p+"static/media/058-error.7568cf92.png",C=n.p+"static/media/218-edit.3ae610dc.png",N=n.p+"static/media/059-success.6776e7db.png",D=n.p+"static/media/057-minus.f7328416.png";n(64);var S=function(e){var t=e.iconName,n=e.size,a=void 0===n?"small":n,r=e.onClick;return Object(c.jsx)("div",{className:"icon-button-".concat(a),onClick:r,children:Object(c.jsx)("img",{src:function(e){switch(e){case"add":return v;case"delete":return y;case"edit":return C;case"save":return N;case"cancel":return D}}(t),alt:"".concat(t," icon button")})})},w=[{value:"food",label:"Food"},{value:"clothes",label:"Clothes"},{value:"restaurant",label:"Restaurant"},{value:"utility bills",label:"Utility bills"},{value:"pets",label:"Pets"}];var k=function(e){var t=e.id,n=e.category,a=e.description,r=e.date,i=e.money,o=e.onChargeChange,s=e.onSaveNewCharge,l=e.onCancelNewCharge;return Object(c.jsxs)("tr",{className:"charge-row",children:[Object(c.jsx)("td",{children:Object(c.jsx)(f.a,{value:{value:n,label:n},onChange:function(e){return o({id:t,description:a,date:r,money:i,category:e.value})},categoriesOptions:w})}),Object(c.jsx)("td",{children:Object(c.jsx)(m.a.Control,{type:"text",placeholder:"Description",onChange:function(e){var c=e.target;return o({id:t,description:c.value,date:r,money:i,category:n})},value:a})}),Object(c.jsx)("td",{children:Object(c.jsx)(x.a,{formatDate:h.formatDate,parseDate:h.parseDate,value:Object(h.formatDate)(r),onDayChange:function(e){return o({id:t,description:a,date:Object(h.formatDate)(e),money:i,category:n})}})}),Object(c.jsx)("td",{children:Object(c.jsx)(m.a.Control,{type:"text",placeholder:"Money",onChange:function(e){var c=e.target;return o({id:t,description:a,date:r,money:c.value,category:n})},value:i})}),Object(c.jsx)("td",{children:Object(c.jsxs)("div",{className:"action-buttons",children:[Object(c.jsx)(S,{iconName:"save",onClick:s}),Object(c.jsx)(S,{iconName:"cancel",onClick:l})]})})]})},F=(n(82),n(37)),I=n.n(F);var J=function(){var e=JSON.parse(localStorage.getItem("charges")),t=Object(a.useState)(e||[]),n=Object(b.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)(null),s=Object(b.a)(o,2),l=s[0],d=s[1],m=Object(a.useState)(),f=Object(b.a)(m,2),p=f[0],x=f[1],v=Object(a.useState)("desc"),y=Object(b.a)(v,2),C=y[0],N=y[1],D=Object(a.useState)("id"),w=Object(b.a)(D,2),F=w[0],J=w[1],M=function(){var e=r.map((function(e){return e.id===l.id?l:e}));localStorage.setItem("charges",JSON.stringify(e)),i(e),d(null),x(null)},B=function(){d(null),x(null)},A=function(e){d(e)},K=function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.category}),Object(c.jsx)("td",{children:e.description}),Object(c.jsx)("td",{children:e.date}),Object(c.jsx)("td",{children:e.money}),Object(c.jsx)("td",{children:Object(c.jsxs)("div",{className:"action-buttons",children:[Object(c.jsx)(S,{iconName:"edit",onClick:function(){return function(e){x(e.id),d(e)}(e)}}),Object(c.jsx)(S,{iconName:"delete",onClick:function(){return function(e){var t=r.filter((function(t){return t.id!==e}));localStorage.setItem("charges",JSON.stringify(t)),i(Object(u.a)(t))}(e.id)}})]})})]},e.id)},L=function(e){var t=r.map((function(e){if("string"===typeof e.date||"string"===typeof moneyFormat){var t=Date.parse(e.date),n=e.money.replace(/\D/g,"");return Object(j.a)(Object(j.a)({},e),{},{money:Number(n),date:t})}return e})),n="desc"===C?"asc":"desc";N(n),J(e);var c=I.a.orderBy(t,e.toLowerCase(),n).map((function(e){var t=new Date(e.date),n="".concat(function(e){return e.getMonth()<=8?"0".concat(e.getMonth()+1):"".concat(e.getMonth()+1)}(t),"/").concat(function(e){return e.getDate()<=9?"0".concat(e.getDate()):"".concat(e.getDate())}(t),"/").concat(t.getFullYear());return Object(j.a)(Object(j.a)({},e),{},{money:e.money+"$",date:n})}));i(c)};return Object(c.jsxs)("div",{className:"charge-table",children:[Object(c.jsx)("div",{className:"d-flex justify-content-end pb-3",children:Object(c.jsx)(S,{iconName:"add",size:"big",onClick:function(){d({id:Object(g.a)(),category:"",description:"",date:Object(h.formatDate)(new Date),money:""})}})}),Object(c.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsx)("tr",{children:["Category","Description","Date","Money","Action"].map((function(e,t){return Object(c.jsx)("th",{onClick:L.bind(null,"".concat(e)),className:F===e?"sort":"notSorting",children:e},t)}))})}),Object(c.jsxs)("tbody",{children:[r.map((function(e){return p===e.id?Object(c.jsx)(k,Object(j.a)(Object(j.a)({},l),{},{onChargeChange:A,onSaveNewCharge:M,onCancelNewCharge:B}),e.id):K(e)})),l&&!p&&Object(c.jsx)(k,Object(j.a)(Object(j.a)({},l),{},{onChargeChange:A,onSaveNewCharge:function(){localStorage.setItem("charges",JSON.stringify([].concat(Object(u.a)(r),[l]))),i([].concat(Object(u.a)(r),[l])),d(null),x(null)},onCancelNewCharge:B}),l.id)]})]})]})};var M=function(){return Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)("nav",{className:"navigation-wrapper",children:Object(c.jsx)(s,{})}),Object(c.jsx)("div",{className:"charges-page",children:Object(c.jsxs)(l.a,{defaultActiveKey:"charges",id:"uncontrolled-tab-example",className:"mb-5",children:[Object(c.jsx)(d.a,{eventKey:"charges",title:"Charges",children:Object(c.jsx)(J,{})}),Object(c.jsx)(d.a,{eventKey:"incomes",title:"Incomes",children:Object(c.jsx)("h2",{children:"Any content 2"})})]})})]})};n(85);var B=function(){return Object(c.jsx)(M,{})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root")),A()}},[[86,1,2]]]);
//# sourceMappingURL=main.1799528e.chunk.js.map