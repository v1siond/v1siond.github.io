(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c74c888"],{"06c8":function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r=n("aede"),i=n("d225"),a=n("b0b4"),o=n("9530"),s=n.n(o);function c(){var t=Object(r["a"])(["\n      mutation ccreatePost($body: String!, $id: ID!) {\n        createPost(body: $body, threadId: $id) {\n          id\n        }\n      }\n    "]);return c=function(){return t},t}function u(){var t=Object(r["a"])(["\n      mutation createThread($title: String!, $id: ID!, $body: String!) {\n        createThread(title: $title, categoryId: $id, body: $body) {\n          id\n          title\n        }\n      }\n    "]);return u=function(){return t},t}function d(){var t=Object(r["a"])(["\n      mutation createCategory($title: String!) {\n        createCategory(title: $title) {\n          id\n          title\n        }\n      }\n    "]);return d=function(){return t},t}function l(){var t=Object(r["a"])(["\n      mutation createUser($name: String!, $username: String!, $email: String!, $password: String!) {\n        createUser(\n          name: $name,\n          username: $username,\n          email: $email,\n          password: $password\n        ) {\n          id\n          username\n          email\n        }\n      }\n    "]);return l=function(){return t},t}function p(){var t=Object(r["a"])(["\n      mutation authenticate($email: String!, $password: String!) {\n        authenticate(email: $email, password: $password)\n      }\n    "]);return p=function(){return t},t}var h=function(){function t(){Object(i["a"])(this,t)}return Object(a["a"])(t,[{key:"authenticate",value:function(){return s()(p())}},{key:"createUser",value:function(){return s()(l())}},{key:"createCategory",value:function(){return s()(d())}},{key:"createThread",value:function(){return s()(u())}},{key:"createPost",value:function(){return s()(c())}}]),t}()},2638:function(t,e,n){"use strict";function r(){return r=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var r in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},r.apply(this,arguments)}var i=["attrs","props","domProps"],a=["class","style","directives"],o=["on","nativeOn"],s=function(t){return t.reduce(function(t,e){for(var n in e)if(t[n])if(-1!==i.indexOf(n))t[n]=r({},t[n],e[n]);else if(-1!==a.indexOf(n)){var s=t[n]instanceof Array?t[n]:[t[n]],u=e[n]instanceof Array?e[n]:[e[n]];t[n]=s.concat(u)}else if(-1!==o.indexOf(n))for(var d in e[n])if(t[n][d]){var l=t[n][d]instanceof Array?t[n][d]:[t[n][d]],p=e[n][d]instanceof Array?e[n][d]:[e[n][d]];t[n][d]=l.concat(p)}else t[n][d]=e[n][d];else if("hook"==n)for(var h in e[n])t[n][h]=t[n][h]?c(t[n][h],e[n][h]):e[n][h];else t[n]=e[n];else t[n]=e[n];return t},{})},c=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=s},"5e2a":function(t,e,n){"use strict";n.r(e);var r=n("2638"),i=n.n(r),a=n("cebc"),o=n("d225"),s=n("b0b4"),c=n("308d"),u=n("6bb5"),d=n("4e2b"),l=n("9ab4"),p=n("60a3"),h=n("06c8"),f=n("9ce6"),v=n.n(f),b=n("4bb5"),m=n("98bc"),y={functional:!0,render:function(t,e){var n=e.props,r=e.children;return n.data.getLogin&&n.data.getAdmin?t("main",{class:"section new-post"},[t(m["a"],{attrs:{preview:n.data.preview,showPreview:n.methods.showPreview,showEditor:n.methods.showEditor}}),r]):t("main",{class:"section new-post"},[t("h2",["Admin zone only."])])}},w=new h["a"],g=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.title="",t.postBody="",t.preview=!1,t}return Object(d["a"])(e,t),Object(s["a"])(e,[{key:"showPreview",value:function(){this.preview=!1}},{key:"showEditor",value:function(){this.preview=!0}},{key:"mutate",value:function(){var t=this;""!==this.title&&""!==this.postBody?this.$apollo.mutate({variables:{id:this.id,title:this.title,body:this.postBody},mutation:w.createThread()}).then(function(e){t.threadSuccess(e)}).catch(function(e){e.graphQLErrors&&t.threadError(e)}):alert("Error, empty fields: ".concat(""===this.title&&"Title can't be blank",". ").concat(""===this.postBody&&"Post can't be blank"," "))}},{key:"threadSuccess",value:function(t){alert("Thread created successfully"),this.$router.push("/blog/categories/".concat(this.id,"/"))}},{key:"threadError",value:function(t){alert(t)}},{key:"mounted",value:function(){var t=this;this.getAdmin?(this.setTitle("New thread"),this.setBack(!0)):setTimeout(function(){t.$router.push("/blog")},2e3)}},{key:"render",value:function(t){var e=this;return this.getAdmin?t(y,{attrs:{data:Object(a["a"])({},this.$props,this.$data,{getLogin:this.getLogin,getAdmin:this.getAdmin}),methods:{showPreview:this.showPreview,showEditor:this.showEditor}}},[this.preview?t("section",{class:"markdown-style -padding"},[t("vue-markdown",{attrs:{typographer:!0}},["## ",this.title]),t("vue-markdown",{attrs:{typographer:!0}},[this.postBody])]):t("div",{class:"pure-form pure-form-stacked pure-u-1"},[t("fieldset",[t("input",i()([{on:{input:function(t){t.target.composing||(e.title=t.target.value)}},class:"pure-input-1",attrs:{id:"title",placeholder:"Title",type:"text"},domProps:{value:e.title}},{directives:[{name:"model",value:e.title,modifiers:{}}]}]))]),t("fieldset",{class:"pure-1 thread-comment-box"},[t("textarea",i()([{on:{input:function(t){t.target.composing||(e.postBody=t.target.value)}},class:"textarea",attrs:{id:"postBody",resize:"false"},domProps:{value:e.postBody}},{directives:[{name:"model",value:e.postBody,modifiers:{}}]}]))]),t("button",{class:"pure-button -fixed pure-button-primary input",on:{click:function(){return e.mutate()}}},["create Thread"])])]):null}}]),e}(p["d"]);l["b"]([Object(p["c"])()],g.prototype,"id",void 0),l["b"]([Object(b["a"])("getLogin")],g.prototype,"getLogin",void 0),l["b"]([Object(b["a"])("getAdmin")],g.prototype,"getAdmin",void 0),l["b"]([Object(b["b"])("setTitle")],g.prototype,"setTitle",void 0),l["b"]([Object(b["b"])("setBack")],g.prototype,"setBack",void 0),g=l["b"]([Object(p["a"])({name:"newThread",components:{VueMarkdown:v.a}})],g);e["default"]=g},"98bc":function(t,e,n){"use strict";e["a"]={functional:!0,render:function(t,e){var n=e.props;e.children;return t("ul",{class:"tab-panel"},[t("li",{class:"tab ".concat(!n.preview&&"active"),on:{click:function(){return n.showPreview()}}},[t("h3",["Editor"])]),t("li",{class:"tab ".concat(n.preview&&"active"),on:{click:function(){return n.showEditor()}}},[t("h3",["Preview"])])])}}}}]);
//# sourceMappingURL=chunk-6c74c888.344f1d41.js.map