(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),o=n.n(r),s=n(5),i=n(9),l=n(6),u=n(7),m=n(11),b=n(10),h=(n(16),n(0)),d=function(e){var t=e.handleInputChange,n=e.handleSubmit,a=e.inputName,c=e.inputNumber;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{className:"InputPhonebookForm",onSubmit:n,children:[Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{className:"label",children:"Name"}),Object(h.jsx)("input",{onChange:t,name:"name",type:"text",value:a})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{className:"label",children:"Number"}),Object(h.jsx)("input",{onChange:t,name:"number",type:"number",value:c})]}),Object(h.jsx)("button",{type:"submit",children:"Add contact"})]})})},j=(n(18),function(e){var t=e.id,n=e.name,a=e.number,c=e.onHandleDelete;return Object(h.jsxs)("div",{className:"Contact",children:[Object(h.jsxs)("span",{className:"name",children:[n,":"]}),Object(h.jsx)("span",{className:"number",children:a}),Object(h.jsx)("button",{type:"button",onClick:function(){return c(t)},children:"Delete"})]},t)}),p=function(e){var t=e.inputFilterName,n=e.changeFilter;return Object(h.jsxs)("label",{children:["Find contacs by name"," ",Object(h.jsx)("input",{name:"filter",type:"text",value:t,onChange:n})]})},f=(n(19),function(e){var t=e.contacts,n=e.inputFilterName,a=e.changeFilter,c=e.onHandleDelete;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{inputFilterName:n,changeFilter:a}),Object(h.jsx)("ul",{className:"ContactList",children:t.map((function(e){var t=e.id,n=e.name,a=e.number;return Object(h.jsx)("li",{className:"ContactList__item",children:Object(h.jsx)(j,{id:t,name:n,number:a,onHandleDelete:c})},t)}))})]})}),O=(n(20),function(e){var t=e.children;return Object(h.jsx)("div",{className:"Container",children:t})}),g=n(8),x=n.n(g),v=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],filter:"",name:"",number:""},e.addNewContact=function(t,n){var a={id:x()(),name:t,number:n};e.setState({contacts:[].concat(Object(i.a)(e.state.contacts),[a]),name:"",number:""})},e.handleSubmit=function(t){t.preventDefault();var n=t.currentTarget.name.value,a=t.currentTarget.number.value;n&&a?e.state.contacts.some((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts")):e.addNewContact(n,a):alert("Please enter a contact name or phone number!")},e.handleInputChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(s.a)({},a,c))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.handleDelete=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount");var e=localStorage.getItem("contacts"),t=JSON.parse(e);this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e,t){console.log("componentDidUpdate"),this.state.contacts!==t.contacts&&(console.log("\u043e\u0431\u043d\u043e\u0432\u043b\u0438\u043b\u043e\u0441\u044c"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.name,a=e.number,c=e.filter,r=c.toLowerCase(),o=t.filter((function(e){return e.name.toLowerCase().includes(r)}));return Object(h.jsxs)(O,{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(d,{handleSubmit:this.handleSubmit,handleInputChange:this.handleInputChange,inputName:n,inputNumber:a}),Object(h.jsx)("h2",{children:"Contacts"}),0!==t.length&&Object(h.jsx)(f,{contacts:o,onHandleDelete:this.handleDelete,inputFilterName:c,changeFilter:this.changeFilter})]})}}]),n}(a.Component);n(29);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.e57da917.chunk.js.map