import{a as Ve}from"./chunk-43ARXQSY.js";import{b as oe}from"./chunk-4U2S743S.js";import{a as Pe}from"./chunk-YU27UCT7.js";import{a as be,b as De,c as Ie,d as we,e as ye,f as Ue,g as Ee,h as Me,i as Te,j as ke,k as Fe,l as ze,m as Le,n as Re,o as D,p as Ae}from"./chunk-HTYTCO3U.js";import{a as ae,b as se,c as le,j as ue}from"./chunk-3KNKVKUA.js";import{v as _e,w as fe}from"./chunk-NMNUGWFG.js";import{a as B}from"./chunk-7D2E4VF2.js";import{d as A,f as he,g as ve,i as ge,j as xe,k as Ce,l as Se,n as P,p as V,q as j,r as N,s as q}from"./chunk-OVEWZQON.js";import{O as re,T,U as k,V as F,ia as me,ja as ce,oa as de,pa as pe,ra as z,sa as L,ua as R}from"./chunk-33VKULNV.js";import{a as G}from"./chunk-EYZSRIIE.js";import{Ab as ee,Ja as d,La as m,Ob as te,P as W,Pb as M,S as J,Sa as b,Ua as K,Va as Q,Wa as s,Xa as l,Y as w,Ya as p,Yb as ie,Za as x,_a as C,ab as y,ca as v,d as I,da as g,db as f,dc as ne,fb as u,fc as Z,mb as X,nb as c,ob as U,pb as S,qb as Y,sb as E,ua as a,ub as O,va as _}from"./chunk-IB225IHQ.js";var Ge=(e,i)=>i.id;function We(e,i){if(e&1&&(s(0,"fuse-alert",15),c(1),l()),e&2){let n=u();m("appearance","outline")("showIcon",!1)("type",n.alert.type)("@shake",n.alert.type==="error"),a(),S(" ",n.alert.message," ")}}function Je(e,i){if(e&1&&(s(0,"mat-option",16),c(1),l()),e&2){let n=u().$implicit;m("value",n.id),a(),U(n.name)}}function Ke(e,i){if(e&1&&d(0,Je,2,2,"mat-option",16),e&2){let n=i.$implicit,t=u();b(n.id!==t.data.user.id?0:-1)}}function Qe(e,i){e&1&&(s(0,"mat-option"),p(1,"mat-spinner",17),c(2," Loading... "),l())}function Xe(e,i){e&1&&p(0,"mat-spinner",18)}function Ye(e,i){e&1&&(s(0,"mat-error"),c(1," User is required "),l())}function et(e,i){e&1&&(s(0,"span"),c(1," Save "),l())}function tt(e,i){e&1&&p(0,"mat-progress-spinner",19),e&2&&m("diameter",24)("mode","indeterminate")}var Ne=(()=>{let i=class i{constructor(t,o,r,h,H,$){this._snackBar=t,this._zitadelUsersService=o,this._formBuilder=r,this._sharedUsersService=h,this.matDialogRef=H,this.data=$,this.subscription=new I,this.zitadelUsers=[],this.pagination={page:0,length:0,size:D[0]},this.totalElements=D[0]+1,this.offset=0,this.alert={type:"success",message:""},this.showAlert=!1,this.isLoading=!1}ngOnInit(){this.createForm=this._formBuilder.group({deviceUserId:[this.data?.id??"",[A.required]],deviceId:[this.data?.device?.id??"",[A.required]],zitadelUserId:["",[A.required]]}),this.getZitadelUsers()}getZitadelUsers(){this.isLoading=!0,this.offset<=this.totalElements&&(this.isLoading=!0,this.subscription.add(this._zitadelUsersService.getZitadelUsers(this.pagination).subscribe({next:t=>{this.zitadelUsers=this.zitadelUsers.concat(t.items),this.totalElements=t.total,this.offset+=this.pagination.size,this.pagination.page++},error:t=>{t.status!==404&&this.onFailed(t.status===500?"500: Internal Server Error":t.error)},complete:()=>this.isLoading=!1})))}onScroll(){this.isLoading||this.offset>this.totalElements||this.getZitadelUsers()}save(){this.createForm.invalid||(this.showAlert=!1,this.isLoading=!0,this.data&&this.subscription.add(this._sharedUsersService.addShareUser(this.createForm.value).subscribe({next:()=>{this._snackBar.open("Shared successfully.!"),this.matDialogRef.close(!0)},error:t=>{this.onFailed(t.error.detail??t.statusText)}})))}onFailed(t){this.alert={type:"error",message:t},this.showAlert=!0,this.isLoading=!1,this.createForm.enable()}ngOnDestroy(){this.subscription?.unsubscribe()}};i.\u0275fac=function(o){return new(o||i)(_(oe),_(Pe),_(Se),_(Ve),_(ae),_(se))},i.\u0275cmp=w({type:i,selectors:[["app-share-device"]],standalone:!0,features:[E],decls:22,vars:13,consts:[[1,"flex","flex-col","flex-auto","md:w-160","md:min-w-160","max-h-160","-m-6","overflow-y-auto"],[1,"flex","flex-0","items-center","justify-between","h-16","pr-3","sm:pr-5","pl-6","sm:pl-8","bg-primary","text-on-primary"],[1,"text-lg","font-medium"],["mat-icon-button","",3,"click","tabIndex"],[1,"text-current",3,"svgIcon"],[1,"flex","flex-col","w-full","p-6","sm:p-8","overflow-y-auto"],["class","mb-4",3,"appearance","showIcon","type",4,"ngIf"],[3,"formGroup"],[1,"w-full","mb-2"],[3,"scroll","formControlName"],["class","ml-1","diameter","30",4,"ngIf"],[4,"ngIf"],[1,"flex","justify-end"],["mat-flat-button","",1,"fuse-mat-button-large","mt-3",3,"click","color","disabled"],[3,"diameter","mode",4,"ngIf"],[1,"mb-4",3,"appearance","showIcon","type"],[3,"value"],["diameter","30"],["diameter","30",1,"ml-1"],[3,"diameter","mode"]],template:function(o,r){o&1&&(s(0,"div",0)(1,"div",1)(2,"div",2),c(3),l(),s(4,"button",3),f("click",function(){return r.matDialogRef.close()}),p(5,"mat-icon",4),l()(),s(6,"div",5),d(7,We,2,5,"fuse-alert",6),s(8,"form",7)(9,"mat-form-field",8)(10,"mat-label"),c(11,"Share to"),l(),s(12,"mat-select",9),f("scroll",function(){return r.onScroll()}),K(13,Ke,1,1,null,null,Ge),d(15,Qe,3,0,"mat-option"),l(),d(16,Xe,1,0,"mat-spinner",10)(17,Ye,2,0,"mat-error",11),l(),s(18,"div",12)(19,"button",13),f("click",function(){return r.save()}),d(20,et,2,0,"span",11)(21,tt,1,2,"mat-progress-spinner",14),l()()()()()),o&2&&(a(3),S("",r.data?"Edit":"New"," Share Device"),a(),m("tabIndex",-1),a(),m("svgIcon","heroicons_outline:x-mark"),a(2),m("ngIf",r.showAlert),a(),m("formGroup",r.createForm),a(4),m("formControlName","zitadelUserId"),a(),Q(r.zitadelUsers),a(2),b(r.isLoading?15:-1),a(),m("ngIf",r.isLoading),a(),m("ngIf",r.createForm.get("zitadelUserId").hasError("required")),a(2),m("color","primary")("disabled",r.createForm.disabled||r.isLoading),a(),m("ngIf",!r.createForm.disabled&&!r.isLoading),a(),m("ngIf",r.createForm.disabled||r.isLoading))},dependencies:[P,ge,he,ve,xe,Ce,q,V,de,me,ce,N,j,F,T,k,L,z,M,be,re],data:{animation:R}});let e=i;return e})();var qe=(()=>{let i=class i{constructor(t){this._httpClient=t}getDeviceUsers(t){return this._httpClient.get(G.DEVICE_USERS,{params:Ae(t)})}deleteDeviceUser(t){return this._httpClient.delete(`${G.DEVICE_USERS}/${t}`)}};i.\u0275fac=function(o){return new(o||i)(J(ie))},i.\u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();var nt=e=>({"sm:mb-18":e}),rt=e=>({"pointer-events-none":e});function ot(e,i){if(e&1){let n=y();s(0,"button",15),f("click",function(){v(n);let o=u();return g(o.clearSearch())}),p(1,"mat-icon",16),s(2,"span"),c(3,"Clear Filter"),l()()}e&2&&(m("color","primary"),a(),m("svgIcon","heroicons_outline:x-mark"))}function at(e,i){if(e&1&&(s(0,"fuse-alert",17),c(1),l()),e&2){let n=u();m("appearance","outline")("showIcon",!1)("type",n.alert.type)("@shake",n.alert.type==="error"),a(),S(" ",n.alert.message," ")}}function st(e,i){e&1&&(s(0,"th",28),c(1," Device"),l())}function lt(e,i){if(e&1&&(s(0,"td",29),c(1),l()),e&2){let n,t=i.$implicit;a(),S(" ",((n=t.device.name)!==null&&n!==void 0?n:t.device.device_id)||"-"," ")}}function mt(e,i){e&1&&(s(0,"th",28),c(1," Device Username"),l())}function ct(e,i){if(e&1&&(s(0,"td",29),c(1),l()),e&2){let n=i.$implicit;a(),U(n.device_username||"-")}}function dt(e,i){e&1&&(s(0,"th",28),c(1," Zitadel User"),l())}function pt(e,i){if(e&1&&(s(0,"td",29),c(1),l()),e&2){let n=i.$implicit;a(),Y(" ",(n.user==null?null:n.user.name)||"-"," (",(n.user==null?null:n.user.email)||"-",") ")}}function ut(e,i){e&1&&(s(0,"th",28),c(1," Action"),l())}function _t(e,i){if(e&1){let n=y();s(0,"td",29)(1,"button",30),f("click",function(){let o=v(n).$implicit,r=u(2);return g(r.openShareDeviceModal(o))}),p(2,"mat-icon",16),l(),s(3,"button",31),f("click",function(){let o=v(n).$implicit,r=u(2);return g(r.viewSharedUser(o.id))}),p(4,"mat-icon",16),l(),s(5,"button",32),f("click",function(){let o=v(n).$implicit,r=u(2);return g(r.viewDeviceLogs(o.id))}),p(6,"mat-icon",16),l(),s(7,"button",33),f("click",function(){let o=v(n).$implicit,r=u(2);return g(r.viewAdminLogs(o.id))}),p(8,"mat-icon",16),l(),s(9,"button",34),f("click",function(){let o=v(n).$implicit,r=u(2);return g(r.deleteConfirmation(o))}),p(10,"mat-icon",35),l()()}e&2&&(a(2),m("svgIcon","heroicons_outline:share"),a(2),m("svgIcon","mat_outline:screen_share"),a(2),m("svgIcon","mat_outline:screen_search_desktop"),a(2),m("svgIcon","mat_outline:manage_search"),a(2),m("svgIcon","heroicons_outline:trash"))}function ft(e,i){e&1&&p(0,"tr",36)}function ht(e,i){e&1&&p(0,"tr",37)}function vt(e,i){if(e&1){let n=y();x(0),s(1,"table",18),x(2,19),d(3,st,2,0,"th",20)(4,lt,2,1,"td",21),C(),x(5,22),d(6,mt,2,0,"th",20)(7,ct,2,1,"td",21),C(),x(8,23),d(9,dt,2,0,"th",20)(10,pt,2,2,"td",21),C(),x(11,24),d(12,ut,2,0,"th",20)(13,_t,11,5,"td",21),C(),d(14,ft,1,0,"tr",25)(15,ht,1,0,"tr",26),l(),s(16,"mat-paginator",27),f("page",function(o){v(n);let r=u();return g(r.handlePageEvent(o))}),l(),C()}if(e&2){let n=u();a(),m("dataSource",n.deviceUsers),a(13),m("matHeaderRowDef",n.displayedColumns)("matHeaderRowDefSticky",!0),a(),m("matRowDefColumns",n.displayedColumns),a(),m("ngClass",O(10,rt,n.isLoading))("length",n.pagination.length)("pageIndex",n.pagination.page)("pageSize",n.pagination.size)("pageSizeOptions",n.pageSize)("showFirstLastButtons",!0)}}function gt(e,i){e&1&&(s(0,"div",39),c(1," There are no device users! "),l())}function xt(e,i){if(e&1&&d(0,gt,2,0,"div",38),e&2){let n=u();m("ngIf",!n.isLoading)}}function Ct(e,i){e&1&&(x(0),s(1,"div",40),p(2,"mat-progress-spinner",41),s(3,"h4",42),c(4,"Fetching your device users..."),l()(),C())}var Be=(()=>{let i=class i{constructor(t,o,r,h,H,$){this._activatedRoute=t,this._fuseConfirmationService=o,this._router=r,this._deviceUsersService=h,this._matDialog=H,this.router=$,this._subscription=new I,this.displayedColumns=["device","device_username","user","action"],this.pageSize=D,this.pagination={length:0,page:0,size:this.pageSize[0]},this.alert={type:"success",message:""},this.showAlert=!1,this.isLoading=!1}ngOnInit(){this.pagination.zitadel_user_id=Number(this._activatedRoute.snapshot.queryParamMap.get("zitadel_user_id")??0),this.pagination.device_id=Number(this._activatedRoute.snapshot.queryParamMap.get("device_id")??0),this.pagination.page=Number(this._activatedRoute.snapshot.queryParamMap.get("page")??0),this.pagination.size=Number(this._activatedRoute.snapshot.queryParamMap.get("size")??this.pageSize[0]),this.isLoading=!0,this.getDeviceUsers()}getDeviceUsers(){this.isLoading=!0,this.queryParamHandler(),this._subscription.add(this._deviceUsersService.getDeviceUsers(this.pagination).subscribe({next:t=>{this.deviceUsers=t.items,this.pagination.length=t.total,this.isLoading=!1},error:t=>{t.status!==404&&this.onFailed(t.status===500?"500: Internal Server Error":t.error.detail),this.isLoading=!1}}))}clearSearch(){this.pagination.page=0,this.pagination.length=0,this.pagination.zitadel_user_id=void 0,this.pagination.device_id=void 0,this.getDeviceUsers()}queryParamHandler(){this._router.navigate(["."],{relativeTo:this._activatedRoute,queryParams:{zitadel_user_id:this.pagination.zitadel_user_id,device_id:this.pagination.device_id,page:this.pagination.page,size:this.pagination.size}}).then()}handlePageEvent(t){this.pagination.length=t.length,this.pagination.size=t.pageSize,this.pagination.page=t.pageIndex,this.getDeviceUsers()}deleteConfirmation(t){this._subscription.add(this._fuseConfirmationService.open({title:"Remove this device user",message:"This will remove the users from the shared device.",icon:{show:!0,name:"heroicons_outline:exclamation-triangle",color:"warn"},actions:{confirm:{show:!0,label:"Remove",color:"warn"},cancel:{show:!0,label:"Cancel"}},dismissible:!0}).afterClosed().subscribe(o=>{o==="confirmed"&&this.deleteZitadelUser(t)}))}deleteZitadelUser(t){this.isLoading=!0,this.showAlert=!1,this._subscription.add(this._deviceUsersService.deleteDeviceUser(t.id).subscribe({next:()=>this.getDeviceUsers(),error:o=>this.onFailed(o.status===500?"500: Internal Server Error":o.error)}))}openShareDeviceModal(t=null){this._subscription.add(this._matDialog.open(Ne,{data:t,disableClose:!0}).afterClosed().subscribe({next:o=>{o&&this.getDeviceUsers()}}))}viewSharedUser(t){this.router.navigate([B.SHARED_USERS],{queryParams:{device_user_id:t}}).then()}viewDeviceLogs(t){this.router.navigate([B.DEVICE_LOGS],{queryParams:{device_user_id:t}}).then()}viewAdminLogs(t){this.router.navigate([B.ADMIN_LOGS],{queryParams:{device_user_id:t}}).then()}onFailed(t){this.alert={type:"error",message:t},this.showAlert=!0,this.isLoading=!1}ngOnDestroy(){this._subscription?.unsubscribe()}};i.\u0275fac=function(o){return new(o||i)(_(ne),_(ue),_(Z),_(qe),_(le),_(Z))},i.\u0275cmp=w({type:i,selectors:[["app-device-users"]],standalone:!0,features:[E],decls:17,vars:8,consts:[["noDevices",""],[1,"sm:absolute","sm:inset-0","flex","flex-col","flex-auto","min-w-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"border-b"],[1,"flex","flex-col","w-full","px-6"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex","flex-col","min-w-0","ml-4"],["id","Clients",1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["mat-stroked-button","",3,"color"],["class","mb-6",3,"appearance","showIcon","type",4,"ngIf"],[1,"relative","flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:overflow-y-auto",3,"ngClass"],[4,"ngIf","ngIfElse"],[4,"ngIf"],["mat-stroked-button","",3,"click","color"],[1,"icon-size-5",3,"svgIcon"],[1,"mb-6",3,"appearance","showIcon","type"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","device"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","device_username"],["matColumnDef","user"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"sm:absolute","sm:inset-x-0","sm:bottom-0","border-b","sm:border-t","sm:border-b-0","z-10","bg-gray-50","dark:bg-transparent",3,"page","ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","Link User",3,"click"],["mat-icon-button","","matTooltip","view shared users",3,"click"],["mat-icon-button","","matTooltip","view device logs",3,"click"],["mat-icon-button","","matTooltip","view admin logs",3,"click"],["mat-icon-button","","matTooltip","delete",3,"click"],[1,"icon-size-5","text-red-500",3,"svgIcon"],["mat-header-row",""],["mat-row",""],["class","p-8 sm:p-16 text-4xl font-semibold tracking-tight text-center",4,"ngIf"],[1,"p-8","sm:p-16","text-4xl","font-semibold","tracking-tight","text-center"],[1,"w-full","h-full","flex","flex-col","justify-center","items-center","bg-default"],["color","primary","diameter","50","strokeWidth","5","mode","indeterminate"],[1,"mt-16"]],template:function(o,r){if(o&1&&(s(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7),c(7," Device Users "),l()()(),s(8,"div",8),d(9,ot,4,2,"button",9),l()(),d(10,at,2,5,"fuse-alert",10),l()(),s(11,"div",11)(12,"div",12),d(13,vt,17,12,"ng-container",13)(14,xt,1,1,"ng-template",null,0,ee)(16,Ct,5,0,"ng-container",14),l()()()),o&2){let h=X(15);a(9),b(r.pagination.zitadel_user_id||r.pagination.device_id?9:-1),a(),m("ngIf",!r.isLoading&&r.showAlert),a(2),m("ngClass",O(6,nt,(r.deviceUsers==null?null:r.deviceUsers.length)>0)),a(),m("ngIf",(r.deviceUsers==null?null:r.deviceUsers.length)>0)("ngIfElse",h),a(3),m("ngIf",r.isLoading&&!r.deviceUsers)}},dependencies:[q,pe,L,z,V,Ie,De,N,j,fe,_e,M,P,F,T,k,te,Re,we,Ue,ke,Ee,ye,Fe,Me,Te,ze,Le],data:{animation:R}});let e=i;return e})();var di=[{path:"",component:Be}];export{di as default};
