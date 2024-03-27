/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.114
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
import{a as ue}from"./chunk-NLCQYVEX.js";import{b as he,c as pe,d as ne}from"./chunk-PRRW7QSP.js";import{a as te}from"./chunk-XXK6IR5Y.js";import{a as p,b as ee,c as w,d as Se}from"./chunk-IGBMENRT.js";import{a as Y}from"./chunk-SEE54P6A.js";import{a as le}from"./chunk-JNX2URIY.js";import{a as K}from"./chunk-LU3FCBPP.js";import{b}from"./chunk-S2577PU4.js";import{c as We,d as Ge,e as D}from"./chunk-2TPVVSVW.js";var Oe=We(((e,t)=>{"use strict";function n(e,t,n){n=n||2;var i,u,p,o,x,s,h,f=t&&t.length,y=f?t[0]*n:e.length,c=r(e,0,y,n,!0),v=[];if(!c||c.next===c.prev)return v;if(f&&(c=l(e,t,c,n)),e.length>80*n){i=p=e[0],u=o=e[1];for(var m=n;m<y;m+=n)x=e[m],s=e[m+1],x<i&&(i=x),s<u&&(u=s),x>p&&(p=x),s>o&&(o=s);h=Math.max(p-i,o-u),h=0!==h?32767/h:0}return a(c,v,n,i,u,h,0),v}function r(e,t,n,r,i){var a,u;if(i===C(e,t,n,r)>0)for(a=t;a<n;a+=r)u=B(a,e[a],e[a+1],u);else for(a=n-r;a>=t;a-=r)u=B(a,e[a],e[a+1],u);return u&&S(u,u.next)&&(z(u),u=u.next),u}function i(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!S(r,r.next)&&0!==b(r.prev,r,r.next))r=r.next;else{if(z(r),r=t=r.prev,r===r.next)break;n=!0}}while(n||r!==t);return t}function a(e,t,n,r,l,s,h){if(e){!h&&s&&c(e,r,l,s);for(var f,y,v=e;e.prev!==e.next;)if(f=e.prev,y=e.next,s?p(e,r,l,s):u(e))t.push(f.i/n|0),t.push(e.i/n|0),t.push(y.i/n|0),z(e),e=y.next,v=y.next;else if(e=y,e===v){h?1===h?(e=o(i(e),t,n),a(e,t,n,r,l,s,2)):2===h&&x(e,t,n,r,l,s):a(i(e),t,n,r,l,s,1);break}}}function u(e){var t=e.prev,n=e,r=e.next;if(b(t,n,r)>=0)return!1;for(var i=t.x,a=n.x,u=r.x,p=t.y,o=n.y,x=r.y,l=i<a?i<u?i:u:a<u?a:u,s=p<o?p<x?p:x:o<x?o:x,h=i>a?i>u?i:u:a>u?a:u,f=p>o?p>x?p:x:o>x?o:x,y=r.next;y!==t;){if(y.x>=l&&y.x<=h&&y.y>=s&&y.y<=f&&w(i,p,a,o,u,x,y.x,y.y)&&b(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function p(e,t,n,r){var i=e.prev,a=e,u=e.next;if(b(i,a,u)>=0)return!1;for(var p=i.x,o=a.x,x=u.x,l=i.y,s=a.y,h=u.y,f=p<o?p<x?p:x:o<x?o:x,y=l<s?l<h?l:h:s<h?s:h,c=p>o?p>x?p:x:o>x?o:x,v=l>s?l>h?l:h:s>h?s:h,d=m(f,y,t,n,r),g=m(c,v,t,n,r),S=e.prevZ,A=e.nextZ;S&&S.z>=d&&A&&A.z<=g;){if(S.x>=f&&S.x<=c&&S.y>=y&&S.y<=v&&S!==i&&S!==u&&w(p,l,o,s,x,h,S.x,S.y)&&b(S.prev,S,S.next)>=0||(S=S.prevZ,A.x>=f&&A.x<=c&&A.y>=y&&A.y<=v&&A!==i&&A!==u&&w(p,l,o,s,x,h,A.x,A.y)&&b(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;S&&S.z>=d;){if(S.x>=f&&S.x<=c&&S.y>=y&&S.y<=v&&S!==i&&S!==u&&w(p,l,o,s,x,h,S.x,S.y)&&b(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;A&&A.z<=g;){if(A.x>=f&&A.x<=c&&A.y>=y&&A.y<=v&&A!==i&&A!==u&&w(p,l,o,s,x,h,A.x,A.y)&&b(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function o(e,t,n){var r=e;do{var a=r.prev,u=r.next.next;!S(a,u)&&A(a,r,r.next,u)&&D(a,u)&&D(u,a)&&(t.push(a.i/n|0),t.push(r.i/n|0),t.push(u.i/n|0),z(r),z(r.next),r=e=u),r=r.next}while(r!==e);return i(r)}function x(e,t,n,r,u,p){var o=e;do{for(var x=o.next.next;x!==o.prev;){if(o.i!==x.i&&g(o,x)){var l=M(o,x);return o=i(o,o.next),l=i(l,l.next),a(o,t,n,r,u,p,0),void a(l,t,n,r,u,p,0)}x=x.next}o=o.next}while(o!==e)}function l(e,t,n,i){var a,u,p,o,x,l=[];for(a=0,u=t.length;a<u;a++)p=t[a]*i,o=a<u-1?t[a+1]*i:e.length,x=r(e,p,o,i,!1),x===x.next&&(x.steiner=!0),l.push(d(x));for(l.sort(s),a=0;a<l.length;a++)n=h(l[a],n);return n}function s(e,t){return e.x-t.x}function h(e,t){var n=f(e,t);if(!n)return t;var r=M(n,e);return i(r,r.next),i(n,n.next)}function f(e,t){var n,r=t,i=e.x,a=e.y,u=-1/0;do{if(a<=r.y&&a>=r.next.y&&r.next.y!==r.y){var p=r.x+(a-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(p<=i&&p>u&&(u=p,n=r.x<r.next.x?r:r.next,p===i))return n}r=r.next}while(r!==t);if(!n)return null;var o,x=n,l=n.x,s=n.y,h=1/0;r=n;do{i>=r.x&&r.x>=l&&i!==r.x&&w(a<s?i:u,a,l,s,a<s?u:i,a,r.x,r.y)&&(o=Math.abs(a-r.y)/(i-r.x),D(r,e)&&(o<h||o===h&&(r.x>n.x||r.x===n.x&&y(n,r)))&&(n=r,h=o)),r=r.next}while(r!==x);return n}function y(e,t){return b(e.prev,e,t.prev)<0&&b(t.next,e,e.next)<0}function c(e,t,n,r){var i=e;do{0===i.z&&(i.z=m(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,v(i)}function v(e){var t,n,r,i,a,u,p,o,x=1;do{for(n=e,e=null,a=null,u=0;n;){for(u++,r=n,p=0,t=0;t<x&&(p++,r=r.nextZ,r);t++);for(o=x;p>0||o>0&&r;)0!==p&&(0===o||!r||n.z<=r.z)?(i=n,n=n.nextZ,p--):(i=r,r=r.nextZ,o--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,x*=2}while(u>1);return e}function m(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e|t<<1}function d(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function w(e,t,n,r,i,a,u,p){return(i-u)*(t-p)>=(e-u)*(a-p)&&(e-u)*(r-p)>=(n-u)*(t-p)&&(n-u)*(a-p)>=(i-u)*(r-p)}function g(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Z(e,t)&&(D(e,t)&&D(t,e)&&O(e,t)&&(b(e.prev,e,t.prev)||b(e,t.prev,t))||S(e,t)&&b(e.prev,e,e.next)>0&&b(t.prev,t,t.next)>0)}function b(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function S(e,t){return e.x===t.x&&e.y===t.y}function A(e,t,n,r){var i=E(b(e,t,n)),a=E(b(e,t,r)),u=E(b(n,r,e)),p=E(b(n,r,t));return!!(i!==a&&u!==p||0===i&&R(e,n,t)||0===a&&R(e,r,t)||0===u&&R(n,e,r)||0===p&&R(n,t,r))}function R(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function E(e){return e>0?1:e<0?-1:0}function Z(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&A(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function D(e,t){return b(e.prev,e,e.next)<0?b(e,t,e.next)>=0&&b(e,e.prev,t)>=0:b(e,t,e.prev)<0||b(e,e.next,t)<0}function O(e,t){var n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do{n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==e);return r}function M(e,t){var n=new T(e.i,e.x,e.y),r=new T(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function B(e,t,n,r){var i=new T(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function z(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function T(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function C(e,t,n,r){for(var i=0,a=t,u=n-r;a<n;a+=r)i+=(e[u]-e[a])*(e[a+1]+e[u+1]),u=a;return i}t.exports=n,t.exports.default=n,n.deviation=function(e,t,n,r){var i=t&&t.length,a=i?t[0]*n:e.length,u=Math.abs(C(e,0,a,n));if(i)for(var p=0,o=t.length;p<o;p++){var x=t[p]*n,l=p<o-1?t[p+1]*n:e.length;u-=Math.abs(C(e,x,l,n))}var s=0;for(p=0;p<r.length;p+=3){var h=r[p]*n,f=r[p+1]*n,y=r[p+2]*n;s+=Math.abs((e[h]-e[y])*(e[f+1]-e[h+1])-(e[h]-e[f])*(e[y+1]-e[h+1]))}return 0===u&&0===s?0:Math.abs((s-u)/u)},n.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var u=0;u<t;u++)n.vertices.push(e[i][a][u]);i>0&&(r+=e[i-1].length,n.holes.push(r))}return n}})),se={CLOCKWISE:le.CW,COUNTER_CLOCKWISE:le.CCW,validate:function(e){return e===se.CLOCKWISE||e===se.COUNTER_CLOCKWISE}},ve=Object.freeze(se),Le=Ge(Oe(),1),et=new p,tt=new p,B={computeArea2D:function(e){b.defined("positions",e),b.typeOf.number.greaterThanOrEquals("positions.length",e.length,3);let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++){let t=e[r],a=e[i];n+=t.x*a.y-a.x*t.y}return.5*n},computeWindingOrder2D:function(e){return B.computeArea2D(e)>0?ve.COUNTER_CLOCKWISE:ve.CLOCKWISE},triangulate:function(e,t){b.defined("positions",e);let n=w.packArray(e);return(0,Le.default)(n,t,2)}},De=new p,Fe=new p,Pe=new p,Te=new p,Me=new p,Ze=new p,R=new p,Re=new w,ze=new w,Be=new w,q=new w;B.computeSubdivision=function(e,t,n,r,i){i=K(i,Y.RADIANS_PER_DEGREE);let a=D(r);b.typeOf.object("ellipsoid",e),b.defined("positions",t),b.defined("indices",n),b.typeOf.number.greaterThanOrEquals("indices.length",n.length,3),b.typeOf.number.equals("indices.length % 3","0",n.length%3,0),b.typeOf.number.greaterThan("granularity",i,0);let u,o=n.slice(0),x=t.length,l=new Array(3*x),s=new Array(2*x),h=0,f=0;for(u=0;u<x;u++){let e=t[u];if(l[h++]=e.x,l[h++]=e.y,l[h++]=e.z,a){let e=r[u];s[f++]=e.x,s[f++]=e.y}}let y=[],c={},v=e.maximumRadius,m=Y.chordLength(i,v),d=m*m;for(;o.length>0;){let e,t,n,r=o.pop(),i=o.pop(),x=o.pop(),h=p.fromArray(l,3*x,De),f=p.fromArray(l,3*i,Fe),m=p.fromArray(l,3*r,Pe);a&&(e=w.fromArray(s,2*x,Re),t=w.fromArray(s,2*i,ze),n=w.fromArray(s,2*r,Be));let g,b,S,A=p.multiplyByScalar(p.normalize(h,Te),v,Te),E=p.multiplyByScalar(p.normalize(f,Me),v,Me),Z=p.multiplyByScalar(p.normalize(m,Ze),v,Ze),O=p.magnitudeSquared(p.subtract(A,E,R)),M=p.magnitudeSquared(p.subtract(E,Z,R)),B=p.magnitudeSquared(p.subtract(Z,A,R)),z=Math.max(O,M,B);z>d?O===z?(g=`${Math.min(x,i)} ${Math.max(x,i)}`,u=c[g],D(u)||(b=p.add(h,f,R),p.multiplyByScalar(b,.5,b),l.push(b.x,b.y,b.z),u=l.length/3-1,c[g]=u,a&&(S=w.add(e,t,q),w.multiplyByScalar(S,.5,S),s.push(S.x,S.y))),o.push(x,u,r),o.push(u,i,r)):M===z?(g=`${Math.min(i,r)} ${Math.max(i,r)}`,u=c[g],D(u)||(b=p.add(f,m,R),p.multiplyByScalar(b,.5,b),l.push(b.x,b.y,b.z),u=l.length/3-1,c[g]=u,a&&(S=w.add(t,n,q),w.multiplyByScalar(S,.5,S),s.push(S.x,S.y))),o.push(i,u,x),o.push(u,r,x)):B===z&&(g=`${Math.min(r,x)} ${Math.max(r,x)}`,u=c[g],D(u)||(b=p.add(m,h,R),p.multiplyByScalar(b,.5,b),l.push(b.x,b.y,b.z),u=l.length/3-1,c[g]=u,a&&(S=w.add(n,e,q),w.multiplyByScalar(S,.5,S),s.push(S.x,S.y))),o.push(r,u,i),o.push(u,x,i)):(y.push(x),y.push(i),y.push(r))}let g={attributes:{position:new ne({componentDatatype:te.DOUBLE,componentsPerAttribute:3,values:l})},indices:y,primitiveType:he.TRIANGLES};return a&&(g.attributes.st=new ne({componentDatatype:te.FLOAT,componentsPerAttribute:2,values:s})),new pe(g)};var nt=new ee,rt=new ee,it=new ee,we=new ee;B.computeRhumbLineSubdivision=function(e,t,n,r,i){i=K(i,Y.RADIANS_PER_DEGREE);let a=D(r);b.typeOf.object("ellipsoid",e),b.defined("positions",t),b.defined("indices",n),b.typeOf.number.greaterThanOrEquals("indices.length",n.length,3),b.typeOf.number.equals("indices.length % 3","0",n.length%3,0),b.typeOf.number.greaterThan("granularity",i,0);let u,o=n.slice(0),x=t.length,l=new Array(3*x),s=new Array(2*x),h=0,f=0;for(u=0;u<x;u++){let e=t[u];if(l[h++]=e.x,l[h++]=e.y,l[h++]=e.z,a){let e=r[u];s[f++]=e.x,s[f++]=e.y}}let y=[],c={},v=e.maximumRadius,m=Y.chordLength(i,v),d=new ue(void 0,void 0,e),g=new ue(void 0,void 0,e),S=new ue(void 0,void 0,e);for(;o.length>0;){let t,n,r,i=o.pop(),x=o.pop(),h=o.pop(),f=p.fromArray(l,3*h,De),v=p.fromArray(l,3*x,Fe),b=p.fromArray(l,3*i,Pe);a&&(t=w.fromArray(s,2*h,Re),n=w.fromArray(s,2*x,ze),r=w.fromArray(s,2*i,Be));let A=e.cartesianToCartographic(f,nt),E=e.cartesianToCartographic(v,rt),Z=e.cartesianToCartographic(b,it);d.setEndPoints(A,E);let O=d.surfaceDistance;g.setEndPoints(E,Z);let M=g.surfaceDistance;S.setEndPoints(Z,A);let B,z,T,C,L,P=S.surfaceDistance,W=Math.max(O,M,P);W>m?O===W?(B=`${Math.min(h,x)} ${Math.max(h,x)}`,u=c[B],D(u)||(z=d.interpolateUsingFraction(.5,we),T=.5*(A.height+E.height),C=p.fromRadians(z.longitude,z.latitude,T,e,R),l.push(C.x,C.y,C.z),u=l.length/3-1,c[B]=u,a&&(L=w.add(t,n,q),w.multiplyByScalar(L,.5,L),s.push(L.x,L.y))),o.push(h,u,i),o.push(u,x,i)):M===W?(B=`${Math.min(x,i)} ${Math.max(x,i)}`,u=c[B],D(u)||(z=g.interpolateUsingFraction(.5,we),T=.5*(E.height+Z.height),C=p.fromRadians(z.longitude,z.latitude,T,e,R),l.push(C.x,C.y,C.z),u=l.length/3-1,c[B]=u,a&&(L=w.add(n,r,q),w.multiplyByScalar(L,.5,L),s.push(L.x,L.y))),o.push(x,u,h),o.push(u,i,h)):P===W&&(B=`${Math.min(i,h)} ${Math.max(i,h)}`,u=c[B],D(u)||(z=S.interpolateUsingFraction(.5,we),T=.5*(Z.height+A.height),C=p.fromRadians(z.longitude,z.latitude,T,e,R),l.push(C.x,C.y,C.z),u=l.length/3-1,c[B]=u,a&&(L=w.add(r,t,q),w.multiplyByScalar(L,.5,L),s.push(L.x,L.y))),o.push(i,u,x),o.push(u,h,x)):(y.push(h),y.push(x),y.push(i))}let A={attributes:{position:new ne({componentDatatype:te.DOUBLE,componentsPerAttribute:3,values:l})},indices:y,primitiveType:he.TRIANGLES};return a&&(A.attributes.st=new ne({componentDatatype:te.FLOAT,componentsPerAttribute:2,values:s})),new pe(A)},B.scaleToGeodeticHeight=function(e,t,n,r){n=K(n,Se.WGS84);let i=et,a=tt;if(t=K(t,0),r=K(r,!0),D(e)){let u=e.length;for(let o=0;o<u;o+=3)p.fromArray(e,o,a),r&&(a=n.scaleToGeodeticSurface(a,a)),0!==t&&(i=n.geodeticSurfaceNormal(a,i),p.multiplyByScalar(i,t,i),p.add(a,i,a)),e[o]=a.x,e[o+1]=a.y,e[o+2]=a.z}return e};var At=B;export{ve as a,At as b};