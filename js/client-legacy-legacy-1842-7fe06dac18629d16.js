"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([["legacy-1842"],{86083:function(e,l,t){t.d(l,{Z:function(){return r}});var a=t(84458),i=["b2b","courier","driver","rider","corporate","shipper","carrier","merchants"].map((function(e){return{defaultValue:!1,field:e,label:e[0].toUpperCase()+e.substring(1),required:!1,type:a.Z.CHECKBOX}})),r={fields:[{category:a.q.DESIGN,itemSchema:{fields:[{defaultValue:!1,field:"removePaddingSides",fieldLabel:"Remove side padding",required:!1,type:a.Z.CHECKBOX},{defaultValue:!1,field:"removePaddingTop",fieldLabel:"Remove top padding",required:!1,type:a.Z.CHECKBOX},{defaultValue:!1,field:"removePaddingBottom",fieldLabel:"Remove bottom padding",required:!1,type:a.Z.CHECKBOX},{defaultValue:!1,field:"containerFullWidth",label:"Full width container",required:!1,type:a.Z.TOGGLE_SWITCH},{field:"containerBackgroundColor",label:"Content background color",required:!1,type:a.Z.BACKGROUND_COLOR},{defaultValue:!0,field:"containerBackgroundTransparent",fieldLabel:"Check here to make grid container transparent",label:"Transparent background",required:!1,type:a.Z.CHECKBOX}]},label:"Content Container Settings",type:a.Z.COLLAPSIBLE},{category:a.q.DESIGN,itemSchema:{fields:[{field:"marginTop",label:"Add padding top",options:[{label:"0",value:"none"},{label:"0.5x",value:"half"},{label:"1x",value:"full"}],type:a.Z.BUTTON_GROUP},{field:"marginBottom",label:"Add padding bottom",options:[{label:"0",value:"none"},{label:"0.5x",value:"half"},{label:"1x",value:"full"}],required:!1,type:a.Z.BUTTON_GROUP},{field:"textColor",label:"Text color",required:!1,type:a.Z.TEXT_COLOR},{field:"backgroundColor",label:"Background color",required:!1,type:a.Z.BACKGROUND_COLOR},{dynamicPhotoType:"CARD",field:"backgroundImageLarge",label:"Background image large",required:!1,type:a.Z.DYNAMIC_PHOTO},{dynamicPhotoType:"CARD",field:"backgroundImageMedium",label:"Background image medium",required:!1,type:a.Z.DYNAMIC_PHOTO},{dynamicPhotoType:"CARD",field:"backgroundImageSmall",label:"Background image small",required:!1,type:a.Z.DYNAMIC_PHOTO},{field:"backgroundOverlay",label:"Background image overlay hex color",required:!1,type:a.Z.HEX_SLIDER},{field:"backgroundPosition",label:"Background image position",options:[{label:"Center",value:"center center"},{label:"Top",value:"center top"},{label:"Bottom",value:"center bottom"}],required:!1,type:a.Z.ENUM_CUSTOM},{field:"autoplayVideo",itemSchema:{fields:[{field:"videoUrl1080Mp4",label:"Video desktop URL - 1080p - MP4",required:!1,type:a.Z.TEXT_LINE},{field:"videoUrl720Mp4",label:"Video tablet URL - 720p - MP4",required:!1,type:a.Z.TEXT_LINE},{field:"videoUrl480Mp4",label:"Video mobile URL - 480p - MP4",required:!1,type:a.Z.TEXT_LINE},{field:"videoUrl360Mp4",label:"Video URL - 360p - MP4",required:!1,type:a.Z.TEXT_LINE},{field:"videoUrl1080Webm",label:"Video desktop URL - 1080p - WEBM",required:!1,type:a.Z.TEXT_LINE},{field:"videoUrl720Webm",label:"Video tablet URL - 720p - WEBM",required:!1,type:a.Z.TEXT_LINE},{field:"videoUrl480Webm",label:"Video mobile URL - 480p - WEBM",required:!1,type:a.Z.TEXT_LINE},{field:"videoUrl360Webm",label:"Video URL - 360p - WEBM",required:!1,type:a.Z.TEXT_LINE}]},label:"Background video",required:!1,type:a.Z.OBJECT},{field:"height",itemSchema:{fields:[{disableCount:!0,field:"desktop",label:"Desktop",placeholder:"i.e. 200px, 2em, 2rem",required:!1,type:a.Z.TEXT_LINE},{disableCount:!0,field:"tablet",label:"Tablet",placeholder:"i.e. 200px, 2em, 2rem",required:!1,type:a.Z.TEXT_LINE},{disableCount:!0,field:"mobile",label:"Mobile",placeholder:"i.e. 200px, 2em, 2rem",required:!1,type:a.Z.TEXT_LINE}]},label:"Block height",required:!1,type:a.Z.TABBED_FIELDS},{field:"alignContainer",label:"Align container (height must be set)",options:[{label:"Top",value:"flex-start"},{label:"Center",value:"center"},{label:"Bottom",value:"flex-end"}],required:!1,type:a.Z.ENUM_CUSTOM},{field:"anchorName",label:"Block anchor name",required:!1,type:a.Z.SLUG}]},label:"Block Container Settings",type:a.Z.COLLAPSIBLE},{category:a.q.ADVANCED,itemSchema:{fields:[{field:"visibleOn",itemSchema:{fields:i},label:"Visible for following user types",required:!1,type:a.Z.OBJECT},{field:"hiddenOn",itemSchema:{fields:i},label:"Hidden for following user types",required:!1,type:a.Z.OBJECT}]},label:"Rules Based Personalization (Logged-out User) Settings",type:a.Z.COLLAPSIBLE}]}},97085:function(e,l,t){t.d(l,{G:function(){return r}});var a=t(84458),i=t(9234);function r(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.map((function(e){var t=e.elementName,r=e.elementId;return{elementType:e.elementType,field:r,label:t,options:i.Mg.filter((function(e){var t=e.id;return l.includes(t)})),type:a.Z.COW_EVENT_FORM}}))}},__fusion__27:function(e,l,t){t.r(l),t.d(l,{Illustration:function(){return b},default:function(){return a.X},schema:function(){return c}});var a=t(45260),i=t(84458),r=t(97085),o=t(9234),n=t(86083),d=t(33907);function u(e,l){(null==l||l>e.length)&&(l=e.length);for(var t=0,a=new Array(l);t<l;t++)a[t]=e[t];return a}var c={excludeFromAuthoring:!1,fields:[{category:i.q.DESIGN,field:"itemStyle",label:"Item style",options:[{label:"Text",value:"text"},{label:"Card",value:"card"}],type:i.Z.BUTTON_GROUP},{category:i.q.DESIGN,field:"columns",hideCondition:function(e){return"card"===(null==e?void 0:e.itemStyle)},label:"Columns",required:!0,type:i.Z.ENUM_COLUMNS},{category:i.q.DESIGN,field:"centerAlign",hideCondition:function(e){return"card"===(null==e?void 0:e.itemStyle)},label:"Center align 1up layout",type:i.Z.CHECKBOX},{category:i.q.DESIGN,field:"singleColRow",hideCondition:function(e){return"card"===(null==e?void 0:e.itemStyle)},label:"Force row 1up layout",type:i.Z.CHECKBOX},{category:i.q.DESIGN,field:"itemHeadingFontSize",hideCondition:function(e){return"card"===(null==e?void 0:e.itemStyle)},label:"Item heading font size",options:[{label:"Normal",value:4},{label:"Large",value:3}],type:i.Z.BUTTON_GROUP},{category:i.q.CONTENT,field:"heading",label:"Heading",required:!1,type:i.Z.TEXT_LINE},{category:i.q.CONTENT,field:"body",label:"Body copy",required:!1,type:i.Z.MARKDOWN},{category:i.q.CONTENT,dynamicPhotoType:"CARD",field:"image",label:"Header image desktop",required:!1,type:i.Z.DYNAMIC_PHOTO},{category:i.q.CONTENT,dynamicPhotoType:"CARD",field:"imageTablet",label:"Header image tablet",required:!1,type:i.Z.DYNAMIC_PHOTO},{category:i.q.CONTENT,dynamicPhotoType:"CARD",field:"imageMobile",label:"Header image mobile",required:!1,type:i.Z.DYNAMIC_PHOTO},{category:i.q.CONTENT,field:"cta",itemSchema:{fields:[{field:"ctaPrimaryType",label:"CTA primary",options:[{label:"Link",value:d.Zj},{label:"Button",value:d.q0},{label:"Inverted",value:d.k$}],type:i.Z.BUTTON_GROUP},{field:"ctaPrimary",label:"CTA primary",required:!1,type:i.Z.TEXT_LINK_MODAL},{field:"ctaSecondaryType",label:"CTA secondary",options:[{label:"Link",value:d.Zj},{label:"Button",value:d.q0},{label:"Inverted",value:d.k$}],type:i.Z.BUTTON_GROUP},{field:"ctaSecondary",label:"CTA secondary",required:!1,type:i.Z.TEXT_LINK_MODAL}]},label:"CTA",required:!1,type:i.Z.OBJECT},{category:i.q.CONTENT,itemSchema:{fields:[{field:"filterTagsBool",label:"Use filter tags",required:!1,type:i.Z.TOGGLE_SWITCH},{field:"maxItemsBool",label:"Use content items limit",required:!1,type:i.Z.TOGGLE_SWITCH},{field:"maxItems",hideCondition:function(e){return!0!==(null==e?void 0:e.maxItemsBool)},label:"Content items limit",required:!1,type:i.Z.MAX_ITEMS_SLIDER},{field:"filterTags",hideCondition:function(e){return!0!==(null==e?void 0:e.filterTagsBool)},itemSchema:{fields:[{dynamicPhotoType:"CARD",field:"filterTagIcon",label:"Filter tag icon",type:i.Z.DYNAMIC_PHOTO},{field:"filterTag",label:"Label",required:!1,type:i.Z.TEXT_LINE_CONSTANT}]},label:"Filter tags",labelItemsBy:"filterTag",required:!1,type:i.Z.ARRAY}]},label:"Content Filtering",type:i.Z.COLLAPSIBLE},{category:i.q.DESIGN,field:"ctaColorTheme",label:"Modal CTA color theme",options:[{label:"Dark",value:"dark"},{label:"Light",value:"light"}],required:!1,type:i.Z.BUTTON_GROUP},{category:i.q.DESIGN,field:"ctaPosition",label:"CTA position",options:[{label:"Top",value:"top"},{label:"Bottom",value:"bottom"}],required:!1,type:i.Z.ENUM_CUSTOM},{category:i.q.DESIGN,field:"imageType",hideCondition:function(e){return"card"===(null==e?void 0:e.itemStyle)},label:"Image aspect ratio",options:[{label:"Icon - 24x24",value:"icon"},{label:"Badge - 48x48",value:"badge-small"},{label:"16:9",value:"aspect_16_9"},{label:"3:2",value:"aspect_3_2"},{label:"1:1",value:"aspect_1_1"},{label:"4:5",value:"aspect_4_5"}],required:!1,type:i.Z.ENUM_CUSTOM},{category:i.q.CONTENT,field:"items",itemSchema:{fields:[{dynamicPhotoType:"CARD",field:"image",label:"Item image",required:!1,type:i.Z.DYNAMIC_PHOTO},{field:"videoObject",itemSchema:{fields:[{field:"videoUrl",label:"Embed URL",required:!1,type:i.Z.YOUTUBE_EMBED_URL},{field:"playButtonTheme",label:"Play button theme",options:[{label:"Dark",value:"dark"},{label:"Light",value:"light"}],required:!1,type:i.Z.BUTTON_GROUP}]},label:"YouTube embed URL",required:!1,type:i.Z.OBJECT},{dynamicPhotoType:"CARD",field:"eyebrowIcon",label:"Eyebrow icon",type:i.Z.DYNAMIC_PHOTO},{field:"eyebrow",label:"Eyebrow",type:i.Z.TEXT_LINE},{field:"heading",label:"Item heading",required:!1,type:i.Z.TEXT_LINE},{field:"body",hideCondition:function(e){return"card"===(null==e?void 0:e.itemStyle)},label:"Item body",type:i.Z.MARKDOWN},{field:"cta",itemSchema:{fields:[{field:"ctaPrimaryType",label:"CTA primary",options:[{label:"Link",value:d.Zj},{label:"Button",value:d.q0},{label:"Inverted",value:d.k$}],type:i.Z.BUTTON_GROUP},{field:"ctaPrimary",label:"CTA primary",required:!1,type:i.Z.TEXT_LINK_MODAL},{field:"ctaSecondaryType",label:"CTA secondary",options:[{label:"Link",value:d.Zj},{label:"Button",value:d.q0},{label:"Inverted",value:d.k$}],type:i.Z.BUTTON_GROUP},{field:"ctaSecondary",label:"CTA secondary",required:!1,type:i.Z.TEXT_LINK_MODAL}]},label:"Item CTA",required:!1,type:i.Z.OBJECT},{field:"filterTag",hideCondition:function(e){return!0!==(null==e?void 0:e.filterTagsBool)},label:"Filter tags (separated by commas, if multiple)",required:!1,type:i.Z.TEXT_LINE_CONSTANT},{field:"cardDesignOptions",hideCondition:function(e){return"card"!==(null==e?void 0:e.itemStyle)},itemSchema:{fields:[{field:"cardTextColor",label:"Card text color",type:i.Z.TEXT_COLOR},{field:"cardBackgroundColor",label:"Card background color",type:i.Z.BACKGROUND_COLOR}]},label:"Card design options",type:i.Z.OBJECT}]},label:"Content Items",labelItemsBy:"heading",labelLengthLimit:50,required:!1,type:i.Z.ARRAY},{category:i.q.ADVANCED,itemSchema:{fields:[{field:"animations",options:[{label:"Full block",value:"fullBlock"},{label:"Content group header",value:"contentGroupHeader"},{label:"Content group body",value:"contentGroupBody"},{label:"Content group CTA",value:"contentGroupCta"},{label:"Content group image",value:"contentGroupImage"},{label:"Content items",value:"contentItems"}],type:i.Z.ANIMATION_BUILDER}]},label:"Animations",type:i.Z.COLLAPSIBLE},{category:i.q.ADVANCED,itemSchema:{fields:(0,r.G)([{elementId:"ctaPrimary",elementName:"CTA Primary"},{elementId:"ctaSecondary",elementName:"CTA Secondary"}],[o.ci.CLICK])},label:"Event tracking",type:i.Z.EVENTS_TAB}].concat(function(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,l){if(!e)return;if("string"==typeof e)return u(e,l);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,l)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n.Z.fields)),title:"Content Items"},p=t(7392),b=function(e){var l=e.width,t=e.height;return(0,p.tZ)("img",{src:"https://terrablob.uberinternal.com/_gateway/prod/uber-static/chameleon-fusion/Content%20Items.png",alt:"",width:l||"auto",height:t||"200px"})}}}]);