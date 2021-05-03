(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{24:function(e,n){e.exports={level:"easy"}},29:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var i,a=t(0),r=t.n(a),l=t(9),c=t.n(l),o=t(6),s=(t(29),t(1)),d=t(7),u=t(21),f=t.n(u),v=t(22),b=t(23),j=t(4),x=t(5),O="black",g="brown",h="red",m={0:"transparent",1:"blue",2:"green",3:"coral",4:"blueviolet",5:"maroon",6:"cornflowerblue",7:"black",8:"dimgray"},p=Object(s.d)(d.a)(i||(i=Object(o.a)(["\n  width: 34px;\n  height: 36px;\n  font: bold 13px ms_sans_serif;\n  color: ",";\n"])),(function(e){return m[e.value]||m[0]})),w=t(14),y=t(15),C=t(2);var k,F=function(e){var n=e.value,t=e.isMine,i=e.isRevealed,a=e.isFlagged,r=e.onClick,l=e.onContextMenu,c=e.gameEnded,o=e.isFailedCell;return Object(C.jsx)(p,{"data-testid":"cell",onClick:r,onContextMenu:l,active:i||c,disable:i||c,value:n,children:c?t?Object(C.jsx)(w.a,{"data-testid":"cell-mine",icon:y.a,color:o?h:O}):Object(C.jsx)("span",{"data-testid":"cell-solution",children:n||""}):a?Object(C.jsx)(w.a,{"data-testid":"cell-flag",icon:y.b,color:g}):i?Object(C.jsx)("span",{"data-testid":"cell-value",children:n}):Object(C.jsx)("span",{"data-testid":"cell-hidden-value",children:""})})},M=s.d.div(k||(k=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n  margin: 5px 0 0;\n\n  button {\n    font: bold 13px ms_sans_serif;\n  }\n"])));var _,S,E=function(e){var n=e.buttons,t=void 0===n?[]:n;return Object(C.jsx)(M,{"data-testid":"actionBar",children:t.map((function(e,n){var t=e.onClick,i=e.disabled,a=e.text;return Object(C.jsx)(d.a,{onClick:t,disabled:!!i,role:"button",children:a},"button_".concat(n))}))})},I=s.d.div(_||(_=Object(o.a)(["\n  padding: 5px 7px;\n"]))),R=s.d.div(S||(S=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),B={x:0,y:0,value:0,isRevealed:!1,isFlagged:!1,isMine:!1};function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.rows,t=void 0===n?z.rows:n,i=e.cols,a=void 0===i?z.cols:i;return new Array(t*a).fill(0).map((function(e,n){var i=D({index:n,rows:t}),a=Object(x.a)(i,2),r=a[0],l=a[1];return Object(j.a)(Object(j.a)({},B),{},{x:r,y:l})}))}function T(e){var n=e.x,t=e.y;return n*e.rows+t}function D(e){var n=e.index,t=e.rows;return[Math.floor(n/t),n%t]}var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.cells,t=void 0===n?[]:n,i=e.targetCell,a=void 0===i?[]:i,r=e.level,l=void 0===r?z:r,c=l.rows,o=l.cols;if(t[T({x:a[0],y:a[1],rows:c})].isMine)return[t,!1];var s=t.map((function(e){return Object(j.a)({},e)})),d=null,u=function e(n,t){var i=T({x:n,y:t,rows:c});if(s[i]&&!s[i].isRevealed&&(s[i].isRevealed=!0,s[i].isFlagged=!1,0===s[i].value))for(var a=-1;a<=1;a++)for(var r=-1;r<=1;r++)(0!==a||0!==r)&&n+a>=0&&n+a<c&&t+r>=0&&t+r<o&&s[T({x:n+a,y:t+r,rows:c})]&&e(n+a,t+r)};return u(a[0],a[1]),[s,d]};function P(e){for(var n=e.mines,t=e.maxIndex,i=e.firstClickIndex,a=new Set;a.size<n;){var r=Math.floor(Math.random()*t);r!==i&&a.add(r)}return a}function Q(e){for(var n=0;n<e.length;n++)if(e[n].isFlagged!==e[n].isMine)return null;return!0}var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.cells,t=void 0===n?[]:n,i=e.targetCell,a=void 0===i?[]:i,r=e.level,l=void 0===r?z:r,c=l.rows,o=l.mines,s=t.map((function(e){return Object(j.a)({},e)})),d=null,u=T({x:a[0],y:a[1],rows:c});return s[u].isRevealed||(s[u].isFlagged=!t[u].isFlagged),s.filter((function(e){return e.isFlagged})).length===o&&(d=Q(s)),[s,d]},z={rows:9,cols:9,mines:10};var A=t(24),q=function(e){var n=e.level;switch(void 0===n?"easy":n){case"easy":default:return Object(j.a)({},z)}}(t.n(A).a.level),G="You win !!",H="You lose QQ",K="Click to play!";var N,U,V,W=function(){var e=q.rows,n=q.cols,t=q.mines,i=Object(a.useState)(null),r=Object(x.a)(i,2),l=r[0],c=r[1],o=Object(a.useState)(!1),s=Object(x.a)(o,2),d=s[0],u=s[1],f=Object(a.useState)(L({rows:e,cols:n})),v=Object(x.a)(f,2),b=v[0],O=v[1],g=Object(a.useState)({}),h=Object(x.a)(g,2),m=h[0],p=h[1],w=function(e,n,t){null!==e&&(e||p({x:n,y:t}),c(e))},y=function(e,n,t){1===e.nativeEvent.which&&(d?O((function(e){var i=J({cells:e,targetCell:[n,t],level:q}),a=Object(x.a)(i,2),r=a[0],l=a[1];return w(l,n,t),r})):(u(!0),O((function(e){var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.cells,t=void 0===n?[]:n,i=e.firstClick,a=void 0===i?[]:i,r=e.level,l=void 0===r?z:r,c=t.map((function(e){return Object(j.a)({},e)})),o=l.rows,s=l.cols;return P({mines:l.mines,maxIndex:o*s,firstClickIndex:T({x:a[0],y:a[1],rows:o})}).forEach((function(e){var n=D({index:e,rows:o}),t=Object(x.a)(n,2),i=t[0],a=t[1];c[e].isMine=!0;for(var r=-1;r<=1;r++)for(var l=-1;l<=1;l++){var d=T({x:i+r,y:a+l,rows:o});(0!==r||0!==l)&&i+r>=0&&i+r<o&&a+l>=0&&a+l<s&&c[d]&&(c[d].value+=1)}})),J({cells:c,targetCell:a,level:l})}({cells:e,firstClick:[n,t],level:q}),a=Object(x.a)(i,2),r=a[0];a[1];return r}))))};return Object(C.jsxs)("main",{"data-testid":"game",children:[Object(C.jsx)(E,{buttons:[{text:"Restart",onClick:function(){c(null),u(!1),O(L({rows:e,cols:n})),p({})}},{text:"Solve",onClick:function(){c(!0)},disabled:!d}]}),Object(C.jsxs)(I,{children:[Object(C.jsx)("h2",{children:null!==l?l?G:H:K}),Object(C.jsxs)("div",{children:["Mines: ",t]}),Object(C.jsxs)("div",{children:["Flags: ",b.filter((function(e){return e.isFlagged})).length]})]}),Object(C.jsx)("div",{children:function(){var n=[];return b.forEach((function(t,i){i%e===0?n.push([t]):n[n.length-1].push(t)})),n}().map((function(e,n){return Object(C.jsx)(R,{children:e.map((function(e,n){var t=e.x,i=e.y;return Object(C.jsx)(F,Object(j.a)(Object(j.a)({},e),{},{gameEnded:null!==l,isFailedCell:m.x===t&&m.y===i,onClick:function(e){y(e,t,i)},onContextMenu:function(e){!function(e,n,t){e.preventDefault(),d?l?alert("The game is ended!"):O((function(e){var i=Y({cells:e,targetCell:[n,t],level:q}),a=Object(x.a)(i,2),r=a[0],l=a[1];return w(l,n,t),r})):alert("Left click any cell to start the game first!")}(e,t,i)}}),"cell_".concat(n))}))},"row_".concat(n))}))})]})},X=Object(s.b)(N||(N=Object(o.a)(["\n  @font-face {\n    font-family: 'ms_sans_serif';\n    src: url('","') format('woff2');\n    font-weight: 400;\n    font-style: normal\n  }\n  @font-face {\n    font-family: 'ms_sans_serif';\n    src: url('","') format('woff2');\n    font-weight: bold;\n    font-style: normal\n  }\n  body {\n    font-family: 'ms_sans_serif';\n  }\n  ","\n"])),v.a,b.a,d.d),Z=s.d.div(U||(U=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  background: teal;\n  padding: 30px;\n"]))),$=Object(s.d)(d.b)(V||(V=Object(o.a)(["\n  width: fit-content;\n  display: block;\n  margin: 0 auto;\n"])));var ee=function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(X,{}),Object(C.jsx)(s.a,{theme:f.a,children:Object(C.jsx)(Z,{children:Object(C.jsxs)($,{children:[Object(C.jsx)(d.c,{children:"Minesweeper"}),Object(C.jsx)(W,{})]})})})]})},ne=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,l=n.getTTFB;t(e),i(e),a(e),r(e),l(e)}))};c.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(ee,{})}),document.getElementById("root")),ne()}},[[36,1,2]]]);
//# sourceMappingURL=main.bf2a6432.chunk.js.map