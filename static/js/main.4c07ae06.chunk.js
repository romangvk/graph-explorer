(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,t,n){e.exports=n(80)},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},66:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(22),c=n.n(i),o=(n(61),n(3)),u=n(6),l=(n(62),n(63),n(2));var s=function(e){var t=e.nodes,n=e.links,i=e.onClickNode,c=e.nodeSize,o=e.linkWidth,u=e.linkDistance,s=e.visits,f=void 0===s?[]:s,d=e.path,m=void 0===d?[]:d,v=e.start,g=void 0===v?null:v,h=e.goal,p=void 0===h?null:h,b=Object(r.useRef)(null),y=Object(r.useRef)(null),E=function(e){var t=b.current.getBoundingClientRect();return Math.max(Math.min(t.width,e),0)},k=function(e){var t=b.current.getBoundingClientRect();return Math.max(Math.min(t.height,e),0)};return Object(r.useEffect)(function(){y.current=l.e().force("gravity",l.d()).force("links",l.c().strength(.05).id(function(e){return e.id})).force("centerX",l.f().strength(.005)).force("centerY",l.g().strength(.005)).alphaDecay(0);var e=l.h(b.current);y.current.on("tick",function(){e.selectAll("line").attr("x1",function(e){return E(e.source.x)}).attr("y1",function(e){return k(e.source.y)}).attr("x2",function(e){return E(e.target.x)}).attr("y2",function(e){return k(e.target.y)}),e.selectAll(".node").attr("transform",function(e){return"translate("+E(e.x)+","+k(e.y)+")"})});var t=function(){var e=b.current.getBoundingClientRect();y.current.force("centerX").x(e.width/2),y.current.force("centerY").y(e.height/2),y.current.alpha(1).restart()};window.addEventListener("resize",function(){t()}),t()},[]),Object(r.useEffect)(function(){var e=l.h(b.current),r=e.selectAll("line").data(n,function(e){return e.id});r.exit().transition().ease(l.b).style("opacity",0).duration(500).remove(),r.enter().insert("line",":first-child").attr("stroke-width",o||2).attr("marker-end","url(#arrow)").attr("id",function(e){return"link-".concat(null!=e.source.id?e.source.id:e.source,"-").concat(null!=e.target.id?e.target.id:e.target)});var a=e.selectAll(".node").data(t,function(e){return e.id});a.exit().transition().ease(l.b).style("opacity",0).duration(500).remove();var i=a.enter().append("g").attr("class","node").attr("id",function(e){return"node-".concat(e.id)}).call(l.a().on("start",function(e,t){e.active||y.current.alphaTarget(.3).restart(),t.fx=t.x,t.fy=t.y}).on("drag",function(e,t){t.fx=e.x,t.fy=e.y}).on("end",function(e,t){e.active||y.current.alphaTarget(0),t.fixed||(t.fx=null,t.fy=null)}));i.append("circle").attr("r",c||4),i.append("text").attr("dx","1em").attr("dy",".35em").merge(a.select("text")).text(function(e){return e.v}),y.current.nodes(t),y.current.force("links").links(n)},[t,n]),Object(r.useEffect)(function(){l.h(b.current).selectAll(".node").select("circle").attr("r",c||0)},[c]),Object(r.useEffect)(function(){l.h(b.current).selectAll("line").attr("stroke-width",o||0)},[o]),Object(r.useEffect)(function(){y.current.force("links").distance(u||0)},[u]),Object(r.useEffect)(function(){l.i("g").on("click",function(e,t){i(t)})},[i]),Object(r.useEffect)(function(){l.i(".visited").classed("visited",!1),f.forEach(function(e){l.h("#node-".concat(e)).classed("visited",!0)})},[f]),Object(r.useEffect)(function(){l.i(".path").classed("path",!1),l.i("line").attr("marker-end","url(#arrow)");var e=null;m.forEach(function(t){l.h("#node-".concat(t)).classed("path","true"),null!=e&&l.h("#link-".concat(e,"-").concat(t)).classed("path",!0).attr("marker-end","url(#path-arrow)"),e=t})},[m]),Object(r.useEffect)(function(){l.h(".start").classed("start",!1).select("#start").transition().ease(l.b).style("opacity",0).duration(500).remove(),null!=g&&l.h("#node-".concat(g)).classed("start",!0).append("text").attr("dx","-2em").attr("dy",".35em").style("transform","scale(0, 0)").transition().ease(l.b).style("transform","scale(1, 1)").duration(500).text("\ud83c\udfe0").attr("id","start")},[g]),Object(r.useEffect)(function(){l.h(".goal").classed("goal",!1).select("#goal").transition().ease(l.b).style("opacity",0).duration(500).remove(),null!=p&&l.h("#node-".concat(p)).classed("goal",!0).append("text").attr("dx","-2em").attr("dy",".35em").style("transform","scale(0, 0)").transition().ease(l.b).style("transform","scale(1, 1)").duration(500).text("\ud83c\udff3\ufe0f").attr("id","goal")},[p]),a.a.createElement("svg",{ref:b,width:"100%",height:"100%"},a.a.createElement("defs",null,a.a.createElement("marker",{id:"arrow",markerWidth:"4",markerHeight:"4",refX:"5",refY:"2",orient:"auto"},a.a.createElement("polygon",{points:"0 0, 4 2, 0 4"})),a.a.createElement("marker",{id:"path-arrow",markerWidth:"4",markerHeight:"4",refX:"5",refY:"2",orient:"auto"},a.a.createElement("polygon",{points:"0 0, 4 2, 0 4"}))))},f=(n(66),n(5));var d=function(e){var t=e.change,n=e.action,r=e.enterAction,i=e.value,c=e.icon,o=e.inputRef;return a.a.createElement("div",{className:"node"},a.a.createElement("input",{placeholder:"value",type:"text",ref:o,value:i,onKeyDown:function(e){"Enter"===e.key&&(r?r&&r():n&&n())},onChange:t&&function(e){return t(e.target.value)}}),a.a.createElement("div",{className:"action"},a.a.createElement(f.a,{icon:c,fixedWidth:!0,onClick:function(){return n&&n()}})))},m=(n(72),n(4));var v=function(e){var t=e.action,n=e.icon,i=e.nodes,c=Object(r.useRef)(),o=Object(r.useRef)();return a.a.createElement("div",{className:"link"},a.a.createElement("select",{ref:c,className:"link",defaultValue:"source"},a.a.createElement("option",{disabled:!0,hidden:!0},"source"),i&&i.map(function(e,t){return a.a.createElement("option",{key:t,value:e.id},e.v)})),a.a.createElement(f.a,{icon:m.a,fixedWidth:!0}),a.a.createElement("select",{ref:o,className:"link",defaultValue:"target"},a.a.createElement("option",{disabled:!0,hidden:!0},"target"),i&&i.map(function(e,t){return a.a.createElement("option",{key:t,value:e.id},e.v)})),a.a.createElement("div",{className:"action"},a.a.createElement(f.a,{icon:n,fixedWidth:!0,onClick:function(){return t&&t(parseInt(c.current.value,10),parseInt(o.current.value,10))}})))};n(73);var g=function(e){var t=e.source,n=e.target,i=e.icon,c=e.action,o=Object(r.useRef)(),u=Object(r.useRef)();return a.a.createElement("div",{className:"link"},a.a.createElement("div",{ref:o,className:"link-value"},t),a.a.createElement(f.a,{icon:m.a,fixedWidth:!0}),a.a.createElement("div",{ref:u,className:"link-value"},n),a.a.createElement("div",{className:"action"},a.a.createElement(f.a,{icon:i,fixedWidth:!0,onClick:function(){return c()}})))},h=n(7);n(74);var p=function(e){var t=e.name,n=e.action,i=e.args,c=e.nodes,o=Object(r.useState)(i.map(function(){return null})),l=Object(u.a)(o,2),s=l[0],d=l[1];return a.a.createElement("code",{className:"algorithm"},t,"\xa0",i.map(function(e,t){return a.a.createElement("select",{defaultValue:e,key:t,onChange:function(e){d(function(n){var r=Object(h.a)(n);return r[t]=e.target.value,r})}},a.a.createElement("option",{disabled:!0,hidden:!0},e),c&&c.map(function(e,t){return a.a.createElement("option",{key:t,value:e.id},e.v)}))}),a.a.createElement("div",{className:"action"},a.a.createElement(f.a,{icon:m.a,fixedWidth:!0,onClick:function(){return n&&n.apply(void 0,Object(h.a)(s.map(function(e){return parseInt(e,10)})))}})))};function b(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){o=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(o)throw i}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e){for(var t=e.id,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var i=r.map(function(e){return{v:e,id:t++}});return Object(o.a)({},e,{nodes:[].concat(Object(h.a)(e.nodes),Object(h.a)(i)),id:t,n:e.n+i.length})}function k(e,t){return e.nodes.find(function(e){return e.id===t})}function j(e,t){var n,r=b(Object(h.a)(e.nodes));try{for(r.s();!(n=r.n()).done;){if(t===n.value.v)return!0}}catch(a){r.e(a)}finally{r.f()}return!1}function O(e){var t,n=arguments,r={},a=b(e.nodes);try{for(a.s();!(t=a.n()).done;){var i=t.value;r[i.id]=!0}}catch(s){a.e(s)}finally{a.f()}for(var c=[],u=function(t){var a=t-1+1<1||n.length<=t-1+1?void 0:n[t-1+1],i=t+1<1||n.length<=t+1?void 0:n[t+1];r[a]&&r[i]&&e.links.reduce(function(e,t){return e&&!(t.source.id===a&&t.target.id===i)&&!(t.source===a&&t.target===i)},!0)&&c.push({source:a,target:i})},l=1;l<(arguments.length<=1?0:arguments.length-1);l+=2)u(l);return Object(o.a)({},e,{links:[].concat(Object(h.a)(e.links),c)})}n(75);var x=n(30),w=n.n(x);var S=function(e){var t=e.title,n=e.children,i=e.top,c=e.left,o=e.bottom,l=e.right,s=e.disabled,d=Object(r.useState)(!0),v=Object(u.a)(d,2),g=v[0],h=v[1];return a.a.createElement(w.a,{handle:".floating-panel-title"},a.a.createElement("div",{className:"floating-panel ".concat(g?"floating-panel-max":"floating-panel-min"),style:{top:i,left:c,bottom:o,right:l}},a.a.createElement("div",{className:"floating-panel-title"},a.a.createElement("b",null,t),a.a.createElement("div",{className:"action"},a.a.createElement(f.a,{icon:g?m.b:m.c,fixedWidth:!0,onClick:function(){h(!g)}}))),g?a.a.createElement("div",{className:"floating-panel-content",disabled:s||!1},n):null))};function A(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){o=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(o)throw i}}}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I(e){var t={};return e.nodes.forEach(function(e){t[e.id]=[]}),e.links.forEach(function(e){var n=null!=e.source.id?e.source.id:e.source,r=null!=e.target.id?e.target.id:e.target;t[n].push(r)}),t}var R=O(E({nodes:[],links:[],id:0,n:0},0,1,2,3,4,5,6,7,8),0,1,0,2,2,4,2,6,1,3,1,5,3,7,4,8);var C=function(){var e=Object(r.useState)(R),t=Object(u.a)(e,2),n=t[0],i=t[1],c=function(e){i(function(t){return function(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];for(var i=0,c=r;i<c.length;i++){var u=c[i];t[u]=!0}var l=e.nodes.filter(function(e){return!t[e.id]}),s=e.links.filter(function(e){return!t[e.source.id]&&!t[e.target.id]&&!t[e.source]&&!t[e.target]});return Object(o.a)({},e,{nodes:l,links:s,n:l.length})}(t,e)})},l=function(e,t){j(n,t)?i(function(e){return Object(o.a)({},e)}):i(function(n){return function(e,t,n){var r,a=Object(h.a)(e.nodes),i=0,c=b(a);try{for(c.s();!(r=c.n()).done;){var u=r.value;if(u.id===t){i=u.index;break}}}catch(l){c.e(l)}finally{c.f()}return a[i].v=n,Object(o.a)({},e,{nodes:a})}(n,e,t)})},f=function(e,t){i(function(n){return function(e){for(var t={},n=1;n<(arguments.length<=1?0:arguments.length-1);n+=2){var r=n-1+1<1||arguments.length<=n-1+1?void 0:arguments[n-1+1],a=n+1<1||arguments.length<=n+1?void 0:arguments[n+1];t[r]||(t[r]={}),t[r][a]=!0}var i=e.links.filter(function(e){return!(t[e.source.id]&&t[e.source.id][e.target.id])&&!(t[e.source]&&t[e.source][e.target])});return Object(o.a)({},e,{links:i})}(n,e,t)})},y=Object(r.useRef)({}),x=Object(r.useRef)(),w=Object(r.useState)({nodeSize:4,linkWidth:2,linkDistance:1,iterationSpeed:500}),N=Object(u.a)(w,2),C=N[0],W=N[1],F=function(){X({visits:[],path:[],start:null,goal:null})},q=Object(r.useState)(!1),M=Object(u.a)(q,2),D=M[0],z=M[1],T=Object(r.useState)({visits:[],path:[],start:null,goal:null}),B=Object(u.a)(T,2),V=B[0],X=B[1],Y=Object(r.useRef)(),L=Object(r.useRef)(),H=Object(r.useRef)(),J=Object(r.useRef)(),P=function(e){z(!0);var t=performance.now(),n=e.start;Y.current=function(e){e-t>2e3-C.iterationSpeed?(t=e,X(function(e){return Object(o.a)({},e,{start:n})}),requestAnimationFrame(L.current)):requestAnimationFrame(Y.current)};var r=e.goal;L.current=function(e){e-t>2e3-C.iterationSpeed?(t=e,X(function(e){return Object(o.a)({},e,{goal:r})}),requestAnimationFrame(H.current)):requestAnimationFrame(L.current)};var a=[],i=0;H.current=function(n){console.log(C.iterationSpeed),n-t>2e3-C.iterationSpeed?(t=n,i<e.visits.length?(a.push(e.visits[i++]),X(function(e){return Object(o.a)({},e,{visits:[].concat(a)})}),requestAnimationFrame(H.current)):requestAnimationFrame(J.current)):requestAnimationFrame(H.current)};var c=[],u=0;J.current=function(n){n-t>(2e3-C.iterationSpeed)/2?(t=n,u<e.path.length?(c.push(e.path[u++]),X(function(e){return Object(o.a)({},e,{path:[].concat(c)})}),requestAnimationFrame(J.current)):z(!1)):requestAnimationFrame(J.current)},requestAnimationFrame(Y.current)};return a.a.createElement("div",{className:"App"},a.a.createElement(S,{title:"Nodes",top:"1em",left:"1em",disabled:D},a.a.createElement(d,{inputRef:x,action:function(){F(),function(){var e=x.current.value;""===e||j(n,e)?console.log("Must be a new value"):(i(function(t){return E(t,e)}),x.current.value=""),x.current.focus()}()},icon:m.c}),a.a.createElement("hr",null),a.a.createElement("div",{className:"list"},n.nodes.map(function(e,t){return a.a.createElement(d,{key:t,value:e.v,inputRef:function(t){return y.current[e.id]=t},change:function(t){F(),l(e.id,t)},action:function(){F(),c(e.id)},enterAction:function(){t+1<n.nodes.length?(y.current[n.nodes[t+1].id].focus(),y.current[n.nodes[t+1].id].select(),y.current[n.nodes[t+1].id].scrollIntoView()):y.current[e.id].blur()},icon:m.d})}))),a.a.createElement(S,{title:"Edges",bottom:"1em",left:"1em",disabled:D},a.a.createElement(v,{nodes:n.nodes,icon:m.c,action:function(e,t){F(),function(e,t){i(function(n){return O(n,e,t)})}(e,t)}}),a.a.createElement("hr",null),a.a.createElement("div",{className:"list"},n.links.map(function(e,t){var r=null!=e.source.id?e.source.id:e.source,i=null!=e.target.id?e.target.id:e.target,c=null!=e.source.v?e.source.v:k(n,r).v,o=null!=e.target.v?e.target.v:k(n,i).v;return a.a.createElement(g,{key:t,source:c,target:o,action:function(){F(),f(r,i)},icon:m.d})}))),a.a.createElement(S,{title:"Options",bottom:"1em",right:"1em"},a.a.createElement("b",null,"Node size"),a.a.createElement("input",{type:"range",min:"0",max:"20",step:".01",value:C.nodeSize,onInput:function(e){W(Object(o.a)({},C,{nodeSize:e.target.value}))}}),a.a.createElement("b",null,"Edge width"),a.a.createElement("input",{type:"range",min:"0",max:"10",step:".005",value:C.linkWidth,onInput:function(e){W(Object(o.a)({},C,{linkWidth:e.target.value}))}}),a.a.createElement("b",null,"Edge distance"),a.a.createElement("input",{type:"range",min:"0",max:"1000",step:"1",value:C.linkDistance,onInput:function(e){W(Object(o.a)({},C,{linkDistance:e.target.value}))}}),a.a.createElement("b",null,"Iteration Speed"),a.a.createElement("input",{type:"range",min:"0",max:"2000",step:"2",value:C.iterationSpeed,onInput:function(e){W(Object(o.a)({},C,{iterationSpeed:e.target.value})),console.log(C.iterationSpeed)}})),a.a.createElement(S,{title:"Algorithms",top:"1em",right:"1em",disabled:D},a.a.createElement("div",{className:"list"},a.a.createElement(p,{name:"bfs",args:["start","goal"],nodes:n.nodes,action:function(e,t){isNaN(e)||isNaN(t)||(F(),P(function(e,t,n){var r=new Map;r.set(e,null);for(var a=[e],i=[],c=[];a.length;){var o=a.shift();if(i.push(o),o===t){c.push(t);break}var u,l=A(n[o]);try{for(l.s();!(u=l.n()).done;){var s=u.value;r.has(s)||(r.set(s,o),a.push(s))}}catch(f){l.e(f)}finally{l.f()}}if(c.length)for(;null!=r.get(c[0]);)c.unshift(r.get(c[0]));return{visits:i,path:c,start:e,goal:t}}(e,t,I(n))))}}),a.a.createElement(p,{name:"dfs",args:["start","goal"],nodes:n.nodes,action:function(e,t){isNaN(e)||isNaN(t)||(F(),P(function(e,t,n){var r=new Map;r.set(e,null);for(var a=[e],i=[],c=[];a.length;){var o=a.pop();if(o===t){c.push(t);break}i.push(o);var u,l=A(n[o]);try{for(l.s();!(u=l.n()).done;){var s=u.value;r.has(s)||(r.set(s,o),a.push(s))}}catch(f){l.e(f)}finally{l.f()}}if(c.length)for(;null!=r.get(c[0]);)c.unshift(r.get(c[0]));return{visits:i,path:c,start:e,goal:t}}(e,t,I(n))))}}),a.a.createElement(p,{name:"uniformcost",args:["start","goal"],nodes:n.nodes}),a.a.createElement(p,{name:"greedy",args:["start","goal"],nodes:n.nodes}),a.a.createElement(p,{name:"astar",args:["start","goal"],nodes:n.nodes}))),a.a.createElement(s,{nodes:n.nodes,links:n.links,nodeSize:C.nodeSize,linkWidth:C.linkWidth,linkDistance:C.linkDistance,onClickNode:function(e){F(),y.current[e.id]&&(y.current[e.id].focus(),y.current[e.id].select(),y.current[e.id].scrollIntoView()),e.fixed=!e.fixed,e.fixed?(e.fx=e.x,e.fy=e.y):(e.fx=null,e.fy=null)},visits:V.visits,path:V.path,start:V.start,goal:V.goal}))},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)})};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(C,null)),document.getElementById("root")),W()}},[[56,1,2]]]);
//# sourceMappingURL=main.4c07ae06.chunk.js.map