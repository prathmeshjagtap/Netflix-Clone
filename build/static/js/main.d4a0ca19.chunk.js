(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{22:function(e,t,a){e.exports=a(64)},27:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),o=a.n(r),i=(a(27),a(28),a(4)),l=a.n(i),s=a(5),u=a(3),m=a(17),d=a.n(m).a.create({baseURL:"https://api.themoviedb.org/3"}),v=(a(46),a(18)),f=a(21),h=a.n(f);var p=function(e){var t=e.title,a=e.fetchUrl,r=e.isLargeRow,o=Object(n.useState)([]),i=Object(u.a)(o,2),m=i[0],f=i[1],p=Object(n.useState)(""),g=Object(u.a)(p,2),b=g[0],w=g[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(a);case 2:return t=e.sent,f(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,t),c.a.createElement("div",{className:"row_posters"},m.map((function(e){return c.a.createElement("img",{className:"row_poster ".concat(r&&"row_posterLarge"),key:e.id,onClick:function(){return function(e){b?w(""):h()((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_title)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);w(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},src:"".concat("https://image.tmdb.org/t/p/original/").concat(r?e.poster_path:e.backdrop_path),alt:e.name})}))),b&&c.a.createElement(v.a,{videoId:b,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))},g="2cd6a26170cb9b78eb04ee871640f64e",b={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_network=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchAnime:"/discover/movie?api_key=".concat(g,"&with_genres=16"),fetchFantasy:"/discover/movie?api_key=".concat(g,"&with_genres=14")};a(62);var w=function(){var e,t,a=Object(n.useState)([]),r=Object(u.a)(a,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(b.fetchComedyMovies);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===o||void 0===o?void 0:o.backdrop_path,'")'),backgroundPosition:"center center"}},c.a.createElement("div",{className:"banner_contents"},c.a.createElement("h1",{className:"banner_title"},(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)),c.a.createElement("div",{className:"banner_buttons"},c.a.createElement("button",{className:"banner_button"},"Play"),c.a.createElement("button",{className:"banner_button"},"My List")),c.a.createElement("h1",{className:"banner_description"},(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),c.a.createElement("div",{className:"banner_fadeBottom"}))};a(63);var E=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?r(!0):r(!1)})),function(){window.removeEventListener("scroll")}}),[]),c.a.createElement("div",{className:"nav ".concat(a&&"nav_black")},c.a.createElement("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix Logo"}),c.a.createElement("img",{className:"nav_avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Avatar"}))};var _=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(E,null),c.a.createElement(w,null),c.a.createElement(p,{title:"Netflix Originals",fetchUrl:b.fetchNetflixOriginals,isLargeRow:!0}),c.a.createElement(p,{title:"Trending Now",fetchUrl:b.fetchTrending}),c.a.createElement(p,{title:"Top Rated",fetchUrl:b.fetchTopRated}),c.a.createElement(p,{title:"Action Movies",fetchUrl:b.fetchActionMovies}),c.a.createElement(p,{title:"Comedy Movies",fetchUrl:b.fetchComedyMovies}),c.a.createElement(p,{title:"Horror Movies",fetchUrl:b.fetchHorrorMovies}),c.a.createElement(p,{title:"Romance Movies",fetchUrl:b.fetchRomanceMovies}),c.a.createElement(p,{title:"Anime",fetchUrl:b.fetchAnime}),c.a.createElement(p,{title:"Fantasy Movies",fetchUrl:b.fetchFantasy}),c.a.createElement("div",{className:"footer"},"Created for education purpose using React by Prathmeh Jagtap"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.d4a0ca19.chunk.js.map