(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8b14d22"],{"06c8":function(n,s,a){"use strict";a.d(s,"a",function(){return v});var i=a("aede"),t=a("d225"),e=a("b0b4"),r=a("9530"),o=a.n(r);function c(){var n=Object(i["a"])(["\n      mutation ccreatePost($body: String!, $id: ID!) {\n        createPost(body: $body, threadId: $id) {\n          id\n        }\n      }\n    "]);return c=function(){return n},n}function l(){var n=Object(i["a"])(["\n      mutation createThread($title: String!, $id: ID!, $body: String!) {\n        createThread(title: $title, categoryId: $id, body: $body) {\n          id\n          title\n        }\n      }\n    "]);return l=function(){return n},n}function u(){var n=Object(i["a"])(["\n      mutation createCategory($title: String!) {\n        createCategory(title: $title) {\n          id\n          title\n        }\n      }\n    "]);return u=function(){return n},n}function d(){var n=Object(i["a"])(["\n      mutation createUser($name: String!, $username: String!, $email: String!, $password: String!) {\n        createUser(\n          name: $name,\n          username: $username,\n          email: $email,\n          password: $password\n        ) {\n          id\n          username\n          email\n        }\n      }\n    "]);return d=function(){return n},n}function p(){var n=Object(i["a"])(["\n      mutation authenticate($email: String!, $password: String!) {\n        authenticate(email: $email, password: $password)\n      }\n    "]);return p=function(){return n},n}var v=function(){function n(){Object(t["a"])(this,n)}return Object(e["a"])(n,[{key:"authenticate",value:function(){return o()(p())}},{key:"createUser",value:function(){return o()(d())}},{key:"createCategory",value:function(){return o()(u())}},{key:"createThread",value:function(){return o()(l())}},{key:"createPost",value:function(){return o()(c())}}]),n}()},2638:function(n,s,a){"use strict";function i(){return i=Object.assign||function(n){for(var s,a=1;a<arguments.length;a++)for(var i in s=arguments[a],s)Object.prototype.hasOwnProperty.call(s,i)&&(n[i]=s[i]);return n},i.apply(this,arguments)}var t=["attrs","props","domProps"],e=["class","style","directives"],r=["on","nativeOn"],o=function(n){return n.reduce(function(n,s){for(var a in s)if(n[a])if(-1!==t.indexOf(a))n[a]=i({},n[a],s[a]);else if(-1!==e.indexOf(a)){var o=n[a]instanceof Array?n[a]:[n[a]],l=s[a]instanceof Array?s[a]:[s[a]];n[a]=o.concat(l)}else if(-1!==r.indexOf(a))for(var u in s[a])if(n[a][u]){var d=n[a][u]instanceof Array?n[a][u]:[n[a][u]],p=s[a][u]instanceof Array?s[a][u]:[s[a][u]];n[a][u]=d.concat(p)}else n[a][u]=s[a][u];else if("hook"==a)for(var v in s[a])n[a][v]=n[a][v]?c(n[a][v],s[a][v]):s[a][v];else n[a]=s[a];else n[a]=s[a];return n},{})},c=function(n,s){return function(){n&&n.apply(this,arguments),s&&s.apply(this,arguments)}};n.exports=o},fe7c:function(n,s,a){"use strict";a.r(s);var i=a("cebc"),t=a("d225"),e=a("b0b4"),r=a("308d"),o=a("6bb5"),c=a("4e2b"),l=a("9ab4"),u=a("2b0e"),d=a("65d9"),p=a.n(d),v=a("06c8"),f=a("4bb5"),b=a("2638"),m=a.n(b),g={functional:!0,render:function(n,s){var a=s.props;return n("main",{class:"section -login"},[n("section",{class:"parallax-background -levelSelection"},[n("h1",{class:"game-title"},["Login"]),n("div",{class:"contact-form"},[n("input",m()([{on:{input:function(n){n.target.composing||(a.email=n.target.value)}},class:"input pure-input-1",attrs:{id:"email",placeholder:"Email",type:"email"},domProps:{value:a.email}},{directives:[{name:"model",value:a.email,modifiers:{}}]}])),n("input",m()([{on:{input:function(n){n.target.composing||(a.password=n.target.value)}},class:"input pure-input-1",attrs:{id:"password",placeholder:"Password",type:"password"},domProps:{value:a.password}},{directives:[{name:"model",value:a.password,modifiers:{}}]}])),n("span",{class:"pure-form-message"},[n("routerLink",{class:"link",attrs:{to:"/signup"}},["Create account"])]),n("button",{class:"button",on:{click:function(){return a.methods.signin(a.email,a.password)}}},["Sign in"])]),n("article",{class:"background background-1"},[n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"})]),n("article",{class:"background background-2"},[n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"})]),n("article",{class:"background background-3"},[n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"})]),n("article",{class:"background background-4"},[n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"})]),n("article",{class:"background background-5"},[n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"})]),n("article",{class:"background background-6"},[n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"})]),n("article",{class:"layerBottom"},[n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"}),n("span",{class:"divisions"})])])])}},h=new v["a"],y=function(n){function s(){var n;return Object(t["a"])(this,s),n=Object(r["a"])(this,Object(o["a"])(s).apply(this,arguments)),n.email="",n.password="",n}return Object(c["a"])(s,n),Object(e["a"])(s,[{key:"signin",value:function(n,s){var a=this;this.$apollo.mutate({mutation:h.authenticate(),variables:{email:n,password:s}}).then(function(n){n.data.authenticate&&(a.setLogin(!0),localStorage.setItem("token",n.data.authenticate),alert("Welcome")),a.$router.push("/")}).catch(function(n){alert(n),console.log(n)})}},{key:"render",value:function(n){return n(g,{class:"section",attrs:{data:Object(i["a"])({},this.$data,{email:this.email,password:this.password,setLogin:this.setLogin}),methods:{signin:this.signin}}})}}]),s}(u["default"]);l["b"]([Object(f["b"])("setLogin")],y.prototype,"setLogin",void 0),y=l["b"]([p()({name:"login"})],y);s["default"]=y}}]);
//# sourceMappingURL=chunk-c8b14d22.8f0a08f4.js.map