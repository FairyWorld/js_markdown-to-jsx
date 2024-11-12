!function(e,n,t,r){function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach(function(t){if("default"!==t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}}),n.default=e,n}var o=/*#__PURE__*/i(e),l=/*#__PURE__*/a(e),c=/*#__PURE__*/a(n),u=/*#__PURE__*/i(t),s=/*#__PURE__*/i(r);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d.apply(this,arguments)}function f(e,n){return n||(n=e.slice(0)),e.raw=n,e}function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var m=e.memo(function(n){var t=n.children,r=n.math,i=n.block,a=n.errorColor,l=n.renderError,c=n.settings,u=n.as,d=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n.indexOf(t=a[r])>=0||(i[t]=e[t]);return i}(n,["children","math","block","errorColor","renderError","settings","as"]),f=u||(i?"div":"span"),m=null!=t?t:r,h=e.useState({innerHtml:""}),g=h[0],y=h[1];return e.useEffect(function(){try{var e=s.default.renderToString(m,p({displayMode:!!i,errorColor:a,throwOnError:!!l},c));y({innerHtml:e})}catch(e){if(!(e instanceof s.default.ParseError||e instanceof TypeError))throw e;y(l?{errorElement:l(e)}:{innerHtml:e.message})}},[i,m,a,l,c]),"errorElement"in g?g.errorElement:o.default.createElement(f,Object.assign({},d,{dangerouslySetInnerHTML:{__html:g.innerHtml}}))});function h(){return h=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}var g,y,v=["children","options"],k="15",x="26",b="27";(y=g||(g={}))[y.MAX=0]="MAX",y[y.HIGH=1]="HIGH",y[y.MED=2]="MED",y[y.LOW=3]="LOW",y[y.MIN=4]="MIN";var E=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(function(e,n){return e[n.toLowerCase()]=n,e},{for:"htmlFor"}),w={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},z=["style","script"],O=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,C=/mailto:/i,j=/\n{2,}$/,S=/^(\s*>[\s\S]*?)(?=\n{2,})/,M=/^ *> ?/gm,R=/^ {2,}\n/,A=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,T=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,$=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,I=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,H=/^(?:\n *)*\n/,L=/\r\n?/g,_=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,N=/^\[\^([^\]]+)]/,P=/\f/g,U=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,D=/^\s*?\[(x|\s)\]/,G=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,B=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,F=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,W=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,q=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,Z=/^<!--[\s\S]*?(?:-->)/,J=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,X=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,V=/^\{.*\}$/,K=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,Q=/^<([^ >]+@[^ >]+)>/,Y=/^<([^ >]+:\/[^ >]+)>/,ee=/-([a-z])?/gi,ne=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,te=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,re=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,ie=/^\[([^\]]*)\] ?\[([^\]]*)\]/,ae=/(\[|\])/g,oe=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,le=/\t/g,ce=/(^ *\||\| *$)/g,ue=/^ *:-+: *$/,se=/^ *:-+ *$/,de=/^ *-+: *$/,fe="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",pe=new RegExp("^([*_])\\1"+fe+"\\1\\1(?!\\1)"),me=new RegExp("^([*_])"+fe+"\\1(?!\\1|\\w)"),he=new RegExp("^=="+fe+"=="),ge=new RegExp("^~~"+fe+"~~"),ye=/^\\([^0-9A-Za-z\s])/,ve=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ke=/^\n+/,xe=/^([ \t]*)/,be=/\\([^\\])/g,Ee=/ *\n+$/,we=/(?:^|\n)( *)$/,ze="(?:\\d+\\.)",Oe="(?:[*+-])";function Ce(e){return"( *)("+(1===e?ze:Oe)+") +"}var je=Ce(1),Se=Ce(2);function Me(e){return new RegExp("^"+(1===e?je:Se))}var Re=Me(1),Ae=Me(2);function Te(e){return new RegExp("^"+(1===e?je:Se)+"[^\\n]*(?:\\n(?!\\1"+(1===e?ze:Oe)+" )[^\\n]*)*(\\n|$)","gm")}var $e=Te(1),Ie=Te(2);function He(e){var n=1===e?ze:Oe;return new RegExp("^( *)("+n+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+n+" (?!"+n+" ))\\n*|\\s*\\n*$)")}var Le=He(1),_e=He(2);function Ne(e,n){var t=1===n,r=t?Le:_e,i=t?$e:Ie,a=t?Re:Ae;return{match:function(e,n){var t=we.exec(n.prevCapture);return t&&(n.list||!n.inline&&!n.simple)?r.exec(e=t[1]+e):null},order:1,parse:function(e,n,r){var o=t?+e[2]:void 0,l=e[0].replace(j,"\n").match(i),c=!1;return{items:l.map(function(e,t){var i=a.exec(e)[0].length,o=new RegExp("^ {1,"+i+"}","gm"),u=e.replace(o,"").replace(a,""),s=t===l.length-1,d=-1!==u.indexOf("\n\n")||s&&c;c=d;var f,p=r.inline,m=r.list;r.list=!0,d?(r.inline=!1,f=u.replace(Ee,"\n\n")):(r.inline=!0,f=u.replace(Ee,""));var h=n(f,r);return r.inline=p,r.list=m,h}),ordered:t,start:o}},render:function(n,t,r){return e(n.ordered?"ol":"ul",{key:r.key,start:"20"===n.type?n.start:void 0},n.items.map(function(n,i){return e("li",{key:i},t(n,r))}))}}}var Pe=new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),Ue=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,De=[S,T,$,G,F,B,Z,ne,$e,Le,Ie,_e],Ge=[].concat(De,[/^[^\n]+(?:  \n|\n{2,})/,W,X]);function Be(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Fe(e){return de.test(e)?"right":ue.test(e)?"center":se.test(e)?"left":null}function We(e,n,t,r){var i=t.inTable;t.inTable=!0;var a=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce(function(e,i){return"|"===i.trim()?e.push(r?{type:x}:{type:b,text:i}):""!==i&&e.push.apply(e,n(i,t)),e},[]);t.inTable=i;var o=[[]];return a.forEach(function(e,n){e.type===x?0!==n&&n!==a.length-1&&o.push([]):(e.type!==b||null!=a[n+1]&&a[n+1].type!==x||(e.text=e.text.trimEnd()),o[o.length-1].push(e))}),o}function qe(e,n,t){t.inline=!0;var r=e[2]?e[2].replace(ce,"").split("|").map(Fe):[],i=e[3]?function(e,n,t){return e.trim().split("\n").map(function(e){return We(e,n,t,!0)})}(e[3],n,t):[],a=We(e[1],n,t,!!i.length);return t.inline=!1,i.length?{align:r,cells:i,header:a,type:"25"}:{children:a,type:"21"}}function Ze(e,n){return null==e.align[n]?{}:{textAlign:e.align[n]}}function Je(e){return function(n,t){return t.inline?e.exec(n):null}}function Xe(e){return function(n,t){return t.inline||t.simple?e.exec(n):null}}function Ve(e){return function(n,t){return t.inline||t.simple?null:e.exec(n)}}function Ke(e){return function(n){return e.exec(n)}}function Qe(e,n,t){if(n.inline||n.simple)return null;if(t&&!t.endsWith("\n"))return null;var r="";e.split("\n").every(function(e){return!De.some(function(n){return n.test(e)})&&(r+=e+"\n",e.trim())});var i=r.trimEnd();return""==i?null:[r,i]}function Ye(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(e){return null}return e}function en(e){return e.replace(be,"$1")}function nn(e,n,t){var r=t.inline||!1,i=t.simple||!1;t.inline=!0,t.simple=!0;var a=e(n,t);return t.inline=r,t.simple=i,a}function tn(e,n,t){var r=t.inline||!1,i=t.simple||!1;t.inline=!1,t.simple=!0;var a=e(n,t);return t.inline=r,t.simple=i,a}function rn(e,n,t){var r=t.inline||!1;t.inline=!1;var i=e(n,t);return t.inline=r,i}var an,on,ln,cn,un,sn,dn,fn,pn,mn,hn=function(e,n,t){return{children:nn(n,e[1],t)}};function gn(){return{}}function yn(){return null}function vn(){return[].slice.call(arguments).filter(Boolean).join(" ")}function kn(e,n,t){for(var r=e,i=n.split(".");i.length&&void 0!==(r=r[i[0]]);)i.shift();return r||t}function xn(e,n){var t=kn(n,e);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:kn(n,e+".component",e):e}function bn(e,n){var t;function r(e,t){var r,i=kn(n.overrides,e+".props",{});return(r=n).createElement.apply(r,[xn(e,n.overrides),h({},t,i,{className:vn(null==t?void 0:t.className,i.className)||void 0})].concat([].slice.call(arguments,2)))}function i(e){e=e.replace(U,"");var t=!1;n.forceInline?t=!0:n.forceBlock||(t=!1===oe.test(e));for(var i=f(d(t?e:e.trimEnd().replace(ke,"")+"\n\n",{inline:t}));"string"==typeof i[i.length-1]&&!i[i.length-1].trim();)i.pop();if(null===n.wrapper)return i;var a,o=n.wrapper||(t?"span":"div");if(i.length>1||n.forceWrapper)a=i;else{if(1===i.length)return"string"==typeof(a=i[0])?r("span",{key:"outer"},a):a;a=null}return l.createElement(o,{key:"outer"},a)}function a(e,t){var r=t.match(O);return r?r.reduce(function(t,r,a){var o=r.indexOf("=");if(-1!==o){var c=function(e){return-1!==e.indexOf("-")&&null===e.match(J)&&(e=e.replace(ee,function(e,n){return n.toUpperCase()})),e}(r.slice(0,o)).trim(),u=function(e){var n=e[0];return('"'===n||"'"===n)&&e.length>=2&&e[e.length-1]===n?e.slice(1,-1):e}(r.slice(o+1).trim()),s=E[c]||c,d=t[s]=function(e,n,t,r){return"style"===n?t.split(/;\s?/).reduce(function(e,n){var t=n.slice(0,n.indexOf(":"));return e[t.trim().replace(/(-[a-z])/g,function(e){return e[1].toUpperCase()})]=n.slice(t.length+1).trim(),e},{}):"href"===n||"src"===n?r(t,e,n):(t.match(V)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(e,c,u,n.sanitizer);"string"==typeof d&&(W.test(d)||X.test(d))&&(t[s]=l.cloneElement(i(d.trim()),{key:a}))}else"style"!==r&&(t[E[r]||r]=!0);return t},{}):null}void 0===e&&(e=""),void 0===n&&(n={}),n.overrides=n.overrides||{},n.sanitizer=n.sanitizer||Ye,n.slugify=n.slugify||Be,n.namedCodesToUnicode=n.namedCodesToUnicode?h({},w,n.namedCodesToUnicode):w,n.createElement=n.createElement||l.createElement;var o=[],c={},u=((t={})[0]={match:Ve(S),order:1,parse:function(e,n,t){return{children:n(e[0].replace(M,""),t)}},render:function(e,n,t){return r("blockquote",{key:t.key},n(e.children,t))}},t[1]={match:Ke(R),order:1,parse:gn,render:function(e,n,t){return r("br",{key:t.key})}},t[2]={match:Ve(A),order:1,parse:gn,render:function(e,n,t){return r("hr",{key:t.key})}},t[3]={match:Ve($),order:0,parse:function(e){return{lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}},render:function(e,n,t){return r("pre",{key:t.key},r("code",h({},e.attrs,{className:e.lang?"lang-"+e.lang:""}),e.text))}},t[4]={match:Ve(T),order:0,parse:function(e){return{attrs:a("code",e[3]||""),lang:e[2]||void 0,text:e[4],type:"3"}}},t[5]={match:Xe(I),order:3,parse:function(e){return{text:e[2]}},render:function(e,n,t){return r("code",{key:t.key},e.text)}},t[6]={match:Ve(_),order:0,parse:function(e){return o.push({footnote:e[2],identifier:e[1]}),{}},render:yn},t[7]={match:Je(N),order:1,parse:function(e){return{target:"#"+n.slugify(e[1],Be),text:e[1]}},render:function(e,t,i){return r("a",{key:i.key,href:n.sanitizer(e.target,"a","href")},r("sup",{key:i.key},e.text))}},t[8]={match:Je(D),order:1,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},render:function(e,n,t){return r("input",{checked:e.completed,key:t.key,readOnly:!0,type:"checkbox"})}},t[9]={match:Ve(n.enforceAtxHeadings?B:G),order:1,parse:function(e,t,r){return{children:nn(t,e[2],r),id:n.slugify(e[2],Be),level:e[1].length}},render:function(e,n,t){return r("h"+e.level,{id:e.id,key:t.key},n(e.children,t))}},t[10]={match:Ve(F),order:0,parse:function(e,n,t){return{children:nn(n,e[1],t),level:"="===e[2]?1:2,type:"9"}}},t[11]={match:Ke(W),order:1,parse:function(e,n,t){var r,i=e[3].match(xe),o=new RegExp("^"+i[1],"gm"),l=e[3].replace(o,""),c=(r=l,Ge.some(function(e){return e.test(r)})?rn:nn),u=e[1].toLowerCase(),s=-1!==z.indexOf(u),d=(s?u:e[1]).trim(),f={attrs:a(d,e[2]),noInnerParse:s,tag:d};return t.inAnchor=t.inAnchor||"a"===u,s?f.text=e[3]:f.children=c(n,l,t),t.inAnchor=!1,f},render:function(e,n,t){return r(e.tag,h({key:t.key},e.attrs),e.text||(e.children?n(e.children,t):""))}},t[13]={match:Ke(X),order:1,parse:function(e){var n=e[1].trim();return{attrs:a(n,e[2]||""),tag:n}},render:function(e,n,t){return r(e.tag,h({},e.attrs,{key:t.key}))}},t[12]={match:Ke(Z),order:1,parse:function(){return{}},render:yn},t[14]={match:Xe(Ue),order:1,parse:function(e){return{alt:e[1],target:en(e[2]),title:e[3]}},render:function(e,t,i){return r("img",{key:i.key,alt:e.alt||void 0,title:e.title||void 0,src:n.sanitizer(e.target,"img","src")})}},t[k]={match:Je(Pe),order:3,parse:function(e,n,t){return{children:tn(n,e[1],t),target:en(e[2]),title:e[3]}},render:function(e,t,i){return r("a",{key:i.key,href:n.sanitizer(e.target,"a","href"),title:e.title},t(e.children,i))}},t[16]={match:Je(Y),order:0,parse:function(e){return{children:[{text:e[1],type:b}],target:e[1],type:k}}},t[17]={match:function(e,n){return n.inAnchor?null:Je(K)(e,n)},order:0,parse:function(e){return{children:[{text:e[1],type:b}],target:e[1],title:void 0,type:k}}},t[18]={match:Je(Q),order:0,parse:function(e){var n=e[1],t=e[1];return C.test(t)||(t="mailto:"+t),{children:[{text:n.replace("mailto:",""),type:b}],target:t,type:k}}},t[20]=Ne(r,1),t[33]=Ne(r,2),t[19]={match:Ve(H),order:3,parse:gn,render:function(){return"\n"}},t[21]={match:Qe,order:3,parse:hn,render:function(e,n,t){return r("p",{key:t.key},n(e.children,t))}},t[22]={match:Je(te),order:0,parse:function(e){return c[e[1]]={target:e[2],title:e[4]},{}},render:yn},t[23]={match:Xe(re),order:0,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},render:function(e,t,i){return c[e.ref]?r("img",{key:i.key,alt:e.alt,src:n.sanitizer(c[e.ref].target,"img","src"),title:c[e.ref].title}):null}},t[24]={match:Je(ie),order:0,parse:function(e,n,t){return{children:n(e[1],t),fallbackChildren:n(e[0].replace(ae,"\\$1"),t),ref:e[2]}},render:function(e,t,i){return c[e.ref]?r("a",{key:i.key,href:n.sanitizer(c[e.ref].target,"a","href"),title:c[e.ref].title},t(e.children,i)):r("span",{key:i.key},t(e.fallbackChildren,i))}},t[25]={match:Ve(ne),order:1,parse:qe,render:function(e,n,t){var i=e;return r("table",{key:t.key},r("thead",null,r("tr",null,i.header.map(function(e,a){return r("th",{key:a,style:Ze(i,a)},n(e,t))}))),r("tbody",null,i.cells.map(function(e,a){return r("tr",{key:a},e.map(function(e,a){return r("td",{key:a,style:Ze(i,a)},n(e,t))}))})))}},t[b]={match:Ke(ve),order:4,parse:function(e){return{text:e[0].replace(q,function(e,t){return n.namedCodesToUnicode[t]?n.namedCodesToUnicode[t]:e})}},render:function(e){return e.text}},t[28]={match:Xe(pe),order:2,parse:function(e,n,t){return{children:n(e[2],t)}},render:function(e,n,t){return r("strong",{key:t.key},n(e.children,t))}},t[29]={match:Xe(me),order:3,parse:function(e,n,t){return{children:n(e[2],t)}},render:function(e,n,t){return r("em",{key:t.key},n(e.children,t))}},t[30]={match:Xe(ye),order:1,parse:function(e){return{text:e[1],type:b}}},t[31]={match:Xe(he),order:3,parse:hn,render:function(e,n,t){return r("mark",{key:t.key},n(e.children,t))}},t[32]={match:Xe(ge),order:3,parse:hn,render:function(e,n,t){return r("del",{key:t.key},n(e.children,t))}},t);!0===n.disableParsingRawHTML&&(delete u[11],delete u[13]);var s,d=function(e){var n=Object.keys(e);function t(r,i){var a=[];for(i.prevCapture=i.prevCapture||"";r;)for(var o=0;o<n.length;){var l=n[o],c=e[l],u=c.match(r,i);if(u){var s=u[0];i.prevCapture+=s,r=r.substring(s.length);var d=c.parse(u,t,i);null==d.type&&(d.type=l),a.push(d);break}o++}return i.prevCapture="",a}return n.sort(function(n,t){var r=e[n].order,i=e[t].order;return r!==i?r-i:n<t?-1:1}),function(e,n){return t(function(e){return e.replace(L,"\n").replace(P,"").replace(le,"    ")}(e),n)}}(u),f=(s=function(e,n){return function(t,r,i){var a=e[t.type].render;return n?n(function(){return a(t,r,i)},t,r,i):a(t,r,i)}}(u,n.renderRule),function e(n,t){if(void 0===t&&(t={}),Array.isArray(n)){for(var r=t.key,i=[],a=!1,o=0;o<n.length;o++){t.key=o;var l=e(n[o],t),c="string"==typeof l;c&&a?i[i.length-1]+=l:null!==l&&i.push(l),a=c}return t.key=r,i}return s(n,e,t)}),p=i(e);return o.length?r("div",null,p,r("footer",{key:"footer"},o.map(function(e){return r("div",{id:n.slugify(e.identifier,Be),key:e.identifier},e.identifier,f(d(e.footnote,{inline:!0})))}))):p}function En(e){var n=e.children,t=void 0===n?"":n,r=e.options,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n.indexOf(t=a[r])>=0||(i[t]=e[t]);return i}(e,v);return l.cloneElement(bn(t,r),i)}function wn(){var e=l.useState(document.getElementById("sample-content").textContent.trim()),n=e[0],t=e[1],r=l.useCallback(function(e){return t(e.target.value)},[]);/*#__PURE__*/return l.createElement("main",null,/*#__PURE__*/l.createElement(Cn,null),/*#__PURE__*/l.createElement(jn,null,/*#__PURE__*/l.createElement("a",{target:"_blank",href:"https://github.com/quantizor/markdown-to-jsx",title:"Check out the markdown-to-jsx source code",rel:"noopener noreferrer"},/*#__PURE__*/l.createElement("img",{src:"./images/logo.svg",alt:"markdown-to-jsx logo"})),/*#__PURE__*/l.createElement(Sn,null,/*#__PURE__*/l.createElement("h1",null,/*#__PURE__*/l.createElement("code",null,"markdown-to-jsx")," is an easy-to-use markdown component that takes Github-flavored Markdown (GFM) and makes native JSX without dangerous hacks. "),/*#__PURE__*/l.createElement("h2",null,"It's lightweight, customizable, and happily supports React-like libraries.")),/*#__PURE__*/l.createElement(Mn,null,"See the"," ",/*#__PURE__*/l.createElement("a",{target:"_blank",href:"https://github.com/quantizor/markdown-to-jsx/blob/main/README.md",rel:"noopener noreferrer"},"project README")," ","for detailed installation & usage instructions.")),/*#__PURE__*/l.createElement(An,null,/*#__PURE__*/l.createElement(Tn,{onInput:r,value:n}),/*#__PURE__*/l.createElement($n,null,/*#__PURE__*/l.createElement(En,{options:Hn},n))))}var zn="cornflowerblue",On="#fefefe",Cn=t.createGlobalStyle(an||(an=f(["\n\t*,\n\t*::before,\n\t*::after {\n\t\tbox-sizing: border-box;\n\t\toutline-color: ",";\n\t}\n\n\thtml,\n\tbody,\n\t#root,\n\tmain {\n\t\tmargin: 0;\n\t\tmin-height: 100vh;\n\t}\n\n\thtml {\n\t\tbackground: #1a1c23;\n\t\tcolor: ",";\n\t\tfont-family: Inter, Helvetica Neue, Helvetica, sans-serif;\n\t\tfont-size: 14px;\n\t\tline-height: 1.5;\n\t}\n\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6 {\n\t\tmargin: 0 0 1rem;\n    text-wrap: balance;\n\t}\n\n\th1 {\n\t\tfont-size: 2rem;\n\t}\n\n\th2 {\n\t\tfont-size: 1.8rem;\n\t}\n\n\th3 {\n\t\tfont-size: 1.6rem;\n\t}\n\n\th4 {\n\t\tfont-size: 1.4rem;\n\t}\n\n\th5 {\n\t\tfont-size: 1.2rem;\n\t}\n\n\th6 {\n\t\tfont-size: 1rem;\n\t}\n\n\ta {\n\t\tcolor: ",";\n\t\ttransition: color 200ms ease;\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\tcolor: color-mix(in srgb, "," 75%, transparent);\n\t\t}\n\t}\n\n  :root {\n    --code-bg: color-mix(in srgb, "," 15%, transparent);\n  }\n\n\tcode {\n    background: var(--code-bg) !important;\n    border-radius: 2px;\n\t\tdisplay: inline-block;\n    font-family: 'Jetbrains Mono', Consolas, Monaco, monospace;\n    font-size: 0.9em;\n\t\tpadding: 0 4px;\n    text-decoration: inherit;\n\t}\n\n\tpre code {\n\t\tborder: 0;\n\t\tdisplay: block;\n\t\tpadding: 1em;\n\t}\n\n\tmain {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tpadding: 3rem 1.5rem 0;\n\t\tmargin: 0;\n\n\t\t@media all and (min-width: 1024px) {\n\t\t\tpadding: 3rem;\n\t\t}\n\t}\n\n  p {\n    text-wrap: balance;\n  }\n"])),zn,On,zn,zn,zn),jn=u.default.header(on||(on=f(["\n  flex-shrink: 0;\n  margin-bottom: 2em;\n  text-align: center;\n\n  img {\n    height: 100px;\n  }\n"]))),Sn=u.default.p(ln||(ln=f(["\n  font-size: 16px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 60vw;\n\n  h1,\n  h2 {\n    font: inherit;\n  }\n\n  @media all and (max-width: 500px) {\n    max-width: none;\n  }\n\n  @media all and (max-width: 1023px) {\n    h1,\n    h2 {\n      display: block;\n      margin-bottom: 1.5rem;\n    }\n  }\n"]))),Mn=u.default.p(cn||(cn=f(["\n  color: color-mix(in srgb, "," 20%, white);\n"])),On),Rn=t.css(un||(un=f(["\n  flex: 0 0 50%;\n  padding: 1em;\n"]))),An=u.default.section(sn||(sn=f(["\n  display: flex;\n  flex-grow: 1;\n  margin-left: -1.5rem;\n  margin-right: -1.5rem;\n\n  @media all and (min-width: 1024px) {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  @media all and (max-width: 500px) {\n    flex-direction: column;\n  }\n"]))),Tn=u.default.textarea(dn||(dn=f(["\n  ",";\n  background: color-mix(in srgb, "," 10%, transparent);\n  border: 0;\n  color: inherit;\n  position: sticky;\n  top: 0;\n  font-family: 'Jetbrains Mono', Consolas, Monaco, monospace;\n  font-size: inherit;\n  max-height: 100vh;\n\n  @media all and (max-width: 500px) {\n    height: 300px;\n    position: relative;\n  }\n"])),Rn,zn),$n=u.default.div(fn||(fn=f(["\n  ",";\n  padding-left: 2rem;\n  padding-right: 1rem;\n  overflow: auto;\n  overflow-x: hidden;\n"])),Rn),In=u.default.button(pn||(pn=f(["\n  background: color-mix(in srgb, "," 50%, black);\n  border: 1px solid color-mix(in srgb, "," 50%, transparent);\n  border-radius: 2px;\n  color: #fff;\n  cursor: pointer;\n  padding: 0.25em 0.75em;\n  font: inherit;\n  transition: background 200ms ease;\n\n  &:hover,\n  &:focus {\n    background: ",";\n  }\n\n  &:active {\n    background: color-mix(in srgb, "," 80%, black);\n  }\n"])),zn,zn,zn,zn),Hn={overrides:{code:function(e){var n=l.useRef(null);return l.useEffect(function(){var t;n.current&&null!=(t=e.className)&&t.includes("lang-")&&window.hljs&&(window.hljs.highlightElement(n.current),n.current.removeAttribute("data-highlighted"))},[e.className,e.children]),/*#__PURE__*/l.createElement("code",d({},e,{ref:n}))},MyComponent:{component:function(e){/*#__PURE__*/return l.createElement(In,d({},e,{onClick:function(){alert("Look ma, I'm a real component!")}}))}}},renderRule:function(e,n,t,r){return"3"===n.type&&"latex"===n.lang?/*#__PURE__*/l.createElement(m,{as:"div",key:r.key,style:{margin:"1.5em 0"}},String.raw(mn||(mn=f(["",""])),n.text)):e()}};c.render(/*#__PURE__*/l.createElement(wn,null),document.getElementById("root"))}(React,ReactDOM,styled,katex);
//# sourceMappingURL=markdown-to-jsx.js.map
