(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,t,n){e.exports=n(79)},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},66:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(22),i=n.n(c),o=(n(61),n(5)),u=n(10),l=(n(62),n(63),n(3)),f=4;var s=function(e){var t=e.nodes,n=e.links,c=e.onClickNode,i=Object(r.useRef)(null),o=Object(r.useRef)(null),u=function(e){var t=i.current.getBoundingClientRect();return Math.max(Math.min(t.width-f,e),0+f)},s=function(e){var t=i.current.getBoundingClientRect();return Math.max(Math.min(t.height-f,e),0+f)};return Object(r.useEffect)(function(){o.current=l.e().force("gravity",l.d()).force("links",l.c().strength(.05)).force("centerX",l.f().strength(.005)).force("centerY",l.g().strength(.005)).alphaDecay(0);var e=l.h(i.current);o.current.on("tick",function(){e.selectAll(".link").attr("x1",function(e){return u(e.source.x)}).attr("y1",function(e){return s(e.source.y)}).attr("x2",function(e){return u(e.target.x)}).attr("y2",function(e){return s(e.target.y)}),e.selectAll(".node").attr("transform",function(e){return"translate("+u(e.x)+","+s(e.y)+")"})});var t=function(){var e=i.current.getBoundingClientRect();o.current.force("centerX").x(e.width/2),o.current.force("centerY").y(e.height/2),o.current.alpha(1).restart()};window.addEventListener("resize",function(){t()}),t()},[]),Object(r.useEffect)(function(){var e=l.h(i.current),r=e.selectAll(".link").data(n,function(e){return e.id});r.exit().transition().ease(l.b).style("opacity",0).duration(500).remove(),r.enter().insert("line",":first-child").attr("class","link");var a=e.selectAll(".node").data(t,function(e){return e.id});a.exit().transition().ease(l.b).style("opacity",0).duration(500).remove();var c=a.enter().append("g").attr("class","node").call(l.a().on("start",function(e,t){e.active||o.current.alphaTarget(.3).restart(),t.fx=t.x,t.fy=t.y}).on("drag",function(e,t){t.fx=e.x,t.fy=e.y}).on("end",function(e,t){e.active||o.current.alphaTarget(0),t.fx=null,t.fy=null}));c.append("circle").attr("r",f),c.append("text").attr("dx","1em").attr("dy",".35em").merge(a.select("text")).text(function(e){return e.v}),o.current.nodes(t),o.current.force("links").links(n)},[t,n]),Object(r.useEffect)(function(){l.i("g").on("click",function(e,t){c(t)})},[c]),a.a.createElement("svg",{ref:i,width:"100%",height:"100%"})},d=(n(66),n(4));var v=function(e){var t=e.change,n=e.action,r=e.enterAction,c=e.value,i=e.icon,o=e.inputRef;return a.a.createElement("div",{className:"node"},a.a.createElement("input",{placeholder:"value",type:"text",ref:o,value:c,onKeyDown:function(e){"Enter"===e.key&&(r?r():n())},onChange:function(e){return t(e.target.value)}}),a.a.createElement("div",{className:"action"},a.a.createElement(d.a,{icon:i,fixedWidth:!0,onClick:function(){return n()}})))},m=(n(72),n(2));var g=function(e){var t=e.action,n=e.icon,c=e.nodes,i=Object(r.useRef)(),o=Object(r.useRef)();return a.a.createElement("div",{className:"link"},a.a.createElement("select",{ref:i,className:"link",defaultValue:"source"},a.a.createElement("option",{disabled:!0,hidden:!0},"source"),c&&c.map(function(e,t){return a.a.createElement("option",{key:t,value:e.id},e.v)})),a.a.createElement(d.a,{icon:m.a,fixedWidth:!0}),a.a.createElement("select",{ref:o,className:"link",defaultValue:"target"},a.a.createElement("option",{disabled:!0,hidden:!0},"target"),c&&c.map(function(e,t){return a.a.createElement("option",{key:t,value:e.id},e.v)})),a.a.createElement("div",{className:"action"},a.a.createElement(d.a,{icon:n,fixedWidth:!0,onClick:function(){return t(parseInt(i.current.value,10),parseInt(o.current.value,10))}})))};n(73);var h=function(e){var t=e.source,n=e.target,c=e.icon,i=e.action,o=Object(r.useRef)(),u=Object(r.useRef)();return a.a.createElement("div",{className:"link"},a.a.createElement("div",{ref:o,className:"link-value"},t),a.a.createElement(d.a,{icon:m.a,fixedWidth:!0}),a.a.createElement("div",{ref:u,className:"link-value"},n),a.a.createElement("div",{className:"action"},a.a.createElement(d.a,{icon:c,fixedWidth:!0,onClick:function(){return i()}})))},p=n(9);function b(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,c=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw c}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e){for(var t=e.id,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var c=r.map(function(e){return{v:e,id:t++}});return Object(o.a)({},e,{nodes:[].concat(Object(p.a)(e.nodes),Object(p.a)(c)),id:t,n:e.n+c.length})}function k(e,t){var n,r=b(Object(p.a)(e.nodes));try{for(r.s();!(n=r.n()).done;){if(t===n.value.v)return!0}}catch(a){r.e(a)}finally{r.f()}return!1}function j(e){var t,n=arguments,r={},a=b(e.nodes);try{for(a.s();!(t=a.n()).done;){var c=t.value;r[c.id]=!0}}catch(f){a.e(f)}finally{a.f()}for(var i=[],u=function(t){var a=t-1+1<1||n.length<=t-1+1?void 0:n[t-1+1],c=t+1<1||n.length<=t+1?void 0:n[t+1];r[a]&&r[c]&&e.links.reduce(function(e,t){return e&&!(t.source.id===a&&t.target.id===c)&&!(t.source===a&&t.target===c)},!0)&&i.push({source:a,target:c})},l=1;l<(arguments.length<=1?0:arguments.length-1);l+=2)u(l);return Object(o.a)({},e,{links:[].concat(Object(p.a)(e.links),i)})}n(74);var x=n(30),O=n.n(x);var w=function(e){var t=e.title,n=e.children,c=Object(r.useState)(!0),i=Object(u.a)(c,2),o=i[0],l=i[1];return a.a.createElement(O.a,null,a.a.createElement("div",{className:"floating-panel ".concat(o?"floating-panel-max":"floating-panel-min")},a.a.createElement("div",{className:"floating-panel-title"},a.a.createElement("b",null,t),a.a.createElement("div",{className:"action"},a.a.createElement(d.a,{icon:o?m.b:m.c,fixedWidth:!0,onClick:function(){l(!o)}}))),o?a.a.createElement("div",{className:"floating-panel-content"},n):null))};var N=function(){var e=Object(r.useState)(j(E({nodes:[],links:[],id:0,n:0},0,1,2),1,2,2,0)),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(r.useRef)({}),l=Object(r.useRef)(),f=Object(r.useState)(""),d=Object(u.a)(f,2),y=d[0],x=d[1];return a.a.createElement("div",{className:"App"},a.a.createElement(w,{title:"Nodes"},a.a.createElement(v,{value:y,inputRef:l,change:function(e){return x(e)},action:function(){""===y||k(n,y)?console.log("Must be a new value"):(c(function(e){return E(e,y)}),x("")),l.current.focus()},icon:m.c}),a.a.createElement("hr",null),a.a.createElement("div",{className:"list"},n.nodes.map(function(e,t){return a.a.createElement(v,{key:t,value:e.v,inputRef:function(t){return i.current[e.id]=t},change:function(t){k(n,t)?c(function(e){return Object(o.a)({},e)}):c(function(n){return function(e,t,n){var r,a=Object(p.a)(e.nodes),c=0,i=b(a);try{for(i.s();!(r=i.n()).done;){var u=r.value;if(u.id===t){c=u.index;break}}}catch(l){i.e(l)}finally{i.f()}return a[c].v=n,Object(o.a)({},e,{nodes:a})}(n,e.id,t)})},action:function(){return c(function(t){return function(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];for(var c=0,i=r;c<i.length;c++){var u=i[c];t[u]=!0}var l=e.nodes.filter(function(e){return!t[e.id]}),f=e.links.filter(function(e){return!t[e.source.id]&&!t[e.target.id]&&!t[e.source]&&!t[e.target]});return Object(o.a)({},e,{nodes:l,links:f,n:l.length})}(t,e.id)})},enterAction:function(){t+1<n.nodes.length?(i.current[n.nodes[t+1].id].focus(),i.current[n.nodes[t+1].id].select(),i.current[n.nodes[t+1].id].scrollIntoView()):i.current[e.id].blur()},icon:m.d})}))),a.a.createElement(w,{title:"Links"},a.a.createElement(g,{nodes:n.nodes,icon:m.c,action:function(e,t){c(function(n){return j(n,e,t)})}}),a.a.createElement("hr",null),a.a.createElement("div",{className:"list"},n.links.map(function(e,t){var n=null!=e.source.v?e.source.v:e.source,r=null!=e.target.v?e.target.v:e.target,i=null!=e.source.id?e.source.id:e.source,u=null!=e.target.id?e.target.id:e.target;return a.a.createElement(h,{key:t,source:n,target:r,action:function(){c(function(e){return function(e){for(var t={},n=1;n<(arguments.length<=1?0:arguments.length-1);n+=2){var r=n-1+1<1||arguments.length<=n-1+1?void 0:arguments[n-1+1],a=n+1<1||arguments.length<=n+1?void 0:arguments[n+1];t[r]||(t[r]={}),t[r][a]=!0}var c=e.links.filter(function(e){return!(t[e.source.id]&&t[e.source.id][e.target.id])&&!(t[e.source]&&t[e.source][e.target])});return Object(o.a)({},e,{links:c})}(e,i,u)})},icon:m.d})}))),a.a.createElement(s,{nodes:n.nodes,links:n.links,onClickNode:function(e){i.current[e.id].focus(),i.current[e.id].select(),i.current[e.id].scrollIntoView()}}))},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)})};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(N,null)),document.getElementById("root")),A()}},[[56,1,2]]]);
//# sourceMappingURL=main.6aa2a49e.chunk.js.map