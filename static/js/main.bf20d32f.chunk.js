(this["webpackJsonpimage-gallery-react"]=this["webpackJsonpimage-gallery-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),r=i(8),c=i.n(r),s=(i(13),i(7)),o=i(2);i(14);function u(){return[{id:Math.random().toString().substring(0,5),title:"Cat",description:"I am a monster cat (Weaown Waeown). Don't come near me. I will not bite you but will roast your insecurities. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit velit, convallis id consectetur ut, varius et diam. Nam lacus orci, elementum et bibendum ultricies, tincidunt nec lectus. Duis blandit et mi in sodales. Fusce nec purus porttitor, pharetra mi a, accumsan nisi. Integer neque urna, cursus sed ex id, auctor vehicula mi. Donec ac finibus magna. Proin sollicitudin erat sit amet orci tincidunt, facilisis lacinia dolor ornare.",imageURL:"images/cat.jpeg"},{id:Math.random().toString().substring(0,5),title:"Dog",description:"I am a cool puppy (aow aow). You can play with me or take me to a walk. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit velit, convallis id consectetur ut, varius et diam. Nam lacus orci, elementum et bibendum ultricies, tincidunt nec lectus. Duis blandit et mi in sodales. Fusce nec purus porttitor, pharetra mi a, accumsan nisi. Integer neque urna, cursus sed ex id, auctor vehicula mi. Donec ac finibus magna. Proin sollicitudin erat sit amet orci tincidunt, facilisis lacinia dolor ornare.",imageURL:"images/dog.jpeg"},{id:Math.random().toString().substring(0,5),title:"Horse",description:"I am a horse (HeHeHe). I will blow your mind and ride you to oblivion. You will never forget me. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit velit, convallis id consectetur ut, varius et diam. Nam lacus orci, elementum et bibendum ultricies, tincidunt nec lectus. Duis blandit et mi in sodales. Fusce nec purus porttitor, pharetra mi a, accumsan nisi. Integer neque urna, cursus sed ex id, auctor vehicula mi. Donec ac finibus magna. Proin sollicitudin erat sit amet orci tincidunt, facilisis lacinia dolor ornare.",imageURL:"images/horse.webp"},{id:Math.random().toString().substring(0,5),title:"Cata",description:"I am a monster cat (Weaown Waeown). Don't come near me. I will not bite you but will roast your insecurities. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit velit, convallis id consectetur ut, varius et diam. Nam lacus orci, elementum et bibendum ultricies, tincidunt nec lectus. Duis blandit et mi in sodales. Fusce nec purus porttitor, pharetra mi a, accumsan nisi. Integer neque urna, cursus sed ex id, auctor vehicula mi. Donec ac finibus magna. Proin sollicitudin erat sit amet orci tincidunt, facilisis lacinia dolor ornare.",imageURL:"images/cat.jpeg"},{id:Math.random().toString().substring(0,5),title:"Dogi",description:"I am a cool puppy (aow aow). You can play with me or take me to a walk. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit velit, convallis id consectetur ut, varius et diam. Nam lacus orci, elementum et bibendum ultricies, tincidunt nec lectus. Duis blandit et mi in sodales. Fusce nec purus porttitor, pharetra mi a, accumsan nisi. Integer neque urna, cursus sed ex id, auctor vehicula mi. Donec ac finibus magna. Proin sollicitudin erat sit amet orci tincidunt, facilisis lacinia dolor ornare.",imageURL:"images/dog.jpeg"},{id:Math.random().toString().substring(0,5),title:"Horsea",description:"I am a horse (HeHeHe). I will blow your mind and ride you to oblivion. You will never forget me. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit velit, convallis id consectetur ut, varius et diam. Nam lacus orci, elementum et bibendum ultricies, tincidunt nec lectus. Duis blandit et mi in sodales. Fusce nec purus porttitor, pharetra mi a, accumsan nisi. Integer neque urna, cursus sed ex id, auctor vehicula mi. Donec ac finibus magna. Proin sollicitudin erat sit amet orci tincidunt, facilisis lacinia dolor ornare.",imageURL:"images/horse.webp"}].slice()}var l=i(3);i(15);function d(e,t){return e.slice(0,t/2)+"..."+e.slice(-t/2)}function m(e,t,i,n){return e.textContent=d(i,n),e.scrollHeight<=t}var g=i(0),b=function(e){var t=e.imageURL,i=e.title,a=e.description,r=e.id,c=e.selected,s=e.onStartDrag,o=e.onStopDrag,u=["list-item"];c&&u.push("selected");var l=Object(n.useRef)(),b=Object(n.useRef)();return Object(n.useEffect)((function(){!function(e,t,i,n){e.style.width=i,e.style.maxHeight=t,t=parseInt(t);for(var a=0,r=n.length,c=a;a<=r;){var s=Math.floor((a+r)/2);m(e,t,n,s)?(c=s,a=s+1):r=s-1}e.textContent=d(n,c)}(b.current,"60px","100%",a)}),[r,a]),Object(n.useEffect)((function(){var e=0,t=l.current,i=function(e){setTimeout((function(){t.style.display="none",s(r)}),300)},n=function(e){setTimeout((function(){t.style.display="flex"}),0)},a=function(i){i.preventDefault(),e++,t.classList.add("hovered")},c=function(i){0===--e&&t.classList.remove("hovered")},u=function(e){return e.preventDefault()},d=function(e){t.classList.remove("hovered"),o(r)};return t.addEventListener("dragstart",i),t.addEventListener("dragend",n),t.addEventListener("dragenter",a),t.addEventListener("dragover",u),t.addEventListener("dragleave",c),t.addEventListener("drop",d),function(){t.removeEventListener("dragstart",i),t.removeEventListener("dragend",n),t.removeEventListener("dragenter",a),t.removeEventListener("dragover",u),t.removeEventListener("dragleave",c),t.removeEventListener("drop",d)}}),[r,o,s]),Object(g.jsxs)("div",{className:u.join(" "),draggable:!0,"data-id":r,ref:l,children:[Object(g.jsx)("img",{src:t,alt:"",draggable:"false"}),Object(g.jsxs)("div",{className:"list-item-content",children:[Object(g.jsx)("p",{children:i}),Object(g.jsx)("div",{ref:b,children:a})]})]})},v=(i(17),function(e){var t=e.dataList,i=e.onSelectListItem,a=e.currentIndex,r=e.onStartDrag,c=e.onStopDrag;return Object(g.jsx)("div",{className:"list-container",onClick:function(e){var t,n,a,r=[e.target,null===(t=e.target)||void 0===t?void 0:t.parentNode,null===(n=e.target)||void 0===n||null===(a=n.parentNode)||void 0===a?void 0:a.parentNode].find((function(e){return e&&e.classList.contains("list-item")}));r&&i(r.dataset.id)},children:t.map((function(e,t){return Object(n.createElement)(b,Object(l.a)(Object(l.a)({},e),{},{key:e.id,selected:t===a,onStartDrag:r,onStopDrag:c}))}))})}),f=(i(18),function(e){var t=Object(n.useState)(e),i=Object(o.a)(t,2),a=i[0],r=i[1],c=Object(n.useCallback)((function(e){return r(e.target.value)}),[]);return[a,r,c]}),p=function(e){var t=e.title,i=e.description,a=e.onSubmit,r=f(t),c=Object(o.a)(r,3),s=c[0],u=c[1],l=c[2],d=f(i),m=Object(o.a)(d,3),b=m[0],v=m[1],p=m[2];Object(n.useEffect)((function(){u(t)}),[t,u]),Object(n.useEffect)((function(){v(i)}),[i,v]);return Object(g.jsxs)("form",{className:"data-form",onSubmit:function(e){e.preventDefault(),a({title:s,description:b})},children:[Object(g.jsx)("input",{type:"text",placeholder:"Title",required:!0,minLength:"1",value:s,onChange:l}),Object(g.jsx)("textarea",{placeholder:"Description",maxLength:"40000",minLength:"10",rows:"4",required:!0,value:b,onChange:p}),Object(g.jsx)("button",{children:"Save"})]})},j=(i(19),function(e){var t=e.imageURL;return Object(g.jsx)("img",{className:"image-display",src:t,alt:""})}),h=(i(20),function(e){var t=e.data,i=e.onSubmit;return Object(g.jsxs)("div",{className:"canvas-container",children:[Object(g.jsx)(j,{imageURL:t.imageURL}),Object(g.jsx)(p,Object(l.a)(Object(l.a)({},t),{},{onSubmit:i}))]})});function O(e,t){return e.findIndex((function(e){return e.id===t}))}var L=function(){var e=Object(n.useState)(u),t=Object(o.a)(e,2),i=t[0],a=t[1],r=Object(n.useState)(0),c=Object(o.a)(r,2),l=c[0],d=c[1],m=Object(n.useRef)(),b=Object(n.useRef)(),f=Object(n.useCallback)((function(e){var t=e.title,n=e.description,r=Object(s.a)(i);r[l].title=t,r[l].description=n,a(r)}),[l,i]);Object(n.useEffect)((function(){var e=function(e){"ArrowDown"===e.key?(e.preventDefault(),d((function(e){return(e+1)%i.length}))):"ArrowUp"===e.key&&(e.preventDefault(),d((function(e){return(e-1+i.length)%i.length})))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[i.length]);var p=Object(n.useCallback)((function(e){m.current=O(i,e)}),[i]),j=Object(n.useCallback)((function(e){if(b.current=O(i,e),null!==m.current&&null!==b.current){var t=Object(s.a)(i),n=t.splice(m.current,1),r=Object(o.a)(n,1)[0];t.splice(b.current,0,r),a(t),d(b.current),b.current=null,m.current=null}}),[i]);return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(v,{dataList:i,onSelectListItem:function(e){d(O(i,e))},currentIndex:l,onStartDrag:p,onStopDrag:j}),Object(g.jsx)(h,{data:i[l],onSubmit:f})]})},w=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,22)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;i(e),n(e),a(e),r(e),c(e)}))};c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(L,{})}),document.getElementById("root")),w()}],[[21,1,2]]]);
//# sourceMappingURL=main.bf20d32f.chunk.js.map