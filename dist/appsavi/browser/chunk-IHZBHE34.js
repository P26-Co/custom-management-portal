import{b as M}from"./chunk-GNOHASDR.js";import"./chunk-ILIOQSAD.js";import"./chunk-EYZSRIIE.js";import{E as f,Ja as w,K as x,L as h,La as b,M as g,Sa as m,Sb as O,Wa as n,Xa as o,Y as v,Ya as _,fb as S,fc as j,g as d,gc as I,nb as r,pb as y,sb as A,tb as C,ua as a,v as p,va as u,xb as k,zb as E}from"./chunk-IB225IHQ.js";var F=()=>["/sign-in"];function L(t,e){if(t&1&&(r(0),k(1,"i18nPlural")),t&2){let c=S();y(" Redirecting in ",E(1,1,c.countdown,c.countdownMapping)," ")}}function P(t,e){t&1&&r(0," You are now being redirected! ")}var D=(()=>{let e=class e{constructor(s,i){this._authService=s,this._router=i,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new d}ngOnInit(){this._authService.signOut(),p(1e3,1e3).pipe(f(()=>{this._router.navigate(["sign-in"])}),h(()=>this.countdown>0),x(this._unsubscribeAll),g(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}};e.\u0275fac=function(i){return new(i||e)(u(M),u(j))},e.\u0275cmp=v({type:e,selectors:[["auth-sign-out"]],standalone:!0,features:[A],decls:15,vars:4,consts:[[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:justify-center"],[1,"w-full","px-4","py-8","sm:bg-card","sm:w-auto","sm:rounded-2xl","sm:p-12","sm:shadow"],[1,"mx-auto","w-full","max-w-80","sm:mx-0","sm:w-80"],[1,"mx-auto","w-12"],["src","images/logo/logo.png"],[1,"mt-8","text-center","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-0.5","flex","justify-center","font-medium"],[1,"text-secondary","mt-8","text-center","text-md","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(i,l){i&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),_(4,"img",4),o(),n(5,"div",5),r(6," You have signed out! "),o(),n(7,"div",6),w(8,L,2,4)(9,P,1,0),o(),n(10,"div",7)(11,"span"),r(12,"Go to"),o(),n(13,"a",8),r(14,"sign in "),o()()()()()),i&2&&(a(8),m(l.countdown>0?8:-1),a(),m(l.countdown===0?9:-1),a(4),b("routerLink",C(3,F)))},dependencies:[I,O],encapsulation:2});let t=e;return t})();var W=[{path:"",component:D}];export{W as default};