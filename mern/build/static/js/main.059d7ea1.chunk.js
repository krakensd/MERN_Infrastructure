(this["webpackJsonpmern-infrastructure"]=this["webpackJsonpmern-infrastructure"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(22),s=n.n(a),i=n(10),l=(n(33),n(6)),o=n(3),u=(n(34),n(2)),d=n.n(u),j=n(5);function h(e){return b.apply(this,arguments)}function b(){return(b=Object(j.a)(d.a.mark((function e(t){var n,r,c,a,s,i=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",r=i.length>2&&void 0!==i[2]?i[2]:null,c={method:n},r&&(c.headers={"Content-Type":"application/json"},c.body=JSON.stringify(r)),(a=y())&&(c.headers=c.headers||{},c.headers.Authorization="Bearer ".concat(a)),e.next=8,fetch(t,c);case 8:if(!(s=e.sent).ok){e.next=11;break}return e.abrupt("return",s.json());case 11:throw new Error("Bad Request");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="/api/users";function m(e){return h(O,"POST",e)}function p(e){return h("".concat(O,"/login"),"POST",e)}function f(e){return x.apply(this,arguments)}function x(){return(x=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(t);case 3:return n=e.sent,localStorage.setItem("token",n),e.abrupt("return",N());case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Invalid Sign Up");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(t);case 3:return n=e.sent,localStorage.setItem("token",n),e.abrupt("return",N());case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Bad Credentials");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function y(){var e=localStorage.getItem("token");return e?JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3?(localStorage.removeItem("token"),null):e:null}function N(){var e=y();return e?JSON.parse(atob(e.split(".")[1])).user:null}n(36);var w=n(12),S=n(15),C=n(0);function k(e){var t=e.setUser,n=Object(r.useState)({email:"",password:""}),c=Object(l.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)(""),o=Object(l.a)(i,2),u=o[0],h=o[1];function b(e){s(Object(S.a)(Object(S.a)({},a),{},Object(w.a)({},e.target.name,e.target.value))),h("")}function O(){return(O=Object(j.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,v(a);case 4:r=e.sent,t(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),h("Log In Failed - Try Again");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"form-container",onSubmit:function(e){return O.apply(this,arguments)},children:Object(C.jsxs)("form",{autoComplete:"off",children:[Object(C.jsx)("label",{children:"Email"}),Object(C.jsx)("input",{type:"text",name:"email",value:a.email,onChange:b,required:!0}),Object(C.jsx)("label",{children:"Password"}),Object(C.jsx)("input",{type:"password",name:"password",value:a.password,onChange:b,required:!0}),Object(C.jsx)("button",{type:"submit",children:"LOG IN"})]})}),Object(C.jsxs)("p",{className:"error-message",children:["\xa0",u]})]})}var I=n(23),U=n(24),P=n(28),E=n(26),T=function(e){Object(P.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(I.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={name:"",email:"",password:"",confirm:"",error:""},e.handleChange=function(t){e.setState(Object(w.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(j.a)(d.a.mark((function t(n){var r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,delete(r=Object(S.a)({},e.state)).error,delete r.confirm,t.next=7,f(r);case 7:c=t.sent,e.props.setUser(c),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),e.setState({error:"Sign Up Failed - Try Again"});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(U.a)(n,[{key:"render",value:function(){var e=this.state.password!==this.state.confirm;return Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"form-container",children:Object(C.jsxs)("form",{autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(C.jsx)("label",{children:"Name"}),Object(C.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,required:!0}),Object(C.jsx)("label",{children:"Email"}),Object(C.jsx)("input",{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,required:!0}),Object(C.jsx)("label",{children:"Password"}),Object(C.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0}),Object(C.jsx)("label",{children:"Confirm"}),Object(C.jsx)("input",{type:"password",name:"confirm",value:this.state.confirm,onChange:this.handleChange,required:!0}),Object(C.jsx)("button",{type:"submit",disabled:e,children:"SIGN UP"})]})}),Object(C.jsxs)("p",{className:"error-message",children:["\xa0",this.state.error]})]})}}]),n}(r.Component);n(38);function A(){return Object(C.jsxs)("div",{className:"Logo",children:[Object(C.jsx)("div",{children:"SEI"}),Object(C.jsx)("div",{children:"CAFE"})]})}function L(e){var t=e.setUser,n=Object(r.useState)(!0),c=Object(l.a)(n,2),a=c[0],s=c[1];return Object(C.jsxs)("main",{className:"AuthPage",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(A,{}),Object(C.jsx)("h3",{onClick:function(){return s(!a)},children:a?"SIGN UP":"LOG IN"})]}),a?Object(C.jsx)(k,{setUser:t}):Object(C.jsx)(T,{setUser:t})]})}var D=n(27),q="/api/items";function R(){return h(q)}var F="/api/orders";function Q(){return h("".concat(F,"/cart"))}function G(e){return h("".concat(F,"/cart/items/").concat(e),"POST")}function _(e,t){return h("".concat(F,"/cart/qty"),"PUT",{itemId:e,newQty:t})}function J(){return h("".concat(F,"/cart/checkout"),"POST")}function B(){return h("".concat(F,"/history"))}n(39),n(40),n(41);function $(e){var t=e.menuItem,n=e.handleAddToOrder;return Object(C.jsxs)("div",{className:"MenuListItem",children:[Object(C.jsx)("div",{className:"emoji flex-ctr-ctr",children:t.emoji}),Object(C.jsx)("div",{className:"name",children:t.name}),Object(C.jsxs)("div",{className:"buy",children:[Object(C.jsxs)("span",{children:["$",t.price.toFixed(2)]}),Object(C.jsx)("button",{className:"btn-sm",onClick:function(){return n(t._id)},children:"ADD"})]})]})}function H(e){var t=e.menuItems,n=e.handleAddToOrder,r=t.map((function(e){return Object(C.jsx)($,{menuItem:e,handleAddToOrder:n},e._id)}));return Object(C.jsx)("main",{className:"MenuList",children:r})}n(42);function M(e){var t=e.categories,n=e.activeCat,r=e.setActiveCat,c=t.map((function(e){return Object(C.jsx)("li",{className:e===n?"active":"",onClick:function(){return r(e)},children:e},e)}));return Object(C.jsx)("ul",{className:"CategoryList",children:c})}n(43),n(44);function W(e){var t=e.lineItem,n=e.isPaid,r=e.handleChangeQty;return Object(C.jsxs)("div",{className:"LineItem",children:[Object(C.jsx)("div",{className:"flex-ctr-ctr",children:t.item.emoji}),Object(C.jsxs)("div",{className:"flex-ctr-ctr flex-col",children:[Object(C.jsx)("span",{className:"align-ctr",children:t.item.name}),Object(C.jsx)("span",{children:t.item.price.toFixed(2)})]}),Object(C.jsxs)("div",{className:"qty",style:{justifyContent:n&&"center"},children:[!n&&Object(C.jsx)("button",{className:"btn-xs",onClick:function(){return r(t.item._id,t.qty-1)},children:"\u2212"}),Object(C.jsx)("span",{children:t.qty}),!n&&Object(C.jsx)("button",{className:"btn-xs",onClick:function(){return r(t.item._id,t.qty+1)},children:"+"})]}),Object(C.jsxs)("div",{className:"ext-price",children:["$",t.extPrice.toFixed(2)]})]})}function z(e){var t=e.order,n=e.handleChangeQty,r=e.handleCheckout;if(!t)return null;var c=t.lineItems.map((function(e){return Object(C.jsx)(W,{lineItem:e,isPaid:t.isPaid,handleChangeQty:n},e._id)}));return Object(C.jsxs)("div",{className:"OrderDetail",children:[Object(C.jsxs)("div",{className:"section-heading",children:[t.isPaid?Object(C.jsxs)("span",{children:["ORDER ",Object(C.jsx)("span",{className:"smaller",children:t.orderId})]}):Object(C.jsx)("span",{children:"NEW ORDER"}),Object(C.jsx)("span",{children:new Date(t.updatedAt).toLocaleDateString()})]}),Object(C.jsx)("div",{className:"line-item-container flex-ctr-ctr flex-col scroll-y",children:c.length?Object(C.jsxs)(C.Fragment,{children:[c,Object(C.jsxs)("section",{className:"total",children:[t.isPaid?Object(C.jsx)("span",{className:"right",children:"TOTAL\xa0\xa0"}):Object(C.jsx)("button",{className:"btn-sm",onClick:r,disabled:!c.length,children:"CHECKOUT"}),Object(C.jsx)("span",{children:t.totalQty}),Object(C.jsxs)("span",{className:"right",children:["$",t.orderTotal.toFixed(2)]})]})]}):Object(C.jsx)("div",{className:"hungry",children:"Hungry?"})})]})}n(45);function K(e){var t=e.user,n=e.setUser;return Object(C.jsxs)("div",{className:"UserLogOut",children:[Object(C.jsx)("div",{children:t.name}),Object(C.jsx)("div",{className:"email",children:t.email}),Object(C.jsx)("button",{className:"btn-sm",onClick:function(){localStorage.removeItem("token"),n(null)},children:"LOG OUT"})]})}function V(e){var t=e.user,n=e.setUser,c=Object(r.useState)([]),a=Object(l.a)(c,2),s=a[0],u=a[1],h=Object(r.useState)(""),b=Object(l.a)(h,2),O=b[0],m=b[1],p=Object(r.useState)(null),f=Object(l.a)(p,2),x=f[0],v=f[1],g=Object(r.useRef)([]),y=Object(o.g)();function N(){return(N=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t);case 2:n=e.sent,v(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(j.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t,n);case 2:r=e.sent,v(r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:y.push("/orders");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:t=e.sent,g.current=t.reduce((function(e,t){var n=t.category.name;return e.includes(n)?e:[].concat(Object(D.a)(e),[n])}),[]),u(t),m(g.current[0]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]),Object(C.jsxs)("main",{className:"NewOrderPage",children:[Object(C.jsxs)("aside",{children:[Object(C.jsx)(A,{}),Object(C.jsx)(M,{categories:g.current,activeCat:O,setActiveCat:m}),Object(C.jsx)(i.b,{to:"/orders",className:"button btn-sm",children:"PREVIOUS ORDERS"}),Object(C.jsx)(K,{user:t,setUser:n})]}),Object(C.jsx)(H,{menuItems:s.filter((function(e){return e.category.name===O})),handleAddToOrder:function(e){return N.apply(this,arguments)}}),Object(C.jsx)(z,{order:x,handleChangeQty:function(e,t){return w.apply(this,arguments)},handleCheckout:function(){return S.apply(this,arguments)}})]})}n(51),n(52);function X(e){var t=e.order,n=e.isSelected,r=e.handleSelectOrder;return Object(C.jsxs)("div",{className:"OrderListItem".concat(n?" selected":""),onClick:function(){return r(t)},children:[Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{children:["Order Id: ",Object(C.jsx)("span",{className:"smaller",children:t.orderId})]}),Object(C.jsx)("div",{className:"smaller",children:new Date(t.updatedAt).toLocaleDateString()})]}),Object(C.jsxs)("div",{className:"align-rt",children:[Object(C.jsxs)("div",{children:["$",t.orderTotal.toFixed(2)]}),Object(C.jsxs)("div",{className:"smaller",children:[t.totalQty," Item",t.totalQty>1?"s":""]})]})]})}n(53);function Y(e){var t=e.orders,n=e.activeOrder,r=e.handleSelectOrder,c=t.map((function(e){return Object(C.jsx)(X,{order:e,isSelected:e===n,handleSelectOrder:r},e._id)}));return Object(C.jsx)("main",{className:"OrderList",children:c.length?c:Object(C.jsx)("span",{className:"no-orders",children:"No Previous Orders"})})}function Z(e){var t=e.user,n=e.setUser,c=Object(r.useState)([]),a=Object(l.a)(c,2),s=a[0],o=a[1],u=Object(r.useState)(null),h=Object(l.a)(u,2),b=h[0],O=h[1];return Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,o(t),O(t[0]||null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(C.jsxs)("main",{className:"OrderHistoryPage",children:[Object(C.jsxs)("aside",{children:[Object(C.jsx)(A,{}),Object(C.jsx)(i.b,{to:"/orders/new",className:"button btn-sm",children:"NEW ORDER"}),Object(C.jsx)(K,{user:t,setUser:n})]}),Object(C.jsx)(Y,{orders:s,activeOrder:b,handleSelectOrder:function(e){O(e)}}),Object(C.jsx)(z,{order:b})]})}function ee(){var e=Object(r.useState)(N()),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(C.jsx)("main",{className:"App",children:n?Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(o.d,{children:[Object(C.jsx)(o.b,{path:"/orders/new",children:Object(C.jsx)(V,{user:n,setUser:c})}),Object(C.jsx)(o.b,{path:"/orders",children:Object(C.jsx)(Z,{user:n,setUser:c})}),Object(C.jsx)(o.a,{to:"/orders"})]})}):Object(C.jsx)(L,{setUser:c})})}s.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(i.a,{children:Object(C.jsx)(ee,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.059d7ea1.chunk.js.map