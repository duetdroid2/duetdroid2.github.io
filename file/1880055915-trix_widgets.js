var g,m=this;function n(a){return"string"==typeof a}function p(){}
function q(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function r(a){return"array"==q(a)}function aa(a){var b=q(a);return"array"==b||"object"==b&&"number"==typeof a.length}function t(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ba(a,b,d){return a.call.apply(a.bind,arguments)}
function ca(a,b,d){if(!a)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,c);return a.apply(b,d)}}return function(){return a.apply(b,arguments)}}function u(a,b,d){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return u.apply(null,arguments)}
function v(a,b){function d(){}d.prototype=b.prototype;a.F=b.prototype;a.prototype=new d;a.prototype.constructor=a;a.Sa=function(a,d,f){for(var c=Array(arguments.length-2),e=2;e<arguments.length;e++)c[e-2]=arguments[e];return b.prototype[d].apply(a,c)}};var w;var da=Array.prototype.indexOf?function(a,b,d){return Array.prototype.indexOf.call(a,b,d)}:function(a,b,d){d=null==d?0:0>d?Math.max(0,a.length+d):d;if(n(a))return n(b)&&1==b.length?a.indexOf(b,d):-1;for(;d<a.length;d++)if(d in a&&a[d]===b)return d;return-1},ea=Array.prototype.forEach?function(a,b,d){Array.prototype.forEach.call(a,b,d)}:function(a,b,d){for(var c=a.length,e=n(a)?a.split(""):a,f=0;f<c;f++)f in e&&b.call(d,e[f],f,a)};
function fa(a){var b=a.length;if(0<b){for(var d=Array(b),c=0;c<b;c++)d[c]=a[c];return d}return[]};var ha=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function ia(a,b){if(b)a=a.replace(ja,"&amp;").replace(ka,"&lt;").replace(la,"&gt;").replace(ma,"&quot;").replace(na,"&#39;").replace(oa,"&#0;");else{if(!pa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ja,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ka,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(la,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ma,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(na,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(oa,"&#0;"))}return a}
var ja=/&/g,ka=/</g,la=/>/g,ma=/"/g,na=/'/g,oa=/\x00/g,pa=/[\x00&<>"']/;function x(a,b){return a<b?-1:a>b?1:0};var y;a:{var qa=m.navigator;if(qa){var ra=qa.userAgent;if(ra){y=ra;break a}}y=""};function sa(a,b,d){for(var c in a)b.call(d,a[c],c,a)}function ta(a,b,d){for(var c in a)if(b.call(d,a[c],c,a))return!0;return!1}var ua="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function va(a,b){for(var d,c,e=1;e<arguments.length;e++){c=arguments[e];for(d in c)a[d]=c[d];for(var f=0;f<ua.length;f++)d=ua[f],Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}};function z(a){z[" "](a);return a}z[" "]=p;function wa(a,b,d,c){c=c?c(b):b;return Object.prototype.hasOwnProperty.call(a,c)?a[c]:a[c]=d(b)};var xa=-1!=y.indexOf("Opera"),A=-1!=y.indexOf("Trident")||-1!=y.indexOf("MSIE"),ya=-1!=y.indexOf("Edge"),za=-1!=y.indexOf("Gecko")&&!(-1!=y.toLowerCase().indexOf("webkit")&&-1==y.indexOf("Edge"))&&!(-1!=y.indexOf("Trident")||-1!=y.indexOf("MSIE"))&&-1==y.indexOf("Edge"),B=-1!=y.toLowerCase().indexOf("webkit")&&-1==y.indexOf("Edge");function Aa(){var a=m.document;return a?a.documentMode:void 0}var C;
a:{var D="",E=function(){var a=y;if(za)return/rv:([^\);]+)(\)|;)/.exec(a);if(ya)return/Edge\/([\d\.]+)/.exec(a);if(A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(B)return/WebKit\/(\S+)/.exec(a);if(xa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();E&&(D=E?E[1]:"");if(A){var F=Aa();if(null!=F&&F>parseFloat(D)){C=String(F);break a}}C=D}var Ba=C,Ca={};
function G(a){return wa(Ca,a,function(){for(var b=0,d=ha(String(Ba)).split("."),c=ha(String(a)).split("."),e=Math.max(d.length,c.length),f=0;0==b&&f<e;f++){var h=d[f]||"",k=c[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;b=x(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||x(0==h[2].length,0==k[2].length)||x(h[2],k[2]);h=h[3];k=k[3]}while(0==b)}return 0<=b})}var H;var Da=m.document;
H=Da&&A?Aa()||("CSS1Compat"==Da.compatMode?parseInt(Ba,10):5):void 0;var Ea=!A||9<=Number(H);function Fa(a,b){sa(b,function(b,c){b&&b.Ua&&(b=b.Ta());"style"==c?a.style.cssText=b:"class"==c?a.className=b:"for"==c?a.htmlFor=b:Ga.hasOwnProperty(c)?a.setAttribute(Ga[c],b):0==c.lastIndexOf("aria-",0)||0==c.lastIndexOf("data-",0)?a.setAttribute(c,b):a[c]=b})}var Ga={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Ha(a,b,d,c){function e(c){c&&b.appendChild(n(c)?a.createTextNode(c):c)}for(;c<d.length;c++){var f=d[c];if(!aa(f)||t(f)&&0<f.nodeType)e(f);else{a:{if(f&&"number"==typeof f.length){if(t(f)){var h="function"==typeof f.item||"string"==typeof f.item;break a}if("function"==q(f)){h="function"==typeof f.item;break a}}h=!1}ea(h?fa(f):f,e)}}}function I(a){for(var b;b=a.firstChild;)a.removeChild(b)}function J(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Ia(a){return a.contentDocument||a.contentWindow.document}function K(a){this.j=a||m.document||document}g=K.prototype;g.getElementsByTagName=function(a,b){return(b||this.j).getElementsByTagName(String(a))};
g.a=function(a,b,d){var c=this.j,e=arguments,f=String(e[0]),h=e[1];if(!Ea&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',ia(h.name),'"');if(h.type){f.push(' type="',ia(h.type),'"');var k={};va(k,h);delete k.type;h=k}f.push(">");f=f.join("")}f=c.createElement(f);h&&(n(h)?f.className=h:r(h)?f.className=h.join(" "):Fa(f,h));2<e.length&&Ha(c,f,e,2);return f};g.createElement=function(a){return this.j.createElement(String(a))};g.createTextNode=function(a){return this.j.createTextNode(String(a))};
g.ga=function(){var a=this.j;return a.parentWindow||a.defaultView};g.appendChild=function(a,b){a.appendChild(b)};g.append=function(a,b){Ha(J(a),a,arguments,1)};g.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
g.removeNode=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};g.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};function L(){this.J=this.J;this.T=this.T}L.prototype.J=!1;L.prototype.za=function(){this.J||(this.J=!0,this.h())};L.prototype.h=function(){if(this.T)for(;this.T.length;)this.T.shift()()};var Ja=!A||9<=Number(H),Ka=A&&!G("9"),La=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});m.addEventListener("test",p,b);m.removeEventListener("test",p,b);return a}();function M(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.i=!1;this.sa=!0}M.prototype.stopPropagation=function(){this.i=!0};M.prototype.preventDefault=function(){this.defaultPrevented=!0;this.sa=!1};function N(a,b){M.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;a&&this.Da(a,b)}v(N,M);var Ma={2:"touch",3:"pen",4:"mouse"};
N.prototype.Da=function(a,b){var d=this.type=a.type,c=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(za){a:{try{z(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==d?b=a.fromElement:"mouseout"==d&&(b=a.toElement);this.relatedTarget=b;null===c?(this.offsetX=B||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=B||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,
this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==c.clientX?c.clientX:c.pageX,this.clientY=void 0!==c.clientY?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==d?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=
n(a.pointerType)?a.pointerType:Ma[a.pointerType]||"";this.state=a.state;this.l=a;a.defaultPrevented&&this.preventDefault()};N.prototype.stopPropagation=function(){N.F.stopPropagation.call(this);this.l.stopPropagation?this.l.stopPropagation():this.l.cancelBubble=!0};N.prototype.preventDefault=function(){N.F.preventDefault.call(this);var a=this.l;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ka)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Na="closure_listenable_"+(1E6*Math.random()|0);function O(a){return!(!a||!a[Na])}var Oa=0;function Pa(a,b,d,c,e,f){this.listener=a;this.V=b;this.src=d;this.type=c;this.capture=!!e;this.N=f;this.key=++Oa;this.s=this.I=!1}Pa.prototype.S=function(){this.s=!0;this.N=this.src=this.V=this.listener=null};function P(a){this.src=a;this.b={};this.G=0}g=P.prototype;g.add=function(a,b,d,c,e){var f=a.toString();a=this.b[f];a||(a=this.b[f]=[],this.G++);var h=Q(a,b,c,e);-1<h?(b=a[h],d||(b.I=!1)):(b=new Pa(b,null,this.src,f,!!c,e),b.I=d,a.push(b));return b};g.remove=function(a,b,d,c){a=a.toString();if(!(a in this.b))return!1;var e=this.b[a];b=Q(e,b,d,c);return-1<b?(e[b].S(),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.b[a],this.G--),!0):!1};
g.ra=function(a){var b=a.type;if(!(b in this.b))return!1;var d=this.b[b],c=da(d,a),e;(e=0<=c)&&Array.prototype.splice.call(d,c,1);e&&(a.S(),0==this.b[b].length&&(delete this.b[b],this.G--));return e};g.aa=function(a){a=a&&a.toString();var b=0,d;for(d in this.b)if(!a||d==a){for(var c=this.b[d],e=0;e<c.length;e++)++b,c[e].S();delete this.b[d];this.G--}return b};g.C=function(a,b,d,c){a=this.b[a.toString()];var e=-1;a&&(e=Q(a,b,d,c));return-1<e?a[e]:null};
g.hasListener=function(a,b){var d=void 0!==a,c=d?a.toString():"",e=void 0!==b;return ta(this.b,function(a){for(var f=0;f<a.length;++f)if(!(d&&a[f].type!=c||e&&a[f].capture!=b))return!0;return!1})};function Q(a,b,d,c){for(var e=0;e<a.length;++e){var f=a[e];if(!f.s&&f.listener==b&&f.capture==!!d&&f.N==c)return e}return-1};var Qa="closure_lm_"+(1E6*Math.random()|0),Ra={},Sa=0;function R(a,b,d,c,e){if(c&&c.once)return S(a,b,d,c,e);if(r(b)){for(var f=0;f<b.length;f++)R(a,b[f],d,c,e);return null}d=T(d);return O(a)?a.f(b,d,t(c)?!!c.capture:!!c,e):Ta(a,b,d,!1,c,e)}
function Ta(a,b,d,c,e,f){if(!b)throw Error("Invalid event type");var h=t(e)?!!e.capture:!!e,k=U(a);k||(a[Qa]=k=new P(a));d=k.add(b,d,c,h,f);if(d.V)return d;c=Ua();d.V=c;c.src=a;c.listener=d;if(a.addEventListener)La||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),c,e);else if(a.attachEvent)a.attachEvent(Va(b.toString()),c);else if(a.addListener&&a.removeListener)a.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");Sa++;return d}
function Ua(){var a=Wa,b=Ja?function(d){return a.call(b.src,b.listener,d)}:function(d){d=a.call(b.src,b.listener,d);if(!d)return d};return b}function S(a,b,d,c,e){if(r(b)){for(var f=0;f<b.length;f++)S(a,b[f],d,c,e);return null}d=T(d);return O(a)?a.la(b,d,t(c)?!!c.capture:!!c,e):Ta(a,b,d,!0,c,e)}
function Xa(a,b,d,c,e){if(r(b)){for(var f=0;f<b.length;f++)Xa(a,b[f],d,c,e);return null}c=t(c)?!!c.capture:!!c;d=T(d);if(O(a))return a.da(b,d,c,e);if(!a)return!1;if(a=U(a))if(b=a.C(b,d,c,e))return V(b);return!1}
function V(a){if("number"==typeof a||!a||a.s)return!1;var b=a.src;if(O(b))return b.va(a);var d=a.type,c=a.V;b.removeEventListener?b.removeEventListener(d,c,a.capture):b.detachEvent?b.detachEvent(Va(d),c):b.addListener&&b.removeListener&&b.removeListener(c);Sa--;(d=U(b))?(d.ra(a),0==d.G&&(d.src=null,b[Qa]=null)):a.S();return!0}function Va(a){return a in Ra?Ra[a]:Ra[a]="on"+a}
function Ya(a,b,d,c){var e=!0;if(a=U(a))if(b=a.b[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==d&&!f.s&&(f=Za(f,c),e=e&&!1!==f)}return e}function Za(a,b){var d=a.listener,c=a.N||a.src;a.I&&V(a);return d.call(c,b)}
function Wa(a,b){if(a.s)return!0;if(!Ja){if(!b)a:{b=["window","event"];for(var d=m,c=0;c<b.length;c++)if(d=d[b[c]],null==d){b=null;break a}b=d}c=b;b=new N(c,this);d=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var e=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(h){e=!0}if(e||void 0==c.returnValue)c.returnValue=!0}c=[];for(e=b.currentTarget;e;e=e.parentNode)c.push(e);a=a.type;for(e=c.length-1;!b.i&&0<=e;e--){b.currentTarget=c[e];var f=Ya(c[e],a,!0,b);d=d&&f}for(e=0;!b.i&&e<c.length;e++)b.currentTarget=
c[e],f=Ya(c[e],a,!1,b),d=d&&f}return d}return Za(a,new N(b,this))}function U(a){a=a[Qa];return a instanceof P?a:null}var $a="__closure_events_fn_"+(1E9*Math.random()>>>0);function T(a){if("function"==q(a))return a;a[$a]||(a[$a]=function(b){return a.handleEvent(b)});return a[$a]};function ab(a,b){return(new W(b)).Oa(a)}function W(a){this.W=a}W.prototype.Oa=function(a){var b=[];this.ba(a,b);return b.join("")};
W.prototype.ba=function(a,b){if(null==a)b.push("null");else{if("object"==typeof a){if(r(a)){this.Pa(a,b);return}if(a instanceof String||a instanceof Number||a instanceof Boolean)a=a.valueOf();else{this.Ra(a,b);return}}switch(typeof a){case "string":this.ua(a,b);break;case "number":this.Qa(a,b);break;case "boolean":b.push(String(a));break;case "function":b.push("null");break;default:throw Error("Unknown type: "+typeof a);}}};
var bb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},cb=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;W.prototype.ua=function(a,b){b.push('"',a.replace(cb,function(a){var b=bb[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),bb[a]=b);return b}),'"')};W.prototype.Qa=function(a,b){b.push(isFinite(a)&&!isNaN(a)?String(a):"null")};
W.prototype.Pa=function(a,b){var d=a.length;b.push("[");for(var c="",e=0;e<d;e++)b.push(c),c=a[e],this.ba(this.W?this.W.call(a,String(e),c):c,b),c=",";b.push("]")};W.prototype.Ra=function(a,b){b.push("{");var d="",c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var e=a[c];"function"!=typeof e&&(b.push(d),this.ua(c,b),b.push(":"),this.ba(this.W?this.W.call(a,c,e):e,b),d=",")}b.push("}")};function X(){L.call(this);this.c=new P(this);this.xa=this;this.$=null}v(X,L);X.prototype[Na]=!0;g=X.prototype;g.addEventListener=function(a,b,d,c){R(this,a,b,d,c)};g.removeEventListener=function(a,b,d,c){Xa(this,a,b,d,c)};
g.dispatchEvent=function(a){var b=this.$;if(b){var d=[];for(var c=1;b;b=b.$)d.push(b),++c}b=this.xa;c=a.type||a;if(n(a))a=new M(a,b);else if(a instanceof M)a.target=a.target||b;else{var e=a;a=new M(c,b);va(a,e)}e=!0;if(d)for(var f=d.length-1;!a.i&&0<=f;f--){var h=a.currentTarget=d[f];e=h.M(c,!0,a)&&e}a.i||(h=a.currentTarget=b,e=h.M(c,!0,a)&&e,a.i||(e=h.M(c,!1,a)&&e));if(d)for(f=0;!a.i&&f<d.length;f++)h=a.currentTarget=d[f],e=h.M(c,!1,a)&&e;return e};
g.h=function(){X.F.h.call(this);this.Ma();this.$=null};g.f=function(a,b,d,c){return this.c.add(String(a),b,!1,d,c)};g.la=function(a,b,d,c){return this.c.add(String(a),b,!0,d,c)};g.da=function(a,b,d,c){return this.c.remove(String(a),b,d,c)};g.va=function(a){return this.c.ra(a)};g.Ma=function(a){return this.c?this.c.aa(a):0};
g.M=function(a,b,d){a=this.c.b[String(a)];if(!a)return!0;a=a.concat();for(var c=!0,e=0;e<a.length;++e){var f=a[e];if(f&&!f.s&&f.capture==b){var h=f.listener,k=f.N||f.src;f.I&&this.va(f);c=!1!==h.call(k,d)&&c}}return c&&0!=d.sa};g.C=function(a,b,d,c){return this.c.C(String(a),b,d,c)};g.hasListener=function(a,b){return this.c.hasListener(void 0!==a?String(a):void 0,b)};function Y(a,b){X.call(this);this.D=a;this.ia=!!b;this.ka=this.ja();this.ka||(this.U=R(this.D,A&&!G("7")?"readystatechange":"load",this.ha,!1,this),this.Z=window.setInterval(u(this.ha,this),100))}v(Y,X);g=Y.prototype;g.U=null;g.pa=function(){this.Z&&(window.clearInterval(this.Z),this.Z=null)};g.h=function(){delete this.D;this.pa();V(this.U);Y.F.h.call(this)};g.ja=function(){var a=!1;try{if(this.ia||!A||G("11")){var b=Ia(this.D).body;a=this.ia?!!b&&!!b.firstChild:!!b}else a="complete"==this.D.readyState}catch(d){}return a};
g.ha=function(){this.ja()&&(this.pa(),V(this.U),this.U=null,this.ka=!0,this.dispatchEvent("ifload"))};function Z(a){L.call(this);this.m=a;this.o={}}v(Z,L);var db=[];g=Z.prototype;g.f=function(a,b,d,c){return this.Ga(a,b,d,c)};g.Ga=function(a,b,d,c,e){r(b)||(b&&(db[0]=b.toString()),b=db);for(var f=0;f<b.length;f++){var h=R(a,b[f],d||this.handleEvent,c||!1,e||this.m||this);if(!h)break;this.o[h.key]=h}return this};g.la=function(a,b,d,c){return this.ma(a,b,d,c)};
g.ma=function(a,b,d,c,e){if(r(b))for(var f=0;f<b.length;f++)this.ma(a,b[f],d,c,e);else{a=S(a,b,d||this.handleEvent,c,e||this.m||this);if(!a)return this;this.o[a.key]=a}return this};g.da=function(a,b,d,c,e){if(r(b))for(var f=0;f<b.length;f++)this.da(a,b[f],d,c,e);else d=d||this.handleEvent,c=t(c)?!!c.capture:!!c,e=e||this.m||this,d=T(d),c=!!c,b=O(a)?a.C(b,d,c,e):a?(a=U(a))?a.C(b,d,c,e):null:null,b&&(V(b),delete this.o[b.key]);return this};
g.aa=function(){sa(this.o,function(a,b){this.o.hasOwnProperty(b)&&V(a)},this);this.o={}};g.h=function(){Z.F.h.call(this);this.aa()};g.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function eb(a,b,d,c,e,f,h){this.m=h;this.ea=this.H=null;this.u=1;this.Fa=d;this.g=a?new K(J(a)):w||(w=new K);this.fa=new Z(this);a=this.g;c=a.a("DIV",{className:"switcherOuter",style:"left:"+d+"px;top:"+c+"px;width:"+e+";height:"+f+";"});a.appendChild(b,c);this.Y=c;b=c.offsetWidth-13-2;this.K=a.a("DIV",{className:"switcherContent",style:"left:"+d+"px;top:0;width:"+(b-7-d)+"px;height:80%;"},a.a("TABLE","switcherTable",a.a("TBODY",null,this.X=a.a("TR"))));c.appendChild(this.K);this.A=a.a("DIV",{className:"switcherArrows",
style:"left:"+b+"px;top:0;width:13px;height:50%;"},a.a("B",null,">"));c.appendChild(this.A);this.w=a.a("DIV",{className:"switcherArrows",style:"left:"+b+"px;top:"+c.offsetHeight/2+"px;width:13px;height:50%;"},a.a("B",null,"<"));c.appendChild(this.w);this.fa.f(this.w,"mouseover",this.Ka).f(this.A,"mouseover",this.La).f(this.w,"mouseout",this.Ia).f(this.A,"mouseout",this.Ja).f(this.w,"mousedown",this.qa).f(this.A,"mousedown",this.qa);this.B=0;this.O=null}g=eb.prototype;
g.clear=function(a){if(a){a=this.X.cells.length;for(var b=0;b<a;b++)this.X.deleteCell(0)}else I(this.Y),this.Y=null};g.ya=function(a){var b=this.X.cells.length,d=this.X;d.insertCell(b);var c=d.cells[b];I(c);c.appendChild(this.g.createTextNode(a.name));c.item=a;c=d.cells[b];c.className="switcherItem";a.initialSheet&&this.v(a,c,!1);this.fa.f(c,"click",u(this.v,this,a,c,!0));return c};g.wa=function(a,b){null==this.H&&this.v(a,b,!1)};
g.v=function(a,b,d){a!=this.H&&(null!=this.H&&(this.ea.className="switcherItem"),this.H=a,this.ea=b,b.className="switcherItemActive",b=this.m,null!=b&&b(a,d))};g.Na=function(){var a=this.Y.offsetWidth-13-2;this.K.style.width=a-7-this.Fa+"px";this.A.style.left=a+"px";this.w.style.left=a+"px"};g.ta=function(){this.K.scrollLeft+=1*this.u*this.B};g.Ka=function(){this.u=1;this.B=-1;this.O=window.setInterval(u(this.ta,this),10)};
g.La=function(){this.B=this.u=1;this.O=window.setInterval(u(this.ta,this),10)};g.Ia=function(){window.clearInterval(this.O);this.B=0};g.Ja=function(){window.clearInterval(this.O);this.B=0};g.qa=function(){4>this.u?this.u++:this.u=1};g.cleanup=function(){this.m=null};function fb(a,b,d,c,e,f,h,k){this.g=a?new K(J(a)):w||(w=new K);this.Ea=k;this.R=this.P=null;var l=this.g;f=l.a("TABLE",{style:"position:relative;left:"+d+"px;top:"+c+"px;width:"+e+";height:"+f+";",cellpadding:0,cellspacing:0},d=l.a("TBODY",null,l.a("TR",null,l.a("TD",null,e=l.a("DIV",{style:"left:0px;top:0px;width:100%;height:100%;overflow:auto"}))),l.a("TR",null,c=l.a("TD",{style:"height:26px;background-color:#eee"}))));l.appendChild(b,f);this.L=e;this.ca=a=new eb(a,c,0,0,"100%","100%",u(this.Ha,
this));k&&(k=l.a("DIV","element-link","\u00a0"),l.appendChild(d,l.a("TR",null,l.a("TD","element-link-container",k))),R(k,"click",function(){window.open("http://www.google.com/webelements/")}));if(h.length){l=null;for(k=0;k<h.length;k++)b=a.ya(h[k]),0==k&&(l=b);a.wa(h[0],l)}R(this.g.ga(),"message",u(this.Ca,this))}g=fb.prototype;
g.Ha=function(a,b){a=u(this.v,this,a,b);if("function"!=q(a))if(a&&"function"==typeof a.handleEvent)a=u(a.handleEvent,a);else throw Error("Invalid listener argument");2147483647<Number(20)||m.setTimeout(a,20)};
g.v=function(a,b){var d=a.pageUrl,c=this.L;I(c);this.R=null;var e=this.g;d=e.a("IFRAME",{id:"pageswitcher-content",style:"display: block; width: 100%; height:100%;",frameBorder:"0",marginHeight:"0",marginWidth:"0",src:d});var f=new Y(d,!0);S(f,"ifload",u(this.Aa,this));e.appendChild(c,d);b&&void 0!==a.gid&&(window.location.hash="#gid="+a.gid)};g.Aa=function(a){a=a.target;this.R=a.D;a.za();this.P&&this.na()};
g.Ca=function(a){a=a.l;var b=a.origin,d=b.length-11;0<=d&&b.indexOf(".google.com",d)==d&&"SendKeyboardEvents"==a.data&&(this.P=a.origin,this.oa(this.g.j),this.na())};g.na=function(){this.R&&this.oa(Ia(this.R))};g.oa=function(a){R(a,["keydown","keyup","keypress"],u(this.Ba,this))};g.Ba=function(a){if(this.P){var b=this.g.ga().parent;b&&b.postMessage&&b.postMessage(ab({type:a.type,ctrlKey:a.ctrlKey,altKey:a.altKey,shiftKey:a.shiftKey,metaKey:a.metaKey,keyCode:a.keyCode}),this.P)}};
g.resize=function(a,b){var d=this.L.style;d.width=a+"px";d.height=b-26-(this.Ea?24:0)+"px";this.ca.Na()};g.cleanup=function(){this.ca.cleanup();this.ca=null;I(this.L);this.L=null};function _getWGTPageSwitcher(a,b,d,c,e,f,h,k,l){return new fb(b,d,c,e,f,h,k,l)};
