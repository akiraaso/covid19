(window.webpackJsonp=window.webpackJsonp||[]).push([[95,79,80],{475:function(t,e,n){var content=n(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("140e3200",content,!0,{sourceMap:!1})},500:function(t,e,n){"use strict";n(475)},501:function(t,e,n){var r=n(32)(!1);r.push([t.i,".PageHeader[data-v-0f4a591c]{display:flex;align-items:flex-end;flex-wrap:wrap}@media screen and (max-width:600px){.PageHeader[data-v-0f4a591c]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-0f4a591c]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-0f4a591c]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-0f4a591c]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-0f4a591c]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-0f4a591c]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-0f4a591c]{font-size:1.2rem;color:#707070;margin:.2em 0 0 auto}",""]),t.exports=r},512:function(t,e,n){"use strict";n.r(e);var r=n(0),d=n(144),o=r.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(d.c)(t)}}}),c=(n(500),n(10)),l=n(59),f=n.n(l),m=n(398),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PageHeader mb-3"},[n("h2",{staticClass:"PageTitle"},[t.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),t.updatedAt?n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.updatedAt)}},[t._v(t._s(t.formatDate(t.updatedAtAsDate)))])]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈")))])])])}),[],!1,null,"0f4a591c",null);e.default=component.exports;f()(component,{VIcon:m.a})},518:function(t,e,n){var content=n(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("0ade608e",content,!0,{sourceMap:!1})},537:function(t,e,n){"use strict";n(518)},538:function(t,e,n){var r=n(32)(!1);r.push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;word-wrap:break-word}.StaticCard>:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:600}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:600}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:600}.StaticCard p{margin-bottom:0}.StaticCard ul{padding-left:24px}.StaticCard dd,.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard dd{margin-left:2em}@media screen and (max-width:768px){.StaticCard dd{margin-left:4.1666666667vw}}.StaticCard dd>:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard strong{border-bottom:2px solid #008830}.StaticCard a{font-size:1.4rem;color:#006ca8!important;text-decoration:none;font-size:inherit}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}.StaticCard-Note{display:flex}.StaticCard-Note>span{display:block}.StaticCard-Note>span:first-child{margin-right:.5em}",""]),t.exports=r},592:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend(),d=(n(537),n(10)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"StaticCard"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},961:function(t,e,n){"use strict";n.r(e);var r=n(0),d=n(89),o=n(512),c=n(592),l=r.default.extend({components:{PageHeader:o.default,StaticCard:c.default,AppLink:d.default},head:function(){return{title:this.$t("企業の皆様・はたらく皆様へ")}}}),f=n(10),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Worker"},[n("page-header",{attrs:{title:t.$t("企業の皆様・はたらく皆様へ")}}),t._v(" "),n("static-card",[n("h3",[n("app-link",{attrs:{to:"https://covid19.supportnavi.metro.tokyo.lg.jp/","icon-size":24}},[t._v(t._s(t.$t("東京都 新型コロナウイルス感染症 支援情報ナビ"))+"\n      ")])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("東京都及び国の新型コロナウイルス感染症に関する支援策の情報をまとめています。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[n("app-link",{attrs:{to:"https://www.sangyo-rodo.metro.tokyo.lg.jp/topics/jitan/index.html","icon-size":24}},[t._v(t._s(t.$t("東京都 感染拡大防止協力金"))+"\n      ")])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("新型コロナウイルス感染拡大防止のため、都の要請に全面的にご協力いただける事業者の皆様に対し、協力金を支給します。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[n("app-link",{attrs:{to:"https://smooth-biz.metro.tokyo.lg.jp/","icon-size":24}},[t._v(t._s(t.$t("新しいワークスタイルや企業活動の東京モデル「スムーズビズ」"))+"\n      ")])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("テレワーク・時差出勤などスムーズビズの取組は、新型コロナウイルス感染症の対策としても効果的です。感染症対策として、東京2020大会時の交通混雑緩和に向けた取組の前倒しをお願いします。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[n("app-link",{attrs:{to:"https://tokyo-telework.jp/lp/2002app/index.html","icon-size":24}},[t._v(t._s(t.$t("TOKYOテレワークアプリ"))+"\n      ")])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("テレワークの導入・実践に必要な情報を入手できるほか、セミナー等のお申込みやサテライトオフィス等の検索など、テレワークの推進を支援する東京都公式アプリです。"))+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);