(this["webpackJsonpsvd-visualisation"]=this["webpackJsonpsvd-visualisation"]||[]).push([[0],{43:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var r=n(37),i=n.n(r),c=(n(43),n(44),n(15)),o=n(54),s=n(12),a=n(8),l=n(31),j=n.n(l),u=n(5),h=n(24),x=n.n(h),d=function(t,e,n,r){for(var i=[],c=-.5*t;c<=.5*t;c+=t/(r-1))i.push(new u.Vector3(c,.5*e,.5*n)),i.push(new u.Vector3(c,-.5*e,.5*n)),i.push(new u.Vector3(c,.5*e,-.5*n)),i.push(new u.Vector3(c,-.5*e,-.5*n));for(var o=-.5*e;o<=.5*e;o+=e/(r-1))i.push(new u.Vector3(.5*t,o,.5*n)),i.push(new u.Vector3(-.5*t,o,.5*n)),i.push(new u.Vector3(.5*t,o,-.5*n)),i.push(new u.Vector3(-.5*t,o,-.5*n));for(var s=-.5*n;s<=.5*n;s+=n/(r-1))i.push(new u.Vector3(.5*t,.5*e,s)),i.push(new u.Vector3(-.5*t,.5*e,s)),i.push(new u.Vector3(.5*t,-.5*e,s)),i.push(new u.Vector3(-.5*t,-.5*e,s));return i}(10,10,10,5),b=j()((function(t,e){return{matrix:(new u.Matrix3).set(0,1,1,1.41,2,0,0,1,1),setMatrixIndex:function(n,r){var i=e().matrix.elements,c=new u.Matrix3;0===n?c.set(r,i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8]):1===n?c.set(i[0],r,i[2],i[3],i[4],i[5],i[6],i[7],i[8]):2===n?c.set(i[0],i[1],r,i[3],i[4],i[5],i[6],i[7],i[8]):3===n?c.set(i[0],i[1],i[2],r,i[4],i[5],i[6],i[7],i[8]):4===n?c.set(i[0],i[1],i[2],i[3],r,i[5],i[6],i[7],i[8]):5===n?c.set(i[0],i[1],i[2],i[3],i[4],r,i[6],i[7],i[8]):6===n?c.set(i[0],i[1],i[2],i[3],i[4],i[5],r,i[7],i[8]):7===n?c.set(i[0],i[1],i[2],i[3],i[4],i[5],i[6],r,i[8]):8===n&&c.set(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],r),t({matrix:c})},resetMatrix:function(){return t({vectors:d,lastMatrix:(new u.Matrix3).identity()})},applyMatrix:function(n){var r=e().vectors,i=x.a.cloneDeep(r).map((function(t){return t.applyMatrix3(n)}));t({vectors:i,lastMatrix:n})},lastMatrix:(new u.Matrix3).identity(),vectors:d}})),p=n(11),f=n(16),O=n(19),v=n(7),g=["vector","appliedMatrix"],m=function(t){var e=t.vector,n=t.appliedMatrix,r=Object(f.a)(t,g),i=Object(a.useRef)(),c=Object(a.useState)(""),o=Object(s.a)(c,2),l=o[0],j=o[1];return Object(a.useEffect)((function(){var t=y(e);j(t)}),[]),Object(a.useEffect)((function(){if(i.current){var t=n.elements;t[1]+t[2]+t[3]+t[5]+t[6]+t[7]===0&&t[0]+t[4]+t[8]!==0?w(e,i.current):M(n,i.current)}}),[i,e,n]),Object(v.jsxs)("mesh",Object(p.a)(Object(p.a)({position:e},r),{},{ref:i,children:[Object(v.jsx)("sphereGeometry",{args:[.3,32,32]}),Object(v.jsx)("meshMatcapMaterial",{color:l})]}))},M=function(t,e){var n=Object(s.a)(t.elements,9),r=n[0],i=n[1],c=n[2],o=n[3],a=n[4],l=n[5],j=n[6],h=n[7],d=n[8],b=new u.Matrix4;b.set(r,o,j,1,i,a,h,1,c,l,d,1,0,0,0,1);var p=new u.Euler;p.setFromRotationMatrix(b,"ZYX");var f=x.a.cloneDeep(e.position),v={x:0,y:0,z:0},g={x:p.x,y:p.y,z:p.z};new O.b(v).to(g,1e3).easing(O.a.Quadratic.Out).onUpdate((function(){var t=new u.Matrix3,n=v.x,r=v.y,i=v.z;t.set(Math.cos(r)*Math.cos(i),-Math.cos(n)*Math.sin(i)+Math.sin(n)*Math.sin(r)*Math.cos(i),Math.sin(n)*Math.sin(i)+Math.cos(n)*Math.sin(r)*Math.cos(i),Math.cos(r)*Math.sin(i),Math.cos(n)*Math.cos(i)+Math.sin(n)*Math.sin(r)*Math.sin(i),-Math.sin(n)*Math.cos(i)+Math.cos(n)*Math.sin(r)*Math.sin(i),-Math.sin(r),Math.sin(n)*Math.cos(r),Math.cos(n)*Math.cos(r));var c=x.a.cloneDeep(f).applyMatrix3(t);e.position.set(c.x,c.y,c.z)})).start()},w=function(t,e){var n=e.position;new O.b(n).to(t).easing(O.a.Quadratic.Out).onUpdate((function(){e.position.set(n.x,n.y,n.z)})).start()},y=function(t){var e=Math.floor((t.x+12)/17*255),n=Math.floor((t.y+12)/17*255),r=Math.floor((t.z+12)/17*255);return"rgb(".concat(e,", ").concat(n,", ").concat(r,")")},C=function(){var t=b((function(t){return{vectors:t.vectors,matrix:t.lastMatrix}})),e=t.vectors,n=t.matrix,r=Object(a.useState)([]),i=Object(s.a)(r,2),c=i[0],o=i[1];return Object(a.useEffect)((function(){o(e)}),[e]),Object(v.jsx)(v.Fragment,{children:e.map((function(t,e){return Object(v.jsx)(m,{vector:t,appliedMatrix:n,position:c[e]},e)}))})},k=Object(a.memo)((function(){var t=Object(c.c)(),e=t.gl,n=t.scene,r=t.camera,i=Object(a.useCallback)((function(){e.render(n,r)}),[e,n,r]),o=Object(a.useCallback)((function(){requestAnimationFrame(o),O.c(),i()}),[i]);return o(),Object(v.jsx)(v.Fragment,{})})),S=function(){return Object(v.jsxs)(c.a,{dpr:window.devicePixelRatio,style:{height:window.innerHeight,width:window.innerWidth},camera:{isPerspectiveCamera:!0,near:.1,far:1e3,fov:75,rotation:[-.57,.74,.41],position:[9.42,5.59,8.72]},children:[Object(v.jsx)("ambientLight",{}),Object(v.jsx)("gridHelper",{args:[100,100,"white","rgb(40, 40, 40)"]}),Object(v.jsx)(C,{}),Object(v.jsx)(k,{}),Object(v.jsx)(o.a,{})]})},V=n(53),F=n(33),z=function(){return Object(v.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gridGap:"0.5rem",zIndex:1},children:[Object(v.jsx)(A,{index:0}),Object(v.jsx)(A,{index:1}),Object(v.jsx)(A,{index:2}),Object(v.jsx)(A,{index:3}),Object(v.jsx)(A,{index:4}),Object(v.jsx)(A,{index:5}),Object(v.jsx)(A,{index:6}),Object(v.jsx)(A,{index:7}),Object(v.jsx)(A,{index:8})]})},A=function(t){var e=t.index,n=b((function(t){return[t.matrix,t.setMatrixIndex]})),r=Object(s.a)(n,2),i=r[0],c=r[1],o=Object(a.useState)(i.elements[e].toString()),l=Object(s.a)(o,2),j=l[0],u=l[1],h=Object(a.useCallback)((function(t){var n=t.currentTarget.value;isNaN(parseFloat(n))||""===n||c(e,parseFloat(n)),u(n)}),[e,c]);return Object(v.jsx)("input",{type:"number",style:{width:"4ch",textAlign:"center",fontFamily:"Katex",color:"lightgreen",backgroundColor:"transparent",fontSize:16,border:"none",outline:"none",margin:"0px auto"},value:j,onChange:h})},$=function(t){var e=t.matrix,n=t.transpose,r=b((function(t){return t.applyMatrix})),i=Object(a.useState)(""),c=Object(s.a)(i,2),o=c[0],l=c[1];return Object(a.useEffect)((function(){var t="$$\\begin{bmatrix}";e.elements.forEach((function(e,n){t+=(n+1)%3===0&&n+1!==9?"".concat(e.toFixed(2)," \\\\"):8===n?e.toFixed(2):"".concat(e.toFixed(2)," &")})),l(t+=n?"\\end{bmatrix}^\\top$$":"\\end{bmatrix}$$")}),[e,n]),Object(v.jsx)("button",{style:{marginTop:n?-4:0,fontSize:14,display:"flex",alignItems:"center"},onClick:function(){if(n){var t=e.clone();t.transpose(),r(t)}else r(e)},children:Object(v.jsx)(F.a,{children:o})})},D=function(t){var e=t.color,n=void 0===e?"white":e;return Object(v.jsxs)("svg",{version:"1.1",viewBox:"0 0 24 24",width:32,height:32,xmlns:"http://www.w3.org/2000/svg",children:[Object(v.jsxs)("g",{stroke:n,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",children:[Object(v.jsx)("path",{d:"M19.488,4.639v3.536h-3.535h3.535"}),Object(v.jsx)("path",{d:"M19.027,8.175c-1.357,-2.487 -3.995,-4.175 -7.027,-4.175c-4.418,0 -8,3.582 -8,8c0,4.418 3.582,8 8,8c4.418,0 8,-3.582 8,-8"})]}),Object(v.jsx)("path",{fill:"none",d:"M0,0h24v24h-24Z"})]})},I=function(){var t=b((function(t){return t.resetMatrix})),e=Object(a.useCallback)((function(){t()}),[t]);return Object(v.jsx)("button",{onClick:e,children:Object(v.jsx)(D,{})})},L=function(){var t=b((function(t){return t.matrix})).transpose().elements,e=new V.a([[t[0],t[1],t[2]],[t[3],t[4],t[5]],[t[6],t[7],t[8]]]),n=(new u.Matrix3).fromArray(e.leftSingularVectors.to1DArray()),r=(new u.Matrix3).fromArray(e.diagonalMatrix.to1DArray()),i=(new u.Matrix3).fromArray(e.rightSingularVectors.to1DArray());return Object(v.jsx)("div",{style:{position:"absolute",bottom:0,display:"flex",justifyContent:"center",width:"100%",marginBottom:16},children:Object(v.jsxs)("div",{style:{backgroundColor:"black",borderColor:"gray",borderWidth:2,borderRadius:16,borderStyle:"solid",padding:16},children:[Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(v.jsx)(I,{})}),Object(v.jsxs)("div",{style:{alignItems:"center",display:"flex"},children:[Object(v.jsx)(z,{}),Object(v.jsx)(F.a,{children:"$$=$$"}),Object(v.jsx)($,{matrix:n}),Object(v.jsx)($,{matrix:r}),Object(v.jsx)($,{matrix:i,transpose:!0})]})]})})},R=function(t){var e=t.color,n=void 0===e?"white":e;return Object(v.jsx)("svg",{version:"1.1",viewBox:"0 0 24 24",width:32,height:32,xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsxs)("g",{fill:"none",children:[Object(v.jsx)("path",{d:"M0,0h24v24h-24v-24Z"}),Object(v.jsx)("path",{stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M7.496,21h1.504v-1.036c0,0 -0.017,-1.621 0.874,-2.991c-2.031,-0.142 -3.643,-1.954 -3.643,-4.191c0,-0.785 0.298,-1.517 0.809,-2.147l0.052,-1.933c0.013,-0.491 0.504,-0.826 0.966,-0.659l2.075,0.75c0.586,-0.146 1.213,-0.229 1.867,-0.229c0.654,0 1.281,0.083 1.867,0.23l2.075,-0.75c0.462,-0.167 0.953,0.168 0.966,0.659l0.052,1.932c0.51,0.63 0.809,1.362 0.809,2.147c0,2.237 -1.612,4.049 -3.643,4.191c0.891,1.37 0.874,2.991 0.874,2.991v1.036h1.504c2.483,0 4.496,-2.013 4.496,-4.495v-9.009c0,-2.483 -2.013,-4.496 -4.496,-4.496h-9.004c-2.485,0 -4.5,2.015 -4.5,4.5v9.004c0,2.483 2.013,4.496 4.496,4.496"})]})})},E=function(t){var e=t.color,n=void 0===e?"white":e;return Object(v.jsx)("svg",{width:32,height:32,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z",fill:n,fillRule:"evenodd",clipRule:"evenodd"})})},W=function(){var t=Object(a.useState)(!1),e=Object(s.a)(t,2),n=e[0],r=e[1],i=Object(a.useCallback)((function(){r(!0),console.log(1)}),[]),c=Object(a.useCallback)((function(){r(!1)}),[]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("a",{href:"https://github.com/cristianpjensen/svd-visualisation",target:"_blank",rel:"noreferrer",style:{position:"absolute",top:16,left:16},children:Object(v.jsx)(R,{})}),Object(v.jsx)("button",{style:{position:"absolute",top:16,right:16},onClick:i,children:Object(v.jsx)(E,{})}),n&&Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{style:{position:"absolute",top:0,left:0,display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(255, 255, 255, 0.1)"},onClick:c,children:Object(v.jsxs)("div",{style:{backgroundColor:"black",zIndex:2,maxWidth:500,width:"100%",maxHeight:500,borderRadius:16,borderColor:"grey",borderStyle:"solid",borderWidth:2,padding:32,boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"},children:[Object(v.jsx)("h2",{style:{textAlign:"center"},children:"Singular Value Decomposition"}),Object(v.jsxs)("div",{style:{textAlign:"justify",fontSize:20},children:[Object(v.jsx)("p",{children:"You can change the matrix input by clicking on the green matrix values and changing them like any other input. The components of the SVD will adjust dynamically to your input. When you have put in your desired matrix, you can click on the matrices one-by-one to apply them to the cube of vectors (visualised as colourful spheres)."}),Object(v.jsx)("p",{children:"Click on the refresh arrow to reset the vectors to their original positions."})]})]})})})]})},Z=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(S,{}),Object(v.jsx)(L,{}),Object(v.jsx)(W,{})]})};i.a.render(Object(v.jsx)(Z,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.54b49aa6.chunk.js.map