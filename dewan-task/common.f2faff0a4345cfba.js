"use strict";(self.webpackChunkdewan_task=self.webpackChunkdewan_task||[]).push([[592],{42:(C,c,e)=>{e.d(c,{r:()=>_});var t=e(8274);let _=(()=>{class l{constructor(){this.onClick=new t.vpe}}return l.\u0275fac=function(i){return new(i||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["dewan-button"]],inputs:{buttonText:"buttonText"},outputs:{onClick:"onClick"},standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"custom-btn",3,"click"]],template:function(i,a){1&i&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return a.onClick.emit()}),t.TgZ(1,"h3"),t._uU(2),t.qZA()()),2&i&&(t.xp6(2),t.Oqu(a.buttonText))},styles:[".custom-btn[_ngcontent-%COMP%]{width:15.3rem;height:4.8rem;border-radius:.4rem;cursor:pointer;font-size:1.4rem;background-color:#fff;color:#ef3f43;border:.1rem solid #ef3f43}@media (max-width: 599px){.custom-btn[_ngcontent-%COMP%]{width:100%}}.custom-btn[_ngcontent-%COMP%]:hover{opacity:.7}"]}),l})()},8972:(C,c,e)=>{e.d(c,{p:()=>d});var t=e(8274),_=e(8432),l=e(6895),s=e(2925),i=e(4463);const a=["contentTemp"];function r(o,p){1&o&&t._UZ(0,"dewan-spinner",9),2&o&&t.Q6J("width",1)("height",1)("isWhite",!0)}function m(o,p){if(1&o){const n=t.EpF();t.TgZ(0,"div",1)(1,"h3",2),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"button",3),t.NdJ("click",function(){t.CHM(n);const g=t.oxw();return t.KtG(g.close())}),t.qZA()(),t.TgZ(5,"div",4)(6,"h4")(7,"strong"),t._uU(8),t.ALo(9,"translate"),t.qZA()()(),t.TgZ(10,"div",5)(11,"button",6),t.NdJ("click",function(){t.CHM(n);const g=t.oxw();return t.KtG(g.close())}),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.TgZ(14,"button",7),t.NdJ("click",function(){t.CHM(n);const g=t.oxw();return t.KtG(g.deleteClick.emit())}),t.YNc(15,r,1,3,"dewan-spinner",8),t.TgZ(16,"span"),t._uU(17),t.ALo(18,"translate"),t.qZA()()()}if(2&o){const n=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,6,n.title)),t.xp6(6),t.Oqu(t.lcZ(9,8,n.description)),t.xp6(4),t.hij(" ",t.lcZ(13,10,"CANCEL")," "),t.xp6(2),t.Q6J("disabled",n.isLoading),t.xp6(1),t.Q6J("ngIf",n.isLoading),t.xp6(2),t.Oqu(t.lcZ(18,12,"DELETE"))}}let d=(()=>{class o{constructor(n){this.modal=n,this.deleteClick=new t.vpe,this.closeClick=new t.vpe}ngOnInit(){setTimeout(()=>{this.modal.open(this.contentTemp,{keyboard:!1,backdrop:"static"})},0)}close(){this.modal.dismissAll(),this.closeClick.emit()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(_.FF))},o.\u0275cmp=t.Xpm({type:o,selectors:[["dewan-delete-confirmation"]],viewQuery:function(n,u){if(1&n&&t.Gf(a,5),2&n){let g;t.iGM(g=t.CRH())&&(u.contentTemp=g.first)}},inputs:{title:"title",description:"description",isLoading:"isLoading"},outputs:{deleteClick:"deleteClick",closeClick:"closeClick"},decls:2,vars:0,consts:[["contentTemp",""],[1,"modal-header"],["id","modal-title",1,"modal-title"],["type","button","aria-describedby","modal-title",1,"btn-close",3,"click"],[1,"modal-body","py-5"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-secondary","px-4",3,"click"],["type","button",1,"btn","btn-danger","px-4","d-flex","align-items-center","gap-2",3,"disabled","click"],[3,"width","height","isWhite",4,"ngIf"],[3,"width","height","isWhite"]],template:function(n,u){1&n&&t.YNc(0,m,19,14,"ng-template",null,0,t.W1O)},dependencies:[l.O5,s.O,i.X$],styles:[".modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1.5rem}"]}),o})()},7667:(C,c,e)=>{e.d(c,{OR:()=>_.O,Qt:()=>s.Q,Tp:()=>i.T,pf:()=>a.p,r0:()=>t.r,t$:()=>l.t});var t=e(42),_=e(2925),l=e(480),s=e(3556),i=e(8191),a=e(8972)},3556:(C,c,e)=>{e.d(c,{Q:()=>l});var t=e(8274),_=e(8432);let l=(()=>{class s{constructor(){this.pageChange=new t.vpe}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["dewan-pagination"]],inputs:{pageSize:"pageSize",totalItems:"totalItems"},outputs:{pageChange:"pageChange"},decls:1,vars:7,consts:[["size","lg",1,"d-flex","justify-content-center","mt-4",3,"maxSize","pageSize","collectionSize","rotate","boundaryLinks","ellipses","directionLinks","pageChange"]],template:function(a,r){1&a&&(t.TgZ(0,"ngb-pagination",0),t.NdJ("pageChange",function(d){return r.pageChange.emit(d)}),t.qZA()),2&a&&t.Q6J("maxSize",2)("pageSize",r.pageSize)("collectionSize",r.totalItems)("rotate",!1)("boundaryLinks",!1)("ellipses",!0)("directionLinks",!0)},dependencies:[_.N9],styles:["[_nghost-%COMP%]  .pagination .page-item a{background-color:transparent;color:#1c283b;border:0}[_nghost-%COMP%]  .pagination .page-item a:focus{box-shadow:none}[_nghost-%COMP%]  .pagination .page-item.active a{background-color:transparent;color:#ef3f43;font-weight:600}"]}),s})()},480:(C,c,e)=>{e.d(c,{t:()=>s});var t=e(8274),_=e(6895);const l=["*"];let s=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["dewan-skeleton-loader"]],inputs:{extraCssClasses:"extraCssClasses"},ngContentSelectors:l,decls:2,vars:1,consts:[[1,"skeleton-container",3,"ngClass"]],template:function(r,m){1&r&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA()),2&r&&t.Q6J("ngClass",m.extraCssClasses)},dependencies:[_.mk],styles:['[_nghost-%COMP%]     .skeleton-container .skeleton{position:relative;overflow:hidden}[_nghost-%COMP%]     .skeleton-container .skeleton:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(-100%);background-image:linear-gradient(90deg,rgba(255,255,255,0) 0,rgba(255,255,255,.2) 20%,rgba(255,255,255,.5) 60%,rgba(255,255,255,0));animation:shimmer 1s infinite;content:""}@keyframes shimmer{to{transform:translate(100%)}}[_nghost-%COMP%]     .skeleton-container .skeleton{background-color:#e9ebed}']}),i})()},2925:(C,c,e)=>{e.d(c,{O:()=>i});var t=e(8274),_=e(6895);const l=function(a){return{"is-white":a}},s=function(a,r){return{width:a,height:r}};let i=(()=>{class a{}return a.\u0275fac=function(m){return new(m||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["dewan-spinner"]],inputs:{width:"width",height:"height",isWhite:"isWhite"},decls:1,vars:7,consts:[[1,"spinner",3,"ngClass","ngStyle"]],template:function(m,d){1&m&&t._UZ(0,"span",0),2&m&&t.Q6J("ngClass",t.VKq(2,l,d.isWhite))("ngStyle",t.WLB(4,s,d.width?d.width+"rem":"3rem",d.height?d.height+"rem":"3rem"))},dependencies:[_.mk,_.PC],styles:[".spinner[_ngcontent-%COMP%]{animation:spinner .4s linear infinite;border-bottom-color:transparent;border-right-color:transparent;border-top-color:#ef3f43;border-left-color:#ef3f43;border-style:solid;border-width:2px;border-radius:50%;box-sizing:border-box;display:inline-block;vertical-align:middle;animation:spinner 1s linear infinite}.spinner.is-white[_ngcontent-%COMP%]{border-top-color:#fff;border-left-color:#fff}@keyframes spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),a})()},8191:(C,c,e)=>{e.d(c,{T:()=>d});var t=e(8274),_=e(1532),l=e(8432),s=e(6895);function i(o,p){}function a(o,p){if(1&o&&t.YNc(0,i,0,0,"ng-template",4),2&o){const n=t.oxw().$implicit;t.Q6J("ngTemplateOutlet",n.textOrTpl)}}function r(o,p){if(1&o&&t._uU(0),2&o){const n=t.oxw().$implicit;t.Oqu(n.textOrTpl)}}function m(o,p){if(1&o){const n=t.EpF();t.TgZ(0,"ngb-toast",1),t.NdJ("hidden",function(){const f=t.CHM(n).$implicit,h=t.oxw();return t.KtG(h.toastService.remove(f))}),t.YNc(1,a,1,1,"ng-template",2),t.YNc(2,r,1,1,"ng-template",null,3,t.W1O),t.qZA()}if(2&o){const n=p.$implicit,u=t.MAs(3),g=t.oxw();t.Tol(n.classname),t.Q6J("autohide",!0)("delay",n.delay||5e3),t.xp6(1),t.Q6J("ngIf",g.isTemplate(n))("ngIfElse",u)}}let d=(()=>{class o{constructor(n){this.toastService=n}isTemplate(n){return n.textOrTpl instanceof t.Rgc}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(_.kl))},o.\u0275cmp=t.Xpm({type:o,selectors:[["dewan-toasts"]],hostAttrs:[1,"toast-container","position-fixed","bottom-0","start-0","p-3",2,"z-index","1200"],decls:1,vars:1,consts:[[3,"class","autohide","delay","hidden",4,"ngFor","ngForOf"],[3,"autohide","delay","hidden"],[3,"ngIf","ngIfElse"],["text",""],[3,"ngTemplateOutlet"]],template:function(n,u){1&n&&t.YNc(0,m,4,6,"ngb-toast",0),2&n&&t.Q6J("ngForOf",u.toastService.toasts)},dependencies:[l.Iv,s.sg,s.O5,s.tP],styles:["[_nghost-%COMP%]  .toast-body{font-size:1.5rem;padding:1rem}"]}),o})()}}]);