(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c78c2"],{"50a2":function(s,e,n){"use strict";n.r(e);n("7f7f");var i=n("d225"),a=n("b0b4"),t=n("308d"),c=n("6bb5"),l=n("4e2b"),o=n("9ab4"),u=n("60a3"),r=n("65d9"),d=n.n(r),p={functional:!0,render:function(s,e){var n=e.props;return s("main",{class:"section -intro"},[s("section",{class:"parallax-background -levelSelection"},[s("article",{class:"levels-selection"},[s("a",{on:{click:function(){return n.router.push("/static-resume/about")},mouseenter:function(){return n.methods.levelSelected("About")}},class:"level -about"},[s("h3",["level 1: About"])]),s("a",{on:{click:function(){return n.router.push("/static-resume/skills")},mouseenter:function(){return n.methods.levelSelected("Skills")}},class:"level -skills"},[s("h3",["level 2: Skills"])]),s("a",{on:{click:function(){return n.router.push("/static-resume/experience")},mouseenter:function(){return n.methods.levelSelected("Experience")}},class:"level -experience"},[s("h3",["level 3: Experience"])]),s("a",{on:{click:function(){return n.router.push("/credits")},mouseenter:function(){return n.methods.levelSelected("Pubacations")}},class:"level -credits"},[s("h3",["Credits"])])]),s("article",{class:"background background-1"},[s("span",{class:"divisions"}),s("span",{class:"divisions"}),s("span",{class:"divisions"}),s("span",{class:"divisions"})]),s("article",{class:"background background-2"},[s("span",{class:"divisions"}),s("span",{class:"divisions"}),s("span",{class:"divisions"}),s("span",{class:"divisions"})]),s("article",{class:"background background-3"},[s("span",{class:"divisions"}),s("span",{class:"divisions"}),s("span",{class:"divisions"}),s("span",{class:"divisions"})]),s("article",{class:"background background-4"},[s("span",{class:"divisions"}),s("span",{class:"divisions"}),s("span",{class:"divisions"}),s("span",{class:"divisions"})]),s("article",{class:"background background-5"},[s("span",{class:"divisions"}),s("span",{class:"divisions"}),s("span",{class:"divisions"}),s("span",{class:"divisions"})]),s("article",{class:"background background-6"},[s("span",{class:"divisions"}),s("span",{class:"divisions"}),s("span",{class:"divisions"}),s("span",{class:"divisions"})]),s("article",{class:"layerBottom"},[s("span",{class:"divisions"}),s("span",{class:"divisions"}),s("span",{class:"divisions"}),s("span",{class:"divisions"})])])])}},v=n("4bb5"),b=n("64a8"),k=function(s){function e(){var s;return Object(i["a"])(this,e),s=Object(t["a"])(this,Object(c["a"])(e).apply(this,arguments)),s.levels=[{name:"About",status:!0},{name:"Skills",status:!1},{name:"Experience",status:!1},{name:"Publications",status:!1}],s}return Object(l["a"])(e,s),Object(a["a"])(e,[{key:"backgroundSound",value:function(){this.playAudio("levelselection"),this.playAudio("wind4")}},{key:"mounted",value:function(){this.setTitle("Level Selection"),this.setBack(!0),this.backgroundSound()}},{key:"levelSelected",value:function(s){this.levels.map(function(e){e.name===s?e.status=!0:e.status=!1}),this.playAudio("beep")}},{key:"render",value:function(s){return s(p,{attrs:{methods:{levelSelected:this.levelSelected},router:this.$router}})}},{key:"onSoundChange",value:function(s){this.backgroundSound()}}]),e}(Object(u["b"])(b["a"]));o["b"]([Object(v["b"])("setTitle")],k.prototype,"setTitle",void 0),o["b"]([Object(v["b"])("setBack")],k.prototype,"setBack",void 0),o["b"]([Object(u["e"])("getSound",{immediate:!0,deep:!0})],k.prototype,"onSoundChange",null),k=o["b"]([d()({name:"LevelSelection"})],k);e["default"]=k}}]);
//# sourceMappingURL=chunk-2d0c78c2.c3d3480e.js.map