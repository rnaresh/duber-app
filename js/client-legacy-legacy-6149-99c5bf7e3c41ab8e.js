"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([["legacy-6149"],{84458:function(e,t,l){l.d(t,{Z:function(){return r},q:function(){return i}});var r={ANIMATION_BUILDER:"ANIMATION_BUILDER",ARRAY:"ARRAY",BACKGROUND_COLOR:"BACKGROUND_COLOR",BUTTON_GROUP:"BUTTON_GROUP",CHECKBOX:"CHECKBOX",COLLAPSIBLE:"COLLAPSIBLE",COW_EVENT_FORM:"COW_EVENT_FORM",DYNAMIC_PHOTO:"DYNAMIC_PHOTO",ENUM_COLUMNS:"ENUM_COLUMNS",ENUM_CUSTOM:"ENUM_CUSTOM",ENUM_SIDE:"ENUM_SIDE",EVENTS_TAB:"EVENTS_TAB",HEX_SLIDER:"HEX_SLIDER",HIDDEN:"HIDDEN",MAP_LAT:"MAP_LAT",MAP_LNG:"MAP_LNG",MARKDOWN:"MARKDOWN",MAX_ITEMS_SLIDER:"MAX_ITEMS_SLIDER",OBJECT:"OBJECT",SLUG:"SLUG",TABBED_FIELDS:"TABBED_FIELDS",TEXT_COLOR:"TEXT_COLOR",TEXT_LINE:"TEXT_LINE",TEXT_LINE_CONSTANT:"TEXT_LINE_CONSTANT",TEXT_LINK:"TEXT_LINK",TEXT_LINK_MODAL:"TEXT_LINK_MODAL",TEXT_MULTILINE:"TEXT_MULTILINE",TOGGLE_SWITCH:"TOGGLE_SWITCH",URL:"URL",YOUTUBE_EMBED_URL:"YOUTUBE_EMBED_URL"},i={ADVANCED:"ADVANCED",CONTENT:"CONTENT",DESIGN:"DESIGN"}},86083:function(e,t,l){l.d(t,{Z:function(){return a}});var r=l(84458),i=["b2b","courier","driver","rider","corporate","shipper","carrier","merchants"].map((function(e){return{defaultValue:!1,field:e,label:e[0].toUpperCase()+e.substring(1),required:!1,type:r.Z.CHECKBOX}})),a={fields:[{category:r.q.DESIGN,itemSchema:{fields:[{defaultValue:!1,field:"removePaddingSides",fieldLabel:"Remove side padding",required:!1,type:r.Z.CHECKBOX},{defaultValue:!1,field:"removePaddingTop",fieldLabel:"Remove top padding",required:!1,type:r.Z.CHECKBOX},{defaultValue:!1,field:"removePaddingBottom",fieldLabel:"Remove bottom padding",required:!1,type:r.Z.CHECKBOX},{defaultValue:!1,field:"containerFullWidth",label:"Full width container",required:!1,type:r.Z.TOGGLE_SWITCH},{field:"containerBackgroundColor",label:"Content background color",required:!1,type:r.Z.BACKGROUND_COLOR},{defaultValue:!0,field:"containerBackgroundTransparent",fieldLabel:"Check here to make grid container transparent",label:"Transparent background",required:!1,type:r.Z.CHECKBOX}]},label:"Content Container Settings",type:r.Z.COLLAPSIBLE},{category:r.q.DESIGN,itemSchema:{fields:[{field:"marginTop",label:"Add padding top",options:[{label:"0",value:"none"},{label:"0.5x",value:"half"},{label:"1x",value:"full"}],type:r.Z.BUTTON_GROUP},{field:"marginBottom",label:"Add padding bottom",options:[{label:"0",value:"none"},{label:"0.5x",value:"half"},{label:"1x",value:"full"}],required:!1,type:r.Z.BUTTON_GROUP},{field:"textColor",label:"Text color",required:!1,type:r.Z.TEXT_COLOR},{field:"backgroundColor",label:"Background color",required:!1,type:r.Z.BACKGROUND_COLOR},{dynamicPhotoType:"CARD",field:"backgroundImageLarge",label:"Background image large",required:!1,type:r.Z.DYNAMIC_PHOTO},{dynamicPhotoType:"CARD",field:"backgroundImageMedium",label:"Background image medium",required:!1,type:r.Z.DYNAMIC_PHOTO},{dynamicPhotoType:"CARD",field:"backgroundImageSmall",label:"Background image small",required:!1,type:r.Z.DYNAMIC_PHOTO},{field:"backgroundOverlay",label:"Background image overlay hex color",required:!1,type:r.Z.HEX_SLIDER},{field:"backgroundPosition",label:"Background image position",options:[{label:"Center",value:"center center"},{label:"Top",value:"center top"},{label:"Bottom",value:"center bottom"}],required:!1,type:r.Z.ENUM_CUSTOM},{field:"autoplayVideo",itemSchema:{fields:[{field:"videoUrl1080Mp4",label:"Video desktop URL - 1080p - MP4",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl720Mp4",label:"Video tablet URL - 720p - MP4",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl480Mp4",label:"Video mobile URL - 480p - MP4",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl360Mp4",label:"Video URL - 360p - MP4",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl1080Webm",label:"Video desktop URL - 1080p - WEBM",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl720Webm",label:"Video tablet URL - 720p - WEBM",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl480Webm",label:"Video mobile URL - 480p - WEBM",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl360Webm",label:"Video URL - 360p - WEBM",required:!1,type:r.Z.TEXT_LINE}]},label:"Background video",required:!1,type:r.Z.OBJECT},{field:"height",itemSchema:{fields:[{disableCount:!0,field:"desktop",label:"Desktop",placeholder:"i.e. 200px, 2em, 2rem",required:!1,type:r.Z.TEXT_LINE},{disableCount:!0,field:"tablet",label:"Tablet",placeholder:"i.e. 200px, 2em, 2rem",required:!1,type:r.Z.TEXT_LINE},{disableCount:!0,field:"mobile",label:"Mobile",placeholder:"i.e. 200px, 2em, 2rem",required:!1,type:r.Z.TEXT_LINE}]},label:"Block height",required:!1,type:r.Z.TABBED_FIELDS},{field:"alignContainer",label:"Align container (height must be set)",options:[{label:"Top",value:"flex-start"},{label:"Center",value:"center"},{label:"Bottom",value:"flex-end"}],required:!1,type:r.Z.ENUM_CUSTOM},{field:"anchorName",label:"Block anchor name",required:!1,type:r.Z.SLUG}]},label:"Block Container Settings",type:r.Z.COLLAPSIBLE},{category:r.q.ADVANCED,itemSchema:{fields:[{field:"visibleOn",itemSchema:{fields:i},label:"Visible for following user types",required:!1,type:r.Z.OBJECT},{field:"hiddenOn",itemSchema:{fields:i},label:"Hidden for following user types",required:!1,type:r.Z.OBJECT}]},label:"Rules Based Personalization (Logged-out User) Settings",type:r.Z.COLLAPSIBLE}]}},97085:function(e,t,l){l.d(t,{G:function(){return a}});var r=l(84458),i=l(9234);function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.map((function(e){var l=e.elementName,a=e.elementId;return{elementType:e.elementType,field:a,label:l,options:i.Mg.filter((function(e){var l=e.id;return t.includes(l)})),type:r.Z.COW_EVENT_FORM}}))}},__fusion__46:function(e,t,l){l.r(t),l.d(t,{GiftingHighlightIllustration:function(){return h},Illustration:function(){return I},default:function(){return r.y},personalizedSchema:function(){return L},schema:function(){return N}});var r=l(93055),i=l(84458),a=l(97085),o=l(9234),n=l(86083);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function c(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?u(Object(l),!0).forEach((function(t){p(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t,l){return(t=function(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var r=l.call(e,t||"default");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===d(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function f(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,r=new Array(t);l<t;l++)r[l]=e[l];return r}function T(e){return e.reduce((function(e,t){return t.type===i.Z.COLLAPSIBLE?[].concat(f(e),f(t.itemSchema.fields)):[].concat(f(e),[t])}),[])}function y(e,t){var l=e.reduce((function(e,t){var l=t.category||i.q.ADVANCED;return c(c({},e),{},p({},l,[].concat(f(e[l]||[]),[t])))}),{});return Object.keys(i.q).reduce((function(e,r){var a=l[r]||[];return[].concat(f(e),f(t?[{category:r,field:"loggedOutProps",itemSchema:{fields:T(a)},label:"For Logged-out users",type:i.Z.OBJECT}]:[]),[{category:r,field:"loggedInProps",itemSchema:{fields:T(a)},label:"For Logged-in users",type:i.Z.OBJECT}])}),[])}var m=function(e){return{category:i.q.ADVANCED,itemSchema:{fields:[].concat(f(e.itemSchema.fields),f((0,a.G)([{elementId:o.aM,elementName:"Logged-in State"}],[o.ci.VISIBLE])))},label:"Event tracking",type:i.Z.EVENTS_TAB}},E=l(89503);function g(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,r=new Array(t);l<t;l++)r[l]=e[l];return r}var O={category:i.q.ADVANCED,itemSchema:{fields:(0,a.G)([{elementId:E.W.CTA_ONE,elementName:"CTA 1"},{elementId:E.W.CTA_TWO,elementName:"CTA 2"}],[o.ci.CLICK])},label:"Event tracking",type:i.Z.EVENTS_TAB},C=[{category:i.q.DESIGN,field:"textPosition",label:"Layout",options:[{label:"Image left",value:"right"},{label:"Image right",value:"left"}],required:!1,type:i.Z.BUTTON_GROUP},{category:i.q.DESIGN,field:"aspectRatio",label:"Media aspect ratio",options:[{label:"4:5",value:"aspect_4_5"},{label:"1:1",value:"aspect_1_1"},{label:"3:2",value:"aspect_3_2"},{label:"16:9",value:"aspect_16_9"}],required:!1,type:i.Z.BUTTON_GROUP},{category:i.q.DESIGN,field:"textAlign",label:"Text group align",options:[{label:"Top",value:"top"},{label:"Center",value:"center"},{label:"Bottom",value:"flex-end"}],required:!1,type:i.Z.BUTTON_GROUP},{category:i.q.DESIGN,field:"justifyText",label:"Align text",options:[{label:"Left",value:"left"},{label:"Center",value:"center"}],required:!1,type:i.Z.BUTTON_GROUP},{category:i.q.DESIGN,defaultValue:"2",field:"headingLevel",label:"Headline size",options:[{label:"H2",value:"2"},{label:"H1",value:"1"},{label:"Display",value:"display"}],required:!1,type:i.Z.BUTTON_GROUP},{category:i.q.CONTENT,field:"heading",label:"Headline",required:!1,type:i.Z.TEXT_LINE},{category:i.q.CONTENT,field:"body",label:"Body",required:!1,type:i.Z.MARKDOWN},{category:i.q.CONTENT,field:"ctaOne",itemSchema:{fields:[{field:"ctaType",label:"CTA type",options:[{label:"Link",value:"text"},{label:"Button",value:"primary"}],type:i.Z.BUTTON_GROUP},{field:"ctaDetails",label:"CTA details",required:!1,type:i.Z.TEXT_LINK_MODAL}]},label:"CTA primary",required:!1,type:i.Z.OBJECT},{category:i.q.CONTENT,field:"ctaTwo",itemSchema:{fields:[{field:"ctaType",label:"CTA type",options:[{label:"Link",value:"text"},{label:"Button",value:"primary"}],type:i.Z.BUTTON_GROUP},{field:"ctaDetails",label:"CTA details",required:!1,type:i.Z.TEXT_LINK_MODAL}]},label:"CTA secondary",required:!1,type:i.Z.OBJECT},{category:i.q.DESIGN,field:"ctaColorTheme",label:"CTA color theme",options:[{label:"Dark",value:"dark"},{label:"Light",value:"light"}],required:!1,type:i.Z.BUTTON_GROUP},{category:i.q.DESIGN,field:"flipMobile",label:"Switch image placement on mobile view",options:[{label:"No",value:"false"},{label:"Yes",value:"true"}],required:!1,type:i.Z.BUTTON_GROUP},{category:i.q.CONTENT,dynamicPhotoType:"CARD",field:"image",label:"Image",required:!1,type:i.Z.DYNAMIC_PHOTO},{defaultValue:!1,field:"hideImageDesktop",fieldLabel:"Hide image on desktop",required:!1,type:i.Z.CHECKBOX},{category:i.q.CONTENT,dynamicPhotoType:"CARD",field:"imageTablet",label:"Tablet image",required:!1,type:i.Z.DYNAMIC_PHOTO},{defaultValue:!1,field:"hideImageTablet",fieldLabel:"Hide image on tablet",required:!1,type:i.Z.CHECKBOX},{category:i.q.CONTENT,dynamicPhotoType:"CARD",field:"imageMobile",label:"Mobile image",required:!1,type:i.Z.DYNAMIC_PHOTO},{defaultValue:!1,field:"hideImageMobile",fieldLabel:"Hide image on mobile",required:!1,type:i.Z.CHECKBOX},{category:i.q.CONTENT,field:"highlightVideo",itemSchema:{fields:[{defaultValue:!0,field:"looping",label:"Use looping video",required:!1,type:i.Z.CHECKBOX},{field:"large",itemSchema:{fields:[{field:"mp4",label:"Large video URL - MP4",required:!1,type:i.Z.TEXT_LINE},{field:"webm",label:"Large video URL - WEBM",required:!1,type:i.Z.TEXT_LINE}]},label:"Large - 1080p",required:!1,type:i.Z.OBJECT},{field:"medium",itemSchema:{fields:[{field:"mp4",label:"Medium video URL - MP4",required:!1,type:i.Z.TEXT_LINE},{field:"webm",label:"Medium video URL - WEBM",required:!1,type:i.Z.TEXT_LINE}]},label:"Medium - 720p",required:!1,type:i.Z.OBJECT},{field:"small",itemSchema:{fields:[{field:"mp4",label:"Small video URL - MP4",required:!1,type:i.Z.TEXT_LINE},{field:"webm",label:"Small video URL - WEBM",required:!1,type:i.Z.TEXT_LINE}]},label:"Small - 480p",required:!1,type:i.Z.OBJECT},{field:"fallback",itemSchema:{fields:[{field:"mp4",label:"Video default URL - MP4",required:!1,type:i.Z.TEXT_LINE},{field:"webm",label:"Video default URL - WEBM",required:!1,type:i.Z.TEXT_LINE}]},label:"Default - 360p",required:!1,type:i.Z.OBJECT}]},label:"Video upload",required:!1,type:i.Z.OBJECT},{category:i.q.CONTENT,field:"videoUrl",label:"YouTube embed URL",required:!1,type:i.Z.YOUTUBE_EMBED_URL},{category:i.q.CONTENT,defaultValue:!1,field:"embedVideo",fieldLabel:"Embed video",required:!1,type:i.Z.CHECKBOX},{category:i.q.CONTENT,field:"playButtonColor",label:"Play button color theme",options:[{label:"Dark",value:"dark"},{label:"Light",value:"light"}],required:!1,type:i.Z.BUTTON_GROUP},{category:i.q.ADVANCED,itemSchema:{fields:[{field:"animations",options:[{label:"Full block",value:"fullBlock"},{label:"Content group header",value:"contentGroupHeader"},{label:"Content group body",value:"contentGroupBody"},{label:"Content group CTA",value:"contentGroupCta"},{label:"Image group",value:"imageGroup"}],type:i.Z.ANIMATION_BUILDER}]},label:"Animations",type:i.Z.COLLAPSIBLE}].concat(g(n.Z.fields)),N={fields:[].concat(g(C),[O]),title:"Highlight"},L=function(e,t,l){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{fields:[].concat(f(r?[]:[{category:i.q.CONTENT,defaultValue:!1,field:"isPersonalized",label:"LoggedIn Personalization",type:i.Z.TOGGLE_SWITCH}].concat(f(t))),f(y(t,r)),[m(l)]),previewSettingsFields:[{defaultValue:!1,field:"loggedIn",label:"User is logged-in",type:i.Z.TOGGLE_SWITCH}],title:e}}("Personalized Highlight",C,O,!0),_=l(7392),I=function(e){var t=e.width,l=e.height;return(0,_.tZ)("img",{src:"https://terrablob.uberinternal.com/_gateway/prod/uber-static/chameleon-fusion/Highlight.png",alt:"",width:t||"auto",height:l||"200px"})},h=function(e){var t=e.width,l=e.height;return(0,_.tZ)("img",{src:"https://terrablob.uberinternal.com/_gateway/prod/uber-static/chameleon-fusion/Gifting-Highlight.png",alt:"",width:t||"auto",height:l||"200px"})}}}]);