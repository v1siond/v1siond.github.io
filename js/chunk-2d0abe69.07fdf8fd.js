(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0abe69"],{"16f4":function(t,e,i){"use strict";i.r(e);var a=i("d225"),s=i("b0b4"),o=i("308d"),n=i("6bb5"),l=i("4e2b"),r=i("9ab4"),c=i("60a3"),u=i("65d9"),m=i.n(u),d=(i("7f7f"),{functional:!0,render:function(t,e){var i=e.props,a=function(){var e=[];return i.colaborators&&i.colaborators.length>0&&i.colaborators.map(function(i){e.push(t("li",{class:"colaborator"},[t("a",{attrs:{href:i.url}},[i.name])])),e.push(t("li",{class:"colaborator-job"},[i.job]))}),e},s=function(){var e=[];return i.publishedContent&&i.publishedContent.length>0&&i.publishedContent.map(function(i){e.push(t("li",{class:"colaborator"},[t("a",{attrs:{href:i.url}},[i.title])]))}),e};return t("main",{class:"section -credits"},[t("h1",{class:"game-title -credit"},["Credits"]),t("ul",{class:"colaborators"},[t("h2",{class:"game-title -credits"},["Colaborators"]),a()]),t("ul",{class:"published-content"},[t("h2",{class:"game-title -credits"},["Published Content"]),s()]),t("section",{class:"contact"},[t("h2",{class:"game-title -credits"},["Contact"]),t("form",{class:"contact-form"},[t("input",{on:{input:function(t){return i.sync("email",t.target.value)}},attrs:{type:"email",placeholder:"Email",required:!0}}),t("input",{on:{input:function(t){return i.sync("subject",t.target.value)}},attrs:{type:"text",placeholder:"Subject",required:!0}}),t("textarea",{on:{input:function(t){return i.sync("message",t.target.value)}},attrs:{name:"message",cols:"5",rows:"10",placeholder:"Message",required:!0}}),t("a",{class:"button",on:{click:function(){return i.sendEmail()}}},["Send message"])]),t("article",{class:"contact-information"},[t("a",[t("i",{class:"fab fa-facebook"}),"Facebook"]),t("a",[t("i",{class:"fab fa-github"}),"Github"]),t("a",[t("i",{class:"fab fa-youtube"}),"Youtube (Drummin Channel)"])])])])}}),p=i("4bb5"),b=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(o["a"])(this,Object(n["a"])(e).apply(this,arguments)),t.email="",t.subject="",t.message="",t.colaborators=[{name:"Alexander Pulido",job:"Project Development",url:null},{name:"Alexander Pulido",job:"Frontend Development"},{name:"Alexander Pulido",job:"Backend Development"},{name:"Alexander Pulido",job:"Animation"},{name:"Daniel Piña",job:"Sprite Designer",url:"https://drive.google.com/file/d/1Vq9XjseBidmOTCUEEOullLDxPJSucij_/view?fbclid=IwAR1sI0O45qDrWWomAp3okq9DfXC-AOe-4A2WwnDAYitL3ry_ksh1YGqTm-k"},{name:"Eon",job:"Music Ambientation for Experience and Hobbies levels",url:"https://www.facebook.com/Enlighten-Our-Nature-EON-357583141013558/"},{name:"Drakhen",job:"Music Ambientation for Home, Credits and Skills levels.",url:"https://www.facebook.com/Drakhenbanda/"},{name:"Tanner Helland",job:"Music Ambientation for Level Selection screen and Abilities level.",url:"http://www.tannerhelland.com"},{name:"8notes.com",job:"Music Ambientation for Born In level",url:"https://www.8notes.com"},{name:"Game Dev Market",job:"Game Assets Provider",url:"https://gamedevmarket.net"},{name:"Luis Zuno",job:"Game Assets for Experience Level",urk:"https://ansimuz.com"},{name:"Eder Muniz",job:"Game Assets for Selection Level",urk:"https://twitter.com/EdermuniZz"},{name:"CraftPix.net",job:"Game Assets provider for Home, Abilities, Hobbies and Skills Level",urk:"https://craftpix.net/"}],t.publishedContent=[{date:"27-11-2017",title:"Build a 2D animation with CSS",description:"Learn the fundamentals of CSS animations by building a Hot Air Balloon.",url:"https://www.smoothterminal.com/articles/build-a-2d-animation-using-only-css"},{date:"28-11-2017",title:"Build a 2D animation with CSS Part 2.",description:"Learn the fundamentals of CSS animations by building a Hot Air Balloon.",url:"https://www.smoothterminal.com/articles/build-a-simple-2d-hot-air-balloon-animation-using-only-css"},{date:"29-11-2017",title:"Build a 3D animation with CSS",description:"Learn the fundamentals of CSS 3D animations.",url:"https://www.smoothterminal.com/articles/build-a-3d-animation-using-only-css"},{date:"29-11-2017",title:"Build a 3D Mobile with CSS",description:"Learn the fundamentals of CSS 3D drawing.",url:"https://www.smoothterminal.com/articles/build-a-3d-mobile-using-only-css"},{date:"30-11-2017",title:"Animations Sub-Properties and Their Effects",description:"Learn the fundamentals of CSS animations.",url:"https://www.smoothterminal.com/articles/build-a-3d-mobile-using-only-css"},{date:"24-01-2018",title:"Designing a Email Template",description:"Learn how to design emails and the best practices.",url:"https://www.smoothterminal.com/articles/designing-an-email-template"},{date:"25-01-2018",title:"Building a Responsive Email",description:"Learn how to build email templates and the best practices.",url:"https://www.smoothterminal.com/articles/building-a-responsive-email"},{date:"06-02-2018",title:"Building a Email Template: Fluid Technique Part I",description:"Learn how to build email templates and the best practices.",url:"https://www.smoothterminal.com/articles/building-a-responsive-email-using-fluid-technique-part-i"},{date:"06-02-2018",title:"Building a Email Template: Fluid Technique Part II",description:"How to design emails and best practices.",url:"https://www.smoothterminal.com/articles/building-a-responsive-email-using-fluid-technique-part-ii"},{date:"07-02-2018",title:"Designing a Email Template: Testing, tools, Utilities and Tricks",description:"Overview of best practices",url:"https://www.smoothterminal.com/articles/testing-tools-utilities-and-tricks"},{date:"13-06-2018",title:"Sass: Introduction to Sass Part I",description:"A practical introduction to Sass",url:"https://www.smoothterminal.com/articles/introduction-to-sass-part-one"},{date:"14-06-2018",title:"Sass: Introduction to Sass part II",description:"A practical introduction to Sass",url:"https://www.smoothterminal.com/articles/introduction-to-sass-part-2"},{date:"21-06-2018",title:"Sass: Complex Mixins Part I",description:"Learn how mixins, loops and conditional works in Sass and how they can improve drastically your style workflow.",url:"https://www.smoothterminal.com/articles/complex-mixins-in-sass-part-ii"},{date:"25-06-2018",title:"Sass: Complex Mixins Part II",description:"Learn how mixins, loops and conditional works in Sass and how they can improve drastically your style workflow.",url:"https://www.smoothterminal.com/articles/complex-mixins-in-sass-part-ii-2be8d72c-9b1b-4077-815f-5ec3b1528a0b"},{date:"26-06-2018",title:"Build Your Own 8-bit Character Using Sass Part I: Base",description:"A practical example using all features availables in Sass",url:"https://www.smoothterminal.com/articles/build-your-own-8-bit-character-using-sass-part-i"},{date:"27-06-2018",title:"Build Your Own 8-bit Character Using Sass Part II: Styling",description:"A practical example using all features availables in Sass",url:"https://www.smoothterminal.com/articles/build-your-own-8-bit-character-using-sass-part-ii"},{date:"07-04-2018",title:"Build Your Own 8-bit Character Using Sass Part III: Animating",description:"A practical example using all features availables in Sass",url:"https://www.smoothterminal.com/articles/build-your-own-8-bit-character-using-sass-part-iii"},{date:"09-04-2018",title:"Build Your Own 8-bit Character Using Sass Part IV: Automating Animation",description:"A practical example using all features availables in Sass",url:"https://www.smoothterminal.com/articles/build-your-own-8-bit-character-using-sass-part-iv-a9e55093-4389-4dbe-90d1-2a247edcc5a1"},{date:"30-08-2018",title:"A Modern Developer's Approach to Pull Request",description:"Git best practices",url:"https://www.smoothterminal.com/articles/a-modern-developer-s-approach-to-pull-requests"},{date:"22-01-2019",title:"Implement a Vue Client for a GraphQL Forum",description:"Learn how to use Vue with TypeScript, Stylus, Pug, and Vuex to build a client for a graphql-powered forum",url:"https://www.smoothterminal.com/courses/graphql-zero-to-awesome/lessons/implement-a-vue-client-for-a-graphql-forum"}],t}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"sendEmail",value:function(){window.open("mailto:".concat(this.email,"?subject=").concat(this.subject,"&body=").concat(this.message))}},{key:"sync",value:function(t,e){this[t]=e}},{key:"backgroundSound",value:function(){this.playAudio("intro"),this.playAudio("wind4")}},{key:"mounted",value:function(){this.backgroundSound(),this.setTitle("Credits"),this.setBack(!0),this.setLevelNumber(""),this.setLevelName("Credits")}},{key:"render",value:function(t){return t(d,{attrs:{colaborators:this.colaborators,publishedContent:this.publishedContent,sync:this.sync,email:this.email,subject:this.subject,message:this.message,sendEmail:this.sendEmail}})}},{key:"onSoundChange",value:function(t){this.backgroundSound()}}]),e}(c["d"]);r["b"]([Object(p["b"])("setTitle")],b.prototype,"setTitle",void 0),r["b"]([Object(p["b"])("setBack")],b.prototype,"setBack",void 0),r["b"]([Object(p["a"])("getSound")],b.prototype,"getSound",void 0),r["b"]([Object(p["a"])("getSounds")],b.prototype,"getSounds",void 0),r["b"]([Object(p["b"])("setLevelNumber")],b.prototype,"setLevelNumber",void 0),r["b"]([Object(p["b"])("setLevelName")],b.prototype,"setLevelName",void 0),r["b"]([Object(c["c"])()],b.prototype,"playAudio",void 0),r["b"]([Object(c["e"])("getSound",{immediate:!0,deep:!0})],b.prototype,"onSoundChange",null),b=r["b"]([m()({name:"Credits"})],b);e["default"]=b}}]);
//# sourceMappingURL=chunk-2d0abe69.07fdf8fd.js.map