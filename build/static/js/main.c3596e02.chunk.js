(this["webpackJsonpproject-31-temperature-converter-react"]=this["webpackJsonpproject-31-temperature-converter-react"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),l=a.n(c),u=function(e){return r.a.createElement("h1",{className:"temp__heading"},e.title)},i=a(3),m=function(e){return r.a.createElement("div",{className:"temp__group"},r.a.createElement("label",{className:"temp__label",for:"".concat(e.type,"-input")},e.type),r.a.createElement("div",{className:"temp__wrapper"},r.a.createElement("input",{className:"temp__input",type:"number",name:"".concat(e.type,"-input"),id:"".concat(e.type,"-input"),value:e.value,onChange:e.convertTemp}),r.a.createElement("span",{className:"temp__span"})))},s=function(e){return r.a.createElement("button",{className:"temp__btn",onClick:e.resetTemps},e.buttonText)},o=function(){var e=Object(n.useState)((function(){return{celsius:0,fahrenheit:0,kelvin:0}})),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"temp__calc"},r.a.createElement(m,{type:"celsius",value:a.celsius,convertTemp:function(e){return c({celsius:+e.target.value,fahrenheit:(1.8*+e.target.value+32).toFixed(2),kelvin:(+e.target.value+273.15).toFixed(2)})}}),r.a.createElement(m,{type:"fahrenheit",value:a.fahrenheit,convertTemp:function(e){return c({celsius:((+e.target.value-32)/1.8).toFixed(2),fahrenheit:+e.target.value,kelvin:((+e.target.value-32)/1.8+273.15).toFixed(2)})}}),r.a.createElement(m,{type:"kelvin",value:a.kelvin,convertTemp:function(e){return c({celsius:(+e.target.value-273.15).toFixed(2),fahrenheit:(1.8*(+e.target.value-273.15)+32).toFixed(2),kelvin:+e.target.value})}}),r.a.createElement(s,{buttonText:"reset",resetTemps:function(){return c({celsius:0,fahrenheit:0,kelvin:0})}}))},p=(a(9),function(){return r.a.createElement("div",{className:"temp"},r.a.createElement(u,{title:"temperature converter"}),r.a.createElement(o,null))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.c3596e02.chunk.js.map