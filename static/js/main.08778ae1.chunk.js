(this["webpackJsonpbook-search"]=this["webpackJsonpbook-search"]||[]).push([[0],{31:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(6),a=s.n(c),i=s(8),l=(s(31),s(62)),r=s(11),o=(s(32),s(25)),j=s.n(o),b=s(63),d=s(2),u=function(e){var t=e.thumbnail,s=e.title,c=e.pageCount,a=e.language,l=e.description,r=e.authors,o=e.publisher,j=e.previewLink,u=e.infoLink,m=Object(n.useState)(!1),h=Object(i.a)(m,2),x=h[0],O=h[1],f=function(){return O(!x)};return Object(d.jsxs)("div",{onClick:f,className:"card m-3 ",children:[Object(d.jsx)("img",{src:t,alt:s}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"card-title",children:s})}),Object(d.jsxs)(b.a,{isOpen:x,toggle:f,children:[Object(d.jsxs)("div",{className:"modal-header d-flex justify-content-center",children:[Object(d.jsx)("h5",{className:"modal-title text-center",id:"exampleModalLabel",children:s}),Object(d.jsx)("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:f})]}),Object(d.jsxs)("div",{className:"modal-body",children:[Object(d.jsxs)("div",{className:"d-flex justify-content-between ml-3",children:[Object(d.jsx)("img",{src:t,alt:s,style:{height:"233px"}}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["Page Count: ",c]}),Object(d.jsxs)("p",{children:["Language : ",a]}),Object(d.jsxs)("p",{children:["Authors : ",r]}),Object(d.jsxs)("p",{children:["Publisher : ",o]})]})]}),Object(d.jsx)("div",{className:"mt-3",children:l})]}),Object(d.jsxs)("div",{className:"modal-footer",children:[Object(d.jsx)("div",{className:"left-silde",children:Object(d.jsx)("a",{href:j,className:"btn btn-success",type:"button",target:"_blank",rel:"noopener noreferrer",children:"Preview Link"})}),Object(d.jsx)("div",{className:"divider"}),Object(d.jsx)("div",{className:"right-silde",children:Object(d.jsx)("a",{href:u,className:"btn btn-success",type:"button",target:"_blank",rel:"noopener noreferrer",children:"Info Link"})})]})]})]})};var m=function(){var e=Object(n.useState)(10),t=Object(i.a)(e,2),s=t[0],c=(t[1],Object(n.useState)(1)),a=Object(i.a)(c,2),o=a[0],b=(a[1],Object(n.useState)("")),m=Object(i.a)(b,2),h=m[0],x=m[1],O=Object(n.useState)(!1),f=Object(i.a)(O,2),p=f[0],v=f[1],g=Object(n.useState)([]),N=Object(i.a)(g,2),k=N[0],y=N[1],I=function(){v(!0),s>50||s<1?r.b.error("max results must be between 1 and 50"):j.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(h,"&maxResults=").concat(s,"&startIndex=").concat(o)).then((function(e){o>=e.data.totalItems||o<1?r.b.error("max reults must be between 1 and ".concat(e.data.totalItems)):e.data.items.length>0&&(y(e.data.items),v(!1))})).catch((function(e){v(!0),console.log(e.response)}))};return Object(d.jsxs)("div",{className:"w-100 h-100",children:[Object(d.jsxs)("header",{className:"d-flex justify-content-center align-items-center flex-column",children:[Object(d.jsx)("div",{className:"filter"}),Object(d.jsx)("h1",{className:"display-2 text-center text-white mb-3",style:{zIndex:2},children:"Book Search"}),Object(d.jsx)("div",{style:{width:"60%",zIndex:2},children:Object(d.jsxs)("div",{size:"lg",className:"input-group mb-3",children:[Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Book Search",value:h,onChange:function(e){return x(e.target.value)}}),Object(d.jsx)("div",{className:"input-group-append",children:Object(d.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:I,children:Object(d.jsx)("i",{className:"fas fa-search"})})})]})})]}),function(){if(p)return Object(d.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(d.jsx)(l.a,{style:{width:"3rem",height:"3rem"}})});var e=k.map((function(e){var t="";return e.volumeInfo.imageLinks&&(t=e.volumeInfo.imageLinks.thumbnail),Object(d.jsx)(u,{thumbnail:t,title:e.volumeInfo.title,pageCount:e.volumeInfo.pageCount,language:e.volumeInfo.language,authors:e.volumeInfo.authors,publisher:e.volumeInfo.publisher,description:e.volumeInfo.description,previewLink:e.volumeInfo.previewLink,infoLink:e.volumeInfo.infoLink})}));return Object(d.jsx)("div",{className:"card-container",children:e})}(),Object(d.jsx)(r.a,{})]})};a.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.08778ae1.chunk.js.map