(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={section:"Section_section__1uHuX",title:"Section_title__fcXJ_"}},14:function(t,e,n){t.exports={container:"Container_container__3IS52"}},16:function(t,e,n){t.exports={notification:"Notification_notification__BuF-r"}},2:function(t,e,n){t.exports={form:"ContactForm_form__dIxas",item:"ContactForm_item__Ln2tG",title:"ContactForm_title__3aILa",input:"ContactForm_input__28t4-",button:"ContactForm_button__jL471"}},23:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),o=n.n(c),i=n(3),r=n.n(i),s=(n(23),n(17)),l=n(5),u=n(6),m=n(8),b=n(7),j=n(14),h=n.n(j);var d=function(t){var e=t.children;return Object(a.jsx)("div",{className:h.a.container,children:e})},f=n(11),p=n.n(f);var _=function(t){var e=t.title,n=void 0===e?"Section":e,c=t.children;return Object(a.jsxs)("section",{className:p.a.section,children:[Object(a.jsx)("h2",{className:p.a.title,children:n}),c]})},O=n(15),v=n(2),x=n.n(v),C=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(O.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:x.a.form,children:[Object(a.jsxs)("label",{className:x.a.item,children:[Object(a.jsx)("p",{className:x.a.title,children:"Name"}),Object(a.jsx)("input",{type:"text",name:"name",value:e,onChange:this.handleChange,placeholder:"Enter name here...",className:x.a.input})]}),Object(a.jsxs)("label",{className:x.a.item,children:[Object(a.jsx)("p",{className:x.a.title,children:"Number"}),Object(a.jsx)("input",{type:"text",name:"number",value:n,onChange:this.handleChange,placeholder:"Enter number here...",className:x.a.input})]}),Object(a.jsx)("button",{type:"submit",className:x.a.button,children:"Add contact"})]})}}]),n}(c.Component),g=n(4),N=n.n(g);var S=function(t){var e=t.name,n=void 0===e?"anonymous":e,c=t.number,o=void 0===c?"unknown":c,i=t.id,r=t.onDeleteContact;return Object(a.jsxs)("li",{className:N.a.item,children:[Object(a.jsxs)("p",{className:N.a.contact,children:[n,": ",o]}),Object(a.jsx)("button",{onClick:function(){return r(i)},className:N.a.button,children:"Remove"})]})};var y=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:N.a.contacts,children:e.map((function(t){var e=t.name,c=void 0===e?"anonymous":e,o=t.number,i=void 0===o?"unknown":o,r=t.id;return Object(a.jsx)(S,{name:c,number:i,id:r,onDeleteContact:n},r)}))})},k=n(9),w=n.n(k);var F=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:w.a.filter,children:[Object(a.jsx)("p",{className:w.a.title,children:"Find contacts by name"}),Object(a.jsx)("input",{type:"text",value:e,onChange:n,placeholder:"Enter name here...",className:w.a.input})]})},L=n(16),D=n.n(L);var E=function(t){var e=t.message;return Object(a.jsxs)("p",{className:D.a.notification,children:[" ",e," "]})},I=n(32),J=n(12),A=(n(24),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:Object(I.a)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(I.a)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(I.a)(),name:"Eden Clements",number:"645-17-79"},{id:Object(I.a)(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a={name:n,number:e.number,id:Object(I.a)()},c=t.state.contacts;c.find((function(t){return t.name.toLowerCase()===a.name.toLowerCase()}))?J.b.dark("\ud83e\udd9d ".concat(n," is already in contacts."),{autoClose:3e3}):t.setState((function(){return{contacts:[a].concat(Object(s.a)(c))}}))},t.changeFilter=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=n.toLowerCase(),o=e.filter((function(t){return t.name.toLowerCase().includes(c)}));return Object(a.jsxs)(d,{children:[Object(a.jsx)(_,{title:"Phone book",children:Object(a.jsx)(C,{onSubmit:this.addContact})}),Object(a.jsxs)(_,{title:"Contacts",children:[e.length>0&&Object(a.jsx)(F,{value:n,onChange:this.changeFilter}),o.length?Object(a.jsx)(y,{contacts:o.length?o:e,onDeleteContact:this.deleteContact}):Object(a.jsx)(E,{message:"Nothing to show."}),Object(a.jsx)(J.a,{})]})]})}}]),n}(c.Component));n(27);r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={contacts:"ContactList_contacts__3oUz4",item:"ContactList_item__1DpCE",contact:"ContactList_contact__1qTPM",button:"ContactList_button__1QHKQ"}},9:function(t,e,n){t.exports={filter:"Filter_filter__3CO8T",title:"Filter_title__2hVQm",input:"Filter_input__XDd7E"}}},[[28,1,2]]]);
//# sourceMappingURL=main.8bdb4c38.chunk.js.map