webpackJsonp([1],{"1E25":function(e,t){},"1yIT":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.users,"highlight-current-row":""},on:{"selection-change":e.selectionChange}},[n("el-table-column",{attrs:{label:"",type:"selection"}}),e._v(" "),n("el-table-column",{attrs:{label:"",type:"index"}}),e._v(" "),n("el-table-column",{attrs:{label:"Name",prop:"name",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{label:"Address",prop:"addr",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{label:"Action"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"",size:"small"},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("Edit")]),e._v(" "),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){e.handleDel(t.$index,t.row)}}},[e._v("Delete")])]}}])})],1)],1)},r=[],o={render:a,staticRenderFns:r};t.a=o},"5g2O":function(e,t){},"8omf":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-header",[e._t("header",[e._v("header")])],2),e._v(" "),n("el-container",[n("el-aside",{attrs:{width:"200px"}},[e._t("aside",[e._v("aside")])],2),e._v(" "),n("el-container",[n("el-main",[e._t("main",[e._v("main")])],2),e._v(" "),n("el-footer",[e._t("footer",[e._v("footer")])],2)],1)],1)],1)},r=[],o={render:a,staticRenderFns:r};t.a=o},D2UV:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("new-layout",[n("div",{attrs:{slot:"header"},slot:"header"},[e._v("Header")]),e._v(" "),n("div",{attrs:{slot:"aside"},slot:"aside"},[e._v("Aside")]),e._v(" "),n("div",{attrs:{slot:"main"},slot:"main"},[e._v("Main\n        "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[e._v("Footer")])])},r=[],o={render:a,staticRenderFns:r};t.a=o},"E/Od":function(e,t,n){"use strict";var a=n("lO7g"),r=n("HWxg"),o=n("YqS2"),i=[{path:"/",component:a.a,name:"导航一",iconCls:"el-icon-message",children:[{path:"/table",component:r.a,name:"Table"},{path:"/form",component:o.a,name:"Form"}]}];t.a=i},Evem:function(e,t){},FP4r:function(e,t){},Fs8J:function(e,t,n){"use strict";var a=(n("hziu"),n("Qim2"));t.a={components:{NewLayout:a.a},data:function(){return{brand:"Vue Dashboard",collapsed:!1,userName:"",userAvatar:""}},methods:{collapse:function(){this.collapsed=!this.collapsed}},mounted:function(){}}},HWxg:function(e,t,n){"use strict";function a(e){n("v+qz")}var r=n("ljh7"),o=n("1yIT"),i=n("VU/8"),s=a,u=i(r.a,o.a,!1,s,"data-v-289898a1",null);t.a=u.exports},M0Zg:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"container"},[e._v("\n    form\n")])},r=[],o={render:a,staticRenderFns:r};t.a=o},M93x:function(e,t,n){"use strict";function a(e){n("5g2O")}var r=n("xJD8"),o=n("Vbw/"),i=n("VU/8"),s=a,u=i(r.a,o.a,!1,s,null,null);t.a=u.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r=n("zL8q"),o=n.n(r),i=n("tvR6"),s=(n.n(i),n("e0XP")),u=(n.n(s),n("M93x")),c=n("YaEn");n("qs/E").a.initilizeMock(),a.default.use(o.a),new a.default({el:"#app",router:c.a,template:"<App/>",components:{App:u.a}})},P9l9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"requestLogin",function(){return o}),n.d(t,"getUserList",function(){return i}),n.d(t,"getUserListPage",function(){return s}),n.d(t,"removeUser",function(){return u}),n.d(t,"batchRemoveUser",function(){return c}),n.d(t,"editUser",function(){return l}),n.d(t,"addUser",function(){return d});var a=n("mtWM"),r=n.n(a),o=function(e){return r.a.post("/login",{params:e}).then(function(e){return e.data})},i=function(e){return r.a.get("/user/list",{params:e})},s=function(e){return r.a.get("/user/listpage",{params:e})},u=function(e){return r.a.get("/user/remove",{params:e})},c=function(e){return r.a.get("/user/batchremove",{params:e})},l=function(e){return r.a.get("/user/edit",{params:e})},d=function(e){return r.a.get("/user/add",{params:e})}},Qim2:function(e,t,n){"use strict";function a(e){n("Evem")}var r=n("kZjE"),o=n("RDm1"),i=n("VU/8"),s=a,u=i(r.a,o.a,!1,s,"data-v-a3dad7ae",null);t.a=u.exports},QpXG:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});for(var a=n("zNUS"),r=n.n(a),o=[{id:1,username:"admin",password:"admin",avatar:"@/assets/logo.png",name:"Soong"}],i=[],s=0;s<100;s++)i.push(r.a.mock({id:r.a.Random.guid(),name:r.a.Random.cname(),addr:r.a.mock("@county(true)"),"age|18-60":1,birth:r.a.Random.date(),gender:r.a.Random.integer(0,1)}))},RDm1:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-header",[e._t("header",[e._v("header")])],2),e._v(" "),n("el-container",[n("el-aside",{attrs:{width:"200px"}},[e._t("aside",[e._v("aside")])],2),e._v(" "),n("el-container",[n("el-main",[e._t("main",[e._v("main")])],2)],1)],1),e._v(" "),n("el-footer",[e._t("footer",[e._v("footer")])],2)],1)},r=[],o={render:a,staticRenderFns:r};t.a=o},TndX:function(e,t,n){"use strict";t.a={name:"DefaultLayout",props:{},components:{},data:function(){return{}},computed:{},methods:{},mounted:function(){}}},"Vbw/":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},r=[],o={render:a,staticRenderFns:r};t.a=o},YaEn:function(e,t,n){"use strict";var a=n("Gu7T"),r=n.n(a),o=n("7+uW"),i=n("/ocq"),s=n("xJsL"),u=n("thLP"),c=n("E/Od"),l=[{path:"/login",component:s.a,name:"Login",hidden:!0},{path:"/404",component:u.a,name:"NotFound",hidden:!0},{path:"*",hidden:!0,redirect:{path:"/404"}}];o.default.use(i.a),t.a=new i.a({routes:[].concat(r()(c.a),l)})},YqS2:function(e,t,n){"use strict";function a(e){n("k1d6")}var r=n("wSnu"),o=n("M0Zg"),i=n("VU/8"),s=a,u=i(r.a,o.a,!1,s,"data-v-9887e974",null);t.a=u.exports},"Z/dC":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"container"},[e._v("\n    404 page not find!\n")])},r=[],o={render:a,staticRenderFns:r};t.a=o},c9TY:function(e,t){},e0XP:function(e,t){},gyMJ:function(e,t,n){"use strict";var a=n("P9l9");t.a=a},hziu:function(e,t,n){"use strict";function a(e){n("FP4r")}var r=n("TndX"),o=n("8omf"),i=n("VU/8"),s=a,u=i(r.a,o.a,!1,s,"data-v-1572cef4",null);u.exports},igcY:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"loginForm",staticClass:"login-container",attrs:{model:e.account,rules:e.rules,"label-position":"left","label-width":"0px"}},[n("h3",{staticClass:"title"},[e._v("Login")]),e._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"user name"},model:{value:e.account.username,callback:function(t){e.$set(e.account,"username",t)},expression:"account.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"password"},model:{value:e.account.password,callback:function(t){e.$set(e.account,"password",t)},expression:"account.password"}})],1),e._v(" "),n("el-checkbox",{staticClass:"remember",attrs:{checked:""},model:{value:e.rememberMe,callback:function(t){e.rememberMe=t},expression:"rememberMe"}},[e._v("Remember me")]),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},nativeOn:{click:function(t){t.preventDefault(),e.login(t)}}},[e._v("Login")])],1)],1)},r=[],o={render:a,staticRenderFns:r};t.a=o},k1d6:function(e,t){},kZjE:function(e,t,n){"use strict";t.a={name:"NewLayout",props:{},components:{},data:function(){return{}},computed:{},methods:{},mounted:function(){}}},lFaj:function(e,t){},lO7g:function(e,t,n){"use strict";function a(e){n("1E25")}var r=n("Fs8J"),o=n("D2UV"),i=n("VU/8"),s=a,u=i(r.a,o.a,!1,s,"data-v-707f7dd0",null);t.a=u.exports},ljh7:function(e,t,n){"use strict";var a=n("gyMJ");t.a={data:function(){return{users:[],page:1,filters:{name:""},listLoading:!1,selections:[]}},computed:{total:function(){return this.data.users.length}},methods:{getUsers:function(){var e=this,t={page:this.page,name:this.filters.name};this.listLoading=!0,a.a.getUserListPage(t).then(function(t){e.users=t.data.users,e.listLoading=!1})},selectionChange:function(){},handleEdit:function(){},handleDel:function(){}},mounted:function(){this.getUsers()}}},"nKb+":function(e,t,n){"use strict";t.a={data:function(){return{logining:!1,account:{username:"admin",password:"123456"},rules:{username:[{required:!0,message:"please input user name",trigger:"blur"}],password:[{required:!0,message:"please input password",trigger:"blur"}]},rememberMe:!0}},methods:{collapse:function(){this.collapsed=!this.collapsed},login:function(e){var t=this;this.$refs.loginForm.validate(function(e){return!!e&&(t.logining=!0,t.logining=!1,t.$router.push({path:"/"}),!0)})}}}},pg2O:function(e,t,n){"use strict";t.a={}},"qs/E":function(e,t,n){"use strict";var a=n("telf");t.a=a.a},telf:function(e,t,n){"use strict";var a=n("mvHQ"),r=n.n(a),o=n("//Fk"),i=n.n(o),s=n("mtWM"),u=n.n(s),c=n("KorX"),l=n.n(c),d=n("QpXG"),f=d.b;t.a={initilizeMock:function(){var e=new l.a(u.a);e.onGet("/success").reply(200,{msg:"success"}),e.onGet("/error").reply(500,{msg:"failure"}),e.onPost("/login").reply(function(e){var t=JSON.parse(e.data),n=t.username,a=t.password;return new i.a(function(e,t){var o=null;setTimeout(function(){var t=d.a.some(function(e){if(e.username===n&&e.password===a)return o=JSON.parse(r()(e)),o.password=void 0,!0});e(t?[200,{code:200,msg:"请求成功",user:o}]:[200,{code:500,msg:"账号或密码错误"}])},1e3)})}),e.onGet("/user/list").reply(function(e){var t=e.params.name,n=f.filter(function(e){return!t||-1!=e.name.indexOf(t)});return new i.a(function(e,t){setTimeout(function(){e([200,{users:n}])},1e3)})}),e.onGet("/user/listpage").reply(function(e){var t=e.params,n=t.page,a=t.name,r=f.filter(function(e){return!a||-1!=e.name.indexOf(a)}),o=r.length;return r=r.filter(function(e,t){return t<20*n&&t>=20*(n-1)}),new i.a(function(e,t){setTimeout(function(){e([200,{total:o,users:r}])},1e3)})}),e.onGet("/user/remove").reply(function(e){var t=e.params.id;return f=f.filter(function(e){return e.id!==t}),new i.a(function(e,t){setTimeout(function(){e([200,{code:200,msg:"删除成功"}])},500)})}),e.onGet("/user/batchremove").reply(function(e){var t=e.params.ids;return t=t.split(","),f=f.filter(function(e){return!t.includes(e.id)}),new i.a(function(e,t){setTimeout(function(){e([200,{code:200,msg:"删除成功"}])},500)})}),e.onGet("/user/edit").reply(function(e){var t=e.params,n=t.id,a=t.name,r=t.addr,o=t.age,s=t.birth,u=t.gender;return f.some(function(e){if(e.id===n)return e.name=a,e.addr=r,e.age=o,e.birth=s,e.gender=u,!0}),new i.a(function(e,t){setTimeout(function(){e([200,{code:200,msg:"编辑成功"}])},500)})}),e.onGet("/user/add").reply(function(e){var t=e.params,n=t.name,a=t.addr,r=t.age,o=t.birth,s=t.gender;return f.push({name:n,addr:a,age:r,birth:o,gender:s}),new i.a(function(e,t){setTimeout(function(){e([200,{code:200,msg:"新增成功"}])},500)})})}}},thLP:function(e,t,n){"use strict";function a(e){n("c9TY")}var r=n("pg2O"),o=n("Z/dC"),i=n("VU/8"),s=a,u=i(r.a,o.a,!1,s,"data-v-63d0e324",null);t.a=u.exports},tvR6:function(e,t){},"v+qz":function(e,t){},wSnu:function(e,t,n){"use strict";t.a={}},xJD8:function(e,t,n){"use strict";t.a={name:"app",components:{}}},xJsL:function(e,t,n){"use strict";function a(e){n("lFaj")}var r=n("nKb+"),o=n("igcY"),i=n("VU/8"),s=a,u=i(r.a,o.a,!1,s,"data-v-62a0335e",null);t.a=u.exports}},["NHnr"]);
//# sourceMappingURL=app.628fe5b7b7a7cee626ab.js.map