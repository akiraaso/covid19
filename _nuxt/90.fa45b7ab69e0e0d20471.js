(window.webpackJsonp=window.webpackJsonp||[]).push([[90,62,79],{433:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=new(n(0).default),o="TOGGLE_TAB"},475:function(t,e,n){var content=n(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("140e3200",content,!0,{sourceMap:!1})},500:function(t,e,n){"use strict";n(475)},501:function(t,e,n){var r=n(32)(!1);r.push([t.i,".PageHeader[data-v-0f4a591c]{display:flex;align-items:flex-end;flex-wrap:wrap}@media screen and (max-width:600px){.PageHeader[data-v-0f4a591c]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-0f4a591c]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-0f4a591c]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-0f4a591c]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-0f4a591c]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-0f4a591c]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-0f4a591c]{font-size:1.2rem;color:#707070;margin:.2em 0 0 auto}",""]),t.exports=r},512:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(144),d=r.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(o.c)(t)}}}),c=(n(500),n(10)),l=n(59),f=n.n(l),m=n(398),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PageHeader mb-3"},[n("h2",{staticClass:"PageTitle"},[t.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),t.updatedAt?n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.updatedAt)}},[t._v(t._s(t.formatDate(t.updatedAtAsDate)))])]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈")))])])])}),[],!1,null,"0f4a591c",null);e.default=component.exports;f()(component,{VIcon:m.a})},519:function(t,e,n){var content=n(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("547eeb28",content,!0,{sourceMap:!1})},539:function(t,e,n){"use strict";n(519)},540:function(t,e,n){var r=n(32)(!1);r.push([t.i,".v-slide-group__content{border-bottom:1px solid #4d4d4d;background:#f8f9fa}.v-tabs{min-height:100vh}.v-tab{top:1px;margin:0 8px;border-style:solid;border-radius:4px 4px 0 0;font-weight:600!important;font-size:1.6rem!important}.v-tab:focus{outline:1px dotted #707070}.v-tab--active{color:#4d4d4d!important;background:#f8f9fa;border-color:#4d4d4d #4d4d4d #f8f9fa;border-width:1px 1px 2px}.v-tab--active:before{background-color:transparent}.v-tab .TabIcon{transition:none}.v-tab:not(.v-tab--active){color:#008830!important;background:#fff;border-color:#008830 #008830 #4d4d4d;border-width:1px}.v-tab:not(.v-tab--active):hover{color:#fff!important;background:#008830}.v-tab:not(.v-tab--active) .TabIcon{color:inherit!important}.v-tabs-items{background-color:transparent!important}@media screen and (max-width:900px){.v-slide-group__content,.v-tab{width:100%}.v-tab{font-size:1.8229166667vw!important;font-weight:400!important;flex:1 1 auto;padding:0 8px!important;margin:0 6px}}@media screen and (max-width:600px){.v-tab{padding:0 4px!important;margin:0 4px}.TabIcon,.v-tab{font-size:2.6666666667vw!important}.TabIcon .v-icon__svg{width:2.6666666667vw!important;height:2.6666666667vw!important}}",""]),t.exports=r},593:function(t,e,n){"use strict";n.r(e);n(21),n(38),n(41),n(43),n(12);var r=n(45),o=n(0),d=n(433),c=function(){return n.e(124).then(n.bind(null,940))},l=function(){return n.e(125).then(n.bind(null,941))},f=function(){return n.e(126).then(n.bind(null,942))},m=o.default.extend({components:{CardsFeatured:c,CardsMonitoring:l,CardsReference:f},data:function(){return{tab:null,items:[{label:this.$t("注目の指標"),component:c,path:"/"},{label:this.$t("モニタリング項目"),component:l,path:"/monitoring"},{label:this.$t("その他 参考指標"),component:f,path:"/reference"}],mdiChartTimelineVariant:r.c}},mounted:function(){var t=this;this.$nextTick().then((function(){var e=t.$refs.tabs;if(e){var n=e.$el;n.querySelectorAll("div")[0].removeAttribute("role");var r=n.querySelectorAll("a");Array.prototype.slice.call(r,0).forEach((function(t){t.removeAttribute("role"),t.removeAttribute("aria-selected")}))}}))},methods:{change:function(){d.a.$emit(d.b)}}}),v=(n(539),n(10)),h=n(59),x=n.n(h),_=n(398),w=n(946),T=n(965),A=n(964),P=n(943),$=n(462),y=n.n($),k=n(470),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tabs",{ref:"tabs",attrs:{"hide-slider":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t._l(t.items,(function(e,i){return n("v-tab",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],key:i,attrs:{id:"cardTab-"+i,to:{path:t.localePath(e.path)},nuxt:"",exact:""},on:{click:t.change}},[n("v-icon",{staticClass:"TabIcon"},[t._v(t._s(t.mdiChartTimelineVariant))]),t._v("\n    "+t._s(e.label)+"\n  ")],1)})),t._v(" "),n("v-tabs-items",{attrs:{touchless:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e,i){return n("v-tab-item",{key:i,attrs:{value:t.localePath(e.path)}},[n(e.component,{tag:"lazy-component"})],1)})),1)],2)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VIcon:_.a,VTab:w.a,VTabItem:T.a,VTabs:A.a,VTabsItems:P.a}),y()(component,{Ripple:k.a})},956:function(t,e,n){"use strict";n.r(e);var r=n(45),o=n(512),d=n(593),c=n(702),l={components:{CardsTab:d.default,PageHeader:o.default,SiteTopUpper:c.default},data:function(){return{headerItem:{iconPath:r.c,title:this.$t("都内の最新感染動向")}}},computed:{lastUpdateAsString:function(){return this.data.lastUpdate},data:function(){return this.$store.state.data}},head:function(){return{title:this.$t("都内の最新感染動向")}}},f=n(10),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-header",{attrs:{"icon-path":t.headerItem.iconPath,title:t.headerItem.title,"updated-at":t.lastUpdateAsString}}),t._v(" "),n("site-top-upper"),t._v(" "),n("cards-tab")],1)}),[],!1,null,null,null);e.default=component.exports}}]);