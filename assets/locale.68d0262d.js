var C=Object.defineProperty;var s=(e,a)=>C(e,"name",{value:a,configurable:!0});import{s as v,r as h,d as R,i as d,b as i,p as w}from"./vue.esm-bundler.80cafc0b.js";import{b as S,u as T}from"./proxiedModel.dbd4de1d.js";import{l as m}from"./helpers.32675158.js";const F={badge:"Badge",open:"Open",close:"Close",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},P="$vuetify.",b=s((e,a)=>e.replace(/\{(\d+)\}/g,(l,t)=>String(a[+t])),"replace"),L=s((e,a,l)=>function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),u=1;u<r;u++)n[u-1]=arguments[u];if(!t.startsWith(P))return b(t,n);const g=t.replace(P,""),N=e.value&&l.value[e.value],A=a.value&&l.value[a.value];let c=m(N,g,null);return c||(S(`Translation key "${t}" not found in "${e.value}", trying fallback locale`),c=m(A,g,null)),c||(c=t),typeof c!="string"&&(c=t),b(c,n)},"createTranslateFunction");function x(e,a){return(l,t)=>new Intl.NumberFormat([e.value,a.value],t).format(l)}s(x,"createNumberFunction");function o(e,a,l){var r,n;const t=T(e,a,(r=e[a])!=null?r:l.value);return t.value=(n=e[a])!=null?n:l.value,R(l,u=>{e[a]==null&&(t.value=l.value)}),t}s(o,"useProvided");function y(e){return a=>{const l=o(a,"locale",e.current),t=o(a,"fallback",e.fallback),r=o(a,"messages",e.messages);return{name:"vuetify",current:l,fallback:t,messages:r,t:L(l,t,r),n:x(l,t),provide:y({current:l,fallback:t,messages:r})}}}s(y,"createProvideFunction");function E(e){var r,n;const a=v((r=e==null?void 0:e.locale)!=null?r:"en"),l=v((n=e==null?void 0:e.fallback)!=null?n:"en"),t=h({en:F,...e==null?void 0:e.messages});return{name:"vuetify",current:a,fallback:l,messages:t,t:L(a,l,t),n:x(a,l),provide:y({current:a,fallback:l,messages:t})}}s(E,"createVuetifyAdapter");const f=Symbol.for("vuetify:locale");function k(e){return e.name!=null}s(k,"isLocaleInstance");function M(e){const a=(e==null?void 0:e.adapter)&&k(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:E(e),l=I(a,e);return{...a,...l}}s(M,"createLocale");function O(){const e=d(f);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}s(O,"useLocale");function B(e){const a=d(f);if(!a)throw new Error("[Vuetify] Could not find injected locale instance");const l=a.provide(e),t=j(l,a.rtl,e),r={...l,...t};return w(f,r),r}s(B,"provideLocale");function p(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}s(p,"genDefaults");function I(e,a){var r;const l=h((r=a==null?void 0:a.rtl)!=null?r:p()),t=i(()=>{var n;return(n=l.value[e.current.value])!=null?n:!1});return{isRtl:t,rtl:l,rtlClasses:i(()=>`v-locale--is-${t.value?"rtl":"ltr"}`)}}s(I,"createRtl");function j(e,a,l){const t=i(()=>{var r,n;return(n=(r=l.rtl)!=null?r:a.value[e.current.value])!=null?n:!1});return{isRtl:t,rtl:a,rtlClasses:i(()=>`v-locale--is-${t.value?"rtl":"ltr"}`)}}s(j,"provideRtl");function G(){const e=d(f);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}s(G,"useRtl");export{f as L,O as a,M as c,F as e,B as p,G as u};
//# sourceMappingURL=locale.68d0262d.js.map
