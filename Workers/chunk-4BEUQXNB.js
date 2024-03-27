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
import{a as w,b as z,d as S}from"./chunk-CSZ6CHXI.js";import{a as y}from"./chunk-XXK6IR5Y.js";import{a as C,c as T,e as x}from"./chunk-IGBMENRT.js";import{a as h}from"./chunk-SEE54P6A.js";import{a as u,b as a}from"./chunk-S2577PU4.js";import{e as b}from"./chunk-2TPVVSVW.js";var c={SCALAR:"SCALAR",VEC2:"VEC2",VEC3:"VEC3",VEC4:"VEC4",MAT2:"MAT2",MAT3:"MAT3",MAT4:"MAT4",getMathType:function(e){switch(e){case c.SCALAR:return Number;case c.VEC2:return T;case c.VEC3:return C;case c.VEC4:return w;case c.MAT2:return S;case c.MAT3:return x;case c.MAT4:return z;default:throw new u("attributeType is not a valid value.")}},getNumberOfComponents:function(e){switch(e){case c.SCALAR:return 1;case c.VEC2:return 2;case c.VEC3:return 3;case c.VEC4:case c.MAT2:return 4;case c.MAT3:return 9;case c.MAT4:return 16;default:throw new u("attributeType is not a valid value.")}},getAttributeLocationCount:function(e){switch(e){case c.SCALAR:case c.VEC2:case c.VEC3:case c.VEC4:return 1;case c.MAT2:return 2;case c.MAT3:return 3;case c.MAT4:return 4;default:throw new u("attributeType is not a valid value.")}},getGlslType:function(e){switch(a.typeOf.string("attributeType",e),e){case c.SCALAR:return"float";case c.VEC2:return"vec2";case c.VEC3:return"vec3";case c.VEC4:return"vec4";case c.MAT2:return"mat2";case c.MAT3:return"mat3";case c.MAT4:return"mat4";default:throw new u("attributeType is not a valid value.")}}},N=Object.freeze(c),V=1/256,D=256,r={octEncodeInRange:function(e,t,r){a.defined("vector",e),a.defined("result",r);let n=C.magnitudeSquared(e);if(Math.abs(n-1)>h.EPSILON6)throw new u("vector must be normalized.");if(r.x=e.x/(Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z)),r.y=e.y/(Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z)),e.z<0){let e=r.x,t=r.y;r.x=(1-Math.abs(t))*h.signNotZero(e),r.y=(1-Math.abs(e))*h.signNotZero(t)}return r.x=h.toSNorm(r.x,t),r.y=h.toSNorm(r.y,t),r},octEncode:function(e,t){return r.octEncodeInRange(e,255,t)}},A=new T,F=new Uint8Array(1);function E(e){return F[0]=e,F[0]}r.octEncodeToCartesian4=function(e,t){return r.octEncodeInRange(e,65535,A),t.x=E(A.x*V),t.y=E(A.x),t.z=E(A.y*V),t.w=E(A.y),t},r.octDecodeInRange=function(e,t,r,n){if(a.defined("result",n),e<0||e>r||t<0||t>r)throw new u(`x and y must be unsigned normalized integers between 0 and ${r}`);if(n.x=h.fromSNorm(e,r),n.y=h.fromSNorm(t,r),n.z=1-(Math.abs(n.x)+Math.abs(n.y)),n.z<0){let e=n.x;n.x=(1-Math.abs(n.y))*h.signNotZero(e),n.y=(1-Math.abs(e))*h.signNotZero(n.y)}return C.normalize(n,n)},r.octDecode=function(e,t,n){return r.octDecodeInRange(e,t,255,n)},r.octDecodeFromCartesian4=function(e,t){a.typeOf.object("encoded",e),a.typeOf.object("result",t);let n=e.x,c=e.y,o=e.z,s=e.w;if(n<0||n>255||c<0||c>255||o<0||o>255||s<0||s>255)throw new u("x, y, z, and w must be unsigned normalized integers between 0 and 255");let d=n*D+c,i=o*D+s;return r.octDecodeInRange(d,i,65535,t)},r.octPackFloat=function(e){return a.defined("encoded",e),256*e.x+e.y};var l=new T;function g(e){return e>>1^-(1&e)}r.octEncodeFloat=function(e){return r.octEncode(e,l),r.octPackFloat(l)},r.octDecodeFloat=function(e,t){a.defined("value",e);let n=e/256,c=Math.floor(n),o=256*(n-c);return r.octDecode(c,o,t)},r.octPack=function(e,t,n,c){a.defined("v1",e),a.defined("v2",t),a.defined("v3",n),a.defined("result",c);let o=r.octEncodeFloat(e),u=r.octEncodeFloat(t),s=r.octEncode(n,l);return c.x=65536*s.x+o,c.y=65536*s.y+u,c},r.octUnpack=function(e,t,n,c){a.defined("packed",e),a.defined("v1",t),a.defined("v2",n),a.defined("v3",c);let o=e.x/65536,u=Math.floor(o),s=65536*(o-u);o=e.y/65536;let d=Math.floor(o),i=65536*(o-d);r.octDecodeFloat(s,t),r.octDecodeFloat(i,n),r.octDecode(u,d,c)},r.compressTextureCoordinates=function(e){a.defined("textureCoordinates",e);let t=4095*e.x|0,r=4095*e.y|0;return 4096*t+r},r.decompressTextureCoordinates=function(e,t){a.defined("compressed",e),a.defined("result",t);let r=e/4096,n=Math.floor(r);return t.x=n/4095,t.y=(e-4096*n)/4095,t},r.zigZagDeltaDecode=function(e,t,r){a.defined("uBuffer",e),a.defined("vBuffer",t),a.typeOf.number.equals("uBuffer.length","vBuffer.length",e.length,t.length),b(r)&&a.typeOf.number.equals("uBuffer.length","heightBuffer.length",e.length,r.length);let n=e.length,c=0,o=0,u=0;for(let a=0;a<n;++a)c+=g(e[a]),o+=g(t[a]),e[a]=c,t[a]=o,b(r)&&(u+=g(r[a]),r[a]=u)},r.dequantize=function(e,t,r,n){a.defined("typedArray",e),a.defined("componentDatatype",t),a.defined("type",r),a.defined("count",n);let c,o=N.getNumberOfComponents(r);switch(t){case y.BYTE:c=127;break;case y.UNSIGNED_BYTE:c=255;break;case y.SHORT:c=32767;break;case y.UNSIGNED_SHORT:c=65535;break;case y.INT:c=2147483647;break;case y.UNSIGNED_INT:c=4294967295;break;default:throw new u(`Cannot dequantize component datatype: ${t}`)}let s=new Float32Array(n*o);for(let a=0;a<n;a++)for(let t=0;t<o;t++){let r=a*o+t;s[r]=Math.max(e[r]/c,-1)}return s},r.decodeRGB565=function(e,t){a.defined("typedArray",e);let r=3*e.length;b(t)&&a.typeOf.number.equals("result.length","typedArray.length * 3",t.length,r);let n=e.length;b(t)||(t=new Float32Array(3*n));let c=31,o=63,u=1/31,s=1/63;for(let a=0;a<n;a++){let r=e[a],n=r>>11,d=r>>5&o,i=r&c,f=3*a;t[f]=n*u,t[f+1]=d*s,t[f+2]=i*u}return t};var W=r;export{W as a};