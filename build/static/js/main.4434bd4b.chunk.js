(this.webpackJsonpreact_project=this.webpackJsonpreact_project||[]).push([[0],{41:function(e,c,t){},42:function(e,c,t){},43:function(e,c,t){},44:function(e,c,t){},52:function(e,c,t){},53:function(e,c,t){},54:function(e,c,t){},55:function(e,c,t){},56:function(e,c,t){},57:function(e,c,t){},58:function(e,c,t){},59:function(e,c,t){},60:function(e,c,t){},61:function(e,c,t){},62:function(e,c,t){},63:function(e,c,t){"use strict";t.r(c);var n=t(2),s=t.n(n),i=t(34),r=t.n(i),a=(t(41),t(42),t(43),t(5)),o=(t(44),t(23)),j=t(24),l=t(15),d=s.a.createContext(),b=t(1);var u=function(){var e=Object(l.useContext)(d).comprados,c=0;return""!==e&&e.map((function(e){return c+=e.productAmount})),Object(b.jsx)("div",{className:"cartWidget",children:Object(b.jsxs)(a.b,{className:"btnBuy",to:"/cart",children:[Object(b.jsx)(o.a,{id:"icon",icon:j.b}),e<1?Object(b.jsx)("p",{}):Object(b.jsx)("p",{className:"numberCompras",children:c})]})})};var O=function(){return Object(b.jsxs)("header",{children:[Object(b.jsx)("div",{className:"logoSection",children:Object(b.jsx)(a.b,{activeClassName:"selected",exact:!0,to:"/",children:Object(b.jsx)("img",{src:"./pumperLogo.png",alt:"Logo Pumper"})})}),Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{activeClassName:"selected",exact:!0,to:"/",children:"PRODUCTS"})}),Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{activeClassName:"selected",exact:!0,to:"/aboutus",children:"ABOUT US"})}),Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{activeClassName:"selected",exact:!0,to:"/contact",children:"CONTACT"})})]})}),Object(b.jsx)(u,{})]})},x=(t(52),t(53),function(){return Object(b.jsx)("div",{className:"categoryConteiner",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{activeClassName:"selected",exact:!0,to:"/category/burger",children:"BURGER"})}),Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{activeClassName:"selected",exact:!0,to:"/category/salad",children:"SALADS"})}),Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{activeClassName:"selected",exact:!0,to:"/category/snack",children:"SNACKS"})})]})})}),h=t(14),m=(t(54),t(55),function(e){var c=e.id,t=e.picture,n=e.name,s=e.price;return Object(b.jsxs)("div",{className:"contenedorItem",children:[Object(b.jsx)("img",{src:t,alt:"hamburgesa"}),Object(b.jsx)("p",{className:"nameItem",children:n}),Object(b.jsxs)("p",{id:"precio",children:["$ ",s]}),Object(b.jsx)(a.b,{to:"/item/".concat(c),children:"DETAILS"})]})}),p=t(21),f=(t(64),p.a.initializeApp({apiKey:"AIzaSyDd2r1L1UPE0JuUz4VTe7o2kqfywLgoCPs",authDomain:"reactburger-cm.firebaseapp.com",projectId:"reactburger-cm",storageBucket:"reactburger-cm.appspot.com",messagingSenderId:"117434434260",appId:"1:117434434260:web:5320c20b34993dee23b141",measurementId:"G-B7FZLL8096"}));function v(){return p.a.firestore(f)}var N=function(e){var c=e.category,t=Object(l.useState)([]),n=Object(h.a)(t,2),s=n[0],i=n[1];return Object(l.useEffect)((function(){v().collection("items").get().then((function(e){if(0!==e.size){i(e.docs.map((function(e){return e.data()})));for(var c=e.docs.map((function(e){return e.data()})),t=e.docs.map((function(e){return e.id})),n=0;n<c.length;n++)Object.defineProperty(c[n],"id",{value:t[n]});i(c)}else console.log("no results")})).catch((function(e){console.log(e)}))}),[]),Object(b.jsx)("div",{className:"itemListConteiner",children:s.map((function(e,t){return c.id===e.type||void 0===c.id?Object(b.jsx)(m,{id:e.id,picture:e.pictureUrl,name:e.title,price:e.price,description:e.description,stock:e.stock},t):void 0}))})};t(56);var g=function(){return Object(b.jsxs)("div",{className:"footerContainer",children:[Object(b.jsxs)("div",{className:"footerA",children:[Object(b.jsx)("p",{children:"PUMPER-NIC\xae"}),Object(b.jsx)(a.b,{activeClassName:"selected",exact:!0,to:"/contact",children:Object(b.jsx)(o.a,{id:"icon",icon:j.a})}),Object(b.jsx)("p",{children:"CODERHOUSE PROJECT \xae"})]}),Object(b.jsx)("div",{className:"footerB"}),Object(b.jsxs)("div",{className:"footerC",children:[Object(b.jsx)("p",{children:"Web developed by Cristian M \xae"}),Object(b.jsx)("p",{children:"2021"})]})]})},C=t(6),y=function(){var e=Object(C.f)();return Object(b.jsxs)("div",{className:"productContainer",children:[Object(b.jsx)(x,{}),Object(b.jsx)(N,{category:e}),Object(b.jsx)(g,{})]})},P=t(36),S=(t(57),t(58),t(59),function(e){var c=e.initial,t=e.stock,s=e.getData,i=Object(n.useState)(c),r=Object(h.a)(i,2),a=r[0],o=r[1];return Object(b.jsxs)("div",{onClick:s(a),className:"Container",children:[Object(b.jsx)("button",{type:"submit",id:"btnplus",onClick:function(){a>=1&&a<=t&&o(a-1)},children:"-"}),Object(b.jsx)("div",{id:"display",children:a}),Object(b.jsx)("button",{type:"submit",id:"btnsubstract",onClick:function(){a>=0&&a<=t-1&&o(a+1)},children:"+"})]})}),A=function(e){var c=e.picture,t=e.name,s=e.price,i=e.description,r=e.stock,o=e.id,j=Object(n.useContext)(d).addProduct,l=Object(n.useState)(0),u=Object(h.a)(l,2),O=u[0],x=u[1],m={productName:t,productAmount:O,productId:o,productPrice:s};return Object(b.jsxs)("div",{className:"contenedorItemdetail",children:[Object(b.jsx)("p",{id:"nameDetail",children:t}),Object(b.jsx)("img",{src:c,alt:"hamburgesa"}),Object(b.jsxs)("p",{id:"precio",children:["$ ",s]}),Object(b.jsx)(S,{getData:function(e){x(e)},initial:0,stock:r}),Object(b.jsx)("div",{className:"btnDiv",children:O<1?Object(b.jsx)("p",{}):Object(b.jsx)(a.b,{onClick:function(){return j(m)},className:"btnBuy",to:"/cart",children:"ADD"})}),Object(b.jsx)("p",{children:i})]})},E=function(){var e=Object(l.useState)([{}]),c=Object(h.a)(e,2),t=c[0],n=c[1],s=Object(C.f)();return Object(l.useEffect)((function(){v().collection("items").doc(s.id).get().then((function(e){e.exists?n([Object(P.a)({id:e.id},e.data())]):console.log("no results")})).catch((function(e){console.log(e)}))}),[s]),Object(b.jsxs)("div",{className:"contenedorItemDetailConteiner",children:[Object(b.jsx)(A,{id:t[0].id,picture:t[0].pictureUrl,name:t[0].title,price:t[0].price,description:t[0].description,stock:t[0].stock},t[0].id),Object(b.jsx)(g,{})]})},D=(t(60),function(){return Object(b.jsxs)("div",{className:"contactAboutus",children:[Object(b.jsx)("div",{className:"info",children:"contact form"}),Object(b.jsx)(g,{})]})}),k=(t(61),function(){return Object(b.jsxs)("div",{className:"conteinerAboutus",children:[Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("div",{className:"parteA",children:"about us"}),Object(b.jsx)("div",{className:"parteB",children:"ubicacion"})]}),Object(b.jsx)(g,{})]})});t(62);var T=function(){var e=Object(n.useContext)(d),c=e.comprados,t=e.deleteProduct,s=0;return c.forEach((function(e){s+=e.productAmount*e.productPrice})),Object(b.jsxs)("div",{className:"cartConteiner",children:[c.length<1?Object(b.jsxs)("div",{className:"buyMessage",children:[Object(b.jsx)("p",{children:"ESTAMOS ESPERANDO TU COMPRA :D"}),Object(b.jsx)(a.b,{activeClassName:"selected",exact:!0,to:"/",children:Object(b.jsx)("img",{src:"./pumperLogo.png",alt:"Logo Pumper"})})]}):Object(b.jsxs)("div",{className:"buyScreen",children:[Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Item"}),Object(b.jsx)("th",{scope:"col",children:"Product"}),Object(b.jsx)("th",{scope:"col",children:"Amount"}),Object(b.jsx)("th",{scope:"col",children:"Unit price"}),Object(b.jsx)("th",{scope:"col",children:"Total Price"})]})}),Object(b.jsxs)("tbody",{children:[c.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"row",children:Object(b.jsx)("button",{onClick:function(){return t(e.productName)},children:"DELETE"})}),Object(b.jsx)("th",{scope:"row",children:e.productName}),Object(b.jsxs)("td",{children:[e.productAmount," u."]}),Object(b.jsxs)("td",{children:["$ ",e.productPrice]}),Object(b.jsxs)("td",{children:["$ ",e.productPrice*e.productAmount]})]},e.productId)})),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"row",children:"-"}),Object(b.jsx)("td",{children:"-"}),Object(b.jsx)("td",{children:"-"}),Object(b.jsx)("td",{children:"-"}),Object(b.jsxs)("td",{children:["$ ",s]})]})]})]}),Object(b.jsx)("div",{className:"buyerData",children:Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:"Billing data:"}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Name:"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",id:"fname",name:"fname"}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Email:"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"mail",id:"mail",name:"mail"}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Phone:"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"number",id:"phone",name:"phone"}),Object(b.jsx)("br",{})]}),Object(b.jsx)("div",{className:"field",children:Object(b.jsx)("button",{onClick:function(){return function(){var e=document.querySelector("#fname"),t=document.querySelector("#phone"),n=document.querySelector("#mail"),i=document.querySelector("#message");if(""===e.value)i.innerHTML="Please complete the name input",i.style.color="red";else if(""===n.value)i.innerHTML="Please complete the mail input",i.style.color="red";else if(""===t.value)i.innerHTML="Please complete the phone input",i.style.color="red";else{var r={name:e.value,mail:n.value,phone:t.value},a=v().collection("orders"),o={buyer:r,items:c,date:p.a.firestore.Timestamp.fromDate(new Date),total:{totalPrice:s}};a.add(o).then((function(c){var s=c.id;i.innerHTML="",console.log("Su orden N\xb0"+s+" ha sido enviada"),i.innerHTML+="Su orden codigo "+s+" ha sido enviada",i.style.color="green",e.value="",n.value="",t.value=""})).catch((function(e){console.log(e)}))}}()},children:"TERMINAR COMPRA"})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsx)("p",{id:"message"})})]})})]}),Object(b.jsx)(g,{})]})},L=t(26);function I(e){var c=e.defaultValue,t=void 0===c?[]:c,s=e.children,i=Object(n.useState)(t),r=Object(h.a)(i,2),a=r[0],o=r[1];return Object(b.jsx)(d.Provider,{value:{comprados:a,setComprados:o,addProduct:function(e){""!==a&&a.forEach((function(c,t){c.productName===e.productName&&(a.splice(t,1),e.productAmount+=c.productAmount,o([].concat(Object(L.a)(a),[e])))})),o([].concat(Object(L.a)(a),[e]))},deleteProduct:function(e){for(var c=0;c<a.length;c++)a[c].productName===e&&a.splice(c,1);console.log("producto eliminado"),o(Object(L.a)(a))}},children:s})}var M=function(){return Object(b.jsx)(I,{children:Object(b.jsx)(a.a,{children:Object(b.jsxs)("div",{className:"conteinerGral",children:[Object(b.jsx)(O,{}),Object(b.jsxs)(C.c,{children:[Object(b.jsx)(C.a,{path:"/",exact:!0,children:Object(b.jsx)(y,{})}),Object(b.jsx)(C.a,{path:"/category/:id",exact:!0,children:Object(b.jsx)(y,{})}),Object(b.jsx)(C.a,{path:"/item/:id",exact:!0,children:Object(b.jsx)(E,{})}),Object(b.jsx)(C.a,{path:"/contact",exact:!0,children:Object(b.jsx)(D,{})}),Object(b.jsx)(C.a,{path:"/aboutus",exact:!0,children:Object(b.jsx)(k,{})}),Object(b.jsx)(C.a,{path:"/cart",exact:!0,children:Object(b.jsx)(T,{})})]})]})})})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(M,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.4434bd4b.chunk.js.map