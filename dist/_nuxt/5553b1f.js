(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4,5,7],{304:function(t,e,n){"use strict";n.r(e);var l={methods:{goHome:function(){window.location.href="/"}}},r=n(50),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-[15px]"},[e("button",{staticClass:"w-full bg-blue-500 text-white py-2 px-4 rounded",on:{click:t.goHome}},[t._v("\n    TOP MÚSICA JAZZ\n  ")])])}),[],!1,null,null,null);e.default=component.exports},305:function(t,e,n){"use strict";n.r(e);var l=n(50),component=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"mt-[15px]"},[t("button",{staticClass:"w-full bg-blue-500 text-white py-2 px-4 rounded",attrs:{disabled:""}},[this._v("\n    © 2024 - Jazz Catalog by Jacksem y Caleb\n  ")])])}],!1,null,null,null);e.default=component.exports},315:function(t,e,n){"use strict";n.r(e);var l={name:"SongCard",props:{song:{type:String,required:!0}}},r=n(50),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"w-10 h-10 bg-blue-500 text-white flex-shrink-0 rounded-full flex items-center justify-center mr-4"},[e("svg",{staticClass:"w-6 h-6",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M9 4.804V13a2 2 0 11-2-2V5.204l7-1.75V11a2 2 0 11-2-2V3l-3 .75z"}})])]),t._v(" "),e("div",[e("h3",{staticClass:"text-lg font-semibold"},[t._v(t._s(t.song))])])])])}),[],!1,null,null,null);e.default=component.exports},365:function(t,e,n){"use strict";n.r(e);var l=n(12),r=(n(51),n(304)),o=n(305),c=n(315),d={components:{HeaderView:r.default,FooterView:o.default,SongCard:c.default},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,r,o,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,l=t.params,e.next=3,n("albums").where({id:parseInt(l.id)}).fetch();case 3:if((r=e.sent)&&0!==r.length){e.next=6;break}return e.abrupt("return",{album:null,artist:null});case 6:return o=r[0],e.next=9,n("artists").where({name:o.artist}).fetch();case 9:return c=e.sent,d=c.length>0?c[0]:null,e.abrupt("return",{album:o,artist:d});case 12:case"end":return e.stop()}}),e)})))()}},f=n(50),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"min-h-screen flex flex-col"},[e("HeaderView"),t._v(" "),e("main",{staticClass:"flex-grow container mx-auto px-4 py-6"},[t.album&&t.artist?e("div",[e("div",{staticClass:"flex flex-col md:flex-row items-center md:items-start"},[e("div",{staticClass:"w-full md:w-1/3"},[e("img",{staticClass:"rounded-lg shadow-lg object-cover w-full h-64 md:h-auto",attrs:{src:t.album.image,alt:"Portada de ".concat(t.album.title)}})]),t._v(" "),e("div",{staticClass:"w-full md:w-2/3 md:pl-8 mt-6 md:mt-0"},[e("h1",{staticClass:"text-4xl font-bold mb-4"},[t._v(t._s(t.album.title))]),t._v(" "),e("p",{staticClass:"text-gray-700 mb-2"},[e("strong",[t._v("Año de lanzamiento:")]),t._v(" "+t._s(t.album.release_year)+"\n          ")]),t._v(" "),e("p",{staticClass:"text-gray-700 mb-2"},[e("strong",[t._v("Artista:")]),t._v(" "),e("nuxt-link",{staticClass:"text-blue-500 hover:underline",attrs:{to:"/artists/".concat(t.artist.id)}},[t._v("\n              "+t._s(t.album.artist)+"\n            ")])],1),t._v(" "),e("h2",{staticClass:"text-2xl font-semibold mt-6 mb-4"},[t._v("Canciones")]),t._v(" "),e("div",{staticClass:"space-y-4"},t._l(t.album.songs,(function(t,n){return e("SongCard",{key:n,attrs:{song:t}})})),1)])])]):e("div",[e("p",{staticClass:"text-center text-gray-600"},[t._v("Álbum o artista no encontrado.")])])]),t._v(" "),e("FooterView")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderView:n(304).default,SongCard:n(315).default,FooterView:n(305).default})}}]);