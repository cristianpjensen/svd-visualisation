(this["webpackJsonpsingular-value-decomposition-visualisation"]=this["webpackJsonpsingular-value-decomposition-visualisation"]||[]).push([[0],{20:function(t,e,n){},27:function(t,e,n){},35:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var i=n(8),o=n(21),a=n.n(o),r=(n(27),n(11)),s=n(10),c=n(39),h=n(17),l=n.n(h),u=n(5),d=n(16),j=n.n(d),g=n(12),p=function(t){var e=Math.floor((t.x+8)/17*255),n=Math.floor((t.y+8)/17*255),i=Math.floor((t.z+8)/17*255);return"rgb(".concat(e,", ").concat(n,", ").concat(i,")")},b=function(t,e){var n=e.position;new g.a.Tween(n).to(t).easing(g.a.Easing.Quadratic.Out).onUpdate((function(){e.position.set(n.x,n.y,n.z)})).start()},w=n(22),x=function(){var t={margin:{top:0,right:0,bottom:0,left:0},padding:{top:0,right:0,bottom:0,left:0},outerWidth:window.outerWidth,outerHeight:window.outerHeight,ticks:10};return t.innerWidth=t.outerWidth-t.margin.left-t.margin.right,t.innerHeight=t.outerHeight-t.margin.top-t.margin.bottom,t.width=t.innerWidth-t.padding.left-t.padding.right,t.height=t.innerHeight-t.padding.top-t.padding.bottom,t.origin={x:t.innerWidth/2,y:t.innerHeight/2},t.unit={x:t.innerWidth/(t.ticks+1.5),y:t.innerHeight/(t.ticks+1.5)},t},v=(n(35),n(6));function f(t){var e=t.rows;return Object(v.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"7px 18px 12px 18px 12px 18px 7px",gridGap:4},children:[Object(v.jsx)(m,{}),Object(v.jsx)(O,{value:e[0][0][0],classString:"a",row:e[0][0],setRow:function(t){return e[0][1](t)},length:3}),Object(v.jsx)(O,{value:e[0][0][1],classString:"b",row:e[0][0],setRow:function(t){return e[0][1](t)},length:3}),Object(v.jsx)(O,{value:e[0][0][2],classString:"e",row:e[0][0],setRow:function(t){return e[0][1](t)},length:3}),Object(v.jsx)(O,{value:e[1][0][0],classString:"c",row:e[1][0],setRow:function(t){return e[1][1](t)},length:3}),Object(v.jsx)(O,{value:e[1][0][1],classString:"d",row:e[1][0],setRow:function(t){return e[1][1](t)},length:3}),Object(v.jsx)(O,{value:e[1][0][2],classString:"f",row:e[1][0],setRow:function(t){return e[1][1](t)},length:3}),Object(v.jsx)(O,{value:e[2][0][0],classString:"g",row:e[2][0],setRow:function(t){return e[2][1](t)},length:3}),Object(v.jsx)(O,{value:e[2][0][1],classString:"h",row:e[2][0],setRow:function(t){return e[2][1](t)},length:3}),Object(v.jsx)(O,{value:e[2][0][2],classString:"i",row:e[2][0],setRow:function(t){return e[2][1](t)},length:3}),Object(v.jsx)(C,{})]})}function O(t){var e=t.value,n=t.classString,o=t.row,a=t.setRow,r=t.length,c=Object(i.useState)(e),h=Object(s.a)(c,2),l=h[0],u=h[1],d=Object(i.useState)("2ch"),j=Object(s.a)(d,2),g=j[0],p=j[1];Object(i.useEffect)((function(){a(2===r?"a"===n||"c"===n?[l,o[1]]:[o[0],l]:"a"===n||"c"===n||"g"===n?[l,o[1],o[2]]:"b"===n||"d"===n||"h"===n?[o[0],l,o[2]]:[o[0],o[1],l])}),[l]);return Object(v.jsx)("input",{value:l,className:n,onChange:function(t){u(t.target.value),p("".concat(t.target.value.length,"ch"))},style:{width:g,textAlign:"center",fontFamily:"Katex",backgroundColor:"transparent",color:"white",fontSize:16,border:"none",outline:"none",margin:"0 auto"}})}function m(){return Object(v.jsx)("svg",{height:"70.8",width:"7",className:"open3",children:Object(v.jsx)("path",{d:"M 7 0 l -7 0 l 0 70.8 l 7 0",stroke:"white",strokeWidth:"3.8",fill:"none"})})}function C(){return Object(v.jsx)("svg",{height:"70.8",width:"7",className:"close3",children:Object(v.jsx)("path",{d:"M 0 0 l 7 0 l 0 70.8 l -7 0",stroke:"white",strokeWidth:"3.8",fill:"none"})})}n(20);function M(t){var e=t.matrix,n=t.vectorsDispatch,i=t.transpose,o="";for(var a in e.elements){var r=e.elements[a];(parseInt(a)+1)%3===0&&"8"!==a?o+="".concat(r.toFixed(2),"\\\\"):o+="8"!==a?"".concat(r.toFixed(2),"&"):r.toFixed(2)}return Object(v.jsx)("div",{className:"matrix",onClick:function(){return n({type:"apply-matrix",matrix:i?e:e.transpose()})},children:Object(v.jsx)(l.a,{children:"$$ \\begin{bmatrix} ".concat(o," \\end{bmatrix} ").concat(i?"^T":""," $$")})})}function y(t){var e=t.defaultVectors,n=t.vectorsDispatch;return Object(v.jsx)("svg",{width:"24",height:"24",className:"matrix",viewBox:"0 0 15 15",fill:"white",onClick:function(){e&&e.forEach((function(t){var e=Object(s.a)(t,2),n=e[0];(0,e[1])(n)})),n&&n({type:"reset"})},style:{margin:"3px auto",display:"block"},xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z","fill-rule":"evenodd","clip-rule":"evenodd"})})}function k(){var t=Object(i.useState)(!1),e=Object(s.a)(t,2),n=e[0],o=e[1];return Object(v.jsxs)("div",{style:{position:"absolute",top:12,right:12},children:[Object(v.jsx)("svg",{width:"28",height:"28",viewBox:"0 0 15 15",className:"matrix",fill:"white",onClick:function(){return o(!n)},style:{position:"absolute",top:0,right:0},xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z","fill-rule":"evenodd","clip-rule":"evenodd"})}),Object(v.jsxs)("div",{style:{width:360,marginTop:36,backgroundColor:"black",border:"1px solid white",display:n?"block":"none",padding:12},children:[Object(v.jsx)("div",{style:{fontSize:24,textAlign:"center"},children:Object(v.jsx)("b",{children:"Info"})}),"You can change the matrix input by clicking on the matrix values and changing them like any other input.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"When you have put in your desired matrix, you can click on the matrices to apply them to the vectors (visualised as dots).",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"You should click the matrices in the order of which they would be applied, which is, of course, from right to left.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"Click on the arrow to reset the vectors to their original positions.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"Click"," ",Object(v.jsx)("a",{href:"https://en.wikipedia.org/wiki/Singular_value_decomposition",children:"here"})," ","to learn more about singular value decomposition."]})]})}var S=function(){var t=Object(i.useRef)(null),e=x(),n=new u.n,o=new u.t({antialias:!0});o.setPixelRatio(window.devicePixelRatio),o.setSize(e.width,e.height),o.outputEncoding=u.u;var a=new u.k({color:16777215,specular:16777215,shininess:50});Object(i.useEffect)((function(){!function(t,e,n,i){var o,a=x(),r=new u.l(75,a.width/a.height,.1,1e3),s=null===t||void 0===t||null===(o=t.current)||void 0===o?void 0:o.appendChild(n.domElement);s&&(s.style.margin="0 auto");var c=new u.c(.05,.05,16,64),h=new u.j(c,i);h.rotation.z=Math.PI/2;var l=new u.j(c,i),d=new u.j(c,i);d.rotation.x=Math.PI/2,e.add(h),e.add(l),e.add(d);var j=new u.b(.3,.6,64),p=new u.j(j,i);p.position.x=8,p.rotation.z=-Math.PI/2;var b=new u.j(j,i);b.position.y=8;var v=new u.j(j,i);v.position.z=8,v.rotation.x=Math.PI/2,e.add(p),e.add(b),e.add(v);for(var f=new u.a(.03,.5,.03),O=-7;O<8;O++){var m=new u.j(f,i);m.position.x=O,m.rotation.x=Math.PI/2;var C=new u.j(f,i);C.position.y=O,C.rotation.z=Math.PI/2;var M=new u.j(f,i);M.position.z=O,e.add(m),e.add(C),e.add(M)}var y=new u.d(16777215,.7),k=new u.d(16777215,.7);y.position.set(8,8,8),k.position.set(-8,-8,-8),e.add(y),e.add(k),new w.a(r,n.domElement).update(),r.rotation.set(-.57,.74,.41),r.position.set(9.42,5.59,8.72),function t(){requestAnimationFrame(t),g.a.update(),n.render(e,r)}()}(t,n,o,a)}),[]);var h=function(){var t=function(t,e,n,i){for(var o=[],a=-.5*t;a<=.5*t;a+=t/(i-1))o.push(new u.s(a,.5*e,.5*n)),o.push(new u.s(a,-.5*e,.5*n)),o.push(new u.s(a,.5*e,-.5*n)),o.push(new u.s(a,-.5*e,-.5*n));for(var r=-.5*e;r<=.5*e;r+=e/(i-1))o.push(new u.s(.5*t,r,.5*n)),o.push(new u.s(-.5*t,r,.5*n)),o.push(new u.s(.5*t,r,-.5*n)),o.push(new u.s(-.5*t,r,-.5*n));for(var s=-.5*n;s<=.5*n;s+=n/(i-1))o.push(new u.s(.5*t,.5*e,s)),o.push(new u.s(-.5*t,.5*e,s)),o.push(new u.s(.5*t,-.5*e,s)),o.push(new u.s(-.5*t,-.5*e,s));return o}(5,5,5,5),e=[];return t.forEach((function(t){e.push(function(t,e){var n=p(t),i=new u.k({color:n,specular:n,shininess:10}),o=new u.o(.2,32,32),a=new u.j(o,i);return a.position.set(t.x,t.y,t.z),e.add(a),a}(t,n))})),{vectors:t,objects:e}},d=Object(i.useReducer)((function(t,e){switch(e.type){case"apply-matrix":var n=j.a.cloneDeep(t.vectors).map((function(t){return t.applyMatrix3(e.matrix)})),i=0;return n.forEach((function(e,n){var o=t.objects[n];Math.round(100*e.length())/100!==Math.round(100*o.position.length())/100&&(i+=1)})),i?n.forEach((function(e,n){var i=t.objects[n];b(e,i)})):n.forEach((function(n,i){var o=t.objects[i];!function(t,e){var n=Object(s.a)(t.elements,9),i=n[0],o=n[1],a=n[2],r=n[3],c=n[4],h=n[5],l=n[6],d=n[7],p=n[8],b=new u.i;b.set(i,r,l,1,o,c,d,1,a,h,p,1,0,0,0,1);var w=new u.e;w.setFromRotationMatrix(b,"ZYX");var x=j.a.cloneDeep(e.position),v={x:0,y:0,z:0},f={x:w.x,y:w.y,z:w.z};new g.a.Tween(v).to(f,1e3).easing(g.a.Easing.Quadratic.Out).onUpdate((function(){var t=new u.h,n=v.x,i=v.y,o=v.z;t.set(Math.cos(i)*Math.cos(o),-Math.cos(n)*Math.sin(o)+Math.sin(n)*Math.sin(i)*Math.cos(o),Math.sin(n)*Math.sin(o)+Math.cos(n)*Math.sin(i)*Math.cos(o),Math.cos(i)*Math.sin(o),Math.cos(n)*Math.cos(o)+Math.sin(n)*Math.sin(i)*Math.sin(o),-Math.sin(n)*Math.cos(o)+Math.cos(n)*Math.sin(i)*Math.sin(o),-Math.sin(i),Math.sin(n)*Math.cos(i),Math.cos(n)*Math.cos(i));var a=j.a.cloneDeep(x).applyMatrix3(t);e.position.set(a.x,a.y,a.z)})).start()}(e.matrix,o)})),{vectors:n,objects:t.objects};case"reset":var o=h().vectors;return o.forEach((function(e,n){return b(e,t.objects[n])})),{vectors:o,objects:t.objects};default:throw new Error}}),void 0,h),O=Object(s.a)(d,2),m=(O[0],O[1]),C=Object(i.useState)([1,2,3]),S=Object(s.a)(C,2),R=S[0],z=S[1],E=Object(i.useState)([4,5,6]),I=Object(s.a)(E,2),W=I[0],D=I[1],H=Object(i.useState)([7,8,9]),V=Object(s.a)(H,2),P=V[0],$=V[1],F=new c.a([R,W,P]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{ref:t}),Object(v.jsx)("div",{style:{marginBottom:6,marginTop:-265},children:Object(v.jsx)(y,{vectorsDispatch:m})}),Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(v.jsx)(f,{rows:[[R,z],[W,D],[P,$]]}),Object(v.jsx)("div",{style:{marginLeft:3,marginRight:3,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(v.jsx)(l.a,{children:"$$=$$"})}),Object(v.jsx)(M,{matrix:(new u.h).fromArray([].concat(Object(r.a)(F.leftSingularVectors.getRow(0)),Object(r.a)(F.leftSingularVectors.getRow(1)),Object(r.a)(F.leftSingularVectors.getRow(2)))),vectorsDispatch:m}),Object(v.jsx)(M,{matrix:(new u.h).fromArray([].concat(Object(r.a)(F.diagonalMatrix.getRow(0)),Object(r.a)(F.diagonalMatrix.getRow(1)),Object(r.a)(F.diagonalMatrix.getRow(2)))),vectorsDispatch:m}),Object(v.jsx)(M,{matrix:(new u.h).fromArray([].concat(Object(r.a)(F.rightSingularVectors.getRow(0)),Object(r.a)(F.rightSingularVectors.getRow(1)),Object(r.a)(F.rightSingularVectors.getRow(2)))),vectorsDispatch:m,transpose:!0})]})]}),Object(v.jsx)(k,{})]})};a.a.render(Object(v.jsx)(S,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.359630e5.chunk.js.map