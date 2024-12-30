import{b as X,c as ee,d as te,e as ie,f as ne,g as ae,h as oe,i as re,j as le,k as se,l as me,m as ce,n as pe,o as de,p as ge}from"./chunk-HTYTCO3U.js";import{w as G}from"./chunk-NMNUGWFG.js";import{n as Y,p as Z,q as J,r as K,s as Q}from"./chunk-OVEWZQON.js";import{T as N,V,pa as $,ra as B,sa as O,ua as W}from"./chunk-33VKULNV.js";import{a as U}from"./chunk-EYZSRIIE.js";import{Ab as P,Ja as p,La as m,Ob as k,P as L,Pb as F,Rb as H,S as b,Sa as I,Wa as a,Xa as o,Y as w,Ya as f,Yb as A,Za as d,_a as g,ab as C,ca as h,d as y,da as x,db as D,dc as q,fb as u,fc as j,mb as E,nb as l,pb as _,qb as M,sb as T,ua as r,ub as S,va as v,xb as z,yb as R}from"./chunk-IB225IHQ.js";var _e=(()=>{let t=class t{constructor(n){this._httpClient=n}getDeviceLogs(n){return this._httpClient.get(U.LOG_ACTIVITY,{params:ge(n)})}};t.\u0275fac=function(c){return new(c||t)(b(A))},t.\u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var xe=e=>({"sm:mb-18":e}),Ce=e=>({"pointer-events-none":e});function De(e,t){if(e&1){let i=C();a(0,"button",15),D("click",function(){h(i);let c=u();return x(c.clearSearch())}),f(1,"mat-icon",16),a(2,"span"),l(3,"Clear Filter"),o()()}e&2&&(m("color","primary"),r(),m("svgIcon","heroicons_outline:x-mark"))}function Se(e,t){if(e&1&&(a(0,"fuse-alert",17),l(1),o()),e&2){let i=u();m("appearance","outline")("showIcon",!1)("type",i.alert.type)("@shake",i.alert.type==="error"),r(),_(" ",i.alert.message," ")}}function ye(e,t){e&1&&(a(0,"th",30),l(1," Type"),o())}function Le(e,t){if(e&1&&(a(0,"td",31),l(1),o()),e&2){let i=t.$implicit;r(),_(" ",i.activity_type||"-"," ")}}function be(e,t){e&1&&(a(0,"th",30),l(1," Login As"),o())}function we(e,t){if(e&1&&(a(0,"td",31),l(1),o()),e&2){let i=t.$implicit;r(),_(" ",i.login_as||"Self"," ")}}function Ie(e,t){e&1&&(a(0,"th",30),l(1," Device"),o())}function Ee(e,t){if(e&1&&(a(0,"td",31),l(1),o()),e&2){let i,n=t.$implicit;r(),_(" ",((i=(i=n.device==null?null:n.device.name)!==null&&i!==void 0?i:n.device==null?null:n.device.device_id)!==null&&i!==void 0?i:n.device==null?null:n.device.id)||"-"," ")}}function Me(e,t){e&1&&(a(0,"th",30),l(1," Device User"),o())}function Te(e,t){if(e&1&&(a(0,"td",31),l(1),o()),e&2){let i=t.$implicit;r(),_(" ",(i.device_user==null?null:i.device_user.device_username)||"-"," ")}}function ze(e,t){e&1&&(a(0,"th",30),l(1," User"),o())}function Re(e,t){if(e&1&&(a(0,"td",31),l(1),o()),e&2){let i=t.$implicit;r(),M(" ",(i.user==null?null:i.user.name)||"-"," (",(i.user==null?null:i.user.email)||"-",") ")}}function Pe(e,t){e&1&&(a(0,"th",30),l(1," Timestamp"),o())}function ke(e,t){if(e&1&&(a(0,"td",31),l(1),z(2,"date"),o()),e&2){let i=t.$implicit;r(),_(" ",R(2,1,i.timestamp)||"-"," ")}}function Fe(e,t){e&1&&f(0,"tr",32)}function He(e,t){e&1&&f(0,"tr",33)}function Ae(e,t){if(e&1){let i=C();d(0),a(1,"table",18),d(2,19),p(3,ye,2,0,"th",20)(4,Le,2,1,"td",21),g(),d(5,22),p(6,be,2,0,"th",20)(7,we,2,1,"td",21),g(),d(8,23),p(9,Ie,2,0,"th",20)(10,Ee,2,1,"td",21),g(),d(11,24),p(12,Me,2,0,"th",20)(13,Te,2,1,"td",21),g(),d(14,25),p(15,ze,2,0,"th",20)(16,Re,2,2,"td",21),g(),d(17,26),p(18,Pe,2,0,"th",20)(19,ke,3,3,"td",21),g(),p(20,Fe,1,0,"tr",27)(21,He,1,0,"tr",28),o(),a(22,"mat-paginator",29),D("page",function(c){h(i);let s=u();return x(s.handlePageEvent(c))}),o(),g()}if(e&2){let i=u();r(),m("dataSource",i.deviceLogs),r(19),m("matHeaderRowDef",i.displayedColumns)("matHeaderRowDefSticky",!0),r(),m("matRowDefColumns",i.displayedColumns),r(),m("ngClass",S(10,Ce,i.isLoading))("length",i.pagination.length)("pageIndex",i.pagination.page)("pageSize",i.pagination.size)("pageSizeOptions",i.pageSize)("showFirstLastButtons",!0)}}function qe(e,t){e&1&&(a(0,"div",35),l(1," There are no device logs! "),o())}function je(e,t){if(e&1&&p(0,qe,2,0,"div",34),e&2){let i=u();m("ngIf",!i.isLoading)}}function Ne(e,t){e&1&&(d(0),a(1,"div",36),f(2,"mat-progress-spinner",37),a(3,"h4",38),l(4,"Fetching your device logs..."),o()(),g())}var ue=(()=>{let t=class t{constructor(n,c,s){this._activatedRoute=n,this._router=c,this._sharedUsersService=s,this._subscription=new y,this.displayedColumns=["activity_type","login_as","device","device_user","user","timestamp"],this.pageSize=de,this.pagination={length:0,page:0,size:this.pageSize[0]},this.alert={type:"success",message:""},this.showAlert=!1,this.isLoading=!1}ngOnInit(){this.pagination.zitadel_user_id=Number(this._activatedRoute.snapshot.queryParamMap.get("zitadel_user_id")??0),this.pagination.device_id=Number(this._activatedRoute.snapshot.queryParamMap.get("device_id")??0),this.pagination.device_user_id=Number(this._activatedRoute.snapshot.queryParamMap.get("device_user_id")??0),this.pagination.page=Number(this._activatedRoute.snapshot.queryParamMap.get("page")??0),this.pagination.size=Number(this._activatedRoute.snapshot.queryParamMap.get("size")??this.pageSize[0]),this.isLoading=!0,this.getDeviceLogs()}getDeviceLogs(){this.isLoading=!0,this.queryParamHandler(),this._subscription.add(this._sharedUsersService.getDeviceLogs(this.pagination).subscribe({next:n=>{this.deviceLogs=n.items,this.pagination.length=n.total,this.isLoading=!1},error:n=>{n.status!==404&&this.onFailed(n.status===500?"500: Internal Server Error":n.error.detail),this.isLoading=!1}}))}clearSearch(){this.pagination.page=0,this.pagination.length=0,this.pagination.zitadel_user_id=void 0,this.pagination.device_user_id=void 0,this.pagination.device_id=void 0,this.getDeviceLogs()}queryParamHandler(){this._router.navigate(["."],{relativeTo:this._activatedRoute,queryParams:{zitadel_user_id:this.pagination.zitadel_user_id,device_id:this.pagination.device_id,device_user_id:this.pagination.device_user_id,page:this.pagination.page,size:this.pagination.size}}).then()}handlePageEvent(n){this.pagination.length=n.length,this.pagination.size=n.pageSize,this.pagination.page=n.pageIndex,this.getDeviceLogs()}onFailed(n){this.alert={type:"error",message:n},this.showAlert=!0,this.isLoading=!1}ngOnDestroy(){this._subscription?.unsubscribe()}};t.\u0275fac=function(c){return new(c||t)(v(q),v(j),v(_e))},t.\u0275cmp=w({type:t,selectors:[["app-device-logs"]],standalone:!0,features:[T],decls:17,vars:8,consts:[["noDevices",""],[1,"sm:absolute","sm:inset-0","flex","flex-col","flex-auto","min-w-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"border-b"],[1,"flex","flex-col","w-full","px-6"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex","flex-col","min-w-0","ml-4"],["id","Clients",1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["mat-stroked-button","",3,"color"],["class","mb-6",3,"appearance","showIcon","type",4,"ngIf"],[1,"relative","flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:overflow-y-auto",3,"ngClass"],[4,"ngIf","ngIfElse"],[4,"ngIf"],["mat-stroked-button","",3,"click","color"],[1,"icon-size-5",3,"svgIcon"],[1,"mb-6",3,"appearance","showIcon","type"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","activity_type"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","login_as"],["matColumnDef","device"],["matColumnDef","device_user"],["matColumnDef","user"],["matColumnDef","timestamp"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"sm:absolute","sm:inset-x-0","sm:bottom-0","border-b","sm:border-t","sm:border-b-0","z-10","bg-gray-50","dark:bg-transparent",3,"page","ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],["class","p-8 sm:p-16 text-4xl font-semibold tracking-tight text-center",4,"ngIf"],[1,"p-8","sm:p-16","text-4xl","font-semibold","tracking-tight","text-center"],[1,"w-full","h-full","flex","flex-col","justify-center","items-center","bg-default"],["color","primary","diameter","50","strokeWidth","5","mode","indeterminate"],[1,"mt-16"]],template:function(c,s){if(c&1&&(a(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7),l(7," Device Logs "),o()()(),a(8,"div",8),p(9,De,4,2,"button",9),o()(),p(10,Se,2,5,"fuse-alert",10),o()(),a(11,"div",11)(12,"div",12),p(13,Ae,23,12,"ng-container",13)(14,je,1,1,"ng-template",null,0,P)(16,Ne,5,0,"ng-container",14),o()()()),c&2){let fe=E(15);r(9),I(s.pagination.zitadel_user_id||s.pagination.device_user_id||s.pagination.device_id?9:-1),r(),m("ngIf",!s.isLoading&&s.showAlert),r(2),m("ngClass",S(6,xe,(s.deviceLogs==null?null:s.deviceLogs.length)>0)),r(),m("ngIf",(s.deviceLogs==null?null:s.deviceLogs.length)>0)("ngIfElse",fe),r(3),m("ngIf",s.isLoading&&!s.deviceLogs)}},dependencies:[Q,$,O,B,Z,ee,X,K,J,G,F,Y,V,N,k,pe,te,ne,le,ae,ie,se,oe,re,me,ce,H],data:{animation:W}});let e=t;return e})();var dt=[{path:"",component:ue}];export{dt as default};
