(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={input:"SuperInputText_input__2jkCw",superInput:"SuperInputText_superInput__2zkEV",errorInput:"SuperInputText_errorInput__JhUVN",error:"SuperInputText_error__33QSZ"}},function(e,t,a){e.exports={message:"Message_message__31li7",all:"Message_all__3NAMF",time:"Message_time__2pa2W"}},function(e,t,a){e.exports={blue:"HW4_blue__1MJm5",column:"HW4_column__3nY1A",testSpanError:"HW4_testSpanError__27cxJ"}},function(e,t,a){e.exports={default:"SuperButton_default__38FHr",red:"SuperButton_red__1fyxu"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__2Cp_8",spanClassName:"SuperCheckbox_spanClassName__3c-Vc"}},,,function(e,t,a){e.exports={App:"App_App__3NTHb"}},function(e,t,a){e.exports={div:"Header_div__3yusq"}},function(e,t,a){e.exports={someClass:"Greeting_someClass__1m4oC",error:"Greeting_error__xERlJ"}},,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=(a(24),a(15)),u=a.n(o),i=a(4),s=a(16),m=a.n(s);var d=function(){return r.a.createElement("div",{className:m.a.div},r.a.createElement(i.b,{to:"/pre-junior"},"pre-junior"),r.a.createElement(i.b,{to:"/junior"},"junior"),r.a.createElement(i.b,{to:"plus-junior"},"plus-junior"))},E=a(1),p=a(9),h=a.n(p);var f=function(e){return r.a.createElement("div",{className:h.a.message},r.a.createElement("img",{src:e.avatar}),r.a.createElement("div",{className:h.a.all},r.a.createElement("div",null,e.name),r.a.createElement("div",null,e.message),r.a.createElement("div",{className:h.a.time},e.time)))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Some Name",v="some text",g="22:00";var C=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(f,{avatar:_,name:b,message:v,time:g}),r.a.createElement("hr",null),r.a.createElement("hr",null))},k=a(2);var N=function(e){return r.a.createElement("div",null,"// show some text",r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.id)}},"X"))};var j=function(e){var t=e.data.map((function(t){return r.a.createElement(N,{key:t._id,id:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},x=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var O=function(){var e=Object(n.useState)(x),t=Object(k.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(k.a)(c,2),u=o[0],i=o[1],s=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!=t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},w=a(18),S=a(17),y=a.n(S),A=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=""===l?y.a.error:" ";return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:function(e){return a(e)},className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},I=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(k.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),s=Object(k.a)(i,2),m=s[0],d=s[1],E=t.length;return r.a.createElement(A,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){a(o),d(m),alert("Hello  ! "+o)},error:m,totalUsers:E})},T=a(27);var F=function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(I,{users:a,addUserCallback:function(e){l([].concat(Object(w.a)(a),[{_id:Object(T.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},H=a(6),J=a(8),U=a.n(J),W=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],M=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(H.a)(e,W),s="".concat(U.a.error," ").concat(u||""),m=" ".concat(U.a.input," ").concat(c?U.a.errorInput:U.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},P=a(10),B=a.n(P),R=a(11),G=a.n(R),K=["red","className"],V=function(e){var t=e.red,a=e.className,n=Object(H.a)(e,K),l="".concat(t?G.a.red:G.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},q=a(12),X=a.n(q),Y=["type","onChange","onChangeChecked","className","spanClassName","children"],Z=function(e){e.type,e.onChange,e.onChangeChecked;var t=e.className,a=(e.spanClassName,e.children),n=Object(H.a)(e,Y),l="".concat(X.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){},className:l},n)),a&&r.a.createElement("span",{className:X.a.spanClassName},a))};var z=function(){var e=Object(n.useState)(""),t=Object(k.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),i=Object(k.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:B.a.column},r.a.createElement(M,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(M,{className:B.a.blue}),r.a.createElement(V,null,"default"),r.a.createElement(V,{red:!0,onClick:o},"delete "),r.a.createElement(V,{disabled:!0},"disabled"),r.a.createElement(Z,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(Z,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var L=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(O,null),r.a.createElement(F,null),r.a.createElement(z,null))};var Q=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},$="/pre-junior",D="/junior",ee="plus-junior";var te=function(){return r.a.createElement("div",null,"Routes \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0440\u043e\u0443\u0442",r.a.createElement(E.d,null,"\u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043c\u044b \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u043c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 '/' \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 PRE_JUNIOR",r.a.createElement(E.b,{path:"/",element:r.a.createElement(E.a,{to:$})}),r.a.createElement(E.b,{path:$,element:r.a.createElement(L,null)}),r.a.createElement(E.b,{path:D,element:r.a.createElement(Q,null)}),r.a.createElement(E.b,{path:ee,element:r.a.createElement(Q,null)}),"// add routes \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",r.a.createElement(E.b,{path:"/*",element:r.a.createElement(Q,null)})))};var ae=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(d,null),r.a.createElement(te,null)))};var ne=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.0cb03307.chunk.js.map