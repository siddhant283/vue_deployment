(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["registration"],{"273a":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"container"},[t("div",[t("div",{staticClass:"signup-form"},[t("form",{on:{submit:e.registerUser}},[t("h2",[e._v("Sign Up")]),t("br"),e.registrationSuccessful?e._e():t("p",[e._v(" Please fill in this form to create an account! ")]),e.registrationSuccessful?t("p",[e._v(" Registration Successful! ")]):e._e(),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.model.username.$model,expression:"$v.model.username.$model"}],staticClass:"form-control",attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:e.$v.model.username.$model},on:{input:function(s){s.target.composing||e.$set(e.$v.model.username,"$model",s.target.value)}}})]),e.$v.model.username.$dirty||e.submitted?t("div",[e.$v.model.username.required?e._e():t("p",{staticClass:"text-danger"},[e._v(" this field is required ")]),e.$v.model.username.minLength?e._e():t("p",{staticClass:"text-danger"},[e._v(" Username must have at least "+e._s(e.$v.model.username.$params.minLength.min)+" characters. ")]),e.$v.model.username.alpha?e._e():t("p",{staticClass:"text-danger"},[e._v(" UserName can only contain AlphaNumeric Characters and Special Characters (*,_,@,.) ")]),e.alreadyRegisteredUsername?t("p",{staticClass:"text-danger"},[e._v(" Already Registered Username. ")]):e._e()]):e._e()]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.model.email.$model,expression:"$v.model.email.$model"}],staticClass:"form-control",attrs:{type:"email",name:"email",placeholder:"Email Address"},domProps:{value:e.$v.model.email.$model},on:{input:function(s){s.target.composing||e.$set(e.$v.model.email,"$model",s.target.value)}}})]),e.$v.model.email.$dirty||e.submitted?t("div",[e.$v.model.email.required?e._e():t("p",{staticClass:"text-danger"},[e._v(" Email is required ")]),e.$v.model.email.email?e._e():t("p",{staticClass:"text-danger"},[e._v(" Please enter valid email. ")]),e.alreadyRegisteredEmail?t("p",{staticClass:"text-danger"},[e._v(" Already Registered Email ")]):e._e()]):e._e()]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.model.password.$model,expression:"$v.model.password.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:e.$v.model.password.$model},on:{input:function(s){s.target.composing||e.$set(e.$v.model.password,"$model",s.target.value.trim())},blur:function(s){return e.$forceUpdate()}}})]),e.$v.model.password.$dirty||e.submitted?t("div",[e.$v.model.password.required?e._e():t("p",{staticClass:"text-danger"},[e._v(" Password is required ")]),e.$v.model.password.minLength?e._e():t("p",{staticClass:"text-danger"},[e._v(" Password must have at least "+e._s(e.$v.model.password.$params.minLength.min)+" characters. ")])]):e._e()]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.model.cnfpassword.$model,expression:"$v.model.cnfpassword.$model"}],staticClass:"form-control",attrs:{type:"password",name:"confirm_password",placeholder:"Confirm Password"},domProps:{value:e.$v.model.cnfpassword.$model},on:{input:function(s){s.target.composing||e.$set(e.$v.model.cnfpassword,"$model",s.target.value)}}})]),e.$v.model.cnfpassword.$dirty||e.submitted?t("div",[e.$v.model.cnfpassword.required?e._e():t("p",{staticClass:"text-danger"},[e._v(" Confirm Password is required ")]),e.$v.model.cnfpassword.sameAsPassword?e._e():t("p",{staticClass:"text-danger"},[e._v(" Password must match. ")])]):e._e()]),e._m(0),t("p",[e._v(" Already Registered ! "),t("router-link",{attrs:{to:"/"}},[e._v(" Login ")])],1)])])])])},r=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"submit"}},[e._v(" Sign Up ")])])}],i=t("b5ae"),o=i["helpers"].regex("alpha",/^[ A-Za-z0-9_@./#&+-]*$/),d={name:"Registration",data:function(){return{model:{username:"",email:"",password:"",cnfpassword:""},registrationSuccessful:!1,submitted:!1,alreadyRegisteredEmail:!1,alreadyRegisteredUsername:!1}},validations:{model:{username:{required:i["required"],minLength:Object(i["minLength"])(8),alpha:o},email:{required:i["required"],email:i["email"]},password:{required:i["required"],minLength:Object(i["minLength"])(8)},cnfpassword:{required:i["required"],sameAsPassword:Object(i["sameAs"])("password")}}},methods:{registerUser:function(e){e.preventDefault(),this.submitted=!0,this.$v.$touch(),this.$v.$invalid||this.addUser()},addUser:function(){if(this.registrationSuccessful=!1,this.alreadyRegisteredEmail=!1,this.alreadyRegisteredUsername=!1,null===localStorage.getItem("users")){var e=[];e.push(this.model),localStorage.setItem("users",JSON.stringify(e)),this.registrationSuccessful=!0}else{e=JSON.parse(localStorage.getItem("users"));for(var s=0;s<e.length;s++)e[s].username==this.model.username&&(this.alreadyRegisteredUsername=!0),e[s].email==this.model.email&&(this.alreadyRegisteredEmail=!0);this.alreadyRegisteredUsername||this.alreadyRegisteredEmail?this.registrationSuccessful=!1:(e.push(this.model),localStorage.setItem("users",JSON.stringify(e)),this.registrationSuccessful=!0)}}}},l=d,m=(t("819c"),t("2877")),n=Object(m["a"])(l,a,r,!1,null,null,null);s["default"]=n.exports},"2e92":function(e,s,t){},"819c":function(e,s,t){"use strict";t("2e92")}}]);
//# sourceMappingURL=registration.e6831f36.js.map