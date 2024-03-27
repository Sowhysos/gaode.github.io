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
import{a as et}from"./chunk-C7N6QFQY.js";import{a as U}from"./chunk-S52AQ5GZ.js";import"./chunk-T5LTBJR6.js";import{a as y}from"./chunk-WJWQTD3N.js";import"./chunk-L4VLY3HN.js";import{a as I}from"./chunk-D4BCVU35.js";import{a as $}from"./chunk-C5E6OQHH.js";import"./chunk-4BEUQXNB.js";import"./chunk-N4LA2RYW.js";import{a as u}from"./chunk-GNOHI6CF.js";import"./chunk-LGDGOZBO.js";import"./chunk-KVLKTV7L.js";import{b as ot}from"./chunk-42WKPM5N.js";import{a as tt}from"./chunk-SXCE2VWF.js";import"./chunk-NLCQYVEX.js";import"./chunk-ZWKNWN2X.js";import"./chunk-JXYWMXB6.js";import{a as J}from"./chunk-PDIF2AUE.js";import{a as X}from"./chunk-LIAARPDW.js";import{b as K,c as Y,d as z}from"./chunk-PRRW7QSP.js";import{d as Z,f as Q}from"./chunk-4NBDOIVA.js";import"./chunk-YIJHUUZY.js";import"./chunk-CSZ6CHXI.js";import{a as N}from"./chunk-XXK6IR5Y.js";import{a as i,c as x,d as m,e as P}from"./chunk-IGBMENRT.js";import{a as q}from"./chunk-SEE54P6A.js";import"./chunk-JNX2URIY.js";import"./chunk-4Z3GDVJK.js";import{a as f}from"./chunk-LU3FCBPP.js";import{b as B}from"./chunk-S2577PU4.js";import{e as g}from"./chunk-2TPVVSVW.js";var st=new i,at=new et,pt=new x,lt=new x,mt=new i,ft=new i,ut=new i,V=new i,yt=new i,ht=new i,nt=new Q,dt=new P,gt=new P,Pt=new i;function wt(t,e,n,o,r,a,s,c,p){let l=t.positions,u=ot.triangulate(t.positions2D,t.holes);u.length<3&&(u=[0,1,2]);let m=J.createTypedArray(l.length,u.length);m.set(u);let h=dt;if(0!==o){let t=Q.fromAxisAngle(s,o,nt);if(h=P.fromQuaternion(t,h),e.tangent||e.bitangent){t=Q.fromAxisAngle(s,-o,nt);let n=P.fromQuaternion(t,gt);c=i.normalize(P.multiplyByVector(n,c,c),c),e.bitangent&&(p=i.normalize(i.cross(s,c,p),p))}}else h=P.clone(P.IDENTITY,h);let y=lt;e.st&&(y.x=n.x,y.y=n.y);let d=l.length,f=3*d,k=new Float64Array(f),w=e.normal?new Float32Array(f):void 0,j=e.tangent?new Float32Array(f):void 0,A=e.bitangent?new Float32Array(f):void 0,v=e.st?new Float32Array(2*d):void 0,E=0,L=0,_=0,F=0,b=0;for(let i=0;i<d;i++){let t=l[i];if(k[E++]=t.x,k[E++]=t.y,k[E++]=t.z,e.st)if(g(r)&&r.positions.length===d)v[b++]=r.positions[i].x,v[b++]=r.positions[i].y;else{let e=P.multiplyByVector(h,t,st),o=a(e,pt);x.subtract(o,y,o);let i=q.clamp(o.x/n.width,0,1),r=q.clamp(o.y/n.height,0,1);v[b++]=i,v[b++]=r}e.normal&&(w[L++]=s.x,w[L++]=s.y,w[L++]=s.z),e.tangent&&(j[F++]=c.x,j[F++]=c.y,j[F++]=c.z),e.bitangent&&(A[_++]=p.x,A[_++]=p.y,A[_++]=p.z)}let T=new X;return e.position&&(T.position=new z({componentDatatype:N.DOUBLE,componentsPerAttribute:3,values:k})),e.normal&&(T.normal=new z({componentDatatype:N.FLOAT,componentsPerAttribute:3,values:w})),e.tangent&&(T.tangent=new z({componentDatatype:N.FLOAT,componentsPerAttribute:3,values:j})),e.bitangent&&(T.bitangent=new z({componentDatatype:N.FLOAT,componentsPerAttribute:3,values:A})),e.st&&(T.st=new z({componentDatatype:N.FLOAT,componentsPerAttribute:2,values:v})),new Y({attributes:T,indices:m,primitiveType:K.TRIANGLES})}function E(t){t=f(t,f.EMPTY_OBJECT);let e=t.polygonHierarchy,n=t.textureCoordinates;B.defined("options.polygonHierarchy",e);let o=f(t.vertexFormat,u.DEFAULT);this._vertexFormat=u.clone(o),this._polygonHierarchy=e,this._stRotation=f(t.stRotation,0),this._ellipsoid=m.clone(f(t.ellipsoid,m.WGS84)),this._workerName="createCoplanarPolygonGeometry",this._textureCoordinates=n,this.packedLength=y.computeHierarchyPackedLength(e,i)+u.packedLength+m.packedLength+(g(n)?y.computeHierarchyPackedLength(n,x):1)+2}E.fromPositions=function(t){t=f(t,f.EMPTY_OBJECT),B.defined("options.positions",t.positions);let e={polygonHierarchy:{positions:t.positions},vertexFormat:t.vertexFormat,stRotation:t.stRotation,ellipsoid:t.ellipsoid,textureCoordinates:t.textureCoordinates};return new E(e)},E.pack=function(t,e,n){return B.typeOf.object("value",t),B.defined("array",e),n=f(n,0),n=y.packPolygonHierarchy(t._polygonHierarchy,e,n,i),m.pack(t._ellipsoid,e,n),n+=m.packedLength,u.pack(t._vertexFormat,e,n),n+=u.packedLength,e[n++]=t._stRotation,g(t._textureCoordinates)?n=y.packPolygonHierarchy(t._textureCoordinates,e,n,x):e[n++]=-1,e[n++]=t.packedLength,e};var _t=m.clone(m.UNIT_SPHERE),At=new u,bt={polygonHierarchy:{}};E.unpack=function(t,e,n){B.defined("array",t),e=f(e,0);let o=y.unpackPolygonHierarchy(t,e,i);e=o.startingIndex,delete o.startingIndex;let r=m.unpack(t,e,_t);e+=m.packedLength;let a=u.unpack(t,e,At);e+=u.packedLength;let s=t[e++],c=-1===t[e]?void 0:y.unpackPolygonHierarchy(t,e,x);g(c)?(e=c.startingIndex,delete c.startingIndex):e++;let p=t[e++];return g(n)||(n=new E(bt)),n._polygonHierarchy=o,n._ellipsoid=m.clone(r,n._ellipsoid),n._vertexFormat=u.clone(a,n._vertexFormat),n._stRotation=s,n._textureCoordinates=c,n.packedLength=p,n},E.createGeometry=function(t){let e=t._vertexFormat,n=t._polygonHierarchy,o=t._stRotation,r=t._textureCoordinates,a=g(r),s=n.positions;if(s=tt(s,i.equalsEpsilon,!0),s.length<3)return;let c=mt,p=ft,l=ut,u=yt,m=ht;if(!U.computeProjectTo2DArguments(s,V,u,m))return;if(c=i.cross(u,m,c),c=i.normalize(c,c),!i.equalsEpsilon(V,i.ZERO,q.EPSILON6)){let e=t._ellipsoid.geodeticSurfaceNormal(V,Pt);i.dot(c,e)<0&&(c=i.negate(c,c),u=i.negate(u,u))}let h=U.createProjectPointsTo2DFunction(V,u,m),d=U.createProjectPointTo2DFunction(V,u,m);e.tangent&&(p=i.clone(u,p)),e.bitangent&&(l=i.clone(m,l));let f=y.polygonsFromHierarchy(n,a,h,!1),k=f.hierarchy,P=f.polygons,x=function(t){return t},w=a?y.polygonsFromHierarchy(r,!0,x,!1).polygons:void 0;if(0===k.length)return;s=k[0].outerRing;let j=Z.fromPoints(s),A=y.computeBoundingRectangle(c,d,s,o,at),v=[];for(let i=0;i<P.length;i++){let t=new I({geometry:wt(P[i],e,A,o,a?w[i]:void 0,d,c,p,l)});v.push(t)}let E=$.combineInstances(v)[0];E.attributes.position.values=new Float64Array(E.attributes.position.values),E.indices=J.createTypedArray(E.attributes.position.values.length/3,E.indices);let L=E.attributes;return e.position||delete L.position,new Y({attributes:L,indices:E.indices,primitiveType:E.primitiveType,boundingSphere:j})};var W=E;function kt(t,e){return g(e)&&(t=W.unpack(t,e)),W.createGeometry(t)}var Xt=kt;export{Xt as default};