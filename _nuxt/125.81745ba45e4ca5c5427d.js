(window.webpackJsonp=window.webpackJsonp||[]).push([[125,12,72],{415:function(t,e,n){var content=n(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("905bdcd6",content,!0,{sourceMap:!1})},435:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(89),l=o.default.extend({components:{AppLink:r.default},props:{url:{type:String,default:""}}}),c=(n(442),n(10)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("app-link",{attrs:{to:t.url}},[t._v("\n  "+t._s(t.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);e.default=component.exports},442:function(t,e,n){"use strict";n(415)},443:function(t,e,n){var o=n(32)(!1);o.push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=o},459:function(t,e,n){"use strict";n(23),n(28),n(36),n(38);var o=n(7),r=(n(100),n(26),n(35),n(70),n(275),n(21),n(39),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(40),n(47),n(12),n(71),n(289),n(0)),l=n(182),c=n(19);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=f.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),x=f.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(x)};function w(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var $=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:_(_(_(_({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var _=$.get(c);return _||function(){var t,e;for(e in _=[],y)y[e].forEach((function(t){var o=n[t],r=w(e,t,o);r&&_.push(r)}));var r=_.some((function(t){return t.startsWith("col-")}));_.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),$.set(c,_)}(),t(n.tag,Object(l.a)(data,{class:_}),r)}})},482:function(t,e,n){var content=n(544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("02d82e73",content,!0,{sourceMap:!1})},508:function(t,e,n){var content=n(626);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("b4e0088e",content,!0,{sourceMap:!1})},543:function(t,e,n){"use strict";var o=n(482),r=n.n(o);n.d(e,"default",(function(){return r.a}))},544:function(t,e,n){var o=n(32)(!1);o.push([t.i,'.container_2hmo8{width:100%;color:#008830;line-height:1.35;padding-left:0!important}.container_2hmo8,.container_2hmo8 *{box-sizing:border-box}.container_2hmo8 ul{padding-left:0}.group_3mJCR{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #008830;border-left:3px solid #008830}.content_35l4H{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #008830}.content_35l4H>span{display:block;font-size:1.4rem}.content_35l4H>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_35l4H>span:last-child{margin-left:10px;text-align:right;flex-shrink:1}.content_35l4H>span:not(:last-child){word-wrap:break-word}.content_35l4H strong{font-size:1.6rem}.content_35l4H span.unit_2ui9T{font-size:1.4rem}.box_2WL3b{display:block;margin-top:3px}.box_2WL3b.parent_1xU_7{border-top:3px solid #008830;border-left:3px solid #008830;position:relative;padding-left:29px}.box_2WL3b.parent_1xU_7:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #008830}.box_2WL3b.parent_1xU_7>.content_35l4H{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_3mJCR{padding-left:.238vw!important;border-top:.238vw solid #008830;border-left:.238vw solid #008830}.content_35l4H{padding:.396vw .792vw;border:.238vw solid #008830}.content_35l4H>span{font-size:1.4rem}.content_35l4H>span:first-child{margin-top:.08vw}.content_35l4H>span:last-child{margin-left:10px}.content_35l4H strong{font-size:1.6rem}.content_35l4H span.unit_2ui9T{font-size:1.4rem}.box_2WL3b{margin-top:.238vw}.box_2WL3b.parent_1xU_7{border-top:.238vw solid #008830;border-left:.238vw solid #008830;padding-left:2.296vw}.box_2WL3b.parent_1xU_7:after{width:2.534vw;border-bottom:.238vw solid #008830}.box_2WL3b.parent_1xU_7>.content_35l4H{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_3mJCR{padding-left:.313vw!important;border-top:.313vw solid #008830;border-left:.313vw solid #008830}.content_35l4H{padding:.521vw 1.042vw;border:.313vw solid #008830}.content_35l4H>span{font-size:1.4rem}.content_35l4H>span:first-child{margin-top:.105vw}.content_35l4H>span:last-child{margin-left:10px}.content_35l4H strong{font-size:1.6rem}.content_35l4H span.unit_2ui9T{font-size:1.4rem}.box_2WL3b{margin-top:.313vw}.box_2WL3b.parent_1xU_7{border-top:.313vw solid #008830;border-left:.313vw solid #008830;padding-left:3.02vw}.box_2WL3b.parent_1xU_7:after{width:3.334vw;border-bottom:.313vw solid #008830}.box_2WL3b.parent_1xU_7>.content_35l4H{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_3mJCR{padding-left:.5vw!important;border-top:.5vw solid #008830;border-left:.5vw solid #008830}.content_35l4H{padding:.834vw 1.667vw;border:.5vw solid #008830}.content_35l4H>span{font-size:1.4rem}.content_35l4H>span:first-child{margin-top:.167vw}.content_35l4H>span:last-child{margin-left:10px}.content_35l4H strong{font-size:1.6rem}.content_35l4H span.unit_2ui9T{font-size:1.4rem}.box_2WL3b{margin-top:.5vw}.box_2WL3b.parent_1xU_7{border-top:.5vw solid #008830;border-left:.5vw solid #008830;padding-left:4.834vw}.box_2WL3b.parent_1xU_7:after{width:5.334vw;border-bottom:.5vw solid #008830}.box_2WL3b.parent_1xU_7>.content_35l4H{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_2hmo8",group:"group_3mJCR",content:"content_35l4H",unit:"unit_2ui9T",box:"box_2WL3b",parent:"parent_1xU_7"},t.exports=o},595:function(t,e,n){"use strict";n.r(e);n(100);var o=n(0).default.extend({props:{"陽性者数":{type:Number,required:!0},"入院中":{type:Number,required:!0},"軽症中等症":{type:Number,required:!0},"重症":{type:Number,required:!0},"宿泊療養":{type:Number,required:!0},"自宅療養":{type:Number,required:!0},"調査中":{type:Number,required:!0},"死亡":{type:Number,required:!0},"退院":{type:Number,required:!0}}}),r=n(543),l=n(10);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(" "+t._s(t.$t("陽性者数"))+" ("+t._s(t.$t("累計"))+") ")]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.陽性者数.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("入院")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.入院中.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",{domProps:{innerHTML:t._s(t.$t("軽症・中等症"))}}),t._v(" "),n("span",[n("strong",[t._v(t._s(t.軽症中等症.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("重症")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.重症.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("宿泊療養")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.宿泊療養.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("自宅療養")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.自宅療養.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("入院・療養等調整中")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.調査中.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("死亡")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.死亡.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("退院等（療養期間経過を含む）")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.退院.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},625:function(t,e,n){"use strict";var o=n(508),r=n.n(o);n.d(e,"default",(function(){return r.a}))},626:function(t,e,n){var o=n(32)(!1);o.push([t.i,".button_3b8pi{margin:20px 0 0;color:#008830!important;text-decoration:none;padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.button_3b8pi:hover{color:#fff!important;background-color:#008830;color:#fff}.button_3b8pi:hover>i{color:#fff!important}",""]),o.locals={button:"button_3b8pi"},t.exports=o},701:function(t,e,n){"use strict";n.r(e);var o=n(25),r=n.n(o),l=n(89),c=n(417),d=n(435),_=n(595),f=n(117);n(12);function v(data,t){var e;return function n(data){e||(data.attr===t?e=data.value:data.children&&data.children.forEach((function(t){e||n(t)})))}(data),e||0}var m={components:{DataView:c.default,ConfirmedCasesDetailsTable:_.default,AppLink:l.default,OpenDataLink:d.default},data:function(){var t=f.main_summary,e=function(data){return{"陽性者数":v(data,"陽性患者数"),"入院中":v(data,"入院中"),"軽症中等症":v(data,"軽症・中等症"),"重症":v(data,"重症"),"宿泊療養":v(data,"宿泊療養"),"自宅療養":v(data,"自宅療養"),"調査中":v(data,"調査中"),"死亡":v(data,"死亡"),"退院":v(data,"退院")}}(t);return{confirmedCases:e,date:r()(t.children[0].date).format("YYYY/MM/DD HH:mm")}}},x=n(625),y=n(10),w=n(60),$=n.n(w),h=n(459);var component=Object(y.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard ConfirmedCasesDetailsCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("検査陽性者の状況"),"title-id":"details-of-confirmed-cases",date:t.date},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[t._v("\n            "+t._s(t.$t("チャーター機帰国者、クルーズ船乗客等は含まれていない"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("「重症」は、人工呼吸器管理（ECMOを含む）が必要な患者数を計上。"))+"\n            "),n("app-link",{attrs:{to:"https://www.bousai.metro.tokyo.lg.jp/_res/projects/default_project/_page_/001/011/435/7kai/202008207.pdf"}},[t._v("\n              "+t._s(t.$t("重症基準の考え方はこちら"))+"\n            ")])],1),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("「入院・療養等調整中」は、当日の新規陽性者及び前日までの陽性者のうち、入院・宿泊療養・自宅療養の調整中や保健所間の移管手続中の陽性者等の人数"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("退院者数の把握には一定の期間を要しており、確認次第数値を更新している"))+"\n          ")])])]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{attrs:{url:"https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000089"}})]},proxy:!0}])},[t._v(" "),n("confirmed-cases-details-table",t._b({attrs:{"aria-label":t.$t("検査陽性者の状況")}},"confirmed-cases-details-table",t.confirmedCases,!1)),t._v(" "),n("div",[n("app-link",{class:t.$style.button,attrs:{to:("ja"!==t.$i18n.locale?t.$i18n.locale:"")+"/cards/deaths-by-death-date"}},[t._v("\n          "+t._s(t.$t("死亡日別による死亡者数の推移はこちら"))+"\n        ")])],1)],1)],1)],1)}),[],!1,(function(t){this.$style=x.default.locals||x.default}),null,null);e.default=component.exports;$()(component,{VCol:h.a})}}]);