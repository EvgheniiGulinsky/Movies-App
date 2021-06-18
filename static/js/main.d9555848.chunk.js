(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{108:function(e,t,n){},113:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var a=n(26),r=n.n(a),s=n(43),o=n(28),i=n(29),c=n(38),u=n(37),l=n(0),p=n.n(l),h=n(27),d=n.n(h),g=n(72),v=n.n(g),b=function(){function e(){Object(o.a)(this,e),this._ApiKey="384b86bc035ceb5247a1a9fc94fec8e0",this._ApiBase="https://api.themoviedb.org/3/search/movie?api_key=".concat(this._ApiKey,"&language=en-US"),this._PosterUrlBase="https://image.tmdb.org/t/p/original"}return Object(i.a)(e,[{key:"createGuestSession",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/authentication/guest_session/new?api_key=".concat(this._ApiKey));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Couldn't create a guest session ".concat(t.status));case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRatedMovies",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("sessionId"),e.next=3,fetch("https://api.themoviedb.org/3/guest_session/".concat(t,"/rated/movies?api_key=").concat(this._ApiKey,"&language=en-US&sort_by=created_at.asc"));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Couldn't fetch rated movies ".concat(n.status));case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMovies",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._ApiBase,"&query=").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Couldn't fetch ".concat(t,", received status ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"rateMovie",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n){var a,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("sessionId"),s=JSON.stringify({value:n}),e.next=4,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/rating?api_key=").concat(this._ApiKey,"&guest_session_id=").concat(a),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:s});case 4:return o=e.sent,e.next=7,o.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getGenres",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(this._ApiKey,"&language=en-US"));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Couldn't fetch genres, received status ".concat(t.status));case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),f=p.a.createContext(),m=f.Provider,j=f.Consumer,O=n(35),x=n(54),y=n(131),w=n(132),C=(n(71),n(137)),_=n(136),S=n(133),k=n(129),M=n(130);var P=function(e,t){if(e.length<t)return e;var n=(e.match(new RegExp(".{".concat(t,"}\\S*")))||[e])[0];return n+="..."},I=(n(108),n(11)),R=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).ApiClient=new b,e.state={updatedRating:null},e}return Object(i.a)(n,[{key:"onRatingUpdate",value:function(e){this.setState({updatedRating:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.id,r=t.overview,s=t.releaseDate,o=t.posterPath,i=t.genreIds,c=t.voteAverage,u=t.rating,l=t.onMovieRate,p=this.state.updatedRating;return Object(I.jsx)(j,{children:function(t){var h=[];return i.forEach((function(e){t.forEach((function(t){e===t.id&&h.push(t.name)}))})),Object(I.jsx)(C.a,{hoverable:!0,bodyStyle:{padding:"0"},children:Object(I.jsxs)("div",{className:"movie-card__content",children:[null===o?Object(I.jsx)("img",{className:"movie-card__poster",alt:"no poster",src:"../../assets/no_poster.jpg"}):Object(I.jsx)("img",{className:"movie-card__poster",alt:"movie poster",src:"https://image.tmdb.org/t/p/original"+o}),Object(I.jsxs)("div",{className:"movie-card__description",children:[Object(I.jsx)("p",{className:"title",children:n}),Object(I.jsx)("div",{className:c<3?"user-rating low":c<5?"user-rating average":c<7?"user-rating good":"user-rating excellent",children:c}),Object(I.jsx)("p",{className:"date",children:new Date(s)?"".concat(Object(S.a)(new Date(s),"MMMM")," ").concat(Object(k.a)(new Date(s)),", ").concat(Object(M.a)(new Date(s))):null}),Object(I.jsx)("div",{className:"genres",children:h.map((function(e){return Object(I.jsx)("div",{className:"genre",children:e},e)}))}),Object(I.jsx)("p",{className:"description",children:P(r,200)}),Object(I.jsx)(_.a,{className:"movie-rating",count:10,value:p||u,onChange:function(t){p!==t&&u!==t&&(e.onRatingUpdate(t),l(a,t))}})]})]})},a)}})}}]),n}(l.Component);R.defaultProps={title:"",id:0,overview:"",releaseDate:"",posterPath:"",voteAverage:0,rating:0,onMovieRate:function(){},genreIds:[]};var A=n(135),N=function(e){var t=e.onCloseHandle,n=e.message;return Object(I.jsx)(A.a,{message:"Error",description:n,type:"error",closable:!0,onClose:t})};N.defaultProps={message:"",onCloseHandle:function(){}};var E=N,H=(n(113),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={pageSize:6},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.movies,n=e.ratedMovies,a=e.loading,r=e.error,s=e.message,o=e.numberOfPages,i=e.numberOfRatedPages,c=e.onCloseHandle,u=e.tab,l=e.onMovieRate,p=e.page,h=e.onPageSwitch,d=this.state.pageSize,g={};n.forEach((function(e){g[e.id]=e.rating}));var v=t.map((function(e){return Object(I.jsx)(O.a,{xs:24,sm:12,className:"card-column",children:Object(I.jsx)(R,{title:e.title,id:e.id,overview:e.overview,releaseDate:e.release_date,posterPath:e.poster_path,genreIds:e.genre_ids,voteAverage:e.vote_average,rating:g[e.id]?g[e.id]:0,onMovieRate:l})},e.id)})),b=n.map((function(e){return Object(I.jsx)(O.a,{xs:24,sm:12,className:"card-column",children:Object(I.jsx)(R,{title:e.title,id:e.id,overview:e.overview,releaseDate:e.release_date,posterPath:e.poster_path,genreIds:e.genre_ids,voteAverage:e.vote_average,rating:e.rating,onMovieRate:l})},e.id)})),f=v.slice(p*d-d,p*d),m=b.slice(p*d-d,p*d),j=a||r||"1"!==u?null:Object(I.jsx)(x.a,{gutter:[16,16],children:f}),C=r?Object(I.jsx)(E,{onCloseHandle:c,message:s}):null,_=a||r||"2"!==u?null:Object(I.jsx)(x.a,{gutter:[16,16],children:m});return Object(I.jsxs)("div",{className:"movie-list",children:[Object(I.jsx)(y.a,{size:"large",wrapperClassName:"spin-loader",spinning:a,children:Object(I.jsxs)("div",{className:"site-card-wrapper",children:[C,j,_]})}),a||r?null:Object(I.jsx)(w.a,{className:"movie-pagination",defaultCurrent:1,total:"1"===u?o:i,pageSize:d,onChange:h})]})}}]),n}(l.Component));H.defaultProps={message:"",numberOfPages:1,page:1,tab:"1",numberOfRatedPages:[],onMovieRate:function(){},onCloseHandle:function(){},onPageSwitch:function(){},movies:[],ratedMovies:[],loading:!0,error:!1};var F=n(134),D=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onInputChange,n=e.searchInput,a=e.tab,r=F.a.Search;return"1"===a?Object(I.jsx)(r,{value:n,size:"large",onChange:function(e){t(e.target.value)}}):null}}]),n}(l.Component);D.defaultProps={onInputChange:function(){},searchInput:"",tab:"1"};var K=n(76),T=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=K.a.TabPane,t=this.props,n=t.onTabChange,a=t.tab;return Object(I.jsxs)(K.a,{defaultActiveKey:"1",activeKey:a,centered:!0,onChange:function(e){e!==a&&n(e)},children:[Object(I.jsx)(e,{tab:"Search"},"1"),Object(I.jsx)(e,{tab:"Rated"},"2")]})}}]),n}(l.Component);T.defaultProps={onTabChange:function(){},tab:"1"};n(124);var U=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).ApiClient=new b,e.state={movies:[],ratedMovies:[],numberOfPages:1,numberOfRatedPages:1,loading:!0,error:!1,message:"",searchInput:"return",tab:"1",page:1,genres:[]},e.moviesFetch=v()((function(){e.setState({loading:!0}),""!==e.state.searchInput?e.ApiClient.getMovies(e.state.searchInput).then((function(t){0!==t.results.length?e.setState({movies:t.results,numberOfPages:t.results.length,loading:!1,error:!1}):(e.setState({message:"No results"}),e.onErrorHandle())})).catch(e.onErrorHandle):e.onInputChange("return")}),700),e.onErrorHandle=function(t){e.setState({error:!0,loading:!1,message:t})},e.onCloseHandle=function(){0!==e.state.movies.length?e.setState({error:!1,page:1,tab:"1"}):(e.setState({error:!1,page:1,searchInput:"return",tab:"1"}),e.moviesFetch())},e.onInputChange=function(t){e.setState({searchInput:t}),e.moviesFetch()},e.onTabChange=function(t){e.setState({tab:t}),0===e.state.ratedMovies.length&&"2"===t?e.onErrorHandle("You didnt rate any movies yet"):(e.setState({loading:!0,page:1}),e.ratedMoviesFetch(),"1"===t&&e.moviesFetch())},e.onPageSwitch=function(t){e.ratedMoviesFetch(),e.setState({page:t})},e.onMovieRate=v()((function(t,n){e.ApiClient.rateMovie(t,n)}),500),e.ratedMoviesFetch=Object(s.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.ApiClient.getRatedMovies().then((function(t){0!==t.results.length&&e.setState({ratedMovies:t.results,numberOfRatedPages:t.results.length,loading:!1})})).catch(e.onErrorHandle);case 2:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){null===localStorage.getItem("sessionId")?e.ApiClient.createGuestSession().then((function(e){localStorage.setItem("sessionId",e.guest_session_id)})).then((function(){return e.ratedMoviesFetch()})).then((function(){return e.moviesFetch()})):(e.ratedMoviesFetch(),e.moviesFetch()),e.ApiClient.getGenres().then((function(t){e.setState({genres:t.genres})}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movies,n=e.ratedMovies,a=e.loading,r=e.error,s=e.numberOfPages,o=e.numberOfRatedPages,i=e.message,c=e.searchInput,u=e.tab,l=e.page,p=e.genres;return Object(I.jsx)("div",{className:"app",children:Object(I.jsxs)(m,{value:p,children:[Object(I.jsx)(T,{onTabChange:this.onTabChange,tab:u}),Object(I.jsx)(D,{onInputChange:this.onInputChange,searchInput:c,tab:u}),Object(I.jsx)(H,{movies:t,ratedMovies:n,loading:a,error:r,message:i,numberOfPages:s,numberOfRatedPages:o,onCloseHandle:this.onCloseHandle,tab:u,onMovieRate:this.onMovieRate,page:l,onPageSwitch:this.onPageSwitch})]})})}}]),n}(l.Component);d.a.render(Object(I.jsx)(U,{}),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.d9555848.chunk.js.map