(this.webpackJsonpkindly_front_end=this.webpackJsonpkindly_front_end||[]).push([[0],{240:function(e,t,a){e.exports=a.p+"static/media/lovepalms_minified.cb992957.svg"},241:function(e,t,a){e.exports=a.p+"static/media/lovepalms.74439763.jpg"},243:function(e,t,a){e.exports=a(477)},249:function(e,t,a){},477:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(23),o=a.n(r),c=(a(248),a(249),a(35)),m=a(59),i=a(8),s=a(22),u=a(36),p=a(53),d=a.n(p),E="https://nnajnotk8l.execute-api.eu-west-1.amazonaws.com/TEST/neighbourhoodHelpBackendPython",b=a(487),h=a(483),f=a(488),_=a(489),g=a(25),k=a(94),y=a.n(k),j=a(478),v=a(479),q=a(480),w=g.a.div.withConfig({displayName:"LocationAutocomplete__Wrap",componentId:"sc-1n48u0o-0"})(["position:relative;"]),O=Object(g.a)(j.a).withConfig({displayName:"LocationAutocomplete__ListGroupOnTop",componentId:"sc-1n48u0o-1"})(["position:absolute;z-index:1000;"]),N=Object(g.a)(v.a).withConfig({displayName:"LocationAutocomplete__HandCursorListGroupItem",componentId:"sc-1n48u0o-2"})(["cursor:pointer;"]),x=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1],c={location:new window.google.maps.LatLng(49.8600624,15.5860745),radius:1e5,types:["address"]};return l.a.createElement(y.a,{value:r,onChange:o,onSelect:function(t){o(t),Object(k.geocodeByAddress)(t).then((function(e){return Object(k.getLatLng)(e[0])})).then((function(a){e.onAddressSelect({formatted_address:t,lat:a.lat,lng:a.lng})})).catch((function(e){return console.error("Error",e)}))},searchOptions:c},(function(t){var a=t.getInputProps,n=t.suggestions,r=t.getSuggestionItemProps,o=t.loading;return l.a.createElement(w,null,l.a.createElement(q.a,a({placeholder:e.placeholder,className:"location-search-input address-input"})),l.a.createElement(O,null,o&&l.a.createElement(N,null,"Loading..."),n.map((function(e){return l.a.createElement(N,Object.assign({key:"suggestion",color:e.active&&"info"},r(e)),l.a.createElement("span",null,e.description))}))))}))},S=a(40),z=a(481),C=Object(g.a)(z.a).withConfig({displayName:"PageWrap",componentId:"sc-1kq0b1s-0"})(["padding:66px 10px 10px 10px;"]),P=a(482),L=Object(g.a)(P.a).withConfig({displayName:"FormStandard__StdFormButton",componentId:"sc-1ulr9fc-0"})(["max-width:300px;"]),I=Object(g.a)(h.a).withConfig({displayName:"FormStandard__StdFormInfoCol",componentId:"sc-1ulr9fc-1"})(["max-width:700px;"]),R=Object(g.a)(h.a).withConfig({displayName:"FormStandard__StdFormCol",componentId:"sc-1ulr9fc-2"})(["max-width:600px;"]),T=a(501),V=a(484),F=a(485),D=a(486),M=function(e){var t=e.buttonLabel,a=e.title,n=e.body,r=e.className,o=e.isOpen,c=e.toggle;return l.a.createElement(T.a,{isOpen:o,toggle:c,className:r},l.a.createElement(V.a,{toggle:c},a),l.a.createElement(F.a,null,n),l.a.createElement(D.a,null,l.a.createElement(P.a,{color:"dark",onClick:c},t)))},A=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),c=Object(i.a)(o,2),m=c[0],p=c[1],g=function(){return p(!m)},k=u.a().shape({name:u.b().required("Chyb\xed jm\xe9no"),email:u.b().email("Neplatn\xfd email").required("Chyb\xed email"),phone_number:u.b(),request_topic:u.b().required("Chyb\xed p\u0159edm\u011bt"),request_description:u.b().required("Chyb\xed popis")});return l.a.createElement(C,null,l.a.createElement(M,{isOpen:m,toggle:g,title:"Title",body:"Te\u010f u\u017e jen sta\u010d\xed po\u010dkat ne\u017e se ti n\u011bkdo ozve! asldfkasjdlfk jsadfl dfk jalsfldskaj fa adlkfj Nap\u0159. M\xe1m 2 psy typu \u010divava kter\xe9 je pot\u0159eba ven\u010dit 2-kr\xe1t denn\u011b, r\xe1no a ve\u010de ",buttonLabel:"Dob\u0159e"}),l.a.createElement(b.a,{className:"justify-content-center mb-4"},l.a.createElement(I,null,l.a.createElement("h3",null,"S \u010d\xedm pot\u0159ebujete pomoci?"),l.a.createElement("p",null,"Ka\u017ed\xfd z n\xe1s se ob\u010das dostane do situace, kdy si nev\xed rady. Nebojte se a po\u017e\xe1dejte o pomoc. A\u0165 u\u017e se jedn\xe1 o v\xfdm\u011bnu \u017e\xe1rovky, p\u0159ivrt\xe1n\xed poli\u010dky, donesen\xed n\xe1kupu \u010di ven\u010den\xed psa. Pokus\xedme se v\xe1s propojit s lidmi z va\u0161eho okol\xed, kte\u0159\xed r\xe1di podaj\xed pomocnou ruku."))),l.a.createElement(b.a,null,l.a.createElement(h.a,null,l.a.createElement(s.c,{initialValues:{name:"",phone_number:"",email:"",request_topic:"",request_description:""},validationSchema:k,onSubmit:function(e){g();var t={api_name:"post_help_request",requester_name:e.name,requester_age:null,requester_email:e.email,requester_phone_number:e.phone_number,requester_address:a.formatted_address,requester_address_lat:a.lat,requester_address_lng:a.lng,request_topic:e.request_topic,request_details:e.request_description};console.log("Query Params = ",t),d.a.get(E,{params:t})}},(function(){return l.a.createElement(s.b,{className:"askhelp-form"},l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(R,null,l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"Jm\xe9no*",id:"name",name:"name",component:S.a,type:"text",placeholder:"Va\u0161e jm\xe9no a p\u0159\xedjmen\xed."})),l.a.createElement(f.a,null,l.a.createElement(_.a,{htmlFor:"requester_address"},"Adresa"),l.a.createElement(x,{id:"requester_address",onAddressSelect:r,placeholder:"Va\u0161e adresa nebude nikde zobrazena, pouze ur\u010d\xed lokalitu."})),l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"Email*",component:S.a,id:"email",name:"email",type:"text",placeholder:"Vypl\u0148te email, aby v\xe1s pomocn\xedci mohli kontaktovat."})),l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"Telefon",component:S.a,id:"phone_number",name:"phone_number",type:"text",placeholder:"Pokud chcete pomoc urychlit, m\u016f\u017eete vyplnit i telefon. "})),l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"P\u0159edm\u011bt*",component:S.a,id:"request_topic",name:"request_topic",type:"text",placeholder:"S \u010d\xedm pot\u0159ebujete pomoci?"})),l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"Popis*",component:S.a,id:"request_description",name:"request_description",type:"textarea",rows:"4",placeholder:"Popi\u0161t\u011b co nejp\u0159esn\u011bji o co se jedn\xe1, aby pomocn\xedk p\u0159i\u0161el p\u0159ipraven\xfd. Bude pot\u0159eba p\u0159in\xe9st n\xe1\u0159ad\xed?"})))),l.a.createElement(b.a,null,l.a.createElement(h.a,{align:"center"},l.a.createElement(L,{className:"btn-lg btn-dark btn-block submit-button",type:"submit"},"Poslat \u017e\xe1dost"))))})))))},B=a(490),W=a(491),J=a(492),K=a(493),G=a(494),H=function(e){Object(n.useEffect)((function(){}),[]);return l.a.createElement(B.a,{className:"my-3"},l.a.createElement(W.a,null,e.helpRequest.request_topic),l.a.createElement(J.a,null,l.a.createElement(K.a,null,new Date(e.helpRequest.request_create_timestamp).toLocaleDateString()),l.a.createElement(K.a,null,e.helpRequest.requester_address)),l.a.createElement(G.a,null,l.a.createElement(P.a,{color:"dark",onClick:function(){var t="/details/".concat(e.helpRequest.request_id);window.open(t)}},"Pomoct")))},Z=a(96),Q=Object(Z.withGoogleMap)((function(e){return Object(n.useEffect)((function(){}),[]),l.a.createElement(Z.GoogleMap,{defaultZoom:e.zoom,defaultCenter:e.center},e.helpRequests.map((function(t){return l.a.createElement(U,{helpRequest:t,link:e.link})})))})),U=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){}),[]),l.a.createElement(Z.Marker,{position:{lat:parseFloat(e.helpRequest.requester_address_lat),lng:parseFloat(e.helpRequest.requester_address_lng)},onClick:function(){return o(!r)}},r&&l.a.createElement(Z.InfoWindow,{options:{closeBoxURL:"",enableEventPropagation:!0}},l.a.createElement("div",null,l.a.createElement("h3",null,e.helpRequest.request_topic),l.a.createElement("h5",null,e.helpRequest.request_details),e.link?l.a.createElement("h6",null,"V\xedce informaci ",l.a.createElement(c.b,{to:"/details/".concat(e.helpRequest.request_id),target:"_blank"},"zde")):null)))},$=Q,X=a(237),Y=a.n(X),ee=function(e){return l.a.createElement("div",{style:{width:"20%",height:"20%",marginTop:"10%",marginLeft:"40%"}},l.a.createElement("h1",null,"Na\u010d\xedt\xe1n\xed..."),l.a.createElement(Y.a,{type:"spin",color:"black",height:"100%",width:"100%"}))},te=function(e){for(var t=e.rowsPerPage,a=e.totalRows,r=e.paginate,o=[],c=Object(n.useState)(1),m=Object(i.a)(c,2),s=m[0],u=m[1],p=1;p<=Math.ceil(a/t);p++)o.push(p);return l.a.createElement("nav",null,l.a.createElement("ul",{className:"pagination"},o.map((function(e){return l.a.createElement("li",{key:e,className:"page-item"},l.a.createElement("a",{onClick:function(){return u(t=e),void r(t);var t},href:"javascript:;",className:"page-link",style:e===s?{backgroundColor:"#2200CC",color:"white"}:null},e))}))))},ae=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),c=Object(i.a)(o,2),m=c[0],s=c[1],u=Object(n.useState)(!1),p=Object(i.a)(u,2),f=p[0],_=p[1],g=Object(n.useState)(1),k=Object(i.a)(g,2),y=k[0],j=k[1],v=Object(n.useState)(6),q=Object(i.a)(v,1)[0];Object(n.useEffect)((function(){_(!0),d.a.get(E,{params:{api_name:"get_help_requests",offset:0,row_count:1e3}}).then((function(e){r(e.data.result.help_requests),s(e.data.result.count),_(!1)})).catch((function(e){return console.error(e)}))}),[]);var w=y*q,O=w-q,N=a.slice(O,w);return l.a.createElement(C,null,l.a.createElement(b.a,null,l.a.createElement(h.a,{align:"center"},l.a.createElement("h3",null,"Celkem \u017e\xe1d\xe1 o pomoc ",m," lid\xed po cel\xe9 \u010cesk\xe9 Republice"))),l.a.createElement(b.a,null,l.a.createElement(h.a,null,l.a.createElement($,{zoom:7,center:{lat:49.8600624,lng:15.5860745},containerElement:l.a.createElement("div",{style:{height:"400px"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}}),helpRequests:a,link:!0}))),f?l.a.createElement(ee,null):l.a.createElement(b.a,null,N.map((function(e){return l.a.createElement(h.a,{md:"6",lg:"4",xl:"3"},l.a.createElement(H,{helpRequest:e}))}))),l.a.createElement(te,{rowsPerPage:q,totalRows:a.length,paginate:function(e){return j(e)}}))},ne=a(242),le=a(240),re=a.n(le),oe=a(241),ce=a.n(oe),me=g.a.img.withConfig({displayName:"LandingPage__Img100",componentId:"sypwfr-0"})(["width:100%;"]),ie=function(){return l.a.createElement(C,{fluid:!0},l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(h.a,{sm:"10",className:"my-auto py-5",align:"center"},l.a.createElement("h1",null,"Kindly"),l.a.createElement("h2",null,"Vz\xe1jemn\xe1 pomoc soused\u016f"),l.a.createElement("h4",null,"Tady bude uvodni text o Kindly, co to je atd.! bal bla Kindly je super a diky nemu muzete pomoct tem kteri to nejvic potrebuji. Pomozte hned ted!"))),l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(h.a,{sm:"6",xl:"4",align:"center"},l.a.createElement(B.a,{className:"my-5",style:{maxWidth:400}},l.a.createElement(J.a,null,"M\xe1te trochu \u010dasu a chcete ud\u011blat dobr\xfd skutek? Pod\xedvejte se s \u010d\xedm pot\u0159ebuj\xed pomoci lid\xe9 ve va\u0161em okol\xed."),l.a.createElement(G.a,null,l.a.createElement(c.b,{to:"/iwanttohelp"},l.a.createElement(P.a,{outline:!0,color:"secondary",size:"lg"},"Nab\xeddnout pomoc"))))),l.a.createElement(h.a,{sm:"6",xl:"4",className:"my-auto",align:"center"},l.a.createElement(B.a,{className:"my-5",style:{maxWidth:400}},l.a.createElement(J.a,null,"Pot\u0159ebujete don\xe9st n\xe1kup, doprovodit k l\xe9ka\u0159i, vyven\u010dit psa nebo t\u0159eba pomoc s technikou? Nejbote se po\u017e\xe1dat ty, co jsou v\xe1m nejbl\xed\u017ee."),l.a.createElement(G.a,null,l.a.createElement(c.b,{to:"/ineedhelp"},l.a.createElement(P.a,{outline:!0,color:"secondary",size:"lg"},"Po\u017e\xe1dat o pomoc")))))),l.a.createElement(ne.a,{src:re.a,afterInjection:function(e){e&&console.error(e)},loading:function(){return l.a.createElement(me,{src:ce.a})}}),l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(h.a,{sm:"10",className:"my-auto py-5",align:"center"},l.a.createElement("h4",null,"Tady je nejaky dalsi text. Tohle jsou nasi sponzori. Bla bla bla bla bla bla."," ",l.a.createElement("a",{href:"/feedback"},"Muzete nam taky pomoct!")," Dalsi kecy bla bla bla bla. Pomahejte si. Tecka. Lorem Ipsum. Cau Tommy, nechces pomoct vykopat nejaky kameni?"))))},se=(Object(g.a)(P.a).withConfig({displayName:"Feedback__MaxWidthButton",componentId:"sc-2momu4-0"})(["max-width:300px;"]),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],o=function(){return r(!a)},c=u.a().shape({requester_email:u.b().required("Chyb\xed email").email("Neplatn\xfd email").max(100,"Email je p\u0159\xedli\u0161 dlouh\xfd"),feedback_topic:u.b(),feedback_description:u.b().max(1e3,"Popis je p\u0159\xedli\u0161 dlouh\xfd").required("Chyb\xed popis")});return l.a.createElement(C,null,l.a.createElement(M,{isOpen:a,toggle:o,title:"Title",body:"D\xedky moc za feedback1 y Pokud jste odpov\u011bd\u011bl/a ANO na jakoukoli z v\xfd\u0161e polo\u017een\xfdch ot\xe1zek, tak pros\xedm nev\xe1hejte a vypl\u0148te formul\xe1\u0159\r n\xed\u017ee. Zabere V\xe1m to 2 minuty. Va\u0161e zp\u011btypu \u010divava kter\xe9 je pot\u0159eba ven\u010dit 2-kr\xe1t denn\u011b, r\xe1no a ve\u010de ",buttonLabel:"Nen\xed za\u010d"}),l.a.createElement(b.a,{className:"justify-content-center mb-4"},l.a.createElement(I,null,l.a.createElement("h3",null,"Pomozte i n\xe1m!"),l.a.createElement("p",null,"M\xe1te n\xe1pad na vylep\u0161en\xed aplikace nebo v\xe1m n\u011bco nefunguje jak m\xe1? Nev\xe1hejte n\xe1s kontaktovat. V\xe1\u017e\xedme si zp\u011btn\xe9 vazby a budeme r\xe1di, za jak\xe9koli relevantn\xed p\u0159ipom\xednky. ",l.a.createElement("b",null,"D\u011bkujeme.")))),l.a.createElement(b.a,null,l.a.createElement(h.a,null,l.a.createElement(s.c,{initialValues:{requester_email:"",requester_name:"",requester_surname:"",feedback_topic:"",feedback_description:""},validationSchema:c,onSubmit:function(e){o(),d.a.get(E,{params:{api_name:"post_feedback",email:e.requester_email,topic:e.feedback_topic,content:e.feedback_description}})}},(function(){return l.a.createElement(s.b,null,l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(R,null,l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"Jm\xe9no",name:"requester_name",type:"text",placeholder:"Va\u0161e jm\xe9no a p\u0159\xedjmen\xed.",component:S.a})),l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"Email*",name:"requester_email",type:"text",placeholder:"Vypl\u0148te email, abychom v\xe1s mohli kontaktovat.",component:S.a})),l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"P\u0159edm\u011bt",name:"feedback_topic",type:"text",placeholder:"O co se jedn\xe1?",component:S.a})),l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"Popis*",id:"feedback_description",name:"feedback_description",type:"textarea",rows:"4",placeholder:"Napi\u0161t\u011b n\xe1m zpr\xe1vu. Popi\u0161t\u011b v\xe1\u0161 n\xe1pad \u010di p\u0159ipom\xednku detailn\u011bji.\r D\u011bkujeme!",component:S.a})))),l.a.createElement(b.a,null,l.a.createElement(h.a,{align:"center"},l.a.createElement(L,{className:"btn-lg btn-dark btn-block submit-button",type:"submit"},"Poslat p\u0159ipom\xednku")," ")))})))))}),ue=a(495),pe=a(496),de=a(497),Ee=a(498),be=a(499),he=a(500),fe=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0];t[1];return l.a.createElement("div",null,l.a.createElement(ue.a,{color:"light",light:!0,expand:"md",fixed:"top"},l.a.createElement(pe.a,{tag:c.b,to:"/"},"Kindly"),l.a.createElement(de.a,{isOpen:a,navbar:!0},l.a.createElement(Ee.a,{className:"mr-auto",navbar:!0},l.a.createElement(be.a,null,l.a.createElement(he.a,{tag:c.b,to:"/iwanttohelp"},"Nab\xedz\xedm pomoc")),l.a.createElement(be.a,null,l.a.createElement(he.a,{tag:c.b,to:"/ineedhelp"},"\u017d\xe1d\xe1m o pomoc")),l.a.createElement(be.a,null,l.a.createElement(he.a,{tag:c.b,to:"/feedback"},"Kontakt"))))))},_e=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(""),m=Object(i.a)(c,2),s=m[0],u=m[1];return Object(n.useEffect)((function(){d.a.get(E,{params:{api_name:"get_help_request_for_id",request_id:e.match.params.request_id}}).then((function(e){var t=e.data.result;o(t),u("https://www.google.com/maps/dir/?api=1&destination=".concat(t.requester_address_lat,",").concat(t.requester_address_lng,"&travelmode=driving"))})).catch((function(e){return console.error(e)}))}),[]),l.a.createElement("div",{style:{height:"100%"}},null===r?l.a.createElement(ee,null):l.a.createElement("div",null,l.a.createElement("h1",null,"Jak m\u016f\u017eete Vy pomoci ostatn\xedm?"),"/>",l.a.createElement("div",{className:"wrapper",style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("div",{className:"description"},l.a.createElement("h1",null,r.request_topic),l.a.createElement("h4",null,r.request_details),l.a.createElement("p",null,r.request_description),l.a.createElement("p",null,r.requester_name?"Jm\xe9no = ".concat(r.requester_name):null),l.a.createElement("p",null,r.requester_email?"Email = ".concat(r.requester_email):null),l.a.createElement("p",null,r.requester_phone_number?"Telefonn\xed \u010d\xedslo = ".concat(r.requester_phone_number):null),l.a.createElement("p",null,r.requester_age?"V\u011bk = ".concat(r.requester_age):null),l.a.createElement("p",null,r.request_create_timestamp?"Den zadani = ".concat(new Date(r.request_create_timestamp).toLocaleDateString()):null)),l.a.createElement("div",{className:"map",style:{width:"80%"}},l.a.createElement($,{zoom:12,center:{lat:parseFloat(r.requester_address_lat),lng:parseFloat(r.requester_address_lng)},containerElement:l.a.createElement("div",{style:{height:"100%"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}}),helpRequests:[r],link:!1}),l.a.createElement("a",{href:s,target:"_blank"},l.a.createElement(P.a,{color:"primary",style:{width:"40%",marginLeft:"30%",marginTop:"30px"}},"Otev\u0159\xedt v navigaci"))))))};var ge=function(){return l.a.createElement(c.a,null,l.a.createElement(fe,null),l.a.createElement(m.a,{path:"/",exact:!0,component:ie}),l.a.createElement(m.a,{path:"/ineedhelp",component:A}),l.a.createElement(m.a,{path:"/iwanttohelp",component:ae}),l.a.createElement(m.a,{path:"/feedback",component:se}),l.a.createElement(m.a,{path:"/details/:request_id",component:_e}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[243,1,2]]]);
//# sourceMappingURL=main.65b300e1.chunk.js.map