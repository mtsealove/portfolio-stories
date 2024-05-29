(self.webpackChunkportfolio_2024=self.webpackChunkportfolio_2024||[]).push([[490],{"./src/stories/CareerSection.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CareerSection_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Container=__webpack_require__("./src/components/Container.tsx"),Title=__webpack_require__("./src/components/Title.tsx"),careers=__webpack_require__("./src/constants/careers.ts"),CareerItem=__webpack_require__("./src/components/CareerItem.tsx");function CareerSection(){return(0,jsx_runtime.jsxs)(Container.A,{backgroundColor:"bg-teal-400",id:"career",children:[(0,jsx_runtime.jsx)(Title.A,{className:"text-white",children:"Career"}),(0,jsx_runtime.jsx)("article",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:careers.A.map(((career,i)=>(0,jsx_runtime.jsx)(CareerItem.A,{career},"career ".concat(i))))})]})}const components_CareerSection=CareerSection;var _Default_parameters,_Default_parameters_docs,_Default_parameters1;CareerSection.__docgenInfo={description:"",methods:[],displayName:"CareerSection"};const CareerSection_stories={title:"Section/Career",component:components_CareerSection,tags:["autodocs"],args:{}},Default={};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/components/Card/CardBody.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const CardBody=props=>{const{children,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"p-5 md:p-7",...rest,children})},__WEBPACK_DEFAULT_EXPORT__=CardBody;CardBody.__docgenInfo={description:"",methods:[],displayName:"CardBody"}},"./src/components/Card/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const Card=props=>{const{children,className,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden ".concat(className),"aria-label":"card",...rest,children})},__WEBPACK_DEFAULT_EXPORT__=Card;Card.__docgenInfo={description:"",methods:[],displayName:"Card"}},"./src/components/CareerItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),dayjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__),_components_Card__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Card/index.tsx"),_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Card/CardBody.tsx"),next_image__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const CareerItem=param=>{let{career}=param;const{company,companyImg,items,role,startAt,endAt,roundIcon}=career,Date=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"text-sm mt-2 font-medium text-gray-500",children:[dayjs__WEBPACK_IMPORTED_MODULE_1___default()(startAt).format("YYYY.MM")," ~ ",endAt?dayjs__WEBPACK_IMPORTED_MODULE_1___default()(endAt).format("YYYY.MM"):"now"," (",endAt?dayjs__WEBPACK_IMPORTED_MODULE_1___default()(endAt).diff(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(startAt),"month"):dayjs__WEBPACK_IMPORTED_MODULE_1___default()().diff(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(startAt),"month")," mo.)"]}),Role=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"font-semibold text-lg text-gray-700 mb-2",children:["Role: ",role]}),CompanyInfo=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_4__.A,{src:"/logos/ic_".concat(companyImg),width:roundIcon?40:100,height:40,className:"h-10 max-h-10 ".concat(roundIcon&&"rounded-full"," object-contain"),alt:company}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{className:"text-xl font-semibold ml-3 text-gray-700",children:company})]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_3__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CompanyInfo,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Date,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Role,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex flex-col gap-y-2",children:items.map(((item,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ItemDetail,{item},"item ".concat(i))))})]})})},ItemDetail=param=>{let{item}=param;const{title,contents}=item;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"font-semibold text-gray-600 mb-2",children:title}),contents.map(((content,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-sm font-medium text-gray-600 mb-1.5",children:content},"content ".concat(i))))]})},__WEBPACK_DEFAULT_EXPORT__=CareerItem;CareerItem.__docgenInfo={description:"",methods:[],displayName:"CareerItem",props:{career:{required:!0,tsType:{name:"Career"},description:""}}}},"./src/components/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const Container=param=>{let{children,id,backgroundColor}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section",{className:"w-full px-4 py-10 sm:px-10 sm:py-16 ".concat(backgroundColor),id,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex flex-col mx-auto max-w-screen-lg",children})})},__WEBPACK_DEFAULT_EXPORT__=Container;Container.__docgenInfo={description:"가운데 정렬 및 크기 제한 컨테이너\n@param children\n@param id\n@param backgroundColor\n@constructor",methods:[],displayName:"Container",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const Title=props=>{const{children,className,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-2xl md:text-3xl font-bold mb-4 gray-800 ".concat(className),children})},__WEBPACK_DEFAULT_EXPORT__=Title;Title.__docgenInfo={description:"",methods:[],displayName:"Title"}},"./src/constants/careers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var dayjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);const __WEBPACK_DEFAULT_EXPORT__=[{company:"버스링커",companyImg:"buslinker.png",startAt:dayjs__WEBPACK_IMPORTED_MODULE_0___default()("2019-08-01").toDate(),endAt:dayjs__WEBPACK_IMPORTED_MODULE_0___default()("2020-06-01").toDate(),role:"안드로이드, 프론트엔드, 백엔드",items:[{title:"웹 개발",contents:["화물 운송 및 배차 API 개발(express)","화물 운송 및 배차 관리 백오피스 개발(ejs)"]},{title:"안드로이드 애플리케이션 개발",contents:["버스 승하차 플랫폼 개발(Java)","화물 운송관리 플랫폼 개발(Java)"]}]},{company:"브이아이펫",companyImg:"vipet.png",roundIcon:!0,startAt:dayjs__WEBPACK_IMPORTED_MODULE_0___default()("2020-06-01").toDate(),endAt:dayjs__WEBPACK_IMPORTED_MODULE_0___default()("2021-03-01").toDate(),role:"안드로이드, 프론트엔드, 백엔드",items:[{title:"웹 개발",contents:["반려동물 케어 예약 API 개발 (express)","반려동물 케어 예약 사이트 개발(ejs)","3D 모델링 사업 랜딩 페이지 개발(React)"]},{title:"안드로이드 개발",contents:["반려동움 케어 예약 애플리케이션 개발(Kotlin)","당뇨케어 애플리케이션 개발(React native)"]}]},{company:"파이퍼블릭",companyImg:"fipublic.svg",startAt:dayjs__WEBPACK_IMPORTED_MODULE_0___default()("2021-03-01").toDate(),endAt:dayjs__WEBPACK_IMPORTED_MODULE_0___default()("2022-07-15").toDate(),role:"프론트엔드, 모바일",items:[{title:"웹개발",contents:["리얼바이 공식 홈페이지 프론트 리뉴얼(React)","부동산 정보 블로그 프론트 개발(next.js)"]},{title:"모바일",contents:["부동산 투자 플랫폼 개발(React native, Swift, Kotlin)"]}]},{company:"긱블",companyImg:"geekble.jpg",roundIcon:!0,startAt:dayjs__WEBPACK_IMPORTED_MODULE_0___default()("2022-07-18").toDate(),endAt:dayjs__WEBPACK_IMPORTED_MODULE_0___default()("2024-02-16").toDate(),role:"프론트엔드 개발, 백엔드 개발, 백오피스 개발",items:[{title:"프론트엔드",contents:["긱블 공식 홈페이지 개발(next.js)","교육 플랫폼 긱블 에듀 개발(next.js)","폰트 소개 및 다운로드 사이트 개발(svelte)","벤츠X긱블 스템프 이벤트 페이지 개발(next.js)","이과생 짤메이커(캐릭터 꾸미기) 웹 사이트 개발"]},{title:"백오피스",contents:["이과생 짤메이커 백오피스 개발(react)","공식 홈페이지 백오피스 개발(next.js)","교욱 플랫폼 백오피스 개발(next.js, chakraui)"]},{title:"모바일",contents:["이과생 짤메이커 패키징 및 CRM 애플리케이션 개발(React native)","AI 조향 머신 인터렉션 애플리케이션 개발(Android)","클라이밍 정보 공유 서비스 행클 개발(React native)"]},{title:"백엔드",contents:["긱블 에듀 백엔드 개발(nest.js)","공식 홈페이지 백엔드 개발(nest.js)","AI 조향 머신 백엔드 개발"]},{title:"기타",contents:["사내 마니또 슬랙봇 개발","사내 HR 뉴스레터 슬랙봇 및 어드민 개발","사내 스크럼 작성 슬랙봇 개발","사내 IR, 발표 자료 제작용 워드클라우드 생성기 개발"]}]}].sort(((a,b)=>a.startAt>b.startAt?-1:b.startAt>a.startAt?1:0))},"./node_modules/dayjs/dayjs.min.js":function(module){module.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}()}}]);