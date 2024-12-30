import{b as ee,c as te,d as ie,e as ne,f as ae,g as oe,h as re,i as me,j as le,k as se,l as de,m as pe,n as _e,o as ce,p as ue}from"./chunk-HTYTCO3U.js";import{v as G,w as W}from"./chunk-NMNUGWFG.js";import{n as Z,p as J,q as K,r as Q,s as X}from"./chunk-OVEWZQON.js";import{T as $,V as j,pa as V,ra as B,sa as O,ua as Y}from"./chunk-33VKULNV.js";import{a as U}from"./chunk-EYZSRIIE.js";import{Ab as R,Ja as s,La as d,Ob as P,P as A,Pb as k,Rb as F,S as E,Sa as I,Wa as a,Xa as o,Y as w,Ya as f,Yb as H,Za as _,_a as c,ab as C,ca as v,d as b,da as x,db as S,dc as q,fb as g,fc as N,mb as M,nb as r,pb as u,qb as L,sb as T,ua as m,ub as y,va as h,xb as D,yb as z}from"./chunk-IB225IHQ.js";var ge=(()=>{let i=class i{constructor(n){this._httpClient=n}getAdminLogs(n){return this._httpClient.get(U.ADMIN_LOG_ACTIVITY,{params:ue(n)})}};i.\u0275fac=function(p){return new(p||i)(E(H))},i.\u0275prov=A({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();var Ce=e=>({"sm:mb-18":e}),Se=e=>({"pointer-events-none":e});function Le(e,i){if(e&1){let t=C();a(0,"button",15),S("click",function(){v(t);let p=g();return x(p.clearSearch())}),f(1,"mat-icon",16),a(2,"span"),r(3,"Clear Filter"),o()()}e&2&&(d("color","primary"),m(),d("svgIcon","heroicons_outline:x-mark"))}function ye(e,i){if(e&1&&(a(0,"fuse-alert",17),r(1),o()),e&2){let t=g();d("appearance","outline")("showIcon",!1)("type",t.alert.type)("@shake",t.alert.type==="error"),m(),u(" ",t.alert.message," ")}}function be(e,i){e&1&&(a(0,"th",33),r(1," Performed By"),o())}function Ae(e,i){if(e&1&&(a(0,"td",34),r(1),o()),e&2){let t,n=i.$implicit;d("matTooltip",n.admin_user==null?null:n.admin_user.email),m(),u(" ",((t=n.admin_user==null?null:n.admin_user.name)!==null&&t!==void 0?t:n.admin_user==null?null:n.admin_user.email)||"-"," ")}}function Ee(e,i){e&1&&(a(0,"th",33),r(1," Endpoint"),o())}function we(e,i){if(e&1&&(a(0,"td",35),r(1),o()),e&2){let t=i.$implicit;m(),u(" ",t.endpoint||"-"," ")}}function Ie(e,i){e&1&&(a(0,"th",33),r(1," Action"),o())}function Me(e,i){if(e&1&&(a(0,"td",35),r(1),o()),e&2){let t=i.$implicit;m(),u(" ",t.action||"-"," ")}}function Te(e,i){e&1&&(a(0,"th",33),r(1," Device"),o())}function De(e,i){if(e&1&&(a(0,"td",35),r(1),o()),e&2){let t,n=i.$implicit;m(),u(" ",((t=(t=n.device==null?null:n.device.name)!==null&&t!==void 0?t:n.device==null?null:n.device.device_id)!==null&&t!==void 0?t:n.device==null?null:n.device.id)||"-"," ")}}function ze(e,i){e&1&&(a(0,"th",33),r(1," Device User"),o())}function Re(e,i){if(e&1&&(a(0,"td",35),r(1),o()),e&2){let t=i.$implicit;m(),u(" ",(t.device_user==null?null:t.device_user.device_username)||"-"," ")}}function Pe(e,i){e&1&&(a(0,"th",33),r(1," User"),o())}function ke(e,i){if(e&1&&(a(0,"td",35),r(1),o()),e&2){let t=i.$implicit;m(),L(" ",(t.user==null?null:t.user.name)||"-"," (",(t.user==null?null:t.user.email)||"-",") ")}}function Fe(e,i){e&1&&(a(0,"th",33),r(1," Shared User"),o())}function He(e,i){if(e&1&&(a(0,"td",35),r(1),o()),e&2){let t=i.$implicit;m(),L(" ",(t.shared_user==null?null:t.shared_user.name)||"-"," (",(t.shared_user==null?null:t.shared_user.email)||"-",") ")}}function qe(e,i){e&1&&(a(0,"th",33),r(1," Timestamp"),o())}function Ne(e,i){if(e&1&&(a(0,"td",35),r(1),D(2,"date"),o()),e&2){let t=i.$implicit;m(),u(" ",z(2,1,t.timestamp)||"-"," ")}}function $e(e,i){e&1&&f(0,"tr",36)}function je(e,i){e&1&&f(0,"tr",37)}function Ve(e,i){if(e&1){let t=C();_(0),a(1,"table",18),_(2,19),s(3,be,2,0,"th",20)(4,Ae,2,2,"td",21),c(),_(5,22),s(6,Ee,2,0,"th",20)(7,we,2,1,"td",23),c(),_(8,24),s(9,Ie,2,0,"th",20)(10,Me,2,1,"td",23),c(),_(11,25),s(12,Te,2,0,"th",20)(13,De,2,1,"td",23),c(),_(14,26),s(15,ze,2,0,"th",20)(16,Re,2,1,"td",23),c(),_(17,27),s(18,Pe,2,0,"th",20)(19,ke,2,2,"td",23),c(),_(20,28),s(21,Fe,2,0,"th",20)(22,He,2,2,"td",23),c(),_(23,29),s(24,qe,2,0,"th",20)(25,Ne,3,3,"td",23),c(),s(26,$e,1,0,"tr",30)(27,je,1,0,"tr",31),o(),a(28,"mat-paginator",32),S("page",function(p){v(t);let l=g();return x(l.handlePageEvent(p))}),o(),c()}if(e&2){let t=g();m(),d("dataSource",t.adminLogs),m(25),d("matHeaderRowDef",t.displayedColumns)("matHeaderRowDefSticky",!0),m(),d("matRowDefColumns",t.displayedColumns),m(),d("ngClass",y(10,Se,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",t.pageSize)("showFirstLastButtons",!0)}}function Be(e,i){e&1&&(a(0,"div",39),r(1," There are no admin logs! "),o())}function Oe(e,i){if(e&1&&s(0,Be,2,0,"div",38),e&2){let t=g();d("ngIf",!t.isLoading)}}function Ue(e,i){e&1&&(_(0),a(1,"div",40),f(2,"mat-progress-spinner",41),a(3,"h4",42),r(4,"Fetching your admin logs..."),o()(),c())}var fe=(()=>{let i=class i{constructor(n,p,l){this._activatedRoute=n,this._router=p,this._sharedUsersService=l,this._subscription=new b,this.displayedColumns=["admin_user","endpoint","action","device","device_user","user","shared_user","timestamp"],this.pageSize=ce,this.pagination={length:0,page:0,size:this.pageSize[0]},this.alert={type:"success",message:""},this.showAlert=!1,this.isLoading=!1}ngOnInit(){this.pagination.zitadel_user_id=Number(this._activatedRoute.snapshot.queryParamMap.get("zitadel_user_id")??0),this.pagination.device_id=Number(this._activatedRoute.snapshot.queryParamMap.get("device_id")??0),this.pagination.device_user_id=Number(this._activatedRoute.snapshot.queryParamMap.get("device_user_id")??0),this.pagination.shared_user_id=Number(this._activatedRoute.snapshot.queryParamMap.get("shared_user_id")??0),this.pagination.admin_user_id=Number(this._activatedRoute.snapshot.queryParamMap.get("admin_user_id")??0),this.pagination.page=Number(this._activatedRoute.snapshot.queryParamMap.get("page")??0),this.pagination.size=Number(this._activatedRoute.snapshot.queryParamMap.get("size")??this.pageSize[0]),this.isLoading=!0,this.getAdminLogs()}getAdminLogs(){this.isLoading=!0,this.queryParamHandler(),this._subscription.add(this._sharedUsersService.getAdminLogs(this.pagination).subscribe({next:n=>{this.adminLogs=n.items,this.pagination.length=n.total,this.isLoading=!1},error:n=>{n.status!==404&&this.onFailed(n.status===500?"500: Internal Server Error":n.error.detail),this.isLoading=!1}}))}clearSearch(){this.pagination.page=0,this.pagination.length=0,this.pagination.zitadel_user_id=void 0,this.pagination.device_user_id=void 0,this.pagination.device_id=void 0,this.pagination.shared_user_id=void 0,this.pagination.admin_user_id=void 0,this.getAdminLogs()}queryParamHandler(){this._router.navigate(["."],{relativeTo:this._activatedRoute,queryParams:{zitadel_user_id:this.pagination.zitadel_user_id,device_id:this.pagination.device_id,device_user_id:this.pagination.device_user_id,shared_user_id:this.pagination.shared_user_id,admin_user_id:this.pagination.admin_user_id,page:this.pagination.page,size:this.pagination.size}}).then()}handlePageEvent(n){this.pagination.length=n.length,this.pagination.size=n.pageSize,this.pagination.page=n.pageIndex,this.getAdminLogs()}onFailed(n){this.alert={type:"error",message:n},this.showAlert=!0,this.isLoading=!1}ngOnDestroy(){this._subscription?.unsubscribe()}};i.\u0275fac=function(p){return new(p||i)(h(q),h(N),h(ge))},i.\u0275cmp=w({type:i,selectors:[["app-admin-logs"]],standalone:!0,features:[T],decls:17,vars:8,consts:[["noDevices",""],[1,"sm:absolute","sm:inset-0","flex","flex-col","flex-auto","min-w-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"border-b"],[1,"flex","flex-col","w-full","px-6"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex","flex-col","min-w-0","ml-4"],["id","Clients",1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["mat-stroked-button","",3,"color"],["class","mb-6",3,"appearance","showIcon","type",4,"ngIf"],[1,"relative","flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:overflow-y-auto",3,"ngClass"],[4,"ngIf","ngIfElse"],[4,"ngIf"],["mat-stroked-button","",3,"click","color"],[1,"icon-size-5",3,"svgIcon"],[1,"mb-6",3,"appearance","showIcon","type"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","admin_user"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"matTooltip",4,"matCellDef"],["matColumnDef","endpoint"],["mat-cell","",4,"matCellDef"],["matColumnDef","action"],["matColumnDef","device"],["matColumnDef","device_user"],["matColumnDef","user"],["matColumnDef","shared_user"],["matColumnDef","timestamp"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"sm:absolute","sm:inset-x-0","sm:bottom-0","border-b","sm:border-t","sm:border-b-0","z-10","bg-gray-50","dark:bg-transparent",3,"page","ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],["mat-header-cell",""],["mat-cell","",3,"matTooltip"],["mat-cell",""],["mat-header-row",""],["mat-row",""],["class","p-8 sm:p-16 text-4xl font-semibold tracking-tight text-center",4,"ngIf"],[1,"p-8","sm:p-16","text-4xl","font-semibold","tracking-tight","text-center"],[1,"w-full","h-full","flex","flex-col","justify-center","items-center","bg-default"],["color","primary","diameter","50","strokeWidth","5","mode","indeterminate"],[1,"mt-16"]],template:function(p,l){if(p&1&&(a(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7),r(7," Admin Logs "),o()()(),a(8,"div",8),s(9,Le,4,2,"button",9),o()(),s(10,ye,2,5,"fuse-alert",10),o()(),a(11,"div",11)(12,"div",12),s(13,Ve,29,12,"ng-container",13)(14,Oe,1,1,"ng-template",null,0,R)(16,Ue,5,0,"ng-container",14),o()()()),p&2){let he=M(15);m(9),I(l.pagination.zitadel_user_id||l.pagination.device_user_id||l.pagination.device_id||l.pagination.shared_user_id||l.pagination.admin_user_id?9:-1),m(),d("ngIf",!l.isLoading&&l.showAlert),m(2),d("ngClass",y(6,Ce,(l.adminLogs==null?null:l.adminLogs.length)>0)),m(),d("ngIf",(l.adminLogs==null?null:l.adminLogs.length)>0)("ngIfElse",he),m(3),d("ngIf",l.isLoading&&!l.adminLogs)}},dependencies:[X,V,O,B,J,te,ee,Q,K,W,G,k,Z,j,$,P,_e,ie,ae,le,oe,ne,se,re,me,de,pe,F],data:{animation:Y}});let e=i;return e})();var vt=[{path:"",component:fe}];export{vt as default};
