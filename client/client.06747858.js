function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function h(t){return null==t?"":t}let f,d,m=!1;function p(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function g(t,e){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(s>0&&e[n[s]].claim_order<=o?s+1:p(1,s,(t=>e[n[t]].claim_order),o))-1;r[t]=n[i]+1;const a=i+1;n[a]=t,s=Math.max(a,s)}const o=[],i=[];let a=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){m&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function x(){return E("")}function A(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function T(t){return function(e){return e.preventDefault(),t.call(this,e)}}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:N(t,r,e[r])}function L(t){return Array.from(t.childNodes)}function I(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,r,s=!1){I(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function k(t,e,n,r){return R(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}function H(t,e,n){return k(t,e,n,$)}function O(t,e,n){return k(t,e,n,w)}function C(t,e){return R(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function U(t){return C(t," ")}function M(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function j(t){const e=M(t,"HTML_TAG_START",0),n=M(t,"HTML_TAG_END",e);if(e===n)return new V;I(t);const r=t.splice(e,n+1);y(r[0]),y(r[r.length-1]);const s=r.slice(1,r.length-1);for(const e of s)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new V(s)}function G(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t,e){t.value=null==e?"":e}function B(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function z(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=$("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=B();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=A(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=A(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(r||s&&n.contentWindow)&&s(),y(n)}}function q(t,e=document.body){return Array.from(e.querySelectorAll(t))}class V extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=$(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(y)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function W(t){d=t}function J(){if(!d)throw new Error("Function called outside component initialization");return d}function K(t){J().$$.on_mount.push(t)}function F(t){J().$$.after_update.push(t)}function Y(t){J().$$.on_destroy.push(t)}const X=[],Q=[],Z=[],tt=[],et=Promise.resolve();let nt=!1;function rt(t){Z.push(t)}let st=!1;const ot=new Set;function it(){if(!st){st=!0;do{for(let t=0;t<X.length;t+=1){const e=X[t];W(e),at(e.$$)}for(W(null),X.length=0;Q.length;)Q.pop()();for(let t=0;t<Z.length;t+=1){const e=Z[t];ot.has(e)||(ot.add(e),e())}Z.length=0}while(X.length);for(;tt.length;)tt.pop()();nt=!1,st=!1,ot.clear()}}function at(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rt)}}const ct=new Set;let lt;function ut(){lt={r:0,c:[],p:lt}}function ht(){lt.r||s(lt.c),lt=lt.p}function ft(t,e){t&&t.i&&(ct.delete(t),t.i(e))}function dt(t,e,n,r){if(t&&t.o){if(ct.has(t))return;ct.add(t),lt.c.push((()=>{ct.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function mt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function pt(t){return"object"==typeof t&&null!==t?t:{}}function gt(t){t&&t.c()}function bt(t,e){t&&t.l(e)}function vt(t,e,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,r),i||rt((()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(rt)}function yt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){-1===t.$$.dirty[0]&&(X.push(t),nt||(nt=!0,et.then(it)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $t(e,n,o,i,a,c,l,u=[-1]){const h=d;W(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||h.$$.root};l&&l(f.root);let p=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),p&&_t(e,t)),n})):[],f.update(),p=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){m=!0;const t=L(n.target);f.fragment&&f.fragment.l(t),t.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&ft(e.$$.fragment),vt(e,n.target,n.anchor,n.customElement),m=!1,it()}W(h)}class wt{$destroy(){yt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Et=[];function St(e,n=t){let r;const s=new Set;function o(t){if(i(e,t)&&(e=t,r)){const t=!Et.length;for(const t of s)t[1](),Et.push(t,e);if(t){for(let t=0;t<Et.length;t+=2)Et[t][0](Et[t+1]);Et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||t),i(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const xt={};var At={owner:"abteilung",repo:"upptime",sites:[{name:"Abteilung.ch",url:"https://abteilung.ch"},{name:"Aarvia AG",url:"https://aarvia.ch"},{name:"Ades.ch",url:"https://ades.ch"},{name:"Ally.Vision",url:"https://ally.vision"},{name:"My.Ally.Vision",url:"https://my.ally.vision"},{name:"Asago AG",url:"https://asago.ch"},{name:"Barcli Hotels",url:"https://barclihotels.com"},{name:"Barcli Hospitality",url:"https://barclihospitality.com"},{name:"DSIM",url:"https://dsim.ch"},{name:"EAO",url:"https://eao.com"},{name:"Forum Pfarrblatt",url:"https://forum-pfarrblatt.ch"},{name:"Heryanora",url:"https://heryanora.com"},{name:"Hoffmann Coaching",url:"https://hoffmanncoaching.ch"},{name:"Landolf & Huber Juweliere",url:"https://landolfhuber.ch"},{name:"Lesen & Schreiben Bern",url:"https://lesenschreiben-bern.ch/"},{name:"Lyner Haustechnik AG",url:"https://lyner-haustechnik.ch/"},{name:"Macun CP",url:"https://macuncp.ch"},{name:"Matthias Lebo",url:"https://matthiaslebo.com"},{name:"Neuezeit Akademie",url:"https://neuezeit-akademie.swiss"},{name:"Pfaller AG",url:"https://pfaller.ch"},{name:"Rychiger AG",url:"https://rychiger.ch"},{name:"Schweizer Röntgen",url:"https://schweizer-roentgen.ch"},{name:"Selfix AG",url:"https://selfix.ch"},{name:"Swiss CCS",url:"https://swissccs.ch"},{name:"SGUV",url:"https://sguv.ch"},{name:"Urimat",url:"https://urimat.ch"},{name:"Wikipick",url:"https://wikipick.ch"},{name:"Zweidler",url:"https://2dler.ch"}],"status-website":{baseUrl:"/upptime",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Upptime",introTitle:"**Upptime** Website Status Monitor.",introMessage:null,navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://abteilung.github.io/upptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Tt(t,e,n){const r=t.slice();return r[1]=e[n],r}function Nt(e){let n,r,s,o=At["status-website"]&&!At["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=$("img"),this.h()},l(t){n=H(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,r=At["status-website"].logoUrl)||N(n,"src",r),N(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}(),i=At["status-website"]&&!At["status-website"].hideNavTitle&&function(e){let n,r,s=At["status-website"].name+"";return{c(){n=$("div"),r=E(s)},l(t){n=H(t,"DIV",{});var e=L(n);r=C(e,s),e.forEach(y)},m(t,e){v(t,n,e),g(n,r)},p:t,d(t){t&&y(n)}}}();return{c(){n=$("div"),r=$("a"),o&&o.c(),s=S(),i&&i.c(),this.h()},l(t){n=H(t,"DIV",{});var e=L(n);r=H(e,"A",{href:!0,class:!0});var a=L(r);o&&o.l(a),s=U(a),i&&i.l(a),a.forEach(y),e.forEach(y),this.h()},h(){N(r,"href",At["status-website"].logoHref||At.path),N(r,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),o&&o.m(r,null),g(r,s),i&&i.m(r,null)},p(t,e){At["status-website"]&&!At["status-website"].hideNavLogo&&o.p(t,e),At["status-website"]&&!At["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&y(n),o&&o.d(),i&&i.d()}}}function Pt(t){let e,n,r,s,o,i,a=t[1].title+"";return{c(){e=$("li"),n=$("a"),r=E(a),i=S(),this.h()},l(t){e=H(t,"LI",{});var s=L(e);n=H(s,"A",{"aria-current":!0,href:!0,class:!0});var o=L(n);r=C(o,a),o.forEach(y),i=U(s),s.forEach(y),this.h()},h(){N(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),N(n,"href",o=t[1].href.replace("$OWNER",At.owner).replace("$REPO",At.repo)),N(n,"class","svelte-a08hsz")},m(t,s){v(t,e,s),g(e,n),g(n,r),g(e,i)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&N(n,"aria-current",s)},d(t){t&&y(e)}}}function Lt(e){let n,r,s,o,i,a=At["status-website"]&&At["status-website"].logoUrl&&Nt(),c=At["status-website"]&&At["status-website"].navbar&&function(t){let e,n=At["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=Pt(Tt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(1&s){let o;for(n=At["status-website"].navbar,o=0;o<n.length;o+=1){const i=Tt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Pt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&y(e)}}}(e),l=At["status-website"]&&At["status-website"].navbarGitHub&&!At["status-website"].navbar&&function(e){let n,r,s,o=At.i18n.navGitHub+"";return{c(){n=$("li"),r=$("a"),s=E(o),this.h()},l(t){n=H(t,"LI",{});var e=L(n);r=H(e,"A",{href:!0,class:!0});var i=L(r);s=C(i,o),i.forEach(y),e.forEach(y),this.h()},h(){N(r,"href",`https://github.com/${At.owner}/${At.repo}`),N(r,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),g(r,s)},p:t,d(t){t&&y(n)}}}();return{c(){n=$("nav"),r=$("div"),a&&a.c(),s=S(),o=$("ul"),c&&c.c(),i=S(),l&&l.c(),this.h()},l(t){n=H(t,"NAV",{class:!0});var e=L(n);r=H(e,"DIV",{class:!0});var u=L(r);a&&a.l(u),s=U(u),o=H(u,"UL",{class:!0});var h=L(o);c&&c.l(h),i=U(h),l&&l.l(h),h.forEach(y),u.forEach(y),e.forEach(y),this.h()},h(){N(o,"class","svelte-a08hsz"),N(r,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(t,[e]){At["status-website"]&&At["status-website"].logoUrl&&a.p(t,e),At["status-website"]&&At["status-website"].navbar&&c.p(t,e),At["status-website"]&&At["status-website"].navbarGitHub&&!At["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&y(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function It(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Rt extends wt{constructor(t){super(),$t(this,t,It,Lt,i,{segment:0})}}var kt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ht(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ot(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ct(t,e){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},h=0;function f(t){var e=kt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function d(){for(var t="";c.length;)t+=f(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(t);)r=t.substring(h,s.index),h=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Ht(Ot(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Ct(Ht(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+Ot(s[8])+'" alt="'+Ot(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Ot(s[11]||u[r.toLowerCase()])+'">'),n=d()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Ct(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+Ot(s[16])+"</code>":(s[17]||s[1])&&(n=f(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(h)+d()).replace(/^\n+|\n+$/g,"")}function Ut(t,e,n){const r=t.slice();return r[3]=e[n],r}function Mt(t,e,n){const r=t.slice();return r[3]=e[n],r}function jt(t,e,n){const r=t.slice();return r[8]=e[n],r}function Gt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=H(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${At.path}/themes/${(At["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function Dt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=H(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(At["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function Bt(e){let n,r;return{c(){n=$("script"),this.h()},l(t){n=H(t,"SCRIPT",{src:!0}),L(n).forEach(y),this.h()},h(){c(n.src,r=e[8].src)||N(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function zt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=H(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",e[3].rel),N(n,"href",e[3].href),N(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function qt(e){let n;return{c(){n=$("meta"),this.h()},l(t){n=H(t,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",e[3].name),N(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function Vt(e){let n,r,s,o,i,a,c,u,h,f,d,m,p,b,w,E,A,T,P=Ct(At.i18n.footer.replace(/\$REPO/,`https://github.com/${At.owner}/${At.repo}`))+"",I=(At["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(At["status-website"]||{}).customHeadHtml+"";return{c(){n=new V,r=x(),this.h()},l(t){n=j(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}();let R=((At["status-website"]||{}).themeUrl?Dt:Gt)(e),k=(At["status-website"]||{}).scripts&&function(t){let e,n=(At["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=Bt(jt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(At["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=jt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Bt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&y(e)}}}(e),O=(At["status-website"]||{}).links&&function(t){let e,n=(At["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=zt(Mt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(At["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Mt(t,n,o);r[o]?r[o].p(i,s):(r[o]=zt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&y(e)}}}(e),C=(At["status-website"]||{}).metaTags&&function(t){let e,n=(At["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=qt(Ut(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(At["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ut(t,n,o);r[o]?r[o].p(i,s):(r[o]=qt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&y(e)}}}(e),M=At["status-website"].css&&function(e){let n,r,s=`<style>${At["status-website"].css}</style>`;return{c(){n=new V,r=x(),this.h()},l(t){n=j(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}(),G=At["status-website"].js&&function(e){let n,r,s=`<script>${At["status-website"].js}<\/script>`;return{c(){n=new V,r=x(),this.h()},l(t){n=j(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}(),D=(At["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(At["status-website"]||{}).customBodyHtml+"";return{c(){n=new V,r=x(),this.h()},l(t){n=j(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}();m=new Rt({props:{segment:e[0]}});const B=e[2].default,z=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(B,e,e[1],null);return{c(){I&&I.c(),n=x(),R.c(),r=$("link"),s=$("link"),o=$("link"),k&&k.c(),i=x(),O&&O.c(),a=x(),C&&C.c(),c=x(),M&&M.c(),u=x(),G&&G.c(),h=x(),f=S(),D&&D.c(),d=S(),gt(m.$$.fragment),p=S(),b=$("main"),z&&z.c(),w=S(),E=$("footer"),A=$("p"),this.h()},l(t){const e=q('[data-svelte="svelte-ri9y7q"]',document.head);I&&I.l(e),n=x(),R.l(e),r=H(e,"LINK",{rel:!0,href:!0}),s=H(e,"LINK",{rel:!0,type:!0,href:!0}),o=H(e,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(e),i=x(),O&&O.l(e),a=x(),C&&C.l(e),c=x(),M&&M.l(e),u=x(),G&&G.l(e),h=x(),e.forEach(y),f=U(t),D&&D.l(t),d=U(t),bt(m.$$.fragment,t),p=U(t),b=H(t,"MAIN",{class:!0});var l=L(b);z&&z.l(l),l.forEach(y),w=U(t),E=H(t,"FOOTER",{class:!0});var g=L(E);A=H(g,"P",{}),L(A).forEach(y),g.forEach(y),this.h()},h(){N(r,"rel","stylesheet"),N(r,"href",`${At.path}/global.css`),N(s,"rel","icon"),N(s,"type","image/svg"),N(s,"href",(At["status-website"]||{}).faviconSvg||(At["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(At["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(E,"class","svelte-jbr799")},m(t,e){I&&I.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),k&&k.m(document.head,null),g(document.head,i),O&&O.m(document.head,null),g(document.head,a),C&&C.m(document.head,null),g(document.head,c),M&&M.m(document.head,null),g(document.head,u),G&&G.m(document.head,null),g(document.head,h),v(t,f,e),D&&D.m(t,e),v(t,d,e),vt(m,t,e),v(t,p,e),v(t,b,e),z&&z.m(b,null),v(t,w,e),v(t,E,e),g(E,A),A.innerHTML=P,T=!0},p(t,[e]){(At["status-website"]||{}).customHeadHtml&&I.p(t,e),R.p(t,e),(At["status-website"]||{}).scripts&&k.p(t,e),(At["status-website"]||{}).links&&O.p(t,e),(At["status-website"]||{}).metaTags&&C.p(t,e),At["status-website"].css&&M.p(t,e),At["status-website"].js&&G.p(t,e),(At["status-website"]||{}).customBodyHtml&&D.p(t,e);const n={};1&e&&(n.segment=t[0]),m.$set(n),z&&z.p&&(!T||2&e)&&function(t,e,n,r,s,o){if(s){const i=l(e,n,r,o);t.p(i,s)}}(z,B,t,t[1],T?function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(B,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){T||(ft(m.$$.fragment,t),ft(z,t),T=!0)},o(t){dt(m.$$.fragment,t),dt(z,t),T=!1},d(t){I&&I.d(t),y(n),R.d(t),y(r),y(s),y(o),k&&k.d(t),y(i),O&&O.d(t),y(a),C&&C.d(t),y(c),M&&M.d(t),y(u),G&&G.d(t),y(h),t&&y(f),D&&D.d(t),t&&y(d),yt(m,t),t&&y(p),t&&y(b),z&&z.d(t),t&&y(w),t&&y(E)}}}function Wt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class Jt extends wt{constructor(t){super(),$t(this,t,Wt,Vt,i,{segment:0})}}function Kt(t){let e,n,r=t[1].stack+"";return{c(){e=$("pre"),n=E(r)},l(t){e=H(t,"PRE",{});var s=L(e);n=C(s,r),s.forEach(y)},m(t,r){v(t,e,r),g(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&G(n,r)},d(t){t&&y(e)}}}function Ft(e){let n,r,s,o,i,a,c,l,u,h=e[1].message+"";document.title=n=e[0];let f=e[2]&&e[1].stack&&Kt(e);return{c(){r=S(),s=$("h1"),o=E(e[0]),i=S(),a=$("p"),c=E(h),l=S(),f&&f.c(),u=x(),this.h()},l(t){q('[data-svelte="svelte-1moakz"]',document.head).forEach(y),r=U(t),s=H(t,"H1",{class:!0});var n=L(s);o=C(n,e[0]),n.forEach(y),i=U(t),a=H(t,"P",{class:!0});var d=L(a);c=C(d,h),d.forEach(y),l=U(t),f&&f.l(t),u=x(),this.h()},h(){N(s,"class","svelte-17w3omn"),N(a,"class","svelte-17w3omn")},m(t,e){v(t,r,e),v(t,s,e),g(s,o),v(t,i,e),v(t,a,e),g(a,c),v(t,l,e),f&&f.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&G(o,t[0]),2&e&&h!==(h=t[1].message+"")&&G(c,h),t[2]&&t[1].stack?f?f.p(t,e):(f=Kt(t),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&y(r),t&&y(s),t&&y(i),t&&y(a),t&&y(l),f&&f.d(t),t&&y(u)}}}function Yt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class Xt extends wt{constructor(t){super(),$t(this,t,Yt,Ft,i,{status:0,error:1})}}function Qt(t){let n,r,s;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&gt(n.$$.fragment),r=x()},l(t){n&&bt(n.$$.fragment,t),r=x()},m(t,e){n&&vt(n,t,e),v(t,r,e),s=!0},p(t,e){const s=16&e?mt(o,[pt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ut();const t=n;dt(t.$$.fragment,1,0,(()=>{yt(t,1)})),ht()}i?(n=new i(a()),gt(n.$$.fragment),ft(n.$$.fragment,1),vt(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(t){s||(n&&ft(n.$$.fragment,t),s=!0)},o(t){n&&dt(n.$$.fragment,t),s=!1},d(t){t&&y(r),n&&yt(n,t)}}}function Zt(t){let e,n;return e=new Xt({props:{error:t[0],status:t[1]}}),{c(){gt(e.$$.fragment)},l(t){bt(e.$$.fragment,t)},m(t,r){vt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(ft(e.$$.fragment,t),n=!0)},o(t){dt(e.$$.fragment,t),n=!1},d(t){yt(e,t)}}}function te(t){let e,n,r,s;const o=[Zt,Qt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){i[e].m(t,n),v(t,r,n),s=!0},p(t,s){let c=e;e=a(t),e===c?i[e].p(t,s):(ut(),dt(i[c],1,1,(()=>{i[c]=null})),ht(),n=i[e],n?n.p(t,s):(n=i[e]=o[e](t),n.c()),ft(n,1),n.m(r.parentNode,r))},i(t){s||(ft(n),s=!0)},o(t){dt(n),s=!1},d(t){i[e].d(t),t&&y(r)}}}function ee(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[te]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new Jt({props:o}),{c(){gt(n.$$.fragment)},l(t){bt(n.$$.fragment,t)},m(t,e){vt(n,t,e),r=!0},p(t,[e]){const r=12&e?mt(s,[4&e&&{segment:t[2][0]},8&e&&pt(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(ft(n.$$.fragment,t),r=!0)},o(t){dt(n.$$.fragment,t),r=!1},d(t){yt(n,t)}}}function ne(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,h;return F(l),u=xt,h=r,J().$$.context.set(u,h),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,i,a,c,r,l]}class re extends wt{constructor(t){super(),$t(this,t,ne,ee,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const se=[],oe=[{js:()=>Promise.all([import("./index.d14d0cbf.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.18848ec8.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.948b84af.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.fb9da1b1.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.184a57ac.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ie=(ae=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ae(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ae(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ae;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ce(t,e,n,r){return new(n||(n=Promise))((function(s,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((r=r.apply(t,e||[])).next())}))}function le(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ue,he=1;const fe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},de={};let me,pe;function ge(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function be(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(me))return null;let e=t.pathname.slice(me.length);if(""===e&&(e="/"),!se.some((t=>t.test(e))))for(let n=0;n<ie.length;n+=1){const r=ie[n],s=r.pattern.exec(e);if(s){const n=ge(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:s,page:a}}}}function ve(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=le(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=be(s);if(o){$e(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),fe.pushState({id:ue},"",s.href)}}function ye(){return{x:pageXOffset,y:pageYOffset}}function _e(t){if(de[ue]=ye(),t.state){const e=be(new URL(location.href));e?$e(e,t.state.id):location.href=location.href}else!function(t){he=t}(he+1),function(t){ue=t}(he),fe.replaceState({id:ue},"",location.href)}function $e(t,e,n,r){return ce(this,void 0,void 0,(function*(){const s=!!e;if(s)ue=e;else{const t=ye();de[ue]=t,ue=e=++he,de[ue]=n?t:{x:0,y:0}}if(yield pe(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=de[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),de[ue]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function we(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ee,Se=null;function xe(t){const e=le(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=be(new URL(t,we(document)));if(e)Se&&t===Se.href||(Se={href:t,promise:Be(e)}),Se.promise}(e.href)}function Ae(t){clearTimeout(Ee),Ee=setTimeout((()=>{xe(t)}),20)}function Te(t,e={noscroll:!1,replaceState:!1}){const n=be(new URL(t,we(document)));if(n){const r=$e(n,null,e.noscroll);return fe[e.replaceState?"replaceState":"pushState"]({id:ue},"",t),r}return location.href=t,new Promise((()=>{}))}const Ne="undefined"!=typeof __SAPPER__&&__SAPPER__;let Pe,Le,Ie,Re=!1,ke=[],He="{}";const Oe={page:function(t){const e=St(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:St(null),session:St(Ne&&Ne.session)};let Ce,Ue,Me;function je(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Ge(t){return ce(this,void 0,void 0,(function*(){Pe&&Oe.preloading.set(!0);const e=function(t){return Se&&Se.href===t.href?Se.promise:Be(t)}(t),n=Le={},r=yield e,{redirect:s}=r;if(n===Le)if(s)yield Te(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield De(n,e,je(e,t.page))}}))}function De(t,e,n){return ce(this,void 0,void 0,(function*(){Oe.page.set(n),Oe.preloading.set(!1),Pe?Pe.$set(e):(e.stores={page:{subscribe:Oe.page.subscribe},preloading:{subscribe:Oe.preloading.subscribe},session:Oe.session},e.level0={props:yield Ie},e.notify=Oe.page.notify,Pe=new re({target:Me,props:e,hydrate:!0})),ke=t,He=JSON.stringify(n.query),Re=!0,Ue=!1}))}function Be(t){return ce(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Ie){const t=()=>({});Ie=Ne.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ce)}let a,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>ce(this,void 0,void 0,(function*(){const h=r[a];if(function(t,e,n,r){if(r!==He)return!0;const s=ke[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,h,l,s)&&(u=!0),o.segments[c]=r[a+1],!e)return{segment:h};const f=c++;let d;if(Ue||u||!ke[a]||ke[a].part!==e.i){u=!1;const{default:r,preload:s}=yield oe[e.i].js();let o;o=Re||!Ne.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ce):{}:Ne.preloaded[a+1],d={component:r,props:o,segment:h,match:l,part:e.i}}else d=ke[a];return o[`level${f}`]=d})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var ze,qe,Ve;Oe.session.subscribe((t=>ce(void 0,void 0,void 0,(function*(){if(Ce=t,!Re)return;Ue=!0;const e=be(new URL(location.href)),n=Le={},{redirect:r,props:s,branch:o}=yield Be(e);n===Le&&(r?yield Te(r.location,{replaceState:!0}):yield De(o,s,je(s,e.page)))})))),ze={target:document.querySelector("#sapper")},qe=ze.target,Me=qe,Ve=Ne.baseUrl,me=Ve,pe=Ge,"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{fe.scrollRestoration="auto"})),addEventListener("load",(()=>{fe.scrollRestoration="manual"})),addEventListener("click",ve),addEventListener("popstate",_e),addEventListener("touchstart",xe),addEventListener("mousemove",Ae),Ne.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Ne;Ie||(Ie=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Ie},level1:{props:{status:o,error:i},component:Xt},segments:s},c=ge(n);De([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;fe.replaceState({id:he},"",e);const n=be(new URL(location.href));if(n)return $e(n,he,!0,t)}));export{yt as A,A as B,s as C,Q as D,j as E,c as F,h as G,V as H,q as I,Ct as J,w as K,O as L,Te as M,D as N,T as O,e as P,P as Q,mt as R,wt as S,F as T,Y as U,u as V,pt as W,rt as X,z as Y,L as a,C as b,H as c,y as d,$ as e,N as f,v as g,g as h,$t as i,S as j,U as k,ut as l,dt as m,t as n,ht as o,ft as p,K as q,At as r,i as s,E as t,G as u,x as v,_ as w,gt as x,bt as y,vt as z};

import __inject_styles from './inject_styles.803b7e80.js';