"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[568],{9198:function(e,n,t){t.d(n,{W:function(){return c}});var r=t(184),c=function(e){var n=e.children;return(0,r.jsx)("div",{children:n})}},9568:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(9439),c=t(2791),i=t(7689),a=t(7596),o=t(9198),s=t(2639),d=t(1087),u=t(184);function l(){var e=(0,i.TH)().state;return(null===e||void 0===e?void 0:e.from)&&(0,u.jsx)(d.rU,{to:e.from,children:(0,u.jsx)("button",{type:"button",children:(0,u.jsx)("span",{children:"\u2190 Go back"})})})}var h={};function v(e){var n,t=e.movie,r=t.id,c=t.poster_path,a=t.title,o=t.release_date,s=t.vote_average,l=t.overview,v=t.genres,m=10*s.toFixed(1),j=(0,i.TH)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:h["card__info--general"],children:[(0,u.jsx)("div",{className:h.img__wrapper,children:(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c),alt:a,width:250})}),(0,u.jsxs)("div",{className:h.details__wrapper,children:[(0,u.jsxs)("h2",{children:[(0,u.jsx)("span",{children:a}),(0,u.jsxs)("span",{children:["(",f(o),")"]})]}),(0,u.jsxs)("p",{children:[" User score: ",(n=m,Math.round(n))," %"]}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:l}),(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("p",{children:p(v)})]})]}),(0,u.jsxs)("div",{className:h["card__info--additional"],children:[(0,u.jsx)("h3",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(d.rU,{to:"/movies/".concat(r,"/cast"),state:j.state,children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(d.rU,{to:"/movies/".concat(r,"/reviews"),state:j.state,children:"Reviews"})})]})]})]})}function f(e){return new Date(e).getFullYear()}function p(e){return e.map((function(e){return e.name})).join(", ")}var m=t(8898);function j(){var e=(0,i.UO)().movieId,n=(0,c.useState)(),t=(0,r.Z)(n,2),d=t[0],h=t[1],f=(0,c.useState)(!1),p=(0,r.Z)(f,2),j=p[0],x=p[1],_=(0,c.useState)(null),g=(0,r.Z)(_,2),w=g[0],k=g[1];return(0,c.useEffect)((function(){x(!0);try{(0,m.BG)(e).then((function(e){var n=e.data,t=n.id,r=n.poster_path,c=n.title,i=n.release_date,a=n.vote_average,o=n.overview,s=n.genres;h({id:t,poster_path:r,title:c,release_date:i,vote_average:a,overview:o,genres:s})}))}catch(w){k(w)}finally{x(!1)}}),[e]),(0,u.jsxs)(u.Fragment,{children:[w&&a.Am.error("Whoops, something went wrong: ".concat(w.message)),(0,u.jsxs)(u.Fragment,{children:[j&&(0,u.jsx)(s.Z,{color:"#3f51b5",size:32}),(0,u.jsx)(l,{}),(0,u.jsx)(o.W,{children:d&&(0,u.jsx)(v,{movie:d})}),(0,u.jsx)(i.j3,{})]})]})}},8898:function(e,n,t){t.d(n,{y:function(){return l},vw:function(){return s},BG:function(){return u},oi:function(){return d},Bt:function(){return h}});var r=t(1912),c=function(e){return r.Z.get(e)},i={BASE_URL:"https://api.themoviedb.org/3",API_KEY:"4d0f1a70283628d770bc4f97516afca6",DEFAULT_LANGUAGE:"en-US"},a=i.BASE_URL,o=i.API_KEY,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return c("".concat(a,"/trending/movie/day?api_key=").concat(o,"&page=").concat(e))},d=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c("".concat(a,"/search/movie?api_key=").concat(o,"&page=").concat(n,"&query=").concat(e))},u=function(e){return c("".concat(a,"/movie/").concat(e,"?api_key=").concat(o))},l=function(e){return c("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(o))},h=function(e){return c("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(o))}}}]);
//# sourceMappingURL=568.0accead1.chunk.js.map