(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=(n(13),n(3)),u=n(4),s=n(6),l=n(5),p=n(7),h=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={data:[]},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*").then((function(t){return t.json()})).then((function(e){t.setState({data:e})}))}},{key:"render",value:function(){var t=this.state.data.map((function(t,e){return r.a.createElement("li",{key:e},t)}));return r.a.createElement("ul",null,t)}}]),e}(a.Component);o.a.render(r.a.createElement(h,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.d9672eaf.chunk.js.map