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
import{c as Z}from"./chunk-4NBDOIVA.js";import{a as o,b as ft,e as b}from"./chunk-IGBMENRT.js";import{a as R}from"./chunk-SEE54P6A.js";import{a as H}from"./chunk-LU3FCBPP.js";import{a as w,b as et}from"./chunk-S2577PU4.js";import{e as g}from"./chunk-2TPVVSVW.js";var nt={};function mt(e,t,r){let n=e+t;return R.sign(e)!==R.sign(t)&&Math.abs(n/Math.max(Math.abs(e),Math.abs(t)))<r?0:n}nt.computeDiscriminant=function(e,t,r){if("number"!=typeof e)throw new w("a is a required number.");if("number"!=typeof t)throw new w("b is a required number.");if("number"!=typeof r)throw new w("c is a required number.");return t*t-4*e*r},nt.computeRealRoots=function(e,t,r){if("number"!=typeof e)throw new w("a is a required number.");if("number"!=typeof t)throw new w("b is a required number.");if("number"!=typeof r)throw new w("c is a required number.");let n;if(0===e)return 0===t?[]:[-r/t];if(0===t){if(0===r)return[0,0];let t=Math.abs(r),i=Math.abs(e);if(t<i&&t/i<R.EPSILON14)return[0,0];if(t>i&&i/t<R.EPSILON14)return[];if(n=-r/e,n<0)return[];let o=Math.sqrt(n);return[-o,o]}if(0===r)return n=-t/e,n<0?[n,0]:[0,n];let i=t*t,o=4*e*r,a=mt(i,-o,R.EPSILON14);if(a<0)return[];let u=-.5*mt(t,R.sign(t)*Math.sqrt(a),R.EPSILON14);return t>0?[u/e,r/u]:[r/u,u/e]};var T=nt,ot={};function rt(e,t,r,n){let i,o,a=e,u=t/3,s=r/3,l=n,w=a*s,f=u*l,c=u*u,h=s*s,m=a*s-c,d=a*l-u*s,g=u*l-h,p=4*m*g-d*d;if(p<0){let e,t,r;c*f>=w*h?(e=a,t=m,r=-2*u*m+a*d):(e=l,t=g,r=-l*d+2*s*g);let n=-(r<0?-1:1)*Math.abs(e)*Math.sqrt(-p);o=-r+n;let b=o/2,R=b<0?-Math.pow(-b,1/3):Math.pow(b,1/3),q=o===n?-R:-t/R;return i=t<=0?R+q:-r/(R*R+q*q+t),c*f>=w*h?[(i-u)/a]:[-l/(i+s)]}let b=m,R=-2*u*m+a*d,q=g,O=-l*d+2*s*g,M=Math.sqrt(p),y=Math.sqrt(3)/2,S=Math.abs(Math.atan2(a*M,-R)/3);i=2*Math.sqrt(-b);let P=Math.cos(S);o=i*P;let N=i*(-P/2-y*Math.sin(S)),L=o+N>2*u?o-u:N-u,E=a,z=L/E;S=Math.abs(Math.atan2(l*M,-O)/3),i=2*Math.sqrt(-q),P=Math.cos(S),o=i*P,N=i*(-P/2-y*Math.sin(S));let I=-l,T=o+N<2*s?o+s:N+s,v=I/T,x=E*T,C=-L*T-E*I,U=L*I,B=(s*C-u*U)/(-u*C+s*x);return z<=B?z<=v?B<=v?[z,B,v]:[z,v,B]:[v,z,B]:z<=v?[B,z,v]:B<=v?[B,v,z]:[v,B,z]}ot.computeDiscriminant=function(e,t,r,n){if("number"!=typeof e)throw new w("a is a required number.");if("number"!=typeof t)throw new w("b is a required number.");if("number"!=typeof r)throw new w("c is a required number.");if("number"!=typeof n)throw new w("d is a required number.");let i=e*e,o=t*t,a=r*r,u=n*n;return 18*e*t*r*n+o*a-27*i*u-4*(e*a*r+o*t*n)},ot.computeRealRoots=function(e,t,r,n){if("number"!=typeof e)throw new w("a is a required number.");if("number"!=typeof t)throw new w("b is a required number.");if("number"!=typeof r)throw new w("c is a required number.");if("number"!=typeof n)throw new w("d is a required number.");let i,o;if(0===e)return T.computeRealRoots(t,r,n);if(0===t){if(0===r){if(0===n)return[0,0,0];o=-n/e;let t=o<0?-Math.pow(-o,1/3):Math.pow(o,1/3);return[t,t,t]}return 0===n?(i=T.computeRealRoots(e,0,r),0===i.Length?[0]:[i[0],0,i[1]]):rt(e,0,r,n)}return 0===r?0===n?(o=-t/e,o<0?[o,0,0]:[0,0,o]):rt(e,t,0,n):0===n?(i=T.computeRealRoots(e,t,r),0===i.length?[0]:i[1]<=0?[i[0],i[1],0]:i[0]>=0?[0,i[0],i[1]]:[i[0],0,i[1]]):rt(e,t,r,n)};var F=ot,it={};function z(e,t,r,n){let i=e*e,o=t-3*i/8,a=r-t*e/2+i*e/8,u=n-r*e/4+t*i/16-3*i*i/256,s=F.computeRealRoots(1,2*o,o*o-4*u,-a*a);if(s.length>0){let t=-e/4,r=s[s.length-1];if(Math.abs(r)<R.EPSILON14){let e=T.computeRealRoots(1,o,u);if(2===e.length){let r,n=e[0],i=e[1];if(n>=0&&i>=0){let e=Math.sqrt(n),r=Math.sqrt(i);return[t-r,t-e,t+e,t+r]}if(n>=0&&i<0)return r=Math.sqrt(n),[t-r,t+r];if(n<0&&i>=0)return r=Math.sqrt(i),[t-r,t+r]}return[]}if(r>0){let e=Math.sqrt(r),n=(o+r-a/e)/2,i=(o+r+a/e)/2,u=T.computeRealRoots(1,e,n),s=T.computeRealRoots(1,-e,i);return 0!==u.length?(u[0]+=t,u[1]+=t,0!==s.length?(s[0]+=t,s[1]+=t,u[1]<=s[0]?[u[0],u[1],s[0],s[1]]:s[1]<=u[0]?[s[0],s[1],u[0],u[1]]:u[0]>=s[0]&&u[1]<=s[1]?[s[0],u[0],u[1],s[1]]:s[0]>=u[0]&&s[1]<=u[1]?[u[0],s[0],s[1],u[1]]:u[0]>s[0]&&u[0]<s[1]?[s[0],u[0],s[1],u[1]]:[u[0],s[0],u[1],s[1]]):u):0!==s.length?(s[0]+=t,s[1]+=t,s):[]}}return[]}function Y(e,t,r,n){let i=r*r,o=t*t,a=e*e,u=-2*t,s=r*e+o-4*n,l=a*n-r*t*e+i,w=F.computeRealRoots(1,u,s,l);if(w.length>0){let i,o,u,s,l,f,c=w[0],h=t-c,m=h*h,d=e/2,g=h/2,p=m-4*n,b=m+4*Math.abs(n),q=a-4*c,O=a+4*Math.abs(c);if(c<0||p*O<q*b){let t=Math.sqrt(q);i=t/2,o=0===t?0:(e*g-r)/t}else{let t=Math.sqrt(p);i=0===t?0:(e*g-r)/t,o=t/2}0===d&&0===i?(u=0,s=0):R.sign(d)===R.sign(i)?(u=d+i,s=c/u):(s=d-i,u=c/s),0===g&&0===o?(l=0,f=0):R.sign(g)===R.sign(o)?(l=g+o,f=n/l):(f=g-o,l=n/f);let M=T.computeRealRoots(1,u,l),y=T.computeRealRoots(1,s,f);if(0!==M.length)return 0!==y.length?M[1]<=y[0]?[M[0],M[1],y[0],y[1]]:y[1]<=M[0]?[y[0],y[1],M[0],M[1]]:M[0]>=y[0]&&M[1]<=y[1]?[y[0],M[0],M[1],y[1]]:y[0]>=M[0]&&y[1]<=M[1]?[M[0],y[0],y[1],M[1]]:M[0]>y[0]&&M[0]<y[1]?[y[0],M[0],y[1],M[1]]:[M[0],y[0],M[1],y[1]]:M;if(0!==y.length)return y}return[]}it.computeDiscriminant=function(e,t,r,n,i){if("number"!=typeof e)throw new w("a is a required number.");if("number"!=typeof t)throw new w("b is a required number.");if("number"!=typeof r)throw new w("c is a required number.");if("number"!=typeof n)throw new w("d is a required number.");if("number"!=typeof i)throw new w("e is a required number.");let o=e*e,a=o*e,u=t*t,s=u*t,l=r*r,f=l*r,c=n*n,h=c*n,m=i*i,d=m*i;return u*l*c-4*s*h-4*e*f*c+18*e*t*r*h-27*o*c*c+256*a*d+i*(18*s*r*n-4*u*f+16*e*l*l-80*e*t*l*n-6*e*u*c+144*o*r*c)+m*(144*e*u*r-27*u*u-128*o*l-192*o*t*n)},it.computeRealRoots=function(e,t,r,n,i){if("number"!=typeof e)throw new w("a is a required number.");if("number"!=typeof t)throw new w("b is a required number.");if("number"!=typeof r)throw new w("c is a required number.");if("number"!=typeof n)throw new w("d is a required number.");if("number"!=typeof i)throw new w("e is a required number.");if(Math.abs(e)<R.EPSILON15)return F.computeRealRoots(t,r,n,i);let o=t/e,a=r/e,u=n/e,s=i/e,l=o<0?1:0;switch(l+=a<0?l+1:l,l+=u<0?l+1:l,l+=s<0?l+1:l,l){case 0:return z(o,a,u,s);case 1:return Y(o,a,u,s);case 2:return Y(o,a,u,s);case 3:return z(o,a,u,s);case 4:return z(o,a,u,s);case 5:return Y(o,a,u,s);case 6:return z(o,a,u,s);case 7:return z(o,a,u,s);case 8:return Y(o,a,u,s);case 9:return z(o,a,u,s);case 10:return z(o,a,u,s);case 11:return Y(o,a,u,s);case 12:return z(o,a,u,s);case 13:return z(o,a,u,s);case 14:return z(o,a,u,s);case 15:return z(o,a,u,s);default:return}};var dt=it;function J(e,t){t=o.clone(H(t,o.ZERO)),o.equals(t,o.ZERO)||o.normalize(t,t),this.origin=o.clone(H(e,o.ZERO)),this.direction=t}J.clone=function(e,t){if(g(e))return g(t)?(t.origin=o.clone(e.origin),t.direction=o.clone(e.direction),t):new J(e.origin,e.direction)},J.getPoint=function(e,t,r){return et.typeOf.object("ray",e),et.typeOf.number("t",t),g(r)||(r=new o),r=o.multiplyByScalar(e.direction,t,r),o.add(e.origin,r,r)};var st=J,O={rayPlane:function(e,t,r){if(!g(e))throw new w("ray is required.");if(!g(t))throw new w("plane is required.");g(r)||(r=new o);let n=e.origin,i=e.direction,a=t.normal,u=o.dot(a,i);if(Math.abs(u)<R.EPSILON15)return;let s=(-t.distance-o.dot(a,n))/u;return s<0?void 0:(r=o.multiplyByScalar(i,s,r),o.add(n,r,r))}},Ot=new o,Pt=new o,Mt=new o,lt=new o,ht=new o;O.rayTriangleParametric=function(e,t,r,n,i){if(!g(e))throw new w("ray is required.");if(!g(t))throw new w("p0 is required.");if(!g(r))throw new w("p1 is required.");if(!g(n))throw new w("p2 is required.");i=H(i,!1);let a,u,s,l,f,c=e.origin,h=e.direction,m=o.subtract(r,t,Ot),d=o.subtract(n,t,Pt),p=o.cross(h,d,Mt),b=o.dot(m,p);if(i){if(b<R.EPSILON6||(a=o.subtract(c,t,lt),s=o.dot(a,p),s<0||s>b)||(u=o.cross(a,m,ht),l=o.dot(h,u),l<0||s+l>b))return;f=o.dot(d,u)/b}else{if(Math.abs(b)<R.EPSILON6)return;let e=1/b;if(a=o.subtract(c,t,lt),s=o.dot(a,p)*e,s<0||s>1||(u=o.cross(a,m,ht),l=o.dot(h,u)*e,l<0||s+l>1))return;f=o.dot(d,u)*e}return f},O.rayTriangle=function(e,t,r,n,i,a){let u=O.rayTriangleParametric(e,t,r,n,i);if(g(u)&&!(u<0))return g(a)||(a=new o),o.multiplyByScalar(e.direction,u,a),o.add(e.origin,a,a)};var Ct=new st;function Et(e,t,r,n){let i=t*t-4*e*r;if(i<0)return;if(i>0){let r=1/(2*e),o=Math.sqrt(i),a=(-t+o)*r,u=(-t-o)*r;return a<u?(n.root0=a,n.root1=u):(n.root0=u,n.root1=a),n}let o=-t/(2*e);return 0!==o?(n.root0=n.root1=o,n):void 0}O.lineSegmentTriangle=function(e,t,r,n,i,a,u){if(!g(e))throw new w("v0 is required.");if(!g(t))throw new w("v1 is required.");if(!g(r))throw new w("p0 is required.");if(!g(n))throw new w("p1 is required.");if(!g(i))throw new w("p2 is required.");let s=Ct;o.clone(e,s.origin),o.subtract(t,e,s.direction),o.normalize(s.direction,s.direction);let l=O.rayTriangleParametric(s,r,n,i,a);if(!(!g(l)||l<0||l>o.distance(e,t)))return g(u)||(u=new o),o.multiplyByScalar(s.direction,l,u),o.add(s.origin,u,u)};var Nt={root0:0,root1:0};function Rt(e,t,r){g(r)||(r=new Z);let n=e.origin,i=e.direction,a=t.center,u=t.radius*t.radius,s=o.subtract(n,a,Mt),l=o.dot(i,i),w=2*o.dot(i,s),f=o.magnitudeSquared(s)-u,c=Et(l,w,f,Nt);if(g(c))return r.start=c.root0,r.stop=c.root1,r}O.raySphere=function(e,t,r){if(!g(e))throw new w("ray is required.");if(!g(t))throw new w("sphere is required.");if(r=Rt(e,t,r),g(r)&&!(r.stop<0))return r.start=Math.max(r.start,0),r};var Lt=new st;O.lineSegmentSphere=function(e,t,r,n){if(!g(e))throw new w("p0 is required.");if(!g(t))throw new w("p1 is required.");if(!g(r))throw new w("sphere is required.");let i=Lt;o.clone(e,i.origin);let a=o.subtract(t,e,i.direction),u=o.magnitude(a);if(o.normalize(a,a),n=Rt(i,r,n),!(!g(n)||n.stop<0||n.start>u))return n.start=Math.max(n.start,0),n.stop=Math.min(n.stop,u),n};var It=new o,Dt=new o;function Q(e,t,r){let n=e+t;return R.sign(e)!==R.sign(t)&&Math.abs(n/Math.max(Math.abs(e),Math.abs(t)))<r?0:n}function Bt(e,t,r,n,i){let a,u=n*n,s=i*i,l=(e[b.COLUMN1ROW1]-e[b.COLUMN2ROW2])*s,w=i*(n*Q(e[b.COLUMN1ROW0],e[b.COLUMN0ROW1],R.EPSILON15)+t.y),f=e[b.COLUMN0ROW0]*u+e[b.COLUMN2ROW2]*s+n*t.x+r,c=s*Q(e[b.COLUMN2ROW1],e[b.COLUMN1ROW2],R.EPSILON15),h=i*(n*Q(e[b.COLUMN2ROW0],e[b.COLUMN0ROW2])+t.z),m=[];if(0===h&&0===c){if(a=T.computeRealRoots(l,w,f),0===a.length)return m;let e=a[0],t=Math.sqrt(Math.max(1-e*e,0));if(m.push(new o(n,i*e,i*-t)),m.push(new o(n,i*e,i*t)),2===a.length){let e=a[1],t=Math.sqrt(Math.max(1-e*e,0));m.push(new o(n,i*e,i*-t)),m.push(new o(n,i*e,i*t))}return m}let d=h*h,g=c*c,p=l*l,q=h*c,O=p+g,M=2*(w*l+q),y=2*f*l+w*w-g+d,S=2*(f*w-q),P=f*f-d;if(0===O&&0===M&&0===y&&0===S)return m;a=dt.computeRealRoots(O,M,y,S,P);let N=a.length;if(0===N)return m;for(let b=0;b<N;++b){let e,t=a[b],r=t*t,u=Math.max(1-r,0),s=Math.sqrt(u);e=R.sign(l)===R.sign(f)?Q(l*r+f,w*t,R.EPSILON12):R.sign(f)===R.sign(w*t)?Q(l*r,w*t+f,R.EPSILON12):Q(l*r+w*t,f,R.EPSILON12);let d=Q(c*t,h,R.EPSILON15),g=e*d;g<0?m.push(new o(n,i*t,i*s)):g>0?m.push(new o(n,i*t,i*-s)):0!==s?(m.push(new o(n,i*t,i*-s)),m.push(new o(n,i*t,i*s)),++b):m.push(new o(n,i*t,i*s))}return m}O.rayEllipsoid=function(e,t){if(!g(e))throw new w("ray is required.");if(!g(t))throw new w("ellipsoid is required.");let r,n,i,a,u,s=t.oneOverRadii,l=o.multiplyComponents(s,e.origin,It),f=o.multiplyComponents(s,e.direction,Dt),c=o.magnitudeSquared(l),h=o.dot(l,f);if(c>1){if(h>=0)return;let e=h*h;if(r=c-1,n=o.magnitudeSquared(f),i=n*r,e<i)return;if(e>i){a=h*h-i,u=-h+Math.sqrt(a);let e=u/n,t=r/u;return e<t?new Z(e,t):{start:t,stop:e}}let t=Math.sqrt(r/n);return new Z(t,t)}return c<1?(r=c-1,n=o.magnitudeSquared(f),i=n*r,a=h*h-i,u=-h+Math.sqrt(a),new Z(0,u/n)):h<0?(n=o.magnitudeSquared(f),new Z(0,-h/n)):void 0};var ct=new o,wt=new o,qt=new o,K=new o,xt=new o,Tt=new b,zt=new b,Wt=new b,Vt=new b,vt=new b,gt=new b,pt=new b,St=new o,Ut=new o,Qt=new ft;O.grazingAltitudeLocation=function(e,t){if(!g(e))throw new w("ray is required.");if(!g(t))throw new w("ellipsoid is required.");let r=e.origin,n=e.direction;if(!o.equals(r,o.ZERO)){let e=t.geodeticSurfaceNormal(r,ct);if(o.dot(n,e)>=0)return r}let i=g(this.rayEllipsoid(e,t)),a=t.transformPositionToScaledSpace(n,ct),u=o.normalize(a,a),s=o.mostOrthogonalAxis(a,K),l=o.normalize(o.cross(s,u,wt),wt),f=o.normalize(o.cross(u,l,qt),qt),c=Tt;c[0]=u.x,c[1]=u.y,c[2]=u.z,c[3]=l.x,c[4]=l.y,c[5]=l.z,c[6]=f.x,c[7]=f.y,c[8]=f.z;let h=b.transpose(c,zt),m=b.fromScale(t.radii,Wt),d=b.fromScale(t.oneOverRadii,Vt),p=vt;p[0]=0,p[1]=-n.z,p[2]=n.y,p[3]=n.z,p[4]=0,p[5]=-n.x,p[6]=-n.y,p[7]=n.x,p[8]=0;let q,O,M=b.multiply(b.multiply(h,d,gt),p,gt),y=b.multiply(b.multiply(M,m,pt),c,pt),S=b.multiplyByVector(M,r,xt),P=Bt(y,o.negate(S,ct),0,0,1),N=P.length;if(N>0){let e=o.clone(o.ZERO,Ut),a=Number.NEGATIVE_INFINITY;for(let t=0;t<N;++t){q=b.multiplyByVector(m,b.multiplyByVector(c,P[t],St),St);let i=o.normalize(o.subtract(q,r,K),K),u=o.dot(i,n);u>a&&(a=u,e=o.clone(q,e))}let u=t.cartesianToCartographic(e,Qt);return a=R.clamp(a,0,1),O=o.magnitude(o.subtract(e,r,K))*Math.sqrt(1-a*a),O=i?-O:O,u.height=O,t.cartographicToCartesian(u,new o)}};var At=new o;O.lineSegmentPlane=function(e,t,r,n){if(!g(e))throw new w("endPoint0 is required.");if(!g(t))throw new w("endPoint1 is required.");if(!g(r))throw new w("plane is required.");g(n)||(n=new o);let i=o.subtract(t,e,At),a=r.normal,u=o.dot(a,i);if(Math.abs(u)<R.EPSILON6)return;let s=o.dot(a,e),l=-(r.distance+s)/u;return l<0||l>1?void 0:(o.multiplyByScalar(i,l,n),o.add(e,n,n),n)},O.trianglePlaneIntersection=function(e,t,r,n){if(!g(e)||!g(t)||!g(r)||!g(n))throw new w("p0, p1, p2, and plane are required.");let i,a,u=n.normal,s=n.distance,l=o.dot(u,e)+s<0,f=o.dot(u,t)+s<0,c=o.dot(u,r)+s<0,h=0;if(h+=l?1:0,h+=f?1:0,h+=c?1:0,(1===h||2===h)&&(i=new o,a=new o),1===h){if(l)return O.lineSegmentPlane(e,t,n,i),O.lineSegmentPlane(e,r,n,a),{positions:[e,t,r,i,a],indices:[0,3,4,1,2,4,1,4,3]};if(f)return O.lineSegmentPlane(t,r,n,i),O.lineSegmentPlane(t,e,n,a),{positions:[e,t,r,i,a],indices:[1,3,4,2,0,4,2,4,3]};if(c)return O.lineSegmentPlane(r,e,n,i),O.lineSegmentPlane(r,t,n,a),{positions:[e,t,r,i,a],indices:[2,3,4,0,1,4,0,4,3]}}else if(2===h){if(!l)return O.lineSegmentPlane(t,e,n,i),O.lineSegmentPlane(r,e,n,a),{positions:[e,t,r,i,a],indices:[1,2,4,1,4,3,0,3,4]};if(!f)return O.lineSegmentPlane(r,t,n,i),O.lineSegmentPlane(e,t,n,a),{positions:[e,t,r,i,a],indices:[2,0,4,2,4,3,1,3,4]};if(!c)return O.lineSegmentPlane(e,r,n,i),O.lineSegmentPlane(t,r,n,a),{positions:[e,t,r,i,a],indices:[0,1,4,0,4,3,2,3,4]}}};var qe=O;export{st as a,qe as b};