(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{442:function(t,e,o){var content=o(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(46).default)("d3c7a3be",content,!0,{sourceMap:!1})},443:function(t,e,o){var content=o(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(46).default)("c3e415e2",content,!0,{sourceMap:!1})},445:function(t,e,o){var content=o(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(46).default)("bc739952",content,!0,{sourceMap:!1})},451:function(t,e,o){"use strict";o.r(e);var n=o(61),r=o(0),l=o(107),c=o(460),d=o(459),h=o(444),f=o(171),v=r.default.extend({components:{ExpantionPanel:c.default,Share:d.default,AppLink:l.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""},isSetTitleRow:{type:Boolean,default:!1}},data:function(){return{mdiChevronRight:n.e,isAdditionalDescriptionExpanded:!!this.$route.params.card,isAlreadyShowingDescription:!0}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.formattedDateForDisplay},{hid:"og:description",property:"og:description",content:this.formattedDateForDisplay}]}:{}},computed:{formattedDate:function(){return Object(f.c)(this.date)},formattedDateForDisplay:function(){return""!==this.date?this.$d(new Date(this.date),"dateTime"):""},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}},mounted:function(){var t=this.$refs.Description;this.isAlreadyShowingDescription=t.clientHeight<=70},methods:{toggleDescription:function(){this.isAdditionalDescriptionExpanded=!this.isAdditionalDescriptionExpanded,h.a.$emit(h.b,{dataView:this.$el,item:"description"})}}}),m=(o(461),o(16)),x=o(73),w=o.n(x),_=(o(37),o(32),o(40),o(3),o(41),o(10),o(42),o(52),o(18),o(19),o(20),o(56),o(11)),D=(o(118),o(487),o(488),o(463),o(480)),y=o(489),C=o(481),V=o(106);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var B=Object(V.a)(y.a,C.a,D.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return k(k({"v-card":!0},C.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},D.a.options.computed.classes.call(this))},styles:function(){var style=k({},D.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=y.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),o=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(o,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}}),$=o(432),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"DataView"},[o("div",{staticClass:"DataView-Inner"},[o("div",{staticClass:"DataView-Header",class:{"with-dataSetPanel":!!t.$slots.dataSetPanel,"title-row":t.isSetTitleRow}},[o("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":t.$slots.dataSetPanel?"with-dataSetPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.$slots.infoPanel?o("div",{staticClass:"DataView-InfoPanel"},[t._t("infoPanel")],2):t._e(),t._v(" "),t.$slots.dataSetPanel?o("div",{staticClass:"DataView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),t.$slots.attentionNote?o("div",{staticClass:"DataView-AttentionNote"},[t._t("attentionNote")],2):t._e(),t._v(" "),t.$slots.description?o("div",{staticClass:"DataView-Description"},[t._t("description")],2):t._e(),t._v(" "),o("div",[t._t("button")],2),t._v(" "),o("div",{staticClass:"DataView-Content"},[t._t("default")],2),t._v(" "),o("div",{ref:"Description",staticClass:"DataView-Description",class:{"DataView-Description--Minimized-Additional":!t.isAdditionalDescriptionExpanded&&!t.isAlreadyShowingDescription},attrs:{id:t.titleId+"--description"}},[o("div",{staticClass:"DataView-Description--Inner"},[t._t("additionalDescription")],2),t._v(" "),!t.$slots.additionalDescription||t.$route.params.card||t.isAlreadyShowingDescription?t._e():o("button",{class:["DataView-Description--Toggle",t.isAdditionalDescriptionExpanded?"expand":""],attrs:{"aria-expanded":[!!t.isAdditionalDescriptionExpanded],"aria-controls":t.titleId+"--description"},on:{click:t.toggleDescription}},[o("span",{staticClass:"DataView-Description--Toggle__Icon"},[o("v-icon",{style:{transform:t.isAdditionalDescriptionExpanded?"rotate(-90deg)":"none"},attrs:{size:"2.4rem"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),t.isAdditionalDescriptionExpanded?o("span",{staticClass:"DataView-Description--Toggle__Text"},[t._v("\n          "+t._s(t.$t("注釈を折り畳む"))+"\n        ")]):o("span",{staticClass:"DataView-Description--Toggle__Text"},[t._v("\n          "+t._s(t.$t("注釈を全て表示"))+"\n        ")])])]),t._v(" "),t.$slots.dataTable?o("expantion-panel",{staticClass:"DataView-ExpantionPanel",attrs:{id:t.titleId}},[t._t("dataTable")],2):t._e(),t._v(" "),o("div",{staticClass:"DataView-Space"}),t._v(" "),o("div",{staticClass:"DataView-Footer"},[o("div",[t._t("footer"),t._v(" "),o("div",[o("app-link",{staticClass:"Permalink",attrs:{to:t.permalink}},[o("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.formattedDateForDisplay}))+"\n            ")])])],1)],2),t._v(" "),"true"!==t.$route.query.embed?o("share",{staticClass:"Footer-Right",attrs:{title:t.title,"title-id":t.titleId}}):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports;w()(component,{VCard:B,VIcon:$.a})},453:function(t,e,o){"use strict";o(442)},454:function(t,e,o){var n=o(45)(!1);n.push([t.i,".expansion-panel-text{color:#333;font-size:1.4rem}",""]),t.exports=n},455:function(t,e,o){"use strict";o(443)},456:function(t,e,o){var n=o(45)(!1);n.push([t.i,".DataView-Share-Opener{cursor:pointer;margin:-14px;padding:14px}.DataView-Share-Buttons{position:absolute;padding:8px;right:2rem;bottom:3em;width:260px;border:1px solid #d9d9d9;background:#fff!important;border-radius:8px;text-align:left;z-index:2;font-size:1.6rem}.DataView-Share-Buttons>*{padding:4px 0}.DataView-Share-Buttons .Share-Buttons-header{display:flex;justify-content:space-between;align-items:center;flex-direction:row-reverse}.DataView-Share-Buttons .Close-Button{color:#707070}.DataView-Share-Buttons .Close-Button button{border-radius:50%;border:1px solid #fff}.DataView-Share-Buttons .Close-Button button:focus{border:2px solid #1976d2;outline:none}.DataView-Share-Buttons .EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:1.2rem}.DataView-Share-Buttons .EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Share-Buttons .EmbedCode button{border-radius:50%;border:1px solid #eee}.DataView-Share-Buttons .EmbedCode button:focus{border:2px solid #1976d2;outline:none}.DataView-Share-Buttons .Button-list{display:flex;justify-content:space-between}.DataView-Share-Buttons .Button-item{flex:0 0 30%;border-width:1px;border-style:solid;border-radius:4px;margin:4px}.DataView-Share-Buttons .Button-item.line{border-color:#06c755}.DataView-Share-Buttons .Button-item.twitter{border-color:#1da1f2}.DataView-Share-Buttons .Button-item.facebook{border-color:#1877f2}.DataView-Share-Buttons .Button-item .Button{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:16px 8px 8px;height:100%}.DataView-Share-Buttons .Button-item .Button:focus{border:2px solid #1976d2;outline:none}.DataView-Share-Buttons .Button-item .Button-icon{width:32px}.DataView-Share-Buttons .Button-item .Button-text{display:block;line-height:1.2;margin-top:8px;font-size:1rem}.overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.overlay>.overlay-text{text-align:center;padding:2em;width:60%;background:#4d4d4d;border-radius:8px;color:#fff!important;font-size:1.6rem}",""]),t.exports=n},457:function(t,e,o){var content=o(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(46).default)("dc0628f2",content,!0,{sourceMap:!1})},458:function(t,e,o){var n=o(45)(!1);n.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}",""]),t.exports=n},459:function(t,e,o){"use strict";o.r(e);o(86),o(21);var n=o(61),r=o(0).default.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,mdiClipboardOutline:n.f,mdiClose:n.h}},computed:{graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'.concat(this.permalink(!0,!0),'" frameborder="0"></iframe>');return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1,this.$refs.shareOpener.focus()},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/".concat(this.titleId);return embed&&(e="".concat(e,"?embed=true")),e=this.localePath(e),t&&(e="".concat(location.protocol,"//").concat(location.host).concat(e)),e},twitter:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.title," / ").concat(this.$t("東京都")).concat(this.$t("新型コロナウイルス感染症")).concat(this.$t("対策サイト"),"&url=").concat(this.permalink(!0),"&hashtags=StopCovid19JP");window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u=".concat(this.permalink(!0));window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url=".concat(this.permalink(!0));window.open(t)}}}),l=r,c=(o(455),o(16)),d=o(73),h=o.n(d),f=o(432),v=o(11),m=(o(118),o(457),o(484)),x=o(136),w=o(483),_=o(485),D=o(486),y=o(209),C=o(29),V=o(59),S=o(106),k=Object(S.a)(x.a,w.a,_.a,D.a,y.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,o=!(this.bottom||this.left||this.top||this.right),n=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||o?r=n+e.width/2-content.width/2:(this.left||this.right)&&(r=n+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,o=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=o+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=o+e.height/2-content.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),!1===this.attach&&(n+=this.pageYOffset),"".concat(this.calcYOverflow(n),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(C.f)(this.maxWidth),minWidth:Object(C.f)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(C.r)(this,"activator",!0)&&Object(V.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=m.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===C.v.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(v.a)(t,this.contentClass,!0),Object(v.a)(t,"menuable__content__active",this.isActive),Object(v.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-tooltip",{attrs:{left:"","nudge-right":"20","nudge-bottom":"4"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("button",t._g({ref:"shareOpener",staticClass:"DataView-Share-Opener",attrs:{"aria-haspopup":"true","aria-expanded":""+t.displayShare},on:{click:t.toggleShareMenu}},n),[o("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])},[t._v(" "),o("span",[t._v(t._s(t.$t("情報をシェアする")))])]),t._v(" "),t.displayShare?o("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[o("div",{staticClass:"Share-Buttons-header"},[o("div",{staticClass:"Close-Button"},[o("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n          "+t._s(t.mdiClose)+"\n        ")])],1),t._v(" "),o("h4",[t._v(t._s(t.$t("情報をシェア")))])]),t._v(" "),o("section",[o("h5",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),o("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?o("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v(t._s(t.mdiClipboardOutline))]):t._e(),t._v("\n        "+t._s(t.graphEmbedValue)+"\n      ")],1)]),t._v(" "),o("section",[o("h5",[t._v(t._s(t.$t("SNSでシェア")))]),t._v(" "),o("ul",{staticClass:"Button-list"},[o("li",{staticClass:"Button-item line"},[o("button",{staticClass:"Button",attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[t._m(0),t._v(" "),o("span",{staticClass:"Button-text"},[t._v(t._s(t.$t("LINEで情報をシェア")))])])]),t._v(" "),o("li",{staticClass:"Button-item twitter"},[o("button",{staticClass:"Button",attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[t._m(1),t._v(" "),o("span",{staticClass:"Button-text"},[t._v(t._s(t.$t("Twitterで情報をシェア")))])])]),t._v(" "),o("li",{staticClass:"Button-item facebook"},[o("button",{staticClass:"Button",attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[t._m(2),t._v(" "),o("span",{staticClass:"Button-text"},[t._v(t._s(t.$t("facebookで情報をシェア")))])])])])])]):t._e(),t._v(" "),t.showOverlay?o("div",{staticClass:"overlay"},[o("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込み用コードをコピーしました"))+"\n    ")])]):t._e()],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("picture",[o("source",{staticClass:"Button-icon",attrs:{srcset:"/line-square.webp",type:"image/webp"}}),t._v(" "),o("img",{staticClass:"Button-icon",attrs:{src:"/line-square.png",alt:"LINE"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("picture",[o("source",{staticClass:"Button-icon",attrs:{srcset:"/twitter-square.webp",type:"image/webp"}}),t._v(" "),o("img",{staticClass:"Button-icon",attrs:{src:"/twitter-square.png",alt:"Twitter"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("picture",[o("source",{staticClass:"Button-icon",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),o("img",{staticClass:"Button-icon",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,null,null);e.default=component.exports;h()(component,{VIcon:f.a,VTooltip:k})},460:function(t,e,o){"use strict";o.r(e);var n=o(61),r=o(0),l=o(211),c=o(444),d=r.default.extend({components:{CustomExpansionPanel:l.default},props:{id:{type:String,required:!0}},data:function(){return{showDetails:!1,mdiChevronRight:n.e}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){c.a.$emit(c.b,{dataView:this.$parent.$el,item:"details"})}}}),h=(o(453),o(16)),f=o(73),v=o.n(f),m=o(432),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.showDetails?o("custom-expansion-panel",{attrs:{id:t.id},on:{click:t.toggleDetails},scopedSlots:t._u([{key:"icon",fn:function(){return[o("v-icon",{attrs:{size:"2.4rem"}},[t._v(t._s(t.mdiChevronRight))])]},proxy:!0},{key:"title",fn:function(){return[o("span",{staticClass:"expansion-panel-text"},[t._v(t._s(t.$t("テーブルを表示")))])]},proxy:!0},{key:"content",fn:function(){return[t._t("default")]},proxy:!0}],null,!0)}):[t._t("default")]],2)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VIcon:m.a})},461:function(t,e,o){"use strict";o(445)},462:function(t,e,o){var n=o(45)(!1);n.push([t.i,'.DataView{height:100%;background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.DataView-Header{display:flex;align-items:flex-start;flex-flow:column;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}.DataView-Header.title-row{justify-content:space-between;flex-flow:row}}@media screen and (min-width:1171px){.DataView-Header{justify-content:space-between;flex-flow:row;padding:0}.DataView-Header.with-dataSetPanel{flex-flow:column}}.DataView-Inner{display:flex;flex-flow:column;padding:22px;height:100%}.DataView-Title{width:100%;margin-bottom:10px;line-height:1.5;font-weight:400;color:#4d4d4d;font-size:2rem}.DataView-Title.with-dataSetPanel{margin-bottom:0}@media screen and (min-width:1171px){.DataView-Title{margin-bottom:0}.DataView-Title.with-infoPanel{flex:1 1 50%;margin-right:24px}}.DataView-Title span{display:inline-block}.DataView-InfoPanel{flex:1 1 50%}.DataView-DataSetPanel{flex:1 0 auto;width:100%}.DataView-Content{margin:16px 0}.DataView-Space{margin-top:10px}.DataView-Description{position:relative;margin:10px 0;color:#707070;font-size:1.2rem}.DataView-Description ol,.DataView-Description ul{list-style:disc inside;padding-left:1em}.DataView-Description ol li,.DataView-Description ul li{margin-left:1.5em;text-indent:-1.5em}.DataView-Description--Inner{padding:4px 4px 20px}.DataView-Description--Minimized-Additional{position:relative;height:100px;overflow:hidden}.DataView-Description--Minimized-Additional:after{position:absolute;z-index:1;bottom:0;content:"";display:block;width:100%;height:70px;background:linear-gradient(180deg,rgba(250,252,252,0) 0,#fff 80%)}.DataView-Description--Toggle{position:absolute;z-index:2;bottom:4px;left:50%;transform:translateX(-50%);display:inline-flex;align-items:center;border-radius:4px;padding:5px 8px;background-color:#707070;-ms-grid-row-align:center;align-self:center;cursor:pointer;outline-offset:2px}.DataView-Description--Toggle.expand{position:relative}.DataView-Description--Toggle__Icon{margin-left:-5px}.DataView-Description--Toggle__Icon .v-icon{color:#fff}.DataView-Description--Toggle__Text{color:#fff;font-size:1.4rem}.DataView-ExpantionPanel{margin-bottom:10px}.DataView-Footer{display:flex;justify-content:space-between;margin-top:auto;color:#707070;font-size:1.2rem}.DataView-Footer ol,.DataView-Footer ul{list-style-type:none;padding:0}.DataView-Footer .Permalink{color:#707070!important}.DataView-Footer .Footer-Right{display:flex;align-items:flex-end}.DataView-AttentionNote{margin:10px 0;padding:12px;background-color:#ffdb1d;border-radius:4px;color:#4d4d4d;font-size:1.2rem}.DataView-AttentionNote p{margin:0}',""]),t.exports=n},463:function(t,e,o){var content=o(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(46).default)("e23b7040",content,!0,{sourceMap:!1})},464:function(t,e,o){var n=o(45)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n}}]);