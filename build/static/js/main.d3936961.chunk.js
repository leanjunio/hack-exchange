(this["webpackJsonphack-exchange"]=this["webpackJsonphack-exchange"]||[]).push([[0],{31:function(e,t,n){e.exports=n(42)},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),l=n.n(r),u=(n(36),n(37),n(16)),o=n.n(u),s=n(20),i=n(9),m=n(21),p=n.n(m),E=n(47),b=n(48),v=n(49),f=n(50),h=n(28),d=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)("EUR"),u=Object(i.a)(l,2),m=u[0],d=u[1],j=Object(a.useState)("EUR"),y=Object(i.a)(j,2),O=y[0],k=y[1],x=Object(a.useState)(0),g=Object(i.a)(x,2),S=g[0],w=g[1],C=Object(a.useState)(0),N=Object(i.a)(C,2),I=N[0],J=N[1];function M(){return Object.keys(n)}return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p()("https://api.exchangeratesapi.io/latest?base=".concat(m));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r(n.rates),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[m]),c.a.createElement(E.a,null,c.a.createElement(b.a,null,c.a.createElement(v.a,null,c.a.createElement("div",null,c.a.createElement("h3",null,"Currency converter (currently set as ".concat(m,"): ")),c.a.createElement(f.a,{onSelect:function(e){return t=e,J(0),void d(t);var t}},c.a.createElement(f.a.Toggle,{id:"dropdown-basic",variant:"outline-secondary"},"Select a base currency"),c.a.createElement(f.a.Menu,null,M().map((function(e,t){return c.a.createElement(f.a.Item,{key:t,eventKey:e},e)})))),c.a.createElement("input",{className:"m-3",type:"text",placeholder:"Enter an amount: ".concat(S),onChange:function(e){return t=e,J(0),void w(t.target.value);var t}}),c.a.createElement("br",null),c.a.createElement("h6",null,"Click the target currency (currently: ".concat(O,")")),M().map((function(e,t){return c.a.createElement(h.a,{key:t,className:"m-3",variant:"outline-dark",onClick:function(){return t=e,J(0),k(t),void J((n[t]*S).toFixed(2));var t}},e)})),!!I&&c.a.createElement("h3",{className:"mt-5"},"".concat(S+" "+m," in ").concat(O," is: ").concat(I))))))};var j=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d,null))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d3936961.chunk.js.map