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
import{a as tt}from"./chunk-JGZRKYSE.js";import{a as At}from"./chunk-D4BCVU35.js";import{a as yt}from"./chunk-C5E6OQHH.js";import{a as G}from"./chunk-TB7RSGDN.js";import{a as z}from"./chunk-GNOHI6CF.js";import{a as at}from"./chunk-PDIF2AUE.js";import{a as ht}from"./chunk-LIAARPDW.js";import{b as mt,c as st,d as F}from"./chunk-PRRW7QSP.js";import{a as dt,d as it,f as rt}from"./chunk-4NBDOIVA.js";import{c as bt}from"./chunk-CSZ6CHXI.js";import{a as S}from"./chunk-XXK6IR5Y.js";import{a,b as _t,c as Q,d as v,e as R}from"./chunk-IGBMENRT.js";import{a as I}from"./chunk-SEE54P6A.js";import{a as T}from"./chunk-LU3FCBPP.js";import{a as nt,b as H}from"./chunk-S2577PU4.js";import{e as K}from"./chunk-2TPVVSVW.js";var et=new a,pt=new a,xt=new a,wt=new a,w=new Q,Mt=new R,Vt=new R,gt=new rt,Tt=new a,Nt=new a,Et=new a,lt=new _t,Pt=new a,St=new Q,Ft=new Q;function Ot(t,e,i){let o=e.vertexFormat,r=e.center,n=e.semiMajorAxis,s=e.semiMinorAxis,l=e.ellipsoid,u=e.stRotation,m=i?t.length/3*2:t.length/3,c=e.shadowVolume,p=o.st?new Float32Array(2*m):void 0,f=o.normal?new Float32Array(3*m):void 0,h=o.tangent?new Float32Array(3*m):void 0,d=o.bitangent?new Float32Array(3*m):void 0,A=c?new Float32Array(3*m):void 0,y=0,x=Tt,g=Nt,_=Et,T=new dt(l),b=T.project(l.cartesianToCartographic(r,lt),Pt),I=l.scaleToGeodeticSurface(r,et);l.geodeticSurfaceNormal(I,I);let v=Mt,N=Vt;if(0!==u){let t=rt.fromAxisAngle(I,u,gt);v=R.fromQuaternion(t,v),t=rt.fromAxisAngle(I,-u,gt),N=R.fromQuaternion(t,N)}else v=R.clone(R.IDENTITY,v),N=R.clone(R.IDENTITY,N);let E=Q.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,St),P=Q.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Ft),M=t.length,j=i?M:0,O=j/3*2;for(let S=0;S<M;S+=3){let e=S+1,r=S+2,u=a.fromArray(t,S,et);if(o.st){let t=R.multiplyByVector(v,u,pt),e=T.project(l.cartesianToCartographic(t,lt),xt);a.subtract(e,b,e),w.x=(e.x+n)/(2*n),w.y=(e.y+s)/(2*s),E.x=Math.min(w.x,E.x),E.y=Math.min(w.y,E.y),P.x=Math.max(w.x,P.x),P.y=Math.max(w.y,P.y),i&&(p[y+O]=w.x,p[y+1+O]=w.y),p[y++]=w.x,p[y++]=w.y}(o.normal||o.tangent||o.bitangent||c)&&(x=l.geodeticSurfaceNormal(u,x),c&&(A[S+j]=-x.x,A[e+j]=-x.y,A[r+j]=-x.z),(o.normal||o.tangent||o.bitangent)&&((o.tangent||o.bitangent)&&(g=a.normalize(a.cross(a.UNIT_Z,x,g),g),R.multiplyByVector(N,g,g)),o.normal&&(f[S]=x.x,f[e]=x.y,f[r]=x.z,i&&(f[S+j]=-x.x,f[e+j]=-x.y,f[r+j]=-x.z)),o.tangent&&(h[S]=g.x,h[e]=g.y,h[r]=g.z,i&&(h[S+j]=-g.x,h[e+j]=-g.y,h[r+j]=-g.z)),o.bitangent&&(_=a.normalize(a.cross(x,g,_),_),d[S]=_.x,d[e]=_.y,d[r]=_.z,i&&(d[S+j]=_.x,d[e+j]=_.y,d[r+j]=_.z))))}if(o.st){M=p.length;for(let t=0;t<M;t+=2)p[t]=(p[t]-E.x)/(P.x-E.x),p[t+1]=(p[t+1]-E.y)/(P.y-E.y)}let k=new ht;if(o.position){let o=tt.raisePositionsToHeight(t,e,i);k.position=new F({componentDatatype:S.DOUBLE,componentsPerAttribute:3,values:o})}if(o.st&&(k.st=new F({componentDatatype:S.FLOAT,componentsPerAttribute:2,values:p})),o.normal&&(k.normal=new F({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:f})),o.tangent&&(k.tangent=new F({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:h})),o.bitangent&&(k.bitangent=new F({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:d})),c&&(k.extrudeDirection=new F({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:A})),i&&K(e.offsetAttribute)){let t=new Uint8Array(m);if(e.offsetAttribute===G.TOP)t=t.fill(1,0,m/2);else{let i=e.offsetAttribute===G.NONE?0:1;t=t.fill(i)}k.applyOffset=new F({componentDatatype:S.UNSIGNED_BYTE,componentsPerAttribute:1,values:t})}return k}function jt(t){let e,i,o,r,n,a=new Array(t*(t+1)*12-6),s=0;for(e=0,o=1,r=0;r<3;r++)a[s++]=o++,a[s++]=e,a[s++]=o;for(r=2;r<t+1;++r){for(o=r*(r+1)-1,e=(r-1)*r-1,a[s++]=o++,a[s++]=e,a[s++]=o,i=2*r,n=0;n<i-1;++n)a[s++]=o,a[s++]=e++,a[s++]=e,a[s++]=o++,a[s++]=e,a[s++]=o;a[s++]=o++,a[s++]=e,a[s++]=o}for(i=2*t,++o,++e,r=0;r<i-1;++r)a[s++]=o,a[s++]=e++,a[s++]=e,a[s++]=o++,a[s++]=e,a[s++]=o;for(a[s++]=o,a[s++]=e++,a[s++]=e,a[s++]=o++,a[s++]=e++,a[s++]=e,++e,r=t-1;r>1;--r){for(a[s++]=e++,a[s++]=e,a[s++]=o,i=2*r,n=0;n<i-1;++n)a[s++]=o,a[s++]=e++,a[s++]=e,a[s++]=o++,a[s++]=e,a[s++]=o;a[s++]=e++,a[s++]=e++,a[s++]=o++}for(r=0;r<3;r++)a[s++]=e++,a[s++]=e,a[s++]=o;return a}var X=new a;function Dt(t){let e=t.center;X=a.multiplyByScalar(t.ellipsoid.geodeticSurfaceNormal(e,X),t.height,X),X=a.add(e,X,X);let i=new it(X,t.semiMajorAxis),o=tt.computeEllipsePositions(t,!0,!1),r=o.positions,n=o.numPts,s=Ot(r,t,!1),l=jt(n);return l=at.createTypedArray(r.length/3,l),{boundingSphere:i,attributes:s,indices:l}}function vt(t,e){let i=e.vertexFormat,o=e.center,r=e.semiMajorAxis,n=e.semiMinorAxis,s=e.ellipsoid,l=e.height,u=e.extrudedHeight,m=e.stRotation,c=t.length/3*2,p=new Float64Array(3*c),f=i.st?new Float32Array(2*c):void 0,h=i.normal?new Float32Array(3*c):void 0,d=i.tangent?new Float32Array(3*c):void 0,A=i.bitangent?new Float32Array(3*c):void 0,y=e.shadowVolume,x=y?new Float32Array(3*c):void 0,g=0,_=Tt,T=Nt,b=Et,I=new dt(s),v=I.project(s.cartesianToCartographic(o,lt),Pt),N=s.scaleToGeodeticSurface(o,et);s.geodeticSurfaceNormal(N,N);let E=rt.fromAxisAngle(N,m,gt),P=R.fromQuaternion(E,Mt),M=Q.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,St),j=Q.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Ft),O=t.length,k=O/3*2;for(let S=0;S<O;S+=3){let e,o=S+1,m=S+2,c=a.fromArray(t,S,et);if(i.st){let t=R.multiplyByVector(P,c,pt),e=I.project(s.cartesianToCartographic(t,lt),xt);a.subtract(e,v,e),w.x=(e.x+r)/(2*r),w.y=(e.y+n)/(2*n),M.x=Math.min(w.x,M.x),M.y=Math.min(w.y,M.y),j.x=Math.max(w.x,j.x),j.y=Math.max(w.y,j.y),f[g+k]=w.x,f[g+1+k]=w.y,f[g++]=w.x,f[g++]=w.y}c=s.scaleToGeodeticSurface(c,c),e=a.clone(c,pt),_=s.geodeticSurfaceNormal(c,_),y&&(x[S+O]=-_.x,x[o+O]=-_.y,x[m+O]=-_.z);let N=a.multiplyByScalar(_,l,wt);if(c=a.add(c,N,c),N=a.multiplyByScalar(_,u,N),e=a.add(e,N,e),i.position&&(p[S+O]=e.x,p[o+O]=e.y,p[m+O]=e.z,p[S]=c.x,p[o]=c.y,p[m]=c.z),i.normal||i.tangent||i.bitangent){b=a.clone(_,b);let r=a.fromArray(t,(S+3)%O,wt);a.subtract(r,c,r);let n=a.subtract(e,c,xt);_=a.normalize(a.cross(n,r,_),_),i.normal&&(h[S]=_.x,h[o]=_.y,h[m]=_.z,h[S+O]=_.x,h[o+O]=_.y,h[m+O]=_.z),i.tangent&&(T=a.normalize(a.cross(b,_,T),T),d[S]=T.x,d[o]=T.y,d[m]=T.z,d[S+O]=T.x,d[S+1+O]=T.y,d[S+2+O]=T.z),i.bitangent&&(A[S]=b.x,A[o]=b.y,A[m]=b.z,A[S+O]=b.x,A[o+O]=b.y,A[m+O]=b.z)}}if(i.st){O=f.length;for(let t=0;t<O;t+=2)f[t]=(f[t]-M.x)/(j.x-M.x),f[t+1]=(f[t+1]-M.y)/(j.y-M.y)}let D=new ht;if(i.position&&(D.position=new F({componentDatatype:S.DOUBLE,componentsPerAttribute:3,values:p})),i.st&&(D.st=new F({componentDatatype:S.FLOAT,componentsPerAttribute:2,values:f})),i.normal&&(D.normal=new F({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:h})),i.tangent&&(D.tangent=new F({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:d})),i.bitangent&&(D.bitangent=new F({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:A})),y&&(D.extrudeDirection=new F({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:x})),K(e.offsetAttribute)){let t=new Uint8Array(c);if(e.offsetAttribute===G.TOP)t=t.fill(1,0,c/2);else{let i=e.offsetAttribute===G.NONE?0:1;t=t.fill(i)}D.applyOffset=new F({componentDatatype:S.UNSIGNED_BYTE,componentsPerAttribute:1,values:t})}return D}function zt(t){let e=t.length/3,i=at.createTypedArray(e,6*e),o=0;for(let r=0;r<e;r++){let t=r,n=r+e,a=(t+1)%e,s=a+e;i[o++]=t,i[o++]=n,i[o++]=a,i[o++]=a,i[o++]=n,i[o++]=s}return i}var ut=new it,ft=new it;function Bt(t){let e=t.center,i=t.ellipsoid,o=t.semiMajorAxis,r=a.multiplyByScalar(i.geodeticSurfaceNormal(e,et),t.height,et);ut.center=a.add(e,r,ut.center),ut.radius=o,r=a.multiplyByScalar(i.geodeticSurfaceNormal(e,r),t.extrudedHeight,r),ft.center=a.add(e,r,ft.center),ft.radius=o;let n=tt.computeEllipsePositions(t,!0,!0),s=n.positions,l=n.numPts,u=n.outerPositions,m=it.union(ut,ft),c=Ot(s,t,!0),p=jt(l),f=p.length;p.length=2*f;let h=s.length/3;for(let a=0;a<f;a+=3)p[a+f]=p[a+2]+h,p[a+1+f]=p[a+1]+h,p[a+2+f]=p[a]+h;let d=at.createTypedArray(2*h/3,p),A=new st({attributes:c,indices:d,primitiveType:mt.TRIANGLES}),y=vt(u,t);p=zt(u);let x=at.createTypedArray(2*u.length/3,p),g=new st({attributes:y,indices:x,primitiveType:mt.TRIANGLES}),_=yt.combineInstances([new At({geometry:A}),new At({geometry:g})]);return{boundingSphere:m,attributes:_[0].attributes,indices:_[0].indices}}function Ct(t,e,i,o,r,n,s){let l=tt.computeEllipsePositions({center:t,semiMajorAxis:e,semiMinorAxis:i,rotation:o,granularity:r},!1,!0).outerPositions,u=l.length/3,m=new Array(u);for(let p=0;p<u;++p)m[p]=a.fromArray(l,3*p);let c=bt.fromCartesianArray(m,n,s);return c.width>I.PI&&(c.north=c.north>0?I.PI_OVER_TWO-I.EPSILON7:c.north,c.south=c.south<0?I.EPSILON7-I.PI_OVER_TWO:c.south,c.east=I.PI,c.west=-I.PI),c}function U(t){t=T(t,T.EMPTY_OBJECT);let e=t.center,i=T(t.ellipsoid,v.WGS84),o=t.semiMajorAxis,r=t.semiMinorAxis,n=T(t.granularity,I.RADIANS_PER_DEGREE),s=T(t.vertexFormat,z.DEFAULT);if(H.defined("options.center",e),H.typeOf.number("options.semiMajorAxis",o),H.typeOf.number("options.semiMinorAxis",r),o<r)throw new nt("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(n<=0)throw new nt("granularity must be greater than zero.");let l=T(t.height,0),u=T(t.extrudedHeight,l);this._center=a.clone(e),this._semiMajorAxis=o,this._semiMinorAxis=r,this._ellipsoid=v.clone(i),this._rotation=T(t.rotation,0),this._stRotation=T(t.stRotation,0),this._height=Math.max(u,l),this._granularity=n,this._vertexFormat=z.clone(s),this._extrudedHeight=Math.min(u,l),this._shadowVolume=T(t.shadowVolume,!1),this._workerName="createEllipseGeometry",this._offsetAttribute=t.offsetAttribute,this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0}U.packedLength=a.packedLength+v.packedLength+z.packedLength+9,U.pack=function(t,e,i){return H.defined("value",t),H.defined("array",e),i=T(i,0),a.pack(t._center,e,i),i+=a.packedLength,v.pack(t._ellipsoid,e,i),i+=v.packedLength,z.pack(t._vertexFormat,e,i),i+=z.packedLength,e[i++]=t._semiMajorAxis,e[i++]=t._semiMinorAxis,e[i++]=t._rotation,e[i++]=t._stRotation,e[i++]=t._height,e[i++]=t._granularity,e[i++]=t._extrudedHeight,e[i++]=t._shadowVolume?1:0,e[i]=T(t._offsetAttribute,-1),e};var Rt=new a,It=new v,Lt=new z,Y={center:Rt,ellipsoid:It,vertexFormat:Lt,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,stRotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};function kt(t){let e=-t._stRotation;if(0===e)return[0,0,0,1,1,0];let i=tt.computeEllipsePositions({center:t._center,semiMajorAxis:t._semiMajorAxis,semiMinorAxis:t._semiMinorAxis,rotation:t._rotation,granularity:t._granularity},!1,!0).outerPositions,o=i.length/3,r=new Array(o);for(let l=0;l<o;++l)r[l]=a.fromArray(i,3*l);let n=t._ellipsoid,s=t.rectangle;return st._textureCoordinateRotationPoints(r,e,n,s)}U.unpack=function(t,e,i){H.defined("array",t),e=T(e,0);let o=a.unpack(t,e,Rt);e+=a.packedLength;let r=v.unpack(t,e,It);e+=v.packedLength;let n=z.unpack(t,e,Lt);e+=z.packedLength;let s=t[e++],l=t[e++],u=t[e++],m=t[e++],c=t[e++],p=t[e++],f=t[e++],h=1===t[e++],d=t[e];return K(i)?(i._center=a.clone(o,i._center),i._ellipsoid=v.clone(r,i._ellipsoid),i._vertexFormat=z.clone(n,i._vertexFormat),i._semiMajorAxis=s,i._semiMinorAxis=l,i._rotation=u,i._stRotation=m,i._height=c,i._granularity=p,i._extrudedHeight=f,i._shadowVolume=h,i._offsetAttribute=-1===d?void 0:d,i):(Y.height=c,Y.extrudedHeight=f,Y.granularity=p,Y.stRotation=m,Y.rotation=u,Y.semiMajorAxis=s,Y.semiMinorAxis=l,Y.shadowVolume=h,Y.offsetAttribute=-1===d?void 0:d,new U(Y))},U.computeRectangle=function(t,e){t=T(t,T.EMPTY_OBJECT);let i=t.center,o=T(t.ellipsoid,v.WGS84),r=t.semiMajorAxis,n=t.semiMinorAxis,a=T(t.granularity,I.RADIANS_PER_DEGREE),s=T(t.rotation,0);if(H.defined("options.center",i),H.typeOf.number("options.semiMajorAxis",r),H.typeOf.number("options.semiMinorAxis",n),r<n)throw new nt("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(a<=0)throw new nt("granularity must be greater than zero.");return Ct(i,r,n,s,a,o,e)},U.createGeometry=function(t){if(t._semiMajorAxis<=0||t._semiMinorAxis<=0)return;let e=t._height,i=t._extrudedHeight,o=!I.equalsEpsilon(e,i,0,I.EPSILON2);t._center=t._ellipsoid.scaleToGeodeticSurface(t._center,t._center);let r,n={center:t._center,semiMajorAxis:t._semiMajorAxis,semiMinorAxis:t._semiMinorAxis,ellipsoid:t._ellipsoid,rotation:t._rotation,height:e,granularity:t._granularity,vertexFormat:t._vertexFormat,stRotation:t._stRotation};if(o)n.extrudedHeight=i,n.shadowVolume=t._shadowVolume,n.offsetAttribute=t._offsetAttribute,r=Bt(n);else if(r=Dt(n),K(t._offsetAttribute)){let e=r.attributes.position.values.length,i=t._offsetAttribute===G.NONE?0:1,o=new Uint8Array(e/3).fill(i);r.attributes.applyOffset=new F({componentDatatype:S.UNSIGNED_BYTE,componentsPerAttribute:1,values:o})}return new st({attributes:r.attributes,indices:r.indices,primitiveType:mt.TRIANGLES,boundingSphere:r.boundingSphere,offsetAttribute:t._offsetAttribute})},U.createShadowVolume=function(t,e,i){let o=t._granularity,r=t._ellipsoid,n=e(o,r),a=i(o,r);return new U({center:t._center,semiMajorAxis:t._semiMajorAxis,semiMinorAxis:t._semiMinorAxis,ellipsoid:r,rotation:t._rotation,stRotation:t._stRotation,granularity:o,extrudedHeight:n,height:a,vertexFormat:z.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(U.prototype,{rectangle:{get:function(){return K(this._rectangle)||(this._rectangle=Ct(this._center,this._semiMajorAxis,this._semiMinorAxis,this._rotation,this._granularity,this._ellipsoid)),this._rectangle}},textureCoordinateRotationPoints:{get:function(){return K(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=kt(this)),this._textureCoordinateRotationPoints}}});var de=U;export{de as a};