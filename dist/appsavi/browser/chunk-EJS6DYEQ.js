import{a as pe}from"./chunk-2YYXRCYU.js";import{b as H}from"./chunk-7XCFRYXE.js";import{b as X,c as Y,d as ee,e as te,f as ie,g as ne,h as re,i as ae,j as oe,k as se,l as le,m as me,n as de,o as ce}from"./chunk-2LMYSBVZ.js";import{B as j,C as N,D as $}from"./chunk-DOG6VBFH.js";import{a as Q}from"./chunk-FBWFCOJ3.js";import{n as G,p as W,q as Z,r as J,s as K}from"./chunk-VWQMDFG2.js";import{T as P,U as L,V,pa as A,ra as q,sa as B,ua as O}from"./chunk-FL5KZRON.js";import"./chunk-BLXEIOKU.js";import{Ja as c,La as m,Nb as z,Ob as k,Sa as M,Wa as r,Xa as a,Y as E,Ya as f,Za as p,_a as u,ab as x,bc as F,ca as g,d as I,da as v,db as S,dc as U,fb as _,mb as T,nb as d,pb as C,qb as b,sb as D,ua as l,ub as y,va as h,zb as R}from"./chunk-VNRFEW3Q.js";var fe=e=>({"sm:mb-18":e}),ge=e=>({"pointer-events-none":e});function ve(e,n){if(e&1){let t=x();r(0,"button",15),S("click",function(){g(t);let o=_();return v(o.clearSearch())}),f(1,"mat-icon",16),r(2,"span"),d(3,"Clear Filter"),a()()}e&2&&(m("color","primary"),l(),m("svgIcon","heroicons_outline:x-mark"))}function Se(e,n){if(e&1&&(r(0,"fuse-alert",17),d(1),a()),e&2){let t=_();m("appearance","outline")("showIcon",!1)("type",t.alert.type)("@shake",t.alert.type==="error"),l(),C(" ",t.alert.message," ")}}function xe(e,n){e&1&&(r(0,"th",29),d(1," Device"),a())}function Ce(e,n){if(e&1&&(r(0,"td",30),d(1),a()),e&2){let t,i=n.$implicit;l(),C(" ",((t=i.device.name)!==null&&t!==void 0?t:i.device.device_id)||"-"," ")}}function we(e,n){e&1&&(r(0,"th",29),d(1," Device User"),a())}function be(e,n){if(e&1&&(r(0,"td",30),d(1),a()),e&2){let t=n.$implicit;l(),C(" ",t.device_user.device_username||"-"," ")}}function ye(e,n){e&1&&(r(0,"th",29),d(1," Shared User"),a())}function Ue(e,n){if(e&1&&(r(0,"td",30),d(1),a()),e&2){let t=n.$implicit;l(),b(" ",t.user.name||"-"," (",t.user.email||"-",") ")}}function Ie(e,n){e&1&&(r(0,"th",29),d(1," Owner Users"),a())}function Ee(e,n){if(e&1&&(r(0,"td",30),d(1),a()),e&2){let t=n.$implicit;l(),b(" ",(t.device_user==null||t.device_user.user==null?null:t.device_user.user.name)||"-"," (",(t.device_user==null||t.device_user.user==null?null:t.device_user.user.email)||"-",") ")}}function Me(e,n){e&1&&(r(0,"th",29),d(1," Action"),a())}function Te(e,n){if(e&1){let t=x();r(0,"td",30)(1,"button",31),S("click",function(){let o=g(t).$implicit,s=_(2);return v(s.viewDeviceUser(o.device_user.id))}),f(2,"mat-icon",16),a(),r(3,"button",32),S("click",function(){let o=g(t).$implicit,s=_(2);return v(s.deleteConfirmation(o))}),f(4,"mat-icon",33),a()()}e&2&&(l(2),m("svgIcon","mat_outline:devices"),l(2),m("svgIcon","heroicons_outline:trash"))}function De(e,n){e&1&&f(0,"tr",34)}function Re(e,n){e&1&&f(0,"tr",35)}function ze(e,n){if(e&1){let t=x();p(0),r(1,"table",18),p(2,19),c(3,xe,2,0,"th",20)(4,Ce,2,1,"td",21),u(),p(5,22),c(6,we,2,0,"th",20)(7,be,2,1,"td",21),u(),p(8,23),c(9,ye,2,0,"th",20)(10,Ue,2,2,"td",21),u(),p(11,24),c(12,Ie,2,0,"th",20)(13,Ee,2,2,"td",21),u(),p(14,25),c(15,Me,2,0,"th",20)(16,Te,5,2,"td",21),u(),c(17,De,1,0,"tr",26)(18,Re,1,0,"tr",27),a(),r(19,"mat-paginator",28),S("page",function(o){g(t);let s=_();return v(s.handlePageEvent(o))}),a(),u()}if(e&2){let t=_();l(),m("dataSource",t.devices),l(16),m("matHeaderRowDef",t.displayedColumns)("matHeaderRowDefSticky",!0),l(),m("matRowDefColumns",t.displayedColumns),l(),m("ngClass",y(10,ge,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",t.pageSize)("showFirstLastButtons",!0)}}function ke(e,n){e&1&&(r(0,"div",37),d(1," There are no devices! "),a())}function Fe(e,n){if(e&1&&c(0,ke,2,0,"div",36),e&2){let t=_();m("ngIf",!t.isLoading)}}function Pe(e,n){e&1&&(p(0),r(1,"div",38),f(2,"mat-progress-spinner",39),r(3,"h4",40),d(4,"Fetching your devices..."),a()(),u())}var ue=(()=>{let n=class n{constructor(i,o,s,w,_e,he){this._snackBar=i,this._activatedRoute=o,this._fuseConfirmationService=s,this._router=w,this._sharedUsersService=_e,this.router=he,this._subscription=new I,this.displayedColumns=["device","device_user","shared_user","owner_user","action"],this.pageSize=ce,this.pagination={length:0,page:0,size:this.pageSize[0]},this.alert={type:"success",message:""},this.showAlert=!1,this.isLoading=!1}ngOnInit(){this.pagination.zitadel_user_id=Number(this._activatedRoute.snapshot.queryParamMap.get("zitadel_user_id")??0),this.pagination.device_user_id=Number(this._activatedRoute.snapshot.queryParamMap.get("device_user_id")??0),this.pagination.page=Number(this._activatedRoute.snapshot.queryParamMap.get("page")??0),this.pagination.size=Number(this._activatedRoute.snapshot.queryParamMap.get("size")??this.pageSize[0]),this.isLoading=!0,this.getSharedUsers()}getSharedUsers(){this.isLoading=!0,this.queryParamHandler(),this._subscription.add(this._sharedUsersService.getSharedUsers(this.pagination).subscribe({next:i=>{this.devices=i.items,this.pagination.length=i.total,this.isLoading=!1},error:i=>{i.status!==404&&this.onFailed(i.status===500?"500: Internal Server Error":i.error.detail),this.isLoading=!1}}))}clearSearch(){this.pagination.page=0,this.pagination.length=0,this.pagination.zitadel_user_id=void 0,this.pagination.device_user_id=void 0,this.getSharedUsers()}queryParamHandler(){this._router.navigate(["."],{relativeTo:this._activatedRoute,queryParams:{zitadel_user_id:this.pagination.zitadel_user_id,device_user_id:this.pagination.device_user_id,page:this.pagination.page,size:this.pagination.size}}).then()}handlePageEvent(i){this.pagination.length=i.length,this.pagination.size=i.pageSize,this.pagination.page=i.pageIndex,this.getSharedUsers()}deleteConfirmation(i){this._subscription.add(this._fuseConfirmationService.open({title:"Remove this shared user",message:"Are you sure you want to remove this user permanently?",icon:{show:!0,name:"heroicons_outline:exclamation-triangle",color:"warn"},actions:{confirm:{show:!0,label:"Remove",color:"warn"},cancel:{show:!0,label:"Cancel"}},dismissible:!0}).afterClosed().subscribe(o=>{o==="confirmed"&&this.deleteSharedUser(i)}))}deleteSharedUser(i){this.isLoading=!0,this.showAlert=!1,this._subscription.add(this._sharedUsersService.deleteShareUser(i.id).subscribe({next:()=>{this._snackBar.open("Removed successfully.!"),this.getSharedUsers()},error:o=>this.onFailed(o.status===500?"500: Internal Server Error":o.error)}))}viewDeviceUser(i){this.router.navigate([Q.DEVICE_USERS],{queryParams:{device_id:i}}).then()}onFailed(i){this.alert={type:"error",message:i},this.showAlert=!0,this.isLoading=!1}ngOnDestroy(){this._subscription?.unsubscribe()}};n.\u0275fac=function(o){return new(o||n)(h(H),h(F),h(j),h(U),h(pe),h(U))},n.\u0275cmp=E({type:n,selectors:[["app-shared-users"]],standalone:!0,features:[D],decls:17,vars:8,consts:[["noDevices",""],[1,"sm:absolute","sm:inset-0","flex","flex-col","flex-auto","min-w-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"border-b"],[1,"flex","flex-col","w-full","px-6"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex","flex-col","min-w-0","ml-4"],["id","Clients",1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["mat-stroked-button","",3,"color"],["class","mb-6",3,"appearance","showIcon","type",4,"ngIf"],[1,"relative","flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:overflow-y-auto",3,"ngClass"],[4,"ngIf","ngIfElse"],[4,"ngIf"],["mat-stroked-button","",3,"click","color"],[1,"icon-size-5",3,"svgIcon"],[1,"mb-6",3,"appearance","showIcon","type"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","device"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","device_user"],["matColumnDef","shared_user"],["matColumnDef","owner_user"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"sm:absolute","sm:inset-x-0","sm:bottom-0","border-b","sm:border-t","sm:border-b-0","z-10","bg-gray-50","dark:bg-transparent",3,"page","ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","view device users",3,"click"],["mat-icon-button","","matTooltip","remove",3,"click"],[1,"icon-size-5","text-red-500",3,"svgIcon"],["mat-header-row",""],["mat-row",""],["class","p-8 sm:p-16 text-4xl font-semibold tracking-tight text-center",4,"ngIf"],[1,"p-8","sm:p-16","text-4xl","font-semibold","tracking-tight","text-center"],[1,"w-full","h-full","flex","flex-col","justify-center","items-center","bg-default"],["color","primary","diameter","50","strokeWidth","5","mode","indeterminate"],[1,"mt-16"]],template:function(o,s){if(o&1&&(r(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7),d(7," Shared Users "),a()()(),r(8,"div",8),c(9,ve,4,2,"button",9),a()(),c(10,Se,2,5,"fuse-alert",10),a()(),r(11,"div",11)(12,"div",12),c(13,ze,20,12,"ng-container",13)(14,Fe,1,1,"ng-template",null,0,R)(16,Pe,5,0,"ng-container",14),a()()()),o&2){let w=T(15);l(9),M(s.pagination.zitadel_user_id||s.pagination.device_user_id?9:-1),l(),m("ngIf",!s.isLoading&&s.showAlert),l(2),m("ngClass",y(6,fe,(s.devices==null?null:s.devices.length)>0)),l(),m("ngIf",(s.devices==null?null:s.devices.length)>0)("ngIfElse",w),l(3),m("ngIf",s.isLoading&&!s.devices)}},dependencies:[K,A,B,q,W,Y,X,J,Z,$,N,k,G,V,P,L,z,de,ee,ie,oe,ne,te,se,re,ae,le,me],data:{animation:O}});let e=n;return e})();var dt=[{path:"",component:ue}];export{dt as default};
