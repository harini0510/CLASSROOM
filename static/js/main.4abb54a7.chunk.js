(this.webpackJsonpCLASSROOM=this.webpackJsonpCLASSROOM||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(14),s=a.n(n),_=(a(121),a(10)),i=a(27),r=a(52),l=a(21),o=a(36),u=a(5),d=a(4),j=["user","loggedInPath","children"],O=["user","children"];function b(e){var t=e.user,a=e.loggedInPath,c=e.children,n=Object(u.a)(e,j);return Object(d.jsx)(l.b,Object(o.a)(Object(o.a)({},n),{},{render:function(){return t?t?Object(d.jsx)(l.a,{to:{pathname:a}}):null:c}}))}function m(e){var t=e.user,a=e.children,c=Object(u.a)(e,O);return Object(d.jsx)(l.b,Object(o.a)(Object(o.a)({},c),{},{render:function(e){var c=e.location;return t?a:t?null:Object(d.jsx)(l.a,{to:{pathname:"signin",state:{from:c}}})}}))}var h=a(20),x=a(17);var p=function(){var e=Object(h.b)().loggedInMail,t=Object(c.useState)([]),a=Object(_.a)(t,2),n=a[0],s=a[1],o=Object(c.useState)([]),u=Object(_.a)(o,2),j=u[0],O=u[1];return Object(c.useEffect)((function(){if(e){var t=x.b.collection("CreatedClasses").doc(e).collection("classes").onSnapshot((function(e){s(e.docs.map((function(e){return e.data()})))}));return function(){return t()}}}),[e]),Object(c.useEffect)((function(){if(e){var t=x.b.collection("JoinedClasses").doc(e).collection("classes").onSnapshot((function(e){O(e.docs.map((function(e){return e.data().joinedData})))}));return function(){return t()}}}),[e]),Object(d.jsx)(r.a,{children:Object(d.jsxs)(l.d,{children:[n.map((function(e,t){return Object(d.jsxs)(l.b,{exact:!0,path:"/".concat(e.id),children:[Object(d.jsx)(i.d,{}),Object(d.jsx)(i.i,{classData:e})]},t)})),j.map((function(e,t){return Object(d.jsxs)(l.b,{exact:!0,path:"/".concat(e.id),children:[Object(d.jsx)(i.d,{}),Object(d.jsx)(i.i,{classData:e})]},t)})),Object(d.jsxs)(l.b,{exact:!0,path:"/tutorials",children:[Object(d.jsx)(i.d,{}),Object(d.jsx)(i.k,{})]}),Object(d.jsxs)(l.b,{exact:!0,path:"/calculator",children:[Object(d.jsx)(i.d,{}),Object(d.jsx)(i.b,{})]}),Object(d.jsx)(l.b,{exact:!0,path:"/exam",children:Object(d.jsx)(i.d,{})}),Object(d.jsx)(b,{user:e,loggedInPath:"/",path:"/signin",exact:!0,children:Object(d.jsx)(i.h,{})}),Object(d.jsxs)(m,{user:e,path:"/",exact:!0,children:[Object(d.jsx)(i.d,{}),0===n.length&&0===j.length?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[" ",Object(d.jsx)(i.j,{})]})," ",Object(d.jsx)("br",{})]}):null,Object(d.jsxs)("ol",{className:"joined",children:[n.map((function(e){return Object(d.jsx)(i.g,{classData:e})})),j.map((function(e){return Object(d.jsx)(i.g,{classData:e})}))]})]})]})})};s.a.render(Object(d.jsx)(h.a,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))},17:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return _})),a.d(t,"d",(function(){return i}));var c=a(44);a(128);c.a.initializeApp({apiKey:"AIzaSyAPKi_3VwE-tJcdJ3yqMdQRzBSgmbaOOzM",authDomain:"bookkeeper-c1a80.firebaseapp.com",projectId:"bookkeeper-c1a80",storageBucket:"bookkeeper-c1a80.appspot.com",messagingSenderId:"729871722552",appId:"1:729871722552:web:55badb41be045b401b9ecd"});var n=c.a.firestore(),s=c.a.auth(),_=new c.a.auth.GoogleAuthProvider;_.setCustomParameters({prompt:"select_account"});var i=c.a.storage();t.b=n},20:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return d}));var c=a(66),n=a(10),s=a(57),_=a.n(s),i=a(0),r=a(17),l=a(4),o=Object(i.createContext)();function u(){return Object(i.useContext)(o)}function d(e){var t=e.children,a=Object(i.useState)(!1),s=Object(n.a)(a,2),u=s[0],d=s[1],j=Object(i.useState)(!1),O=Object(n.a)(j,2),b=O[0],m=O[1],h=Object(i.useState)(null),x=Object(n.a)(h,2),p=x[0],E=x[1],f=Object(i.useState)(null),g=Object(n.a)(f,2),D=g[0],C=g[1],M=function(){var e=Object(c.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.signOut().then((function(){console.log("hello"),window.open("/","_self")})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){var e=r.a.onAuthStateChanged((function(e){e?(C(e.email),E(e)):(C(null),E(null))}));return function(){return e()}}),[]);var P={createClassDialog:u,setCreateClassDialog:d,joinClassDialog:b,setJoinClassDialog:m,login:function(){return r.a.signInWithPopup(r.c)},logoutUser:M,loggedInMail:D,loggedInUser:p};return Object(l.jsx)(o.Provider,{value:P,children:t})}},27:function(e,t,a){"use strict";a.d(t,"d",(function(){return P})),a.d(t,"e",(function(){return L})),a.d(t,"c",(function(){return q})),a.d(t,"f",(function(){return z})),a.d(t,"h",(function(){return H})),a.d(t,"g",(function(){return Q})),a.d(t,"i",(function(){return Z.a})),a.d(t,"a",(function(){return $})),a.d(t,"k",(function(){return ee})),a.d(t,"b",(function(){return ae})),a.d(t,"j",(function(){return ce}));var c=a(18),n=a(36),s=a(10),_=a(0),i=a.n(_),r=a(200),l=a(201),o=a(202),u=a(204),d=a(6),j=a(196),O=a(218),b=(a(122),a(199)),m=a(96),h=a.n(m),x=a(97),p=a.n(x),E=a(62),f=a(205),g=a(203),D=a(20),C=a(4),M=Object(j.a)({list:{width:250},fullList:{width:"auto"}});function P(){var e=M(),t=i.a.useState({top:!1}),a=Object(s.a)(t,2),_=a[0],j=a[1],m=(Object(D.b)().loggedInUser,function(e,t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&j(Object(n.a)(Object(n.a)({},_),{},Object(c.a)({},e,t)))}}),x=function(t){return Object(C.jsxs)("div",{className:Object(d.a)(e.list,Object(c.a)({},e.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:m(t,!1),onKeyDown:m(t,!1),children:[Object(C.jsx)(E.a,{variant:"h4",className:e.title}),Object(C.jsx)(b.a,{}),Object(C.jsxs)(r.a,{children:[Object(C.jsxs)(l.a,{button:!0,onClick:function(){return window.open("/tutorials","_blank")},children:[Object(C.jsx)(o.a,{children:Object(C.jsx)(g.a,{children:Object(C.jsx)(h.a,{})})}),Object(C.jsx)(u.a,{primary:"Accounting References"})]}),Object(C.jsx)(b.a,{}),Object(C.jsxs)(l.a,{button:!0,onClick:function(){return window.open("/calculator","_blank")},children:[Object(C.jsx)(o.a,{children:Object(C.jsx)(g.a,{children:Object(C.jsx)(p.a,{})})}),Object(C.jsx)(u.a,{primary:"Calculator"})]})]}),Object(C.jsx)(b.a,{})]})};return Object(C.jsx)("div",{children:["left"].map((function(t){return Object(C.jsxs)(i.a.Fragment,{children:[Object(C.jsx)(L,{children:Object(C.jsx)(g.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:m(t,!0),children:Object(C.jsx)(f.a,{})})}),Object(C.jsx)(O.a,{anchor:t,open:_[t],onClose:m(t,!1),onOpen:m(t,!0),children:x(t)})]},t)}))})}var v=a(207),w=a(208),I=a(73),U=a(160),A=a(52),T=Object(j.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(1),color:"black"},title:{fontSize:"1.38rem",color:"#5f6368",marginLeft:"5px",cursor:"pointer"},appBar:{backgroundColor:"white",color:"black"},toolbar:{display:"flex",justifyContent:"space-between",alignItems:"center"},headerWrapper:{display:"flex",alignItems:"center"},header__wrapper__right:{display:"flex",justifyContent:"space-between",alignItems:"center"},icon:{marginRight:"15px",color:"#5f6368",cursor:"pointer"}}})),L=function(e){var t=e.children,a=T(),c=i.a.useState(null),n=Object(s.a)(c,2),_=(n[0],n[1]),r=function(){return _(null)},l=Object(D.b)(),o=l.setCreateClassDialog,u=l.setJoinClassDialog,d=l.loggedInUser,j=l.logoutUser;return Object(C.jsxs)("div",{className:a.root,children:[Object(C.jsx)(v.a,{className:a.appBar,position:"static",children:Object(C.jsxs)(w.a,{className:a.toolbar,children:[Object(C.jsxs)("div",{className:a.headerWrapper,children:[t,Object(C.jsx)(A.b,{className:"toHome",to:"/",children:Object(C.jsx)(E.a,{variant:"h6",className:a.title,onClick:void 0,children:"B O O K - K E E P E R"})})]}),Object(C.jsxs)("div",{className:a.header__wrapper__right,children:[Object(C.jsx)("div",{className:"searchBox",children:Object(C.jsx)("input",{type:"text",placeholder:"Search..",className:"search"})}),Object(C.jsx)(I.a,{onClick:function(){r(),u(!0)},children:"Join Class"}),Object(C.jsx)(I.a,{onClick:function(){r(),o(!0)},children:"Create Class"}),Object(C.jsx)(U.a,{src:null===d||void 0===d?void 0:d.photoURL,className:a.icon}),Object(C.jsxs)("p",{children:[" ",Object(C.jsx)("div",{className:"name",children:null===d||void 0===d?void 0:d.displayName}),Object(C.jsx)("div",{className:"emailid",children:null===d||void 0===d?void 0:d.email})]}),Object(C.jsx)("div",{children:Object(C.jsx)(I.a,{style:{marginLeft:8},variant:"outlined",color:"orange",onClick:function(){return j()},children:"Logout"})})]})]})}),Object(C.jsx)(q,{}),Object(C.jsx)(z,{})]})},y=a(210),R=a(211),B=a(217),W=a(209),K=a(156),N=a(216),k=a(17),S=function(){var e=Object(_.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],n=Object(_.useState)(""),i=Object(s.a)(n,2),r=i[0],l=i[1],o=Object(_.useState)(""),u=Object(s.a)(o,2),d=u[0],j=u[1],O=Object(_.useState)(""),b=Object(s.a)(O,2),m=b[0],h=b[1],x=Object(D.b)(),p=x.loggedInMail,E=x.setCreateClassDialog;return Object(C.jsxs)("div",{className:"form",children:[Object(C.jsx)("p",{className:"class__title",children:"Create Class"}),Object(C.jsxs)("div",{className:"form__inputs",children:[Object(C.jsx)(K.a,{id:"filled-basic",label:"Class Name (required)",className:"form__input",variant:"filled",value:a,onChange:function(e){return c(e.target.value)}}),Object(C.jsx)(K.a,{id:"filled-basic",label:"Section",className:"form__input",variant:"filled",value:r,onChange:function(e){return l(e.target.value)}}),Object(C.jsx)(K.a,{id:"filled-basic",label:"Subject",className:"form__input",variant:"filled",value:m,onChange:function(e){return h(e.target.value)}}),Object(C.jsx)(K.a,{id:"filled-basic",label:"Room",className:"form__input",variant:"filled",value:d,onChange:function(e){return j(e.target.value)}})]}),Object(C.jsx)(W.a,{children:Object(C.jsx)(I.a,{onClick:function(e){e.preventDefault();var t=Object(N.a)();k.b.collection("CreatedClasses").doc(p).collection("classes").doc(t).set({owner:p,className:a,section:r,room:d,id:t}).then((function(){E(!1)}))},color:"primary",children:"Create"})})]})},q=(a(139),function(){var e=Object(D.b)(),t=e.createClassDialog,a=e.setCreateClassDialog,c=Object(_.useState)(!1),n=Object(s.a)(c,2),i=n[0],r=n[1],l=Object(_.useState)(!1),o=Object(s.a)(l,2),u=o[0],d=o[1];return Object(C.jsx)("div",{children:Object(C.jsx)(y.a,{onClose:function(){return a(!1)},"aria-labelledby":"customized-dialog-title",open:t,maxWidth:u?"lg":"xs",className:"form__dialog",children:u?Object(C.jsx)(S,{}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"class__title",children:"Create room and share the code to connect the students"}),Object(C.jsx)(R.a,{className:"class__content",children:Object(C.jsxs)("div",{className:"class__checkboxWrapper",children:[Object(C.jsx)(B.a,{color:"primary",onChange:function(){return r(!i)}}),Object(C.jsx)("p",{children:"Verify, you are the teacher/tutor to this class by clicking the check box."})]})}),Object(C.jsxs)(W.a,{children:[Object(C.jsx)(I.a,{autoFocus:!0,onClick:function(){return a(!1)},children:"Close"}),Object(C.jsx)(I.a,{autoFocus:!0,color:"primary",disabled:!i,onClick:function(){return d(!0)},children:"Continue"})]})]})})})}),J=a(206),V=a(212),F=(a(140),i.a.forwardRef((function(e,t){return Object(C.jsx)(J.a,Object(n.a)({direction:"up",ref:t},e))}))),z=function(){var e=Object(D.b)(),t=e.joinClassDialog,a=e.setJoinClassDialog,c=e.loggedInUser,n=Object(_.useState)(""),i=Object(s.a)(n,2),r=i[0],l=i[1],o=Object(_.useState)(""),u=Object(s.a)(o,2),d=u[0],j=u[1],O=Object(_.useState)(),b=Object(s.a)(O,2),m=b[0],h=b[1],x=Object(_.useState)(),p=Object(s.a)(x,2),E=p[0],f=p[1],g=Object(_.useState)(!1),M=Object(s.a)(g,2),P=M[0],v=M[1];return Object(C.jsx)("div",{children:Object(C.jsx)(y.a,{fullScreen:!0,open:t,onClose:function(){return a(!1)},TransitionComponent:F,children:Object(C.jsxs)("div",{className:"joinClass",children:[Object(C.jsxs)("div",{className:"joinClass__wrapper",children:[Object(C.jsxs)("div",{className:"joinClass__wraper2",onClick:function(){return a(!1)},children:[Object(C.jsx)(V.a,{className:"joinClass__svg"}),Object(C.jsx)("div",{className:"joinClass__topHead",children:"Join Class"})]}),Object(C.jsx)(I.a,{className:"joinClass__btn",variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),k.b.collection("CreatedClasses").doc(d).collection("classes").doc(r).get().then((function(e){if(!e.exists||e.owner===c.email)return h(!0),void v(!1);v(!0),f(e.data()),h(!1)})),!0===P&&k.b.collection("JoinedClasses").doc(c.email).collection("classes").doc(r).set({joinedData:E}).then((function(){a(!1)}))},children:"Join"})]}),Object(C.jsxs)("div",{className:"joinClass__form",children:[Object(C.jsxs)("p",{className:"joinClass__formText",children:["You're currently signed in as ",null===c||void 0===c?void 0:c.email]}),Object(C.jsx)("div",{className:"joinClass__loginInfo",children:Object(C.jsxs)("div",{className:"joinClass__classLeft",children:[Object(C.jsx)(U.a,{src:null===c||void 0===c?void 0:c.photoURL}),Object(C.jsxs)("div",{className:"joinClass__loginText",children:[Object(C.jsx)("div",{className:"joinClass__loginName",children:null===c||void 0===c?void 0:c.displayName}),Object(C.jsx)("div",{className:"joinClass__loginEmail",children:null===c||void 0===c?void 0:c.email})]})]})})]}),Object(C.jsxs)("div",{className:"joinClass__form",children:[Object(C.jsx)("div",{style:{fontSize:"1.25rem",color:"#3c4043"},className:"joinClass__formText",children:"Class Code"}),Object(C.jsx)("div",{style:{color:"#3c4043",marginTop:"-5px"},className:"joinClass__formText",children:"Ask your teacher for the class code, then enter it here."}),Object(C.jsxs)("div",{className:"joinClass__loginInfo",children:[Object(C.jsx)(K.a,{id:"outlined-basic",label:"Class Code",variant:"outlined",value:r,onChange:function(e){return l(e.target.value)},error:m,helperText:m&&"No class was found"}),Object(C.jsx)(K.a,{id:"outlined-basic",label:"Owner's email",variant:"outlined",value:d,onChange:function(e){return j(e.target.value)}})]})]})]})})})},G=(a(141),a.p+"static/media/image3.ff12c449.jpeg"),H=(a.p,function(){var e=Object(D.b)(),t=e.login,a=e.loggedInUser;return console.log(a),Object(C.jsxs)("div",{className:"login",children:[Object(C.jsx)("img",{className:"login__logo",src:G,alt:"Classroom"}),Object(C.jsx)(I.a,{variant:"contained",color:"default",onClick:function(){return t()},children:"Login"})]})}),Y=a(213),Q=(a(142),function(e){var t=e.classData,a=Object(D.b)().loggedInMail;return Object(C.jsxs)("li",{className:"joined__list",children:[Object(C.jsx)("div",{className:"joined__wrapper",children:Object(C.jsxs)("div",{className:"joined__container",children:[Object(C.jsx)("div",{className:"joined__imgWrapper"}),Object(C.jsx)("div",{className:"joined__image"}),Object(C.jsxs)("div",{className:"joined__content",children:[Object(C.jsx)(A.b,{className:"joined__title",to:"/".concat(t.id),children:Object(C.jsx)("h2",{children:t.className})}),Object(C.jsx)("p",{className:"joined__owner",children:t.owner})]})]})}),Object(C.jsxs)("div",{className:"joined__bottom",children:[Object(C.jsx)(U.a,{className:"joined__avatar",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/330px-User_icon_2.svg.png"}),a===t.owner&&Object(C.jsx)(I.a,{onClick:function(){return window.open("https://docs.google.com/forms/u/0/?tgif=d","_blank")},children:"CONDUCT TEST"}),Object(C.jsx)("br",{})," ",Object(C.jsx)(Y.a,{color:"secondary",onClick:function(e){e.preventDefault(),window.confirm("Do you really want to delete this class?")&&(console.log("Delete fired!"),a===t.owner?(k.b.collection("CreatedClasses").doc(a).collection("classes").doc(t.id).get().then((function(e){e.exists&&e.classCode===t.classCode&&(e.ref.delete(),console.log("Deleted!"))})),k.b.collection("JoinedClasses").doc(a).collection("classes").doc(t.id).get().then((function(e){e.exists&&e.classCode===t.classCode&&(e.ref.delete(),console.log("Deleted!"))}))):k.b.collection("JoinedClasses").doc(a).collection("classes").doc(t.id).get().then((function(e){e.exists&&e.classCode===t.classCode&&(e.ref.delete(),console.log("Deleted!"))})))}})]})]})}),Z=a(91),X=a(215),$=(a(144),function(e){var t=e.classData,a=Object(D.b)().loggedInMail,c=Object(_.useState)([]),n=Object(s.a)(c,3),i=n[0],r=n[1];n[2];Object(_.useEffect)((function(){if(t){var e=k.b.collection("announcments").doc("classes").collection(t.id).onSnapshot((function(e){r(e.docs.map((function(e){return e.data()})))}));return function(){return e()}}}),[t]),console.log(i);return Object(C.jsx)("div",{children:i.map((function(e){return Object(C.jsx)("div",{className:"amt",children:Object(C.jsxs)("div",{className:"amt__Cnt",children:[Object(C.jsxs)("div",{className:"amt__top",children:[Object(C.jsx)(U.a,{}),Object(C.jsx)("div",{children:e.sender}),a===e.sender?Object(C.jsx)(Y.a,{onClick:function(){return c=e.text,void(window.confirm("Do you really want to delete this Announcement?")&&(console.log("Delete fired!"),k.b.collection("announcments").doc("classes").collection(t.id).onSnapshot((function(e){e.docs.map((function(e){var t=e.data();t.sender===a&&t.text===c&&(console.log(t.imageUrl),void 0!==t.imageUrl&&k.d.refFromURL(t.imageUrl).delete(),e.ref.delete(),console.log("Deleted!"))}))}))));var c}}):null]}),Object(C.jsx)("p",{className:"amt__txt",children:e.text}),e.imageUrl?Object(C.jsxs)("div",{children:["jpeg"===e.imageUrl.split(/[#?]/)[0].split(".").pop().trim()||"png"===e.imageUrl.split(/[#?]/)[0].split(".").pop().trim()||"jpg"===e.imageUrl.split(/[#?]/)[0].split(".").pop().trim()||"svg"===e.imageUrl.split(/[#?]/)[0].split(".").pop().trim()?Object(C.jsx)(X.a,{sx:{m:4},children:Object(C.jsx)("img",{className:"amt__img",src:e.imageUrl,alt:e.text})}):null,Object(C.jsx)(X.a,{sx:{m:2},children:Object(C.jsx)(I.a,{onClick:function(){return function(e){var t=document.createElement("a");t.download=e.imageName,t.href=e.imageUrl,t.click()}(e)},variant:"contained",color:"secondary",children:"Download"})})]}):null]})})}))})}),ee=(a(145),function(){return Object(C.jsx)("div",{className:"main",children:Object(C.jsxs)("div",{className:"main__wrapper",children:[Object(C.jsx)("h3",{style:{padding:10},children:"Introduction of Accounting"}),Object(C.jsx)("ul",{class:"list-unstyled video-list-thumbs row",style:{whiteSpace:"nowrap",overflow:"hidden",display:"flex",flexWrap:"wrap"},children:[{href:"https://www.youtube.com/embed/ABjCVTBnO_U",title:"What is Accounting?"},{href:"https://www.youtube.com/embed/yYX4bvQSqbo",title:"Basics concepts of Accounting"},{href:"https://www.youtube.com/embed/hNXQnu8Yt2k",title:"Difference between Accounting and Accountancy"},{href:"https://www.youtube.com/embed/fCB8WMup9Qg",title:"Types of Accounting"},{href:"https://www.youtube.com/embed/GEZZftO_VrE",title:"Methods of Accounting(cash and accural)"}].map((function(e){return Object(C.jsx)("li",{class:"col-lg-3 col-sm-4 col-xs-6 item",style:{display:"inline-block",paddingLeft:"5px"},children:Object(C.jsxs)("a",{href:e.href,title:"What is Accounting?",children:[Object(C.jsx)("img",{src:"https://previews.123rf.com/images/arhimicrostok/arhimicrostok1707/arhimicrostok170700150/81208152-video-icon-flat-design-style-movie-premiere-live-video-calendar-.jpg",alt:"Barca",class:"img-responsive",height:"120px"}),Object(C.jsx)("h2",{children:e.title}),Object(C.jsx)("span",{class:"glyphicon glyphicon-play-circle"}),Object(C.jsx)("span",{class:"duration",children:"Unkown"})]})})}))}),Object(C.jsx)("h3",{style:{padding:10},children:"Accounting Concepts"}),Object(C.jsx)("ul",{class:"list-unstyled video-list-thumbs row",style:{whiteSpace:"nowrap",overflow:"hidden",display:"flex",flexWrap:"wrap"},children:[{href:"https://www.youtube.com/embed/ZMQeISu7wdE",title:"Separate Business entity concept"},{href:"https://www.youtube.com/embed/EibibVFEkvk",title:"Double Entry concept"},{href:"https://www.youtube.com/embed/n0A6H-4Y0x4",title:"Going concern concept"},{href:"https://www.youtube.com/embed/e71V1rx4IIU",title:"Matching concept"},{href:"https://www.youtube.com/embed/EibibVFEkvk",title:"Double Entry concept"},{href:"https://www.youtube.com/embed/n0A6H-4Y0x4",title:"Going concern concept"},{href:"https://www.youtube.com/embed/e71V1rx4IIU",title:"Matching concept"}].map((function(e){return Object(C.jsx)("li",{class:"col-lg-3 col-sm-4 col-xs-6 item",style:{display:"inline-block",paddingLeft:"5px"},children:Object(C.jsxs)("a",{href:e.href,title:"What is Accounting?",children:[Object(C.jsx)("img",{src:"https://previews.123rf.com/images/arhimicrostok/arhimicrostok1707/arhimicrostok170700150/81208152-video-icon-flat-design-style-movie-premiere-live-video-calendar-.jpg",alt:"Barca",class:"img-responsive",height:"120px"}),Object(C.jsx)("h2",{children:e.title}),Object(C.jsx)("span",{class:"glyphicon glyphicon-play-circle"}),Object(C.jsx)("span",{class:"duration",children:"Unkown"})]})})}))})]})})}),te=a(100),ae=(a(147),function(){return Object(C.jsx)("div",{className:"main",children:Object(C.jsxs)("div",{className:"main__wrapper",children:[Object(C.jsx)("h2",{style:{paddingTop:"30px"},children:"Calculator"}),Object(C.jsx)(te.a,{})]})})}),ce=(a(214),a(148),function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{class:"skills",children:Object(C.jsxs)("div",{class:"skill-row",children:[Object(C.jsx)("img",{class:"coding-image",src:"https://media.giphy.com/media/1ynCEtlgMPAeNAqdnu/giphy.gif",alt:"coding"}),Object(C.jsx)("h3",{children:"Learning And Development"}),Object(C.jsx)("p",{children:"Connect with Tutors and participate their online coducting class."})]})})})})},91:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_hariniarumugam_Downloads_classroom_copy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(66),_Users_hariniarumugam_Downloads_classroom_copy_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_Users_hariniarumugam_Downloads_classroom_copy_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(57),_Users_hariniarumugam_Downloads_classroom_copy_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_Users_hariniarumugam_Downloads_classroom_copy_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__),_material_ui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(73),_material_ui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(156),_material_ui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(160),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_lib_firebase__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(17),_style_css__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(143),_style_css__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__),firebase__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(44),_context_context__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(20),___WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(27),react_share__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(153),react_share__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(159),react_share__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(155),react_share__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(154),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(4),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__),Main=function Main(_ref){var classData=_ref.classData,_useLocalContext=Object(_context_context__WEBPACK_IMPORTED_MODULE_10__.b)(),loggedInMail=_useLocalContext.loggedInMail,_useState=Object(react__WEBPACK_IMPORTED_MODULE_6__.useState)(!1),_useState2=Object(_Users_hariniarumugam_Downloads_classroom_copy_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),showInput=_useState2[0],setShowInput=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),_useState4=Object(_Users_hariniarumugam_Downloads_classroom_copy_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),inputValue=_useState4[0],setInput=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),_useState6=Object(_Users_hariniarumugam_Downloads_classroom_copy_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState5,2),image=_useState6[0],setImage=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),_useState8=Object(_Users_hariniarumugam_Downloads_classroom_copy_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState7,2),result=_useState8[0],setResult=_useState8[1],Fetchdata=function(){var e=Object(_Users_hariniarumugam_Downloads_classroom_copy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__.a)(_Users_hariniarumugam_Downloads_classroom_copy_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default.a.mark((function e(){var t;return _Users_hariniarumugam_Downloads_classroom_copy_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=_lib_firebase__WEBPACK_IMPORTED_MODULE_7__.b.collection("CreatedClasses"),e.next=3,t.get();case 3:e.sent.docs.forEach((function(e){console.log(e.data())}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(react__WEBPACK_IMPORTED_MODULE_6__.useEffect)((function(){Fetchdata()}),[]);var clickHandler=function(e){setResult(result.concat(e.target.value))},clearDisplay=function(){setResult("")},calculate=function calculate(){setResult(eval(result).toString())},handleChange=function(e){e.target.files[0]&&setImage(e.target.files[0])},handleUpload=function(){if(console.log(image,"abc"),null===image)_lib_firebase__WEBPACK_IMPORTED_MODULE_7__.b.collection("announcments").doc("classes").collection(classData.id).add({timstamp:firebase__WEBPACK_IMPORTED_MODULE_9__.a.firestore.FieldValue.serverTimestamp(),text:inputValue,sender:loggedInMail});else{var e=Date.now();_lib_firebase__WEBPACK_IMPORTED_MODULE_7__.d.ref("images/".concat(loggedInMail,"-").concat(e,"-").concat(image.name)).put(image).on("state_changed",(function(){_lib_firebase__WEBPACK_IMPORTED_MODULE_7__.d.ref("images").child("".concat(loggedInMail,"-").concat(e,"-").concat(image.name)).getDownloadURL().then((function(e){_lib_firebase__WEBPACK_IMPORTED_MODULE_7__.b.collection("announcments").doc("classes").collection(classData.id).add({timstamp:firebase__WEBPACK_IMPORTED_MODULE_9__.a.firestore.FieldValue.serverTimestamp(),imageUrl:e,text:inputValue,sender:loggedInMail,imageName:image.name})}))}))}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:"main",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:"main__wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:"main__content",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:"main__wrapper1",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:"main__bgImage",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:"main__emptyStyles"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:"main__text",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("h1",{className:"main__heading main__overflow",children:classData.className}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:"main__section main__overflow",children:classData.section}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:"main__wrapper2",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("em",{className:"main__code",children:"Class Code :"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:"main__id",children:[classData.id,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{children:loggedInMail===classData.owner&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{color:"secondary",onClick:function(){navigator.clipboard.writeText(""===classData.id?"":classData.id)},children:"CLICK TO COPY THE CLASS CODE"})}),loggedInMail===classData.owner&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("h3",{style:{color:"red"},children:"Click here to share"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_12__.a,{url:classData.id,quote:"Class code",hashtag:"#classCodeShare",className:classData.owner,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_15__.a,{size:20})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_13__.a,{url:"https://www.linkedin.com/feed/",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_14__.a,{size:20})})]}),loggedInMail===classData.owner&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{color:"secondary",onClick:function(){return window.open("https://calendar.google.com/calendar/u/0/r?tab=mc&pli=1","_blank")},children:"Calender"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("em",{className:"main__code",children:"Teacher: "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:"main__id",children:classData.owner})]})]})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:"main__announce",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:"main__announcements",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:"main__announcementsWrapper",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:"main__ancContent",children:showInput?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:"main__form",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{id:"filled-multiline-flexible",multiline:!0,label:"Announce Something to class",variant:"filled",value:inputValue,onChange:function(e){return setInput(e.target.value)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:"main__buttons",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("input",{onChange:handleChange,variant:"outlined",color:"primary",type:"file"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{onClick:function(){return setShowInput(!1)},children:"Cancel"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{onClick:handleUpload,color:"primary",variant:"contained",children:"Post"})]})]})]}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:"main__wrapper100",onClick:function(){return setShowInput(!0)},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{children:"Announce Something to class"})]})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(___WEBPACK_IMPORTED_MODULE_11__.a,{classData:classData})]})})]})})};__webpack_exports__.a=Main}},[[150,1,2]]]);
//# sourceMappingURL=main.4abb54a7.chunk.js.map