webpackJsonp([0],{"/6gk":function(t,e){},"2I94":function(t,e){},GFTE:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("VCXJ"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"notesList"},t._l(t.data,function(e){return n("li",{key:e.id,staticClass:"clearFix",class:{active:t.choose_index===e.id}},[n("span",{staticClass:"title",on:{click:function(n){t.choose_this(e.id)}}},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"content_box",on:{click:function(n){t.choose_this(e.id)}}},[n("span",{staticClass:"partial_content noselect"},[t._v(t._s(e.content))])]),t._v(" "),n("span",{staticClass:"time",on:{click:function(n){t.choose_this(e.id)}}},[t._v(t._s(e.time))]),t._v(" "),n("span",{staticClass:"option"},[n("span",{staticClass:"iconfont icon-aixin love noselect",class:{active:e.favorite},attrs:{title:e.favorite?"取消喜欢":"添加到喜欢"},on:{click:function(n){t.change_like(e.id)}}}),t._v(" "),n("span",{staticClass:"iconfont icon-shanchu del noselect",attrs:{title:"删除"},on:{click:function(n){t.del(e.id)}}})])])}))},staticRenderFns:[]};var s={all:function(t){return t},favorite:function(t){return t.filter(function(t){return t.favorite})}},a={name:"operation",components:{NotesList:n("X4nt")({name:"notesList",props:["data"],methods:{change_like:function(t){this.$store.commit("change_like",{id:t})},choose_this:function(t){this.$store.commit("show_full_content",{id:t}),this.$store.commit("show_title",{id:t})},del:function(t){this.$store.commit("del",{id:t})}},computed:{choose_index:function(){return this.$store.state.choose_id}}},o,!1,function(t){n("GFTE")},null,null).exports},computed:{previews:function(){return s[this.preview]?s[this.preview](this.datas):this.datas},preview:function(){return this.$store.state.preview},datas:function(){return this.$store.state.notesData},allLen:function(){return this.$store.state.notesData.length<99?this.$store.state.notesData.length:"99+"},favoriteLen:function(){var t=0;return this.datas.filter(function(e){e.favorite&&(t+=1)}),t<99?t:"99+"}},methods:{change_preview:function(t){this.$store.commit("change_preview",{view:t})},add:function(){this.$store.commit("add")}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left-control"},[n("p",{staticClass:"title"},[t._v("NOTES")]),t._v(" "),n("ul",{staticClass:"choose_btns"},[n("li",{staticClass:"noselect",class:{active:"all"===t.preview},on:{click:function(e){t.change_preview("all")}}},[n("span",[t._v("All Notes")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.datas.length>0,expression:"datas.length > 0"}],staticClass:"num",class:{num2:t.datas.length>9}},[t._v(t._s(t.datas.length))])]),t._v(" "),n("li",{staticClass:"noselect",class:{active:"favorite"===t.preview},on:{click:function(e){t.change_preview("favorite")}}},[n("span",[t._v("Favorites")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.favoriteLen>0,expression:"favoriteLen > 0"}],staticClass:"num",class:{num2:t.favoriteLen>9}},[t._v(t._s(t.favoriteLen))])])]),t._v(" "),n("NotesList",{attrs:{data:t.previews}}),t._v(" "),n("span",{staticClass:"iconfont icon-tianjia add",attrs:{title:"添加"},on:{click:t.add}})],1)},staticRenderFns:[]};var r={name:"App",data:function(){return{content:"",id:"",title:""}},watch:{content:{handler:function(){this.$store.commit("change_content",{id:this.id,content:this.content})},deep:!0},title:{handler:function(){this.$store.commit("change_title",{id:this.id,title:this.title})},deep:!0}},computed:{choose_index:function(){return this.$store.state.choose_index},when_content:function(){return this.content=this.$store.state.when_content,this.id=this.$store.state.choose_id,this.$store.state.when_content},content_title:function(){return this.title=this.$store.state.title,this.$store.state.title}},components:{Operation:n("X4nt")(a,c,!1,function(t){n("UiIE")},null,null).exports}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Operation"),t._v(" "),n("input",{directives:[{name:"show",rawName:"v-show",value:""!==t.content_title,expression:"content_title !== ''"},{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"title",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"show",rawName:"v-show",value:""!==t.when_content,expression:"when_content !== ''"},{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"full_content",domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})],1)},staticRenderFns:[]};var u=n("X4nt")(r,l,!1,function(t){n("2I94")},null,null).exports,d=n("9rMa");i.a.use(d.a);var f=new d.a.Store({state:{notesData:[],when_content:"",preview:"all",choose_id:"",count:0,oldID:0,title:"",format:function(t){return t>9?t:"0"+t}},mutations:{change_like:function(t,e){var n=t.notesData.find(function(t){return t.id===e.id});n.favorite?n.favorite=!1:n.favorite=!0},show_title:function(t,e){var n=t.notesData.find(function(t){return t.id===e.id});t.title=n.title,t.choose_id=e.id},show_full_content:function(t,e){var n=t.notesData.find(function(t){return t.id===e.id});t.when_content=n.content,t.choose_id=e.id},change_preview:function(t,e){t.preview=e.view},del:function(t,e){var n=t.notesData;1===n.length&&(t.choose_id="",t.when_content=""),n.forEach(function(n,i){if(n.id===e.id)return t.notesData.splice(i,1),!1})},add:function(t,e){var n=t.notesData,i=new Date,o=i.getFullYear()+"-"+t.format(i.getMonth()+1)+"-"+t.format(i.getDate())+" "+t.format(i.getHours())+":"+t.format(i.getMinutes())+":"+t.format(i.getSeconds());n.forEach(function(t){t.choose=!1});var s=t.count+=1;t.notesData.push({id:s,title:"Unnamed title",content:"New Notes",favorite:!1,time:o}),t.when_content="New Notes",t.choose_id=s,t.title="Unnamed title"},change_content:function(t,e){if(t.oldID===e.id){var n=t.notesData,i=new Date,o=i.getFullYear()+"-"+t.format(i.getMonth()+1)+"-"+t.format(i.getDate())+" "+t.format(i.getHours())+":"+t.format(i.getMinutes())+":"+t.format(i.getSeconds());n.forEach(function(t){if(t.id===e.id)return t.content=e.content,t.time=o,!1})}t.oldID=e.id},change_title:function(t,e){if(t.oldID===e.id){var n=t.notesData,i=new Date,o=i.getFullYear()+"-"+t.format(i.getMonth()+1)+"-"+t.format(i.getDate())+" "+t.format(i.getHours())+":"+t.format(i.getMinutes())+":"+t.format(i.getSeconds());n.forEach(function(t){if(t.id===e.id)return t.title=e.title,t.time=o,!1})}t.oldID=e.id}}});n("/6gk");i.a.config.productionTip=!1,new i.a({el:"#app",store:f,components:{App:u},template:"<App/>"})},UiIE:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.087e33385252a18f2f63.js.map