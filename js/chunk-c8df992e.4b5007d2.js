(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8df992e"],{"06c8":function(n,e,a){"use strict";a.d(e,"a",function(){return m});var s=a("aede"),t=a("d225"),i=a("b0b4"),r=a("9530"),o=a.n(r);function c(){var n=Object(s["a"])(["\n      mutation ccreatePost($body: String!, $id: ID!) {\n        createPost(body: $body, threadId: $id) {\n          id\n        }\n      }\n    "]);return c=function(){return n},n}function u(){var n=Object(s["a"])(["\n      mutation createThread($title: String!, $id: ID!, $body: String!) {\n        createThread(title: $title, categoryId: $id, body: $body) {\n          id\n          title\n        }\n      }\n    "]);return u=function(){return n},n}function l(){var n=Object(s["a"])(["\n      mutation createCategory($title: String!) {\n        createCategory(title: $title) {\n          id\n          title\n        }\n      }\n    "]);return l=function(){return n},n}function d(){var n=Object(s["a"])(["\n      mutation createUser($name: String!, $username: String!, $email: String!, $password: String!) {\n        createUser(\n          name: $name,\n          username: $username,\n          email: $email,\n          password: $password\n        ) {\n          id\n          username\n          email\n        }\n      }\n    "]);return d=function(){return n},n}function p(){var n=Object(s["a"])(["\n      mutation authenticate($email: String!, $password: String!) {\n        authenticate(email: $email, password: $password)\n      }\n    "]);return p=function(){return n},n}var m=function(){function n(){Object(t["a"])(this,n)}return Object(i["a"])(n,[{key:"authenticate",value:function(){return o()(p())}},{key:"createUser",value:function(){return o()(d())}},{key:"createCategory",value:function(){return o()(l())}},{key:"createThread",value:function(){return o()(u())}},{key:"createPost",value:function(){return o()(c())}}]),n}()},2638:function(n,e,a){"use strict";function s(){return s=Object.assign||function(n){for(var e,a=1;a<arguments.length;a++)for(var s in e=arguments[a],e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s]);return n},s.apply(this,arguments)}var t=["attrs","props","domProps"],i=["class","style","directives"],r=["on","nativeOn"],o=function(n){return n.reduce(function(n,e){for(var a in e)if(n[a])if(-1!==t.indexOf(a))n[a]=s({},n[a],e[a]);else if(-1!==i.indexOf(a)){var o=n[a]instanceof Array?n[a]:[n[a]],u=e[a]instanceof Array?e[a]:[e[a]];n[a]=o.concat(u)}else if(-1!==r.indexOf(a))for(var l in e[a])if(n[a][l]){var d=n[a][l]instanceof Array?n[a][l]:[n[a][l]],p=e[a][l]instanceof Array?e[a][l]:[e[a][l]];n[a][l]=d.concat(p)}else n[a][l]=e[a][l];else if("hook"==a)for(var m in e[a])n[a][m]=n[a][m]?c(n[a][m],e[a][m]):e[a][m];else n[a]=e[a];else n[a]=e[a];return n},{})},c=function(n,e){return function(){n&&n.apply(this,arguments),e&&e.apply(this,arguments)}};n.exports=o},"3fc5":function(n,e,a){"use strict";a.r(e);var s=a("cebc"),t=(a("7f7f"),a("96cf"),a("3b8d")),i=a("d225"),r=a("b0b4"),o=a("308d"),c=a("6bb5"),u=a("4e2b"),l=a("9ab4"),d=a("60a3"),p=a("65d9"),m=a.n(p),v=a("06c8"),f=a("2638"),g=a.n(f),b={functional:!0,render:function(n,e){var a=e.props;return n("main",{class:"section -login"},[n("section",{class:"parallax-background -levelSelection"},[n("h1",{class:"game-title"},["Signup"]),n("div",{class:"contact-form"},[n("input",g()([{on:{input:function(n){n.target.composing||(a.name=n.target.value)}},attrs:{id:"name",placeholder:"Name",type:"text"},domProps:{value:a.name}},{directives:[{name:"model",value:a.name,modifiers:{}}]}])),n("input",g()([{on:{input:function(n){n.target.composing||(a.email=n.target.value)}},attrs:{id:"email",placeholder:"Email",type:"email"},domProps:{value:a.email}},{directives:[{name:"model",value:a.email,modifiers:{}}]}])),n("input",g()([{on:{input:function(n){n.target.composing||(a.password=n.target.value)}},attrs:{id:"password",placeholder:"Password",type:"password"},domProps:{value:a.password}},{directives:[{name:"model",value:a.password,modifiers:{}}]}])),n("input",g()([{on:{input:function(n){n.target.composing||(a.username=n.target.value)}},attrs:{id:"username",placeholder:"Username",type:"text"},domProps:{value:a.username}},{directives:[{name:"model",value:a.username,modifiers:{}}]}])),n("button",{class:"button",on:{click:function(){return a.methods.signup(a.name,a.email,a.password,a.username)}}},["Sign up"])]),n("article",{class:"background background-1"},[n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"})]),n("article",{class:"background background-2"},[n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"})]),n("article",{class:"background background-3"},[n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"})]),n("article",{class:"background background-4"},[n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"})]),n("article",{class:"background background-5"},[n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"})]),n("article",{class:"background background-6"},[n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"})]),n("article",{class:"layerBottom"},[n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"})])])])}},h=a("4bb5"),y=new v["a"],w=function(n){function e(){var n;return Object(i["a"])(this,e),n=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),n.email="",n.password="",n.name="",n.username="",n}return Object(u["a"])(e,n),Object(r["a"])(e,[{key:"signup",value:function(n,e,a,s){var i=this;this.$apollo.mutate({mutation:y.createUser(),variables:{email:e,password:a,name:n,username:s}}).then(function(){var n=Object(t["a"])(regeneratorRuntime.mark(function n(s){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return alert("".concat(i.name," was registered successfully")),n.next=3,i.signin(e,a);case 3:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()).catch(function(n){console.log(n)})}},{key:"signin",value:function(n,e){var a=this;this.$apollo.mutate({mutation:y.authenticate(),variables:{email:n,password:e}}).then(function(e){a.setLogin(!0),"alex@smoothterminal.com"===n?(localStorage.setItem("admin","true"),a.setAdmin(!0)):(localStorage.removeItem("admin"),a.setAdmin(!1)),localStorage.setItem("token",e.data.authenticate),a.$router.push("/blog")}).catch(function(n){console.log(n)})}},{key:"render",value:function(n){return n(b,{class:"section",attrs:{data:Object(s["a"])({},this.$data,{email:this.email,password:this.password,name:this.name,username:this.username}),methods:{signup:this.signup}}})}}]),e}(d["d"]);l["b"]([Object(h["b"])("setLogin")],w.prototype,"setLogin",void 0),l["b"]([Object(h["b"])("setAdmin")],w.prototype,"setAdmin",void 0),w=l["b"]([m()({name:"signup"})],w);e["default"]=w}}]);
//# sourceMappingURL=chunk-c8df992e.4b5007d2.js.map