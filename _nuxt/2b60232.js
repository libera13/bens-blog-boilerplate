(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{231:function(t,e,n){var content=n(241);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("e309b01c",content,!0,{sourceMap:!1})},240:function(t,e,n){"use strict";n(231)},241:function(t,e,n){var o=n(20)(!1);o.push([t.i,'.blog-publish-date{margin-top:3rem}.blog-publish-date,.blog-title{font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}.blog-title{color:#2b3d4f;font-weight:700;font-size:3rem;margin-bottom:1rem}.content{margin-left:auto;margin-right:auto;padding-left:2rem;padding-right:2rem;max-width:740px}.nuxt-content h2{color:#2b3d4f;font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:700;margin-top:1.25rem;margin-bottom:1.25rem;padding-bottom:.75rem;border-bottom:1px solid #ebedf0;font-size:2.25rem;line-height:1.3}.nuxt-content li,.nuxt-content p{line-height:1.7;font-size:16px;font-family:"PT Serif",serif}@media screen and (min-width:600px){.nuxt-content li,.nuxt-content p{font-size:18px}}.nuxt-content p{margin-bottom:1rem}.nuxt-content ol,.nuxt-content ul{list-style-type:decimal;list-style-position:inside;margin-bottom:1rem}',""]),t.exports=o},259:function(t,e,n){"use strict";n.r(e);var o=n(2),r=(n(25),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog/".concat(t.params.slug)).fetch();case 2:return n=e.sent,e.abrupt("return",{page:n});case 4:case"end":return e.stop()}}),e)})))()},computed:{formatPublishDate:function(){return new Date(this.page.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}}}),l=(n(240),n(8)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("article",{staticClass:"content"},[n("p",{staticClass:"blog-publish-date"},[t._v(t._s(t.formatPublishDate))]),t._v(" "),n("h1",{staticClass:"blog-title"},[t._v(t._s(t.page.title))]),t._v(" "),n("nuxt-content",{attrs:{document:t.page}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);