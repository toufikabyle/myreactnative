(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{76:function(e,t,o){"use strict";var n=o(42),r=o.n(n),a=o(26),c=o.n(a),l=o(2),i=o.n(l),d=o(4),u=o(9),f=o(68),s=o(41),m=o(15),b=function(){return i.a.createElement(u.a,{style:p.container2},i.a.createElement(m.a,{style:p.text}," TodoList "),i.a.createElement(m.a,{style:p.text2}," Home | About "))},p=d.a.create({container2:{backgroundColor:"#333",paddingTop:20,paddingBottom:10,width:"100%",justifyContent:"center"},text:{fontSize:50,color:"white",textAlign:"center"},text2:{fontSize:15,color:"white",textAlign:"center"}}),g=o(66),h=o(34),x=function(e){var t=e.addTodo,o=Object(l.useState)(""),n=c()(o,2),r=n[0],a=n[1];return i.a.createElement(h.a,{style:y.container},i.a.createElement(g.a,{placeholder:"Todos",placeholderTextColor:"black",style:y.input,onChangeText:function(e){return a(e)},value:r}),i.a.createElement(h.a,{style:y.center,onPress:function(){r.length>0?(t(r),a("")):alert("Do not remind yourself to do nothing?")}},i.a.createElement(m.a,{title:"Add",style:y.button},"Submit")))},y=d.a.create({input:{marginHorizontal:0,borderWidth:3,fontSize:28,paddingStart:8,backgroundColor:"white",flex:1,height:50},container:{flexDirection:"row"},button:{textAlign:"center",color:"white",fontSize:20},center:{width:"30%",backgroundColor:"#2596be",borderWidth:3,height:50,flex:.3,justifyContent:"center"}}),E=o(67),C=function(e){return i.a.createElement(u.a,{style:k.container},i.a.createElement(u.a,{style:k.checkboxContainer},i.a.createElement(E.a,{style:k.checkbox,value:e.todo.completed,onValueChange:e.markComplete.bind(void 0,e.todo.id)}),i.a.createElement(m.a,{style:e.todo.completed?k.label:k.label2},e.todo.title,e.todo.completed?"  \ud83d\udc4d":""),i.a.createElement(h.a,{onPress:e.delTodo.bind(void 0,e.todo.id),id:e.todo.id,style:{backgroundColor:"white",flex:.1,alignItems:"center",justifyContent:"center",borderRadius:10,paddingHorizontal:20}},i.a.createElement(m.a,{style:{fontSize:24,color:"#fff"}},"\u267b"))))},k=d.a.create({btnStyle:{backgroundColor:"#ff0000",color:"#fff",borderWidth:0,borderRadius:60,alignItems:"center"},container:{justifyContent:"center",width:"96%",marginLeft:5,backgroundColor:"#f4f4f4",padding:0,borderColor:"red",borderWidth:1.5,borderStyle:"dotted"},checkboxContainer:{flexDirection:"row",marginBottom:10,marginTop:10},checkbox:{flex:.13,color:"red",marginLeft:0},label:{margin:8,flex:.75,color:"red",paddingLeft:10},label2:{margin:5,flex:.75,textDecorationLine:"none",paddingLeft:10,color:"black"}}),w=function(e){var t=e.todos,o=e.markComplete,n=e.delTodo;return t.map((function(e){return i.a.createElement(C,{key:e.id,todo:e,markComplete:o,delTodo:n})}))},S=o(44);o(49);S.a.initializeApp({apiKey:"AIzaSyBEogSPesCwVZzmqnnZlalXQWcPduXzR3Y",authDomain:"reactweb-a1edc.firebaseapp.com",projectId:"reactweb-a1edc",storageBucket:"reactweb-a1edc.appspot.com",messagingSenderId:"432584552866",appId:"1:432584552866:web:c67a5cd2f28791774c02fb"});var v=S.a,T=(t.a=function(){var e=Object(l.useState)([]),t=c()(e,2),o=t[0],n=t[1],a=Object(l.useState)(null),d=c()(a,2),m=d[0],p=d[1],g=Object(l.useState)(),h=c()(g,2),y=h[0],E=h[1];Object(l.useEffect)((function(){k()}),[]),Object(l.useEffect)((function(){null!==m&&C()}),[y]);var C=function(){var e=m;v.firestore().collection("t").doc(e).update({completed:y}),p(null),E(null)},k=function(e){return n([]),v.firestore().collection("t").get().then((function(e){e.forEach((function(e){var t=e.data();-1===o.indexOf(t.id)?n((function(e){return[].concat(r()(e),[t])})):console.log("this is a duplicate"),console.log("here are all of the todos",o)}))})).catch((function(e){return console.log(e)}))};return i.a.createElement(f.a,{style:T.container},i.a.createElement(b,{style:T.one}),i.a.createElement(x,{style:T.two,addTodo:function(e){var t={id:v.firestore().collection("t").doc().id};v.firestore().collection("t").doc(t.id).set({title:e,completed:!1,id:t.id}).then((function(){k()}))}}),i.a.createElement(u.a,{style:T.three},i.a.createElement(s.a,null,i.a.createElement(w,{todos:o,markComplete:function(e){console.log("First",m),p(e),n(o.map((function(t){return t.id===e&&(t.completed=!t.completed,setTimeout((function(){E(t.completed)}),10)),t}))),console.log("Second",m,y)},delTodo:function(e){v.firestore().collection("t").doc(e).delete().then((function(){console.log("Document successfully deleted!",e)})).catch((function(t){console.error(e,"Error removing document: ",t)})).then((function(t){return n(r()(o.filter((function(t){return t.id!==e}))))})),console.log(e,"here is an id",e)}}))))},d.a.create({container:{flex:1,flexDirection:"column",backgroundColor:"#f4f4f4"},one:{flex:.1},two:{flex:.1},three:{flex:1}}))},77:function(e,t,o){e.exports=o(101)}},[[77,1,2]]]);
//# sourceMappingURL=app.f530634b.chunk.js.map