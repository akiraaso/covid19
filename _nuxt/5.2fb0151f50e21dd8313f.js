(window.webpackJsonp=window.webpackJsonp||[]).push([[5,75,76,77,78],{494:function(t,e,n){"use strict";n(32),n(40),n(41),n(42),n(52),n(56);var o=n(11),r=(n(3),n(118),n(37),n(27),n(87),n(306),n(53),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(54),n(63),n(18),n(10),n(19),n(20),n(207),n(208),n(88),n(321),n(0)),l=n(210),c=n(29);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],m=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),w=h.reduce((function(t,e){return t["offset"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),x=h.reduce((function(t,e){return t["order"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),v={col:Object.keys(m),offset:Object.keys(w),order:Object.keys(x)};function y(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var W=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},w),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=W.get(c);return f||function(){var t,e;for(e in f=[],v)v[e].forEach((function(t){var o=n[t],r=y(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),W.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},570:function(t,e,n){"use strict";var o=n(16),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._g({staticClass:"vaccine_svg__svg-inline--fa vaccine_svg__fa-syringe vaccine_svg__fa-w-16",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},t.$listeners),[n("path",{attrs:{fill:"currentColor",d:"M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"}})])}),[],!1,null,null,null);e.a=component.exports},571:function(t,e,n){var content=n(656);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("5a537a67",content,!0,{sourceMap:!1})},655:function(t,e,n){"use strict";n(571)},656:function(t,e,n){var o=n(45)(!1);o.push([t.i,".StaticInfo{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;font-size:1.2rem}.StaticInfo-Text{white-space:pre-wrap;font-size:1.2rem;font-weight:600;flex:1 0 50%;padding-right:16px}.StaticInfo-Button{flex:1 0 auto;text-align:right;display:inline-block}.StaticInfo-Button>a{text-decoration:none;color:#008830!important;padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.StaticInfo-Button>a:hover{background-color:#008830;color:#fff}.StaticInfo-Button>a:hover,.StaticInfo-Button>a:hover>i{color:#fff!important}@media screen and (max-width:600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=o},657:function(t,e,n){var content=n(710);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("4fd3097c",content,!0,{sourceMap:!1})},658:function(t,e,n){var content=n(712);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("d545b23e",content,!0,{sourceMap:!1})},659:function(t,e,n){var content=n(714);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("2aeac9dd",content,!0,{sourceMap:!1})},696:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(107),l=o.default.extend({components:{AppLink:r.default},props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}}}),c=(n(655),n(16)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"StaticInfo"},[n("h3",{staticClass:"StaticInfo-Text"},[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("app-link",{staticClass:"StaticInfo-Link",attrs:{to:t.url}},[t._v("\n      "+t._s(t.btnText)+"\n    ")])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},709:function(t,e,n){"use strict";n(657)},710:function(t,e,n){var o=n(45)(!1);o.push([t.i,".ConsultationWrap[data-v-98e62ae4]{display:flex;align-items:center;height:100%}.Consultation[data-v-98e62ae4]{height:100%;padding:3px 18px;min-height:5.5em}",""]),t.exports=o},711:function(t,e,n){"use strict";n(658)},712:function(t,e,n){var o=n(45)(!1);o.push([t.i,".StayingPopulation[data-v-55799de3]{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;display:flex;align-items:center;height:100%;padding:10px 20px;min-height:5em}.StayingPopulation .StayingPopulation-inner[data-v-55799de3]{flex:1}.StayingPopulation .StayingPopulation-title[data-v-55799de3]{display:flex;justify-content:space-between;font-size:1.9rem;color:#4d4d4d;font-weight:600}.StayingPopulation .StayingPopulation-title .StayingPopulation-heading[data-v-55799de3]{flex:1}.StayingPopulation .StayingPopulation-title .StayingPopulation-heading[data-v-55799de3],.StayingPopulation .StayingPopulation-title .StayingPopulation-link[data-v-55799de3]{font-size:1.2rem;font-weight:600}.StayingPopulation .StayingPopulation-box[data-v-55799de3]{display:flex;align-items:center}.StayingPopulation .StayingPopulation-box .StayingPopulation-place[data-v-55799de3]{padding:5px 10px;margin:0 5px 2px 0;background-color:#008830;color:#fff;vertical-align:middle;text-align:center;font-weight:600;font-size:1.2rem}.StayingPopulation .StayingPopulation-box .StayingPopulation-state[data-v-55799de3]{flex:1;padding:2px;margin:0 5px 2px;min-width:15em;color:#707070;font-size:1.1rem}",""]),t.exports=o},713:function(t,e,n){"use strict";n(659)},714:function(t,e,n){var o=n(45)(!1);o.push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:5px 18px;margin-bottom:10px}.WhatsNew .WhatsNew-heading{display:flex;align-items:center;flex-wrap:wrap;margin-bottom:8px}.WhatsNew .WhatsNew-heading .WhatsNew-title{display:flex;align-items:center;margin:8px 12px 8px 0;font-size:1.9rem;color:#4d4d4d;font-weight:600}.WhatsNew .WhatsNew-heading .WhatsNew-title-icon{margin:3px}.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;list-style:none;padding:0}@media screen and (max-width:768px){.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{justify-content:flex-start}}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton{margin:8px 12px 8px 0;padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton:hover{background-color:#008830;color:#fff}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton:hover>i{color:#fff!important}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-inner{display:inline-flex;align-items:center}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-icon{width:1em;height:1em;margin-right:4px}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-v-icon{color:currentColor;margin-right:4px;transition:none}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item{margin:0 5px;font-size:1.4rem}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item{display:flex;flex-wrap:wrap}}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor{flex:0 1 auto}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-anchor{padding-left:8px}}.WhatsNew .WhatsNew-list-item-anchor-link{font-size:1.4rem;color:#006ca8!important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}.WhatsNew .WhatsNew-list-item-anchor .ExternalLinkIcon{margin-left:2px;color:#707070!important}",""]),t.exports=o},738:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(821),l=n(822),c=n(823),d=o.default.extend({components:{WhatsNew:c.default,Consultation:r.default,StayingPopulation:l.default},computed:{newsItems:function(){return this.news.newsItems},news:function(){return this.$store.state.news}}}),f=n(16),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SiteTopUpper"},[n("whats-new",{attrs:{items:t.newsItems}}),t._v(" "),n("div",{staticClass:"row mb-4"},[n("staying-population"),t._v(" "),n("consultation")],1)],1)}),[],!1,null,null,null);e.default=component.exports},821:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(696),l=o.default.extend({components:{StaticInfo:r.default}}),c=(n(709),n(16)),d=n(73),f=n.n(d),h=n(494),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"ConsultationWrap"},[n("static-info",{staticClass:"Consultation",attrs:{url:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/index.html",text:t.$t("ワクチン情報・変異株情報・検査情報等の新型コロナ関連情報はこちら"),"btn-text":t.$t("新型コロナ保健医療情報ポータル")}})],1)])}),[],!1,null,"98e62ae4",null);e.default=component.exports;f()(component,{VCol:h.a})},822:function(t,e,n){"use strict";n.r(e);n(63),n(30),n(33),n(34),n(21);var o=n(61),r=n(0),l=n(107),c=r.default.extend({components:{AppLink:l.default},data:function(){return{mdiChevronRight:o.e}},computed:{date:function(){return this.$d(new Date(this.stayingPopulationData.date),"date")},enddate:function(){var t=new Date(this.stayingPopulationData.date);return t.setDate(t.getDate()+6),this.$d(t,"dateWithoutYear")},placeName:function(){var t=this.stayingPopulationData.place.display;return["ja","ja-basic","zh-cn","zh-tw"].includes(this.$i18n.locale)?t.ja:t.en},formattedData:function(){var t=this;return this.stayingPopulationDatasets.map((function(e){var n=e.referenceDate,o=e.increaseRate,r=t.$d(n,"dateWithoutDay"),l="0";0!==o&&(l="".concat(o>0?"↑":"↓").concat(Math.abs(o)," %"));return{formattedMonth:r,increaseRateWithArrow:l}}))},stayingPopulationDatasets:function(){return this.stayingPopulationData.data},stayingPopulationData:function(){return this.stayingPopulation.data},stayingPopulation:function(){return this.$store.state.stayingPopulation}}}),d=(n(711),n(16)),f=n(73),h=n.n(f),m=n(494),w=n(432),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"StayingPopulation"},[n("div",{staticClass:"StayingPopulation-inner"},[n("div",{staticClass:"StayingPopulation-title"},[n("h3",{staticClass:"StayingPopulation-heading"},[t._v("\n          "+t._s(t.$t("都内の滞在人口の増減状況（毎週月曜日更新）"))+"\n        ")]),t._v(" "),n("div",{staticClass:"StayingPopulation-link"},[n("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),n("app-link",{attrs:{to:"https://www.seisakukikaku.metro.tokyo.lg.jp/information/corona-people-flow-analysis.html#top"}},[t._v(t._s(t.$t("詳細はこちら"))+"\n          ")])],1)]),t._v(" "),n("div",{staticClass:"StayingPopulation-box"},[n("div",{staticClass:"StayingPopulation-place"},[t._v("\n          "+t._s(t.placeName)+"\n        ")]),t._v(" "),n("div",{staticClass:"StayingPopulation-state"},[t._v("\n          [ "+t._s(t.$t("{date}〜{enddate}",{date:t.date,enddate:t.enddate}))+" ]\n          "),t._l(t.formattedData,(function(e,o){return n("span",{key:o},[t._v("\n            "+t._s(t.$t("{month}比 {rateWithArrow}",{month:e.formattedMonth,rateWithArrow:e.increaseRateWithArrow}))+"\n          ")])}))],2)])])])])}),[],!1,null,"55799de3",null);e.default=component.exports;h()(component,{VCol:m.a,VIcon:w.a})},823:function(t,e,n){"use strict";n.r(e);var o=n(61),r=n(0),l=n(107),c=n(570),d=n(171),f=r.default.extend({components:{AppLink:l.default,VaccineIcon:c.a},props:{items:{type:Array,required:!0}},data:function(){return{mdiHomeAccount:o.j,mdiInformation:o.l}},methods:{formattedDate:function(t){return Object(d.a)(t)},formattedDateForDisplay:function(t){return this.$d(new Date(t),"date")}}}),h=(n(713),n(16)),m=n(73),w=n.n(m),x=n(432),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("div",{staticClass:"WhatsNew-heading"},[n("h3",{staticClass:"WhatsNew-title"},[n("v-icon",{staticClass:"WhatsNew-title-icon",attrs:{size:"2.4rem"}},[t._v("\n        "+t._s(t.mdiInformation)+"\n      ")]),t._v("\n      "+t._s(t.$t("最新のお知らせ"))+"\n    ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-linkGroup"},[n("li",[n("app-link",{staticClass:"WhatsNew-linkButton",attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronavaccine/index.html"}},[n("span",{staticClass:"WhatsNew-linkButton-inner"},[n("vaccine-icon",{staticClass:"WhatsNew-linkButton-icon",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t.$t("ワクチン情報"))+"\n          ")],1)])],1),t._v(" "),n("li",[n("app-link",{staticClass:"WhatsNew-linkButton",attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/shien/index.html"}},[n("span",{staticClass:"WhatsNew-linkButton-inner"},[n("v-icon",{staticClass:"WhatsNew-linkButton-v-icon",attrs:{size:"1.2em"}},[t._v("\n              "+t._s(t.mdiHomeAccount)+"\n            ")]),t._v("\n            "+t._s(t.$t("自宅での療養"))+"\n          ")],1)])],1)])]),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("span",{staticClass:"WhatsNew-list-item-time px-2"},[n("time",{attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(t.formattedDateForDisplay(e.date))+"\n        ")])]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor"},[n("app-link",{staticClass:"WhatsNew-list-item-anchor-link",attrs:{to:e.url}},[t._v("\n          "+t._s(e.text)+"\n        ")])],1)])})),0)])}),[],!1,null,null,null);e.default=component.exports;w()(component,{VIcon:x.a})}}]);