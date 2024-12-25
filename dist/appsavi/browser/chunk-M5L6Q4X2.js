import{a as de}from"./chunk-4VSTKE5N.js";import{b as be,c as Se,d as Ie,e as we,f as ye,g as Ae,h as Me,i as Ue,j as Ee,k as De,l as Fe,m as Te,n as Re,o as ke,p as Ne}from"./chunk-2LMYSBVZ.js";import{B as le,C as pe,D as ce,s as ie,t as ne,u as re}from"./chunk-DOG6VBFH.js";import{b as ue,d as q,f as fe,g as _e,i as ge,j as he,k as ve,l as xe,n as k,o as Ce,p as N,q as L,r as j,s as z}from"./chunk-VWQMDFG2.js";import{T as U,U as E,V as D,ia as oe,ja as ae,oa as se,pa as me,ra as F,sa as T,ua as R}from"./chunk-FL5KZRON.js";import{a as I}from"./chunk-BLXEIOKU.js";import{Eb as Q,Ja as p,K as O,La as s,Nb as X,Ob as M,P as G,S as Z,Sa as W,Wa as m,Wb as Y,Xa as o,Y as y,Ya as u,Za as h,_a as v,ab as b,bc as ee,ca as x,d as w,da as C,db as g,dc as te,fb as f,g as $,mb as J,nb as d,ob as V,pb as S,sb as A,ua as r,ub as H,va as c,zb as K}from"./chunk-VNRFEW3Q.js";var P=(()=>{let i=class i{constructor(t){this._httpClient=t}getAdminUsers(t){return this._httpClient.get(I.ADMIN_USERS,{params:Ne(t)})}createAdminUser(t){return this._httpClient.post(I.ADMIN_USERS,t)}updateAdminUser(t,a){return this._httpClient.patch(`${I.ADMIN_USERS}/${t}`,a)}deleteAdminUser(t){return this._httpClient.delete(`${I.ADMIN_USERS}/${t}`)}};i.\u0275fac=function(a){return new(a||i)(Z(Y))},i.\u0275prov=G({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();function Ge(e,i){if(e&1&&(m(0,"fuse-alert",17),d(1),o()),e&2){let l=f();s("appearance","outline")("showIcon",!1)("type",l.alert.type)("@shake",l.alert.type==="error"),r(),S(" ",l.alert.message," ")}}function Ze(e,i){e&1&&(m(0,"mat-error"),d(1," Name is required "),o())}function We(e,i){e&1&&(m(0,"mat-error"),d(1," Email is required "),o())}function Je(e,i){e&1&&(m(0,"span"),d(1," Save "),o())}function Ke(e,i){e&1&&u(0,"mat-progress-spinner",18),e&2&&s("diameter",24)("mode","indeterminate")}var ze=(()=>{let i=class i{constructor(t,a,n,_){this._formBuilder=t,this._adminUsersService=a,this.matDialogRef=n,this.data=_,this.subscription=new w,this.alert={type:"success",message:""},this.showAlert=!1,this.isLoading=!1}ngOnInit(){this.createForm=this._formBuilder.group({name:[this.data?.name??"",[q.required]],email:[this.data?.email??"",[q.required]],password:[null]})}save(){this.createForm.invalid||(this.showAlert=!1,this.isLoading=!0,this.data?this.subscription.add(this._adminUsersService.updateAdminUser(this.data.id,this.createForm.value).subscribe({next:()=>this.matDialogRef.close(!0),error:t=>this.onFailed(t.status===500?"500: Internal Server Error":t.error)})):this.subscription.add(this._adminUsersService.createAdminUser(this.createForm.value).subscribe({next:()=>this.matDialogRef.close(!0),error:t=>this.onFailed(t.status===500?"500: Internal Server Error":t.error)})))}onFailed(t){this.alert={type:"error",message:t},this.showAlert=!0,this.isLoading=!1,this.createForm.enable()}ngOnDestroy(){this.subscription?.unsubscribe()}};i.\u0275fac=function(a){return new(a||i)(c(xe),c(P),c(ie),c(ne))},i.\u0275cmp=y({type:i,selectors:[["app-admin-user"]],standalone:!0,features:[A],decls:27,vars:14,consts:[[1,"flex","flex-col","flex-auto","md:w-160","md:min-w-160","max-h-160","-m-6","overflow-y-auto"],[1,"flex","flex-0","items-center","justify-between","h-16","pr-3","sm:pr-5","pl-6","sm:pl-8","bg-primary","text-on-primary"],[1,"text-lg","font-medium"],["mat-icon-button","",3,"click","tabIndex"],[1,"text-current",3,"svgIcon"],[1,"flex","flex-col","w-full","p-6","sm:p-8","overflow-y-auto"],["class","mb-4",3,"appearance","showIcon","type",4,"ngIf"],[3,"formGroup"],[1,"w-full","mb-2"],["id","name","matInput","","placeholder","Enter Name",3,"formControlName"],[4,"ngIf"],[1,"w-full"],["id","address_1","matInput","","placeholder","Enter email",3,"formControlName"],["id","password","type","password","matInput","","placeholder","Enter password",3,"formControlName"],[1,"flex","justify-end"],["mat-flat-button","",1,"fuse-mat-button-large","mt-3",3,"click","color","disabled"],[3,"diameter","mode",4,"ngIf"],[1,"mb-4",3,"appearance","showIcon","type"],[3,"diameter","mode"]],template:function(a,n){a&1&&(m(0,"div",0)(1,"div",1)(2,"div",2),d(3),o(),m(4,"button",3),g("click",function(){return n.matDialogRef.close()}),u(5,"mat-icon",4),o()(),m(6,"div",5),p(7,Ge,2,5,"fuse-alert",6),m(8,"form",7)(9,"mat-form-field",8)(10,"mat-label"),d(11,"Name"),o(),u(12,"input",9),p(13,Ze,2,0,"mat-error",10),o(),m(14,"mat-form-field",11)(15,"mat-label"),d(16,"Email"),o(),u(17,"input",12),p(18,We,2,0,"mat-error",10),o(),m(19,"mat-form-field",11)(20,"mat-label"),d(21,"Password"),o(),u(22,"input",13),o(),m(23,"div",14)(24,"button",15),g("click",function(){return n.save()}),p(25,Je,2,0,"span",10)(26,Ke,1,2,"mat-progress-spinner",16),o()()()()()),a&2&&(r(3),S("",n.data?"Edit":"New"," Admin User"),r(),s("tabIndex",-1),r(),s("svgIcon","heroicons_outline:x-mark"),r(2),s("ngIf",n.showAlert),r(),s("formGroup",n.createForm),r(4),s("formControlName","name"),r(),s("ngIf",n.createForm.get("name").hasError("required")),r(4),s("formControlName","email"),r(),s("ngIf",n.createForm.get("email").hasError("required")),r(4),s("formControlName","password"),r(2),s("color","primary")("disabled",n.createForm.disabled||n.isLoading),r(),s("ngIf",!n.createForm.disabled&&!n.isLoading),r(),s("ngIf",n.createForm.disabled||n.isLoading))},dependencies:[k,ge,ue,fe,_e,he,ve,z,N,Ce,se,oe,ae,j,L,D,U,E,T,F,M],data:{animation:R}});let e=i;return e})();var Qe=e=>({"sm:mb-18":e}),Xe=e=>({"pointer-events-none":e});function Ye(e,i){if(e&1&&(m(0,"fuse-alert",16),d(1),o()),e&2){let l=f();s("appearance","outline")("showIcon",!1)("type",l.alert.type)("@shake",l.alert.type==="error"),r(),S(" ",l.alert.message," ")}}function et(e,i){e&1&&(m(0,"th",26),d(1," Name"),o())}function tt(e,i){if(e&1&&(m(0,"td",27),d(1),o()),e&2){let l=i.$implicit;r(),V(l.name)}}function it(e,i){e&1&&(m(0,"th",26),d(1," Email"),o())}function nt(e,i){if(e&1&&(m(0,"td",27),d(1),o()),e&2){let l=i.$implicit;r(),V(l.email||"-")}}function rt(e,i){e&1&&(m(0,"th",26),d(1," Action"),o())}function ot(e,i){if(e&1){let l=b();m(0,"button",30),g("click",function(){x(l);let a=f().$implicit,n=f(2);return C(n.deleteConfirmation(a))}),u(1,"mat-icon",31),o()}e&2&&(r(),s("svgIcon","heroicons_outline:trash"))}function at(e,i){if(e&1){let l=b();m(0,"td",27)(1,"button",28),g("click",function(){let a=x(l).$implicit,n=f(2);return C(n.openAdminModal(a))}),u(2,"mat-icon",10),o(),p(3,ot,2,1,"button",29),o()}e&2&&(r(2),s("svgIcon","heroicons_outline:pencil"),r(),W(-1))}function st(e,i){e&1&&u(0,"tr",32)}function mt(e,i){e&1&&u(0,"tr",33)}function lt(e,i){if(e&1){let l=b();h(0),m(1,"table",17),h(2,18),p(3,et,2,0,"th",19)(4,tt,2,1,"td",20),v(),h(5,21),p(6,it,2,0,"th",19)(7,nt,2,1,"td",20),v(),h(8,22),p(9,rt,2,0,"th",19)(10,at,4,2,"td",20),v(),p(11,st,1,0,"tr",23)(12,mt,1,0,"tr",24),o(),m(13,"mat-paginator",25),g("page",function(a){x(l);let n=f();return C(n.handlePageEvent(a))}),o(),v()}if(e&2){let l=f();r(),s("dataSource",l.adminUsers),r(10),s("matHeaderRowDef",l.displayedColumns)("matHeaderRowDefSticky",!0),r(),s("matRowDefColumns",l.displayedColumns),r(),s("ngClass",H(10,Xe,l.isLoading))("length",l.pagination.length)("pageIndex",l.pagination.page)("pageSize",l.pagination.size)("pageSizeOptions",l.pageSize)("showFirstLastButtons",!0)}}function dt(e,i){e&1&&(m(0,"div",35),d(1," There are no users! "),o())}function pt(e,i){if(e&1&&p(0,dt,2,0,"div",34),e&2){let l=f();s("ngIf",!l.isLoading)}}function ct(e,i){e&1&&(h(0),m(1,"div",36),u(2,"mat-progress-spinner",37),m(3,"h4",38),d(4,"Fetching your admin users..."),o()(),v())}var Pe=(()=>{let i=class i{constructor(t,a,n,_,B,Ve,He){this._changeDetectorRef=t,this._activatedRoute=a,this._fuseConfirmationService=n,this._router=_,this._userService=B,this._adminUsersService=Ve,this._matDialog=He,this._subscription=new w,this._unsubscribeAll=new $,this.displayedColumns=["name","email","action"],this.pageSize=ke,this.pagination={length:0,page:0,size:this.pageSize[0]},this.alert={type:"success",message:""},this.showAlert=!1,this.isLoading=!1}ngOnInit(){this.pagination.page=Number(this._activatedRoute.snapshot.queryParamMap.get("page")??0),this.pagination.size=Number(this._activatedRoute.snapshot.queryParamMap.get("size")??this.pageSize[0]),this._userService.user$.pipe(O(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.isLoading=!0,this.getAdminUsers()}openAdminModal(t=null){this._subscription.add(this._matDialog.open(ze,{data:t,disableClose:!0}).afterClosed().subscribe({next:a=>{a&&this.getAdminUsers()}}))}getAdminUsers(){this.isLoading=!0,this.queryParamHandler(),this._subscription.add(this._adminUsersService.getAdminUsers(this.pagination).subscribe({next:t=>{this.adminUsers=t.items,this.pagination.length=t.total,this.isLoading=!1},error:t=>{t.status!==404&&this.onFailed(t.status===500?"500: Internal Server Error":t.error.detail),this.isLoading=!1}}))}queryParamHandler(){this._router.navigate(["."],{relativeTo:this._activatedRoute,queryParams:{page:this.pagination.page,size:this.pagination.size}}).then()}handlePageEvent(t){this.pagination.length=t.length,this.pagination.size=t.pageSize,this.pagination.page=t.pageIndex,this.getAdminUsers()}deleteConfirmation(t){this._subscription.add(this._fuseConfirmationService.open({title:"Remove this user",message:"Are you sure you want to remove this user permanently?",icon:{show:!0,name:"heroicons_outline:exclamation-triangle",color:"warn"},actions:{confirm:{show:!0,label:"Remove",color:"warn"},cancel:{show:!0,label:"Cancel"}},dismissible:!0}).afterClosed().subscribe(a=>{a==="confirmed"&&this.deleteZitadelUser(t)}))}deleteZitadelUser(t){this.isLoading=!0,this.showAlert=!1,this._subscription.add(this._adminUsersService.deleteAdminUser(t.id).subscribe({next:()=>this.getAdminUsers(),error:a=>this.onFailed(a.status===500?"500: Internal Server Error":a.error)}))}onFailed(t){this.alert={type:"error",message:t},this.showAlert=!0,this.isLoading=!1}ngOnDestroy(){this._subscription?.unsubscribe()}};i.\u0275fac=function(a){return new(a||i)(c(Q),c(ee),c(le),c(te),c(de),c(P),c(re))},i.\u0275cmp=y({type:i,selectors:[["app-admin-users"]],standalone:!0,features:[A],decls:20,vars:9,consts:[["noClients",""],[1,"sm:absolute","sm:inset-0","flex","flex-col","flex-auto","min-w-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"border-b"],[1,"flex","flex-col","w-full","px-6"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex","flex-col","min-w-0","ml-4"],["id","Clients",1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["mat-flat-button","",3,"click","color"],[1,"icon-size-5",3,"svgIcon"],["class","mb-6",3,"appearance","showIcon","type",4,"ngIf"],[1,"relative","flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:overflow-y-auto",3,"ngClass"],[4,"ngIf","ngIfElse"],[4,"ngIf"],[1,"mb-6",3,"appearance","showIcon","type"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","email"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"sm:absolute","sm:inset-x-0","sm:bottom-0","border-b","sm:border-t","sm:border-b-0","z-10","bg-gray-50","dark:bg-transparent",3,"page","ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","edit",3,"click"],["mat-icon-button","","matTooltip","delete"],["mat-icon-button","","matTooltip","delete",3,"click"],[1,"icon-size-5","text-red-500",3,"svgIcon"],["mat-header-row",""],["mat-row",""],["class","p-8 sm:p-16 text-4xl font-semibold tracking-tight text-center",4,"ngIf"],[1,"p-8","sm:p-16","text-4xl","font-semibold","tracking-tight","text-center"],[1,"w-full","h-full","flex","flex-col","justify-center","items-center","bg-default"],["color","primary","diameter","50","strokeWidth","5","mode","indeterminate"],[1,"mt-16"]],template:function(a,n){if(a&1){let _=b();m(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7),d(7," Admin Users "),o()()(),m(8,"div",8)(9,"button",9),g("click",function(){return x(_),C(n.openAdminModal())}),u(10,"mat-icon",10),m(11,"span"),d(12,"Add"),o()()()(),p(13,Ye,2,5,"fuse-alert",11),o()(),m(14,"div",12)(15,"div",13),p(16,lt,14,12,"ng-container",14)(17,pt,1,1,"ng-template",null,0,K)(19,ct,5,0,"ng-container",15),o()()()}if(a&2){let _=J(18);r(9),s("color","primary"),r(),s("svgIcon","heroicons_solid:plus"),r(3),s("ngIf",!n.isLoading&&n.showAlert),r(2),s("ngClass",H(7,Qe,(n.adminUsers==null?null:n.adminUsers.length)>0)),r(),s("ngIf",(n.adminUsers==null?null:n.adminUsers.length)>0)("ngIfElse",_),r(3),s("ngIf",n.isLoading&&!n.adminUsers)}},dependencies:[z,me,T,F,N,Se,be,j,L,ce,pe,M,k,D,U,E,X,Re,Ie,ye,Ee,Ae,we,De,Me,Ue,Fe,Te],data:{animation:R}});let e=i;return e})();var Yt=[{path:"",component:Pe}];export{Yt as default};