import{S as e,i as t,s as a,e as r,c as n,a as s,d as l,b as i,f as o,E as c,I as d,J as h,A as u,t as f,k as p,g as m,n as g,h as v,K as y,L as I,j as b,m as $,o as w,M as x,x as E,u as T,v as k,N as D,O as A,P as V,Q as B,w as P,R as S,r as N,T as Y}from"../chunks/vendor-4f788082.js";function M(e){let t,a;return{c(){t=r("div"),a=r("div"),this.h()},l(e){t=n(e,"DIV",{class:!0});var r=s(t);a=n(r,"DIV",{id:!0}),s(a).forEach(l),r.forEach(l),this.h()},h(){i(a,"id",e[0]),i(t,"class","yt-component")},m(e,r){o(e,t,r),c(t,a)},p:d,i:d,o:d,d(e){e&&l(t)}}}let R=!1;function C(e,t,a){let{playerTime:r}=t,{player:n}=t;const s=h();let l="player_"+parseInt(1e5*Math.random()).toString(),{videoId:i}=t,{height:o="390"}=t,{width:c="640"}=t;function d({data:e}){s("StateChange",e),2!==e&&1!==e||a(1,r=n.getCurrentTime())}return u((()=>{let e="https://www.youtube.com/iframe_api";if(!function(e=""){for(var t=document.getElementsByTagName("script"),a=t.length;a--;)if(t[a].src==e)return!0;return!1}(e)){var t=document.createElement("script");t.src=e;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}function s(){a(2,n=new YT.Player(l,{height:o,width:c,videoId:i,events:{onStateChange:d}}))}window.onYouTubeIframeAPIReady=function(){window.dispatchEvent(new Event("YouTubeIframeAPIReady"))},window.addEventListener("YouTubeIframeAPIReady",(function(){0==R&&(R=!0,s())})),R&&s()})),e.$$set=e=>{"playerTime"in e&&a(1,r=e.playerTime),"player"in e&&a(2,n=e.player),"videoId"in e&&a(3,i=e.videoId),"height"in e&&a(4,o=e.height),"width"in e&&a(5,c=e.width)},[l,r,n,i,o,c]}class U extends e{constructor(e){super(),t(this,e,C,M,a,{playerTime:1,player:2,videoId:3,height:4,width:5})}}const O=e=>{let t=~~(e%3600/60),a=~~e%60,r="";return r+=String(~~(e/3600)).padStart(2,"0")+":"+(t<10?"0":""),r+=String(t).padStart(1,"0")+":"+(a<10?"0":""),r+=""+a,r};function j(e,t,a){const r=e.slice();return r[2]=t[a],r}function F(e,t,a){const r=e.slice();return r[2]=t[a],r}function L(e){let t,a,d,h,u,y=e[2].chapter+"";return{c(){t=r("span"),a=r("p"),d=f(y),h=p(),this.h()},l(e){t=n(e,"SPAN",{id:!0,class:!0});var r=s(t);a=n(r,"P",{});var i=s(a);d=m(i,y),i.forEach(l),h=g(r),r.forEach(l),this.h()},h(){i(t,"id",u=`timecode-${e[2].id}`),i(t,"class","flex my-1")},m(e,r){o(e,t,r),c(t,a),c(a,d),c(t,h)},p(e,a){1&a&&y!==(y=e[2].chapter+"")&&v(d,y),1&a&&u!==(u=`timecode-${e[2].id}`)&&i(t,"id",u)},d(e){e&&l(t)}}}function _(e){let t,a,d,h,u;return{c(){t=r("div"),a=f("x\n\t\t\t"),this.h()},l(e){t=n(e,"DIV",{id:!0,class:!0});var r=s(t);a=m(r,"x\n\t\t\t"),r.forEach(l),this.h()},h(){i(t,"id",d=e[2].id),i(t,"class","px-2 my-1 rounded-md bg-gray-200 text-red-500 hover:text-red-900 cursor-pointer font-semibold ")},m(r,n){o(r,t,n),c(t,a),h||(u=y(t,"click",e[1]),h=!0)},p(e,a){1&a&&d!==(d=e[2].id)&&i(t,"id",d)},d(e){e&&l(t),h=!1,u()}}}function H(e){let t,a,h,u,f=e[0],m=[];for(let r=0;r<f.length;r+=1)m[r]=L(F(e,f,r));let v=e[0],y=[];for(let r=0;r<v.length;r+=1)y[r]=_(j(e,v,r));return{c(){t=r("div"),a=r("div");for(let e=0;e<m.length;e+=1)m[e].c();h=p(),u=r("div");for(let e=0;e<y.length;e+=1)y[e].c();this.h()},l(e){t=n(e,"DIV",{class:!0});var r=s(t);a=n(r,"DIV",{id:!0,class:!0});var i=s(a);for(let t=0;t<m.length;t+=1)m[t].l(i);i.forEach(l),h=g(r),u=n(r,"DIV",{class:!0});var o=s(u);for(let t=0;t<y.length;t+=1)y[t].l(o);o.forEach(l),r.forEach(l),this.h()},h(){i(a,"id","chapters"),i(a,"class","w-full rounded-md text-lg p-4 border-2 border-gray-200 bg-gray-300 my-5 bg-opacity-80"),i(u,"class","text-lg p-4 my-5"),i(t,"class","w-full flex")},m(e,r){o(e,t,r),c(t,a);for(let t=0;t<m.length;t+=1)m[t].m(a,null);c(t,h),c(t,u);for(let t=0;t<y.length;t+=1)y[t].m(u,null)},p(e,[t]){if(1&t){let r;for(f=e[0],r=0;r<f.length;r+=1){const n=F(e,f,r);m[r]?m[r].p(n,t):(m[r]=L(n),m[r].c(),m[r].m(a,null))}for(;r<m.length;r+=1)m[r].d(1);m.length=f.length}if(3&t){let a;for(v=e[0],a=0;a<v.length;a+=1){const r=j(e,v,a);y[a]?y[a].p(r,t):(y[a]=_(r),y[a].c(),y[a].m(u,null))}for(;a<y.length;a+=1)y[a].d(1);y.length=v.length}},i:d,o:d,d(e){e&&l(t),I(m,e),I(y,e)}}}function J(e,t,a){let{timeBlocks:r}=t;return e.$$set=e=>{"timeBlocks"in e&&a(0,r=e.timeBlocks)},[r,e=>{let t=e.target.id,n=[...r];n=n.filter((e=>e.id!==t)),a(0,r=[...n])}]}class K extends e{constructor(e){super(),t(this,e,J,H,a,{timeBlocks:0})}}function Q(e){let t,a,r,n;function s(t){e[10](t)}function l(t){e[11](t)}let i={videoId:e[1]};return void 0!==e[2]&&(i.playerTime=e[2]),void 0!==e[3]&&(i.player=e[3]),t=new U({props:i}),D.push((()=>A(t,"playerTime",s))),D.push((()=>A(t,"player",l))),{c(){b(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){w(t,e,a),n=!0},p(e,n){const s={};2&n&&(s.videoId=e[1]),!a&&4&n&&(a=!0,s.playerTime=e[2],x((()=>a=!1))),!r&&8&n&&(r=!0,s.player=e[3],x((()=>r=!1))),t.$set(s)},i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){T(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function q(e){let t,h,u,I,Y,M,R,C,U,j,F,L,_,H,J,q,z,G,W,X,Z,ee,te,ae,re,ne,se=O(e[2])+"",le=e[1],ie=Q(e);function oe(t){e[12](t)}let ce={};return void 0!==e[5]&&(ce.timeBlocks=e[5]),ee=new K({props:ce}),D.push((()=>A(ee,"timeBlocks",oe))),{c(){t=p(),h=r("div"),u=r("div"),I=r("p"),Y=f("Add in a youtube video, and then press enter"),M=p(),R=r("form"),C=r("input"),U=p(),j=r("div"),F=r("h2"),L=f("Add in a title for the chapter, and hit enter"),_=p(),H=r("form"),J=r("div"),q=f(se),z=p(),G=r("input"),W=p(),X=r("div"),ie.c(),Z=p(),b(ee.$$.fragment),this.h()},l(e){V('[data-svelte="svelte-1ds4ix5"]',document.head).forEach(l),t=g(e),h=n(e,"DIV",{});var a=s(h);u=n(a,"DIV",{class:!0});var r=s(u);I=n(r,"P",{});var i=s(I);Y=m(i,"Add in a youtube video, and then press enter"),i.forEach(l),M=g(r),R=n(r,"FORM",{});var o=s(R);C=n(o,"INPUT",{class:!0,type:!0,placeholder:!0}),o.forEach(l),r.forEach(l),U=g(a),j=n(a,"DIV",{class:!0});var c=s(j);F=n(c,"H2",{class:!0});var d=s(F);L=m(d,"Add in a title for the chapter, and hit enter"),d.forEach(l),_=g(c),H=n(c,"FORM",{});var f=s(H);J=n(f,"DIV",{class:!0});var p=s(J);q=m(p,se),p.forEach(l),z=g(f),G=n(f,"INPUT",{class:!0,type:!0,placeholder:!0}),f.forEach(l),c.forEach(l),a.forEach(l),W=g(e),X=n(e,"DIV",{class:!0});var v=s(X);ie.l(v),Z=g(v),$(ee.$$.fragment,v),v.forEach(l),this.h()},h(){document.title="Youtube Time Code Maker",i(C,"class","w-full rounded-md text-lg p-4 border-2 border-gray-200 bg-black text-gray-100 shadow-md"),i(C,"type","text"),i(C,"placeholder","Add in Youtube link"),i(u,"class","py-5"),i(F,"class",""),i(J,"class","flex text-2xl font-light"),i(G,"class","w-full rounded-md text-lg p-4 border-2 border-gray-200 bg-black text-gray-100 shadow-md"),i(G,"type","text"),i(G,"placeholder","Title"),i(j,"class","py-5"),i(X,"class","flex flex-col align-center items-center")},m(a,r){o(a,t,r),o(a,h,r),c(h,u),c(u,I),c(I,Y),c(u,M),c(u,R),c(R,C),B(C,e[0]),c(h,U),c(h,j),c(j,F),c(F,L),c(j,_),c(j,H),c(H,J),c(J,q),c(H,z),c(H,G),B(G,e[4]),o(a,W,r),o(a,X,r),ie.m(X,null),c(X,Z),w(ee,X,null),ae=!0,re||(ne=[y(C,"input",e[8]),y(R,"submit",e[6]),y(G,"input",e[9]),y(H,"submit",e[7])],re=!0)},p(e,[t]){1&t&&C.value!==e[0]&&B(C,e[0]),(!ae||4&t)&&se!==(se=O(e[2])+"")&&v(q,se),16&t&&G.value!==e[4]&&B(G,e[4]),2&t&&a(le,le=e[1])?(N(),T(ie,1,1,d),P(),ie=Q(e),ie.c(),E(ie),ie.m(X,Z)):ie.p(e,t);const r={};!te&&32&t&&(te=!0,r.timeBlocks=e[5],x((()=>te=!1))),ee.$set(r)},i(e){ae||(E(ie),E(ee.$$.fragment,e),ae=!0)},o(e){T(ie),T(ee.$$.fragment,e),ae=!1},d(e){e&&l(t),e&&l(h),e&&l(W),e&&l(X),ie.d(e),k(ee),re=!1,S(ne)}}}function z(e,t,a){let r,n="",s="UU7MgYIbtAk",l=0,i="",o=[];return[n,s,l,r,i,o,e=>{e.preventDefault(),a(1,s=(e=>{const t=e.match("^(?:https?:)?//[^/]*(?:youtube(?:-nocookie)?.com|youtu.be).*[=/]([-\\w]{11})(?:\\?|=|&|$)");if(t)return console.log(t[1]),t[1]})(n))},e=>{e.preventDefault();let t=`${O(l)} - ${i}`,r={id:Y(),chapter:t};a(5,o=[...o,r]),a(4,i="")},function(){n=this.value,a(0,n)},function(){i=this.value,a(4,i)},function(e){l=e,a(2,l)},function(e){r=e,a(3,r)},function(e){o=e,a(5,o)}]}class G extends e{constructor(e){super(),t(this,e,z,q,a,{})}}export{G as default};
