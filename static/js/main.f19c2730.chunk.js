(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,t,n){e.exports=n(80)},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},66:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(22),c=n.n(i),o=(n(61),n(5)),l=n(6),u=(n(62),n(63),n(2));var s=function(e){var t=e.nodes,n=e.links,i=e.onClickNode,c=e.nodeSize,o=e.linkWidth,l=e.linkDistance,s=e.expands,f=void 0===s?[]:s,d=e.path,m=void 0===d?[]:d,v=Object(r.useRef)(null),h=Object(r.useRef)(null),p=function(e){var t=v.current.getBoundingClientRect();return Math.max(Math.min(t.width,e),0)},g=function(e){var t=v.current.getBoundingClientRect();return Math.max(Math.min(t.height,e),0)};return Object(r.useEffect)(function(){h.current=u.e().force("gravity",u.d()).force("links",u.c().strength(.05).id(function(e){return e.id})).force("centerX",u.f().strength(.005)).force("centerY",u.g().strength(.005)).alphaDecay(0);var e=u.h(v.current);h.current.on("tick",function(){e.selectAll("line").attr("x1",function(e){return p(e.source.x)}).attr("y1",function(e){return g(e.source.y)}).attr("x2",function(e){return p(e.target.x)}).attr("y2",function(e){return g(e.target.y)}),e.selectAll(".node").attr("transform",function(e){return"translate("+p(e.x)+","+g(e.y)+")"})});var t=function(){var e=v.current.getBoundingClientRect();h.current.force("centerX").x(e.width/2),h.current.force("centerY").y(e.height/2),h.current.alpha(1).restart()};window.addEventListener("resize",function(){t()}),t()},[]),Object(r.useEffect)(function(){var e=u.h(v.current),r=e.selectAll("line").data(n,function(e){return e.id});r.exit().transition().ease(u.b).style("opacity",0).duration(500).remove(),r.enter().insert("line",":first-child").attr("stroke-width",o||2).attr("marker-end","url(#arrow)").attr("id",function(e){return"link-".concat(e.source,"-").concat(e.target)});var a=e.selectAll(".node").data(t,function(e){return e.id});a.exit().transition().ease(u.b).style("opacity",0).duration(500).remove();var i=a.enter().append("g").attr("class","node").attr("id",function(e){return"node-".concat(e.id)}).call(u.a().on("start",function(e,t){e.active||h.current.alphaTarget(.3).restart(),t.fx=t.x,t.fy=t.y}).on("drag",function(e,t){t.fx=e.x,t.fy=e.y}).on("end",function(e,t){e.active||h.current.alphaTarget(0),t.fixed||(t.fx=null,t.fy=null)}));i.append("circle").attr("r",c||4),i.append("text").attr("dx","1em").attr("dy",".35em").merge(a.select("text")).text(function(e){return e.v}),h.current.nodes(t),h.current.force("links").links(n)},[t,n]),Object(r.useEffect)(function(){u.h(v.current).selectAll(".node").select("circle").attr("r",c||4)},[c]),Object(r.useEffect)(function(){u.h(v.current).selectAll("line").attr("stroke-width",o||2)},[o]),Object(r.useEffect)(function(){h.current.force("links").distance(l||1)},[l]),Object(r.useEffect)(function(){u.i("g").on("click",function(e,t){i(t)})},[i]),Object(r.useEffect)(function(){u.i(".expanded").attr("r",c).attr("class",""),f.forEach(function(e){u.h("#node-".concat(e)).select("circle").attr("class","expanded")})},[f]),Object(r.useEffect)(function(){u.i(".path").attr("class",""),u.i("line").attr("marker-end","url(#arrow)");var e=null;m.forEach(function(t){u.h("#node-".concat(t)).select("circle").attr("class","path"),null!=e&&u.h("#link-".concat(e,"-").concat(t)).attr("class","path").attr("marker-end","url(#path-arrow)"),e=t})},[m]),a.a.createElement("svg",{ref:v,width:"100%",height:"100%"},a.a.createElement("defs",null,a.a.createElement("marker",{id:"arrow",markerWidth:"4",markerHeight:"4",refX:"5",refY:"2",orient:"auto"},a.a.createElement("polygon",{points:"0 0, 4 2, 0 4"})),a.a.createElement("marker",{id:"path-arrow",markerWidth:"4",markerHeight:"4",refX:"5",refY:"2",orient:"auto"},a.a.createElement("polygon",{points:"0 0, 4 2, 0 4"}))))},f=(n(66),n(4));var d=function(e){var t=e.change,n=e.action,r=e.enterAction,i=e.value,c=e.icon,o=e.inputRef;return a.a.createElement("div",{className:"node"},a.a.createElement("input",{placeholder:"value",type:"text",ref:o,value:i,onKeyDown:function(e){"Enter"===e.key&&(r?r&&r():n&&n())},onChange:t&&function(e){return t(e.target.value)}}),a.a.createElement("div",{className:"action"},a.a.createElement(f.a,{icon:c,fixedWidth:!0,onClick:function(){return n&&n()}})))},m=(n(72),n(3));var v=function(e){var t=e.action,n=e.icon,i=e.nodes,c=Object(r.useRef)(),o=Object(r.useRef)();return a.a.createElement("div",{className:"link"},a.a.createElement("select",{ref:c,className:"link",defaultValue:"source"},a.a.createElement("option",{disabled:!0,hidden:!0},"source"),i&&i.map(function(e,t){return a.a.createElement("option",{key:t,value:e.id},e.v)})),a.a.createElement(f.a,{icon:m.a,fixedWidth:!0}),a.a.createElement("select",{ref:o,className:"link",defaultValue:"target"},a.a.createElement("option",{disabled:!0,hidden:!0},"target"),i&&i.map(function(e,t){return a.a.createElement("option",{key:t,value:e.id},e.v)})),a.a.createElement("div",{className:"action"},a.a.createElement(f.a,{icon:n,fixedWidth:!0,onClick:function(){return t&&t(parseInt(c.current.value,10),parseInt(o.current.value,10))}})))};n(73);var h=function(e){var t=e.source,n=e.target,i=e.icon,c=e.action,o=Object(r.useRef)(),l=Object(r.useRef)();return a.a.createElement("div",{className:"link"},a.a.createElement("div",{ref:o,className:"link-value"},t),a.a.createElement(f.a,{icon:m.a,fixedWidth:!0}),a.a.createElement("div",{ref:l,className:"link-value"},n),a.a.createElement("div",{className:"action"},a.a.createElement(f.a,{icon:i,fixedWidth:!0,onClick:function(){return c()}})))},p=n(7);n(74);var g=function(e){var t=e.name,n=e.action,i=e.args,c=e.nodes,o=Object(r.useState)(i.map(function(){return null})),u=Object(l.a)(o,2),s=u[0],d=u[1];return a.a.createElement("code",{className:"algorithm"},t,"\xa0",i.map(function(e,t){return a.a.createElement("select",{defaultValue:e,key:t,onChange:function(e){d(function(n){var r=Object(p.a)(n);return r[t]=e.target.value,r})}},a.a.createElement("option",{disabled:!0,hidden:!0},e),c&&c.map(function(e,t){return a.a.createElement("option",{key:t,value:e.id},e.v)}))}),a.a.createElement("div",{className:"action"},a.a.createElement(f.a,{icon:m.a,fixedWidth:!0,onClick:function(){return n&&n.apply(void 0,Object(p.a)(s.map(function(e){return parseInt(e,10)})))}})))};function b(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){o=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(o)throw i}}}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e){for(var t=e.id,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var i=r.map(function(e){return{v:e,id:t++}});return Object(o.a)({},e,{nodes:[].concat(Object(p.a)(e.nodes),Object(p.a)(i)),id:t,n:e.n+i.length})}function k(e,t){return e.nodes.find(function(e){return e.id===t})}function x(e,t){var n,r=b(Object(p.a)(e.nodes));try{for(r.s();!(n=r.n()).done;){if(t===n.value.v)return!0}}catch(a){r.e(a)}finally{r.f()}return!1}function j(e){var t,n=arguments,r={},a=b(e.nodes);try{for(a.s();!(t=a.n()).done;){var i=t.value;r[i.id]=!0}}catch(s){a.e(s)}finally{a.f()}for(var c=[],l=function(t){var a=t-1+1<1||n.length<=t-1+1?void 0:n[t-1+1],i=t+1<1||n.length<=t+1?void 0:n[t+1];r[a]&&r[i]&&e.links.reduce(function(e,t){return e&&!(t.source.id===a&&t.target.id===i)&&!(t.source===a&&t.target===i)},!0)&&c.push({source:a,target:i})},u=1;u<(arguments.length<=1?0:arguments.length-1);u+=2)l(u);return Object(o.a)({},e,{links:[].concat(Object(p.a)(e.links),c)})}n(75);var O=n(30),w=n.n(O);var N=function(e){var t=e.title,n=e.children,i=e.top,c=e.left,o=e.bottom,u=e.right,s=e.disabled,d=Object(r.useState)(!0),v=Object(l.a)(d,2),h=v[0],p=v[1];return a.a.createElement(w.a,{handle:".floating-panel-title"},a.a.createElement("div",{className:"floating-panel ".concat(h?"floating-panel-max":"floating-panel-min"),style:{top:i,left:c,bottom:o,right:u}},a.a.createElement("div",{className:"floating-panel-title"},a.a.createElement("b",null,t),a.a.createElement("div",{className:"action"},a.a.createElement(f.a,{icon:h?m.b:m.c,fixedWidth:!0,onClick:function(){p(!h)}}))),h?a.a.createElement("div",{className:"floating-panel-content",disabled:s||!1},n):null))};function S(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){o=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(o)throw i}}}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I(e){var t={};return e.nodes.forEach(function(e){t[e.id]=[]}),e.links.forEach(function(e){var n=null!=e.source.id?e.source.id:e.source,r=null!=e.target.id?e.target.id:e.target;t[n].push(r)}),t}var C=j(y({nodes:[],links:[],id:0,n:0},0,1,2,3,4,5,6,7,8),0,1,0,2,2,4,2,6,1,3,1,5,3,7,4,8);var W=function(){var e=Object(r.useState)(C),t=Object(l.a)(e,2),n=t[0],i=t[1],c=Object(r.useRef)({}),u=Object(r.useRef)(),f=Object(r.useState)({nodeSize:4,linkWidth:2,linkDistance:1,iterationSpeed:1500}),E=Object(l.a)(f,2),O=E[0],w=E[1],A=Object(r.useState)({expands:[],path:[]}),W=Object(l.a)(A,2),R=W[0],M=W[1],D=Object(r.useState)(!1),z=Object(l.a)(D,2),T=z[0],B=z[1],V=function(e){B(!0);var t=[],n=[],r=0,a=0,i=setInterval(function(){r<e.expands.length?(t.push(e.expands[r++]),console.log(t)):a<e.path.length?(n.push(e.path[a++]),console.log(n)):(setTimeout(function(){M({expands:[],path:[]}),B(!1)},2e3),clearInterval(i)),M({expands:[].concat(t),path:[].concat(n)})},2e3-O.iterationSpeed)};return a.a.createElement("div",{className:"App"},a.a.createElement(N,{title:"Nodes",top:"1em",left:"1em",disabled:T},a.a.createElement(d,{inputRef:u,action:function(){var e=u.current.value;""===e||x(n,e)?console.log("Must be a new value"):(i(function(t){return y(t,e)}),u.current.value=""),u.current.focus()},icon:m.c}),a.a.createElement("hr",null),a.a.createElement("div",{className:"list"},n.nodes.map(function(e,t){return a.a.createElement(d,{key:t,value:e.v,inputRef:function(t){return c.current[e.id]=t},change:function(t){x(n,t)?i(function(e){return Object(o.a)({},e)}):i(function(n){return function(e,t,n){var r,a=Object(p.a)(e.nodes),i=0,c=b(a);try{for(c.s();!(r=c.n()).done;){var l=r.value;if(l.id===t){i=l.index;break}}}catch(u){c.e(u)}finally{c.f()}return a[i].v=n,Object(o.a)({},e,{nodes:a})}(n,e.id,t)})},action:function(){return i(function(t){return function(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];for(var i=0,c=r;i<c.length;i++){var l=c[i];t[l]=!0}var u=e.nodes.filter(function(e){return!t[e.id]}),s=e.links.filter(function(e){return!t[e.source.id]&&!t[e.target.id]&&!t[e.source]&&!t[e.target]});return Object(o.a)({},e,{nodes:u,links:s,n:u.length})}(t,e.id)})},enterAction:function(){t+1<n.nodes.length?(c.current[n.nodes[t+1].id].focus(),c.current[n.nodes[t+1].id].select(),c.current[n.nodes[t+1].id].scrollIntoView()):c.current[e.id].blur()},icon:m.d})}))),a.a.createElement(N,{title:"Edges",bottom:"1em",left:"1em",disabled:T},a.a.createElement(v,{nodes:n.nodes,icon:m.c,action:function(e,t){i(function(n){return j(n,e,t)})}}),a.a.createElement("hr",null),a.a.createElement("div",{className:"list"},n.links.map(function(e,t){var r=null!=e.source.id?e.source.id:e.source,c=null!=e.target.id?e.target.id:e.target,l=null!=e.source.v?e.source.v:k(n,r).v,u=null!=e.target.v?e.target.v:k(n,c).v;return a.a.createElement(h,{key:t,source:l,target:u,action:function(){i(function(e){return function(e){for(var t={},n=1;n<(arguments.length<=1?0:arguments.length-1);n+=2){var r=n-1+1<1||arguments.length<=n-1+1?void 0:arguments[n-1+1],a=n+1<1||arguments.length<=n+1?void 0:arguments[n+1];t[r]||(t[r]={}),t[r][a]=!0}var i=e.links.filter(function(e){return!(t[e.source.id]&&t[e.source.id][e.target.id])&&!(t[e.source]&&t[e.source][e.target])});return Object(o.a)({},e,{links:i})}(e,r,c)})},icon:m.d})}))),a.a.createElement(N,{title:"Options",bottom:"1em",right:"1em"},a.a.createElement("b",null,"Node size"),a.a.createElement("input",{type:"range",min:"1",max:"20",step:".1",value:O.nodeSize,onInput:function(e){w(Object(o.a)({},O,{nodeSize:e.target.value}))}}),a.a.createElement("b",null,"Edge width"),a.a.createElement("input",{type:"range",min:"1",max:"10",step:".05",value:O.linkWidth,onInput:function(e){w(Object(o.a)({},O,{linkWidth:e.target.value}))}}),a.a.createElement("b",null,"Edge distance"),a.a.createElement("input",{type:"range",min:"1",max:"1000",step:"5",value:O.linkDistance,onInput:function(e){w(Object(o.a)({},O,{linkDistance:e.target.value}))}}),a.a.createElement("b",null,"Iteration Speed"),a.a.createElement("input",{type:"range",min:"0",max:"2000",step:"5",value:O.iterationSpeed,onInput:function(e){w(Object(o.a)({},O,{iterationSpeed:e.target.value}))}})),a.a.createElement(N,{title:"Algorithms",top:"1em",right:"1em",disabled:T},a.a.createElement("div",{className:"list"},a.a.createElement(g,{name:"bfs",args:["start","goal"],nodes:n.nodes,action:function(e,t){if(!isNaN(e)&&!isNaN(t)){var r=function(e,t,n){var r=new Map;r.set(e,null);for(var a=[e],i=[],c=[];a.length;){var o=a.shift();if(i.push(o),o===t){c.push(t);break}var l,u=S(n[o]);try{for(u.s();!(l=u.n()).done;){var s=l.value;r.has(s)||(r.set(s,o),a.push(s))}}catch(f){u.e(f)}finally{u.f()}}if(c.length)for(;null!=r.get(c[0]);)c.unshift(r.get(c[0]));return{expands:i,path:c}}(e,t,I(n));V(r)}}}),a.a.createElement(g,{name:"dfs",args:["start","goal"],nodes:n.nodes,action:function(e,t){if(!isNaN(e)&&!isNaN(t)){var r=function(e,t,n){var r=new Map;r.set(e,null);for(var a=[e],i=[],c=[];a.length;){var o=a.pop();if(o===t){c.push(t);break}i.push(o);var l,u=S(n[o]);try{for(u.s();!(l=u.n()).done;){var s=l.value;r.has(s)||(r.set(s,o),a.push(s))}}catch(f){u.e(f)}finally{u.f()}}if(c.length)for(;null!=r.get(c[0]);)c.unshift(r.get(c[0]));return{expands:i,path:c}}(e,t,I(n));V(r)}}}),a.a.createElement(g,{name:"uniformcost",args:["start","goal"],nodes:n.nodes}),a.a.createElement(g,{name:"greedy",args:["start","goal"],nodes:n.nodes}),a.a.createElement(g,{name:"astar",args:["start","goal"],nodes:n.nodes}))),a.a.createElement(s,{nodes:n.nodes,links:n.links,nodeSize:O.nodeSize,linkWidth:O.linkWidth,linkDistance:O.linkDistance,onClickNode:function(e){c.current[e.id]&&(c.current[e.id].focus(),c.current[e.id].select(),c.current[e.id].scrollIntoView()),e.fixed=!e.fixed,e.fixed?(e.fx=e.x,e.fy=e.y):(e.fx=null,e.fy=null)},expands:R.expands,path:R.path}))},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)})};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(W,null)),document.getElementById("root")),R()}},[[56,1,2]]]);
//# sourceMappingURL=main.f19c2730.chunk.js.map