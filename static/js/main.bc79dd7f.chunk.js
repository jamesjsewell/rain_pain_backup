(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(57)},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),i=n.n(c),l=(n(35),n(36),n(37),n(14)),r=n(4),s=n(9),u=n(10),m=n(12),v=n(11),p=n(13),d=(n(38),n(39),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.initViz()}},{key:"initViz",value:function(){var e=this.vizContainer;new window.tableau.Viz(e,"https://public.tableau.com/shared/XNYDSZ85Q?:display_count=yes&:origin=viz_share_link",{width:"90vw",height:"90vh"})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"map-wrapper"},o.a.createElement("div",{className:"map",ref:function(t){e.vizContainer=t}}))}}]),t}(o.a.Component)),E=(n(40),function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"houston"},o.a.createElement("div",{className:"waveTop"}),o.a.createElement("div",{className:"waveBottom"})),o.a.createElement("div",{className:"waves"}))}),h=n(21),f=(n(41),n(2)),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(v.a)(t).call(this,e))).state={hideTopButton:!1},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.Events.scrollEvent.register("begin",function(e,t){console.log("begin",e)}),f.Events.scrollEvent.register("end",function(t,n){e.setState({hideTopButton:void 0===t})}),f.scrollSpy.update()}},{key:"componentWillUnmount",value:function(){f.Events.scrollEvent.remove("begin"),f.Events.scrollEvent.remove("end")}},{key:"scrollToTop",value:function(){f.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",null,o.a.createElement("div",{className:"title-wrapper"},o.a.createElement(f.Link,{to:"mapSection",spy:!0,smooth:!0,duration:500},o.a.createElement(h.b,{className:"down-button"})),o.a.createElement("div",{className:"title-contents"},o.a.createElement("h1",null,"RAIN PAIN"),o.a.createElement("div",{className:"raindrop-logo"})),o.a.createElement(E,null))),o.a.createElement(f.Element,{name:"mapSection"},o.a.createElement("div",{className:"about-section"},this.state.hideTopButton?null:o.a.createElement("a",{className:"top-button-wrapper",onClick:function(){return e.scrollToTop()}},o.a.createElement(h.a,{className:"top-button"})),o.a.createElement(d,null))))}}]),t}(o.a.Component),w=Object(r.a)();var N=function(){return o.a.createElement(l.b,{history:w},o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/",component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.bc79dd7f.chunk.js.map