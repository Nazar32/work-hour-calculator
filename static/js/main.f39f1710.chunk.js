(this["webpackJsonpwork-hours-calculator"]=this["webpackJsonpwork-hours-calculator"]||[]).push([[0],{15:function(e,t,n){e.exports=n(32)},20:function(e,t,n){},21:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a,o=n(0),r=n.n(o),c=n(12),i=n.n(c),l=(n(20),n(4)),s=(n(21),n(22),n(14)),u=n(13),f=n.n(u),d=function(e,t){return e.toISOString().slice(0,10)===t.toISOString().slice(0,10)},D={holidays:{daysOfWeek:[0,6]}},S={holidays:{color:"red"}};function m(e){var t=e.selectedDays,n=e.setSelectedDays;return r.a.createElement(f.a,{modifiers:D,modifiersStyles:S,onDayClick:function(e,t){t.selected?n((function(t){return t.filter((function(t){return d(t,e)}))})):n((function(t){return[].concat(Object(s.a)(t),[e])}))},selectedDays:t})}!function(e){e[e.SUNDAY=0]="SUNDAY",e[e.MONDAY=1]="MONDAY",e[e.TUESDAY=2]="TUESDAY",e[e.WEDNESDAY=3]="WEDNESDAY",e[e.THURSDAY=4]="THURSDAY",e[e.FRIDAY=5]="FRIDAY",e[e.SATURDAY=6]="SATURDAY"}(a||(a={}));var h=function(){var e=function(e,t){var n=Object(o.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),a=Object(l.a)(n,2),r=a[0],c=a[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}("DAY_OFF",[]),t=Object(l.a)(e,2),n=t[0],c=t[1],i=r.a.useState(n.map((function(e){return new Date(e)}))),s=Object(l.a)(i,2),u=s[0],f=s[1],D=9*function(){for(var e=0,t=(new Date).getDate(),n=function(t){var n=new Date;if(n.setDate(t),[a.SATURDAY,a.SUNDAY].includes(n.getDay())||u.find((function(e){return d(e,n)})))return"continue";e++},o=1;o<=t;o++)n(o);return e}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Work hours in current month: ",D),r.a.createElement(m,{selectedDays:u,setSelectedDays:f}),r.a.createElement("button",{className:"halfWidth endAlign",disabled:n.length===u.length,onClick:function(){c(u)}},"Save day-off")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.f39f1710.chunk.js.map