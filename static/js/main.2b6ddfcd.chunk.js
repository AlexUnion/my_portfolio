(this.webpackJsonpportfolio_al_chemick=this.webpackJsonpportfolio_al_chemick||[]).push([[0],{10:function(e,n,t){e.exports={header_container:"greeting_header_container__1VP02",header:"greeting_header__PVZin",p:"greeting_p__2wXks",bold:"greeting_bold__Wan6c"}},11:function(e,n,t){e.exports={nav_item:"navbar_nav_item__2e-aY",nav_bar:"navbar_nav_bar__2d3eO"}},12:function(e,n,t){e.exports={title:"listHeader_title__2lksK",description:"listHeader_description__2_gRe",line:"listHeader_line__1PsIo"}},122:function(e,n,t){},123:function(e,n,t){"use strict";t.r(n);var i=t(2),a=t(0),s=t.n(a),r=t(20),c=t.n(r),o=(t(34),t(35),t(36),[{name:'"Todo app" with Native JS',src:"https://i.ibb.co/02mf8Xh/2.png",link:"https://github.com/AlexUnion/events",id:1},{name:'"Monster Dashboard" with React',src:"https://i.ibb.co/gTpSwtK/3.png",link:"https://github.com/AlexUnion/monster_dashboard",id:2},{name:"Guardian News",src:"https://i.ibb.co/kGsf5s7/4.png",link:"https://github.com/AlexUnion/News",id:3},{name:"Project 4",src:"https://images.wallpaperscraft.ru/image/ruka_mysh_klaviatura_143632_320x240.jpg",link:"#",id:4}]),l=t(7),m=t(5),j=t(8),d=t.n(j),_=t(10),b=t.n(_),h=m.a.create({slideInDown:{animationName:l.slideInDown,animationDuration:"1s"}});var p=function(){return Object(i.jsx)("div",{className:b.a.header,id:"greeting",children:Object(i.jsx)("div",{className:b.a.header_container,children:Object(i.jsx)(d.a,{animateIn:Object(m.b)(h.slideInDown),animateOnce:!0,children:Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:b.a.p,children:"Hello, my name is Alex Kyrychenko and I am"}),Object(i.jsx)("p",{className:"".concat(b.a.p," ").concat(b.a.bold),children:"WEB DEVELOPER"}),Object(i.jsx)("p",{className:b.a.p,children:"creating modern and responsive Web Application"})]})})})})},x=t(125),O=t(11),v=t.n(O);var k=function(){return Object(i.jsx)("div",{className:v.a.nav_bar,children:Object(i.jsxs)(x.a,{id:"navigation_bar",className:"justify-content-center my-3",children:[Object(i.jsx)(x.a.Item,{children:Object(i.jsx)(x.a.Link,{eventKey:"Greeting",href:"#greeting",className:v.a.nav_item,children:"Greeting"})}),Object(i.jsx)(x.a.Item,{children:Object(i.jsx)(x.a.Link,{eventKey:"works",href:"#works",className:v.a.nav_item,children:"My Works"})}),Object(i.jsx)(x.a.Item,{children:Object(i.jsx)(x.a.Link,{eventKey:"#works",href:"#skill",className:v.a.nav_item,children:"My Skill"})})]})})},g=t(18),u=t.n(g),f=(t(122),m.a.create({zoomIn:{animationName:l.zoomIn,animationDuration:"1s"}}));var N=function(e){var n=e.src,t=e.name,a=e.link;return Object(i.jsx)(d.a,{className:"card_item_container",animateIn:Object(m.b)(f.zoomIn),animateOnce:!0,children:Object(i.jsxs)("a",{href:a,children:[Object(i.jsx)("div",{className:"card_item_title",children:t}),Object(i.jsx)("img",{src:n,alt:""})]})})},I=t(12),w=t.n(I),y=m.a.create({slideInLeft:{animationName:l.slideInLeft,animationDuration:"1s"},slideInRight:{animationName:l.slideInRight,animationDuration:"1s"}});var S=function(e){var n=e.title,t=e.description;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(d.a,{animateIn:Object(m.b)(y.slideInLeft),animateOnce:!0,children:Object(i.jsx)("h1",{className:w.a.title,children:n})}),Object(i.jsx)("div",{className:w.a.line}),Object(i.jsx)(d.a,{animateIn:Object(m.b)(y.slideInRight),animateOnce:!0,children:Object(i.jsx)("p",{className:w.a.description,children:t})})]})};var L=function(e){var n=e.list;return Object(i.jsxs)("div",{className:u.a.container,id:"works",children:[Object(i.jsx)(S,{title:"My Works",description:"Below are some of my works. Some of them are written in Native JS, some in React JS."}),Object(i.jsx)("div",{className:u.a.project_container,children:n.map((function(e){var n=e.id,t=e.name,a=e.src,s=e.link;return Object(i.jsx)(N,{name:t,src:a,link:s},n)}))})]})},D=t(24),z=t.n(D),J=t(27),R=t(13),K=t.n(R),A=m.a.create({zoomIn:{animationName:l.zoomIn,animationDuration:"1s"}});var M=function(e){var n=e.title,t=e.progress;return Object(i.jsx)(d.a,{animateIn:Object(m.b)(A.zoomIn),animateOnce:!0,children:Object(i.jsxs)("div",{className:K.a.skill_item,children:[Object(i.jsx)("div",{className:K.a.skill_item_title,children:n}),Object(i.jsx)("div",{className:"".concat(K.a.skill_item_progress),children:Object(i.jsx)(J.a,{now:t,label:"".concat(t,"%")})})]})})},P=[{name:"HTML",progress:90},{name:"CSS",progress:75},{name:"JavaScript",progress:90},{name:"React JS",progress:60},{name:"Git",progress:50},{name:"Photoshop",progress:75},{name:"WebPack",progress:50},{name:"Node JS",progress:40}];var W=function(){return Object(i.jsxs)("div",{className:z.a.container,id:"skill",children:[Object(i.jsx)(S,{title:"My Skills",description:"Below is my knowledge and skills related to web development."}),P.map((function(e){var n=e.name,t=e.progress;return Object(i.jsx)(M,{title:n,progress:t})}))]})},E=t(25),G=t.n(E);var H=function(){return Object(i.jsxs)("div",{className:G.a.container,children:[Object(i.jsx)("p",{children:"Created with React JS"}),Object(i.jsx)("p",{children:"\xa92020 Alex Kyrychenko"})]})};var B=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(p,{}),Object(i.jsx)(k,{}),Object(i.jsx)(L,{list:o}),Object(i.jsx)(W,{}),Object(i.jsx)(H,{})]})};c.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(B,{})}),document.getElementById("root"))},13:function(e,n,t){e.exports={skill_item:"skillItem_skill_item___qx9m",skill_item_title:"skillItem_skill_item_title__2x7VZ",skill_item_progress:"skillItem_skill_item_progress__2bQ4-"}},18:function(e,n,t){e.exports={container:"workList_container__2vcy5",project_container:"workList_project_container__ovz7K"}},24:function(e,n,t){e.exports={container:"skillList_container__3819n",project_container:"skillList_project_container__ev4vz"}},25:function(e,n,t){e.exports={container:"footer_container__3Az2f"}},34:function(e,n,t){},36:function(e,n,t){}},[[123,1,2]]]);
//# sourceMappingURL=main.2b6ddfcd.chunk.js.map