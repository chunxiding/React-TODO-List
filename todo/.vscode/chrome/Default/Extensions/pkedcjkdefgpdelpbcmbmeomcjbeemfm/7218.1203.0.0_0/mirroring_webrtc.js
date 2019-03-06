'use strict';var Dka={TAB:0,Rj:1,mn:2},Y$=function(a){Ab("MediaRouter.WebRtc.Start.Success",a,Dka)};var Z$=function(a,b){Jg.call(this,b);this.w=a;this.g=new Bb;this.b=nw(b.id);this.l=new Bb;this.B=!1;this.o=null;this.u=!1;this.A=this.h=null;Eka(this);Fka(this);this.b.sendMessage(new Pg("GET_TURN_CREDENTIALS"))};n(Z$,Jg);
Z$.prototype.start=function(a){var b=this;return this.g.b.then(function(c){if(c.b)return Promise.reject(new Mf("Mirroring already started"));if(b.o)return Promise.reject(new Mf("Session permanently stopped"));b.h=new qb("MediaRouter.WebRtc.Session.Launch");c.Z.addStream(a);c.start();return b.l.b})};
Z$.prototype.stop=function(){var a=this;this.l.reject(new Mf("Session stop requested."));this.A&&(this.A.b(),this.A=null);if(this.o)return this.o;this.u=this.B=!1;this.h=null;return this.o=this.g.b.then(function(a){a.stop()}).then(function(){return a.b.Ta()}).catch(function(b){a.b.Ta();throw b;})};
var Eka=function(a){a.b.onMessage=function(b){if(!b.type)throw Error("Message has no type.");switch(b.type){case "TURN_CREDENTIALS":a.g.resolve(new Ug(a.f.id,b.data.credentials));break;case "ANSWER":a.g.b.then(function(a){bh(a,b.data)});break;case "KNOCK_ANSWER":a.u=!0;a.g.b.then(function(a){bh(a,b.data)});break;case "STOP":a.l.reject(new Mf("Stop signal received"));a.stop();break;default:throw new Mf("Unknown message type: "+b.type);}}},Fka=function(a){a.g.b.then(function(b){Yg(b,function(b){a.b.sendMessage(new Pg("OFFER",
new Rg(b,a.w,Sg)))});Zg(b,function(b){b=Qg(b);a.b.sendMessage(b)});Vg(b,function(){a.B=!0;a.b.sendMessage(new Pg("SESSION_START_SUCCESS"));!a.u&&a.h&&a.h.b();a.h=null;a.A=new wb("MediaRouter.WebRtc.Session.Length");a.l.resolve(a)});Xg(b,function(){a.b.sendMessage(new Pg("SESSION_END"))});Wg(b,function(b){a.B||a.l.reject(b);a.b.sendMessage(new Pg("SESSION_FAILURE"))})})};var $$=function(){yg.call(this,"webrtc")};n($$,yg);g=$$.prototype;g.ih=function(a,b){return new Z$(a,b)};g.Jg=function(){Y$(0)};g.Gg=function(){Y$(1)};g.Kh=function(){Y$(2)};g.Hg=function(){zb("MediaRouter.WebRtc.Session.End")};g.Jh=function(a){Ab("MediaRouter.WebRtc.Start.Failure",a,Lf)};g.Ig=function(){zb("MediaRouter.WebRtc.Stream.End")};var Gka=new $$;mg("mr.mirror.webrtc.WebRtcService",Gka);
