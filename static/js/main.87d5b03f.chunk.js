(this["webpackJsonpctd-frontend3-primer-evaluacion"]=this["webpackJsonpctd-frontend3-primer-evaluacion"]||[]).push([[0],{13:function(e,a,o){},15:function(e,a,o){"use strict";o.r(a);var s=o(1),t=o.n(s),n=o(8),i=o.n(n),r=(o(13),o(2)),c=o(3),l=o(5),d=o(4),u=o(0),p=function(e){Object(l.a)(o,e);var a=Object(d.a)(o);function o(){return Object(r.a)(this,o),a.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"historia",children:this.props.historia})})}}]),o}(s.Component),b=function(e){Object(l.a)(o,e);var a=Object(d.a)(o);function o(){return Object(r.a)(this,o),a.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"recordatorio",children:[Object(u.jsxs)("h3",{children:["Selecci\xf3n anterior: ",this.props.seleccionPrevia," "]}),Object(u.jsx)("h4",{children:"Historial de opciones elegidas: "}),Object(u.jsx)("ul",{children:this.props.historial})]})}}]),o}(s.Component),h=function(e){Object(l.a)(o,e);var a=Object(d.a)(o);function o(){return Object(r.a)(this,o),a.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"opciones",children:[Object(u.jsxs)("div",{className:"opcion",children:[Object(u.jsx)("button",{id:"A",onClick:this.props.handleClick,className:"botones",children:"A"}),Object(u.jsx)("h2",{children:this.props.opcionA})]}),Object(u.jsxs)("div",{className:"opcion",children:[Object(u.jsx)("button",{id:"B",onClick:this.props.handleClick,className:"botones",children:"B"}),Object(u.jsx)("h2",{children:this.props.opcionB})]})]})}}]),o}(s.Component),j=o(6),v=[],m=function(e){Object(l.a)(o,e);var a=Object(d.a)(o);function o(e){var s;return Object(r.a)(this,o),(s=a.call(this,e)).handleClick=function(e){var a=e.target.id;console.log(a),s.state.contador>=7?alert("Fin del juego"):"A"===a&&"A"!==s.state.seleccionPrevia?s.setState({seleccionPrevia:a,contador:s.state.contador+1}):"A"===a&&"A"===s.state.seleccionPrevia||"B"===a&&"A"!==s.state.seleccionPrevia?s.setState({seleccionPrevia:a,contador:s.state.contador+2}):"B"===a&&"A"===s.state.seleccionPrevia&&s.setState({seleccionPrevia:a,contador:s.state.contador+3})},s.state={seleccionPrevia:"",contador:0},s}return Object(c.a)(o,[{key:"componentDidUpdate",value:function(){v.push(this.state.seleccionPrevia)}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"layout",children:[Object(u.jsx)(p,{historia:j[this.state.contador].historia}),Object(u.jsx)(h,{handleClick:this.handleClick,opcionA:j[this.state.contador].opciones.a,opcionB:j[this.state.contador].opciones.b}),Object(u.jsx)(b,{seleccionPrevia:this.state.seleccionPrevia,historial:v.map((function(e,a){return Object(u.jsx)("li",{children:e},a)}))})]})})}}]),o}(s.Component);i.a.render(Object(u.jsx)(t.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"id":"1","historia":"Un d\xeda como cualquiera te vas a dormir, lo siguiente que sabes es que te despertas en el medio de un bosque.","opciones":{"a":"Pedir ayuda a los gritos.","b":"Mirar a mi alrededor."}},{"id":"2a","historia":"Instant\xe1neamente entras en p\xe1nico por lo bizarro de la situaci\xf3n y gritas: -Aiiudaaaa. Nadie responde. Detr\xe1s de un \xe1rbol enfrente tuyo se asoma lo que parece ser una bola de pelo de 2 metros.","opciones":{"a":"Te levant\xe1s y camin\xe1s lentamente hacia atr\xe1s.","b":"Te levant\xe1s y sal\xeds corriendo."}},{"id":"2b","historia":"Miras a tu alrededor y ves solo \xe1rboles, plantas y hongos, Detr\xe1s de un \xe1rbol enfrente tuyo se asoma lo que parece ser una bola de pelo de 2 metros.","opciones":{"a":"Te levant\xe1s y camin\xe1s lentamente hacia atr\xe1s.","b":"Te levant\xe1s y sal\xeds corriendo."}},{"id":"3a","historia":"Lento y sin sacarle la mirada de encima te vas alejando de la cosa peluda. Ves que de golpe se mueve y empieza a correr hacia vos, no distinguis que es pero salis corriendo. Escuchas de golpe un grito proveniente de la cosa peluda: -Esperaaa!!","opciones":{"a":"Le haces caso y esperas.","b":"Mira si voy a esperar, sigo corriendo."}},{"id":"3b","historia":"Al levantarte ves que se mueve y empieza a correr hacia vos, no distingu\xeds que \xe9s pero sal\xeds corriendo pensando que puede ser un oso. Escuchas de golpe un grito proveniente de la cosa peluda: -Esperaaa!!","opciones":{"a":"Le haces caso y esperas.","b":"Mira si voy a esperar, sigo corriendo."}},{"id":"4a","historia":"Paras de correr y al darte vuelta con algo de miedo ves que lo que te persegu\xeda se detiene, te quedas sin palabras al ver que es un oso gigante con la cara de una se\xf1ora muy maquillada que te dice; -Si quer\xe9s llorar, llora pero est\xe1s en un sue\xf1o mi amor.","opciones":{"a":"Me r\xedo en la cara del oso-se\xf1ora.","b":"Me pongo a bailar."}},{"id":"4b","historia":"El miedo no deja tu cuerpo y hace bien as\xed que segu\xeds corriendo, sin darte cuenta te tropezas con una piedra y quedas de cara con lo que te persegu\xeda, lo que ves es rid\xedculo, un oso gigante con la cara de una se\xf1ora muy maquillada que te dice; -Si quer\xe9s llorar, llora pero est\xe1s en un sue\xf1o mi amor.","opciones":{"a":"Me r\xedo en la cara del oso-se\xf1ora.","b":"Me pongo a bailar."}},{"id":"5a","historia":"Te empezas a reir como nunca, y de una forma bastante molesta la verdad. El oso-se\xf1ora se cansa de vos y te da una s\xf3lida bofetada en la cara con su brazo de 60kg que te tuerce el cuello y te despierta instant\xe1neamente. FIN.","opciones":{"a":"FIN.","b":"FIN."}},{"id":"5b","historia":"Por alguna raz\xf3n decid\xeds ponerte a bailar, el oso-se\xf1ora no entiende porqu\xe9, los animales del bosque no entienden porqu\xe9, yo que escribo esto no entiendo porqu\xe9, nadie entiende porqu\xe9. El oso-se\xf1ora se cansa de tu bailecito y te da una s\xf3lida bofetada en la cara con su brazo de 60kg que te tuerce el cuello y te despierta instant\xe1neamente. FIN.","opciones":{"a":"FIN","b":"FIN"}}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.87d5b03f.chunk.js.map