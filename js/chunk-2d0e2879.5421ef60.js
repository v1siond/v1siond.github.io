(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2879"],{"7ea6":function(t,e,r){"use strict";r.r(e);var a=r("cebc"),o=r("d225"),n=r("b0b4"),s=r("308d"),i=r("6bb5"),d=r("4e2b"),c=r("9ab4"),h=r("60a3"),b=r("65d9"),u=r.n(b),p=r("dad9"),l=r("4bb5"),g=r("9ce6"),f=r.n(g),k=r("c07f"),w={functional:!0,render:function(t,e){var r=e.props;return t("main",{class:"section"},[t(k["a"],{attrs:{list:r.data.posts,post:!0}}),r.data.getLogin&&t("routerLink",{class:"pure-button -fixed",attrs:{to:"/blog/categories/".concat(r.data.thread.category.id,"/threads/").concat(r.data.thread.id,"/new-post")}},["New Post"])])}},v=new p["a"],y=function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(i["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),Object(n["a"])(e,[{key:"render",value:function(t){return this.thread?(this.setTitle(this.thread.title),this.setBack(!0),t(w,{attrs:{data:Object(a["a"])({},this.$props,{thread:this.thread,posts:this.returnPost,getLogin:this.getLogin})}})):"Thread doesn't exist"}},{key:"returnPost",get:function(){return this.thread.posts.reverse()}}]),e}(h["d"]);c["b"]([Object(l["a"])("getLogin")],y.prototype,"getLogin",void 0),c["b"]([Object(l["b"])("setTitle")],y.prototype,"setTitle",void 0),c["b"]([Object(l["b"])("setBack")],y.prototype,"setBack",void 0),y=c["b"]([u()({apollo:{thread:{query:v.thread,variables:function(){return{id:this.threadId}},skip:function(){return!this.threadId},error:function(t){console.log("We've got an error!",t)},fetchPolicy:"network-only"}},components:{vueMarkdown:f.a},name:"thread",props:{threadId:String}})],y);e["default"]=y}}]);
//# sourceMappingURL=chunk-2d0e2879.5421ef60.js.map