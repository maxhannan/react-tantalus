(this["webpackJsonpreact-tantalus"]=this["webpackJsonpreact-tantalus"]||[]).push([[0],{79:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(12),r=a.n(c),s=(a(79),a(29)),l=a(20),o=a(16),d=a(18),m=a(13),j=a(127),p=a(139),u=a(128),h=a(140),b=a(93),x=a(129),f=a(130),g=a(125),O=a(131),y=a(39),v=a(66),w=a(122),C=Object(w.a)((function(){return{header:{backgroundColor:"white",boxShadow:"none",borderBottom:"1px solid #ccc","@media (max-width: 1000px)":{paddingLeft:0,paddingRight:0},"&:hover":{opacity:"1"}},logo:{fontFamily:"'Monoton', cursive",textAlign:"center",textDecoration:"none","@media (max-width: 1000px)":{marginLeft:"0px"}},menuButton:{fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:"12px",marginLeft:"30px"},toolbar:{display:"flex",justifyContent:"flex-start",alignItems:"center"},drawerContainer:{padding:"0px 0px",width:"100vw"}}})),S=[{label:"New Arrivals",href:"/react-tantalus/newArrivals"},{label:"Men",href:"/react-tantalus/men"},{label:"Women",href:"/react-tantalus/women"},{label:"Furniture",href:"/react-tantalus/home"},{label:"Lifestyle",href:"/react-tantalus/lifestyle"},{label:"Sale",href:"/react-tantalus/sale",color:"secondary"}],z=a(3),I=function(e){var t=e.getCartSize,a=C(),n=a.header,c=a.logo,r=a.menuButton,s=a.toolbar,m=a.drawerContainer,w=Object(i.useState)({mobileView:!1,drawerOpen:!1}),I=Object(o.a)(w,2),L=I[0],k=I[1],P=L.mobileView,N=L.drawerOpen;Object(i.useEffect)((function(){var e=function(){return window.innerWidth<1e3?k((function(e){return Object(l.a)(Object(l.a)({},e),{},{mobileView:!0})})):k((function(e){return Object(l.a)(Object(l.a)({},e),{},{mobileView:!1})}))};e(),window.addEventListener("resize",(function(){return e()}))}),[]);var B=function(){return S.map((function(e){var t=e.label,a=e.href,i=e.color,n=void 0===i?"inherit":i;return Object(z.jsx)(u.a,{component:d.b,to:a,color:n,style:{textDecoration:"none"},key:t,children:Object(z.jsx)(h.a,{style:{fontWeight:400,fontSize:"8vw",fontFamily:"'Montserrat', sans-serif"},children:t})})}))},M=Object(z.jsx)(b.a,{variant:"h4",color:"secondary",className:c,component:d.b,to:"/react-tantalus/",children:"Tantalus"}),D=Object(z.jsx)(j.a,{component:d.b,to:"/react-tantalus/cart",children:Object(z.jsx)(x.a,{badgeContent:t(),color:"secondary",children:Object(z.jsx)(v.a,{color:"#333"})})}),T=function(){return S.map((function(e){var t=e.label,a=e.href,i=e.color,n=void 0===i?"default":i;return Object(z.jsx)(f.a,{key:t,color:n,to:a,component:d.b,className:r,children:t})}))};return Object(z.jsx)("header",{children:Object(z.jsx)(O.a,{className:n,children:P?function(){var e=function(){return k((function(e){return Object(l.a)(Object(l.a)({},e),{},{drawerOpen:!1})}))};return Object(z.jsxs)(g.a,{children:[Object(z.jsx)(j.a,{edge:"start","aria-label":"menu","aria-haspopup":"true",onClick:function(){return k((function(e){return Object(l.a)(Object(l.a)({},e),{},{drawerOpen:!0})}))},children:Object(z.jsx)(y.b,{color:"#222"})}),Object(z.jsxs)(p.a,{anchor:"left",open:N,onClose:e,children:[Object(z.jsx)("div",{style:{width:"100%",height:"7vh",display:"flex",justifyContent:"flex-end",borderBottom:"1px solid #ccc"},children:Object(z.jsx)(j.a,{onClick:e,color:"secondary",children:Object(z.jsx)(y.a,{})})}),Object(z.jsx)("div",{className:m,onClick:e,children:B()})]}),Object(z.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:M}),Object(z.jsx)("div",{style:{marginLeft:"auto"},children:D})]})}():Object(z.jsxs)(g.a,{className:s,children:[M,Object(z.jsx)("div",{children:T()}),Object(z.jsx)("div",{style:{marginLeft:"auto"},children:D})]})})})},L=a(132),k=a(133),P=a.p+"static/media/menHero.ad0e4aa1.jpg",N=a.p+"static/media/womenHero.2efde864.jpg",B=a.p+"static/media/furnitureHero.3b48d61c.jpg",M=Object(w.a)((function(){return{container:{width:"100%",display:"flex",alignItems:"center",height:"90vh","@media (max-width: 1000px)":{height:"100%",marginTop:"20px"}},heroContainer:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",animation:"fadeIn 500ms ease-in-out"},imgStyle:{maxHeight:"100%",maxWidth:"100%",opacity:.7,transition:"opacity 500ms ease, transform 500ms ease","&:hover":{opacity:1,transform:"scale(1.05)"}}}})),D=function(){var e=M();return Object(z.jsx)(L.a,{className:e.container,children:Object(z.jsxs)(k.a,{container:!0,spacing:4,children:[Object(z.jsx)(k.a,{item:!0,xs:12,sm:12,md:4,style:{height:"100%"},children:Object(z.jsxs)("div",{className:e.heroContainer,children:[Object(z.jsx)("img",{src:P,alt:"",className:e.imgStyle}),Object(z.jsx)(f.a,{component:d.b,to:"/react-tantalus/men",variant:"outlined",color:"secondary",style:{position:"absolute"},children:"Shop Men's"})]})}),Object(z.jsx)(k.a,{item:!0,xs:12,sm:12,md:4,style:{height:"100%"},children:Object(z.jsxs)("div",{className:e.heroContainer,children:[Object(z.jsx)("img",{src:N,alt:"",className:e.imgStyle}),Object(z.jsx)(f.a,{component:d.b,to:"/react-tantalus/women",variant:"outlined",color:"secondary",style:{position:"absolute"},children:"Shop Women's"})]})}),Object(z.jsx)(k.a,{item:!0,xs:12,sm:12,md:4,style:{height:"100%"},children:Object(z.jsxs)("div",{className:e.heroContainer,children:[Object(z.jsx)("img",{src:B,alt:"",className:e.imgStyle}),Object(z.jsx)(f.a,{component:d.b,to:"/react-tantalus/home",variant:"outlined",color:"secondary",style:{position:"absolute"},children:"Shop Furniture"})]})})]})})},T=a.p+"static/media/mens1.a890970d.jpg",W=a.p+"static/media/mens1alt.50f4446e.jpg",X=a.p+"static/media/mens2.1c07175d.jpg",F=a.p+"static/media/mens2alt.0c16c14f.jpg",A=a.p+"static/media/mens3.fdc05e85.jpg",q=a.p+"static/media/mens3alt.a9de63f2.jpg",H=a.p+"static/media/mens4.602248ed.jpg",R=a.p+"static/media/mens4alt.3a9a1d19.jpg",E=a.p+"static/media/mens5.e7fc0f4b.jpg",V=a.p+"static/media/mens5alt.abee6604.jpg",J=a.p+"static/media/mens6.9dd87d9f.jpg",Q=a.p+"static/media/mens6alt.a52ee894.jpg",U=a.p+"static/media/mens7.8102549d.jpg",$=a.p+"static/media/mens7alt.cccc26c1.jpg",G=a.p+"static/media/mens8.26a418a5.jpg",K=a.p+"static/media/mens8alt.d5ba5f54.jpg",Y=a.p+"static/media/women1.9d2db335.jpeg",Z=a.p+"static/media/women1alt.e5a8f1a7.jpeg",_=a.p+"static/media/women2.413ce008.jpeg",ee=a.p+"static/media/women2alt.4b2fb821.jpeg",te=a.p+"static/media/women3.81a4947d.jpeg",ae=a.p+"static/media/women3alt.009946a7.jpeg",ie=a.p+"static/media/women4.e659c6b8.jpeg",ne=a.p+"static/media/women4alt.025935f2.jpeg",ce=a.p+"static/media/women5.065468a2.jpg",re=a.p+"static/media/women5alt.41be0618.jpg",se=a.p+"static/media/women6.d3aaf809.jpg",le=a.p+"static/media/women6alt.f80372f6.jpg",oe=a.p+"static/media/women7.ca358274.jpg",de=a.p+"static/media/women7alt.ca3f4b6f.jpg",me=a.p+"static/media/women8.89068d27.jpg",je=a.p+"static/media/women8alt.4c917514.jpg",pe=a.p+"static/media/furn1.e29e628c.jpg",ue=a.p+"static/media/furn1alt.e99624ae.jpg",he=a.p+"static/media/furn2.4a715fb0.jpg",be=a.p+"static/media/furn2alt.0d40001f.jpg",xe=a.p+"static/media/furn3.3279dbcc.jpg",fe=a.p+"static/media/furn3alt.6a1faded.jpg",ge=a.p+"static/media/furn4.eaa8f928.jpg",Oe=a.p+"static/media/furn4alt.02dc61a8.jpg",ye=a.p+"static/media/furn5.0f09c98d.jpg",ve=a.p+"static/media/furn5alt.48001ac0.jpg",we=a.p+"static/media/furn6.527e1b83.jpg",Ce=a.p+"static/media/furn6alt.9d741243.jpg",Se=a.p+"static/media/furn7.98ee0799.jpg",ze=a.p+"static/media/furn7alt.5c209a37.jpg",Ie=a.p+"static/media/furn8.d52b2f8e.jpg",Le=a.p+"static/media/furn8alt.74a81be6.jpg",ke=a(10),Pe=a.n(ke),Ne=[{id:Pe()(),text:"Washed Corduroy Bucket Hat",price:12,pic:G,altPic:K,sectionId:["men"],sizes:["One Size"],available:9},{id:Pe()(),text:"Rolla\u2019s Relaxo Straight Leg Jean \u2013 Stone Wash",price:99.99,pic:U,altPic:$,sectionId:["men","sale","new"],sizes:["Small","Medium","Large","XL","XXL"],available:6},{id:Pe()(),text:"Birkenstock Arizona EVA Sandal",price:44.99,pic:J,altPic:Q,sectionId:["men","sale"],sizes:["8","8.5","9","9.5","10","10.5","11","11.5","12"],available:6},{id:Pe()(),text:"Wide Wale Corduroy Beach Pant",price:59.99,pic:E,altPic:V,sectionId:["men","new"],sizes:["Small","Medium","Large","XL","XXL"],available:6},{id:Pe()(),text:"Converse Chuck 70 Core High Top Sneaker",price:54.99,pic:H,altPic:R,sectionId:["men","sale"],sizes:["8","8.5","9","9.5","10","10.5","11","11.5","12"],available:6},{id:Pe()(),text:"Smile Ankle Sock",price:10.99,pic:A,altPic:q,sectionId:["men"],sizes:["Small","Medium","Large"],available:6},{id:Pe()(),text:"Vintage Sun Bleach Crew Neck Sweatshirt",price:84.99,pic:X,altPic:F,sectionId:["men"],sizes:["Small","Medium","Large","XL","XXL"],available:6},{id:Pe()(),text:"Metallica Crew Neck Sweatshirt",price:89.99,pic:T,altPic:W,sectionId:["men","sale"],sizes:["Small","Medium","Large","XL","XXL"],available:6},{id:Pe()(),text:"Project Social T Rose Infused Oversized Tee",price:39,pic:Y,altPic:Z,sectionId:["women","new"],sizes:["One Size"],available:6},{id:Pe()(),text:"Lucia Corduroy Shirt Jacket",price:89,pic:_,altPic:ee,sectionId:["women","sale"],sizes:["Small","Medium","Large","XL","XXL"],available:6},{id:Pe()(),text:"Reebok Club C Double Sneaker",price:80,pic:te,altPic:ae,sectionId:["women","sale","new"],sizes:["8","8.5","9","9.5","10","10.5","11","11.5","12"],available:6},{id:Pe()(),text:"Out From Under Drew Seamless Ribbed Bra Top",price:18,pic:ie,altPic:ne,sectionId:["women"],sizes:["Small","Medium","Large","XL","XXL"],available:6},{id:Pe()(),text:"Beyond Yoga Space-Dye Slim Racerback Tank Top",price:66,pic:ce,altPic:re,sectionId:["women","sale"],sizes:["8","8.5","9","9.5","10","10.5","11","11.5","12"],available:6},{id:Pe()(),text:"High & Wide Corduroy Pant",price:69,pic:se,altPic:le,sectionId:["women"],sizes:["Small","Medium","Large","XL","XXL"],available:6},{id:Pe()(),text:"Fjallraven K\xe5nken Mini Backpack",price:70,pic:oe,altPic:de,sectionId:["women"],sizes:["One Size"],available:6},{id:Pe()(),text:"Anne Smocked Waist Midi Dress",price:69.99,pic:me,altPic:je,sectionId:["women","sale"],sizes:["Small","Medium","Large","XL","XXL"],available:6},{id:Pe()(),text:"Linnea Bed",price:899,pic:pe,altPic:ue,sectionId:["home"],sizes:["Queen","King"],available:6},{id:Pe()(),text:"Grayson Low Media Console",price:299.99,pic:he,altPic:be,sectionId:["home","sale"],sizes:["One Size"],available:6},{id:Pe()(),text:"Marienne Storage Cabinet",price:1599.99,pic:xe,altPic:fe,sectionId:["home","sale"],sizes:["One Size"],available:6},{id:Pe()(),text:"Roma Rattan Chair",price:459.99,pic:ge,altPic:Oe,sectionId:["home","new"],sizes:["One Size"],available:6},{id:Pe()(),text:"Clara Low Credenza",price:599.99,pic:ye,altPic:ve,sectionId:["home","sale","new"],sizes:["One Size"],available:6},{id:Pe()(),text:"Carter Triangle Bracket Wall Shelf",price:16.99,pic:we,altPic:Ce,sectionId:["home"],sizes:["Small","Large","XL"],available:6},{id:Pe()(),text:"Deco Sun Headboard",price:299.99,pic:Se,altPic:ze,sectionId:["home"],sizes:["One Size"],available:6},{id:Pe()(),text:"Floria Velvet Chair",price:369.99,pic:Ie,altPic:Le,sectionId:["home","sale","new"],sizes:["One Size"],available:6},{id:Pe()(),text:"Washed Corduroy Bucket Hat",price:12,pic:G,altPic:K,sectionId:["lifestyle","new"],sizes:["One Size"],available:6},{id:Pe()(),text:"Rolla\u2019s Relaxo Straight Leg Jean \u2013 Stone Wash",price:99.99,pic:U,altPic:$,sectionId:["lifestyle","sale"],sizes:["One Size"],available:6},{id:Pe()(),text:"Birkenstock Arizona EVA Sandal",price:44.99,pic:J,altPic:Q,sectionId:["lifestyle","sale"],sizes:["One Size"],available:6},{id:Pe()(),text:"Wide Wale Corduroy Beach Pant",price:59.99,pic:E,altPic:V,sectionId:["lifestyle"],sizes:["One Size"],available:6},{id:Pe()(),text:"Converse Chuck 70 Core High Top Sneaker",price:54.99,pic:H,altPic:R,sectionId:["lifestyle","sale"],sizes:["One Size"],available:6},{id:Pe()(),text:"Smile Ankle Sock",price:10.99,pic:A,altPic:q,sectionId:["lifestyle"],sizes:["One Size"],available:6},{id:Pe()(),text:"Vintage Sun Bleach Crew Neck Sweatshirt",price:84.99,pic:X,altPic:F,sectionId:["lifestyle"],sizes:["One Size"],available:6},{id:Pe()(),text:"Metallica Crew Neck Sweatshirt",price:89.99,pic:T,altPic:W,sectionId:["lifestyle","sale"],sizes:["One Size"],available:6}],Be=a(134),Me=function(){return Object(z.jsx)("div",{style:{display:"flex",height:"90vh",justifyContent:"center",alignItems:"center"},children:Object(z.jsx)(Be.a,{color:"secondary",size:"3rem"})})},De=a(92),Te=Object(w.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(1),"@media (max-width: 1000px)":{padding:"8px"},textAlign:"center",color:e.palette.text.secondary},imgStyle:{maxWidth:"100%",maxHeight:"100%"},typeContainer:{display:"flex",flexDirection:"column",justifyContent:"flex-start",height:"100%",textAlign:"left",position:"relative"}}})),We=function(e){var t=e.product,a=e.handleOpenDetails,i=Te();return Object(z.jsx)(k.a,{item:!0,xs:6,sm:4,md:4,lg:3,children:Object(z.jsxs)(De.a,{elevation:0,className:i.paper,children:[Object(z.jsx)("div",{children:Object(z.jsx)(d.b,{to:"/react-tantalus/details",children:Object(z.jsx)("img",{onClick:function(e){return a(e.target.id)},id:t.id,className:i.imgStyle,src:t.pic,alt:t.text,onMouseOver:function(e){return e.currentTarget.src=t.altPic},onMouseOut:function(e){return e.currentTarget.src=t.pic}})})}),Object(z.jsxs)("div",{className:i.typeContainer,children:[Object(z.jsx)(b.a,{variant:"body2",color:"textPrimary",style:{fontFamily:"'Montserrat', sans-serif"},gutterBottom:!0,children:t.text}),Object(z.jsxs)(b.a,{variant:"body2",color:"textSecondary",style:{fontFamily:"'Montserrat', sans-serif"},gutterBottom:!0,children:["$",t.price]})]})]})})},Xe=a(141),Fe=Object(Xe.a)(b.a)({fontFamily:"'Montserrat', sans-serif"}),Ae=function(e){var t=e.section,a=e.handleOpenDetails,n=e.heading,c=Ne.filter((function(e){return e.sectionId.includes(t)})),r=function(){var e=Object(i.useState)(!0),t=Object(o.a)(e,2),r=t[0],s=t[1];return Object(i.useEffect)((function(){setTimeout((function(){return s(!1)}),500)}),[]),r?Object(z.jsx)(Me,{}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Fe,{variant:"h4",style:{animation:"fadeIn 500ms ease-in-out",marginTop:"1rem",marginBottom:".5rem"},children:n}),Object(z.jsx)(k.a,{container:!0,spacing:1,style:{animation:"fadeIn 500ms ease-in-out"},children:c.map((function(e){return Object(z.jsx)(We,{handleOpenDetails:a,product:e},e.id)}))})]})};return Object(z.jsx)(L.a,{maxWidth:"lg",children:Object(z.jsx)(r,{})})},qe=a(136),He=a(135),Re=a(142),Ee=a(137),Ve=a(67),Je=Object(w.a)((function(e){return{imgStyle:{maxWidth:"100%",maxHeight:"100%"},infoHolder:{display:"flex",width:"100%",justifyContent:"space-between"},textContainer:{display:"flex",flexDirection:"column",justifyContent:"center"},formControl:{marginTop:e.spacing(1),marginBottom:e.spacing(1),minWidth:120,fontFamily:"'Montserrat', sans-serif"},selectEmpty:{marginTop:e.spacing(2),fontFamily:"'Montserrat', sans-serif"}}})),Qe=function(e){var t=e.product,a=e.handleCartDelete,i=e.handleCartUpdate,n=Je(),c=t.id,r=Array.from({length:t.available},(function(e,t){return t+1}));return Object(z.jsxs)(k.a,{item:!0,xs:6,sm:4,md:3,lg:2,children:[Object(z.jsx)("img",{src:t.pic,alt:t.title,className:n.imgStyle}),Object(z.jsxs)("div",{id:t.id,className:n.infoHolder,children:[Object(z.jsxs)(He.a,{fullWidth:!0,variant:"outlined",size:"small",className:n.formControl,children:[Object(z.jsx)(Re.a,{children:"Quantity"}),Object(z.jsx)(Ee.a,{value:t.qty,onChange:function(e){return t=e.target.value,void i(c,t);var t},labelId:"qtyLabel",label:"Quantity",children:r.map((function(e){return console.log(e),Object(z.jsx)(h.a,{value:e,children:e})}))})]}),Object(z.jsx)(j.a,{color:"secondary",onClick:function(e){return a(c)},children:Object(z.jsx)(Ve.a,{})})]}),Object(z.jsxs)("div",{className:n.textContainer,children:[Object(z.jsxs)(Fe,{variant:"body2",color:"secondary",gutterBottom:!0,children:["Size: ",t.size]}),Object(z.jsx)(Fe,{variant:"subtitle1",gutterBottom:!0,children:t.text}),Object(z.jsxs)(Fe,{variant:"subtitle1",gutterBottom:!0,children:["$",t.price]})]})]})},Ue=Object(w.a)((function(e){return{heading:{marginTop:"1rem",marginBottom:"1rem"},grid:{animation:"fadeIn 500ms ease-in-out",marginBottom:"100px"},coBtnContainer:{position:"fixed",bottom:"30px",right:"30px",transform:"scale(1.2)",margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}})),$e=function(e){var t=e.cart,a=e.getCartTotal,i=e.getCartSize,n=e.handleCartDelete,c=e.handleCartUpdate,r=Ue();return Object(z.jsxs)(L.a,{maxWidth:"lg",children:[Object(z.jsxs)(Fe,{variant:"h4",className:r.heading,children:["Your Cart (",i(),")"]}),0===i()&&Object(z.jsx)(f.a,{color:"secondary",component:d.b,to:"/react-tantalus/newArrivals",children:"Go Shopping!"}),Object(z.jsx)(k.a,{container:!0,spacing:2,className:r.grid,children:t.map((function(e){return Object(z.jsx)(Qe,{handleCartDelete:n,handleCartUpdate:c,product:e},e.id)}))}),i()>0&&Object(z.jsx)("div",{className:r.coBtnContainer,children:Object(z.jsxs)(qe.a,{variant:"extended",color:"secondary",size:"large",children:[Object(z.jsx)(y.c,{className:r.extendedIcon}),Object(z.jsxs)(Fe,{variant:"subtitle1",children:["$",a()]})]})})]})},Ge=a(68),Ke=Object(w.a)((function(e){return{container:{display:"flex",animation:"fadeIn 500ms ease",marginBottom:"2vh","@media (max-width: 1000px)":{flexDirection:"column"}},imgContainer:{width:"50%",height:"80vh",display:"flex",alignItems:"center",justifyContent:"center","@media (max-width: 1000px)":{width:"100%",height:"100%"}},imgStyle:{maxWidth:"100%",maxHeight:"100%"},infoContainer:{width:"50%",display:"flex",flexDirection:"column","@media (max-width: 1000px)":{width:"100%"}},btnContainer:{marginTop:"10px",marginLeft:"auto",marginRight:"auto",width:"70%",display:"flex",justifyContent:"flex-end","@media (max-width: 1000px)":{width:"98%",marginTop:"0px",justifyContent:"flex-start"}},formContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",padding:"1.5rem","@media (max-width: 1000px)":{padding:".5rem"}},formControl:{marginTop:e.spacing(1),marginBottom:e.spacing(1),margin:"4px",minWidth:120,fontFamily:"'Montserrat', sans-serif"},selectEmpty:{marginTop:e.spacing(2),fontFamily:"'Montserrat', sans-serif"}}})),Ye=function(e){var t=e.product,a=e.handleAddToCart,n=e.getCartItemById,c=Ke(),r=Object(m.f)(),s=Object(i.useState)(!0),l=Object(o.a)(s,2),d=l[0],p=l[1],u=Object(i.useState)(1),b=Object(o.a)(u,2),x=b[0],g=b[1],O=Object(i.useState)(t.sizes[0]),y=Object(o.a)(O,2),v=y[0],w=y[1],C=Array.from({length:t.available},(function(e,t){return t+1}));Object(i.useEffect)((function(){setTimeout((function(){return p(!1)}),500)}),[]);return d?Object(z.jsx)(Me,{}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("div",{className:c.btnContainer,children:Object(z.jsx)(j.a,{color:"secondary",onClick:function(){return r.goBack()},children:Object(z.jsx)(Ge.a,{})})}),Object(z.jsxs)(L.a,{maxWidth:"md",className:c.container,children:[Object(z.jsx)("div",{className:c.imgContainer,children:Object(z.jsx)("img",{src:t.pic,onMouseOver:function(e){return e.currentTarget.src=t.altPic},onMouseOut:function(e){return e.currentTarget.src=t.pic},alt:t.text,className:c.imgStyle})}),Object(z.jsx)("div",{className:c.infoContainer,children:Object(z.jsxs)("form",{className:c.formContainer,onSubmit:function(e){return function(e){e.preventDefault(),n(t.id).qty>=t.available||(a(t.id,x,v),g(1))}(e)},children:[Object(z.jsx)(Fe,{variant:"overline",style:{margin:"0px 4px"},color:"secondary",children:n(t.id).inCart&&Object(z.jsxs)(z.Fragment,{children:[n(t.id).qty," in cart"]})}),Object(z.jsx)(Fe,{variant:"h5",style:{margin:"0px 4px"},gutterBottom:!0,children:t.text}),Object(z.jsxs)(Fe,{variant:"h6",style:{margin:"4px 4px"},gutterBottom:!0,children:["$",t.price]}),Object(z.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(z.jsxs)(He.a,{variant:"outlined",size:"small",onSubmit:function(e){return e.preventDefault()},className:c.formControl,children:[Object(z.jsx)(Re.a,{id:"qtyLabel",children:"Quantity"}),Object(z.jsx)(Ee.a,{labelId:"qtyLabel",id:"qtySelect",label:"Quantity",value:x,onChange:function(e){return g(e.target.value)},children:C.map((function(e){return console.log(e),Object(z.jsx)(h.a,{value:e,children:e})}))})]}),Object(z.jsxs)(He.a,{variant:"outlined",fullWidth:!0,className:c.formControl,size:"small",style:{marginBottom:"2vh"},children:[Object(z.jsx)(Re.a,{id:"sizeLabel",children:"Size"}),Object(z.jsx)(Ee.a,{labelId:"sizeLabel",id:"sizeSelect",label:"Size",value:v,onChange:function(e){return w(e.target.value)},children:t.sizes.map((function(e){return Object(z.jsx)(h.a,{value:e,children:e})}))})]})]}),Object(z.jsx)(f.a,{variant:"outlined",color:"secondary",type:"submit",style:{fontFamily:"'Montserrat', sans-serif",margin:"4px"},children:"Add To cart"})]})})]})]})},Ze=Object(w.a)((function(){return{paddingDiv:{height:"8vh","@media (max-width: 1000px)":{height:"8vh"},"@media (max-width: 600px)":{height:"7vh"}}}})),_e=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)({}),r=Object(o.a)(c,2),j=r[0],p=r[1],u=Ze(),h=function(e){return Ne.find((function(t){return t.id===e}))},b=function(e){p(h(e))},x=function(e,t){return e+t},f=function(){return a.map((function(e){return e.qty})).reduce(x,0)};return Object(z.jsxs)(d.a,{children:[Object(z.jsx)(I,{getCartSize:f}),Object(z.jsx)("div",{className:u.paddingDiv}),Object(z.jsxs)(m.c,{children:[Object(z.jsx)(m.a,{exact:!0,path:"/react-tantalus/",children:Object(z.jsx)(D,{})}),Object(z.jsx)(m.a,{exact:!0,path:"/react-tantalus/newArrivals",children:Object(z.jsx)(Ae,{handleOpenDetails:b,heading:"New Arrivals",section:"new"})}),Object(z.jsx)(m.a,{exact:!0,path:"/react-tantalus/men",children:Object(z.jsx)(Ae,{handleOpenDetails:b,heading:"Men's Clothing",section:"men"})}),Object(z.jsx)(m.a,{exact:!0,path:"/react-tantalus/women",children:Object(z.jsx)(Ae,{handleOpenDetails:b,heading:"Women's Clothing",section:"women"})}),Object(z.jsx)(m.a,{exact:!0,path:"/react-tantalus/home",children:Object(z.jsx)(Ae,{handleOpenDetails:b,heading:"Furniture",section:"home"})}),Object(z.jsx)(m.a,{exact:!0,path:"/react-tantalus/lifestyle",children:Object(z.jsx)(Ae,{handleOpenDetails:b,heading:"Lifestyle",section:"lifestyle"})}),Object(z.jsx)(m.a,{exact:!0,path:"/react-tantalus/sale",children:Object(z.jsx)(Ae,{handleOpenDetails:b,heading:"On Sale",section:"sale"})}),Object(z.jsx)(m.a,{exact:!0,path:"/react-tantalus/details",children:Object(z.jsx)(Ye,{product:j,handleAddToCart:function(e,t,i){a.find((function(t){return t.id===e}))?n((function(a){return a.map((function(a){return a.id===e?Object(l.a)(Object(l.a)({},a),{},{size:i,qty:a.qty+t}):a}))})):n([].concat(Object(s.a)(a),[Object(l.a)(Object(l.a)({},h(e)),{},{size:i,qty:t})]))},getCartItemById:function(e){return a.find((function(t){return t.id===e}))?{inCart:!0,qty:a.find((function(t){return t.id===e})).qty}:{inCart:!1,qty:0}}})}),Object(z.jsx)(m.a,{exact:!0,path:"/react-tantalus/cart",children:Object(z.jsx)($e,{cart:a,getCartTotal:function(){return a.map((function(e){return e.price*e.qty})).reduce(x,0).toFixed(2)},getCartSize:f,handleCartDelete:function(e){n(a.filter((function(t){return t.id!==e})))},handleCartUpdate:function(e,t){n(a.map((function(a){return a.id===e?Object(l.a)(Object(l.a)({},a),{},{qty:t}):a})))}})})]})]})};r.a.render(Object(z.jsx)(n.a.StrictMode,{children:Object(z.jsx)(_e,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.d7707434.chunk.js.map