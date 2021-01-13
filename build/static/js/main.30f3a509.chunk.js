(this["webpackJsonpproject-31-temperature-converter-react"]=this["webpackJsonpproject-31-temperature-converter-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(8),l=a.n(c),o=a(4),s=a(6),i=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("p",{className:"footer__text"},"\xa9 ",(new Date).getFullYear()," All rights reserved. Designed and built and Andrew Shearer."),n.a.createElement("div",{className:"footer__icon-row"},n.a.createElement("a",{className:"footer__icon-link",href:"https://github.com/andrews1022/temperature-converter-react",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(o.a,{className:"footer__icon",icon:s.a,size:"lg"})),n.a.createElement("a",{className:"footer__icon-link",href:"https://twitter.com/andrew_devsrc",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(o.a,{className:"footer__icon",icon:s.b,size:"lg"}))))},m=function(){return n.a.createElement("header",{className:"header"},n.a.createElement("h1",{className:"header__title"},"Temperature Converter"))},u=a(9),p=function(e){var t=e.tempType,a=e.tempState,r=e.dispatch;return n.a.createElement("div",{className:"temp__group"},n.a.createElement("label",{className:"temp__label",htmlFor:"temp_".concat(t)},t),n.a.createElement("input",{className:"temp__input",type:"number",name:"temp_".concat(t),id:"temp_".concat(t),value:a[t],onChange:function(e){return r({type:"convert_".concat(t),payload:e.target.value})}}))},_=a(2),d={celsius:0,fahrenheit:0,kelvin:0},f=function(e,t){var a=+t.payload;switch(t.type){case"convert_celsius":return Object(_.a)({},e,{celsius:a,fahrenheit:(1.8*a+32).toFixed(2),kelvin:(a+273.15).toFixed(2)});case"convert_fahrenheit":return Object(_.a)({},e,{celsius:((a-32)/1.8).toFixed(2),fahrenheit:a,kelvin:((a-32)/1.8+273.15).toFixed(2)});case"convert_kelvin":return Object(_.a)({},e,{celsius:(a-273.15).toFixed(2),fahrenheit:(1.8*(a-273.15)+32).toFixed(2),kelvin:a});case"reset_temps":return d;default:return e}},h=function(){var e=Object(r.useReducer)(f,d),t=Object(u.a)(e,2),a=t[0],c=t[1];return n.a.createElement("div",{className:"temp"},Object.keys(a).map((function(e,t){return n.a.createElement(p,{key:t,tempType:e,tempState:a,dispatch:c})})),n.a.createElement("div",{className:"temp__group"},n.a.createElement("button",{className:"temp__reset",onClick:function(){return c({type:"reset_temps"})}},"Reset")))},v=(a(20),function(){return n.a.createElement("div",{className:"app"},n.a.createElement(m,null),n.a.createElement(h,null),n.a.createElement(i,null))});l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.30f3a509.chunk.js.map