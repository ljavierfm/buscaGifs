(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n(7),i=n.n(c),s=n(2),u=n(10),o=n(8),l=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(s.a)(n,2),i=c[0],o=c[1],l=function(e){e.preventDefault(),i.trim().length>2&&(console.log("input en el form",i),t((function(e){return[i].concat(Object(u.a)(e))})),o(""))};return Object(a.jsxs)("form",{onSubmit:l,children:[Object(a.jsx)("input",{value:i,type:"text",onChange:function(e){o(e.target.value)},className:"form-control-sm busqueda"}),Object(a.jsx)("button",{onClick:l,type:"submit",className:"btn btn-primary mb-2",children:"A\xf1adir"})]})};l.prototype={setCategories:n.n(o).a.func.isRequired};var j=n(6),d=n.n(j),m=n(9),p=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a,r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=JKvhJOHo1ipcjStQhiUfzlCiWuODlCuC"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.id,n=e.title,r=e.url;return Object(a.jsxs)("div",{className:"card tarjeta animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:r,className:"card-img-top",alt:n}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)("h5",{className:"card-title",children:n})})]},t)},f=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({imagenes:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){p(e).then((function(e){return c({imagenes:e,loading:!1})}))}),[e]),a}(t),c=n.imagenes,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"limpiar",children:t}),i&&Object(a.jsx)("p",{children:"loading..."}),Object(a.jsx)("div",{className:"card-grid",children:c.map((function(e){var t=e.id,n=e.title,r=e.url;return Object(a.jsx)(b,{title:n,url:r},t)}))})]})},g=function(){var e=Object(r.useState)(["Ducks"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(l,{setCategories:c}),Object(a.jsx)("hr",{}),console.log("categorias almacenadas",n),n.map((function(e){return Object(a.jsx)(f,{category:e},e)}))]})};n(19),n(20),n(21);i.a.render(Object(a.jsx)(g,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.56247a20.chunk.js.map