import{M as n,P as u,T as a,Wb as p,i,p as o}from"./chunk-VNRFEW3Q.js";var d=(()=>{let e=class e{constructor(){this._httpClient=a(p),this._user=new i(1),this._userEmitted=!1}set user(t){localStorage.setItem("user",JSON.stringify(t)),this._user.next(t),this._userEmitted=!0}get user$(){if(!this._userEmitted){let t=localStorage.getItem("user");if(t){let r=JSON.parse(t);this._user.next(r),this._userEmitted=!0}}return this._user.asObservable()}get(){return this._httpClient.get("api/common/user").pipe(n(t=>{this._user.next(t)}))}update(t){return this._httpClient.patch("api/common/user",{user:t}).pipe(o(r=>{this._user.next(r)}))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{d as a};