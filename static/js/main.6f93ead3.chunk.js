(this["webpackJsonpcity-weather"]=this["webpackJsonpcity-weather"]||[]).push([[0],{120:function(e,t,a){},220:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(26),i=a.n(r),s=(a(120),a(48)),o=a(8),u=a(28),l=a(225),d=a(226),j=a(112),h=a(224),p=(a(121),"ADD_CITY"),b="DELETE_CITY",m="RESTORE_CITIES",O="ADD_WEATHER",y="GET_WEATHER_BY_HOUR",f=function(e){return{type:m,payload:e}},x=function(e){return{type:y,payload:e}},w=a(44),v=a(36),g=a.n(v),N=a(21),C=a(50),k=a(75),E="b9898eab2d007d76ad60232f74562835",S=function(){var e=Object(C.a)(g.a.mark((function e(t){var a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,c=t.country,e.abrupt("return",k.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(c,"&appid=").concat(E,"&units=metric")));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(C.a)(g.a.mark((function e(t){var a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.lat,c=t.lon,e.abrupt("return",k.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(c,"&exclude=daily&appid=").concat(E,"&units=metric")));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=a(6),_=Object(w.b)((function(e){return{cities:e.cities}}),(function(e){return{addCity:function(t){e({type:p,payload:t})},deleteCity:function(t){e({type:b,payload:t})},restoreCities:function(t){e(f(t))},getWeather:function(t){e(function(e){return function(){var t=Object(C.a)(g.a.mark((function t(a){var c,n,r,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e);case 3:return c=t.sent,n=c.data,t.next=7,T({lat:n.coord.lat,lon:n.coord.lon});case 7:r=t.sent,i=r.data,a((s=Object(N.a)(Object(N.a)({},e),{},{weather:n}),{type:O,payload:s})),a(x(Object(N.a)(Object(N.a)({},e),{},{weatherByHours:i}))),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}var s}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.cities,a=e.restoreCities,n=e.addCity,r=e.getWeather,i=e.deleteCity,o=Object(c.useState)(""),p=Object(u.a)(o,2),b=p[0],m=p[1],O=Object(c.useState)(""),y=Object(u.a)(O,2),f=y[0],x=y[1],w=Object(c.useState)(""),v=Object(u.a)(w,2),g=v[0],N=v[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("cities"));a(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("cities",JSON.stringify(t))}),[t]);var C=function(){m(""),x("")};return Object(B.jsxs)("div",{className:"container",children:[g.length>0&&Object(B.jsx)(l.a,{message:g,type:"error"}),Object(B.jsx)("h1",{className:"h1",children:"City Weather"}),Object(B.jsxs)("div",{className:"addBlock",children:[Object(B.jsx)(d.a,{type:"text",placeholder:"City Name",value:b,onChange:function(e){return m(e.target.value)}}),Object(B.jsx)(d.a,{type:"text",placeholder:"Country",value:f,onChange:function(e){return x(e.target.value)}}),Object(B.jsx)(j.a,{disabled:!b,type:"primary",onClick:function(){if(t.find((function(e){return e.name===b&&e.country===f})))N("Duplicated city");else{N("");var e={name:b,country:f};n(e),r(e),C()}},children:"Add city"})]}),Object(B.jsx)("div",{className:"cardList",children:t.map((function(e,t){var a;return Object(B.jsxs)(h.a,{hoverable:!0,className:"cardBlock",children:[Object(B.jsxs)(s.b,{to:"/city/".concat(null===(a=e.weather)||void 0===a?void 0:a.id),className:"cardLink",children:[Object(B.jsxs)("p",{className:"cityName",children:[e.name,e.country&&", ".concat(e.country)]}),e.weather&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(e.weather.weather[0].icon,"@2x.png"),alt:e.weather.weather[0].id}),Object(B.jsxs)("p",{children:[e.weather.main.temp," \xb0"]}),Object(B.jsxs)("div",{className:"tempBlock",children:[Object(B.jsxs)("span",{children:["min: ",e.weather.main.temp_min]}),Object(B.jsxs)("span",{children:["max: ",e.weather.main.temp_max]})]}),Object(B.jsx)("p",{children:e.weather.weather[0].description})]})]}),Object(B.jsxs)("div",{className:"btnGroup",children:[Object(B.jsx)(j.a,{type:"primary",danger:!0,onClick:function(){i(e)},children:"Delete"}),Object(B.jsx)(j.a,{type:"primary",onClick:function(){return function(e){var t=e.name,a=e.country;r({name:t,country:a})}(e)},children:"Update"})]})]},t)}))})]})})),D=a(223),H=Object(w.b)((function(e){return{city:function(t){return e.cities.find((function(e){return e.weather.id===t}))},cities:e.cities}}),(function(e){return{restoreCities:function(t){e(f(t))}}}))((function(e){var t=e.cities,a=e.restoreCities,n=e.city,r=Object(c.useState)(),i=Object(u.a)(r,2),s=i[0],l=i[1],d=Object(c.useState)(),j=Object(u.a)(d,2),p=j[0],b=j[1],m=Object(o.g)().id;if(Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("cities"));a(e)}),[]),Object(c.useEffect)((function(){if(!s){if(!n(+m))return;l(n(+m));var e=n(+m).weatherByHours.hourly.reduce((function(e,t){return Math.round(t.temp)>e&&(e=Math.round(t.temp)),e}),-99);b(e)}}),[t]),!s||!s.weather)return Object(B.jsx)("div",{className:"spinBlock",children:Object(B.jsx)(D.a,{})});return Object(B.jsxs)("div",{className:"detailBlock",children:[Object(B.jsx)("h1",{className:"h1",children:"Hour Weather"}),Object(B.jsx)("div",{className:"hourBlock",children:s.weatherByHours.hourly.map((function(e){return Object(B.jsxs)("div",{className:"cardHour",style:{marginTop:(t=Math.round(e.temp),5*(p-t))},children:[Math.round(e.temp)>0?"+".concat(Math.round(e.temp)):Math.round(e.temp)," \xb0"]});var t}))}),Object(B.jsx)("div",{className:"container",children:Object(B.jsx)("div",{className:"cardDetail",children:Object(B.jsx)("div",{className:"site-card-border-less-wrapper",children:Object(B.jsxs)(h.a,{className:"cityDetail",title:s.weather.name,bordered:!1,children:[Object(B.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(s.weather.weather[0].icon,"@2x.png"),alt:s.weather.weather[0].id}),Object(B.jsx)("p",{children:s.weather.weather[0].main}),Object(B.jsxs)("p",{children:["Temperature: ",s.weather.main.temp," \xb0"]}),Object(B.jsxs)("div",{className:"cityGroup",children:[Object(B.jsxs)("p",{children:["Temp min: ",s.weather.main.temp_min," \xb0"]}),Object(B.jsxs)("p",{children:["Feels like: ",s.weather.main.feels_like," \xb0"]}),Object(B.jsxs)("p",{children:["Humidity: ",s.weather.main.humidity," %"]}),Object(B.jsxs)("p",{children:["Temp max: ",s.weather.main.temp_max," \xb0"]}),Object(B.jsxs)("p",{children:["Atmospheric pressure: ",s.weather.main.pressure," hPa"]}),Object(B.jsxs)("p",{children:["Wind speed: ",s.weather.wind.speed," meter/sec"]})]})]})})})})]})})),I=function(){return Object(B.jsx)("div",{children:"NotFound"})},M=a(66),W=a(79),F={cities:[]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(N.a)(Object(N.a)({},e),{},{cities:[].concat(Object(W.a)(e.cities),[t.payload])});case b:return Object(N.a)(Object(N.a)({},e),{},{cities:e.cities.filter((function(e){return e.name!==t.payload.name||e.country!==t.payload.country}))});case m:return Object(N.a)(Object(N.a)({},e),{},{cities:Object(W.a)(t.payload)});case O:return Object(N.a)(Object(N.a)({},e),{},{cities:e.cities.map((function(e){return e.name===t.payload.name&&e.country===t.payload.country&&(e.weather=t.payload.weather),e}))});case y:return Object(N.a)(Object(N.a)({},e),{},{cities:e.cities.map((function(e){return e.name===t.payload.name&&e.country===t.payload.country&&(e.weatherByHours=t.payload.weatherByHours),e}))});default:return e}},J=a(111),L=a(110),R=Object(M.createStore)(A,Object(L.composeWithDevTools)(Object(M.applyMiddleware)(J.a)));var G=function(){return Object(B.jsx)(w.a,{store:R,children:Object(B.jsx)(s.a,{children:Object(B.jsxs)(o.c,{children:[Object(B.jsx)(o.a,{path:"/",element:Object(B.jsx)(_,{})}),Object(B.jsx)(o.a,{path:"/city/:id",element:Object(B.jsx)(H,{})}),Object(B.jsx)(o.a,{path:"*",element:Object(B.jsx)(I,{})})]})})})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,227)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};i.a.render(Object(B.jsx)(n.a.StrictMode,{children:Object(B.jsx)(G,{})}),document.getElementById("root")),P()}},[[220,1,2]]]);
//# sourceMappingURL=main.6f93ead3.chunk.js.map