"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[9663],{8201:(e,t,o)=>{o.d(t,{l:()=>u});var n=o(53587),i=o(97121),a=o(94937),r=o(9147);const l={freezeOnceVisible:!0,root:null,rootMargin:"0px",threshold:.35},d="cubic-bezier(0, 0, 0, 1)",c={"@keyframes fadeFromBottom":{from:{animationTimingFunction:d,opacity:0,transform:"translateY(100px)"},to:{opacity:1,transform:"translateY(0px)"}},"@keyframes fadeFromLeft":{from:{animationTimingFunction:d,opacity:0,transform:"translateX(-100px)"},to:{opacity:1,transform:"translateX(0px)"}},"@keyframes fadeFromRight":{from:{animationTimingFunction:d,opacity:0,transform:"translateX(100px)"},to:{opacity:1,transform:"translateX(0px)"}},"@keyframes fadeFromTop":{from:{animationTimingFunction:d,opacity:0,transform:"translateY(-100px)"},to:{opacity:1,transform:"translateY(0px)"}},"@keyframes fadeIn":{from:{animationTimingFunction:d,opacity:0},to:{opacity:1}}},s=["mobile","tablet","desktop"];var m=o(7392);const u=e=>{const{target:t,animations:o,children:d,...u}=e,g=(0,n.useRef)(null),h=function(e,t){let{threshold:o=0,root:i=null,rootMargin:a="0%",freezeOnceVisible:r=!1}=t;const[l,d]=(0,n.useState)(),c=(null==l?void 0:l.isIntersecting)&&r,s=e=>{let[t]=e;d(t)};return(0,n.useEffect)((()=>{const t=null==e?void 0:e.current;if(!window.IntersectionObserver||c||!t)return;const n=new IntersectionObserver(s,{root:i,rootMargin:a,threshold:o});return n.observe(t),()=>n.disconnect()}),[null==e?void 0:e.current,JSON.stringify(o),i,a,c]),l}(g,{...l}),[,p]=(0,i.hQ)(),{mediaQuery:y}=p,f=(0,r.a)(y.small,{defaultMatches:y.small}),v=(0,r.a)(y.medium),b=(0,r.a)(y.large),x=v&&!b,S=f&&!v,T=null==h?void 0:h.isIntersecting,L=s.map((e=>{var n;const i=null==o||null===(n=o[e])||void 0===n?void 0:n.filter((e=>e[0]===t));if(i&&(null==i?void 0:i.length)>0){var a,r;const e=i.length-1,t=null===(a=i[e])||void 0===a?void 0:a[1],o="".concat(150*(null===(r=i[e])||void 0===r?void 0:r[2])||0,"ms");if(t&&o)return{...c,animationDelay:o,animationDuration:"1100ms",animationFillMode:"forwards",animationName:T?t:"",opacity:0}}})),C={...u,ref:g},w={DESKTOP:L[2]||{},MOBILE:L[0]||{},TABLET:L[1]||{}};return S?(0,m.tZ)(a.Z,{...C,overrides:{Block:{style:{...w.MOBILE}}},children:d}):x?(0,m.tZ)(a.Z,{...C,overrides:{Block:{style:Object.keys(w.TABLET).length>0?{...w.TABLET}:{...w.MOBILE}}},children:d}):b?Object.keys(w.DESKTOP).length>0?(0,m.tZ)(a.Z,{...C,overrides:{Block:{style:{...w.DESKTOP}}},children:d}):Object.keys(w.TABLET).length>0?(0,m.tZ)(a.Z,{...C,overrides:{Block:{style:{...w.TABLET}}},children:d}):(0,m.tZ)(a.Z,{...C,overrides:{Block:{style:{...w.MOBILE}}},children:d}):(0,m.tZ)(a.Z,{...C,children:d})};u.displayName="AnimationWrapper"},8059:(e,t,o)=>{o.d(t,{Q:()=>$,Z:()=>O});var n=o(28992),i=o(97121),a=o(67345),r=o(74751),l=o(9006),d=o(96474),c=o(22164),s=o(40744),m=o(37556),u=o(3414),g=o(49418),h=o(22333),p=o(34407),y=o(64479),f=o(7392);const v=e=>{let{children:t,color:o,ctaColorTheme:n="dark",modalBody:a,modalHeader:r,modalLegal:l,modalCtaOne:d,modalCtaTwo:c,isOpen:s=!1,onClose:v,rtl:b,...x}=e;const[S,T]=(0,i.hQ)(),{sizing:L}=T,C={Dialog:{style:{height:"auto",maxWidth:"600px",padding:L.scale600,width:"80vw"}}},w={ctaPrimary:{...null==d?void 0:d.ctaDetails,ctaType:d&&d.ctaType?(0,h._X)(d.ctaType,n):"link"},ctaSecondary:{...null==c?void 0:c.ctaDetails,ctaType:c&&c.ctaType?(0,h._X)(c.ctaType,n):"link"}},k=(0,h.ed)(w),Z=$(w),B=k||Z,H=(0,p.y0)(a),z=(0,p.y0)(l),M=e=>{let{cta:t,renderer:o,ctaColor:n,ctaColorTheme:i,rtl:a}=e;return(0,f.tZ)(o,{...t,ctaColor:n,ctaHoverColor:n,ctaColorTheme:i,rtl:a})};return(0,f.BX)(m.Z,{animate:!0,autoFocus:!0,closeable:!0,isOpen:s,onClose:v,overrides:C,role:u.HB.dialog,size:u.NO.default,renderAll:!0,children:[r&&(0,f.tZ)(g.xB,{children:(0,f.tZ)(y.Z,{level:2,children:r})}),H&&(0,f.BX)(g.fe,{children:[(0,f.tZ)(p.ZP,{body:a,color:"inherit"}),B&&(0,f.tZ)(M,{cta:w,renderer:k?h.ZP:O,rtl:b,ctaColor:o,ctaColorTheme:n}),z&&(0,f.tZ)(p.ZP,{body:l,size:"legal",className:S({marginTop:L.scale800})})]})]})};var b=o(53587),x=o(29844),S=o.n(x),T=o(53458);function L(e,t,o){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const C=(0,i.zo)("a",(e=>{let{$theme:t,$alignSelf:o="auto",$width:n="auto",$height:i="auto",$isLoading:a=!1,$disabled:r=!1}=e;const{mediaQuery:l}=t,d=(0,T.ZY)(n),c=(0,T.ZY)(i);let s;return s=!a&&r?"not-allowed":a?"wait":"pointer",{alignSelf:o,background:"transparent",border:"none",cursor:s,display:"inline-block",maxWidth:"100%",padding:0,textDecoration:"none",[l.small]:{height:c.small,width:d.small},[l.medium]:{height:c.medium,width:d.medium},[l.large]:{height:c.large,width:d.large}}}));class w extends b.Component{constructor(e){super(e),L(this,"handleClick",(e=>{this.props.onClick&&this.props.onClick(e),e.currentTarget.blur()})),this.state={focus:!1,hover:!1},this._pageHideHandler=()=>this.pageHideHandler()}componentDidMount(){S()&&S().addEventListener("pagehide",this._pageHideHandler)}componentWillUnmount(){S()&&S().removeEventListener("pagehide",this._pageHideHandler)}pageHideHandler(){this.setState({hover:!1})}render(){const{buttonType:e,asElement:t,disabled:o,children:n,render:i,href:a,openInNewTab:r,ariaLabel:l,ctaAlign:d,width:c,height:s,isLoading:m,title:u}=this.props,g=this.props["data-tracking-name"];return(0,f.tZ)(C,{"data-tracking-name":g,title:u,type:e,$as:t,disabled:o,onClick:this.handleClick,...a?{href:a}:{},target:r?"_blank":"_self","aria-label":l,onMouseEnter:()=>this.setState({hover:!0}),onMouseLeave:()=>this.setState({hover:!1}),onFocus:()=>this.setState({focus:!0}),onBlur:()=>this.setState({focus:!1}),$alignSelf:d,$width:c,$height:s,$isLoading:m,$disabled:o,children:i?i(this.state.hover,this.state.focus):n})}}const k=(0,i.zo)("div",(e=>{let{$theme:t}=e;const{sizing:o,typography:n}=t;return{alignItems:"center",textDecoration:"none",...n.font300,lineHeight:o.scale900}})),Z=(0,i.zo)("span",(e=>{let{$theme:t,$ctaColor:o,$stylesOverrides:n}=e;const{animation:i,colors:a,direction:r,typography:l}=t,d="rtl"===r,c=!o||o===a.mono1000||"black"===o?a.mono1000:o,s="linear-gradient(\n      transparent calc(100% - 1px),\n      ".concat(a.mono500," 1px\n    )"),m="linear-gradient(\n      transparent calc(100% - 1px),\n      ".concat(c," 1px\n    )");return{backgroundImage:"".concat(d?s:m,",\n       ").concat(d?m:s,"\n      "),backgroundPosition:"0 bottom, 0 bottom",backgroundRepeat:"no-repeat",backgroundSize:d?"100% 6px, 100% 6px":"0% 6px, 100% 6px",color:c,fontFamily:l.font300.fontFamily,fontSize:l.font300.fontSize,paddingBottom:"6px",textDecoration:"none",transition:"all ".concat(i.timing500," ").concat(i.easeOutQuinticCurve),width:"calc(100%)",":hover":{backgroundSize:d?"0% 6px, 100% 6px":"100% 6px, 100% 6px"},...n||{}}})),B=(0,i.zo)("div",(e=>{let{$theme:t,$marginTop:o}=e;const{sizing:n}=t;return{marginTop:o||n.scale500}})),H=e=>e===c.n.SMALL?l.NO.compact:(c.n.LARGE,l.NO.default);function $(e){if(e&&"object"==typeof e){const t=e.text||e.ctaText;return Boolean(t||e.avoidValidationRules)}return!1}const z=e=>{const{asElement:t,onClick:o,buttonType:l,disabled:m,ctaType:u,ctaColor:g,ctaColorTheme:h,ctaHoverColor:p,ctaSize:y,ctaKind:b,fontFamily:x,fontWeight:S,chevron:T,rtl:L,openInNewTab:C,isLoading:z,ariaLabel:O,ctaText:M,avoidValidationRules:A,ctaAlign:E,stylesOverrides:I,ctaWidth:D,ctaBoxSizing:P,href:F,ctaLink:N,removeButtonMargins:W,spacerMarginTopOverride:R,linkOnClickType:Q,modalBody:X,modalHeader:j,modalLegal:_,modalCtaOne:U,modalCtaTwo:Y,...G}=e,[,K]=(0,i.hQ)(),{colors:V,sizing:q,typography:J}=K,ee={borders:{useRoundedCorners:!1},colors:{buttonDisabledFill:V.buttonDisabledFill,buttonDisabledText:V.mono800,buttonPrimaryActive:V.mono800,buttonPrimaryFill:V.mono1000,buttonPrimaryHover:V.mono900,buttonPrimaryText:V.mono100,buttonSecondaryActive:V.mono500,buttonSecondaryFill:V.mono300,buttonSecondaryHover:V.mono400,buttonSecondaryText:V.mono1000}},te={borders:{useRoundedCorners:!1},colors:{buttonDisabledFill:V.buttonDisabledFill,buttonDisabledText:V.mono700,buttonPrimaryActive:V.mono400,buttonPrimaryFill:V.mono100,buttonPrimaryHover:V.mono300,buttonPrimaryText:V.mono1000,buttonSecondaryActive:V.mono700,buttonSecondaryFill:V.mono900,buttonSecondaryHover:V.mono800,buttonSecondaryText:V.mono100}},[oe,ne]=n.useState(!1),ie=e.text||M,ae=F||N,re=Boolean(Q&&"open-modal"===Q),le=n.useCallback((e=>{re&&ne(!0),o&&o(e)}),[o,ne,re]);if(!$(e))return(0,f.tZ)(f.HY,{});const de={BaseButton:{style:{fontWeight:500,marginTop:W?0:q.scale500,paddingBottom:"14px",paddingLeft:"25px",paddingRight:"25px",paddingTop:"14px",...D?{width:D}:{},...P?{boxSizing:P}:{}}}};switch(u){case c.m.BUTTON:case c.m.OUTLINE:case c.m.INVERTED:{let e;e=re?"button":C?m?"button":"a":ae&&!m?"a":t;const o=u===c.m.INVERTED?te:ee;return(0,f.BX)(a.Z,{theme:(0,r.Z)(o),children:[(0,f.tZ)(d.Z,{"data-testid":"button",onClick:le,...!re&&ae?{href:ae}:{},...!re&&C?{target:"_blank"}:{},$as:e,kind:b,size:H(y),isLoading:z,disabled:m,overrides:de,"aria-label":"string"==typeof O&&O.trim().length>0?O:void 0,...G,children:ie}),re&&(0,f.tZ)(v,{color:g,ctaColorTheme:h,modalBody:X,modalHeader:j,modalLegal:_,modalCtaOne:U,modalCtaTwo:Y,rtl:!0,isOpen:oe,onClose:()=>{ne(!1)}})]})}default:{let e=re?"button":t;return(0,f.BX)(B,{$marginTop:R,children:[(0,f.tZ)(w,{asElement:e,onClick:le,buttonType:l,disabled:m,...!re&&ae?{href:ae}:{},openInNewTab:!re&&C,width:["auto","auto","auto"],isLoading:z,ariaLabel:"string"==typeof O&&O.trim().length>0?O:void 0,ctaAlign:E,...G,render:()=>(0,f.tZ)(s.O,{isLoading:z,children:(0,f.tZ)(k,{children:(0,f.tZ)(Z,{"data-testid":"text-cta",$ctaColor:g,$stylesOverrides:I,children:ie})})})}),re&&(0,f.tZ)(v,{color:g,ctaColorTheme:h,modalBody:X,modalHeader:j,modalLegal:_,modalCtaOne:U,modalCtaTwo:Y,rtl:!0,isOpen:oe,onClose:()=>{ne(!1)}})]})}}};z.defaultProps={ariaLabel:void 0,chevron:!0,className:"",ctaKind:l.TO.primary,ctaSize:c.n.LARGE,ctaType:c.m.LINK,fontWeight:400,openInNewTab:!1,rtl:!1};const O=z},64479:(e,t,o)=>{o.d(t,{Z:()=>p});var n=o(97121),i=o(37526),a=o.n(i),r=o(88663),l=o(7392);const d=(0,n.zo)("span",(e=>{let{$theme:t}=e;const{colors:o,typography:n,direction:i}=t,a="rtl"===i;return{backgroundColor:o.mono1000,borderRadius:"30px 30px 30px 30px",color:o.white,padding:"4px 15px",position:"relative",textAlign:"center",top:"-2px",[a?"marginRight":"marginLeft"]:"10px",...n.LabelXSmall}})),c={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},s=(0,n.zo)("div",(()=>({display:"flex",flexWrap:"nowrap"}))),m=(0,n.zo)("h2",(e=>{var t;let{$theme:o,$styleLevel:n=2,$color:i}=e;const{animation:a,mediaQuery:l,typography:d}=o,c=l.medium,s=l.large,m=null===(t=null!=n?n:2)||void 0===t?void 0:t.toString();return{...{1:{...d.DisplayXSmall,[c]:{...d.DisplaySmall},[s]:{...d.DisplayMedium}},2:{...d.HeadingMedium,[c]:{...d.HeadingLarge},[s]:{...d.HeadingXLarge}},3:{...d.HeadingSmall},4:{...d.LabelLarge},5:{...d.LabelMedium},6:{...d.LabelSmall},display:{...d.DisplayXSmall,[c]:{...d.DisplayMedium},[s]:{...d.DisplayLarge}}}[m],color:(0,r.S0)(i,"currentColor"),letterSpacing:0,margin:0,transition:"all ".concat(a.timing200," ").concat(a.easeInOutCurve)}})),u=(0,n.w1)(m,(e=>{let{$width:t="100%",$truncate:o=!1}=e;return{width:"".concat(t),...o?c:{}}})),g=(0,n.w1)(m,(()=>({whiteSpace:"nowrap"}))),h=e=>{const{color:t="currentColor",heading:o,level:n=3,className:i,id:r,elementLevel:c=2,pillText:m,width:h,children:p,truncate:y}=e,f=o||p,v={$as:"h".concat("display"===c?"1":c),$color:t,$styleLevel:n,className:i},b=!!m;return f?(0,l.BX)(s,{id:r||void 0,children:[(0,l.tZ)(u,{..."string"==typeof f?{dangerouslySetInnerHTML:{__html:a()(f,{stripIgnoreTag:!0,stripIgnoreTagBody:["script"],whiteList:{}})}}:{},...v,$width:h,$truncate:y,children:"string"==typeof f?void 0:f}),b&&(0,l.tZ)(g,{...v,children:m&&(0,l.tZ)(d,{children:m})})]}):null};h.defaultProps={color:"currentColor",elementLevel:2,level:3};const p=h},34407:(e,t,o)=>{o.d(t,{ZP:()=>H,sn:()=>y,y0:()=>f});var n=o(53587),i=o(97121),a=o(931),r=o(88663),l=o(76626),d=o(7392);const{samba:{type:c,grid:{sectionPadding:s,containerWidth:m}},sambaUiMigration:{mediaQueries:{palm:u,portable:g,desk:h}},values:p}=a.ZP,y={LARGE:"large",LEGAL:"legal",MEDIUM:"medium",SMALL:"small",XLARGE:"xlarge"};function f(e){return"object"==typeof e&&null!==e&&e.hasOwnProperty("htmlContent")&&"string"==typeof e.htmlContent&&""!==e.htmlContent&&'<p class="cmln__paragraph"></p>\n'!==e.htmlContent}const v=(0,i.zo)("div",(e=>{let{$theme:t,$color:o,$overrideStyles:n={}}=e;const{colors:i,mediaQuery:a,typography:l}=t,d=a.medium,y=a.large,f={...l.DisplayXSmall,[d]:{...l.DisplaySmall},[y]:{...l.DisplayMedium}},v={...l.HeadingMedium,[d]:{...l.HeadingLarge},[y]:{...l.HeadingXLarge}},b={...l.HeadingSmall},x={...l.LabelLarge},S={...l.LabelMedium},T={...l.LabelSmall};return{color:(0,r.S0)(o,"currentColor"),letterSpacing:0,...l.ParagraphMedium,...(0,r.DK)({"*:first-of-type":{marginTop:0},"*:last-of-type":{marginBottom:0},"> *":{marginBottom:"15px",marginTop:"15px"},a:{borderBottom:"1px solid ".concat((0,r.S0)(o,"currentColor")),color:(0,r.S0)(o,"currentColor"),cursor:"pointer",textDecoration:"none",transition:p.animation.uiSpeed,wordBreak:"break-word"},"a u":{textDecoration:"none"},"a:hover":{opacity:.8},b:{fontWeight:500},h1:{color:"currentColor",fontFamily:p.fontFamily.heading,fontWeight:500,...f},h2:{color:"currentColor",fontFamily:p.fontFamily.heading,fontWeight:500,...v},h3:{color:"currentColor",fontFamily:p.fontFamily.heading,fontWeight:500,...b},h4:{color:"currentColor",fontFamily:p.fontFamily.body,fontWeight:500,...x},h5:{color:"currentColor",fontFamily:p.fontFamily.body,fontWeight:500,...S},h6:{color:"currentColor",fontFamily:p.fontFamily.body,fontWeight:500,...T},iframe:{maxWidth:"100%"},img:{maxWidth:"100%"},ol:{color:"currentColor",listStyleType:"decimal"},"ol > li::marker":{fontWeight:"bold"},"ol ol":{listStyleType:"lower-latin"},"ol ol > li::marker":{fontWeight:"bold"},"ol ol ol":{listStyleType:"lower-roman"},"ol ol ol > li::marker":{fontWeight:"bold"},"ol ol ol ol":{listStyleType:"decimal"},"ol ol ol ol > li::marker":{fontWeight:"bold"},p:{color:"currentColor"},"p a u":{textDecoration:"none"},strong:{fontWeight:500},table:{borderCollapse:"collapse",display:"block",overflowX:"scroll",[h]:{width:"calc(".concat(m.desktop," - 2 * ").concat(s.desktop.horizontal,")")},[g]:{width:"calc(100vw - 2 * ".concat(s.tablet.horizontal,")")},[u]:{width:"calc(100vw - 2 * ".concat(s.mobile.horizontal,")")}},"table th":{padding:"12px",textAlign:"left"},"tbody > tr":{borderBottom:"1px solid ".concat(i.primary300)},"tbody td":{color:i.primary600,fontFamily:p.fontFamily.body,fontSize:c.fontSize.fixedBodyPalm,fontWeight:p.fontWeight.regular,lineHeight:c.lineHeight.fixedBodyPalm,padding:"24px 16px 24px"},"thead th":{color:i.primary600,fontFamily:p.fontFamily.body,fontSize:c.fontSize.fixedBodyPalm,fontWeight:p.fontWeight.regular,lineHeight:c.lineHeight.fixedBodyPalm,paddingBottom:"7px"},ul:{color:"currentColor",listStyleType:"disc"},"ul ul":{listStyleType:"circle"},"ul ul ul":{listStyleType:"square"},"ul ul ul ul":{listStyleType:"disc"}}),...n}})),b=(0,i.w1)(v,(e=>{let{$theme:t}=e;return{...t.typography.HeadingXXLarge}})),x={fontSize:p.fontSize.fixedBodyLargeDesk,lineHeight:p.lineHeight.fixedBodyLargeDesk,[g]:{fontSize:p.fontSize.fixedBodyLargePortable,lineHeight:p.lineHeight.fixedBodyLargePortable},[u]:{fontSize:p.fontSize.fixedBodyLargePalm,lineHeight:p.lineHeight.fixedBodyLargePalm}},S=(0,i.w1)(v,x),T={fontSize:p.fontSize.fixedBodyMediumDesk,lineHeight:p.lineHeight.fixedBodyMediumDesk,[g]:{fontSize:p.fontSize.fixedBodyMediumPortable,lineHeight:p.lineHeight.fixedBodyMediumPortable},[u]:{fontSize:p.fontSize.fixedBodyMediumPalm,lineHeight:p.lineHeight.fixedBodyMediumPalm}},L=(0,i.w1)(v,T),C={fontSize:p.fontSize.fixedBodySmall,lineHeight:p.lineHeight.fixedBodySmall},w=(0,i.w1)(v,C),k={fontSize:p.fontSize.fixedBodyLegal,lineHeight:p.lineHeight.fixedBodyLegal},Z=(0,i.w1)(v,{...k,...(0,r.DK)({li:{paddingLeft:"15px"},"li > p":{marginTop:"10px",padding:0},"li > p:last-of-type":{marginBottom:"10px",marginTop:"0",padding:0},ol:{margin:0,paddingLeft:"20px",paddingTop:0},"p:first-of-type":{margin:0},"p:last-of-type":{marginBottom:0,marginTop:"10px"},"p:only-of-type":{margin:0}})}),B=e=>{let{body:t={},wrapper:o=v,skipOrphanTransform:i,...a}=e;const r=f(t)?t.htmlContent:null,[c,s]=(0,n.useState)(r);(0,n.useEffect)((()=>{i||s((e=>{if(!e)return e;if("undefined"==typeof document)return e;const t=document.createElement("div");return t.innerHTML=e,[...t.querySelectorAll("p, span, li")].forEach((e=>{if(-1!==e.innerHTML.indexOf("&nbsp;"))return!1;var t="";let o=e.innerHTML.trim().replace(/&nbsp;/g," ").split(/ (?=[^>]*(?:<|$))/);var n=o[o.length-2];o[o.length-2]=n+"&nbsp;",t=(t=o.join(" ")).replace(/&nbsp; /g,"&nbsp;"),e.innerHTML=t})),t.innerHTML})(r))}),[i,r]),"object"!=typeof a.style&&delete a.style;const m=(0,l.d)();return c?(0,d.tZ)(o,{ref:m,dangerouslySetInnerHTML:{__html:c},...a}):null};class H extends n.Component{render(){const{size:e,color:t,overrideStyles:o,...n}=this.props,i={[y.MEDIUM]:L,[y.XLARGE]:b,[y.LARGE]:S,[y.SMALL]:w,[y.LEGAL]:Z};return(0,d.tZ)(B,{"data-testid":"markdown-wrapper",wrapper:i[e],$overrideStyles:o,$color:t,...n})}}!function(e,t,o){(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(H,"defaultProps",{size:y.MEDIUM})},53458:(e,t,o)=>{o.d(t,{QJ:()=>d,Qf:()=>r,Y:()=>l,ZY:()=>c});var n=o(8059),i=o(34407),a=o(22333);function r(e){let{heading:t,body:o,cta:r}=e;return"string"==typeof t&&t.length>0||(0,i.y0)(o)||(0,a.ed)(r)||(0,n.Q)(r)}function l(e){return Array.isArray(e)?e:[e]}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e=>"undefined"!=typeof e;const n=l(e),i=n.find(o);return"undefined"!=typeof i?i:t}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=l(e);return{large:d([t[2],t[1],t[0]]),medium:d([t[1],t[0]]),small:d([t[0]])}}},53189:(e,t,o)=>{o.d(t,{Z:()=>L});var n=o(53587),i=o(97121),a=o(88663),r=o(9147),l=o(34407),d=o(22333),c=o(8059),s=o(8201),m=o(64479),u=o(40744),g=o(53458),h=o(7392);const p=(0,i.zo)("div",(e=>{let{$ctaStretch:t=!1,$width:o=100,$textAlign:n="left"}=e;const i=t?{display:"flex",flexDirection:"column",height:"100%",width:"".concat(o,"%"),"> *:last-child":{marginTop:"auto"}}:{width:"".concat(o,"%")};return"center"===n?{...i,marginLeft:"auto",marginRight:"auto"}:{...i}})),y=(0,i.zo)("div",(e=>{let{$theme:t,$spacing:o,$textAlign:n,$truncateStyles:i={}}=e;const{mediaQuery:a}=t,r=(0,g.ZY)(o),l={[a.small]:{marginBottom:r.small},[a.medium]:{marginBottom:r.medium},[a.large]:{marginBottom:r.large}};return{...n?{...l,textAlign:n}:{...l},...i}})),f=(0,i.zo)("div",(e=>{let{$theme:t,$color:o}=e;const{colors:n,mediaQuery:i,sizing:a,typography:r}=t;return{color:o||n.contentTertiary,marginBottom:a.scale700,...r.HeadingXSmall,[i.medium]:{...r.HeadingSmall,marginBottom:a.scale800},[i.large]:{...r.HeadingSmall,marginBottom:a.scale900}}})),v=(0,i.zo)("div",(e=>{let{$theme:t,$color:o,$headingSize:n}=e;const{colors:i,mediaQuery:r,sizing:l,typography:d}=t;return{color:(0,a.S0)(o,i.primaryA),marginBottom:l.scale500,opacity:.5,...n>3?{...d.LabelSmall}:{...d.HeadingXSmall},[r.medium]:{...n>3?{...d.LabelMedium}:{...d.HeadingSmall}},[r.large]:{...n>3?{...d.LabelMedium}:{...d.HeadingSmall}}}})),b=(0,i.zo)("p",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphMedium,margin:0}})),x=(0,i.zo)("div",(e=>({marginTop:"auto",textAlign:e.$textAlign||"unset"}))),S=e=>{let{cta:t,renderer:o,ctaColor:i,ctaColorTheme:a,ctaHoverColor:r,ctaSize:l,ctaStretch:d,textAlign:c,justifyContent:s,alignItems:m,rtl:u,enableSkeleton:g}=e;const p=d?x:n.Fragment,y=d?{$textAlign:c}:{};return(0,h.tZ)(p,{...y,children:(0,h.tZ)(o,{...t,ctaColor:i,ctaColorTheme:a,ctaHoverColor:r,ctaSize:l,rtl:u,justifyContent:s,alignItems:m,isLoading:g})})},T=e=>{const{animations:t,enableSkeleton:o=!1,annotatedCtaText:n,annotatedCtaLink:a,body:x,bodySize:T,bodySpacing:L,cta:C,ctaSize:w,ctaStretch:k,ctaColorTheme:Z,color:B,eyebrow:H,heading:$,headingAnchorName:z,headingSize:O,headingSpacing:M,headingWidth:A,headingLevelOverride:E,justifyContent:I,alignItems:D,maxTextLines:P,maxTextLinesOptions:F,oneLineLimit:N,pillText:W,rtl:R,subheading:Q,textAlign:X,width:j}=e,[,_]=(0,i.hQ)(),{mediaQuery:U,sizing:Y}=_,G=(0,r.a)(U.large),K=(0,r.a)(U.medium),V=G?"large":K?"medium":"small",q="string"==typeof $&&$.length>0,J=(0,l.y0)(x),ee="string"==typeof H&&H.length>0,te="string"==typeof Q&&Q.length>0,oe=(0,g.QJ)([E,...(0,g.Y)(O)],1),ne=(0,g.ZY)(O)[V],ie=M||(1===parseInt(ne)?[Y.scale700,Y.scale800,Y.scale900]:[Y.scale600,Y.scale700,Y.scale800]),ae=(0,g.ZY)(j)[V],re=(0,d.ed)(C),le=(0,c.Q)(C),de=re||le,ce=J||de?ie:0,se=L||(de?[Y.scale700]:0);if(!q&&!J&&!de)return(0,h.tZ)(h.HY,{});const me=((e,t)=>{if("number"!=typeof e||isNaN(e)||e<=0)return;const o={"-webkit-box-orient":"vertical","-webkit-line-clamp":e,display:"-webkit-box",overflow:"hidden",...null!=t&&t.showOnHover&&null!=t&&t.showOnHoverTransition?{maxHeight:"calc(1.5em * ".concat(e,")"),transition:"max-height 0.3s ease-in"}:{},...null!=t&&t.showOnHover?{":hover":{display:"inherit",...null!=t&&t.showOnHoverTransition?{maxHeight:"32em"}:{}}}:{}};return null!=t&&t.optionalMediaQuery?{[t.optionalMediaQuery]:o}:o})(P,F);return(0,h.BX)(p,{$ctaStretch:k,$width:ae,$textAlign:X,children:[q&&(0,h.BX)(s.l,{target:"contentGroupHeader",animations:t,children:[ee&&(0,h.tZ)(u.O,{isLoading:o,children:(0,h.tZ)(v,{$color:B,$headingSize:ne,children:H})}),(0,h.tZ)(y,{$spacing:ce,$textAlign:X,children:(0,h.tZ)(u.O,{isLoading:o,children:(0,h.tZ)(m.Z,{id:z,heading:$,level:ne,elementLevel:oe,color:B,pillText:W,truncate:N,width:A})})}),te&&(0,h.tZ)(u.O,{isLoading:o,children:(0,h.tZ)(f,{$color:B,children:Q})})]}),J&&(0,h.tZ)(s.l,{target:"contentGroupBody",animations:t,children:(0,h.tZ)(y,{$spacing:se,$textAlign:X,children:(0,h.tZ)(u.O,{isLoading:o,children:(0,h.tZ)(l.ZP,{body:x,size:T,color:B,overrideStyles:me})})})}),(()=>{const e="string"==typeof n&&n.length>0,i=(0,c.Q)(a);return(0,h.BX)(s.l,{target:"contentGroupCta",animations:t,children:[i&&(0,h.BX)(y,{$textAlign:X,$spacing:Y.scale800,children:[e&&(0,h.tZ)(b,{children:n}),(0,h.tZ)(c.Z,{rtl:R,...a})]}),de&&C&&(0,h.tZ)(S,{cta:C,ctaColor:B,ctaHoverColor:B,ctaColorTheme:Z,ctaSize:w,renderer:re?d.ZP:c.Z,ctaStretch:k,textAlign:X,justifyContent:I,alignItems:D,rtl:R,enableSkeleton:o})]})})()]})};T.defaultProps={headingSize:1,rtl:!1,width:100};const L=T},22333:(e,t,o)=>{o.d(t,{ZP:()=>u,_X:()=>d,ed:()=>l,xd:()=>c});var n=o(97121),i=o(8059),a=o(22164),r=o(7392);function l(e){return!!e&&"object"==typeof e&&((0,i.Q)(e.ctaPrimary)||(0,i.Q)(e.ctaSecondary))}const d=(e,t)=>{switch(e){case"primary":case"button":return"dark"===t?a.m.BUTTON:a.m.INVERTED;case"secondary":return"dark"===t?a.m.OUTLINE:a.m.INVERTED;default:return a.m.LINK}},c={INLINE:"inline",STACKED:"stacked"},s=(0,n.zo)("div",(e=>{let{$alignSelf:t="auto",$ctaLayout:o=c.INLINE,$justifyContent:n="flex-start",$alignItems:i}=e;return{alignSelf:t,display:"flex",flexWrap:"wrap",justifyContent:n,width:"100%",...{inline:{alignItems:i||"center",flexDirection:"row",flexWrap:"wrap"},stacked:{alignItems:i||"flex-start",flexDirection:"column"}}[o]}})),m=(0,n.zo)("div",(e=>{let{$theme:t,$ctaLayout:o,$rtl:n}=e;const{sizing:i}=t;return o===c.STACKED?{}:{marginRight:n?0:i.scale800,":last-child":{marginRight:n?i.scale800:0}}})),u=e=>{var t,o,n,l,d;const{ctaPrimary:c,ctaSecondary:u,ctaSize:g,ctaColor:h,ctaLayout:p,ctaHoverColor:y,ctaColorTheme:f,ctaAlign:v,ctaItems:b,justifyContent:x,alignItems:S,rtl:T,isLoading:L}=e;let C=[];c&&(0,i.Q)(c)&&C.push(c),(0,i.Q)(u)&&C.push({...u,ctaKind:"secondary"}),b&&b.length>0&&(C=b);const w=e=>e.ctaType===a.m.BUTTON||e.ctaType===a.m.OUTLINE||e.ctaType===a.m.INVERTED,k=C.some((e=>w(e))),Z=k?20:12;switch(C.length){case 0:return(0,r.tZ)(r.HY,{});case 1:return(0,r.tZ)(s,{$spacing:Z,$alignSelf:v,$ctaLayout:p,$justifyContent:x,$alignItems:S,children:(0,r.tZ)(i.Z,{...C[0],ctaAlign:v,rtl:T,ctaColor:h,ctaColorTheme:f,ctaHoverColor:h,linkOnClickType:C[0].linkOnClickType,modalBody:null===(t=C[0])||void 0===t?void 0:t.modalBody,modalHeader:null===(o=C[0])||void 0===o?void 0:o.modalHeader,modalLegal:null===(n=C[0])||void 0===n?void 0:n.modalLegal,modalCtaOne:null===(l=C[0])||void 0===l?void 0:l.modalCtaOne,modalCtaTwo:null===(d=C[0])||void 0===d?void 0:d.modalCtaTwo,isLoading:L})});default:return(0,r.tZ)(s,{$ctaLayout:p,$justifyContent:x,$alignItems:S,children:C.map(((e,t)=>(0,r.tZ)(m,{$ctaLayout:p,$rtl:T,children:(0,r.tZ)(i.Z,{...e,ctaSize:k?a.n.MEDIUM:g||e.ctaSize,ctaColor:w(e)?void 0:h||e.ctaColor,ctaHoverColor:y,rtl:T,ctaColorTheme:f,linkOnClickType:e.linkOnClickType,modalBody:e.modalBody,modalHeader:e.modalHeader,modalLegal:e.modalLegal,modalCtaOne:e.modalCtaOne,modalCtaTwo:e.modalCtaTwo,isLoading:L})},t)))})}}},56111:(e,t,o)=>{o.d(t,{OJ:()=>m,Z5:()=>r});var n=o(28992),i=o(97121),a=o(7254);const r=0,l={desktop:2,mobile:0,tablet:1},d=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;const{breakpoints:i,grid:d}=e,c=l[t],s=Array.isArray(e.grid.columns)?e.grid.columns[c]:e.grid.columns,m=[i.medium,i.large,d.maxWidth][c],u=(0,a.a5)(e.sizing)[o],g=Number(u[c+1].replace("px","")),h=n<1||n>s?1:n/s;return(m-2*g)*h},c=["mobile","mobile","tablet","desktop"],s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";const{breakpoints:n,grid:i}=e;return c.map(((n,i)=>{let a=r;return a=Array.isArray(t)?i<t.length?t[i]:t[t.length-1]:t,d(e,n,o,a)}))},m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"full";const[,d]=(0,i.hQ)(),c=n.useMemo((()=>s(d,[e,t,o,a],l)),[d,e,t,o,a,l]);return c}},22164:(e,t,o)=>{o.d(t,{m:()=>i,n:()=>n});const n={LARGE:"large",MEDIUM:"medium",SMALL:"small"},i={BUTTON:"button",INVERTED:"inverted",LINK:"link",OUTLINE:"outline"}},40744:(e,t,o)=>{o.d(t,{O:()=>m});var n=o(97121),i=o(99628),a=o(54522),r=o(53587),l=o(91607),d=o(20237),c=o(7392);const s=e=>{let{children:t,revealWithoutScroll:o=!1,disableTracking:n=!1}=e;const i=(0,r.useRef)({animation:null,timer:null}),[a,s]=(0,l.S)(),m=(0,r.useCallback)((e=>{i.current.animation=requestAnimationFrame((()=>{e.style.height="".concat(e.scrollHeight,"px"),e.style.opacity="1",i.current.timer=setTimeout((()=>{e.style.height="auto"}),1e3)}))}),[]);return(0,r.useEffect)((()=>{const e=s;return null!=e&&e.isIntersecting&&null!=e&&e.target&&m(e.target),()=>{null!==i.current.animation&&cancelAnimationFrame(i.current.animation),null!==i.current.timer&&clearTimeout(i.current.timer)}}),[m,s]),(0,c.tZ)("div",{style:{height:"0px",opacity:0,overflow:"hidden",transition:"1s all"},ref:o?m:a,"data-testid":"RevealAnimationWrapper",...n?d.ki:{},children:t})},m=e=>{let{isLoading:t,children:o,skeletonAnimation:r=!0,skeletonOverrides:l={},useRevealAnimation:d=!1,revealWithoutScroll:m=!0}=e;const[u]=(0,n.hQ)(),g={Root:{style:{height:"100%",left:0,position:"absolute",top:0,width:"100%",zIndex:3e3}}};return t?d?null:(0,c.BX)("div",{className:u({position:"relative"}),children:[o,(0,c.tZ)(i.Z,{animation:r,overrides:(0,a.Z)(!0,g,l)})]}):d?(0,c.tZ)(s,{revealWithoutScroll:m,children:o}):(0,c.tZ)(c.HY,{children:o})}},36052:(e,t,o)=>{o.d(t,{J7:()=>m,Ls:()=>c,a2:()=>s,gm:()=>d,pz:()=>h});var n=o(53587),i=o(75766),a=o(53002),r=o(96251),l=o(931);const d=(e,t,o,n,r)=>{const l=o?void 0:Math.round(t/n*r);return a.ZP.transformImageUrl(e,{contentFormat:".svg"===(0,i.extname)(e)?"svg":"auto",height:l,quality:"auto",width:Math.round(t*r)}).replace("q_auto","q_auto:eco,c_fill").replace("w_0","w_auto")},c=(e,t,o,n)=>{const i=d(e,t,o,n,1),a=d(e,t,o,n,2);return{src:i,srcset:"".concat(i,", ").concat(a," 2x")}},s=()=>{const{onImageRenderingFailure:e}=(0,n.useContext)(r.G);return(0,n.useCallback)((t=>{var o,n;e&&e({imageUrl:(null==t||null===(o=t.currentTarget)||void 0===o?void 0:o.currentSrc)||(null==t||null===(n=t.currentTarget)||void 0===n?void 0:n.src)})}),[e])},m=(e,t)=>e||t.decorative?{"aria-hidden":!0,role:"presentation"}:{},{values:{aspectRatios:u}}=l.ZP,g=/calc\((\d+)\/(\d+) \* 100\%\)/,h=function(e){let t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(t=Array.isArray(e)?o<e.length?e[o]:e[e.length-1]:e,"number"==typeof t)return t;const n=u[t],i=g.exec(n);return i?Number(i[2])/Number(i[1]):1}},66142:(e,t,o)=>{o.d(t,{e:()=>g});var n=o(53587),i=o(97121),a=o(47833),r=o(36052),l=o(67674),d=o(8266),c=o(40878),s=o(7392);const m=(e,t)=>e.mediaQuery[t].replace("@media ",""),u={large:3,medium:2,small:1},g=e=>{const{"data-value":t,image:o,imageTablet:g,imageMobile:h,alt:p="IMAGE",rtl:y,decorative:f=!0,objectFit:v,autoHeight:b=!1,maxWidths:x,aspectRatio:S=1}=e,[,T]=(0,i.hQ)(),{isResponsiveImageEnabled:L}=(0,a.W)(),C=(0,r.a2)(),w=(0,r.J7)(f,o),k=(0,n.useMemo)((()=>{var e;const t=(e,t)=>{var n;const i=(null===(n=c.Z.getCurrentImage({currentBreakpoint:e,image:o,imageMobile:h,imageTablet:g}))||void 0===n?void 0:n.src)||"";return{key:e,media:m(T,e),srcSet:(0,r.Ls)(i,x[u[e]],b,(0,r.pz)(S,t)).srcset}},n=(null===(e=c.Z.getCurrentImage({currentBreakpoint:"small",image:o,imageMobile:h,imageTablet:g}))||void 0===e?void 0:e.src)||"";return{defaultSrc:(0,r.gm)(n,x[0],b,(0,r.pz)(S,0),1),sources:[t("large",3),t("medium",2),t("small",1)]}}),[o,g,h,x,b,S,T]);return L?(0,s.BX)("picture",{children:[k.sources.map((e=>(0,s.tZ)("source",{media:e.media,srcSet:e.srcSet},e.key))),(0,s.tZ)(d.L,{"data-value":t,src:k.defaultSrc,alt:(null==o?void 0:o.alt)||(null==o?void 0:o.title)||(null==o?void 0:o.label)||p||"placeholder",$rtl:(null==o?void 0:o.rtlMirror)&&y,...w,$objectFit:v,onError:C})]}):(0,s.tZ)(l.Z,{...e})}}}]);