(window.webpackJsonp=window.webpackJsonp||[]).push([[5,75,76,77,78],{459:function(t,e,n){"use strict";n(23),n(28),n(36),n(38);var o=n(7),r=(n(100),n(26),n(35),n(70),n(275),n(21),n(39),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(40),n(47),n(12),n(71),n(289),n(0)),l=n(182),c=n(19);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],m=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),w=h.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),x=h.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),v={col:Object.keys(m),offset:Object.keys(w),order:Object.keys(x)};function y(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var W=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},w),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=W.get(c);return f||function(){var t,e;for(e in f=[],v)v[e].forEach((function(t){var o=n[t],r=y(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),W.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},535:function(t,e,n){"use strict";var o=n(10),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._g({staticClass:"vaccine_svg__svg-inline--fa vaccine_svg__fa-syringe vaccine_svg__fa-w-16",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},t.$listeners),[n("path",{attrs:{fill:"currentColor",d:"M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"}})])}),[],!1,null,null,null);e.a=component.exports},536:function(t,e,n){var content=n(621);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("5a537a67",content,!0,{sourceMap:!1})},620:function(t,e,n){"use strict";n(536)},621:function(t,e,n){var o=n(32)(!1);o.push([t.i,".StaticInfo{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;font-size:1.2rem}.StaticInfo-Text{white-space:pre-wrap;font-size:1.2rem;font-weight:600;flex:1 0 50%;padding-right:16px}.StaticInfo-Button{flex:1 0 auto;text-align:right;display:inline-block}.StaticInfo-Button>a{text-decoration:none;color:#008830!important;padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.StaticInfo-Button>a:hover{background-color:#008830;color:#fff}.StaticInfo-Button>a:hover,.StaticInfo-Button>a:hover>i{color:#fff!important}@media screen and (max-width:600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=o},622:function(t,e,n){var content=n(675);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("432d621b",content,!0,{sourceMap:!1})},623:function(t,e,n){var content=n(677);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("6d3bb95b",content,!0,{sourceMap:!1})},624:function(t,e,n){var content=n(679);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("2aeac9dd",content,!0,{sourceMap:!1})},661:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(89),l=o.default.extend({components:{AppLink:r.default},props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}}}),c=(n(620),n(10)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"StaticInfo"},[n("h3",{staticClass:"StaticInfo-Text"},[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("app-link",{staticClass:"StaticInfo-Link",attrs:{to:t.url}},[t._v("\n      "+t._s(t.btnText)+"\n    ")])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},674:function(t,e,n){"use strict";n(622)},675:function(t,e,n){var o=n(32)(!1);o.push([t.i,".ConsultationWrap[data-v-9bc239a0]{display:flex;align-items:center;height:100%}.Consultation[data-v-9bc239a0]{height:100%;padding:3px 18px;min-height:5.5em}",""]),t.exports=o},676:function(t,e,n){"use strict";n(623)},677:function(t,e,n){var o=n(32)(!1);o.push([t.i,".StayingPopulation[data-v-583c8ccf]{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;display:flex;align-items:center;height:100%;padding:10px 20px;min-height:5em}.StayingPopulation .StayingPopulation-inner[data-v-583c8ccf]{flex:1}.StayingPopulation .StayingPopulation-title[data-v-583c8ccf]{display:flex;justify-content:space-between;font-size:1.9rem;color:#4d4d4d;font-weight:600}.StayingPopulation .StayingPopulation-title .StayingPopulation-heading[data-v-583c8ccf]{flex:1}.StayingPopulation .StayingPopulation-title .StayingPopulation-heading[data-v-583c8ccf],.StayingPopulation .StayingPopulation-title .StayingPopulation-link[data-v-583c8ccf]{font-size:1.2rem;font-weight:600}.StayingPopulation .StayingPopulation-box[data-v-583c8ccf]{display:flex;align-items:center}.StayingPopulation .StayingPopulation-box .StayingPopulation-place[data-v-583c8ccf]{padding:5px 10px;margin:0 5px 2px 0;background-color:#008830;color:#fff;vertical-align:middle;text-align:center;font-weight:600;font-size:1.2rem}.StayingPopulation .StayingPopulation-box .StayingPopulation-state[data-v-583c8ccf]{flex:1;padding:2px;margin:0 5px 2px;min-width:15em;color:#707070;font-size:1.1rem}",""]),t.exports=o},678:function(t,e,n){"use strict";n(624)},679:function(t,e,n){var o=n(32)(!1);o.push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:5px 18px;margin-bottom:10px}.WhatsNew .WhatsNew-heading{display:flex;align-items:center;flex-wrap:wrap;margin-bottom:8px}.WhatsNew .WhatsNew-heading .WhatsNew-title{display:flex;align-items:center;margin:8px 12px 8px 0;font-size:1.9rem;color:#4d4d4d;font-weight:600}.WhatsNew .WhatsNew-heading .WhatsNew-title-icon{margin:3px}.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;list-style:none;padding:0}@media screen and (max-width:768px){.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{justify-content:flex-start}}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton{margin:8px 12px 8px 0;padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton:hover{background-color:#008830;color:#fff}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton:hover>i{color:#fff!important}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-inner{display:inline-flex;align-items:center}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-icon{width:1em;height:1em;margin-right:4px}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-v-icon{color:currentColor;margin-right:4px;transition:none}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item{margin:0 5px;font-size:1.4rem}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item{display:flex;flex-wrap:wrap}}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor{flex:0 1 auto}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-anchor{padding-left:8px}}.WhatsNew .WhatsNew-list-item-anchor-link{font-size:1.4rem;color:#006ca8!important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}.WhatsNew .WhatsNew-list-item-anchor .ExternalLinkIcon{margin-left:2px;color:#707070!important}",""]),t.exports=o},703:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(785),l=n(786),c=n(787),d=o.default.extend({components:{WhatsNew:c.default,Consultation:r.default,StayingPopulation:l.default},computed:{newsItems:function(){return this.news.newsItems},news:function(){return this.$store.state.news}}}),f=n(10),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SiteTopUpper"},[n("whats-new",{attrs:{items:t.newsItems}}),t._v(" "),n("div",{staticClass:"row mb-4"},[n("staying-population"),t._v(" "),n("consultation")],1)],1)}),[],!1,null,null,null);e.default=component.exports},785:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(661),l=o.default.extend({components:{StaticInfo:r.default}}),c=(n(674),n(10)),d=n(60),f=n.n(d),h=n(459),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"ConsultationWrap"},[n("static-info",{staticClass:"Consultation",attrs:{url:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/index.html",text:t.$t("ワクチン情報・変異株情報・検査情報等の新型コロナ関連情報はこちら"),"btn-text":t.$t("新型コロナ保健医療情報ポータル")}})],1)])}),[],!1,null,"9bc239a0",null);e.default=component.exports;f()(component,{VCol:h.a})},786:function(t,e,n){"use strict";n.r(e);n(47),n(20),n(16);var o=n(45),r=n(0),l=n(89),c=r.default.extend({components:{AppLink:l.default},data:function(){return{mdiChevronRight:o.e}},computed:{date:function(){return this.$d(new Date(this.stayingPopulationData.date),"date")},enddate:function(){var t=new Date(this.stayingPopulationData.date);return t.setDate(t.getDate()+6),this.$d(t,"dateWithoutYear")},placeName:function(){var t=this.stayingPopulationData.place.display;return["ja","ja-basic","zh-cn","zh-tw"].includes(this.$i18n.locale)?t.ja:t.en},formattedData:function(){var t=this;return this.stayingPopulationDatasets.map((function(e){var n=e.referenceDate,o=e.increaseRate,r=t.$d(n,"dateWithoutDay"),l="0";0!==o&&(l="".concat(o>0?"↑":"↓").concat(Math.abs(o)," %"));return{formattedMonth:r,increaseRateWithArrow:l}}))},stayingPopulationDatasets:function(){return this.stayingPopulationData.data},stayingPopulationData:function(){return this.stayingPopulation.data},stayingPopulation:function(){return this.$store.state.stayingPopulation}}}),d=(n(676),n(10)),f=n(60),h=n.n(f),m=n(459),w=n(398),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"StayingPopulation"},[n("div",{staticClass:"StayingPopulation-inner"},[n("div",{staticClass:"StayingPopulation-title"},[n("h3",{staticClass:"StayingPopulation-heading"},[t._v("\n          "+t._s(t.$t("都内の滞在人口の増減状況（毎週月曜日更新）"))+"\n        ")]),t._v(" "),n("div",{staticClass:"StayingPopulation-link"},[n("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),n("app-link",{attrs:{to:"https://www.seisakukikaku.metro.tokyo.lg.jp/information/corona-people-flow-analysis.html#top"}},[t._v(t._s(t.$t("詳細はこちら"))+"\n          ")])],1)]),t._v(" "),n("div",{staticClass:"StayingPopulation-box"},[n("div",{staticClass:"StayingPopulation-place"},[t._v("\n          "+t._s(t.placeName)+"\n        ")]),t._v(" "),n("div",{staticClass:"StayingPopulation-state"},[t._v("\n          [ "+t._s(t.$t("{date}〜{enddate}",{date:t.date,enddate:t.enddate}))+" ]\n          "),t._l(t.formattedData,(function(e,o){return n("span",{key:o},[t._v("\n            "+t._s(t.$t("{month}比 {rateWithArrow}",{month:e.formattedMonth,rateWithArrow:e.increaseRateWithArrow}))+"\n          ")])}))],2)])])])])}),[],!1,null,"583c8ccf",null);e.default=component.exports;h()(component,{VCol:m.a,VIcon:w.a})},787:function(t,e,n){"use strict";n.r(e);var o=n(45),r=n(0),l=n(89),c=n(535),d=n(145),f=r.default.extend({components:{AppLink:l.default,VaccineIcon:c.a},props:{items:{type:Array,required:!0}},data:function(){return{mdiHomeAccount:o.j,mdiInformation:o.l}},methods:{formattedDate:function(t){return Object(d.a)(t)},formattedDateForDisplay:function(t){return this.$d(new Date(t),"date")}}}),h=(n(678),n(10)),m=n(60),w=n.n(m),x=n(398),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("div",{staticClass:"WhatsNew-heading"},[n("h3",{staticClass:"WhatsNew-title"},[n("v-icon",{staticClass:"WhatsNew-title-icon",attrs:{size:"2.4rem"}},[t._v("\n        "+t._s(t.mdiInformation)+"\n      ")]),t._v("\n      "+t._s(t.$t("最新のお知らせ"))+"\n    ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-linkGroup"},[n("li",[n("app-link",{staticClass:"WhatsNew-linkButton",attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronavaccine/index.html"}},[n("span",{staticClass:"WhatsNew-linkButton-inner"},[n("vaccine-icon",{staticClass:"WhatsNew-linkButton-icon",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t.$t("ワクチン情報"))+"\n          ")],1)])],1),t._v(" "),n("li",[n("app-link",{staticClass:"WhatsNew-linkButton",attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/shien/index.html"}},[n("span",{staticClass:"WhatsNew-linkButton-inner"},[n("v-icon",{staticClass:"WhatsNew-linkButton-v-icon",attrs:{size:"1.2em"}},[t._v("\n              "+t._s(t.mdiHomeAccount)+"\n            ")]),t._v("\n            "+t._s(t.$t("自宅での療養"))+"\n          ")],1)])],1)])]),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("span",{staticClass:"WhatsNew-list-item-time px-2"},[n("time",{attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(t.formattedDateForDisplay(e.date))+"\n        ")])]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor"},[n("app-link",{staticClass:"WhatsNew-list-item-anchor-link",attrs:{to:e.url}},[t._v("\n          "+t._s(e.text)+"\n        ")])],1)])})),0)])}),[],!1,null,null,null);e.default=component.exports;w()(component,{VIcon:x.a})}}]);