(function(e){function t(t){for(var n,i,a=t[0],u=t[1],l=t[2],p=0,d=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"00b6":function(e,t,r){"use strict";r("e351")},1771:function(e,t,r){var n={"./logo.theme-dark.png":"c652","./logo.theme-light.png":"97fe"};function o(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=s,e.exports=o,o.id="1771"},"373b":function(e,t,r){},"529f":function(e,t,r){"use strict";r("6e42")},"6e42":function(e,t,r){},7140:function(e,t,r){},"97fe":function(e,t,r){e.exports=r.p+"img/logo.theme-light.2c02ddb9.png"},"9cc6":function(e,t,r){var n=r("8513"),o=n,s=Function("return this")();o.exportSymbol("proto.session.Empty",null,s),o.exportSymbol("proto.session.LoginRequest",null,s),proto.session.LoginRequest=function(e){n.Message.initialize(this,e,0,-1,null,null)},o.inherits(proto.session.LoginRequest,n.Message),o.DEBUG&&!COMPILED&&(proto.session.LoginRequest.displayName="proto.session.LoginRequest"),proto.session.Empty=function(e){n.Message.initialize(this,e,0,-1,null,null)},o.inherits(proto.session.Empty,n.Message),o.DEBUG&&!COMPILED&&(proto.session.Empty.displayName="proto.session.Empty"),n.Message.GENERATE_TO_OBJECT&&(proto.session.LoginRequest.prototype.toObject=function(e){return proto.session.LoginRequest.toObject(e,this)},proto.session.LoginRequest.toObject=function(e,t){var r={ident:n.Message.getFieldWithDefault(t,1,""),pwd:n.Message.getFieldWithDefault(t,2,""),totp:n.Message.getFieldWithDefault(t,3,"")};return e&&(r.$jspbMessageInstance=t),r}),proto.session.LoginRequest.deserializeBinary=function(e){var t=new n.BinaryReader(e),r=new proto.session.LoginRequest;return proto.session.LoginRequest.deserializeBinaryFromReader(r,t)},proto.session.LoginRequest.deserializeBinaryFromReader=function(e,t){while(t.nextField()){if(t.isEndGroup())break;var r=t.getFieldNumber();switch(r){case 1:var n=t.readString();e.setIdent(n);break;case 2:n=t.readString();e.setPwd(n);break;case 3:n=t.readString();e.setTotp(n);break;default:t.skipField();break}}return e},proto.session.LoginRequest.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return proto.session.LoginRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.session.LoginRequest.serializeBinaryToWriter=function(e,t){var r=void 0;r=e.getIdent(),r.length>0&&t.writeString(1,r),r=e.getPwd(),r.length>0&&t.writeString(2,r),r=e.getTotp(),r.length>0&&t.writeString(3,r)},proto.session.LoginRequest.prototype.getIdent=function(){return n.Message.getFieldWithDefault(this,1,"")},proto.session.LoginRequest.prototype.setIdent=function(e){return n.Message.setProto3StringField(this,1,e)},proto.session.LoginRequest.prototype.getPwd=function(){return n.Message.getFieldWithDefault(this,2,"")},proto.session.LoginRequest.prototype.setPwd=function(e){return n.Message.setProto3StringField(this,2,e)},proto.session.LoginRequest.prototype.getTotp=function(){return n.Message.getFieldWithDefault(this,3,"")},proto.session.LoginRequest.prototype.setTotp=function(e){return n.Message.setProto3StringField(this,3,e)},n.Message.GENERATE_TO_OBJECT&&(proto.session.Empty.prototype.toObject=function(e){return proto.session.Empty.toObject(e,this)},proto.session.Empty.toObject=function(e,t){var r={};return e&&(r.$jspbMessageInstance=t),r}),proto.session.Empty.deserializeBinary=function(e){var t=new n.BinaryReader(e),r=new proto.session.Empty;return proto.session.Empty.deserializeBinaryFromReader(r,t)},proto.session.Empty.deserializeBinaryFromReader=function(e,t){while(t.nextField()){if(t.isEndGroup())break;var r=t.getFieldNumber();switch(r){default:t.skipField();break}}return e},proto.session.Empty.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return proto.session.Empty.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.session.Empty.serializeBinaryToWriter=function(e,t){},o.object.extend(t,proto.session)},"9dcf":function(e,t,r){"use strict";r("7140")},a8a1:function(e,t,r){var n=r("8513"),o=n,s=Function("return this")();o.exportSymbol("proto.user.DeleteRequest",null,s),o.exportSymbol("proto.user.Empty",null,s),o.exportSymbol("proto.user.ResetRequest",null,s),o.exportSymbol("proto.user.SignupRequest",null,s),o.exportSymbol("proto.user.TotpRequest",null,s),o.exportSymbol("proto.user.TotpRequest.actions",null,s),proto.user.SignupRequest=function(e){n.Message.initialize(this,e,0,-1,null,null)},o.inherits(proto.user.SignupRequest,n.Message),o.DEBUG&&!COMPILED&&(proto.user.SignupRequest.displayName="proto.user.SignupRequest"),proto.user.ResetRequest=function(e){n.Message.initialize(this,e,0,-1,null,null)},o.inherits(proto.user.ResetRequest,n.Message),o.DEBUG&&!COMPILED&&(proto.user.ResetRequest.displayName="proto.user.ResetRequest"),proto.user.DeleteRequest=function(e){n.Message.initialize(this,e,0,-1,null,null)},o.inherits(proto.user.DeleteRequest,n.Message),o.DEBUG&&!COMPILED&&(proto.user.DeleteRequest.displayName="proto.user.DeleteRequest"),proto.user.TotpRequest=function(e){n.Message.initialize(this,e,0,-1,null,null)},o.inherits(proto.user.TotpRequest,n.Message),o.DEBUG&&!COMPILED&&(proto.user.TotpRequest.displayName="proto.user.TotpRequest"),proto.user.Empty=function(e){n.Message.initialize(this,e,0,-1,null,null)},o.inherits(proto.user.Empty,n.Message),o.DEBUG&&!COMPILED&&(proto.user.Empty.displayName="proto.user.Empty"),n.Message.GENERATE_TO_OBJECT&&(proto.user.SignupRequest.prototype.toObject=function(e){return proto.user.SignupRequest.toObject(e,this)},proto.user.SignupRequest.toObject=function(e,t){var r={email:n.Message.getFieldWithDefault(t,1,""),pwd:n.Message.getFieldWithDefault(t,2,"")};return e&&(r.$jspbMessageInstance=t),r}),proto.user.SignupRequest.deserializeBinary=function(e){var t=new n.BinaryReader(e),r=new proto.user.SignupRequest;return proto.user.SignupRequest.deserializeBinaryFromReader(r,t)},proto.user.SignupRequest.deserializeBinaryFromReader=function(e,t){while(t.nextField()){if(t.isEndGroup())break;var r=t.getFieldNumber();switch(r){case 1:var n=t.readString();e.setEmail(n);break;case 2:n=t.readString();e.setPwd(n);break;default:t.skipField();break}}return e},proto.user.SignupRequest.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return proto.user.SignupRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.user.SignupRequest.serializeBinaryToWriter=function(e,t){var r=void 0;r=e.getEmail(),r.length>0&&t.writeString(1,r),r=e.getPwd(),r.length>0&&t.writeString(2,r)},proto.user.SignupRequest.prototype.getEmail=function(){return n.Message.getFieldWithDefault(this,1,"")},proto.user.SignupRequest.prototype.setEmail=function(e){return n.Message.setProto3StringField(this,1,e)},proto.user.SignupRequest.prototype.getPwd=function(){return n.Message.getFieldWithDefault(this,2,"")},proto.user.SignupRequest.prototype.setPwd=function(e){return n.Message.setProto3StringField(this,2,e)},n.Message.GENERATE_TO_OBJECT&&(proto.user.ResetRequest.prototype.toObject=function(e){return proto.user.ResetRequest.toObject(e,this)},proto.user.ResetRequest.toObject=function(e,t){var r={email:n.Message.getFieldWithDefault(t,1,""),pwd:n.Message.getFieldWithDefault(t,2,""),totp:n.Message.getFieldWithDefault(t,3,"")};return e&&(r.$jspbMessageInstance=t),r}),proto.user.ResetRequest.deserializeBinary=function(e){var t=new n.BinaryReader(e),r=new proto.user.ResetRequest;return proto.user.ResetRequest.deserializeBinaryFromReader(r,t)},proto.user.ResetRequest.deserializeBinaryFromReader=function(e,t){while(t.nextField()){if(t.isEndGroup())break;var r=t.getFieldNumber();switch(r){case 1:var n=t.readString();e.setEmail(n);break;case 2:n=t.readString();e.setPwd(n);break;case 3:n=t.readString();e.setTotp(n);break;default:t.skipField();break}}return e},proto.user.ResetRequest.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return proto.user.ResetRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.user.ResetRequest.serializeBinaryToWriter=function(e,t){var r=void 0;r=e.getEmail(),r.length>0&&t.writeString(1,r),r=e.getPwd(),r.length>0&&t.writeString(2,r),r=e.getTotp(),r.length>0&&t.writeString(3,r)},proto.user.ResetRequest.prototype.getEmail=function(){return n.Message.getFieldWithDefault(this,1,"")},proto.user.ResetRequest.prototype.setEmail=function(e){return n.Message.setProto3StringField(this,1,e)},proto.user.ResetRequest.prototype.getPwd=function(){return n.Message.getFieldWithDefault(this,2,"")},proto.user.ResetRequest.prototype.setPwd=function(e){return n.Message.setProto3StringField(this,2,e)},proto.user.ResetRequest.prototype.getTotp=function(){return n.Message.getFieldWithDefault(this,3,"")},proto.user.ResetRequest.prototype.setTotp=function(e){return n.Message.setProto3StringField(this,3,e)},n.Message.GENERATE_TO_OBJECT&&(proto.user.DeleteRequest.prototype.toObject=function(e){return proto.user.DeleteRequest.toObject(e,this)},proto.user.DeleteRequest.toObject=function(e,t){var r={pwd:n.Message.getFieldWithDefault(t,1,""),totp:n.Message.getFieldWithDefault(t,2,"")};return e&&(r.$jspbMessageInstance=t),r}),proto.user.DeleteRequest.deserializeBinary=function(e){var t=new n.BinaryReader(e),r=new proto.user.DeleteRequest;return proto.user.DeleteRequest.deserializeBinaryFromReader(r,t)},proto.user.DeleteRequest.deserializeBinaryFromReader=function(e,t){while(t.nextField()){if(t.isEndGroup())break;var r=t.getFieldNumber();switch(r){case 1:var n=t.readString();e.setPwd(n);break;case 2:n=t.readString();e.setTotp(n);break;default:t.skipField();break}}return e},proto.user.DeleteRequest.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return proto.user.DeleteRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.user.DeleteRequest.serializeBinaryToWriter=function(e,t){var r=void 0;r=e.getPwd(),r.length>0&&t.writeString(1,r),r=e.getTotp(),r.length>0&&t.writeString(2,r)},proto.user.DeleteRequest.prototype.getPwd=function(){return n.Message.getFieldWithDefault(this,1,"")},proto.user.DeleteRequest.prototype.setPwd=function(e){return n.Message.setProto3StringField(this,1,e)},proto.user.DeleteRequest.prototype.getTotp=function(){return n.Message.getFieldWithDefault(this,2,"")},proto.user.DeleteRequest.prototype.setTotp=function(e){return n.Message.setProto3StringField(this,2,e)},n.Message.GENERATE_TO_OBJECT&&(proto.user.TotpRequest.prototype.toObject=function(e){return proto.user.TotpRequest.toObject(e,this)},proto.user.TotpRequest.toObject=function(e,t){var r={action:n.Message.getFieldWithDefault(t,1,0),pwd:n.Message.getFieldWithDefault(t,2,""),totp:n.Message.getFieldWithDefault(t,3,"")};return e&&(r.$jspbMessageInstance=t),r}),proto.user.TotpRequest.deserializeBinary=function(e){var t=new n.BinaryReader(e),r=new proto.user.TotpRequest;return proto.user.TotpRequest.deserializeBinaryFromReader(r,t)},proto.user.TotpRequest.deserializeBinaryFromReader=function(e,t){while(t.nextField()){if(t.isEndGroup())break;var r=t.getFieldNumber();switch(r){case 1:var n=t.readEnum();e.setAction(n);break;case 2:n=t.readString();e.setPwd(n);break;case 3:n=t.readString();e.setTotp(n);break;default:t.skipField();break}}return e},proto.user.TotpRequest.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return proto.user.TotpRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.user.TotpRequest.serializeBinaryToWriter=function(e,t){var r=void 0;r=e.getAction(),0!==r&&t.writeEnum(1,r),r=e.getPwd(),r.length>0&&t.writeString(2,r),r=e.getTotp(),r.length>0&&t.writeString(3,r)},proto.user.TotpRequest.actions={ENABLE:0,DISABLE:1},proto.user.TotpRequest.prototype.getAction=function(){return n.Message.getFieldWithDefault(this,1,0)},proto.user.TotpRequest.prototype.setAction=function(e){return n.Message.setProto3EnumField(this,1,e)},proto.user.TotpRequest.prototype.getPwd=function(){return n.Message.getFieldWithDefault(this,2,"")},proto.user.TotpRequest.prototype.setPwd=function(e){return n.Message.setProto3StringField(this,2,e)},proto.user.TotpRequest.prototype.getTotp=function(){return n.Message.getFieldWithDefault(this,3,"")},proto.user.TotpRequest.prototype.setTotp=function(e){return n.Message.setProto3StringField(this,3,e)},n.Message.GENERATE_TO_OBJECT&&(proto.user.Empty.prototype.toObject=function(e){return proto.user.Empty.toObject(e,this)},proto.user.Empty.toObject=function(e,t){var r={};return e&&(r.$jspbMessageInstance=t),r}),proto.user.Empty.deserializeBinary=function(e){var t=new n.BinaryReader(e),r=new proto.user.Empty;return proto.user.Empty.deserializeBinaryFromReader(r,t)},proto.user.Empty.deserializeBinaryFromReader=function(e,t){while(t.nextField()){if(t.isEndGroup())break;var r=t.getFieldNumber();switch(r){default:t.skipField();break}}return e},proto.user.Empty.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return proto.user.Empty.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.user.Empty.serializeBinaryToWriter=function(e,t){},o.object.extend(t,proto.user)},ac83:function(e,t,r){},b4e2:function(e,t,r){"use strict";r("ac83")},bef9:function(e,t,r){"use strict";r("373b")},c652:function(e,t,r){e.exports=r.p+"img/logo.theme-dark.66f21e47.png"},cd49:function(e,t,r){"use strict";r.r(t),r.d(t,"SignOn",(function(){return T})),r.d(t,"RauthService",(function(){return je})),r.d(t,"include",(function(){return $e}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o={class:"container"},s={class:"card shadowed"},i=Object(n["f"])("span",{class:"inflate"},null,-1),a=Object(n["g"])(" hello world ");function u(e,t,r,u,l,c){var p=Object(n["s"])("warning"),d=Object(n["s"])("banner"),h=Object(n["s"])("sign-on"),f=Object(n["s"])("options"),g=Object(n["s"])("navbar");return Object(n["n"])(),Object(n["e"])(n["a"],null,[Object(n["f"])("div",o,[e.warning?(Object(n["n"])(),Object(n["c"])(p,Object(n["j"])({key:0,class:"warning-message"},e.warning,{onClose:t[0]||(t[0]=function(t){return e.quitWarning(e.index)})}),null,16)):Object(n["d"])("",!0),Object(n["f"])("div",s,[Object(n["h"])(d,{version:"Alpha",title:e.bannerTitle,icon:"logo.".concat(e.theme,".png")},null,8,["title","icon"]),Object(n["h"])(h,{title:e.submitTitle,loading:e.fetching,email:e.showEmailField,username:e.showUsernameField,password:e.showPasswordField,totp:e.showTotpField,"disable-errors":!e.isSignup,onSubmit:e.onSubmit},null,8,["title","loading","email","username","password","totp","disable-errors","onSubmit"]),e.showOptions?(Object(n["n"])(),Object(n["c"])(f,Object(n["l"])(Object(n["j"])({key:0},e.optionsProps)),null,16)):Object(n["d"])("",!0)])]),i,Object(n["h"])(g,{class:"footer",onThemeSwitch:e.onSwitchTheme,checked:e.theme==e.THEME_DARK},{default:Object(n["y"])((function(){return[a]})),_:1},8,["onThemeSwitch","checked"])],64)}var l=r("ade3"),c=r("1da1"),p=(r("96cf"),r("ac1f"),r("00b4"),r("466d"),r("d3b7"),r("159b"),r("1276"),r("5319"),{key:2,class:"center-content"});function d(e,t,r,o,s,i){var a=Object(n["s"])("regular-field"),u=Object(n["s"])("discret-field"),l=Object(n["s"])("submit-button");return Object(n["n"])(),Object(n["e"])("div",null,[e.email?(Object(n["n"])(),Object(n["c"])(a,{key:0,class:Object(n["k"])(["field",{separator:!e.emailErrorMessage}]),placeholder:e.usernameFieldPlaceholder,error:e.emailErrorMessage,onInput:t[0]||(t[0]=function(t){return e.onInput(t,e.FIELD_USERNAME)}),large:""},null,8,["class","placeholder","error"])):Object(n["d"])("",!0),e.password?(Object(n["n"])(),Object(n["c"])(a,{key:1,class:Object(n["k"])(["field separator",{separator:!e.passwordErrorMessage}]),placeholder:"Password",type:"password",ref:e.FIELD_PASSWORD,error:e.passwordErrorMessage,onInput:t[1]||(t[1]=function(t){return e.onInput(t,e.FIELD_PASSWORD)}),large:""},null,8,["class","error"])):Object(n["d"])("",!0),e.totp?(Object(n["n"])(),Object(n["e"])("div",p,[Object(n["h"])(u,{lenght:e.TOTP_LENGTH,class:"tight separator larger",placeholder:"One time password",onInput:t[2]||(t[2]=function(t){return e.onInput(t,e.FIELD_TOTP)})},null,8,["lenght"])])):Object(n["d"])("",!0),Object(n["h"])(l,{disabled:!e.isValid,loading:e.loading,onSubmit:t[3]||(t[3]=function(t){return e.onSubmit()}),large:""},{default:Object(n["y"])((function(){return[Object(n["g"])(Object(n["t"])(e.title),1)]})),_:1},8,["disabled","loading"])])}r("bc01"),r("25f0"),r("b64b");var h,f,g="username",b="password",m="totp",y=6,R="submit",O=(h={},Object(l["a"])(h,g,/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/),Object(l["a"])(h,b,/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),h),v=(f={},Object(l["a"])(f,g,"Invalid email address."),Object(l["a"])(f,b,"A secure password must include at least one upper and lowercase letters, as well as numbers and special characters."),f),w=Object(n["i"])({name:"SignOn",emits:[R],props:{title:String,totp:Boolean,username:{type:Boolean,default:!0},email:{type:Boolean,default:!0},password:{type:Boolean,default:!0},loading:Boolean,disableErrors:Boolean},setup:function(){return{FIELD_USERNAME:g,FIELD_PASSWORD:b,FIELD_TOTP:m,TOTP_LENGTH:y}},data:function(){var e={};return e[g]=!this.username||!this.email,e[b]=!this.password,e[m]=!this.totp,{isValid:!1,fieldsStatus:e,fieldsValues:{}}},computed:{usernameFieldPlaceholder:function(){return this.email&&this.username?"Username or email":this.username?"Username":this.email?"Email":""},emailErrorMessage:function(){return this.disableErrors||!this.fieldsValues[g]||this.fieldsStatus[g]?"":v[g]},passwordErrorMessage:function(){return this.disableErrors||!this.fieldsValues[b]||this.fieldsStatus[b]?"":v[b]}},methods:{hash:function(e){for(var t=0,r=0;r<e.length;r++)t=Math.imul(31,t)+e.charCodeAt(r)|0;return t.toString(32)},validateEmail:function(e){this.fieldsStatus[g]=!!e.length&&(this.username||O[g].test(e))},validatePassword:function(e){this.fieldsStatus[b]=!!e.length&&O[b].test(e)},validateTotp:function(e){this.fieldsStatus[m]=e.length==y},onInput:function(e,t){var r,n=this;this.fieldsValues[t]=e;var o=(r={},Object(l["a"])(r,g,this.validateEmail),Object(l["a"])(r,b,this.validatePassword),Object(l["a"])(r,m,this.validateTotp),r);o[t](e),this.isValid=!Object.keys(this.fieldsStatus).some((function(e){return!n.fieldsStatus[e]}))},onSubmit:function(){var e=this;if(this.isValid){var t={};Object.keys(this.fieldsValues).forEach((function(r){var n=e.fieldsValues[r];r==b&&(n=e.hash(n)),t[r]=n})),this.$emit(R,t)}}}}),E=(r("bef9"),r("6b0d")),j=r.n(E);const S=j()(w,[["render",d],["__scopeId","data-v-702d94dc"]]);var T=S,M=["src"];function q(e,t,o,s,i,a){return Object(n["n"])(),Object(n["e"])("div",null,[Object(n["f"])("img",{src:r("1771")("./".concat(e.icon))},null,8,M),Object(n["f"])("span",null,[Object(n["g"])(Object(n["t"])(e.title),1),Object(n["f"])("small",null,Object(n["t"])(e.version),1)])])}var _=Object(n["i"])({name:"Banner",props:{title:String,version:String,icon:String}});r("529f");const B=j()(_,[["render",q],["__scopeId","data-v-24581798"]]);var D=B,F=["href"],k={key:0,class:"separator"},I=["href"];function L(e,t,r,o,s,i){return Object(n["n"])(),Object(n["e"])("div",null,[Object(n["f"])("a",{href:e.secondaryHref},Object(n["t"])(e.secondary),9,F),e.hasBothOptions?(Object(n["n"])(),Object(n["e"])("span",k,"|")):Object(n["d"])("",!0),Object(n["f"])("a",{class:"primary",href:e.primaryHref},Object(n["t"])(e.primary),9,I)])}var N=Object(n["i"])({name:"Options",props:{primary:String,secondary:String,primaryHref:{type:String,default:"#"},secondaryHref:{type:String,default:"#"}},computed:{hasBothOptions:function(){return!!this.primary&&!!this.secondary}}});r("9dcf");const z=j()(N,[["render",L],["__scopeId","data-v-416fa95f"]]);var P=z,W=function(e){return Object(n["p"])("data-v-782d98f9"),e=e(),Object(n["o"])(),e},A={class:"warning"},x=W((function(){return Object(n["f"])("div",{class:"flag"},null,-1)})),C={class:"content"},U={class:"text"},G={key:0},V={key:1},H=W((function(){return Object(n["f"])("span",{class:"space-between"},null,-1)}));function $(e,t,r,o,s,i){return Object(n["n"])(),Object(n["e"])("div",A,[x,Object(n["f"])("div",C,[Object(n["f"])("div",U,[e.title?(Object(n["n"])(),Object(n["e"])("span",G,Object(n["t"])(e.title),1)):Object(n["d"])("",!0),e.text?(Object(n["n"])(),Object(n["e"])("p",V,Object(n["t"])(e.text),1)):Object(n["d"])("",!0)]),H,Object(n["f"])("button",{class:"bx bx-x",onClick:t[0]||(t[0]=function(){return e.onCloseClicked&&e.onCloseClicked.apply(e,arguments)})})])])}r("a9e3"),r("b65f"),r("99af");var J="close",Y=Object(n["i"])({name:"Warning",emits:[J],props:{title:String,text:String,color:{type:String,default:"var(--color-accent)"},alpha:{type:Number,default:8}},computed:{backgroundColor:function(){var e=Math.trunc(2.55*this.alpha).toString(16);return"".concat(this.color).concat(e)}},methods:{onCloseClicked:function(){this.$emit(J)}}}),K=function(){Object(n["u"])((function(e){return{"01936270":e.color,"4f66dbfa":e.backgroundColor}}))},Z=Y.setup;Y.setup=Z?function(e,t){return K(),Z(e,t)}:K;var X=Y;r("b4e2");const Q=j()(X,[["render",$],["__scopeId","data-v-782d98f9"]]);var ee=Q,te=function(e){return Object(n["p"])("data-v-7bd246da"),e=e(),Object(n["o"])(),e},re={class:"navbar shadowed"},ne=te((function(){return Object(n["f"])("div",{class:"side-container"},null,-1)})),oe={class:"side-container"};function se(e,t,r,o,s,i){var a=Object(n["s"])("switch-button");return Object(n["n"])(),Object(n["e"])("div",re,[ne,Object(n["f"])("div",oe,[Object(n["h"])(a,{onSwitch:e.spreadEvent,checked:e.checked,color:"var(--color-accent)"},null,8,["onSwitch","checked"])])])}var ie="theme-switch",ae=Object(n["i"])({name:"Navbar",emits:[ie],props:{checked:Boolean},methods:{spreadEvent:function(e){this.$emit(ie,e)}}});r("f111");const ue=j()(ae,[["render",se],["__scopeId","data-v-7bd246da"]]);var le,ce=ue,pe=r("d4ec"),de=r("bee2"),he=r("4f18"),fe=r("a8a1"),ge=function(){function e(t,r,n){Object(pe["a"])(this,e),this.methodInfoSignup=new he["MethodDescriptor"]("/user.User/Signup",he["MethodType"].UNARY,fe["SignupRequest"],fe["Empty"],(function(e){return e.serializeBinary()}),fe["Empty"].deserializeBinary),this.methodInfoReset=new he["MethodDescriptor"]("/user.User/Reset",he["MethodType"].UNARY,fe["ResetRequest"],fe["Empty"],(function(e){return e.serializeBinary()}),fe["Empty"].deserializeBinary),this.methodInfoDelete=new he["MethodDescriptor"]("/user.User/Delete",he["MethodType"].UNARY,fe["DeleteRequest"],fe["Empty"],(function(e){return e.serializeBinary()}),fe["Empty"].deserializeBinary),this.methodInfoTotp=new he["MethodDescriptor"]("/user.User/Totp",he["MethodType"].UNARY,fe["TotpRequest"],fe["Empty"],(function(e){return e.serializeBinary()}),fe["Empty"].deserializeBinary),n||(n={}),r||(r={}),n["format"]="text",this.client_=new he["GrpcWebClientBase"](n),this.hostname_=t,this.credentials_=r,this.options_=n}return Object(de["a"])(e,[{key:"signup",value:function(e,t,r){return void 0!==r?this.client_.rpcCall(this.hostname_+"/user.User/Signup",e,t||{},this.methodInfoSignup,r):this.client_.unaryCall(this.hostname_+"/user.User/Signup",e,t||{},this.methodInfoSignup)}},{key:"reset",value:function(e,t,r){return void 0!==r?this.client_.rpcCall(this.hostname_+"/user.User/Reset",e,t||{},this.methodInfoReset,r):this.client_.unaryCall(this.hostname_+"/user.User/Reset",e,t||{},this.methodInfoReset)}},{key:"delete",value:function(e,t,r){return void 0!==r?this.client_.rpcCall(this.hostname_+"/user.User/Delete",e,t||{},this.methodInfoDelete,r):this.client_.unaryCall(this.hostname_+"/user.User/Delete",e,t||{},this.methodInfoDelete)}},{key:"totp",value:function(e,t,r){return void 0!==r?this.client_.rpcCall(this.hostname_+"/user.User/Totp",e,t||{},this.methodInfoTotp,r):this.client_.unaryCall(this.hostname_+"/user.User/Totp",e,t||{},this.methodInfoTotp)}}]),e}(),be=r("9cc6"),me=function(){function e(t,r,n){Object(pe["a"])(this,e),this.methodInfoLogin=new he["MethodDescriptor"]("/session.Session/Login",he["MethodType"].UNARY,be["LoginRequest"],be["Empty"],(function(e){return e.serializeBinary()}),be["Empty"].deserializeBinary),this.methodInfoLogout=new he["MethodDescriptor"]("/session.Session/Logout",he["MethodType"].UNARY,be["Empty"],be["Empty"],(function(e){return e.serializeBinary()}),be["Empty"].deserializeBinary),n||(n={}),r||(r={}),n["format"]="text",this.client_=new he["GrpcWebClientBase"](n),this.hostname_=t,this.credentials_=r,this.options_=n}return Object(de["a"])(e,[{key:"login",value:function(e,t,r){return void 0!==r?this.client_.rpcCall(this.hostname_+"/session.Session/Login",e,t||{},this.methodInfoLogin,r):this.client_.unaryCall(this.hostname_+"/session.Session/Login",e,t||{},this.methodInfoLogin)}},{key:"logout",value:function(e,t,r){return void 0!==r?this.client_.rpcCall(this.hostname_+"/session.Session/Logout",e,t||{},this.methodInfoLogout,r):this.client_.unaryCall(this.hostname_+"/session.Session/Logout",e,t||{},this.methodInfoLogout)}}]),e}();(function(e){e["ERR_UNKNOWN"]="E001",e["ERR_NOT_FOUND"]="E002",e["ERR_NOT_AVAILABLE"]="E003",e["ERR_UNAUTHORIZED"]="E004",e["ERR_INVALID_TOKEN"]="E005",e["ERR_INVALID_FORMAT"]="E006",e["ERR_INVALID_HEADER"]="E007",e["ERR_WRONG_CREDENTIALS"]="E008",e["ERR_REGEX_NOT_MATCH"]="E009"})(le||(le={}));var ye,Re,Oe,ve,we,Ee=function(){function e(t,r){var n=this;Object(pe["a"])(this,e),this.handleResponse=function(e,t){e||n.handler.onResponseSuccess(t)},this.handleResponseStatus=function(e){e.code!==he["StatusCode"].OK&&n.handler.onResponseError(e.details)},this.handleResponseMetadata=function(e){e&&n.handler.onResponseMetadata(e)},this.userClient=new ge(t,null,null),this.sessionClient=new me(t,null,null),this.handler=r,this.handleResponse=this.handleResponse.bind(this),this.handleResponseStatus=this.handleResponseStatus.bind(this),this.handleResponseMetadata=this.handleResponseMetadata.bind(this)}return Object(de["a"])(e,[{key:"signup",value:function(e,t,r){var n=new fe["SignupRequest"];n.setEmail(e),n.setPwd(t);var o=this.userClient.signup(n,r,this.handleResponse);o.on("status",this.handleResponseStatus),o.on("metadata",this.handleResponseMetadata)}},{key:"login",value:function(e,t,r,n){var o=new be["LoginRequest"];o.setIdent(e),o.setPwd(t),o.setTotp(r);var s=this.sessionClient.login(o,n,this.handleResponse);s.on("status",this.handleResponseStatus),s.on("metadata",this.handleResponseMetadata)}},{key:"reset",value:function(e,t,r,n){var o=new fe["ResetRequest"];o.setEmail(e),o.setTotp(r),o.setPwd(t);var s=this.userClient.reset(o,n,this.handleResponse);s.on("status",this.handleResponseStatus),s.on("metadata",this.handleResponseMetadata)}}]),e}(),je=Ee,Se=/^\/signup$/,Te=/^\/$|\/login$/,Me=/^\/reset$/,qe=/\?\w.*/,_e="/signup",Be="/login",De="/reset",Fe=(ye={},Object(l["a"])(ye,_e,"Sign up on Alvidir"),Object(l["a"])(ye,Be,"Log in Alvidir"),Object(l["a"])(ye,De,"Recover account"),ye),ke=(Re={},Object(l["a"])(Re,_e,"Sign up"),Object(l["a"])(Re,Be,"Log in"),Object(l["a"])(Re,De,"Reset"),Re),Ie=(null!==(Oe=window.location.href.match(qe))&&void 0!==Oe?Oe:[""])[0],Le=(ve={},Object(l["a"])(ve,_e,{secondary:"Already have an account? Log in!",secondaryHref:"".concat(Be).concat(Ie)}),Object(l["a"])(ve,Be,{primary:Fe[_e],primaryHref:"".concat(_e).concat(Ie),secondary:"Forgot password?",secondaryHref:"".concat(De).concat(Ie)}),Object(l["a"])(ve,De,{secondary:"Return to the log in page",secondaryHref:"".concat(Be).concat(Ie)}),ve),Ne=(we={},Object(l["a"])(we,le.ERR_UNKNOWN,{title:"Something bad did happen",text:"We could not proceed with your request, please try again.",color:"var(--color-red)"}),Object(l["a"])(we,le.ERR_NOT_FOUND,{title:"Forbidden",text:"You do not have permissions to execute this action. Make sure you are properly authenticated.",color:"var(--color-red)"}),Object(l["a"])(we,le.ERR_NOT_AVAILABLE,{title:"Verification required",text:"We just sent to you a verification email. Use the link provided there to complete the action."}),Object(l["a"])(we,le.ERR_UNAUTHORIZED,{title:"2FA required",text:"We need you to provide the 6-code in order to proceed with your request."}),Object(l["a"])(we,le.ERR_INVALID_TOKEN,{title:"Forbidden",text:"You do not have permissions to execute this action. Make sure you are properly authenticated.",color:"var(--color-red)"}),Object(l["a"])(we,le.ERR_INVALID_FORMAT,{title:"Invalid format",text:"Some of the credentials you just provided do not have the expected format. Make sure you wrote them properly.",color:"var(--color-red)"}),Object(l["a"])(we,le.ERR_INVALID_HEADER,{title:"Forbidden",text:"You do not have permissions to execute this action. Make sure you are properly authenticated.",color:"var(--color-red)"}),Object(l["a"])(we,le.ERR_WRONG_CREDENTIALS,{title:"Invalid username or password",text:"We could not identify you. Make sure all your credentials are well written.",color:"var(--color-red)"}),we);r("498a");function ze(e,t,r,n){var o="";if(r){var s=new Date;s.setTime(s.getTime()+r),o="; expires="+s.toUTCString()}var i=n?"; path=".concat(n):"";document.cookie="".concat(e,"=").concat(t||"").concat(o).concat(i)}var Pe="theme-light",We="theme-dark",Ae=Object(n["i"])({name:"App",components:{Banner:D,SignOn:T,Options:P,Warning:ee,Navbar:ce},setup:function(){return{THEME_DARK:We}},data:function(){return{theme:Pe,fetching:!1,disableEmail:!1,disablePassword:!1,disableTotp:!0,rauthService:new je("http://auth.alvidir.com:8080/rpc",this),warning:void 0}},created:function(){this.token&&Se.test(window.location.pathname)&&this.onSubmit({})},computed:{token:function(){var e;if(Ie){var t={};return null===(e=Ie.match(/\w=\w*/))||void 0===e||e.forEach((function(e){var r=e.split("=");t[r[0]]=r[1]})),t["t"]}},redirect:function(){var e;if(Ie){var t={};return null===(e=Ie.match(/\w=\w*/))||void 0===e||e.forEach((function(e){var r=e.split("=");t[r[0]]=r[1]})),t["r"]}},isSignup:function(){return Se.test(window.location.pathname)},bannerTitle:function(){var e,t=window.location.pathname;return this.token&&Me.test(t)?Fe[t]:null!==(e=Fe[t])&&void 0!==e?e:Fe[Be]},submitTitle:function(){var e;return null!==(e=ke[window.location.pathname])&&void 0!==e?e:ke[Be]},optionsProps:function(){var e;return null!==(e=Le[window.location.pathname])&&void 0!==e?e:Le[Be]},showOptions:function(){var e=window.location.pathname;return this.disableTotp&&!this.fetching&&(Se.test(e)||Te.test(e)||Me.test(e))},showEmailField:function(){var e=window.location.pathname;return this.disableTotp&&!this.disableEmail&&(Se.test(e)||Te.test(e)||Me.test(e)&&!this.token)},showUsernameField:function(){return!this.disableEmail&&Te.test(window.location.pathname)},showPasswordField:function(){var e=window.location.pathname;return this.disableTotp&&!this.disablePassword&&(Se.test(e)||Te.test(e)||Me.test(e)&&!!this.token)},showTotpField:function(){return!this.disableTotp}},methods:{onSubmit:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var n,o,s,i,a,u,c,p,d,h,f;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.fetching=!0,a=null!==(n=e[g])&&void 0!==n?n:void 0,u=null!==(o=e[b])&&void 0!==o?o:void 0,c=null!==(s=e[m])&&void 0!==s?s:void 0,p={},t.token&&(d="authorization",p[d]=t.token),i={},Object(l["a"])(i,_e,(function(){return t.rauthService.signup(a,u,p)})),Object(l["a"])(i,Be,(function(){return t.rauthService.login(a,u,c,p)})),Object(l["a"])(i,De,(function(){return t.rauthService.reset(a,u,c,p)})),h=i,f=window.location.pathname,Te.test(f)&&(f=Be),h[f]();case 10:case"end":return r.stop()}}),r)})))()},performRedirect:function(){var e,t=null!==(e=this.redirect)&&void 0!==e?e:"http://google.com";window.location.replace(t)},onResponseError:function(e){this.fetching=!1,e!=le.ERR_UNAUTHORIZED?(this.warning=Ne[e],this.warning||(this.warning=Ne[le.ERR_UNKNOWN],this.warning&&(this.warning.text=e))):this.disableTotp=!1},onResponseSuccess:function(e){this.fetching=!1;var t=window.location.pathname;Me.test(t)?window.location.href=Be:this.performRedirect()},onResponseMetadata:function(e){var t="authorization";if(e[t]){var r="alvidir::session::token";ze(r,e[t])}},quitWarning:function(){this.warning=void 0},onSwitchTheme:function(){var e=this.theme,t=We;this.theme===We&&(t=Pe),document.getElementsByTagName("body")[0].classList.replace(e,t),this.theme=t}},mounted:function(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.getElementsByTagName("body")[0].classList.add("theme-dark"),this.theme=We):(document.getElementsByTagName("body")[0].classList.add("theme-light"),this.theme=Pe)}});r("00b6");const xe=j()(Ae,[["render",u]]);var Ce=xe,Ue=r("beb1"),Ge=r("4557"),Ve=Object(n["b"])(Ce);Object(Ue["a"])(Ve),Object(Ge["a"])(Ve),Ve.mount("#app");var He="sign-on";function $e(e){e.component(He,T)}},dd53:function(e,t,r){},e351:function(e,t,r){},f111:function(e,t,r){"use strict";r("dd53")}});
//# sourceMappingURL=app.e8f919af.js.map