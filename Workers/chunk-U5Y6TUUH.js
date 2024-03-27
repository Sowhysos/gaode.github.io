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
import{a as _}from"./chunk-X5RGBNPH.js";import{a as G}from"./chunk-NLCQYVEX.js";import{b as B}from"./chunk-ZWKNWN2X.js";import{a as b}from"./chunk-JXYWMXB6.js";import{b as L}from"./chunk-CSZ6CHXI.js";import{a,b as D,d as z}from"./chunk-IGBMENRT.js";import{a as E}from"./chunk-SEE54P6A.js";import{a as C}from"./chunk-LU3FCBPP.js";import{a as I}from"./chunk-S2577PU4.js";import{e as T}from"./chunk-2TPVVSVW.js";var p={numberOfPoints:function(e,t,r){let n=a.distance(e,t);return Math.ceil(n/r)},numberOfPointsRhumbLine:function(e,t,a){let r=Math.pow(e.longitude-t.longitude,2)+Math.pow(e.latitude-t.latitude,2);return Math.max(1,Math.ceil(Math.sqrt(r/(a*a))))}},V=new D;p.extractHeights=function(e,t){let a=e.length,r=new Array(a);for(let n=0;n<a;n++){let a=e[n];r[n]=t.cartesianToCartographic(a,V).height}return r};var Y=new L,W=new a,v=new a,F=new b(a.UNIT_X,0),H=new a,j=new b(a.UNIT_X,0),J=new a,K=new a,O=[];function q(e,t,a){let r,n=O;if(n.length=e,t===a){for(r=0;r<e;r++)n[r]=t;return n}let i=(a-t)/e;for(r=0;r<e;r++){let e=t+r*i;n[r]=e}return n}var x=new D,N=new D,S=new a,k=new a,Q=new a,M=new _,R=new G;function $(e,t,r,n,i,o,l,c){let s=n.scaleToGeodeticSurface(e,k),u=n.scaleToGeodeticSurface(t,Q),h=p.numberOfPoints(e,t,r),f=n.cartesianToCartographic(s,x),g=n.cartesianToCartographic(u,N),m=q(h,i,o);M.setEndPoints(f,g);let T=M.surfaceDistance/h,w=c;f.height=i;let d=n.cartographicToCartesian(f,S);a.pack(d,l,w),w+=3;for(let p=1;p<h;p++){let e=M.interpolateUsingSurfaceDistance(p*T,N);e.height=m[p],d=n.cartographicToCartesian(e,S),a.pack(d,l,w),w+=3}return w}function tt(e,t,r,n,i,o,l,c){let s=n.cartesianToCartographic(e,x),u=n.cartesianToCartographic(t,N),h=p.numberOfPointsRhumbLine(s,u,r);s.height=0,u.height=0;let f=q(h,i,o);R.ellipsoid.equals(n)||(R=new G(void 0,void 0,n)),R.setEndPoints(s,u);let g=R.surfaceDistance/h,m=c;s.height=i;let T=n.cartographicToCartesian(s,S);a.pack(T,l,m),m+=3;for(let p=1;p<h;p++){let e=R.interpolateUsingSurfaceDistance(p*g,N);e.height=f[p],T=n.cartographicToCartesian(e,S),a.pack(T,l,m),m+=3}return m}p.wrapLongitude=function(e,t){let r=[],n=[];if(T(e)&&e.length>0){t=C(t,L.IDENTITY);let i=L.inverseTransformation(t,Y),o=L.multiplyByPoint(i,a.ZERO,W),l=a.normalize(L.multiplyByPointAsVector(i,a.UNIT_Y,v),v),c=b.fromPointNormal(o,l,F),s=a.normalize(L.multiplyByPointAsVector(i,a.UNIT_X,H),H),u=b.fromPointNormal(o,s,j),h=1;r.push(a.clone(e[0]));let p=r[0],f=e.length;for(let t=1;t<f;++t){let i=e[t];if(b.getPointDistance(u,p)<0||b.getPointDistance(u,i)<0){let e=B.lineSegmentPlane(p,i,c,J);if(T(e)){let t=a.multiplyByScalar(l,5e-9,K);b.getPointDistance(c,p)<0&&a.negate(t,t),r.push(a.add(e,t,new a)),n.push(h+1),a.negate(t,t),r.push(a.add(e,t,new a)),h=1}}r.push(a.clone(e[t])),h++,p=i}n.push(h)}return{positions:r,lengths:n}},p.generateArc=function(e){T(e)||(e={});let t=e.positions;if(!T(t))throw new I("options.positions is required.");let r=t.length,n=C(e.ellipsoid,z.WGS84),i=C(e.height,0),o=Array.isArray(i);if(r<1)return[];if(1===r){let e=n.scaleToGeodeticSurface(t[0],k);if(i=o?i[0]:i,0!==i){let t=n.geodeticSurfaceNormal(e,S);a.multiplyByScalar(t,i,t),a.add(e,t,e)}return[e.x,e.y,e.z]}let l=e.minDistance;if(!T(l)){let t=C(e.granularity,E.RADIANS_PER_DEGREE);l=E.chordLength(t,n.maximumRadius)}let c,s=0;for(c=0;c<r-1;c++)s+=p.numberOfPoints(t[c],t[c+1],l);let u=3*(s+1),h=new Array(u),f=0;for(c=0;c<r-1;c++){let e=t[c],a=t[c+1],r=o?i[c]:i,s=o?i[c+1]:i;f=$(e,a,l,n,r,s,h,f)}O.length=0;let g=t[r-1],m=n.cartesianToCartographic(g,x);m.height=o?i[r-1]:i;let w=n.cartographicToCartesian(m,S);return a.pack(w,h,u-3),h};var U=new D,et=new D;p.generateRhumbArc=function(e){T(e)||(e={});let t=e.positions;if(!T(t))throw new I("options.positions is required.");let r=t.length,n=C(e.ellipsoid,z.WGS84),i=C(e.height,0),o=Array.isArray(i);if(r<1)return[];if(1===r){let e=n.scaleToGeodeticSurface(t[0],k);if(i=o?i[0]:i,0!==i){let t=n.geodeticSurfaceNormal(e,S);a.multiplyByScalar(t,i,t),a.add(e,t,e)}return[e.x,e.y,e.z]}let l,c,s=C(e.granularity,E.RADIANS_PER_DEGREE),u=0,h=n.cartesianToCartographic(t[0],U);for(l=0;l<r-1;l++)c=n.cartesianToCartographic(t[l+1],et),u+=p.numberOfPointsRhumbLine(h,c,s),h=D.clone(c,U);let f=3*(u+1),g=new Array(f),m=0;for(l=0;l<r-1;l++){let e=t[l],a=t[l+1],r=o?i[l]:i,c=o?i[l+1]:i;m=tt(e,a,s,n,r,c,g,m)}O.length=0;let w=t[r-1],d=n.cartesianToCartographic(w,x);d.height=o?i[r-1]:i;let y=n.cartographicToCartesian(d,S);return a.pack(y,g,f-3),g},p.generateCartesianArc=function(e){let t=p.generateArc(e),r=t.length/3,n=new Array(r);for(let i=0;i<r;i++)n[i]=a.unpack(t,3*i);return n},p.generateCartesianRhumbArc=function(e){let t=p.generateRhumbArc(e),r=t.length/3,n=new Array(r);for(let i=0;i<r;i++)n[i]=a.unpack(t,3*i);return n};var mt=p;export{mt as a};