(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4369)}])},8:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var a=s(5893),n=s(9008),o=s.n(n);function i(e){let{title:t}=e;return(0,a.jsx)(o(),{children:(0,a.jsxs)("title",{children:[t," | NextMovies"]})})}},4369:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var a=s(5893),n=s(1857),o=s.n(n),i=s(7294),r=s(8),c=s(3454);let d=c.env.API_KEY;function x(){let[e,t]=(0,i.useState)([]);return(0,i.useEffect)(()=>{(async()=>{let{results:e}=await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(d,"&language=en-US&page=1"))).json();console.log(e),t(e)})()},[]),(0,a.jsxs)("div",{className:"jsx-43e8c26dcc3f9a00 container",children:[(0,a.jsx)(r.Z,{title:"Home"}),!e&&(0,a.jsx)("h4",{className:"jsx-43e8c26dcc3f9a00",children:"Loading.."}),null==e?void 0:e.map(e=>(0,a.jsxs)("div",{className:"jsx-43e8c26dcc3f9a00 movie",children:[(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),className:"jsx-43e8c26dcc3f9a00"}),(0,a.jsx)("h4",{className:"jsx-43e8c26dcc3f9a00",children:e.original_title})]},e.id)),(0,a.jsx)(o(),{id:"43e8c26dcc3f9a00",children:".container.jsx-43e8c26dcc3f9a00{display:grid;grid-template-columns:1fr 1fr;padding:20px;gap:20px}.movie.jsx-43e8c26dcc3f9a00 img.jsx-43e8c26dcc3f9a00{max-width:100%;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;-webkit-transition:-webkit-transform.2s ease-in-out;-moz-transition:-moz-transform.2s ease-in-out;-o-transition:-o-transform.2s ease-in-out;transition:-webkit-transform.2s ease-in-out;transition:-moz-transform.2s ease-in-out;transition:-o-transform.2s ease-in-out;transition:transform.2s ease-in-out;-webkit-box-shadow:rgba(0,0,0,.1)0px 4px 12px;-moz-box-shadow:rgba(0,0,0,.1)0px 4px 12px;box-shadow:rgba(0,0,0,.1)0px 4px 12px}.movie.jsx-43e8c26dcc3f9a00:hover img.jsx-43e8c26dcc3f9a00{-webkit-transform:scale(1.05)translatey(-10px);-moz-transform:scale(1.05)translatey(-10px);-ms-transform:scale(1.05)translatey(-10px);-o-transform:scale(1.05)translatey(-10px);transform:scale(1.05)translatey(-10px)}.movie.jsx-43e8c26dcc3f9a00 h4.jsx-43e8c26dcc3f9a00{font-size:18px;text-align:center}"})]})}console.log(d)},9008:function(e,t,s){e.exports=s(3121)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);